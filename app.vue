<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { site } from '~/data/site'

const { locale, t } = useI18n()
const nuxtApp = useNuxtApp()

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  titleTemplate: (title?: string) =>
    title ? `${title} — ${site.legalName}` : site.legalName,
  meta: [
    {
      name: 'description',
      content: site.slogan[locale.value as 'de' | 'en'],
    },
  ],
}))

onMounted(() => {
  useLenis()
  nuxtApp.hook('page:finish', () => {
    scrollToTop(true)
    requestAnimationFrame(() => ScrollTrigger.refresh())
  })
})

onBeforeUnmount(() => {
  destroyLenis()
})
</script>

<template>
  <div class="smooth-root">
    <a href="#main" class="skip-link">{{ t('nav.menu') }}</a>
    <SiteHeader />
    <main id="main">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<style>
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 200;
  background: var(--color-ink);
  color: var(--color-white);
  padding: 12px 18px;
}
.skip-link:focus {
  left: 8px;
  top: 8px;
}
</style>
