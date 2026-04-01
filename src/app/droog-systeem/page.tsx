import { Metadata } from 'next';
import { Grid3x3, Check, X, CheckCircle, XCircle, Droplets, Clock, ThermometerSun, Banknote, Home, HelpCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Droog Systeem Vloerverwarming 2026 - Noppenplaten, Kosten & Advies',
  description: 'Droog systeem vloerverwarming (noppenplaten): watervloerverwarming zonder dekvloer. Ideaal voor renovatie. Kosten €55-90/m². Bekijk ons advies.',
  keywords: [
    'droog systeem vloerverwarming',
    'droog systeem kosten',
    'noppenplaten verwarming',
    'vloerverwarming renovatie',
    'watervloerverwarming droog',
  ],
  openGraph: {
    title: 'Droog Systeem Vloerverwarming 2026 - Noppenplaten, Kosten & Advies',
    description: 'Droog systeem vloerverwarming (noppenplaten): watervloerverwarming zonder dekvloer. Ideaal voor renovatie. Kosten €55-90/m². Bekijk ons advies.',
    type: 'website',
  },
};

export const revalidate = 3600;

const breadcrumbs = [
  { label: 'Soorten', href: '/soorten' },
  { label: 'Droog Systeem', href: '/droog-systeem' },
];

const faqItems = [
  {
    question: 'Wat is het verschil tussen droog systeem en nat systeem watervloerverwarming?',
    answer: 'Beide zijn watervloerverwarming, maar droog systeem gebruikt noppenplaten waarop buizen worden gelegd, zonder dekvloer nodig. Nat systeem vraagt gietwerk (dekvloer) met 5-8cm extra hoogte. Droog systeem is sneller klaar en vraagt minder opbouwhoogte.',
  },
  {
    question: 'Hoeveel opbouwhoogte vraagt droog systeem?',
    answer: 'Droog systeem vraagt slechts 2-3cm extra hoogte (de noppenplaat zelf). Dit is veel minder dan nat systeem (7-10cm). Perfect voor renovaties waar je ruimte wilt besparen.',
  },
  {
    question: 'Welke vloersoort kan ik leggen op droog systeem?',
    answer: 'Op droog systeem kun je vrijwel alle vloersoorten leggen: tegels, natuursteen, laminaat, parket en vinyl. Let wel op: houten vloeren moeten voorzien zijn van speciale onderlaggering vanwege vochtigheid en temperatuurveranderingen.',
  },
  {
    question: 'Wat zijn de kosten voor droog systeem vergeleken met nat?',
    answer: 'Droog systeem kost €55-90 per m², wat duurder is dan nat (€40-75/m²). Echter: je bespaart op gietwerk, droogtijd en extra opbouwhoogte. Op de lange termijn is het verschil kleiner dan het lijkt.',
  },
  {
    question: 'Kan ik droog systeem combineren met een warmtepomp?',
    answer: 'Ja, droog systeem werkt prima met warmtepompen. Eigenlijk werkt het bijna net zo goed als nat systeem met een warmtepomp. Warmtepompen gedijen bij lage stooktemperaturen, wat droog systeem goed kan leveren.',
  },
  {
    question: 'Hoeveel onderhoud vraagt droog systeem?',
    answer: 'Droog systeem vraagt ongeveer hetzelfde onderhoud als nat systeem: jaarlijkse controle, regelmatige spoeling tegen slib, en controle op lekkages. De noppenplaten zelf gaan heel lang mee zonder problemen.',
  },
];

