'use client';

import { useState } from 'react';
import {
  Home,
  Building,
  Key,
  Building2,
  Droplet,
  Zap,
  Radio,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  RotateCcw,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

interface StepAnswers {
  woningtype?: string;
  bouwjaar?: string;
  verwarming?: string;
  combinatie?: string;
  vloertype?: string;
  isolatie?: string;
  installatie?: string;
}

interface OptionCardProps {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}

function OptionCard({ icon, label, selected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-lg border-2 transition-all text-left hover:shadow-md ${
        selected
          ? 'border-orange-500 bg-orange-50'
          : 'border-stone-200 bg-white hover:border-stone-300'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-stone-700 flex-shrink-0">{icon}</div>
        {selected && (
          <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
        )}
      </div>
      <p className={`font-medium ${selected ? 'text-orange-700' : 'text-stone-900'}`}>
        {label}
      </p>
    </button>
  );
}

interface ResultCardProps {
  title: string;
  status: 'eligible' | 'check' | 'info';
  amount?: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

function ResultCard({ title, status, amount, description, link }: ResultCardProps) {
  const statusConfig = {
    eligible: {
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-300',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      badgeText: 'GESCHIKT',
      iconColor: 'text-emerald-600',
    },
    check: {
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-300',
      badgeColor: 'bg-amber-100 text-amber-700',
      badgeText: 'CHECK JE GEMEENTE',
      iconColor: 'text-amber-600',
    },
    info: {
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      badgeColor: 'bg-blue-100 text-blue-700',
      badgeText: 'INFO',
      iconColor: 'text-blue-600',
    },
  };

  const config = statusConfig[status];

  return (
    <div className={`rounded-lg border-2 ${config.borderColor} ${config.bgColor} p-6`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-stone-900 flex-1">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${config.badgeColor} flex-shrink-0`}>
          {config.badgeText}
        </span>
      </div>

      {amount && (
        <p className={`text-2xl font-bold ${config.iconColor} mb-2`}>{amount}</p>
      )}

      <p className="text-stone-700 text-sm mb-4 leading-relaxed">{description}</p>

      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          {link.text}
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

export default function SubsidieCheck() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<StepAnswers>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (field: keyof StepAnswers, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine eligibility based on answers
  const isEligibleISDE =
    answers.woningtype === 'bestaande-koopwoning' &&
    (answers.combinatie === 'ja-willen-kopen' || answers.combinatie === 'ja-heb-al') &&
    answers.vloertype === 'watervloerverwarming' &&
    answers.installatie === 'erkend-installateur';

  const isEligibleWarmtefonds =
    answers.woningtype === 'bestaande-koopwoning' ||
    answers.woningtype === 'nieuwbouw-koopwoning';

  // Calculate total potential subsidy
  let totalSubsidy = 0;
  let isdeAmount = 0;
  if (isEligibleISDE) {
    isdeAmount =
      answers.combinatie === 'ja-heb-al'
        ? 1500
        : answers.combinatie === 'ja-willen-kopen'
          ? 2500
          : 0;
    totalSubsidy += isdeAmount;
  }

  if (showResults) {
    return (
      <div className="space-y-8">
        {/* Results Header */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border-2 border-orange-200 p-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">
            Jouw Subsidie Check Resultaten
          </h2>
          <p className="text-stone-600">
            Gebaseerd op je antwoorden hebben we je scenario geanalyseerd
          </p>
        </div>

        {/* Eligibility Cards */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Subsidiemogelijkheden</h3>
            <div className="space-y-4">
              <ResultCard
                title="ISDE - Investeringssubsidie Duurzame Energie"
                status={isEligibleISDE ? 'eligible' : 'info'}
                amount={isEligibleISDE ? `€${isdeAmount.toLocaleString('nl-NL')}` : undefined}
                description={
                  isEligibleISDE
                    ? `Goed nieuws! Je komt in aanmerking voor de ISDE-subsidie. Dit is de meest aantrekkelijke subsidieregeling voor de combinatie van vloerverwarming met een warmtepomp.`
                    : `Je komt momenteel niet in aanmerking voor ISDE. Dit kan zijn omdat: vloerverwarming zonder warmtepomp, nieuwbouw (ISDE is voor bestaande bouw), zelf-installatie (VAR-erkend installateur vereist), of een ander type vloerverwarming.`
                }
                link={isEligibleISDE ? { text: 'ISDE aanvragen op RVO.nl', href: 'https://www.rvo.nl/subsidies-financiering/isde' } : undefined}
              />

              <ResultCard
                title="Nationaal Warmtefonds - Energiebespaarlening"
                status={isEligibleWarmtefonds ? 'eligible' : 'info'}
                amount={isEligibleWarmtefonds ? 'Tot €25.000' : undefined}
                description={
                  isEligibleWarmtefonds
                    ? `Je kunt een energiebespaarlening afsluiten tegen 0% rente. Dit kan de kosten van je investering flink reduceren, zeker in combinatie met de ISDE-subsidie.`
                    : `De energiebespaarlening is vooral bedoeld voor woningeigenaren. Huurders hebben helaas beperkte mogelijkheden. Check met je verhuurder of deze een bijdrage kan doen.`
                }
                link={isEligibleWarmtefonds ? { text: 'Lening aanvragen', href: 'https://www.nationaalwarmtefonds.nl' } : undefined}
              />

              <ResultCard
                title="Gemeentelijke Subsidie"
                status="check"
                description="Veel gemeenten hebben eigen regelingen voor duurzame energievoorzieningen. De bedragen en voorwaarden verschillen per gemeente. Neem contact op met je gemeente voor meer informatie."
                link={{ text: 'Check je gemeente', href: 'https://www.rvo.nl' }}
              />
            </div>
          </div>
        </div>

        {/* Personalized Tips */}
        <div className="bg-blue-50 rounded-lg border-2 border-blue-300 p-6">
          <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            Persoonlijke Tips
          </h3>
          <ul className="space-y-3">
            {answers.woningtype === 'nieuwbouw-koopwoning' && (
              <li className="flex items-start gap-3 text-sm">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-stone-700">
                  <strong>Nieuwbouw:</strong> Vloerverwarming is in nieuwbouw vaak al standaard meegenomen in de bouwkosten. Zorg ervoor dat het van tevoren is inbegrepen in je offerte.
                </span>
              </li>
            )}

            {answers.woningtype === 'huurwoning' && (
              <li className="flex items-start gap-3 text-sm">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-stone-700">
                  <strong>Huurwoning:</strong> Overleg met je verhuurder. Sommige verhuurders willen graag in duurzame energievoorziening investeren en kunnen bijdragen aan de kosten.
                </span>
              </li>
            )}

            {!answers.combinatie?.includes('ja') && (
              <li className="flex items-start gap-3 text-sm">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-stone-700">
                  <strong>Warmtepomp:</strong> Zonder warmtepomp kom je niet in aanmerking voor ISDE-subsidie. Overweeg dit mee te nemen voor maximale besparingen!
                </span>
              </li>
            )}

            {answers.installatie === 'zelf-doen' && (
              <li className="flex items-start gap-3 text-sm">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-stone-700">
                  <strong>Zelf installeren:</strong> Voor ISDE-subsidie moet de installatie door een erkend VAR-installateur gebeuren. Zelf-installatie valt niet in aanmerking.
                </span>
              </li>
            )}

            {answers.isolatie === 'slecht-geisoleerd' && (
              <li className="flex items-start gap-3 text-sm">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-stone-700">
                  <strong>Isolatie:</strong> Isoleer eerst je woning. Dit levert extra subsidies op en vloerverwarming werkt veel efficiënter in goed geïsoleerde woningen!
                </span>
              </li>
            )}

            {isEligibleISDE && (
              <li className="flex items-start gap-3 text-sm">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-stone-700">
                  <strong>Aanvraag timing:</strong> Dien je ISDE-subsidieaanvraag IN VOORDAT je de installatie laat plaatsen. Dit is essentieel!
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-lg border-2 border-emerald-500 p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">Jouw Potentiële Voordelen</h3>

          <div className="mb-8">
            <p className="text-stone-600 text-sm mb-2">Totale mogelijke subsidie / financiering:</p>
            <p className="text-5xl font-bold text-emerald-600">
              {totalSubsidy > 0 || isEligibleWarmtefonds
                ? `${totalSubsidy > 0 ? '€' + totalSubsidy.toLocaleString('nl-NL') : '€0'} + lening`
                : 'Controleer gemeentelijke regelingen'}
            </p>
            {isEligibleWarmtefonds && (
              <p className="text-stone-600 mt-2">Plus: lening tot €25.000 tegen 0% rente</p>
            )}
          </div>

          <div className="border-t-2 border-emerald-300 pt-6 mb-8">
            <h4 className="font-bold text-stone-900 mb-4">Volgende Stappen</h4>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-sm font-bold flex-shrink-0">
                  1
                </span>
                <span className="text-stone-700 text-sm">
                  {isEligibleISDE
                    ? 'Controleer je geschiktheid op rvo.nl'
                    : 'Check mogelijkheden op rvo.nl en bij je gemeente'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-sm font-bold flex-shrink-0">
                  2
                </span>
                <span className="text-stone-700 text-sm">
                  Vraag offertes aan bij erkende installateurs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-sm font-bold flex-shrink-0">
                  3
                </span>
                <span className="text-stone-700 text-sm">
                  {isEligibleISDE
                    ? 'Dien ISDE-aanvraag in vóór installatie'
                    : 'Controleer alle openstaande mogelijkheden'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-sm font-bold flex-shrink-0">
                  4
                </span>
                <span className="text-stone-700 text-sm">
                  Laat installeren en dien alle bewijsstukken in
                </span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/kosten"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Bereken je kosten
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/subsidie"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Bekijk alle subsidies
            </Link>
          </div>
        </div>

        {/* Restart Button */}
        <div className="text-center">
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
          >
            <RotateCcw className="w-5 h-5" />
            Opnieuw starten
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-stone-900">
            Stap {currentStep} van 7
          </h2>
          <span className="text-sm text-stone-600">{Math.round((currentStep / 7) * 100)}%</span>
        </div>
        <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
            style={{ width: `${(currentStep / 7) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Container */}
      <div className="bg-white rounded-lg border-2 border-stone-200 p-8">
        <h3 className="text-2xl font-bold text-stone-900 mb-8">
          {currentStep === 1 && 'Wat voor woning heb je?'}
          {currentStep === 2 && 'Wanneer is je woning gebouwd?'}
          {currentStep === 3 && 'Hoe verwarm je nu je woning?'}
          {currentStep === 4 && 'Ga je de vloerverwarming combineren met een warmtepomp?'}
          {currentStep === 5 && 'Welk type vloerverwarming overweeg je?'}
          {currentStep === 6 && 'Hoe goed is je woning geïsoleerd?'}
          {currentStep === 7 && 'Wie gaat de installatie uitvoeren?'}
        </h3>

        {/* Step 1: Woningtype */}
        {currentStep === 1 && (
          <div className="grid md:grid-cols-2 gap-4">
            <OptionCard
              icon={<Home className="w-8 h-8" />}
              label="Bestaande koopwoning"
              selected={answers.woningtype === 'bestaande-koopwoning'}
              onClick={() => handleAnswer('woningtype', 'bestaande-koopwoning')}
            />
            <OptionCard
              icon={<Building className="w-8 h-8" />}
              label="Nieuwbouw koopwoning"
              selected={answers.woningtype === 'nieuwbouw-koopwoning'}
              onClick={() => handleAnswer('woningtype', 'nieuwbouw-koopwoning')}
            />
            <OptionCard
              icon={<Key className="w-8 h-8" />}
              label="Huurwoning"
              selected={answers.woningtype === 'huurwoning'}
              onClick={() => handleAnswer('woningtype', 'huurwoning')}
            />
            <OptionCard
              icon={<Building2 className="w-8 h-8" />}
              label="Appartement/VvE"
              selected={answers.woningtype === 'appartement-vve'}
              onClick={() => handleAnswer('woningtype', 'appartement-vve')}
            />
          </div>
        )}

        {/* Step 2: Bouwjaar */}
        {currentStep === 2 && (
          <div className="grid md:grid-cols-2 gap-4">
            <OptionCard
              icon={<span className="text-2xl font-bold">1975</span>}
              label="Voor 1975"
              selected={answers.bouwjaar === 'voor-1975'}
              onClick={() => handleAnswer('bouwjaar', 'voor-1975')}
            />
            <OptionCard
              icon={<span className="text-2xl font-bold">1991</span>}
              label="1975 - 1991"
              selected={answers.bouwjaar === '1975-1991'}
              onClick={() => handleAnswer('bouwjaar', '1975-1991')}
            />
            <OptionCard
              icon={<span className="text-2xl font-bold">2005</span>}
              label="1992 - 2005"
              selected={answers.bouwjaar === '1992-2005'}
              onClick={() => handleAnswer('bouwjaar', '1992-2005')}
            />
            <OptionCard
              icon={<span className="text-2xl font-bold">2026</span>}
              label="Na 2005"
              selected={answers.bouwjaar === 'na-2005'}
              onClick={() => handleAnswer('bouwjaar', 'na-2005')}
            />
          </div>
        )}

        {/* Step 3: Huidige verwarming */}
        {currentStep === 3 && (
          <div className="grid md:grid-cols-2 gap-4">
            <OptionCard
              icon={<Zap className="w-8 h-8" />}
              label="CV-ketel (gas)"
              selected={answers.verwarming === 'cv-ketel'}
              onClick={() => handleAnswer('verwarming', 'cv-ketel')}
            />
            <OptionCard
              icon={<Radio className="w-8 h-8" />}
              label="Warmtepomp"
              selected={answers.verwarming === 'warmtepomp'}
              onClick={() => handleAnswer('verwarming', 'warmtepomp')}
            />
            <OptionCard
              icon={<Building className="w-8 h-8" />}
              label="Stadsverwarming"
              selected={answers.verwarming === 'stadsverwarming'}
              onClick={() => handleAnswer('verwarming', 'stadsverwarming')}
            />
            <OptionCard
              icon={<Zap className="w-8 h-8" />}
              label="Elektrische verwarming"
              selected={answers.verwarming === 'elektrisch'}
              onClick={() => handleAnswer('verwarming', 'elektrisch')}
            />
          </div>
        )}

        {/* Step 4: Geplande combinatie */}
        {currentStep === 4 && (
          <div className="grid md:grid-cols-2 gap-4">
            <OptionCard
              icon={<CheckCircle className="w-8 h-8" />}
              label="Ja, ik wil ook een warmtepomp aanschaffen"
              selected={answers.combinatie === 'ja-willen-kopen'}
              onClick={() => handleAnswer('combinatie', 'ja-willen-kopen')}
            />
            <OptionCard
              icon={<CheckCircle className="w-8 h-8" />}
              label="Ja, ik heb al een warmtepomp"
              selected={answers.combinatie === 'ja-heb-al'}
              onClick={() => handleAnswer('combinatie', 'ja-heb-al')}
            />
            <OptionCard
              icon={<Zap className="w-8 h-8" />}
              label="Nee, ik gebruik mijn bestaande CV-ketel"
              selected={answers.combinatie === 'nee-cv-ketel'}
              onClick={() => handleAnswer('combinatie', 'nee-cv-ketel')}
            />
            <OptionCard
              icon={<AlertCircle className="w-8 h-8" />}
              label="Weet ik nog niet"
              selected={answers.combinatie === 'weet-niet'}
              onClick={() => handleAnswer('combinatie', 'weet-niet')}
            />
          </div>
        )}

        {/* Step 5: Type vloerverwarming */}
        {currentStep === 5 && (
          <div className="grid md:grid-cols-2 gap-4">
            <OptionCard
              icon={<Droplet className="w-8 h-8" />}
              label="Watervloerverwarming"
              selected={answers.vloertype === 'watervloerverwarming'}
              onClick={() => handleAnswer('vloertype', 'watervloerverwarming')}
            />
            <OptionCard
              icon={<Zap className="w-8 h-8" />}
              label="Elektrische vloerverwarming"
              selected={answers.vloertype === 'elektrisch'}
              onClick={() => handleAnswer('vloertype', 'elektrisch')}
            />
            <OptionCard
              icon={<Radio className="w-8 h-8" />}
              label="Infrarood vloerverwarming"
              selected={answers.vloertype === 'infrarood'}
              onClick={() => handleAnswer('vloertype', 'infrarood')}
            />
            <OptionCard
              icon={<AlertCircle className="w-8 h-8" />}
              label="Weet ik nog niet"
              selected={answers.vloertype === 'weet-niet'}
              onClick={() => handleAnswer('vloertype', 'weet-niet')}
            />
          </div>
        )}

        {/* Step 6: Isolatie */}
        {currentStep === 6 && (
          <div className="grid md:grid-cols-2 gap-4">
            <OptionCard
              icon={<CheckCircle className="w-8 h-8" />}
              label="Goed geïsoleerd (label A/B/C)"
              selected={answers.isolatie === 'goed-geisoleerd'}
              onClick={() => handleAnswer('isolatie', 'goed-geisoleerd')}
            />
            <OptionCard
              icon={<AlertCircle className="w-8 h-8" />}
              label="Redelijk geïsoleerd (label D/E)"
              selected={answers.isolatie === 'redelijk-geisoleerd'}
              onClick={() => handleAnswer('isolatie', 'redelijk-geisoleerd')}
            />
            <OptionCard
              icon={<AlertCircle className="w-8 h-8" />}
              label="Slecht geïsoleerd (label F/G)"
              selected={answers.isolatie === 'slecht-geisoleerd'}
              onClick={() => handleAnswer('isolatie', 'slecht-geisoleerd')}
            />
            <OptionCard
              icon={<AlertCircle className="w-8 h-8" />}
              label="Weet ik niet"
              selected={answers.isolatie === 'weet-niet'}
              onClick={() => handleAnswer('isolatie', 'weet-niet')}
            />
          </div>
        )}

        {/* Step 7: Installatie */}
        {currentStep === 7 && (
          <div className="grid md:grid-cols-2 gap-4">
            <OptionCard
              icon={<CheckCircle className="w-8 h-8" />}
              label="Erkend installateur"
              selected={answers.installatie === 'erkend-installateur'}
              onClick={() => handleAnswer('installatie', 'erkend-installateur')}
            />
            <OptionCard
              icon={<AlertCircle className="w-8 h-8" />}
              label="Zelf doen (DIY)"
              selected={answers.installatie === 'zelf-doen'}
              onClick={() => handleAnswer('installatie', 'zelf-doen')}
            />
            <OptionCard
              icon={<AlertCircle className="w-8 h-8" />}
              label="Weet ik nog niet"
              selected={answers.installatie === 'weet-niet'}
              onClick={() => handleAnswer('installatie', 'weet-niet')}
            />
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
            currentStep === 1
              ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
              : 'bg-stone-200 text-stone-900 hover:bg-stone-300'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          Terug
        </button>

        <button
          onClick={handleNext}
          disabled={
            (currentStep === 1 && !answers.woningtype) ||
            (currentStep === 2 && !answers.bouwjaar) ||
            (currentStep === 3 && !answers.verwarming) ||
            (currentStep === 4 && !answers.combinatie) ||
            (currentStep === 5 && !answers.vloertype) ||
            (currentStep === 6 && !answers.isolatie) ||
            (currentStep === 7 && !answers.installatie)
          }
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
            (currentStep === 1 && !answers.woningtype) ||
            (currentStep === 2 && !answers.bouwjaar) ||
            (currentStep === 3 && !answers.verwarming) ||
            (currentStep === 4 && !answers.combinatie) ||
            (currentStep === 5 && !answers.vloertype) ||
            (currentStep === 6 && !answers.isolatie) ||
            (currentStep === 7 && !answers.installatie)
              ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          {currentStep === 7 ? 'Bekijk resultaten' : 'Volgende'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
