import React from 'react';
import { FuturePathId } from '../../types/student';
import { Briefcase, GraduationCap, Rocket, Compass, Check, ArrowRight } from 'lucide-react';

export interface DirectionCardProps {
  id: FuturePathId;
  title: string;
  tagline: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const DirectionCard: React.FC<DirectionCardProps> = ({
  id,
  title,
  tagline,
  description,
  isSelected,
  onSelect
}) => {
  const getTheme = () => {
    switch (id) {
      case 'bekerja':
        return {
          icon: <Briefcase className="w-6 h-6 text-blue-700" />,
          accentBg: 'bg-blue-50 border-blue-200/70',
          selectedBorder: 'border-blue-600 ring-4 ring-blue-500/15 shadow-lg shadow-blue-500/10',
          selectedBadge: 'bg-blue-600 text-white',
          hoverBorder: 'hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/5',
          activeText: 'text-blue-800'
        };
      case 'kuliah':
        return {
          icon: <GraduationCap className="w-6 h-6 text-indigo-700" />,
          accentBg: 'bg-indigo-50 border-indigo-200/70',
          selectedBorder: 'border-indigo-600 ring-4 ring-indigo-500/15 shadow-lg shadow-indigo-500/10',
          selectedBadge: 'bg-indigo-600 text-white',
          hoverBorder: 'hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/5',
          activeText: 'text-indigo-800'
        };
      case 'wirausaha':
        return {
          icon: <Rocket className="w-6 h-6 text-amber-700" />,
          accentBg: 'bg-amber-50 border-amber-200/70',
          selectedBorder: 'border-amber-600 ring-4 ring-amber-500/15 shadow-lg shadow-amber-500/10',
          selectedBadge: 'bg-amber-600 text-white',
          hoverBorder: 'hover:border-amber-400 hover:shadow-md hover:shadow-amber-500/5',
          activeText: 'text-amber-900'
        };
      case 'bingung':
        return {
          icon: <Compass className="w-6 h-6 text-emerald-700" />,
          accentBg: 'bg-emerald-50 border-emerald-200/70',
          selectedBorder: 'border-emerald-600 ring-4 ring-emerald-500/15 shadow-lg shadow-emerald-500/10',
          selectedBadge: 'bg-emerald-600 text-white',
          hoverBorder: 'hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-500/5',
          activeText: 'text-emerald-800'
        };
    }
  };

  const theme = getTheme();

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onSelect}
      className={`group relative overflow-hidden flex flex-col justify-between p-5 sm:p-7 rounded-3xl border text-left transition-interactive cursor-pointer select-none bg-white focus-ring active:scale-[0.992] ${
        isSelected
          ? `animate-option-pop ${theme.selectedBorder} -translate-y-0.5`
          : `border-slate-200/90 shadow-sm ${theme.hoverBorder} hover:-translate-y-0.5`
      }`}
    >
      <div
        className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none transition-opacity duration-200 ${
          isSelected ? 'bg-gradient-to-bl from-blue-100/60 to-transparent opacity-100' : 'bg-gradient-to-bl from-slate-100/60 to-transparent opacity-60 group-hover:opacity-100'
        }`}
        aria-hidden="true"
      />
      {/* Top row: Icon + Radio status */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 duration-200 ${theme.accentBg}`}
          >
            {theme.icon}
          </div>

          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-interactive ${
              isSelected
                ? `${theme.selectedBadge} border-transparent scale-105 shadow-xs`
                : 'border-slate-300 group-hover:border-slate-400 bg-white'
            }`}
          >
            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">
          {title}
        </h3>

        {/* Short Tagline */}
        <p className="text-xs font-semibold text-slate-600 mt-1 mb-2">
          {tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
          {description}
        </p>
      </div>

      {/* Selected Indicator Footnote */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
        <span className={isSelected ? theme.activeText : 'text-slate-600'}>
          {isSelected ? 'Terpilih untuk Eksplorasi' : 'Klik untuk memilih'}
        </span>
        <span
          className={`inline-flex items-center gap-1 transition-transform ${
            isSelected ? `${theme.activeText} font-bold` : 'group-hover:translate-x-0.5 text-slate-600'
          }`}
        >
          {isSelected ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Aktif</span>
            </>
          ) : (
            <ArrowRight className="w-3.5 h-3.5" />
          )}
        </span>
      </div>
    </button>
  );
};
