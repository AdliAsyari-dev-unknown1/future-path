import React from 'react';

export interface OptionCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  badgeLabel?: string;
  badgeBg?: string;
  badgeText?: string;
  accentColor?: string;
  isSelected?: boolean;
  onClick?: () => void;
  ctaText?: string;
  className?: string;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  title,
  subtitle,
  description,
  icon,
  badgeLabel,
  badgeBg = 'bg-slate-100',
  badgeText = 'text-slate-700',
  isSelected = false,
  onClick,
  ctaText = 'Lihat Detail',
  className = ''
}) => {
  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative flex flex-col justify-between p-6 bg-white rounded-2xl border transition-interactive text-left select-none focus-ring ${
        onClick ? 'cursor-pointer hover:-translate-y-1 hover:shadow-lg' : ''
      } ${
        isSelected
          ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-md'
          : 'border-slate-200/90 shadow-sm hover:border-slate-300'
      } ${className}`}
    >
      <div>
        {/* Header row: Icon & Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          {icon && (
            <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 bg-slate-50 border border-slate-100">
              {icon}
            </div>
          )}

          {badgeLabel && (
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${badgeBg} ${badgeText}`}
            >
              {badgeLabel}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display tracking-tight">
          {title}
        </h3>

        {/* Optional Subtitle / Tagline */}
        {subtitle && (
          <p className="text-xs font-medium text-slate-500 mt-1 mb-2.5">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mt-2">
          {description}
        </p>
      </div>

      {/* Footer / Action row */}
      {onClick && (
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
          <span>{ctaText}</span>
          <span className="transform transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </div>
      )}
    </div>
  );
};
