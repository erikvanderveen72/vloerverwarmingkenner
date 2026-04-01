import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, HelpCircle, TrendingDown } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import KostenCalculator from '@/components/KostenCalculator';
import {
  getPricePerM2,
  getInstallatieKostenPerM2,
  getJaarlijkseEnergieKostenPerM2,
  formatCurrency,
} from '@/lib/calculations';

export const metadata: Metadata = {
  title: 'Vloerverwarming Kosten 2026 - Prijzen per m² & Calculator',
  description:
    'Wat kost vloerverwarming in 2026? Bereken de exacte kosten per m² voor jouw situatie. Vergelijk prijzen van water, elektrisch en infrarood systemen.',
  keywords: [
    'vloerverwarming kosten',
    'vloerverwarming prijs',
    'vloerverwarming kostencalculator',
    'watervloerverwarming kosten',
    'elektrische vloerverwarming kosten',
    'kosten per m2',
  ],
};

export const revalidate = 3600;

export default function KostenPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Kosten', href: '/kosten' },
  ];

  // Price data for overview table
  const typeInfo = [
    {
      name: 'Watervloerverwarming',
      minPrice: 40,
      maxPrice: 75,
      installatie: 25,
      energiePerJaar: 3,
      description: 'Via verwarmingsketel of warmtepomp',
    },
    {
      name: 'Elektrische vloerverwarming',
      minPrice: 30,
      maxPrice: 60,
      installatie: 15,
      energiePerJaar: 6,
      description: 'Directe elektrische opwarmingsmatten',
    },
    {
      name: 'Infrarood vloerverwarming',
      minPrice: 35,
      maxPrice: 55,
      installatie: 10,
      energiePerJaar: 5,
      description: 'Infraroodpanelen, minimalistische aanleg',
    },
    {
      name: 'Droge vloerverwarming',
      minPrice: 55,
      maxPrice: 90,
      installatie: 20,
      energiePerJaar: 3,
      description: 'Snelle installatie, droog systeem',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Vloerverwarming Kosten"
        highlightedSubtitle="Bereken jouw investering"
        badge="Prijzen 2026"
        showBreadcrumbs={true}
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content */}
      <div className="bg-white">
        {/* Key Prices Table Section */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Prijsoverzicht per Type
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl">
              Hieronder een overzicht van de gemiddelde kosten per m² voor verschillende
              vloerverwarmingssystemen in Nederland in 2026.
            </p>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-lg">
            <table className="w-full text-sm sm:text-base">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold text-stone-900">
                    Type
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-right font-semibold text-stone-900">
                    Materiaal
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-right font-semibold text-stone-900">
                    Installatie
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-right font-semibold text-stone-900">
                    Energie/jaar
                  </th>
                  <th className="hidden sm:table-cell px-4 sm:px-6 py-4 text-left font-semibold text-stone-900">
                    Opmerking
                  </th>
                </tr>
              </thead>
              <tbody>
                {typeInfo.map((type, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-stone-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}
                  >
                    <td className="px-4 sm:px-6 py-4 font-medium text-stone-900">
                      {type.name}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right text-stone-600">
                      €{type.minPrice}-€{type.maxPrice}/m²
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right text-stone-600">
                      €{type.installatie}/m²
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right text-stone-600">
                      €{type.energiePerJaar}/m²
                    </td>
                    <td className="hidden sm:table-cell px-4 sm:px-6 py-4 text-stone-500 text-xs">
                      {type.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-stone-500 mt-4">
            * Prijzen zijn indicatief voor Nederland, exclusief directe installatie bij u thuis. Thermostaat
            (€150 per zone) en dekvloer niet inbegrepen in tabel. Deze calculator geeft een beter
            totaaloverzicht.
          </p>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16 sm:py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                Interactieve Kostencalculator
              </h2>
              <p className="text-lg text-stone-600">
                Bereken de totale kosten voor jouw situatie. Pas de oppervlakte, type en aantal
                zones aan om een persoonlijke schatting te krijgen.
              </p>
            </div>

            <KostenCalculator
              title="Mijn Vloerverwarming Kosten"
              description="Bereken jouw persoonlijke investering"
            />
          </div>
        </section>

        {/* Cost Breakdown Section */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-12">
            Wat is Inbegrepen in de Prijs?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Materiaalkosten */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Materiaalkosten</h3>
                  <p className="text-stone-700 mb-3">
                    Alle materialen voor het vloerverwarmingssysteem:
                  </p>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Verwarmingsbuizen of -matten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Isolatielagen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Aansluitstukken en koppelingen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Installatiekosten */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Installatiekosten</h3>
                  <p className="text-stone-700 mb-3">
                    Arbeid en vakmanschap voor correcte plaatsing:
                  </p>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Professionele installatie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Testaansluiting en controle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Eerste inbedrijfstelling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dekvloer */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Dekvloer/Afwerking</h3>
                  <p className="text-stone-700 mb-3">
                    (Voor water- en droge systemen):
                  </p>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cementdekvloer of zelfvlakker</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Voorbereiding voor afwerking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Hardingstijd</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Thermostaat */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    Thermostaat (€150/zone)
                  </h3>
                  <p className="text-stone-700 mb-3">
                    Temperatuurregeling per zone:
                  </p>
                  <ul className="space-y-2 text-stone-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Digitale thermostaat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Onafhankelijke regelaar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Installatie en aansluiting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Costs Comparison Section */}
        <section className="py-16 sm:py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Jaarlijkse Energiekosten Vergelijking
            </h2>
            <p className="text-lg text-stone-600 mb-12 max-w-3xl">
              Vergelijk de jaarlijkse energiekosten voor verschillende systemen (per m²).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Water */}
              <div className="bg-white border border-stone-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Watervloerverwarming</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-blue-600">€3</div>
                  <p className="text-stone-600 text-sm">per m² per jaar</p>
                </div>
                <div className="space-y-3 mb-6 pb-6 border-b border-stone-200">
                  <p className="text-sm text-stone-600">
                    Voor 100 m²: <strong>€300/jaar</strong>
                  </p>
                  <p className="text-sm text-stone-600">
                    Voor 150 m²: <strong>€450/jaar</strong>
                  </p>
                </div>
                <p className="text-xs text-stone-500">
                  Meest energiezuinig, vooral in combinatie met warmtepomp
                </p>
              </div>

              {/* Elektrisch */}
              <div className="bg-white border border-stone-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Elektrische verwarming</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-orange-600">€6</div>
                  <p className="text-stone-600 text-sm">per m² per jaar</p>
                </div>
                <div className="space-y-3 mb-6 pb-6 border-b border-stone-200">
                  <p className="text-sm text-stone-600">
                    Voor 100 m²: <strong>€600/jaar</strong>
                  </p>
                  <p className="text-sm text-stone-600">
                    Voor 150 m²: <strong>€900/jaar</strong>
                  </p>
                </div>
                <p className="text-xs text-stone-500">Duurder in gebruik, geschikt voor kleine oppervlakten</p>
              </div>

              {/* Infrarood */}
              <div className="bg-white border border-stone-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Infrarood panelen</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-red-600">€5</div>
                  <p className="text-stone-600 text-sm">per m² per jaar</p>
                </div>
                <div className="space-y-3 mb-6 pb-6 border-b border-stone-200">
                  <p className="text-sm text-stone-600">
                    Voor 100 m²: <strong>€500/jaar</strong>
                  </p>
                  <p className="text-sm text-stone-600">
                    Voor 150 m²: <strong>€750/jaar</strong>
                  </p>
                </div>
                <p className="text-xs text-stone-500">Matig verbruik, flexibel installeerbaar</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-stone-700">
                <strong>Opmerking:</strong> Water- en drogeystemen kunnen energiebesparing opleveren
                (€2/m²/jaar) ten opzichte van traditionele radiatoren, wat de terugverdientijd
                aanzienlijk verkort.
              </p>
            </div>
          </div>
        </section>

        {/* Tips for Saving Section */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-12">
            Tips om Kosten te Besparen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tip 1 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    Haal meerdere offertes in
                  </h3>
                  <p className="text-stone-700">
                    Prijzen kunnen tot 20% verschillen tussen installateurs. Vergelijk altijd
                    meerdere offertes voordat je een besluit neemt.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    Combineer met isolatie
                  </h3>
                  <p className="text-stone-700">
                    Goede isolatie verhoogt efficiëntie. Minder energieverbruik = lagere jaarlijkse
                    kosten en snellere terugverdientijd.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    Check subsidies en teruggaven
                  </h3>
                  <p className="text-stone-700">
                    Er zijn diverse subsidies beschikbaar. Lees meer op onze subsidiepagina voor
                    mogelijk beschikbare financiering.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    Kies het juiste systeem
                  </h3>
                  <p className="text-stone-700">
                    Water- en drogesystemen zijn duurder in aanleg, maar goedkoper in gebruik.
                    Elektrisch systemen zijn goedkoper te installeren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-12">
              Veelgestelde Vragen over Kosten
            </h2>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <details className="bg-white border border-stone-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-start gap-4 font-semibold text-stone-900 list-none">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-open:hidden" />
                  <span>Hoeveel kost vloerverwarming per m²?</span>
                </summary>
                <p className="mt-4 text-stone-700 ml-9">
                  Dit hangt af van het systeem. Water: €65-€100/m², Elektrisch: €45-€75/m²,
                  Infrarood: €45-€65/m², Droog: €75-€110/m². Deze prijzen inclusief materiaal,
                  installatie en thermostaat.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="bg-white border border-stone-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-start gap-4 font-semibold text-stone-900 list-none">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-open:hidden" />
                  <span>Wat zijn jaarlijkse energiekosten?</span>
                </summary>
                <p className="mt-4 text-stone-700 ml-9">
                  Water- en drogesystemen kosten ongeveer €3/m²/jaar, elektrisch €6/m²/jaar en
                  infrarood €5/m²/jaar. Dit is sterk afhankelijk van isolatie, thermostaatgebruik
                  en klimaat.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="bg-white border border-stone-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-start gap-4 font-semibold text-stone-900 list-none">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-open:hidden" />
                  <span>Wordt de dekvloer altijd nodig?</span>
                </summary>
                <p className="mt-4 text-stone-700 ml-9">
                  Water- en drogesystemen vereisen een dekvloer/afwerking (€22/m² voor water,
                  €5/m² voor droog). Elektrische en infraroodsystemen niet.
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="bg-white border border-stone-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-start gap-4 font-semibold text-stone-900 list-none">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-open:hidden" />
                  <span>Terugverdientijd: hoeveel jaar?</span>
                </summary>
                <p className="mt-4 text-stone-700 ml-9">
                  Water- en drogesystemen kunnen zich in 15-25 jaar terugverdienen door
                  energiebesparing (€2/m²/jaar) ten opzichte van radiatoren. Elektrisch en
                  infrarood hebben geen energiebesparing.
                </p>
              </details>

              {/* FAQ 5 */}
              <details className="bg-white border border-stone-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-start gap-4 font-semibold text-stone-900 list-none">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-open:hidden" />
                  <span>Zijn er versteckte kosten?</span>
                </summary>
                <p className="mt-4 text-stone-700 ml-9">
                  Let op voor: extra advieskosten, aansluitingen op bestaande verwarmingssystemen,
                  reparaties bij ondervindingen, voegwerk, elektrische werkzaamheden. Vraag altijd
                  om een complete gedetailleerde offerte.
                </p>
              </details>

              {/* FAQ 6 */}
              <details className="bg-white border border-stone-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-start gap-4 font-semibold text-stone-900 list-none">
                  <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-open:hidden" />
                  <span>Kan ik subsidie krijgen?</span>
                </summary>
                <p className="mt-4 text-stone-700 ml-9">
                  Ja! In veel gevallen zijn er subsidiemogelijkheden via het Rijk of provincie.
                  Bekijk onze{' '}
                  <Link href="/subsidie" className="text-primary font-semibold hover:underline">
                    subsidiepagina
                  </Link>{' '}
                  voor meer informatie en mogelijkheden.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-orange-600 text-white rounded-lg p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Meer Informatie over Subsidies?
                </h2>
                <p className="text-orange-100 mb-6">
                  Vloerverwarming kan gesubsidieerd worden. Ontdek welke teruggaven en
                  financieringsmogelijkheden voor jouw situatie beschikbaar zijn.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link
                  href="/subsidie"
                  className="inline-flex items-center gap-3 bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Naar Subsidiepagina
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
