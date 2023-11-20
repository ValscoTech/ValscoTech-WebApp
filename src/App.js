import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./Page_Components/Home/About/About";
import Alert from "./Components/Alerts/Alert";
import BlogPage_Body from "./Page_Components/BlogPage/BlogPage";
import CreateBlog_Body from "./Page_Components/CreateBlog/CreateBlog";
import Footer from "./Components/Footer/Footer";
import HeroImg from "./Page_Components/Home/HeroSections/HeroImg";
import HomeNav from "./Components/Navbars/HomeNav";
import Intro from "./Page_Components/Home/Introduction/Intro";
import { LoadingScreen } from "./Page_Components/Home/LoadingScreen/LoadingScreen";
import LoginBody from "./Page_Components/Login/Login";
import Products from "./Page_Components/Home/HeroSections/Products";
import ReadBlogs_Body from "./Page_Components/ReadBlog/ReadBlog";
import Slider from "./Components/BlogSlider/Slider";
import UserNav from "./Components/Navbars/UserNav"; // Used for [Login page], [Create Blog Page] and [Read Blogs Page] only

// General Components

// Home Page Components

// Login Page Component

// Create Blog Page Component

// Read Blogs Page Component

// Detailed Blog Page Component

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
                  <div>
                    <HomeNav />
                    <Intro />
                    <HeroImg />
                    <Products />
                    <Slider authenticated={authenticated} />
                    <About />
                    <Footer />
                  </div>
                </>
              )}
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
              <ReadBlogs_Body
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
              <CreateBlog_Body
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
              <BlogPage_Body
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
