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
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-BQQQM99QRS',
  },
  css: [
    '~/assets/styles/main.scss',
  ],
  snackbar: {
    top: true,
    right: true,
    duration: 5000,
  },
  content: {
  },
  nitro: {
    prerender: {
      routes: ['/resume'],
    },
  },
})
