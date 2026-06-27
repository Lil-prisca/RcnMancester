import Logo from "../assets/rcn-mark.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const Navigations = [
  { label: "Our Activities", to: "/our-activities" },
  { label: "About", to: "/about" },
  { label: "Contact Us ", to: "/contact-us" },
  { label: "Give", to: "/give" },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61559539801601",
    color: "#1877F2",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/rcnmanchester",
    color: "#df6427",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@RCNManchester",
    color: "#FF0000",
    label: "YouTube",
  },
  {
    icon: FaWhatsapp,
    href: "https://chat.whatsapp.com/DQ1vPaiDpk7IOhZubaaw1q",
    color: "#00B328",
    label: "WhatsApp",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#19143E] pt-5">
      <div className=" w-[90%] max-w-400 mx-auto  text-white  flex flex-col  md:flex-row  py-3 ">
        {/* curc Infoo */}
        <div className="  w-90 md:w-100  px-5">
          <div className="flex gap-2 items-center ">
            <div className=" w-5 h-12">
              <img src={Logo} alt="" />
            </div>
            <p className=" flex h-fit text-xl  ">RCN Manchester</p>
          </div>
          <p className="text-on-primary font-body-md max-w-md mb-5 lg:mb-2 ">
            Remnant Christian Network Manchester is a community of believers
            dedicated to the pursuit of the authentic apostolic life and the
            restoration of God's fire in the hearts of men.
          </p>
          <div className="  mt-3 flex items-center gap-3 mb-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-transparent hover:scale-110"
                  style={{
                    "--hover-color": social.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                    e.currentTarget.style.color =
                      social.color === "#ffffff" ? "#000" : "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
        {/* <div className="flex-col    px-5  py-3  lg:mr-40"> */}
        {/*Naviations  */}
        <div className=" flex ml-5 mt-8 flex-col">
          <p className="text-[#BF5A16]">Navigations</p>
          {Navigations.map((link) => (
            <Link key={link.label}>{link.label}</Link>
          ))}
        </div>
        {/* </div> */}
      </div>
      <div className="px-5 md:px-20 py-5 border-t border-white/5 max-w-323 m-auto  text-center  text-on-primary ">
        <div>© 2026 RCN Manchester. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
