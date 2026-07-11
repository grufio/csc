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
    <div class="hero__inner">
      <p v-if="eyebrow" class="hero__eyebrow eyebrow" data-reveal>{{ eyebrow }}</p>
      <SplitText
        :lines="titleLines"
        tag="h1"
        :class="variant === 'home' ? 'title-2' : 'title-2'"
        class="hero__title"
      />
      <div v-if="intro || tagline" class="hero__meta">
        <p v-if="intro" class="hero__intro body-lg" data-reveal data-reveal-delay="0.15">{{ intro }}</p>
        <p v-if="tagline" class="hero__tag caption" data-reveal data-reveal-delay="0.25">{{ tagline }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: calc(var(--header-h) + clamp(40px, 8vw, 120px));
  padding-bottom: clamp(32px, 5vw, 72px);
}
.hero--home {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: var(--header-h);
  padding-bottom: 0;
}
.hero__inner {
  width: 100%;
}
.hero--home .hero__inner {
  max-width: min(92vw, 1180px);
  margin: 0 auto;
}
.hero--home .hero__title {
  max-width: none;
  margin: 0 auto;
}
.hero__title {
  max-width: 20ch;
}
.hero--page .hero__title {
  max-width: 16ch;
}
.hero__eyebrow {
  margin-bottom: clamp(16px, 2vw, 28px);
}
.hero--home .hero__meta {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero__meta {
  margin-top: clamp(28px, 4vw, 56px);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
}
.hero--home .hero__intro {
  margin: 0 auto;
}
.hero__intro {
  max-width: 42ch;
  color: var(--color-mute);
}
.hero__tag {
  color: var(--color-red);
  font-weight: 600;
}
</style>
