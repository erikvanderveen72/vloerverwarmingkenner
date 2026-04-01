/**
 * Cost calculation interface
 */
export interface KostenBerekening {
  materiaalkosten: number;
  installatiekosten: number;
  dekvloerkosten: number;
  thermostaatKosten: number;
  totaalEenmalig: number;
  jaarlijkseEnergiekosten: number;
  terugverdientijd: number;
}

/**
 * Calculate total costs for floor heating installation
 * @param oppervlakte - Total floor area in m²
 * @param type - Type of floor heating system
 * @param aantalZones - Number of heating zones (default 1)
 * @returns Cost breakdown with annual energy costs and payback period
 */
export function berekenKosten(
  oppervlakte: number,
  type: 'water' | 'elektrisch' | 'infrarood' | 'droog',
  aantalZones: number = 1
): KostenBerekening {
  // Price data based on Dutch market (2026)
  const prijzen = {
    water: {
      materiaal: [40, 75],
      installatie: 25,
      dekvloer: 22,
      energie: 3,
      besparing: 2,
    },
    elektrisch: {
      materiaal: [30, 60],
      installatie: 15,
      dekvloer: 0,
      energie: 6,
      besparing: 0,
    },
    infrarood: {
      materiaal: [35, 55],
      installatie: 10,
      dekvloer: 0,
      energie: 5,
      besparing: 0,
    },
    droog: {
      materiaal: [55, 90],
      installatie: 20,
      dekvloer: 5,
      energie: 3,
      besparing: 2,
    },
  };

  const p = prijzen[type];

  // Calculate material costs (average of min and max)
  const gemMateriaal = (p.materiaal[0] + p.materiaal[1]) / 2;
  const materiaalkosten = Math.round(gemMateriaal * oppervlakte);

  // Installation costs (labor)
  const installatiekosten = Math.round(p.installatie * oppervlakte);

  // Screed / finishing layer costs (not for all types)
  const dekvloerkosten = Math.round(p.dekvloer * oppervlakte);

  // Thermostat costs (approximately €150 per zone)
  const thermostaatKosten = aantalZones * 150;

  // Total one-time investment
  const totaalEenmalig =
    materiaalkosten +
    installatiekosten +
    dekvloerkosten +
    thermostaatKosten;

  // Annual energy costs
  const jaarlijkseEnergiekosten = Math.round(p.energie * oppervlakte);

  // Payback period calculation (water & droog systems save energy vs radiators)
  // Water and droog systems save ~€2/m² per year compared to radiators
  const jaarlijkseBesparing = Math.round(p.besparing * oppervlakte);
  const terugverdientijd =
    jaarlijkseBesparing > 0
      ? Math.round(totaalEenmalig / jaarlijkseBesparing)
      : 0;

  return {
    materiaalkosten,
    installatiekosten,
    dekvloerkosten,
    thermostaatKosten,
    totaalEenmalig,
    jaarlijkseEnergiekosten,
    terugverdientijd,
  };
}

/**
 * Format a number as Dutch currency (€)
 * @param amount - The amount to format
 * @returns Formatted string with € symbol and proper decimal/thousand separators
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

/**
 * Calculate cost per m² for a floor heating type
 * @param type - Type of floor heating system
 * @returns Average cost per m²
 */
export function getPricePerM2(type: 'water' | 'elektrisch' | 'infrarood' | 'droog'): number {
  const prijzen = {
    water: { min: 40, max: 75 },
    elektrisch: { min: 30, max: 60 },
    infrarood: { min: 35, max: 55 },
    droog: { min: 55, max: 90 },
  };

  const p = prijzen[type];
  return (p.min + p.max) / 2;
}

/**
 * Get installation costs per m²
 * @param type - Type of floor heating system
 * @returns Installation costs per m²
 */
export function getInstallatieKostenPerM2(type: 'water' | 'elektrisch' | 'infrarood' | 'droog'): number {
  const installatie = {
    water: 25,
    elektrisch: 15,
    infrarood: 10,
    droog: 20,
  };

  return installatie[type];
}

