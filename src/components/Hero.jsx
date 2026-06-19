import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#19143E]">
      {/* hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          alt="large gathering"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqI6-Ga2_vH0gnXCt9QuNs9uCELC4JUxBoRjIknNYUsNsvoL6Q2BatlU_d5SliwRegGH7FphkL9f_aw86mTYZfnmH1LOs6x8bV4WvTs4T0PUZ_tfbOAnwi-mG8wGTLwPJueKt5W47Y7qatzyMw573AlmlyiAQUw8JPYfiook64v6LvQqNXDP1wMvxk2XAVtERpppRDw6DsXsmBi1EiJLjjcba2tP-Atrcbxzxeg-AycUlGhYeYeF1tc-DbmNIaBidyqLYZaPis1rE"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19143E]via-[#19143E]/60 to-transparent"></div>
      </div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-tertiary font-label text-sm tracking-[0.2em] mb-6 font-bold uppercase">
            THE DIVINE SANCTUARY
          </span>
          <h1 className="text-white text-6xl md:text-8xl font-headline font-extrabold tracking-[-0.04em] leading-[0.95] mb-8">
            Welcome to <span className="text-secondary">RCN</span> Manchester
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-body max-w-xl leading-relaxed mb-10">
            A Place of Prayer, Word, and Fellowship. Experience the
            transformative power of the Spirit in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/">
              <button className="bg-secondary hover:bg-secondary/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all active:scale-95">
                Our Activities
              </button>
            </Link>
            <Link to="/">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg transition-all">
                I am New
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
