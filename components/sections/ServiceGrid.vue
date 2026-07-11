<script setup lang="ts">
import { services } from '~/data/services'

defineProps<{ eyebrow?: string; title?: string }>()

const { locale } = useI18n()
const loc = computed(() => locale.value as 'de' | 'en')

const items = computed(() =>
  [...services]
    .sort((a, b) => a.order - b.order)
    .map((s) => ({
      key: s.key,
      index: String(s.order).padStart(2, '0'),
      title: s.title[loc.value],
      short: s.short[loc.value],
      to: loc.value === 'de' ? `/leistungen/${s.slug.de}` : `/en/services/${s.slug.en}`,
    })),
)
</script>

<template>
  <section class="services section container">
    <header class="services__head">
      <p v-if="eyebrow" class="eyebrow" data-reveal>{{ eyebrow }}</p>
      <h2 v-if="title" class="title-3" data-reveal data-reveal-delay="0.08">{{ title }}</h2>
    </header>
    <div class="services__grid">
      <ServiceCard
        v-for="it in items"
        :key="it.key"
        :index="it.index"
        :title="it.title"
        :short="it.short"
        :to="it.to"
      />
    </div>
  </section>
</template>

<style scoped>
.services__head {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: clamp(28px, 4vw, 64px);
}
.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: var(--grid-gap);
}
@media (min-width: 744px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: clamp(32px, 5vw, 96px);
  }
}
</style>
