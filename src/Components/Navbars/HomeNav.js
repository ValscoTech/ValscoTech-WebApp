import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../Assets/logo.png";
import "./Navbar.css";

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
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="icon" className="navbar-icon" />
            <h1>VALSCO TECHNOLOGY</h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink to =  "#products" className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}>
                  Products
                </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="#about"
                className={({ isActive }) =>
                  "nav-links " + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                About Us
              </HashLink>
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
              <HashLink
                to="#contactuspage"
                className={({ isActive }) =>
                  "nav-links " + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
