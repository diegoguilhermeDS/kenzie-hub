import React from "react";
import Logo from "../Logo";
import { StyledContainer } from "../../styles/container";
import { StyledHeader } from "./style";
import Button from "../Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navegation = useNavigate();
  const handleLogout = () => {
    toast("😁 Obrigado por nos visitar", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
      autoClose: 2000,
    });

    localStorage.removeItem("@Token");
    navegation("/login");
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <div className="conatinerHeader">
          <Logo />
          <Button children={"Sair"} onclick={handleLogout} />
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
