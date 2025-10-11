<template>
  <header class="main_header_area">
    <div class="topbar-wrap bg-dblue">
      <div class="container">
        <div class="top-info d-flex justify-content-between align-items-center">
          <ul class="t-address">
            <li class="pr-2"><i class="far fa-clock"></i> Open Hours: Mon - Sat 9:00 AM - 6:00 PM</li>
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

    <!-- Navigation Bar -->
    <div class="header_menu">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-flex d-flex align-items-center justify-content-between w-100">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <NuxtLink class="navbar-brand text-center" to="/">
                <img src="/images/logo.png" alt="image" style="max-width: 60px" />
              </NuxtLink>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="navbar-collapse1" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav" id="responsive-menu">
                <li class="active">
                  <NuxtLink to="/" prefetch>Home</NuxtLink>
                </li>
                <li><NuxtLink to="/services" prefetch>Services</NuxtLink></li>
                <li><NuxtLink to="/doctors" prefetch>Doctors</NuxtLink></li>
                <li><NuxtLink to="/gallery" prefetch>Gallery</NuxtLink></li>
                <li><NuxtLink to="/contact" prefetch>Contact Us</NuxtLink></li>
              </ul>
            </div>

            <div class="header-btn">
              <NuxtLink to="/contact" class="btn" prefetch>Contact Us</NuxtLink>
            </div>
            <!-- /.navbar-collapse -->
            <div id="slicknav-mobile"></div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </nav>
    </div>
    <!-- Navigation Bar Ends -->
  </header>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Component-specific styles if needed */
</style>