<script setup lang="ts">
import { services } from '~/data/services'
import { site } from '~/data/site'

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

function lock(state: boolean) {
  if (!import.meta.client) return
  document.documentElement.classList.toggle('lenis-stopped', state)
  document.body.style.overflow = state ? 'hidden' : ''
}

watch(
  () => props.open,
  (open) => {
    if (!import.meta.client) return
    lock(open)
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
    lock(false)
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
      <div class="drawer__inner container">
        <nav class="drawer__nav">
          <ul class="drawer__list">
            <li class="drawer__item">
              <NuxtLink :to="localePath('ueber-uns')" class="drawer__link title-3" @click="emit('close')">
                <span>{{ t('nav.about') }}</span>
              </NuxtLink>
            </li>
            <li v-for="s in serviceLinks" :key="s.to" class="drawer__item">
              <NuxtLink :to="s.to" class="drawer__link title-3" @click="emit('close')">
                <span>{{ s.title }}</span>
              </NuxtLink>
            </li>
            <li class="drawer__item">
              <NuxtLink :to="localePath('kontakt')" class="drawer__link title-3" @click="emit('close')">
                <span>{{ t('nav.contact') }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="drawer__foot">
          <address class="drawer__addr caption">
            {{ site.address.street }}, {{ site.address.zip }} {{ site.address.city }}<br >
            <a :href="`mailto:${site.emails.general}`">{{ site.emails.general }}</a>
            · <a :href="`tel:${site.phone.replace(/\s/g, '')}`">{{ site.phone }}</a>
          </address>
          <LangSwitch />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.drawer {
  position: fixed;
  inset: 0;
  z-index: 1;
  background: var(--color-ink);
  color: var(--color-ivory-50);
  display: flex;
  overflow-y: auto;
}
.drawer__inner {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: calc(var(--header-h) + clamp(24px, 5vw, 64px));
  padding-bottom: clamp(24px, 4vw, 48px);
}
.drawer__list {
  display: flex;
  flex-direction: column;
}
.drawer__item {
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}
.drawer__item:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}
.drawer__link {
  display: block;
  padding: clamp(10px, 1.4vw, 18px) 0;
  color: var(--color-ivory-50);
  transition: color 0.35s var(--ease);
}
.drawer__link span {
  display: inline-block;
  transition: transform 0.45s var(--ease);
}
.drawer__link:hover {
  color: var(--color-red);
}
@media (hover: hover) {
  .drawer__link:hover span {
    transform: translateX(16px);
  }
}
.drawer__foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-top: clamp(32px, 5vw, 64px);
  color: rgba(255, 255, 255, 0.6);
}
.drawer__addr {
  font-style: normal;
  line-height: 1.6;
}
.drawer__addr a:hover {
  color: var(--color-ivory-50);
}

/* staggered link entrance */
.drawer__link span {
  transform: translateY(110%);
}
.drawer-enter-active .drawer__link span {
  transition: transform 0.7s var(--ease);
}
.drawer-enter-from .drawer__link span,
.drawer-leave-to .drawer__link span {
  transform: translateY(110%);
}
.drawer-enter-to .drawer__link span {
  transform: translateY(0);
}
.drawer__item:nth-child(1) .drawer__link span { transition-delay: 0.05s; }
.drawer__item:nth-child(2) .drawer__link span { transition-delay: 0.1s; }
.drawer__item:nth-child(3) .drawer__link span { transition-delay: 0.15s; }
.drawer__item:nth-child(4) .drawer__link span { transition-delay: 0.2s; }
.drawer__item:nth-child(5) .drawer__link span { transition-delay: 0.25s; }
.drawer__item:nth-child(6) .drawer__link span { transition-delay: 0.3s; }
.drawer__item:nth-child(7) .drawer__link span { transition-delay: 0.35s; }
.drawer__item:nth-child(8) .drawer__link span { transition-delay: 0.4s; }
.drawer__item:nth-child(9) .drawer__link span { transition-delay: 0.45s; }

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.5s var(--ease);
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .drawer__link span {
    transform: none !important;
    transition: none !important;
  }
}
</style>
