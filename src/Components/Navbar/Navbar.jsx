import React from "react";
import logoWhite from "../../Assets/Images/logo white.svg";
import logoBlack from "../../Assets/Images/logo black.svg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss"

function Navbar() {
  const location = useLocation();

  return (
    <>
      <section className="Navbar">
        <nav>
          <div className="logo">
            <Link to="/" className="conditional-rendering-logo">
              <img
                src={location.pathname === "/" ? logoWhite : logoBlack}
                alt="error loading in image"
              />
            </Link>
          </div>

          <div className="nav-links">
            <li className={location.pathname === "/" ? "white" : "black"}>
             <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/" ? "white" : "black"}>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className={location.pathname === "/" ? "white" : "black"}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === "/" ? "white" : "black"}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
