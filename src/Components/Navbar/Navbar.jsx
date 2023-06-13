import React, { useState, useEffect } from "react";
import logoWhite from "../../Assets/Images/logo white.svg";
import logoBlack from "../../Assets/Images/logo black.svg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.document.scrollingElement.scrollTop >
        window.document.scrollingElement.scrollHeight / 10
      ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  });
  const hamMenuOpen = (el) => {
    var menu = document.querySelector(".ham-menu");
    var sideBar = document.querySelector(".side-bar-menu");

    sideBar.classList.toggle("active");
    menu.classList.toggle("active");

    if (sideBar.classList.contains("active")) {
      document.body.style = "height : 100vh; overflow : hidden";
    } else {
      document.body.style = "";
    }
  };
  return (
    <>
      <section className={`Navbarheader ${scrolled ? "scrolled" : ""} desktop`}>
        <nav>
          <div className="logo">
            <Link to="/" className="conditional-rendering-logo">
              <img
                src={
                  location.pathname === "/" && !scrolled ? logoWhite : logoBlack
                }
                color="white"
                alt="error loading"
              />
            </Link>
          </div>
          <div
            className={`nav-links ${
              location.pathname === "/" ? "white" : "black"
            }`}
          >
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/aboutus" ? "active" : ""}>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className={location.pathname === "/services" ? "active" : ""}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
        </nav>
      </section>
      <div
        className={`navbar ${
          location.pathname === "/" ? "white" : "black"
        } mobile`}
      >
        <div className="side-bar-menu">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/" onClick={hamMenuOpen}>
                Home
              </Link>
            </li>
            <li className={location.pathname === "/aboutus" ? "active" : ""}>
              <Link to="/aboutus" onClick={hamMenuOpen}>
                About Us
              </Link>
            </li>
            <li className={location.pathname === "/services" ? "active" : ""}>
              <Link to="/services" onClick={hamMenuOpen}>
                Services
              </Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact" onClick={hamMenuOpen}>
                Contact Us
              </Link>
            </li>
            <li>
              <div className="contact">
                <p className="email">
                  <a href="mailto:info@energon.in">info@energon.in</a>
                </p>
                <p className="phone">
                  <a href="tel:+918056080595">+91 8056080595</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="ham-menu" onClick={hamMenuOpen}>
          <div
            className={`ham-icon ${
              location.pathname === "/" ? "white" : "black"
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="logo">
          <Link to="/" className="conditional-rendering-logo">
            <img src={logoBlack} color="white" alt="error loading" />
          </Link>
        </div>
        <div className="dummy">
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
