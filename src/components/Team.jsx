import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import setman from "../assets/setman-2.webp";
import setman2 from "../assets/AAO.jpg";
import setman3 from "../assets/pke.jpeg";

const leaderImages = [setman, setman2, setman3];

const Team = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % leaderImages.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="px-0 py-5 pb-10 bg-primary/30">
      <div className="px-5 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-10 mt-4"
        >
          <h2 className="font-headline-lg font-sans text-3xl font-bold text-headline-lg">
            Spiritual Oversight
          </h2>
          <div className="w-20 h-1 bg-primary mt-1"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Pastor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="md:w-1/2 aspect-[4/5]">
              <img
                className="w-full md:h-full h-100 object-cover"
                alt="A professional, high-contrast portrait of a male pastor in a sophisticated dark suit."
                src={setman2}
              />
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <span className="font-label-sm text-[24px] text-primary mb-2">
                Apostle Arome Osayi
              </span>
              <h3 className="font-headline-md text-[10px] mb-4">
                Set Man, Remnant Christian Network
              </h3>
              <p className="font-body-md text-on-surface-variant mb-6 italic">
                "Called to restore apostolic Christianity and prepare the church
                for Christ's return through powerful teaching and international
                missions.."
              </p>
            </div>
          </motion.div>

          {/* Support Team */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-primary px-12 py-8 rounded-2xl text-white flex flex-col justify-end"
          >
            <div className="h-50 w-50 m-auto relative mb-2">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImg}
                  src={leaderImages[currentImg]}
                  alt="resident pastor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="h-50 w-50 rounded-2xl object-cover absolute top-0 left-0"
                />
              </AnimatePresence>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">
              Manchester Leadership Team
            </h3>
            <p className="font-body-md text-on-primary-container opacity-90 mb-8">
              Guided by a plurality of elders and dedicated ministry leads
              focused on administration, youth, and community outreach.
            </p>
            <Link to="/team-members">
              <button className="border border-white/30 px-6 py-3 rounded-full font-label-sm text-label-sm hover:bg-white hover:text-primary transition-all">
                View Full Team
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
