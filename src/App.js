import logo from "./logo.svg";
import {Routes , Route} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Service from "./Components/Pages/Services/Service";
import AboutUs from "./Components/Pages/About-us/About-us";
import Contact from "./Components/Pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <>
    <div>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/Contact" element={<Contact/>} />

    </Routes>

    </div>
    </>
  );
}

export default App;
