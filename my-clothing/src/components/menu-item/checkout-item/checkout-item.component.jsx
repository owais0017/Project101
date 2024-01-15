import React from "react";
import "./checkout-item.style.scss";
import { clearCartItem } from "../../../redux/cart.reducer";
import { useDispatch } from "react-redux";


const CheckoutItem = ({ CartThing }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = CartThing;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
   
        <div className="value">{quantity}</div>

      
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearCartItem(CartThing))}
      >
        {" "}
        {String.fromCharCode(10005)}
      </div>
    </div>
  );
};
export default CheckoutItem;
