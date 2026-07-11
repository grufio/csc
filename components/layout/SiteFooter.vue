<script setup lang="ts">
import { site } from '~/data/site'
import { services } from '~/data/services'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const loc = computed(() => locale.value as 'de' | 'en')

const serviceLinks = computed(() =>
  [...services]
    .sort((a, b) => a.order - b.order)
    .map((s) => ({
      title: s.title[loc.value],
      to: loc.value === 'de' ? `/leistungen/${s.slug.de}` : `/en/services/${s.slug.en}`,
    })),
)
</script>

<template>
  <footer class="footer">
    <div class="footer__top container">
      <p class="footer__slogan title-3">{{ site.slogan[loc] }}</p>
      <NuxtLink :to="localePath('kontakt')" class="footer__cta title-6">
        {{ t('cta.getInTouch') }} <span aria-hidden="true">↗</span>
      </NuxtLink>
    </div>

    <div class="footer__grid grid">
      <div class="footer__brand">
        <p class="footer__mark">CSC</p>
        <p class="footer__tag caption">{{ site.tagline }}</p>
      </div>

      <nav class="footer__col">
        <p class="footer__label caption">{{ t('meta.servicesTitle') }}</p>
        <ul>
          <li v-for="s in serviceLinks" :key="s.to">
            <NuxtLink :to="s.to">{{ s.title }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="footer__col">
        <p class="footer__label caption">{{ t('contact.address') }}</p>
        <address class="footer__addr">
          {{ site.legalName }}<br >
          {{ site.address.street }}<br >
          {{ site.address.zip }} {{ site.address.city }}<br >
          {{ site.address.country[loc] }}
        </address>
      </div>

      <div class="footer__col">
        <p class="footer__label caption">{{ t('contact.title') }}</p>
        <ul>
          <li><a :href="`tel:${site.phone.replace(/\s/g, '')}`">{{ site.phone }}</a></li>
          <li><a :href="`mailto:${site.emails.general}`">{{ site.emails.general }}</a></li>
          <li><a :href="`mailto:${site.emails.sales}`">{{ site.emails.sales }}</a></li>
          <li><a :href="`mailto:${site.emails.accounting}`">{{ site.emails.accounting }}</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__base container">
      <p class="caption">© {{ new Date().getFullYear() }} {{ site.legalName }}</p>
      <div class="footer__base-right">
        <span class="caption">{{ t('contact.legal') }}</span>
        <LangSwitch />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-fluor);
  color: var(--color-ink);
  padding-block: clamp(48px, 40px + 100vw * 0.027, 98px) 24px;
}
.footer__top {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: clamp(40px, 27px + 100vw * 0.031, 80px);
  border-bottom: 1px solid rgba(36, 31, 33, 0.2);
}
.footer__slogan {
  max-width: 16ch;
}
.footer__cta {
  white-space: nowrap;
  transition: opacity 0.3s var(--ease);
}
.footer__cta:hover {
  opacity: 0.6;
}
.footer__grid {
  row-gap: clamp(32px, 4vw, 56px);
  padding-block: clamp(38px, 25px + 100vw * 0.032, 80px);
}
.footer__brand {
  grid-column: 1 / -1;
}
.footer__col {
  grid-column: 1 / -1;
}
@media (min-width: 744px) {
  .footer__brand {
    grid-column: span 6;
  }
  .footer__col {
    grid-column: span 6;
  }
}
@media (min-width: 1024px) {
  .footer__brand {
    grid-column: span 6;
  }
  .footer__col {
    grid-column: span 6;
  }
}
.footer__mark {
  font-size: clamp(48px, 30px + 100vw * 0.06, 120px);
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 0.9;
}
.footer__tag {
  margin-top: 8px;
  font-weight: 600;
}
.footer__label {
  font-weight: 600;
  opacity: 0.55;
  margin-bottom: 16px;
}
.footer__col ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer__col a,
.footer__addr {
  font-size: var(--body);
  line-height: 1.6;
  letter-spacing: -0.02em;
  transition: opacity 0.3s var(--ease);
}
.footer__col a:hover {
  opacity: 0.6;
}
.footer__addr {
  font-style: normal;
}
.footer__base {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: clamp(32px, 5vw, 56px);
  padding-top: 20px;
  border-top: 1px solid rgba(36, 31, 33, 0.2);
}
.footer__base-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
