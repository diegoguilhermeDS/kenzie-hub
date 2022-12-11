import * as yup from "yup";

export const SchemaTech = yup.object().shape({
    title: yup
      .string()
      .required("O campo nome é obrigatório")
      .min(3, "O nome deve ter no minimo 3 caracteres"),
    status: yup.string().required("O campo selecionar módulo é obrigatório"),
  });