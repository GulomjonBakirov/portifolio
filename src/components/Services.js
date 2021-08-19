import React from "react";
import Tilt from "react-parallax-tilt";

const Services = () => {
  const servicesConfig = [
    {
      id: 1,
      icon: "fas fa-robot",
      name: "AI development",
      description: "I am a currently learning Python AI development",
    },
    {
      id: 2,
      icon: "fab fa-js",
      name: "JavaScript Development",
      description: "I am a Full Stack JavaScript Developer",
    },
    {
      id: 3,
      icon: "fas fa-mobile",
      name: "Responsive Designs",
      description: "Create only responsive sites",
    },
    {
      id: 4,
      icon: "fas fa-robot",
      name: "AI development",
      description: "I am a currently learning Python AI development",
    },
    {
      id: 5,
      icon: "fab fa-js",
      name: "JavaScript Development",
      description: "I am a Full Stack JavaScript Developer",
    },
    {
      id: 6,
      icon: "fas fa-mobile",
      name: "Responsive Designs",
      description: "Create only responsive sites",
    },
  ];

  return (
    <section className="services" id="services">
      <h1 className="heading">
        {" "}
        <span> my </span> services{" "}
      </h1>

      <div className="box-container">
        {servicesConfig.map((service) => (
          <Tilt key={service.id} className="box tilt">
            <i className={service.icon}></i>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Services;
