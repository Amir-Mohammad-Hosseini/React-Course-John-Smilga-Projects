import { FaBars } from "react-icons/fa";
import Link from "../Link";
import Icon from "../Icon";
import NAVBAR_ICONS from "./navbarIcons";

import logo from "./../../../public/images/logo.svg";

const Navbar = ({ scrollToSection, sectionNames }) => {
  const handleClick = (name) => {
    const index = sectionNames.indexOf(name);
    if (index !== -1) scrollToSection(index);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {sectionNames.map((name) => (
            <Link
              key={name}
              name={name}
              className="nav-link"
              onScroll={handleClick}
            />
          ))}
        </ul>

        <ul className="nav-icons">
          {NAVBAR_ICONS.map((navbarIcon) => (
            <Icon key={navbarIcon.id} {...navbarIcon} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
