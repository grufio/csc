<script setup lang="ts">
import { site } from '~/data/site'

definePageMeta({ name: 'ueber-uns' })

const { locale, t } = useI18n()
const loc = computed(() => locale.value as 'de' | 'en')

const root = ref<HTMLElement | null>(null)
useReveal(root)

const titleLines = computed(() =>
  loc.value === 'de'
    ? ['Ihr Anbieter für', 'elektronische', 'Bauelemente.']
    : ['Your provider of', 'electronic', 'components.'],
)

const paras = computed(() =>
  loc.value === 'de'
    ? [
        'Seit 30 Jahren beliefern wir Industriekunden in ganz Europa. Als professioneller und unabhängiger Lieferant vertreiben wir aktive, passive und elektromechanische Komponenten namhafter Hersteller weltweit.',
        'Zusätzlich bieten wir Displays und kundenspezifische Touchscreen-Lösungen an. Wir verstehen uns als Partner und nicht als einfache Lieferanten und unterstützen bei Beschaffungsthemen unterschiedlicher Komplexität.',
      ]
    : [
        'For 30 years we have supplied industrial customers across Europe. As a professional, independent supplier we distribute active, passive and electromechanical components from renowned manufacturers worldwide.',
        'We also offer displays and custom touchscreen solutions. We see ourselves as partners rather than simple suppliers and support procurement matters of varying complexity.',
      ],
)

const strengths = computed(() => ({
  de: [
    'Erfahrung',
    'Fachkompetenz',
    'Kundenorientiertes, transparentes Vorgehen',
    'Weltweites Lieferantennetzwerk',
    'Eigene Einkaufsorganisation in China',
    'Technische Unterstützung von der Anfrage bis zur Auftragsabwicklung',
  ],
  en: [
    'Experience',
    'Technical expertise',
    'Customer-focused, transparent approach',
    'Global supplier network',
    'Own purchasing organisation in China',
    'Technical support from enquiry to order fulfilment',
  ],
}))

const stats = computed(() => [
  { value: `${site.yearsInBusiness}+`, label: loc.value === 'de' ? 'Jahre' : 'Years' },
  { value: 'EU', label: loc.value === 'de' ? 'Industriekunden' : 'Industrial customers' },
  { value: 'CN', label: loc.value === 'de' ? 'Einkauf vor Ort' : 'Local purchasing' },
])

useSeoMeta({ title: () => t('nav.about') })
</script>

<template>
  <div ref="root">
    <HeroIntro :eyebrow="t('home.aboutEyebrow')" :title-lines="titleLines" :tagline="site.tagline" />

    <section class="about section--tight container">
      <div class="about__prose">
        <p v-for="(p, i) in paras" :key="i" class="body-lg" data-reveal :data-reveal-delay="i * 0.08">{{ p }}</p>
      </div>
    </section>

    <FeatureList :heading="loc === 'de' ? 'Unsere Stärken' : 'Our strengths'" :items="strengths[loc]" :columns="2" />

    <CompanyHighlight :statement="site.slogan[loc]" :stats="stats" />

    <ContactBlock variant="cta" />
  </div>
</template>

<style scoped>
.about__prose {
  display: flex;
  flex-direction: column;
  gap: clamp(18px, 2vw, 32px);
  max-width: 62ch;
  color: var(--color-mute);
}
</style>
