'use client';

import { useState, useMemo } from 'react';
import { TrendingDown, TrendingUp, Zap } from 'lucide-react';
import { berekenKosten, formatCurrency } from '@/lib/calculations';
import Calculator from './Calculator';

type VloerverwarmingType = 'water' | 'elektrisch' | 'infrarood' | 'droog';

interface KostenCalculatorProps {
  title?: string;
  description?: string;
}

export default function KostenCalculator({
  title = 'Vloerverwarming Kostenberekening',
  description = 'Bereken de totale kosten voor jouw vloerverwarmingssysteem',
}: KostenCalculatorProps) {
  const [oppervlakte, setOppervlakte] = useState(50);
  const [type, setType] = useState<VloerverwarmingType>('water');
  const [aantalZones, setAantalZones] = useState(1);
  const [includeDekvloer, setIncludeDekvloer] = useState(true);

  // Calculate costs based on current inputs
  const berekening = useMemo(() => {
    return berekenKosten(oppervlakte, type, aantalZones);
  }, [oppervlakte, type, aantalZones]);

  // Determine which costs to display
  const displayDekvloer = type === 'water' || type === 'droog';
  const showDekvloerCost = includeDekvloer && displayDekvloer;

  // Calculate adjusted total if dekvloer is excluded
  const totaalEenmalig = showDekvloerCost
    ? berekening.totaalEenmalig
    : berekening.totaalEenmalig - berekening.dekvloerkosten;

  const typeLabels: Record<VloerverwarmingType, string> = {
    water: 'Watervloerverwarming',
    elektrisch: 'Elektrische vloerverwarming',
    infrarood: 'Infrarood vloerverwarming',
    droog: 'Droge vloerverwarming',
  };

  const renderResults = () => {
    return (
      <div className="space-y-4">
        {/* Materiaalkosten */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-stone-900">Materiaalkosten</h4>
            <span className="text-lg font-bold text-blue-600">
              {formatCurrency(berekening.materiaalkosten)}
            </span>
          </div>
          <p className="text-sm text-stone-600">
            {formatCurrency(Math.round(berekening.materiaalkosten / oppervlakte))}/m²
          </p>
        </div>

        {/* Installatiekosten */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-stone-900">Installatiekosten</h4>
            <span className="text-lg font-bold text-amber-600">
              {formatCurrency(berekening.installatiekosten)}
            </span>
          </div>
          <p className="text-sm text-stone-600">
            {formatCurrency(Math.round(berekening.installatiekosten / oppervlakte))}/m²
          </p>
        </div>

        {/* Dekvloer (if applicable) */}
        {showDekvloerCost && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-stone-900">Dekvloer</h4>
              <span className="text-lg font-bold text-gray-600">
                {formatCurrency(berekening.dekvloerkosten)}
              </span>
            </div>
            <p className="text-sm text-stone-600">
              {formatCurrency(Math.round(berekening.dekvloerkosten / oppervlakte))}/m²
            </p>
          </div>
        )}

        {/* Thermostaat per zone */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-stone-900">
              Thermostaat ({aantalZones} {aantalZones === 1 ? 'zone' : 'zones'})
            </h4>
            <span className="text-lg font-bold text-gray-600">
              {formatCurrency(berekening.thermostaatKosten)}
            </span>
          </div>
          <p className="text-sm text-stone-600">€150 per zone</p>
        </div>

        {/* Totaal Eenmalig */}
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-6 mt-6">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-stone-900">Totaal Investering</h4>
            <span className="text-2xl font-bold text-emerald-600">
              {formatCurrency(totaalEenmalig)}
            </span>
          </div>
          <p className="text-sm text-stone-600">
            Eenmalige kosten voor installatie
          </p>
          <div className="mt-4 pt-4 border-t border-emerald-200">
            <p className="text-sm text-stone-600 mb-2">Kosten per m²:</p>
            <p className="text-lg font-semibold text-emerald-600">
              {formatCurrency(Math.round(totaalEenmalig / oppervlakte))}/m²
            </p>
          </div>
        </div>

        {/* Jaarlijkse Energiekosten */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start gap-3">
          <Zap className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-semibold text-stone-900 mb-2">
              Jaarlijkse Energiekosten
            </h4>
            <div className="flex justify-between items-baseline">
              <p className="text-sm text-stone-600">
                {formatCurrency(berekening.jaarlijkseEnergiekosten)} per jaar
              </p>
              <span className="text-lg font-bold text-orange-600">
                {formatCurrency(Math.round(berekening.jaarlijkseEnergiekosten / oppervlakte))}/m²/jaar
              </span>
            </div>
          </div>
        </div>

        {/* Terugverdientijd info (for water and droog systems) */}
        {(type === 'water' || type === 'droog') && berekening.terugverdientijd > 0 && (
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <TrendingDown className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-stone-900 mb-1">Terugverdientijd</h4>
                <p className="text-sm text-stone-600">
                  Ongeveer <span className="font-bold">{berekening.terugverdientijd} jaar</span> ten opzichte van radiatoren
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Calculator
      title={title}
      description={description}
      result={renderResults()}
    >
      <div className="space-y-6">
        {/* Oppervlakte Slider */}
        <div>
          <label className="block text-sm font-medium text-stone-900 mb-3">
            Oppervlakte: <span className="text-lg font-bold text-primary">{oppervlakte} m²</span>
          </label>
          <input
            type="range"
            min="10"
            max="200"
            value={oppervlakte}
            onChange={(e) => setOppervlakte(Number(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-stone-500 mt-2">
            <span>10 m²</span>
            <span>200 m²</span>
          </div>
        </div>

        {/* Vloerverwarmingstype */}
        <div>
          <label className="block text-sm font-medium text-stone-900 mb-3">
            Type vloerverwarming
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as VloerverwarmingType)}
            className="w-full px-4 py-2 border border-stone-300 rounded-lg text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {Object.entries(typeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Aantal Zones */}
        <div>
          <label className="block text-sm font-medium text-stone-900 mb-3">
            Aantal zones: <span className="font-bold text-primary">{aantalZones}</span>
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((zone) => (
              <button
                key={zone}
                onClick={() => setAantalZones(zone)}
                className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors ${
                  aantalZones === zone
                    ? 'bg-primary text-white'
                    : 'bg-stone-200 text-stone-900 hover:bg-stone-300'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Include Dekvloer Checkbox */}
        {displayDekvloer && (
          <div className="flex items-center gap-3 p-4 bg-stone-100 rounded-lg">
            <input
              type="checkbox"
              id="includeDekvloer"
              checked={includeDekvloer}
              onChange={(e) => setIncludeDekvloer(e.target.checked)}
              className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary cursor-pointer"
            />
            <label
              htmlFor="includeDekvloer"
              className="flex-1 text-sm font-medium text-stone-900 cursor-pointer"
            >
              Dekvloer/afwerking inbegrepen
            </label>
          </div>
        )}
      </div>
    </Calculator>
  );
}
