import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [active, setActive] = useState(true);

  const menuRef = useRef();
  const headerRef = useRef();

  const menuActive = () => {
    if (active) {
      menuRef.current.classList.remove("fa-times");
      headerRef.current.classList.remove("active");
      setActive(!active);
    } else {
      menuRef.current.classList.add("fa-times");
      headerRef.current.classList.add("active");
      setActive(!active);
    }
  };
  window.onscroll = () => {
    if (active) {
      menuRef.current.classList.remove("fa-times");
      headerRef.current.classList.remove("active");
    }
  };
  // useEffect(() => {
  //   menu = menuRef.current;
  //   header = headerRef.current;
  // }, [menu, header]);

  return (
    <header ref={headerRef}>
      <div
        id="menu-bars"
        onClick={menuActive}
        className="fas fa-bars"
        ref={menuRef}
      ></div>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
