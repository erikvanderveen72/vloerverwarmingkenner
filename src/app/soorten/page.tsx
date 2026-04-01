import { Metadata } from 'next';
import { Droplets, Zap, Lightbulb, Grid3x3, Check, X, ChevronRight, ThermometerSun, Clock, DollarSign, Wrench, Leaf } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { vloerverwarmingTypes } from '@/lib/fallback-data';
import Link from 'next/link';

// Export metadata for SEO
export const metadata: Metadata = {
  title: 'Soorten Vloerverwarming 2026 - Water, Elektrisch & Infrarood Vergelijken',
  description: 'Vergelijk alle soorten vloerverwarming: watervloerverwarming, elektrisch, infrarood en droog systeem. Ontdek welk type het beste past bij jouw situatie.',
  keywords: [
    'soorten vloerverwarming',
    'watervloerverwarming',
    'elektrische vloerverwarming',
    'infrarood vloerverwarming',
    'droog systeem',
    'vloerverwarming vergelijken',
  ],
  openGraph: {
    title: 'Soorten Vloerverwarming 2026 - Water, Elektrisch & Infrarood Vergelijken',
    description: 'Vergelijk alle soorten vloerverwarming: watervloerverwarming, elektrisch, infrarood en droog systeem. Ontdek welk type het beste past bij jouw situatie.',
    type: 'website',
  },
};

export const revalidate = 3600;

