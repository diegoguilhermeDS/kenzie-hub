import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .required("O campo e-mail é obrigatório")
      .email("E-mail inválido"),
    password: yup.string().required("O campo senha é obrigatório"),
  });