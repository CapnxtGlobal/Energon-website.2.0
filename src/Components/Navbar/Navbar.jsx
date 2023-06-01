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
              Home
            </li>
            <li className={location.pathname === "/" ? "white" : "black"}>
              About us
            </li>
            <li className={location.pathname === "/" ? "white" : "black"}>
              Services
            </li>
            <li className={location.pathname === "/" ? "white" : "black"}>
              Contact Us
            </li>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
