<template>
  <div class="home-2">
    <!-- Header Component -->
    <Header />

    <!-- Hero Banner Section -->
    <section class="banner-main pb-0">
      <div class="banner-content">
        <div class="slider banner-slider">
          <div class="h2-slider-list">
            <div class="main-slide-image" style="background-image: url(/images/banner/slider-1.jpg)"></div>
            <div class="container">
              <div class="slide-contain">
                <h4 class="cl-white mb-0">Welcome To</h4>
                <ClientOnly>
                  <h1 class="cl-white mt-2 wow fadeInDown">Maruti Ayurveda Panchakarma Hospital & Research Center</h1>
                  <template #fallback>
                    <h1 class="cl-white mt-2">Maruti Ayurveda Panchakarma Hospital & Research Center</h1>
                  </template>
                </ClientOnly>
                <h3 class="cl-lblue mt-2 mb-3">मारुती आयुर्वेद पंचकर्म हॉस्पिटल एण्ड रिसर्च सेन्टर</h3>
                <p class="cl-white">Traditional Ayurvedic healing with modern facilities. Expert care for Panchakarma, Infertility treatment, and comprehensive health solutions.</p>
                <div class="slide-btn mt-4">
                  <NuxtLink to="/services" class="btn me-3">Our Services</NuxtLink>
                  <NuxtLink to="/contact" class="btn btn-outline-white">Contact Us</NuxtLink>
                </div>
              </div>
            </div>
            <div class="overlay-banner"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hospital Info Cards -->
    <section class="hospital-info-cards py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="info-card bg-white p-4 rounded-3 bx-shadow h-100 text-center">
              <div class="info-icon mb-3">
                <i class="fas fa-phone-alt cl-green fs-1"></i>
              </div>
              <h4 class="cl-green mb-2">Emergency Contact</h4>
              <p class="mb-2">24/7 Emergency Care Available</p>
              <div class="contact-numbers">
                <p class="mb-1"><a href="tel:9875072965" class="cl-green fw-bold">9875072965</a></p>
                <p class="mb-0"><a href="tel:9667926217" class="cl-green fw-bold">9667926217</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="info-card bg-white p-4 rounded-3 bx-shadow h-100 text-center">
              <div class="info-icon mb-3">
                <i class="fas fa-map-marker-alt cl-green fs-1"></i>
              </div>
              <h4 class="cl-green mb-2">Location</h4>
              <p class="mb-0">
                Opp. Goyal Eye Hospital,<br>
                Udai Mode, Gagnapur City<br>
                (Raj.)-322201
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mb-4">
            <div class="info-card bg-white p-4 rounded-3 bx-shadow h-100 text-center">
              <div class="info-icon mb-3">
                <i class="fas fa-clock cl-green fs-1"></i>
              </div>
              <h4 class="cl-green mb-2">Working Hours</h4>
              <p class="mb-1"><strong>Mon - Sat:</strong> 9:00 AM - 6:00 PM</p>
              <p class="mb-0"><strong>Sunday:</strong> 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Hospital Section -->
    <section class="aboutus py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 pe-lg-5">
            <div class="about-img-gallery">
              <div class="row">
                <div class="col-6 mb-3">
                  <img src="/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.05.jpeg" alt="Hospital Facility" class="img-fluid rounded bx-shadow" />
                </div>
                <div class="col-6 mb-3">
                  <img src="/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.07.jpeg" alt="Treatment Room" class="img-fluid rounded bx-shadow" />
                </div>
                <div class="col-12">
                  <img src="/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.09.jpeg" alt="Panchakarma Room" class="img-fluid rounded bx-shadow" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="sc-title-one mb-3">
              <h4 class="cl-green">About Maruti Ayurveda</h4>
              <h2 class="mb-3">Leading Ayurvedic Healthcare with Traditional Wisdom</h2>
              <h5>Combining ancient Ayurvedic knowledge with modern healthcare facilities for holistic healing.</h5>
            </div>
            <div class="about-detail">
              <p>
                Maruti Ayurveda Panchakarma Hospital & Research Center is dedicated to providing authentic Ayurvedic treatments 
                using traditional methods. Our expert doctors specialize in Panchakarma therapies, infertility treatments, 
                and comprehensive health solutions.
              </p>
              <ul class="d-flex flex-wrap">
                <li class="w-50"><i class="fas fa-check-circle cl-green"></i> BAMS Qualified Doctors</li>
                <li class="w-50"><i class="fas fa-check-circle cl-green"></i> Panchakarma Specialists</li>
                <li class="w-50"><i class="fas fa-check-circle cl-green"></i> Infertility Treatment</li>
                <li class="w-50"><i class="fas fa-check-circle cl-green"></i> Modern Facilities</li>
                <li class="w-50 border-lg-0"><i class="fas fa-check-circle cl-green"></i> 24/7 Emergency Care</li>
                <li class="w-50 border-lg-0"><i class="fas fa-check-circle cl-green"></i> Ambulance Service</li>
              </ul>
              <div class="about-actions mt-4">
                <NuxtLink to="/doctors" class="btn btn-primary me-3">Meet Our Doctors</NuxtLink>
                <NuxtLink to="/gallery" class="btn btn-outline-primary">View Gallery</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Services Section -->
    <section class="featured-services py-5 bg-light">
      <div class="container">
        <div class="sc-title-two text-center mb-5">
          <h4 class="cl-green">Our Specializations</h4>
          <h2>Expert Ayurvedic Treatments & Therapies</h2>
          <p class="cl-grey">Comprehensive traditional healthcare services for holistic healing and wellness</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <NuxtLink to="/services" class="text-decoration-none">
              <div class="service-card bg-white p-4 rounded-3 bx-shadow h-100 text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-spa cl-green fs-1"></i>
                </div>
                <h4 class="cl-green mb-3">Panchakarma Therapy</h4>
                <p class="cl-grey">Complete detoxification and rejuvenation through traditional five-fold therapy including Vaman, Virechana, Basti, Nasya, and Shirodhara.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <NuxtLink to="/services" class="text-decoration-none">
              <div class="service-card bg-white p-4 rounded-3 bx-shadow h-100 text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-baby cl-green fs-1"></i>
                </div>
                <h4 class="cl-green mb-3">Infertility Treatment</h4>
                <p class="cl-grey">Specialized care for primary and secondary infertility, PCOD, and reproductive health using natural Ayurvedic methods and therapies.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <NuxtLink to="/services" class="text-decoration-none">
              <div class="service-card bg-white p-4 rounded-3 bx-shadow h-100 text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-bone cl-green fs-1"></i>
                </div>
                <h4 class="cl-green mb-3">Orthocare</h4>
                <p class="cl-grey">Natural treatment for joint pain, cervical pain, low back pain, arthritis, and other musculoskeletal disorders.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <NuxtLink to="/services" class="text-decoration-none">
              <div class="service-card bg-white p-4 rounded-3 bx-shadow h-100 text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-stomach cl-green fs-1"></i>
                </div>
                <h4 class="cl-green mb-3">Gastrocare</h4>
                <p class="cl-grey">Comprehensive digestive health solutions for acidity, constipation, IBS, liver disorders, and other gastrointestinal issues.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <NuxtLink to="/services" class="text-decoration-none">
              <div class="service-card bg-white p-4 rounded-3 bx-shadow h-100 text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-stethoscope cl-green fs-1"></i>
                </div>
                <h4 class="cl-green mb-3">Anorectal Care</h4>
                <p class="cl-grey">Effective treatment for piles, fissures, fistula, and other anorectal disorders using gentle Ayurvedic approaches.</p>
              </div>
            </NuxtLink>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <NuxtLink to="/services" class="text-decoration-none">
              <div class="service-card bg-white p-4 rounded-3 bx-shadow h-100 text-center">
                <div class="service-icon mb-3">
                  <i class="fas fa-magic cl-green fs-1"></i>
                </div>
                <h4 class="cl-green mb-3">Special Treatments</h4>
                <p class="cl-grey">Unique therapies including Marma therapy, Neuro therapy, skin care, hair fall treatment, and navel seating.</p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="text-center mt-4">
          <NuxtLink to="/services" class="btn btn-primary btn-lg">View All Services</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Our Doctors Section -->
    <section class="our-doctors py-5">
      <div class="container">
        <div class="sc-title-two text-center mb-5">
          <h4 class="cl-green">Meet Our Team</h4>
          <h2>Expert Ayurvedic Doctors</h2>
          <p class="cl-grey">Our experienced team of qualified BAMS doctors specializing in traditional Ayurvedic treatments</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="doctor-preview bg-white rounded-3 bx-shadow overflow-hidden">
              <img src="/images/team/medical-hero-fighting-the-coronavirus-2021-05-04-07-27-34-utc.jpg" alt="Dr. Giriraj Prasad Sharma" class="img-fluid w-100" style="height: 250px; object-fit: cover;">
              <div class="doctor-info p-4 text-center">
                <h4 class="cl-green mb-1">DR. GIRIRAJ PRASAD SHARMA</h4>
                <p class="cl-grey mb-2">B.A.M.S. PG.</p>
                <p class="mb-3">Senior Panchakarma and Infertility Specialist</p>
                <NuxtLink to="/doctors" class="btn btn-outline-primary btn-sm">View Profile</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="doctor-preview bg-white rounded-3 bx-shadow overflow-hidden">
              <img src="/images/team/medical-experts-2021-05-02-19-42-45-utc.jpg" alt="Dr. Ramesh Chand Jaiminy" class="img-fluid w-100" style="height: 250px; object-fit: cover;">
              <div class="doctor-info p-4 text-center">
                <h4 class="cl-green mb-1">DR. RAMESH CHAND JAIMINY</h4>
                <p class="cl-grey mb-2">B.A.M.S</p>
                <p class="mb-3">Senior Panchakarma and Infertility Specialist</p>
                <NuxtLink to="/doctors" class="btn btn-outline-primary btn-sm">View Profile</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mb-4">
            <div class="doctor-preview bg-white rounded-3 bx-shadow overflow-hidden">
              <img src="/images/team/rm7rZYdl3rY.jpg" alt="Dr. Veer Singh Meena" class="img-fluid w-100" style="height: 250px; object-fit: cover;">
              <div class="doctor-info p-4 text-center">
                <h4 class="cl-green mb-1">DR. VEER SINGH MEENA</h4>
                <p class="cl-grey mb-2">B.A.M.S</p>
                <p class="mb-3">Ayurvedic Physician (Reg. No: 30354)</p>
                <NuxtLink to="/doctors" class="btn btn-outline-primary btn-sm">View Profile</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <NuxtLink to="/doctors" class="btn btn-primary btn-lg">Meet All Doctors</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Facilities Section -->
    <section class="facilities py-5 bg-green">
      <div class="container">
        <div class="sc-title-two sc-title-two-white text-center mb-5">
          <h4 class="cl-white">Our Facilities</h4>
          <h2 class="cl-white">Modern Infrastructure with Traditional Care</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="facility-item text-center text-white">
              <div class="facility-icon mb-3">
                <i class="fas fa-spa text-white fs-1"></i>
              </div>
              <h5 class="text-white">Fully Equipped Panchakarma Room</h5>
              <p class="text-white mb-0">State-of-the-art treatment rooms for authentic Panchakarma therapies</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="facility-item text-center text-white">
              <div class="facility-icon mb-3">
                <i class="fas fa-bed text-white fs-1"></i>
              </div>
              <h5 class="text-white">Patient Admission Facility</h5>
              <p class="text-white mb-0">Comfortable beds and accommodation for extended treatment programs</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="facility-item text-center text-white">
              <div class="facility-icon mb-3">
                <i class="fas fa-ambulance text-white fs-1"></i>
              </div>
              <h5 class="text-white">24/7 Ambulance Service</h5>
              <p class="text-white mb-0">Emergency medical transportation available round the clock</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="facility-item text-center text-white">
              <div class="facility-icon mb-3">
                <i class="fas fa-clipboard-list text-white fs-1"></i>
              </div>
              <h5 class="text-white">TPA Desk</h5>
              <p class="text-white mb-0">Insurance claim processing and third-party administrator services</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 class="mb-2">Ready to Start Your Healing Journey?</h3>
            <p class="mb-0 cl-grey">Book a consultation with our expert Ayurvedic doctors today and experience traditional healing</p>
          </div>
          <div class="col-lg-4 text-lg-end text-center mt-3 mt-lg-0">
            <NuxtLink to="/contact" class="btn btn-primary btn-lg me-3">Book Appointment</NuxtLink>
            <a href="tel:9875072965" class="btn btn-outline-primary btn-lg">Call Now</a>
          </div>
        </div>
      </div>
    </section>


    <!-- Back to top -->
    <div id="back-to-top">
      <a href="#"></a>
    </div>
  </div>
