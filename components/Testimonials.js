const TestimonialsComponent = {
  template: `
    <section id="testimonials" class="py-20 bg-gradient-to-r from-[#1E88E5]/5 to-[#FF5722]/5">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16 animate__animated animate__fadeIn">
          <span class="text-[#26A69A] font-semibold text-lg">PATIENT STORIES</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-neutral-800">Words From Our Valued Patients</h2>
          <div class="w-24 h-1 bg-[#FF5722] mx-auto mb-6"></div>
          <p class="max-w-3xl mx-auto text-neutral-600">Hear directly from those who have experienced our care and support.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate__animated animate__fadeInUp" :style="{ animationDelay: (index * 0.15) + 's' }">
            <div class="flex items-center mb-6">
              <img :src="testimonial.image" :alt="testimonial.name" class="w-16 h-16 rounded-full mr-4 object-cover border-2 border-[#1E88E5]">
              <div>
                <h3 class="text-xl font-bold text-neutral-800">{{ testimonial.name }}</h3>
                <p class="text-sm text-[#FF5722]">{{ testimonial.country }} - {{ testimonial.treatment }}</p>
              </div>
            </div>
            <p class="text-neutral-600 italic mb-6 leading-relaxed">"{{ testimonial.quote }}"</p>
            <div class="flex items-center text-yellow-400">
              <i v-for="n in 5" :key="n" class="fas fa-star"></i>
            </div>
          </div>
        </div>
        <div class="text-center mt-16">
          <a href="#contact" class="inline-flex items-center px-8 py-4 bg-[#1E88E5] text-white rounded-lg hover:bg-[#1976D2] transition duration-300 shadow-lg">
            <span>Share Your Story or Get in Touch</span>
            <i class="fas fa-arrow-right ml-3"></i>
          </a>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      testimonials: [
        { name: "Aisha Al-Fahim", country: "UAE", treatment: "Cardiac Surgery", quote: "MedRetreats 369 made my complex heart surgery feel manageable. The care in India was exceptional, and the team supported me every step of the way. Highly recommended!", image: "https://randomuser.me/api/portraits/women/68.jpg" },
        { name: "John Okoro", country: "Nigeria", treatment: "Kidney Transplant", quote: "Finding a donor and undergoing a transplant seemed daunting, but MedRetreats 369 handled everything professionally. The doctors were world-class, and the cost was affordable.", image: "https://randomuser.me/api/portraits/men/75.jpg" },
        { name: "Fatima Khan", country: "Qatar", treatment: "Fertility Treatment", quote: "Our journey to parenthood was successful thanks to MedRetreats 369 and the amazing fertility clinic in India. They were compassionate and highly skilled.", image: "https://randomuser.me/api/portraits/women/78.jpg" },
        { name: "David Miller", country: "USA", treatment: "Orthopedic Surgery", quote: "I came to India for a knee replacement. The quality of care and the personalized attention from MedRetreats 369 exceeded my expectations. My recovery has been fantastic.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Lina Hassan", country: "Jordan", treatment: "Cosmetic Surgery", quote: "The results of my cosmetic procedure are amazing! MedRetreats 369 connected me with a brilliant surgeon, and their support throughout was invaluable.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Mohammed Al-Jabri", country: "Oman", treatment: "Oncology Treatment", quote: "Facing cancer was tough, but MedRetreats 369 provided excellent options in India. The oncologists were knowledgeable, and the facilities were top-notch. Grateful for their help.", image: "https://randomuser.me/api/portraits/men/50.jpg" }
      ]
    };
  }
};
