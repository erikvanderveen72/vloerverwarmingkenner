import { Metadata } from 'next';
import { AlertCircle, CheckCircle, Clock, Droplets, Flame, Thermometer, TrendingUp, Zap, AlertTriangle, Home } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Opstookprotocol Vloerverwarming - Handleiding 2026 | Vloerverwarmingkenner',
  description: 'Compleet opstookprotocol voor vloerverwarming (2026). Voorkóm structurele schade met correct opstarten. Stap-voor-stapschema, thermische spanning, per vloertype tips.',
  keywords: 'opstookprotocol, vloerverwarming opwarmen, thermische spanning, dekvloer, starten vloerverwarming, eerste opstart',
  openGraph: {
    title: 'Opstookprotocol Vloerverwarming - Handleiding 2026',
    description: 'Het opstookprotocol is cruciaal voor de levensduur van uw vloerverwarming. Leer hoe u correct opstart en schade voorkómt.',
  },
};

const faqData = [
  {
    question: 'Hoe lang duurt een volledig opstookprotocol?',
    answer: 'Een standaard opstookprotocol duurt tussen 11 en 23 dagen, afhankelijk van het type dekvloer. Zandcement vloeren nemen langer (18-23 dagen) dan anhydrietvloeren (11-14 dagen). Dit is inclusief het wachten op uithardings- en afkoelingstijd.',
  },
  {
    question: 'Kan ik het opstookprotocol sneller doen?',
    answer: 'Absoluut niet. Te snel opwarmen (meer dan 5°C per dag) veroorzaakt thermische spanningen in de dekvloer en het materiaal. Dit leidt tot microbarsten, afschuiving en latere problemen met vloerafwerking. Het protocol is wetenschappelijk bepaald voor uw vloertype.',
  },
  {
    question: 'Wat gebeurt er bij te snel opwarmen?',
    answer: 'Thermische spanning ontstaat omdat materialen ongelijk uitzetten. De zandcement/anhydriet dekvloer expand sneller dan het water in de buizen. Dit veroorzaakt interne trekspanningen, microbarsten en mogelijk scheuren in de afwerklaag. Deze schade is onomkeerbaar.',
  },
  {
    question: 'Wat is de ideale oppervlaktetemperatuur?',
    answer: 'Dit hangt af van de vloerafwerking. Voor houten vloeren en gietvloeren mag de oppervlaktetemperatuur NOOIT hoger dan 28°C zijn. Voor PVC/vinyl is dit 27°C. Bij tegelvloeren is een hoger maximum toegestaan (rond 29°C), maar voorzichtigheid is geboden bij zeer dikke tegels.',
  },
  {
    question: 'Moet ik lucht in het huis laten tijdens het protocol?',
    answer: 'Ja, zeer belangrijk. Open deuren en ramen regelmatig om restvocht uit de dekvloer af te voeren. Een vochtige dekvloer die snel wordt opgewarmd kan ernstig beschadigd worden. Zorg voor goede ventilatie, zeker de eerste dagen.',
  },
];

