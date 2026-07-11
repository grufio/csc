<script setup lang="ts">
import { site } from '~/data/site'
import { chinaProcess } from '~/data/process'

const { locale, t } = useI18n()
const loc = computed(() => locale.value as 'de' | 'en')

const root = ref<HTMLElement | null>(null)
useReveal(root)

const titleLines = computed(() =>
  loc.value === 'de'
    ? ['Ihr Lieferant für', 'elektronische Komponenten.']
    : ['Your supplier for', 'electronic components.'],
)

const stats = computed(() => [
  { value: `${site.yearsInBusiness}+`, label: loc.value === 'de' ? 'Jahre Erfahrung' : 'Years of experience' },
  { value: '7', label: loc.value === 'de' ? 'Leistungsbereiche' : 'Service areas' },
  { value: 'CH · CN', label: loc.value === 'de' ? 'Europa & China' : 'Europe & China' },
])

const statement = computed(() =>
  loc.value === 'de'
    ? 'Seit 30 Jahren beliefern wir Industriekunden in ganz Europa — als Partner, nicht als einfacher Lieferant.'
    : 'For 30 years we have supplied industrial customers across Europe — as a partner, not a simple supplier.',
)

const processSteps = computed(() =>
  chinaProcess.map((s) => ({ no: s.no, title: s.title[loc.value], text: s.text[loc.value] })),
)

useSeoMeta({
  title: () => (loc.value === 'de' ? 'Start' : 'Home'),
})
</script>

<template>
  <div ref="root">
    <HeroIntro
      variant="home"
      :eyebrow="site.legalName"
      :title-lines="titleLines"
      :intro="site.slogan[loc]"
      :tagline="site.tagline"
    />

    <div class="section--tight container">
      <ImageReveal src="/images/services/hero.jpg" :alt="loc === 'de' ? 'Elektronische Komponenten' : 'Electronic components'" ratio="16 / 9" />
    </div>

    <CompanyHighlight :eyebrow="t('home.aboutEyebrow')" :statement="statement" :stats="stats" />

    <ServiceGrid :eyebrow="t('home.servicesEyebrow')" :title="t('home.servicesTitle')" />

    <ProcessSteps :eyebrow="loc === 'de' ? 'China-Fertigung' : 'Manufacturing in China'" :steps="processSteps" />

    <ContactBlock variant="cta" />
  </div>
</template>
