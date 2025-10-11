export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/seo"],
  ssr: false,
  
  
  // SEO Configuration
  robots: {
    robotsTxt: false // Disable automatic robots.txt generation since we have a custom one
  },
  
  site: {
    url: 'https://its-ash.github.io/maruti-ayurveda/',
    name: 'Maruti Ayurveda Panchakarma Hospital'
  },
  
  app: {
    baseURL: "/maruti-ayurveda/",
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
        { property: "og:image", content: "/maruti-ayurveda/images/logo.png" },
        {
          property: "og:url",
          content: "https://its-ash.github.io/maruti-ayurveda/",
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
        { name: "twitter:image", content: "/maruti-ayurveda/images/logo.png" },
        { name: "geo.region", content: "IN-RJ" },
        { name: "geo.placename", content: "Gagnapur" },
        { name: "geo.position", content: "26.8464;75.8068" },
        { name: "ICBM", content: "26.8464, 75.8068" },
      ],
      link: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/maruti-ayurveda/images/cropped-favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/maruti-ayurveda/images/cropped-favicon-32x32.png",
        },
        {
          rel: "canonical",
          href: "https://its-ash.github.io/maruti-ayurveda/",
        },
        { rel: "stylesheet", href: "/maruti-ayurveda/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/maruti-ayurveda/css/style.css" },
        { rel: "stylesheet", href: "/maruti-ayurveda/css/plugin.css" },
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
        { src: "/maruti-ayurveda/js/jquery-3.5.1.min.js" },
        { src: "/maruti-ayurveda/js/bootstrap.min.js" },
        { src: "/maruti-ayurveda/js/plugin.js" },
        { src: "/maruti-ayurveda/js/main.js" },
        { src: "/maruti-ayurveda/js/custom-swiper.js" },
        { src: "/maruti-ayurveda/js/custom-nav.js" },
      ],
    },
  },
  nitro: {
    output: {
      dir: "docs",
      publicDir: "docs",
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
  // Additional SEO configurations
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
});
