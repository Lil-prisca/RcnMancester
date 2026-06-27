import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import worship from "../assets/worship.jpg";

const Hero = () => {
  return (
    <section className="relative  min-h-[70vh] mt-20 py-15 flex items-center overflow-hidden bg-[#19143E] ">
      {/* hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          alt="large gathering"
          src={worship}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19143E] via-[#19143E]/60 to-transparent"></div>
      </div>

      <div className=" text-center flex justify-center container mx-auto px-8 relative z-10  ">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-6  font-bold uppercase"
          >
            THE DIVINE SANCTUARY
          </motion.span>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-6xl md:text-8xl font-headline font-extrabold tracking-[-0.04em] leading-[0.95] mb-8"
          >
            Welcome to <span className="text-secondary">RCN</span> Manchester
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-white/80 text-xl md:text-2xl mx-auto  font-body max-w-xl leading-relaxed mb-5"
          >
            A Place of Prayer, Word, and Fellowship. Experience the
            transformative power of the Spirit in the heart of the city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/about-us">
              <motion.button
                whileHover={{
                  scale: 1.06,
                  y: -3,
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="bg-secondary hover:bg-white hover:text-secondary text-white px-5 py-2 rounded-lg font-bold text-lg transition-colors duration-300"
              >
                About Us
              </motion.button>
            </Link>

            <Link to="/iamnew">
              <motion.button
                whileHover={{
                  scale: 1.06,
                  y: -3,
                  boxShadow: "0px 12px 30px rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-secondary px-5 py-2 rounded-lg font-bold text-lg transition-colors duration-300"
              >
                I am New
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
