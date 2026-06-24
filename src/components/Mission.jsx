import { motion } from "framer-motion";
import missionimg from "../assets/author-portrait-.jpg";
import { FaBullseye, FaFlag, FaBook } from "react-icons/fa6";

const Mission = () => {
  return (
    <section className="py-10 relative">
      <div className="px-[20px] md:px-[80px] max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              className="w-full h-[400px] object-top object-cover rounded-3xl relative z-10  grayscale-0 transition-all duration-700"
              alt="spiritual depth and the quiet intensity of an apostolic mission."
              src={missionimg}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute bottom-8 left-9 z-20 glass-layer p-8 rounded-2xl max-w-[300px]"
            >
              <p className="text-white italic mb-2">
                "Restoring the ancient paths for a modern generation."
              </p>
              <span className="text-secondary font-label-md uppercase tracking-widest">
                Apostolic Vision
              </span>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-headline-xl font-sans font-bold text-[30px] text-black mb-8 text-3xl">
              Our Sacred Mandate
            </h2>
            <p className="font-body-lg text-black mb-12 leading-relaxed">
              At RCN Manchester, we are not just a church; we are a community of
              believers dedicated to the pursuit of the authentic apostolic
              life. We believe in the raw power of the Gospel to transform
              lives, cities, and nations.
            </p>
            <div className="space-y-8">
              {[
                {
                  icon: <FaFlag />,
                  title: "Mission",
                  desc: "To raise a generation of believers who are burning for God and established in the truth of His word.",
                },
                {
                  icon: <FaBullseye />,
                  title: "Vision",
                  desc: "To see Manchester and the United Kingdom transformed by the light and power of the Holy Spirit.",
                },
                {
                  icon: <FaBook />,
                  title: "Philosophy",
                  desc: "Intimacy, Intercession, and the accurate teaching of the Word as the foundations of growth.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center text-secondary border-secondary/20">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-headline-lg text-body-lg font-bold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant font-sans">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
