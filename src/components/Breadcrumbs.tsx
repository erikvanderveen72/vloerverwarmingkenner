import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = 'https://vloerverwarmingkenner.nl';

  // Generate BreadcrumbList JSON-LD
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1 text-sm" aria-label="Breadcrumb">
        <Link
          href="/"
          className="flex items-center gap-1 text-stone-300 hover:text-orange-400 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={item.href} className="flex items-center gap-1">
              <ChevronRight className="w-4 h-4 text-stone-500" />
              {isLast ? (
                <span className="text-stone-200 font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-stone-300 hover:text-orange-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
