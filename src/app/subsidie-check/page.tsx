import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SubsidieCheck from '@/components/SubsidieCheck';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Subsidie Check Vloerverwarming 2026 - Kom Ik in Aanmerking?',
  description: 'Check in 2 minuten of je recht hebt op subsidie voor vloerverwarming. Beantwoord 7 vragen en ontdek welke regelingen voor jou beschikbaar zijn.',
  keywords: [
    'subsidie check vloerverwarming',
    'ISDE subsidie controleren',
    'kom ik in aanmerking',
    'subsidie calculator',
    'warmtepompsubsidie',
    'warmtefonds',
  ],
  openGraph: {
    title: 'Subsidie Check Vloerverwarming 2026 - Kom Ik in Aanmerking?',
    description: 'Check in 2 minuten of je recht hebt op subsidie voor vloerverwarming. Beantwoord 7 vragen en ontdek welke regelingen voor jou beschikbaar zijn.',
    type: 'website',
  },
};

export const revalidate = 3600;

interface FAQItem {
  question: string;
  answer: string;
}

interface TrustIndicatorProps {
  icon: React.ReactNode;
  label: string;
  description: string;
}

function TrustIndicator({ icon, label, description }: TrustIndicatorProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 text-orange-500">{icon}</div>
      <h4 className="font-semibold text-stone-900 mb-1">{label}</h4>
      <p className="text-sm text-stone-600">{description}</p>
    </div>
  );
}

export default function SubsidieCheckPage() {
  const breadcrumbs = [
    { label: 'Subsidie', href: '/subsidie' },
    { label: 'Subsidie Check', href: '/subsidie-check' },
  ];

  const faqItems: FAQItem[] = [
    {
      question: 'Hoe lang duurt deze check?',
      answer: 'De subsidie check duurt ongeveer 2 minuten. Je antwoordt op 7 vragen over je woning en plannen, en je krijgt direct je persoonlijke resultaat te zien.',
    },
    {
      question: 'Zijn mijn antwoorden vertrouwelijk?',
      answer: 'Ja, deze check slaat geen persoonlijke gegevens op. Het is geheel anoniem en je hoeft je niet in te loggen. De check wordt alleen gebruikt om je jouw mogelijkheden te tonen.',
    },
    {
      question: 'Wat is de ISDE-subsidie?',
      answer: 'De ISDE (Investeringssubsidie Duurzame Energie) is de meest aantrekkelijke subsidieregeling in 2026 voor het combineren van vloerverwarming met een warmtepomp. Je kunt tot €3.300 subsidie krijgen, afhankelijk van je situatie.',
    },
    {
      question: 'Kan ik de check later opnieuw doen?',
      answer: 'Ja, je kunt de check zo vaak doen als je wilt. Elke keer krijg je dezelfde berekening op basis van je antwoorden. Als je situatie verandert, kan het resultaat ook anders zijn.',
    },
    {
      question: 'Wat moet ik doen na de check?',
      answer: 'Na de check kun je je resultaten bekijken en concrete stappen ondernemen. Als je in aanmerking komt voor subsidie, kun je offertes aanvragen bij erkende installateurs en je aanvraag indienen bij RVO.nl (voor ISDE) of nationaalwarmtefonds.nl (voor leningen).',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Subsidie Check"
        badge="Gratis Check 2026"
        highlightedSubtitle="Kom ik in aanmerking?"
        subtitle="Ontdek in 2 minuten welke subsidies voor jou beschikbaar zijn"
        showBreadcrumbs={true}
        breadcrumbs={breadcrumbs}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Hoe werkt deze check?</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Beantwoord 7 korte vragen over je woning en je plannen voor vloerverwarming. Op basis van je antwoorden berekenen we automatisch voor welke subsidies en financieringsmogelijkheden je in aanmerking komt.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Dit geeft je een helder beeld van je opties en de volgende stappen. De check is volledig gratis en anoniem - je hoeft geen persoonlijke gegevens in te voeren.
            </p>
          </div>
        </section>

        {/* The Subsidy Check Component */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <SubsidieCheck />
        </section>

        {/* Trust Indicators */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <TrustIndicator
              icon={<CheckCircle className="w-8 h-8" />}
              label="Onafhankelijk"
              description="Geen binding aan specifieke installateurs of financiers"
            />
            <TrustIndicator
              icon={<CheckCircle className="w-8 h-8" />}
              label="Gratis"
              description="Geen kosten, geen verplichtingen, geen account nodig"
            />
            <TrustIndicator
              icon={<CheckCircle className="w-8 h-8" />}
              label="Privé"
              description="Volledig anoniem en geen gegevensopslag"
            />
          </div>
        </section>

        {/* FAQ */}
        <FAQSchema items={faqItems} />

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Meer weten over subsidies?</h2>
            <p className="mb-6 text-lg">
              Bekijk gedetailleerde informatie over alle beschikbare regelingen en financieringsmogelijkheden.
            </p>
            <Link
              href="/subsidie"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-stone-100 transition-colors"
            >
              Alle subsidies bekijken
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
