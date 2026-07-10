<script setup lang="ts">
import { site } from '~/data/site'

definePageMeta({ name: 'kontakt' })

const { locale, t } = useI18n()
const loc = computed(() => locale.value as 'de' | 'en')

const root = ref<HTMLElement | null>(null)
useReveal(root)

const titleLines = computed(() =>
  loc.value === 'de' ? ['Sprechen Sie', 'mit uns.'] : ["Let's", 'talk.'],
)

useSeoMeta({ title: () => t('nav.contact') })
</script>

<template>
  <div ref="root">
    <HeroIntro :eyebrow="t('contact.title')" :title-lines="titleLines" :tagline="site.tagline" />
    <ContactBlock variant="full" />

    <section class="legal section--tight container">
      <p class="caption u-mute" data-reveal>
        {{ t('contact.legal') }} · {{ loc === 'de' ? 'Version 1/18 (2018)' : 'Version 1/18 (2018)' }}
      </p>
    </section>
  </div>
</template>

<style scoped>
.legal {
  border-top: 1px solid var(--color-line);
}
</style>
