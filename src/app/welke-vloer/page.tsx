import { Metadata } from 'next';
import { CheckCircle, AlertCircle, Zap, Thermometer, Waves, AlertTriangle, ChevronRight, Leaf, Layers } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

// Export metadata for SEO
export const metadata: Metadata = {
  title: 'Welke Vloer bij Vloerverwarming 2026 - Vloertype Gids',
  description: 'Ontdek welke vloertypen geschikt zijn voor vloerverwarming. Complete gids met R-waarden, thermische prestaties en praktische adviezen voor tegels, hout, laminaat en tapijt.',
  keywords: [
    'welke vloer vloerverwarming',
    'vloertype vloerverwarming',
    'R-waarde vloerverwarming',
    'tegels vloerverwarming',
    'parket vloerverwarming',
    'laminaat vloerverwarming',
    'tapijt vloerverwarming',
    'thermische weerstand',
  ],
  openGraph: {
    title: 'Welke Vloer bij Vloerverwarming 2026 - Vloertype Gids',
    description: 'Ontdek welke vloertypen geschikt zijn voor vloerverwarming. Complete gids met R-waarden, thermische prestaties en praktische adviezen.',
    type: 'website',
  },
};

export const revalidate = 3600;

// Type definitions
interface FAQItem {
  question: string;
  answer: string;
}

interface FloorMaterial {
  name: string;
  rValueMin: number;
  rValueMax: number;
  rating: string;
  ratingColor: string;
  thermalConductivity: string;
  icon: React.ReactNode;
}

// Floor materials comparison data
const floorMaterials: FloorMaterial[] = [
  {
    name: 'Natuursteen/Keramiek',
    rValueMin: 0.01,
    rValueMax: 0.02,
    rating: 'Optimaal',
    ratingColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    thermalConductivity: 'Zeer hoog',
    icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
  },
  {
    name: 'Gietvloeren',
    rValueMin: 0.02,
    rValueMax: 0.05,
    rating: 'Uitstekend',
    ratingColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    thermalConductivity: 'Hoog',
    icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
  },
  {
    name: 'PVC (Verlijmd)',
    rValueMin: 0.03,
    rValueMax: 0.05,
    rating: 'Uitstekend',
    ratingColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    thermalConductivity: 'Goed',
    icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
  },
  {
    name: 'Marmoleum/Linoleum',
    rValueMin: 0.04,
    rValueMax: 0.06,
    rating: 'Zeer goed',
    ratingColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    thermalConductivity: 'Goed',
    icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
  },
  {
    name: 'Lamelparket (Eiken)',
    rValueMin: 0.10,
    rValueMax: 0.14,
    rating: 'Goed (mits dun)',
    ratingColor: 'bg-blue-100 text-blue-800 border-blue-300',
    thermalConductivity: 'Matig',
    icon: <AlertCircle className="w-6 h-6 text-blue-600" />,
  },
  {
    name: 'Laminaat',
    rValueMin: 0.07,
    rValueMax: 0.12,
    rating: 'Acceptabel',
    ratingColor: 'bg-blue-50 text-blue-700 border-blue-200',
    thermalConductivity: 'Matig',
    icon: <AlertCircle className="w-6 h-6 text-blue-600" />,
  },
  {
    name: 'Tapijt (Laagpolig)',
    rValueMin: 0.10,
    rValueMax: 0.15,
    rating: 'Beperkt geschikt',
    ratingColor: 'bg-orange-100 text-orange-800 border-orange-300',
    thermalConductivity: 'Laag',
    icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
  },
];

