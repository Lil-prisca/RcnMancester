const Team = () => {
  return (
    <section class="py-5 bg-surface-container">
      <div class="px-16 max-w-7xl mx-auto">
        <div class="mb-16">
          <h2 class="font-headline-lg text-headline-lg">Spiritual Oversight</h2>
          <div class="w-20 h-1 bg-primary mt-4"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* <!-- Main Pastor --> */}
          <div class="md:col-span-2 flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm">
            <div class="md:w-1/2 aspect-[4/5]">
              <img
                class="w-full h-full object-cover"
                data-alt="A professional, high-contrast portrait of a male pastor in a sophisticated dark suit."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF-tn032BK3ORra11SeuQvqbma3gSQJv1cHVtpCeqfAWREptZLtsQh0IB4_RIOAOkox_S5a4-B4xIosgYkAlqFFjNijnSDzR5O9av2L2Bkau6C2zFDOfoL_3i9H1JENnMJDATeENkib2MmqCRUH9Zvs6gEqEPwWL7pwDs5GFwvMX58hp_P3OUh6YyvXbu6dyoSGMnMiMbixPCpfziZLSf2B4JNr1uzS-8WcSrjl4Ai-_UX_IrfXAUxaxTLwfVOBLpcyMFeothvjQY"
              />
            </div>
            <div class="md:w-1/2 p-12 flex flex-col justify-center">
              <span class="font-label-sm text-label-sm text-primary mb-2">
                Resident Pastor
              </span>
              <h3 class="font-headline-md text-headline-md mb-4">
                Pastor Kolawole Olagunju
              </h3>
              <p class="font-body-md text-on-surface-variant mb-6 italic">
                "Our mandate is to ensure every believer in Manchester
                experiences the transformative power of a deep, scholarly, and
                experiential walk with God."
              </p>
              <div class="flex gap-4">
                <a
                  class="text-outline hover:text-primary transition-colors"
                  href="#"
                >
                  <span class="material-symbols-outlined">alternate_email</span>
                </a>
                <a
                  class="text-outline hover:text-primary transition-colors"
                  href="#"
                >
                  <span class="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Support Team Placeholder --> */}
          <div class="bg-primary p-12 rounded-2xl text-white flex flex-col justify-end">
            <h3 class="font-headline-md text-headline-md mb-4">
              The Leadership Team
            </h3>
            <p class="font-body-md text-on-primary-container opacity-90 mb-8">
              Guided by a plurality of elders and dedicated ministry leads
              focused on administration, youth, and community outreach.
            </p>
            <button class="border border-white/30 px-6 py-3 rounded-full font-label-sm text-label-sm hover:bg-white hover:text-primary transition-all">
              View Full Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
