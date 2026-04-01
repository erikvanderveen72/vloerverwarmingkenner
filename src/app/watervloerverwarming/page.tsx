import { Metadata } from 'next';
import { Droplets, Check, X, CheckCircle, XCircle, Zap, Clock, ThermometerSun, Banknote, Home, HelpCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Watervloerverwarming 2026 - Kosten, Werking & Advies',
  description: 'Alles over watervloerverwarming in 2026. Hoe werkt het, wat kost het (€40-75/m²) en is het geschikt voor jouw woning? Onafhankelijk advies.',
  keywords: [
    'watervloerverwarming',
    'watervloerverwarming kosten',
    'watervloerverwarming prijs',
    'vloerverwarming water',
    'watervloerverwarming 2026',
  ],
  openGraph: {
    title: 'Watervloerverwarming 2026 - Kosten, Werking & Advies',
    description: 'Alles over watervloerverwarming in 2026. Hoe werkt het, wat kost het (€40-75/m²) en is het geschikt voor jouw woning? Onafhankelijk advies.',
    type: 'website',
  },
};

export const revalidate = 3600;

const breadcrumbs = [
  { label: 'Soorten', href: '/soorten' },
  { label: 'Watervloerverwarming', href: '/watervloerverwarming' },
];

const faqItems = [
  {
    question: 'Hoe werkt watervloerverwarming?',
    answer: 'Watervloerverwarming werkt door warme water door buizen onder de vloer te pompen. Dit water wordt meestal verwarmd door een gasketel, warmtepomp of zonnecollectoren. De warmte straalt uit naar de vloer en verwarmt zo je huis op een heel efficiënt en comfortabel manier.',
  },
  {
    question: 'Wat zijn de kosten voor watervloerverwarming?',
    answer: 'De kosten voor watervloerverwarming liggen tussen €40-75 per m². Voor een gemiddeld huis van 100 m² kost dit ongeveer €4.000-7.500 totaal. Daar komen nog installatiekosten bij. Op de lange termijn bespaart watervloerverwarming echter veel op energiekosten.',
  },
  {
    question: 'Kan ik watervloerverwarming combineren met een warmtepomp?',
    answer: 'Ja, watervloerverwarming en warmtepompen zijn een perfecte combinatie! Warmtepompen werken optimaal met lage stooktemperaturen, precies wat watervloerverwarming nodig heeft. Deze combinatie is zeer energieefficiënt en wordt door veel huizenbouwers aanbevolen.',
  },
  {
    question: 'Hoe lang gaat watervloerverwarming mee?',
    answer: 'Watervloerverwarming heeft een levensduur van ongeveer 50 jaar. Dit maakt het een zeer duurzame investering. De buizen onder de vloer gaan normaal gesproken niet stuk, zolang het systeem goed onderhouden wordt.',
  },
  {
    question: 'Wat voor onderhoud vraagt watervloerverwarming?',
    answer: 'Watervloerverwarming vraagt minimaal onderhoud. Je moet alleen het systeem jaarlijks laten controleren en zorgen dat het water behandeld is. De pompen en regelapparatuur moeten soms vervangen worden, maar de buizen zelf gaan lange mee.',
  },
  {
    question: 'Welke vloersoorten zijn geschikt voor watervloerverwarming?',
    answer: 'Bijna alle vloersoorten zijn geschikt: tegels, natuursteen, beton, laminaat en parket. Keramische tegels en natuursteen geven het beste warmteoverdracht. Houten vloeren kunnen ook, maar je moet voorkomen dat ze te veel uitdrogen.',
  },
];

