import { useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import home from "../../../Assets/Images/homeheaderimage.png";
import about from "../../../Assets/Images/About-us.png";
import Ploy from "../../../Assets/icons/Polybags.svg";
import Bio_Cng from "../../../Assets/icons/Bio Cng Plant.svg";
import Lpg from "../../../Assets/icons/LPG Bottling 2.svg";
import Drums from "../../../Assets/icons/Packaging Drums.svg";
import Liquid from "../../../Assets/icons/Liquid Terminal.svg";
import Warehouse from "../../../Assets/icons/Warehouse & Ligistics.svg";
import "../Home/Home.scss";
import Navbar from "../../Navbar/Navbar";
import Contact from "../Contact/Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import indianOil from "../../../Assets/Images/indian-oil.svg";
import hp from "../../../Assets/Images/hp.png";
import hmel from "../../../Assets/Images/hmel.jpg";
import hmwsb from "../../../Assets/Images/hmwssb.jpg";
import rfcl from "../../../Assets/Images/rfcl.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";

function Home() {
  const location = useLocation();
  const clientLogos = [hp,  hmel, indianOil, rfcl, hmwsb];
  const navigate = useNavigate();
  const navigateToServices = () => {
    navigate("/services");
  };

  document.forms["sign-up-form"] = function (event) {
    if (this.username.value.trim() === "") {
      document.querySelector(".username-error").innerHTML =
        "Please enter a username";
      document.querySelector(".username-error").style.display = "block";
      event.preventDefault();
      return false;
    }
    if (this.email.value.trim() === "") {
      document.querySelector(".email-error").innerHTML = "Please enter a email";
      document.querySelector(".email-error").style.display = "block";
      event.preventDefault();
      return false;
    }

    event.preventDefault();
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
              Established in 2012 , We began our journey in the dynamic
              petroproducts industry and have since broadened our reach to
              diverse sectors, continually enriching lives and bolstering
              industries.
            </p>
            <p>
              Our diverse portfolio of services, ranging from petroleum product
              handling to sustainable energy production, has set new standards
              of excellence in the industry. These services are driven by our
              unwavering commitment to quality, safety, and efficiency.
            </p>

            <p>
              At the helm of Energon are seasoned leaders, who with their rich
              experience and industry insight, guide our endeavor to make a
              significant impact in the energy sector. As we move ahead, we stay
              true to our mission: To be an ally of growth, a catalyst of
              positive change, and a beacon of sustainable energy practices.
            </p>
            <p>
              Welcome to Energon. We don't just power industries; we empower
              futures.
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
            loop={true}
            spaceBetween={180}
            speed={1000}
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
              delay: 1000,
              // duration : 10000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="slider-card">
                <div className="content">
                  <h1>Manufacturing Excellence in Polybags</h1>
                  <p>
                    At Energon, we produce an astounding 12 million polybags per
                    month, reflecting our commitment to high-quality and durable
                    packaging solutions. Explore how our manufacturing prowess
                    caters to diverse industrial needs.
                  </p>
                  <button onClick={navigateToServices}>
                    EXPLORE OUR SERVICES
                  </button>
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
                  <h1>Championing Sustainability with Bio CNG</h1>
                  <p>
                    Pioneering the transition towards renewable energy, we
                    convert agricultural waste into BioGas at our
                    technologically advanced Bio CNG plants. Harness the power
                    of sustainable energy with our innovative waste-to-energy
                    solutions.
                  </p>
                  <button onClick={navigateToServices}>
                    EXPLORE OUR SERVICES
                  </button>
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
                  <h1>Bulk Bitumen Handling &Transportation</h1>
                  <p>
                    With state-of-the-art handling equipment and a fleet of
                    specialized vehicles, we ensure safe and efficient delivery
                    of bitumen under strict temperature controls, adhering to
                    industry standards. From refinery gates to the heart of your
                    operations, trust us for the seamless logistics of this
                    critical petroproduct.
                  </p>
                  <button onClick={navigateToServices}>
                    EXPLORE OUR SERVICES
                  </button>
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
                  <h1>Seamlessly Streamlining Global Trade</h1>
                  <p>
                    Enabling smooth trade across borders, Energon expertly
                    handles over 2000 TEUs per year in Container Terminal
                    Operations and Rake Movements, spread over 7 key locations.
                    Embark on your journey towards efficient and secure
                    logistics with us.
                  </p>
                  <button onClick={navigateToServices}>
                    EXPLORE OUR SERVICES
                  </button>
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
                <p className="Ser">
                  LIQUID TERMINAL <br /> HANDLING
                </p>
              </div>
              <div className="row">
                <img src={Warehouse} alt="" />
                <p className="Ser">WAREHOUSE & LOGISTICS</p>
              </div>
            </div>
          </div>
        </section>
        <section className="clients">
          <div className="title">
            <h1>Our Clients</h1>
          </div>
          <div className="client-logos">
            {clientLogos.map((logo, i) => {
              return (
                <div className="client-logo" key={`logo-${i}`}>
                  <img src={logo} alt="" />
                </div>
              );
            })}
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
            <form
              name="sign-up-form"
              action=""
              method="post"
              autoComplete="off"
            >
              <input type="text" required="required" placeholder="FirstName" />
              <p className="error firstname-error"></p>
              <input type="email" required="required" placeholder="Email" />
              <p className="error email-error"></p>
              <textarea
                name="enquiry"
                id=""
                cols="20"
                rows="5"
                placeholder="enter here..."
              ></textarea>
              <p className="error text-error"></p>
              <div className="arrow">
                <button type="get started">
                  SUBMIT <span className="right">→</span>
                </button>
              </div>
            </form>
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
}

export default Home;
