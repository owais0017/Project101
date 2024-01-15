import React from "react";
import './collection-item.style.scss';
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../../redux/cart.reducer";

const CollectionItem = ({item}) => {

  const {name,price,imageUrl} = item;
  const dispatch = useDispatch();
  return(
  <div className="collection-item" >
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <CustomButton onClick={()=>dispatch(setCartItem(item))} inverted> ADD TO CART </CustomButton>
  </div>
  )
};


export default CollectionItem;
