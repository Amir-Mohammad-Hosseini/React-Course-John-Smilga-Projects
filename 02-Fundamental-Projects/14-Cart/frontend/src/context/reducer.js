import {
  CLEAR,
  DECREASE_ITEM,
  INCREASE_ITEM,
  REMOVE_ITEM,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    case CLEAR: {
      return { ...state, items: new Map() };
    }
    case REMOVE_ITEM: {
      const newCart = new Map(state.items);
      newCart.delete(action.payload);
      return { ...state, items: newCart };
    }
    case INCREASE_ITEM: {
      const newCart = new Map(state.items);
      const itemId = action.payload;
      const item = newCart.get(itemId);
      const newItem = { ...item, amount: item.amount + 1 };
      newCart.set(itemId, newItem);
      return { ...state, items: newCart };
    }
    case DECREASE_ITEM: {
      const itemAmount = action.payload.itemAmount;
      if (itemAmount > 1) {
        const newCart = new Map(state.items);
        const itemId = action.payload.itemId;
        const item = newCart.get(itemId);
        const newItem = { ...item, amount: item.amount - 1 };
        newCart.set(itemId, newItem);
        return { ...state, items: newCart };
      } else {
        const newCart = new Map(state.items);
        newCart.delete(action.payload.itemId);
        return { ...state, items: newCart };
      }
    }
    case LOADING: {
      return { ...state, loading: true };
    }
    case DISPLAY_ITEMS: {
      const newCart = new Map(
        action.payload.cart.map((item) => [item.id, item]),
      );
      return { ...state, loading: false, items: newCart };
    }
  }
  return state;
};
export default cartReducer;
