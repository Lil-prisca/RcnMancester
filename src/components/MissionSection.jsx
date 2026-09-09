import { motion } from "framer-motion";
import img16 from "../assets/Aactivities/img16.png";

const MissionSection = () => {
  return (
    <section className="py-10 md:py-10 bg-surface">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            // top-24 assumes roughly a 6rem fixed header — adjust to match yours
            className="lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-24"
          >
            <div className="relative group">
              <img
                className="relative z-10 w-full asymmetric-border object-cover rounded-2xl h-100 shadow-2xl"
                data-alt="RCN Manchester gathered in worship and prayer"
                src={img16}
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
              ABOUT US
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
              className="text-primary text-4xl md:text-6xl   font-bold mb-8 leading-tight"
            >
              About <span className="text-tertiary">RCN Manchester</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl"
            >
              <p>
                RCN Manchester is an extension of Remnant Christian Network
                (RCN), a global apostolic movement committed to the restoration
                of the apostolic and prophetic foundations of the Church and the
                raising of believers who are deeply rooted in Christ.
              </p>
              <p>
                Our mission is simple: to witness the transformation of lives
                through the pure Word of God, intense prayer, discipleship and a
                vibrant community that reflects the heart of the Father.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 space-y-8 max-w-2xl"
            >
              <div>
                <h3 className="text-primary text-xl md:text-2xl   font-bold mb-2">
                  A Community of Prayer and the Word
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-2">
                  Prayer and the Word of God are central to who we are.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-2">
                  Through our gatherings, we seek to create an environment where
                  people can encounter God, grow in spiritual maturity and be
                  equipped to live out His purposes wherever He has placed them.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  We are a family of believers from different backgrounds and
                  stages of life, united by our love for Jesus and a desire to
                  see His purposes established in our lives, our communities and
                  our generation.
                </p>
              </div>

              <div>
                <h3 className="text-primary text-xl md:text-2xl   font-bold mb-2">
                  A Place to Belong and Grow
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-2">
                  Whether you are exploring the Christian faith, returning to
                  fellowship, new to Manchester, or simply looking for a
                  community in which to grow, you are welcome.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Come worship, pray and fellowship with us. Let's grow together
                  as a family.{" "}
                  <strong className="text-primary font-semibold">
                    We'd love to have you with us.
                  </strong>
                </p>
              </div>

              <div>
                <h3 className="text-primary text-xl md:text-2xl   font-bold mb-2">
                  Our Commitment to Safeguarding
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-2">
                  We are committed to creating a safe, welcoming and caring
                  environment for everyone who participates in the life of RCN
                  Manchester, with particular regard for the safeguarding of
                  children, young people and adults at risk.
                </p>
                <a
                  href="/safeguarding"
                  className="inline-block text-secondary font-bold underline underline-offset-2"
                >
                  View Safeguarding
                </a>
              </div>

              <div>
                <h3 className="text-primary text-xl md:text-2xl   font-bold mb-2">
                  Part of a Wider Family
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-2">
                  As part of the wider Remnant Christian Network family, we
                  share a common burden to see Christ formed in people and a
                  praying, spiritually equipped Church raised to advance the
                  purposes of God.
                </p>
                <p className="text-primary font-semibold text-lg leading-relaxed">
                  We invite you to journey with us as we pursue Jesus together.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
