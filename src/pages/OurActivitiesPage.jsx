import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Activity from "../components/Activity";
import Gallery from "../components/Gallery";
import ActivityHero from "../components/ActivityHero";
import ActivityExplained from "../components/ActivityExplained";

const OurActivitiesPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <ActivityHero />
        <Activity />
        <ActivityExplained />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default OurActivitiesPage;
