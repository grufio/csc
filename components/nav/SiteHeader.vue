<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const open = ref(false)

const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

const pills = computed(() => [
  { label: t('nav.services'), to: localePath('leistungen/index') },
  { label: t('nav.about'), to: localePath('ueber-uns') },
  { label: t('nav.contact'), to: localePath('kontakt') },
])
</script>

<template>
  <header class="header" :class="{ 'is-open': open }">
    <div class="header__bar container">
      <NuxtLink :to="localePath('index')" class="header__brand" aria-label="CSC Electronic AG">
        <span class="header__logo">CSC</span>
        <span class="header__sub">Electronic AG</span>
      </NuxtLink>

      <nav class="header__nav" aria-label="Hauptnavigation">
        <ul class="header__pills">
          <li v-for="p in pills" :key="p.to">
            <NuxtLink :to="p.to" class="pill">{{ p.label }}</NuxtLink>
          </li>
        </ul>
        <LangSwitch class="header__lang" />
        <button
          class="header__toggle"
          :aria-expanded="open"
          aria-controls="site-drawer"
          @click="open = !open"
        >
          <span class="header__toggle-label">{{ open ? t('nav.close') : t('nav.menu') }}</span>
          <span class="header__toggle-icon" :class="{ 'is-open': open }" aria-hidden="true">
            <i /><i />
          </span>
        </button>
      </nav>
    </div>

    <ClientOnly>
      <ModalDrawer id="site-drawer" :open="open" @close="open = false" />
    </ClientOnly>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 160;
}
.header__bar {
  position: relative;
  z-index: 2;
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-ink);
  transition: color 0.4s var(--ease);
}
.header.is-open .header__bar {
  color: var(--color-ivory-50);
}
.header__brand {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.header__logo {
  font-weight: 700;
  font-size: clamp(19px, 15px + 100vw * 0.006, 28px);
  letter-spacing: -0.05em;
}
.header__sub {
  font-size: var(--caption);
  letter-spacing: 0.02em;
  opacity: 0.7;
}
.header__nav {
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.4vw, 20px);
}
.header__pills {
  display: flex;
  align-items: center;
  gap: 6px;
}
.pill {
  display: inline-flex;
  align-items: center;
  height: 38px;
  padding: 0 18px;
  border-radius: 999px;
  background: var(--color-white);
  color: var(--color-ink);
  font-size: var(--caption);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  box-shadow: 0 1px 0 rgba(36, 31, 33, 0.04);
  transition:
    background 0.35s var(--ease),
    color 0.35s var(--ease);
}
.pill:hover,
.pill.router-link-active {
  background: var(--color-ink);
  color: var(--color-white);
}
.header__toggle {
  display: none;
  align-items: center;
  gap: 10px;
}
.header__toggle-label {
  font-size: var(--caption);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 600;
}
.header__toggle-icon {
  position: relative;
  width: 22px;
  height: 12px;
}
.header__toggle-icon i {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1.5px;
  background: currentColor;
  transition:
    transform 0.35s var(--ease),
    top 0.35s var(--ease),
    bottom 0.35s var(--ease);
}
.header__toggle-icon i:first-child {
  top: 0;
}
.header__toggle-icon i:last-child {
  bottom: 0;
}
.header__toggle-icon.is-open i:first-child {
  top: 5px;
  transform: rotate(45deg);
}
.header__toggle-icon.is-open i:last-child {
  bottom: 5px;
  transform: rotate(-45deg);
}

/* Mobile: hide pills, show hamburger */
@media (max-width: 860px) {
  .header__pills {
    display: none;
  }
  .header__toggle {
    display: inline-flex;
  }
}
@media (max-width: 743px) {
  .header__lang {
    display: none;
  }
}
</style>
