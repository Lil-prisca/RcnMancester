import { motion } from "framer-motion";
import altarpray from "../assets/Aactivities/img4.jpeg";

const ActivityExplained = ({
  label = "OUR ACTIVITIES",
  title = "Altar of Prayer",
  description = "A sacred space dedicated to intense intercession and seeking the presence of God. Join us as we cultivate a lifestyle of prayer that transforms hearts and communities.",
  image = altarpray,
}) => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className=" max-w-7xl container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-xl"
          >
            <span className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-4 font-bold uppercase">
              {label}
            </span>
            <h3 className="text-4xl md:text-5xl font-headline font-bold leading-tight mb-6">
              {title}
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden md:flex relative z-10 w-80 h-100 flex-shrink-0"
          >
            <img
              src={image}
              alt={title}
              className="rounded-2xl w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivityExplained;
