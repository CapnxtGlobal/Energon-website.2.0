import React from 'react'
import Navbar from '../../Navbar/Navbar';
import about from "../../../Assets/Images/About-us.png";
import safety from "../../../Assets/icons/Safety.svg";
import quality from "../../../Assets/icons/Quality.svg";
import integrity from "../../../Assets/icons/Integrity.svg";
import innovation from "../../../Assets/icons/Innovation.svg";
import customer from "../../../Assets/icons/Customer Focus.svg";
import environment from "../../../Assets/icons/Environmental Responsibility.svg";
import map from "../../../Assets/icons/Map.svg";
import "../About-us/About-us.scss";
import Contact from '../Contact/Contact';

function AboutUs() {
  return (
    <>
    <Navbar/>
    <main className='Universal-About'>
    <div className="About">
          <div>
            <h1>About Us</h1>
            <p>Established in 2012.Energon has grown into a leading organization in the petro products industry.
              <br /><br/>
              Energon was founded with the vision of pursuing various oil-related industry and outsourcing activities across India.We bagan with bitumen handling for Hindustan Petroleum Corporation Limited(HPCL)and expanded into drum manufacturing for the Same.Today,our experienced team of over 60 years in business handles
              20,000 MT of black oils and 1,000 KL of lubricants.<br /> <br />
              Our commmitment to innovation and excellence has  positioned Energon as a key player in the petro product sector.</p>
          </div>
          <div className="img">
            <img src={about} alt="" />
          </div>
        </div>
        <section className='Values'>
          <div className='heading'>
            <h1>Our Values</h1>
          </div>
          <div className='icons'>
            <div className='col'>
              <div className='row'>
                <img src={safety} alt=''/>
                <p>Safety</p>
              </div>
              <div className='row'>
                <img src={quality} alt=''/>
                <p>Quality</p>
              </div>
              <div className='row'>
                <img src={integrity} alt=''/>
                <p>Integrity</p>
              </div>
            </div>

            <div className='col'>
              <div className='row'>
                <img src={innovation} alt=''/>
                <p>Innovation</p>
              </div>
              <div className='row'>
                <img src={customer} alt=''/>
                <p>Customer Focus</p>
              </div>
              <div className='row'>
                <img src={environment} alt=''/>
                <p>Environmental Responsibility</p>
              </div>
            </div>
          </div>
        </section>
        <section className='location'>
          <div className='heading'>
            <h1>Our Locations</h1>
            <h3><p>Energon's services span various</p> <p>locations in India.Explore our interactive</p><p> map to discover our facilities and regional offices.</p></h3>
          </div>
          <div className='map'>
            <img src={map} alt=''/>
          </div>
        </section>
        <Contact/>
        </main>
    </>
  )
}



export default AboutUs;