// Type definitions for components
interface TypeCardProps {
  type: (typeof vloerverwarmingTypes)[0];
  icon: React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

// Icon mapping for types
const getIconForType = (id: string) => {
  switch (id) {
    case 'water':
      return <Droplets className="w-12 h-12 text-blue-500" />;
    case 'elektrisch':
      return <Zap className="w-12 h-12 text-yellow-500" />;
    case 'infrarood':
      return <Lightbulb className="w-12 h-12 text-orange-500" />;
    case 'droog-systeem':
      return <Grid3x3 className="w-12 h-12 text-slate-500" />;
    default:
      return <ThermometerSun className="w-12 h-12 text-red-500" />;
  }
};

// Type Card Component - Pure server component
function TypeCard({ type, icon }: TypeCardProps) {
  return (
    <div className="bg-white rounded-lg border border-stone-200 p-8 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-stone-900 mb-3">{type.naam}</h3>
      <p className="text-stone-600 mb-6 leading-relaxed">{type.beschrijving}</p>

      <div className="space-y-4 mb-6 pb-6 border-b border-stone-200">
        {/* Price Range */}
        <div className="flex items-start gap-3">
          <DollarSign className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-stone-900">Prijs per m²</p>
            <p className="text-sm text-stone-600">
              € {type.prijsPerM2Min} - € {type.prijsPerM2Max}
            </p>
          </div>
        </div>

        {/* Installation */}
        <div className="flex items-start gap-3">
          <Wrench className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-stone-900">Installatiekosten</p>
            <p className="text-sm text-stone-600">€ {type.installatiekosten} per m²</p>
          </div>
        </div>

        {/* Lifespan */}
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-stone-900">Levensduur</p>
            <p className="text-sm text-stone-600">{type.levensduur} jaar</p>
          </div>
        </div>

        {/* Warm-up time */}
        <div className="flex items-start gap-3">
          <ThermometerSun className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-stone-900">Opwarmtijd</p>
            <p className="text-sm text-stone-600">{type.opwarmtijd}</p>
          </div>
        </div>

        {/* Energy label */}
        <div className="flex items-start gap-3">
          <Leaf className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-stone-900">Energielabel</p>
            <p className="text-sm text-stone-600 font-semibold text-emerald-600">
              {type.energielabel}
            </p>
          </div>
        </div>
      </div>

      {/* Suited for */}
      <div className="mb-6">
        <h4 className="font-semibold text-stone-900 mb-3">Geschikt voor</h4>
        <div className="flex flex-wrap gap-2">
          {type.geschiktVoor.map((item, idx) => (
            <span
              key={idx}
              className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* DIY */}
      <div className="flex items-center gap-2 p-3 rounded-lg bg-stone-50 border border-stone-200">
        {type.zelfDoen ? (
          <>
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-stone-700 font-medium">Geschikt voor zelf doen</span>
          </>
        ) : (
          <>
            <X className="w-5 h-5 text-red-600" />
            <span className="text-stone-700 font-medium">Professionele installatie vereist</span>
          </>
        )}
      </div>
    </div>
  );
}

// Comparison Table Component - Pure server component
function ComparisonTable() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
          Vergelijking: Alle 4 soorten op een rij
        </h2>

        <div className="overflow-x-auto rounded-lg border border-stone-200">
          <table className="w-full bg-white">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-100">
                <th className="px-6 py-4 text-left font-bold text-stone-900">Eigenschap</th>
                {vloerverwarmingTypes.map((type) => (
                  <th key={type.id} className="px-6 py-4 text-left font-bold text-stone-900">
                    {type.naam}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Prijs per m²</td>
                {vloerverwarmingTypes.map((type) => (
                  <td key={type.id} className="px-6 py-4 text-stone-700">
                    € {type.prijsPerM2Min} - € {type.prijsPerM2Max}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Installatiekosten</td>
                {vloerverwarmingTypes.map((type) => (
                  <td key={type.id} className="px-6 py-4 text-stone-700">
                    € {type.installatiekosten} per m²
                  </td>
                ))}
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Levensduur</td>
                {vloerverwarmingTypes.map((type) => (
                  <td key={type.id} className="px-6 py-4 text-stone-700">
                    {type.levensduur} jaar
                  </td>
                ))}
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Opwarmtijd</td>
                {vloerverwarmingTypes.map((type) => (
                  <td key={type.id} className="px-6 py-4 text-stone-700">
                    {type.opwarmtijd}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Energielabel</td>
                {vloerverwarmingTypes.map((type) => (
                  <td key={type.id} className="px-6 py-4 text-stone-700 font-semibold text-emerald-600">
                    {type.energielabel}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Zelf doen</td>
                {vloerverwarmingTypes.map((type) => (
                  <td key={type.id} className="px-6 py-4">
                    {type.zelfDoen ? (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                        <Check className="w-4 h-4" />
                        Ja
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-medium">
                        <X className="w-4 h-4" />
                        Nee
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Decision Tree Component - Pure server component
function DecisionTree() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
          Keuzehulp: Welk type is geschikt voor jou?
        </h2>

        <div className="space-y-8">
          {/* Decision 1: New vs Renovation */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Stap 1: Nieuwbouw of renovatie?</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-stone-900 mb-4">Nieuwbouw</h4>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Volledige vrijheid in keuze</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Perfecte integratie mogelijk</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Alle systemen geschikt</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-stone-900 mb-4">Renovatie</h4>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex gap-2">
                    <Wrench className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Beperkte opbouwhoogte</span>
                  </li>
                  <li className="flex gap-2">
                    <Wrench className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Droog systeem populair</span>
                  </li>
                  <li className="flex gap-2">
                    <Wrench className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>Elektriciteit snelle optie</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Decision 2: Budget */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-8 border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Stap 2: Wat is je budget?</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-bold text-stone-900 mb-4">Budget (minder dan 50 euro per m²)</h4>
                <p className="text-stone-700 mb-4">
                  <strong>Aanbeveling:</strong> Infrarood vloerverwarming
                </p>
                <p className="text-sm text-stone-600">Snel geïnstalleerd, laagste materiaalkosten. Ideaal voor gedeeltelijke verwarming.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-bold text-stone-900 mb-4">Standaard (euro 50-75 per m²)</h4>
                <p className="text-stone-700 mb-4">
                  <strong>Aanbeveling:</strong> Elektrisch of infrarood
                </p>
                <p className="text-sm text-stone-600">Goede balans tussen kosten en prestatie. Flexibel in installatie.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-bold text-stone-900 mb-4">Premium (meer dan 75 euro per m²)</h4>
                <p className="text-stone-700 mb-4">
                  <strong>Aanbeveling:</strong> Watervloerverwarming
                </p>
                <p className="text-sm text-stone-600">Meest energieefficiënt. Perfect met warmtepomp. Langste levensduur.</p>
              </div>
            </div>
          </div>

          {/* Decision 3: Specific Use Cases */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-900 mb-6">Stap 3: Specifieke situatie?</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <p className="font-semibold text-stone-900 mb-1">Alleen badkamer/toilet?</p>
                  <p className="text-sm text-stone-600">Elektrische vloerverwarming</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <p className="font-semibold text-stone-900 mb-1">Laminaat of parket?</p>
                  <p className="text-sm text-stone-600">Infrarood of droog systeem</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <p className="font-semibold text-stone-900 mb-1">Lage opbouwhoogte beschikbaar?</p>
                  <p className="text-sm text-stone-600">Droog systeem of infrarood</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <p className="font-semibold text-stone-900 mb-1">Warmtepomp geïnstalleerd?</p>
                  <p className="text-sm text-stone-600">Watervloerverwarming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Intro section - Pure server component
function IntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">De 4 soorten vloerverwarming</h2>
        <p className="text-lg text-stone-700 mb-6">
          Er zijn vier verschillende systemen voor vloerverwarming, elk met eigen voordelen en nadelen. Welk systeem het beste bij jou past, hangt af van je situatie, budget en voorkeur.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <Droplets className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-stone-900">Watervloerverwarming (nat systeem)</p>
              <p className="text-sm text-stone-600">Warm water door leidingen. Meest populair en energieefficiënt.</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-stone-900">Elektrische vloerverwarming</p>
              <p className="text-sm text-stone-600">Elektriciteit warmte. Snel en eenvoudig voor kleine ruimtes.</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <Lightbulb className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-stone-900">Infrarood vloerverwarming</p>
              <p className="text-sm text-stone-600">Infraroodfolie ultra-dun. Eenvoudig zelf te installeren.</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <Grid3x3 className="w-6 h-6 text-slate-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-stone-900">Droog systeem (noppenplaten)</p>
              <p className="text-sm text-stone-600">Water in platen zonder dekvloer. Ideaal voor renovatie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section - Pure server component
function CTASection() {
  return (
    <section className="py-16 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Klaar om je voorkeur te bepalen?</h2>
          <p className="text-xl text-stone-300 mb-8">
            Bereken nu de exacte kosten voor jouw situatie met onze kostencalculator.
          </p>
          <Link
            href="/kosten-calculator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
          >
            Kostencalculator starten
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Page Component - Server component
export default function SoortenPage() {
  const faqItems: FAQItem[] = [
    {
      question: 'Wat is het goedkoopste systeem van vloerverwarming?',
      answer: 'Infrarood vloerverwarming is meestal het goedkoopste om aan te leggen (€35-55 per m² inclusief installatie). Elektrische vloerverwarming is een goede tweede optie. Houd er wel rekening mee dat de energiekosten per jaar hoger liggen dan watervloerverwarming.',
    },
    {
      question: 'Wat is het meest energieefficiënte systeem?',
      answer: 'Watervloerverwarming is veruit het meest energieefficiënt, vooral in combinatie met een warmtepomp. Het werkt op lagere temperaturen en verdeelt warmte gelijkmatig. Dit kan tot 30% energiebesparing opleveren tegenover radiatoren.',
    },
    {
      question: 'Kan ik vloerverwarming zelf installeren?',
      answer: 'Dit hangt af van het systeem. Elektrische en infrarood vloerverwarming zijn goed geschikt voor zelf doen. Watervloerverwarming en droog systemen vereisen meestal professionele installatie door een erkend installateur.',
    },
    {
      question: 'Wat is het verschil tussen nat en droog systeem?',
      answer: 'Een nat (water) systeem heeft warm water in leidingen onder de vloer met een dekvloer erover. Een droog systeem (noppenplaten) heeft water in leidingen in gefreesde platen zonder dekvloer. Het droge systeem is dunner en sneller in renovatie, maar is duurder in materiaal.',
    },
    {
      question: 'Hoelang gaat vloerverwarming mee?',
      answer: 'Watervloerverwarming gaat gemiddeld 50 jaar mee, droog systeem 40 jaar, infrarood 30 jaar en elektrisch 25 jaar. Dit hangt sterk af van kwaliteit en onderhoud. De leidingen gaan veel langer mee dan elektrische componenten.',
    },
    {
      question: 'Welk systeem kan ik het beste kiezen voor mijn renovatie?',
      answer: 'Voor renovatie zonder veel opbouwhoogte: kies het droge systeem of infrarood. Voor volledige vernieuwing met goeie isolatie: watervloerverwarming. Voor gedeeltelijke verwarming (badkamer, keuken): elektrische vloerverwarming. Laat je altijd adviseren door een professional.',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Soorten Vloerverwarming"
        badge="Vergelijking 2026"
        highlightedSubtitle="Welk type past bij jou?"
        subtitle="Vergelijk watervloerverwarming, elektrisch, infrarood en droog systeem. Ontdek de voordelen, nadelen en kosten van elk systeem."
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Soorten', href: '/soorten' },
        ]}
      />

      {/* Intro Section */}
      <IntroSection />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Detailed Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
            Gedetailleerde beschrijving van elk systeem
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {vloerverwarmingTypes.map((type) => (
              <TypeCard
                key={type.id}
                type={type}
                icon={getIconForType(type.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Decision Tree Section */}
      <DecisionTree />

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
