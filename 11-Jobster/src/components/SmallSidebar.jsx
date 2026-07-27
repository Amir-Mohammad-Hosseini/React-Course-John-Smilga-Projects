import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/features/ui/uiSlice";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.uiState);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar(!isSidebarOpen));
  };

  return (
    <Wrapper>
      <div
        className={`sidebar-container ${isSidebarOpen ? "show-sidebar" : ""}`}
      >
        <div className="content">
          <button className="close-btn" onClick={handleToggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks onToggleSidebar={handleToggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
