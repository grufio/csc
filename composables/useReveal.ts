import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Attaches a scroll-triggered reveal to elements marked [data-reveal] within a
 * root element. Adds the `is-visible` class once they enter the viewport.
 * Honours prefers-reduced-motion (elements are shown immediately).
 */
export function useReveal(root: Ref<HTMLElement | null>) {
  const triggers: ScrollTrigger[] = []

  onMounted(() => {
    if (!import.meta.client || !root.value) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = root.value.querySelectorAll<HTMLElement>('[data-reveal]')

    els.forEach((el) => {
      if (reduce) {
        el.classList.add('is-visible')
        return
      }
      const t = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const delay = Number(el.dataset.revealDelay ?? 0)
          gsap.delayedCall(delay, () => el.classList.add('is-visible'))
        },
      })
      triggers.push(t)
    })

    ScrollTrigger.refresh()
  })

  onBeforeUnmount(() => {
    triggers.forEach((t) => t.kill())
    triggers.length = 0
  })
}
