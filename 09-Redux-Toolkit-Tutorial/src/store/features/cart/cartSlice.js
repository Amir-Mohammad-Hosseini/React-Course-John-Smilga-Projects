import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "./../../../cartItems";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const response = await axios(url);
    return response?.data || [];
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseAmount: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === payload ? { ...item, amount: item.amount + 1 } : item,
      );
    },
    decreaseAmount: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === payload ? { ...item, amount: item.amount - 1 } : item,
      );
    },
    calcuateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems?.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calcuateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;

console.log(cartSlice);
