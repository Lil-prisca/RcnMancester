const Activity = () => {
  return (
    <section className="py-5 bg-primary">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-10 text-center md:text-left">
          <h2 className="font-headline text-5xl text-on-primary mb-4">
            Our Activities
          </h2>
          <div className="h-1 w-24 bg-on-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-150">
          {/* <!-- Large Featured --> */}
          <div className=" col-span md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-100 md:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60"
              data-alt="A crowded worship hall with warm stage lights and a diverse congregation raising hands in unity during a Sunday gathering"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNp5rjmvIxZ6mnPs3PDfswmfBSpem6zw0UgtSOg1R7RXuLiA0u3G5x44WbIuc8oUgtgRX4yCAMko4CrQjx_9UmtZa0LPZZOaGBdOBo_PWhnVa0IUZSvRDVAf18V-0T2ptWseJ7WnU14VrZ9t902XfBo8cIFQZ9ZoBViV_UT-Ed2SnjcDe3YV0Pl5Yz1AgbTzFogn0MEQ_I_ODnC7txEdK-8B-shLjnS_oVfvhEKPMp_8c9wqyPIJaJQnVNvodGOY3E6T2ENnDkNqY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-4">
              <span className="font-label text-on-primary text-xs tracking-widest uppercase mb-2 block">
                Daily @ 9:00pm
              </span>
              <h3 className="font-headline text-4xl text-white">
                Daily Intercessory Prayer Meeting{" "}
              </h3>
              <p className="text-on-primary mt-2 max-w-sm">
                Join our daily intercessory prayers as we build a spiritual
                fortress over our lives, families and territoty. <br />
                Venue: Online (Zoom) <br />
                ZOOM Link: https://zoom.us/s/94316097531 <br />
                Meeting ID: 94316097531 Passcode: 349237 <br />
              </p>
            </div>
          </div>
          {/* <!-- Vertical Small --> */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low h-80 md:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-50"
              data-alt="Musicians and singers in a dim studio environment focused on creating atmospheric worship music"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlkOrz8Xpz_vl0mIh6xA70ml7hvuqEQca5SNTgTMbUF4BwAU3x3f_w-Hf2WRiNLhf3oESvlAiqANVzxSFlkiTJKAhx4pCJgfhysPzfS5NhBtj9wo0GhBceQv2v9H8NNsY8BXdViB_g5ZPdj292PLfKq1JjBKfdx3WSLnDxovn6eERBbfedBxAdDtQUre8MlYZAMo1fkj-N5EDpYFJonNrO8dSjU-nK8u8wkjvZWGf9Zw0nMeKoVMSSY0i2Jo1bCrG856n2SmaEXoE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-4">
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
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-50"
              data-alt="Soft candlelight in a stone chapel creating a sacred and intimate environment for prayer and reflection"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVHbJmXfoaRANBw28s-to6nTpQEEW0_6484jVAzEkFdyacPT_VruPYLoLlT50wsbwIwx3ZA0IJH_UjOiaMR2MHcHmTZTfQC968H0es0p_e7CdsoHk6eBc15znAE5_29lDZMED9mHMFZwS3Q0Hzkby1ZQae_GO6Mdn86GTaFOThRW6lohtBy3tbIimDAgkVqtIXdQKEfzKAV710eGGvDfvIPdMqchu4AipX7KfT8U-wAM_c8bjVpkHaMdt4R-tDkux_3YFvqNyMv1M"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-4">
              <h3 className="font-headline text-3xl text-white">The Well</h3>
              <p className="text-on-primary mt-2">
                Deep intercession and quiet rest.
              </p>
            </div>
          </div>
          {/* <!-- Bottom Row Small 2 --> */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-80 md:h-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-50"
              data-alt="Volunteers sharing a meal and conversation with people in a local urban setting, emphasizing outreach and community service"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Sx49O0o1OccHl0Nb2hV5rcir9Q6zlCmEDj6_jYKcWcPYgWbtzJAr_y_7STVD98IVuwmg2uSPWX7ML_IadZSTuJQ8e_Gymv768udg5fsmK_AA5yq0fFrkl-OEzIzliayHRbMPZqlLTlAn2HAQv3rOaD7heq5xRLQKsi0dDyLbDZoYM3zIWkIv5FlKyeD56ffzg50PjThNIns8Uf89sKT85zzbbqWYIgMfg7wM5tWf8A52PYlirIJ5BwVbRrJ1ivYqojQCtTzD1NI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-4">
              <h3 className="font-headline text-3xl text-white">The Streets</h3>
              <p className="text-on-primary mt-2">
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
