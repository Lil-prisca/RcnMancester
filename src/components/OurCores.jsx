import { FaLayerGroup, FaBookOpen, FaHeart, FaChurch } from "react-icons/fa";

const OurCores = () => {
  return (
    <section class=" bg-primary max-w-8xl">
      <div class=" py-5 lg:py-10 px-10 md:px[80px]  mx-auto">
        <div class="text-center mb-10">
          <h2 class="font-headline-xl text-headline-xl text-on-primary mb-4">
            Core Values
          </h2>
          <div class="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Value 1 --> */}
          <div class="p-8 border bg-[#0a0625] border-on-primary rounded-xl glass  hover:bg-surface-container text-on-primary hover:text-on-surface-variant transition-colors group">
            <span class="ml-2 text-secondary text-3xl mb-4 block group-hover:scale-110 transition-transform">
              <FaChurch />
            </span>
            <h4 class="font-label-md text-secondary uppercase tracking-widest  mb-2">
              Holiness
            </h4>
            <p class=" text-sm">
              Living a life consecrated and separated unto God in every sphere.
            </p>
          </div>
          {/* <!-- Value 2 --> */}
          <div class="p-8 border bg-[#0a0625] border-on-primary rounded-xl glass  hover:bg-surface-container text-on-primary hover:text-on-surface-variant transition-colors group">
            <span class=" text-secondary text-3xl mb-4 block group-hover:scale-110 transition-transform">
              <FaHeart />
            </span>
            <h4 class="ffont-label-md text-secondary uppercase tracking-widest  mb-2">
              Love
            </h4>
            <p class=" text-sm">
              Reflecting the unconditional nature of Christ in our community.
            </p>
          </div>
          {/* <!-- Value 3 --> */}
          <div class="p-8 border bg-[#0a0625] border-on-primary rounded-xl glass  hover:bg-surface-container text-on-primary hover:text-on-surface-variant transition-colors group">
            <span class="material-symbols-outlined text-secondary text-3xl mb-4 block group-hover:scale-110 transition-transform">
              <FaBookOpen />
            </span>
            <h4 class="font-label-md text-secondary uppercase tracking-widest  mb-2">
              Sound Doctrine
            </h4>
            <p class=" text-sm">
              Upholding the undiluted truth of God's word with precision.
            </p>
          </div>
          {/* <!-- Value 4 --> */}
          <div class="p-8 border bg-[#0a0625] border-on-primary rounded-xl glass  hover:bg-surface-container text-on-primary hover:text-on-surface-variant transition-colors group">
            <span class=" text-secondary text-3xl mb-4 block group-hover:scale-110 transition-transform">
              {/* <FaUser /> */}
              <FaLayerGroup />
            </span>
            <h4 class="font-label-md text-secondary uppercase tracking-widest  mb-2">
              Service
            </h4>
            <p class=" text-sm">
              Stewarding our gifts for the building of the Body and the city.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCores;
