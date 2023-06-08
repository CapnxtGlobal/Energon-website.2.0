import React, { useState, useEffect } from "react";
import logoWhite from "../../Assets/Images/logo white.svg";
import logoBlack from "../../Assets/Images/logo black.svg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();


   useEffect(() => {
    const NavbarheaderEl = document.querySelector('.Navbarheader')

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        NavbarheaderEl.classList.add('Navbarheader-scrolled');
      } else if (window.scrollY <= 50) {
        NavbarheaderEl.classList.remove('Navbarheader-scrolled');
      }
    })
  }, [])
  return (
    <>
      <section className="Navbarheader Navbarheader-scrolled ">
        <nav>
          <div className="logo">
            <Link to="/" className="conditional-rendering-logo">
              <img
                src={location.pathname === "/" ? logoWhite : logoBlack}
                changeBackground color="white"
                alt="error loading in image"
              />
            </Link>
          </div>

          <div className="nav-links">
            <li className={location.pathname === "/" ? "white" : "black"}>
              <Link to="/"
                style={
                  location.pathname === "/"
                    ? { color: "#e95c28" }
                    : { color: "black" }
                }
              >Home</Link>
            </li>
            <li className={location.pathname === "/" ? "white" : "black"}>
              <Link to="/aboutus"
                style={
                  location.pathname === "/aboutus"
                    ? { color: "#e95c28" }
                    : { color: "black" }
                }
              >About Us</Link>
            </li>
            <li className={location.pathname === "/" ? "white" : "black"}>
              <Link to="/services"
                style={
                  location.pathname === "/services"
                    ? { color: "#e95c28" }
                    : { color: "black" }
                }
              >Services</Link>
            </li>
            <li className={location.pathname === "/" ? "white" : "black"}>
              <Link to="/contact"
                style={
                  location.pathname === "/contact"
                    ? { color: "#e95c28" }
                    : { color: "black" }
                }
              >Contact Us</Link>
            </li>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
