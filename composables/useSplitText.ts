import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Line-by-line reveal for a heading, without the paid SplitText plugin.
 * We wrap the element's existing markup expectation: the caller provides
 * spans already split into `.split-line > span`. This animates them up on
 * scroll enter. Honours prefers-reduced-motion.
 */
export function useSplitReveal(el: Ref<HTMLElement | null>, opts: { stagger?: number; start?: string } = {}) {
  let trigger: ScrollTrigger | null = null

  onMounted(() => {
    if (!import.meta.client || !el.value) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lines = el.value.querySelectorAll<HTMLElement>('.split-line > span')
    if (!lines.length) return

    if (reduce) {
      gsap.set(lines, { y: 0 })
      return
    }

    trigger = ScrollTrigger.create({
      trigger: el.value,
      start: opts.start ?? 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(lines, {
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: opts.stagger ?? 0.08,
        })
      },
    })
  })

  onBeforeUnmount(() => {
    trigger?.kill()
    trigger = null
  })
}
