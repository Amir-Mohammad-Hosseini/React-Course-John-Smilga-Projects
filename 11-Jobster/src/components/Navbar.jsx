import Wrapper from "../assets/wrappers/Navbar";
import { FaHome } from "react-icons/fa";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import { toggleSidebar } from "../store/features/ui/uiSlice";
import { useState } from "react";
import { logoutUser } from "../store/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Navbar = () => {
  //useSelector
  const { user } = useSelector((state) => state.userState);
  const { isSidebarOpen } = useSelector((state) => state.uiState);

  //useDispatch
  const dispatch = useDispatch();

  //useState
  const [isLogoutShow, setIsLogoutShow] = useState(false);

  //useNavigate
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar(!isSidebarOpen));
  };

  const handleToggleDropdown = () => {
    console.log(isLogoutShow);
    setIsLogoutShow((prevStatus) => !prevStatus);
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      dispatch(logoutUser());
      setIsLogoutShow(false);
      navigate("/landing");
      toast.success("You logged out successfully!");
    }
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          type="button"
          onClick={handleToggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container" onClick={handleToggleDropdown}>
          <button className="btn" type="button">
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={`${isLogoutShow ? "show-dropdown" : ""} dropdown`}
            onClick={handleLogout}
          >
            <button type="button" className="dropdown-btn">
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
