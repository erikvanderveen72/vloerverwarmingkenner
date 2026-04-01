import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Zap,
  Droplets,
  Wrench,
  Euro,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import StappenplanAccordion from '@/components/StappenplanAccordion';

export const metadata: Metadata = {
  title: 'Vloerverwarming Zelf Aanleggen 2026 - Stappenplan & Tips',
  description:
    'Kun je vloerverwarming zelf aanleggen? Ontdek welke systemen geschikt zijn voor doe-het-zelf, bekijk het stappenplan en leer wat je nodig hebt.',
};

export const revalidate = 3600;

const faqItems = [
  {
    question: 'Kan ik elektrische vloerverwarming echt helemaal zelf aanleggen?',
    answer:
      'Ja, elektrische verwarmingsmatten kun je zelf aanleggen. Let op: de aansluiting op het elektriciteitsnet MOET door een erkend elektricien gebeuren. Dit is wettelijk verplicht en belangrijk voor veiligheid.',
  },
  {
    question: 'Is watervloerverwarming ook geschikt voor doe-het-zelf?',
    answer:
      'Nee, watervloerverwarming is niet geschikt voor DIY. Het installeren vereist ondergrondse buizen, speciale pompen en ingewikkelde aansluitingen. Dit moet altijd door erkende monteurs gebeuren.',
  },
  {
    question: 'Hoe lang duurt het om elektrische vloerverwarming zelf aan te leggen?',
    answer:
      'Voor een gemiddelde kamer (20-30 m²) reken je in totaal 2-4 uur werk: voorbereiding, ondergrond schoonmaken, matten uitrollen, thermostaat aansluiten en testen.',
  },
  {
    question: 'Wat gebeurt er als iets niet goed gaat?',
    answer:
      'Kleine fouten kunnen later nog gecorrigeerd worden. Grote problemen (beschadigde mat, foutieve aansluiting) kunnen duur zijn. Veel fabrikanten bieden garantie alleen als professionele installatie is gecontroleerd.',
  },
  {
    question: 'Hoeveel kost professionele installatie in vergelijking?',
    answer:
      'Professionele installatie kost doorgaans €800-€1.500 extra voor arbeid. Met DIY bespaar je dus ongeveer 50% op de totale kosten.',
  },
  {
    question: 'Heb ik speciale vergunningen nodig voor zelf-installatie?',
    answer:
      'Voor elektrische vloerverwarming heb je geen vergunningen nodig, maar de elektricien moet het werk aanmelden bij het netbedrijf. Check altijd eerst bij je gemeente voor grotere projecten.',
  },
];

