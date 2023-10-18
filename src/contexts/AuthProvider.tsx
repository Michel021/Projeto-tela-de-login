import { useState } from "react";
import { User } from "../types/User";
import { AuthContext } from "./Auth/AuthContext";
import { useApi } from "../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    // Declaramos o estado do usuário dentro do componente AuthProvider
    const [user, setUser] = useState<User | null>(null);
    
    // Utilizamos o hook useApi para obter a instância da API
    const api = useApi();

    // Função de login assíncrona que recebe email e senha
    const signin = async (email: string, password: string) => {
        try {
            // Chamamos a função de signin da API e aguardamos sua resposta
            const data = await api.signin(email, password);
            
            // Se a resposta da API incluir um usuário e um token, atualizamos o estado do usuário
            if (data.user && data.token) {
                setUser(data.user);
                return true; // Login bem-sucedido
            }
            
            return false; // Login falhou
        } catch (error) {
            // Tratamos qualquer erro que possa ocorrer durante o login
            console.error(error);
            return false; // Login falhou devido a um erro
        }
    }

    // Função de logout assíncrona
    const signout = async () => {
        try {
            // Chamamos a função de logout da API e aguardamos sua resposta
            await api.logout();
            
            // Quando o logout for bem-sucedido, definimos o estado do usuário como nulo
            setUser(null);
        } catch (error) {
            // Tratamos qualquer erro que possa ocorrer durante o logout
            console.error(error);
        }
    }

    // Este componente AuthProvider fornece um contexto de autenticação para os componentes filhos
    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}