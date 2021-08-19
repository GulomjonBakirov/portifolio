import React from "react";
import Tilt from "react-parallax-tilt";
import contactConfig from "./config/contactConfig";

const Contact = () => {
  console.log(contactConfig);
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        {" "}
        contact <span> me </span>{" "}
      </h1>

      <div className="row">
        <Tilt className="image">
          <img className="tilt" src="images/contact-img.svg" alt="" />
        </Tilt>
        <div className="contactIcons">
          {contactConfig.map((contactEl) => (
            <div key={contactEl.id} className="box">
              <i className={contactEl.icon}></i>
              <a href={contactEl.url} target="_blank" className="contact-link">
                {contactEl.name}
              </a>
            </div>
          ))}
        </div>
        {/* <form action="">
          <div className="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>

          <input type="text" placeholder="subject" className="box" />

          <textarea
            placeholder="message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <input type="submit" className="btn" value="send message" />
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
