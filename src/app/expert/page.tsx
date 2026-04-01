import { Metadata } from 'next';
import {
  Zap,
  Flame,
  Layers,
  Calculator,
  Thermometer,
  Wrench,
  Activity,
  LayoutGrid,
  AlertCircle,
  ChevronRight,
  Info,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technisch Handboek Vloerverwarming 2026 - Expert Gids voor Professionals',
  description: 'Diepgaande technische gids over vloerverwarming: thermodynamische grondslagen, legpatronen, hart-op-hart dimensionering, leidingmaterialen, constructiemethodieken en slimme integratie. Voor professionals en gevorderde doe-het-zelvers.',
  keywords: [
    'technisch handboek vloerverwarming',
    'stralingswarmte',
    'lagetemperatuurverwarming',
    'legpatronen vloerverwarming',
    'hart-op-hart',
    'PE-RT leidingen',
    'vloerverwarming componentenanalyse',
    'lagetemperatuurbronnen',
    'thermodynamica vloerverwarming',
  ],
  openGraph: {
    title: 'Technisch Handboek Vloerverwarming 2026 - Expert Gids',
    description: 'Professionele technische gids met thermodynamische grondslagen, legpatronen, dimensionering en componentenanalyse.',
    type: 'website',
  },
};

export const revalidate = 3600;

interface FAQItem {
  question: string;
  answer: string;
}

function TechnicalNotice() {
  return (
    <section className="bg-orange-50 border-l-4 border-orange-500 px-6 py-4 rounded-r-lg mb-8">
      <div className="flex gap-3">
        <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
        <p className="text-orange-900 leading-relaxed">
          <strong>Dit is het technische gedeelte van Vloerverwarmingkenner.</strong> Hier gaan we dieper in op de technische aspecten voor professionals en enthousiaste doe-het-zelvers. Bent u op zoek naar consumenten-informatie? Kijk dan op onze <Link href="/soorten" className="underline font-semibold hover:text-orange-700">soorten pagina</Link>.
        </p>
      </div>
    </section>
  );
}

