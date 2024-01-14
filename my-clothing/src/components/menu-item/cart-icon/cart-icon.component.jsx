import React from "react";
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon} from '../assests/shopping-bag.svg'
import { useDispatch, useSelector } from "react-redux";
import { setToggleCart } from "../../../redux/cart.reducer";

const CartIcon = () =>{
    const count = useSelector(state => state.Cart.cartItem)
    
    const dispatch = useDispatch();
    const handleToggle = () =>{
        dispatch(setToggleCart());
    }
    return(
    <div className="cart-icon" onClick={handleToggle}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{count.length}</span>
    </div>
)
    }
export default CartIcon;