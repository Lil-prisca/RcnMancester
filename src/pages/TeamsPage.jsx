import Navbar from "../components/Navbar";
import setman from "../assets/setman-2.webp";
import man1 from "../assets/Rev. George Agbike.jpeg";
import woman from "../assets/aab.png";
import man2 from "../assets/pke.jpeg";
const TeamMember = [
  {
    img: setman,
    name: "Apostle Arome Osayi",
    position: "Set Man, Remnant Christian Network",
  },

  {
    img: woman,
    name: "A a b",
    position: "Set Man, Remnant Christian Network",
  },
  {
    img: man1,
    name: "Rev. George Agbike",
    position: "Set Man, Remnant Christian Network",
  },
  {
    img: man2,
    name: "Apostle Arome Osayi",
    position: "Set Man, Remnant Christian Network",
  },
];

const TeamsPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-400 m-auto mt-3">
        <h1 className="text-center text-primary text-[30px]  ">
          Manchester Team
        </h1>
        <div class="w-60 h-1 bg-secondary mb-5  m-auto"></div>
        <p className="text-center  text-primary text-10  mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,
          ipsa!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 max-w-7xl m-auto px-10">
          {TeamMember.map((member) => (
            <div className="  rounded-2xl  w-92 h-100" key={member.name}>
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover  object-top rounded-t-2xl mb-2"
              />
              <h3 className="text-[24px] text-secondary pl-5  mb-2">
                {member.name}
              </h3>
              <p className="  text-[15px] pl-5  ">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamsPage;
