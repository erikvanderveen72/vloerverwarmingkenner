'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Flame, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Soorten', href: '#soorten' },
    { label: 'Kosten', href: '#kosten' },
    { label: 'Zelf Doen', href: '#zelf-doen' },
    { label: 'Subsidie', href: '#subsidie' },
    { label: 'Voordelen & Nadelen', href: '#voordelen-nadelen' },
    { label: 'Per Ruimte', href: '#per-ruimte' },
  ];

  const bgColor = scrollY > 20 ? 'bg-white shadow-md' : 'bg-gradient-to-b from-stone-950 to-stone-900';
  const textColor = scrollY > 20 ? 'text-stone-900' : 'text-white';
  const logoColor = scrollY > 20 ? 'text-stone-900' : 'text-white';

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg ${scrollY > 20 ? 'bg-orange-50 group-hover:bg-orange-100' : 'bg-orange-900/30 group-hover:bg-orange-900/50'} transition-colors`}>
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <div className={`font-bold text-lg ${logoColor} transition-colors`}>
              vloerverwarmingkenner
              <span className="text-orange-400">.nl</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${textColor}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Trust Badge */}
          <div className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-full ${scrollY > 20 ? 'bg-emerald-50' : 'bg-emerald-900/30'} transition-colors`}>
            <Shield className={`w-4 h-4 ${scrollY > 20 ? 'text-emerald-600' : 'text-emerald-400'}`} />
            <span className={`text-xs font-semibold ${scrollY > 20 ? 'text-emerald-700' : 'text-emerald-300'}`}>
              Onafhankelijk & gratis
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrollY > 20 ? 'hover:bg-stone-100' : 'hover:bg-stone-800'}`}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${textColor}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textColor}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden py-4 border-t ${scrollY > 20 ? 'border-stone-200 bg-white' : 'border-stone-800 bg-stone-900'}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${textColor} hover:text-primary`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className={`mx-4 mt-4 p-3 rounded-lg flex items-center gap-2 ${scrollY > 20 ? 'bg-emerald-50' : 'bg-emerald-900/30'}`}>
              <Shield className={`w-4 h-4 ${scrollY > 20 ? 'text-emerald-600' : 'text-emerald-400'}`} />
              <span className={`text-xs font-semibold ${scrollY > 20 ? 'text-emerald-700' : 'text-emerald-300'}`}>
                Onafhankelijk & gratis
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
