import React from "react";
import heroImg from "../../../Assets/ServicesPage_Assets/HeroImg_Ninja.png";
import { useNavigate } from "react-router-dom";
import { frontend_data } from "../ServicesDisplayPage/servicesData";

const ServicePageHero = () => {
  const navigate = useNavigate();
  return (
    <section className="service-hero">
      <div className="service-hero-content">
        <h1>
          From novice to Ninja:
          <br />
          Unleash you coding <br /> Prowess
        </h1>
        <p>
          with our accelerated <strong> web development </strong> bootcamp.
        </p>
        <button
          className="start-today-btn"
          onClick={() => {
            navigate("/RegisterCourse", { state: frontend_data });
          }}
        >
          Start Learning Today
        </button>
      </div>
      <div className="section-hero-img">
        <img src={heroImg} alt="Ninja" />
      </div>
    </section>
  );
};

export default ServicePageHero;
