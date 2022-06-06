import React, { useContext} from "react";

import style from "./product.component.css"
import { CartContext } from "../../../context/CartContext";
const Product = () => {
  // Note: this id should come from api

  const {productDetails,cartidDetails,increaseCount} = useContext(CartContext)

  const increaseCountData = () =>{
    increaseCount()
  }

  return (
    <div className={style.peroduct}>
      {productDetails.map((cart)=>{
       return <div data-cy={`product-${cart.id}`}>

        <h3 data-cy="product-name">{cart.name}</h3>
        <h6 data-cy="product-description">{cart.description}</h6>
        <button data-cy="product-add-item-to-cart-button" onClick={increaseCountData}>Add to Cart</button>
        <div>
          {cartidDetails.map((itemsData)=>{
           return <div key={itemsData.id}>
            <button data-cy="product-increment-cart-item-count-button" onClick={itemsData.count+1}>+</button>
            <span data-cy="product-count">{itemsData.count}</span>
            <button data-cy="product-decrement-cart-item-count-button" onClick={itemsData.count-1} >-</button>
            <button data-cy="product-remove-cart-item-button">REMOVE</button>
          </div>
          })}
          
        </div>
      </div>
      })}
    
    </div>
    
  )
};

export default Product;
