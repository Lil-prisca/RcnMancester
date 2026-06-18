import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
