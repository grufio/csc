<script setup lang="ts">
import { services } from '~/data/services'
import { serviceContent } from '~/data/serviceContent'
import { chinaProcess } from '~/data/process'
import { connectorBrands } from '~/data/brands'

definePageMeta({ name: 'leistungen/[slug]' })

const route = useRoute()
const { locale, t } = useI18n()
const loc = computed(() => locale.value as 'de' | 'en')

const slug = computed(() => String(route.params.slug))

const service = computed(() =>
  services.find((s) => s.slug.de === slug.value || s.slug.en === slug.value),
)

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found', fatal: true })
}

const meta = computed(() => service.value!)
const page = computed(() => serviceContent[meta.value.key])

const root = ref<HTMLElement | null>(null)
useReveal(root)

const titleLines = computed(() => meta.value.title[loc.value].split(' & '))

const processSteps = computed(() =>
  chinaProcess.map((s) => ({ no: s.no, title: s.title[loc.value], text: s.text[loc.value] })),
)

useSeoMeta({
  title: () => meta.value.title[loc.value],
  description: () => page.value.intro[loc.value],
})
</script>

<template>
  <div ref="root">
    <HeroIntro
      :eyebrow="page.eyebrow?.[loc]"
      :title-lines="titleLines"
      :intro="page.intro[loc]"
    />

    <div class="section--tight container">
      <ImageReveal :src="`/images/services/${meta.key}.jpg`" :alt="meta.title[loc]" ratio="16 / 9" />
    </div>

    <template v-for="(block, i) in page.blocks" :key="i">
      <section v-if="block.type === 'text'" class="stext section--tight container">
        <h2 v-if="block.heading" class="title-3" data-reveal>{{ block.heading[loc] }}</h2>
        <p class="stext__body body-lg" data-reveal data-reveal-delay="0.08">{{ block.body[loc] }}</p>
      </section>

      <FeatureList
        v-else-if="block.type === 'features'"
        :heading="block.heading?.[loc]"
        :items="block.items[loc]"
        :columns="block.columns"
      />

      <SpecsGrid
        v-else-if="block.type === 'specs'"
        :heading="block.heading?.[loc]"
        :groups="block.groups.map((g) => ({ name: g.name[loc], items: g.items[loc] }))"
      />

      <ProcessSteps
        v-else-if="block.type === 'process'"
        :eyebrow="block.heading?.[loc] ?? t('meta.processTitle')"
        :steps="processSteps"
      />

      <BrandMarquee
        v-else-if="block.type === 'brands'"
        :title="block.heading?.[loc] ?? t('meta.brandsTitle')"
        :items="connectorBrands"
      />
    </template>

    <ContactBlock variant="cta" />
  </div>
</template>

<style scoped>
.stext {
  display: grid;
  gap: clamp(16px, 2vw, 28px);
}
.stext__body {
  max-width: 54ch;
  color: var(--color-mute);
}
</style>
