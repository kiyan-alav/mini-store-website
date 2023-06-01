import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MenuContext } from "../../Contexts/MenuContext";
import "./Navbar.css";

export default function Navbar() {
  const ctx = useContext(MenuContext);

  return (
    <>
      {/* Start Navbar  */}
      <nav
        className="navbar"
        style={
          ctx.navbar
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-100%)" }
        }
      >
        <button type="button" className="close-btn">
          <FaTimes className="icon" onClick={() => ctx.setNavbar(false)} />
        </button>
        <ul className="nav-links">
          <NavLink to="/" onClick={() => ctx.setNavbar(false)}>
            <li className="nav-item">
              <AiFillHome className="icon" />
              خانه
            </li>
          </NavLink>
          <NavLink to="/products" onClick={() => ctx.setNavbar(false)}>
            <li className="nav-item">
              <HiShoppingCart className="icon" />
              محصولات
            </li>
          </NavLink>
          {/* <NavLink to="/sign-up" onClick={() => ctx.setNavbar(false)}>
            <li className="nav-item">
              <FiUserPlus className="icon" />
              ثبت نام
            </li>
          </NavLink>
          <NavLink to="/sign-in" onClick={() => ctx.setNavbar(false)}>
            <li className="nav-item">
              <FaUser className="icon" />
              ورود
            </li>
          </NavLink> */}
          <NavLink to="/contact-us" onClick={() => ctx.setNavbar(false)}>
            <li className="nav-item">
              <BsFillTelephoneFill className="icon" />
              تماس با ما
            </li>
          </NavLink>
        </ul>
      </nav>
      {/* End Navbar  */}
    </>
  );
}
