import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative min-h-150 md:min-h-150 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          alt="A cinematic, low-angle photograph of Manchester's g"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn2eUMHMdLxpfmrn2OQ34gGf-wr7hjinRmRSRNIVQacs2_1a8MStWIVaI22PERloTac0uQaPslYZyMzC_IV0X37w1HfQkRiEEXeNcQWpcT5q_QlUyzgWc4HPwYpkiJmcqRafSkmEZa9z-fMgOx2s0fM0jXnvK1DH5cHzbEF7SRVwCPe5aBl_eErYTiOTS31gCIiwDyrm8ZuzJ2q6tNkqhE98RNRrYT9D0NsSOmwysYPV05CVw0-J1VFad4kXo9I2YAgYoDnFXEcqo"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary via-transparent to-primary"></div>
      </div>

      <div className="relative z-10 text-left px-[20px] md:px-[80px] max-w-4xl">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-6 font-bold uppercase"
        >
          THE APOSTOLIC MANDATE
        </motion.span>

        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 leading-tight text-6xl md:text-7xl font-extrabold tracking-[-0.04em]"
        >
          About Remnant <br className="hidden md:block" /> Christian Network{" "}
          <span className="text-secondary">Manchester</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[18px] text-on-primary max-w-2xl"
        >
          Raising a generation of priests who will represent the government of
          God in the heart of the United Kingdom.
        </motion.p>
      </div>

      {/* Ambient Glows */}
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] alchemist-glow blur-[100px] rounded-full"></div>
      <div className="absolute top-1/4 -right-1/4 w-[400px] h-[400px] alchemist-glow blur-[100px] rounded-full opacity-50"></div>
    </section>
  );
};

export default AboutHero;
