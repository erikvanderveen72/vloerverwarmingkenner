import { Metadata } from 'next';
import { AlertCircle, CheckCircle, Clock, DollarSign, Droplets, Wrench, Zap } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Onderhoud Vloerverwarming - Gids 2026 | Vloerverwarmingkenner',
  description: 'Compleet onderhoudsschema en tips voor vloerverwarming. Behoud de levensduur van 30-50 jaar met preventief onderhoud. Professionele doorspoeling, drukcontrole en meer.',
  keywords: 'vloerverwarming onderhoud, doorspoelen, waterdruk, pompschakelaar, CV-onderhoud',
  openGraph: {
    title: 'Onderhoud Vloerverwarming - Gids 2026',
    description: 'Onderhoud uw vloerverwarming correct en verleng de levensduur tot 50 jaar. Praktische tips en kostenoverzicht.',
  },
};

const faqData = [
  {
    question: 'Hoe vaak moet ik mijn vloerverwarming laten doorspoelen?',
    answer: 'Professionele doorspoeling wordt aanbevolen elke 5-7 jaar. Dit verwijdert slib en corrosiedeeltjes uit het systeem. Zit uw installatie ouder dan 15 jaar zonder doorspoeling? Plan dan prioritair een behandeling in.',
  },
  {
    question: 'Wat is de ideale waterdruk voor vloerverwarming?',
    answer: 'De ideale druk ligt tussen 1.5 en 2.0 bar. Controleer maandelijks de manometer op uw CV-ketel. Druk onder 1.5 bar wijst op een lek of lucht in het systeem en kan pomp beschadigingen veroorzaken.',
  },
  {
    question: 'Kan ik de pomp in de zomer uitschakelen?',
    answer: 'Ja, en dat is zelfs aan te raden. Een pompschakelaar of slimme thermostaatregeling zorgt ervoor dat de pomp niet onnodig draait. Dit kan honderden euro\'s per jaar besparen op elektriciteit.',
  },
  {
    question: 'Wat zijn tekenen dat mijn vloerverwarming onderhoud nodig heeft?',
    answer: 'Waarschuwingssignalen zijn: koude plekken in de vloer, borrelende geluiden in de verdeler, stijgende energiekosten zonder duidelijke reden, en lekkage bij de verdeler.',
  },
  {
    question: 'Is vloerverwarming echt onderhoudsarm?',
    answer: 'Vloerverwarming is relatief onderhoudsarm vergeleken met andere verwarmingssystemen. Het is echter niet onderhoudsvriendelijk. Preventief onderhoud is essentieel voor een levensduur van 30-50 jaar.',
  },
];

