import worship from "../assets/Worship.mp4";
import { Link } from "react-router-dom";
const SpotlightEvent = () => {
  return (
    <section class=" py-12 px-6 md:px-12">
      <div class="max-w-7xl mx-auto bg-primary rounded-3xl overflow-hidden relative min-h-[600px] lg:min-h-[300px] flex items-center">
        <div class="absolute inset-0 z-0">
          <video
            class="w-full h-full object-cover opacity-30"
            data-alt="dramatic lighting in a grand hall with many people gathering for a spiritual conference event"
            src={worship}
            width="100%"
            loop
            autoPlay
            muted
            loop
          ></video>
          <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>
        <div class="relative z-10 p-12 md:p-24 w-full flex flex-col md:flex-row gap-12 justify-between items-center">
          <div class="max-w-xl">
            <h3 class="text-5xl md:text-7xl font-serif text-white leading-none mb-8">
              Watchmen &amp; <br />
              <span class="italic text-on-primary-container">Gatekeepers</span>
            </h3>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 text-white w-full md:w-auto">
            <p class="text-white/70 text-lg font-body max-w-md mb-5 leading-relaxed">
              Join us for a transformative encounter as we explore the spiritual
              protocols of vigilance and authority in the kingdom.
            </p>
            <Link to="/our-activities">
              <button class="w-full bg-white text-primary py-4 rounded-xl font-label text-sm uppercase tracking-widest hover:bg-tertiary hover:text-white transition-all">
                See Activitty Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightEvent;
