import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {isAuth, login, logout} = useContext(AuthContext)

  const handleClick = () =>{
    if(isAuth){
      logout()
    }else{
      login("abc", "xyz")
    }
  }
  return (
    <div >
      <input data-cy="login-email" placeholder="Login"/>
      <input data-cy="login-password" placeholder="Password"/>
      <button data-cy="login-submit" onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