/**
 * Get annual energy costs per m²
 * @param type - Type of floor heating system
 * @returns Annual energy costs per m²
 */
export function getJaarlijkseEnergieKostenPerM2(type: 'water' | 'elektrisch' | 'infrarood' | 'droog'): number {
  const energie = {
    water: 3,
    elektrisch: 6,
    infrarood: 5,
    droog: 3,
  };

  return energie[type];
}

/**
 * Compare costs between different floor heating systems
 * @param oppervlakte - Total floor area in m²
 * @returns Object with cost calculations for each type
 */
export function compareerKosten(oppervlakte: number): {
  water: KostenBerekening;
  elektrisch: KostenBerekening;
  infrarood: KostenBerekening;
  droog: KostenBerekening;
} {
  return {
    water: berekenKosten(oppervlakte, 'water'),
    elektrisch: berekenKosten(oppervlakte, 'elektrisch'),
    infrarood: berekenKosten(oppervlakte, 'infrarood'),
    droog: berekenKosten(oppervlakte, 'droog'),
  };
}

/**
 * Calculate cost savings with floor heating vs radiators (5-year projection)
 * @param oppervlakte - Total floor area in m²
 * @param type - Type of floor heating system
 * @returns Savings calculation for 5 years
 */
export function berekenBesparingen(
  oppervlakte: number,
  type: 'water' | 'elektrisch' | 'infrarood' | 'droog'
): {
  jaarlijks: number;
  vijfJaar: number;
  tienJaar: number;
} {
  // Only water and droog systems have actual savings vs radiators
  const besparingPerM2 =
    type === 'water' || type === 'droog' ? 2 : 0;

  const jaarlijks = Math.round(besparingPerM2 * oppervlakte);
  const vijfJaar = jaarlijks * 5;
  const tienJaar = jaarlijks * 10;

  return { jaarlijks, vijfJaar, tienJaar };
}

/**
 * Check if area meets minimum requirements for floor heating
 * @param oppervlakte - Total floor area in m²
 * @returns Boolean indicating if area is suitable
 */
export function isAreaSuitable(oppervlakte: number): boolean {
  // Minimum 20 m² recommended for water systems
  // Smaller areas can use electric systems
  return oppervlakte >= 5;
}

/**
 * Get lifespan of a floor heating system
 * @param type - Type of floor heating system
 * @returns Lifespan in years
 */
export function getLifespan(type: 'water' | 'elektrisch' | 'infrarood' | 'droog'): number {
  const lifespans = {
    water: 50,
    elektrisch: 25,
    infrarood: 30,
    droog: 40,
  };

  return lifespans[type];
}

/**
 * Calculate cost per year over lifespan
 * @param oppervlakte - Total floor area in m²
 * @param type - Type of floor heating system
 * @returns Annual cost amortized over lifespan (including energy)
 */
export function berekenJaarlijkseKost(
  oppervlakte: number,
  type: 'water' | 'elektrisch' | 'infrarood' | 'droog'
): number {
  const berekening = berekenKosten(oppervlakte, type);
  const lifespan = getLifespan(type);

  // Initial investment amortized over lifespan
  const investmentPerYear = berekening.totaalEenmalig / lifespan;

  // Plus annual energy costs
  const totalPerYear = investmentPerYear + berekening.jaarlijkseEnergiekosten;

  return Math.round(totalPerYear);
}

/**
 * Validate floor area input
 * @param oppervlakte - Floor area to validate
 * @returns Boolean indicating if valid
 */
export function isValidArea(oppervlakte: number): boolean {
  return oppervlakte > 0 && oppervlakte <= 1000 && !isNaN(oppervlakte);
}

/**
 * Get recommended number of heating zones based on area
 * @param oppervlakte - Total floor area in m²
 * @returns Recommended number of zones
 */
export function getRecommendedZones(oppervlakte: number): number {
  if (oppervlakte <= 30) return 1;
  if (oppervlakte <= 60) return 2;
  if (oppervlakte <= 100) return 3;
  return 4;
}