export default function ZelfDoenPage() {
  return (
    <>
      <PageHero
        title="Vloerverwarming Zelf Doen"
        badge="DIY Gids 2026"
        highlightedSubtitle="Bespaar op installatiekosten"
        showBreadcrumbs
        breadcrumbs={[{ label: 'Zelf doen', href: '/zelf-doen' }]}
      />

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
          Kun je vloerverwarming zelf aanleggen?
        </h2>
        <p className="text-lg text-stone-700 leading-relaxed mb-6">
          Of je vloerverwarming zelf kunt installeren, hangt af van het type systeem. Elektrische en infrarood systemen zijn geschikt voor doe-het-zelf installatie, terwijl water- en droog systemen vakkundige installatie vereisen.
        </p>
        <div className="rounded-lg border border-stone-200 bg-stone-50 p-6 mb-8">
          <h3 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-orange-500" />
            Wat is geschikt voor DIY?
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700"><strong>Elektrische vloerverwarming:</strong> Matten die je zelf kunt uitrollen onder tegels of laminaat</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700"><strong>Infrarood panelen:</strong> Relatief eenvoudig zelf te installeren</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-stone-700"><strong>Watervloerverwarming:</strong> ALTIJD professional nodig</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-stone-700"><strong>Droog systeem:</strong> Laat dit aan professionals over</span>
            </li>
          </ul>
        </div>
      </section>

      {/* DIY Suitability */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">Geschiktheid per type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Elektrisch', badge: 'Zelf te doen', color: 'green' as const, difficulty: 'Beginner tot intermediair', tools: 'Multimeter, schroevendraaier, rolmaat', time: '2-4 uur per kamer', Icon: Zap },
              { title: 'Infrarood', badge: 'Zelf te doen', color: 'green' as const, difficulty: 'Beginner', tools: 'Schroeven, steiger (voor plafond)', time: '1-2 uur per panel', Icon: Lightbulb },
              { title: 'Water', badge: 'Professional nodig', color: 'red' as const, difficulty: 'Zeer moeilijk', tools: 'Specialistische apparatuur', time: '1-2 weken (professioneel)', Icon: Droplets },
              { title: 'Droog', badge: 'Professional nodig', color: 'red' as const, difficulty: 'Zeer moeilijk', tools: 'Tegelboor, voegkruisen, mengmachine', time: '3-5 dagen (professioneel)', Icon: Wrench },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-stone-200 bg-white p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <item.Icon className="w-8 h-8 text-orange-500" />
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${item.color === 'green' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {item.color === 'green' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-4">{item.title}</h3>
                <div className="space-y-3">
                  <div><p className="text-sm font-medium text-stone-600">Moeilijkheidsgraad</p><p className="text-stone-900">{item.difficulty}</p></div>
                  <div><p className="text-sm font-medium text-stone-600">Gereedschap</p><p className="text-stone-900">{item.tools}</p></div>
                  <div><p className="text-sm font-medium text-stone-600">Geschatte tijd</p><p className="text-stone-900">{item.time}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stappenplan */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
          Stappenplan: Elektrische vloerverwarming zelf aanleggen
        </h2>
        <StappenplanAccordion />
      </section>

      {/* Materials Checklist */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">Wat heb je nodig?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" /> Materialen
              </h3>
              <div className="space-y-3">
                {['Elektrische verwarmingsmat', 'Thermostaat (digitaal, programmeerbaar)', 'Thermo-element / voeler', 'Primer', 'Tegellijm of gietvloer', 'Isolatielaag (optioneel)', 'Vloermateriaal', 'Afwerkmateriaal'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-6 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-orange-500" /> Gereedschap
              </h3>
              <div className="space-y-3">
                {['Multimeter', 'Schroevendraaier set', 'Rolmaat (10m minimum)', 'Waterpas', 'Verfroller (voor primer)', 'Zaag of mes', 'Schop/krabber', 'Bouwkuip of emmer'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warnings */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">Belangrijke waarschuwingen</h2>
        <div className="space-y-4">
          {[
            { title: 'Elektrische aansluiting - ALTIJD vakman!', desc: 'De aansluiting op het elektriciteitsnet mag NOOIT door jezelf. Dit moet door een erkend elektricien die het werk aanmeldt bij de netbeheerder.' },
            { title: 'Goede isolatie is essentieel', desc: 'Je vloer moet voldoende geïsoleerd zijn anders verlies je veel warmte naar beneden. Dit kan tot 30% energieverlies betekenen!' },
            { title: 'Opbouwhoogte checken', desc: 'Een verwarmingsmat voegt 5-10mm toe aan je vloerhoogte. Controleer of dit past bij deuren en traptredes.' },
            { title: 'Garantie en certificaten', desc: 'Veel fabrikanten stellen garantie alleen beschikbaar als het werk is gecertificeerd. Controleer dit VOOR je begint!' },
            { title: 'Vochtproblemen', desc: 'Test de vloer op vochtgehalte voordat je begint - het moet onder 2% zijn. Vochtproblemen moeten eerst opgelost worden.' },
            { title: 'Geen beschadigde matten!', desc: 'Controleer de mat zorgvuldig. Een gat of breuk kan betekenen dat de mat niet werkt of gevaarlijk wordt.' },
          ].map((w) => (
            <div key={w.title} className="flex gap-4 p-4 rounded-lg border border-amber-200 bg-amber-50">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">{w.title}</h4>
                <p className="text-amber-800 text-sm leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">Kostenvergelijking: DIY vs Professional</h2>
          <p className="text-lg text-stone-700 text-center mb-8">Voor elektrische vloerverwarming in een standaard ruimte (40 m²):</p>
          <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-stone-300 bg-stone-50">
                  <th className="text-left py-3 px-4 font-semibold text-stone-900">Kostenpost</th>
                  <th className="text-right py-3 px-4 font-semibold text-stone-900">DIY</th>
                  <th className="text-right py-3 px-4 font-semibold text-stone-900">Professional</th>
                  <th className="text-right py-3 px-4 font-semibold text-stone-900">Besparing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200">
                  <td className="py-3 px-4 text-stone-900">Materiaal (40 m²)</td>
                  <td className="text-right py-3 px-4">€600 - €900</td>
                  <td className="text-right py-3 px-4">€600 - €900</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">€0</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-3 px-4 text-stone-900">Arbeid & installatie</td>
                  <td className="text-right py-3 px-4">€100 - €200</td>
                  <td className="text-right py-3 px-4">€800 - €1.500</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">€600 - €1.300</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-3 px-4 text-stone-900">Thermostaat</td>
                  <td className="text-right py-3 px-4">€150 - €250</td>
                  <td className="text-right py-3 px-4">€300 - €500</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">€150 - €250</td>
                </tr>
                <tr className="bg-stone-100">
                  <td className="py-3 px-4 font-semibold text-stone-900">Totaal</td>
                  <td className="text-right py-3 px-4 font-semibold">€850 - €1.350</td>
                  <td className="text-right py-3 px-4 font-semibold">€1.700 - €2.900</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-bold">€850 - €1.550</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 rounded-lg border border-emerald-200 bg-emerald-50">
            <h3 className="text-lg font-semibold text-emerald-900 mb-3 flex items-center gap-2">
              <Euro className="w-5 h-5" /> Besparing met DIY
            </h3>
            <p className="text-emerald-900 text-sm">Je bespaart gemiddeld 50% op de totale kosten door zelf te installeren. De grootste besparing zit in de arbeidskosten.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSchema items={faqItems} />

      {/* CTA */}
      <section className="bg-gradient-to-r from-stone-900 to-stone-800 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Wil je de exacte kosten weten?</h2>
          <p className="text-stone-300 text-lg mb-8">Gebruik onze kostenberekener om precies uit te rekenen wat je vloerverwarming gaat kosten.</p>
          <Link href="/kosten" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
            Kostenberekener starten <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
