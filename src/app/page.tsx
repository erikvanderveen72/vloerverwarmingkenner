import type { Metadata } from 'next';
import {
  Thermometer,
  Banknote,
  Wrench,
  PiggyBank,
  Scale,
  Flame,
  TrendingUp,
  Home as HomeIcon,
} from 'lucide-react';
import VloerverwarmingCalculator from '@/components/VloerverwarmingCalculator';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Vloerverwarming Vergelijken 2026 - Kosten, Soorten & Advies | Vloerverwarmingkenner.nl',
  description: 'Vergelijk alle soorten vloerverwarming in 2026. Bereken kosten, ontdek subsidies en bepaal welk systeem bij jouw woning past. Onafhankelijk advies, 100% gratis.',
};
export const revalidate = 60;

export default function Home() {
  const faqItems = [
    {
      question: 'Wat kost vloerverwarming per m²?',
      answer: 'De kosten voor vloerverwarming variëren afhankelijk van het type systeem:\n\n• Watervloerverwarming: €40-75 per m² (materiaal en installatie)\n• Elektrische vloerverwarming: €30-60 per m²\n• Infraroodvloerverwarming: €35-55 per m²\n• Droge vloerverwarming: €55-90 per m²\n\nHierbij komen nog thermostaten (€150 per zone) en eventueel dekvloerkosten.',
    },
    {
      question: 'Welk type vloerverwarming is het beste?',
      answer: 'Het beste type hangt af van jouw situatie:\n\n• Watervloerverwarming: Geschikt voor grotere woningen (>30 m²), meest efficiënt op lange termijn, tot 50 jaar levensduur\n• Elektrische vloerverwarming: Ideaal voor kleine oppervlakken of renovaties, goedkoper in installatie\n• Infrarood: Goed voor lokale verwarming, snelle warmteafgifte\n• Droog: Compromis tussen water en elektrisch, goed voor bestaande bouw\n\nUse onze calculator om de beste keuze voor jouw huis te bepalen.',
    },
    {
      question: 'Kan ik vloerverwarming zelf aanleggen?',
      answer: 'Dit is afhankelijk van het type:\n\n• Elektrische vloerverwarming: Geschikt voor ervarenbouwers met basisgereedschap\n• Watervloerverwarming: Niet aanbevolen zonder ervaring, requieert vakmanschap\n• Infrarood: Relatief eenvoudig zelf aan te leggen\n\nWe raden aan voor elektriciteitswerk en waterleidingen altijd een erkende installateur in te schakelen. Dit waarborgt veiligheid en garantie.',
    },
    {
      question: 'Is vloerverwarming geschikt voor mijn woning?',
      answer: 'Vloerverwarming is geschikt voor bijna alle woningen, maar er zijn enkele aandachtspunten:\n\n• Minimale oppervlakte: 5 m² (hoewel 20+ m² ideaal is)\n• Hoogte: Zorg voor voldoende ruimte boven de bestaande vloer (4-7 cm extra)\n• Vloertype: Werkt goed onder tegels, PVC, linoleum en hout\n• Isolatie: Zorg voor goede isolatie onder het systeem\n\nBij renovaties kan laagbouw vloerverwarming (2-3 cm) een oplossing zijn.',
    },
    {
      question: 'Hoeveel bespaar ik met vloerverwarming?',
      answer: 'De besparing varieert per systeem:\n\n• Watervloerverwarming: Tot 30% lager energieverbruik dan radiators (€2/m² per jaar)\n• Droge vloerverwarming: Tot 30% besparing\n• Elektrische vloerverwarming: Geen directe besparing (duurder), maar comfort voordelen\n\nBij een 60 m² oppervlakte kan je met watervloerverwarming €120 per jaar besparen. Over 10 jaar is dat €1.200 besparing.',
    },
    {
      question: 'Krijg ik subsidie voor vloerverwarming?',
      answer: 'In 2026 zijn er verschillende subsidiemogelijkheden:\n\n• ISDE (Investeringssubsidie Duurzame Energie): Tot 25% subsidie voor watervloerverwarming in combinatie met warmtepomp\n• Energielabeling: Verhoging van je energieefficientie kan huizenprijzen verhogen\n• Lokale regelingen: Sommige gemeenten bieden subsidies voor isolatie en verwarmingsupgrades\n\nCheck op NWLG.nl en bij je gemeente voor huidige regelingen.',
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[600px] md:min-h-[700px] bg-stone-950 overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-600 to-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute -top-1/3 -right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-red-600 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        {/* Plus Pattern Overlay */}
        <div className="absolute inset-0 plus-pattern opacity-40" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">Prijzen bijgewerkt - april 2026</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Vloerverwarming
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Vergelijken & Besparen
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mb-10 leading-relaxed">
            Onafhankelijk vergelijkingsplatform voor vloerverwarming. Ontdek welk systeem past bij jouw woning en bespaar op energiekosten.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-stone-900 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
            >
              Bereken je kosten
            </a>
            <a
              href="/soorten"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Welk type past bij mij?
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-sm">
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl">✓</div>
              <span>Onafhankelijk</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl">✓</div>
              <span>Gratis</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl">✓</div>
              <span>Actuele Prijzen 2026</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl">✓</div>
              <span>Erkende Installateurs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg border border-stone-200 text-center">
              <p className="text-sm text-stone-600 mb-2">Gemiddeld</p>
              <p className="text-3xl font-bold text-orange-600">30%</p>
              <p className="text-sm text-stone-600 mt-1">energiebesparing</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-stone-200 text-center">
              <p className="text-sm text-stone-600 mb-2">Kostprijs</p>
              <p className="text-3xl font-bold text-orange-600">Vanaf €30/m²</p>
              <p className="text-sm text-stone-600 mt-1">elektrisch systeem</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-stone-200 text-center">
              <p className="text-sm text-stone-600 mb-2">Levensduur</p>
              <p className="text-3xl font-bold text-orange-600">Tot 50 jaar</p>
              <p className="text-sm text-stone-600 mt-1">watervloerverwarming</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-stone-200 text-center">
              <p className="text-sm text-stone-600 mb-2">Systemen</p>
              <p className="text-3xl font-bold text-orange-600">4 types</p>
              <p className="text-sm text-stone-600 mt-1">vergelijken</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK CALCULATOR SECTION */}
      <section id="calculator" className="bg-stone-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <VloerverwarmingCalculator />
        </div>
      </section>

      {/* 4. POPULAR TOPICS CARD GRID */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-stone-900">
            Populaire onderwerpen
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
            Alles wat je moet weten over vloerverwarming in één plaats
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Soorten Vloerverwarming */}
            <a
              href="/soorten"
              className="group p-6 bg-white border border-stone-200 rounded-lg hover:shadow-lg hover:border-orange-300 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg text-white">
                  <Thermometer className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Soorten Vloerverwarming</h3>
              <p className="text-stone-600 mb-4 text-sm">
                Ontdek de verschillen tussen water-, elektrische, infrarood- en droge vloerverwarming
              </p>
              <div className="text-orange-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Ontdekken →
              </div>
            </a>

            {/* Kosten & Prijzen */}
            <a
              href="/kosten"
              className="group p-6 bg-white border border-stone-200 rounded-lg hover:shadow-lg hover:border-emerald-300 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg text-white">
                  <Banknote className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Kosten & Prijzen</h3>
              <p className="text-stone-600 mb-4 text-sm">
                Gedetailleerd kostenbreakdown en actuele prijzen voor 2026
              </p>
              <div className="text-emerald-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Ontdekken →
              </div>
            </a>

            {/* Zelf Doen */}
            <a
              href="/zelf-doen"
              className="group p-6 bg-white border border-stone-200 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg text-white">
                  <Wrench className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Zelf Doen</h3>
              <p className="text-stone-600 mb-4 text-sm">
                Stap-voor-stap handleiding voor het zelf installeren van vloerverwarming
              </p>
              <div className="text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Ontdekken →
              </div>
            </a>

            {/* Subsidie & Financiering */}
            <a
              href="/subsidie"
              className="group p-6 bg-white border border-stone-200 rounded-lg hover:shadow-lg hover:border-purple-300 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg text-white">
                  <PiggyBank className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Subsidie & Financiering</h3>
              <p className="text-stone-600 mb-4 text-sm">
                Ontdek subsidies, leningen en financieringsopties voor jouw project
              </p>
              <div className="text-purple-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Ontdekken →
              </div>
            </a>

            {/* Voordelen & Nadelen */}
            <a
              href="/voordelen-nadelen"
              className="group p-6 bg-white border border-stone-200 rounded-lg hover:shadow-lg hover:border-amber-300 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg text-white">
                  <Scale className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Voordelen & Nadelen</h3>
              <p className="text-stone-600 mb-4 text-sm">
                Compleet overzicht van voor- en nadelen van vloerverwarming
              </p>
              <div className="text-amber-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Ontdekken →
              </div>
            </a>

            {/* Per Ruimte */}
            <a
              href="/per-ruimte"
              className="group p-6 bg-white border border-stone-200 rounded-lg hover:shadow-lg hover:border-teal-300 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg text-white">
                  <HomeIcon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Per Ruimte</h3>
              <p className="text-stone-600 mb-4 text-sm">
                Advies voor vloerverwarming in specifieke ruimtes van je woning
              </p>
              <div className="text-teal-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Ontdekken →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 5. WAAROM VLOERVERWARMING SECTION */}
      <section className="bg-stone-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">
            Waarom vloerverwarming?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Comfort */}
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="mb-4 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg">
                <Flame className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Superior Comfort</h3>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>Warme voeten en aangename temperatuur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>Gelijkmatige warmteverdeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>Geen tochtverschillen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>Meer vrije muurruimte (geen radiatoren)</span>
                </li>
              </ul>
            </div>

            {/* Energiebesparing */}
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="mb-4 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg">
                <TrendingUp className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Energiebesparing</h3>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Tot 30% lager energieverbruik</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Lagere maandelijkse kosten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Duurzaam en milieuvriendelijk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Werkt goed met warmtepompen</span>
                </li>
              </ul>
            </div>

            {/* Waarde Woning */}
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="mb-4 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg">
                <HomeIcon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Woningwaarde</h3>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Verhoogt waarde van je woning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Betere energielabeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Aantrekkelijker voor kopers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Luxe feature die opvalt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="bg-white py-16 md:py-20">
        <FAQSchema items={faqItems} />
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="bg-gradient-to-r from-stone-950 to-stone-900 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin vandaag met besparen
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Over 10.000+ huiseigenaren vertrouwen Vloerverwarmingkenner voor hun vloerverwarmingskeuze. Ontdek hoeveel jij kunt besparen met onze gratis calculator.
          </p>
          <a
            href="#calculator"
            className="inline-block px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Bereken je besparing
          </a>
        </div>
      </section>
    </main>
  );
}
