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
// const loopedImages = [...Images, ...Images];

const Gallery = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="items-center text-center font-bold text-2xl">Gallery</h2>
      <div className=" my-5 lg:w-5xl  justify-center items-center px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Images.map((value) => (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.15 }}
            key={value.id}
            className=" w-70 md:w-70 mx-auto rounded-lg overflow-hidden"
          >
            <img
              className="w-270 md:w-70 h-70 object-cover"
              src={value.img}
              alt=""
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
