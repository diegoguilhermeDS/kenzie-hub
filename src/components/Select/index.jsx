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
        <option value="m1">1° Módulo</option>
        <option value="m2">2° Módulo</option>
        <option value="m3">3° Módulo</option>
        <option value="m4">4° Módulo</option>
        <option value="m5">5° Módulo</option>
        <option value="m6">6° Módulo</option>
      </StyleSelect>
    </>
  );
};

export default Select;
