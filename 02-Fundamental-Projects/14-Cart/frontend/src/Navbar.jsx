import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context/CartContext";
import { calculateTotalItems } from "./utils/utils";
const Navbar = () => {
  const { items : cartItems } = useGlobalContext();
    const cartArray = Array.from(cartItems.entries());
  const totalAmount = calculateTotalItems(cartArray);
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
