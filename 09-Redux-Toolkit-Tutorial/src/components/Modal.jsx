import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/features/modal/modalSlice";
import { clearCart } from "../store/features/cart/cartSlice";

const Modal = () => {
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
        handleCloseModal()
    }

    const handleCloseModal  = () => {
        dispatch(closeModal())
    }
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" type="button" onClick={handleClearCart}>
            confirm
          </button>
          <button className="btn clear-btn" type="button" onClick={handleCloseModal}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
