<script setup lang="ts">
import EggplantIcon from '~/assets/images/icon.png'
</script>

<template>
  <header class="header">
    <nav class="daisy-navbar">
      <div class="daisy-navbar-start">
        <NuxtLink class="link-btn" to="/">
          <img :src="EggplantIcon" alt="Eggp" class="eggp">
        </NuxtLink>
      </div>

      <div class="daisy-navbar-end">
        <a class="link-btn" href="https://github.com/eggplantiny" target="_blank">
          <Icon name="carbon:logo-github" size="28" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.link-btn {
  @apply daisy-btn daisy-btn-ghost normal-case text-xl daisy-btn-square text-base-content;
}
.eggp {
  @apply w-7 h-7;
}

.eggp:hover {
  @apply animate-spin;
}
</style>
