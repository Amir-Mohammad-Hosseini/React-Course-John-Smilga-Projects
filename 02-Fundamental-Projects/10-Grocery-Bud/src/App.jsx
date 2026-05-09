import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { toast, ToastContainer } from "react-toastify";

const setToLocalStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};
const getFromLocalStorage = (key) => {
  const savedItems = localStorage.getItem(key);
  return savedItems ? JSON.parse(savedItems) : [];
};

const App = () => {
  const [items, setItems] = useState(getFromLocalStorage("groceryItems"));
  const handleAddItem = (newItemDatas) => {
    setItems((preItems) => [...preItems, { ...newItemDatas, id: nanoid() }]);
    toast.success("Item added to the list")
  };
  const handleEditItem = (itemId) => {
    const updatedItems = [...items].map((item) =>
      item.id === itemId ? { ...item, purchased: !item.purchased } : item,
  );
  setItems(updatedItems);
  setToLocalStorage("groceryItems", updatedItems);
};
const handleRemoveItem = (itemId) => {
  const unRemovedItems = [...items].filter((item) => item.id !== itemId);
  setItems(unRemovedItems);
  setToLocalStorage("groceryItems", unRemovedItems);
  toast.success("Item removed from the list")
  };
  return (
    <section className="section-center">
      <Form onAddItem={handleAddItem} />
      <Items
        items={items}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
      />
      <ToastContainer />
    </section>
  );
};

export default App;
