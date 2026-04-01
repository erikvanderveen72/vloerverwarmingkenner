import type { Metadata } from 'next';
import {
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Zap,
  Wrench,
  FileText,
  Droplet,
  Shield,
  ArrowRight,
  Clock,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Offerte Checklist Vloerverwarming 2026 - Smart Vergelijken',
  description:
    'Offerte checklist vloerverwarming: vergelijk quotes slim en vermijd dure fouten. 7 kritieke checkpoints, kostentabel en veelgemaakte installatiefouten.',
  keywords: [
    'offerte vloerverwarming',
    'offerte checklist',
    'vloerverwarming checklist',
    'offertes vergelijken',
    'vloerverwarming kosten 2026',
    'installatie fouten',
  ],
};

export const revalidate = 3600;

export default function OfferteChecklistPage() {
  const checkpoints = [
    {
      number: 1,
      title: 'Hart-op-hart Afstand',
      icon: Droplet,
      critical: true,
      description: 'Is 10 cm gegarandeerd voor hoofdverwarming? (15 cm = bijverwarming only)',
      details: [
        'Vraag duidelijk om welke afstand ze gebruiken',
        'Voor zelfstandige verwarming: minimaal 10 cm',
        'Groter dan 15 cm = te laag vermogen voor primaire verwarming',
        'Controleer dit in de offerte en bouwplannen',
      ],
    },
    {
      number: 2,
      title: 'Materiaalkwaliteit',
      icon: Shield,
      critical: true,
      description: 'Diffusiedichte buizen met KOMO- of KIWA-keurmerk?',
      details: [
        'Zorg dat buizen diffusiedicht zijn (geen zuurstof-doorlatend)',
        'KOMO-keurmerk Nederlandse standaard (NEN 12 668)',
        'KIWA-keurmerk Belgische standaard',
        'Zonder keurmerk = risico op corrosie op lange termijn',
        'Vraag certificaten op in de offerte',
      ],
    },
    {
      number: 3,
      title: 'Pompklasse',
      icon: Zap,
      critical: true,
      description: 'Is verdeler voorzien van energiezuinige A-label pomp?',
      details: [
        'Oude pompen: 60-100W constant vermogen',
        'Moderne A-label pompen: aanpassend naar behoefte (5-20W)',
        'Energiebesparing: €50-100 per jaar op elektriciteitskosten',
        'Over 15 jaar: €750-1.500 terugverdienen',
        'Zorg voor A-label (ErP 2020 norm)',
      ],
    },
    {
      number: 4,
      title: 'Isolatie',
      icon: TrendingUp,
      critical: true,
      description: 'Is randisolatie EN vloerisolatie inbegrepen?',
      details: [
        'Randisolatie langs alle wanden nodig voor uitzetting',
        'Vloerisolatie onderzijde voorkomt warmteverlies naar beneden',
        'Zonder randisolatie = scheuren in dekvloer (zeer kostbaar)',
        'Minimaal 2 cm EPS of minerale wol onderzijde',
        'Randisolatie in offerte moet expliciet vermeld staan',
      ],
    },
    {
      number: 5,
      title: 'Garantievoorwaarden',
      icon: FileText,
      critical: true,
      description: 'Minimaal 10 jaar garantie op gevolgschade bij lekkage?',
      details: [
        'Materiaalgarantie: minstens 10-15 jaar',
        'Garantie op lekkages: zeer belangrijk!',
        'Dekking voor water/schade in dekvloer',
        'Wat gebeurt er NA garantieperiode?',
        'Vraag garantiedocument in offerte',
      ],
    },
    {
      number: 6,
      title: 'Druktest',
      icon: Wrench,
      critical: true,
      description: 'Wordt systeem op druk gezet VOOR dekvloer wordt gestort?',
      details: [
        'Cruciale check: druktest MOET voor betonstort',
        'Lekkages achteraf herstellen kost €5.000-20.000+',
        'Druk: 1,5x de werkdruk (normaal: 2-3 bar)',
        'Test duur: minimaal 24 uur',
        'Vraag dit expliciet in schrift in offerte',
      ],
    },
    {
      number: 7,
      title: 'Groepsindeling',
      icon: MapPin,
      critical: false,
      description: 'Geen groepen langer dan 120 meter?',
      details: [
        'Groepen > 120m = te veel weerstand',
        'Gevolgen: inefficiënte pomp, oneven warmte',
        'Kan pumpcirculatie problemen veroorzaken',
        'Zorg voor juiste groepsindeling in plan',
        'Bij twijfel: meer kleinere groepen beter dan 1 lange',
      ],
    },
  ];

  const commonMistakes = [
    {
      title: 'Geen druktest uitgevoerd',
      description:
        'Lekkages achteraf herstellen is extreem kostbaar (€5.000-20.000+). Dit is de grootste fout!',
      impact: 'critical',
      prevention:
        'Zorg dat contractueel staat dat druktest VOOR dekvloer/storten wordt gedaan en 24u gedocumenteerd.',
    },
    {
      title: 'Onjuiste groepsindeling',
      description:
        'Groepen langer dan 120 meter veroorzaken te veel weerstand, onefficiënte pomp en ongelijke warmteverdeling.',
      impact: 'high',
      prevention:
        'Laat architect/installateur berekenen hoeveel groepen nodig zijn voor jouw oppervlakte.',
    },
    {
      title: 'Randisolatie vergeten',
      description:
        'Vloer kan niet uitzetten tegen muren wat leidt tot scheuren in dekvloer. Zeer kostbaar om te herstellen.',
      impact: 'critical',
      prevention:
        'Controleer bouwplan: minstens 1 cm randisolatie overal langs wanden moet aanwezig zijn.',
    },
    {
      title: 'Geen opstookprotocol gevolgd',
      description:
        'Snelle opwarming van verse dekvloer veroorzaakt structurele schade, scheuren en verzakking.',
      impact: 'critical',
      prevention:
        'Zorg dat installateur vastlegt hoe vloer geleidelijk opgewarmd wordt (max 5°C per dag eerste 2 weken).',
    },
    {
      title: 'Isolatie onderzijde vergeten (infrezen)',
      description:
        'Bij infrezensystemen: warmte vloeit weg naar fundering/krip zonder isolatie onderzijde. Energieverspilling.',
      impact: 'high',
      prevention:
        'Voor infrezen: zorg voor minimaal 4 cm isolatie onder de buizen (PIR of EPS).',
    },
  ];

  const costTable = [
    {
      area: '10 m² (badkamer)',
      infrezen: '€900-1.100',
      natbouw: '€1.050-1.300',
      droog: '€1.400-1.700',
    },
    {
      area: '40 m² (woonkamer)',
      infrezen: '€1.600-2.000',
      natbouw: '€2.200-2.700',
      droog: '€2.800-3.500',
    },
    {
      area: '80 m² (verdieping)',
      infrezen: '€2.800-3.500',
      natbouw: '€4.200-5.300',
      droog: '€5.600-7.000',
    },
    {
      area: '120 m² (hele woning)',
      infrezen: '€3.600-4.500',
      natbouw: '€6.400-8.000',
      droog: '€8.500-10.500',
    },
  ];

  const faqItems = [
    {
      question: 'Hoeveel offertes moet ik minimum inwinnen?',
      answer:
        'Minimaal 3 offertes van verschillende installateurs. Dit geeft een goed beeld van de marktprijs en laat verschillen in kwaliteit en service zien. Veel mensen halen zelfs 5-6 offertes in. Let erop dat je dezelfde systeem (infrezen, natbouw of droog) vergelijkt.',
    },
    {
      question: 'Wat moet absoluut in mijn offerte staan?',
      answer:
        'Essentieel in schrift:\n• Exacte systeemtype en hart-op-hart afstand\n• Alle materialen inclusief isolatie en randisolatie\n• Arbeid en installatie (per dag/vast bedrag)\n• Druktest VOOR dekvloer storten (ja/nee)\n• Thermostaattype en aantal zones\n• Garantieperiode (minstens 10 jaar)\n• BTW en totaalbedrag\n• Betalingsschema\n\nZorg dat dit niet "onder voorbehoud" staat.',
    },
    {
      question: 'Hoe herken ik een nep of onbetrouwbare offerte?',
      answer:
        'Rode vlaggen:\n• Prijs is extreem laag (€20-30/m² voor water/droog zijn onrealistisch)\n• Geen details over materiaalkwaliteit (geen merknamen/certificaten)\n• Geen vermeld wat wel/niet is inbegrepen\n• Geen garantie of garantie < 5 jaar\n• Geen duidelijk bedrijfsnaam/adres\n• Druktest niet genoemd\n• "Prijs onder voorbehoud"\n\nTwijfel je? Vraag om verduidelijking of kies ander bedrijf.',
    },
    {
      question: 'Kan ik zelf kosten besparen op installatie?',
      answer:
        'Sommige onderdelen kun je besparen:\n• Zelf materiaal bestellen (buizen, fittingen): -5-10%\n• Je voorbereiding doen (oude vloer verwijderen): -5%\n• Alleen laagste druk laten testen: niet doen! (risico)\n\nGroot risico: slechte montage veroorzaakt volgende 30 jaar problemen. Professional installatie (€15-25/m²) is meestal het geld waard.',
    },
    {
      question: 'Wat zijn "verborgen kosten" waar ik op moet letten?',
      answer:
        'Veel bedrijven rekenen extra voor:\n• Aansluitingen op CV-ketel/warmtepomp\n• Elektrische werkzaamheden en thermostaat\n• Verwijdering oude vloer (bij renovatie)\n• Reparaties bij ondervindingen\n• Vervoers-/opstelkosten\n• Vloerwerken/voegwerk\n\nVraag altijd: "Zijn alle kosten inbegrepen of kan dit nog toenemen?" en laat een "vaste prijs" vastleggen in het contract.',
    },
    {
      question: 'Wat moet ik vragen over referenties en ervaring?',
      answer:
        'Dit is heel belangrijk:\n• Vraag minstens 3 referenties van eerdere projecten\n• Hoeveel jaar ervaring met dit systeem?\n• Zijn ze ingeschreven bij KvK en NBvI?\n• Hebben ze KOMO- of KIWA-certificering?\n• Lees Google/Trustpilot reviews\n• Bel referenties op en vraag naar ervaringen\n\nErvaren bedrijven hebben geen probleem met referenties geven. Pas op als iemand weg wil hier overheen.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Offerte Checklist Vloerverwarming"
        highlightedSubtitle="Smart vergelijken en dure fouten vermijden"
        badge="Checklist 2026"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      {/* Main Content */}
      <div className="bg-white">
        {/* Intro Section */}
        <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
              Bij aanschaf niet alleen naar laagste prijs kijken
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              Kwaliteit is pas na jaren zichtbaar in rendement en afwezigheid van lekkages. Een goedkope
              offerte met mindere kwaliteit kan je decennialang teisteren. Deze checklist helpt je slim
              te vergelijken en dure installatiefouten te voorkomen.
            </p>
          </div>
        </section>

        {/* 7 Checkpoints Section */}
        <section className="py-16 sm:py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                De 7 Kritieke Checkpoints
              </h2>
            </div>

            <div className="space-y-6">
              {checkpoints.map((checkpoint) => {
                const Icon = checkpoint.icon;
                return (
                  <div
                    key={checkpoint.number}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-l-orange-500 hover:shadow-xl transition-shadow"
                  >
                    <div className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                            checkpoint.critical
                              ? 'bg-red-100 text-red-600'
                              : 'bg-blue-100 text-blue-600'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-orange-600">
                              CHECKPOINT {checkpoint.number}
                            </span>
                            {checkpoint.critical && (
                              <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-700 rounded">
                                KRITIEK
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                            {checkpoint.title}
                          </h3>
                          <p className="text-stone-600 mt-2">{checkpoint.description}</p>
                        </div>
                      </div>

                      <div className="mt-6 pl-16 border-t border-stone-200 pt-6">
                        <p className="font-semibold text-stone-900 mb-3">
                          Wat je moet controleren:
                        </p>
                        <ul className="space-y-2">
                          {checkpoint.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-stone-700">
                              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Veelgemaakte Fouten bij Installatie
            </h2>
          </div>

          <div className="space-y-6">
            {commonMistakes.map((mistake, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 border-l-4 ${
                  mistake.impact === 'critical'
                    ? 'bg-red-50 border-l-red-500'
                    : 'bg-amber-50 border-l-amber-500'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle
                    className={`w-6 h-6 flex-shrink-0 mt-1 ${
                      mistake.impact === 'critical'
                        ? 'text-red-600'
                        : 'text-amber-600'
                    }`}
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                      {mistake.title}
                    </h3>
                    <p className="text-stone-700 mb-4">{mistake.description}</p>
                    <div
                      className={`p-4 rounded-lg ${
                        mistake.impact === 'critical'
                          ? 'bg-red-100'
                          : 'bg-amber-100'
                      }`}
                    >
                      <p className="text-sm font-semibold text-stone-900 mb-1">
                        Hoe voorkom je dit:
                      </p>
                      <p className="text-sm text-stone-700">{mistake.prevention}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Indication Table */}
        <section className="py-16 sm:py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Kostenindicatie per Methode
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Prijsrange inclusief BTW, materialen en professionele montage (2025/2026):
            </p>

            <div className="overflow-x-auto border border-stone-200 rounded-2xl">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-orange-500 text-white">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold">
                      Oppervlakte
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold">
                      Infrezen
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold">
                      Natbouw op Netten
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold">
                      Droogbouw
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {costTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-stone-200 ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'
                      }`}
                    >
                      <td className="px-4 sm:px-6 py-4 font-semibold text-stone-900">
                        {row.area}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-stone-700">{row.infrezen}</td>
                      <td className="px-4 sm:px-6 py-4 text-stone-700">{row.natbouw}</td>
                      <td className="px-4 sm:px-6 py-4 text-stone-700">{row.droog}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-stone-700">
                <strong>Opmerking:</strong> Deze prijzen zijn indicatief. Werkelijke kosten kunnen
                verschillen door lokale omstandigheden, vloersamenstelling, beschikbaarheid materiaal
                en arbeidskosten. Vraag altijd een gedetailleerde offerte aan.
              </p>
            </div>
          </div>
        </section>

        {/* Smart Comparison Tips */}
        <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-12">
            Slim Offertes Vergelijken Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Vraag altijd minimaal 3 offertes',
                description:
                  'Drie is het minimum voor een goed beeld van marktprijzen. Veel consumenten halen er 5-6 in voor zekerheid.',
                icon: FileText,
              },
              {
                title: 'Let op wat WEL en NIET is inbegrepen',
                description:
                  'Sommige offertes laten cruciale zaken weg (isolatie, druktest, garantie). Vergelijk appels met appels.',
                icon: CheckCircle,
              },
              {
                title: 'Vraag referenties van eerdere projecten',
                description:
                  'Echte referenties van klanten geven veel inzicht. Bel minstens 3 referenties op voor ervaringen.',
                icon: Clock,
              },
              {
                title: 'Check reviews en keurmerken installateur',
                description:
                  'Google/Trustpilot reviews zijn waardevol. Check ook KOMO/KIWA certificering en inschrijving NBvI.',
                icon: Shield,
              },
              {
                title: 'Laat berekening maken van verwacht energieverbruik',
                description:
                  'Een goede installateur kan berekenen hoeveel je per jaar bespaart t.o.v. radiatoren. Vraag dit schrift.',
                icon: Zap,
              },
              {
                title: 'Vraag uitleg als prijzen sterk verschillen',
                description:
                  'Als ene offerte €2.000 lager is: waarom? Minder isolatie? Slechtere materialen? Lagere garantie?',
                icon: DollarSign,
              },
            ].map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-2">{tip.title}</h3>
                      <p className="text-sm text-stone-700">{tip.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-12">
              Veelgestelde Vragen
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <details
                  key={idx}
                  className="bg-white border border-stone-200 rounded-xl p-6 cursor-pointer group"
                >
                  <summary className="flex items-start gap-4 font-semibold text-stone-900 list-none">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center text-sm font-bold group-open:hidden">
                      +
                    </span>
                    <span className="flex-grow text-left">{item.question}</span>
                  </summary>
                  <p className="mt-4 text-stone-700 ml-10 whitespace-pre-line">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            <FAQSchema items={faqItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CTA 1: Kosten */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">
                    Gedetailleerde Kostencalculator
                  </h3>
                  <p className="text-stone-700 mb-6">
                    Bereken exact wat jouw situatie kost. Interactieve calculator met alle variabelen.
                  </p>
                  <Link
                    href="/kosten"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
                  >
                    Naar kostencalculator
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA 2: Subsidie */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">
                    Subsidie en Financiering
                  </h3>
                  <p className="text-stone-700 mb-6">
                    Check welke teruggaven en subsidies je kan krijgen voor jouw situatie.
                  </p>
                  <Link
                    href="/subsidie-check"
                    className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline"
                  >
                    Subsidie checken
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Klaar om slimmer te vergelijken?
            </h2>
            <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
              Gebruik deze checklist en vermijd dure installatiefouten. Met de juiste offerte ben je
              verzekerd van een vloerverwarmingssysteem dat decennia meegaat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/soorten"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
              >
                Soorten vloerverwarming
              </a>
              <a
                href="/kosten"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors"
              >
                Kostenberekening
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
