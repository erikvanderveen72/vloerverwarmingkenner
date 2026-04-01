import { Metadata } from 'next';
import {
  Bath,
  Droplet,
  Zap,
  Thermometer,
  AlertCircle,
  Check,
  X,
  Info,
  ChevronRight,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vloerverwarming Badkamer 2026 - Kosten, Tips & Advies',
  description: 'Vloerverwarming in de badkamer: altijd warme voeten en geen condensvorming meer. Kosten €360-€600 voor gemiddelde badkamer (8m²). Elektrisch systeem perfect.',
  keywords: [
    'vloerverwarming badkamer',
    'badkamer vloerverwarming kosten',
    'vochtbestendige vloerverwarming',
    'waterdichte thermostaat',
    'elektrische vloerverwarming badkamer',
  ],
  openGraph: {
    title: 'Vloerverwarming Badkamer 2026 - Kosten, Tips & Advies',
    description: 'Vloerverwarming in de badkamer: altijd warme voeten en geen condensvorming. Kosten vanaf €360 voor een gemiddelde badkamer. Bekijk onze tips.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function BadkamerPage() {
  const faqItems = [
    {
      question: 'Hoeveel kost vloerverwarming in een badkamer?',
      answer: 'Voor een gemiddelde badkamer van 8 m² rekent u op kosten van €360 tot €600. Dit is inclusief materialen en installatiewerk. Voor een wat grotere badkamer (10 m²) bedraagt dit €450-€750. Elektrische systemen zijn goedkoper in aanschaf dan watervloerverwarming.',
    },
    {
      question: 'Welk type vloerverwarming is het beste voor een badkamer?',
      answer: 'Elektrische vloerverwarming is het meest geschikt voor badkamers. Het warmt snel op (30 minuten), is compact, eenvoudig te installeren en niet gevoelig voor vochtproblemen. Watervloerverwarming kan ook, maar is duurder en niet nodig voor een kleine ruimte.',
    },
    {
      question: 'Is vloerverwarming waterdicht in een badkamer?',
      answer: 'Moderne elektrische verwarmingskabels zijn volledig waterdicht. De kabel zelf is waterdicht geseald, en je hebt een IP67-thermostaat nodig (waterdicht tot 1 meter diepte). Professionele installatie waarborgt proper isolatie en aansluiting.',
    },
    {
      question: 'Hoeveel energieverbruik heeft vloerverwarming in de badkamer?',
      answer: 'Een elektrische vloerverwarming van 8 m² (150W/m²) gebruikt ongeveer 1.200 watt. De dagelijkse kosten bedragen ongeveer €0,30-€0,50 (afhankelijk van stroomprijs). Dit loopt op als je het constant gebruikt, dus een timer is aangeraden.',
    },
    {
      question: 'Kan ik vloerverwarming in de badkamer zelf aanleggen?',
      answer: 'Elektrische vloerverwarming kun je gedeeltelijk zelf leggen (kabels), maar de elektrische aansluiting moet door een erkend elektricien gedaan worden. Voor watervloerverwarming is professionele installatie bijna altijd nodig. Bespaar op arbeidskosten door voorbereiding zelf te doen.',
    },
    {
      question: 'Mag vloerverwarming onder de douche of bad?',
      answer: 'Nee, vloerverwarming mag niet rechtstreeks onder de douche- of badkuip liggen. Dit kan leiden tot water dat in het systeem treedt. Plaats verwarmingskabels wel in de rest van de badkamerruimte, met minimaal 15 cm afstand van waterstoelen en watertoegang.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Vloerverwarming in de Badkamer"
        subtitle="Warme voeten, geen condensvorming en luxe comfort"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Per Ruimte', href: '/per-ruimte' },
          { label: 'Badkamer', href: '/vloerverwarming-badkamer' },
        ]}
        icon={Bath}
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">
            Waarom vloerverwarming in de badkamer?
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            Een koude badkamervloer is onaangenaam, vooral in de vroege ochtend. Vloerverwarming zorgt voor directe warmte onder je voeten en helpt vochtproblemen tegen te gaan. Moderne badkamers worden steeds meer uitgerust met deze comfortabele verwarmingsoplossing.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Elektrische vloerverwarming is ideaal voor badkamers dankzij de compacte afmetingen, snelle opwarmtijd en volledige waterdichtheid. Je hoeft geen pijpen aan te leggen en je bent in korte tijd klaar.
          </p>
        </section>

        {/* Recommended System */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 mb-16 border border-orange-200">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-stone-900">
              Aanbevolen Systeem: Elektrische Vloerverwarming
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Snel warm (30 minuten)</p>
                <p className="text-stone-700">Ideaal voor ochtends gelijk warme voeten</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Compact en waterdicht</p>
                <p className="text-stone-700">Perfect voor kleine ruimte, geen vochtproblemen</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Eenvoudig installeren</p>
                <p className="text-stone-700">Weinig voorbereiding, snel werkend</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Goedkoper in aanschaf</p>
                <p className="text-stone-700">Veel betaalbaarder dan waterverwarming</p>
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
                Gemiddelde badkamer
              </p>
              <p className="text-4xl font-bold text-orange-600 mb-2">8 m²</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-stone-600">Materialen (150W/m²)</p>
                  <p className="text-lg font-semibold text-stone-900">€200-€300</p>
                </div>
                <div className="border-t border-stone-200 pt-3">
                  <p className="text-sm text-stone-600">Installatie & thermostaat</p>
                  <p className="text-lg font-semibold text-stone-900">€160-€300</p>
                </div>
                <div className="border-t border-stone-200 pt-3 bg-orange-50 px-4 py-3 rounded">
                  <p className="text-sm text-stone-600">Totaal</p>
                  <p className="text-2xl font-bold text-orange-600">€360-€600</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <p className="text-sm text-stone-600 uppercase tracking-wide font-semibold mb-2">
                Grotere badkamer
              </p>
              <p className="text-4xl font-bold text-orange-600 mb-2">10 m²</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-stone-600">Materialen (150W/m²)</p>
                  <p className="text-lg font-semibold text-stone-900">€250-€400</p>
                </div>
                <div className="border-t border-stone-200 pt-3">
                  <p className="text-sm text-stone-600">Installatie & thermostaat</p>
                  <p className="text-lg font-semibold text-stone-900">€200-€350</p>
                </div>
                <div className="border-t border-stone-200 pt-3 bg-orange-50 px-4 py-3 rounded">
                  <p className="text-sm text-stone-600">Totaal</p>
                  <p className="text-2xl font-bold text-orange-600">€450-€750</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-stone-700 mt-6 text-sm">
            * Prijzen exclusief eventuele vloerbesparing. Voor installatie in bestaande bouw kan extra voorbereiding nodig zijn.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Tips voor Badkamervloerverwarming</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Waterdichte thermostaat is essentieel',
                desc: 'Kies altijd voor een IP67-thermostaat die volledig waterdicht is. Dit is niet optioneel in een badkamer.',
              },
              {
                title: 'Extra wattage: 150W per m²',
                desc: 'Badkamers hebben vaak hoger vermogen nodig (150W/m²) omdat ze niet als hoofdverwarming fungeren. Je wilt snel warm hebben.',
              },
              {
                title: 'Combineer met handdoekradiator',
                desc: 'Een handdoekradiator voegt extra warmte toe en droogt natte handdoeken. Ideaal voor vochtregeling.',
              },
              {
                title: 'Ventilatie is essentieel',
                desc: 'Vloerverwarming helpt vochtproblemen, maar combineer altijd met goede ventilatie of een afzuiginstallatie.',
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
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Geschikte Vloeren voor de Badkamer</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Tegels', rating: '★★★★★', note: 'Beste warmtegeleiding, waterdicht' },
              { name: 'Natuursteen', rating: '★★★★★', note: 'Klassiek, duurzaam en waterdicht' },
              { name: 'Gietvloer', rating: '★★★★☆', note: 'Modern, waterdicht, elegant' },
            ].map((floor, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-stone-200 p-4 text-center">
                <p className="text-lg font-bold text-stone-900 mb-1">{floor.name}</p>
                <p className="text-orange-600 text-sm font-semibold mb-2">{floor.rating}</p>
                <p className="text-sm text-stone-700">{floor.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
            <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-stone-900 text-sm">Niet geschikt</p>
              <p className="text-sm text-stone-700">Vermijd hout en laminaat in badkamers. Deze vloersoorten kunnen vocht opnemen en opzwellen.</p>
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
                  'Kies voor IP67-thermostaat (waterdicht)',
                  'Start systeem 30 min voor douchen',
                  'Gebruik een tijdschakelaar voor comfort',
                  'Zorg voor goede ventilatie',
                  'Laat installatie door erkend vakman doen',
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
                  'Niet onder douche/bad installeren',
                  'Geen hout of laminaat als vloersoort',
                  'Niet zonder professionele installatie',
                  'Niet zonder ventilatie gebruiken',
                  'Niet op vochtgevoelige materialen leggen',
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
          <h2 className="text-3xl font-bold mb-4">Laten berekenen voor uw badkamer?</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Gebruik onze kostencalculator om exact uit te rekenen wat vloerverwarming in uw badkamer gaat kosten. Inclusief advies op maat.
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
              { title: 'Elektrische vloerverwarming', href: '/elektrische-vloerverwarming' },
              { title: 'Zelf aan leggen', href: '/zelf-doen' },
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
