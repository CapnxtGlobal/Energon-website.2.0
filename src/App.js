import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Service from "./Components/Pages/Services/Service";
import AboutUs from "./Components/Pages/About-us/AboutUs";
import Contact from "./Components/Pages/Contact/Contact";
import topIcon from "./Assets/icons/go-to-top.svg";
import "./App.scss";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollTopBtn = document.querySelector(".scroll-to-top");
      if (
        window.document.scrollingElement.scrollTop >
        window.document.scrollingElement.scrollHeight / 10
      ) {
        scrollTopBtn.classList.remove("hide");
      } else {
        scrollTopBtn.classList.add("hide");
      }
    });
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* {/* <Navbar/> */}
        <div
          className="scroll-to-top hide"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={topIcon} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
