import React, { useState } from "react";
import "./MainServicePage.css";
import { IoCloseSharp } from "react-icons/io5";
import heroImg from "../../../Assets/ServicesPage_Assets/HeroImg_Ninja.png";
import { useLocation } from "react-router";
import Footer from "../../../Components/Footer/Footer";
import { offeredService, faqs } from "./serviceData";
const MainServicePage = () => {
  const service_steps = useLocation().state;
  const [clicked, setClicked] = useState(false);
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    studyField: "",
    city: "",
    birthday: "",
    nationality: "",
    credibility: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const closeBtn = () => {
    setDetails({
      fname: "",
      lname: "",
      email: "",
      studyField: "",
      city: "",
      birthday: "",
      nationality: "",
      credibility: "",
    });
    setClicked(!clicked);
  };
  return (
    <>
      <div className="service-main-body">
        {clicked ? (
          <secction className="course-register-form">
            <h2>Welcome</h2>
            <p>
              Fill in your correct and UP-TO-DATE details so that we may contact
              you via email on further process
            </p>
            <form onSubmit={handleSubmit}>
              <div className="Std-Name">
                <div className="input-container">
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Your name"
                    value={details.fname}
                    onChange={(e) =>
                      setDetails((prev) => {
                        return { ...prev, fname: e.target.value };
                      })
                    }
                  />
                  <label htmlFor="fname">
                    First Name <span>*</span>
                  </label>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Your last name"
                    value={details.lname}
                    onChange={(e) =>
                      setDetails((prev) => {
                        return { ...prev, lname: e.target.value };
                      })
                    }
                  />
                  <label htmlFor="lname">
                    Last Name <span>*</span>
                  </label>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="yourmail@gmail.com"
                  value={details.email}
                  onChange={(e) =>
                    setDetails((prev) => {
                      return { ...prev, email: e.target.value };
                    })
                  }
                />
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="studyField"
                  id="studyField"
                  value={details.studyField}
                  onChange={(e) =>
                    setDetails((prev) => {
                      return { ...prev, studyField: e.target.value };
                    })
                  }
                />
                <label htmlFor="studyField">
                  Field of Study <span>*</span>
                </label>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Select city"
                  value={details.city}
                  onChange={(e) =>
                    setDetails((prev) => {
                      return { ...prev, city: e.target.value };
                    })
                  }
                />
                <label htmlFor="city">
                  City <span>*</span>
                </label>
              </div>
              <div className="input-container">
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  value={details.birthday}
                  onChange={(e) =>
                    setDetails((prev) => {
                      return { ...prev, birthday: e.target.value };
                    })
                  }
                />
                <label htmlFor="birthday">
                  Birthday<span>*</span>
                </label>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  placeholder="Your Nationality"
                  value={details.nationality}
                  onChange={(e) =>
                    setDetails((prev) => {
                      return { ...prev, nationality: e.target.value };
                    })
                  }
                />
                <label htmlFor="nationality">
                  Last Name <span>*</span>
                </label>
              </div>
              <div className="input-container condition-check">
                <input
                  type="checkbox"
                  name="credibility"
                  id="credibility"
                  value={details.credibility}
                  onChange={(e) =>
                    setDetails((prev) => {
                      return { ...prev, credibility: e.target.value };
                    })
                  }
                />
                <label htmlFor="credibility">
                  I vouch that all the information i have filled above is
                  completely true and Proceed to Payment
                </label>
              </div>
              <button type="submit">Enter</button>
            </form>
            <IoCloseSharp
              className="form-closeBtn"
              onClick={() => {
                closeBtn();
              }}
            />
          </secction>
        ) : (
          <section className="service-hero">
            <div className="service-hero-content">
              <h1>
                From novice to Ninja:
                <br />
                Unleash you coding <br /> Prowess
              </h1>
              <p>
                with our accelerated <strong> web development </strong>{" "}
                bootcamp.
              </p>
              <button
                className="start-today-btn"
                onClick={() => {
                  setClicked(!clicked);
                }}
              >
                Start Learning Today
              </button>
            </div>
            <div className="section-hero-img">
              <img src={heroImg} alt="Ninja" />
            </div>
          </section>
        )}
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
          <button
            className="to_enroll"
            onClick={() => {
              setClicked(!clicked);
              window.scrollTo(0, 0);
            }}
          >
            <h2>Learn to Develop Great Websites</h2>
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
          <button
            className="to_enroll"
            style={{ margin: "3rem 0" }}
            onClick={() => {
              setClicked(!clicked);
              window.scrollTo(0, 0);
            }}
          >
            <h2>Learn to Develop Great Websites</h2>
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
