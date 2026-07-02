import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  removeItem,
} from "../store/features/cart/cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };
  const handleIncreaseItem = () => {
    dispatch(increaseAmount(id));
  };
  const handleDecreaseItem = () => {
    if (amount === 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(decreaseAmount(id));
    }
  };
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={handleRemoveItem} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncreaseItem}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={handleDecreaseItem} className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
