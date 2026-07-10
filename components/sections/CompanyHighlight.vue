<script setup lang="ts">
defineProps<{
  eyebrow?: string
  stats: { value: string; label: string }[]
  statement: string
}>()
</script>

<template>
  <section class="highlight section container">
    <p v-if="eyebrow" class="eyebrow" data-reveal>{{ eyebrow }}</p>
    <p class="highlight__statement title-3" data-reveal data-reveal-delay="0.1">{{ statement }}</p>
    <ul class="highlight__stats">
      <li v-for="(s, i) in stats" :key="s.label" class="highlight__stat" data-reveal :data-reveal-delay="0.1 + i * 0.08">
        <span class="highlight__value title-2">{{ s.value }}</span>
        <span class="highlight__label caption">{{ s.label }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.highlight__statement {
  max-width: 20ch;
  margin: clamp(20px, 3vw, 40px) 0 clamp(40px, 6vw, 88px);
}
.highlight__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: clamp(24px, 3vw, 48px);
  border-top: 1px solid var(--color-line);
  padding-top: clamp(28px, 3vw, 48px);
}
.highlight__stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.highlight__value {
  color: var(--color-accent);
}
.highlight__label {
  color: var(--color-mute);
}
</style>
