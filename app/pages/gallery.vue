<script setup>
// SEO Meta tags for gallery page
useHead({
  title: 'Hospital Photo Gallery - Modern Ayurvedic Facilities | Maruti Ayurveda Hospital',
  meta: [
    { 
      name: 'description', 
      content: 'View our hospital photo gallery showcasing modern Ayurvedic facilities, Panchakarma treatment rooms, patient care areas, and state-of-the-art medical equipment at Maruti Ayurveda Hospital, Gagnapur.' 
    },
    { 
      name: 'keywords', 
      content: 'hospital gallery gagnapur, ayurvedic hospital photos, panchakarma facilities, medical equipment photos, hospital infrastructure, ayurveda treatment rooms, maruti ayurveda photos' 
    },
    { property: 'og:title', content: 'Hospital Photo Gallery - Modern Ayurvedic Facilities | Maruti Ayurveda' },
    { property: 'og:description', content: 'Explore our modern Ayurvedic hospital facilities through our photo gallery. See our Panchakarma treatment rooms and medical infrastructure.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://marutiayurveda.in/gallery' },
    { property: 'og:image', content: 'https://marutiayurveda.in/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.05.jpeg' },
    { name: 'twitter:title', content: 'Hospital Photo Gallery - Modern Ayurvedic Facilities' },
    { name: 'twitter:description', content: 'View our modern Ayurvedic hospital facilities, treatment rooms, and medical infrastructure.' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        '@id': 'https://marutiayurveda.in/gallery',
        name: 'Maruti Ayurveda Hospital Photo Gallery',
        description: 'Photo gallery showcasing modern Ayurvedic hospital facilities, treatment rooms, and medical infrastructure',
        url: 'https://marutiayurveda.in/gallery',
        about: {
          '@type': 'Hospital',
          name: 'Maruti Ayurveda Panchakarma Hospital & Research Center'
        },
        image: [
          'https://marutiayurveda.in/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.05.jpeg',
          'https://marutiayurveda.in/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.06.jpeg',
          'https://marutiayurveda.in/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.07.jpeg'
        ]
      })
    }
  ]
})

