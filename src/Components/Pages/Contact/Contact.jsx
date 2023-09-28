import React, { useState, useEffect } from "react";
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
  const [isContactPage, setIsContactPage] = useState(true);
  const [formError, setFormError] = useState(null);
  const location = useLocation();
  const sendMail = (e) => {
    if (formData.name.length === 0) {
      setFormError("Enter name");
      return;
    }
    if (formData.email.length === 0) {
      setFormError("Enter email");
      return;
    } else {
      var match = formData.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!match) {
        setFormError("Enter valid email");
        return;
      }
    }
    setFormError(null);
    e.target.textContent = "sending...";
    // send mail using emailjs
    emailjs
      .send(
        "service_94kv1c9",
        "template_2bbh2hi",
        formData,
        "d8lT77co0y5QoiHDe"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            email: "",
            message: "",
            name: "",
          });
          e.target.textContent = "Sent successfully";
          setTimeout(() => {
            e.target.textContent = "Send";
          }, 2000);
        },
        (err) => {
          setFormError("Error while sending the message!. Try again");
          e.target.textContent = "Send";
        }
      );
  };
  useEffect(() => {
    if (location.pathname === "/contact") setIsContactPage(true);
    else {
      setIsContactPage(false);
    }
  }, [location]);
  return (
    <>
      {location.pathname === "/contact" ? <Navbar /> : ""}
      <div className={`contact ${isContactPage ? "" : "dark"}`}>
        <div className="title">
          <h1>Contact Us</h1>
        </div>
        <div className="desc">
          <p>
            For inquiries, feedback, or support, please feel free to contact us.
            <br />
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
                <p className="title">
                  <img src={call} alt="" />
                  Call Us
                </p>
                <div className="contact-detail">
                  <a href="tel:+918056080595">+91 8056080595</a>
                </div>
              </div>
            </div>
            <div className="element">
              <div className="icon">
                <img src={Email} alt="" />
              </div>
              <div className="details">
                <p className="title">
                  <img src={Email} alt="" />
                  Email
                </p>
                <div className="contact-detail">
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
              <div className="title">
                <img src={address} alt="" />
                Address
              </div>
              <div className="address-detail">
                <div className="title">
                  <p>Headquarters</p>
                </div>
                <div className="data">
                  <a href="https://goo.gl/maps/xgngYeMtMWGEMSV28" target="_blank" rel="noreferrer">
                    701,7th floor, Soliataire Plaza, 8-3-948/949, Behind image
                    hospital, Ameerpet, Hyderabad-500 073
                  </a>
                </div>
              </div>
              <div className="address-detail">
                <div className="title">
                  <p>Reigonal Office</p>
                </div>
                <div className="data">
                  <a href="https://goo.gl/maps/5qJQv89LBfwtqhhP9" target="_blank" rel="noreferrer">
                  2nd Floor, 95, Lumbini Avenue, Gachibowli, Hyderabad,
                  Telangana 530032
                  </a>
                  
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
                  placeholder="Enter your name..."
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="input-field-container">
                <input
                  type="email"
                  name="Email"
                  value={formData.email}
                  id="email"
                  placeholder="Enter e-mail ..."
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="input-field-container">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your query here..."
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    });
                  }}
                  value={formData.message}
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="error">
                <p>{formError ? `*${formError}` : ""}</p>
              </div>
              <div className="input-field-container">
                <button onClick={sendMail}>
                  Submit <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {isContactPage ? (
          <div className="map">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2rd Floor, 95, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032&t=&z=17&ie=UTF8&iwloc=&output=embed"
              title="map"
            ></iframe>
          </div>
        ) : (
          ""
        )}
        <div className="mini-footer">
          <p>
          © 2012 - {new Date().getFullYear()} Energon Group | All rights reserved  | Powered By <a href="https://vaikharidigital.com" target="_blank" style={{textDecoration : 'underline'}}>Vaikhari Digital</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
