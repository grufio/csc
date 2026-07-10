<script setup lang="ts">
defineProps<{
  heading?: string
  groups: { name: string; items: string[] }[]
}>()
</script>

<template>
  <section class="specs section--tight container">
    <h2 v-if="heading" class="specs__head title-4" data-reveal>{{ heading }}</h2>
    <div class="specs__grid">
      <div v-for="(g, i) in groups" :key="g.name" class="specs__group" data-reveal :data-reveal-delay="i * 0.08">
        <h3 class="specs__name title-6">{{ g.name }}</h3>
        <ul class="specs__list">
          <li v-for="it in g.items" :key="it" class="body">{{ it }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.specs__head {
  margin-bottom: clamp(24px, 3vw, 44px);
}
.specs__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(24px, 3vw, 48px);
}
@media (min-width: 744px) {
  .specs__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.specs__group {
  border-top: 1px solid var(--color-line);
  padding-top: 18px;
}
.specs__name {
  color: var(--color-accent);
  margin-bottom: 14px;
}
.specs__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--color-mute);
}
</style>
