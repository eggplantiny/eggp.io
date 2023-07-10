<script lang="ts" setup>
import Header from '~/components/atomic/organisms/Header.vue'
import Footer from '~/components/atomic/organisms/Footer.vue'
</script>

<template>
  <div class="application">
    <Header />
    <main>
      <slot :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.application {
  @apply min-h-screen bg-white text-base-100 dark:bg-base-100 dark:text-base-content;
  @apply transition-colors duration-300 ease-in-out #{!important}
}

main {
  @apply container mx-auto max-w-3xl px-6;
  min-height: calc(100vh + 96px);
}
</style>
