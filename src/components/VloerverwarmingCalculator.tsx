'use client';

import { useState } from 'react';
import { berekenKosten, formatCurrency } from '@/lib/calculations';
import Calculator from '@/components/Calculator';

export default function VloerverwarmingCalculator() {
  const [oppervlakte, setOppervlakte] = useState(50);
  const [type, setType] = useState<'water' | 'elektrisch' | 'infrarood' | 'droog'>('water');
  const [aantalZones, setAantalZones] = useState(2);

  const kosten = berekenKosten(oppervlakte, type, aantalZones);

  return (
    <Calculator
      title="Vloerverwarming Kostencalculator"
      description="Bereken de investeringskosten en energiebesparing voor jouw woning"
      result={
        <div className="space-y-4">
          {/* Investment Costs */}
          <div className="bg-white rounded-lg p-4 border border-blue-200 bg-blue-50">
            <p className="text-sm text-stone-600 mb-1">Totale investeringskosten</p>
            <p className="text-3xl font-bold text-blue-600">
              {formatCurrency(kosten.totaalEenmalig)}
            </p>
            <div className="mt-3 space-y-2 text-sm text-stone-700">
              <div className="flex justify-between">
                <span>Materiaal:</span>
                <span>{formatCurrency(kosten.materiaalkosten)}</span>
              </div>
              <div className="flex justify-between">
                <span>Installatie:</span>
                <span>{formatCurrency(kosten.installatiekosten)}</span>
              </div>
              {kosten.dekvloerkosten > 0 && (
                <div className="flex justify-between">
                  <span>Dekvloer:</span>
                  <span>{formatCurrency(kosten.dekvloerkosten)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Thermostaten:</span>
                <span>{formatCurrency(kosten.thermostaatKosten)}</span>
              </div>
            </div>
          </div>

          {/* Annual Costs */}
          <div className="bg-white rounded-lg p-4 border border-amber-200 bg-amber-50">
            <p className="text-sm text-stone-600 mb-1">Jaarlijkse energiekosten</p>
            <p className="text-2xl font-bold text-amber-600">
              {formatCurrency(kosten.jaarlijkseEnergiekosten)}/jaar
            </p>
            <p className="text-xs text-stone-600 mt-2">
              {formatCurrency(kosten.jaarlijkseEnergiekosten / 12)}/maand
            </p>
          </div>

          {/* Cost per m² */}
          <div className="bg-white rounded-lg p-4 border border-emerald-200 bg-emerald-50">
            <p className="text-sm text-stone-600 mb-1">Kostprijs per m²</p>
            <p className="text-2xl font-bold text-emerald-600">
              {formatCurrency(kosten.totaalEenmalig / oppervlakte)}
            </p>
          </div>
        </div>
      }
    >
      {/* Inputs Section */}
      <div className="space-y-6">
        {/* Floor Area Input */}
        <div>
          <label htmlFor="oppervlakte" className="block text-sm font-medium text-stone-900 mb-2">
            Oppervlakte (m²)
          </label>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <input
                type="range"
                id="oppervlakte-range"
                min="10"
                max="200"
                step="5"
                value={oppervlakte}
                onChange={(e) => setOppervlakte(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
            </div>
            <input
              type="number"
              id="oppervlakte"
              min="10"
              max="200"
              value={oppervlakte}
              onChange={(e) => setOppervlakte(Math.min(200, Math.max(10, Number(e.target.value))))}
              className="w-20 px-3 py-2 border border-stone-300 rounded-lg text-sm font-medium text-stone-900"
            />
          </div>
          <p className="text-xs text-stone-500 mt-1">10 - 200 m²</p>
        </div>

        {/* Type Selector */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-stone-900 mb-2">
            Soort vloerverwarming
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value as 'water' | 'elektrisch' | 'infrarood' | 'droog')}
            className="w-full px-4 py-2 border border-stone-300 rounded-lg text-stone-900 bg-white"
          >
            <option value="water">Watervloerverwarming</option>
            <option value="elektrisch">Elektrische vloerverwarming</option>
            <option value="infrarood">Infraroodvloerverwarming</option>
            <option value="droog">Droge vloerverwarming</option>
          </select>
        </div>

        {/* Number of Zones */}
        <div>
          <label htmlFor="zones" className="block text-sm font-medium text-stone-900 mb-2">
            Aantal verwarmingszones
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((zone) => (
              <button
                key={zone}
                onClick={() => setAantalZones(zone)}
                className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors ${
                  aantalZones === zone
                    ? 'bg-orange-600 text-white'
                    : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Calculator>
  );
}