export default function OpstookprotocolPage() {
  return (
    <>
      <PageHero
        title="Opstookprotocol Vloerverwarming"
        subtitle="Het meest onderschatte onderdeel van uw installatie. Voorkóm structurele schade met correct opstarten."
      />

      <main className="bg-stone-50 py-12 md:py-16">
        {/* Critical Importance Section */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-red-500">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-stone-900">Waarom Het Opstookprotocol Cruciaal Is</h2>
              </div>
            </div>

            <div className="space-y-4 text-stone-700">
              <p className="text-lg leading-relaxed">
                Het opstookprotocol is één van de meest onderschatte fasen van een vloerverwarmingsinstallatie. Veel eigenaren maken de fout door te snel op te warmen of helemaal geen protocol te volgen. <strong>Dit kan permanente structurele schade veroorzaken.</strong>
              </p>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h3 className="font-bold text-red-900 mb-2">Thermische Spanning: Het Risico</h3>
                <p className="text-red-900 mb-3">
                  Wanneer u een vloer voor het eerst verwarmt, gebeuren er dingen in het materiaal:
                </p>
                <ul className="space-y-2 text-red-900 text-sm">
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>De zandcement- of anhydrietvloer bevat restvocht (hydratievocht)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>Verschillende materialen hebben verschillende uitzettingscoëfficiënten</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>Snelle opwarming = ongelijke uitzetting = interne trekspanningen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>Resultaat: microbarsten, afschuiving, tlater scheuren in afwerklaag</span>
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-stone-900 mt-4">
                De enige manier om dit te voorkomen: het officiële opstookprotocol volgen.
              </p>
            </div>
          </div>
        </section>

        {/* When to Start Section */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <Clock className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Wanneer Kun Je Beginnen?</h3>
                <p className="text-stone-600 mt-1">Alleen NADAT de dekvloer volledig is uitgehard</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-stone-50 rounded-xl p-6">
                <h4 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-orange-500" />
                  Zandcement Dekvloer
                </h4>
                <div className="space-y-2 text-stone-700">
                  <p><strong>Uithardingstijd:</strong> 28 dagen</p>
                  <p className="text-sm text-stone-600">
                    Zandcement bevat veel water en harde zeer traag uit. Na 28 dagen is ongeveer 80% van het water verdampt.
                  </p>
                  <p className="mt-3 font-semibold text-orange-600">Protocol start: Na dag 28</p>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-500">
                <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-emerald-600" />
                  Anhydriet (Gips) Dekvloer
                </h4>
                <div className="space-y-2 text-emerald-900">
                  <p><strong>Uithardingstijd:</strong> 14-21 dagen</p>
                  <p className="text-sm text-emerald-800">
                    Anhydriet droogt sneller uit dan zandcement, maar harde ook hier zeer traag. Dikke lagen nemen langer.
                  </p>
                  <p className="mt-3 font-semibold text-emerald-700">Protocol start: Na dag 14-21</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-3">Zelf Uithardingtijd Berekenen</h4>
              <p className="text-blue-900 text-sm mb-2">
                <strong>Regel:</strong> Als je weet hoe dik je dekvloer is:
              </p>
              <ul className="space-y-1 text-blue-900 text-sm">
                <li><strong>Zandcement:</strong> 1 cm dikte × 1 dag = uithardingstijd (bijv. 7 cm = 7 dagen, maar minimum 28 dagen)</li>
                <li><strong>Anhydriet:</strong> 1 cm dikte × 0.5-0.7 dag = uithardingstijd (bijv. 6 cm = 3-4 dagen, maar minimum 14 dagen)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Protocol Timeline Main Section */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-8">
              <TrendingUp className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Het Stappenplan (Richtlijn 2026)</h3>
                <p className="text-stone-600 mt-1">Exact protocol voor optimale resultaten</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-stone-900 mb-2">Dag 1: Start</h4>
                    <p className="text-stone-700 font-semibold">Watertemperatuur: 20°C</p>
                    <p className="text-sm text-stone-600 mt-2">
                      Begin voorzichtig. Stel de CV-ketel/warmtepomp in op 20°C watertemperatuur. Dit is gelijk aan of iets onder kamertemperatuur. Controleer dat alle thermostaatklepen in de verdeler geopend zijn.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-r from-orange-50 to-transparent rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-stone-900 mb-2">Dag 2-5: Stapsgewijze Verhoging</h4>
                    <p className="text-stone-700 font-semibold">Verhoog elke 24 uur met 5°C tot maximaal 40°C</p>
                    <div className="mt-2 bg-white rounded-lg p-4 text-sm font-mono space-y-1">
                      <p>Dag 2: 25°C</p>
                      <p>Dag 3: 30°C</p>
                      <p>Dag 4: 35°C</p>
                      <p>Dag 5: 40°C (maximumtemperatuur bereikt)</p>
                    </div>
                    <p className="text-sm text-stone-600 mt-3">
                      <strong>Belangrijk:</strong> Dit zijn watertemperaturen, niet oppervlaktetemperaturen. De vloer zal ca. 5-10°C kouder zijn dan het water.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-gradient-to-r from-red-50 to-transparent rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-stone-900 mb-2">Fase 2: Platefase (3-5 dagen)</h4>
                    <p className="text-stone-700 font-semibold">Houd maximumtemperatuur constant op 40°C</p>
                    <p className="text-sm text-stone-600 mt-2">
                      Nu laat je de vloer 3-5 dagen op 40°C watertemperatuur staan. Dit geeft het materiaal tijd om gelijkmatig uit te zetten en te stabiliseren. Controleer dagelijks op:
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-stone-700">
                      <li>✓ Watertemperatuur blijft stabiel op 40°C</li>
                      <li>✓ Geen temperatuurfluctuaties</li>
                      <li>✓ Geen lekkages zichtbaar</li>
                      <li>✓ Verdeler werkt normaal</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-gradient-to-r from-emerald-50 to-transparent rounded-xl p-6 border-l-4 border-emerald-500">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-stone-900 mb-2">Fase 3: Afkoeling (4-5 dagen)</h4>
                    <p className="text-stone-700 font-semibold">Verlaag stapsgewijs met 5°C per dag tot omgevingstemperatuur</p>
                    <div className="mt-2 bg-white rounded-lg p-4 text-sm font-mono space-y-1">
                      <p>Dag 1 afkoel: 35°C</p>
                      <p>Dag 2 afkoel: 30°C</p>
                      <p>Dag 3 afkoel: 25°C</p>
                      <p>Dag 4 afkoel: 20°C (omgevingstemperatuur)</p>
                    </div>
                    <p className="text-sm text-stone-600 mt-3">
                      Dit is net zo belangrijk als opwarming. Langzame afkoeling voorkomt nieuwe thermische spanning doordat het materiaal uniform afkoelt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Total Duration */}
              <div className="bg-gradient-to-r from-purple-50 to-transparent rounded-xl p-6 border-l-4 border-purple-500 mt-8">
                <div className="flex items-start gap-4">
                  <Flame className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-stone-900 mb-2">Totale Duur van het Protocol</h4>
                    <p className="text-stone-700">
                      <strong>Minimum:</strong> 11 dagen (1 start + 4 opwarming + 3 plateau + 3 afkoeling)
                    </p>
                    <p className="text-stone-700 mt-1">
                      <strong>Standaard:</strong> 14-18 dagen voor anhydrietvloeren
                    </p>
                    <p className="text-stone-700 mt-1">
                      <strong>Voor zandcement:</strong> 18-23 dagen (als je de volle 28 dagen uitharding afwacht)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Considerations */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Speciale Aandachtspunten</h3>
                <p className="text-stone-600 mt-1">Zaken waarmee je extra voorzichtig moet zijn</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
                <h4 className="font-bold text-yellow-900 mb-2">Houten Vloeren</h4>
                <p className="text-yellow-900 text-sm mb-2">
                  <strong>Oppervlaktetemperatuur NOOIT hoger dan 28°C</strong>
                </p>
                <p className="text-yellow-900 text-sm">
                  Hout is gevoelig voor temperatuurveranderingen. Te warme houten vloeren kunnen buigen, krimpen of barsten. Houd vochtgehalte tussen 50-65% relatiever vochtigheid.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-xl p-6">
                <h4 className="font-bold text-orange-900 mb-2">PVC/Vinyl Vloeren</h4>
                <p className="text-orange-900 text-sm mb-2">
                  <strong>Maximum oppervlaktetemperatuur: 27°C</strong>
                </p>
                <p className="text-orange-900 text-sm">
                  PVC is zeer temperatuurgevelig. Boven 27°C kan het materiaal vervormen, blijvende plooien krijgen of verkleven. Dit is moeilijk te herstellen.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-2">Gietvloeren</h4>
                <p className="text-blue-900 text-sm mb-2">
                  <strong>Raadpleeg de leverancier voor specifiek protocol</strong>
                </p>
                <p className="text-blue-900 text-sm">
                  Gietvloeren (bijvoorbeeld epoxy of polyurethaan) kunnen andere eisen stellen. De leverancier heeft vaak een aangepast protocol. Volg dit nauwkeurig.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-6">
                <h4 className="font-bold text-emerald-900 mb-2">Ventilatie is Essentieel</h4>
                <p className="text-emerald-900 text-sm mb-2">
                  <strong>Zorg voor goede luchtstroom tijdens het hele protocol</strong>
                </p>
                <p className="text-emerald-900 text-sm">
                  Houd deuren en ramen geregeld open, zeker op warme dagen. Restvocht uit de dekvloer moet kunnen verdampen. Een vochtige vloer die snel wordt opgewarmd kan veel schade lijden.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6">
                <h4 className="font-bold text-red-900 mb-2">Directe Zonnestraling</h4>
                <p className="text-red-900 text-sm mb-2">
                  <strong>Vermijd tijdens het protocol</strong>
                </p>
                <p className="text-red-900 text-sm">
                  Trekken de zonwering/gordijnen dicht. Directe zon kan lokale oververwarming veroorzaken, wat thermische spanning creëert. Dit kan barsten in tegels of afschuiving van vinyl veroorzaken.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
                <h4 className="font-bold text-amber-900 mb-2">Anhydrietvloeren: Naspannen Eerst</h4>
                <p className="text-amber-900 text-sm mb-2">
                  <strong>Moet soms vóór het protocol plaatsvinden</strong>
                </p>
                <p className="text-amber-900 text-sm">
                  Sommige anhydrietvloeren moeten "nagespan" worden door verhitting tot 40°C voor er uiteindelijk vocht uit verdampt. Dit gebeurt soms voor het officiele protocol. Volg de instructies van je leverancier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Veelgemaakte Fouten (en Waarom Ze Schadelijk Zijn)</h3>
                <p className="text-stone-600 mt-1">Deze fouten veroorzaken blijvende schade</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2">❌ Te Vroeg Beginnen (Dekvloer niet Uitgehard)</h4>
                <p className="text-red-900 text-sm mb-3">
                  <strong>Het Probleem:</strong> Je verhit een vloer die nog veel water bevat. Dit water verdampt onder de nieuwe vloerlaag en schept luchtzakken/holle ruimten.
                </p>
                <p className="text-red-900 text-sm mb-2">
                  <strong>Het Resultaat:</strong>
                </p>
                <ul className="text-red-900 text-sm space-y-1 ml-4">
                  <li>• Holle plekken onder tegels</li>
                  <li>• Tegels springen eruit</li>
                  <li>• Vinyl krijgt luchtbellen</li>
                  <li>• Hout buigt of barst</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2">❌ Te Snel Opwarmen (&gt;5°C per dag)</h4>
                <p className="text-red-900 text-sm mb-3">
                  <strong>Het Probleem:</strong> De dekvloer en buizen zetten ongelijk uit. Thermische spanning ontstaat in het materiaal.
                </p>
                <p className="text-red-900 text-sm mb-2">
                  <strong>Het Resultaat:</strong>
                </p>
                <ul className="text-red-900 text-sm space-y-1 ml-4">
                  <li>• Microbarsten in zandcement/anhydriet</li>
                  <li>• Afschuiving van lagen</li>
                  <li>• Scheuren in tegels</li>
                  <li>• Vinyl buigt of kreukelt</li>
                  <li>• Houten vloer buigt permanent</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2">❌ Nachtverlaging Toepassen tijdens het Protocol</h4>
                <p className="text-red-900 text-sm mb-3">
                  <strong>Het Probleem:</strong> Je thermostaatbeheer laat de temperatuur 's nachts zakken. Dit creëert extra thermische cycli en spanning.
                </p>
                <p className="text-red-900 text-sm mb-2">
                  <strong>Het Resultaat:</strong>
                </p>
                <ul className="text-red-900 text-sm space-y-1 ml-4">
                  <li>• Extra thermische spanningen</li>
                  <li>• Snellere moeheid van het materiaal</li>
                  <li>• Verhoogde risico op barsten</li>
                </ul>
                <p className="text-red-900 text-sm mt-3">
                  <strong>Oplossing:</strong> Zet nachts je CV-installatie NIET lager. Houd een stabiele watertemperatuur, dag en nacht.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2">❌ Vloerafwerking Leggen voor Protocol Klaar</h4>
                <p className="text-red-900 text-sm mb-3">
                  <strong>Het Probleem:</strong> Je legt tegels/vinyl/hout VOOR het protocol begint. Deze materialen kunnen dan thermische spanning niet verdragen.
                </p>
                <p className="text-red-900 text-sm mb-2">
                  <strong>Het Resultaat:</strong>
                </p>
                <ul className="text-red-900 text-sm space-y-1 ml-4">
                  <li>• Tegels springen er uit</li>
                  <li>• Vinyl scheurt of buigt</li>
                  <li>• Alles moet opnieuw</li>
                  <li>• Aanzienlijke extra kosten</li>
                </ul>
                <p className="text-red-900 text-sm mt-3">
                  <strong>Correct volgorde:</strong> Dekvloer → (Protocol) → Vloerafwerking
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2">❌ Geen Ventilatie of Veel Vocht in Lucht</h4>
                <p className="text-red-900 text-sm mb-3">
                  <strong>Het Probleem:</strong> Gesloten ramen/deuren voorkormen dat restvocht verdampt.
                </p>
                <p className="text-red-900 text-sm mb-2">
                  <strong>Het Resultaat:</strong>
                </p>
                <ul className="text-red-900 text-sm space-y-1 ml-4">
                  <li>• Water in dekvloer blijft langer zitten</li>
                  <li>• Holle plekken ontstaan bij afwerking</li>
                  <li>• Vochtproblemen in huis</li>
                  <li>• Groei van schimmel mogelijk</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Per Floor Type Tips */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <Home className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-stone-900">Vloertype-Specifieke Tips</h3>
                <p className="text-stone-600 mt-1">Aangepaste richtlijnen per afwerkingtype</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Tegelvloer */}
              <div className="bg-gradient-to-br from-stone-50 to-transparent rounded-xl p-6 border-l-4 border-stone-400">
                <h4 className="font-bold text-stone-900 mb-3 text-lg">Tegelvloer</h4>
                <div className="space-y-2 text-stone-700 text-sm">
                  <p><strong>Volg het standaard protocol nauwkeurig.</strong> Tegels kunnen veel warmte verdragen, maar de lijm eronder niet.</p>
                  <ul className="space-y-1 ml-4 mt-2">
                    <li>✓ Oppervlaktetemperatuur mag tot 29°C, maar wees voorzichtig bij zeer dikke tegels</li>
                    <li>✓ Tegels leggen NADAT protocol klaar is</li>
                    <li>✓ Gebruik vloerverwarmings-lijm (niet standaard lijm)</li>
                    <li>✓ Wacht minimaal 48 uur na protocol voor lijm</li>
                  </ul>
                </div>
              </div>

              {/* PVC/Vinyl */}
              <div className="bg-gradient-to-br from-orange-50 to-transparent rounded-xl p-6 border-l-4 border-orange-500">
                <h4 className="font-bold text-stone-900 mb-3 text-lg">PVC/Vinyl Vloeren</h4>
                <div className="space-y-2 text-stone-700 text-sm">
                  <p><strong>Deze zijn het meest gevoelig voor warmte.</strong> PVC kan vervormen of verkleven.</p>
                  <ul className="space-y-1 ml-4 mt-2">
                    <li>⚠ Oppervlaktetemperatuur NOOIT hoger dan 27°C</li>
                    <li>⚠ Dit betekent watertemperatuur rond 35-37°C (niet 40°C!)</li>
                    <li>⚠ Verhoog langzamer: misschien 4°C per dag ipv 5°C</li>
                    <li>⚠ Controleer oppervlaktetemperatuur met thermograaf of thermometer</li>
                    <li>⚠ Leg vinyl NADAT protocol helemaal klaar is</li>
                  </ul>
                </div>
              </div>

              {/* Houten Vloer */}
              <div className="bg-gradient-to-br from-amber-50 to-transparent rounded-xl p-6 border-l-4 border-amber-600">
                <h4 className="font-bold text-stone-900 mb-3 text-lg">Houten Vloeren</h4>
                <div className="space-y-2 text-stone-700 text-sm">
                  <p><strong>Hout reageert sterk op warmte en vochtigheid.</strong> Dit vereist extra voorzichtigheid.</p>
                  <ul className="space-y-1 ml-4 mt-2">
                    <li>⚠ Oppervlaktetemperatuur NOOIT hoger dan 28°C</li>
                    <li>⚠ Relatiever luchtvochtigheid: 50-65% ideaal</li>
                    <li>⚠ Te droog (beneden 40%): hout krimpt, kraakt</li>
                    <li>⚠ Te vochtig (boven 70%): hout zwelt, buigt</li>
                    <li>⚠ Controleer vochtigheid met hygrometer</li>
                    <li>⚠ Leg hout minimaal 7-10 dagen NADAT protocol klaar is</li>
                    <li>⚠ Veel houtsoorten kunnen niet met vloerverwarming; check je houtsoort</li>
                  </ul>
                </div>
              </div>

              {/* Gietvloer */}
              <div className="bg-gradient-to-br from-blue-50 to-transparent rounded-xl p-6 border-l-4 border-blue-500">
                <h4 className="font-bold text-stone-900 mb-3 text-lg">Gietvloeren (Epoxy, Polyurethaan)</h4>
                <div className="space-y-2 text-stone-700 text-sm">
                  <p><strong>Dit zijn speciale materialen met eigen eisen.</strong></p>
                  <ul className="space-y-1 ml-4 mt-2">
                    <li>→ Vraag je leverancier om zijn specifieke opstookprotocol</li>
                    <li>→ Dit kan afwijken van het standaard 5°C/dag schema</li>
                    <li>→ Sommige gietvloeren kunnen lagere temperaturen nodig hebben</li>
                    <li>→ Volg het protcol van je leverancier nauwkeurig</li>
                  </ul>
                </div>
              </div>
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
              href="/welke-vloer"
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">Welke Vloer Past Best?</h3>
              <p className="text-orange-100 mb-4">
                Kies de juiste vloersoort voor jouw situatie
              </p>
              <span className="inline-block font-semibold">Vergelijk vloertypen →</span>
            </a>

            <a
              href="/zelf-doen"
              className="bg-gradient-to-br from-stone-700 to-stone-800 rounded-2xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">Zelf Installeren?</h3>
              <p className="text-stone-300 mb-4">
                Gids voor DIY vloerverwarmingsinstallatie
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
