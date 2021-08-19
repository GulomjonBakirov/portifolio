import React from "react";
import portifolioConfig from "./config/portifolioConfig";
import Tilt from "react-parallax-tilt";

const Portifolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        {" "}
        <span> my </span> portfolio{" "}
      </h1>

      <div className="box-container">
        {portifolioConfig.map((portifolio) => (
          <div key={portifolio.id} className="box tilt">
            <img src={portifolio.img} alt="" />
            <div className="content">
              <h1>{portifolio.name}</h1>
              <div className="">
                <a href={portifolio.url} target="_blank" className="btn">
                  Demo
                </a>
                <a href={portifolio.sourceCode} target="_blank" className="btn">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portifolio;
