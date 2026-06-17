const MissionSection = () => {
  return (
    <section class="py-10 md:py-10 bg-surface">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div class="lg:col-span-5 order-2 lg:order-1">
            <div class="relative group">
              {/* <div class="absolute -inset-4 bg-surface-container-highest rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div> */}
              <img
                class="relative z-10 w-full asymmetric-border object-cover rounded-2xl h-100 shadow-2xl"
                data-alt=" worship leader with hands raised in prayer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAumipLxi9NIQPSNWJ45qlCOyOENxqwcXFZ6KQyWfQJu05xJ7hnuDeXDIIeVKNQUq486vn6wFZukj0zrbDIZZ_Bo128DwzP627ABAuZ7-gO6pFD3iJ-XpDX9Q4r2dgqCKB5fRAyhq_hUb6oaQbG9SO8h2DFYanUTJ1J8BOOx6Ymz2ZF7O6ybiGdmW-R7lYd8i6lQUHp02h74kfMqaRouU20i2KwC9NWEmU2D9LaYCDe32vkTxDFq6PhcGVLlAJbA1vc47qDsKxa3hQ"
              />
            </div>
          </div>
          <div class="lg:col-span-7 order-1 lg:order-2 pl-0 lg:pl-12">
            <label class="text-secondary font-label font-bold tracking-widest text-xs mb-4 block uppercase">
              OUR VISION
            </label>
            <h2 class="text-primary text-4xl md:text-6xl font-headline font-bold mb-8 leading-tight">
              Restoring the Divine <br />
              <span class="text-tertiary">Legacy</span>.
            </h2>
            <div class="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              <p>
                RCN Manchester is an extension of the Remnant Christian Network,
                a global apostolic movement dedicated to the restoration of the
                apostolic and prophetic foundations of the church.
              </p>
              <p>
                Our mission is simple: to witness the transformation of lives
                through the pure word of God, intense prayer, and a vibrant
                community that reflects the heart of the Father.
              </p>
            </div>
            <div class="mt-10 flex items-center gap-6">
              <div class="flex flex-col">
                <span class="text-secondary font-bold text-3xl">100%</span>
                <span class="text-on-surface-variant text-sm font-label uppercase tracking-tighter">
                  Word Centered
                </span>
              </div>
              <div class="w-px h-12 bg-outline-variant/30"></div>
              <div class="flex flex-col">
                <span class="text-secondary font-bold text-3xl">24/7</span>
                <span class="text-on-surface-variant text-sm font-label uppercase tracking-tighter">
                  Prayer Focus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
