import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const EMAILJS_SERVICE_ID = "service_piy6fyu";
const EMAILJS_CONTACT_TEMPLATE_ID = "template_zkg3vgk";
const EMAILJS_PUBLIC_KEY = "Lb_ogUAd-BxtvtjuV";
const NOTIFY_EMAIL = "layodemo2@gmail.com"; //

const ContactInfo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactConsent: "",
    subject: "General Inquiry",
    message: "",
    gdprConsent: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          to_email: NOTIFY_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          contactConsent: formData.contactConsent,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
    } catch (emailErr) {
      console.error("Email send error:", emailErr);
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSubmitted(true);
  }

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

          {submitted ? (
            <div className="bg-black/20 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4 10l4 4 8-8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-navy">Message Sent</h4>
              <p className="text-on-surface-variant text-sm">
                Thanks for reaching out — our team will get back to you within
                24 hours.
              </p>
            </div>
          ) : (
            <form
              className="  bg-black/20 p-5 px-6  rounded-2xl space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant">
                  FULL NAME
                </label>
                <input
                  className="w-full bg-surface-container border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                {/* watapp */}
                <div>
                  <label className="text-sm font-semibold text-on-surface-variant">
                    Phone Number(WhatsApp Preferred)
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-surface-container border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
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
                    <input
                      type="radio"
                      name="contactConsent"
                      value="yes"
                      checked={formData.contactConsent === "yes"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactConsent: e.target.value,
                        })
                      }
                    />
                    Yes
                  </label>

                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="contactConsent"
                      value="no"
                      checked={formData.contactConsent === "no"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactConsent: e.target.value,
                        })
                      }
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant">
                  SUBJECT
                </label>
                <select
                  className="w-full bg-surface-container border-none rounded-lg p-4 pr-2 focus:ring-2 focus:ring-primary"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                >
                  <option>General Inquiry</option>
                  <option>Prayer Request</option>
                  <option>Volunteer Opportunities</option>
                  <option>Giving Support</option>
                  <option>Testimonies</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant">
                  MESSAGE
                </label>
                <textarea
                  className="w-full bg-surface-container border-none rounded-lg p-4 focus:ring-2 focus:ring-primary"
                  rows="5"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <div>
                <label className="flex items-start gap-3 text-black/60 text-xs">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={formData.gdprConsent}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gdprConsent: e.target.checked,
                      })
                    }
                  />

                  <span>
                    I agree to my data being processed in line with GDPR. We
                    respect your privacy and will only use this information for
                    RCN Cumbria updates.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-white hover:bg-on-primary hover:text-primary px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
        {/* <!-- Info Area & Map --> */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-surface-container-high rounded-3xl p-8 overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-navy mb-4">Location</h3>
              <p className="text-on-surface-variant mb-6">
                St Thomas Centre,
                <br />
                Ardwick Green North Manchester M12 6FZ
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
              <a
                className="flex items-center gap-4 hover:opacity-70 transition-opacity"
                href="https://www.instagram.com/rcnmanchester"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="">
                    <FaInstagram />
                  </span>
                </div>
                <span className="font-bold">Instagram </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
