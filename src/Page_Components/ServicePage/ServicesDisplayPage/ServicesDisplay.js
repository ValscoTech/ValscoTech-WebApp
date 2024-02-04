import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDisplay.css";
import { services } from "./servicesData";
import Footer from "../../../Components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="services-container-body">
        <h1>Explore Courses</h1>
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          grabCursor={true}
          loop={true}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className=" courses-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="service-wrapper">
              <div className="service-card-img">
                <img src={service.imgLink} alt="" />
              </div>
              <div>{service.amount}</div>
              <div className="service-card-details">
                <h2>{service.title}</h2>
                <p className="service-card-content">{service.content}</p>
                <div className="service-nav-buttons">
                  <button
                    className="check_it"
                    onClick={() =>
                      navigate(`/Service`, { state: service })
                    }
                  >
                    Check it!
                  </button>
                  <button
                    className="register"
                    onClick={() =>
                      navigate(`/RegisterCourse`, { state: service })
                    }
                  >
                    Register
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default Services;
