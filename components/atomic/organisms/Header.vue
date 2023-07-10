<script setup lang="ts">
import EggplantIcon from '~/assets/images/icon.png'
</script>

<template>
  <header class="header">
    <nav class="daisy-navbar">
      <div class="daisy-navbar-start">
        <NuxtLink class="link-btn lin-btn--square" to="/">
          <img :src="EggplantIcon" alt="Eggp" class="eggp">
        </NuxtLink>
      </div>

      <div class="daisy-navbar-end">
        <a class="link-btn lin-btn--square" href="https://www.linkedin.com/in/%EC%84%B1%EC%9A%B0-%EC%A0%95-b757a9141/" target="_blank">
          <Icon name="carbon:logo-linkedin" size="28" />
        </a>

        <a class="link-btn lin-btn--square" href="https://github.com/eggplantiny" target="_blank">
          <Icon name="carbon:logo-github" size="28" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.link-btn {
  @apply daisy-btn daisy-btn-ghost text-base-content normal-case;
}

.lin-btn--square {
  @apply daisy-btn-square;
}

.eggp {
  @apply w-7 h-7;
}

.eggp:hover {
  @apply animate-spin;
}
</style>
