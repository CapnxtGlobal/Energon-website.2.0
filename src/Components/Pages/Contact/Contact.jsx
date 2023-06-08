import React, { useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import call from "./../../../Assets/icons/Call Icon.svg";
import Email from "./../../../Assets/icons/Mail Icon.svg";
import address from "./../../../Assets/icons/Location icon.svg";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const location = useLocation();
  return (
    <>
      {location.pathname === "/contact" ? <Navbar /> : ""}
      <div className="contact">
        <div className="title">
          <h1>Contact Us</h1>
        </div>
        <div className="desc">
          <p>
            For inquiries, feedback, or support, please feel free to contact us.
            Our dedicated team is always ready to assist you.
          </p>
        </div>
        <div className="body">
          <div className="col call-us">
            <div className="element">
              <div className="icon">
                <img src={call} alt="" />
              </div>
              <div className="details">
                <p className="title">Call Us</p>
                <div className="contact">
                  <a href="tel:+918056080595">+91 8056080595</a>
                </div>
              </div>
            </div>
            <div className="element">
              <div className="icon">
                <img src={Email} alt="" />
              </div>
              <div className="details">
                <p className="title">Email</p>
                <div className="contact">
                  <a href="mailto:info@energon.in">info@energon.in</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col address">
            <div className="icon">
              <img src={address} alt="" />
            </div>
            <div className="content">
              <div className="title">Address</div>
              <div className="address">
                <div className="title">
                  <p>Headquarters</p>
                </div>
                <div className="data">
                  701,7th floor, Soliataire Plaza, 8-3-948/949, Behind image
                  hospital, Ameerpet, Hyderabad-500 073
                </div>
              </div>
              <div className="address">
                <div className="title">
                  <p>Reigonal Office</p>
                </div>
                <div className="data">
                  2nd Floor, 95, Lumbini Avenue, Gachibowli, Hyderabad,
                  Telangana 530032
                </div>
              </div>
            </div>
          </div>
          <div className="col form">
            <div className="container">
              <div className="input-field-container">
                <input
                  type="text"
                  name="Name"
                  value={formData.name}
                  id="name"
                />
              </div>
              <div className="input-field-container">
                <input
                  type="email"
                  name="Email"
                  value={formData.email}
                  id="email"
                />
              </div>
              <div className="input-filed-container">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            style={{ width: "100vw", height: "30vw" }}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2rd Floor, 95, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032&t=&z=17&ie=UTF8&iwloc=&output=embed"
            title="map"
          ></iframe>
        </div>
        <div className="mini-footer">
          
        </div>
      </div>
    </>
  );
}

export default Contact;
