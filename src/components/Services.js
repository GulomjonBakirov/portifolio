import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading">
        {" "}
        <span> my </span> services{" "}
      </h1>

      <div className="box-container">
        <div className="box tilt">
          <i className="fas fa-code"></i>
          <h3>web development</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            quidem.
          </p>
        </div>

        <div className="box tilt">
          <i className="fas fa-paint-brush"></i>
          <h3>graphic design</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            quidem.
          </p>
        </div>

        <div className="box tilt">
          <i className="fas fa-bullhorn"></i>
          <h3>seo marketing</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            quidem.
          </p>
        </div>

        <div className="box tilt">
          <i className="fas fa-envelope"></i>
          <h3>email marketing</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            quidem.
          </p>
        </div>

        <div className="box tilt">
          <i className="fas fa-mobile"></i>
          <h3>Responsive designs</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            quidem.
          </p>
        </div>

        <div className="box tilt">
          <i className="fab fa-wordpress"></i>
          <h3>wordpress</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            quidem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
