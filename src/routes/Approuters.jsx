import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage"
import Contact from "../pages/ContactPage"
import OurActivities from "../pages/OurActivitiesPage"

const Approuters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/our-activities" element={<OurActivities/>} />
      </Routes>
    </>
  );
};

export default Approuters;
