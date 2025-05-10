const WellnessRetreatsComponent = {
  template: `
    <section id="wellness-retreats" class="py-20 bg-gradient-to-r from-[#26A69A]/10 to-[#FF5722]/10">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16 animate__animated animate__fadeIn">
          <span class="text-[#26A69A] font-semibold text-lg">WELLNESS & RECOVERY SERVICES</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-neutral-800">Holistic Healing & Rejuvenation in India</h2>
          <div class="w-24 h-1 bg-[#FF5722] mx-auto mb-6"></div>
          <p class="max-w-3xl mx-auto text-neutral-600">
            Enhance your medical journey with our comprehensive wellness and recovery services. We offer full body health checkups, second opinion services, post-operative rehab, authentic wellness retreats (Ayurveda, Yoga, Spa), and post-cancer recovery programs—combining traditional Indian healing with modern medical expertise for complete mind-body rejuvenation.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
          <div class="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp">
            <div class="mb-5 w-16 h-16 rounded-full bg-[#1E88E5]/10 flex items-center justify-center">
              <i class="fas fa-notes-medical text-[#1E88E5] text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl text-neutral-800 mb-3">Full Body Health Checkups</h3>
            <p class="text-neutral-600 mb-4">Comprehensive executive health packages for early detection and prevention, tailored to your age, gender, and risk profile.</p>
            <ul class="text-sm text-neutral-700 space-y-2">
              <li><i class="fas fa-check text-[#1E88E5] mr-2"></i>Blood tests & imaging</li>
              <li><i class="fas fa-check text-[#1E88E5] mr-2"></i>Cardiac & cancer screening</li>
              <li><i class="fas fa-check text-[#1E88E5] mr-2"></i>Doctor consultation & reports</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp" style="animation-delay:0.05s;">
            <div class="mb-5 w-16 h-16 rounded-full bg-[#26A69A]/10 flex items-center justify-center">
              <i class="fas fa-user-md text-[#26A69A] text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl text-neutral-800 mb-3">Second Opinion Services</h3>
            <p class="text-neutral-600 mb-4">Get expert reviews of your diagnosis and treatment plan from India's top specialists for peace of mind and informed decisions.</p>
            <ul class="text-sm text-neutral-700 space-y-2">
              <li><i class="fas fa-check text-[#26A69A] mr-2"></i>Remote medical review</li>
              <li><i class="fas fa-check text-[#26A69A] mr-2"></i>Multi-specialty panel</li>
              <li><i class="fas fa-check text-[#26A69A] mr-2"></i>Personalized recommendations</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp" style="animation-delay:0.1s;">
            <div class="mb-5 w-16 h-16 rounded-full bg-[#FF5722]/10 flex items-center justify-center">
              <i class="fas fa-dumbbell text-[#FF5722] text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl text-neutral-800 mb-3">Post-Operative Rehab</h3>
            <p class="text-neutral-600 mb-4">Accelerate your recovery with customized physiotherapy, occupational therapy, and rehabilitation programs after surgery.</p>
            <ul class="text-sm text-neutral-700 space-y-2">
              <li><i class="fas fa-check text-[#FF5722] mr-2"></i>Physiotherapy & pain management</li>
              <li><i class="fas fa-check text-[#FF5722] mr-2"></i>Mobility & strength training</li>
              <li><i class="fas fa-check text-[#FF5722] mr-2"></i>Home exercise plans</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp" style="animation-delay:0.15s;">
            <div class="mb-5 w-16 h-16 rounded-full bg-[#8BC34A]/10 flex items-center justify-center">
              <i class="fas fa-spa text-[#8BC34A] text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl text-neutral-800 mb-3">Wellness Retreats</h3>
            <p class="text-neutral-600 mb-4">Experience authentic Ayurveda, yoga, and spa therapies for detox, stress relief, and holistic well-being at India's top wellness centers.</p>
            <ul class="text-sm text-neutral-700 space-y-2">
              <li><i class="fas fa-check text-[#8BC34A] mr-2"></i>Panchakarma & herbal therapies</li>
              <li><i class="fas fa-check text-[#8BC34A] mr-2"></i>Yoga & meditation sessions</li>
              <li><i class="fas fa-check text-[#8BC34A] mr-2"></i>Luxury spa treatments</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp" style="animation-delay:0.2s;">
            <div class="mb-5 w-16 h-16 rounded-full bg-[#8E24AA]/10 flex items-center justify-center">
              <i class="fas fa-ribbon text-[#8E24AA] text-3xl"></i>
            </div>
            <h3 class="font-bold text-xl text-neutral-800 mb-3">Post-Cancer Recovery</h3>
            <p class="text-neutral-600 mb-4">Specialized programs for cancer survivors focusing on physical rehab, nutrition, emotional healing, and long-term wellness.</p>
            <ul class="text-sm text-neutral-700 space-y-2">
              <li><i class="fas fa-check text-[#8E24AA] mr-2"></i>Oncology rehabilitation</li>
              <li><i class="fas fa-check text-[#8E24AA] mr-2"></i>Diet & lifestyle counseling</li>
              <li><i class="fas fa-check text-[#8E24AA] mr-2"></i>Support groups & mindfulness</li>
            </ul>
          </div>
        </div>
        <div class="text-center mt-16">
          <h3 class="font-bold text-2xl mb-6 text-neutral-800">Ready to Experience Holistic Healing?</h3>
          <a href="#contact" class="inline-block px-8 py-4 bg-[#26A69A] hover:bg-[#1E88E5] text-white rounded-lg font-semibold transition-colors duration-300 shadow-lg animate__animated animate__pulse animate__infinite animate__slower">
            Inquire About Wellness & Recovery Services
          </a>
          <p class="mt-4 text-neutral-600">Our team will help you select the perfect program for your health, recovery, and rejuvenation.</p>
        </div>
      </div>
    </section>
  `
};
