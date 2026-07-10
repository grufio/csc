// Central site data for CSC Electronic AG — single source of truth for
// company info, navigation and the service categories.

export const company = {
  name: 'CSC Electronic AG',
  slogan: 'Wir sind Ihr Lieferant für elektronische Komponenten',
  tagline: 'TRY US – WE TRY HARDER',
  street: 'Höhenring 7',
  city: 'CH-8052 Zürich',
  country: 'Schweiz',
  phone: '+41 44 301 24 34',
  phoneHref: 'tel:+41443012434',
  emails: {
    general: 'info@csc.ch',
    sales: 'verkauf@csc.ch',
    accounting: 'buchhaltung@csc.ch',
  },
};

export type ServiceItem = {
  slug: string;
  title: string;
  short: string; // teaser used on the homepage tile
};

// The 7 service categories (order matches the original site).
export const services: ServiceItem[] = [
  {
    slug: 'elektronische-komponenten-und-dienstleistungen',
    title: 'Elektronische Komponenten & Dienstleistungen',
    short: 'Aktive, passive und elektromechanische Komponenten namhafter Hersteller — weltweit beschafft.',
  },
  {
    slug: 'displays-und-touchscreen',
    title: 'Displays & Touchscreen',
    short: 'Displays namhafter Hersteller und kundenspezifische Touchscreen-Gesamtlösungen.',
  },
  {
    slug: 'stecker-und-kabelkonfektion',
    title: 'Stecker & Kabelkonfektion',
    short: 'Steckverbinder führender Marken und massgeschneiderte Konfektion. WE CONNECT.',
  },
  {
    slug: 'obsolete-bauteile',
    title: 'Obsolete Bauteile',
    short: 'Abgekündigte Komponenten über unser weltweites Netzwerk — geprüft und zertifiziert.',
  },
  {
    slug: 'produkte-in-china-herstellen',
    title: 'Produkte in China herstellen',
    short: 'Beschaffung, Entwicklung, Qualitätskontrolle und Logistik über qualifizierte Partner.',
  },
  {
    slug: 'testen-pruefen-programmieren',
    title: 'Testen, Prüfen, Programmieren',
    short: 'Testen, Analyse, Programmierung, Tape & Reel und kundenspezifisches Labeling.',
  },
  {
    slug: 'csc-supply-management-logistik',
    title: 'CSC Supply Management',
    short: 'Supply-Chain-Unterstützung: Rahmenaufträge, Konsignation, Kitting, C-Teile-Management.',
  },
];

// Primary navigation (header). "Über uns" + services + Kontakt.
export const nav = [
  { href: '/wir-ueber-uns', label: 'Über uns' },
  ...services.map((s) => ({ href: `/${s.slug}`, label: s.title })),
  { href: '/kontakt', label: 'Kontakt' },
];
