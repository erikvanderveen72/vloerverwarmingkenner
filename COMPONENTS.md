# Vloerverwarmingkenner Components Documentation

All components have been created successfully and are ready to use. The build passed with no errors.

## Components Created

### 1. **Navbar.tsx** (`src/components/Navbar.tsx`)
A sticky header component with scroll detection and mobile hamburger menu.

**Features:**
- 'use client' component
- Scroll detection (changes from dark gradient to white at scrollY > 20)
- Inline SVG logo with Flame icon + brand text
- ".nl" domain in orange-400
- 6 navigation items: Soorten, Kosten, Zelf Doen, Subsidie, Voordelen & Nadelen, Per Ruimte
- Trust badge: "Onafhankelijk & gratis" with Shield icon
- Mobile hamburger menu (responsive)
- Smooth transitions and hover states
- Icons: Menu, X, Flame, Shield (from lucide-react)

**Usage:**
```tsx
import Navbar from '@/components/Navbar';

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* Page content */}
    </>
  );
}
```

---

### 2. **Footer.tsx** (`src/components/Footer.tsx`)
A comprehensive dark footer with multiple columns and trust badges.

**Features:**
- Dark background (bg-stone-950)
- Logo section with brand explanation
- 5 column layout:
  - Vloerverwarming (Soorten, Kosten, Voordelen & Nadelen)
  - Handige Tools (Calculator, Zelf Doen, Subsidie)
  - Per Ruimte (Badkamer, Keuken, Woonkamer)
  - Over Ons (Over, Contact, Privacy, Disclaimer)
- Trust badges:
  - SSL Beveiligd (Lock icon)
  - AVG/GDPR Compliant (Shield icon)
  - Dagelijks Bijgewerkt (RotateCcw icon)
- Copyright year auto-generated (2026)
- Hover states on links

**Usage:**
```tsx
import Footer from '@/components/Footer';

export default function Layout() {
  return (
    <>
      {/* Page content */}
      <Footer />
    </>
  );
}
```

---

### 3. **PageHero.tsx** (`src/components/PageHero.tsx`)
A hero section with animated gradient blobs, pattern overlay, and optional breadcrumbs.

**Props:**
- `title: string` - Main heading
- `subtitle?: string` - Regular subtitle text
- `highlightedSubtitle?: string` - Gradient text (orange to yellow)
- `badge?: string` - Status badge with pulsing emerald dot
- `icon?: LucideIcon` - Icon to display above title
- `showBreadcrumbs?: boolean` - Show breadcrumb navigation
- `breadcrumbs?: Array<{label, href}>` - Breadcrumb items

**Features:**
- Dark background (bg-stone-900)
- 3 animated gradient blobs (orange, red, amber) with `animate-blob` classes
- Plus pattern overlay at 40% opacity
- Responsive title (text-3xl to text-6xl)
- Gradient subtitle support
- Optional breadcrumb integration
- Pulsing status badge with emerald color

**Usage:**
```tsx
import PageHero from '@/components/PageHero';
import { Zap } from 'lucide-react';

export default function KostenPage() {
  return (
    <PageHero
      title="Kosten van Vloerverwarming"
      subtitle="Ontdek hoeveel vloerverwarming kost en bespaar geld"
      highlightedSubtitle="Tot 30% energiebesparing"
      badge="Actueel"
      icon={Zap}
      showBreadcrumbs
      breadcrumbs={[
        { label: 'Kosten', href: '/kosten' }
      ]}
    />
  );
}
```

---

### 4. **Breadcrumbs.tsx** (`src/components/Breadcrumbs.tsx`)
Accessible breadcrumb navigation with JSON-LD structured data.

**Props:**
- `items: Array<{label: string, href: string}>` - Breadcrumb items

**Features:**
- Auto-prepends Home link with home icon
- ChevronRight separators
- Last item is non-clickable (current page)
- Generates BreadcrumbList JSON-LD schema
- Base URL: https://vloerverwarmingkenner.nl
- Accessible with proper aria labels
- Hover states on clickable items

**Usage:**
```tsx
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Page() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Soorten', href: '/soorten' },
        { label: 'Elektrische', href: '/soorten/elektrische' }
      ]}
    />
  );
}
```

