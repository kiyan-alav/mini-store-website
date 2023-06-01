import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MenuContext } from "../../Contexts/MenuContext";
import "./Header.css";

export default function Header() {
  const ctx = useContext(MenuContext);

  return (
    <>
      {/* Start Header */}
      <header id="header">
        <div className="section-center">
          <article className="header-content">
            <h1 className="title">کالا مالا :)</h1>
            <section className="shop-btn">
              <Link to="/shopping-cart" className="shop-cart">
                مشاهده سبد خرید
              </Link>
            </section>
            <section className="menu-items">
              <button
                type="button"
                className="menu-btn"
                onClick={() => ctx.setNavbar(true)}
              >
                <FaBars />
              </button>
              <ul className="menu-links">
                <NavLink to="/">
                  <li className="menu-item">
                    <AiFillHome className="icon" />
                    خانه
                  </li>
                </NavLink>
                <NavLink to="/products">
                  <li className="menu-item">
                    <HiShoppingCart className="icon" />
                    محصولات
                  </li>
                </NavLink>
                {/* <NavLink to="/sign-up">
                  <li className="menu-item">
                    <FiUserPlus className="icon" />
                    ثبت نام
                  </li>
                </NavLink>
                <NavLink to="/sign-in">
                  <li className="menu-item">
                    <FaUser className="icon" />
                    ورود
                  </li>
                </NavLink> */}
                <NavLink to="/contact-us">
                  <li className="menu-item">
                    <BsFillTelephoneFill className="icon" />
                    تماس با ما
                  </li>
                </NavLink>
              </ul>
            </section>
          </article>
        </div>
      </header>
      {/* End Header */}
    </>
  );
}
