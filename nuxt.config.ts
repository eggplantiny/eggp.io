// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-snackbar',
    '@vueuse/nuxt',
    'nuxt-icons',
    'nuxt-headlessui',
    '@nuxt/content',
    // '@nuxt/image',
  ],
  snackbar: {
    top: true,
    right: true,
    duration: 5000,
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
})
