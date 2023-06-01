import React from "react";
import Navbar from "../../Navbar/Navbar";
import call from "./../../../Assets/icons/Call Icon.svg";
import Email from "./../../../Assets/icons/Mail Icon.svg";
import address from "./../../../Assets/icons/Location icon.svg";
import { useLocation } from "react-router-dom";

import "./Contact.scss";

function Contact() {
  const location = useLocation();

  let classConditionalRednering = `${
    location.pathname === "/contact" ? "black" : "white"
  }`;

  return (
    <>
     {
      location.pathname === "/contact" &&  <Navbar />
     }

      <section
        className="Universal-Contact"
        style={
          location.pathname === "/contact"
            ? { background: "white" }
            : { background: "#1f2730" }
        }
      >
        <div className="header">
          <h1
            style={
              location.pathname === "/contact"
                ? { color: "#e95c28" }
                : { color: "white" }
            }
          >
            Contact
          </h1>
          <p className={classConditionalRednering}>
            For inquiries, feedback, or support, please feel free to contact us.<br /> Our dedicated team is always ready to assist you</p>
        </div>

        <div className="call-email-address">
          <div className="row">
            <img src={call} alt="" />
            <div className="details">
              <h1 className={classConditionalRednering}>Call Us</h1>
              <a className={classConditionalRednering} href="tel:8056080595">
                +91 8056080595
              </a>
            </div>
          </div>

          <div className="row">
            <img src={Email} alt="" />
            <div className="details">
              <h1 className={classConditionalRednering}>Email</h1>
              <a
                className={classConditionalRednering}
                href="mailto:infor@energon.in"
              >
                info@energon.in
              </a>
            </div>
          </div>
          <div className="row address">
            <img src={address} alt="" />
            <div className="details">
              <h1 className={classConditionalRednering}>Address</h1>
              <a className={classConditionalRednering} href="#">
                701,7th floor, Solitaire Plaza, 8-3-948/949, Behind image
                hospital, Ameerpet, Hyderabad-500 073
              </a>
              <a className={classConditionalRednering} href="#">
                2rd Floor, 95, Lumbini Avenue, Gachibowli, Hyderabad, Telangana
                500032
              </a>
            </div>
          </div>
        </div>

        <div className="map">
          <h1 className={classConditionalRednering}>SEE ON THE MAP</h1>
          {location.pathname === "/contact" && (
            <>
              <div className="location">
                <p>Map Comes Here... </p>
              </div>
            </>
          )}
        </div>
      </section>
      <div
        className="mini-footer"
        style={
          location.pathname === "/contact"
            ? { background: "#1f2730" }
            : { background: "white" }
        }
      >
        <p>
          <a href="mailto:info@energon.in">info@energon.in</a>
        </p>
      </div>
    </>
  );
}

export default Contact;
