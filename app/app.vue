<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
// Prefetch critical pages on app mount using navigateTo with prefetch
onMounted(() => {
  // Prefetch key pages for instant navigation
  const pages = ['/services', '/doctors', '/gallery', '/contact']
  
  pages.forEach(page => {
    // Use preloadRouteComponents for prefetching in Nuxt 3
    preloadRouteComponents(page)
  })
})
</script>
