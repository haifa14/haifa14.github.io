const SpecialtiesComponent = {
  template: `
    <section id="specialties" class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16 animate__animated animate__fadeIn">
          <span class="text-[#26A69A] font-semibold text-lg">OUR SPECIALTIES</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-neutral-800">World-Class Medical Treatments</h2>
          <div class="w-24 h-1 bg-[#FF5722] mx-auto mb-6"></div>
          <p class="max-w-3xl mx-auto text-neutral-600">We offer expert medical services in these specialized areas with cutting-edge technology and experienced professionals</p>
        </div>
        <div class="mb-12">
          <div class="flex justify-center mb-10">
            <div class="inline-flex overflow-x-auto max-w-full pb-2 hide-scrollbar bg-neutral-100 rounded-full p-1 animate__animated animate__fadeIn" role="tablist" id="specialty-tabs">
              <div class="flex whitespace-nowrap px-2">
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab active" data-target="tab-8">Cardiology</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-7">Orthopedic</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-18-urology">Urology</button> <!-- Renamed data-target to avoid conflict -->
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-9">Oncology</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-10">Neurology</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-11">Cosmetic</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-12">Fertility</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-13">Gastro</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-14">Dentistry</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-15">Ophthalmology</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-16">Dermatology</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-17">Pulmonology</button>
                <!-- Removed duplicate Urology tab button, one is enough -->
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-19">Endocrinology</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-20">Rheumatology</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-21">Mental Health</button>
                <button class="px-4 py-2 rounded-full text-sm font-medium specialty-tab" data-target="tab-22">Transplants</button>
              </div>
            </div>
          </div>
          <div class="specialty-content">
            <div id="tab-7" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#FF9800] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-bone text-[#FF9800] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Orthopedic Treatments</h3>
                    <p class="text-gray-300 mb-6">Advanced surgical and non-surgical solutions for bone, joint and musculoskeletal conditions with minimally invasive techniques.</p>
                    <div class="mb-2 text-sm text-gray-400">Our orthopedic services include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Joint Replacement Surgery</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Spine Surgery</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Sports Injury Treatment</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Arthroscopic Procedures</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#FF9800] mb-2">Joint Replacement</h5>
                        <p class="text-neutral-600 text-sm mb-3">Advanced procedures for hip, knee and shoulder joints.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Robotic-assisted joint replacement</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Minimally invasive techniques</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Custom implants for better fit</span></li>
                        </ul>
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#FF9800] mb-2">Arthroscopic Surgery</h5>
                        <p class="text-neutral-600 text-sm mb-3">Keyhole procedures for joint problems.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Knee ligament reconstruction</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Shoulder rotator cuff repair</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Cartilage restoration</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-6 bg-[#FF9800] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Orthopedic Care?</h5>
                      <p class="text-neutral-600 text-sm">Our orthopedic centers feature state-of-the-art operation theaters with navigation systems, robotic surgical assistants, and comprehensive rehabilitation programs. We provide personalized treatment plans with outcomes matching international standards at affordable costs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-8" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#E53935] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-heartbeat text-[#E53935] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Cardiology</h3>
                    <p class="text-gray-300 mb-6">Comprehensive heart care with advanced diagnostic and treatment options for all cardiac conditions.</p>
                    <div class="mb-2 text-sm text-gray-400">Our cardiology services include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Heart bypass surgery (CABG)</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Angioplasty & stents</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Valve replacements</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Pacemaker implants</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#E53935] mb-2">Heart Bypass Surgery (CABG)</h5>
                        <p class="text-neutral-600 text-sm mb-3">Coronary artery bypass grafting to restore blood flow to the heart muscle.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Minimally invasive options available</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>High success rates with experienced surgeons</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Comprehensive post-op cardiac rehab</span></li>
                        </ul>
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#E53935] mb-2">Angioplasty & Stents</h5>
                        <p class="text-neutral-600 text-sm mb-3">Non-surgical procedure to open blocked arteries and improve blood flow.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Drug-eluting stents available</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Short recovery time</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Performed by interventional cardiologists</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-6 bg-[#E53935] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Cardiac Care?</h5>
                      <p class="text-neutral-600 text-sm">Our cardiac centers feature cutting-edge technology including robotic-assisted surgery, hybrid operating rooms, and comprehensive cardiac rehabilitation programs. We provide personalized treatment plans with outcomes matching international standards at affordable costs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-9" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#8E24AA] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-dna text-[#8E24AA] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Oncology</h3>
                    <p class="text-gray-300 mb-6">Comprehensive cancer care with advanced treatment options and personalized care plans.</p>
                    <div class="mb-2 text-sm text-gray-400">Our oncology services include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Chemotherapy</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Radiation therapy</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Cancer surgeries</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Immunotherapy</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#8E24AA] mb-2">Precision Radiation Therapy</h5>
                        <p class="text-neutral-600 text-sm mb-3">Advanced radiation techniques that target tumors while sparing healthy tissue.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>IMRT (Intensity-Modulated Radiation Therapy)</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Stereotactic Radiosurgery</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Brachytherapy</span></li>
                        </ul>
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#8E24AA] mb-2">Immunotherapy</h5>
                        <p class="text-neutral-600 text-sm mb-3">Cutting-edge treatments that harness the body's immune system to fight cancer.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Checkpoint inhibitors</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>CAR-T cell therapy</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Cancer vaccines</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-6 bg-[#8E24AA] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Multidisciplinary Cancer Care</h5>
                      <p class="text-neutral-600 text-sm">Our cancer centers bring together surgical oncologists, medical oncologists, radiation oncologists, and support specialists to create comprehensive treatment plans tailored to each patient's unique needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-10" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#3949AB] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-brain text-[#3949AB] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Neurology & Neurosurgery</h3>
                    <p class="text-gray-300 mb-6">Advanced treatments for neurological disorders and brain/spine conditions.</p>
                    <div class="mb-2 text-sm text-gray-400">Our neurology services include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Brain tumor surgeries</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Spine surgeries</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Stroke rehabilitation</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Parkinson's treatment</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#3949AB] mb-2">Brain Tumor Surgeries</h5>
                        <p class="text-neutral-600 text-sm mb-3">Minimally invasive and robotic-assisted procedures for brain tumors.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Awake craniotomy</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Endoscopic approaches</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Gamma Knife radiosurgery</span></li>
                        </ul>
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#3949AB] mb-2">Spine Surgeries</h5>
                        <p class="text-neutral-600 text-sm mb-3">Advanced procedures for spinal disorders and injuries.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Microdiscectomy</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Spinal fusion</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Artificial disc replacement</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-6 bg-[#3949AB] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Comprehensive Neurological Care</h5>
                      <p class="text-neutral-600 text-sm">Our neurology centers feature advanced neuroimaging, intraoperative MRI, and neuro-rehabilitation facilities. We provide personalized treatment plans with outcomes matching international standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-11" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#FB8C00] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-user-md text-[#FB8C00] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Cosmetic & Plastic Surgery</h3>
                    <p class="text-gray-300 mb-6">Enhance your appearance and confidence with our world-class cosmetic procedures.</p>
                    <div class="mb-2 text-sm text-gray-400">Popular procedures include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Rhinoplasty (nose jobs)</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Liposuction</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Breast augmentation/reduction</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Face lifts</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Tummy tucks</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Procedure Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#FB8C00] mb-2">Facial Procedures</h5>
                        <p class="text-neutral-600 text-sm mb-3">Enhance your facial features with natural-looking results.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Rhinoplasty (nose reshaping)</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Facelift & neck lift</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Eyelid surgery (blepharoplasty)</span></li>
                        </ul>
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#FB8C00] mb-2">Body Contouring</h5>
                        <p class="text-neutral-600 text-sm mb-3">Achieve your desired body shape with advanced techniques.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Liposuction & fat transfer</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Tummy tuck (abdominoplasty)</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Brazilian butt lift</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-6 bg-[#FB8C00] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Cosmetic Surgery?</h5>
                      <p class="text-neutral-600 text-sm">Our board-certified plastic surgeons use the latest techniques to deliver natural-looking results with minimal scarring. We offer comprehensive pre- and post-operative care to ensure optimal outcomes and patient satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-12" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#7CB342] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-baby text-[#7CB342] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Fertility Treatments</h3>
                    <p class="text-gray-300 mb-6">Comprehensive reproductive health services with high success rates and personalized care.</p>
                    <div class="mb-2 text-sm text-gray-400">Our fertility services include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>IVF (In-vitro fertilization)</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Egg freezing</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Surrogacy support</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Male infertility treatments</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#7CB342] mb-2">IVF & Assisted Reproduction</h5>
                        <p class="text-neutral-600 text-sm mb-3">Advanced fertility treatments with high success rates.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>In-vitro fertilization (IVF)</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>ICSI (Intracytoplasmic sperm injection)</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Egg and embryo freezing</span></li>
                        </ul>
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#7CB342] mb-2">Surrogacy & Donor Programs</h5>
                        <p class="text-neutral-600 text-sm mb-3">Comprehensive support for alternative family building.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Gestational surrogacy</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Egg and sperm donation</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Legal and logistical support</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-6 bg-[#7CB342] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Fertility Center?</h5>
                      <p class="text-neutral-600 text-sm">Our fertility specialists use cutting-edge technology and evidence-based protocols to maximize success rates. We provide compassionate, personalized care throughout your fertility journey, with transparent pricing and comprehensive support services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-13" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#43A047] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fa-solid fa-suitcase-medical text-[#43A047] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Gastroenterology</h3>
                    <p class="text-gray-300 mb-6">Comprehensive digestive health services with advanced diagnostic and treatment options.</p>
                    <div class="mb-2 text-sm text-gray-400">Our gastroenterology services include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Bariatric (weight loss) surgery</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Gallbladder removal</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Liver transplants</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Colonoscopy & endoscopy</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#43A047] mb-2">Bariatric Surgery</h5>
                        <p class="text-neutral-600 text-sm mb-3">Advanced weight loss procedures with comprehensive follow-up care.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Gastric bypass</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Sleeve gastrectomy</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Gastric banding</span></li>
                        </ul>
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#43A047] mb-2">Advanced Endoscopy</h5>
                        <p class="text-neutral-600 text-sm mb-3">Minimally invasive diagnostic and therapeutic procedures.</p>
                        <ul class="text-sm text-neutral-600 space-y-2">
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Colonoscopy</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>Upper GI endoscopy</span></li>
                          <li class="flex items-start space-x-2"><i class="fas fa-circle-dot text-[#FF5722] mt-1 text-xs"></i><span>ERCP (bile duct procedures)</span></li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-6 bg-[#43A047] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Comprehensive Digestive Care</h5>
                      <p class="text-neutral-600 text-sm">Our gastroenterology centers feature advanced diagnostic tools including capsule endoscopy, endoscopic ultrasound, and motility studies. We provide personalized treatment plans for conditions like IBS, Crohn's disease, ulcerative colitis, and liver disorders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-14" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#00ACC1] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-tooth text-[#00ACC1] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Dentistry</h3>
                    <p class="text-gray-300 mb-6">World-class dental care with advanced procedures at affordable prices.</p>
                    <div class="mb-2 text-sm text-gray-400">Our dental services include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Dental implants</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Full mouth rehabilitation</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Cosmetic dentistry</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Root canals & crowns</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#00ACC1] mb-2">Dental Implants</h5>
                        <p class="text-neutral-600 text-sm mb-3">Permanent solutions for missing teeth with natural-looking results.</p>
                        <!-- Content for dental implants can be added here -->
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#00ACC1] mb-2">Cosmetic Dentistry</h5>
                        <p class="text-neutral-600 text-sm mb-3">Enhance your smile with our aesthetic treatments.</p>
                        <!-- Content for cosmetic dentistry can be added here -->
                      </div>
                    </div>
                    <div class="mt-6 bg-[#00ACC1] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Dental Care?</h5>
                      <p class="text-neutral-600 text-sm">Our dental centers feature state-of-the-art equipment including digital X-rays, CAD/CAM technology, and laser dentistry. We provide pain-free treatments with international quality standards at a fraction of Western prices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-15" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#5C6BC0] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-eye text-[#5C6BC0] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Ophthalmology</h3>
                    <p class="text-gray-300 mb-6">Advanced eye care with cutting-edge vision correction and treatment options.</p>
                    <div class="mb-2 text-sm text-gray-400">Our ophthalmology services include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>LASIK surgery</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Cataract surgery</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Corneal transplants</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Retinal surgeries</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#5C6BC0] mb-2">Vision Correction</h5>
                        <p class="text-neutral-600 text-sm mb-3">Advanced procedures to correct refractive errors.</p>
                        <!-- Content for vision correction -->
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#5C6BC0] mb-2">Cataract Surgery</h5>
                        <p class="text-neutral-600 text-sm mb-3">Advanced lens replacement procedures.</p>
                        <!-- Content for cataract surgery -->
                      </div>
                    </div>
                    <div class="mt-6 bg-[#5C6BC0] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Eye Care?</h5>
                      <p class="text-neutral-600 text-sm">Our ophthalmology centers feature the latest diagnostic and surgical equipment, including optical coherence tomography (OCT) and femtosecond lasers. We provide personalized treatment plans with outcomes matching international standards at affordable costs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-16" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#F06292] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-allergies text-[#F06292] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Dermatology</h3>
                    <p class="text-gray-300 mb-6">Comprehensive skin care with advanced treatments for all dermatological conditions.</p>
                    <div class="mb-2 text-sm text-gray-400">Our dermatology services include:</div>
                    <ul class="space-y-3">
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Psoriasis treatment</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Acne scar revision</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Skin cancer surgery</span></li>
                      <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Anti-aging treatments</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#F06292] mb-2">Medical Dermatology</h5>
                        <p class="text-neutral-600 text-sm mb-3">Advanced treatments for skin conditions and diseases.</p>
                        <!-- Content for medical dermatology -->
                      </div>
                      <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                        <h5 class="font-bold text-[#F06292] mb-2">Cosmetic Dermatology</h5>
                        <p class="text-neutral-600 text-sm mb-3">Enhance your skin's appearance with our aesthetic treatments.</p>
                        <!-- Content for cosmetic dermatology -->
                      </div>
                    </div>
                    <div class="mt-6 bg-[#F06292] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Dermatology Care?</h5>
                      <p class="text-neutral-600 text-sm">Our dermatology centers feature the latest diagnostic tools and treatment modalities, including laser therapies, phototherapy, and advanced dermatopathology services. We offer personalized care for conditions like eczema, psoriasis, acne, and skin cancer, as well as cosmetic procedures for skin rejuvenation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-17" class="tab-pane hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#039BE5] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                      <i class="fas fa-lungs text-[#039BE5] text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Pulmonology</h3>
                    <p class="text-gray-300 mb-6">Advanced respiratory care for lung diseases and breathing disorders.</p>
                    <div class="mb-2 text-sm text-gray-400">Our pulmonology services include:</div>
                    <ul class="space-y-3">
                       <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Asthma & COPD management</span></li>
                       <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Lung cancer screening & treatment</span></li>
                       <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Sleep apnea diagnosis & therapy</span></li>
                       <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Bronchoscopy & interventional pulmonology</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                     <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                            <h5 class="font-bold text-[#039BE5] mb-2">Advanced Diagnostics</h5>
                            <p class="text-neutral-600 text-sm mb-3">Comprehensive lung function tests and imaging.</p>
                        </div>
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                            <h5 class="font-bold text-[#039BE5] mb-2">Interventional Pulmonology</h5>
                            <p class="text-neutral-600 text-sm mb-3">Minimally invasive procedures for lung conditions.</p>
                        </div>
                    </div>
                    <div class="mt-6 bg-[#039BE5] bg-opacity-5 p-4 rounded-lg">
                      <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Pulmonary Care?</h5>
                      <p class="text-neutral-600 text-sm">Our pulmonology centers feature advanced diagnostic equipment like PFT labs, bronchoscopy suites, and sleep labs. We provide comprehensive care for respiratory conditions including asthma, COPD, interstitial lung disease, and lung cancer, with a focus on personalized treatment and rehabilitation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-18-urology" class="tab-pane hidden"> <!-- Renamed ID -->
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/3">
                  <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                    <div class="bg-[#00897B] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                       <i class="fa-solid fa-toilet text-[#00897B] text-2xl"></i> <!-- Changed icon -->
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Urology</h3>
                    <p class="text-gray-300 mb-6">Comprehensive care for urinary tract and male reproductive system conditions.</p>
                    <div class="mb-2 text-sm text-gray-400">Our urology services include:</div>
                    <ul class="space-y-3">
                        <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Kidney stone treatment (lithotripsy, PCNL)</span></li>
                        <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Prostate cancer surgery (robotic)</span></li>
                        <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Erectile dysfunction & male infertility</span></li>
                        <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Urinary incontinence treatment</span></li>
                    </ul>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <div class="bg-neutral-50 p-6 rounded-xl h-full">
                    <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                     <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                            <h5 class="font-bold text-[#00897B] mb-2">Robotic Urology Surgery</h5>
                            <p class="text-neutral-600 text-sm mb-3">Minimally invasive procedures for prostate, kidney, and bladder cancers.</p>
                        </div>
                        <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                            <h5 class="font-bold text-[#00897B] mb-2">Endourology</h5>
                            <p class="text-neutral-600 text-sm mb-3">Advanced techniques for kidney stones and urinary tract obstructions.</p>
                        </div>
                    </div>
                    <div class="mt-6 bg-[#00897B] bg-opacity-5 p-4 rounded-lg">
                        <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Urology Care?</h5>
                        <p class="text-neutral-600 text-sm">Our urology centers are equipped with state-of-the-art technology, including da Vinci robotic systems, laser lithotripsy, and advanced urodynamics. We offer comprehensive care for a wide range of urological conditions, from kidney stones and prostate issues to urologic cancers and male infertility, ensuring patient comfort and optimal outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-19" class="tab-pane hidden">
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="md:w-1/3">
                        <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                            <div class="bg-[#D81B60] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                                <i class="fas fa-tint text-[#D81B60] text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">Endocrinology</h3>
                            <p class="text-gray-300 mb-6">Comprehensive care for hormonal and metabolic disorders with personalized treatment plans.</p>
                            <div class="mb-2 text-sm text-gray-400">Our endocrinology services include:</div>
                            <ul class="space-y-3">
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Diabetes management & education</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Thyroid disorders (hypo/hyperthyroidism, nodules)</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Obesity & metabolic syndrome</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Adrenal & pituitary gland disorders</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:w-2/3">
                        <div class="bg-neutral-50 p-6 rounded-xl h-full">
                            <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                                    <h5 class="font-bold text-[#D81B60] mb-2">Comprehensive Diabetes Care</h5>
                                    <p class="text-neutral-600 text-sm mb-3">Including insulin pump therapy and continuous glucose monitoring.</p>
                                </div>
                                <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                                    <h5 class="font-bold text-[#D81B60] mb-2">Thyroid Disorder Management</h5>
                                    <p class="text-neutral-600 text-sm mb-3">Ultrasound-guided biopsies and radioiodine therapy where indicated.</p>
                                </div>
                            </div>
                             <div class="mt-6 bg-[#D81B60] bg-opacity-5 p-4 rounded-lg">
                                <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Endocrinology Care?</h5>
                                <p class="text-neutral-600 text-sm">Our endocrinology departments offer comprehensive diagnostic services, including hormone assays and dynamic testing. We provide multidisciplinary care for diabetes, thyroid disorders, osteoporosis, and other hormonal imbalances, focusing on lifestyle modification, medical management, and patient education.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tab-20" class="tab-pane hidden">
                 <div class="flex flex-col md:flex-row gap-8">
                    <div class="md:w-1/3">
                        <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                             <div class="bg-[#8D6E63] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                                <i class="fas fa-joint text-[#8D6E63] text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">Rheumatology</h3>
                            <p class="text-gray-300 mb-6">Specialized care for arthritis, autoimmune diseases, and musculoskeletal conditions.</p>
                            <div class="mb-2 text-sm text-gray-400">Our rheumatology services include:</div>
                            <ul class="space-y-3">
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Rheumatoid arthritis & osteoarthritis</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Lupus & Sjogren's syndrome</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Gout & pseudogout</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Biologic therapies & infusion services</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:w-2/3">
                        <div class="bg-neutral-50 p-6 rounded-xl h-full">
                            <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Details</h4>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                                    <h5 class="font-bold text-[#8D6E63] mb-2">Advanced Biologic Therapies</h5>
                                    <p class="text-neutral-600 text-sm mb-3">Targeted treatments for inflammatory arthritis and autoimmune conditions.</p>
                                </div>
                                <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                                    <h5 class="font-bold text-[#8D6E63] mb-2">Musculoskeletal Ultrasound</h5>
                                    <p class="text-neutral-600 text-sm mb-3">For diagnosis and guided injections.</p>
                                </div>
                            </div>
                            <div class="mt-6 bg-[#8D6E63] bg-opacity-5 p-4 rounded-lg">
                                <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Rheumatology Care?</h5>
                                <p class="text-neutral-600 text-sm">Our rheumatology specialists provide expert diagnosis and management of a wide range of rheumatic diseases. We offer access to the latest biologic therapies, infusion services, and joint injection procedures, along with comprehensive patient education and support for managing chronic conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tab-21" class="tab-pane hidden">
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="md:w-1/3">
                        <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                            <div class="bg-[#673AB7] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                                <i class="fas fa-brain text-[#673AB7] text-2xl"></i> <!-- Re-using brain icon, can be changed -->
                            </div>
                            <h3 class="text-2xl font-bold mb-4">Mental Health & Psychiatry</h3>
                            <p class="text-gray-300 mb-6">Compassionate and comprehensive care for mental well-being and psychiatric disorders.</p>
                            <div class="mb-2 text-sm text-gray-400">Our mental health services include:</div>
                            <ul class="space-y-3">
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Depression & anxiety disorders</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Bipolar disorder & schizophrenia</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Addiction & substance abuse treatment</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Counseling & psychotherapy</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:w-2/3">
                         <div class="bg-neutral-50 p-6 rounded-xl h-full">
                            <h4 class="text-xl font-semibold mb-4 text-neutral-800">Treatment Approaches</h4>
                             <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                                    <h5 class="font-bold text-[#673AB7] mb-2">Individual & Group Therapy</h5>
                                    <p class="text-neutral-600 text-sm mb-3">Evidence-based psychotherapeutic interventions.</p>
                                </div>
                                <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                                    <h5 class="font-bold text-[#673AB7] mb-2">Pharmacotherapy</h5>
                                    <p class="text-neutral-600 text-sm mb-3">Medication management by experienced psychiatrists.</p>
                                </div>
                            </div>
                            <div class="mt-6 bg-[#673AB7] bg-opacity-5 p-4 rounded-lg">
                                <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Mental Health Services?</h5>
                                <p class="text-neutral-600 text-sm">We offer a holistic approach to mental health, combining psychiatric expertise with psychological counseling and support services. Our team is dedicated to providing confidential, culturally sensitive care to help patients achieve emotional balance and improve their quality of life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tab-22" class="tab-pane hidden">
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="md:w-1/3">
                         <div class="bg-neutral-900 text-white p-6 rounded-xl h-full">
                            <div class="bg-[#009688] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                                <i class="fas fa-exchange-alt text-[#009688] text-2xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">Organ Transplants</h3>
                            <p class="text-gray-300 mb-6">Life-saving transplant surgeries with comprehensive pre- and post-transplant care.</p>
                            <div class="mb-2 text-sm text-gray-400">Our transplant services include:</div>
                            <ul class="space-y-3">
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Kidney transplant (living & deceased donor)</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Liver transplant (living & deceased donor)</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Heart transplant</span></li>
                                <li class="flex items-center space-x-2"><i class="fas fa-check-circle text-[#26A69A]"></i><span>Bone marrow transplant</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:w-2/3">
                        <div class="bg-neutral-50 p-6 rounded-xl h-full">
                            <h4 class="text-xl font-semibold mb-4 text-neutral-800">Program Highlights</h4>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                                    <h5 class="font-bold text-[#009688] mb-2">Experienced Transplant Teams</h5>
                                    <p class="text-neutral-600 text-sm mb-3">Multidisciplinary teams with high success rates.</p>
                                </div>
                                <div class="bg-white p-5 rounded-lg shadow-sm border border-neutral-100">
                                    <h5 class="font-bold text-[#009688] mb-2">State-of-the-Art Facilities</h5>
                                    <p class="text-neutral-600 text-sm mb-3">Dedicated transplant ICUs and operating theaters.</p>
                                </div>
                            </div>
                             <div class="mt-6 bg-[#009688] bg-opacity-5 p-4 rounded-lg">
                                <h5 class="font-semibold text-neutral-800 mb-2">Why Choose Our Transplant Programs?</h5>
                                <p class="text-neutral-600 text-sm">Our partner hospitals have internationally recognized transplant programs with excellent outcomes. We provide comprehensive support throughout the transplant journey, including evaluation, surgery, and long-term follow-up care, adhering to strict ethical and quality standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-16">
          <h3 class="font-bold text-2xl mb-6 text-neutral-800">Ready to Explore Your Treatment Options?</h3>
          <a href="#contact" class="inline-block px-8 py-4 bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-lg font-semibold transition-colors duration-300 shadow-lg animate__animated animate__pulse animate__infinite animate__slower">
            Get a Free Medical Assessment
          </a>
          <p class="mt-4 text-neutral-600">Our specialists will review your case and provide personalized recommendations</p>
        </div>
      </div>
    </section>
  `,
  mounted() {
    const tabs = this.$el.querySelectorAll('.specialty-tab');
    const tabPanes = this.$el.querySelectorAll('.tab-pane');

    function setActiveTab(tab) {
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-[#1E88E5]', 'text-white');
      });
      tab.classList.add('active', 'bg-[#1E88E5]', 'text-white');

      tabPanes.forEach(pane => pane.classList.add('hidden'));
      
      const targetId = tab.getAttribute('data-target');
      const activePane = this.$el.querySelector('#' + targetId);
      if (activePane) {
        activePane.classList.remove('hidden');
        activePane.classList.add('animate__animated', 'animate__fadeIn');
      }

      if (window.innerWidth < 768) {
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        setActiveTab.call(this, tab); // Use .call to set 'this' context for querySelector
      });
    });

    const initialActiveTab = this.$el.querySelector('.specialty-tab.active');
    if (initialActiveTab) {
      setActiveTab.call(this, initialActiveTab);
    }
  }
};
