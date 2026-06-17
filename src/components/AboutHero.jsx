const AboutHero = () => {
  return (
    <section class="relative min-h-150 md:min-h-150 flex items-center justify-center overflow-hidden ">
      <div class="absolute inset-0 z-0">
        <img
          class="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          alt="A cinematic, low-angle photograph of Manchester's g"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn2eUMHMdLxpfmrn2OQ34gGf-wr7hjinRmRSRNIVQacs2_1a8MStWIVaI22PERloTac0uQaPslYZyMzC_IV0X37w1HfQkRiEEXeNcQWpcT5q_QlUyzgWc4HPwYpkiJmcqRafSkmEZa9z-fMgOx2s0fM0jXnvK1DH5cHzbEF7SRVwCPe5aBl_eErYTiOTS31gCIiwDyrm8ZuzJ2q6tNkqhE98RNRrYT9D0NsSOmwysYPV05CVw0-J1VFad4kXo9I2YAgYoDnFXEcqo"
        />
        <div class="absolute inset-0 bg-linear-to-b from-primary via-transparent to-primary"></div>
      </div>
      <div class="relative z-10 text-left px-[20px] md:px-80px max-w-4xl">
        <div class=" bg-on-primary mb-3 inline-block px-4 py-1 rounded-full border border-tertiary text-tertiary text-[14px] uppercase tracking-[0.2em]">
          The Apostolic Mandate
        </div>
        <h1 class=" text-[40px] md:text-[72px] mb-8 leading-tight">
          About Remnant <br class="hidden md:block" /> Christian Network{" "}
          <span class="text-secondary">Manchester</span>
        </h1>
        <p class=" text-[18px] text-on-primary max-w-2xl ">
          Raising a generation of priests who will represent the government of
          God in the heart of the United Kingdom.
        </p>
      </div>
      {/* <!-- Ambient Glows --> */}
      <div class="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] alchemist-glow blur-[100px] rounded-full"></div>
      <div class="absolute top-1/4 -right-1/4 w-[400px] h-[400px] alchemist-glow blur-[100px] rounded-full opacity-50"></div>
    </section>
  );
};

export default AboutHero;
