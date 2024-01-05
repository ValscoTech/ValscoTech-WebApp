import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDisplay.css";
import { services } from "./servicesData";
import Footer from "../../../Components/Footer/Footer";
const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="services-container-body">
        <h1>Explore Courses</h1>
        <div className="services-swiper">
          {services.map((service, index) => (
            <div key={index} className="service-wrapper">
              <div className="service-card-img">
                <img src={service.imgLink} alt="" />
              </div>
              <div className="service-card-details">
                <h2>{service.title}</h2>
                <p className="service-card-content">{service.content}</p>
                <div className="service-nav-buttons">
                  <button
                    className="check_it"
                    onClick={() =>
                      navigate(`/Service`, { state: service.data })
                    }
                  >
                    Check it!
                  </button>
                  <button className="register" onClick={() => navigate(`/`)}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
