import React from "react";

const Portifolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        {" "}
        <span> my </span> portfolio{" "}
      </h1>

      <div className="box-container">
        <div className="box tilt">
          <img src="images/img-1.jpg" alt="" />
          <div className="content">
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>

        <div className="box tilt">
          <img src="images/img-2.jpg" alt="" />
          <div className="content">
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>

        <div className="box tilt">
          <img src="images/img-3.jpg" alt="" />
          <div className="content">
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>

        <div className="box tilt">
          <img src="images/img-4.jpg" alt="" />
          <div className="content">
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>

        <div className="box tilt">
          <img src="images/img-5.jpg" alt="" />
          <div className="content">
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>

        <div className="box tilt">
          <img src="images/img-6.jpg" alt="" />
          <div className="content">
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
