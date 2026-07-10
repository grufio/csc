<script setup lang="ts">
interface Step {
  no: string
  title: string
  text: string
}
defineProps<{ eyebrow?: string; steps: Step[] }>()
</script>

<template>
  <section class="process section container">
    <p v-if="eyebrow" class="eyebrow process__eyebrow" data-reveal>{{ eyebrow }}</p>
    <ol class="process__list">
      <li v-for="(s, i) in steps" :key="s.no" class="process__item" data-reveal :data-reveal-delay="i * 0.06">
        <span class="process__no title-5">{{ s.no }}</span>
        <div class="process__body">
          <h3 class="process__title title-4">{{ s.title }}</h3>
          <p class="process__text body">{{ s.text }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.process__eyebrow {
  margin-bottom: clamp(24px, 3vw, 48px);
}
.process__list {
  display: flex;
  flex-direction: column;
}
.process__item {
  display: grid;
  grid-template-columns: clamp(48px, 8vw, 120px) 1fr;
  gap: clamp(16px, 3vw, 48px);
  padding: clamp(24px, 3vw, 44px) 0;
  border-top: 1px solid var(--color-line);
}
.process__no {
  color: var(--color-accent);
}
.process__title {
  margin-bottom: 10px;
}
.process__text {
  color: var(--color-mute);
  max-width: 46ch;
}
</style>
