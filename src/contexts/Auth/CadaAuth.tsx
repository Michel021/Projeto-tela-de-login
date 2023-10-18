import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Cadastro from "../../pages/Cadastro";

export const RequireAuth = ({ children}: { children: JSX.Element }) =>{
    const auth = useContext(AuthContext);
   
    if(!auth.user) {
        return <Cadastro />;
    }

    return children;
}