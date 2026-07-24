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
import img15 from "../assets/Aactivities/img15.jpeg";
import img16 from "../assets/Aactivities/img16.png";
import img17 from "../assets/Aactivities/img17.jpg";
import img18 from "../assets/Aactivities/img18.jpg";
import img19 from "../assets/Aactivities/img19.jpg";
import img20 from "../assets/Aactivities/img20.jpg";
import img21 from "../assets/Aactivities/img21.jpg";
import img22 from "../assets/Aactivities/img22.jpg";
import img23 from "../assets/Aactivities/img23.jpg";
import img24 from "../assets/Aactivities/img24.jpg";
import img25 from "../assets/Aactivities/img25.jpg";
import img26 from "../assets/Aactivities/img26.jpg";
import img27 from "../assets/Aactivities/img27.jpg";
import img28 from "../assets/Aactivities/img28.jpg";
import img29 from "../assets/Aactivities/img29.jpg";
import img30 from "../assets/Aactivities/img30.jpg";
import img31 from "../assets/Aactivities/img31.jpg";
import img32 from "../assets/Aactivities/img32.jpg";
import img33 from "../assets/Aactivities/img33.jpg";
import img34 from "../assets/Aactivities/img34.jpg";
import img35 from "../assets/Aactivities/img35.jpg";
import img36 from "../assets/Aactivities/img36.jpg";
import img37 from "../assets/Aactivities/img37.jpg";
import img38 from "../assets/Aactivities/img38.jpg";
import img39 from "../assets/Aactivities/img39.jpg";
import img40 from "../assets/Aactivities/img40.jpg";
import img41 from "../assets/Aactivities/img41.jpg";
import img42 from "../assets/Aactivities/img42.jpg";
import img43 from "../assets/Aactivities/img43.jpg";
import img44 from "../assets/Aactivities/img44.jpg";
import img45 from "../assets/Aactivities/img45.jpg";
import img46 from "../assets/Aactivities/img46.jpg";
import img47 from "../assets/Aactivities/img47.jpg";
import img48 from "../assets/Aactivities/img48.jpg";
// import img49 from "../assets/Aactivities/img49.jpg";
// import img50 from "../assets/Aactivities/img50.jpg";


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
  { id: 15, img: img15 },
  { id: 16, img: img16 },
  { id: 17, img: img17 },
  { id: 18, img: img18 },
  { id: 19, img: img19 },
  { id: 20, img: img20 },
  { id: 21, img: img21 },
  { id: 22, img: img22 },
  { id: 23, img: img23 },
  { id: 24, img: img24 },
  { id: 25, img: img25 },
  { id: 26, img: img26 },
  { id: 27, img: img27 },
  { id: 28, img: img28 },
  { id: 29, img: img29 },
  { id: 30, img: img30 },
  { id: 31, img: img31 },
  { id: 32, img: img32 },
  { id: 33, img: img33 },
  { id: 34, img: img34 },
  { id: 35, img: img35 },
  { id: 36, img: img36 },
  { id: 37, img: img37 },
  { id: 38, img: img38 },
  { id: 39, img: img39 },
  { id: 40, img: img40 },
  { id: 41, img: img41 },
  { id: 42, img: img42 },
  { id: 43, img: img43 },
  { id: 44, img: img44 },
  { id: 45, img: img45 },
  { id: 46, img: img46 },
  { id: 47, img: img47 },
  { id: 48, img: img48 },
  // { id: 49, img: img49 },
  // { id: 50, img: img50 },
];

// duplicate for seamless infinite scroll
// const loopedImages = [...Images, ...Images];

const Gallery = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="items-center text-center font-bold text-2xl">Gallery</h2>
      <div className=" my-5 lg:w-5xl  justify-center items-center px-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        {Images.map((value) => (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.15 }}
            key={value.id}
            className="  w-43 h-50   md:w-50  mx-auto rounded-lg overflow-hidden"
          >
            <img
              className=" w-43 h-50 md:w-50 h-50 object-cover"
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
