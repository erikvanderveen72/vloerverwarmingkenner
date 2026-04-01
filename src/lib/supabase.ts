import { createClient } from '@supabase/supabase-js';
import {
  vloerverwarmingTypes,
  ruimteAdviezen,
  subsidies,
  kostenOverzicht,
  voordelenNadelen,
} from './fallback-data';
import type {
  VloerverwarmingType,
  RuimteAdvies,
  SubsidieInfo,
  KostenIndicatie,
  VoordeelNadeel,
} from './fallback-data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

/**
 * Get all floor heating types
 * Falls back to hardcoded data if Supabase is unavailable
 */
export async function getVloerverwarmingTypes(): Promise<VloerverwarmingType[]> {
  if (!supabase) {
    console.warn('Supabase client not initialized, using fallback data');
    return vloerverwarmingTypes;
  }

  try {
    const { data, error } = await supabase
      .from('vloerverwarming_types')
      .select('*');

    if (error) {
      console.error('Error fetching vloerverwarming types:', error);
      return vloerverwarmingTypes;
    }

    return data && data.length > 0 ? data : vloerverwarmingTypes;
  } catch (err) {
    console.error('Exception fetching vloerverwarming types:', err);
    return vloerverwarmingTypes;
  }
}

/**
 * Get a specific floor heating type by ID
 */
export async function getVloerverwarmingTypeById(
  id: string
): Promise<VloerverwarmingType | null> {
  if (!supabase) {
    return (
      vloerverwarmingTypes.find((type) => type.id === id) || null
    );
  }

  try {
    const { data, error } = await supabase
      .from('vloerverwarming_types')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching vloerverwarming type:', error);
      return vloerverwarmingTypes.find((type) => type.id === id) || null;
    }

    return data || vloerverwarmingTypes.find((type) => type.id === id) || null;
  } catch (err) {
    console.error('Exception fetching vloerverwarming type:', err);
    return vloerverwarmingTypes.find((type) => type.id === id) || null;
  }
}

/**
 * Get all room advice
 */
export async function getRuimteAdviezen(): Promise<RuimteAdvies[]> {
  if (!supabase) {
    return ruimteAdviezen;
  }

  try {
    const { data, error } = await supabase
      .from('ruimte_adviezen')
      .select('*');

    if (error) {
      console.error('Error fetching ruimte adviezen:', error);
      return ruimteAdviezen;
    }

    return data && data.length > 0 ? data : ruimteAdviezen;
  } catch (err) {
    console.error('Exception fetching ruimte adviezen:', err);
    return ruimteAdviezen;
  }
}

/**
 * Get a specific room advice by ID
 */
export async function getRuimteAdviesById(
  id: string
): Promise<RuimteAdvies | null> {
  if (!supabase) {
    return ruimteAdviezen.find((advies) => advies.id === id) || null;
  }

  try {
    const { data, error } = await supabase
      .from('ruimte_adviezen')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching ruimte advies:', error);
      return ruimteAdviezen.find((advies) => advies.id === id) || null;
    }

    return data || ruimteAdviezen.find((advies) => advies.id === id) || null;
  } catch (err) {
    console.error('Exception fetching ruimte advies:', err);
    return ruimteAdviezen.find((advies) => advies.id === id) || null;
  }
}

/**
 * Get all subsidies
 */
export async function getSubsidies(): Promise<SubsidieInfo[]> {
  if (!supabase) {
    return subsidies;
  }

  try {
    const { data, error } = await supabase
      .from('subsidies')
      .select('*')
      .order('naam');

    if (error) {
      console.error('Error fetching subsidies:', error);
      return subsidies;
    }

    return data && data.length > 0 ? data : subsidies;
  } catch (err) {
    console.error('Exception fetching subsidies:', err);
    return subsidies;
  }
}

/**
 * Get cost breakdown data
 */
export async function getKostenOverzicht(): Promise<KostenIndicatie[]> {
  if (!supabase) {
    return kostenOverzicht;
  }

  try {
    const { data, error } = await supabase
      .from('kosten_overzicht')
      .select('*')
      .order('onderdeel');

    if (error) {
      console.error('Error fetching kosten overzicht:', error);
      return kostenOverzicht;
    }

    return data && data.length > 0 ? data : kostenOverzicht;
  } catch (err) {
    console.error('Exception fetching kosten overzicht:', err);
    return kostenOverzicht;
  }
}

/**
 * Get all advantages and disadvantages
 */
export async function getVoordelenNadelen(): Promise<VoordeelNadeel[]> {
  if (!supabase) {
    return voordelenNadelen;
  }

  try {
    const { data, error } = await supabase
      .from('voordelen_nadelen')
      .select('*')
      .order('categorie');

    if (error) {
      console.error('Error fetching voordelen nadelen:', error);
      return voordelenNadelen;
    }

    return data && data.length > 0 ? data : voordelenNadelen;
  } catch (err) {
    console.error('Exception fetching voordelen nadelen:', err);
    return voordelenNadelen;
  }
}

/**
 * Get advantages and disadvantages by category
 */
export async function getVoordelenNadelenByCategory(
  categorie: string
): Promise<VoordeelNadeel[]> {
  const allItems = await getVoordelenNadelen();
  return allItems.filter((item) => item.categorie === categorie);
}

/**
 * Get only advantages
 */
export async function getVoordelen(): Promise<VoordeelNadeel[]> {
  const allItems = await getVoordelenNadelen();
  return allItems.filter((item) => item.type === 'voordeel');
}

/**
 * Get only disadvantages
 */
export async function getNadelen(): Promise<VoordeelNadeel[]> {
  const allItems = await getVoordelenNadelen();
  return allItems.filter((item) => item.type === 'nadeel');
}

/**
 * Get unique categories from voordelen/nadelen
 */
export async function getCategoriesVoordelenNadelen(): Promise<string[]> {
  const allItems = await getVoordelenNadelen();
  return Array.from(new Set(allItems.map((item) => item.categorie))).sort();
}

export default supabase;
