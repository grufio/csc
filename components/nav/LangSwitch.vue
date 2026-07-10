<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const options = computed(() =>
  (locales.value as { code: string; name: string }[]).map((l) => ({
    code: l.code,
    name: l.code.toUpperCase(),
    to: switchLocalePath(l.code),
  })),
)
</script>

<template>
  <div class="lang">
    <template v-for="(o, i) in options" :key="o.code">
      <NuxtLink
        :to="o.to"
        class="lang__item"
        :class="{ 'is-active': o.code === locale }"
      >{{ o.name }}</NuxtLink>
      <span v-if="i < options.length - 1" class="lang__sep" aria-hidden="true">/</span>
    </template>
  </div>
</template>

<style scoped>
.lang {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--caption);
  letter-spacing: 0.08em;
}
.lang__item {
  opacity: 0.5;
  transition: opacity 0.3s var(--ease);
}
.lang__item.is-active,
.lang__item:hover {
  opacity: 1;
}
.lang__sep {
  opacity: 0.3;
}
</style>
