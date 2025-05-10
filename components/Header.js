const HeaderComponent = {
  template: `
    <section id="header">
      <nav class="bg-neutral-900 text-white py-3 px-4 md:px-6 fixed w-full z-50">
        <div class="container mx-auto flex justify-between items-center">
          <a href="#hero" class="text-2xl font-bold text-primary-500 flex items-center space-x-2">
            <span class="text-white">Med<span class="text-[#1E88E5]">Retreats</span> <span class="text-[#FF5722]">369</span></span>
          </a>
          <div class="hidden md:flex space-x-6">
            <a href="#hero" class="hover:text-[#FF5722] transition-colors duration-300">Home</a>
            <a href="#about" class="hover:text-[#FF5722] transition-colors duration-300">About Us</a>
            <a href="#why-choose-us" class="hover:text-[#FF5722] transition-colors duration-300">Why Choose Us</a>
            <a href="#specialties" class="hover:text-[#FF5722] transition-colors duration-300">Specialties</a>
            <a href="#process" class="hover:text-[#FF5722] transition-colors duration-300">Our Process</a>
            <a href="#additional-services" class="hover:text-[#FF5722] transition-colors duration-300">Services</a>
            <a href="#testimonials" class="hover:text-[#FF5722] transition-colors duration-300">Testimonials</a>
            <a href="#contact" class="hover:text-[#FF5722] transition-colors duration-300">Contact</a>
          </div>
          <button id="mobile-menu-button" class="md:hidden flex items-center" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div id="mobile-menu" class="md:hidden hidden bg-neutral-800 absolute top-full left-0 w-full">
          <ul class="py-3 px-4 space-y-2">
            <li><a href="#hero" class="block py-2 hover:text-[#FF5722] transition-colors duration-300">Home</a></li>
            <li><a href="#about" class="block py-2 hover:text-[#FF5722] transition-colors duration-300">About Us</a></li>
            <li><a href="#why-choose-us" class="block py-2 hover:text-[#FF5722] transition-colors duration-300">Why Choose Us</a></li>
            <li><a href="#specialties" class="block py-2 hover:text-[#FF5722] transition-colors duration-300">Specialties</a></li>
            <li><a href="#process" class="block py-2 hover:text-[#FF5722] transition-colors duration-300">Our Process</a></li>
            <li><a href="#additional-services" class="block py-2 hover:text-[#FF5722] transition-colors duration-300">Services</a></li>
            <li><a href="#testimonials" class="block py-2 hover:text-[#FF5722] transition-colors duration-300">Testimonials</a></li>
            <li><a href="#contact" class="block py-2 hover:text-[#FF5722] transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>
    </section>
  `,
  mounted() {
    const mobileMenuButton = this.$el.querySelector('#mobile-menu-button');
    const mobileMenu = this.$el.querySelector('#mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function () {
        const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
        mobileMenuButton.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hidden');
      });

      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileMenuButton.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }
};
