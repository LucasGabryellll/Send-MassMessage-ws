import React, { useEffect, useState, createContext } from "react";

import { auth } from "../credentials";

type UserContextProps = {
  children: React.ReactNode
}

export type tokenContext = {
  token: string
}

type UserContextType = {
  singInContext: (username: string, password: string) => void
  token: tokenContext | null,
  logout: () => void,
  isLogged: boolean
}

export const AuthContext = createContext<UserContextType | null>(null);

function AuthProvider({ children }: UserContextProps) {
  const [token, setToken] = useState<tokenContext | null>(null);

  function singInContext(username: string, password: string) {
    if (username !== "" && password !== "") {
      if (username === auth.USERNAME && password === auth.PASSWORD) {
        setToken({ token: "token-auth-message" });

        localStorage.setItem("token", JSON.stringify({ token: "token-auth-message" }));

      } else {
        return alert("Login ou senha inválidos");
      }
    } else {
      alert("Campos de usuário e senha não podem ser vazios");
    }
  }

  useEffect(() => {
    const recoveredToken = localStorage.getItem("token");

    if (recoveredToken) {
      setToken(JSON.parse(recoveredToken));

    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{
      singInContext,
      token,
      logout,
      isLogged: !!token
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;