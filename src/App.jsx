import { ToastContainer } from "react-toastify";
import React from "react";
import { GlobalStyle } from "./styles/global";
import { RoutesMain as Routes } from "./routes";
import Providers from "./contexts/UserContext";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Providers>
        <Routes />
      </Providers>
    </>
  );
}

export default App;
