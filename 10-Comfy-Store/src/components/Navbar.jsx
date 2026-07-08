import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/features/user/userSlice";




const Navbar = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
  const theme = useSelector((state) => state.userState.theme)
  const dispatch = useDispatch()
  
  const handleChangeTheme = () => {
    dispatch(toggleTheme())
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>

          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-base-200 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* THEME SETUP */}

          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={theme ==="dracula"}
              onChange={handleChangeTheme}
            />
            {/* Sun */}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* Moon */}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>

          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
