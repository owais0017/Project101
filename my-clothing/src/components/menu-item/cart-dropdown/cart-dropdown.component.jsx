import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.style.scss';
import CartItem from "../cart-item/cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToggleCart } from "../../../redux/cart.reducer";

const CartDropdown = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.Cart.cartItem)
  const onclickchange =()=>{
    dispatch(setToggleCart())
    navigate("/checkout");
  }
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartitem => (
            <CartItem key={cartitem.id} item={cartitem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton onClick={onclickchange} >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;
