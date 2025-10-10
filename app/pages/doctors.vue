<script setup>
// SEO Meta tags for doctors page
useHead({
  title: 'Expert Ayurvedic Doctors - BAMS Qualified Physicians | Maruti Ayurveda Hospital',
  meta: [
    { 
      name: 'description', 
      content: 'Meet our expert team of BAMS qualified Ayurvedic doctors at Maruti Ayurveda Hospital. Dr. Giriraj Prasad Sharma, Dr. Ramesh Chand Jaiminy, and Dr. Veer Singh Meena specialize in Panchakarma and infertility treatment.' 
    },
    { 
      name: 'keywords', 
      content: 'BAMS doctors gagnapur, ayurvedic doctors rajasthan, panchakarma specialists, infertility doctors ayurveda, Dr Giriraj Prasad Sharma, Dr Ramesh Chand Jaiminy, Dr Veer Singh Meena, ayurvedic physicians' 
    },
    { property: 'og:title', content: 'Expert Ayurvedic Doctors - BAMS Qualified Physicians | Maruti Ayurveda' },
    { property: 'og:description', content: 'Meet our qualified BAMS doctors specializing in Panchakarma therapy and infertility treatment at Maruti Ayurveda Hospital, Gagnapur.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://its-ash.github.io/maruti-ayurveda/doctors' },
    { name: 'twitter:title', content: 'Expert Ayurvedic Doctors - BAMS Qualified Physicians' },
    { name: 'twitter:description', content: 'Qualified BAMS doctors specializing in Panchakarma therapy and traditional Ayurvedic treatments.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://its-ash.github.io/maruti-ayurveda/doctors#dr-giriraj',
          name: 'Dr. Giriraj Prasad Sharma',
          jobTitle: 'Senior Panchakarma and Infertility Specialist',
          worksFor: {
            '@type': 'Hospital',
            name: 'Maruti Ayurveda Panchakarma Hospital & Research Center'
          },
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            educationalLevel: 'Post Graduate',
            name: 'B.A.M.S. PG.'
          },
          knowsAbout: [
            'Panchakarma Therapy',
            'Infertility Treatment',
            'Ayurvedic Medicine'
          ],
          image: 'https://its-ash.github.io/maruti-ayurveda/images/team/medical-hero-fighting-the-coronavirus-2021-05-04-07-27-34-utc.jpg'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://its-ash.github.io/maruti-ayurveda/doctors#dr-ramesh',
          name: 'Dr. Ramesh Chand Jaiminy',
          jobTitle: 'Senior Panchakarma and Infertility Specialist',
          worksFor: {
            '@type': 'Hospital',
            name: 'Maruti Ayurveda Panchakarma Hospital & Research Center'
          },
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            name: 'B.A.M.S'
          },
          knowsAbout: [
            'Panchakarma Therapy',
            'Infertility Treatment',
            'Ayurvedic Medicine'
          ],
          image: 'https://its-ash.github.io/maruti-ayurveda/images/team/medical-experts-2021-05-02-19-42-45-utc.jpg'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://its-ash.github.io/maruti-ayurveda/doctors#dr-veer',
          name: 'Dr. Veer Singh Meena',
          jobTitle: 'Ayurvedic Physician',
          worksFor: {
            '@type': 'Hospital',
            name: 'Maruti Ayurveda Panchakarma Hospital & Research Center'
          },
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            name: 'B.A.M.S'
          },
          identifier: 'Reg. No: 30354',
          knowsAbout: [
            'Ayurvedic Medicine',
            'Traditional Healing',
            'Natural Therapy'
          ],
          image: 'https://its-ash.github.io/maruti-ayurveda/images/team/rm7rZYdl3rY.jpg'
        }
      ])
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
              <h1 class="cl-white">Our Doctors</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><NuxtLink to="/" class="cl-white">Home</NuxtLink></li>
                  <li class="breadcrumb-item active cl-lblue" aria-current="page">Doctors</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Doctors Section -->
    <section class="doctors-main py-5">
      <div class="container">
        <div class="sc-title-two text-center mb-5">
          <h4 class="cl-green">Meet Our Team</h4>
          <h2>Expert Ayurvedic Doctors</h2>
          <p class="cl-grey">Our experienced team of qualified Ayurvedic doctors is dedicated to providing you with the best traditional healthcare</p>
        </div>

        <!-- Doctors Grid -->
        <div class="row g-4">
          <!-- Doctor 1 -->
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="doctor-card bg-white bx-shadow rounded-3 overflow-hidden h-100">
              <div class="doctor-image">
                <img 
                  src="/images/team/medical-hero-fighting-the-coronavirus-2021-05-04-07-27-34-utc.jpg" 
                  alt="Dr. Giriraj Prasad Sharma"
                  class="img-fluid w-100"
                  style="height: 300px; object-fit: cover;"
                />
                <div class="doctor-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
                  <div class="social-links p-3">
                    <a href="#" class="social-link me-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link me-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <div class="doctor-info p-4">
                <h4 class="doctor-name mb-2">DR. GIRIRAJ PRASAD SHARMA</h4>
                <p class="doctor-qualification cl-green mb-2 fw-bold">B.A.M.S. PG.</p>
                <p class="doctor-specialty cl-grey mb-3">Senior Panchakarma and Infertility Specialist</p>
                <div class="doctor-details">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-graduation-cap cl-green me-2"></i> Bachelor of Ayurvedic Medicine & Surgery (Post Graduate)</li>
                    <li class="mb-2"><i class="fas fa-user-md cl-green me-2"></i> Senior Specialist in Panchakarma</li>
                    <li class="mb-2"><i class="fas fa-heart cl-green me-2"></i> Infertility Treatment Expert</li>
                  </ul>
                </div>
        
              </div>
            </div>
          </div>

          <!-- Doctor 2 -->
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="doctor-card bg-white bx-shadow rounded-3 overflow-hidden h-100">
              <div class="doctor-image">
                <img 
                  src="/images/team/medical-experts-2021-05-02-19-42-45-utc.jpg" 
                  alt="Dr. Ramesh Chand Jaiminy"
                  class="img-fluid w-100"
                  style="height: 300px; object-fit: cover;"
                />
                <div class="doctor-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
                  <div class="social-links p-3">
                    <a href="#" class="social-link me-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link me-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <div class="doctor-info p-4">
                <h4 class="doctor-name mb-2">DR. RAMESH CHAND JAIMINY</h4>
                <p class="doctor-qualification cl-green mb-2 fw-bold">B.A.M.S</p>
                <p class="doctor-specialty cl-grey mb-3">Senior Panchakarma and Infertility Specialist</p>
                <div class="doctor-details">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-graduation-cap cl-green me-2"></i> Bachelor of Ayurvedic Medicine & Surgery</li>
                    <li class="mb-2"><i class="fas fa-user-md cl-green me-2"></i> Senior Specialist in Panchakarma</li>
                    <li class="mb-2"><i class="fas fa-heart cl-green me-2"></i> Infertility Treatment Expert</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Doctor 3 -->
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="doctor-card bg-white bx-shadow rounded-3 overflow-hidden h-100">
              <div class="doctor-image">
                <img 
                  src="/images/team/rm7rZYdl3rY.jpg" 
                  alt="Dr. Veer Singh Meena"
                  class="img-fluid w-100"
                  style="height: 300px; object-fit: cover;"
                />
                <div class="doctor-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
                  <div class="social-links p-3">
                    <a href="#" class="social-link me-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link me-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <div class="doctor-info p-4">
                <h4 class="doctor-name mb-2">DR. VEER SINGH MEENA</h4>
                <p class="doctor-qualification cl-green mb-2 fw-bold">B.A.M.S</p>
                <p class="doctor-specialty cl-grey mb-3">Ayurvedic Physician</p>
                <div class="doctor-details">
                  <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-graduation-cap cl-green me-2"></i> Bachelor of Ayurvedic Medicine & Surgery</li>
                    <li class="mb-2"><i class="fas fa-id-card cl-green me-2"></i> Registration No: 30354</li>
                    <li class="mb-2"><i class="fas fa-leaf cl-green me-2"></i> Traditional Ayurvedic Treatment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Why Choose Our Doctors Section -->
        <div class="row mt-5">
          <div class="col-lg-12">
            <div class="why-choose-doctors bg-light p-5 rounded-3">
              <div class="sc-title-two text-center mb-4">
                <h4 class="cl-green">Why Choose Our Doctors</h4>
                <h3>Experienced & Qualified Ayurvedic Specialists</h3>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="feature-item text-center">
                    <div class="feature-icon mb-3">
                      <i class="fas fa-certificate cl-green fs-1"></i>
                    </div>
                    <h5>Certified Professionals</h5>
                    <p class="cl-grey">All our doctors are certified B.A.M.S practitioners with years of experience</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="feature-item text-center">
                    <div class="feature-icon mb-3">
                      <i class="fas fa-spa cl-green fs-1"></i>
                    </div>
                    <h5>Panchakarma Experts</h5>
                    <p class="cl-grey">Specialized in traditional Panchakarma treatments for holistic healing</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="feature-item text-center">
                    <div class="feature-icon mb-3">
                      <i class="fas fa-baby cl-green fs-1"></i>
                    </div>
                    <h5>Infertility Treatment</h5>
                    <p class="cl-grey">Expert care for infertility issues using natural Ayurvedic methods</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="feature-item text-center">
                    <div class="feature-icon mb-3">
                      <i class="fas fa-clock cl-green fs-1"></i>
                    </div>
                    <h5>Years of Experience</h5>
                    <p class="cl-grey">Decades of combined experience in traditional Ayurvedic medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="row mt-5">
          <div class="col-lg-12 text-center">
            <div class="cta-section bg-green p-5 rounded-3">
              <h3 class="cl-white mb-3">Ready to Start Your Healing Journey?</h3>
              <p class="cl-white mb-4">Book an appointment with our expert Ayurvedic doctors today</p>
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
.doctor-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.doctor-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.doctor-image {
  position: relative;
  overflow: hidden;
}

.doctor-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.doctor-card:hover .doctor-overlay {
  opacity: 1;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: background 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.4);
  color: white;
}

.doctor-name {
  color: #333;
  font-weight: 600;
}

.feature-item {
  padding: 20px;
}

.feature-icon {
  margin-bottom: 15px;
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

.cl-grey {
  color: #666;
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

.btn-primary {
  background-color: #1eb53a;
  border-color: #1eb53a;
}

.btn-primary:hover {
  background-color: #16a32e;
  border-color: #16a32e;
}

.btn-outline-primary {
  color: #1eb53a;
  border-color: #1eb53a;
}

.btn-outline-primary:hover {
  background-color: #1eb53a;
  border-color: #1eb53a;
  color: white;
}

.cta-section {
  background: linear-gradient(135deg, #1eb53a 0%, #16a32e 100%);
}
</style>