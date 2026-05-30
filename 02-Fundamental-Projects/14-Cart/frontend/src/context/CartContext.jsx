import { createContext, useContext, useEffect, useReducer } from "react";
import {
  CLEAR,
  DECREASE_ITEM,
  INCREASE_ITEM,
  REMOVE_ITEM,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import cartReducer from "./reducer";

const url = "http://localhost:5000/api/cart";

const CartContext = createContext();



const initialState = {
  loading: false,
  items: new Map(),
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR });
  };

  const removeItem = (itemId) => {
    dispatch({ type: REMOVE_ITEM, payload: itemId });
  };
  const increaseItem = (itemId) => {
    dispatch({ type: INCREASE_ITEM, payload: itemId });
  };
  const decreaseItem = (itemId, itemAmount) => {
    dispatch({ type: DECREASE_ITEM, payload: { itemId, itemAmount } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const cartCtxValue = {
    ...cart,
    clearCart,
    removeItem,
    increaseItem,
    decreaseItem,
  };
  return (
    <CartContext.Provider value={cartCtxValue}>{children}</CartContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(CartContext);
};
