import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import Logo from "../../assets/energon_logo-1.png";
import Asset from "../../../Assets/Images/Asset 1.png";
import about from "../../../Assets/Images/About-us.png";
import Ploy from "../../../Assets/icons/Polybags.svg";
import Bio_Cng from "../../../Assets/icons/Bio Cng Plant.svg";
import Lpg from "../../../Assets/icons/LPG Bottling 2.svg";
import Drums from "../../../Assets/icons/Packaging Drums.svg";
import Liquid from "../../../Assets/icons/Liquid Terminal.svg";
import Warehouse from "../../../Assets/icons/Warehouse & Ligistics.svg";
import camera from "../../../Assets/Images/camera.png";
import arrow from "../../../Assets/Images/right-arrow.png";
import "../Home/Home.scss";
import navbar from "../../Navbar/Navbar";
import Navbar from "../../Navbar/Navbar";
//import Aos from "aos";
//import "aos/dist/aos.css"
//import Navbar from "../../components/navbar/Navbar";
function Home() {
  return (
    <>
      <main className="Universal-Home">
        <header>
          <Navbar />
          <div className="power">
            <h1>Powering the <br />Petrochemical Industry
              <p>"Experience,Innovation,and Excellence since 2012"</p></h1>
          </div>
        </header>
        <div className="About">
          <div className="Us">
            <h1>ABOUT US</h1>
            <p>Established in 2012.Energon has grown into a <br />leading organization in the petro products industry.<br />
              <br />
              Energon was founded with the vision of pursuing various<br />oil-related industry and outsourcing activities across India.<br />We bagan with bitumen handling for Hindustan Petroleum<br />Corporation Limited(HPCL)and expanded into drum<br />manufacturing for the Same.Today,our<br />experienced team of over 60 years in business handles<br />
              20,000 MT of black oils and 1,000 KL of lubricants.<br /> <br />
              Our commmitment to innovation and excellence has <br /> positioned Energon as a key player in the<br /> petro product sector.</p>
          </div>
          <div className="img">
            <img src={about} alt="" />
          </div>
        </div>

        <div className="Innovative">
          INNOVATIVE SOLUTIONS FOR PETROPRODUCTS INDUSTRY
        </div>
        <section className="Services">

          <div className="heading">
            <h1>SERVICES</h1>
          </div>

          <div className="Logo">
            <div className="col">
              <div className="row" >
                <img src={Ploy} alt="" />
                <h1 className="Ser">POLYBAGS</h1>
              </div>
              <div className="row">
                <img src={Bio_Cng} alt="" />
                <p className="Ser">BIO CNG <br />PLANT</p>
              </div>
              <div className="row">
                <img src={Lpg} alt="" />
                <p className="Ser">LPG<br /> BOTTLING</p>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <img src={Drums} alt="" />
                <p className="Ser">PACKAGING DRUMS</p>
              </div>
              <div className="row">
                <img src={Liquid} alt="" />
                <p className="Ser">LIQUID TERMINAL HANDLING</p>
              </div>
              <div className="row">
                <img src={Warehouse} alt="" />
                <p className="Ser">WAREHOUSE & LOGISTICS</p>
              </div>
            </div>
          </div>
        </section>
        <section className="Team">
          <div className="heading">
            <h1>JOIN OUR TEAM</h1>
            <span className="line">_</span>

          </div>
          <div className="Join">
            <div className="content">
              <p>Energon is led by a team of four industry veterans with over 60 years<br />of combined experience in the petrochemical,constructions,manu-<br />facturing,trading,technical services,and logistics sectors.Our team <br/>includes M.Sripal Reddy,an IIT graduate with 15 years of experience<br />in petrochemicalproducts,and Mr.Anand,an internationally experi-<br />enced businessman.Together,they guide our skilled workforce to<br />deliver outtsanding results and unmatched customer satisfaction.</p>
            </div>
            <div className="image">
              <img src={camera} alt="" />
              <div>
                <p className="name">NAME HERE</p>
              </div>
            </div>
          </div>
        </section>
        <section className="Touch">
          <div className="get">
            <h1>GET IN TOUCH WITH US</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptatem molestiae nam accusamus, maxime dolorem in amet a, nemo similique dolores aut id hic iste vel. Dignissimos ab facilis<br /> reprehenderit!</p>
          </div>
          <div className="started">
            <input type="text" required="required" placeholder="FirstName" />
            <input type="text" required="required" placeholder="Email" />
            <div className="arrow">
              <button type="get started">GET STARTED <span className="right">→</span></button>

            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default Home;
