<script setup lang="ts">
withDefaults(
  defineProps<{
    index: string
    title: string
    short: string
    to: string
    color: string
    image?: string
    tag?: string
  }>(),
  { image: '', tag: '' },
)
</script>

<template>
  <NuxtLink :to="to" class="scard" data-reveal :style="{ '--card': color }">
    <div class="scard__media">
      <AppImage v-if="image" :src="image" :alt="title" eager ratio="" class="scard__img" />
      <span class="scard__index">{{ index }}</span>
      <span v-if="tag" class="scard__chip">{{ tag }}</span>
      <span class="scard__arrow" aria-hidden="true">→</span>
    </div>
    <div class="scard__body">
      <h3 class="scard__title title-6">{{ title }}</h3>
      <p class="scard__short body">{{ short }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.scard {
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.2vw, 18px);
  color: var(--color-ink);
}
.scard__media {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 14px;
  overflow: hidden;
  background: var(--card);
  isolation: isolate;
}
.scard__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.7s var(--ease);
}
.scard:hover .scard__img {
  transform: scale(1.05);
}
/* colour accent bar so each service keeps its category hue */
.scard__media::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6px;
  background: var(--card);
  z-index: 2;
}
.scard__index {
  position: absolute;
  top: 14px;
  left: 16px;
  z-index: 3;
  font-size: var(--caption);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-white);
  mix-blend-mode: difference;
}
.scard__chip {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 14px;
  border-radius: 999px;
  background: var(--card);
  color: var(--color-ink);
  font-size: var(--caption);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.scard__arrow {
  position: absolute;
  bottom: 14px;
  right: 16px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: var(--color-ivory-50);
  color: var(--color-ink);
  font-size: 18px;
  transform: translateY(6px);
  opacity: 0;
  transition:
    opacity 0.4s var(--ease),
    transform 0.4s var(--ease);
}
.scard:hover .scard__arrow {
  opacity: 1;
  transform: none;
}
.scard__title {
  margin-bottom: 6px;
}
.scard__short {
  color: var(--color-mute);
  max-width: 34ch;
}
</style>
