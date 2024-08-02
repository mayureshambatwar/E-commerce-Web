import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length+1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem,seCartItem] =useState(getDefaultCart)
  const addToCart = (itemId)=>{
    seCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItem);
  }
  const removeCart = (itemId)=>{
    seCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const getTotalAmount = () => {
    let totalamount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalamount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalamount;
  };

  const getTotalCartItem = ()=>{
    let totalItem = 0;
    for(const item in cartItem){
      if (cartItem[item]>0) {
        totalItem += cartItem[item]
      }
    }
    return totalItem
  }
  const contextValue = {getTotalCartItem, getTotalAmount,all_product ,cartItem,addToCart,removeCart};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
