import { Metadata } from 'next';
import {
  UtensilsCrossed,
  Droplet,
  Zap,
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
  title: 'Vloerverwarming Keuken 2026 - Kosten, Advies & Installatie',
  description: 'Vloerverwarming in de keuken: warm waar u staat, efficient en praktisch comfort. Kosten €975-€1.500 voor gemiddelde keuken 15m². Water of elektrisch systeem.',
  keywords: [
    'vloerverwarming keuken',
    'keuken vloerverwarming kosten',
    'watervloerverwarming keuken',
    'elektrische vloerverwarming keuken',
    'vloerverwarming woonkamer combinatie',
  ],
  openGraph: {
    title: 'Vloerverwarming Keuken 2026 - Kosten, Advies & Installatie',
    description: 'Vloerverwarming in de keuken: prettig warm waar je vaak staat. Kosten vanaf €975. Ontdek het beste systeem en waar je op moet letten.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function KeukenPage() {
  const faqItems = [
    {
      question: 'Hoeveel kost vloerverwarming in de keuken?',
      answer: 'Voor een gemiddelde keuken van 15 m² bedragen de kosten €975 tot €1.500. Dit varieert afhankelijk van het type systeem (elektrisch of water) en de complexiteit van de installatie. Watervloerverwarming is duurder maar efficiënter op lange termijn.',
    },
    {
      question: 'Mag vloerverwarming onder keukenkastjes en apparatuur?',
      answer: 'Nee, plaats verwarmingskabels niet direct onder vaste keukenkastjes, koelkasten of vaatwassers. Deze blokkeren de warmte en kunnen beschadigd worden. Laat vrij ruimte rond apparatuur en zorg dat je watervloer minimaal 15 cm van watertoegang af ligt.',
    },
    {
      question: 'Elektrisch of waterverwarming in de keuken?',
      answer: 'Waterverwarming is beter als je dit combineert met de woonkamer-circuit. Elektrisch is goedkoper voor alleen de keuken. Voor gemiddelde keukens (15 m²) is elektrisch (€150-€200/m²) goedkoper dan water (€250-€350/m²).',
    },
    {
      question: 'Kan ik vloerverwarming in de keuken combineren met de woonkamer?',
      answer: 'Ja, dit is zelfs aan te raden! Bij watervloerverwarming kun je beide ruimtes aan dezelfde circuit aansluiten. Dit verdeelt de warmte efficiënter en bespaart op installatiekosten. Zorg wel voor afzonderlijke thermostaten of smarte zones.',
    },
    {
      question: 'Hoeveel energie gebruikt vloerverwarming in de keuken?',
      answer: 'Een elektrische installatie van 15 m² (150W/m²) gebruikt ongeveer 2.250 watt. Dagelijkse kosten bedragen ongeveer €0,50-€0,80. Gebruik een programmeerbare thermostaat om energie te besparen - je hoeft niet altijd 21°C aan te houden.',
    },
    {
      question: 'Kan ik vloerverwarming in de keuken zelf aanleggen?',
      answer: 'De voorbereiding en kabels leggen kun je gedeeltelijk zelf doen, maar elektrische aansluiting moet door een erkend elektricien gebeuren. Voor watervloerverwarming is bijna altijd professioneel werk nodig. Bespaar door jezelf het werk voor te bereiden.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Vloerverwarming in de Keuken"
        subtitle="Prettig warm waar je het nodig hebt - efficiënt en doelgericht"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Per Ruimte', href: '/per-ruimte' },
          { label: 'Keuken', href: '/vloerverwarming-keuken' },
        ]}
        icon={UtensilsCrossed}
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">
            Vloerverwarming in uw keuken
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            Veel mensen besteden veel tijd in de keuken, vooral voor ontbijt en maaltijdbereiding. Warme voeten in de keuken zorgen voor extra comfort. Vloerverwarming is ook praktisch in keukens omdat je er niet lang zit - daarom is doelgericht verwarmen ideaal.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Je kunt kiezen voor watervloerverwarming (combineer met woonkamer) of elektrisch (als aparte zone). Beide systemen werken goed, afhankelijk van je huissituatie en budget.
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
            <span className="font-bold">Watervloerverwarming</span> (combineer met woonkamer) of <span className="font-bold">elektrisch</span> voor alleen keuken
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Water: efficiënt op lange termijn</p>
                <p className="text-stone-700">Combineer circuit met woonkamer voor beste kostenbesparing</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Elektrisch: eenvoudig en snel</p>
                <p className="text-stone-700">Goedkoper in aanschaf, ideaal als enige zone in keuken</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">Doelgerichte temperatuur</p>
                <p className="text-stone-700">Programmeer lager (18°C) omdat je beweegt en cook-warmte hebt</p>
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
              <p className="text-4xl font-bold text-orange-600 mb-2">15 m²</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-stone-600">Materialen (120W/m²)</p>
                  <p className="text-lg font-semibold text-stone-900">€225-€300</p>
                </div>
                <div className="border-t border-stone-200 pt-3">
                  <p className="text-sm text-stone-600">Installatie & thermostaat</p>
                  <p className="text-lg font-semibold text-stone-900">€300-€450</p>
                </div>
                <div className="border-t border-stone-200 pt-3 bg-orange-50 px-4 py-3 rounded">
                  <p className="text-sm text-stone-600">Totaal</p>
                  <p className="text-2xl font-bold text-orange-600">€525-€750</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <p className="text-sm text-stone-600 uppercase tracking-wide font-semibold mb-2">
                Water + woonkamer
              </p>
              <p className="text-4xl font-bold text-orange-600 mb-2">15 + 35 m²</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-stone-600">Materialen (€150/m²)</p>
                  <p className="text-lg font-semibold text-stone-900">€7.500-€9.000</p>
                </div>
                <div className="border-t border-stone-200 pt-3">
                  <p className="text-sm text-stone-600">Keukenportion</p>
                  <p className="text-lg font-semibold text-stone-900">€975-€1.500</p>
                </div>
                <div className="border-t border-stone-200 pt-3 bg-orange-50 px-4 py-3 rounded">
                  <p className="text-sm text-stone-600">Per 15 m² (split)</p>
                  <p className="text-2xl font-bold text-orange-600">€975-€1.500</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-stone-700 mt-6 text-sm">
            * Watervloerverwarming wordt goedkoper per m² bij grotere projecten. Combineren met woonkamer is voordelig.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Tips voor Keukenvloerverwarming</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Plan lay-out voor installatie',
                desc: 'Bepaal waar kastjes en apparaten komen voordat je vloerverwarming laat installeren. Dit voorkomt dure aanpassingen.',
              },
              {
                title: 'Niet onder apparatuur',
                desc: 'Zorg dat verwarmingskabels niet onder de koelkast, vaatwasser of vaste kastjes liggen. Dit blokkeert warmte en kan beschadigd raken.',
              },
              {
                title: 'Extra isolatie buitenmuur',
                desc: 'Als je keuken tegen een buitenmuur ligt, voeg extra isolatie onder vloerverwarming toe. Dit verhoogt efficiency met 20-30%.',
              },
              {
                title: 'Combineer circuits slim',
                desc: 'Met watervloerverwarming: één circuit voor keuken + woonkamer bespaart op pijpwerk en is efficiënter dan aparte circuits.',
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
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Geschikte Vloeren voor de Keuken</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold text-emerald-700 mb-4 text-lg">Uitstekend geschikt</h3>
              <ul className="space-y-2">
                {['Tegels (beste warmtegeleiding)', 'PVC (duurzaam, waterdicht)', 'Gietvloer (modern, uniform)', 'Vinyl (comfort, duurzaam)'].map((floor, idx) => (
                  <li key={idx} className="flex gap-2 text-stone-700">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    {floor}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-orange-700 mb-4 text-lg">Met voorzichtigheid</h3>
              <ul className="space-y-2">
                {['Laminaat (waterrisico)', 'Hout (kan opzwellen)', 'Marmeren tegels (duur, breekbaar)'].map((floor, idx) => (
                  <li key={idx} className="flex gap-2 text-stone-700">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    {floor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-stone-700">
              <span className="font-semibold">Waarschuwing:</span> Laminaat in keukens is risicovol omdat water en dauw kunnen ontstaan. Vermijd dit waar mogelijk.
            </p>
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
                  'Plan lay-out voor installatie',
                  'Kies voor afzonderlijke zones',
                  'Combineer circuits (water + woonkamer)',
                  'Zorg voor goede isolatie',
                  'Laat professioneel installeren',
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
                  'Niet onder vaste kastjes leggen',
                  'Niet onder koelkast/vaatwasser',
                  'Geen grote vloerkleden leggen',
                  'Niet zonder goede isolatie',
                  'Niet zonder professionele installatie',
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
          <h2 className="text-3xl font-bold mb-4">Kostencalculator voor uw keuken</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Bereken exact wat vloerverwarming in uw keuken gaat kosten. Inclusief adviezen voor combinatie met woonkamer.
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
              { title: 'Woonkamer verwarming', href: '/vloerverwarming-woonkamer' },
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
