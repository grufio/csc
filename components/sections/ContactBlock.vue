<script setup lang="ts">
import { site } from '~/data/site'

withDefaults(defineProps<{ variant?: 'cta' | 'full' }>(), { variant: 'cta' })

const { locale, t } = useI18n()
const loc = computed(() => locale.value as 'de' | 'en')
</script>

<template>
  <section class="contact section container" :class="`contact--${variant}`">
    <div class="contact__lead">
      <p class="eyebrow" data-reveal>{{ t('contact.title') }}</p>
      <p class="contact__slogan title-2" data-reveal data-reveal-delay="0.1">
        {{ site.slogan[loc] }}
      </p>
    </div>

    <div class="contact__grid">
      <div class="contact__col" data-reveal>
        <p class="eyebrow">{{ t('contact.address') }}</p>
        <address class="contact__addr body-lg">
          {{ site.legalName }}<br >
          {{ site.address.street }}<br >
          {{ site.address.zip }} {{ site.address.city }}<br >
          {{ site.address.country[loc] }}
        </address>
      </div>

      <div class="contact__col" data-reveal data-reveal-delay="0.08">
        <p class="eyebrow">{{ t('contact.phone') }}</p>
        <a class="contact__line body-lg" :href="`tel:${site.phone.replace(/\s/g, '')}`">{{ site.phone }}</a>

        <p class="eyebrow contact__label">{{ t('contact.general') }}</p>
        <a class="contact__line body-lg" :href="`mailto:${site.emails.general}`">{{ site.emails.general }}</a>
      </div>

      <div class="contact__col" data-reveal data-reveal-delay="0.16">
        <p class="eyebrow">{{ t('contact.sales') }}</p>
        <a class="contact__line body-lg" :href="`mailto:${site.emails.sales}`">{{ site.emails.sales }}</a>

        <p class="eyebrow contact__label">{{ t('contact.accounting') }}</p>
        <a class="contact__line body-lg" :href="`mailto:${site.emails.accounting}`">{{ site.emails.accounting }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__lead {
  margin-bottom: clamp(40px, 6vw, 96px);
}
.contact__slogan {
  max-width: 18ch;
  margin-top: 18px;
}
.contact__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(32px, 4vw, 56px);
  border-top: 1px solid var(--color-line);
  padding-top: clamp(28px, 3vw, 48px);
}
@media (min-width: 744px) {
  .contact__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.contact__col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.contact__label {
  margin-top: 20px;
}
.contact__addr {
  font-style: normal;
  color: var(--color-mute);
}
.contact__line {
  transition: color 0.3s var(--ease);
  width: fit-content;
}
.contact__line:hover {
  color: var(--color-accent);
}
</style>