export default function OnderhoudsPage() {
  return (
    <>
      <PageHero
        title="Onderhoud Vloerverwarming"
        subtitle="Behoud uw systeem in topconditie en verleng de levensduur tot 50 jaar"
      />

      <main className="bg-stone-50 py-12 md:py-16">
        {/* Overview Section */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Vloerverwarming: Onderhoudsarm maar niet Onderhoudsvrij</h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Vloerverwarming behoort tot de meest duurzame verwarmingssystemen. Met goed onderhoud bereikt uw installatie gemakkelijk een levensduur van 30 tot 50 jaar. Echter, onderhoud is essentieel. Zonder preventieve maatregelen loop je risico op beschadigingen, verhoogde energiekosten en vervoegende reparaties.
            </p>
            <p className="text-base text-stone-600">
              Deze gids helpt u de juiste onderhoudsschema's aan te houden en kostbare problemen voorkomen.
            </p>
          </div>
        </section>

        {/* Periodiek Doorspoelen */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Periodiek Doorspoelen</h3>
                <p className="text-stone-600 mt-1">Verwijder slib en corrosie uit het systeem</p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 mb-6">
              <p className="text-stone-700 leading-relaxed mb-4">
                Over tijd verzamelt zich vervuiling in uw CV-water: corrosiedeeltjes van metalen onderdelen, bacteriën in lage-temperatuursystemen en slib. Deze deeltjes settelen in de buigingen van de leidingen en kunnen de waterstroom blokkeren, resulterend in koude vlakken in uw vloer.
              </p>
              <p className="text-stone-700 leading-relaxed">
                <strong>Aanbeveling:</strong> Professionele doorspoeling om de 5-7 jaar.
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-6">
              <h4 className="font-bold text-emerald-900 mb-3">Herken tekenen van vervuiling:</h4>
              <ul className="space-y-2 text-emerald-900">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  Stijgende energierekeningen zonder duidelijke oorzaak
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  Borrelende of gorgelnde geluiden in de verdeler
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  Kamers bereiken niet hun ingestelde temperatuur
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  Duidelijk zichtbare vervuiling in het expansievat
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Waterdruk */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Waterdruk Controleren</h3>
                <p className="text-stone-600 mt-1">Maandelijks checken, jaarlijks bijvullen</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 rounded-xl p-6">
                <h4 className="font-bold text-stone-900 mb-3">Ideale druk</h4>
                <div className="text-4xl font-bold text-orange-600 mb-2">1.5 - 2.0 bar</div>
                <p className="text-sm text-stone-600">
                  Dit is de standaardwaarde voor de meeste vloerverwarmingsinstallaties.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">Waarschuwing</h4>
                <p className="text-sm text-red-800">
                  Druk onder 1.5 bar duidt op een lek of lucht in het systeem. Dit kan pomp beschadigingen veroorzaken.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-3">Hoe controleer ik de druk?</h4>
              <ol className="space-y-2 text-blue-900 text-sm">
                <li><strong>1.</strong> Zoek de manometer op uw CV-ketel of groepenkast</li>
                <li><strong>2.</strong> Controleer de waarde maandelijks, vooral voor het stookseizoen</li>
                <li><strong>3.</strong> Gebruik de vulkraan (meestal rood of geel) om bij te vullen tot 2.0 bar</li>
                <li><strong>4.</strong> Let op: Bij opwarming stijgt de druk; controleer op koude</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Pompschakelaar */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <Zap className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Pompschakelaar: Een Slimme Upgrade</h3>
                <p className="text-stone-600 mt-1">Een van de meest rendabele investeringen</p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 mb-6 border-l-4 border-emerald-500">
              <p className="text-emerald-900 font-semibold mb-2">Waarom een pompschakelaar?</p>
              <p className="text-emerald-900 text-sm leading-relaxed">
                Veel oudere installaties hebben pompen die 24/7 actief zijn, ook wanneer verwarming niet nodig is. Dit verspilt aanzienlijk energie en verkort de pomplevensduur onnodig.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-stone-50 rounded-xl p-6">
                <h4 className="font-bold text-stone-900 mb-3">Oude pompen</h4>
                <ul className="space-y-2 text-stone-700 text-sm">
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Constant 60-100 watt vermogen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Draait ook in zomer onnodig</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Hogere vervangingskosten</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-500">
                <h4 className="font-bold text-emerald-900 mb-3">Met pompschakelaar</h4>
                <ul className="space-y-2 text-emerald-900 text-sm">
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Pomp alleen actief als verwarming nodig is</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>A-label pompen gebruiken 5-10 watt in standby</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Besparing: honderden euro's per jaar</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-blue-900 text-sm">
                <strong>Meerwaarde:</strong> Verleng de pomplevensduur en bespaar direct op elektriciteit. De pompschakelaar betaalt zich meestal af in 1-2 jaar.
              </p>
            </div>
          </div>
        </section>

        {/* Jaarlijks Onderhoud Checklist */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <Clock className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Jaarlijks Onderhoud Checklist</h3>
                <p className="text-stone-600 mt-1">Zorg dat alles optimaal functioneert</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-stone-50 rounded-xl p-4 flex gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Waterdruk controleren</h4>
                  <p className="text-xs text-stone-600">Maandelijks, zeker voor stookseizoen</p>
                </div>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 flex gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Ontluchten</h4>
                  <p className="text-xs text-stone-600">Jaarlijks voor stookseizoen</p>
                </div>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 flex gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Thermostaatknoppen verdeler</h4>
                  <p className="text-xs text-stone-600">Controleer op gladde werking</p>
                </div>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 flex gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">CV-ketel/warmtepomp</h4>
                  <p className="text-xs text-stone-600">Onderhoud volgens fabrikantinstructies</p>
                </div>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 flex gap-3 md:col-span-2">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Visuele inspectie verdeler</h4>
                  <p className="text-xs text-stone-600">Controleer op lekkage of zichtbare schade</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professionele ingreep */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <Wrench className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Wanneer een Professional Inschakelen?</h3>
                <p className="text-stone-600 mt-1">Herken de waarschuwingstekenen</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-1">Koude plekken in de vloer</p>
                <p className="text-sm text-red-800">Kan wijzen op verstopping in het systeem of defecte thermostaatklep</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-1">Borrelende of gorgelnde geluiden</p>
                <p className="text-sm text-red-800">Wijst op lucht in het systeem of vervuiling in leidingen</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-1">Stijgende energiekosten</p>
                <p className="text-sm text-red-800">Zonder verhoogde temperatuurwensen kan dit vervuiling aanduiden</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-1">Lekkage bij verdeler of leidingen</p>
                <p className="text-sm text-red-800">Kan leiden tot drukdaling en pomp beschadigingen</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-1">Systeem ouder dan 15 jaar zonder doorspoeling</p>
                <p className="text-sm text-red-800">Professionele doorspoeling is dan sterk aanbevolen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kostenoverzicht */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <DollarSign className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Kostenoverzicht Onderhoud</h3>
                <p className="text-stone-600 mt-1">Begroting voor preventief onderhoud</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-stone-50 rounded-xl p-6 flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Professionele doorspoeling</h4>
                  <p className="text-xs text-stone-600">Per behandeling, eens per 5-7 jaar</p>
                </div>
                <p className="font-bold text-orange-600 text-lg">€250-500</p>
              </div>

              <div className="bg-stone-50 rounded-xl p-6 flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Pompschakelaar installatie</h4>
                  <p className="text-xs text-stone-600">Eenmalige investering</p>
                </div>
                <p className="font-bold text-orange-600 text-lg">€50-100</p>
              </div>

              <div className="bg-stone-50 rounded-xl p-6 flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">A-label pomp upgrade</h4>
                  <p className="text-xs text-stone-600">Inclusief montage</p>
                </div>
                <p className="font-bold text-orange-600 text-lg">€150-300</p>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 flex justify-between items-start border-l-4 border-emerald-500">
                <div>
                  <h4 className="font-semibold text-emerald-900 mb-1">Ontluchten</h4>
                  <p className="text-xs text-emerald-700">Zelf doen</p>
                </div>
                <p className="font-bold text-emerald-600 text-lg">Gratis</p>
              </div>

              <div className="bg-stone-50 rounded-xl p-6 flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Jaarlijks CV-ketel onderhoud</h4>
                  <p className="text-xs text-stone-600">Voorwaartse investering</p>
                </div>
                <p className="font-bold text-orange-600 text-lg">€100-200</p>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 flex justify-between items-start border-l-4 border-emerald-500">
                <div>
                  <h4 className="font-semibold text-emerald-900 mb-1">Elektriciteitsbesparing</h4>
                  <p className="text-xs text-emerald-700">Met pompschakelaar per jaar</p>
                </div>
                <p className="font-bold text-emerald-600 text-lg">€100-300</p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-6">
              <p className="text-blue-900 text-sm">
                <strong>Pro-tip:</strong> Preventief onderhoud is veel goedkoper dan noodreparaties. Een doorspoeling van €400 nu kan duizenden besparen op vervangingskosten later.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">Veelgestelde Vragen</h2>

            <div className="space-y-6">
              {faqData.map((item, index) => (
                <details key={index} className="border-b border-stone-200 pb-6 last:border-b-0">
                  <summary className="font-semibold text-stone-900 cursor-pointer hover:text-orange-600 transition-colors">
                    {item.question}
                  </summary>
                  <p className="text-stone-700 mt-3 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/kosten"
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">Kostencalculator</h3>
              <p className="text-orange-100 mb-4">
                Bereken hoeveel u kunt besparen met optimalisaties
              </p>
              <span className="inline-block font-semibold">Ontdek kostenberekening →</span>
            </a>

            <a
              href="/zelf-doen"
              className="bg-gradient-to-br from-stone-700 to-stone-800 rounded-2xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">Zelf Doen Gids</h3>
              <p className="text-stone-300 mb-4">
                Wat kunt u zelf aanpakken zonder specialist?
              </p>
              <span className="inline-block font-semibold">Lees zelf-doen tips →</span>
            </a>
          </div>
        </section>
      </main>

      <FAQSchema items={faqData} />
    </>
  );
}