function ThermodynamicsSection() {
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <Thermometer className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-3xl font-bold text-stone-900">Thermodynamische Grondslagen</h3>
            <p className="text-stone-600 mt-1">Begrijp hoe stralingswarmte uw woning verwarmt</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-stone-50 rounded-xl p-6">
            <h4 className="font-bold text-lg text-stone-900 mb-3">Stralingswarmte versus Convectie</h4>
            <p className="text-stone-700 leading-relaxed mb-4">
              Vloerverwarming werkt op basis van <strong>stralingswarmte</strong>, niet op convectie zoals traditionele radiatoren. Dit is het fundamentale verschil dat vloerverwarming zo effectief maakt.
            </p>
            <ul className="space-y-2 text-stone-700">
              <li className="flex gap-3">
                <span className="font-bold text-orange-600 flex-shrink-0">•</span>
                <span><strong>Stralingswarmte:</strong> Directe verwarming van objecten en lichamen in de ruimte, niet de lucht. Warmtegolven bereiken u rechtstreeks via elektromagnetische straling.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange-600 flex-shrink-0">•</span>
                <span><strong>Convectie:</strong> Verwarming door hete lucht omhoog te drijven. Inefficiënt omdat de warmte zich concentreert onder het plafond waar niemand is.</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-lg text-stone-900 mb-3">Verticale Temperatuurgradiënt</h4>
            <p className="text-stone-700 leading-relaxed mb-4">
              De ideale vloerverwarming volgt de menselijke fysiologie:
            </p>
            <div className="space-y-2 text-stone-700">
              <p><strong>Warm bij de voeten</strong> (22-24°C op vloerniveau): Menselijk comfort bereikt maximum</p>
              <p><strong>Koel bij het hoofd</strong> (19-20°C op 1,5 meter hoogte): Voorkomt onderwaardig warmtegevoel en ventilatiebehoefte</p>
              <p className="text-sm text-stone-600 italic">Dit is het tegenovergestelde van radiatoren, die warme lucht naar het plafond drijven.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h4 className="font-bold text-amber-900 mb-3">Traditionele Systemen</h4>
              <p className="text-amber-900 mb-2"><strong>Aanvoertemperaturen:</strong></p>
              <p className="text-3xl font-bold text-amber-600 mb-4">65–80°C</p>
              <p className="text-sm text-amber-900">CV-ketels en radiatoren werken op hoge temperaturen. Minder efficiënt met warmtepompen.</p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h4 className="font-bold text-emerald-900 mb-3">Lagetemperatuurverwarming (LTV)</h4>
              <p className="text-emerald-900 mb-2"><strong>Aanvoertemperaturen:</strong></p>
              <p className="text-3xl font-bold text-emerald-600 mb-4">30–45°C</p>
              <p className="text-sm text-emerald-900">Vloerverwarming optimaal. Perfect met warmtepompen. Maximale efficiëntie.</p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h4 className="font-bold text-yellow-900 mb-3">Rendement & Kostenbesparing</h4>
            <ul className="space-y-2 text-yellow-900">
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>Standaard geïsoleerde woningen: <strong>10-15% reductie stookkosten</strong></span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>Optimaal geïsoleerde woningen: <strong>tot 20% besparing</strong></span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>Met warmtepomp: Besparingen kunnen tot 30% bereiken door lage aanvoertemperaturen</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegpatronenSection() {
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <LayoutGrid className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-3xl font-bold text-stone-900">Legpatronen in Detail</h3>
            <p className="text-stone-600 mt-1">Optimale leidingarrangement voor gelijkmatige warmteverdeling</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Slakkenhuispatroon */}
          <div className="border-l-4 border-orange-400 bg-orange-50 rounded-r-lg p-6">
            <h4 className="text-xl font-bold text-stone-900 mb-3">a) Slakkenhuispatroon (Bifilair)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-stone-700 leading-relaxed mb-4">
                  <strong>Meest toegepast</strong> voor woonkamers en slaapkamers. Dit patroon biedt de beste balans tussen prestatie en vereenvoudigde installatie.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  <strong>Principe:</strong> Aanvoer- en retourleidingen worden om en om naast elkaar gelegd. Dit creëert een natuurlijk balans.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <p className="font-semibold text-stone-900 mb-2">Hoe het werkt:</p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span>1.</span>
                    <span>Warme aanvoerbuis start aan ene zijde</span>
                  </li>
                  <li className="flex gap-2">
                    <span>2.</span>
                    <span>Temperatuur daalt gedurende de route</span>
                  </li>
                  <li className="flex gap-2">
                    <span>3.</span>
                    <span>Koude retourleidingen zijn geleidelijk aan de andere zijde</span>
                  </li>
                  <li className="flex gap-2">
                    <span>4.</span>
                    <span>Daalt warmte = stijgt retourtemperatuur</span>
                  </li>
                  <li className="flex gap-2">
                    <span>5.</span>
                    <span>Resultaat: perfecte gelijkmatige vloertemperatuur</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Meanderpatroon */}
          <div className="border-l-4 border-blue-400 bg-blue-50 rounded-r-lg p-6">
            <h4 className="text-xl font-bold text-stone-900 mb-3">b) Meanderpatroon (Zigzag)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Het meanderpatroon heeft een duidelijke zigzagvorm door de ruimte. <strong>Specifiek ontworpen voor raampartijen en koude buitenmuren.</strong>
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Perfect voor open woonkeuken of kantoren met veel beglazing waar direct zonlicht warmte tegenwerkt.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="font-semibold text-stone-900 mb-2">Voordeel:</p>
                <p className="text-sm text-stone-700 mb-4">
                  <strong>Warmste aanvoerleidingen eerst langs raampartij</strong> = elimineert koudeval en tocht.
                </p>
                <p className="font-semibold text-stone-900 mb-2">Praktische toepassing:</p>
                <p className="text-sm text-stone-700">
                  Start leidingen aan koude buitenmuur, werk weg naar binnenruimte. Minder tocht, betere comfort, hogere energieprestatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HOHSection() {
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <Activity className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-3xl font-bold text-stone-900">Hart-op-Hart (HOH) Dimensionering</h3>
            <p className="text-stone-600 mt-1">De juiste leidingenafstand voor jouw toepassing</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-stone-700 leading-relaxed">
            Hart-op-Hart (HOH) verwijst naar de afstand tussen de middellijnen van twee opeenvolgende leidingen. Dit bepaalt het verwarmingsvermogen per m².
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-300">
              <div className="flex items-start gap-3 mb-4">
                <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <h4 className="text-lg font-bold text-emerald-900">10 cm HOH</h4>
              </div>
              <p className="font-semibold text-emerald-900 mb-2">Hoofdverwarming</p>
              <p className="text-sm text-emerald-900 leading-relaxed">
                Voldoende vermogen bij LTV. Geschikt voor volledige verwarming van woningen met goede isolatie. Dicht leidingenpatroon zorgt voor maximale warmteverdeling.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
              <div className="flex items-start gap-3 mb-4">
                <Activity className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <h4 className="text-lg font-bold text-blue-900">15 cm HOH</h4>
              </div>
              <p className="font-semibold text-blue-900 mb-2">Uitgebreide Bijverwarming</p>
              <p className="text-sm text-blue-900 leading-relaxed">
                Zeer goed geïsoleerde woningen of in combinatie met aanvullende radiatoren. Lagere verwarmingsdichtheid maar nog steeds comfortabel.
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border-2 border-stone-300">
              <div className="flex items-start gap-3 mb-4">
                <Flame className="w-6 h-6 text-stone-600 flex-shrink-0" />
                <h4 className="text-lg font-bold text-stone-900">20 cm HOH</h4>
              </div>
              <p className="font-semibold text-stone-900 mb-2">Standaard Bijverwarming</p>
              <p className="text-sm text-stone-900 leading-relaxed">
                Alleen comfortwarmte, niet geschikt voor volledig verwarmen. Typisch voor badkamers, tochtdeuren of aanvullende oppervlakken.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentenSection() {
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <Wrench className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-3xl font-bold text-stone-900">Componentenanalyse</h3>
            <p className="text-stone-600 mt-1">Leidingmaterialen, verdelers en cruciale normen</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Leidingmaterialen */}
          <div className="bg-stone-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-stone-900 mb-4">a) Leidingmaterialen</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <p className="font-semibold text-stone-900 mb-2">PE-RT (Polyethylene of Raised Temperature Resistance)</p>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Meest gebruikt materiaal. Flexibel, duurzaam, bestand tegen temperatuurschommelingen tot 70°C. Uitzetting/krimp is minimaal.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <p className="font-semibold text-stone-900 mb-2">PEX (Cross-linked Polyethylene)</p>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Zeer duurzaam en flexibel. Bestand tegen hogere temperaturen. Iets duurder dan PE-RT maar langere levensduur in extreme omstandigheden.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-red-50 rounded-xl p-6 border-2 border-red-300">
              <h5 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                ESSENTIEEL: DIN 4726 Norm (Diffusiedicht)
              </h5>
              <p className="text-red-900 leading-relaxed mb-4">
                Leidingen <strong>MOETEN diffusiedicht zijn volgens DIN 4726</strong>. Dit is niet optioneel.
              </p>
              <div className="space-y-2 text-sm text-red-900">
                <p><strong>Waarom?</strong> Zonder diffusiedichtheid:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Zuurstof dringt het systeem in</li>
                  <li>Metalen onderdelen (koppelingen, pompen) roesten</li>
                  <li>Magnetiet (zwart slib) vormt zich in het systeem</li>
                  <li>Leidingen verstoppen, warmte wordt niet verdeeld</li>
                  <li>Rendement daalt drastisch</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Verdelers */}
          <div className="bg-stone-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-stone-900 mb-4">b) Verdelers (Splitsenheid/Manifolds)</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-amber-400">
                <p className="font-semibold text-stone-900 mb-2">Open Verdeler (Met Pomp)</p>
                <p className="text-stone-700 text-sm leading-relaxed mb-3">
                  Heeft een <strong>eigen circulatiepomp</strong>. Nodig bij hogere temperatuurbronnen (CV-ketel, 60-80°C).
                </p>
                <p className="text-stone-700 text-sm leading-relaxed">
                  <strong>Principe:</strong> Retourwater wordt naar CV-ketel teruggestuurd. Voor lagere leidingtemperaturen moet retourwater met aanvoerwater worden bijgemengd via mengklep.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-400">
                <p className="font-semibold text-stone-900 mb-2">Gesloten Verdeler (Pomploos)</p>
                <p className="text-stone-700 text-sm leading-relaxed mb-3">
                  Geen eigen pomp. Geschikt voor <strong>lagetemperatuurbronnen</strong> (warmtepompen, 30-45°C).
                </p>
                <p className="text-stone-700 text-sm leading-relaxed">
                  <strong>Principe:</strong> Verdeler werkt op drukbalans. Warmbronnen moeten zelf de circulatiepomp leveren.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-300">
              <h5 className="font-bold text-yellow-900 mb-3">Circulatiepomp: A-Label vs Oudere Modellen</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Oudere Pompen (Pre-2020)</p>
                  <p className="text-sm text-yellow-900">Constant vermogen: 60-100W permanent. Hoge energielasten, vooral in zomertijd.</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Moderne A-Label Pompen</p>
                  <p className="text-sm text-yellow-900">Adaptief vermogen: Past automatisch aan naargelang behoefte. 10-30W in normale bedrijf. Honderden euro's besparing per jaar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConstructieSection() {
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <Layers className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-3xl font-bold text-stone-900">Constructiemethodieken: Gedetailleerde Vergelijking</h3>
            <p className="text-stone-600 mt-1">Natbouw, droogbouw en infrezen: technische verschillen en toepassingen</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-stone-200">
          <table className="w-full bg-white">
            <thead>
              <tr className="border-b border-stone-200 bg-orange-50">
                <th className="px-4 py-3 text-left font-bold text-stone-900 text-sm">Aspect</th>
                <th className="px-4 py-3 text-left font-bold text-stone-900 text-sm">Natbouw</th>
                <th className="px-4 py-3 text-left font-bold text-stone-900 text-sm">Droogbouw</th>
                <th className="px-4 py-3 text-left font-bold text-stone-900 text-sm">Infrezen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900 text-sm">Methode</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Buizen in vloeibare afwerkvloer</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Prefab isolatieplaten met sleuven</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Diamantfrezen in bestaande dekvloer</td>
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900 text-sm">Materiaal</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Zandcement of anhydriet</td>
                <td className="px-4 py-3 text-stone-700 text-sm">EPS of gipsvezel platen</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Bestaande zandcement/anhydriet</td>
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900 text-sm">Opbouwhoogte</td>
                <td className="px-4 py-3 text-stone-700 text-sm">60-80mm</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Vanaf 20mm</td>
                <td className="px-4 py-3 text-stone-700 text-sm">0mm (in bestaande vloer)</td>
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900 text-sm">Thermische Inertie</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Hoog (langzaam op/af)</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Laag (snel reageren)</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Gemiddeld</td>
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900 text-sm">Typische Toepassing</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Nieuwbouw standaard</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Renovatie, houten vloeren</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Bestaande goede dekvloer</td>
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900 text-sm">Nachtverlaging</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Max 2°C mogelijk</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Flexibel tot 5°C</td>
                <td className="px-4 py-3 text-stone-700 text-sm">Gemiddeld 3°C</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="px-4 py-3 font-semibold text-stone-900 text-sm">Kritische Opmerkingen</td>
                <td className="px-4 py-3 text-stone-700 text-sm text-xs">Uithardtijd (12-28 dagen), zwaar materiaal</td>
                <td className="px-4 py-3 text-stone-700 text-sm text-xs">Hogere materiaalkosten, vochtgevoelig</td>
                <td className="px-4 py-3 text-stone-700 text-sm text-xs">Isolatie onderzijde essentieel, stofvorming</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <p className="text-blue-900 leading-relaxed">
            <strong>Thermische inertie:</strong> Dit bepaalt hoe snel het systeem op temperatuurveranderingen reageert. Natbouw heeft hoge inertie (langzaam warmen op = minder energieverspilling bij pieken), maar beperkt flexibiliteit. Droogbouw is sneller maar vergt meer regelmatige aanpassingen.
          </p>
        </div>
      </div>
    </section>
  );
}

