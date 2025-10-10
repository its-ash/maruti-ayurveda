<template>
  <footer class="footer bg-ftblue">
    <div class="footer-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="f-maincontent bg-white border-start bw-3 bc-green">
              <img src="/images/logo.png" alt="" />
              <p class="mt-3 mb-3">
              </p>
              <ul class="social-links-a square-link">
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 ps-lg-4">
            <div class="ft-lists">
              <h3 class="cl-white">Useful Links</h3>
              <ul class="d-flex flex-column">
                <li><NuxtLink to="/services">Services</NuxtLink></li>
                <li><NuxtLink to="/doctors">Doctors</NuxtLink></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="ft-lists">
              <h3 class="cl-white">Our Services</h3>
              <ul class="d-flex flex-column">
                <li><a href="#">Cardiology</a></li>
                <li><a href="#">Diagnosis</a></li>
                <li><a href="#">Cardiology</a></li>
                <li><a href="#">Massage Therapy</a></li>
                <li><a href="#">Dental Care</a></li>
                <li><a href="#">Blood Test</a></li>
                <li><a href="#">Operation Theater</a></li>
                <li><a href="#">Pharmacy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ft-lists">
              <h3 class="cl-white">Weekly Newsletter</h3>
              <p class="cl-white">
                I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, conse iscing elit. Ut elit telctus nec ullamcorper matti
              </p>
              <form @submit.prevent="handleNewsletterSubmit">
                <div class="form-group">
                  <input 
                    v-model="email" 
                    type="email" 
                    class="form-control mt-3 p-3" 
                    id="newsletterEmail" 
                    placeholder="Your Email" 
                    required
                  />
                  <button type="submit" class="btn w-100 mt-1">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-main p-3 bg-footer-blue">
      <div class="container">
        <div class="copyright-text d-flex justify-content-between">
          <p class="cl-white m-0">© 2022 Ayurvedic. All rights reserved</p>
          <p class="cl-white">Made by Cyclone Themes</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const email = ref('')

const handleNewsletterSubmit = () => {
  // Handle newsletter subscription
  console.log('Newsletter subscription for:', email.value)
  // Add your newsletter subscription logic here
  email.value = ''
}
</script>

<style scoped>
/* Component-specific styles if needed */
</style>