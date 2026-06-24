import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
const ContactInfo = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* <!-- Form Area --> */}
        <div className="lg:col-span-7">
          <h2 className="text-4xl font-bold text-navy mb-2">Get in Touch</h2>
          <p className="text-on-surface-variant mb-12 text-lg">
            Have questions? We'd love to hear from you. Send us a message and
            our team will get back to you within 24 hours.
          </p>
          <form className="  bg-black/20 p-5 px-6  rounded-2xl space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant">
                FULL NAME
              </label>
              <input
                className="w-full bg-surface-container border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant">
                  EMAIL ADDRESS
                </label>
                <input
                  className="w-full bg-surface-container border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              {/* watapp */}
              <div>
                <label className="text-sm font-semibold text-on-surface-variant">
                  Phone Number(WhatsApp Preferred)
                </label>
                <input
                  type="tel"
                  placeholder="+44 7000 000000"
                  className="w-full bg-surface-container border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            {/* contact-permission */}
            <div>
              <label className="text-black/60 text-xs font-medium mb-2 block">
                Would you like us to contact you?
              </label>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-black">
                  <input type="radio" name="contactConsent" value="yes" />
                  Yes
                </label>

                <label className="flex items-center gap-2 text-black">
                  <input type="radio" name="contactConsent" value="no" />
                  No
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant">
                SUBJECT
              </label>
              <select className="w-full bg-surface-container border-none rounded-lg p-4 pr-2 focus:ring-2 focus:ring-primary">
                <option>General Inquiry</option>
                <option>Prayer Request</option>
                <option>Volunteer Opportunities</option>
                <option>Giving Support</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant">
                MESSAGE
              </label>
              <textarea
                className="w-full bg-surface-container border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                placeholder="How can we help you today?"
                rows="5"
              ></textarea>
            </div>
            <div>
              <label className="flex items-start gap-3 text-black/60 text-xs">
                <input type="checkbox" className="mt-1" />

                <span>
                  I agree to my data being processed in line with GDPR. We
                  respect your privacy and will only use this information for
                  RCN Cumbria updates.
                </span>
              </label>
            </div>

            <button className="bg-primary text-white hover:bg-on-primary hover:text-primary px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all">
              Send Message
            </button>
          </form>
        </div>
        {/* <!-- Info Area & Map --> */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-surface-container-high rounded-3xl p-8 overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-navy mb-4">Location</h3>
              <p className="text-on-surface-variant mb-6">
                Manchester City Centre,
                <br />
                Unit 4, Great Northern Warehouse,
                <br />
                Manchester M3 4EN
              </p>
              {/* <div className="flex items-center gap-4 text-primary font-semibold group-hover:translate-x-2 transition-transform">
                <span className="material-symbols-outlined">directions</span>
                Get Directions
              </div> */}
            </div>
            {/* <!-- Decorative Map Background --> */}
            <div className="absolute inset-0 opacity-50 pointer-events-none grayscale">
              <img
                alt="Map location"
                className="w-full h-full object-cover"
                // data-location="Manchester"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmydlBtb2oiWTblwFpCZeIo5ReGJPIBom_-q1BcHgThWiOYVGUBYgQey2cDImIFuKN7mEXnI6ClB0bylUPV3RagjTpKWTFkugK7Dcsz09crqLuAPsgGMLdU1uhCYAqK_kPhrad4HdPz6A6nEEQNG4nRDNYQRXPbMZxJh9lshDHgMYR16ohSePgwxeHsF3DFwxBxKMyosNDzhuW-v4ERW8cFM2mWxJEWNmyWEjILQXNvFApuOFHVrowBd5WbLYJ1zFs4QwuonhEcRw"
              />
            </div>
          </div>
          <div className="bg-navy rounded-3xl p-8 text-primary flex-1">
            <h3 className="text-2xl font-bold mb-6 text-secondary">
              Connect with Us
            </h3>
            <div className="space-y-6">
              <a
                className="flex items-center gap-4 hover:opacity-70 transition-opacity"
                href="https://www.youtube.com/@RCNManchester"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="">
                    <FaYoutube />
                  </span>
                </div>
                <span className="font-bold">YouTube — Watch Live</span>
              </a>
              <a
                className="flex items-center gap-4 hover:opacity-70 transition-opacity"
                href="https://www.instagram.com/rcnmanchester"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="">
                    <FaInstagram />
                  </span>
                </div>
                <span className="font-bold">Instagram — Daily Inspiration</span>
              </a>
              <a
                className="flex items-center gap-4 hover:opacity-70 transition-opacity"
                href="https://www.facebook.com/profile.php?id=61559539801601"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="">
                    <FaFacebookF />
                  </span>
                </div>
                <span className="font-bold">Facebook — Community Updates</span>
              </a>
              <a
                className="flex items-center gap-4 hover:opacity-70 transition-opacity"
                href="https://chat.whatsapp.com/DQ1vPaiDpk7IOhZubaaw1q"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="">
                    <FaWhatsapp />
                  </span>
                </div>
                <span className="font-bold">WhatsApp — Daily Updates</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
