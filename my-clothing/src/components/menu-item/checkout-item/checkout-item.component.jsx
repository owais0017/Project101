import React from "react";
import './checkout-item.style.scss'


const CheckoutItem = ({CartThing}) => {
    const {name, imageUrl , price, quantity} = CartThing
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img alt='item' src={imageUrl}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button"> {String.fromCharCode(10005)}</div>
    </div>
    )
}
export default CheckoutItem