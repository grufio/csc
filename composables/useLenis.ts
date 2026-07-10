import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenis: Lenis | null = null

/**
 * Lenis smooth-scroll singleton, driven by GSAP's ticker so that Lenis and
 * ScrollTrigger share a single rAF loop and stay in sync. Client-only.
 */
export function useLenis(): Lenis | null {
  if (!import.meta.client) return null
  if (lenis) return lenis

  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const tick = (time: number) => {
    lenis?.raf(time * 1000)
  }
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  return lenis
}

export function destroyLenis() {
  lenis?.destroy()
  lenis = null
}

export function scrollToTop(immediate = true) {
  lenis?.scrollTo(0, { immediate })
}
