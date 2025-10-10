<script setup>
// SEO Meta tags for contact page
useHead({
  title: 'Contact Us - Maruti Ayurveda Panchakarma Hospital | Address, Phone & Location in Gagnapur',
  meta: [
    { 
      name: 'description', 
      content: 'Contact Maruti Ayurveda Panchakarma Hospital in Gagnapur, Rajasthan. Call 9875072965 or 9667926217 for appointments. Located opposite Goyal Eye Hospital, Udai Mode. 24/7 emergency care available.' 
    },
    { 
      name: 'keywords', 
      content: 'contact maruti ayurveda, ayurvedic hospital gagnapur contact, phone number 9875072965, panchakarma hospital address, ayurveda doctor contact, emergency care gagnapur, udai mode hospital' 
    },
    { property: 'og:title', content: 'Contact Maruti Ayurveda Panchakarma Hospital | Gagnapur, Rajasthan' },
    { property: 'og:description', content: 'Contact us for expert Ayurvedic treatment. Located in Gagnapur, Rajasthan. Call 9875072965 for appointments and emergency care.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://its-ash.github.io/maruti-ayurveda/contact' },
    { name: 'twitter:title', content: 'Contact Maruti Ayurveda Panchakarma Hospital' },
    { name: 'twitter:description', content: 'Expert Ayurvedic care in Gagnapur, Rajasthan. Call 9875072965 for appointments.' },
    { name: 'geo.region', content: 'IN-RJ' },
    { name: 'geo.placename', content: 'Gagnapur' },
    { name: 'geo.position', content: '26.8464;75.8068' },
    { name: 'ICBM', content: '26.8464, 75.8068' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Hospital',
        '@id': 'https://its-ash.github.io/maruti-ayurveda/contact',
        name: 'Maruti Ayurveda Panchakarma Hospital & Research Center',
        alternateName: 'मारुती आयुर्वेद पंचकर्म हॉस्पिटल एण्ड रिसर्च सेन्टर',
        description: 'Leading Ayurvedic hospital providing Panchakarma therapy, infertility treatment, and traditional healing in Gagnapur, Rajasthan',
        url: 'https://its-ash.github.io/maruti-ayurveda/',
        telephone: ['+919875072965', '+919667926217'],
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
        openingHours: [
          'Mo-Sa 09:00-18:00',
          'Su 10:00-14:00'
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+919875072965',
            contactType: 'customer service',
            availableLanguage: ['Hindi', 'English'],
            areaServed: 'IN'
          },
          {
            '@type': 'ContactPoint',
            telephone: '+919667926217',
            contactType: 'emergency',
            availableLanguage: ['Hindi', 'English'],
            areaServed: 'IN'
          }
        ],
        hasMap: 'https://maps.google.com/?q=26.8464,75.8068',
        medicalSpecialty: [
          'Panchakarma Therapy',
          'Ayurvedic Medicine',
          'Infertility Treatment',
          'Traditional Medicine'
        ],
        priceRange: '$$',
        currenciesAccepted: 'INR',
        paymentAccepted: ['Cash', 'Credit Card', 'Insurance'],
        image: 'https://its-ash.github.io/maruti-ayurveda/images/logo.png',
        logo: 'https://its-ash.github.io/maruti-ayurveda/images/logo.png'
      })
    }
  ]
})
</script>

