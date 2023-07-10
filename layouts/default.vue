<script lang="ts" setup>
import Header from '~/components/atomic/organisms/Header.vue'
</script>

<template>
  <div class="application">
    <Header />
    <main class="container mx-auto max-w-3xl">
      <slot :key="$route.fullPath" />
    </main>
  </div>
</template>

<style scoped lang="scss">
.application {
  @apply min-h-screen bg-base-100 text-base-content;
}
</style>
