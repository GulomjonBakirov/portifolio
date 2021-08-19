import React from "react";
import Tilt from "react-parallax-tilt";

const Services = () => {
  const servicesConfig = [
    {
      id: 2,
      icon: "fab fa-js",
      name: "Front End Development",
      description: "React.js Redux",
    },
    {
      id: 3,
      icon: "fas fa-mobile",
      name: "Responsive Designs",
      description: "Create only responsive sites",
    },
    {
      id: 1,
      icon: "fas fa-store",
      name: "Eccomerse Sites",
      description: "Shopping, Eccomerse.js",
    },
    {
      id: 4,
      icon: "fas fa-server",
      name: "Back End development",
      description: "Node.js, Express.js",
    },
    {
      id: 5,
      icon: "fas fa-database",
      name: "Database",
      description: "MySQL, MongoDB",
    },
    {
      id: 6,
      icon: "fas fa-portrait",
      name: "Portifolio Sites",
      description: "Portifolio",
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
