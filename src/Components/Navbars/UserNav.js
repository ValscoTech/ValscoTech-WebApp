import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaBars, FaTimes } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase_Config/firebaseConfig";
import logo from "../../Assets/Company_Logo.png";
import "./Navbar.css";

const UserNav = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      props.setAuthenticated(false);
      localStorage.setItem(
        "alertMsg",
        "You have been successfully logged out!"
      );
      props.setAlertMsg("You have been successfully logged out!");
      localStorage.setItem("alertColor", "lightgreen");
      props.setAlertColor("lightgreen");
      navigate("/Login");
    });
  };
  return (
    <>
      <Helmet>
        <title>Valsco Technology - Navigation</title>
      </Helmet>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="icon" className="navbar-icon" />
            <h1>VALSCO TECHNOLOGY</h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      <div className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-links" + (isActive ? "activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/BlogHome"
            className={({ isActive }) =>
              "nav-links " + (isActive ? "activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Read Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/CreateBlog"
            className={({ isActive }) =>
              "nav-links " + (isActive ? "activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Create Blog
          </NavLink>
        </li>
        <li className="nav-item">
          {props.authenticated ? (
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                "nav-links " + (isActive ? "activated" : "")
              }
              onClick={handleSignOut}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                "nav-links " + (isActive ? "activated" : "")
              }
              onClick={closeMobileMenu}
            >
              Login
            </NavLink>
          )}
        </li>
      </div>
    </>
  );
};

export default UserNav;
