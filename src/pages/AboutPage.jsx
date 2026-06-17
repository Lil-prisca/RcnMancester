import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MissionSection from "../components/MissionSection";
import OurCores from "../components/OurCores";
import Team from "../components/Team";
import AboutHero from "../components/AboutHero";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <AboutHero />
        <MissionSection />
        <OurCores />
        <Team />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