// Component: Floor Materials Comparison Table
function ComparisonTable() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">
          Vloertypen op een rij
        </h2>

        <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
          <div className="flex gap-3">
            <Thermometer className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-blue-900 mb-2">Belangrijkste regel:</p>
              <p className="text-blue-800">
                De totale R-waarde van vloer + ondervloer mag <strong>niet hoger zijn dan 0,15 m²K/W</strong>. Dit is cruciaal voor effectieve warmtegeleiding.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-stone-200">
          <table className="w-full bg-white">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-100">
                <th className="px-6 py-4 text-left font-bold text-stone-900">Vloertype</th>
                <th className="px-6 py-4 text-left font-bold text-stone-900">R-waarde</th>
                <th className="px-6 py-4 text-left font-bold text-stone-900">Beoordeling</th>
                <th className="px-6 py-4 text-left font-bold text-stone-900">Warmtegeleiding</th>
              </tr>
            </thead>
            <tbody>
              {floorMaterials.map((material, idx) => (
                <tr key={idx} className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-6 py-4 font-semibold text-stone-900">{material.name}</td>
                  <td className="px-6 py-4 text-stone-700">
                    {material.rValueMin.toFixed(2)} - {material.rValueMax.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${material.ratingColor}`}>
                      {material.rating}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-stone-700">{material.thermalConductivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Component: Tiles & Natural Stone Section
function TilesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Tegels & Natuursteen</h3>
            <p className="text-emerald-100">De ideale keuze voor vloerverwarming</p>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Uitzonderlijke thermische prestaties</h4>
                <p className="text-stone-700">
                  Met een R-waarde tussen 0,01 en 0,02 m²K/W behoren tegels en natuursteen tot de beste keuzes. De hoge warmtegeleiding zorgt ervoor dat vrijwel alle warmte van het verwarmingssysteem naar boven komt.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Hoge natuurlijke thermische buffer</h4>
                <p className="text-stone-700">
                  De hoge massa van tegels en natuursteen creëert een thermische buffer. Dit geeft een stabiele en gelijkmatige vloertemperatuur, wat zorgt voor optimaal thermisch comfort zonder temperatuurschommelingen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Zeer stabiele vloeren</h4>
                <p className="text-stone-700">
                  Tegels en natuursteen zetten niet uit door vochtopname of temperatuurwisselingen. Dit betekent geen voegen die openscheuren en geen vervorming door fluctuaties in de ruimte.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-stone-700">
                <strong>Advies:</strong> Dit is dé ideale keuze voor vloerverwarming. Zowel in badkamers, keukens als in woonkamers. Combineer met een warmtegeleidende ondervloer voor optimale prestaties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component: PVC & Vinyl Section
function PVCSection() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-8 text-white">
            <h3 className="text-3xl font-bold mb-2">PVC & Vinyl</h3>
            <p className="text-emerald-100">Technisch één van de beste keuzes</p>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Zeer lage thermische weerstand</h4>
                <p className="text-stone-700">
                  Verlijmde PVC-stroken hebben een R-waarde van slechts 0,03-0,05 m²K/W. Dit is vrijwel even goed als tegels. De warmteoverdracht is zeer efficiënt.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Verlijmd beter dan klik</h4>
                <p className="text-stone-700">
                  <strong>Verlijmde PVC:</strong> Beste thermische prestaties, geen luchtlagen. <br />
                  <strong>Klik-PVC:</strong> Zorg voor een warmtegeleidende ondervloer om luchtlagen te voorkomen die isolerend werken.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Praktische voordelen</h4>
                <p className="text-stone-700">
                  Waterdicht, gemakkelijk schoon te houden, duurzaam en relatief betaalbaar. Ideaal voor badkamers, keukens en andere natte ruimtes.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-stone-700">
                <strong>Advies:</strong> Kies verlijmde PVC voor optimale prestaties. Bij klik-PVC: zorg voor warmtegeleidende ondervloer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component: Wood & Parquet Section
function WoodSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Hout & Parket</h3>
            <p className="text-blue-100">Kan wel, maar vereist voorzichtigheid</p>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Stabiele houtsoorten kiezen</h4>
                <p className="text-stone-700">
                  <strong>Geschikt:</strong> Eiken, Wengé, Merbau (zeer stabiel)<br />
                  <strong>Ongeschikt:</strong> Beuk, Es, Ash (zwellen/krimpen te veel)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Vochtbalans regelmatig controleren</h4>
                <p className="text-stone-700">
                  Houd relatieve vochtigheid tussen 50-65% (ideaal 55%). Hogere vochtigheid doet hout zwellen, lagere vochtigheid doet het krimpen. Dit veroorzaakt voegvorming en scheuren.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Vloertemperatuur niet hoger dan 28°C</h4>
                <p className="text-stone-700">
                  Dit is essentieel voor houtsoorten. Hogere temperaturen leiden tot te veel uitdroging, scheuren en voegvorming.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">R-waarde tot 0,14 m²K/W acceptabel</h4>
                <p className="text-stone-700">
                  Dun lamelparket (8-10 mm) kan gebruikt worden. Dikker hout is minder geschikt vanwege isolerende werking.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-stone-700">
                <strong>Advies:</strong> Alleen voor wie bereid is vochtigheidsniveaus nauwkeurig te monitoren. Niet geschikt voor kamers met grote vochtschommelingen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component: Laminaat Section
function LaminaatSection() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Laminaat</h3>
            <p className="text-blue-100">Acceptabel met juiste ondervloer</p>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Kies vloerverwarming-geschikt laminaat</h4>
                <p className="text-stone-700">
                  Niet elk laminaat is geschikt. Zoek laminaat dat speciaal voor vloerverwarming is ontworpen. Dit staat meestal vermeld op de verpakking.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">R-waarde 0,07-0,12 m²K/W</h4>
                <p className="text-stone-700">
                  Dit is acceptabel maar niet ideaal. Zorg ervoor dat ondervloer + laminaat niet boven 0,15 m²K/W komt. Controleer altijd op de verpakking.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Ondervloer is cruciaal</h4>
                <p className="text-stone-700">
                  Gebruik een dunne ondervloer met lage thermische weerstand. Dit helpt vochtproblemen te voorkomen en verbetert de warmtegeleiding.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-stone-700">
                <strong>Advies:</strong> Laminaat kan, maar is niet optimaal. Voor betere prestaties en comfort kun je beter tegels of PVC kiezen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component: Carpet Section
function CarpetSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Tapijt</h3>
            <p className="text-orange-100">Alleen laagpolig, schaadt efficiëntie</p>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Sterk verminderde efficiëntie</h4>
                <p className="text-stone-700">
                  Tapijt isoleert sterk. Ook laagpolig tapijt (R-waarde 0,10-0,15) absorbeert veel warmte in plaats van deze door te geven. Dit kan 20-30% energieverlies betekenen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Alleen laagpolig tapijt geschikt</h4>
                <p className="text-stone-700">
                  Hoogpolig tapijt is absoluut ongeschikt. Zelf laagpolig tapijt is al niet ideaal. Als je tapijt wilt, kies dan minimaal 8 mm polig.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Vochtproblematiek</h4>
                <p className="text-stone-700">
                  De vloer onder tapijt kan vocht gaan vasthouden. Dit leidt tot schimmels en muffellucht. Regelbewaking nodig.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-stone-700">
                <strong>Advies:</strong> Vermijd tapijt op vloerverwarming. Als je comfort van tapijt wilt, overweeg dan vloerverwarming alleen in bepaalde zones (niet onder tapijt).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component: Tips Section
function TipsSection() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
          Praktische tips voor succes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex gap-3 mb-4">
              <Zap className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <h3 className="font-bold text-stone-900">Controleer R-waarde op verpakking</h3>
            </div>
            <p className="text-stone-700">
              Altijd de R-waarde checken! Zorg dat vloer + ondervloer samen niet hoger is dan 0,15 m²K/W.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex gap-3 mb-4">
              <Waves className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <h3 className="font-bold text-stone-900">Verlijmd beter dan klik</h3>
            </div>
            <p className="text-stone-700">
              Verlijmde vloeren hebben betere warmtegeleiding. Klik-systemen kunnen luchtlagen vormen.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex gap-3 mb-4">
              <Layers className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <h3 className="font-bold text-stone-900">Warmtegeleidende ondervloer</h3>
            </div>
            <p className="text-stone-700">
              Kies voor warmtegeleidende ondervloer, niet isolatief. Dit vergroot de thermische prestatie aanzienlijk.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex gap-3 mb-4">
              <Thermometer className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <h3 className="font-bold text-stone-900">Max 28°C voor houten vloeren</h3>
            </div>
            <p className="text-stone-700">
              Houtsoorten mogen niet warmer dan 28°C. Dit voorkomen scheuren en voegvorming.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <h3 className="font-bold text-stone-900">Vermijd dikke ondervloeren</h3>
            </div>
            <p className="text-stone-700">
              Dikke isolatieve onderlagen doen de vloer teveel isoleren. Dit verkleint het voordeel van vloerverwarming.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex gap-3 mb-4">
              <Leaf className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <h3 className="font-bold text-stone-900">Vochtgehalte controleren</h3>
            </div>
            <p className="text-stone-700">
              Vooral voor hout: relatieve vochtigheid 45-65% handhaven. Dit voorkomt vochtproblemen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component: CTA Section
function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Klaar om je vloer te kiezen?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Ontdek de kosten en effectiviteit van vloerverwarming met je gekozen vloertype.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kosten"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-stone-100 text-orange-600 font-bold rounded-lg transition-colors"
            >
              Bereken kosten
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/subsidie-check"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-700 hover:bg-orange-800 text-white font-bold rounded-lg transition-colors"
            >
              Check subsidies
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function WelkeVloerPage() {
  const faqItems: FAQItem[] = [
    {
      question: 'Welke vloer is het beste bij vloerverwarming?',
      answer: 'Natuursteen of keramische tegels zijn het ideaal. Ze hebben de laagste R-waarde (0,01-0,02), beste warmtegeleiding en creëren thermische stabiliteit. PVC (verlijmd) is een goede tweede keuze. Vermijd dikker laminaat en zeker tapijt.',
    },
    {
      question: 'Kan ik houten vloer combineren met vloerverwarming?',
      answer: 'Ja, maar met voorzichtigheid. Kies stabiele houtsoorten zoals eiken, zorg voor vochtigheid 50-65%, beperk oppervlaktetemperatuur tot 28°C en gebruik dun lamelparket (8-10 mm). Beuken en es zijn ongeschikt vanwege sterke zwel- en krimpbewegingen.',
    },
    {
      question: 'Wat is de R-waarde en waarom is het belangrijk?',
      answer: 'De R-waarde (thermische weerstand) in m²K/W geeft aan hoe goed warmte door een materiaal gaat. Laag is goed. Voor vloerverwarming mag de totale R-waarde van vloer + ondervloer niet hoger zijn dan 0,15 m²K/W. Dit bepaalt de efficiëntie.',
    },
    {
      question: 'Is laminaat geschikt voor vloerverwarming?',
      answer: 'Laminaat is acceptabel maar niet ideaal. R-waarde ligt tussen 0,07-0,12 m²K/W. Kies speciaal voor vloerverwarming ontworpen laminaat, zorg voor dunne ondervloer, en controleer dat de totale R-waarde niet hoger is dan 0,15 m²K/W.',
    },
    {
      question: 'Mag tapijt op vloerverwarming?',
      answer: 'Alleen laagpolig tapijt kan, maar het vermindert efficiëntie sterk (20-30% energieverlies). Tapijt absorbeert warmte en vochtproblemen ontstaan. Beter: kies tegels of PVC. Mocht je tapijt willen, zorg dat het hoogpolig tapijt absoluut vermeden wordt.',
    },
    {
      question: 'Hoe kies ik de juiste ondervloer?',
      answer: 'Kies een warmegeleidende ondervloer, niet isolatief! Een dikke isolatieve ondervloer werkt tegen vloerverwarming. Controleer de R-waarde. Samen met vloer mag de totale R-waarde niet hoger zijn dan 0,15 m²K/W. Voor sommige vloertypes (PVC klik) is warmtegeleidende ondervloer cruciaal.',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Welke Vloer bij Vloerverwarming?"
        badge="2026 Gids"
        highlightedSubtitle="De juiste vloer kiezen"
        subtitle="Ontdek welke vloertypen geschikt zijn voor vloerverwarming. Complete gids met R-waarden, thermische prestaties en praktische adviezen voor elk materiaal."
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Welke vloer', href: '/welke-vloer' },
        ]}
      />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Tiles Section */}
      <TilesSection />

      {/* PVC Section */}
      <PVCSection />

      {/* Wood Section */}
      <WoodSection />

      {/* Laminaat Section */}
      <LaminaatSection />

      {/* Carpet Section */}
      <CarpetSection />

      {/* Tips Section */}
      <TipsSection />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
            Veelgestelde vragen
          </h2>
          <FAQSchema items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
