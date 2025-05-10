const OurProcessComponent = {
  template: `
    <section id="process" class="py-20 bg-neutral-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16 animate__animated animate__fadeIn">
          <span class="text-[#1E88E5] font-semibold text-lg">OUR PROCESS</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-neutral-800">Your Journey to Health and
            Wellness</h2>
          <div class="w-24 h-1 bg-[#FF5722] mx-auto mb-6"></div>
          <p class="max-w-3xl mx-auto text-neutral-600">We've simplified the medical tourism process to ensure a
            seamless experience from consultation to recovery</p>
        </div>

        <div class="relative">
          <!-- Desktop Timeline -->
          <div class="hidden md:block">
            <div class="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gradient-to-b from-[#1E88E5] to-[#FF5722]">
            </div>

            <!-- Step 1 -->
            <div class="relative mb-20 animate__animated animate__fadeInLeft">
              <div class="flex items-center">
                <div class="w-1/2 pr-8 text-right">
                  <h3 class="text-2xl font-bold text-[#1E88E5] mb-2">Step 1</h3>
                  <h4 class="text-xl font-semibold text-neutral-800 mb-3">Consultation & Case Review</h4>
                  <p class="text-neutral-600">Send us your medical reports for a free assessment by our
                    specialists.</p>
                  <div class="mt-4 flex justify-end">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#1E88E5] bg-opacity-10 text-[#1E88E5]">
                      <i class="fas fa-file-medical mr-2"></i> Free Medical Assessment
                    </span>
                  </div>
                </div>
                <div
                  class="absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-[#1E88E5] shadow flex items-center justify-center">
                  <span class="text-white font-bold">1</span>
                </div>
                <div class="w-1/2 pl-12">
                  <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#1E88E5]">
                    <ul class="space-y-3 text-neutral-700">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Email your medical reports and history</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Initial consultation with specialist via video call</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Expert opinion on suitable treatment options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="relative mb-20 animate__animated animate__fadeInRight animate__delay-1s">
              <div class="flex items-center">
                <div class="w-1/2 pr-12">
                  <div class="bg-white p-6 rounded-xl shadow-md border-r-4 border-[#26A69A]">
                    <ul class="space-y-3 text-neutral-700">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Detailed treatment plan with procedure information</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Hospital and doctor recommendations</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Cost estimates for treatment and stay</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-[#26A69A] shadow flex items-center justify-center">
                  <span class="text-white font-bold">2</span>
                </div>
                <div class="w-1/2 pl-8 text-left">
                  <h3 class="text-2xl font-bold text-[#26A69A] mb-2">Step 2</h3>
                  <h4 class="text-xl font-semibold text-neutral-800 mb-3">Customized Treatment Plan</h4>
                  <p class="text-neutral-600">Receive a detailed plan with hospital recommendations and cost
                    estimates.</p>
                  <div class="mt-4">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#26A69A] bg-opacity-10 text-[#26A69A]">
                      <i class="fas fa-clipboard-list mr-2"></i> Personalized Care Plan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative mb-20 animate__animated animate__fadeInLeft animate__delay-2s">
              <div class="flex items-center">
                <div class="w-1/2 pr-8 text-right">
                  <h3 class="text-2xl font-bold text-[#FF5722] mb-2">Step 3</h3>
                  <h4 class="text-xl font-semibold text-neutral-800 mb-3">Travel & Visa Assistance</h4>
                  <p class="text-neutral-600">We help with visa processing, flight bookings, and accommodation
                    arrangements.</p>
                  <div class="mt-4 flex justify-end">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#FF5722] bg-opacity-10 text-[#FF5722]">
                      <i class="fas fa-plane mr-2"></i> Complete Travel Support
                    </span>
                  </div>
                </div>
                <div
                  class="absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-[#FF5722] shadow flex items-center justify-center">
                  <span class="text-white font-bold">3</span>
                </div>
                <div class="w-1/2 pl-12">
                  <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FF5722]">
                    <ul class="space-y-3 text-neutral-700">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Visa invitation letter and documentation</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Flight booking assistance</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Accommodation near the hospital</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="relative mb-20 animate__animated animate__fadeInRight animate__delay-3s">
              <div class="flex items-center">
                <div class="w-1/2 pr-12">
                  <div class="bg-white p-6 rounded-xl shadow-md border-r-4 border-[#1E88E5]">
                    <ul class="space-y-3 text-neutral-700">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Airport pickup and hospital transfer</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Hospital admission assistance</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Treatment and care coordination</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Interpretation services during hospital stay</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-[#1E88E5] shadow flex items-center justify-center">
                  <span class="text-white font-bold">4</span>
                </div>
                <div class="w-1/2 pl-8 text-left">
                  <h3 class="text-2xl font-bold text-[#1E88E5] mb-2">Step 4</h3>
                  <h4 class="text-xl font-semibold text-neutral-800 mb-3">Hospital Admission & Treatment</h4>
                  <p class="text-neutral-600">Get admitted, undergo treatment, and receive post-care support.</p>
                  <div class="mt-4">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#1E88E5] bg-opacity-10 text-[#1E88E5]">
                      <i class="fas fa-user-md mr-2"></i> Expert Medical Care
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="relative animate__animated animate__fadeInLeft animate__delay-4s">
              <div class="flex items-center">
                <div class="w-1/2 pr-8 text-right">
                  <h3 class="text-2xl font-bold text-[#26A69A] mb-2">Step 5</h3>
                  <h4 class="text-xl font-semibold text-neutral-800 mb-3">Follow-Up & Recovery Support</h4>
                  <p class="text-neutral-600">Continued medical guidance post-treatment to ensure full recovery.
                  </p>
                  <div class="mt-4 flex justify-end">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#26A69A] bg-opacity-10 text-[#26A69A]">
                      <i class="fas fa-heart mr-2"></i> Comprehensive Recovery Plan
                    </span>
                  </div>
                </div>
                <div
                  class="absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-[#26A69A] shadow flex items-center justify-center">
                  <span class="text-white font-bold">5</span>
                </div>
                <div class="w-1/2 pl-12">
                  <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#26A69A]">
                    <ul class="space-y-3 text-neutral-700">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Discharge planning and documentation</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Virtual follow-up consultations</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Coordination with local doctors</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                        <span>Long-term recovery monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Timeline -->
          <div class="md:hidden space-y-8">
            <!-- Step 1 -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp">
              <div class="bg-[#1E88E5] text-white p-4">
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 rounded-full bg-white text-[#1E88E5] flex items-center justify-center font-bold mr-3">
                    1</div>
                  <h3 class="text-xl font-bold">Consultation & Case Review</h3>
                </div>
              </div>
              <div class="p-5">
                <p class="text-neutral-600 mb-4">Send us your medical reports for a free assessment by our
                  specialists.</p>
                <ul class="space-y-3 text-neutral-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Email your medical reports and history</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Initial consultation with specialist via video call</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Expert opinion on suitable treatment options</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Step 2 -->
            <div
              class="bg-white rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp animate__delay-1s">
              <div class="bg-[#26A69A] text-white p-4">
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 rounded-full bg-white text-[#26A69A] flex items-center justify-center font-bold mr-3">
                    2</div>
                  <h3 class="text-xl font-bold">Customized Treatment Plan</h3>
                </div>
              </div>
              <div class="p-5">
                <p class="text-neutral-600 mb-4">Receive a detailed plan with hospital recommendations and cost
                  estimates.</p>
                <ul class="space-y-3 text-neutral-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Detailed treatment plan with procedure information</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Hospital and doctor recommendations</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Cost estimates for treatment and stay</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Step 3 -->
            <div
              class="bg-white rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp animate__delay-2s">
              <div class="bg-[#FF5722] text-white p-4">
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 rounded-full bg-white text-[#FF5722] flex items-center justify-center font-bold mr-3">
                    3</div>
                  <h3 class="text-xl font-bold">Travel & Visa Assistance</h3>
                </div>
              </div>
              <div class="p-5">
                <p class="text-neutral-600 mb-4">We help with visa processing, flight bookings, and accommodation
                  arrangements.</p>
                <ul class="space-y-3 text-neutral-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Visa invitation letter and documentation</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Flight booking assistance</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Accommodation near the hospital</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Step 4 -->
            <div
              class="bg-white rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp animate__delay-3s">
              <div class="bg-[#1E88E5] text-white p-4">
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 rounded-full bg-white text-[#1E88E5] flex items-center justify-center font-bold mr-3">
                    4</div>
                  <h3 class="text-xl font-bold">Hospital Admission & Treatment</h3>
                </div>
              </div>
              <div class="p-5">
                <p class="text-neutral-600 mb-4">Get admitted, undergo treatment, and receive post-care support.
                </p>
                <ul class="space-y-3 text-neutral-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Airport pickup and hospital transfer</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Hospital admission assistance</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Treatment and care coordination</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Interpretation services during hospital stay</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Step 5 -->
            <div
              class="bg-white rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp animate__delay-4s">
              <div class="bg-[#26A69A] text-white p-4">
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 rounded-full bg-white text-[#26A69A] flex items-center justify-center font-bold mr-3">
                    5</div>
                  <h3 class="text-xl font-bold">Follow-Up & Recovery Support</h3>
                </div>
              </div>
              <div class="p-5">
                <p class="text-neutral-600 mb-4">Continued medical guidance post-treatment to ensure full
                  recovery.</p>
                <ul class="space-y-3 text-neutral-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Discharge planning and documentation</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Virtual follow-up consultations</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Coordination with local doctors</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-[#26A69A] mt-1 mr-3"></i>
                    <span>Long-term recovery monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Call To Action -->
        <div class="mt-20 text-center">
          <div
            class="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl p-8 shadow-xl max-w-3xl mx-auto animate__animated animate__fadeIn">
            <h3 class="text-2xl font-bold text-white mb-4">Begin Your Journey to Wellness Today</h3>
            <p class="text-gray-300 mb-6">Our dedicated team is ready to guide you through the entire process,
              ensuring your medical journey is smooth and successful.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact"
                class="bg-[#FF5722] hover:bg-[#FF7043] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Contact Us Now
              </a>
              <a href="#specialties"
                class="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Explore Treatments
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      processSteps: [
        { 
          title: "Consultation & Case Review",
          description: "Send us your medical reports for a free assessment by our specialists.",
          bgColor: "bg-[#1E88E5]", 
          borderColor: "border-[#1E88E5]",
          details: [
            "Email your medical reports and history",
            "Initial consultation with specialist via video call",
            "Expert opinion on suitable treatment options"
          ]
        },
        { 
          title: "Customized Treatment Plan", 
          description: "Receive a detailed plan with hospital recommendations and cost estimates.", 
          bgColor: "bg-[#26A69A]", 
          borderColor: "border-[#26A69A]",
          details: [
            "Detailed treatment plan with procedure information",
            "Hospital and doctor recommendations",
            "Cost estimates for treatment and stay"
          ]
        },
        { 
          title: "Travel & Visa Assistance", 
          description: "We help with visa processing, flight bookings, and accommodation arrangements.", 
          bgColor: "bg-[#FF5722]", 
          borderColor: "border-[#FF5722]",
          details: [
            "Visa invitation letter and documentation",
            "Flight booking assistance",
            "Accommodation near the hospital"
          ]
        },
        { 
          title: "Hospital Admission & Treatment", 
          description: "Get admitted, undergo treatment, and receive post-care support.", 
          bgColor: "bg-[#1E88E5]", 
          borderColor: "border-[#1E88E5]",
          details: [
            "Airport pickup and hospital transfer",
            "Hospital admission assistance",
            "Treatment and care coordination",
            "Interpretation services during hospital stay"
          ]
        },
        { 
          title: "Follow-Up & Recovery Support", 
          description: "Continued medical guidance post-treatment to ensure full recovery.", 
          bgColor: "bg-[#26A69A]", 
          borderColor: "border-[#26A69A]",
          details: [
            "Discharge planning and documentation",
            "Virtual follow-up consultations",
            "Coordination with local doctors",
            "Long-term recovery monitoring"
          ]
        }
      ]
    };
  }
};
