import React from "react";
import { Helmet } from "react-helmet-async";
import AB_DP from "../../../Assets/Profile_Imgs/Ayan.jpeg";
import SA_DP from "../../../Assets/Profile_Imgs/Sanidhya.jpeg";
import SJ_DP from "../../../Assets/Profile_Imgs/Srishti.jpeg";
import About_Dummy from "../../../Assets/HomePage_Assets/About_dummy.jpeg";
import "./About.css";
import "react-phone-number-input/style.css";

const About = () => {
  return (
    <>
      <Helmet>
        <title>VALSCO</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <section id="about">
        <h2>Who we are</h2>
        <div className="moto-details">
          <img src={About_Dummy} alt="About us banner" className="moto-img" />
          <div className="moto-desc">
            <h3>Our People Come First</h3>
            <p className="lg_scr">
              Valsco specializes in developing custom software solutions that
              are tailored to meet the unique needs of the clients. We
              understand that investing in software solutions is a big decision
              for any business. That is why we offer a comprehensive range of
              services that go beyond just software development. Our consulting,
              training, and support services are designed to ensure that our
              clients can get the most out of their needs and visions. Valsco
              focuses on innovation and development.
              <hr />
              This involves constantly exploring new technologies, methods, and
              processes to create software solutions that are more efficient,
              effective, and user-friendly. In addition to innovation, we as a
              company also focus on improving its products, processes, and
              services. This involves regularly evaluating the effectiveness of
              existing solutions and identifying areas for improvement.
              <hr />
              Continuous improvement ensures that our company is always of the
              highest quality and offers maximum value to customers. Our team of
              experienced developers, designers, and project managers work
              closely with our clients to ensure that their software solutions
              are not only user-friendly, but also efficient and effective.
            </p>
            <p className="mb_scr">
              At Valsco , we specialize in crafting custom software solutions
              tailored to our clients' unique needs. Our services extend beyond
              development ,encompassing consulting, training, and support to
              ensure our clients achieve their visions. Innovation is our
              hallmark, as we continuously explore new technologies to create
              efficient, user-friendly solutions. With a team of experienced
              developers, designers, and project managers, we excel in website
              development, mobile applications, personalized software, and more.
              Our commitment to improvement guarantees high-quality solutions
              that deliver maximum value.
            </p>
          </div>
        </div>
      </section>
      <section className="members">
        <div className="member-card">
          <div className="member-img">
            <img src={AB_DP} className="member-dp" alt="y" />
          </div>
          <div className="member-desc">
            <h4>Ayan Bhowal</h4>
            <h5>Co-founder</h5>
            <p>
              Ayan Bhowal is our approachable, dependable, and vastly talented
              Director. With his composed and collected demeanor and persistent
              drive, Valsco is positioned to prosper and thrive.
            </p>
          </div>
        </div>
        <div className="member-card">
          <div className="member-img">
            <img src={SA_DP} className="member-dp" alt="y" />
          </div>
          <div className="member-desc">
            <h4>Sanidhya Agarwal</h4>
            <h5>Founder</h5>
            <p>
              Sanidhya Agarwal, our Managing Director, has amazing leadership
              qualities and a very advanced and holistic vision for Valsco. With
              his keen eye for detall and strive for perfection.
            </p>
          </div>
        </div>
        <div className="member-card">
          <div className="member-img">
            <img src={SJ_DP} className="member-dp" alt="y" />
          </div>
          <div className="member-desc">
            <h4>Srishti Jain</h4>
            <h5>Co-Founder</h5>
            <p>
              Srishti Jain, our Director, is dependable, resourceful and always
              ready to take up challenges. With an amazing team spirit, she
              brings to the Valsco table amazing skills and proficiency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
