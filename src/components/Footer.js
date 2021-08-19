import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: " 14px",
        textTransform: "none",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      Created by{" "}
      <a
        style={{ color: "var(--green)" }}
        href="https://github.com/GulomjonBakirov"
      >
        Bakirov G'ulomjon
      </a>{" "}
      2021
    </div>
  );
};

export default Footer;
