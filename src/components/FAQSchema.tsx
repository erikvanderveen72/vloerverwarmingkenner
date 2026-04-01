'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Generate FAQPage JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">
          Veelgestelde vragen
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-semibold text-stone-900 text-lg">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-stone-600 transition-transform duration-300 flex-shrink-0 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {expandedIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 bg-stone-50 border-t border-stone-200"
                >
                  <p className="text-stone-700 leading-relaxed whitespace-pre-wrap">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
