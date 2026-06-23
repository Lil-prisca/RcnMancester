import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { supabase } from "../supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCross,
  FaUsers,
  FaShirt,
  FaCarSide,
  FaClock,
  FaHeart,
} from "react-icons/fa6";

const faqs = [
  {
    icon: <FaShirt />,
    question: "What should I wear?",
    answer:
      "Come as you are. There's no dress code here — whether you're in jeans or a suit, you're welcome. Many people dress casually, others smart-casual. What matters most is your heart, not your outfit.",
  },
  {
    icon: <FaClock />,
    question: "How long is the service?",
    answer:
      "Our Sunday services typically run for about 2 hours, including worship, the Word, and ministry time. We never want you to feel rushed in God's presence.",
  },
  {
    icon: <FaUsers />,
    question: "Will I be put on the spot?",
    answer:
      "Never. You're free to simply observe, worship, and listen at your own pace. We won't single you out or ask you to do anything you're not comfortable with.",
  },
];

const expectations = [
  {
    icon: <FaHeart />,
    title: "A warm welcome",
    desc: "Our welcome team will greet you at the door, help you find a seat, and answer any questions you have.",
  },
  {
    icon: <FaUsers />,
    title: "Genuine community",
    desc: "You'll be surrounded by people who are genuinely glad you came — no pressure, just authentic connection.",
  },
  {
    icon: <FaCross />,
    title: "Powerful worship & word",
    desc: "Expect passionate worship and Spirit-filled teaching that speaks directly to where you are in life.",
  },
];

const IAmNewPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitDate: "",
  });

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setSubmitting(true);

  //   const { error } = await supabase.from("first_timers").insert({
  //     name: formData.name,
  //     email: formData.email,
  //     phone: formData.phone,
  //     visit_date: formData.visitDate || null,
  //     status: "new",
  //   });

  //   if (error) {
  //     console.error("First timer error:", error.message);
  //     setSubmitting(false);
  //     return;
  //   }

  //   setSubmitting(false);
  //   setSubmitted(true);
  // }

  return (
    <div className=" min-h-screen text-white">
      <Navbar />
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            alt="Welcoming church gathering"
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&q=85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#19143E] via-[#19143E]/70 to-[#19143E]/40" />
        </div>

        <div className="relative z-10 max-w-4xl  px-6 lg:px-10 py-32 text-left">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-6 font-bold uppercase"
          >
            FIRST TIME HERE?
          </motion.span>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-headline font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
          >
            We're So Glad
            <span className="block text-secondary">You're Here</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Whatever brought you here today, you're welcome exactly as you are.
            Here's everything you need to know before you visit.
          </motion.p>
        </div>
      </section>
      {/* What to expect */}
      <div
        className="w-100% bg-on-primary
      "
      >
        <section className=" bg-background text-black py-20 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-4 font-bold uppercase">
              WHAT TO EXPECT
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">
              Your First Visit
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expectations.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className=" border  rounded-2xl p-8 text-center bg-black/10 border-primary text-black transition-colors"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-secondary text-2xl mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl  font-bold mb-3">{item.title}</h3>
                <p className=" leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      {/* Service times */}
      <section className=" bg-black/20 py-16 relative overflow-hidden">
        <div className="  max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/10 border border-secondary/20 rounded-3xl p-10 lg:p-14 text-center text-black"
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8">
              Join Us This Sunday
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="bg-black/5 rounded-2xl p-6 border border-white/10 ">
                <div className="text-secondary text-3xl font-bold mb-1">
                  10:30 AM
                </div>
                <div className="text-black/50 text-sm">Morning Service</div>
              </div>
              <div className="bg-black/5 rounded-2xl p-6 border border-white/10">
                <div className="text-secondary text-3xl font-bold mb-1">
                  6:30 PM
                </div>
                <div className="text-black/50 text-sm text-black">
                  Evening Service
                </div>
              </div>
            </div>
            <p className="text-black/50 text-sm mt-8">
              Arrive 15 minutes early for a smoother start and a warm welcome.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="bg-primary max-w-8xl">
        {/* FAQ */}
        <section className=" bg-primary  py-10 max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-4 font-bold uppercase">
              COMMON QUESTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">
              Before You Visit
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary flex-shrink-0">
                  {faq.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{faq.question}</h4>
                  <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Connect card form */}
        <section className="py-10 max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-3">
                Let Us Know You're Coming
              </h2>
              <p className="text-white/60">
                Fill in your details so our welcome team can be ready to greet
                you personally.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary"
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
                <h4 className="text-xl font-bold mb-2">
                  We Can't Wait to Meet You!
                </h4>
                <p className="text-white/60 text-sm">
                  Our team will be looking out for you on your visit.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs font-medium mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@email.com"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-medium mb-2 block">
                      Phone Number(WhatsApp Preferred)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+44 7000 000000"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>
                {/* consent to contact */}

                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">
                    Would you like us to contact you?
                  </label>

                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 text-white">
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

                    <label className="flex items-center gap-2 text-white">
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

                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">
                    Which Sunday are you planning to visit?
                  </label>
                  <input
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) =>
                      setFormData({ ...formData, visitDate: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">
                    Mesage to Us
                  </label>
                  <textarea
                    type="text"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="message"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-xl px-4 py-3 outline-none focus:border-secondary transition-colors"
                  />
                </div>
                {/* consent to data */}
                <div>
                  <label className="flex items-start gap-3 text-white/60 text-xs">
                    <input
                      type="checkbox"
                      checked={formData.gdprConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          gdprConsent: e.target.checked,
                        })
                      }
                      className="mt-1"
                    />

                    <span>
                      I agree to my data being processed in line with GDPR. We
                      respect your privacy and will only use this information
                      for RCN Cumbria updates.
                    </span>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 rounded-2xl font-bold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting…" : "I'm Coming!"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </section>
        {/* Bottom CTA */}
        <section className="pb-5 text-center px-6">
          <p className="text-white/50 mb-4">
            Have more questions before you visit?
          </p>
          <Link to="/contact-us">
            <button className="border border-white/30 px-8 py-3 rounded-2xl font-bold hover:bg-white hover:text-[#19143E] transition-all">
              Get in Touch
            </button>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IAmNewPage;