<template>
  <div class="home-2">
    <!-- Header -->
    <Header />

    <!-- Page Title -->
    <section class="page-title bg-map bgc-dblue mt-5">
      <div class="container mt-5">
        <div class="row mt-5">
          <div class="col-lg-12 mt-5">
            <div class="page-title-wrap text-center">
              <h1 class="cl-white">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><NuxtLink to="/" class="cl-white">Home</NuxtLink></li>
                  <li class="breadcrumb-item active cl-lblue" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hospital Information Section -->
    <section class="hospital-info py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center mb-5">
            <div class="hospital-header">
              <div class="hospital-logo mb-4">
                <img src="/images/logo.png" alt="MAPHRC Logo" class="img-fluid" style="max-height: 120px;">
              </div>
              <h2 class="hospital-name cl-green mb-2">Maruti Ayurveda Panchakarma Hospital & Research Center</h2>
              <h3 class="hospital-name-hindi text-warning mb-4">मारुती आयुर्वेद पंचकर्म हॉस्पिटल एण्ड रिसर्च सेन्टर</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form Section -->
    <section class="contact-main py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <!-- Contact Information -->
          <div class="col-lg-8 mb-5">
            <div class="contact-info">
              <h3 class="cl-green mb-4 text-center">Get In Touch</h3>
              
              <!-- Contact Details -->
              <div class="contact-item mb-4 p-4 bg-white rounded-3 bx-shadow">
                <div class="contact-icon-wrapper d-flex align-items-center">
                  <div class="contact-icon me-3">
                    <i class="fas fa-phone-alt cl-green fs-2"></i>
                  </div>
                  <div class="contact-details">
                    <h5 class="mb-2">Phone Numbers</h5>
                    <p class="mb-1"><strong>Mobile:</strong> <a href="tel:9875072965" class="cl-green">9875072965</a></p>
                    <p class="mb-0"><strong>Mobile:</strong> <a href="tel:9667926217" class="cl-green">9667926217</a></p>
                  </div>
                </div>
              </div>

              <!-- Address -->
              <div class="contact-item mb-4 p-4 bg-white rounded-3 bx-shadow">
                <div class="contact-icon-wrapper d-flex align-items-center">
                  <div class="contact-icon me-3">
                    <i class="fas fa-map-marker-alt cl-green fs-2"></i>
                  </div>
                  <div class="contact-details">
                    <h5 class="mb-2">Address</h5>
                    <p class="mb-0">
                      Opp. Goyal Eye Hospital, Udai Mode,<br>
                      Gagnapur City (Raj.)-322201
                    </p>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="contact-item mb-4 p-4 bg-white rounded-3 bx-shadow">
                <div class="contact-icon-wrapper d-flex align-items-center">
                  <div class="contact-icon me-3">
                    <i class="fas fa-envelope cl-green fs-2"></i>
                  </div>
                  <div class="contact-details">
                    <h5 class="mb-2">Email</h5>
                    <p class="mb-0"><a href="mailto:info@marutiayurveda.com" class="cl-green">info@marutiayurveda.com</a></p>
                  </div>
                </div>
              </div>

              <!-- Working Hours -->
              <div class="contact-item mb-4 p-4 bg-white rounded-3 bx-shadow">
                <div class="contact-icon-wrapper d-flex align-items-center">
                  <div class="contact-icon me-3">
                    <i class="fas fa-clock cl-green fs-2"></i>
                  </div>
                  <div class="contact-details">
                    <h5 class="mb-2">Working Hours</h5>
                    <p class="mb-1"><strong>Monday - Saturday:</strong> 9:00 AM - 6:00 PM</p>
                    <p class="mb-0"><strong>Sunday:</strong> 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <!-- Emergency -->
              <div class="contact-item mb-4 p-4 bg-danger rounded-3 text-white">
                <div class="contact-icon-wrapper d-flex align-items-center">
                  <div class="contact-icon me-3">
                    <i class="fas fa-ambulance text-white fs-2"></i>
                  </div>
                  <div class="contact-details">
                    <h5 class="mb-2 text-white">Emergency Service</h5>
                    <p class="mb-0 text-white">24/7 Emergency Care Available</p>
                    <p class="mb-0"><strong>Emergency:</strong> <a href="tel:9875072965" class="text-white">9875072965</a></p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-lg-12">
            <div class="map-container" style="height: 400px; background: #f8f9fa;">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.123456789!2d77.123456!3d26.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGagnapur%20City%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions Section -->
    <section class="quick-actions py-5 bg-green">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h3 class="cl-white mb-4">Contact Information</h3>
            <div class="action-buttons">
              <a href="tel:9875072965" class="btn btn-white btn-lg me-3 mb-3">
                <i class="fas fa-phone me-2"></i>Call: 9875072965
              </a>
              <a href="tel:9667926217" class="btn btn-white btn-lg me-3 mb-3">
                <i class="fas fa-phone me-2"></i>Call: 9667926217
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />

    <!-- Search form popup -->
    <form action="#" class="ct-searchForm">
      <div class="inner">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-8">
              <div class="form-group">
                <input id="cf-search-form" type="text" placeholder="Search ..." required class="form-control" />
                <button type="submit" class="ct-search-btn"><i class="fa fa-search"></i></button>
              </div>
              <div class="form-group">
                <a href="#" class="ct-searchForm-close">
                  <i class="fas fa-times"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <!-- Back to top -->
    <div id="back-to-top">
      <a href="#"></a>
    </div>
  </div>
</template>


<style scoped>
.hospital-name {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
}

.hospital-name-hindi {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: 'Arial Unicode MS', sans-serif;
}

.contact-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.contact-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 181, 58, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
}

.page-title {
  padding: 100px 0 50px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.page-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 123, 191, 0.8);
}

.page-title-wrap {
  position: relative;
  z-index: 2;
}

.breadcrumb {
  background: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  color: #fff;
}

.bx-shadow {
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
}

.cl-green {
  color: #1eb53a;
}

.cl-white {
  color: #fff;
}

.cl-lblue {
  color: #7fc9f4;
}

.bgc-dblue {
  background-color: #007bbf;
}

.bg-green {
  background-color: #1eb53a;
}

.btn-white {
  background-color: white;
  color: #1eb53a;
  border: 2px solid white;
}

.btn-white:hover {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.action-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.map-container iframe {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .hospital-name {
    font-size: 1.8rem;
  }
  
  .hospital-name-hindi {
    font-size: 1.4rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .action-buttons .btn {
    width: 250px;
    margin: 0.5rem 0;
  }
}
</style>