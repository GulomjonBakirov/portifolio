import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particlesConfig";
import Tilt from "react-parallax-tilt";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <section className="home" id="home">
      <Particles id="particles-js" options={particlesConfig} />

      <div className="content">
        <Tilt>
          <img className="tilt" src="images/avatar.png" alt="" />
        </Tilt>
        <h3>
          {" "}
          Bakirov <span>G'ulomjon</span>{" "}
        </h3>
        <p>
          {" "}
          i am a{" "}
          <span className="typing-text">
            {" "}
            <ReactTyped
              strings={[
                "Web Developer",
                "Front End Developer",
                "Uzbek",
                "Student",
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={1}
              loop
              smartBackspace
            />{" "}
          </span>{" "}
        </p>
        <a href="#about" className="btn">
          about me
        </a>
      </div>
    </section>
  );
};

export default Home;
