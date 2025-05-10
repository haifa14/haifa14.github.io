const RegionsServedComponent = {
  template: `
    <section id="regions-served" class="py-12 bg-gradient-to-r from-[#1E88E5]/5 to-[#FF5722]/5">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center animate__animated animate__fadeIn">
          <h2 class="text-2xl md:text-3xl font-bold text-neutral-800 mb-8">
            Serving patients across the <span class="text-[#1E88E5]">Middle East</span>,
            <span class="text-[#26A69A]">Gulf</span>, <span class="text-[#FF5722]">South Asia</span>
            <span class="text-[#00897B]"> & Africa</span>
            with trusted healthcare solutions
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#1E88E5] hover:transform hover:translateY(-5px) transition-all duration-300">
              <div class="bg-[#1E88E5] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-globe-asia text-[#1E88E5] text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-neutral-800 mb-3">Middle East</h3>
              <p class="text-neutral-600 mb-4">Specialized care for patients from UAE, Qatar, Bahrain, Jordan, and across the Middle East region.</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span class="px-3 py-1 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full text-xs">UAE</span>
                <span class="px-3 py-1 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full text-xs">Qatar</span>
                <span class="px-3 py-1 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full text-xs">Saudi Arabia</span>
                <span class="px-3 py-1 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full text-xs">Jordan</span>
              </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#26A69A] hover:transform hover:translateY(-5px) transition-all duration-300">
              <div class="bg-[#26A69A] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-map-marked-alt text-[#26A69A] text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-neutral-800 mb-3">Gulf Region</h3>
              <p class="text-neutral-600 mb-4">Customized healthcare journeys for patients from Kuwait, Oman, and the entire GCC region.</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span class="px-3 py-1 bg-[#26A69A]/10 text-[#26A69A] rounded-full text-xs">Kuwait</span>
                <span class="px-3 py-1 bg-[#26A69A]/10 text-[#26A69A] rounded-full text-xs">Oman</span>
                <span class="px-3 py-1 bg-[#26A69A]/10 text-[#26A69A] rounded-full text-xs">Bahrain</span>
                <span class="px-3 py-1 bg-[#26A69A]/10 text-[#26A69A] rounded-full text-xs">GCC</span>
              </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF5722] hover:transform hover:translateY(-5px) transition-all duration-300">
              <div class="bg-[#FF5722] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-mountain text-[#FF5722] text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-neutral-800 mb-3">South Asia</h3>
              <p class="text-neutral-600 mb-4">Supporting patients from Nepal, Sri Lanka and neighboring South Asian countries.</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span class="px-3 py-1 bg-[#FF5722]/10 text-[#FF5722] rounded-full text-xs">Nepal</span>
                <span class="px-3 py-1 bg-[#FF5722]/10 text-[#FF5722] rounded-full text-xs">Sri Lanka</span>
                <span class="px-3 py-1 bg-[#FF5722]/10 text-[#FF5722] rounded-full text-xs">Maldives</span>
              </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#00897B] hover:transform hover:translateY(-5px) transition-all duration-300">
              <div class="bg-[#00897B] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-globe-africa text-[#00897B] text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-neutral-800 mb-3">Africa</h3>
              <p class="text-neutral-600 mb-4">Dedicated support for patients from African countries including Chad, Sudan, South Africa, and more.</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span class="px-3 py-1 bg-[#00897B]/10 text-[#00897B] rounded-full text-xs">Chad</span>
                <span class="px-3 py-1 bg-[#00897B]/10 text-[#00897B] rounded-full text-xs">Sudan</span>
                <span class="px-3 py-1 bg-[#00897B]/10 text-[#00897B] rounded-full text-xs">South Africa</span>
                <span class="px-3 py-1 bg-[#00897B]/10 text-[#00897B] rounded-full text-xs">Nigeria</span>
                <span class="px-3 py-1 bg-[#00897B]/10 text-[#00897B] rounded-full text-xs">Kenya</span>
              </div>
            </div>
          </div>
          <div class="mt-12 text-center">
            <p class="font-medium text-lg text-neutral-700 mb-5">Cultural sensitivity and personalized care for each region</p>
            <a href="#contact" class="inline-flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition duration-300">
              <span>Contact our regional specialists</span>
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
};
