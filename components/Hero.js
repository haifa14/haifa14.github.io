const HeroComponent = {
  template: `
    <section id="hero" class="relative text-white min-h-[90vh] flex items-center overflow-hidden pt-16"> <!-- Added pt-16 for fixed navbar -->
      <div class="absolute inset-0 z-0">
        <img src="./hero.jpg" alt="Hero Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-800/60"></div>
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <div class="absolute inset-0 bg-pattern opacity-20"></div>
      </div>
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div class="absolute w-64 h-64 rounded-full bg-[#1E88E5] opacity-10 -top-20 -left-20 animate__animated animate__pulse animate__infinite animate__slow"></div>
        <div class="absolute w-96 h-96 rounded-full bg-[#26A69A] opacity-10 bottom-0 right-0 animate__animated animate__pulse animate__infinite animate__slower"></div>
        <div class="absolute w-80 h-80 rounded-full bg-[#FF5722] opacity-5 top-1/2 left-1/3 animate__animated animate__pulse animate__infinite"></div>
      </div>
      <div class="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div class="inline-block p-2 bg-black/30 backdrop-blur-sm rounded-lg border border-white/20 mb-4 shadow-lg">
              <span class="text-[#1E88E5] font-medium">Your Health Journey Begins Here</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-shadow-lg">
              <span class="text-white">Med<span class="text-[#1E88E5]">Retreats</span> <span class="text-[#FF5722]">369</span></span>
            </h1>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-white text-shadow-md">Discover Wellness Beyond Borders</h2>
            <p class="text-base sm:text-lg text-white mb-8 max-w-lg mx-auto md:mx-0 bg-black/20 p-4 rounded-lg backdrop-blur-sm">
              Your premier destination for world-class medical treatments in India at affordable costs with comprehensive support throughout your healthcare journey.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
              <a href="#contact" class="bg-[#FF5722] hover:bg-[#FF7043] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                Get Free Consultation
              </a>
              <a href="#about" class="bg-black/30 hover:bg-black/50 text-white border-2 border-white/30 font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center backdrop-blur-sm shadow-lg">
                Learn More
              </a>
            </div>
            <div class="mt-8 bg-black/40 backdrop-blur-lg pt-4 pr-4 rounded-lg border border-white/20 shadow-xl w-full">
              <div class="flex flex-row items-center gap-4">
                <div class="w-1/3">
                  <img src="./ainbosi.png" alt="Mohammad Ainbosi" class="w-full max-w-[180px] sm:max-w-[220px] mx-auto drop-shadow-2xl" />
                </div>
                <div class="w-2/3 text-left">
                  <div class="inline-block px-3 py-1 bg-[#1E88E5]/20 rounded-full text-xs sm:text-sm mb-2">
                    <span class="flex items-center gap-1">
                      <i class="fas fa-map-marker-alt text-[#FF5722]"></i>
                      <span>From Jordan</span>
                    </span>
                  </div>
                  <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-1">Mr. Mohammad Ainbosi</h3>
                  <p class="text-white/80 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Founder & President</p>
                  <div class="flex items-center gap-2 bg-white/10 px-3 py-1 sm:py-2 rounded-lg inline-flex mb-2 sm:mb-4">
                    <i class="fas fa-phone-alt text-[#FF5722]"></i>
                    <a href="tel:+919839991913" class="hover:text-[#1E88E5] transition-colors text-sm sm:text-base">+91 98399 91913</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 md:hidden flex justify-center">
              <a href="#about" class="text-white opacity-70 hover:opacity-100 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 bounce-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/2 flex justify-center md:justify-end items-center relative mb-8 md:mb-0">
            <div class="relative flex flex-col items-center">
              <div class="absolute inset-0 -m-6 bg-black/30 backdrop-blur-md rounded-2xl shadow-xl"></div>
              <img src="logo.png" alt="MedRetreats 369 Logo" class="h-32 w-auto sm:h-40 md:h-56 lg:h-64 xl:h-72 2xl:h-80 drop-shadow-xl transition-all duration-300 relative" />
              <div class="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl mt-8 w-full max-w-xs md:max-w-sm">
                <h3 class="text-lg md:text-xl font-semibold mb-4 text-center">World-Class Healthcare in India</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white/10 hover:bg-white/15 p-4 rounded-lg text-center transition-all duration-300">
                    <div class="text-[#1E88E5] text-3xl mb-2"><i class="fas fa-hospital"></i></div>
                    <h4 class="font-medium text-sm">Top Hospitals</h4>
                  </div>
                  <div class="bg-white/10 hover:bg-white/15 p-4 rounded-lg text-center transition-all duration-300">
                    <div class="text-[#26A69A] text-3xl mb-2"><i class="fas fa-user-md"></i></div>
                    <h4 class="font-medium text-sm">Expert Doctors</h4>
                  </div>
                  <div class="bg-white/10 hover:bg-white/15 p-4 rounded-lg text-center transition-all duration-300">
                    <div class="text-[#FF5722] text-3xl mb-2"><i class="fas fa-dollar-sign"></i></div>
                    <h4 class="font-medium text-sm">Cost Effective</h4>
                  </div>
                  <div class="bg-white/10 hover:bg-white/15 p-4 rounded-lg text-center transition-all duration-300">
                    <div class="text-[#1E88E5] text-3xl mb-2"><i class="fas fa-hands-helping"></i></div>
                    <h4 class="font-medium text-sm">Full Support</h4>
                  </div>
                </div>
                <div class="mt-6 text-center">
                  <div class="inline-flex items-center bg-white/10 rounded-lg px-4 py-2 relative hover:bg-white/20 transition-all duration-300">
                    <span class="animate-ping absolute h-3 w-3 rounded-full bg-[#FF5722] opacity-75 left-0"></span>
                    <span class="relative rounded-full h-2 w-2 bg-[#FF5722]"></span>
                    <span class="ml-3 text-sm">Helping patients from 20+ countries</span>
                  </div>
                </div>
              </div>
              <div class="absolute -bottom-8 -right-4 bg-black/40 backdrop-blur-lg p-3 rounded-lg transform rotate-3 shadow-xl hidden md:flex space-x-3 items-center border border-white/10">
                <img src="fortis.png" alt="Fortis" class="w-8 h-8 rounded-full object-contain bg-white p-1" />
                <img src="max.png" alt="Max" class="w-8 h-8 rounded-full object-contain bg-white p-1" />
                <img src="oriana.png" alt="Oriana" class="w-8 h-8 rounded-full object-contain bg-white p-1" />
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a href="#about" class="text-white opacity-70 hover:opacity-100 transition-all bg-black/30 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 bounce-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
};
