import { Metadata } from 'next';
import { CheckCircle, AlertCircle, ExternalLink, DollarSign, FileCheck, Home, Lightbulb, Zap, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

// Export metadata for SEO
export const metadata: Metadata = {
  title: 'Subsidie Vloerverwarming 2026 - ISDE & Financieringsmogelijkheden',
  description: 'Welke subsidie kun je krijgen voor vloerverwarming in 2026? Bekijk de ISDE-regeling, Warmtefonds en andere financieringsmogelijkheden.',
  keywords: [
    'subsidie vloerverwarming',
    'ISDE subsidie',
    'warmtefonds',
    'financieringsmogelijkheden',
    'vloerverwarming kosten',
    'subsidie aanvragen',
  ],
  openGraph: {
    title: 'Subsidie Vloerverwarming 2026 - ISDE & Financieringsmogelijkheden',
    description: 'Welke subsidie kun je krijgen voor vloerverwarming in 2026? Bekijk de ISDE-regeling, Warmtefonds en andere financieringsmogelijkheden.',
    type: 'website',
  },
};

export const revalidate = 3600;

interface FAQItem {
  question: string;
  answer: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

interface StepProps {
  number: number;
  title: string;
  description: string;
}

// Feature Card Component
function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg border border-stone-200 p-6 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-600 mb-4 text-sm leading-relaxed">{description}</p>
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          {link.text}
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

// Step Component
function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-lg">
          {number}
        </div>
      </div>
      <div className="flex-1 pt-1">
        <h3 className="text-lg font-bold text-stone-900 mb-2">{title}</h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Main Page Component
export default function SubsidiePage() {
  const breadcrumbs = [{ label: 'Subsidie', href: '/subsidie' }];

  const faqItems: FAQItem[] = [
    {
      question: 'Kan ik subsidie krijgen voor alleen vloerverwarming zonder warmtepomp?',
      answer: 'De ISDE-subsidie vereist een combinatie met een warmtepomp. Voor louter vloerverwarming zijn er vrijwel geen nationale subsidies beschikbaar. Wel kun je gemeentelijke regelingen hebben of een energiebespaarlening afsluiten. Controleer altijd de voorwaarden bij je gemeente.',
    },
    {
      question: 'Wanneer moet ik de subsidieaanvraag indienen?',
      answer: 'Het is essentieel om ALTIJD de subsidieaanvraag in te dienen VOORDAT je de installatie laat plaatsen. Raadpleeg eerst een erkende installateur en vraag een offerte aan. Als je na installatie pas aanvraagt, vervalt je recht op subsidie.',
    },
    {
      question: 'Hoe lang duurt het voor ik de subsidie uitbetaald krijg?',
      answer: 'Na goedkeuring van je aanvraag en ontvangst van de installatiebewijzen (factuur en montageverslag) krijg je de subsidie over het algemeen binnen 4-8 weken uitbetaald. Dit verschilt per regeling. Check de actuele informatie op rvo.nl.',
    },
    {
      question: 'Kan ik de energiebespaarlening en ISDE-subsidie combineren?',
      answer: 'Ja, dit is mogelijk. Je kunt de ISDE-subsidie (tot €3.300) ontvangen en daarnaast een energiebespaarlening aanvragen via het Nationaal Warmtefonds voor de resterende kosten. Dit kan je totale investering flink reduceren.',
    },
    {
      question: 'Wat als mijn woning niet in aanmerking komt voor ISDE?',
      answer: 'Er zijn verschillende redenen waarom je niet in aanmerking kunt komen (bijvoorbeeld te jong of onvoldoende energieefficiënte woning). Controleer je geschiktheid op rvo.nl. Je hebt dan nog mogelijkheden via de energiebespaarlening of gemeentelijke regelingen.',
    },
    {
      question: 'Welke erkende installateurs mag ik kiezen?',
      answer: 'Je kunt kiezen uit installateurs die deelnemen aan de VAR (Vaste Arbeid Regeling). Je installateur moet voorafgaand aan de installatie zijn registratie kenbaar maken. Vraag dit altijd aan voor je een offerte accepteert.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Subsidie & Financiering"
        highlightedSubtitle="Bespaar op je investering"
        subtitle="Ontdek welke regelingen beschikbaar zijn in 2026"
        badge="Regelingen 2026"
        showBreadcrumbs={true}
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Goed nieuws!</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Subsidies voor vloerverwarming alleen zijn beperkt, maar wanneer je vloerverwarming <strong>in combinatie met een warmtepomp</strong> installeert, kun je aanzienlijke subsidies en financieringsvoordelen krijgen.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Dit komt omdat deze combinatie bijdraagt aan energiebesparing en duurzame energievoorziening van je woning. Samen kunnen ze tot 30-40% besparen op verwarmingskosten.
            </p>
          </div>
        </section>

        {/* ISDE Featured Card */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-lg border-2 border-emerald-500 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <Lightbulb className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-stone-900 mb-2">ISDE - Investeringssubsidie Duurzame Energie</h2>
                <p className="text-xl font-semibold text-emerald-700">€1.000 - €3.300</p>
                <p className="text-sm text-stone-600">Afhankelijk van warmtepomp type</p>
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-emerald-300">
              <p className="text-stone-700 leading-relaxed mb-4">
                Dit is de meest aantrekkelijke subsidieregeling voor vloerverwarming in combinatie met een warmtepomp. De subsidie loopt tot 31 december 2026.
              </p>
            </div>

            {/* Voorwaarden */}
            <div className="mb-8 pb-8 border-b border-emerald-300">
              <h3 className="text-lg font-bold text-stone-900 mb-4">Voorwaarden</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Combinatie met warmtepomp is verplicht</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Woning moet bestaande bouw zijn (gebouwd vóór 1 januari 2021)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Installatie door erkend VAR-installateur</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Woning moet minimaal energielabel D of beter bereiken na installatie</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Geen zelf-uitvoering - professionele installatie vereist</span>
                </li>
              </ul>
            </div>

            {/* How to Apply */}
            <div className="mb-8 pb-8 border-b border-emerald-300">
              <h3 className="text-lg font-bold text-stone-900 mb-4">Stappen om ISDE aan te vragen</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-stone-700">Controleer je geschiktheid op rvo.nl</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-sm font-bold flex-shrink-0">2</span>
                  <span className="text-stone-700">Krijg een offerte van een erkend VAR-installateur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-sm font-bold flex-shrink-0">3</span>
                  <span className="text-stone-700">Dien je subsidieaanvraag in vóór het plaatsen van de apparatuur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-sm font-bold flex-shrink-0">4</span>
                  <span className="text-stone-700">Na goedkeuring: laat de installatie uitvoeren</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-sm font-bold flex-shrink-0">5</span>
                  <span className="text-stone-700">Stuur installatiebewijzen in (factuur + montageverslag)</span>
                </li>
              </ol>
            </div>

            {/* Link */}
            <div>
              <a
                href="https://www.rvo.nl/subsidies-financiering/isde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Meer info op RVO.nl
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Nationaal Warmtefonds Card */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg border-2 border-blue-500 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-stone-900 mb-2">Nationaal Warmtefonds - Energiebespaarlening</h2>
                <p className="text-xl font-semibold text-blue-700">Tot €25.000 tegen 0% rente</p>
                <p className="text-sm text-stone-600">Lening zonder rente voor duurzame warmte</p>
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-blue-300">
              <p className="text-stone-700 leading-relaxed mb-4">
                Naast of in plaats van ISDE kun je een energiebespaarlening afsluiten tegen 0% rente. Dit is ideaal om de resterende kosten na subsidie te financieren.
              </p>
            </div>

            {/* Voorwaarden */}
            <div className="mb-8 pb-8 border-b border-blue-300">
              <h3 className="text-lg font-bold text-stone-900 mb-4">Voorwaarden</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Voor woningeigenaren in Nederland</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Combinatie met isolatie mogelijk (vergroot je lening)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Geen inkomensvereiste</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Snelle aanvraag via de website</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Geld wordt direct naar aanvraag uitbetaald</span>
                </li>
              </ul>
            </div>

            {/* How to Apply */}
            <div className="mb-8 pb-8 border-b border-blue-300">
              <h3 className="text-lg font-bold text-stone-900 mb-4">Hoe aanvragen?</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                De aanvraag verloopt veel sneller dan ISDE. Je kunt online aanvragen en ontvangt binnen enkele werkdagen bericht of je bent goedgekeurd.
              </p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-stone-700">Ga naar nationaalwarmtefonds.nl</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-sm font-bold flex-shrink-0">2</span>
                  <span className="text-stone-700">Vul je huisgegevens en plannen in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-sm font-bold flex-shrink-0">3</span>
                  <span className="text-stone-700">Ontvang antwoord en lening directe betaalbaarheid</span>
                </li>
              </ol>
            </div>

            {/* Link */}
            <div>
              <a
                href="https://www.nationaalwarmtefonds.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Naar Nationaal Warmtefonds
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Andere Financieringsmogelijkheden */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Andere financieringsmogelijkheden</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<MapPin className="w-8 h-8 text-amber-500" />}
              title="Gemeentelijke Subsidie"
              description="Veel gemeenten bieden aanvullende subsidies voor duurzame warmte. Bedragen en voorwaarden verschillen per gemeente. Check je gemeente!"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-500" />}
              title="BTW-voordeel bij Nieuwbouw"
              description="Omdat vloerverwarming onderdeel is van je gebouw, pas je 0% BTW toe in plaats van 21% als het in nieuwbouw wordt geplaatst."
            />
            <FeatureCard
              icon={<FileCheck className="w-8 h-8 text-green-500" />}
              title="Energieprestatiecontract"
              description="Sommige bedrijven bieden energie-performance contracten waarbij ze helpen financieren en jij bespaart in energiekosten."
            />
          </div>
        </section>

        {/* Stappenplan */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Stappenplan Subsidie Aanvragen</h2>
          <div className="bg-white rounded-lg border border-stone-200 p-8 space-y-8">
            <Step
              number={1}
              title="Check of je woning in aanmerking komt"
              description="Controleer op rvo.nl of je woning voldoet aan de eisen voor ISDE (bestaande bouw, energielabel D of beter na installatie). Dit is essentieel voordat je verder gaat!"
            />
            <Step
              number={2}
              title="Vraag offertes aan bij erkende installateurs"
              description="Contacteer minstens 2-3 VAR-erkende installateurs voor vloerverwarming + warmtepomp. Vraag expliciet om offerte voor ISDE-geschikte installatie."
            />
            <Step
              number={3}
              title="Dien de subsidieaanvraag in vóór de installatie"
              description="Dit is CRUCIAAL. Dien de ISDE-aanvraag in via rvo.nl voordat de werk begint. Als je dit vergeet, vervalt je recht op subsidie."
            />
            <Step
              number={4}
              title="Laat installeren en dien bewijs in"
              description="Na goedkeuring van je aanvraag kun je de installatie laten plaatsen. Bewaar alle bewijsstukken (factuur, montageverslag, foto's) en stuur deze in."
            />
          </div>
        </section>

        {/* Tips */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-amber-50 rounded-lg border border-amber-200 p-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Belangrijke Tips
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-stone-700"><strong>Vraag subsidie ALTIJD aan vóór de installatie.</strong> Dit is de meest voorkomende fout!</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-stone-700"><strong>Bewaar alle facturen en bewijsstukken.</strong> Je hebt deze nodig voor uitbetaling.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-stone-700"><strong>Combineer met isolatiemaatregelen</strong> voor extra subsidies en beter klimaat.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-stone-700"><strong>Check actuele bedragen en voorwaarden</strong> op rvo.nl - regelingen wijzigen regelmatig.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-stone-700"><strong>Combineer ISDE met de energiebespaarlening</strong> voor maximale financiële voordeel.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Subsidie Check CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Gratis & vrijblijvend</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Kom jij in aanmerking voor subsidie?</h2>
              <p className="mb-8 text-lg text-emerald-100 max-w-xl mx-auto">Check in 2 minuten of je recht hebt op subsidie. Beantwoord 7 simpele vragen en ontvang persoonlijk advies.</p>
              <Link
                href="/subsidie-check"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl"
              >
                <CheckCircle className="w-5 h-5" />
                Start de Subsidie Check
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSchema items={faqItems} />

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Benieuwd naar de totale kosten?</h2>
            <p className="mb-6 text-lg">Gebruik onze calculator om de kosten van vloerverwarming voor jouw situatie in te schatten.</p>
            <Link
              href="/kosten"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-stone-100 transition-colors"
            >
              Ga naar Kostencalculator
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
