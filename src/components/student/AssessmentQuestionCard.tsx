import React, { useEffect, useCallback, useRef } from 'react';
import { useStudentSession } from '../../context/StudentSessionContext';
import { QUESTION_CATEGORIES } from '../../types/assessment';
import { PrimaryButton } from '../common/PrimaryButton';
import { SecondaryButton } from '../common/SecondaryButton';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Check,
  SkipForward,
  HelpCircle,
  Edit3
} from 'lucide-react';

export const AssessmentQuestionCard: React.FC = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    quizSequence,
    currentAnswer,
    stoppingEvaluation,
    quizProgress,
    selectQuizOption,
    updateCustomAnswerText,
    skipCurrentQuestion,
    confirmAndNextQuestion,
    goToPrevQuestion,
    validationErrors
  } = useStudentSession();

  const customInputRef = useRef<HTMLInputElement | null>(null);
  const customBoxRef = useRef<HTMLDivElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  // Reset question content internal scroll cleanly when changing question
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = 0;
    }
  }, [currentQuestion?.id]);

  // Keep custom "Lainnya" input comfortably visible above mobile virtual keyboard
  const focusCustomInputSafely = useCallback(() => {
    setTimeout(() => {
      customInputRef.current?.focus();
      customBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 60);
  }, []);

  // Keyboard shortcut listener (1-7, a-g, Enter)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;

      if (!currentQuestion) return;

      const key = e.key.toLowerCase();
      const numKeys = ['1', '2', '3', '4', '5', '6', '7'];
      const letterKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      const optionIndex =
        numKeys.indexOf(key) !== -1 ? numKeys.indexOf(key) : letterKeys.indexOf(key);

      if (optionIndex >= 0 && optionIndex < currentQuestion.options.length) {
        e.preventDefault();
        const chosen = currentQuestion.options[optionIndex];
        selectQuizOption(chosen.id);
        if (chosen.allowCustomInput) {
          focusCustomInputSafely();
        }
      } else if (e.key === 'Enter') {
        if (activeTag === 'button' || activeTag === 'a') return;
        e.preventDefault();
        confirmAndNextQuestion();
      }
    },
    [currentQuestion, selectQuizOption, confirmAndNextQuestion, focusCustomInputSafely]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-center">
        <div className="space-y-3">
          <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
          <p className="text-slate-600 font-medium">Menyiapkan pertanyaan berikutnya...</p>
        </div>
      </div>
    );
  }

  const category = QUESTION_CATEGORIES[currentQuestion.category];
  const isAtFrontier = currentQuestionIndex === quizSequence.length - 1;
  const isSkippedNow = Boolean(currentAnswer?.skipped);
  const isSelected = Boolean(currentAnswer?.selectedOptionId) && !isSkippedNow;
  const willFinishAfterThis =
    isAtFrontier && (isSelected || isSkippedNow) && Boolean(stoppingEvaluation?.shouldStop);
  const maxKeyCount = Math.min(7, currentQuestion.options.length);

  const indexedOptions = currentQuestion.options.map((opt, originalIdx) => ({
    opt,
    originalIdx
  }));
  const standardOptions = indexedOptions.filter(
    ({ opt }) => !opt.optionKind || opt.optionKind === 'standard'
  );
  const flexibleOptions = indexedOptions.filter(
    ({ opt }) => Boolean(opt.optionKind && opt.optionKind !== 'standard')
  );
  const chosenCustomOption = flexibleOptions.find(
    ({ opt }) => opt.allowCustomInput && !isSkippedNow && currentAnswer?.selectedOptionId === opt.id
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col relative">
      {/* Zone 2: Scrollable Question Content Area ONLY */}
      <div
        ref={scrollAreaRef}
        className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-7 py-3.5 sm:py-5 relative"
      >
        <div
          className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100/35 via-indigo-50/15 to-transparent pointer-events-none rounded-bl-full"
          aria-hidden="true"
        />

        <div
          key={currentQuestion.id}
          className="animate-question-enter relative z-10 space-y-3.5 sm:space-y-4 text-left"
        >
          {/* Question Eyebrow & Prompt */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-600">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="font-mono font-bold text-blue-700 tabular-nums">
                  #{currentQuestionIndex + 1}
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span>{category.shortLabel}</span>
                {isSkippedNow && (
                  <>
                    <span className="text-slate-300" aria-hidden="true">·</span>
                    <span className="text-amber-700 font-semibold">Dilewati sebelumnya</span>
                  </>
                )}
              </div>

              {quizProgress.nearCompletion && (
                <span className="text-xs font-bold text-emerald-700">
                  {willFinishAfterThis ? 'Pertanyaan terakhir sesi ini' : 'Kita sudah hampir selesai'}
                </span>
              )}
            </div>

            <h2
              className="text-lg sm:text-xl md:text-[22px] font-black text-slate-900 font-display leading-snug tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              {currentQuestion.question}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentQuestion.description ||
                'Pilih jawaban yang paling menggambarkan dirimu — kalau belum cocok atau belum yakin, gunakan opsi netral atau lewati.'}
            </p>
          </div>

          {/* Validation Error */}
          {validationErrors.quizOption && (
            <div
              role="alert"
              className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{validationErrors.quizOption}</span>
            </div>
          )}

          {/* Primary Standard Options (2-col on md+ so 4 options fit comfortably without scrolling) */}
          <div
            className={`grid grid-cols-1 ${
              standardOptions.length >= 2 ? 'md:grid-cols-2' : ''
            } gap-2.5 sm:gap-3`}
          >
            {standardOptions.map(({ opt, originalIdx }) => {
              const isOptionChosen = !isSkippedNow && currentAnswer?.selectedOptionId === opt.id;
              const letter = String.fromCharCode(65 + originalIdx);
              const numberKey = originalIdx + 1;

              return (
                <button
                  key={opt.id}
                  type="button"
                  aria-pressed={isOptionChosen}
                  onClick={() => selectQuizOption(opt.id)}
                  className={`w-full relative flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl border text-left transition-interactive cursor-pointer select-none group min-h-[54px] focus-ring active:scale-[0.992] ${
                    isOptionChosen
                      ? 'animate-option-pop bg-gradient-to-br from-blue-50 to-indigo-50/70 border-blue-600 ring-2 ring-blue-500/20 shadow-sm'
                      : 'bg-white hover:bg-slate-50/90 border-slate-200/90 hover:border-blue-300 shadow-xs'
                  }`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-bold font-display text-xs flex items-center justify-center shrink-0 transition-interactive ${
                      isOptionChosen
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-700'
                    }`}
                  >
                    {letter}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-sm font-bold font-display leading-snug ${
                        isOptionChosen ? 'text-blue-950' : 'text-slate-900'
                      }`}
                    >
                      {opt.label}
                    </div>
                    {opt.description && (
                      <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                        {opt.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-1 shrink-0 pt-0.5">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-interactive ${
                        isOptionChosen
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-slate-400 bg-white group-hover:border-blue-500'
                      }`}
                    >
                      {isOptionChosen && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    {numberKey <= 7 && (
                      <span className="hidden lg:inline-block text-[10px] text-slate-500 font-mono">
                        [{numberKey}]
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contextual Flexible Options ("Lainnya", "Tidak ada yang sesuai", "Belum tahu") */}
          {flexibleOptions.length > 0 && (
            <div className="space-y-2.5 pt-0.5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {flexibleOptions.map(({ opt, originalIdx }) => {
                  const isOptionChosen =
                    !isSkippedNow && currentAnswer?.selectedOptionId === opt.id;
                  const letter = String.fromCharCode(65 + originalIdx);
                  const numberKey = originalIdx + 1;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={isOptionChosen}
                      onClick={() => {
                        selectQuizOption(opt.id);
                        if (opt.allowCustomInput) {
                          focusCustomInputSafely();
                        }
                      }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-left transition-interactive cursor-pointer select-none group min-h-[44px] focus-ring active:scale-[0.992] ${
                        isOptionChosen
                          ? 'animate-option-pop bg-indigo-50/90 border-indigo-600 ring-2 ring-indigo-500/20 shadow-xs'
                          : 'bg-slate-50/85 hover:bg-slate-100 border-slate-200 border-dashed hover:border-slate-300'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                          isOptionChosen
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-slate-600 border border-slate-200 group-hover:text-indigo-700'
                        }`}
                      >
                        {opt.optionKind === 'dont_know' ? (
                          <HelpCircle className="w-3.5 h-3.5" />
                        ) : opt.optionKind === 'other' ? (
                          <Edit3 className="w-3.5 h-3.5" />
                        ) : (
                          letter
                        )}
                      </span>
                      <span
                        className={`flex-1 min-w-0 text-xs font-bold leading-snug ${
                          isOptionChosen ? 'text-indigo-950' : 'text-slate-800'
                        }`}
                      >
                        {opt.label}
                      </span>
                      {numberKey <= 7 && (
                        <span className="hidden lg:inline-block text-[10px] text-slate-500 font-mono shrink-0">
                          [{numberKey}]
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Expanded custom text box when "Lainnya" is active */}
              {chosenCustomOption && (
                <div
                  ref={customBoxRef}
                  className="p-3.5 rounded-2xl bg-indigo-50/75 border border-indigo-200 space-y-1.5"
                >
                  <label
                    htmlFor={`custom-input-${currentQuestion.id}`}
                    className="block text-xs font-bold text-indigo-950"
                  >
                    Tuliskan pilihanmu secara singkat:
                  </label>
                  <input
                    ref={customInputRef}
                    id={`custom-input-${currentQuestion.id}`}
                    type="text"
                    maxLength={120}
                    value={currentAnswer?.customText ?? ''}
                    onChange={(e) => updateCustomAnswerText(e.target.value)}
                    onFocus={() => {
                      setTimeout(() => {
                        customBoxRef.current?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }, 120);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        confirmAndNextQuestion();
                      }
                    }}
                    placeholder={
                      chosenCustomOption.opt.customInputPlaceholder ||
                      'Ketik jawaban singkatmu di sini...'
                    }
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white border border-indigo-300 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600"
                  />
                  <p className="text-xs text-slate-600 leading-snug">
                    Catatan ini disimpan apa adanya di ringkasan profilmu tanpa memaksakan kecocokan bidang yang keliru.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Discrete keyboard & flexible hint */}
          <div className="hidden sm:flex items-center justify-between gap-2 pt-0.5 text-[11px] text-slate-500">
            <span>
              Pintasan: tekan <kbd className="px-1 py-0.5 bg-slate-100 rounded border border-slate-300 text-slate-700 font-mono">1</kbd>–<kbd className="px-1 py-0.5 bg-slate-100 rounded border border-slate-300 text-slate-700 font-mono">{maxKeyCount}</kbd> lalu <kbd className="px-1 py-0.5 bg-slate-100 rounded border border-slate-300 text-slate-700 font-mono">Enter</kbd>
            </span>
            <span>Boleh ubah jawaban atau lewati kapan saja</span>
          </div>
        </div>
      </div>

      {/* Zone 3: Sticky Bottom Navigation Footer (always visible, safe-area padded) */}
      <footer className="shrink-0 border-t border-slate-200/90 bg-slate-50/95 backdrop-blur-sm px-4 sm:px-7 py-2.5 sm:py-3.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        {/* Mobile (< sm): Primary CTA top, Back + Skip 2-col row bottom; Desktop (sm+): single clean row */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:justify-between sm:gap-3">
          <SecondaryButton
            size="md"
            onClick={goToPrevQuestion}
            icon={<ArrowLeft className="w-4 h-4" />}
            className="order-2 sm:order-1 w-full sm:w-auto px-3 sm:px-5 text-xs sm:text-sm"
          >
            <span className="sm:hidden">
              {currentQuestionIndex === 0 ? 'Pilihan Arah' : 'Sebelumnya'}
            </span>
            <span className="hidden sm:inline">
              {currentQuestionIndex === 0 ? 'Kembali ke Pilihan Arah' : 'Sebelumnya'}
            </span>
          </SecondaryButton>

          <button
            type="button"
            onClick={skipCurrentQuestion}
            className="order-3 sm:order-2 sm:ml-auto inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-interactive cursor-pointer whitespace-nowrap shrink-0 focus-ring"
          >
            <SkipForward className="w-4 h-4 shrink-0" />
            <span className="sm:hidden">Lewati</span>
            <span className="hidden sm:inline">Lewati pertanyaan ini</span>
          </button>

          <PrimaryButton
            size="md"
            onClick={confirmAndNextQuestion}
            icon={
              willFinishAfterThis ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )
            }
            className={`order-1 sm:order-3 col-span-2 sm:col-span-1 w-full sm:w-auto ${
              willFinishAfterThis
                ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20'
                : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'
            }`}
          >
            {willFinishAfterThis ? 'Lihat Hasilku' : 'Lanjut'}
          </PrimaryButton>
        </div>
      </footer>
    </div>
  );
};
