import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.style.scss';
import CartItem  from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector(state=>state.Cart.cartItem)
  return(
  <div className='cart-dropdown'>
    <div className='cart-items' >
      {
        cartItems.map(cartitem=>(
          <CartItem key={cartitem.id} item = {cartitem}/>
        ))
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>

);
  }

export default CartDropdown;
