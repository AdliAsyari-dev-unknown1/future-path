import React from 'react';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { PrimaryButton } from '../common/PrimaryButton';
import { SecondaryButton } from '../common/SecondaryButton';

interface NavigationControlsProps {
  onBack: () => void;
  onNext: () => void;
  onReset?: () => void;
  backLabel?: string;
  nextLabel?: string;
  isNextDisabled?: boolean;
  showReset?: boolean;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  onBack,
  onNext,
  onReset,
  backLabel = 'Kembali',
  nextLabel = 'Lanjutkan',
  isNextDisabled = false,
  showReset = true
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left: Back Button */}
      <div className="w-full sm:w-auto">
        <SecondaryButton
          size="md"
          onClick={onBack}
          icon={<ArrowLeft className="w-4 h-4" />}
          className="w-full sm:w-auto text-slate-700"
        >
          {backLabel}
        </SecondaryButton>
      </div>

      {/* Right: Reset Session (for next student) & Next Button */}
      <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3">
        {showReset && onReset && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[44px] text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/90 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-ring"
            title="Bersihkan sesi untuk peserta baru di stan"
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Ganti Peserta Baru</span>
            <span className="sm:hidden">Reset</span>
          </button>
        )}

        <PrimaryButton
          size="md"
          onClick={onNext}
          disabled={isNextDisabled}
          icon={<ArrowRight className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          {nextLabel}
        </PrimaryButton>
      </div>
    </div>
  );
};
