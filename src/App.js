import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// General Components
import { LoadingScreen } from "./Page_Components/Home/LoadingScreen/LoadingScreen";
import Footer from "./Components/Footer/Footer";
import Alert from "./Components/Alerts/Alert";
import UserNav from "./Components/Navbars/UserNav"; // Used for [Login page], [Create Blog Page] and [Read Blogs Page] only

// Home Page Components
import HomeNav from "./Components/Navbars/HomeNav";
import Intro from "./Page_Components/Home/Introduction/Intro";
import HeroImg from "./Page_Components/Home/HeroSections/HeroImg";
import Products from "./Page_Components/Home/HeroSections/Products";
import Slider from "./Components/BlogSlider/Slider";
import About from "./Page_Components/Home/About/About";

// Login Page Component
import LoginBody from "./Page_Components/Login/Login";

// Create Blog Page Component
import CreateBlog_Body from "./Page_Components/CreateBlog/CreateBlog";

// Read Blogs Page Component
import ReadBlogs_Body from "./Page_Components/ReadBlog/ReadBlog";

// Detailed Blog Page Component
import BlogPage_Body from "./Page_Components/BlogPage/BlogPage";

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
