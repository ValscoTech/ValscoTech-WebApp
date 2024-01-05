import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../Assets/Company_Logo.png";

const HomeNav = ({ linksList }) => {
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
          <div className="nav-menu">
            {linksList.map((navItem, index) => (
              <li className="nav-item" key={index}>
                {navItem.type === "Link" ? (
                  <Link
                    to={navItem.link}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {navItem.title}
                  </Link>
                ) : (
                  <NavLink
                    to={navItem.link}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {navItem.title}
                  </NavLink>
                )}
              </li>
            ))}
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      <div className={click ? "mob-nav nav-menu active" : "mob-nav nav-menu"}>
        {linksList.map((navItem, index) => (
          <li className="nav-item" key={index}>
            {navItem.type === "Link" ? (
              <Link
                to={navItem.link}
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                {navItem.title}
              </Link>
            ) : (
              <NavLink
                to={navItem.link}
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                {navItem.title}
              </NavLink>
            )}
          </li>
        ))}
      </div>
    </>
  );
};

export default HomeNav;