---

### 5. **FAQSchema.tsx** (`src/components/FAQSchema.tsx`)
Accordion component with FAQ schema markup for SEO.

**Props:**
- `items: Array<{question: string, answer: string}>` - FAQ items

**Features:**
- 'use client' component
- Single-expansion accordion (only one Q&A open at a time)
- ChevronDown icon with rotation animation
- Generates FAQPage JSON-LD structured data
- "Veelgestelde vragen" heading
- max-w-4xl mx-auto layout
- Hover effects and smooth transitions
- Accessibility attributes (aria-expanded, aria-controls)

**Usage:**
```tsx
import FAQSchema from '@/components/FAQSchema';

export default function KostenPage() {
  return (
    <FAQSchema
      items={[
        {
          question: 'Hoeveel kost vloerverwarming?',
          answer: 'De kosten variëren van €50-€150 per vierkante meter...'
        },
        {
          question: 'Wat zijn de voordelen?',
          answer: 'Vloerverwarming biedt comfort, bespaart energie...'
        }
      ]}
    />
  );
}
```

---

### 6. **Calculator.tsx** (`src/components/Calculator.tsx`)
A reusable calculator wrapper with two-column layout.

**Props:**
- `title: string` - Calculator title
- `description?: string` - Optional subtitle
- `children: ReactNode` - Input form/fields
- `result?: ReactNode` - Results display

**Features:**
- Orange gradient header (from-orange-500 to-orange-600)
- Calculator icon in header
- Two-column layout (inputs left, results right; stacks on mobile)
- White card design with borders
- Result section with light bg
- Disclaimer footer
- Responsive design

**Usage:**
```tsx
import Calculator from '@/components/Calculator';

export default function KostCalculator() {
  return (
    <Calculator
      title="Kostenberekening"
      description="Bereken de kosten voor uw situatie"
      result={
        <div>
          <p className="text-2xl font-bold">€5.000 - €10.000</p>
          <p className="text-stone-600 mt-2">Totale installatiekosten</p>
        </div>
      }
    >
      {/* Form inputs here */}
    </Calculator>
  );
}
```

---

### 7. **StatsBar.tsx** (`src/components/StatsBar.tsx`)
A stats counter component with animated numbers and IntersectionObserver.

**Props:**
- `stats: Array<{label, value, icon: LucideIcon, trend?: 'up'|'down'}>` - Statistics

**Features:**
- 'use client' component
- IntersectionObserver for viewport-triggered animations
- Animated number counters (0 to target value over 1 second)
- 4-column responsive grid (1 col mobile, 2 cols tablet, 4 cols desktop)
- Icons from lucide-react
- Optional trend indicators (TrendingUp/TrendingDown)
- White card with shadow
- Orange icon backgrounds
- Animates only once (uses ref to track state)

**Usage:**
```tsx
import StatsBar from '@/components/StatsBar';
import { Users, Home, Zap, Euro } from 'lucide-react';

export default function HomePage() {
  return (
    <StatsBar
      stats={[
        { label: 'Tevreden Klanten', value: 5000, icon: Users, trend: 'up' },
        { label: 'Geïnstalleerde Systemen', value: 3200, icon: Home },
        { label: 'Energie Bespaard', value: 2500, icon: Zap, trend: 'up' },
        { label: 'Gemiddelde Besparing', value: '€450/jaar', icon: Euro }
      ]}
    />
  );
}
```

---

## Build Status
✅ All components compile successfully with Next.js 16.2.2
✅ TypeScript checked
✅ Ready for production use
✅ All lucide-react icons available

## Design System Integration
All components use Tailwind CSS v4 with color tokens:
- **Primary Orange:** #ea580c (orange-500 to orange-600)
- **Text Colors:** stone-900 (main), stone-600 (muted)
- **Surface Colors:** white, stone-50, stone-900, stone-950
- **Border:** stone-200 (light), stone-800 (dark)
- **Accent:** emerald for trust/success, orange for primary actions

## Next Steps
1. Update your `tsconfig.json` to ensure proper JSX handling
2. Add the components to your layout or pages
3. Customize colors in `tailwind.config.ts` with your @theme tokens
4. Add missing locale/translation strings as needed
