// Types of floor heating
export interface VloerverwarmingType {
  id: string;
  naam: string;
  beschrijving: string;
  prijsPerM2Min: number;
  prijsPerM2Max: number;
  installatiekosten: number; // per m2
  levensduur: number; // jaren
  opwarmtijd: string;
  geschiktVoor: string[];
  energielabel: string;
  zelfDoen: boolean;
}

export const vloerverwarmingTypes: VloerverwarmingType[] = [
  {
    id: 'water',
    naam: 'Watervloerverwarming',
    beschrijving: 'Warm water circuleert door leidingen in de vloer. De meest populaire en energie-efficiënte optie, ideaal in combinatie met een warmtepomp.',
    prijsPerM2Min: 40,
    prijsPerM2Max: 75,
    installatiekosten: 25,
    levensduur: 50,
    opwarmtijd: '1-3 uur',
    geschiktVoor: ['Nieuwbouw', 'Grote renovatie', 'Warmtepomp'],
    energielabel: 'A+',
    zelfDoen: false,
  },
  {
    id: 'elektrisch',
    naam: 'Elektrische vloerverwarming',
    beschrijving: 'Verwarmingsmatten of -kabels onder de vloer. Snel te installeren en ideaal als bijverwarming in specifieke ruimtes.',
    prijsPerM2Min: 30,
    prijsPerM2Max: 60,
    installatiekosten: 15,
    levensduur: 25,
    opwarmtijd: '20-30 minuten',
    geschiktVoor: ['Renovatie', 'Badkamer', 'Keuken', 'Bijverwarming'],
    energielabel: 'B',
    zelfDoen: true,
  },
  {
    id: 'infrarood',
    naam: 'Infrarood vloerverwarming',
    beschrijving: 'Dunne infraroodfolie onder de vloer. Ultra-dun en eenvoudig te installeren, vooral populair bij laminaat en parket.',
    prijsPerM2Min: 35,
    prijsPerM2Max: 55,
    installatiekosten: 10,
    levensduur: 30,
    opwarmtijd: '15-20 minuten',
    geschiktVoor: ['Renovatie', 'Laminaat', 'Parket', 'Doe-het-zelf'],
    energielabel: 'B+',
    zelfDoen: true,
  },
  {
    id: 'droog-systeem',
    naam: 'Droog systeem (noppenplaten)',
    beschrijving: 'Watervloerverwarming zonder dekvloer. Leidingen worden in gefreesde platen gelegd, ideaal voor renovatie met beperkte opbouwhoogte.',
    prijsPerM2Min: 55,
    prijsPerM2Max: 90,
    installatiekosten: 20,
    levensduur: 40,
    opwarmtijd: '30-60 minuten',
    geschiktVoor: ['Renovatie', 'Lage opbouwhoogte', 'Houten vloer'],
    energielabel: 'A',
    zelfDoen: false,
  },
];

// Room types with specific advice
export interface RuimteAdvies {
  id: string;
  naam: string;
  beschrijving: string;
  aanbevalenType: string;
  m2Gemiddeld: number;
  bijzonderheden: string[];
  geschikteVloeren: string[];
}

export const ruimteAdviezen: RuimteAdvies[] = [
  {
    id: 'woonkamer',
    naam: 'Woonkamer',
    beschrijving: 'De woonkamer is de belangrijkste ruimte voor vloerverwarming. Kies voor watervloerverwarming als hoofdverwarming.',
    aanbevalenType: 'water',
    m2Gemiddeld: 35,
    bijzonderheden: ['Hoofdverwarming mogelijk', 'Combineer met warmtepomp', 'Let op meubels en vloerkleden'],
    geschikteVloeren: ['Tegels', 'Natuursteen', 'PVC', 'Laminaat (max 0.09 m²K/W)'],
  },
  {
    id: 'badkamer',
    naam: 'Badkamer',
    beschrijving: 'Perfecte ruimte voor vloerverwarming. Altijd warme voeten en geen condensvorming.',
    aanbevalenType: 'elektrisch',
    m2Gemiddeld: 8,
    bijzonderheden: ['Ideaal voor elektrisch', 'Waterdichte installatie vereist', 'Thermostaat met vochtbestendigheid'],
    geschikteVloeren: ['Tegels', 'Natuursteen', 'Gietvloer'],
  },
  {
    id: 'keuken',
    naam: 'Keuken',
    beschrijving: 'Prettig warm in de keuken waar je vaak staat. Let op de positie van keukenapparatuur.',
    aanbevalenType: 'water',
    m2Gemiddeld: 15,
    bijzonderheden: ['Niet onder keukenkastjes', 'Combineer met woonkamer-circuit', 'Extra isolatie bij buitenmuur'],
    geschikteVloeren: ['Tegels', 'PVC', 'Gietvloer'],
  },
  {
    id: 'slaapkamer',
    naam: 'Slaapkamer',
    beschrijving: 'Comfortabel warm opstaan. Lager temperatuurinstelling dan woonkamer gewenst.',
    aanbevalenType: 'water',
    m2Gemiddeld: 14,
    bijzonderheden: ['Lagere temperatuur (18°C)', 'Nachtverlaging programmeren', 'Let op tapijt/vloerkleed'],
    geschikteVloeren: ['Laminaat', 'PVC', 'Tapijt (dunne variant)'],
  },
];

