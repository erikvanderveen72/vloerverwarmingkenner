'use client';

import { useState } from 'react';
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Wrench,
  Clock,
  ChevronDown,
} from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Stap 1: Voorbereiding',
    description:
      'Meet de oppervlakte van je ruimte nauwkeurig op. Bepaal waar je verwarming wilt en hoeveel wattage je nodig hebt (doorgaans 100-150 W/m² voor badkamer, 50-100 W/m² voor woonkamer). Bestel materiaal met wat marge. Maak een plattegrond met de mat-layout en thermostaat-plaatsing. Controleer of je elektriciteitsinstallatie geschikt is voor extra belasting.',
    icon: Lightbulb,
  },
  {
    number: 2,
    title: 'Stap 2: Ondergrond voorbereiden',
    description:
      'Verwijder oud vloermateriaal, schoon en maak de ondervloer droog. Controleer of deze vlak is (belangrijker dan je denkt!). Breng een primer aan als aanbevolen door de mat-fabrikant. Dit zorgt voor betere hechting. Zorg dat de ondergrond volledig droog is voor je begint - dit kan 24-48 uur duren bij primer.',
    icon: Wrench,
  },
  {
    number: 3,
    title: 'Stap 3: Verwarmingsmatten uitrollen',
    description:
      'Begin in een hoek en rol de mat voorzichtig uit. Zorg dat deze recht ligt en geen plooien heeft - dit kan overheating veroorzaken. Bevestig de mat met tegellijm of speciale tape volgens fabrieksrichtlijnen. Zorg voor goede dekking: geen gaten of gaten groter dan 5 cm. Test de weerstand van de mat met een multimeter - deze moet binnen fabrikagegevens liggen.',
    icon: Zap,
  },
  {
    number: 4,
    title: 'Stap 4: Thermostaat aansluiten',
    description:
      'ZEER BELANGRIJK: Dit onderdeel MOET door een erkend elektricien gebeuren! De elektrische aansluiting op huisinstallatie moet voldoen aan alle veiligheidsnormen. Je kunt zelf het thermo-element in de mat plaatsen (volgens instructies), maar de eigentlijke elektrische verbinding laat je altijd door een professional doen. Dit is wettelijk vereist en essentieel voor je veiligheid.',
    icon: AlertTriangle,
  },
  {
    number: 5,
    title: 'Stap 5: Vloer afwerken',
    description:
      'Breng tegellijm of gietvloer aan over de matten - dit geeft bescherming en zorgt voor gelijkmatige warmteverdeling. Wacht tot dit volledig droog is (volgens fabrikantsinstructies, doorgaans 24-48 uur). Leg tegels, laminaat, vinyl of andere afwerking aan volgens normale procedures. Let op: zorg dat je niet in de mat boren of metselen wanneer je later reparaties doet.',
    icon: CheckCircle2,
  },
  {
    number: 6,
    title: 'Stap 6: Systeem testen',
    description:
      'Voer een grondige test uit: zet de thermostaat aan met lage temperatuur (20°C) en werk het op. Controleer of alle delen van de mat warm worden (met je hand testen). Laat het gedurende 24 uur op laag vermogen lopen voordat je hogere temperaturen instelt. Controleer regelmatig de eerste week op abnormale warmte of geluiden.',
    icon: Clock,
  },
];

export default function StappenplanAccordion() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <button
            key={step.number}
            onClick={() =>
              setExpandedStep(expandedStep === step.number ? null : step.number)
            }
            className="w-full text-left"
          >
            <div className="border border-stone-200 rounded-lg overflow-hidden hover:border-orange-300 transition-colors">
              <div className="p-6 hover:bg-stone-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2">
                        <Icon className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-stone-900">{step.title}</h3>
                      </div>
                      <p className="text-stone-700 leading-relaxed">
                        {expandedStep === step.number
                          ? step.description
                          : step.description.substring(0, 100) + '...'}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 flex-shrink-0 transition-transform ${
                      expandedStep === step.number ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
