import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Service.scss";
import Contact from "../Contact/Contact";

function Service() {
  return (
    <>
      <section className="Universal-Service">
        <nav>
          <Navbar />
        </nav>
        <section className="service-Content">
          <div className="header">
            <h1>Services</h1>
            <p>
              Delivering Comprehensive Energy Solutions Across Multiple Domains
            </p>
          </div>
        </section>
        <footer>
          <Contact />
        </footer>
      </section>
    </>
  );
}

export default Service;
