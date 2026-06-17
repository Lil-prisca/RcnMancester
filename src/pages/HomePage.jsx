import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Team from "../components/Team";
import SpotlightEvent from "../components/SpotlightEvent";
import LiveSection from "../components/LiveSection";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <Hero />
        <Mission />
        <LiveSection />
        <Team />
        <SpotlightEvent />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
