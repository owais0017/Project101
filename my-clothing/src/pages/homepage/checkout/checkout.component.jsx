import React from "react";
import './checkout.styles.scss'
import { useSelector } from "react-redux";
import CheckoutItem from "../../../components/menu-item/checkout-item/checkout-item.component";
const CheckoutPage = () => {
    const CartThings = useSelector(state => state.Cart.cartItem)
    
        const totalCost = CartThings.reduce((accumulator, currentItem) => {
            const { price, quantity } = currentItem;
            const itemCost = price * quantity;
            return accumulator + itemCost;
          }, 0)
    
    return (
      <div className="checkout-page">
        <div className="checkout-header">
        <div className="header-block">
           <span>Product</span>
        </div>
        <div className="header-block">
           <span>Desciption</span>
        </div>
        <div className="header-block">
           <span>Quantity</span>
        </div>
        <div className="header-block">
           <span>Price</span>
        </div>
        <div className="header-block">
           <span>Remove</span>
        </div>
        </div>
        {
         CartThings.map(CartThing => (<CheckoutItem key={CartThing.id} CartThing={CartThing} />))
        } 
            <div className="total">Total: ${totalCost}</div>
        
      </div>
    );
  };
  
  export default CheckoutPage;