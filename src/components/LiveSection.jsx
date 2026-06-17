import { FaCirclePlay } from "react-icons/fa6";
const LiveSection = () => {
  return (
    <>
      <section class="h-[419px] w-full relative flex items-center justify-center text-center">
        <div class="absolute inset-0">
          <img
            class="w-full h-full object-cover"
            data-alt="Epic, moody mountain peaks of the Lake District covered in soft morning mist, representing the presence of God in nature"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcC_tdqkXP-9t0HPzS16rtTyvBieyGGGaxJ8JN4tSq5L7t5WofCcXNc9IJx3DTE7Td2OsiRdv_7LUM3fdbGsLf6kflOt-qRK0pSzeXdMeJnfjnk9c5iYKipRo6PCxRYNzNxZInLQ8JY-RKpX1DzAt_LwW0mS7PNGBid_Tg1iKbNZMXA3Ak7cJhD0_clAVloLVy9H_2MQH-xoHBNqvTBwkO8SNFiWY_AT6KK3VXxM-9sKVp1wf2ee0ZFuL2IUI8ClTyablV6fyQamA"
          />
          <div class="absolute inset-0 bg-[#131318]/60 backdrop-blur-[2px]"></div>
        </div>
        <div class="relative z-10 px-6 max-w-4xl">
          <h2 class="font-headline italic text-5xl md:text-7xl text-white mb-8">
            The Presence
          </h2>
          <p class="font-headline text-2xl md:text-3xl text-on-primary font-light italic leading-relaxed">
            "In His presence is fullness of joy; at His right hand there are
            pleasures forevermore."
          </p>
          <div class="mt-12 h-[2px] w-32 bg-secondary mx-auto"></div>
        </div>
      </section>

      {/*  */}
      <section class="relative py-20 bg-on-primary overflow-hidden">
        <div class="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div class="w-full h-full bg-gradient-to-l from-primary/30 to-transparent"></div>
        </div>
        <div class="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center gap-20">
          <div class="w-full md:w-1/2 space-y-8 order-2 md:order-1">
            <div class="inline-flex items-center px-4 py-1 rounded-full bg-error-container text-on-error-container text-xs font-bold uppercase tracking-widest">
              <span class="w-2 h-2 rounded-full bg-error mr-2 animate-pulse"></span>{" "}
              Live Now
            </div>
            <h2 class="font-headline text-5xl md:text-6xl text-primary">
              Join the Moment.
            </h2>
            <p class="text-on-surface-variant text-lg">
              Can't make it to Cumbria? Engage with our live broadcast every
              Sunday at 10:30 AM and 6:30 PM. High-definition presence, wherever
              you are.
            </p>
            <button class="flex items-center space-x-4 bg-surface-bright border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-on-primary transition-all duration-300 group">
              <span class="material-symbols-outlined text-3xl">
                <FaCirclePlay />
              </span>
              <span class="font-bold tracking-widest uppercase text-sm">
                Enter the Stream
              </span>
            </button>
          </div>
          <div class="w-full md:w-1/2 order-1 md:order-2">
            <div class="aspect-video relative rounded-xl overflow-hidden shadow-2xl border border-outline-variant/10">
              <img
                class="w-full h-full object-cover filter brightness-75"
                data-alt="A cinematic stage silhouette of a speaker against a vibrant warm backdrop, capturing the energy of a live sermon"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSv5SgBeRAVJdXhMoeafRwVxyLqGCTMuPiqbdIzEZEB0kh3WeuspE6adS50w4mNY4zYRYlO3jAz9JLoNvZ2lgntDcg6-edK_YqQlo5f4N4eJjFqbubld1JI464iNuT2RqRosHwjCqAWppWgIDNRqZiYx2jJ4rWc3N-E3At7Ly641swAgY7cuLvflOjMgkvyl3RdqorFnPNHWoX-mzogDHvLklsC5eDrBmczSHNEHCT6UwoDACzTGzlKsPJnrR0dhCPxvptvT4LtPQ"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-4xl text-white">
                    <FaCirclePlay />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveSection;
