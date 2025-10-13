export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/seo"],
  ssr: true, // Enable SSR for proper GitHub Pages support
  
  // SEO Configuration
  robots: {
    robotsTxt: false // Disable automatic robots.txt generation since we have a custom one
  },
  
  ogImage: {
    enabled: false // Disable OG Image generation to avoid SSR conflicts
  },
  
  site: {
    url: 'https://marutiayurveda.in',
    name: 'Maruti Ayurveda Panchakarma Hospital'
  },
  
  app: {
    baseURL: "/",
    // Enable page prefetching for better performance
    keepalive: true,
    head: {
      title:
        "Maruti Ayurveda Panchakarma Hospital & Research Center - Expert Ayurvedic Treatment",
      titleTemplate: "%s | Maruti Ayurveda",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Leading Ayurvedic hospital in Gagnapur offering Panchakarma therapy, infertility treatment, and traditional healing. Expert BAMS doctors, modern facilities, 24/7 emergency care.",
        },
        {
          name: "keywords",
          content:
            "ayurveda, panchakarma, infertility treatment, ayurvedic hospital, BAMS doctors, natural healing, traditional medicine, Gagnapur, Rajasthan",
        },
        { name: "author", content: "Maruti Ayurveda Panchakarma Hospital" },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Maruti Ayurveda Panchakarma Hospital & Research Center",
        },
        {
          property: "og:description",
          content:
            "Expert Ayurvedic treatment with Panchakarma therapy, infertility care, and traditional healing in Gagnapur, Rajasthan.",
        },
        { property: "og:image", content: "/images/logo.png" },
        {
          property: "og:url",
          content: "https://marutiayurveda.in/",
        },
        { property: "og:site_name", content: "Maruti Ayurveda" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Maruti Ayurveda Panchakarma Hospital & Research Center",
        },
        {
          name: "twitter:description",
          content:
            "Expert Ayurvedic treatment with Panchakarma therapy, infertility care, and traditional healing.",
        },
        { name: "twitter:image", content: "/images/logo.png" },
        { name: "geo.region", content: "IN-RJ" },
        { name: "geo.placename", content: "Gagnapur" },
        { name: "geo.position", content: "26.8464;75.8068" },
        { name: "ICBM", content: "26.8464, 75.8068" },
      ],
      link: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/images/cropped-favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/cropped-favicon-32x32.png",
        },
        {
          rel: "canonical",
          href: "https://marutiayurveda.in/",
        },
        // Prefetch key pages for better performance
        { rel: "prefetch", href: "/services" },
        { rel: "prefetch", href: "/doctors" },
        { rel: "prefetch", href: "/gallery" },
        { rel: "prefetch", href: "/contact" },
        { rel: "stylesheet", href: "/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/css/style.css" },
        { rel: "stylesheet", href: "/css/plugin.css" },
        { rel: "stylesheet", href: "/fonts/flaticon.css" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",
        },
      ],
      script: [
        { src: "/js/jquery-3.5.1.min.js" },
        { src: "/js/bootstrap.min.js" },
        { src: "/js/plugin.js" },
        { src: "/js/main.js" },
        { src: "/js/custom-swiper.js" },
        { src: "/js/custom-nav.js" },
      ],
    },
  },
  nitro: {
    output: {
      dir: "docs",
    },
    prerender: {
      routes: [
        "/",
        "/services",
        "/doctors",
        "/gallery",
        "/contact",
        "/sitemap.xml",
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
    viewTransition: true
  },
  
  // Vue configuration for better hydration
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.includes('-')
    }
  },
  
  // Runtime config for client-side
  runtimeConfig: {
    public: {
      baseURL: '/'
    }
  },
  
  // Router configuration for prefetching
  routeRules: {
    // Static pages - prerender at build time
    '/': { prerender: true },
    '/services': { prerender: true },
    '/doctors': { prerender: true },
    '/gallery': { prerender: true },
    '/contact': { prerender: true },
    // Add headers for better caching
    '/images/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
    '/css/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
    '/js/**': { headers: { 'Cache-Control': 'max-age=31536000' } }
  }
});
