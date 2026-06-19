import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Activity from "../components/Activity";

const OurActivitiesPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <Activity />
        <p> OurActivitiesPage</p>
      </div>
      <Footer />
    </div>
  );
};

export default OurActivitiesPage;
