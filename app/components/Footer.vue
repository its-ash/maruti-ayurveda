<template>
  <!-- Call to action start -->
  <section class="call-to p-5 bg-green">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-12">
          <div class="call-contact d-flex align-items-center">
            <i class="fas fa-phone-alt display-6 cl-white"></i>
            <div class="pl-3">
              <h4 class="cl-white">Looking For Consultation?</h4>
              <p class="m-0 cl-white">9875072965</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <p class="call-to-mid cl-white">Contact us for all Ayurvedic treatments and Panchakarma therapy. We will be proud to serve you.</p>
        </div>
        <div class="col-lg-4 col-md-12 text-center">
          <NuxtLink to="/contact" class="btn btn-white">Get Consultation</NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!-- Call to action end -->

  <!-- Footer starts -->
  <footer class="footer bg-ftblue">
    <div class="footer-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="f-maincontent bg-white border-start bw-3 bc-green">
              <img src="/images/logo.png" alt="Maruti Ayurveda Panchakarma Hospital Logo" />
              <p class="mt-3 mb-3">
                Leading Ayurvedic hospital in Gagnapur providing authentic Panchakarma therapy, infertility treatment, and traditional healing with modern facilities and expert BAMS doctors.
              </p>
              <ul class="social-links-a square-link">
                <li>
                  <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 ps-lg-4">
            <div class="ft-lists">
              <h3 class="cl-white">Useful Links</h3>
              <ul class="d-flex flex-column">
                <li><NuxtLink to="/" prefetch>Home</NuxtLink></li>
                <li><NuxtLink to="/services" prefetch>Services</NuxtLink></li>
                <li><NuxtLink to="/doctors" prefetch>Our Doctors</NuxtLink></li>
                <li><NuxtLink to="/gallery" prefetch>Gallery</NuxtLink></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><NuxtLink to="/contact" prefetch>Contact Us</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="ft-lists">
              <h3 class="cl-white">Our Services</h3>
              <ul class="d-flex flex-column">
                <li><a href="#">Panchakarma Therapy</a></li>
                <li><a href="#">Infertility Treatment</a></li>
                <li><a href="#">Ayurvedic Consultation</a></li>
                <li><a href="#">Herbal Medicine</a></li>
                <li><a href="#">Massage Therapy</a></li>
                <li><a href="#">Detoxification</a></li>
                <li><a href="#">Joint Pain Treatment</a></li>
                <li><a href="#">General Medicine</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ft-lists">
              <h3 class="cl-white">Contact Information</h3>
              <div class="contact-info cl-white mb-4">
                <div class="mb-3">
                  <i class="fas fa-map-marker-alt"></i>
                  <span class="ml-2">Maruti Ayurveda Panchakarma Hospital & Research Center, Gagnapur, Rajasthan</span>
                </div>
                <div class="mb-3">
                  <i class="fas fa-phone"></i>
                  <span class="ml-2">9875072965</span>
                </div>
                <div class="mb-3">
                  <i class="fas fa-envelope"></i>
                  <span class="ml-2">info@marutiayurveda.com</span>
                </div>
                <div class="mb-3">
                  <i class="fas fa-clock"></i>
                  <span class="ml-2">Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-main p-3 bg-footer-blue">
      <div class="container">
        <div class="copyright-text d-flex justify-content-between">
          <p class="cl-white m-0">© 2025 Maruti Ayurveda Panchakarma Hospital. All rights reserved</p>
          <a href="https://its-ash.github.io/" class="cl-white">Designed with ❤️ by Ash</a>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer ends -->

  <!-- Back to top start -->
  <div id="back-to-top">
    <a href="#" @click.prevent="scrollToTop" aria-label="Back to top"></a>
  </div>
  <!-- Back to top ends -->
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.contact-info i {
  width: 16px;
  margin-right: 8px;
}

.ml-2 {
  margin-left: 8px;
}

#back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

#back-to-top a {
  display: block;
  width: 50px;
  height: 50px;
  background: #28a745;
  color: white;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

#back-to-top a:hover {
  background: #218838;
  transform: translateY(-2px);
}

#back-to-top a::before {
  content: "↑";
  font-size: 20px;
  font-weight: bold;
}
</style>