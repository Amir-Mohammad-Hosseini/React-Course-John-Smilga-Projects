export const DEFAULT_CART_STATE = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};


export const getFromLocalStorage = (key) => {
  const savedItem = localStorage.getItem(key);
  if (savedItem) {
    return JSON.parse(savedItem);
  } else {
    return DEFAULT_CART_STATE
  }
};
