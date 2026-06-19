import { motion } from "framer-motion";
import { FaLayerGroup, FaBookOpen, FaHeart, FaChurch } from "react-icons/fa";

const values = [
  {
    icon: <FaChurch />,
    title: "Holiness",
    desc: "Living a life consecrated and separated unto God in every sphere.",
  },
  {
    icon: <FaHeart />,
    title: "Love",
    desc: "Reflecting the unconditional nature of Christ in our community.",
  },
  {
    icon: <FaBookOpen />,
    title: "Sound Doctrine",
    desc: "Upholding the undiluted truth of God's word with precision.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Service",
    desc: "Stewarding our gifts for the building of the Body and the city.",
  },
];

const OurCores = () => {
  return (
    <section className="bg-primary max-w-8xl">
      <div className="py-5 lg:py-10 px-10 md:px[80px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-headline-xl text-headline-xl font-sans text-3xl text-on-primary mb-4">
            Core Values
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 border bg-surface-container border-on-primary rounded-xl glass hover:bg-[#0a0625] text-on-surface-variant hover:text-on-primary transition-colors group"
            >
              <span className="text-secondary text-3xl mb-4 block group-hover:scale-110 transition-transform">
                {value.icon}
              </span>
              <h4 className="font-label-md text-secondary uppercase tracking-widest mb-2">
                {value.title}
              </h4>
              <p className="text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCores;
