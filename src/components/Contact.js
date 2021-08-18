import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        {" "}
        contact <span> me </span>{" "}
      </h1>

      <div className="row">
        <div className="image">
          <img className="tilt" src="images/contact-img.svg" alt="" />
        </div>

        <form action="">
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
