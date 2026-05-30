import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/SidebarContext";
import NavLinks from "./Navlinks";
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (event) => {
    if(!event.target.classList.contains("nav-link")){
      setPageId(null)
    }
  };
  return (
    <nav className="nav-center" onMouseOver={handleSubmenu}>
      <h3 className="logo">Strapi</h3>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
