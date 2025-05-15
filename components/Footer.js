const FooterComponent = {
  template: `
    <footer class="bg-neutral-900 text-neutral-300 py-12">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- About MedRetreats 369 -->
          <div>
            <h3 class="text-xl font-bold text-white mb-4">
              Med<span class="text-[#1E88E5]">Retreats</span> <span class="text-[#FF5722]">369</span>
            </h3>
            <p class="text-sm leading-relaxed mb-4">
              Your trusted partner for affordable, high-quality medical treatments in India. We provide end-to-end support for a seamless healthcare journey.
            </p>
            <div class="flex space-x-3">
              <a href="#" aria-label="Facebook" class="text-neutral-400 hover:text-[#1E88E5] transition-colors"><i class="fab fa-facebook-f fa-lg"></i></a>
              <a href="#" aria-label="Twitter" class="text-neutral-400 hover:text-[#1E88E5] transition-colors"><i class="fab fa-twitter fa-lg"></i></a>
              <a href="#" aria-label="Instagram" class="text-neutral-400 hover:text-[#1E88E5] transition-colors"><i class="fab fa-instagram fa-lg"></i></a>
              <a href="#" aria-label="LinkedIn" class="text-neutral-400 hover:text-[#1E88E5] transition-colors"><i class="fab fa-linkedin-in fa-lg"></i></a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#about" class="hover:text-[#FF5722] transition-colors">About Us</a></li>
              <li><a href="#specialties" class="hover:text-[#FF5722] transition-colors">Medical Specialties</a></li>
              <li><a href="#process" class="hover:text-[#FF5722] transition-colors">Our Process</a></li>
              <li><a href="#wellness-retreats" class="hover:text-[#FF5722] transition-colors">Wellness & Recovery</a></li>
              <li><a href="#testimonials" class="hover:text-[#FF5722] transition-colors">Testimonials</a></li>
              <li><a href="#contact" class="hover:text-[#FF5722] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start">
                <i class="fas fa-map-marker-alt w-5 text-[#1E88E5] mt-1 mr-2"></i>
                <span>84, Sri Aurobindo Marg, Adchini, Block C, Adchini, New Delhi, Delhi 110017</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-phone-alt w-5 text-[#1E88E5] mr-2"></i>
                <a href="tel:+919839991913" class="hover:text-[#FF5722] transition-colors">+91 9839991913</a>
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope w-5 text-[#1E88E5] mr-2"></i>
                <a href="mailto:contact@medretreats.in" class="hover:text-[#FF5722] transition-colors">contact@medretreats.in</a>
              </li>
               <li class="flex items-center">
                <i class="fab fa-whatsapp w-5 text-[#1E88E5] mr-2"></i>
                <a href="https://wa.me/919839991913" target="_blank" class="hover:text-[#FF5722] transition-colors">+91 9839991913</a>
              </li>
            </ul>
          </div>
          
          <!-- Newsletter -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p class="text-sm mb-3">Subscribe to our newsletter for the latest updates on medical tourism and wellness.</p>
            <form @submit.prevent="subscribeNewsletter">
              <div class="flex">
                <input type="email" v-model="newsletterEmail" placeholder="Your Email" class="w-full bg-neutral-800 border-neutral-700 text-white rounded-l-md p-2 text-sm focus:ring-1 focus:ring-[#1E88E5] focus:border-[#1E88E5] outline-none" required>
                <button type="submit" class="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-4 py-2 rounded-r-md text-sm font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
               <p v-if="newsletterStatus" class="mt-2 text-xs" :class="isNewsletterSuccess ? 'text-green-400' : 'text-red-400'">{{ newsletterStatus }}</p>
            </form>
          </div>
        </div>

        <div class="border-t border-neutral-700 pt-8 mt-8 text-center text-sm">
          <p>&copy; {{ new Date().getFullYear() }} MedRetreats 369 Pvt. Ltd. All Rights Reserved.</p>
          <p class="mt-2">
            <a href="#privacy-policy" class="hover:text-[#FF5722] transition-colors">Privacy Policy</a> | 
            <a href="#terms-conditions" class="hover:text-[#FF5722] transition-colors">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  `,
  data() {
    return {
      newsletterEmail: '',
      newsletterStatus: '',
      isNewsletterSuccess: false
    };
  },
  methods: {
    async subscribeNewsletter() {
      if (!this.newsletterEmail) {
        this.newsletterStatus = 'Please enter your email.';
        this.isNewsletterSuccess = false;
        return;
      }
      // Basic email validation
      if (!/^\S+@\S+\.\S+$/.test(this.newsletterEmail)) {
          this.newsletterStatus = 'Please enter a valid email address.';
          this.isNewsletterSuccess = false;
          return;
      }

      this.newsletterStatus = 'Subscribing...';
      // Simulate API call
      console.log('Subscribing email:', this.newsletterEmail);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.newsletterStatus = 'Thank you for subscribing!';
        this.isNewsletterSuccess = true;
        this.newsletterEmail = '';
      } catch (error) {
        this.newsletterStatus = 'Subscription failed. Please try again.';
        this.isNewsletterSuccess = false;
      }
    }
  }
};
