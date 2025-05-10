const WhyChooseUsComponent = {
  template: `
    <section id="why-choose-us" class="py-20 bg-neutral-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16 animate__animated animate__fadeIn">
          <span class="text-[#FF5722] font-semibold text-lg">WHY CHOOSE US</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-neutral-800">The MedRetreats Advantage</h2>
          <div class="w-24 h-1 bg-[#1E88E5] mx-auto mb-6"></div>
          <p class="max-w-3xl mx-auto text-neutral-600">Discover why patients from around the world trust us for their medical care in India</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#1E88E5] hover:transform hover:translateY(-5px) transition-all duration-300 animate__animated animate__fadeInUp">
            <div class="bg-[#1E88E5] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 mx-auto">
              <i class="fas fa-hospital text-[#1E88E5] text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-neutral-800 text-center mb-4">Access to Top Hospitals & Doctors</h3>
            <p class="text-neutral-600 text-center mb-4">We collaborate with renowned healthcare institutions and specialists such as Fortis, Apollo, Max Hospitals, and more.</p>
            <div class="flex flex-wrap justify-center gap-2 mt-4">
              <span class="inline-block px-3 py-1 bg-[#1E88E5] bg-opacity-10 text-[#1E88E5] rounded-full text-xs font-semibold">Fortis</span>
              <span class="inline-block px-3 py-1 bg-[#1E88E5] bg-opacity-10 text-[#1E88E5] rounded-full text-xs font-semibold">Apollo</span>
              <span class="inline-block px-3 py-1 bg-[#1E88E5] bg-opacity-10 text-[#1E88E5] rounded-full text-xs font-semibold">Max</span>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#26A69A] hover:transform hover:translateY(-5px) transition-all duration-300 animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
            <div class="bg-[#26A69A] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 mx-auto">
              <i class="fas fa-piggy-bank text-[#26A69A] text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-neutral-800 text-center mb-4">Affordable & High-Quality Treatments</h3>
            <p class="text-neutral-600 text-center mb-4">World-class medical care at a fraction of the cost compared to Western countries, saving up to 60-80% on treatments.</p>
            <div class="flex items-center justify-center mt-4">
              <div class="flex items-center">
                <span class="line-through text-neutral-400 text-sm">$100k</span>
                <i class="fas fa-arrow-right mx-3 text-neutral-400"></i>
                <span class="text-[#26A69A] font-bold">$30k</span>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#FF5722] hover:transform hover:translateY(-5px) transition-all duration-300 animate__animated animate__fadeInUp" style="animation-delay: 0.4s;">
            <div class="bg-[#FF5722] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 mx-auto">
              <i class="fas fa-hands-helping text-[#FF5722] text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-neutral-800 text-center mb-4">Comprehensive Support</h3>
            <p class="text-neutral-600 text-center mb-4">From visa assistance to post-treatment care, we handle everything to ensure a seamless healthcare journey.</p>
            <ul class="mt-4 text-sm text-neutral-600 space-y-2">
              <li class="flex items-center justify-center"><i class="fas fa-check text-[#FF5722] mr-2"></i><span>Visa Processing</span></li>
              <li class="flex items-center justify-center"><i class="fas fa-check text-[#FF5722] mr-2"></i><span>Travel Arrangements</span></li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#1E88E5] hover:transform hover:translateY(-5px) transition-all duration-300 animate__animated animate__fadeInUp" style="animation-delay: 0.6s;">
            <div class="bg-[#1E88E5] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 mx-auto">
              <i class="fas fa-microscope text-[#1E88E5] text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-neutral-800 text-center mb-4">Advanced Medical Facilities</h3>
            <p class="text-neutral-600 text-center mb-4">State-of-the-art technology and treatment procedures that meet international standards of care.</p>
            <div class="text-center mt-4">
              <span class="inline-block px-3 py-1 bg-[#1E88E5] bg-opacity-10 text-[#1E88E5] rounded-full text-xs font-semibold">Latest Medical Technology</span>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#26A69A] hover:transform hover:translateY(-5px) transition-all duration-300 animate__animated animate__fadeInUp" style="animation-delay: 0.8s;">
            <div class="bg-[#26A69A] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 mx-auto">
              <i class="fas fa-user-md text-[#26A69A] text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-neutral-800 text-center mb-4">Personalized Care</h3>
            <p class="text-neutral-600 text-center mb-4">Tailored medical plans based on patient needs with individual attention throughout treatment.</p>
            <div class="text-center mt-4">
              <span class="inline-block px-3 py-1 bg-[#26A69A] bg-opacity-10 text-[#26A69A] rounded-full text-xs font-semibold">Customized Treatment Plans</span>
            </div>
          </div>
          <div class="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl shadow-lg p-6 text-white hover:transform hover:translateY(-5px) transition-all duration-300 animate__animated animate__fadeInUp" style="animation-delay: 1s;">
            <div class="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-5 mx-auto">
              <i class="fas fa-headset text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-center mb-4">24/7 Patient Support</h3>
            <p class="text-gray-300 text-center mb-4">Round-the-clock assistance throughout your medical journey in India.</p>
            <div class="text-center mt-6">
              <a href="#contact" class="inline-block px-6 py-3 bg-[#FF5722] hover:bg-[#FF7043] text-white rounded-lg font-semibold transition-colors duration-300">Contact Our Team</a>
            </div>
          </div>
        </div>
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate__animated animate__fadeIn">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-[#1E88E5] mb-2">500+</div>
            <p class="text-neutral-600">Successful Treatments</p>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-[#26A69A] mb-2">20+</div>
            <p class="text-neutral-600">Countries Served</p>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-[#FF5722] mb-2">15+</div>
            <p class="text-neutral-600">Partner Hospitals</p>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-[#1E88E5] mb-2">98%</div>
            <p class="text-neutral-600">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  `
};
