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
    <div class="footer__inner grid">
      <div class="footer__brand">
        <p class="title-4">{{ site.legalName }}</p>
        <p class="footer__tag caption">{{ site.tagline }}</p>
      </div>

      <nav class="footer__col">
        <p class="eyebrow">{{ t('meta.servicesTitle') }}</p>
        <ul>
          <li v-for="s in serviceLinks" :key="s.to">
            <NuxtLink :to="s.to">{{ s.title }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="footer__col">
        <p class="eyebrow">{{ t('contact.title') }}</p>
        <address class="footer__addr">
          {{ site.address.street }}<br >
          {{ site.address.zip }} {{ site.address.city }}<br >
          {{ site.address.country[loc] }}
        </address>
        <ul class="footer__links">
          <li><a :href="`tel:${site.phone.replace(/\s/g, '')}`">{{ site.phone }}</a></li>
          <li><a :href="`mailto:${site.emails.general}`">{{ site.emails.general }}</a></li>
          <li><a :href="`mailto:${site.emails.sales}`">{{ site.emails.sales }}</a></li>
        </ul>
      </div>

      <div class="footer__col footer__meta">
        <NuxtLink :to="localePath('kontakt')" class="footer__cta">
          {{ t('cta.getInTouch') }}
        </NuxtLink>
        <LangSwitch />
      </div>
    </div>

    <div class="footer__base grid">
      <p class="caption">© {{ new Date().getFullYear() }} {{ site.legalName }}</p>
      <p class="caption">{{ t('contact.legal') }} · {{ site.address.city }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-ink);
  color: var(--color-white);
  padding-block: clamp(48px, 6vw, 100px) 28px;
}
.footer__inner {
  row-gap: clamp(32px, 4vw, 56px);
}
.footer__brand {
  grid-column: 1 / -1;
}
@media (min-width: 744px) {
  .footer__brand {
    grid-column: span 12;
  }
  .footer__col {
    grid-column: span 4;
  }
}
.footer__tag {
  margin-top: 10px;
  color: var(--color-accent);
}
.footer__col ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}
.footer__col a,
.footer__addr {
  color: rgba(255, 255, 255, 0.72);
  font-size: var(--body);
  line-height: 1.6;
  transition: color 0.3s var(--ease);
}
.footer__col a:hover {
  color: var(--color-white);
}
.footer__addr {
  margin-top: 16px;
  font-style: normal;
}
.footer__links {
  margin-top: 14px;
}
.footer__cta {
  display: inline-block;
  font-size: var(--title-5);
  letter-spacing: -0.02em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 4px;
  margin-bottom: 24px;
  transition: color 0.3s var(--ease);
}
.footer__cta:hover {
  color: var(--color-accent);
}
.footer__base {
  margin-top: clamp(40px, 5vw, 72px);
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}
.footer__base {
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.5);
}
</style>
