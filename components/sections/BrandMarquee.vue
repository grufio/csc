<script setup lang="ts">
import { gsap } from 'gsap'

const props = withDefaults(
  defineProps<{ items: string[]; title?: string }>(),
  { title: '' },
)

const track = ref<HTMLElement | null>(null)
let tween: gsap.core.Tween | null = null

const doubled = computed(() => [...props.items, ...props.items])

onMounted(() => {
  if (!import.meta.client || !track.value) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return

  tween = gsap.to(track.value, {
    xPercent: -50,
    ease: 'none',
    duration: Math.max(18, props.items.length * 3),
    repeat: -1,
  })
})

onBeforeUnmount(() => tween?.kill())
</script>

<template>
  <section class="marquee section--tight">
    <p v-if="title" class="eyebrow container" data-reveal>{{ title }}</p>
    <div class="marquee__viewport">
      <ul ref="track" class="marquee__track">
        <li v-for="(b, i) in doubled" :key="`${b}-${i}`" class="marquee__item title-4">
          {{ b }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.marquee__viewport {
  margin-top: clamp(20px, 2vw, 36px);
  overflow: hidden;
  border-block: 1px solid var(--color-line);
  padding-block: clamp(16px, 2vw, 28px);
}
.marquee__track {
  display: flex;
  align-items: center;
  gap: clamp(32px, 4vw, 72px);
  width: max-content;
  will-change: transform;
}
.marquee__item {
  white-space: nowrap;
  color: var(--color-ink);
}
.marquee__item::after {
  content: '·';
  margin-left: clamp(32px, 4vw, 72px);
  color: var(--color-accent);
}
</style>