export default function WatervloerverwarmingPage() {
  return (
    <main className="bg-stone-50">
      {/* Hero Section */}
      <PageHero
        title="Watervloerverwarming"
        subtitle="De meest efficiënte manier om je huis comfortabel warm te krijgen"
        highlightedSubtitle="€40-75 per m² • 50 jaar levensduur"
        icon={Droplets}
        showBreadcrumbs={true}
        breadcrumbs={breadcrumbs}
      />

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Watervloerverwarming is een systeem waarbij warm water door buizen onder je vloer stroomt. Dit geeft optimaal comfort en kan veel energiekosten besparen, vooral in combinatie met een warmtepomp. Het is ideaal voor nieuwbouw en grote renovaties.
          </p>
          <p className="text-stone-600 leading-relaxed">
            In dit artikel lees je alles over hoe watervloerverwarming werkt, wat het kost, en of het geschikt is voor jouw situatie.
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
                <td className="px-4 py-3 text-stone-700">€40-75</td>
              </tr>
              <tr className="border-b border-stone-200 bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900">Levensduur</td>
                <td className="px-4 py-3 text-stone-700">50 jaar</td>
              </tr>
              <tr className="border-b border-stone-200 bg-white">
                <td className="px-4 py-3 font-semibold text-stone-900">Opwarmtijd</td>
                <td className="px-4 py-3 text-stone-700">1-3 uur</td>
              </tr>
              <tr className="border-b border-stone-200 bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900">Energielabel</td>
                <td className="px-4 py-3 text-stone-700">A+</td>
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
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Voordelen van Watervloerverwarming</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Meest energie-efficiënt</h3>
                <p className="text-stone-700">Watervloerverwarming gebruikt 20-40% minder energie dan radiatoren. Met een warmtepomp bereik je zelfs nog beter resultaten.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Lange levensduur</h3>
                <p className="text-stone-700">Met 50 jaar levensduur is watervloerverwarming een zeer duurzame investering die je vloer mee gaat.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Perfect met warmtepomp</h3>
                <p className="text-stone-700">Warmtepompen werken optimaal met watervloerverwarming. Deze combinatie geeft maximale besparing.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Lage stooktemperatuur</h3>
                <p className="text-stone-700">Watervloerverwarming werkt al bij 35-40°C, tegenover 55-65°C voor radiatoren. Dit bespaard aanzienlijk op energie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nadelen Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Nadelen van Watervloerverwarming</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Hoge aanschafkosten</h3>
                <p className="text-stone-700">De eerste investering is groter dan bij radiatoren. Dit verdient zich echter snel terug door lagere energiekosten.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Langzame opwarmtijd</h3>
                <p className="text-stone-700">Het duurt 1-3 uur voordat watervloerverwarming op vol vermogen warmt. Daarom is het minder geschikt als korte piek-verwarming.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Complexe installatie</h3>
                <p className="text-stone-700">Je hebt een professioneel installateur nodig. Dit is niet geschikt voor doe-het-zelvers.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Aanzienlijke opbouwhoogte</h3>
                <p className="text-stone-700">Watervloerverwarming vraagt 7-10cm extra hoogte. Dit kan problematisch zijn in renovaties met lage ruimtes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie geschikt Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-blue-50 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">Voor wie is watervloerverwarming geschikt?</h2>
        <div className="space-y-4 text-stone-700">
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Nieuwbouw:</strong> Perfect voor nieuwe huizen waar je vanaf het begin kunt plannen</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Grote renovaties:</strong> Bij totale verbouwing met ruimte voor opbouwhoogte</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Warmtepomp-eigenaren:</strong> Vooral geschikt als je al een warmtepomp hebt of gaat aanschaffen</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Energie-bewuste huiseigenaren:</strong> Als je maximaal wilt besparen op energiekosten</span>
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
              <p className="text-3xl font-bold text-orange-600 mb-2">€40-75/m²</p>
              <p className="text-sm text-stone-600">Voor buizen en onderdelen</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-stone-900">Installatie</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">€20-40/m²</p>
              <p className="text-sm text-stone-600">Arbeid en aansluitingen</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <Home className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold text-stone-900">Totaal 100 m²</h3>
              </div>
              <p className="text-3xl font-bold text-emerald-600 mb-2">€6.000-11.500</p>
              <p className="text-sm text-stone-600">Inclusief installatie</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-stone-700">
              <strong>Terugverdientijd:</strong> Door lagere energiekosten (20-40% besparing) verdient watervloerverwarming zich meestal terug in 10-15 jaar. Met een warmtepomp kan dit nog sneller gaan.
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
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Bereken je kosten</h2>
          <p className="text-lg mb-6 opacity-90">
            Wil je weten hoeveel watervloerverwarming voor jouw woning kost? Gebruik onze interactieve kostencalculator.
          </p>
          <Link
            href="/kosten"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
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
            href="/elektrische-vloerverwarming"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Elektrische Vloerverwarming</h3>
            <p className="text-stone-600 text-sm">Sneller en goedkoper alternatief</p>
          </Link>

          <Link
            href="/infrarood-vloerverwarming"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Infrarood Vloerverwarming</h3>
            <p className="text-stone-600 text-sm">Ultra-dun en snel warm</p>
          </Link>

          <Link
            href="/droog-systeem"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Droog Systeem</h3>
            <p className="text-stone-600 text-sm">Water zonder opbouwhoogte</p>
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
