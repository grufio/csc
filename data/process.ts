export interface ProcessStep {
  key: string
  no: string
  title: Record<'de' | 'en', string>
  text: Record<'de' | 'en', string>
}

/** Five-phase development & production process for "Manufacturing in China". */
export const chinaProcess: ProcessStep[] = [
  {
    key: 'feasibility',
    no: '01',
    title: { de: 'Machbarkeitsstudie', en: 'Feasibility study' },
    text: {
      de: 'Markt- und Konzeptrecherche als Grundlage für die Entwicklung.',
      en: 'Market and concept research as the basis for development.',
    },
  },
  {
    key: 'alpha',
    no: '02',
    title: { de: 'Alpha-Phase', en: 'Alpha phase' },
    text: {
      de: 'Verfeinerung des Prototyps im Produktionsmassstab.',
      en: 'Prototype refinement at production scale.',
    },
  },
  {
    key: 'beta',
    no: '03',
    title: { de: 'Beta-Phase', en: 'Beta phase' },
    text: {
      de: 'Finalisierung des vollständigen Industriedesigns.',
      en: 'Finalisation of the complete industrial design.',
    },
  },
  {
    key: 'test',
    no: '04',
    title: { de: 'Testphase', en: 'Testing phase' },
    text: {
      de: 'Validierung für Form, Passung und Funktion.',
      en: 'Validation for form, fit and function.',
    },
  },
  {
    key: 'series',
    no: '05',
    title: { de: 'Serienproduktion', en: 'Mass production' },
    text: {
      de: 'Kontinuierliche Prozessüberwachung in der Serie.',
      en: 'Continuous process monitoring in series production.',
    },
  },
]
