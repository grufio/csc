<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    titleLines: string[]
    intro?: string
    tagline?: string
    variant?: 'home' | 'page'
  }>(),
  { variant: 'page', eyebrow: '', intro: '', tagline: '' },
)
</script>

<template>
  <section class="hero container" :class="`hero--${variant}`">
    <p v-if="eyebrow" class="hero__eyebrow eyebrow" data-reveal>{{ eyebrow }}</p>
    <SplitText :lines="titleLines" tag="h1" :class="variant === 'home' ? 'title-1' : 'title-2'" />
    <div v-if="intro || tagline" class="hero__meta">
      <p v-if="intro" class="hero__intro body-lg" data-reveal data-reveal-delay="0.15">{{ intro }}</p>
      <p v-if="tagline" class="hero__tag caption" data-reveal data-reveal-delay="0.25">{{ tagline }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: calc(var(--header-h) + clamp(48px, 8vw, 140px));
  padding-bottom: clamp(40px, 6vw, 100px);
}
.hero--home {
  min-height: clamp(70vh, 60vh, 100vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero__eyebrow {
  margin-bottom: clamp(16px, 2vw, 28px);
}
.hero__meta {
  margin-top: clamp(28px, 4vw, 56px);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}
.hero__intro {
  max-width: 34ch;
  color: var(--color-mute);
}
.hero__tag {
  color: var(--color-accent);
}
</style>
