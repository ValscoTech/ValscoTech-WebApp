import React from "react";
import { Helmet } from "react-helmet-async";
import "./Intro.css";
import logo from "../../../Assets/HomePage_Assets/CompanyImg.png";

function Intro() {
  return (
    <>
      <Helmet>
        <title>Loading - Valsco</title>
        <meta
          name="description"
          content="Experience the loading animation of VALSCO before exploring our innovative software solutions. Stay tuned for exciting content!"
        />
        <link rel="canonical" href="/loading" />
      </Helmet>
      <section className="landing_wrapper">
        <div className="landing_img">
          <img src={logo} id="logo" alt="Valsco" />
        </div>
        <div className="landing_desc">
          <h1>Valsco</h1>
          <p>
            Our company provides software products and services to businesses
            individuals to help them meet their software needs. We strive to
            specialize in developing software solutions tailored to the unique
            needs of our clients.
          </p>
        </div>
      </section>
    </>
  );
}

export default Intro;
