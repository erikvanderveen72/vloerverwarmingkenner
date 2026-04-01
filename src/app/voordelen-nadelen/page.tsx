import type { Metadata } from 'next';
import {
  CheckCircle,
  XCircle,
  TrendingUp,
  Wind,
  Wrench,
  AlertCircle,
  Zap,
  Home,
  ThermometerSun,
  DollarSign,
  Clock,
  Lightbulb,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Voordelen en Nadelen Vloerverwarming 2026 - Eerlijk Overzicht',
  description: 'Wat zijn de voordelen en nadelen van vloerverwarming? Eerlijk en onafhankelijk overzicht van comfort, kosten, energie en installatie.',
};
export const revalidate = 3600;

interface ProCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

interface ComparisonRow {
  feature: string;
  vloerverwarming: string;
  radiatoren: string;
}

export default function VoordelenNadelenPage() {
  const voordelen: ProCard[] = [
    {
      title: 'Gelijkmatige warmteverdeling',
      description: 'Warmte wordt uniform verdeeld over de hele vloer, zonder koude plekken of temperatuurverschillen',
      icon: ThermometerSun,
      category: 'Comfort',
    },
    {
      title: 'Geen zichtbare radiatoren',
      description: 'Bespaar veel ruimte in je woning zonder lelijke radiatoren aan de muren',
      icon: Home,
      category: 'Comfort',
    },
    {
      title: 'Gezonder binnenklimaat',
      description: 'Lagere luchtvochtigheid en minder stofcirculatie, beter voor mensen met astma en allergiën',
      icon: Wind,
      category: 'Gezondheid',
    },
    {
      title: 'Warme voeten',
      description: 'Veel comfortabeler dan radiatoren, vooral in badkamers, slaapkamers en woonkamers',
      icon: TrendingUp,
      category: 'Comfort',
    },
    {
      title: 'Tot 30% energiebesparing',
      description: 'Watervloerverwarming verbruikt minder energie door efficiëntere warmteoverdracht',
      icon: Zap,
      category: 'Energie',
    },
    {
      title: 'Ideaal met warmtepomp',
      description: 'Werkt perfect samen met elektrische warmtepompen voor optimale efficiëntie',
      icon: Lightbulb,
      category: 'Energie',
    },
    {
      title: 'Lange levensduur',
      description: 'Watervloerverwarming gaat 40-50 jaar mee met minimaal onderhoud',
      icon: Clock,
      category: 'Onderhoud',
    },
    {
      title: 'Verhoogt woningwaarde',
      description: 'Een moderne vloerverwarmingsinstallatie maakt je woning aantrekkelijker voor kopers',
      icon: Home,
      category: 'Kosten',
    },
  ];

  const nadelen: ProCard[] = [
    {
      title: 'Hogere aanschafkosten',
      description: 'Initiële installatie is duurder (€40-90/m²) dan traditionele radiatoren',
      icon: DollarSign,
      category: 'Kosten',
    },
    {
      title: 'Langere opwarmtijd',
      description: 'Duurt 30-60 minuten voordat de ruimte op temperatuur is, niet ideaal voor snelle verwarming',
      icon: Clock,
      category: 'Comfort',
    },
    {
      title: 'Niet alle vloeren geschikt',
      description: 'Hout kan krom trekken, tapijt beperkt warmteafgifte, isolatievereisten nodig',
      icon: AlertCircle,
      category: 'Installatie',
    },
    {
      title: 'Complexe installatie in bestaande bouw',
      description: 'Bij renovaties moet de bestaande vloer worden opengebroken, kostbaar en invasief',
      icon: Wrench,
      category: 'Installatie',
    },
    {
      title: 'Opbouwhoogte nodig',
      description: 'Systeem neemt 4-7 cm hoogte in, kan problematisch zijn in laagbouw',
      icon: AlertCircle,
      category: 'Installatie',
    },
    {
      title: 'Lastige reparatie',
      description: 'Bij beschadiging moeilijk om onderdelen te vervangen zonder grote ingrepen',
      icon: Wrench,
      category: 'Onderhoud',
    },
    {
      title: 'Niet ideaal in slecht geïsoleerde woningen',
      description: 'Bij arme isolatie verlies je veel warmte, waardoor de besparing afneemt',
      icon: AlertCircle,
      category: 'Energie',
    },
  ];

  const comparisonTable: ComparisonRow[] = [
    {
      feature: 'Warmteverdeling',
      vloerverwarming: 'Gelijkmatig vanuit vloer',
      radiatoren: 'Lokale warmte aan muren',
    },
    {
      feature: 'Ruimtegebruik',
      vloerverwarming: 'Volledig vrije wanden',
      radiatoren: 'Radiatoren innemen muurruimte',
    },
    {
      feature: 'Energiekosten',
      vloerverwarming: 'Tot 30% lager (water)',
      radiatoren: 'Baseline (hoger)',
    },
    {
      feature: 'Installatie',
      vloerverwarming: 'Complex, langdurig',
      radiatoren: 'Relatief eenvoudig',
    },
    {
      feature: 'Comfort',
      vloerverwarming: 'Zeer hoog (warme voeten)',
      radiatoren: 'Goed (klassiek)',
    },
    {
      feature: 'Onderhoud',
      vloerverwarming: 'Minimaal, lang durend',
      radiatoren: 'Regelmatig ontluchten',
    },
    {
      feature: 'Installatie kosten',
      vloerverwarming: '€40-90/m²',
      radiatoren: '€20-35/m²',
    },
    {
      feature: 'Opwarmtijd',
      vloerverwarming: '30-60 minuten',
      radiatoren: '5-10 minuten',
    },
  ];

  const suitabilityCards = [
    {
      title: 'Ideaal voor',
      items: [
        'Nieuwbouwprojecten (laagste installatie kosten)',
        'Eigenaren van warmtepompen',
        'Comfort-liefhebbers met budget',
        'Grotere woningen (>50 m²)',
        'Slecht-isoleerbare woningen',
      ],
      color: 'emerald',
    },
    {
      title: 'Minder geschikt voor',
      items: [
        'Slecht geïsoleerde oude woningen',
        'Klanten met zeer beperkt budget',
        'Huizen met houten vloeren',
        'Tijdelijke bewoners (korte termijn)',
        'Woningen met zeer lage plafonds',
      ],
      color: 'red',
    },
    {
      title: 'Twijfel?',
      items: [
        'Laat je woning gratis beoordelen',
        'Vraag een offerte aan van installateurs',
        'Vergelijk je energierekening',
        'Bereken je ROI met onze calculator',
        'Lees ervaringen van andere eigenaren',
      ],
      color: 'amber',
    },
  ];

  const faqItems = [
    {
      question: 'Hoeveel bespaar ik echt met vloerverwarming?',
      answer: 'Dit hangt af van je huidige systeem en isolatie:\n\n• Met watervloerverwarming + warmtepomp: tot 30% besparing (€200-400/jaar op een gemiddelde woning)\n• Met elektrische vloerverwarming: geen directe energiebesparing (maar wel comfort voordelen)\n• In een slecht geïsoleerde woning: veel minder besparing mogelijk\n\nOver 10 jaar kan je €2.000-4.000 besparen, wat kan uitgroeien tot €4.000-8.000 over 20 jaar.',
    },
    {
      question: 'Kan ik vloerverwarming alleen in bepaalde kamers installeren?',
      answer: 'Ja, dit is mogelijk en zelfs voordelig:\n\n• Installeer alleen in zones waar jij veel bent (woonkamer, slaapkamer)\n• Gebruik radiatoren in minder gebruikte ruimten\n• Minimale oppervlakte: 20-30 m² voor optimale efficiëntie\n• Met thermostaaten kun je per zone de temperatuur regelen\n\nDit kan je installatie kosten halveren terwijl je nog steeds voordelen krijgt.',
    },
    {
      question: 'Is vloerverwarming geschikt voor huizen met houten vloeren?',
      answer: 'Dit is een belangrijk punt:\n\n• Massief hout: NIET geschikt (krom trekken door vochtigheid)\n• Engineered hout: Mogelijk, maar beperkt (max 27-30°C vloertemperatuur)\n• Laminaat/PVC: Ideaal geschikt\n• Tegels/steen: Perfecte match (beste warmteoverdracht)\n\nAls je hout hebt, kun je lokale elektrische vloerverwarming gebruiken of het hout vervangen door tegels.',
    },
    {
      question: 'Hoelang duurt de installatie?',
      answer: 'Dit varieert sterk:\n\n• Nieuwbouw: 3-5 dagen voor een heel huis\n• Droge vloerverwarming in renovatie: 2-3 dagen\n• Watervloerverwarming in bestaande bouw: 1-2 weken (inclusief voorbereidingen)\n• Installatie CV-ketel/warmtepomp: 1-2 dagen extra\n\nJe moet ook rekening houden met genezingstijd (7-14 dagen voordat je op volle capaciteit kunt verwarmen).',
    },
    {
      question: 'Werkt vloerverwarming ook in hoge gebouwen (appartementen)?',
      answer: 'Ja, maar met beperkingen:\n\n• Ideaal voor grondverdiepiingen en eengezinshuizen\n• In appartementen: mogelijk, maar belasting op constructie moet gecontroleerd worden\n• Droge vloerverwarming: beter voor bestaande appartementen (minder gewicht)\n• Geluid: Kan doorklinken naar beneden, dus goede geluidsisolatie nodig\n\nRaadpleeg altijd een architect/bouwtechnicus in bestaande gebouwen.',
    },
    {
      question: 'Kun je vloerverwarming later nog aanpassen of verwijderen?',
      answer: 'Dit is een significant nadeel:\n\n• Verwijdering: Zeer kostbaar en invasief (hele vloer moet uit)\n• Aanpassingen: Moeilijk zonder grote ingrepen\n• Systeem uitschakelen: Wel mogelijk, maar dan heb je kapitalinvesteringen niet terugverdiend\n• Droge vloerverwarming: Iets gemakkelijker aan te passen dan watervloerverwarming\n\nZorg dus goed dat je er zeker van bent voordat je installeert!',
    },
  ];

  const colorClasses = {
    emerald: {
      badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
      icon: 'text-emerald-400',
      border: 'border-l-emerald-500',
    },
    red: {
      badge: 'bg-red-500/10 border-red-500/20 text-red-300',
      icon: 'text-red-400',
      border: 'border-l-red-500',
    },
    amber: {
      badge: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
      icon: 'text-amber-400',
      border: 'border-l-amber-500',
    },
  };

  const getColorClasses = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower === 'comfort' || categoryLower === 'gezondheid' || categoryLower === 'energie') {
      return colorClasses.emerald;
    }
    return colorClasses.emerald;
  };

  const getNadeelColorClasses = () => {
    return colorClasses.red;
  };

  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <PageHero
        title="Voordelen & Nadelen"
        highlightedSubtitle="Eerlijk Overzicht 2026"
        subtitle="De feiten op een rij - wat je moet weten voordat je vloerverwarming installeert"
        badge="Eerlijk Overzicht 2026"
        showBreadcrumbs={true}
        breadcrumbs={[{ label: 'Voordelen & Nadelen', href: '/voordelen-nadelen' }]}
      />

      {/* 2. SCORE OVERVIEW */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Voordelen Count */}
            <div className="p-8 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-stone-900">Voordelen</h3>
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-4xl font-bold text-emerald-600 mb-2">8</p>
              <p className="text-stone-600">Goed voor je comfort en besparing</p>
            </div>

            {/* Verdict */}
            <div className="p-8 bg-stone-50 rounded-lg border border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-stone-900">Verdict</h3>
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-xl font-bold text-stone-900 mb-2">Voor velen voordelig</p>
              <p className="text-stone-600">Zeker in combinatie met warmtepomp en nieuwbouw</p>
            </div>

            {/* Nadelen Count */}
            <div className="p-8 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-stone-900">Nadelen</h3>
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-4xl font-bold text-red-600 mb-2">7</p>
              <p className="text-stone-600">Vooral kosten en installatie</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VOORDELEN SECTION */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Voordelen van vloerverwarming
            </h2>
          </div>

          {/* Group voordelen by category */}
          {['Comfort', 'Gezondheid', 'Energie', 'Kosten'].map((category) => {
            const categoryVoordelen = voordelen.filter((v) => v.category === category);
            if (categoryVoordelen.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h3 className="text-xl font-semibold text-stone-700 mb-6 px-2">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryVoordelen.map((voordeel) => {
                    const Icon = voordeel.icon;
                    return (
                      <div
                        key={voordeel.title}
                        className="p-6 bg-white border-l-4 border-l-emerald-500 rounded-lg border border-stone-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <Icon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-stone-900 mb-2">
                              {voordeel.title}
                            </h4>
                            <p className="text-stone-600 text-sm leading-relaxed">
                              {voordeel.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. NADELEN SECTION */}
      <section className="bg-stone-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <XCircle className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Nadelen van vloerverwarming
            </h2>
          </div>

          {/* Group nadelen by category */}
          {['Kosten', 'Comfort', 'Installatie', 'Onderhoud', 'Energie'].map((category) => {
            const categoriNadelen = nadelen.filter((n) => n.category === category);
            if (categoriNadelen.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h3 className="text-xl font-semibold text-stone-700 mb-6 px-2">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoriNadelen.map((nadeel) => {
                    const Icon = nadeel.icon;
                    return (
                      <div
                        key={nadeel.title}
                        className="p-6 bg-white border-l-4 border-l-red-500 rounded-lg border border-stone-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <Icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-stone-900 mb-2">
                              {nadeel.title}
                            </h4>
                            <p className="text-stone-600 text-sm leading-relaxed">
                              {nadeel.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Vergelijking: Vloerverwarming vs. Radiatoren
          </h2>

          <div className="overflow-x-auto border border-stone-200 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Kenmerk</th>
                  <th className="px-6 py-4 text-left font-semibold">Vloerverwarming</th>
                  <th className="px-6 py-4 text-left font-semibold">Radiatoren</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-t border-stone-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-stone-50'
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-stone-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-stone-700">{row.vloerverwarming}</td>
                    <td className="px-6 py-4 text-stone-700">{row.radiatoren}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. SUITABILITY CARDS */}
      <section className="bg-stone-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            Voor wie is vloerverwarming geschikt?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suitabilityCards.map((card) => (
              <div
                key={card.title}
                className={`p-8 rounded-lg border ${
                  card.color === 'emerald'
                    ? 'bg-emerald-50 border-emerald-200'
                    : card.color === 'red'
                      ? 'bg-red-50 border-red-200'
                      : 'bg-amber-50 border-amber-200'
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-6 ${
                    card.color === 'emerald'
                      ? 'text-emerald-900'
                      : card.color === 'red'
                        ? 'text-red-900'
                        : 'text-amber-900'
                  }`}
                >
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 ${
                        card.color === 'emerald'
                          ? 'text-emerald-900'
                          : card.color === 'red'
                            ? 'text-red-900'
                            : 'text-amber-900'
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center font-bold text-white mt-0.5 ${
                          card.color === 'emerald'
                            ? 'bg-emerald-600'
                            : card.color === 'red'
                              ? 'bg-red-600'
                              : 'bg-amber-600'
                        }`}
                      >
                        {card.color === 'emerald' ? '✓' : card.color === 'red' ? '✗' : '?'}
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="bg-white py-16 md:py-20">
        <FAQSchema items={faqItems} />
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-gradient-to-r from-stone-950 to-stone-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om een beslissing te nemen?
          </h2>
          <p className="text-lg text-orange-100 mb-10 max-w-2xl mx-auto">
            Ontdek meer informatie over de verschillende soorten vloerverwarming en wat ze kosten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/soorten"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-stone-900 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
            >
              Soorten vloerverwarming →
            </a>
            <a
              href="/kosten"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Kosten en prijzen →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
