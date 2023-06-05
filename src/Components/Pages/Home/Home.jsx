import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import Logo from "../../assets/energon_logo-1.png";
import home from "../../../Assets/Images/homeheaderimage.png";
import about from "../../../Assets/Images/About-us.png";
import Ploy from "../../../Assets/icons/Polybags.svg";
import Bio_Cng from "../../../Assets/icons/Bio Cng Plant.svg";
import Lpg from "../../../Assets/icons/LPG Bottling 2.svg";
import Drums from "../../../Assets/icons/Packaging Drums.svg";
import Liquid from "../../../Assets/icons/Liquid Terminal.svg";
import Warehouse from "../../../Assets/icons/Warehouse & Ligistics.svg";
import camera from "../../../Assets/Images/camera.png";
//import arrow from "../../../Assets/Images/right-arrow.png";
import "../Home/Home.scss";
//import navbar from "../../Navbar/Navbar";
import Navbar from "../../Navbar/Navbar";
import Contact from "../Contact/Contact";
//import Aos from "aos";
//import "aos/dist/aos.css"
//import Navbar from "../../components/navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  EffectCoverflow,
  Keyboard,
} from "swiper";

function Home() {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
  });
  const Submit = (e) => {
    e.preventDefault();
    if (FormData.name.length == 0) {
      window.alert("name cannot be empty");
    } else if (!isValidEmail(FormData.email)) {
      window.alert("Enter A Valid Email");
    } else {
      console.log(FormData);
      window.alert("Success ! need to add email js verification");
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <main className="Universal-Home">
        <header>
          <Navbar />
          <div className="power">
            <h1>
              Powering the <br />
              Petrochemical Industry
              <p>"Experience, Innovation, and Excellence since 2012"</p>
            </h1>
          </div>
        </header>
        <div className="About">
          <div className="Us">
            <h1>ABOUT US</h1>
            <p>
              Established in 2012.Energon has grown into a leading organization
              in the petro products industry.
            </p>
            <p>
              Energon was founded with the vision of pursuing various
              oil-related industry and outsourcing activities across India.We
              bagan with bitumen handling for Hindustan Petroleum Corporation
              Limited(HPCL)and expanded into drum
              <br />
              manufacturing for the Same.Today,our experienced team of over 60
              years in business handles 20,000 MT of black oils and 1,000 KL of
              lubricants.
            </p>
            <p>
              Our commmitment to innovation and excellence has positioned
              Energon as a key player in the petro product sector.
            </p>
          </div>
          <div className="img">
            <img src={about} alt="" />
          </div>
        </div>

        {/* initial one .. */}

        {/* <div className="Innovative">
          INNOVATIVE SOLUTIONS FOR PETROPRODUCTS INDUSTRY
        </div>
         */}

        <section className="slider-container">
          <h1 className="Heading">
            INNOVATIVE SOLUTIONS FOR PETROPRODUCTS INDUSTRY
          </h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            initialSlide={3}
            navigation={true}
            spaceBetween={180}
            coverflowEffect={{
              rotate: 50,
              stretch: 10,
              depth: 100,
              modifier: 1,
              //  delay : 200,
              slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              // duration : 10000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="slider-card">
                <div className="content">
                  <h1>ENERGON GAS</h1>
                  <p>
                    We are committed to promoting sustainable energy solutions,
                    processing agricultural waste into bio gas, which is then
                    sold as CNG to auto fuel stations. Our innovative approach
                    to waste management contributes to a greener and more
                    sustainable future
                  </p>
                  <button>EXPLORE OUR SERVICES</button>
                </div>
                <div className="img">
                  <img src={home} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* <img src={home} alt="" /> */}
              <div className="slider-card">
                <div className="content">
                  <h1>ENERGON GAS</h1>
                  <p>
                    We are committed to promoting sustainable energy solutions,
                    processing agricultural waste into bio gas, which is then
                    sold as CNG to auto fuel stations. Our innovative approach
                    to waste management contributes to a greener and more
                    sustainable future
                  </p>
                  <button>EXPLORE OUR SERVICES</button>
                </div>
                <div className="img">
                  <img src={home} alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* <img src={home} alt="" /> */}
              <div className="slider-card">
                <div className="content">
                  <h1>ENERGON GAS</h1>
                  <p>
                    We are committed to promoting sustainable energy solutions,
                    processing agricultural waste into bio gas, which is then
                    sold as CNG to auto fuel stations. Our innovative approach
                    to waste management contributes to a greener and more
                    sustainable future
                  </p>
                  <button>EXPLORE OUR SERVICES</button>
                </div>
                <div className="img">
                  <img src={home} alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* <img src={home} alt="" /> */}
              <div className="slider-card">
                <div className="content">
                  <h1>ENERGON GAS</h1>
                  <p>
                    We are committed to promoting sustainable energy solutions,
                    processing agricultural waste into bio gas, which is then
                    sold as CNG to auto fuel stations. Our innovative approach
                    to waste management contributes to a greener and more
                    sustainable future
                  </p>
                  <button>EXPLORE OUR SERVICES</button>
                </div>
                <div className="img">
                  <img src={home} alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* <img src={home} alt="" /> */}
              <div className="slider-card">
                <div className="content">
                  <h1>ENERGON GAS</h1>
                  <p>
                    We are committed to promoting sustainable energy solutions,
                    processing agricultural waste into bio gas, which is then
                    sold as CNG to auto fuel stations. Our innovative approach
                    to waste management contributes to a greener and more
                    sustainable future
                  </p>
                  <button>EXPLORE OUR SERVICES</button>
                </div>
                <div className="img">
                  <img src={home} alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* <img src={home} alt="" /> */}
              <div className="slider-card">
                <div className="content">
                  <h1>ENERGON GAS</h1>
                  <p>
                    We are committed to promoting sustainable energy solutions,
                    processing agricultural waste into bio gas, which is then
                    sold as CNG to auto fuel stations. Our innovative approach
                    to waste management contributes to a greener and more
                    sustainable future
                  </p>
                  <button>EXPLORE OUR SERVICES</button>
                </div>
                <div className="img">
                  <img src={home} alt="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* <img src={home} alt="" /> */}
              <div className="slider-card">
                <div className="content">
                  <h1>ENERGON GAS</h1>
                  <p>
                    We are committed to promoting sustainable energy solutions,
                    processing agricultural waste into bio gas, which is then
                    sold as CNG to auto fuel stations. Our innovative approach
                    to waste management contributes to a greener and more
                    sustainable future
                  </p>
                  <button>EXPLORE OUR SERVICES</button>
                </div>
                <div className="img">
                  <img src={home} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="Services">
          <div className="heading">
            <h1>SERVICES</h1>
          </div>

          <div className="Logo">
            <div className="col">
              <div className="row">
                <img src={Ploy} alt="" />
                <h1 className="Ser">POLYBAGS</h1>
              </div>
              <div className="row">
                <img src={Bio_Cng} alt="" />
                <p className="Ser">
                  BIO CNG <br />
                  PLANT
                </p>
              </div>
              <div className="row">
                <img src={Lpg} alt="" />
                <p className="Ser">
                  LPG
                  <br /> BOTTLING
                </p>
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
              <p>
                Energon is led by a team of four industry veterans with over 60
                years of combined experience in the
                petrochemical,constructions,manu-facturing,trading,technical
                services,and logistics sectors.Our team includes M.Sripal
                Reddy,an IIT graduate with 15 years of experience in
                petrochemicalproducts,and Mr.Anand,an internationally
                experienced businessman.Together,they guide our skilled
                workforce to deliver outtsanding results and unmatched customer
                satisfaction.
              </p>
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              voluptatem molestiae nam accusamus, maxime dolorem in amet a, nemo
              similique dolores aut id hic iste vel. Dignissimos ab facilis
              reprehenderit!
            </p>
          </div>
          <div className="started">
            <input
              type="text"
              required="required"
              placeholder="FirstName"
              value={FormData.name}
              onChange={(e) => {
                setFormData({
                  ...FormData,
                  name: e.target.value,
                });
              }}
            />
            <input
              type="email"
              required="required"
              placeholder="Email"
              value={FormData.email}
              onChange={(e) => {
                setFormData({
                  ...FormData,
                  email: e.target.value,
                });
              }}
            />
            <div className="arrow">
              <button type="get started" onClick={Submit}>
                GET STARTED <span className="right">→</span>
              </button>
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
}

export default Home;
