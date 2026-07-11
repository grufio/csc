<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt: string
    eager?: boolean
    ratio?: string
  }>(),
  { eager: false, ratio: '' },
)
</script>

<template>
  <div class="app-image" :style="ratio ? { aspectRatio: ratio } : undefined">
    <img
      :src="src"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      decoding="async"
      class="app-image__img"
    >
  </div>
</template>

<style scoped>
.app-image {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: var(--color-ivory-200);
}
.app-image__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
