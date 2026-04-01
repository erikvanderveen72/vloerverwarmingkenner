import Link from 'next/link';
import { Flame, Lock, Shield, RotateCcw } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="p-2 rounded-lg bg-orange-900/30 group-hover:bg-orange-900/50 transition-colors">
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
              <div className="font-bold text-white">
                vloerverwarmingkenner
                <span className="text-orange-400">.nl</span>
              </div>
            </Link>
            <p className="text-sm text-stone-400 mt-2">
              Alles wat je wilt weten over vloerverwarming
            </p>
          </div>

          {/* Soorten Vloerverwarming Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Soorten Vloerverwarming</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/watervloerverwarming" className="text-sm hover:text-orange-400 transition-colors">
                  Watervloerverwarming
                </Link>
              </li>
              <li>
                <Link href="/elektrische-vloerverwarming" className="text-sm hover:text-orange-400 transition-colors">
                  Elektrische Vloerverwarming
                </Link>
              </li>
              <li>
                <Link href="/infrarood-vloerverwarming" className="text-sm hover:text-orange-400 transition-colors">
                  Infrarood Vloerverwarming
                </Link>
              </li>
              <li>
                <Link href="/droog-systeem" className="text-sm hover:text-orange-400 transition-colors">
                  Droog Systeem
                </Link>
              </li>
              <li>
                <Link href="/soorten" className="text-sm hover:text-orange-400 transition-colors font-semibold">
                  Alle soorten
                </Link>
              </li>
            </ul>
          </div>

          {/* Per Ruimte Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Per Ruimte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vloerverwarming-woonkamer" className="text-sm hover:text-orange-400 transition-colors">
                  Woonkamer
                </Link>
              </li>
              <li>
                <Link href="/vloerverwarming-badkamer" className="text-sm hover:text-orange-400 transition-colors">
                  Badkamer
                </Link>
              </li>
              <li>
                <Link href="/vloerverwarming-keuken" className="text-sm hover:text-orange-400 transition-colors">
                  Keuken
                </Link>
              </li>
              <li>
                <Link href="/vloerverwarming-slaapkamer" className="text-sm hover:text-orange-400 transition-colors">
                  Slaapkamer
                </Link>
              </li>
              <li>
                <Link href="/per-ruimte" className="text-sm hover:text-orange-400 transition-colors font-semibold">
                  Alle ruimtes
                </Link>
              </li>
            </ul>
          </div>

          {/* Handige Tools Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Handige Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kosten" className="text-sm hover:text-orange-400 transition-colors">
                  Kosten berekenen
                </Link>
              </li>
              <li>
                <Link href="/zelf-doen" className="text-sm hover:text-orange-400 transition-colors">
                  Zelf doen gids
                </Link>
              </li>
              <li>
                <Link href="/subsidie" className="text-sm hover:text-orange-400 transition-colors">
                  Subsidie info
                </Link>
              </li>
              <li>
                <Link href="/subsidie-check" className="text-sm hover:text-orange-400 transition-colors">
                  Subsidie Check
                </Link>
              </li>
              <li>
                <Link href="/voordelen-nadelen" className="text-sm hover:text-orange-400 transition-colors">
                  Voordelen & Nadelen
                </Link>
              </li>
            </ul>
          </div>

          {/* Over Ons Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Over Ons</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/over" className="text-sm hover:text-orange-400 transition-colors">
                  Over vloerverwarmingkenner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-orange-400 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm hover:text-orange-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-stone-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-stone-900/50">
              <Lock className="w-5 h-5 text-blue-400" />
              <div className="text-sm">
                <div className="font-semibold text-white">SSL Beveiligd</div>
                <div className="text-stone-400">Veilige verbinding</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-stone-900/50">
              <Shield className="w-5 h-5 text-purple-400" />
              <div className="text-sm">
                <div className="font-semibold text-white">AVG/GDPR Compliant</div>
                <div className="text-stone-400">Privacy protected</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-stone-900/50">
              <RotateCcw className="w-5 h-5 text-green-400" />
              <div className="text-sm">
                <div className="font-semibold text-white">Dagelijks Bijgewerkt</div>
                <div className="text-stone-400">Altijd actueel</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-400">
          <p>&copy; {currentYear} Vloerverwarmingkenner. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
