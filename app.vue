<script setup lang="ts">
import { themeChange } from 'theme-change'

tryOnMounted(() => {
  localStorage.setItem('theme', 'eggp')
  themeChange(false)
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <NuxtSnackbar />
  </NuxtLayout>
</template>
