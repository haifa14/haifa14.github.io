const HospitalPartnersComponent = {
  template: `
    <section id="hospital-partners" class="py-16 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-12 animate__animated animate__fadeIn">
          <span class="text-[#1E88E5] font-semibold text-lg">OUR HOSPITAL PARTNERS</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-neutral-800">Leading Healthcare Providers</h2>
          <div class="w-24 h-1 bg-[#FF5722] mx-auto mb-6"></div>
          <p class="max-w-3xl mx-auto text-neutral-600">We partner with India's top hospitals to ensure world-class medical care for our patients</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center animate__animated animate__fadeInUp">
            <div class="mb-6 h-32 flex items-center">
              <img src="fortis.png" alt="Fortis Healthcare Logo" class="max-h-full">
            </div>
            <h3 class="text-xl font-bold text-neutral-800 mb-3">Fortis Healthcare</h3>
            <p class="text-neutral-600 text-center mb-4">One of India's leading integrated healthcare delivery service providers with 36+ hospitals nationwide.</p>
            <div class="mt-auto">
              <span class="px-4 py-2 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full text-sm font-medium">JCI Accredited</span>
            </div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
            <div class="mb-6 h-32 flex items-center">
              <img src="apollo.png" alt="Apollo Hospitals Logo" class="max-h-full">
            </div>
            <h3 class="text-xl font-bold text-neutral-800 mb-3">Apollo Hospitals</h3>
            <p class="text-neutral-600 text-center mb-4">Pioneering private healthcare in India with over 70 hospitals and 400+ clinics across the country.</p>
            <div class="mt-auto">
              <span class="px-4 py-2 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full text-sm font-medium">JCI Accredited</span>
            </div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center animate__animated animate__fadeInUp" style="animation-delay: 0.4s;">
            <div class="mb-6 h-32 flex items-center">
              <img src="max.png" alt="Max Healthcare Logo" class="max-h-full">
            </div>
            <h3 class="text-xl font-bold text-neutral-800 mb-3">Max Healthcare</h3>
            <p class="text-neutral-600 text-center mb-4">Leading hospital chain in North India with 17 facilities offering specialized medical excellence.</p>
            <div class="mt-auto">
              <span class="px-4 py-2 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full text-sm font-medium">JCI Accredited</span>
            </div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center animate__animated animate__fadeInUp" style="animation-delay: 0.6s;">
            <div class="mb-6 h-32 flex items-center">
              <img src="oriana.png" alt="Oriana Hospital Varanasi Logo" class="max-h-full">
            </div>
            <h3 class="text-xl font-bold text-neutral-800 mb-3">Oriana Hospital, Varanasi</h3>
            <p class="text-neutral-600 text-center mb-4">A leading multi-specialty hospital in Varanasi, known for advanced medical care and patient-centric services.</p>
            <div class="mt-auto">
              <span class="px-4 py-2 bg-[#1E88E5]/10 text-[#1E88E5] rounded-full text-sm font-medium">NABH Accredited</span>
            </div>
          </div>
        </div>
        <div class="mt-12 text-center">
          <div class="p-4 bg-neutral-50 rounded-lg inline-block max-w-3xl mx-auto">
            <p class="text-neutral-700">
              <i class="fas fa-certificate text-[#FF5722] mr-2"></i>
              All our partner hospitals maintain international quality standards and are equipped with cutting-edge medical technology
            </p>
          </div>
        </div>
        <div class="mt-10 text-center">
          <a href="#contact" class="inline-flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition duration-300">
            <span>Schedule a consultation at our partner hospitals</span>
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  `
};
