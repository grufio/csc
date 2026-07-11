<script setup lang="ts">
definePageMeta({ name: 'leistungen/index' })

const { locale, t } = useI18n()
const loc = computed(() => locale.value as 'de' | 'en')

const root = ref<HTMLElement | null>(null)
useReveal(root)

const intro = computed(() =>
  loc.value === 'de'
    ? ['Sieben Leistungen', 'aus einer Hand.']
    : ['Seven services,', 'one partner.'],
)

const lead = computed(() =>
  loc.value === 'de'
    ? 'Von Beschaffung über Fertigung in China bis zum Supply-Chain-Management — wir begleiten Ihre elektronischen Komponenten über den gesamten Lebenszyklus.'
    : 'From sourcing and manufacturing in China to supply-chain management — we support your electronic components across their entire lifecycle.',
)

useSeoMeta({ title: () => t('nav.services') })
</script>

<template>
  <div ref="root">
    <section class="lead container">
      <SplitText :lines="intro" tag="h1" class="title-2 lead__title" />
      <p class="lead__text body-lg" data-reveal data-reveal-delay="0.15">{{ lead }}</p>
    </section>

    <ServiceGrid />

    <ContactBlock variant="cta" />
  </div>
</template>

<style scoped>
.lead {
  padding-top: calc(var(--header-h) + clamp(56px, 9vw, 150px));
  padding-bottom: clamp(32px, 5vw, 72px);
  text-align: center;
}
.lead__title {
  max-width: 18ch;
  margin: 0 auto;
}
.lead__text {
  max-width: 52ch;
  margin: clamp(20px, 3vw, 36px) auto 0;
  color: var(--color-mute);
}
</style>
