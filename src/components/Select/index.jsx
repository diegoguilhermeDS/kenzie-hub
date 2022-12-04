import React from "react";
import { useState } from "react";
import { StyleLabelSelect, StyleSelect } from "./style";

const Select = ({ register }) => {
  const [valueSelect, setValueSelect] = useState("");
  return (
    <>
      <StyleLabelSelect htmlFor="select">Selecionar módulo</StyleLabelSelect>
      <StyleSelect
        value={valueSelect}
        {...register("course_module")}
        id="select"
        onChange={(e) => setValueSelect(e.target.value)}
        colorSelect={valueSelect}
      >
        <option value="">Escolha um módulo</option>
        <option value="1° módulo (introdução ao Frontend)">1° Módulo</option>
        <option value="2° módulo (Frontend Avançado)">2° Módulo</option>
        <option value="3° módulo (Frontend Avançado React)">3° Módulo</option>
        <option value="4° módulo (Introdução ao Backend)">4° Módulo</option>
        <option value="5° módulo (Backend intermediário)">5° Módulo</option>
        <option value="6° módulo (Backend Avançado)">6° Módulo</option>
      </StyleSelect>
    </>
  );
};

export default Select;
