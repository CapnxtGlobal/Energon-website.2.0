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
import BitumenEmulsionIcon from "../../../Assets/icons/Bitumen Emulsion.svg";
import serviceStorageTankers from "../../../Assets/Images/service storage tankers.png";
import BioGasCNG from "../../../Assets/Images/Bio gas CNG.png";
import LpgBottling from "../../../Assets/Images/miniLpgCylinders.png";
import wareHouse from "../../../Assets/Images/Ware House.png";
import Transportation from "../../../Assets/Images/Transportation.png";
import BitumenEmulsion from "../../../Assets/Images/bitumen emulsion.png";
import TradingAndMarketing from "../../../Assets/Images/Trading & Marketing.png";
import TradingAndMarketingIcon from "../../../Assets/icons/Trading & Marketing.svg";
import MeterIcon from "../../../Assets/icons/Meter.svg";
import wareHouseSpaceIcon from "../../../Assets/icons/Ware house space .svg";

import "./Service.scss";
import Contact from "../Contact/Contact";

function Service() {
  let serviceCardsData = [
    {
      icon: BulkBitumenicon,
      heading: "Bulk Bitumen Handling and Packing",
      content:
        "Our team of experts specializes in the entire process of handling and packing bulk bitumen into drums. We have state-of-the-art facilities to ensure the utmost efficiency, making sure our clients in the oil and gas industry receive the highest quality service",
      image: BulkBitumen,
      DotsImage: Dots,
    },

    {
      icon: StorageTankicon,
      heading: "Storage Tank and Infrastructure Manufacturing",
      content:
        "Our storage tank and infrastructure manufacturing division is dedicated to producing high-quality storage tankages and allied infrastructure. We work closely with clients to understand their specific requirements and deliver tailor-made solutions that meet their needs in the oil and gas industry",
      image: serviceStorageTankers,
      DotsImage: Dots,
    },
    {
      icon: BioGasCngIcon,
      heading: "Bio Gas Production and CNG",
      content:
        "We are committed to promoting sustainable energy solutions, processing agricultural waste into bio gas, which is then sold as CNG to auto fuel stations. Our innovative approach to waste management contributes to a greener and more sustainable future.",
      image: BioGasCNG,
      DotsImage: Dots,
    },
    {
      icon: Cylindericon,
      heading: "LPG Bottling",
      content:
        "Our LPG bottling service ensures the safe and efficient conversion of bulk LPG into easy-to-handle cylinders. We have a dedicated team and advanced equipment to meet the growing demand for LPG across various industries.",
      image: LpgBottling,
      DotsImage: Dots,
    },
    {
      icon: WareHouseicon,
      heading: "Warehousing & Secondary Transportation",
      content:
        "Our warehousing services offer secure storage solutions for clients such as IOCL and HPCL. With 100,000 sq. ft. of space and a 7,000 KL monthly throughput capacity, we can manage a wide range of products. Our secondary transportation services guarantee timely delivery to clients, covering an extensive area of 500,000 sq. km.",
      image: wareHouse,
      DotsImage: Dots,
    },
    {
      icon: TransportationIcon,
      heading: "Transportation of Bulk Black Oils",
      content:
        "We provide a comprehensive transportation solution for a wide variety of bulk black oils. Our well-maintained fleet of vehicles and experienced drivers guarantee the safe and efficient delivery of products like bitumen, furnace oil, base oil, aromatic oils, and transformer oils. ",
      image: Transportation,
      DotsImage: Dots,
    },

    {
      icon: BitumenEmulsionIcon,
      heading: "Bitumen Emulsion Manufacturing",
      content:
        "Our bitumen emulsion manufacturing division produces top-quality emulsion grades that adhere to IS standards. We use advanced technology and rigorous quality control measures to ensure that our clients receive industry-leading products for their specific needs.",
      image: BitumenEmulsion,
      DotsImage: Dots,
    },

    {
      icon: CustamizationIcon,
      heading: "Customized Technical Services",
      content:
        "We provide a range of customized technical services, including total fluid management and complete lubrication management solutions for industrial customers. Our in-house facilities feature laboratories, fuel testing equipment, and POL handling machinery, enabling us to cater to the unique requirements of each client.",
      image: Custamization,
      DotsImage: Dots,
    },

    {
      icon: TradingAndMarketingIcon,
      heading: "Trading and Marketing",
      content:
        "Our trading and marketing division handles a diverse range of products, including base oils, lubricants, greases, transformer oils, rubber process oils, and solvents. We have established a strong network of suppliers and buyers, enabling us to cater to the needs of various industries efficiently and effectively.",
      image: TradingAndMarketing,
      DotsImage: Dots,
    },
  ];

  return (
    <>
      <section className="Universal-Service">
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
                <>
                  <div
                    className={`Card ${index % 2 !== 0 ? "reverse-card" : ""}`}
                    // onClick={() => {
                    //   window.alert(index + 1);
                    // }}
                  >
                    <img
                      className="Dots"
                      src={data.DotsImage}
                      alt="error while loading the image"
                    />
                    <img
                      className="Card-Image"
                      src={data.image}
                      alt="error while loading the image"
                    />
                    <div className="content">
                      <header>
                        <img
                          className="Icon"
                          src={data.icon}
                          alt="error while loading the image"
                        />
                        <h1>{data.heading}</h1>
                      </header>
                      <p>{data.content}</p>
                    </div>
                  </div>
                </>
              );
            })}

            {/* for refrence code cards */}
            {/* <div className="Card">
              <img
                className="Dots"
                src={Dots}
                alt="error while loading the image"
              />
              <img
                className="Card-Image"
                src={BulkBitumen}
                alt="error while loading the image"
              />
              <div className="content">
                <header>
                  <img
                    className="Icon"
                    src={BulkBitumenicon}
                    alt="error while loading the image"
                  />
                  <h1>Bulk Bitumen Handling and Packing</h1>
                </header>
                <p>
                  Our team of experts specializes in the entire process of
                  handling and packing bulk bitumen into drums. We have
                  state-of-the-art facilities to ensure the utmost efficiency,
                  making sure our clients in the oil and gas industry receive
                  the highest quality service
                </p>
              </div>
            </div> */}

            {/* for refrence of reverse cards */}
            {/* <div className="Card reverse-card">
              <img
                className="Dots"
                src={Dots}
                alt="error while loading the image"
              />
              <img
                className="Card-Image"
                src={BulkBitumen}
                alt="error while loading the image"
              />
              <div className="content">
                <header>
                  <img
                    className="Icon"
                    src={BulkBitumenicon}
                    alt="error while loading the image"
                  />
                  <h1>Bulk Bitumen Handling and Packing</h1>
                </header>
                <p>
                  Our team of experts specializes in the entire process of
                  handling and packing bulk bitumen into drums. We have
                  state-of-the-art facilities to ensure the utmost efficiency,
                  making sure our clients in the oil and gas industry receive
                  the highest quality service
                </p>
              </div>
            </div> */}
            
          </section>

          <section className="categories">
            <div className="col">
              
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
            </div>
            <div className="col">
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
