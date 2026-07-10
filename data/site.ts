export interface SiteInfo {
  name: string
  legalName: string
  slogan: Record<'de' | 'en', string>
  tagline: string
  address: {
    street: string
    zip: string
    city: string
    country: Record<'de' | 'en', string>
  }
  phone: string
  emails: { general: string; sales: string; accounting: string }
  yearsInBusiness: number
}

export const site: SiteInfo = {
  name: 'CSC',
  legalName: 'CSC Electronic AG',
  slogan: {
    de: 'Wir sind Ihr Lieferant für elektronische Komponenten',
    en: 'Your supplier for electronic components',
  },
  tagline: 'TRY US — WE TRY HARDER',
  address: {
    street: 'Höhenring 7',
    zip: 'CH-8052',
    city: 'Zürich',
    country: { de: 'Schweiz', en: 'Switzerland' },
  },
  phone: '+41 44 301 24 34',
  emails: {
    general: 'info@csc.ch',
    sales: 'verkauf@csc.ch',
    accounting: 'buchhaltung@csc.ch',
  },
  yearsInBusiness: 30,
}
