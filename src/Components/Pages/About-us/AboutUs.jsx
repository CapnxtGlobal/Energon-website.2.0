import React from "react";
import Navbar from "../../Navbar/Navbar";
import about from "../../../Assets/Images/About-us.png";
import safety from "../../../Assets/icons/Safety.svg";
import quality from "../../../Assets/icons/Quality.svg";
import integrity from "../../../Assets/icons/Integrity.svg";
import innovation from "../../../Assets/icons/Innovation.svg";
import customer from "../../../Assets/icons/Customer Focus.svg";
import environment from "../../../Assets/icons/Environmental Responsibility.svg";
import map from "../../../Assets/Images/map.png";
import blackimage from "../../../Assets/Images/black-image.jpg";
import energonOffice from "../../../Assets/Images/energon-office.png";
import "../About-us/About-us.scss";
import Contact from "../Contact/Contact";

function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="Universal-About">
        <div className="About">
          <h1>About Us</h1>
          <div className="body">
            <div className="col">
              <p>
                Established in 2012.Energon has grown into a leading
                organization in the petro products industry.
                <br />
                <br />
                Energon was founded with the vision of pursuing various
                oil-related industry and outsourcing activities across India.We
                bagan with bitumen handling for Hindustan Petroleum Corporation
                Limited(HPCL)and expanded into drum manufacturing for the
                Same.Today,our experienced team of over 60 years in business
                handles 20,000 MT of black oils and 1,000 KL of lubricants.
                <br /> <br />
                Our commmitment to innovation and excellence has positioned
                Energon as a key player in the petro product sector.
              </p>
            </div>
            <div className="img col">
              <img src={energonOffice} alt="" />
            </div>
          </div>
        </div>
        <section className="Values">
          <div className="heading">
            <h1>Our Values</h1>
          </div>
          <div className="icons">
            <div className="col">
              <div className="row">
                <img src={safety} alt="" />
                <p>Safety</p>
              </div>
              <div className="row">
                <img src={quality} alt="" />
                <p>Quality</p>
              </div>
              <div className="row">
                <img src={integrity} alt="" />
                <p>Integrity</p>
              </div>

              <div className="row">
                <img src={innovation} alt="" />
                <p>Innovation</p>
              </div>
              <div className="row">
                <img src={customer} alt="" />
                <p>Customer Focus</p>
              </div>
              <div className="row">
                <img src={environment} alt="" />
                <p>Environmental Responsibility</p>
              </div>
            </div>
          </div>
        </section>
        <section className="location">
          <div className="heading">
            <h1>Our Locations</h1>
            <h3>
              <p>
                Energon's services span various locations in India.Explore our
                interactive map to discover our facilities and regional offices.
              </p>
            </h3>
          </div>
          <div className="map">
            <img src={map} alt="" />
          </div>
        </section>
        <section className="team">
          <div className="heading">
            <h1>Meet Energon's Visionary Founders</h1>
            <p>
              Here, we present our formidable founders who with their vision,
              expertise, and relentless drive have sculpted Energon into the
              industry powerhouse it is today. Explore their stories and their
              integral roles in shaping our distinguished trajectory.
            </p>
          </div>
          <div className="members">
            <div className="sripal member-content">
              <h1>M.Sripal Reddy</h1>
              <p className="designation">Founder and Chief Executive Officer</p>
              <p>
                M.Sripal Reddy,our esteemed founder and CEO,is an alumnus of the
                prestigious Indian Institute of Technology(IIT),where he
                specialized in Chemical Engineering.Sripal's professional
                journey spans over 15 fruitful years,during which he garnered
                extensive experience in the petrochemical industry.His
                deep-rooted passion for the industry is reflected in his
                hands-on approach and strategic leadership,which has
                significantly contributed to Energon's growth and success.
              </p>
              <p>
                Sripal's nuanced understanding of the intricate dynamics of the
                petrochemical sector coupled with his visionary approach had led
                to the development of innovative strategies that have
                distinguished Energon in a competitive marketplace.His
                tenacity,industry knowledge,and commitment to excellence
                continue to inspire our team and drive the company towards new
                frontiers of achievement.
              </p>
            </div>
            <div className="image">
              <img src={blackimage} alt="" />
            </div>
          </div>
          <div className="members">
            <div className="photo">
              <img src={blackimage} alt="" />
            </div>
            <div className="Anand member-content">
              <h1>Mr.Anand</h1>
              <p className="designation">
                Director and Chief Operations Officer
              </p>
              <p>
                Mr.Anand,our esteemed Director and Chief Operations Officer,is a
                seasoned entrepreneur with a wealth of International business
                experience.His career,marked by a series of successful ventures
                across different industries,speaks volumes of his remarkable
                accumen,strategic foresight,and adaptability.
              </p>
              <p>
                Anand's global exposure,derived from extensive travel and
                diverse business engagements,gives him a unique perspective on
                market dynamics,cultural nuances,and operational strategies.This
                international outlook has been instrumental in fostering
                Energon's global connections and broadening our operational
                horizons.
              </p>
              <p>
                As a leader,Anand's multi-faceted business expertise and
                relentless pursuit of excellence guide our operational
                efficiency,ensuring that Energon consistently delivers the
                highest standrads of services.His entrepreneurial spirit fuels
                innvation within our team and continues to drive Energon towards
                greater heights in the petrochemical industry.
              </p>
            </div>
          </div>
          <div className="members">
            <div className="Kishore member-content">
              <h1>Kishore Chowdary</h1>
              <p className="designation">Co-founder and Legal Advisor</p>
              <p>
                Kishore Chowdary,our co-founder and legal advisor,brings an
                exceptional legal mind and extensive entrepreneurial experience
                to the Energon team.A law graduate with a specialization in
                taxation and corporate laws,Kishore's expertise provides crucial
                guidance in navigating the complex legal landscape of the
                petroproduct industry.His profound understanding of the law
                coupled with his business accumen forms a solid foundation for
                our business practices,regulatory compliance,and corporate
                governance.
              </p>
              <p>
                In addition to his legal prowess,Kishore has made significant
                strides in the management of service and retail units.His
                successful involvement with several startups exhibits his
                ability to thrive in fast-paced,dynamic environments,traits that
                are invaluable to Energon's continuous growth and
                evolution.Kishore's robust legal background and entrepreneurial
                spirit not only add a unique dimension to our leadership but
                also contribute significantly to our strategic planning and risk
                management.
              </p>
            </div>
            <div className="imag">
              <img src={blackimage} alt="" />
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
}

export default AboutUs;
