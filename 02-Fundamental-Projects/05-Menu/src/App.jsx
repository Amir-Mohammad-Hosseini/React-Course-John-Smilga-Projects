import { useState } from "react";
import Title from "./components/Title";
import MENU from "./data.js";
import Menu from "./components/Menu.jsx";
import Categories from "./components/Categories.jsx";
const allCategories = ["all", ...new Set(MENU.map((menu) => menu.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(MENU);
  const handleFilterMenuItemsByCategory = (category) => {
    setMenuItems(() => {
      if (category === "all") {
        return MENU;
      }
      const filteredItems = [...MENU].filter(
        (item) => item.category === category,
      );
      return filteredItems;
    });
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories
          categories={allCategories}
          onFilterItem={handleFilterMenuItemsByCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
