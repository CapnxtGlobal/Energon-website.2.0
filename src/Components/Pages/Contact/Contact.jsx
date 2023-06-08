import React, { useState,useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import call from "./../../../Assets/icons/Call Icon.svg";
import Email from "./../../../Assets/icons/Mail Icon.svg";
import address from "./../../../Assets/icons/Location icon.svg";
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';

import "./Contact.scss";
import { sendForm } from "emailjs-com";

function Contact() {
  const location = useLocation();

  let classConditionalRednering = `${location.pathname === "/contact" ? "black" : "white"
    }`;
    document.forms['sign-up-form']=function(event){

      if(this.username.value.trim() === ""){
        document.querySelector(".username-error").innerHTML = "Please enter a username";
        document.querySelector(".username-error").style.display = "block";
        event.preventDefault();
        return false;
     }
     if(this.email.value.trim() === ""){
      document.querySelector(".email-error").innerHTML = "Please enter a email";
      document.querySelector(".email-error").style.display = "block";
      event.preventDefault();
      return false;
   }
      event.preventDefault();
    }
    const[formData,setFormData]=useState({
      
      name:"",
      Email:"",
      message:"",
    })
    const [formError, setFormError] = useState(null);
    const form=useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_94kv1c9', 'template_2bbh2hi', form.current, 'd8lT77co0y5QoiHDe')
      .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        setFormError("Error while sending the message!. Try again");
      }
    );
};
  return (
    <>
      {location.pathname === "/contact" && <Navbar />}

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
            Contact Us
          </h1>
          <p className={classConditionalRednering}>
            For inquiries, feedback, or support, please feel free to contact us.
            <br /> Our dedicated team is always ready to assist you
          </p>
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
        </div>
        <div className="row address">
          <img src={address} alt="" />
          <div className="details">
            <h1 className={classConditionalRednering}>Address</h1>
            <h4 className={classConditionalRednering}>Headquarters</h4>
            <p className={classConditionalRednering} href="#">
              701,7th floor, Solitaire Plaza, 8-3-948/949, Behind image
              hospital, Ameerpet, Hyderabad-500 073
            </p>
            <h4 className={classConditionalRednering}>Regional office</h4>
            <p className={classConditionalRednering} target="_main" href="https://www.google.com/maps/place/2rd+Floor,+95,+Lumbini+Avenue,+Gachibowli,+Hyderabad,+Telangana+500032/@17.4322669,78.3711247,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb93fabac565f1:0x8d902808ebbdd33f!8m2!3d17.4322669!4d78.3736996?entry=ttu">
              2rd Floor, 95, Lumbini Avenue, Gachibowli, Hyderabad, Telangana
              500032
            </p>
          </div>
          <div className="started">
            <form name="sign-up-form" action="" method="post" autoComplete="off"ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                required="required"
                placeholder="FirstName"
              />
              <p class="error firstname-error"></p>
              <input
                type="email"
                required="required"
                placeholder="Email"
              />
              <p class="error email-error"></p>
              <textarea name='enquiry' id='' cols="20"  rows="5" placeholder='enter here...'></textarea>
              <p class="error text-error"></p>
              <div className="arrow">
                <button type="get started" onClick={sendEmail}>
                  SUBMIT <span className="right">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="map">
          <h1 className={classConditionalRednering}>
            <a
              target="_main"
              href="https://www.google.com/maps/place/KMV+Spaces/@17.4315801,78.4460159,19z/data=!3m1!5s0x3bcb90ce86096c4b:0xf111483ea4056b70!4m9!1m2!2m1!1sSolitaire+Plaza,+Solitaire+Plaza,+701,+7th+Floor,+701,+7th,+behind+Image+Hospital,+Ameerpet,+Hyderabad,+Telangana+500073!3m5!1s0x3bcb91726d5d5d55:0x8f42070de1ffb442!8m2!3d17.4314277!4d78.4458418!16s%2Fg%2F11nnw44xsc?entry=ttu"
            >
              SEE ON THE MAP
            </a>
          </h1>
          {location.pathname === "/contact" && (
            <>
              <div className="location">
                <iframe
                  style={{ width: "100vw", height: "30vw" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2rd Floor, 95, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                {/* <iframe
                  style={{ width: "100vw", height: "30vw" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Solitaire Plaza, Solitaire Plaza, 701, 7th Floor, 701, 7th, behind Image Hospital, Ameerpet, Hyderabad, Telangana 500073&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe> */}
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
