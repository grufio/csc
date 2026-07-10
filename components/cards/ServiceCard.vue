<script setup lang="ts">
defineProps<{
  index: string
  title: string
  short: string
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="scard" data-reveal>
    <span class="scard__index caption">{{ index }}</span>
    <span class="scard__title title-4">{{ title }}</span>
    <span class="scard__short body">{{ short }}</span>
    <span class="scard__arrow" aria-hidden="true">→</span>
  </NuxtLink>
</template>

<style scoped>
.scard {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: clamp(20px, 2vw, 32px) 0;
  border-top: 1px solid var(--color-line);
  position: relative;
  transition: color 0.35s var(--ease);
}
.scard:hover {
  color: var(--color-accent);
}
.scard__index {
  color: var(--color-mute);
}
.scard__title {
  max-width: 16ch;
  transition: transform 0.4s var(--ease);
}
.scard:hover .scard__title {
  transform: translateX(10px);
}
.scard__short {
  color: var(--color-mute);
  max-width: 32ch;
}
.scard__arrow {
  position: absolute;
  top: clamp(20px, 2vw, 32px);
  right: 0;
  font-size: var(--title-5);
  opacity: 0;
  transform: translateX(-8px);
  transition:
    opacity 0.35s var(--ease),
    transform 0.35s var(--ease);
}
.scard:hover .scard__arrow {
  opacity: 1;
  transform: none;
}
</style>
