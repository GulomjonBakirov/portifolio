import React from "react";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        {" "}
        about <span>me</span>{" "}
      </h1>

      <div className="row">
        <div className="image">
          <Tilt>
            <img className="tilt" src="images/about-pic1.jpg" alt="" />
          </Tilt>
        </div>

        <div className="content">
          <h3>
            {" "}
            my name is <span> G'ulomjon Bakirov </span>{" "}
          </h3>
          <p className="info">
            I am Full Stack JavaScript Developer. I am from Uzbekistan. I am
            Student in TUIT (Tashkent University of Information Technologies)
            <br />
            &#x2615; Fun fact:{" "}
            <i style={{ textTransform: "none" }}>
              Any friend of coffe is a friend of mine!
            </i>
          </p>
          <div className="box-container">
            <div className="box">
              <p>
                {" "}
                <span> age: </span> 20{" "}
              </p>
              <p>
                {" "}
                <span> gender: </span> male{" "}
              </p>
              <p>
                {" "}
                <span> experience : </span> 2 years{" "}
              </p>
              <p>
                {" "}
                <span> freelance : </span> available{" "}
              </p>
            </div>
            <div className="box">
              <p>
                {" "}
                <span> language : </span> Uzbek / english / Russian{" "}
              </p>
              <p>
                {" "}
                <span> phone : </span>{" "}
                <a style={{ color: "#111" }} href="tel:+998990492776">
                  +998-99-049-27-76
                </a>{" "}
              </p>
              <p>
                {" "}
                <span> email : </span>{" "}
                <a
                  style={{ color: "#111", textTransform: "lowercase" }}
                  href="mailto:bakirovgulomjon@gmail.com"
                >
                  bakirovgulomjon@gmail.com
                </a>{" "}
              </p>
              <p>
                {" "}
                <span> address : </span>{" "}
                <a
                  style={{ color: "#111" }}
                  href="https://www.google.com/maps/place/%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+O%60zbekiston/@41.2827706,69.1392819,11z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734"
                >
                  Tashkent, Uzbekistan
                </a>{" "}
              </p>
            </div>
          </div>
          <a
            href="https://github.com/GulomjonBakirov/portifolio/raw/main/G'ulomjon's%20Resume%20(1).pdf"
            download
            className="btn"
          >
            download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