export default function DrooogSysteemPage() {
  return (
    <main className="bg-stone-50">
      {/* Hero Section */}
      <PageHero
        title="Droog Systeem Vloerverwarming"
        subtitle="Watervloerverwarming zonder dekvloer. Perfect voor renovatie."
        highlightedSubtitle="€55-90 per m² • Lage opbouwhoogte"
        icon={Grid3x3}
        showBreadcrumbs={true}
        breadcrumbs={breadcrumbs}
      />

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Droog systeem is watervloerverwarming op basis van noppenplaten. In plaats van buizen in een dekvloer te gieten (nat systeem), worden ze bovenop noppenplaten gelegd. Dit bespaart tijd en opbouwhoogte, vooral handig bij renovaties.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Lees hier alles over hoe droog systeem werkt, de kosten, en of het de juiste keuze voor jouw situatie is.
          </p>
        </div>
      </section>

      {/* Key Specs Table */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Belangrijkste Specificaties</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-stone-200 bg-white">
                <td className="px-4 py-3 font-semibold text-stone-900">Prijs per m²</td>
                <td className="px-4 py-3 text-stone-700">€55-90</td>
              </tr>
              <tr className="border-b border-stone-200 bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900">Levensduur</td>
                <td className="px-4 py-3 text-stone-700">40 jaar</td>
              </tr>
              <tr className="border-b border-stone-200 bg-white">
                <td className="px-4 py-3 font-semibold text-stone-900">Opwarmtijd</td>
                <td className="px-4 py-3 text-stone-700">30-60 minuten</td>
              </tr>
              <tr className="border-b border-stone-200 bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900">Energielabel</td>
                <td className="px-4 py-3 text-stone-700">A</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-semibold text-stone-900">Zelf installeren</td>
                <td className="px-4 py-3 text-stone-700">Niet aanbevolen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Voordelen van Droog Systeem</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Lage opbouwhoogte (2-3cm)</h3>
                <p className="text-stone-700">Veel lager dan nat systeem (7-10cm). Perfect voor renovaties waar je ruimte moet besparen of deuren niet past.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Geen droogtijd dekvloer</h3>
                <p className="text-stone-700">Bij nat systeem moet gietwerk 3-4 weken drogen. Bij droog systeem kun je direct vloer leggen. Veel sneller!</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Ideaal voor renovatie</h3>
                <p className="text-stone-700">Minder rommel, minder rompslomp en sneller klaar. Perfect voor bestaande huizen waar je minimale overlast wilt.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Zeer efficiënt</h3>
                <p className="text-stone-700">Droog systeem geeft energielabel A, net zo goed als nat systeem. Energiebesparing is vergelijkbaar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nadelen Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Nadelen van Droog Systeem</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Duurder dan nat systeem</h3>
                <p className="text-stone-700">€55-90 per m² vs €40-75 voor nat. Je betaalt extra voor het gemak van minder opbouwhoogte en geen droogtijd.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Minder installateurs</h3>
                <p className="text-stone-700">Minder professionals kennen droog systeem goed. Dit kan plaatsing bemoeilijken. Altijd referenties checken.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Iets minder warmteafgifte</h3>
                <p className="text-stone-700">Droog geeft wat minder warmte af dan nat systeem. Verschil is klein, maar merkbaar in grote huizen.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Niet zelf installeerbaar</h3>
                <p className="text-stone-700">Dit is een professioneel systeem. Je bent afhankelijk van een erkende installateur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie geschikt Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-blue-50 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">Voor wie is droog systeem geschikt?</h2>
        <div className="space-y-4 text-stone-700">
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Renovaties:</strong> De ideale keuze voor bestaande huizen met lage ruimtes</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Lage opbouwhoogte:</strong> Nodig in huizen met lage kamers of lage deurkozijnen</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Houten vloeren:</strong> Prima geschikt onder parket of laminaat</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Snelle installatie:</strong> Als je snel klaar wilt zijn (geen droogtijd)</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Bestaande bouw:</strong> Voor ouder bouw waar nat systeem niet past</span>
          </p>
        </div>
      </section>

      {/* Kostenindicatie Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Kostenindicatie</h2>
        <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg p-8 border border-stone-200">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <Banknote className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-stone-900">Materiaal</h3>
              </div>
              <p className="text-3xl font-bold text-orange-600 mb-2">€55-90/m²</p>
              <p className="text-sm text-stone-600">Noppenplaten en buizen</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-stone-900">Installatie</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">€15-25/m²</p>
              <p className="text-sm text-stone-600">Arbeid en afsluiting</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <Home className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold text-stone-900">Totaal 80 m²</h3>
              </div>
              <p className="text-3xl font-bold text-emerald-600 mb-2">€5.600-9.200</p>
              <p className="text-sm text-stone-600">Inclusief installatie</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-stone-700 mb-2">
              <strong>Vergelijking:</strong> Droog is duurder dan nat systeem (€40-75/m²), maar je bespaart op gietwerk, droogtijd en extra opbouwhoogte. Voor renovaties is het totale verschil in prijs meestal klein.
            </p>
            <p className="text-sm text-stone-700">
              <strong>Energiebesparing:</strong> Net als nat systeem: 20-40% minder energiegebruik dan radiatoren. Met warmtepomp nog beter.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <FAQSchema items={faqItems} />
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 mb-12">
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Bereken je kosten</h2>
          <p className="text-lg mb-6 opacity-90">
            Wil je weten hoeveel droog systeem voor jouw renovatie kost? Gebruik onze interactieve calculator.
          </p>
          <Link
            href="/kosten"
            className="inline-block bg-white text-slate-700 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
          >
            Ga naar Kostencalculator
          </Link>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Gerelateerde pagina's</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/watervloerverwarming"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Watervloerverwarming (Nat)</h3>
            <p className="text-stone-600 text-sm">Klassieke variant met dekvloer</p>
          </Link>

          <Link
            href="/elektrische-vloerverwarming"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Elektrische Vloerverwarming</h3>
            <p className="text-stone-600 text-sm">Goedkoper alternatief</p>
          </Link>

          <Link
            href="/infrarood-vloerverwarming"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Infrarood Vloerverwarming</h3>
            <p className="text-stone-600 text-sm">Ultra-dun en snel warm</p>
          </Link>

          <Link
            href="/soorten"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Alle Soorten Vergelijken</h3>
            <p className="text-stone-600 text-sm">Volledige vergelijking van alle types</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
