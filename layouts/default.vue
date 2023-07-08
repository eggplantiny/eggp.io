<script lang="ts" setup>

</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <header class="bg-white shadow-sm py-4">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between">
          <div class="text-xl font-bold">
            <nuxt-link to="/" class="text-gray-800 hover:text-gray-600">
              MyWebsite
            </nuxt-link>
          </div>
          <div>
            <nuxt-link
              to="/about"
              class="text-gray-600 hover:text-gray-800 mx-2"
            >
              About
            </nuxt-link>
            <nuxt-link
              to="/contact"
              class="text-gray-600 hover:text-gray-800 mx-2"
            >
              Contact
            </nuxt-link>
          </div>
        </nav>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
      <nuxt />
    </main>
    <footer class="bg-white shadow-sm py-4 mt-auto">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm text-gray-600">
          &copy; {{ new Date().getFullYear() }} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">

</style>
