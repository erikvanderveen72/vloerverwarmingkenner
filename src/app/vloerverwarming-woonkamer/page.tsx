import { Metadata } from 'next';
import {
  Home,
  Droplet,
  Thermometer,
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
  title: 'Vloerverwarming Woonkamer 2026 - Kosten, Types & Tips',
  description: 'Vloerverwarming woonkamer: comfort en efficiency voor uw belangrijkste ruimte. Kosten €2.275-€3.500 voor 35m². Watervloer als hoofdverwarming. Advies hier.',
  keywords: [
    'vloerverwarming woonkamer',
    'woonkamer vloerverwarming kosten',
    'watervloerverwarming woonkamer',
    'vloerverwarming hoofdverwarming',
    'woonkamer verwarming meubels',
  ],
  openGraph: {
    title: 'Vloerverwarming Woonkamer 2026 - Kosten, Types & Tips',
    description: 'Vloerverwarming in de woonkamer: de belangrijkste ruimte voor comfort. Kosten vanaf €2.275 voor een gemiddelde woonkamer. Vergelijk systemen.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function WoonkamerPage() {
  const faqItems = [
    {
      question: 'Hoeveel kost vloerverwarming in de woonkamer?',
      answer: 'Voor een gemiddelde woonkamer van 35 m² bedragen de kosten €2.275 tot €3.500. Dit is voor watervloerverwarming, die het meest geschikt is voor grotere ruimtes. Elektrisch is duurder per m² voor grote oppervlakken (€5.000-€7.000), dus water wint op lange termijn.',
    },
    {
      question: 'Kan vloerverwarming de hoofdverwarming zijn in de woonkamer?',
      answer: 'Ja, watervloerverwarming kan de primaire verwarming zijn in de woonkamer, vooral als je ook de rest van het huis ermee verwarmt. Zorg wel voor goede isolatie. Bij slechte isolatie is het duurder om de hele ruimte op 21°C te houden - dan is een combinatie met radiatoren beter.',
    },
    {
      question: 'Watervloerverwarming of elektrisch voor de woonkamer?',
      answer: 'Watervloerverwarming is beter voor grote oppervlakken (35+ m²). Water kost initieel meer (€2.275+) maar is efficiënter op lange termijn, vooral als je hele huis verwarmd. Elektrisch is duurder voor grote woonkamers (€5.000+).',
    },
    {
      question: 'Mag ik meubels op warme vloerverwarming zetten?',
      answer: 'Zware meubels zonder poten (zoals slaapkasten op voet) kunnen plaatsen op vloerverwarming, maar zorg dat het remmend effect niet groter is dan 0.15 m²K/W. Verplaats regelmatig vast meubiliar zodat de vloer gelijkmatig warmt. Zware kasten zonder poten kunnen het systeem beschadigen.',
    },
    {
      question: 'Wat moet ik weten over vloerkleden op vloerverwarming?',
      answer: 'Dunne vloerkleden (max 0.10 m²K/W) gaan goed met vloerverwarming. Dikke vloerkleden blokkeren warmte en verhogen energieverbruik met 30%. Een dunne onderlaag helpt. Zorg voor goede circulatie onder het kleed - verplaats het regelmatig.',
    },
    {
      question: 'Welke vloer is het beste voor vloerverwarming in woonkamer?',
      answer: 'Tegels zijn ideaal (warmtegeleiding ~2.0), gevolgd door PVC/vinyl (~1.5). Laminaat kan, zolang de warmteweerstand max 0.09 m²K/W is. Dun parket (max 12mm) is ook goed (~1.2). Vermijd dik tapijt en hout.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Vloerverwarming in de Woonkamer"
        subtitle="De meest comfortabele verwarming voor uw belangrijkste ruimte"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Per Ruimte', href: '/per-ruimte' },
          { label: 'Woonkamer', href: '/vloerverwarming-woonkamer' },
        ]}
        icon={Home}
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">
            Waarom vloerverwarming in de woonkamer?
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            De woonkamer is waar je het meeste tijd doorbrengt. Vloerverwarming zorgt voor gelijkmatige, aangenaam warme voeten en creëert een cosy sfeer. Anders dan radiatoren, die lucht opwarmen, voelt vloerverwarming natuurlijker en comfortabeler.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Watervloerverwarming is ideaal voor woonkamers omdat het groot oppervlak (30-40 m²) zorgt voor efficiënte verdeling. Je kunt het als hoofdverwarming gebruiken, aangevuld met moderne thermostaten en mogelijk een warmtepomp.
          </p>
        </section>

        {/* Recommended System */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 mb-16 border border-orange-200">
          <div className="flex items-center gap-3 mb-6">
            <Droplet className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-stone-900">
              Aanbevolen Systeem: Watervloerverwarming
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Hoofdverwarming mogelijk</p>
                <p className="text-stone-700">Kan als primaire verwarming dienen (met goede isolatie)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Efficiënt op lange termijn</p>
                <p className="text-stone-700">Bespaart 15-30% energiekosten vs radiatoren</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Gelijkmatige verdeling</p>
                <p className="text-stone-700">Veel betere warmteverdeling dan radiatoren</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Combineer met warmtepomp</p>
                <p className="text-stone-700">Ideale partner voor duurzame energie</p>
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
                Gemiddelde woonkamer
              </p>
              <p className="text-4xl font-bold text-orange-600 mb-2">35 m²</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-stone-600">Materialen (watervloer)</p>
                  <p className="text-lg font-semibold text-stone-900">€1.400-€1.750</p>
                </div>
                <div className="border-t border-stone-200 pt-3">
                  <p className="text-sm text-stone-600">Installatie & thermostaat</p>
                  <p className="text-lg font-semibold text-stone-900">€875-€1.750</p>
                </div>
                <div className="border-t border-stone-200 pt-3 bg-orange-50 px-4 py-3 rounded">
                  <p className="text-sm text-stone-600">Totaal</p>
                  <p className="text-2xl font-bold text-orange-600">€2.275-€3.500</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <p className="text-sm text-stone-600 uppercase tracking-wide font-semibold mb-2">
                Elektrisch systeem
              </p>
              <p className="text-4xl font-bold text-orange-600 mb-2">35 m²</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-stone-600">Materialen (elektrisch)</p>
                  <p className="text-lg font-semibold text-stone-900">€2.800-€3.500</p>
                </div>
                <div className="border-t border-stone-200 pt-3">
                  <p className="text-sm text-stone-600">Installatie & thermostaat</p>
                  <p className="text-lg font-semibold text-stone-900">€2.200-€3.500</p>
                </div>
                <div className="border-t border-stone-200 pt-3 bg-orange-50 px-4 py-3 rounded">
                  <p className="text-sm text-stone-600">Totaal</p>
                  <p className="text-2xl font-bold text-orange-600">€5.000-€7.000</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-stone-700 mt-6 text-sm">
            * Watervloerverwarming is veel beter voor grotere oppervlakken. Elektrisch wordt steeds duurder naarmate het oppervlak groter wordt.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Tips voor Woonkamervloerverwarming</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Mogelijkheid van hoofdverwarming',
                desc: 'Vloerverwarming kan je primaire verwarming zijn. Zorg voor goede isolatie (min HR++ isolatieramen) en een slimme thermostaat.',
              },
              {
                title: 'Combineer met warmtepomp',
                desc: 'Vloerverwarming en warmtepomp zijn perfect partners. Lagere temperatuur (30-35°C vs 60°C) maakt warmtepompen veel efficiënter.',
              },
              {
                title: 'Vloerkleden: dunne types',
                desc: 'Kies dunne vloerkleden (max 0.10 m²K/W). Dikke vloerkleden kunnen warmte blokkeren en energieverbruik verhogen met 30%.',
              },
              {
                title: 'Meubels met poten',
                desc: 'Plaats zware meubels voorzichtig. Lichte meubels met poten zijn prima, maar zware kasten kunnen het systeem beschadigen.',
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
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Geschikte Vloeren voor de Woonkamer</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-stone-200 p-5">
                <h4 className="font-bold text-stone-900 mb-3">Ideaal (warmtegeleiding ~2.0)</h4>
                <ul className="space-y-2">
                  {['Tegels/keramisch', 'Natuursteen (marmer, graniet)', 'Gietvloer'].map((floor, idx) => (
                    <li key={idx} className="text-stone-700 flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      {floor}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg border border-stone-200 p-5">
                <h4 className="font-bold text-stone-900 mb-3">Geschikt (1.0-1.5)</h4>
                <ul className="space-y-2">
                  {['PVC/vinyl', 'Laminaat (max 0.09 m²K/W)', 'Dun parket (max 12mm)'].map((floor, idx) => (
                    <li key={idx} className="text-stone-700 flex gap-2">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      {floor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900 text-sm">Niet geschikt</p>
                <p className="text-sm text-stone-700">Dik hout, dik tapijt en massief hout. Deze blokkeren warmte en kunnen beschadigd raken.</p>
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
                  'Kies voor zonering van circuits',
                  'Investeer in slimme thermostaat',
                  'Combineer met warmtepomp',
                  'Zorg voor goede isolatie',
                  'Programmeer lagere nacht temperatuur',
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
                  'Geen dikke vloerkleden leggen',
                  'Geen zware meubels zonder poten',
                  'Niet zonder goede isolatie',
                  'Niet als enige verwarming (slechte isolatie)',
                  'Geen vaste decoratie op warme zones',
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
          <h2 className="text-3xl font-bold mb-4">Kostencalculator voor uw woonkamer</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Bereken exact wat vloerverwarming in uw woonkamer gaat kosten. Inclusief adviezen voor hoofdverwarming en warmtepompcombinatie.
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
              { title: 'Vloerverwarming keuken', href: '/vloerverwarming-keuken' },
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
