<script setup lang="ts">
import { services } from '~/data/services'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const { locale, t } = useI18n()
const localePath = useLocalePath()
const drawer = ref<HTMLElement | null>(null)

const serviceLinks = computed(() =>
  [...services]
    .sort((a, b) => a.order - b.order)
    .map((s) => ({
      title: s.title[locale.value as 'de' | 'en'],
      to:
        locale.value === 'de'
          ? `/leistungen/${s.slug.de}`
          : `/en/services/${s.slug.en}`,
    })),
)

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  (open) => {
    if (!import.meta.client) return
    document.documentElement.classList.toggle('lenis-stopped', open)
    if (open) {
      window.addEventListener('keydown', onKeydown)
      nextTick(() => drawer.value?.focus())
    } else {
      window.removeEventListener('keydown', onKeydown)
    }
  },
)

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', onKeydown)
    document.documentElement.classList.remove('lenis-stopped')
  }
})
</script>

<template>
  <Transition name="drawer">
    <div
      v-if="open"
      ref="drawer"
      class="drawer"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
    >
      <nav class="drawer__nav container">
        <ul class="drawer__list">
          <li>
            <NuxtLink :to="localePath('ueber-uns')" class="drawer__link title-3" @click="emit('close')">
              {{ t('nav.about') }}
            </NuxtLink>
          </li>
          <li v-for="s in serviceLinks" :key="s.to">
            <NuxtLink :to="s.to" class="drawer__link title-3" @click="emit('close')">
              {{ s.title }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('kontakt')" class="drawer__link title-3" @click="emit('close')">
              {{ t('nav.contact') }}
            </NuxtLink>
          </li>
        </ul>
        <div class="drawer__foot">
          <LangSwitch />
        </div>
      </nav>
    </div>
  </Transition>
</template>

<style scoped>
.drawer {
  position: fixed;
  inset: 0;
  z-index: 150;
  background: var(--color-ink);
  color: var(--color-white);
  display: flex;
  align-items: center;
  padding-top: var(--header-h);
  overflow-y: auto;
}
.drawer__nav {
  width: 100%;
  padding-block: clamp(24px, 5vw, 64px);
}
.drawer__list {
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 1vw, 12px);
}
.drawer__link {
  display: inline-block;
  color: var(--color-white);
  opacity: 0.75;
  transition:
    opacity 0.35s var(--ease),
    transform 0.35s var(--ease);
}
.drawer__link:hover,
.drawer__link.router-link-active {
  opacity: 1;
  transform: translateX(12px);
  color: var(--color-accent);
}
.drawer__foot {
  margin-top: clamp(28px, 5vw, 56px);
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.4s var(--ease);
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
</style>
