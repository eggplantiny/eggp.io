<script lang="ts" setup>

</script>

<template>
  <div class="daisy-hero min-h-screen bg-base-200">
    <div class="daisy-hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          <slot name="title" />
        </h1>
        <p class="py-6">
          <slot name="description" />
        </p>
        <button class="daisy-btn daisy-btn-primary">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
