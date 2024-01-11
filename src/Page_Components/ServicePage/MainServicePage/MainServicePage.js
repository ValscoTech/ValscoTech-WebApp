import React from "react";
import "./MainServicePage.css";
import heroImg from "../../../Assets/ServicesPage_Assets/HeroImg_Ninja.png";
import { useLocation } from "react-router";
import Footer from "../../../Components/Footer/Footer";
import { offeredService, faqs } from "./serviceData";
const MainServicePage = () => {
  const service_steps = useLocation().state;
  console.log(service_steps);

  return (
    <>
      <div className="service-main-body">
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
            <button className="start-today-btn" onClick={() => {}}>
              Start Learning Today
            </button>
          </div>
          <div className="section-hero-img">
            <img src={heroImg} alt="Ninja" />
          </div>
        </section>
        <section className="about-service">
          {service_steps.map((step, i) => (
            <div
              key={i}
              className={`about-service-steps ${i % 2 === 0 ? `even` : `odd`}`}
            >
              <div className="steps-image">
                <img src={step.img} alt={step.title} />
              </div>
              <div className="steps-details">
                <h2 style={{ color: step.color }}>{step.title}</h2>
                <ul>
                  {step.points.map((point, index) => (
                    <li key={index} style={{ color: step.color }}>
                      <span class="arrow" style={{ color: step.color }}>
                        &rarr;
                      </span>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
        <section className="service-offers">
          <button className="to_enroll">
            <h2>Learn to Develop Great Websites Pay Rs 99</h2>
          </button>
          <div className="promting-offers">
            {offeredService.map((off, index) => (
              <div className="offer-div" key={index}>
                <img src={off.img} alt=" " />
                <h4>{off.title}</h4>
                <p>{off.para}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="FAQ">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <details className="question" key={index}>
              <summary>{faq.ques}</summary>
              <p>{faq.ans}</p>
            </details>
          ))}
        </section>
        <section className="offer-timer">
          <h3>Time is Running Out, Grab You Spot</h3>
          <div className="time">02: 59: 59</div>
          <button className="to_enroll" style={{ margin: "3rem 0" }}>
            <h2>Learn to Develop Great Websites Pay Rs 99</h2>
          </button>
          <p className="offer-notice">
            Once the timer hits zero, pricing will be increased to 899.00/-
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MainServicePage;
