export const calculateTotalItems = (items) => {
  return items.reduce((acc, [, { amount }]) => {
    return acc + amount;
  }, 0);
};

export const calculateTotalPrice = (items) => {
  return items.reduce((acc, [, { amount, price }]) => {
    return acc + amount * price;
  }, 0);
};
