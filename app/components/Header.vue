<template>
  <div class="">
    <header class="main_header_area">
      <div class="topbar-wrap bg-dblue">
        <div class="container">
          <div
              class="top-info d-flex justify-content-between align-items-center"
          >
            <ul class="t-address">
              <li class="pr-2">
                <i class="far fa-clock"></i> Open Hours: Mon - Sat 9:00 AM -
                6:00 PM
              </li>
              <li class="pr-2"><i class="fas fa-phone-alt"></i> 9875072965</li>
              <li><i class="far fa-envelope"></i> info@marutiayurveda.com</li>
            </ul>
            <ul class="t-social">
              <li>
                <span class="ct-search-link"
                ><a href="#"><i class="fa fa-search"></i></a
                ></span>
              </li>
              <li class="pl-2">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li class="pl-2">
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </li>
              <li class="pl-2">
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="header_menu">
        <nav class="navbar navbar-expand-lg navbar-default">
          <div class="container">
            <div
                class="navbar-flex d-flex align-items-center justify-content-between w-100"
            >
              <div class="navbar-header">
                <NuxtLink class="navbar-brand text-center" to="/">
                  <img
                      src="/images/logo.png"
                      alt="image"
                      style="max-width: 60px"
                  />
                </NuxtLink>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item active">
                    <NuxtLink class="nav-link" to="/" prefetch>Home</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link" to="/services" prefetch>Services</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link" to="/doctors" prefetch>Doctors</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link" to="/gallery" prefetch>Gallery</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link" to="/contact" prefetch>Contact Us</NuxtLink>
                  </li>
                </ul>
                <div class="header-btn ms-auto">
                  <NuxtLink to="/contact" class="btn" prefetch
                  >Contact Us
                  </NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
// Bootstrap handles the mobile menu
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Close mobile menu on route change
watch(route, () => {
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show')
  }
})
</script>

<style scoped>
/* Custom mobile menu styles */
.navbar-collapse {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
}

.navbar-nav .nav-link {
  color: #333 !important;
  padding: 10px 15px;
  font-weight: 500;
}

.navbar-nav .nav-link:hover {
  color: #008f14 !important;
  background-color: rgba(226, 148, 5, 0.1);
}

.header-btn .btn {
  background-color: #008f14;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.header-btn .btn:hover {
  background-color: #008f14;
  color: #fff;
}

/* Style the hamburger icon */
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Mobile specific adjustments */
@media (max-width: 991px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #fff;
    border: 1px solid #008f14;
    border-radius: 0 0 10px 10px;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }

  .navbar-nav .nav-item {
    width: 100%;
    text-align: center;
  }

  .header-btn {
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
  }
  .navbar-toggler {
    margin-right: 20px;
  }
}
</style>
