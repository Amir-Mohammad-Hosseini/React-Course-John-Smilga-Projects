import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../store/features/cart/cartSlice";
import { openModal } from "../store/features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems?.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleOpenModal}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
