import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import ContactHero from "../components/ContactHero";

const ContactPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <ContactHero />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
