const AboutUsComponent = {
  template: `
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16 animate__animated animate__fadeIn">
          <span class="text-[#1E88E5] font-semibold text-lg">ABOUT US</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-neutral-800">Your Trusted Medical Tourism Partner</h2>
          <div class="w-24 h-1 bg-[#FF5722] mx-auto mb-6"></div>
          <p class="max-w-3xl mx-auto text-neutral-600">Connecting international patients with world-class healthcare services in India</p>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div class="md:w-1/2 animate__animated animate__fadeInLeft">
            <div class="relative">
              <div class="bg-neutral-100 p-6 md:p-8 rounded-xl shadow-lg z-10 relative">
                <p class="text-neutral-700 leading-relaxed mb-6">
                  <span class="font-semibold text-[#1E88E5]">MedRetreats 369 Pvt. Ltd.</span> is a premier medical tourism company dedicated to connecting international patients with world-class healthcare services in India. We partner with top hospitals and experienced medical professionals to provide high-quality treatments at affordable costs.
                </p>
                <p class="text-neutral-700 leading-relaxed mb-6">
                  Our mission is to ensure seamless healthcare experiences by offering end-to-end assistance, including travel, accommodation, and medical care coordination.
                </p>
                <div class="flex items-center space-x-4 my-6">
                  <div class="flex-shrink-0 w-14 h-14 bg-[#26A69A] bg-opacity-20 rounded-full flex items-center justify-center">
                    <i class="fas fa-user-md text-[#26A69A] text-2xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg text-neutral-800">Expert Medical Professionals</h3>
                    <p class="text-neutral-600">Access to India's top doctors and specialists</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 mb-6">
                  <div class="flex-shrink-0 w-14 h-14 bg-[#FF5722] bg-opacity-20 rounded-full flex items-center justify-center">
                    <i class="fas fa-hospital text-[#FF5722] text-2xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg text-neutral-800">World-Class Hospitals</h3>
                    <p class="text-neutral-600">Partnerships with renowned healthcare facilities</p>
                  </div>
                </div>
              </div>
              <div class="absolute -bottom-5 -right-5 w-28 h-28 bg-[#1E88E5] bg-opacity-10 rounded-xl z-0 hidden md:block"></div>
              <div class="absolute -top-5 -left-5 w-20 h-20 bg-[#FF5722] bg-opacity-10 rounded-xl z-0 hidden md:block"></div>
            </div>
          </div>
          <div class="md:w-1/2 animate__animated animate__fadeInRight">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-neutral-50 p-6 rounded-lg shadow-md border-l-4 border-[#1E88E5] hover:transform hover:scale-105 transition-transform duration-300">
                <div class="text-[#1E88E5] text-3xl mb-3"><i class="fas fa-globe-asia"></i></div>
                <h3 class="font-bold text-lg text-neutral-800 mb-2">Global Reach</h3>
                <p class="text-neutral-600 text-sm">Serving patients from over 20 countries with personalized care</p>
              </div>
              <div class="bg-neutral-50 p-6 rounded-lg shadow-md border-l-4 border-[#26A69A] hover:transform hover:scale-105 transition-transform duration-300">
                <div class="text-[#26A69A] text-3xl mb-3"><i class="fas fa-coins"></i></div>
                <h3 class="font-bold text-lg text-neutral-800 mb-2">Cost Effective</h3>
                <p class="text-neutral-600 text-sm">Premium healthcare at 60-80% less than Western countries</p>
              </div>
              <div class="bg-neutral-50 p-6 rounded-lg shadow-md border-l-4 border-[#FF5722] hover:transform hover:scale-105 transition-transform duration-300">
                <div class="text-[#FF5722] text-3xl mb-3"><i class="fas fa-hands-helping"></i></div>
                <h3 class="font-bold text-lg text-neutral-800 mb-2">Complete Support</h3>
                <p class="text-neutral-600 text-sm">End-to-end assistance from consultation to recovery</p>
              </div>
              <div class="bg-neutral-50 p-6 rounded-lg shadow-md border-l-4 border-[#1E88E5] hover:transform hover:scale-105 transition-transform duration-300">
                <div class="text-[#1E88E5] text-3xl mb-3"><i class="fas fa-heartbeat"></i></div>
                <h3 class="font-bold text-lg text-neutral-800 mb-2">Quality Care</h3>
                <p class="text-neutral-600 text-sm">International standard treatments with personal attention</p>
              </div>
            </div>
            <div class="mt-8 bg-gradient-to-r from-neutral-900 to-neutral-800 p-6 rounded-lg text-white">
              <h3 class="font-bold text-xl mb-3">Our Vision</h3>
              <p class="mb-4">To become the most trusted medical tourism company by providing exceptional healthcare experiences for international patients seeking treatment in India.</p>
              <a href="#contact" class="inline-flex items-center text-[#FF5722] hover:text-white group">
                <span>Get in touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};
