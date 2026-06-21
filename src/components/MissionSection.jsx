import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="py-10 md:py-10 bg-surface">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative group">
              <img
                className="relative z-10 w-full asymmetric-border object-cover rounded-2xl h-100 shadow-2xl"
                data-alt=" worship leader with hands raised in prayer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAumipLxi9NIQPSNWJ45qlCOyOENxqwcXFZ6KQyWfQJu05xJ7hnuDeXDIIeVKNQUq486vn6wFZukj0zrbDIZZ_Bo128DwzP627ABAuZ7-gO6pFD3iJ-XpDX9Q4r2dgqCKB5fRAyhq_hUb6oaQbG9SO8h2DFYanUTJ1J8BOOx6Ymz2ZF7O6ybiGdmW-R7lYd8i6lQUHp02h74kfMqaRouU20i2KwC9NWEmU2D9LaYCDe32vkTxDFq6PhcGVLlAJbA1vc47qDsKxa3hQ"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 order-1 lg:order-2 pl-0 lg:pl-12"
          >
            <motion.label
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-secondary font-label font-sans font-bold tracking-widest text-s mb-4 block uppercase"
            >
              OUR VISION
            </motion.label>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-primary text-4xl md:text-6xl font-headline font-bold mb-8 leading-tight"
            >
              Striving For the <br /> Rebirth of <br />
              <span className="text-tertiary">Apostolic Christianity</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl"
            >
              <p>
                RCN Manchester is an extension of the Remnant Christian Network,
                a global apostolic movement dedicated to the restoration of the
                apostolic and prophetic foundations of the church.
              </p>
              <p>
                Our mission is simple: to witness the transformation of lives
                through the pure word of God, intense prayer, and a vibrant
                community that reflects the heart of the Father.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex flex-col">
                <span className="text-secondary font-bold text-3xl">100%</span>
                <span className="text-on-surface-variant text-sm font-label uppercase tracking-tighter">
                  Word Centered
                </span>
              </div>
              <div className="w-px h-12 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-secondary font-bold text-3xl">24/7</span>
                <span className="text-on-surface-variant text-sm font-label uppercase tracking-tighter">
                  Prayer Focus
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
