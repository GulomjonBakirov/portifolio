import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        {" "}
        about <span>me</span>{" "}
      </h1>

      <div className="row">
        <div className="image">
          <img className="tilt" src="images/about-pic.jpg" alt="" />
        </div>

        <div className="content">
          <h3>
            {" "}
            my name is <span> shaikh anas </span>{" "}
          </h3>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis,
            dolorem omnis dolorum non provident distinctio inventore culpa in,
            nam eligendi quos modi vel aliquid blanditiis velit natus voluptatem
            deleniti.
          </p>
          <div className="box-container">
            <div className="box">
              <p>
                {" "}
                <span> age: </span> 21{" "}
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
                <span> language : </span> hindi / english{" "}
              </p>
              <p>
                {" "}
                <span> phone : </span> +123-456-7890{" "}
              </p>
              <p>
                {" "}
                <span> email : </span> shaikhanas@gmail.com{" "}
              </p>
              <p>
                {" "}
                <span> address : </span> mumbai, india - 400104{" "}
              </p>
            </div>
          </div>
          <a href="#" className="btn">
            download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
