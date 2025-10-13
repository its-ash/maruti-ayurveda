<template>
  <div>
    <ClientOnly>
      <Header />
      <NuxtPage />
      <Footer />
    </ClientOnly>
  </div>
</template>

<script setup>
// Prefetch critical pages on app mount using navigateTo with prefetch
onMounted(() => {
  const pages = ["/services", "/doctors", "/gallery", "/contact"];
  pages.forEach((page) => {
    preloadRouteComponents(page);
  });
});
</script>
