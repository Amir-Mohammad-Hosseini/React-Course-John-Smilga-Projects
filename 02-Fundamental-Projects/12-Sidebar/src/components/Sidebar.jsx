import { useGlobalContext } from "../context/sidebarContext";
import logo from "./../logo.svg";
import { social, links } from "./../data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen && "show-sidebar"} sidebar`}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
