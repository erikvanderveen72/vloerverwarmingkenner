import { Metadata } from 'next';
import { Lightbulb, Check, X, CheckCircle, XCircle, Zap, Clock, ThermometerSun, Banknote, Home, HelpCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Infrarood Vloerverwarming 2026 - Werking, Kosten & Ervaringen',
  description: 'Infrarood vloerverwarming: ultra-dun, snel warm en eenvoudig te installeren. Kosten vanaf €35/m². Lees ervaringen en ontdek of het bij jou past.',
  keywords: [
    'infrarood vloerverwarming',
    'infrarood verwarming kosten',
    'infrarood vloer',
    'infrarood heating',
    'ultra-dunne vloerverwarming',
  ],
  openGraph: {
    title: 'Infrarood Vloerverwarming 2026 - Werking, Kosten & Ervaringen',
    description: 'Infrarood vloerverwarming: ultra-dun, snel warm en eenvoudig te installeren. Kosten vanaf €35/m². Lees ervaringen en ontdek of het bij jou past.',
    type: 'website',
  },
};

export const revalidate = 3600;

const breadcrumbs = [
  { label: 'Soorten', href: '/soorten' },
  { label: 'Infrarood Vloerverwarming', href: '/infrarood-vloerverwarming' },
];

const faqItems = [
  {
    question: 'Hoe werkt infrarood vloerverwarming?',
    answer: 'Infrarood vloerverwarming werkt door infraroodstraling uit te zenden, net als zonlicht. In plaats van de lucht of water warm te maken, straalt het direct warmte uit naar voorwerpen en mensen. Dit voelt natuurlijk en comfortabel aan.',
  },
  {
    question: 'Wat is het verschil tussen infrarood en elektrische vloerverwarming?',
    answer: 'Infrarood is een specialisatie van elektrische verwarming. Het grote verschil: infrarood is veel dunner (slechts 2-3mm), warmt sneller op (15-20 min vs 20-30 min), en geeft een ander soort warmte die directer voelt. Elektrisch is goedkoper, infrarood efficiënter.',
  },
  {
    question: 'Kan infrarood vloerverwarming als hoofdverwarming dienen?',
    answer: 'Infrarood kan als hoofdverwarming gebruikt worden, maar het is niet ideaal. De warmte is directer en minder gelijkmatig dan water- of elektrische systemen. Het werkt beter in combinatie met andere verwarming of als bijverwarming in bepaalde kamers.',
  },
  {
    question: 'Is infrarood geschikt onder laminaat en parket?',
    answer: 'Ja, infrarood is juist ideaal onder laminaat en parket! Dankzij de ultra-dunne dikte hoef je geen extra hoogte in te calculeren. Zorg wel voor goede onderlaggering en laat het hout niet uitdrogen door continu hoge temperaturen.',
  },
  {
    question: 'Hoeveel energie verbruikt infrarood vloerverwarming?',
    answer: 'Infrarood is zeer energieefficiënt. Een kamer van 15 m² verbruikt ongeveer 50-80 kWh per maand. Dit is minder dan elektrisch omdat infrarood directer werkt en minder warmte verloren gaat.',
  },
  {
    question: 'Hoe lang gaat infrarood vloerverwarming mee?',
    answer: 'Infrarood vloerverwarming gaat ongeveer 25-30 jaar mee. Dat is minder lang dan watervloerverwarming (50 jaar) maar langer dan regelmatig elektrisch (20 jaar). Als je het goed behandelt, kan het nog langer meegaan.',
  },
];

