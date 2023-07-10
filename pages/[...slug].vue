<script lang="ts" setup>

</script>

<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <h1>
        {{ doc.title }}
      </h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>

<style scoped lang="scss">
article {
  @apply prose dark:prose-invert;
}
</style>
