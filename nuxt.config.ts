// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-snackbar',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-headlessui',
    '@nuxt/content',
    // '@nuxt/image',
  ],
  css: [
    '~/assets/styles/main.scss',
  ],
  snackbar: {
    top: true,
    right: true,
    duration: 5000,
  },
  experimental: {
    payloadExtraction: false,
  },
  content: {
  },
})
