import React, { useContext, useRef, useState } from "react";
import "./navbar.css";
import logo from "../Components/Assets/logo.png";
import cart_icon from "../Components/Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import nav_dropdown from '../Components/Assets/nav_dropdown_icon.png'

const Navbar = () => {
    const [menu , setMenu] = useState("shop")
    const {getTotalCartItem} = useContext(ShopContext)
    const menuRef = useRef()
    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('visible');
      e.target.classList.toggle('open');
    };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        {/* <p>SHOPPER</p> */}
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="Dropdown Icon" />

      <ul ref={menuRef} className="nav-manu">
        <li onClick={()=>{setMenu('shop')}}>  <Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "shop" ?<hr />:<></>}</li>
        <li onClick={()=>{setMenu('mens')}}> <Link style={{textDecoration:'none'}} to='mens'>men</Link>{menu === "mens" ?<hr />:<></>}</li>
        <li onClick={()=>{setMenu('womens')}}> <Link style={{textDecoration:'none'}} to='women'>Women</Link>{menu === "womens" ?<hr />:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}> <Link style={{textDecoration:'none'}} to='kids'>Kids</Link>{menu === "kids" ?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'>  <button>Login</button></Link>
       <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
            {getTotalCartItem()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
