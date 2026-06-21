import { motion } from "framer-motion";
import img1 from "../assets/Aactivities/img1.jpeg";
import img2 from "../assets/Aactivities/img2.jpg";
import img3 from "../assets/Aactivities/img3.gif";
import img4 from "../assets/Aactivities/img4.jpeg";
import img5 from "../assets/Aactivities/img5.jpeg";
import img6 from "../assets/Aactivities/img6.jpeg";
import img7 from "../assets/Aactivities/img7.jpeg";
import img8 from "../assets/Aactivities/img8.jpeg";
import img9 from "../assets/Aactivities/img9.jpeg";
import img10 from "../assets/Aactivities/img10.jpeg";
import img11 from "../assets/Aactivities/img11.jpeg";
import img12 from "../assets/Aactivities/img12.jpeg";
import img13 from "../assets/Aactivities/img13.jpeg";
import img14 from "../assets/Aactivities/img14.jpeg";

const Images = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
  { id: 9, img: img9 },
  { id: 10, img: img10 },
  { id: 11, img: img11 },
  { id: 12, img: img12 },
  { id: 13, img: img13 },
  { id: 14, img: img14 },
];

// duplicate for seamless infinite scroll
const loopedImages = [...Images, ...Images];

const Gallery = () => {
  return (
    <div className="overflow-hidden w-full group">
      <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
        {loopedImages.map((value, i) => (
          <motion.div
            key={`${value.id}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % Images.length) * 0.1, duration: 0.6 }}
            className="h-50 w-auto flex shrink-0 px-1 py-5 mx-1  rounded-2xl"
          >
            <img
              src={value.img}
              alt={`Gallery image ${value.id}`}
              className="h-full w-auto object-cover rounded-2xl"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
