const ContactComponent = {
  template: `
    <section id="contact" class="py-20 bg-neutral-900 text-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16 animate__animated animate__fadeIn">
          <span class="text-[#1E88E5] font-semibold text-lg">GET IN TOUCH</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4">Contact Us for a Free Consultation</h2>
          <div class="w-24 h-1 bg-[#FF5722] mx-auto mb-6"></div>
          <p class="max-w-3xl mx-auto text-neutral-300">Have questions or ready to start your medical journey? Reach out to us today. Our team is available 24/7 to assist you.</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Contact Form -->
          <iframe src="https://tally.so/r/mB0xy1" width="100%" height="650px" frameborder="0" marginheight="0"
            marginwidth="0" style="border-radius: 10px" class="animate__animated animate__fadeInLeft">Loading…</iframe>

          <!-- Contact Information -->
          <div class="flex flex-col justify-between animate__animated animate__fadeInRight">
            <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 class="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-[#1E88E5] bg-opacity-20 rounded-full flex items-center justify-center">
                    <i class="fas fa-map-marker-alt text-[#1E88E5] text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-lg text-white">Office Location</h4>
                    <p class="text-gray-300">84, Sri Aurobindo Marg Adchini</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-[#26A69A] bg-opacity-20 rounded-full flex items-center justify-center">
                    <i class="fas fa-phone-alt text-[#26A69A] text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-lg text-white">Phone</h4>
                    <p class="text-gray-300">
                      <a href="tel:+919839991913" class="hover:text-[#26A69A] transition-colors">+91
                        9839991913</a>
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-[#FF5722] bg-opacity-20 rounded-full flex items-center justify-center">
                    <i class="fas fa-envelope text-[#FF5722] text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-lg text-white">Email</h4>
                    <p class="text-gray-300">
                      <a href="mailto:contact@medretreats.in"
                        class="hover:text-[#FF5722] transition-colors">contact@medretreats.in</a>
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-[#1E88E5] bg-opacity-20 rounded-full flex items-center justify-center">
                    <i class="fas fa-clock text-[#1E88E5] text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-lg text-white">Hours of Operation</h4>
                    <p class="text-gray-300">Monday to Friday: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Response Section -->
            <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-8">
              <h3 class="text-xl font-bold mb-4 text-white">Get a Quick Response</h3>
              <p class="text-gray-300 mb-6">Connect with us directly through these channels for faster assistance
              </p>
              <div class="grid grid-cols-2 gap-4">
                <a href="https://wa.me/919839991913" target="_blank"
                  class="flex items-center justify-center px-4 py-3 bg-[#25D366] rounded-lg hover:bg-opacity-90 transition-colors">
                  <i class="fab fa-whatsapp text-white mr-2 text-xl"></i>
                  <span class="text-white font-medium">WhatsApp</span>
                </a>
                <a href="tel:+919839991913"
                  class="flex items-center justify-center px-4 py-3 bg-[#1E88E5] rounded-lg hover:bg-opacity-90 transition-colors">
                  <i class="fas fa-phone-alt text-white mr-2"></i>
                  <span class="text-white font-medium">Call Now</span>
                </a>
                <a href="mailto:contact@medretreats.in"
                  class="flex items-center justify-center px-4 py-3 bg-[#FF5722] rounded-lg hover:bg-opacity-90 transition-colors">
                  <i class="fas fa-envelope text-white mr-2"></i>
                  <span class="text-white font-medium">Email</span>
                </a>
                <a href="#"
                  class="flex items-center justify-center px-4 py-3 bg-[#26A69A] rounded-lg hover:bg-opacity-90 transition-colors">
                  <i class="fas fa-video text-white mr-2"></i>
                  <span class="text-white font-medium">Video Call</span>
                </a>
              </div>
            </div>

            <!-- Follow Us -->
            <div class="mt-8 text-center">
              <h3 class="text-lg font-semibold mb-4 text-white">Follow Us</h3>
              <div class="flex justify-center space-x-4">
                <a href="#"
                  class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#1877F2] transition-colors">
                  <i class="fab fa-facebook-f text-white"></i>
                </a>
                <a href="#"
                  class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#1DA1F2] transition-colors">
                  <i class="fab fa-twitter text-white"></i>
                </a>
                <a href="#"
                  class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#E4405F] transition-colors">
                  <i class="fab fa-instagram text-white"></i>
                </a>
                <a href="#"
                  class="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#0A66C2] transition-colors">
                  <i class="fab fa-linkedin-in text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {};
  }
};
