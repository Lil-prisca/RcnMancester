import { FaPeopleGroup, FaFileSignature, FaArrowRight } from "react-icons/fa6";
const GiveSection = () => {
  return (
    <section class="bg-surface-container-low py-24">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* <!-- Giving Logic --> */}
          <div>
            <h2 class="text-4xl font-bold text-navy mb-8 tracking-tight">
              Generosity as Worship
            </h2>
            <p class="text-on-surface-variant text-lg mb-10 leading-relaxed max-w-xl">
              We believe that giving is a spiritual act of worship. Your tithes
              and offerings directly support our mission to spread the Gospel
              and serve the Manchester community.
            </p>
            <div class="space-y-6">
              <div class="flex gap-4 items-start group">
                <div class="bg-primary/10 p-3 rounded-xl text-primary">
                  <span class="material-symbols-outlined">
                    <FaPeopleGroup />
                  </span>
                </div>
                <div>
                  <h4 class="font-bold text-navy text-xl mb-1">
                    Secure Tithing
                  </h4>
                  <p class="text-on-surface-variant">
                    Our platform uses industry-standard encryption to ensure
                    your financial details remain confidential and protected.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 items-start group">
                <div class="bg-primary/10 p-3 rounded-xl text-primary">
                  <span class="material-symbols-outlined">
                    <FaFileSignature />
                  </span>
                </div>
                <div>
                  <h4 class="font-bold text-navy text-xl mb-1">
                    Transparent Allocation
                  </h4>
                  <p class="text-on-surface-variant">
                    100% of your donations are audited and allocated to ministry
                    operations, community outreach, and global missions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Donation Card --> */}
          <div class="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/20 shadow-2xl shadow-navy/5">
            <h3 class="text-2xl font-bold mb-8 text-navy">
              Choose Your What you are Giving to
            </h3>
            {/* <div class="mb-8">
              <label class="block text-sm font-semibold mb-2 text-on-surface-variant">
                Custom Amount (£)
              </label>
              <input
                class="w-full bg-surface-container border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary text-lg"
                placeholder="Enter amount"
                type="number"
              />
            </div> */}
            <div class="space-y-4 mb-8">
              <div class="flex items-center gap-3">
                <input
                  class="text-secondary focus:ring-secondary"
                  id="tithe"
                  name="type"
                  type="radio"
                />
                <label class="font-medium text-on-surface" for="tithe">
                  Tithe &amp; Offering
                </label>
              </div>
              <div class="flex items-center gap-3">
                <input
                  class="text-secondary focus:ring-secondary"
                  id="mission"
                  name="type"
                  type="radio"
                />
                <label class="font-medium text-on-surface" for="mission">
                  Global Missions
                </label>
              </div>
              <div class="flex items-center gap-3">
                <input
                  class="text-secondary focus:ring-secondary"
                  id="building"
                  name="type"
                  type="radio"
                />
                <label class="font-medium text-on-surface" for="building">
                  Building Fund
                </label>
              </div>
            </div>
            <button class="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
              Give Now{" "}
              <span class="material-symbols-outlined">
                <FaArrowRight />
              </span>
            </button>
            {/* <p class="text-center mt-6 text-xs text-outline font-medium tracking-wide">
              SECURE SSL ENCRYPTED TRANSACTION
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveSection;
