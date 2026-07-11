<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    titleLines: string[]
    intro?: string
    tagline?: string
    variant?: 'home' | 'page'
    floating?: string[]
  }>(),
  { variant: 'page', eyebrow: '', intro: '', tagline: '', floating: () => [] },
)
</script>

<template>
  <section class="hero container" :class="`hero--${variant}`">
    <div v-if="variant === 'home' && floating.length" class="hero__floats" aria-hidden="true">
      <div
        v-for="(img, i) in floating.slice(0, 6)"
        :key="img"
        class="hero__float"
        :class="`hero__float--${i + 1}`"
        :style="{ '--d': `${0.15 + i * 0.12}s`, '--bob': `${5 + i}s` }"
      >
        <div class="hero__float-inner">
          <img :src="img" alt="" loading="eager" decoding="async">
        </div>
      </div>
    </div>

    <div class="hero__inner">
      <p v-if="eyebrow" class="hero__eyebrow eyebrow" data-reveal>{{ eyebrow }}</p>
      <SplitText :lines="titleLines" tag="h1" class="title-2 hero__title" />
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
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: var(--header-h);
  padding-bottom: 0;
  overflow: hidden;
}
.hero__inner {
  position: relative;
  z-index: 2;
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

/* ---- Floating images ---- */
.hero__floats {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}
.hero__float {
  position: absolute;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 18px 40px -20px rgba(36, 31, 33, 0.35);
  opacity: 0;
  animation: floatIn 1s var(--ease) var(--d, 0s) forwards;
}
.hero__float-inner {
  width: 100%;
  height: 100%;
  animation: bob var(--bob, 6s) ease-in-out infinite alternate;
}
.hero__float img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero__float--1 { top: 15%; left: 5%; width: clamp(90px, 11vw, 168px); aspect-ratio: 4/5; }
.hero__float--2 { top: 12%; right: 6%; width: clamp(80px, 9vw, 140px); aspect-ratio: 1/1; }
.hero__float--3 { top: 44%; left: 9%; width: clamp(70px, 8vw, 128px); aspect-ratio: 1/1; }
.hero__float--4 { top: 52%; right: 8%; width: clamp(90px, 10vw, 156px); aspect-ratio: 4/5; }
.hero__float--5 { bottom: 12%; left: 15%; width: clamp(80px, 9vw, 140px); aspect-ratio: 3/4; }
.hero__float--6 { bottom: 15%; right: 16%; width: clamp(90px, 11vw, 164px); aspect-ratio: 4/3; }

@keyframes floatIn {
  from { opacity: 0; transform: translateY(28px) scale(0.92); }
  to { opacity: 1; transform: none; }
}
@keyframes bob {
  from { transform: translateY(-8px); }
  to { transform: translateY(8px); }
}

/* Hide the busy float layer on small screens */
@media (max-width: 860px) {
  .hero__floats { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .hero__float { animation: none; opacity: 1; }
  .hero__float-inner { animation: none; }
}
</style>
