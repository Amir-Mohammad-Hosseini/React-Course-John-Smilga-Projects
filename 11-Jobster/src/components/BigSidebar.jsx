import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const {isSidebarOpen} = useSelector((state) => state.uiState)

  const handleToggleSidebar = () => {
    
  }
  return (
    <Wrapper>
      <div className={isSidebarOpen ?  "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks onToggleSidebar={handleToggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