export default function InfraroodVloerverwarmingPage() {
  return (
    <main className="bg-stone-50">
      {/* Hero Section */}
      <PageHero
        title="Infrarood Vloerverwarming"
        subtitle="Ultra-dun, snel warm en efficiënt. De moderne keuze."
        highlightedSubtitle="€35-55 per m² • Snelste opwarmtijd"
        icon={Lightbulb}
        showBreadcrumbs={true}
        breadcrumbs={breadcrumbs}
      />

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Infrarood vloerverwarming is een relatief nieuwe technologie die steeds populairder wordt. Het is ultra-dun (slechts 2-3mm), warmt razendsnel op, en is eenvoudig zelf te installeren. Perfect onder laminaat, parket en andere vloeren.
          </p>
          <p className="text-stone-600 leading-relaxed">
            In dit artikel vertellen we je alles over how infrarood werkt, de kosten, en of het geschikt is voor jouw huis.
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
                <td className="px-4 py-3 text-stone-700">€35-55</td>
              </tr>
              <tr className="border-b border-stone-200 bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900">Levensduur</td>
                <td className="px-4 py-3 text-stone-700">25-30 jaar</td>
              </tr>
              <tr className="border-b border-stone-200 bg-white">
                <td className="px-4 py-3 font-semibold text-stone-900">Opwarmtijd</td>
                <td className="px-4 py-3 text-stone-700">15-20 minuten</td>
              </tr>
              <tr className="border-b border-stone-200 bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900">Energielabel</td>
                <td className="px-4 py-3 text-stone-700">B+</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-semibold text-stone-900">Zelf installeren</td>
                <td className="px-4 py-3 text-stone-700">Ja, eenvoudig</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Voordelen van Infrarood Vloerverwarming</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Ultra-dun (geen opbouwhoogte)</h3>
                <p className="text-stone-700">Met slechts 2-3mm dikte hoef je geen hoogte in te calculeren. Ideaal voor renovaties met lage ruimtes of onder laminaat/parket.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Snelste opwarmtijd</h3>
                <p className="text-stone-700">In slechts 15-20 minuten is infrarood op temperatuur. Dit is sneller dan elektrisch en veel sneller dan water.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Eenvoudig zelf te installeren</h3>
                <p className="text-stone-700">Infrarood is de gemakkelijkste optie om zelf aan te leggen. Geen speciale gereedschappen nodig, gewoon uitrollen en aansluiten.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Ideaal onder laminaat/parket</h3>
                <p className="text-stone-700">Infrarood werkt perfect onder houten vloeren zonder ze uit te drogen. De dunne opbouw is een groot voordeel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nadelen Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Nadelen van Infrarood Vloerverwarming</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Niet ideaal als hoofdverwarming</h3>
                <p className="text-stone-700">Infrarood is directer maar minder gelijkmatig dan water. Voor hele huizen beter watervloerverwarming.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Hogere energiekosten dan water</h3>
                <p className="text-stone-700">Elektrische infrarood kost meer op de lange termijn dan watervloerverwarming. Voor grote oppervlaktes kostbaarder.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Relatief nieuwe technologie</h3>
                <p className="text-stone-700">Infrarood is nog relatief nieuw. Lange-termijn ervaringen zijn minder uitgebreid dan met klassieke systemen.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Minder geschikt voor tegels</h3>
                <p className="text-stone-700">Onder tegels werkt het goed, maar water werkt beter. Infrarood beste onder houten vloeren.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie geschikt Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-blue-50 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">Voor wie is infrarood vloerverwarming geschikt?</h2>
        <div className="space-y-4 text-stone-700">
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Renovaties:</strong> Ideaal omdat je geen extra hoogte nodig hebt</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Laminaat/parket:</strong> De beste keuze voor houten vloeren</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Doe-het-zelvers:</strong> Meest eenvoudig zelf aan te leggen</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Lage ruimtes:</strong> Perfect waar je geen opbouwhoogte kunt gebruiken</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Losse kamers:</strong> Geweldig voor bijverwarming van bepaalde ruimten</span>
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
              <p className="text-3xl font-bold text-orange-600 mb-2">€35-55/m²</p>
              <p className="text-sm text-stone-600">Infrarood mat of rol</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-stone-900">Installatie</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">Zelf</p>
              <p className="text-sm text-stone-600">Geen extra kosten</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <Home className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold text-stone-900">Kamer 12 m²</h3>
              </div>
              <p className="text-3xl font-bold text-emerald-600 mb-2">€420-660</p>
              <p className="text-sm text-stone-600">Inclusief materiaal</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded border border-amber-200">
            <p className="text-sm text-stone-700">
              <strong>Maandelijkse kosten:</strong> Een kamer van 12 m² kost ongeveer €10-18 per maand in energiekosten. Dit is lager dan elektrisch omdat infrarood directer werkt.
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
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Bereken je kosten</h2>
          <p className="text-lg mb-6 opacity-90">
            Wil je weten hoeveel infrarood vloerverwarming voor jouw kamers kost? Gebruik onze kostencalculator.
          </p>
          <Link
            href="/kosten"
            className="inline-block bg-white text-amber-600 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
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
            <p className="text-stone-600 text-sm">Goedkoper alternatief</p>
          </Link>

          <Link
            href="/watervloerverwarming"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Watervloerverwarming</h3>
            <p className="text-stone-600 text-sm">Meest efficiënt voor grote oppervlakken</p>
          </Link>

          <Link
            href="/zelf-doen"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Zelf Aanleggen</h3>
            <p className="text-stone-600 text-sm">Infrarood is het gemakkelijkst</p>
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