</template>

<script setup>
// SEO Meta tags for homepage
useHead({
  title: 'Maruti Ayurveda Panchakarma Hospital & Research Center - Leading Ayurvedic Hospital in Gagnapur',
  meta: [
    { 
      name: 'description', 
      content: 'Expert Ayurvedic treatment at Maruti Ayurveda Panchakarma Hospital in Gagnapur. Specializing in Panchakarma therapy, infertility treatment, orthocare, gastrocare, and traditional healing with qualified BAMS doctors.' 
    },
    { 
      name: 'keywords', 
      content: 'ayurveda hospital gagnapur, panchakarma therapy, infertility treatment ayurveda, BAMS doctors, ayurvedic treatment rajasthan, natural healing, traditional medicine, orthocare, gastrocare, anorectal care' 
    },
    { property: 'og:title', content: 'Maruti Ayurveda Panchakarma Hospital & Research Center - Leading Ayurvedic Hospital' },
    { property: 'og:description', content: 'Expert Ayurvedic treatment with Panchakarma therapy, infertility care, and traditional healing in Gagnapur, Rajasthan.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://marutiayurveda.in/' },
    { name: 'twitter:title', content: 'Maruti Ayurveda Panchakarma Hospital - Expert Ayurvedic Care' },
    { name: 'twitter:description', content: 'Leading Ayurvedic hospital offering Panchakarma therapy, infertility treatment, and comprehensive natural healing solutions.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Hospital',
        '@id': 'https://marutiayurveda.in/',
        name: 'Maruti Ayurveda Panchakarma Hospital & Research Center',
        alternateName: 'मारुती आयुर्वेद पंचकर्म हॉस्पिटल एण्ड रिसर्च सेन्टर',
        description: 'Leading Ayurvedic hospital specializing in Panchakarma therapy, infertility treatment, and traditional healing',
        url: 'https://marutiayurveda.in/',
        telephone: '+919875072965',
        email: 'info@marutiayurveda.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Opp. Goyal Eye Hospital, Udai Mode',
          addressLocality: 'Gagnapur',
          addressRegion: 'Rajasthan',
          postalCode: '322201',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '26.8464',
          longitude: '75.8068'
        },
        openingHours: 'Mo-Sa 09:00-18:00, Su 10:00-14:00',
        medicalSpecialty: [
          'Panchakarma Therapy',
          'Ayurvedic Medicine',
          'Infertility Treatment',
          'Traditional Medicine',
          'Natural Healing'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Medical Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Panchakarma Therapy'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Infertility Treatment'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Orthocare Treatment'
              }
            }
          ]
        },
        image: 'https://marutiayurveda.in/images/logo.png',
        logo: 'https://marutiayurveda.in/images/logo.png'
      })
    }
  ]
})
</script>

<style scoped>
/* Component-specific styles if needed */
</style>