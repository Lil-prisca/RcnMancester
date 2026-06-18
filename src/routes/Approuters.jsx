import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import Contact from "../pages/ContactPage";
import OurActivities from "../pages/OurActivitiesPage";
import TeamsPage from "../pages/TeamsPage";
import GivePage from "../pages/GivePage";

const Approuters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/give" element={<GivePage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/our-activities" element={<OurActivities />} />
        <Route path="/team-members" element={<TeamsPage />} />
      </Routes>
    </>
  );
};

export default Approuters;
