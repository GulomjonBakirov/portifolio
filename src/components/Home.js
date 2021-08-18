import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particlesConfig";
const Home = () => {
  return (
    <section className="home" id="home">
      <Particles id="particles-js" options={particlesConfig} />

      <div className="content">
        <img className="tilt" src="images/avatar.png" alt="" />
        <h3>
          {" "}
          Bakirov <span>G'ulomjon</span>{" "}
        </h3>
        <p>
          {" "}
          i am a <span className="typing-text"> front end developer </span>{" "}
        </p>
        <a href="#about" className="btn">
          about me
        </a>
      </div>
    </section>
  );
};

export default Home;
