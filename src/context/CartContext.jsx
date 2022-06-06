import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [count, setcount] = useState(0)

  const [productDetails, setproductDetails] = useState([])
  useEffect(()=>{
    const getproducts = async()=>{
      let productData = await axios.get("http://localhost:8080/products");
      
      setproductDetails(productData.data)
      
    }
    getproducts()
  },[]);
  
  const [cartidDetails, setcartidDetails] = useState([])
  useEffect(()=>{
    const getitems = async()=>{
      let cartItems = await axios.get(" http://localhost:8080/cartItems");
      
      setcartidDetails(cartItems.data)
      
    }
    getitems()
  },[]);

  const increaseCount = () =>{
    setcount(count+1)
  }
  return <CartContext.Provider value={{productDetails,cartidDetails,increaseCount, count}}>{children}</CartContext.Provider>;
};
