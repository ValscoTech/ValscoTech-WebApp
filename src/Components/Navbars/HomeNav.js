import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../Assets/logo.png";

const HomeNav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Helmet>
        <title>Valsco Technology - Navigation</title>
      </Helmet>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="landing" className="navbar-logo">
            <img src={logo} alt="icon" className="navbar-icon" />
            <h1>VALSCO TECHNOLOGY</h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="products"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className={({ isActive }) =>
                  "nav-links " + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                to="/BlogHome"
                className={({ isActive }) =>
                  "nav-links " + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                to="contactuspage"
                className={({ isActive }) =>
                  "nav-links " + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
