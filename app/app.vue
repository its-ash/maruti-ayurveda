<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
// Prefetch critical pages on app mount
onMounted(() => {
  // Prefetch key pages for instant navigation
  const router = useRouter()
  const pages = ['/services', '/doctors', '/gallery', '/contact']
  
  pages.forEach(page => {
    router.prefetch(page)
  })
})
</script>
