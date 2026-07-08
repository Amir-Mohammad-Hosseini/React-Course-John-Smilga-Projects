import { useState } from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cartState);
  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.cartID} {...item} />
      ))}
    </>
  );
};

export default CartItemsList;
