import { createContext, useState } from "react";
import { api } from "../services/api";
import { notify } from "../components/Toast";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { techs , setTechs } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentTechEdit, setCurrentTechEdit] = useState({});


  const handleShowModal = (type, id) => {
    setAnimationModal(true)
    setShowModal(!showModal);
    setTypeModal(type);
    if (id !== undefined) {
      setCurrentTechEdit(techs.find(tec => tec.id === id))
    }

  };

  const handleCloseModal = () => {
    setAnimationModal(false)
    setTimeout(() => {
        setShowModal(false)
    }, 900)
  }

  const handleCreateTech = async (data) => {
    let status = ''
    try {
      setLoading(true)
      const response = await api.post("/users/techs", data)
      status = response.status

      if (response.status === 201) {
        notify("Tecnologia criada com sucesso!", "sucess");
        const techUpdate = await api.get("/profile")
        setTechs(techUpdate.data.techs)
      }
    } catch (error) {
      notify("Ops! houve um problema ao criar a tecnologia. :(");
    } finally {
        setLoading(false)
        if (status === 201) {
          setTimeout(() => {
            handleCloseModal()
          }, 2000)
        }
    }
  }

  const handleDeleteTech = async (id) => {
    let status = ''
    try {
      setLoading(true)
      const response = await api.delete(`/users/techs/${id}`)

      status = response.status

      if (response.status === 204) {
        notify("Tecnologia deletada com sucesso!", "sucess");
        const techUpdate = await api.get("/profile")
        setTechs(techUpdate.data.techs)
      }
    } catch (error) {
      notify("Ops! houve um problema ao deletar a tecnologia. :(");
    } finally {
      setLoading(false)
      if (status === 204) {
        setTimeout(() => {
          handleCloseModal()
        }, 2000)
      }
    }
  }

  const handleEditTech = async (data) => {
    const body = {}
    if (currentTechEdit.status !== data.status) {
      body["status"] = data.status
    } else {
      return notify("Você só pode atualizar os status")
    }

    let status = ''
    try {
      setLoading(true)
      const response = await api.put(`/users/techs/${currentTechEdit.id}`, body)
      status = response.status

      if (response.status === 201) {
        notify("Tecnologia editada com sucesso!", "sucess");
        const techUpdate = await api.get("/profile")
        setTechs(techUpdate.data.techs)
      }
    } catch (error) {
      notify("Ops! houve um problema ao editar a tecnologia. :(");
    } finally {
        setLoading(false)
        if (status === 201) {
          setTimeout(() => {
            handleCloseModal()
          }, 2000)
        }
    }
  }

  return (
    <TechContext.Provider
      value={{ showModal, typeModal, handleShowModal, handleCloseModal, animationModal, handleCreateTech, loading, currentTechEdit, handleDeleteTech, handleEditTech }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
