<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    ratio?: string
    parallax?: boolean
  }>(),
  { ratio: '16 / 10', parallax: true },
)

const root = ref<HTMLElement | null>(null)
const media = ref<HTMLElement | null>(null)
const cover = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (!import.meta.client || !root.value) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  ctx = gsap.context(() => {
    if (reduce) {
      gsap.set([media.value, cover.value], { clearProps: 'all' })
      gsap.set(cover.value, { scaleY: 0 })
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root.value, start: 'top 80%', once: true },
    })
    tl.to(cover.value, { scaleY: 0, duration: 1.1, ease: 'power4.inOut' })
      .from(media.value, { scale: 1.2, duration: 1.4, ease: 'power3.out' }, 0)

    if (props.parallax) {
      gsap.to(media.value, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: root.value, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }
    ScrollTrigger.refresh()
  }, root.value)
})

onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <div ref="root" class="reveal" :style="{ aspectRatio: ratio }">
    <div ref="media" class="reveal__media">
      <AppImage :src="src" :alt="alt" ratio="" />
    </div>
    <div ref="cover" class="reveal__cover" aria-hidden="true" />
  </div>
</template>

<style scoped>
.reveal {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--color-paper-2);
}
.reveal__media {
  position: absolute;
  inset: 0;
}
.reveal__media :deep(.app-image),
.reveal__media :deep(.app-image__img) {
  width: 100%;
  height: 100%;
}
.reveal__cover {
  position: absolute;
  inset: 0;
  background: var(--color-ink);
  transform-origin: bottom;
  z-index: 2;
}
</style>
