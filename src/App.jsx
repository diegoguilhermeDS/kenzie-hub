import { ToastContainer } from "react-toastify";
import React from "react";
import { GlobalStyle } from "./styles/global";
import { RoutesMain as Routes } from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