// Subsidie info
export interface SubsidieInfo {
  naam: string;
  bedrag: string;
  voorwaarden: string[];
  geldigTot: string;
  url: string;
}

export const subsidies: SubsidieInfo[] = [
  {
    naam: 'ISDE - Investeringssubsidie Duurzame Energie',
    bedrag: '€ 1.000 - € 3.300 (afhankelijk van type warmtepomp)',
    voorwaarden: [
      'Combinatie met warmtepomp vereist',
      'Woning moet bestaande bouw zijn',
      'Installatie door erkend installateur',
      'Minimaal energielabel D of beter na installatie',
    ],
    geldigTot: '31 december 2026',
    url: 'https://www.rvo.nl/subsidies-financiering/isde',
  },
  {
    naam: 'Nationaal Warmtefonds - Energiebespaarlening',
    bedrag: 'Lening tot € 25.000 tegen 0% rente',
    voorwaarden: [
      'Voor woningeigenaren',
      'Combinatie met isolatie mogelijk',
      'Geen inkomenseis',
    ],
    geldigTot: '31 december 2026',
    url: 'https://www.nationaalwarmtefonds.nl',
  },
];

// Cost data for calculator
export interface KostenIndicatie {
  onderdeel: string;
  prijsPerM2Min: number;
  prijsPerM2Max: number;
  eenmalig: boolean;
}

export const kostenOverzicht: KostenIndicatie[] = [
  { onderdeel: 'Materiaal watervloerverwarming', prijsPerM2Min: 40, prijsPerM2Max: 75, eenmalig: true },
  { onderdeel: 'Materiaal elektrische vloerverwarming', prijsPerM2Min: 30, prijsPerM2Max: 60, eenmalig: true },
  { onderdeel: 'Installatie (arbeidskosten)', prijsPerM2Min: 15, prijsPerM2Max: 35, eenmalig: true },
  { onderdeel: 'Dekvloer / afwerking', prijsPerM2Min: 15, prijsPerM2Max: 30, eenmalig: true },
  { onderdeel: 'Thermostaat (per zone)', prijsPerM2Min: 0, prijsPerM2Max: 0, eenmalig: true },
  { onderdeel: 'Energiekosten water (per jaar)', prijsPerM2Min: 2, prijsPerM2Max: 4, eenmalig: false },
  { onderdeel: 'Energiekosten elektrisch (per jaar)', prijsPerM2Min: 4, prijsPerM2Max: 8, eenmalig: false },
];

// Voordelen en nadelen
export interface VoordeelNadeel {
  tekst: string;
  type: 'voordeel' | 'nadeel';
  categorie: string;
}

export const voordelenNadelen: VoordeelNadeel[] = [
  { tekst: 'Gelijkmatige warmteverdeling door de hele ruimte', type: 'voordeel', categorie: 'Comfort' },
  { tekst: 'Geen zichtbare radiatoren - meer ruimte en designvrijheid', type: 'voordeel', categorie: 'Comfort' },
  { tekst: 'Gezonder binnenklimaat - minder stofcirculatie', type: 'voordeel', categorie: 'Gezondheid' },
  { tekst: 'Altijd warme voeten - extra prettig in badkamer en keuken', type: 'voordeel', categorie: 'Comfort' },
  { tekst: 'Tot 30% lager energieverbruik dan radiatoren', type: 'voordeel', categorie: 'Energie' },
  { tekst: 'Ideaal in combinatie met warmtepomp (lage temperatuur)', type: 'voordeel', categorie: 'Energie' },
  { tekst: 'Lange levensduur (30-50 jaar voor watersystemen)', type: 'voordeel', categorie: 'Kosten' },
  { tekst: 'Verhoogt de woningwaarde', type: 'voordeel', categorie: 'Kosten' },
  { tekst: 'Hogere aanschafkosten dan radiatoren', type: 'nadeel', categorie: 'Kosten' },
  { tekst: 'Langere opwarmtijd (1-3 uur voor watersystemen)', type: 'nadeel', categorie: 'Comfort' },
  { tekst: 'Niet alle vloerbedekking is geschikt', type: 'nadeel', categorie: 'Installatie' },
  { tekst: 'Complexe installatie bij bestaande bouw', type: 'nadeel', categorie: 'Installatie' },
  { tekst: 'Opbouwhoogte nodig (4-10 cm bij nat systeem)', type: 'nadeel', categorie: 'Installatie' },
  { tekst: 'Reparatie bij lekkage lastig (water systeem)', type: 'nadeel', categorie: 'Onderhoud' },
  { tekst: 'Niet ideaal als enige verwarming in slecht geïsoleerde woningen', type: 'nadeel', categorie: 'Energie' },
];
