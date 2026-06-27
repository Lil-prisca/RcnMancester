import prayergroup from "../assets/prayergroup.jpg";
import prayer2 from "../assets/prayer2.jpg";
const Activity = () => {
  return (
    <section className="py-5 bg-on-primary">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-10 text-center md:text-left">
          <h2 className="font-headline text-5xl text-primary mb-4">
            Our Activities
          </h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-150">
          {/* <!-- Large Featured --> */}
          <div className=" col-span md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-100 md:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-top object-cover group-hover:scale-105 transition-transform duration-1000 "
              data-alt="A crowded worship hall with warm stage lights and a diverse congregation raising hands in unity during a Sunday gathering"
              src={prayergroup}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent"></div>
            <div className="absolute bottom-1  w-[95%] ml-3 glass rounded-2xl p-5">
              <span className="font-label text-on-primary text-xs tracking-widest uppercase mb-2 block">
                Daily @ 9:00pm
              </span>
              <h3 className="font-headline text-4xl text-white">
                Daily Intercessory Prayer Meeting{" "}
              </h3>
              <p className="text-on-primary mt-2   md:flex   ">
                <span>
                  {" "}
                  Join our daily intercessory prayers <br /> as we build a
                  spiritual fortress over our lives, families and territoty.
                  <br /> Venue: Online (Zoom)
                  <br />
                </span>
                <span>
                  ZOOM Link: https://zoom.us/s/94316097531 <br />
                  Meeting ID: 94316097531 <br /> Passcode: 349237 <br />
                </span>
              </p>
            </div>
          </div>
          {/* <!-- Vertical Small --> */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low h-80  md:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 "
              data-alt="Musicians and singers in a dim studio environment focused on creating atmospheric worship music"
              src={prayer2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent"></div>
            <div className="absolute bottom-1 w-[95%] ml-3  mx-auto  glass  rounded-2xl p-5">
              <h3 className="font-headline text-3xl text-white">
                Monthly Prayer Marathon
              </h3>
              <p className="text-on-primary mt-2">
                We meet physically once a month for prayer, worship, and
                fellowship with our community and fellow believers in our area.
                All are welcome.
              </p>
            </div>
          </div>
          {/* <!-- Bottom Row Small 1 --> */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low h-80 md:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 "
              data-alt="Soft candlelight in a stone chapel creating a sacred and intimate environment for prayer and reflection"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVHbJmXfoaRANBw28s-to6nTpQEEW0_6484jVAzEkFdyacPT_VruPYLoLlT50wsbwIwx3ZA0IJH_UjOiaMR2MHcHmTZTfQC968H0es0p_e7CdsoHk6eBc15znAE5_29lDZMED9mHMFZwS3Q0Hzkby1ZQae_GO6Mdn86GTaFOThRW6lohtBy3tbIimDAgkVqtIXdQKEfzKAV710eGGvDfvIPdMqchu4AipX7KfT8U-wAM_c8bjVpkHaMdt4R-tDkux_3YFvqNyMv1M"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent"></div> */}
            <div className="absolute bottom-10 left-4 glass  rounded-2xl p-5">
              <h3 className="font-headline text-3xl text-white">The Well</h3>
              <p className="text-on-primary mt-2">
                Deep intercession and quiet rest.
              </p>
            </div>
          </div>
          {/* <!-- Bottom Row Small 2 --> */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-80 md:h-auto text-white">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 "
              data-alt="Volunteers sharing a meal and conversation with people in a local urban setting, emphasizing outreach and community service"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Sx49O0o1OccHl0Nb2hV5rcir9Q6zlCmEDj6_jYKcWcPYgWbtzJAr_y_7STVD98IVuwmg2uSPWX7ML_IadZSTuJQ8e_Gymv768udg5fsmK_AA5yq0fFrkl-OEzIzliayHRbMPZqlLTlAn2HAQv3rOaD7heq5xRLQKsi0dDyLbDZoYM3zIWkIv5FlKyeD56ffzg50PjThNIns8Uf89sKT85zzbbqWYIgMfg7wM5tWf8A52PYlirIJ5BwVbRrJ1ivYqojQCtTzD1NI"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent"></div> */}
            <div className="absolute bottom-10 left-4 glass  rounded-2xl p-5">
              <h3 className="font-headline text-3xl ">The Streets</h3>
              <p className="text-on-black mt-2">
                Taking the light of the presence into the dark corners of our
                city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
