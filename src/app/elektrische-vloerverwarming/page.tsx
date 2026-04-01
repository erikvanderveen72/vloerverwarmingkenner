import { Metadata } from 'next';
import { Zap, Check, X, CheckCircle, XCircle, Hammer, Clock, ThermometerSun, Banknote, Home, HelpCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Elektrische Vloerverwarming 2026 - Kosten, Zelf Doen & Tips',
  description: 'Elektrische vloerverwarming: ideaal als bijverwarming. Kosten vanaf €30/m², snel te installeren en geschikt voor doe-het-zelf. Bekijk onze gids.',
  keywords: [
    'elektrische vloerverwarming',
    'elektrische vloerverwarming kosten',
    'elektrische vloerverwarming zelf doen',
    'vloerverwarming badkamer',
    'elektrische vloer',
  ],
  openGraph: {
    title: 'Elektrische Vloerverwarming 2026 - Kosten, Zelf Doen & Tips',
    description: 'Elektrische vloerverwarming: ideaal als bijverwarming. Kosten vanaf €30/m², snel te installeren en geschikt voor doe-het-zelf. Bekijk onze gids.',
    type: 'website',
  },
};

export const revalidate = 3600;

const breadcrumbs = [
  { label: 'Soorten', href: '/soorten' },
  { label: 'Elektrische Vloerverwarming', href: '/elektrische-vloerverwarming' },
];

const faqItems = [
  {
    question: 'Kan ik elektrische vloerverwarming zelf aanleggen?',
    answer: 'Ja, elektrische vloerverwarming kun je zelf aanleggen! Het bestaat uit verwarmingsmatten of -kabel die je onder je vloervinyl, tegels of laminaat legt. Je moet wel zorgen dat het goed aangesloten wordt op je elektra. Voor installatie advies je een elektricien te raadplegen.',
  },
  {
    question: 'Hoeveel elektriciteit verbruikt elektrische vloerverwarming per maand?',
    answer: 'Het stroomverbruik hangt af van oppervlakte en hoeveel je gebruikt. Een badkamer van 5 m² verbruikt ongeveer 30-50 kWh per maand. Een slaapkamer van 15 m² ongeveer 80-120 kWh. Dat kost je ruwweg €8-25 per maand, afhankelijk van je energietarief.',
  },
  {
    question: 'Is elektrische vloerverwarming geschikt voor badkamers?',
    answer: 'Ja, de badkamer is de ideale plek voor elektrische vloerverwarming. Het geeft een warm, comfortabel gevoel onder je voeten zonder veel energie te verbruiken. Elektrische vloerverwarming is waterdicht en veilig als het goed geïnstalleerd is.',
  },
  {
    question: 'Wat is het verschil tussen elektrisch en watervloerverwarming?',
    answer: 'Watervloerverwarming is efficiënter en voelt gelijkmatiger, maar elektrisch is goedkoper in aanschaf en makkelijker zelf te installeren. Watervloerverwarming is beter voor hoofdverwarming, elektrisch voor bijverwarming of losse kamers.',
  },
  {
    question: 'Hoe lang doet elektrische vloerverwarming het?',
    answer: 'Elektrische vloerverwarming gaat gemiddeld 20-25 jaar mee. Dat is korter dan water (50 jaar), maar nog steeds behoorlijk duurzaam. De verwarmingskabel kan soms eerder kapot gaan als je hem beschadigt bij aanleg.',
  },
  {
    question: 'Kun je elektrische vloerverwarming overal gebruiken?',
    answer: 'Elektrische vloerverwarming werkt onder bijna alle vloersoorten: tegels, vinyl, linoleum, laminaat en parket. Let wel op: onder zwaar meubilair kan het oververhit raken. Zorg altijd voor goed ventilatie als je het gebruikt.',
  },
];

