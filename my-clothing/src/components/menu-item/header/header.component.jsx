import React from "react";
import './header.style.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../assests/crown.svg'

const Header =()=>{
    return(
       <div className="header">
         <Link to="/">
            < Logo className="logo"/>
         </Link>
         <div className="options">
            <Link to="/shop" className="option">shop</Link>
            <Link to="/shop" className="option">contact</Link>
         </div>
       </div>
    )
}
export default Header;