// Reactive data
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Hospital images with optimized alt tags for SEO
const hospitalImages = ref([
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.05 (1).jpeg',
    alt: 'Maruti Ayurveda Hospital Main Reception Area - Modern Ayurvedic Healthcare Facility'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.05.jpeg',
    alt: 'Hospital Front Desk and Patient Registration Area - Welcoming Healthcare Environment'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.06 (1).jpeg',
    alt: 'Panchakarma Treatment Room - Traditional Ayurvedic Therapy Facility'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.06.jpeg',
    alt: 'Advanced Panchakarma Equipment - Modern Traditional Medicine Setup'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.07 (1).jpeg',
    alt: 'Patient Consultation Room - Expert Ayurvedic Doctor Consultation Area'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.07 (2).jpeg',
    alt: 'Medical Examination Room - Professional Healthcare Assessment Facility'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.07.jpeg',
    alt: 'Doctor Chamber - Private Medical Consultation and Treatment Planning'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.08 (1).jpeg',
    alt: 'Medical Equipment Room - Advanced Diagnostic Facilities at Ayurvedic Hospital'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.08.jpeg',
    alt: 'Modern Medical Instruments - State-of-the-Art Healthcare Technology'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.09 (1).jpeg',
    alt: 'Infertility Treatment Center - Specialized Ayurvedic Reproductive Health Facility'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.09 (2).jpeg',
    alt: 'Gynecological Care Unit - Women\'s Health and Wellness Department'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.09.jpeg',
    alt: 'Specialized Treatment Room - Comprehensive Reproductive Healthcare Services'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.10 (1).jpeg',
    alt: 'Hospital Waiting Area - Comfortable Patient Seating and Reception'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.10.jpeg',
    alt: 'Patient Lounge - Relaxing Waiting Environment for Families'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.11 (1).jpeg',
    alt: 'Ayurvedic Medicine Dispensary - Traditional Herbal Medicine Storage'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.11 (2).jpeg',
    alt: 'Pharmacy Section - Authentic Ayurvedic Medicines and Preparations'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.11.jpeg',
    alt: 'Medicine Storage Area - Organized Traditional Medicine Inventory'
  },
  {
    src: '/images/hostpital/WhatsApp Image 2025-09-26 at 14.48.12.jpeg',
    alt: 'Emergency Care Unit - 24/7 Medical Emergency Services and Ambulance Facility'
  }
])

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % hospitalImages.value.length
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 ? hospitalImages.value.length - 1 : currentImageIndex.value - 1
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (!lightboxOpen.value) return
  
  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowRight':
      nextImage()
      break
    case 'ArrowLeft':
      prevImage()
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
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
              <h1 class="cl-white">Hospital Photo Gallery</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><NuxtLink to="/" class="cl-white">Home</NuxtLink></li>
                  <li class="breadcrumb-item active cl-lblue" aria-current="page">Gallery</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-main py-5">
      <div class="container">
        <div class="sc-title-two text-center mb-5">
          <h4 class="cl-green">Our Hospital</h4>
          <h2>Hospital Photo Gallery</h2>
          <p class="cl-grey">Take a look at our modern facilities and state-of-the-art medical equipment</p>
        </div>

        <!-- Gallery Grid -->
        <div class="row g-4" id="gallery-grid">
          <div 
            v-for="(image, index) in hospitalImages" 
            :key="index"
            class="col-lg-4 col-md-6 col-sm-12"
          >
            <div class="gallery-item position-relative overflow-hidden rounded-3 bx-shadow" @click="openLightbox(index)">
              <img 
                :src="image.src" 
                :alt="image.alt"
                class="img-fluid w-100 gallery-img"
                style="height: 300px; object-fit: cover; cursor: pointer;"
              />
              <div class="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div class="gallery-icon">
                  <i class="fas fa-search-plus text-white fs-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="z-index: 9999; background: rgba(0,0,0,0.9);" @click="closeLightbox">
      <div class="lightbox-content position-relative" @click.stop>
        <img 
          :src="hospitalImages[currentImageIndex].src" 
          :alt="hospitalImages[currentImageIndex].alt"
          class="img-fluid"
          style="max-width: 90vw; max-height: 90vh; object-fit: contain;"
        />
        
        <!-- Close Button -->
        <button 
          @click="closeLightbox"
          class="btn-close position-absolute text-white fs-1"
          style="top: 20px; right: 20px; background: none; border: none; color: white; font-size: 2rem; cursor: pointer;"
        >
          <i class="fas fa-times"></i>
        </button>

        <!-- Navigation Arrows -->
        <button 
          @click="prevImage"
          class="lightbox-nav-btn position-absolute text-white"
          style="left: 20px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.2); border: none; color: white; font-size: 2rem; padding: 10px 15px; border-radius: 50%; cursor: pointer;"
        >
          <i class="fas fa-chevron-left"></i>
        </button>

        <button 
          @click="nextImage"
          class="lightbox-nav-btn position-absolute text-white"
          style="right: 20px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.2); border: none; color: white; font-size: 2rem; padding: 10px 15px; border-radius: 50%; cursor: pointer;"
        >
          <i class="fas fa-chevron-right"></i>
        </button>

        <!-- Image Counter -->
        <div class="image-counter position-absolute text-white text-center" style="bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.7); padding: 5px 15px; border-radius: 15px;">
          {{ currentImageIndex + 1 }} / {{ hospitalImages.length }}
        </div>
      </div>
    </div>


    <!-- Back to top -->
    <div id="back-to-top">
      <a href="#"></a>
    </div>
  </div>
</template>

<style scoped>
.gallery-overlay {
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-img {
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.05);
}

.lightbox-nav-btn:hover {
  background: rgba(255,255,255,0.4) !important;
}
</style>