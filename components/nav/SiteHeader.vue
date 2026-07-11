<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const open = ref(false)

const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="header" :class="{ 'is-open': open }">
    <div class="header__bar container">
      <NuxtLink :to="localePath('index')" class="header__brand" aria-label="CSC Electronic AG">
        <span class="header__logo">CSC</span>
        <span class="header__sub">Electronic AG</span>
      </NuxtLink>

      <nav class="header__nav">
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
  gap: clamp(16px, 2vw, 32px);
}
.header__toggle {
  display: inline-flex;
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

@media (max-width: 743px) {
  .header__lang {
    display: none;
  }
}
</style>
