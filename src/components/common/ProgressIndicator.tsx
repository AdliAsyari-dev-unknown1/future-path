import React from 'react';

export interface ProgressStep {
  label: string;
  description?: string;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps?: number;
  steps?: ProgressStep[];
  variant?: 'steps' | 'bar';
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps = 3,
  steps,
  variant = 'steps',
  className = ''
}) => {
  const percentage = Math.min(Math.max((currentStep / totalSteps) * 100, 0), 100);

  if (variant === 'bar') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-2">
          <span>Langkah {currentStep} dari {totalSteps}</span>
          <span className="font-mono">{Math.round(percentage)}%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={currentStep}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {steps ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {steps.map((step, idx) => {
            const stepNumber = idx + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;

            return (
              <div
                key={step.label}
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-blue-50/70 border-blue-200 text-blue-900'
                    : isCompleted
                    ? 'bg-slate-50 border-slate-200 text-slate-700'
                    : 'bg-white/50 border-slate-200/60 text-slate-400'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-xs'
                      : isCompleted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {isCompleted ? '✓' : stepNumber}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate">
                    {step.label}
                  </div>
                  {step.description && (
                    <div className="text-[11px] text-slate-500 truncate mt-0.5">
                      {step.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 flex-1 rounded-full transition-all ${
                idx + 1 <= currentStep ? 'bg-blue-600' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
