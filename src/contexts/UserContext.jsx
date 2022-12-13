import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/Toast";
import { api } from "../services/api";
import TechProvider from "./TechContext";

export const UserContext = createContext({});

const Providers = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [userCurrent, setUserCurrent] = useState(null);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@Token");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUserCurrent(data);
          setTechs(data.techs);
        } catch (error) {
          localStorage.removeItem("@Token");
        }
      }

      setLoadingPage(false);
    }

    loadUser();
  }, []);

  const navigate = useNavigate();

  const onSubmitLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      if (response.status === 200) {
        notify("Login efetuado com sucesso!", "sucess");

        const { token, user } = response.data;

        setUserCurrent(user);
        setTechs(user.techs);
        localStorage.setItem("@Token", token);
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        navigate("/dashboard");
      }
    } catch (err) {
      notify("E-mail ou Senha estão incorreto");
    } finally {
      setLoading(false);
    }
  };

  const onSubmitRegister = async (data) => {
    try {
      delete data.ConfirmPassword;

      setLoading(true);

      const response = await api.post("/users", data);

      if (response.status === 201) {
        notify("Cadastro feito com sucesso!", "sucess");
        navigate("/login");
      }
    } catch (error) {
      if (error.response.status === 404) {
        notify("Erro no servidor!");
      } else {
        notify("E-mail já existente");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        onSubmitLogin,
        onSubmitRegister,
        userCurrent,
        loadingPage,
        techs,
        setTechs,
      }}
    >
      <TechProvider>{children}</TechProvider>
    </UserContext.Provider>
  );
};

export default Providers;
