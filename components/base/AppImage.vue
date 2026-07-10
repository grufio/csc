<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt: string
    sizes?: string
    eager?: boolean
    ratio?: string
  }>(),
  {
    sizes: '(max-width: 743px) 100vw, (max-width: 1290px) 80vw, 70vw',
    eager: false,
    ratio: '',
  },
)
</script>

<template>
  <div class="app-image" :style="ratio ? { aspectRatio: ratio } : undefined">
    <NuxtImg
      :src="src"
      :alt="alt"
      :sizes="sizes"
      :loading="eager ? 'eager' : 'lazy'"
      :preload="eager"
      format="webp"
      quality="82"
      class="app-image__img"
    />
  </div>
</template>

<style scoped>
.app-image {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: var(--color-paper-2);
}
.app-image__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
