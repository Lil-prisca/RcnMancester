import { motion } from "framer-motion";
import altarpray from "../assets/cross.jpg";

const ActivityExplained = ({
  title = "Altar of Prayer",
  description = "An altar of earth you shall make for me and sacrifice on it your burnt offerings and your peace offerings... In every place where I cause my name to be remembered I will come to you and bless you. ",
  verse = "Exodus 20:24",
  image = altarpray,
}) => {
  return (
    <section className="h-[419px] overflow-hidden w-full relative flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="Epic, moody mountain peaks of the Lake District covered in soft morning mist, representing the presence of God in nature"
          src={image}
        />
        <div className="absolute inset-0 bg-[#131318]/60 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-headline italic text-5xl md:text-7xl text-white mb-8"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-headline text-2xl md:text-2xl text-on-primary font-light italic leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-headline text-1xl md:text-2xl text-on-primary font-light italic leading-relaxed"
        >
          {verse}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 h-[2px] w-32 bg-secondary mx-auto"
        ></motion.div>
      </div>
    </section>
    // <section className="bg-primary text-on-primary relative py-16 overflow-hidden">
    //   <div className=" max-w-7xl container mx-auto px-8">
    //     <div className="flex flex-col md:flex-row md:justify-between items-center gap-12">
    //       {/* Text */}
    //       <motion.div
    //         initial={{ opacity: 0, x: -30 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         viewport={{ once: false }}
    //         transition={{ duration: 0.7 }}
    //         className="flex-1 max-w-xl"
    //       >
    //         <h3 className="text-4xl md:text-5xl font-headline font-bold leading-tight mb-6">
    //           {title}
    //         </h3>
    //         <p className="text-on-primary text-lg leading-relaxed">
    //           {description}
    //         </p>
    //       </motion.div>

    //       {/* Image */}
    //       <motion.div
    //         initial={{ opacity: 0, x: 30 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         viewport={{ once: false }}
    //         transition={{ duration: 0.7, delay: 0.15 }}
    //         className="hidden md:flex relative z-10 w-80 h-100 flex-shrink-0"
    //       >
    //         <img
    //           src={image}
    //           alt={title}
    //           className="rounded-2xl w-full h-full object-cover"
    //         />
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ActivityExplained;
