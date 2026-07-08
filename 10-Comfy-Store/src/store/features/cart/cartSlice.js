import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { DEFAULT_CART_STATE, getFromLocalStorage } from "../../../utils/utils";

const initialState = { ...getFromLocalStorage("cart") };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const { product } = payload;
      const foundedProduct = state.cartItems.find(
        (item) => item.cartID === product.cartID,
      );
      if (foundedProduct) {
        foundedProduct.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(DEFAULT_CART_STATE));
      return DEFAULT_CART_STATE;
    },
    removeItem: (state, { payload }) => {
      const cartId = payload.cartID;
      const foundedProduct = state.cartItems.find(
        (item) => item.cartID === cartId,
      );
      if (foundedProduct) {
        state.cartItems = state.cartItems.filter(
          (item) => item.cartID !== cartId,
        );
        state.numItemsInCart -= foundedProduct.amount;
        state.cartTotal -= foundedProduct.price * foundedProduct.amount;
        cartSlice.caseReducers.calculateTotals(state);

        toast.error("Item removed from cart");
      }
    },
    editItem: (state, { payload }) => {
      const { cartID, amount } = payload;
      const foundedProduct = state.cartItems.find(
        (item) => item.cartID === cartID,
      );
      if (foundedProduct) {
        state.numItemsInCart += amount - foundedProduct.amount;
        state.cartTotal +=
          foundedProduct.price * (amount - foundedProduct.amount);
        foundedProduct.amount = amount;
        cartSlice.caseReducers.calculateTotals(state);

        toast.success("Cart updated");
      }
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
