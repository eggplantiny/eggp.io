<script lang="ts" setup>
import Footer from '~/components/atomic/organisms/Footer.vue'
import Header from '~/components/atomic/organisms/Header.vue'
</script>

<template>
  <div class="application">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.application {
  @apply min-h-screen bg-white text-base-100 dark:bg-base-100 dark:text-base-content;
}

main {
  @apply container mx-auto max-w-3xl px-6;
  min-height: calc(100vh + 96px);
}
</style>
