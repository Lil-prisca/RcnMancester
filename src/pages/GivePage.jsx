import Navbar from "../components/Navbar";
import Give from "../components/Give";
import GiveSection from "../components/GiveSection";
import Footer from "../components/Footer";

const GivePage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Give />
        <GiveSection />
      </div>
      <Footer />
    </div>
  );
};

export default GivePage;
