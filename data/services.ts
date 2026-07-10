export interface ServiceMeta {
  key: string
  order: number
  slug: Record<'de' | 'en', string>
  title: Record<'de' | 'en', string>
  short: Record<'de' | 'en', string>
}

/**
 * Ordered index of the seven CSC service areas. Prose for each lives in
 * content/{de,en}/services/<key>.md; this index drives the nav, the home
 * service grid and the localized route slug map.
 */
export const services: ServiceMeta[] = [
  {
    key: 'elektronische-komponenten',
    order: 1,
    slug: {
      de: 'elektronische-komponenten-und-dienstleistungen',
      en: 'electronic-components-services',
    },
    title: {
      de: 'Elektronische Komponenten & Dienstleistungen',
      en: 'Electronic Components & Services',
    },
    short: {
      de: 'Aktive, passive und elektromechanische Bauelemente namhafter Hersteller.',
      en: 'Active, passive and electromechanical components from renowned makers.',
    },
  },
  {
    key: 'displays-touchscreen',
    order: 2,
    slug: { de: 'displays-und-touchscreen', en: 'displays-touchscreen' },
    title: { de: 'Displays & Touchscreen', en: 'Displays & Touchscreen' },
    short: {
      de: 'Displays und massgeschneiderte Touchscreen-Gesamtlösungen.',
      en: 'Displays and tailored total touchscreen solutions.',
    },
  },
  {
    key: 'stecker-kabelkonfektion',
    order: 3,
    slug: { de: 'stecker-und-kabelkonfektion', en: 'connectors-cable-assembly' },
    title: { de: 'Stecker & Kabelkonfektion', en: 'Connectors & Cable Assembly' },
    short: {
      de: 'Stecker führender Marken und komplette Konfektion. «WE CONNECT»',
      en: 'Connectors from leading brands and full assembly. “WE CONNECT”',
    },
  },
  {
    key: 'obsolete-bauteile',
    order: 4,
    slug: { de: 'obsolete-bauteile', en: 'obsolete-components' },
    title: { de: 'Obsolete Bauteile', en: 'Obsolete Components' },
    short: {
      de: 'Abgekündigte Komponenten über unser weltweites Einkaufsnetzwerk.',
      en: 'Discontinued components via our global purchasing network.',
    },
  },
  {
    key: 'china-fertigung',
    order: 5,
    slug: { de: 'produkte-in-china-herstellen', en: 'manufacturing-in-china' },
    title: { de: 'Produkte in China herstellen', en: 'Manufacturing in China' },
    short: {
      de: 'Von der Machbarkeit bis zur Serie — Entwicklung und Fertigung.',
      en: 'From feasibility to series — development and production.',
    },
  },
  {
    key: 'testen-pruefen-programmieren',
    order: 6,
    slug: { de: 'testen-pruefen-programmieren', en: 'testing-inspection-programming' },
    title: { de: 'Testen, Prüfen, Programmieren', en: 'Testing, Inspection, Programming' },
    short: {
      de: 'Testen, Analyse, Programmierung, Tape & Reel und mehr.',
      en: 'Testing, analysis, programming, tape & reel and more.',
    },
  },
  {
    key: 'supply-management',
    order: 7,
    slug: { de: 'csc-supply-management', en: 'supply-management-logistics' },
    title: { de: 'CSC Supply Management', en: 'CSC Supply Management' },
    short: {
      de: 'Logistik, Rahmenaufträge, Konsignation, Kitting, C-Teile.',
      en: 'Logistics, framework orders, consignment, kitting, C-parts.',
    },
  },
]

export function servicePath(meta: ServiceMeta, locale: 'de' | 'en'): string {
  return locale === 'de'
    ? `/leistungen/${meta.slug.de}`
    : `/en/services/${meta.slug.en}`
}
