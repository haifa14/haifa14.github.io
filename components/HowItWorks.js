const HowItWorksComponent = {
  template: `
    <section id="how-it-works-section" class="py-16 bg-gradient-to-r from-[#1E88E5]/5 to-[#FF5722]/5"> <!-- Changed id to avoid conflict with #process if it's similar -->
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-12 animate__animated animate__fadeIn">
          <span class="text-[#FF5722] font-semibold text-lg">HOW IT WORKS</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-neutral-800">Simple Step-by-Step Guide</h2>
          <div class="w-24 h-1 bg-[#1E88E5] mx-auto mb-6"></div>
          <p class="max-w-3xl mx-auto text-neutral-600">Our streamlined process ensures a seamless medical journey from start to finish</p>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-2 md:gap-4 max-w-5xl mx-auto">
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-[#1E88E5] text-white flex items-center justify-center font-bold text-sm md:text-base">1</div>
            <span class="ml-2 font-medium">Inquiry</span>
          </div>
          <i class="fas fa-arrow-right text-[#1E88E5] mx-1"></i>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-[#26A69A] text-white flex items-center justify-center font-bold text-sm md:text-base">2</div>
            <span class="ml-2 font-medium">Medical Consultation</span>
          </div>
          <i class="fas fa-arrow-right text-[#26A69A] mx-1"></i>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-sm md:text-base">3</div>
            <span class="ml-2 font-medium">Travel Planning</span>
          </div>
          <i class="fas fa-arrow-right text-[#FF5722] mx-1"></i>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-[#1E88E5] text-white flex items-center justify-center font-bold text-sm md:text-base">4</div>
            <span class="ml-2 font-medium">Arrival</span>
          </div>
          <i class="fas fa-arrow-right text-[#1E88E5] mx-1"></i>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-[#26A69A] text-white flex items-center justify-center font-bold text-sm md:text-base">5</div>
            <span class="ml-2 font-medium">Treatment</span>
          </div>
          <i class="fas fa-arrow-right text-[#26A69A] mx-1"></i>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold text-sm md:text-base">6</div>
            <span class="ml-2 font-medium">Recovery</span>
          </div>
          <i class="fas fa-arrow-right text-[#FF5722] mx-1"></i>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-[#1E88E5] text-white flex items-center justify-center font-bold text-sm md:text-base">7</div>
            <span class="ml-2 font-medium">Return</span>
          </div>
        </div>
        <div class="mt-12 text-center">
          <a href="#contact" class="inline-flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition duration-300">
            <span>Start Your Medical Journey</span>
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  `
};
