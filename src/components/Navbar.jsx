import Logo from "../assets/rcn-mark.webp";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Home ", to: "/" },
  { label: "Our Activities ", to: "/our-activities" },
  { label: "About ", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },
];
const Navbar = () => {
  //  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#e6e3e3] w-100% max-w-400 mx-auto px-6 lg:px-10 flex items-center justify-between h-15 ">
      {/* Logo */}
      <div className="flex gap-2 items-center ">
        <div className=" w-5 h-12">
          <img src={Logo} alt="" />
        </div>
        <p className=" hidden md:flex h-fit text-secondary text-xl  ">
          RCN <span className="text-primary"> Manchester </span>
        </p>
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
        <Link
          to="/give"
          className="bg-[#BF5A16] px-4 py-1 rounded-xl text-white"
        >
          Give
        </Link>
      </div>

      {/*  */}
      <div className=" md:hidden flex items-center gap-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-black block transition-all"
          />
          <span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-black block"
          />
          <span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-black block"
          />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-x-0 top-15 z-40 glass-layer  p-6 md:hidden">
          <div className="  flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary text-lg py-2 transition-colors"
                    : "text-on-primary  text-lg py-2 transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
