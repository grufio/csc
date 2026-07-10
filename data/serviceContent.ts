import { chinaProcess } from './process'
import { connectorBrands } from './brands'

type L = Record<'de' | 'en', string>
type LList = Record<'de' | 'en', string[]>

export type Block =
  | { type: 'text'; heading?: L; body: L }
  | { type: 'features'; heading?: L; items: LList; columns?: number }
  | { type: 'process'; heading?: L }
  | { type: 'brands'; heading?: L }
  | { type: 'specs'; heading?: L; groups: { name: L; items: LList }[] }

export interface ServicePage {
  eyebrow?: L
  intro: L
  image: { src: string; alt: L } | null
  blocks: Block[]
}

export const serviceContent: Record<string, ServicePage> = {
  'elektronische-komponenten': {
    eyebrow: { de: 'Kernleistung', en: 'Core service' },
    intro: {
      de: 'Als professioneller, unabhängiger Lieferant vertreiben wir aktive, passive und elektromechanische Komponenten namhafter Hersteller weltweit.',
      en: 'As a professional, independent supplier we distribute active, passive and electromechanical components from renowned manufacturers worldwide.',
    },
    image: { src: '/images/integrated-circuits.jpg', alt: { de: 'Integrierte Schaltkreise', en: 'Integrated circuits' } },
    blocks: [
      {
        type: 'text',
        heading: { de: 'Partner statt Lieferant', en: 'Partner, not just supplier' },
        body: {
          de: 'Wir verstehen uns als Partner und unterstützen bei Beschaffungsthemen unterschiedlicher Komplexität — von der Anfrage bis zur Auftragsabwicklung.',
          en: 'We see ourselves as partners and support procurement matters of varying complexity — from enquiry through to order fulfilment.',
        },
      },
      {
        type: 'features',
        heading: { de: 'Was uns auszeichnet', en: 'What sets us apart' },
        items: {
          de: [
            'Weltweites Lieferantennetzwerk',
            'Eigene Einkaufsorganisation in China',
            'Professionelle technische Unterstützung',
            'Kundenorientiertes, transparentes Vorgehen',
          ],
          en: [
            'Global supplier network',
            'Own purchasing organisation in China',
            'Professional technical support',
            'Customer-focused, transparent approach',
          ],
        },
      },
    ],
  },

  'displays-touchscreen': {
    eyebrow: { de: 'Displays', en: 'Displays' },
    intro: {
      de: 'Langjährige Erfahrung in der Beschaffung von Displays namhafter Hersteller über unsere Einkaufsorganisation in China — für verlässliche Verfügbarkeit.',
      en: 'Years of experience sourcing displays from renowned makers via our purchasing organisation in China — for reliable availability.',
    },
    image: { src: '/images/integrated-circuits.jpg', alt: { de: 'Display-Technologie', en: 'Display technology' } },
    blocks: [
      {
        type: 'text',
        heading: { de: 'Touchscreen — Gesamtlösungen', en: 'Touchscreen — total solutions' },
        body: {
          de: 'Wir sind Ihr Ansprechpartner für Touchscreen-Lösungen und entwickeln mit chinesischen Fertigungspartnern massgeschneiderte Angebote. Technische Abstimmung direkt mit der Fabrik.',
          en: 'We are your contact for touchscreen solutions and develop tailored offerings with Chinese manufacturing partners. Technical coordination directly with the factory.',
        },
      },
      {
        type: 'specs',
        heading: { de: 'Technologien', en: 'Technologies' },
        groups: [
          {
            name: { de: 'PCAP', en: 'PCAP' },
            items: {
              de: ['Glass/Glass & Glass/Film/Film', 'Grössen 1.8" – 32"', 'Multi-Touch fähig'],
              en: ['Glass/Glass & Glass/Film/Film', 'Sizes 1.8" – 32"', 'Multi-touch capable'],
            },
          },
          {
            name: { de: 'TFT Display', en: 'TFT display' },
            items: {
              de: ['Grössen 1.77" – 15.6"', 'COG/FOG-Automation im Haus', 'Anpassung von LCD, Backlight, FPC'],
              en: ['Sizes 1.77" – 15.6"', 'In-house COG/FOG automation', 'LCD, backlight & FPC customisation'],
            },
          },
          {
            name: { de: 'Produktlinien', en: 'Product lines' },
            items: {
              de: ['OCA, OCR & Silikon', 'Grössen 1.8" – 32"', 'Marine-Zuverlässigkeitstests'],
              en: ['OCA, OCR & silicone', 'Sizes 1.8" – 32"', 'Marine reliability testing'],
            },
          },
        ],
      },
    ],
  },

  'stecker-kabelkonfektion': {
    eyebrow: { de: '«WE CONNECT»', en: '“WE CONNECT”' },
    intro: {
      de: 'Wir verstehen das Stecker- und Konfektionsgeschäft — von der Einzelkomponente bis zur kompletten Kabelkonfektion.',
      en: 'We understand the connector and assembly business — from the single component to complete cable assembly.',
    },
    image: null,
    blocks: [
      { type: 'brands', heading: { de: 'Marken', en: 'Brands' } },
      {
        type: 'features',
        heading: { de: 'Leistungen', en: 'Services' },
        items: {
          de: [
            'Partnerschaft mit chinesischen Lieferanten mit umfangreichem Lagerbestand',
            'Kurzfristige Belieferung über Lager oder asiatische OEM-Partner',
            'Unterstützung bei Konfektions- und abgekündigten Steckern',
          ],
          en: [
            'Partnership with Chinese suppliers holding extensive stock',
            'Short-term supply from warehouse or Asian OEM partners',
            'Support with assembly and discontinued connectors',
          ],
        },
      },
    ],
  },

  'obsolete-bauteile': {
    eyebrow: { de: 'Obsoleszenz', en: 'Obsolescence' },
    intro: {
      de: 'Wir finden abgekündigte elektronische Komponenten über unser weltweites Einkaufsnetzwerk und übernehmen den gesamten Beschaffungsprozess.',
      en: 'We find discontinued electronic components via our global purchasing network and manage the entire procurement process.',
    },
    image: null,
    blocks: [
      {
        type: 'process',
        heading: { de: 'Unser Vorgehen', en: 'Our process' },
      },
    ],
  },

  'china-fertigung': {
    eyebrow: { de: 'Made in China', en: 'Made in China' },
    intro: {
      de: 'Lassen Sie in China herstellen. Wir übernehmen Beschaffung, Produktentwicklung, Qualitätskontrolle und Logistik über einen qualifizierten lokalen Partner.',
      en: 'Have it manufactured in China. We handle procurement, product development, quality control and logistics via a qualified local partner.',
    },
    image: { src: '/images/integrated-circuits.jpg', alt: { de: 'Fertigung', en: 'Manufacturing' } },
    blocks: [
      {
        type: 'features',
        heading: { de: 'Entwicklung & Engineering', en: 'Development & engineering' },
        items: {
          de: [
            'Mechanikdesign (2D/3D)',
            'Elektronische Baugruppen',
            'Hardware- & Softwareentwicklung',
            'Prototyping & Erstserien',
            'Qualitätsprüfungen vor Ort',
          ],
          en: [
            'Mechanical design (2D/3D)',
            'Electronic assemblies',
            'Hardware & software development',
            'Prototyping & first production runs',
            'On-site quality inspections',
          ],
        },
      },
      { type: 'process', heading: { de: 'Entwicklungsprozess', en: 'Development process' } },
    ],
  },

  'testen-pruefen-programmieren': {
    eyebrow: { de: 'Services', en: 'Services' },
    intro: {
      de: 'Sie wollen Ihre Produkte testen, modifizieren oder analysieren, haben aber die Kapazität dafür nicht? Wir unterstützen Sie.',
      en: 'You want to test, modify or analyse your products but lack the capacity? We support you.',
    },
    image: null,
    blocks: [
      {
        type: 'features',
        heading: { de: 'Leistungen', en: 'Services' },
        columns: 2,
        items: {
          de: [
            'Testen',
            'Analyse',
            'Programmieren',
            'Tape & Reel',
            'Bauteilselektion',
            'Kundenspezifische Beschriftung',
            'Wafer-Housing-Prozesse',
          ],
          en: [
            'Testing',
            'Analysis',
            'Programming',
            'Tape & reel',
            'Component selection',
            'Custom labelling',
            'Wafer housing processes',
          ],
        },
      },
      {
        type: 'text',
        body: {
          de: 'Sie benötigen eine hier nicht aufgeführte Leistung? Sprechen Sie uns direkt an — wir sind flexibel.',
          en: 'Need a service not listed here? Talk to us directly — we are flexible.',
        },
      },
    ],
  },

  'supply-management': {
    eyebrow: { de: 'Logistik', en: 'Logistics' },
    intro: {
      de: 'Unterstützung entlang der Supply-Chain für KMU, die mit komplexen geopolitischen Herausforderungen konfrontiert sind.',
      en: 'Support across the supply chain for SMEs facing complex geopolitical challenges.',
    },
    image: null,
    blocks: [
      {
        type: 'features',
        heading: { de: 'Leistungen', en: 'Services' },
        columns: 2,
        items: {
          de: [
            'Logistiklösungen',
            'Rahmenaufträge',
            'Konsignationslager',
            'Kitting',
            'C-Teile Management',
            'Konsolidierung von Lieferanten',
          ],
          en: [
            'Logistics solutions',
            'Framework orders',
            'Consignment warehousing',
            'Kitting',
            'C-parts management',
            'Supplier consolidation',
          ],
        },
      },
      {
        type: 'text',
        body: {
          de: 'Als unabhängiger Distributor bieten wir partnerschaftliche, auf Ihre Bedürfnisse zugeschnittene Unterstützung — Flexibilität als zentrale Stärke.',
          en: 'As an independent distributor we offer partnership-based support tailored to your needs — flexibility as our core strength.',
        },
      },
    ],
  },
}

export { chinaProcess, connectorBrands }
