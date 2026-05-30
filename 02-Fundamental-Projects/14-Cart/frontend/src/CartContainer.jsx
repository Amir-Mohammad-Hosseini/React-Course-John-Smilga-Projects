import CartItem from "./CartItem";
import { useGlobalContext } from "./context/CartContext";
import { calculateTotalPrice } from "./utils/utils";
const CartContainer = () => {
  const { items : cartItems, clearCart } = useGlobalContext();

  const cartArray = Array.from(cartItems.entries());

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  const totalPrice = calculateTotalPrice(cartArray).toFixed(2);

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${totalPrice}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
