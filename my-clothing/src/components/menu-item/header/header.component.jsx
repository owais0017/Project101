import React from "react";
import {  useSelector } from "react-redux";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assests/crown.svg";
import { auth } from "../../../firebase/firebase.utils.js";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

const Header = () => {
  const currentUser = useSelector(state=>state.currentUser);
  const toggleCart = useSelector(state => state.Cart.toggleCart);
console.log("value" , toggleCart)
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          shop
        </Link>
        <Link to="/shop" className="option">
          contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={()=>auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon/>

      </div>
      {toggleCart ? <CartDropdown /> : null}
    </div>
  );
};

export default Header ;
