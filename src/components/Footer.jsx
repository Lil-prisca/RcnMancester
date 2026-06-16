import Logo from "../assets/rcn-mark.webp";
import { Link } from "react-router-dom";
const Navigations = [
  { label: "Sermons ", to: "/" },
  { label: "Events ", to: "/" },
  { label: "Locations ", to: "/" },
  { label: "Give ", to: "/" },
];
const Footer = () => {
  return (
    <div className="bg-[#19143E]">
    <div className="bg-[#19143E] text-white  flex flex-col md:flex-row md:justify-between gap-10 lg:gap-20   py-3 ">
      {/* curc Infoo */}
      <div className=" w-100 px-5">
        <div className="flex gap-2 items-center ">
          <div className=" w-5 h-12">
            <img src={Logo} alt="" />
          </div>
          <p className=" flex h-fit text-xl  ">RCN Manchester</p>
        </div>
       <p class="text-on-primary font-body-md max-w-md mb-8">
                    Remnant Christian Network Manchester is a community of believers dedicated to the pursuit of the authentic apostolic life and the restoration of God's fire in the hearts of men.
                </p>
      </div>
<div className="  flex flex-col gap-5 md:justify-beetwen  md:flex-row md:gap-50 px-5  py-3">
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
<div>© 20246RCN Manchester. All rights reserved.</div>
<div className="flex gap-8">
<span>International HQ: Nigeria</span>
<span>UK Registered Charity</span>
</div>
</div>
</div>
  );
};

export default Footer;
