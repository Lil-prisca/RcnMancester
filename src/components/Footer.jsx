import Logo from "../assets/rcn-mark.webp";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

import { Link } from "react-router-dom";
const Navigations = [
  { label: "Sermons ", to: "/" },
  { label: "Events ", to: "/" },
  { label: "Locations ", to: "/" },
  { label: "Give ", to: "/" },
];
const socials = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com/yourpage",
    color: "#1877F2",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/yourpage",
    color: "#E1306C",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/yourchannel",
    color: "#FF0000",
    label: "YouTube",
  },
  {
    icon: FaTiktok,
    href: "https://tiktok.com/@yourpage",
    color: "#ffffff",
    label: "TikTok",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#19143E] pt-5">
      <div className="bg-[#19143E] text-white  flex flex-col md:flex-row md:justify-between gap-10 lg:gap-20   py-3 ">
        {/* curc Infoo */}
        <div className=" w-100 md:w-200 lg:w-200 px-5">
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
          <div className="  mt-3 flex items-center gap-3">
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
        <div className="   flex flex-col gap-5 md:justify-beetwen  md:flex-row md:gap-20 lg:gap-40 px-5  py-3  lg:mr-40">
          {/*Naviations  */}
          <div className="flex flex-col">
            <p className="text-[#BF5A16]">Navigations</p>
            {Navigations.map((link) => (
              <Link key={link.label}>{link.label}</Link>
            ))}
          </div>

          {/* community */}
          <div className="flex flex-col">
            <p className="text-[#BF5A16]">Community</p>
            {Navigations.map((link) => (
              <Link key={link.label}>{link.label}</Link>
            ))}
          </div>

          {/* /Contact */}
          <div className="flex flex-col">
            <p className="text-[#BF5A16]">Contact</p>
            {Navigations.map((link) => (
              <Link key={link.label}>{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-[20px] md:px-[80px] py-8 border-t border-white/5 max-w-[1290px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-on-primary text-label-md">
        <div>© 2026 RCN Manchester. All rights reserved.</div>
        <div className="flex gap-8">
          <span>International HQ: Nigeria</span>
          <span>UK Registered Charity</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
