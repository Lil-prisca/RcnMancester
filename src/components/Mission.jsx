import { motion } from "framer-motion";
import missionimg from "../assets/author-portrait-.jpg";
import { FaBullseye, FaFlag, FaBook } from "react-icons/fa6";

const Mission = () => {
  return (
    <section className="  py-10 relative">
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
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-headline-xl font-sans font-bold text-[30px] text-black mb-5 text-3xl">
              Our Sacred Mandate
            </h2>
            <p className="font-body-lg text-black mb-5 leading-relaxed">
              At RCN Manchester, we are a community of believers dedicated to
              the pursuit of the authentic apostolic life. We believe in the raw
              power of the Gospel to transform lives, cities, and nations.
            </p>

            <div className="space-y-12">
              {[
                {
                  heading: "Vision Statement",
                  items: [
                    {
                      icon: <FaFlag />,
                      title: "Apostolic Rebirth",
                      desc: " To strive towards the rebirth of early apostolic Christianity as seen in the days of the first-generation apostles of Jesus Christ.",
                    },
                    {
                      icon: <FaBullseye />,
                      title: "Kingdom Realization",
                      desc: "To see the coming of the King and His Kingdom until His reality is furnished in the hearts of men, heralding the end-of-age return of Jesus Christ.",
                    },
                    {
                      icon: <FaBook />,
                      title: "Kingdom Pillars",
                      desc: "To raise believers and ministers who are passionately committed to the will and work of God.",
                    },
                  ],
                },
                {
                  heading: "Mission Statement",
                  items: [
                    {
                      icon: <FaFlag />,
                      title: "Core Practices",
                      desc: "To utilize prayer, the intense study of the Word, and the breaking of bread as the primary instruments for spiritual growth and community building.",
                    },
                    {
                      icon: <FaBullseye />,
                      title: "Equipping Ministers",
                      desc: "To train and deploy effective ministers of the Gospel to advance the work of the church and preserve true biblical doctrine.",
                    },
                    {
                      icon: <FaBook />,
                      title: "Apostolic Community",
                      desc: "To build living apostolic communities through aggressive evangelism, missions, and active fellowship.",
                    },
                  ],
                },
              ].map((group) => (
                <div key={group.heading} className="space-y-3">
                  <h3 className="font-headline-lg text-body-xl font-bold">
                    {group.heading}
                  </h3>
                  {group.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      className="flex gap-3"
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
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
