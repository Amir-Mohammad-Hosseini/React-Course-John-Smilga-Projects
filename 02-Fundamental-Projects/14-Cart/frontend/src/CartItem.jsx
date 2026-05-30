import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context/CartContext";
const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext();

  const handleRemoveItem = () => {
    removeItem(id);
  };

  const handleIncreaseItem = () => {
    increaseItem(id);
  };
  const handleDecreaseItem = () => {
    decreaseItem(id, amount);
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={handleRemoveItem}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={handleIncreaseItem}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={handleDecreaseItem}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
