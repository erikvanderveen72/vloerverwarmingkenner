import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Pagina niet gevonden - 404 | Vloerverwarmingkenner.nl",
  description: "De pagina die je zoekt bestaat niet. Terug naar de homepage of bekijk populaire pagina's.",
};

const popularPages = [
  {
    title: "Soorten Vloerverwarming",
    description: "Watervloerverwarming vs elektrisch",
    href: "/soorten",
  },
  {
    title: "Kosten Berekenen",
    description: "Wat kost vloerverwarming?",
    href: "/kosten",
  },
  {
    title: "Zelf Installeren",
    description: "Kun je het zelf doen?",
    href: "/zelf-doen",
  },
  {
    title: "Subsidies",
    description: "Financiële steun beschikbaar",
    href: "/subsidie",
  },
  {
    title: "Voor- en Nadelen",
    description: "Voordelen vs nadelen",
    href: "/voordelen-nadelen",
  },
  {
    title: "Per Ruimte",
    description: "Advies per kamertype",
    href: "/per-ruimte",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full blur-2xl opacity-50" />
              <div className="relative bg-red-50 p-6 rounded-full">
                <AlertTriangle className="w-16 h-16 text-red-600" />
              </div>
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-7xl font-bold text-slate-900 mb-4">404</h1>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Oops! Pagina niet gevonden
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-8">
            De pagina die je zoekt bestaat niet of is verplaatst. Maar geen zorgen, we helpen je graag verder!
          </p>

          {/* Search Box */}
          <div className="mb-12">
            <div className="flex items-center gap-3 bg-white rounded-lg shadow-md p-2 max-w-md mx-auto">
              <Search className="w-5 h-5 text-slate-400 ml-2" />
              <input
                type="text"
                placeholder="Zoeken op vloerverwarmingkenner..."
                className="flex-1 px-3 py-2 outline-none text-slate-700 placeholder-slate-400"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition">
                Zoeken
              </button>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mb-12"
          >
            <Home className="w-5 h-5" />
            Terug naar Homepage
          </Link>
        </div>
      </div>

      {/* Popular Pages Grid */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Populaire pagina's
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition mb-2">
                  {page.title}
                </h4>
                <p className="text-slate-600 text-sm mb-4">{page.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center gap-2">
                  Bekijk
                  <span className="group-hover:translate-x-1 transition">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
