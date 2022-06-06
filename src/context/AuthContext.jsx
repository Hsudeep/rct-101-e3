import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth, setisAuth] = useState(false)
  const navigate = useNavigate();
  const login =( user, pass) =>{
    if(user && pass){
      setisAuth(true);
      navigate("/products")
    }
  
  }
  const logout = () =>{
    setisAuth(false);
    navigate("/")
  }

  return <AuthContext.Provider value={{isAuth, login, logout}}> {children}</AuthContext.Provider>;
};
