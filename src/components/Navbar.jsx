import Logo from "../assets/rcn-mark.webp";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { label: "Home ", to: "/" },
  { label: "Our Activities ", to: "/our-activities" },
  { label: "About ", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },
];
const Navbar = () => {
  return (
    <div className="bg-[#e6e3e3] w-100% max-w-400 mx-auto px-6 lg:px-10 flex items-center justify-between h-15 ">
      {/* Logo */}
      <div className="flex gap-2 items-center ">
        <div className=" w-5 h-12">
          <img src={Logo} alt="" />
        </div>
        <p className=" flex h-fit text-xl  ">RCN Manchester</p>
      </div>

      {/* NavLinks */}
      <div className="hidden md:flex items-center lg:gap-8 md:gap-5 md">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-lg text-[#BF5A16] hover:text-black transition-colors duration-200 relative group border-b-2 border-[#BF5A16]"
                : "text-lg text-black/70 hover:text-black transition-colors duration-200 relative group"
            }
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/" className="bg-[#BF5A16] px-4 py-1 rounded-xl text-white">
          Give
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