export default function ElektrischeVloerverwarmingPage() {
  return (
    <main className="bg-stone-50">
      {/* Hero Section */}
      <PageHero
        title="Elektrische Vloerverwarming"
        subtitle="Snel warm, goedkoop en geschikt voor doe-het-zelvers"
        highlightedSubtitle="€30-60 per m² • Zelf installeerbaar"
        icon={Zap}
        showBreadcrumbs={true}
        breadcrumbs={breadcrumbs}
      />

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Elektrische vloerverwarming is een populair en betaalbaar systeem voor extra warmte in je huis. Het bestaat uit verwarmingsmatten of -kabels onder de vloer. Perfect als bijverwarming in een badkamer, keuken of slaapkamer, en relatief eenvoudig zelf te installeren.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Lees in dit artikel alles over hoe het werkt, wat het kost, en hoe je het zelf aanlegt.
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
                <td className="px-4 py-3 text-stone-700">€30-60</td>
              </tr>
              <tr className="border-b border-stone-200 bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900">Levensduur</td>
                <td className="px-4 py-3 text-stone-700">20-25 jaar</td>
              </tr>
              <tr className="border-b border-stone-200 bg-white">
                <td className="px-4 py-3 font-semibold text-stone-900">Opwarmtijd</td>
                <td className="px-4 py-3 text-stone-700">20-30 minuten</td>
              </tr>
              <tr className="border-b border-stone-200 bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900">Energielabel</td>
                <td className="px-4 py-3 text-stone-700">B</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-semibold text-stone-900">Zelf installeren</td>
                <td className="px-4 py-3 text-stone-700">Ja, aanbevolen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Voordelen van Elektrische Vloerverwarming</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Snel warm</h3>
                <p className="text-stone-700">Elektrische vloerverwarming wordt in slechts 20-30 minuten warm. Perfect als je snelle extra warmte nodig hebt.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Goedkoper in aanschaf</h3>
                <p className="text-stone-700">Met €30-60 per m² is elektrisch veel goedkoper dan watervloerverwarming. Ook geen dure ketel nodig.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Zelf te installeren</h3>
                <p className="text-stone-700">Je kunt elektrische vloerverwarming zelf aanleggen zonder speciale gereedschappen. Perfecte DIY-project.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Ideaal als bijverwarming</h3>
                <p className="text-stone-700">Perfect voor losse kamers of als extra verwarming. Je hoeft niet je hele huis aan te doen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nadelen Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Nadelen van Elektrische Vloerverwarming</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Hogere energiekosten</h3>
                <p className="text-stone-700">Elektriciteit is duurder dan gas. Elektrische verwarming kan op de lange termijn kostbaarder zijn dan watervloerverwarming.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Niet geschikt als hoofdverwarming</h3>
                <p className="text-stone-700">Voor grootschalige verwarming van heel je huis is elektrisch vaak niet praktisch en te duur om continu aan te hebben.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Kortere levensduur</h3>
                <p className="text-stone-700">Met slechts 20-25 jaar levensduur moet je het eerder vervangen dan watervloerverwarming (50 jaar).</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Geen opbouwhoogte nodig</h3>
                <p className="text-stone-700">Het positieve: elektrisch kabel/mat is ultradun. Maar je bent ook gebonden aan elektriciteitsrooster.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie geschikt Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-blue-50 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">Voor wie is elektrische vloerverwarming geschikt?</h2>
        <div className="space-y-4 text-stone-700">
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Badkamers:</strong> Ultrapopulair in badkamers voor comfort onder de voeten</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Keukens:</strong> Gezellig en comfortabel, zeker in tegel- of stenen vloeren</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Renovaties:</strong> Snel en makkelijk te installeren bij kleine verbouwingen</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Doe-het-zelvers:</strong> Ideaal voor wie het graag zelf wil aanleggen</span>
          </p>
          <p className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span><strong>Bijverwarming:</strong> Perfect voor losse kamers of extra warmte in bepaalde ruimtes</span>
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
              <p className="text-3xl font-bold text-orange-600 mb-2">€30-60/m²</p>
              <p className="text-sm text-stone-600">Verwarmingsmaatten of -kabel</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <Hammer className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-stone-900">Installatie</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">Zelf</p>
              <p className="text-sm text-stone-600">Meestal geen extra kosten</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <div className="flex items-center gap-2 mb-3">
                <Home className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold text-stone-900">Badkamer 5m²</h3>
              </div>
              <p className="text-3xl font-bold text-emerald-600 mb-2">€150-300</p>
              <p className="text-sm text-stone-600">Inclusief materiaal</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded border border-amber-200">
            <p className="text-sm text-stone-700">
              <strong>Maandelijkse kosten:</strong> Een badkamer van 5 m² kost ongeveer €8-15 per maand in energiekosten (afhankelijk van stroomtarief en gebruik).
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
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Bereken je kosten</h2>
          <p className="text-lg mb-6 opacity-90">
            Wil je weten hoeveel elektrische vloerverwarming voor jouw badkamer of kamer kost?
          </p>
          <Link
            href="/kosten"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
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
            <h3 className="font-semibold text-stone-900 mb-2">Watervloerverwarming</h3>
            <p className="text-stone-600 text-sm">Efficiënter en duurzamer alternatief</p>
          </Link>

          <Link
            href="/infrarood-vloerverwarming"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Infrarood Vloerverwarming</h3>
            <p className="text-stone-600 text-sm">Ultra-dun en snelle opwarmtijd</p>
          </Link>

          <Link
            href="/zelf-doen"
            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-stone-900 mb-2">Zelf Aanleggen</h3>
            <p className="text-stone-600 text-sm">Stap-voor-stap handleiding</p>
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
