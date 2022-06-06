import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.component.css"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
const Navbar = () => {

  const {isAuth,login,logout} = useContext(AuthContext)
  const {count} = useContext(CartContext)
  const handleClick = () =>{
    if(isAuth){
      logout();
    }else{
      login("abc","xyz")
    }
  }
  return (
    <div data-cy="navbar" >
      <div className={style.navbarcss} >
      <div>
        <Link data-cy="navbar-home-link" to="/">Logo</Link>
      </div>
      <div>
        <span data-cy="navbar-cart-items-count">Cart: {count}</span>
        <button data-cy="navbar-login-logout-button" onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
