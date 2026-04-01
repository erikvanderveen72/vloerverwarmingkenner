import { Metadata } from 'next';
import {
  Moon,
  Droplet,
  Zap,
  Clock,
  Check,
  X,
  Info,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vloerverwarming Slaapkamer 2026 - Kosten, Comfort & Tips',
  description: 'Vloerverwarming slaapkamer: comfortabel warm opstaan voor €910-€1.400 per kamer. Ideale temp 18°C voor veel betere slaapkwaliteit. Goed tegen allergie. Advies.',
  keywords: [
    'vloerverwarming slaapkamer',
    'slaapkamer vloerverwarming kosten',
    'watervloerverwarming slaapkamer',
    'vloerverwarming ideale temperatuur',
    'slaapkamer tapijt vloerverwarming',
  ],
  openGraph: {
    title: 'Vloerverwarming Slaapkamer 2026 - Kosten, Comfort & Tips',
    description: 'Vloerverwarming in de slaapkamer: comfortabel warm opstaan. Kosten vanaf €910. Tips voor temperatuurinstelling en de juiste vloer.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function SlaapkamerPage() {
  const faqItems = [
    {
      question: 'Hoeveel kost vloerverwarming in de slaapkamer?',
      answer: 'Voor een gemiddelde slaapkamer van 14 m² bedragen de kosten €910 tot €1.400. Dit is voor watervloerverwarming als onderdeel van heel-huissysteem, of elektrisch als standalone. Water is goedkoper als je het hele huis verwarmt, elektrisch is voordelig voor alleen slaapkamer.',
    },
    {
      question: 'Wat is de ideale temperatuur voor slaapkamervloerverwarming?',
      answer: 'Slaapkamers hebben 18°C nodig (vs 21°C in woonkamer). Dit is fysiologisch beter voor slaapkwaliteit. Programmeer je systeem om van 21°C overdag naar 18°C nachts te dalen. Vloerverwarming helpt hier goed door - warme voeten, koel hoofd.',
    },
    {
      question: 'Kan ik tapijt op slaapkamervloerverwarming?',
      answer: 'Ja, maar zorg voor dunne tapijten (max 0.10 m²K/W). Dikke tapijten blokkeren warmte. Een dunne onderlaag helpt. Verplaats het tapijt regelmatig zodat de vloer gelijkmatig opwarm en niet beschadigd raakt.',
    },
    {
      question: 'Hoeveel energieverbruik heeft vloerverwarming in slaapkamer?',
      answer: 'Een watervloerverwarming van 14 m² gebruikt ongeveer 1.400 watt bij volle capaciteit. Met programmering (18°C nachts, 21°C overdag) bedragen dagelijkse kosten ongeveer €0,25-€0,40. Dit is veel lager door lagere temperatuur.',
    },
    {
      question: 'Kan ik vloerverwarming in slaapkamer zelf installeren?',
      answer: 'Voor watervloerverwarming is bijna altijd professionele installatie nodig. Elektrische vloerverwarming kun je gedeeltelijk zelf leggen (voorbereiding), maar elektriciteitswerk moet door erkend elektricien. Laat minimaal professioneel afmaken.',
    },
    {
      question: 'Hoe zit het met meerdere slaapkamers?',
      answer: 'Met watervloerverwarming kun je meerdere slaapkamers aan één circuit aansluiten, elk met eigen thermostaat/zone. Dit is goedkoper dan aparte systemen. Elektrisch voor meerdere kamers wordt snel duur - dan is water voordelig.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Vloerverwarming in de Slaapkamer"
        subtitle="Comfortabel warm opstaan en betere slaapkwaliteit"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Per Ruimte', href: '/per-ruimte' },
          { label: 'Slaapkamer', href: '/vloerverwarming-slaapkamer' },
        ]}
        icon={Moon}
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">
            Waarom vloerverwarming in de slaapkamer?
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            Opstaan in een koude slaapkamer voelt onaangenaam. Vloerverwarming zorgt voor prettige warmte onder je voeten, zonder de hele ruimte te hoeven opwarmen. Interessant: slaapkamers hebben eigenlijk 18°C nodig (niet 21°C) voor optimale slaapkwaliteit.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Vloerverwarming is perfect voor slaapkamers omdat je een lagere temperatuur kunt instellen, wat energiekosten bespaart en je slaap verbetert. Bovendien heb je geen luchtcirculatie van radiatoren die stofdeeltjes kunnen rondwaieren.
          </p>
        </section>

        {/* Recommended System */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 mb-16 border border-orange-200">
          <div className="flex items-center gap-3 mb-6">
            <Droplet className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-stone-900">
              Aanbevolen Systeem
            </h2>
          </div>
          <p className="text-stone-700 mb-6">
            <span className="font-bold">Watervloerverwarming</span> (als onderdeel hele huis) of <span className="font-bold">elektrisch</span> als standalone voor slaapkamer
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Water: kostenefficiënt voor meerdere kamers</p>
                <p className="text-stone-700">Ideaal als je hele huis verwarmt. Elke kamer eigen thermostaat.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Elektrisch: eenvoudig en snel voor enkle kamer</p>
                <p className="text-stone-700">Goedkoper als je alleen slaapkamer wilt verwarmen.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Programmering: 18°C is genoeg</p>
                <p className="text-stone-700">Veel lager dan andere ruimtes = flinke energiebesparing.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Allergie-voordeel: geen stofcirculatie</p>
                <p className="text-stone-700">Geen luchtstroming betekent minder huisstof in slaapkamer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Indication */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Kostenindicatie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <p className="text-sm text-stone-600 uppercase tracking-wide font-semibold mb-2">
                Elektrisch systeem
              </p>
              <p className="text-4xl font-bold text-orange-600 mb-2">14 m²</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-stone-600">Materialen (120W/m²)</p>
                  <p className="text-lg font-semibold text-stone-900">€168-€280</p>
                </div>
                <div className="border-t border-stone-200 pt-3">
                  <p className="text-sm text-stone-600">Installatie & thermostaat</p>
                  <p className="text-lg font-semibold text-stone-900">€280-€420</p>
                </div>
                <div className="border-t border-stone-200 pt-3 bg-orange-50 px-4 py-3 rounded">
                  <p className="text-sm text-stone-600">Totaal</p>
                  <p className="text-2xl font-bold text-orange-600">€448-€700</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <p className="text-sm text-stone-600 uppercase tracking-wide font-semibold mb-2">
                Water-onderdeel hele huis
              </p>
              <p className="text-4xl font-bold text-orange-600 mb-2">14 m²</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-stone-600">Aandeel pijpwerk</p>
                  <p className="text-lg font-semibold text-stone-900">€560-€700</p>
                </div>
                <div className="border-t border-stone-200 pt-3">
                  <p className="text-sm text-stone-600">Thermostaat & aansluiting</p>
                  <p className="text-lg font-semibold text-stone-900">€350-€700</p>
                </div>
                <div className="border-t border-stone-200 pt-3 bg-orange-50 px-4 py-3 rounded">
                  <p className="text-sm text-stone-600">Totaal per kamer</p>
                  <p className="text-2xl font-bold text-orange-600">€910-€1.400</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-stone-700 mt-6 text-sm">
            * Water wordt veel goedkoper per m² als je meerdere slaapkamers doet. Dan delen costs de installatie.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Tips voor Slaapkamervloerverwarming</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Lagere temperatuur programmeren (18°C)',
                desc: 'Slaapkamers hebben 18°C nodig, niet 21°C. Dit is fysiologisch beter voor slaapkwaliteit en bespaart veel energie. Programmeer automatisch om in te dalen.',
              },
              {
                title: 'Gebruik een dunner dekbed',
                desc: 'Met vloerverwarming kun je voeten warmer en hoofd koeler houden. Kies voor dunner dekbed als je vloer verwarmend is. Dit verbetert slaapkwaliteit.',
              },
              {
                title: 'Goed voor allergie-lijders',
                desc: 'Geen luchtcirculatie betekent geen stofcirculatie. Voor mensen met allergie of asthma is vloerverwarming beter dan radiatoren.',
              },
              {
                title: 'Programmeer nachtverlaging',
                desc: 'Zorg dat je thermostaat automatisch van 21°C overdag naar 18°C nachts gaat. Dit bespaart tot 40% energiekosten in slaapkamer.',
              },
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-900">{tip.title}</p>
                  <p className="text-stone-700 text-sm mt-1">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suitable Floors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Geschikte Vloeren voor de Slaapkamer</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-stone-200 p-5">
                <h4 className="font-bold text-stone-900 mb-3">Geschikt voor slaapkamer</h4>
                <ul className="space-y-2">
                  {['Laminaat (comfort)', 'PVC/vinyl (duurzaam)', 'Dun tapijt (max 0.10 m²K/W)', 'Parket (dun, max 12mm)'].map((floor, idx) => (
                    <li key={idx} className="text-stone-700 flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      {floor}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg border border-stone-200 p-5">
                <h4 className="font-bold text-stone-900 mb-3">Minder geschikt</h4>
                <ul className="space-y-2">
                  {['Dik tapijt (blokkeert warmte)', 'Massief hout (kan opzwellen)', 'Zeer dikke isolatie onderzijde'].map((floor, idx) => (
                    <li key={idx} className="text-stone-700 flex gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      {floor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900 text-sm">Tapijt tips</p>
                <p className="text-sm text-stone-700">Dun tapijt is goed, maar verzorg regelmatig onderhoud en verplaats het regelmatig zodat vloer gelijkmatig opwarm.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Do's en Don'ts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <Check className="w-6 h-6" /> Dit moet je doen
              </h3>
              <ul className="space-y-3">
                {[
                  'Programmeer nachtverlaging (18°C)',
                  'Stel lagere temp in (niet 21°C)',
                  'Kies voor timer/schakelklok',
                  'Overweeg aparte thermostaat',
                  'Kies dunne tapijten/vloeren',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-stone-700">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <X className="w-6 h-6" /> Dit moet je niet doen
              </h3>
              <ul className="space-y-3">
                {[
                  'Geen dikke vloerbedekking',
                  'Niet te warm (slecht voor slaap)',
                  'Niet zonder isolatie onder vloer',
                  'Niet op massief hout zetten',
                  'Niet zonder programmering (verspilling)',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-stone-700">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSchema items={faqItems} />

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Kostencalculator voor uw slaapkamer</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Bereken exact wat vloerverwarming in uw slaapkamer gaat kosten. Inclusief tips voor programmering en energiebesparing.
          </p>
          <Link
            href="/kosten"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors"
          >
            Naar de calculator →
          </Link>
        </section>

        {/* Related Links */}
        <section className="mt-16 pt-12 border-t border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Gerelateerde onderwerpen</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Watervloerverwarming', href: '/watervloerverwarming' },
              { title: 'Elektrische vloerverwarming', href: '/elektrische-vloerverwarming' },
              { title: 'Kostencalculator', href: '/kosten' },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center justify-between p-4 bg-stone-50 hover:bg-stone-100 rounded-lg transition-colors"
              >
                <span className="font-semibold text-stone-900">{link.title}</span>
                <ChevronRight className="w-5 h-5 text-stone-600" />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
