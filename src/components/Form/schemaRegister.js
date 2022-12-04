import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("O campo Nome é obrigatório")
    .min(3, "O nome deve ter no minímo 3 letras"),
  email: yup.string().required("O campo e-mail é obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("O campo senha é obrigatório")
    .matches(/(?=.*?[A-Z])/, "A senha deve ter no minímo uma letra maiuscúla")
    .matches(/(?=.*?[a-z])/, "A senha deve ter no minímo uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "A senha deve ter no minímo um número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha deve ter no minímo um caractere espercial"
    )
    .min(8, "A senha deve ter no minímo 8 digitos"),
  ConfirmPassword: yup
    .string()
    .required("o campo de confirmação de senha é obrigatório")
    .oneOf(
      [yup.ref("password"), null],
      "digite exatamente a mesma senha para confirmar"
    ),
    bio: yup.string().required("O campo bio é obrigatório"),
    contact: yup.string().required("o campo contato é obrigatório"),
    course_module: yup.string().required("O campo selecionar módulo é obrigatório"),
});
