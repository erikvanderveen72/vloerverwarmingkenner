'use client';

import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Stat {
  label: string;
  value: number | string;
  icon: LucideIcon;
  trend?: 'up' | 'down';
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  const [counts, setCounts] = useState<(number | string)[]>(
    stats.map(() => 0)
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          stats.forEach((stat, index) => {
            if (typeof stat.value === 'number') {
              let current = 0;
              const target = stat.value;
              const increment = target / 50;
              const duration = 1000;
              const stepDuration = duration / 50;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = target;
                    return newCounts;
                  });
                  clearInterval(timer);
                } else {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(current);
                    return newCounts;
                  });
                }
              }, stepDuration);
            } else {
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = stat.value;
                return newCounts;
              });
            }
          });

          observer.unobserve(containerRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [stats]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon =
            stat.trend === 'up'
              ? TrendingUp
              : stat.trend === 'down'
                ? TrendingDown
                : null;

          return (
            <div key={index} className="p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-lg bg-orange-50">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
              </div>

              <div className="mb-2">
                <p className="text-3xl md:text-4xl font-bold text-stone-900">
                  {counts[index]}
                </p>
              </div>

              <p className="text-stone-600 text-sm font-medium mb-2">
                {stat.label}
              </p>

              {TrendIcon && (
                <div
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${
                    stat.trend === 'up'
                      ? 'text-emerald-600'
                      : 'text-red-600'
                  }`}
                >
                  <TrendIcon className="w-4 h-4" />
                  {stat.trend === 'up' ? '+' : '-'}
                  {Math.floor(Math.random() * 20) + 5}%
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
