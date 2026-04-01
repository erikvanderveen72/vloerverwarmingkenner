import { Metadata } from 'next';
import {
  Home,
  Bath,
  UtensilsCrossed,
  Moon,
  Check,
  AlertCircle,
  ChevronRight,
  Droplets,
  Zap,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { ruimteAdviezen } from '@/lib/fallback-data';
import Link from 'next/link';

// Export metadata for SEO
export const metadata: Metadata = {
  title: 'Vloerverwarming per Ruimte 2026 - Badkamer, Keuken & Woonkamer',
  description: 'Ontdek welke vloerverwarming het beste past per ruimte. Advies voor badkamer, keuken, woonkamer en slaapkamer met kostenindicatie.',
  keywords: [
    'vloerverwarming per ruimte',
    'vloerverwarming badkamer',
    'vloerverwarming keuken',
    'vloerverwarming woonkamer',
    'vloerverwarming slaapkamer',
    'vloerverwarming advies',
  ],
  openGraph: {
    title: 'Vloerverwarming per Ruimte 2026 - Badkamer, Keuken & Woonkamer',
    description: 'Ontdek welke vloerverwarming het beste past per ruimte. Advies voor badkamer, keuken, woonkamer en slaapkamer met kostenindicatie.',
    type: 'website',
  },
};

export const revalidate = 3600;

// Type definitions
interface RoomCardProps {
  room: RoomDetail;
  icon: React.ReactNode;
}

interface RoomDetail {
  id: string;
  naam: string;
  icon: string;
  aanbevolenType: string;
  aanbevolenTypeLabel: string;
  gemiddeldOppervlak: number;
  kostenMin: number;
  kostenMax: number;
  tips: string[];
  geschikteVloeren: string[];
  themeColor: string;
  bgGradient: string;
}

interface FloorTypeRow {
  type: string;
  geschiktheid: string;
  warmteweerstand: string;
  opmerkingen: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// Room data
const roomDetails: RoomDetail[] = [
  {
    id: 'woonkamer',
    naam: 'Woonkamer',
    icon: 'home',
    aanbevolenType: 'Watervloerverwarming',
    aanbevolenTypeLabel: 'water',
    gemiddeldOppervlak: 35,
    kostenMin: 2275,
    kostenMax: 3500,
    tips: [
      'Hoofdverwarming mogelijk',
      'Combineer met warmtepomp',
      'Let op meubels en grote vloerkleden',
      'Programmeerbare thermostaat aanraden',
    ],
    geschikteVloeren: [
      'Tegels',
      'Natuursteen',
      'PVC/vinyl',
      'Laminaat (max 0.09 m²K/W)',
    ],
    themeColor: 'orange',
    bgGradient: 'from-orange-50 to-amber-50',
  },
  {
    id: 'badkamer',
    naam: 'Badkamer',
    icon: 'bath',
    aanbevolenType: 'Elektrische vloerverwarming',
    aanbevolenTypeLabel: 'elektrisch',
    gemiddeldOppervlak: 8,
    kostenMin: 360,
    kostenMax: 600,
    tips: [
      'Ideaal voor elektrisch systeem',
      'Waterdichte installatie vereist',
      'Vochtbestendige thermostaat essentieel',
      'Snelle opwarmtijd gewaardeerd',
    ],
    geschikteVloeren: ['Tegels', 'Natuursteen', 'Gietvloer'],
    themeColor: 'blue',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    id: 'keuken',
    naam: 'Keuken',
    icon: 'chef',
    aanbevolenType: 'Watervloerverwarming',
    aanbevolenTypeLabel: 'water',
    gemiddeldOppervlak: 15,
    kostenMin: 975,
    kostenMax: 1500,
    tips: [
      'Niet onder keukenkastjes plaatsen',
      'Combineer met woonkamer-circuit',
      'Extra isolatie bij buitenmuur',
      'Waterdichte schakelaars',
    ],
    geschikteVloeren: ['Tegels', 'PVC/vinyl', 'Gietvloer'],
    themeColor: 'green',
    bgGradient: 'from-green-50 to-emerald-50',
  },
  {
    id: 'slaapkamer',
    naam: 'Slaapkamer',
    icon: 'moon',
    aanbevolenType: 'Watervloerverwarming',
    aanbevolenTypeLabel: 'water',
    gemiddeldOppervlak: 14,
    kostenMin: 910,
    kostenMax: 1400,
    tips: [
      'Lagere temperatuur (18°C ideaal)',
      'Nachtverlaging programmeren',
      'Let op tapijt of dunne vloerkleden',
      'Rustgevend comfort',
    ],
    geschikteVloeren: ['Laminaat', 'PVC/vinyl', 'Tapijt (dunne variant)'],
    themeColor: 'purple',
    bgGradient: 'from-purple-50 to-violet-50',
  },
];

// Get icon component for room
function getRoomIcon(iconName: string) {
  switch (iconName) {
    case 'home':
      return <Home className="w-12 h-12 text-orange-500" />;
    case 'bath':
      return <Bath className="w-12 h-12 text-blue-500" />;
    case 'chef':
      return <UtensilsCrossed className="w-12 h-12 text-green-500" />;
    case 'moon':
      return <Moon className="w-12 h-12 text-purple-500" />;
    default:
      return <Home className="w-12 h-12 text-stone-500" />;
  }
}

// Room Card Component
function RoomCard({ room, icon }: RoomCardProps) {
  const typeIcon =
    room.aanbevolenTypeLabel === 'water' ? (
      <Droplets className="w-5 h-5" />
    ) : (
      <Zap className="w-5 h-5" />
    );

  // Map room IDs to individual page URLs
  const getPageUrl = (roomId: string): string => {
    switch (roomId) {
      case 'woonkamer':
        return '/vloerverwarming-woonkamer';
      case 'badkamer':
        return '/vloerverwarming-badkamer';
      case 'keuken':
        return '/vloerverwarming-keuken';
      case 'slaapkamer':
        return '/vloerverwarming-slaapkamer';
      default:
        return '/per-ruimte';
    }
  };

  const pageUrl = getPageUrl(room.id);

  return (
    <div
      className={`bg-gradient-to-br ${room.bgGradient} rounded-xl border border-stone-200 p-8 hover:shadow-lg transition-all`}
    >
      {/* Icon and Title */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="mb-4">{icon}</div>
          <Link href={pageUrl}>
            <h3 className="text-3xl font-bold text-stone-900 hover:text-orange-600 transition-colors cursor-pointer">
              {room.naam}
            </h3>
          </Link>
        </div>
      </div>

      {/* Recommended Type */}
      <div className="mb-6 p-4 bg-white rounded-lg border border-stone-200">
        <p className="text-sm font-semibold text-stone-600 mb-2">
          AANBEVOLEN TYPE
        </p>
        <div className="flex items-center gap-2">
          <div
            className={`p-2 rounded-full ${
              room.aanbevolenTypeLabel === 'water'
                ? 'bg-blue-100'
                : 'bg-yellow-100'
            }`}
          >
            {typeIcon}
          </div>
          <span className="text-lg font-bold text-stone-900">
            {room.aanbevolenType}
          </span>
        </div>
      </div>

      {/* Size and Cost */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-stone-200">
          <p className="text-sm font-semibold text-stone-600 mb-1">
            Gemiddeld oppervlak
          </p>
          <p className="text-2xl font-bold text-stone-900">
            {room.gemiddeldOppervlak}
          </p>
          <p className="text-xs text-stone-500 mt-1">m²</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-stone-200">
          <p className="text-sm font-semibold text-stone-600 mb-1">
            Kostenindicatie
          </p>
          <p className="text-xl font-bold text-stone-900">
            €{room.kostenMin} - €{room.kostenMax}
          </p>
          <p className="text-xs text-stone-500 mt-1">totaal</p>
        </div>
      </div>

      {/* Tips */}
      <div className="mb-6">
        <h4 className="font-semibold text-stone-900 mb-3 text-sm">
          PRAKTISCHE TIPS
        </h4>
        <ul className="space-y-2">
          {room.tips.map((tip, idx) => (
            <li key={idx} className="flex gap-3">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-stone-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Suitable Floor Types */}
      <div className="bg-white rounded-lg p-4 border border-stone-200 mb-6">
        <h4 className="font-semibold text-stone-900 mb-3 text-sm">
          GESCHIKTE VLOERTYPEN
        </h4>
        <div className="flex flex-wrap gap-2">
          {room.geschikteVloeren.map((vloer, idx) => (
            <span
              key={idx}
              className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-300"
            >
              {vloer}
            </span>
          ))}
        </div>
      </div>

      {/* Read More Link */}
      <Link
        href={pageUrl}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-stone-50 text-stone-900 font-semibold rounded-lg transition-colors border border-stone-200"
      >
        Bekijk volledig advies
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

// Floor Type Compatibility Table
function FloorTypeTable() {
  const floorTypes: FloorTypeRow[] = [
    {
      type: 'Tegels',
      geschiktheid: 'Uitstekend',
      warmteweerstand: '< 0.05 m²K/W',
      opmerkingen: 'Ideaal voor vloerverwarming, perfecte warmteoverdracht',
    },
    {
      type: 'Natuursteen',
      geschiktheid: 'Uitstekend',
      warmteweerstand: '< 0.05 m²K/W',
      opmerkingen:
        'Superieure warmtegeleiding, echter duurder dan tegels',
    },
    {
      type: 'PVC / Vinyl',
      geschiktheid: 'Goed',
      warmteweerstand: '< 0.05 m²K/W',
      opmerkingen:
        'Prima warmteoverdracht, let op kwaliteit en type plak',
    },
    {
      type: 'Laminaat',
      geschiktheid: 'Goed',
      warmteweerstand: 'max 0.09 m²K/W',
      opmerkingen: 'Kies speciaal vloerverwarming-laminaat',
    },
    {
      type: 'Parket',
      geschiktheid: 'Matig',
      warmteweerstand: 'max 0.06 m²K/W',
      opmerkingen: 'Maximaal 12 mm dik, kan gaan krimpen/werken',
    },
    {
      type: 'Tapijt',
      geschiktheid: 'Beperkt',
      warmteweerstand: '< 0.05 m²K/W',
      opmerkingen: 'Alleen dunne variant geschikt, vermindert warmteoverdracht',
    },
  ];

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-stone-900 mb-4 text-center">
            Vloertypen en Compatibiliteit
          </h2>
          <p className="text-lg text-stone-700 text-center max-w-3xl mx-auto">
            Niet alle vloertypes zijn even geschikt voor vloerverwarming. De
            warmteweerstand is cruciaal: hoe lager, hoe beter de warmteoverdracht.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-stone-200">
          <table className="w-full bg-white">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-100">
                <th className="px-6 py-4 text-left font-bold text-stone-900">
                  Vloertype
                </th>
                <th className="px-6 py-4 text-left font-bold text-stone-900">
                  Geschiktheid
                </th>
                <th className="px-6 py-4 text-left font-bold text-stone-900">
                  Warmteweerstand
                </th>
                <th className="px-6 py-4 text-left font-bold text-stone-900">
                  Opmerkingen
                </th>
              </tr>
            </thead>
            <tbody>
              {floorTypes.map((floor, idx) => (
                <tr
                  key={idx}
                  className="border-b border-stone-200 hover:bg-stone-50"
                >
                  <td className="px-6 py-4 font-semibold text-stone-900">
                    {floor.type}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        floor.geschiktheid === 'Uitstekend'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : floor.geschiktheid === 'Goed'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {floor.geschiktheid}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-stone-700">
                    {floor.warmteweerstand}
                  </td>
                  <td className="px-6 py-4 text-stone-700">
                    {floor.opmerkingen}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Combination Advice Section
function CombinationAdvice() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
          Combinatie-Advies voor Meerdere Ruimtes
        </h2>

        <div className="space-y-6">
          {/* Tip 1 */}
          <div className="border-l-4 border-l-blue-500 bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
              <Droplets className="w-6 h-6 text-blue-600" />
              Water als hoofd + Elektrisch in Badkamer
            </h3>
            <p className="text-stone-700 mb-3">
              De ideale combinatie voor een complete woning. Plaats
              watervloerverwarming in woonkamer, keuken en slaapkamer voor
              hoofdverwarming, en voeg elektrische vloerverwarming toe in de
              badkamer.
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-2 text-stone-700">
                <span className="text-blue-600 font-bold">→</span>
                <span>Energieefficiënt en kostenbesparing</span>
              </li>
              <li className="flex gap-2 text-stone-700">
                <span className="text-blue-600 font-bold">→</span>
                <span>Snelle warmte in badkamer met elektrisch</span>
              </li>
              <li className="flex gap-2 text-stone-700">
                <span className="text-blue-600 font-bold">→</span>
                <span>Lange levensduur watervloerverwarming</span>
              </li>
            </ul>
          </div>

          {/* Tip 2 */}
          <div className="border-l-4 border-l-green-500 bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-green-600" />
              Zones per Ruimte Instellen
            </h3>
            <p className="text-stone-700 mb-3">
              Installeer afzonderlijke thermostaatregelingen per ruimte of per
              zone. Dit stelt je in staat om temperaturen onafhankelijk in te
              stellen.
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-2 text-stone-700">
                <span className="text-green-600 font-bold">→</span>
                <span>Slaapkamer op 18°C, woonkamer op 22°C</span>
              </li>
              <li className="flex gap-2 text-stone-700">
                <span className="text-green-600 font-bold">→</span>
                <span>Programmeerbare nachtverlagen mogelijk</span>
              </li>
              <li className="flex gap-2 text-stone-700">
                <span className="text-green-600 font-bold">→</span>
                <span>Extra energiebesparing tot 15%</span>
              </li>
            </ul>
          </div>

          {/* Tip 3 */}
          <div className="border-l-4 border-l-orange-500 bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              Één Thermostaat per Zone
            </h3>
            <p className="text-stone-700 mb-3">
              Voor optimale controle en energiebesparing installeer je een
              thermostaat per zone of ruimte. Dit voorkomt overbodige verwarming.
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex gap-2 text-stone-700">
                <span className="text-orange-600 font-bold">→</span>
                <span>Slimme thermostaten zijn standaard geworden</span>
              </li>
              <li className="flex gap-2 text-stone-700">
                <span className="text-orange-600 font-bold">→</span>
                <span>App-control mogelijk bij veel systemen</span>
              </li>
              <li className="flex gap-2 text-stone-700">
                <span className="text-orange-600 font-bold">→</span>
                <span>Vochtvoeler in badkamer essentieel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Intro Section
function IntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">
          Verschillende Ruimtes, Verschillende Behoeften
        </h2>
        <p className="text-lg text-stone-700 mb-6">
          Niet elke ruimte heeft dezelfde eisen als het gaat om vloerverwarming.
          De badkamer vraagt om een ander systeem dan de woonkamer, en de
          slaapkamer heeft andere temperatuurbehoeften dan de keuken. Ontdek
          hieronder welk systeem het best bij jouw situatie past.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-stone-700 flex gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Pro tip:</strong> Combineer verschillende systemen in
              verschillende ruimtes. Bijvoorbeeld watervloerverwarming in
              woonkamer/keuken en elektrisch in badkamer is een populaire keuze.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Klaar voor je volgende stap?
          </h2>
          <p className="text-xl text-stone-300 mb-8">
            Bereken nu de exacte kosten voor alle ruimtes in jouw woning met
            onze geavanceerde kostencalculator.
          </p>
          <Link
            href="/kosten"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
          >
            Naar Kostencalculator
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function PerRuimtePage() {
  const faqItems: FAQItem[] = [
    {
      question:
        'Wat is het verschil tussen watervloerverwarming en elektrisch?',
      answer:
        'Watervloerverwarming circuleertwarm water door leidingen en is zeer energieefficiënt. Het is ideaal voor grote oppervlakken en als hoofdverwarming. Elektrische vloerverwarming is compacter, sneller op temperatuur, en geschikt voor kleine ruimtes zoals badkamers. Elektrisch is duurder in gebruik, water is duurder in aanschaf.',
    },
    {
      question: 'Kan ik meerdere soorten systemen in één huis gebruiken?',
      answer:
        'Ja, dit is een zeer populaire aanpak. Veel huizen combineren watervloerverwarming in woonkamer, keuken en slaapkamer met elektrische vloerverwarming in de badkamer. Dit geeft je het beste van beide werelden: energieefficiëntie waar nodig en snelle warmte in vochttige ruimtes.',
    },
    {
      question: 'Hoeveel m² heb ik minimaal nodig voor watervloerverwarming?',
      answer:
        'Technisch gezien geen minimum, maar watervloerverwarming is pas economisch interessant vanaf ongeveer 20 m². Bij kleinere oppervlakten (< 10 m²) is elektrische verwarming meestal goedkoper en eenvoudiger te installeren.',
    },
    {
      question: 'Hoelang wordt een vloer warm met vloerverwarming?',
      answer:
        'Dit hangt af van het systeem. Elektrische vloerverwarming wordt in 20-30 minuten warm, infrarood in 15-20 minuten, maar watervloerverwarming duurt 1-3 uur. Dit is geen probleem als je het aanzet voordat je gaat opstaan of thuiskomt.',
    },
    {
      question:
        'Wat is de ideale temperatuur voor de verschillende ruimtes?',
      answer:
        'Woonkamer: 22°C, Badkamer: 24°C, Keuken: 21°C, Slaapkamer: 18°C. Dit zijn ideale waarden voor comfort en energiebesparing. Met programmeerbare thermostaten kun je deze automatisch instellen.',
    },
    {
      question: 'Is vloerverwarming goed voor mensen met allergieën?',
      answer:
        'Ja, vloerverwarming is beter dan radiatoren voor mensen met allergieën. Er is minder luchtcirculatie, dus minder stofverspreiding. Het binnenklimaat is vochtiger (niet droog), wat ook beter voor luchtwegen is. Dit maakt vloerverwarming een gezondere keuze.',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Vloerverwarming per Ruimte"
        badge="Advies 2026"
        highlightedSubtitle="Het juiste systeem voor elke kamer"
        subtitle="Ontdek wat het beste systeem is voor je badkamer, keuken, woonkamer en slaapkamer met praktische tips en kostenindicaties."
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Per Ruimte', href: '/per-ruimte' },
        ]}
      />

      {/* Intro Section */}
      <IntroSection />

      {/* Room Detail Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
            Advies per Ruimte
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {roomDetails.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                icon={getRoomIcon(room.icon)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Floor Type Table */}
      <FloorTypeTable />

      {/* Combination Advice */}
      <CombinationAdvice />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSchema items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
