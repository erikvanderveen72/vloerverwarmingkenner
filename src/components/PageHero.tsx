import { LucideIcon } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlightedSubtitle?: string;
  badge?: string;
  icon?: LucideIcon;
  showBreadcrumbs?: boolean;
  breadcrumbs?: Array<{ label: string; href: string }>;
}

export default function PageHero({
  title,
  subtitle,
  highlightedSubtitle,
  badge,
  icon: Icon,
  showBreadcrumbs = false,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative bg-stone-900 overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-48 md:pb-32">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange Blob */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

        {/* Red Blob */}
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500 to-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        {/* Amber Blob */}
        <div className="absolute -bottom-40 right-40 w-80 h-80 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Plus Pattern Overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {showBreadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-sm font-medium text-emerald-300">{badge}</span>
            </div>
          </div>
        )}

        {/* Icon + Title Section */}
        <div className="text-center">
          {Icon && (
            <div className="flex justify-center mb-6">
              <Icon className="w-16 h-16 text-orange-400" />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Highlighted Subtitle */}
          {highlightedSubtitle && (
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              {highlightedSubtitle}
            </p>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
