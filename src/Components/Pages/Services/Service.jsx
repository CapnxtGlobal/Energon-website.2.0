import React from "react";
import Navbar from "../../Navbar/Navbar";
import Dots from "../../../Assets/icons/Dots.svg";
import BulkBitumen from "../../../Assets/Images/Bulk Bitumen .png";
import BulkBitumenicon from "../../../Assets/icons/Bulk Bitumen Handling.svg";
import Packgingicon from "../../../Assets/icons/Packaging Drums.svg";
import StorageTankicon from "../../../Assets/icons/Storage Tank and Infrastructure Manufacuring.svg";
import WareHouseicon from "../../../Assets/icons/warehouse.svg";
import TransportationIcon from "../../../Assets/icons/Transportation.svg";
import CustamizationIcon from "../../../Assets/icons/Customized Technical Services.svg";
import Custamization from "../../../Assets/Images/Custamization.png";
import Cylindericon from "../../../Assets/icons/LPG Bottling 2.svg";
import BioGasCngIcon from "../../../Assets/icons/Bio Gas & CNG.svg";
import serviceStorageTankers from "../../../Assets/Images/service storage tankers.png";
import BioGasCNG from "../../../Assets/Images/Bio gas CNG.png";
import LpgBottling from "../../../Assets/Images/miniLpgCylinders.png";
import wareHouse from "../../../Assets/Images/Ware House.png";
import Transportation from "../../../Assets/Images/Transportation.png";
import MeterIcon from "../../../Assets/icons/Meter.svg";
import wareHouseSpaceIcon from "../../../Assets/icons/Ware house space .svg";
import polyBags from "../../../Assets/Images/polybags.jpg";
import polyIcon from "../../../Assets/icons/Polybags.svg";
import terminalOpsIcon from '../../../Assets/icons/terminal ops.svg';
import pipeLineIcon from '../../../Assets/icons/Pipeline Terminal.svg';
import bioCNGIcon from '../../../Assets/icons/Bio cng.svg';
import polyBagsIcon from '../../../Assets/icons/Poly Bags.svg';
import "./Service.scss";
import Contact from "../Contact/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Service() {
  function ScrollToTop() {
    const { services } = useLocation();

    useEffect(() => {
      // window.scrollTo({top:0,behavior:'auto'});
    }, [services]);

    return null;
  }
  let serviceCardsData = [
    {
      icon: BulkBitumenicon,
      heading: "Bulk Bitumen Handling and Packing",
      content: `Our team of experts specializes in the entire process of handling and packing bulk bitumen into drums. We have state-of-the-art facilities to ensure the utmost efficiency, making sure our clients in the oil and gas industry receive the highest quality service`,
      image: BulkBitumen,
      link: "#bitumen",
    },
    {
      icon: polyIcon,
      heading: "Integrated Manufacturing of PP and BOPP Bags",
      content: `Venturing into a new frontier of packaging solutions, Energon brings to you an upcoming state-of-
      the-art plant for Polypropylene (PP) and Biaxially Oriented Polypropylene (BOPP) bags. Focused on
      creating robust, versatile, and high-quality packaging, we're setting the stage to redefine industry
      standards.`,
      image: polyBags,
      link: "#poly",
    },
    {
      icon: StorageTankicon,
      heading: "Storage Tank and Infrastructure Manufacturing",
      content:
        "Our storage tank and infrastructure manufacturing division is dedicated to producing high-quality storage tankages and allied infrastructure. We work closely with clients to understand their specific requirements and deliver tailor-made solutions that meet their needs in the oil and gas industry",
      image: serviceStorageTankers,
      link: "#storage",
    },
    {
      icon: BioGasCngIcon,
      heading: "Bio Gas Production and CNG",
      content:
        "We are committed to promoting sustainable energy solutions, processing agricultural waste into bio gas, which is then sold as CNG to auto fuel stations. Our innovative approach to waste management contributes to a greener and more sustainable future.",
      image: BioGasCNG,
      link: "#bio",
    },
    {
      icon: Cylindericon,
      heading: "LPG Bottling",
      content:
        "Our LPG bottling service ensures the safe and efficient conversion of bulk LPG into easy-to-handle cylinders. We have a dedicated team and advanced equipment to meet the growing demand for LPG across various industries.",
      image: LpgBottling,
      link: "#bottle",
    },

    {
      icon: WareHouseicon,
      heading: "Warehousing & Secondary Transportation",
      content:
        "Our warehousing services offer secure storage solutions for clients such as IOCL and HPCL. With 100,000 sq. ft. of space and a 7,000 KL monthly throughput capacity, we can manage a wide range of products. Our secondary transportation services guarantee timely delivery to clients, covering an extensive area of 500,000 sq. km.",
      image: wareHouse,
      link: "#ware",
    },
    {
      icon: TransportationIcon,
      heading: "Transportation of Bulk Black Oils",
      content:
        "We provide a comprehensive transportation solution for a wide variety of bulk black oils. Our well-maintained fleet of vehicles and experienced drivers guarantee the safe and efficient delivery of products like bitumen, furnace oil, base oil, aromatic oils, and transformer oils. ",
      image: Transportation,
      link: "#black",
    },

    {
      icon: CustamizationIcon,
      heading: "Customized Technical Services",
      content:
        "We provide a range of customized technical services, including total fluid management and complete lubrication management solutions for industrial customers. Our in-house facilities feature laboratories, fuel testing equipment, and POL handling machinery, enabling us to cater to the unique requirements of each client.",
      image: Custamization,
      link: "#tech",
    },
  ];

  return (
    <>
      <ScrollToTop />
      <section className="Universal-Service" id="services">
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

          <section className="cards-container">
            {serviceCardsData.map((data, index) => {
              return (
                <div
                  className={`Card ${index % 2 !== 0 ? "reverse-card" : ""}`}
                  key={`card-${index}`}
                  id={data.link}
                >
                  <img className="Dots" src={Dots} alt="error while loading" />
                  <img
                    className="Card-Image"
                    src={data.image}
                    alt="error while loading"
                  />
                  <div className="content">
                    <header>
                      <img
                        className="Icon"
                        src={data.icon}
                        alt="error while loading"
                      />
                      <h1>{data.heading}</h1>
                    </header>
                    <p>{data.content}</p>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="categories">
            <div className="title">
              <h1>Our Performance, Your Confidence</h1>
              <p>A Snapshot of Energon's Impressive Track Record</p>
            </div>
            <div className="body">
              <div className="row">
                <img src={Packgingicon} alt="" />
                <h1 className="Value">100,000</h1>
                <p>Drums manufactured per month</p>
              </div>
              <div className="row">
                <img src={BulkBitumenicon} alt="" />
                <h1 className="Value">
                  12,000 <span className="Metrics">MT</span>
                </h1>
                <p>of Bitumen handled per month</p>
              </div>
              <div className="row">
                <img src={StorageTankicon} alt="" />
                <h1 className="Value">
                  2,500 <span className="Metrics">MT</span>
                </h1>
                <p>of Bitumen emulsions manufactured per month </p>
              </div>
              <div className="row">
                <img src={wareHouseSpaceIcon} alt="" />
                <h1 className="Value">
                  100,000 <span className="Metrics">sq.ft.</span>
                </h1>
                <p>of warehousing space</p>
              </div>
              <div className="row">
                <img src={terminalOpsIcon} alt="" />
                <h1 className="Value">40000<span className="Metrics">KL</span> </h1>
                <p>Terminals ops. per month</p>
              </div>
              <div className="row">
                <img src={pipeLineIcon} alt="" />
                <h1 className="Value">
                200000<span className="Metrics">KL</span>
                </h1>
                <p>Pipeline terminals per month</p>
              </div>
              <div className="row">
                <img src={bioCNGIcon} alt="" />
                <h1 className="Value">
                100<span className="Metrics">MT</span>
                </h1>
                <p>BIO CNG per month </p>
              </div>
              <div className="row">
                <img src={polyBagsIcon} alt="" />
                <h1 className="Value">
                  12 <span className="Metrics">million</span>
                </h1>
                <p>Polybags per month</p>
              </div>
              <div className="row">
                <img src={MeterIcon} alt="" />
                <h1 className="Value">7,000</h1>
                <p>
                  monthly throughput for warehousing{" "}
                  <span className="Metrics">KL</span>{" "}
                </p>
              </div>
              <div className="row">
                <img src={WareHouseicon} alt="" />
                <h1 className="Value">
                  500,000 <span className="Metrics">sq.km</span>
                </h1>
                <p>secondary transportation coverage</p>
              </div>
              <div className="row">
                <img src={Cylindericon} alt="" />
                <h1 className="Value">200,000</h1>
                <p>LPG cylinders bottled per month</p>
              </div>
            </div>
          </section>
        </section>
        <footer>
          <Contact />
        </footer>
      </section>
    </>
  );
}

export default Service;
