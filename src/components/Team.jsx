import { Link } from "react-router-dom";
import setman from "../assets/setman-2.webp";
import setman2 from "../assets/AAO.jpg";

const Team = () => {
  return (
    <section class="py-5 bg-surface-container">
      <div class="px-16 max-w-7xl mx-auto">
        <div class="mb-16">
          <h2 class="font-headline-lg text-headline-lg">Spiritual Oversight</h2>
          <div class="w-20 h-1 bg-primary mt-4"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* <!-- Main Pastor --> */}
          <div class="md:col-span-2 flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm">
            <div class="md:w-1/2 aspect-[4/5]">
              <img
                class="w-full h-full object-cover"
                data-alt="A professional, high-contrast portrait of a male pastor in a sophisticated dark suit."
                src={setman2}
              />
            </div>
            <div class="md:w-1/2 p-12 flex flex-col justify-center">
              <span class="font-label-sm text-[24px] text-primary mb-2">
                Apostle Arome Osayi
              </span>
              <h3 class="font-headline-md text-[10px] mb-4">
                Set Man, Remnant Christian Network
              </h3>
              <p class="font-body-md text-on-surface-variant mb-6 italic">
                "Called to restore apostolic Christianity and prepare the church
                for Christ's return through powerful teaching and international
                missions.."
              </p>
              {/* <div class="flex gap-4">
                <a
                  class="text-outline hover:text-primary transition-colors"
                  href="#"
                >
                  <span class="material-symbols-outlined">alternate_email</span>
                </a>
                <a
                  class="text-outline hover:text-primary transition-colors"
                  href="#"
                >
                  <span class="material-symbols-outlined">share</span>
                </a>
              </div> */}
            </div>
          </div>
          {/* <!-- Support Team Placeholder --> */}
          <div class="bg-primary px-12 py-8 rounded-2xl text-white flex flex-col justify-end">
            <img
              src={setman}
              alt="resident pastor"
              className="h-50 w-50 m-auto rounded-2xl mb-2  "
            />
            <h3 class="font-headline-md text-headline-md mb-4">
              Manchester Leadership Team
            </h3>
            <p class="font-body-md text-on-primary-container opacity-90 mb-8">
              Guided by a plurality of elders and dedicated ministry leads
              focused on administration, youth, and community outreach.
            </p>
            <Link to="/team-members">
              <button class="border border-white/30 px-6 py-3 rounded-full font-label-sm text-label-sm hover:bg-white hover:text-primary transition-all">
                View Full Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
