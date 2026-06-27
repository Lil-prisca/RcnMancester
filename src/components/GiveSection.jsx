import { FaPeopleGroup, FaFileSignature } from "react-icons/fa6";
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
          <div class=" w-fit  mx-auto bg-surface-container-lowest p-2 px-5 md:p-5 rounded-3xl border border-outline-variant/20 shadow-2xl shadow-navy/5">
            <h3 class="text-2xl font-bold mb-2 text-navy">
              What are you Giving to
            </h3>
            <div className="flex flex-col justify-center">
              {/* group */}
              <div class="flex justify-between p-5 max-w-2xl mb-5">
                <div class="flex items-center gap-3">
                  <label class="font-medium text-on-surface" for="tithe">
                    {" "}
                    Tithe &amp; Offering{" "}
                  </label>
                </div>
                <div class="flex items-center gap-3">
                  <label class="font-medium text-on-surface" for="mission">
                    {" "}
                    Global Missions{" "}
                  </label>
                </div>
                <div class="flex items-center gap-3">
                  {" "}
                  <label class="font-medium text-on-surface" for="building">
                    {" "}
                    Building Fund{" "}
                  </label>
                </div>
              </div>
              <div className="w-100 mx-auto  max-w-2xl bg-black/30 rounded-2xl p-5 text-white shadow-lg">
                {/* Account */}
                <div className="space-y-5">
                  {/* Account Number */}
                  <div className="flex justify-between items-center">
                    <span className="text-black text-[15px] underline font-medium">
                      Account number
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-black  text-[15px] font-semibold">
                        13828492
                      </span>
                    </div>
                  </div>

                  {/* Sort Code */}
                  <div className="flex justify-between items-center">
                    <span className="text-black text-[15px] underline font-medium">
                      Sort code
                    </span>
                    <span className="text-black text-[15px] font-medium">
                      20-51-08
                    </span>
                  </div>

                  {/* Country */}
                  <div className="flex justify-between items-center">
                    <span className="text-black text-[15px] underline font-medium">
                      Country or region
                    </span>
                    <span className=" text-black text-[15px] font-medium">
                      United Kingdom
                    </span>
                  </div>

                  {/* Currency */}
                  <div className="flex justify-between items-center">
                    <span className="text-black text-[15px] underline font-medium">
                      Currency
                    </span>
                    <span className=" text-black text-[15px] font-medium">
                      GBP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveSection;
