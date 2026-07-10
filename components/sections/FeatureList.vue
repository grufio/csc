<script setup lang="ts">
defineProps<{ heading?: string; items: string[]; columns?: number }>()
</script>

<template>
  <section class="features section--tight container">
    <h2 v-if="heading" class="features__head title-4" data-reveal>{{ heading }}</h2>
    <ul class="features__list" :style="{ '--cols': columns ?? 2 }">
      <li v-for="(it, i) in items" :key="i" class="features__item body-lg" data-reveal :data-reveal-delay="i * 0.05">
        <span class="features__dot" aria-hidden="true" />
        <span>{{ it }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.features__head {
  margin-bottom: clamp(24px, 3vw, 44px);
}
.features__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(14px, 1.5vw, 22px) clamp(32px, 4vw, 72px);
}
@media (min-width: 744px) {
  .features__list {
    grid-template-columns: repeat(var(--cols, 2), 1fr);
  }
}
.features__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: baseline;
  padding-bottom: clamp(14px, 1.5vw, 22px);
  border-bottom: 1px solid var(--color-line);
}
.features__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
  transform: translateY(-2px);
}
</style>
