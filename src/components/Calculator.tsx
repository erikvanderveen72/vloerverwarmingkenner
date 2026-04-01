import { ReactNode } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';

interface CalculatorProps {
  title: string;
  description?: string;
  children: ReactNode;
  result?: ReactNode;
}

export default function Calculator({
  title,
  description,
  children,
  result,
}: CalculatorProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg p-6 sm:p-8 flex items-center gap-4">
        <CalculatorIcon className="w-8 h-8 flex-shrink-0" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
          {description && (
            <p className="text-orange-100 mt-1 text-sm sm:text-base">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white border-x border-stone-200 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inputs Section */}
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-6">
              Invoer
            </h3>
            {children}
          </div>

          {/* Results Section */}
          {result && (
            <div className="md:border-l md:border-stone-200 md:pl-8">
              <h3 className="text-lg font-semibold text-stone-900 mb-6">
                Resultaat
              </h3>
              <div className="bg-stone-50 rounded-lg p-6">
                {result}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-stone-50 rounded-b-lg px-6 sm:px-8 py-4 border border-t-0 border-stone-200 text-sm text-stone-600">
        <p>
          Deze calculator geeft een indicatie. Voor nauwkeurige berekeningen,
          raadpleeg een deskundige installateur.
        </p>
      </div>
    </div>
  );
}
