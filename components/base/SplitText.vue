<script setup lang="ts">
const props = defineProps<{
  lines: string[]
  tag?: string
  class?: string
  stagger?: number
}>()

const el = ref<HTMLElement | null>(null)
useSplitReveal(el, { stagger: props.stagger ?? 0.09 })
</script>

<template>
  <component :is="tag ?? 'h2'" ref="el" :class="props.class">
    <span v-for="(line, i) in lines" :key="i" class="split-line">
      <span>{{ line }}</span>
    </span>
  </component>
</template>
