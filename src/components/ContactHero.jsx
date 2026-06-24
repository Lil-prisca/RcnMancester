import map from "../assets/curchmembers.jpg";
import people from "../assets/calling.jpg";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative min-h-150 md:min-h-100 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          alt="A cinematic, low-angle photograph of Manchester's g"
          src={map}
        />
        <div className="absolute  inset-0 bg-primary/80 "></div>
      </div>
      <div className="flex">
        <div className="   relative z-10 text-left px-[20px] md:px-[80px] md:py-20 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-1 font-bold uppercase"
          >
            CONTACT US
          </motion.span>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-1 leading-tight text-on-primary text-5xl md:text-7xl font-extrabold tracking-[-0.04em]"
          >
            GET IN TOUCH <br /> <span>We're Here to Help.</span>
            <br /> Let's Connect. <br />
            <span className="text-secondary">Reach Out Anytime</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-[18px] text-on-primary max-w-2xl leading-relaxed"
          >
            Whether you have a question, need prayer, want more information
            about our church, or would like to speak with a member of our team,
            we'd love to hear from you. Contact us through any of the channels
            below, and we'll get back to you as soon as possible.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className=" hidden md:flex relative z-10   top-20 left-20 w-100 h-100"
        >
          <img src={people} alt="" className="rounded-2xl cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
