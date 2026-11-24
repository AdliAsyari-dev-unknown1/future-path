import React from 'react';
import { StudentFlowStep } from '../../types/student';
import { UserCheck, Compass, FileQuestion, Check } from 'lucide-react';

interface StudentProgressProps {
  currentStep: StudentFlowStep;
  isComplete?: boolean;
}

export const StudentProgress: React.FC<StudentProgressProps> = ({
  currentStep,
  isComplete = false
}) => {
  const steps: {
    id: StudentFlowStep;
    shortLabel: string;
    fullLabel: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'biodata',
      shortLabel: '1. Biodata',
      fullLabel: '1. Biodata Siswa',
      icon: <UserCheck className="w-4 h-4" />
    },
    {
      id: 'direction',
      shortLabel: '2. Arah',
      fullLabel: '2. Pilihan Arah',
      icon: <Compass className="w-4 h-4" />
    },
    {
      id: 'assessment_shell',
      shortLabel: isComplete ? '3. Hasil' : '3. Kuis',
      fullLabel: isComplete ? '3. Hasil Eksplorasi' : '3. Kuis Adaptif',
      icon: <FileQuestion className="w-4 h-4" />
    }
  ];

  const getStepStatus = (stepId: StudentFlowStep) => {
    if (isComplete) return 'completed';
    const order: StudentFlowStep[] = ['welcome', 'biodata', 'direction', 'assessment_shell'];
    const currentIndex = order.indexOf(currentStep);
    const stepIndex = order.indexOf(stepId);

    if (currentIndex > stepIndex) return 'completed';
    if (currentIndex === stepIndex) return 'active';
    return 'pending';
  };

  const getProgressPercentage = () => {
    if (isComplete) return 100;
    switch (currentStep) {
      case 'biodata':
        return 33;
      case 'direction':
        return 66;
      case 'assessment_shell':
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-6 sm:mb-8">
      {/* Step nodes */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3">
        {steps.map((step) => {
          const status = getStepStatus(step.id);
          const isCompleted = status === 'completed';
          const isActive = status === 'active';

          return (
            <div
              key={step.id}
              className={`flex items-center gap-1.5 sm:gap-2 px-2 py-2 sm:p-3 rounded-xl border text-[11px] sm:text-sm font-semibold transition-interactive select-none min-h-[44px] ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                  : isCompleted
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                  : 'bg-white/90 text-slate-600 border-slate-200'
              }`}
            >
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : isCompleted
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {isCompleted ? <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" /> : step.icon}
              </div>
              <span className="sm:hidden truncate">{step.shortLabel}</span>
              <span className="hidden sm:inline truncate">{step.fullLabel}</span>
            </div>
          );
        })}
      </div>

      {/* Progress percentage line */}
      <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ease-out ${
            isComplete
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
              : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600'
          }`}
          style={{ width: `${getProgressPercentage()}%` }}
        />
      </div>
    </div>
  );
};
