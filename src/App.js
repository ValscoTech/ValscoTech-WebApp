import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./Page_Components/Home/About/About";
import Alert from "./Components/Alerts/Alert";
import BlogPageBody from "./Page_Components/BlogPage/BlogPage";
import CreateBlogBody from "./Page_Components/CreateBlog/CreateBlog";
import Footer from "./Components/Footer/Footer";
import HeroImg from "./Page_Components/Home/HeroSections/HeroImg";
import HomeNav from "./Components/Navbars/HomeNav";
import Intro from "./Page_Components/Home/Introduction/Intro";
import { LoadingScreen } from "./Page_Components/Home/LoadingScreen/LoadingScreen";
import LoginBody from "./Page_Components/Login/Login";
import Products from "./Page_Components/Home/HeroSections/Products";
import ReadBlogsBody from "./Page_Components/ReadBlog/ReadBlog";
import Slider from "./Components/BlogSlider/Slider";
import PrivacyPageBody from "./Page_Components/PrivacyPage/Privacy";
import ServicePageBody from "./Page_Components/ServicePage/MainServicePage/MainServicePage";
import ServicesDisplayBody from "./Page_Components/ServicePage/ServicesDisplayPage/ServicesDisplay";
import UserNav from "./Components/Navbars/UserNav"; // Used for [Login page], [Create Blog Page] and [Read Blogs Page] only
// const axios = require('axios');
// General Components

// Home Page Components

// Login Page Component

// Create Blog Page Component

// Read Blogs Page Component

// Detailed Blog Page Component

// Privacy Page Component

// axios.defaults.baseURL = "https://valscobackendtest.onrender.com"
// axios.defaults.baseURL = "http://localhost:5000"
function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  const [alertMsg, setAlertMsg] = useState(localStorage.getItem("alertMsg"));
  const [alertColor, setAlertColor] = useState(
    localStorage.getItem("alertColor")
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingComplete(true);
    }, 4000);
  }, []);
  const homeNav = [
    { title: "Products", link: "products", type: "Link" },
    { title: "About Us", link: "about", type: "Link" },
    { title: "Blogs", link: "/BlogHome", type: "NavLink" },
    { title: "Courses", link: "/Courses", type: "NavLink" },
    { title: "Contact Us", link: "contactuspage", type: "Link" },
  ];

  const coursesNav = [
    { title: "Home", link: "/", type: "NavLink" },
    { title: "Blogs", link: "/BlogHome", type: "NavLink" },
    { title: "Contact Us", link: "contactuspage", type: "Link" },
  ];
  const serviceNav = [
    { title: "Home", link: "/", type: "NavLink" },
    { title: "Courses", link: "/Courses", type: "NavLink" },
    { title: "Contact Us", link: "contactuspage", type: "Link" },
    { title: "Register", link: "/", type: "NavLink" },
  ];

  const linksList = [homeNav, coursesNav, serviceNav];
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!isLoadingComplete ? (
                <LoadingScreen />
              ) : (
                <>
                  <HomeNav linksList={linksList[0]} />
                  <Intro />
                  <HeroImg />
                  <Products />
                  <Slider authenticated={authenticated} />
                  <About />
                  <Footer />
                </>
              )}
            </>
          }
        />

        <Route
          path="/PrivacyPage"
          element={
            <>
              <PrivacyPageBody />
            </>
          }
        />

        <Route
          path="/BlogHome"
          element={
            <>
              <UserNav
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <ReadBlogsBody
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/CreateBlog"
          element={
            <>
              <UserNav
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <CreateBlogBody
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <UserNav
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <LoginBody
                setAuthenticated={setAuthenticated}
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/BlogPage/:ID"
          element={
            <>
              <UserNav
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <BlogPageBody
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/Courses"
          element={
            <>
              <HomeNav linksList={linksList[1]} />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <ServicesDisplayBody
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
        <Route
          path="/Service"
          element={
            <>
              <HomeNav linksList={linksList[2]} />
              <Alert
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
              <ServicePageBody
                authenticated={authenticated}
                alertMsg={alertMsg}
                setAlertMsg={setAlertMsg}
                alertColor={alertColor}
                setAlertColor={setAlertColor}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