function SmartHomeSection() {
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <Zap className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-3xl font-bold text-stone-900">Smart Home Integratie & Regelingsstrategie</h3>
            <p className="text-stone-600 mt-1">Maximaal rendement door intelligente zoneregeling en weersafhankelijke aansturing</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-stone-50 rounded-xl p-6">
            <h4 className="font-bold text-lg text-stone-900 mb-4">Zoneregeling: De Sleutel tot Energiebesparing</h4>
            <p className="text-stone-700 leading-relaxed mb-4">
              Moderne vloerverwarmingssystemen kunnen per ruimte of groep van kamers onafhankelijk worden geregeld. Dit biedt enorme voordelen:
            </p>
            <ul className="space-y-3 text-stone-700">
              <li className="flex gap-3">
                <span className="font-bold text-orange-600 flex-shrink-0">1.</span>
                <span><strong>Energie besparen:</strong> Ongebruikte ruimtes hoeven niet verwarmd te worden. Slapende gasten? Zoneregeling uit.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange-600 flex-shrink-0">2.</span>
                <span><strong>Comfort personaliseren:</strong> Iedere ruimte zijn eigen temperatuur. Werkruimte koel (19°C), slaapkamer warm (22°C).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange-600 flex-shrink-0">3.</span>
                <span><strong>Responsieve nachtdaling:</strong> Verwarming geleidelijk verminderen vlak voor slaaptijd, automatisch verhogen voor ochtendwakker-worden.</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-500">
            <h4 className="font-bold text-emerald-900 mb-4">Slimme Thermostaten: Leer-algoritmes</h4>
            <p className="text-emerald-900 leading-relaxed mb-4">
              Moderne thermostaten leren het <strong>trage opwarmgedrag</strong> van vloerverwarming in:
            </p>
            <ul className="space-y-2 text-emerald-900 text-sm">
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>Analyseren hoelang het duurt om ruimte van 15°C naar 22°C op te warmen</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>Algoritmes anticiperen en starten verwarming eerder</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span>Voorkomen dat systeem overreach (verspilling) pleegt</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-300">
            <h4 className="font-bold text-yellow-900 mb-4">Weersafhankelijke Aansturing</h4>
            <p className="text-yellow-900 leading-relaxed mb-4">
              Geavanceerde controlesystemen integreren weersbronnen:
            </p>
            <div className="space-y-3 text-yellow-900 text-sm">
              <p><strong>Buitentemperatuur:</strong> Kouder buiten → hoger ingestelde aanvoertemperatuur. Warmere dagen → lager vermogen.</p>
              <p><strong>Weersvoorspelling:</strong> Warme dag voorspeld? Vermindering van nachttemperatuur vermijden. Sneeuw voorspeld? Voorbereiding door lagere temperatuur 's nachts.</p>
              <p><strong>Zonnestraling:</strong> Detectie van zonnesterkte → compensatie door verwarming te verminderen op warme ramen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ExpertPage() {
  const faqItems: FAQItem[] = [
    {
      question: 'Waarom moet vloerverwarming op lagetemperatuurbronnen werken?',
      answer: 'Vloerverwarming werkt optimaal op 30-45°C (lagetemperatuurverwarming). Bij hogere temperaturen (65-80°C) werkt het inefficiënt, verhoogt de elektriciteit- of gasverbruik, en riskeert warmteschade aan afwerkingsmaterialen (PVC, laminaat). Warmtepompen produceren juist deze lagetemperaturen efficiënt. Traditionele CV-ketels moeten mengklappen gebruiken om de temperatuur omlaag te brengen, wat energieverlies veroorzaakt.',
    },
    {
      question: 'Wat is magnetiet en hoe voorkom ik het?',
      answer: 'Magnetiet (Fe₃O₄) is zwart slib dat ontstaat door oxidatiecorrosie van metalen in CV-water. Zonder diffusiedichte leidingen (DIN 4726) dringt zuurstof het systeem in. Magnetiet veroorzaakt verstopping, minder warmteverdeling en systeemfalen. Voorkoming: Gebruik altijd diffusiedichte PE-RT of PEX leidingen. Controleer het expansievat op donker water. Laat het systeem periodiek (elke 5-7 jaar) doorspoelen door een professioneel bedrijf.',
    },
    {
      question: 'Wat is het verschil tussen hart-op-hart afstanden en hoe kies ik?',
      answer: 'Hart-op-hart (HOH) is de afstand tussen middellijnen van twee leidingen. 10 cm = dicht patroon met hoge warmteverdeling (geschikt voor volledige verwarming). 15 cm = gemiddeld (goede isolatie + bijverwarming). 20 cm = laag vermogen (alleen comfortwarmte in badkamers). Keus hangt af van isolatiegraad, lagetemperatuurbron, en of u volledige verwarming of bijverwarming wilt. Raadpleeg altijd warmtebehoefteberekening (DIN 12098-3) voor optimale dimensionering.',
    },
    {
      question: 'Open of gesloten verdeler: Wat is het verschil?',
      answer: 'Open verdelers hebben een eigen pomp en mengklep. Nodig voor CV-ketels of hoge temperatuurbronnen (60-80°C). De mengklep mengt retourwater met aanvoer om lagetemperatuur te bereiken. Gesloten verdelers zijn pomploos en werken op drukbalans. Geschikt voor lagetemperatuurbronnen zoals warmtepompen (30-45°C). Gesloten verdelers zijn eenvoudiger, goedkoper, en hebben meer rendement. Keus hangt af van uw warmtebron: moderne installaties kiezen gesloten verdelers met warmtepomp.',
    },
    {
      question: 'Slakkenhuispatroon of meanderpatroon: Welke moet ik kiezen?',
      answer: 'Slakkenhuispatroon (bifilair) is het meest veelzijdig. Ideaal voor woonkamers en slaapkamers. Biedt gelijkmatige vloertemperatuur dankzij compensatie tussen warme aanvoer en koude retourleidingen. Meanderpatroon is specifiek voor grote raampartijen of koude buitenmuren. Warme leidingen langs het glas elimineren koudeval en tocht. Praktijk: Kies slakkenhuispatroon tenzij u grote beglazing hebt.',
    },
  ];

  return (
    <>
      <PageHero
        title="Technisch Handboek Vloerverwarming"
        badge="Expert Gids 2026"
        highlightedSubtitle="Voor professionals en gevorderde doe-het-zelvers"
        subtitle="Diepgaande technische gids: thermodynamische grondslagen, legpatronen, dimensionering, leidingmaterialen, constructiemethodieken en slimme integratie."
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Expert', href: '/expert' },
        ]}
      />

      <main className="bg-stone-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Technical Notice */}
          <TechnicalNotice />

          {/* Thermodynamics Section */}
          <ThermodynamicsSection />

          {/* Legpatronen Section */}
          <LegpatronenSection />

          {/* HOH Section */}
          <HOHSection />

          {/* Componenten Section */}
          <ComponentenSection />

          {/* Constructie Section */}
          <ConstructieSection />

          {/* Smart Home Section */}
          <SmartHomeSection />

          {/* FAQ Section */}
          <section className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde Technische Vragen</h2>
              <FAQSchema items={faqItems} />
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-orange-50 to-stone-50 rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Klaar voor praktische implementatie?</h2>
            <p className="text-stone-700 leading-relaxed mb-8">
              Dit technische handboek geeft u de kennis om professionals goed te controleren of zelf een project te plannen. Voor specifieke vragen en offerten, raadpleeg altijd erkende installateurs.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/soorten"
                className="inline-flex items-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-center justify-center"
              >
                Soorten Verwarming
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kosten"
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-center justify-center"
              >
                Kostencalculator
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/zelf-doen"
                className="inline-flex items-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors text-center justify-center"
              >
                Zelf Installeren
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
