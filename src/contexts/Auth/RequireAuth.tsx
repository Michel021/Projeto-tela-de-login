import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Login } from "../../pages/Login";
import Cadastro from "../../pages/Cadastro";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return (
      <div>
        <Login />
        <Cadastro />
      </div>
    );
  }

  return children;
};
