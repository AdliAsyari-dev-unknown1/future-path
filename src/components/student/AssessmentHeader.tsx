import React from 'react';
import { useStudentSession } from '../../context/StudentSessionContext';
import { QUESTION_CATEGORIES } from '../../types/assessment';
import {
  Briefcase,
  GraduationCap,
  Rocket,
  Compass,
  CheckCircle2
} from 'lucide-react';

export const AssessmentHeader: React.FC = () => {
  const {
    biodata,
    direction,
    currentQuestionIndex,
    currentQuestion,
    quizSequence,
    quizAnswers,
    jumpToQuestion,
    quizProgress,
    isAssessmentComplete
  } = useStudentSession();

  if (isAssessmentComplete) return null;

  const getDirectionBadge = () => {
    switch (direction) {
      case 'bekerja':
        return {
          title: 'Bekerja',
          icon: <Briefcase className="w-3.5 h-3.5 text-blue-700 shrink-0" />,
          bg: 'bg-blue-50 text-blue-900 border-blue-200'
        };
      case 'kuliah':
        return {
          title: 'Kuliah',
          icon: <GraduationCap className="w-3.5 h-3.5 text-indigo-700 shrink-0" />,
          bg: 'bg-indigo-50 text-indigo-900 border-indigo-200'
        };
      case 'wirausaha':
        return {
          title: 'Wirausaha',
          icon: <Rocket className="w-3.5 h-3.5 text-amber-700 shrink-0" />,
          bg: 'bg-amber-50 text-amber-950 border-amber-200'
        };
      case 'bingung':
        return {
          title: 'Masih Bingung',
          icon: <Compass className="w-3.5 h-3.5 text-emerald-700 shrink-0" />,
          bg: 'bg-emerald-50 text-emerald-900 border-emerald-200'
        };
      default:
        return {
          title: 'Eksplorasi',
          icon: <Compass className="w-3.5 h-3.5 text-slate-700 shrink-0" />,
          bg: 'bg-slate-50 text-slate-800 border-slate-200'
        };
    }
  };

  const badge = getDirectionBadge();
  const currentCategory = currentQuestion ? QUESTION_CATEGORIES[currentQuestion.category] : null;

  return (
    <header className="shrink-0 bg-gradient-to-b from-slate-50/90 to-white border-b border-slate-200/80 px-4 sm:px-7 py-2.5 sm:py-3.5 space-y-2.5">
      {/* Row 1: Participant + Question Counter + Direction */}
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-0.5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-600">
            <span className="font-bold text-slate-900 truncate max-w-[160px] sm:max-w-[260px]">
              {biodata.fullName}
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="font-semibold text-slate-700 truncate">{biodata.major}</span>
            {biodata.gradeLevel && (
              <>
                <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
                <span className="hidden sm:inline text-slate-600">{biodata.gradeLevel}</span>
              </>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-semibold">
            <span className="text-blue-700 font-extrabold font-display tabular-nums">
              Pertanyaan {quizProgress.current}
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span
              className={`truncate ${
                quizProgress.nearCompletion ? 'text-emerald-700 font-bold' : 'text-slate-600'
              }`}
            >
              {quizProgress.stageHintText}
            </span>
            {currentCategory && (
              <>
                <span className="hidden md:inline text-slate-300" aria-hidden="true">·</span>
                <span className="hidden md:inline text-slate-500 font-medium">
                  {currentCategory.shortLabel}
                </span>
              </>
            )}
          </div>
        </div>

        <div
          className={`px-2.5 sm:px-3 py-1.5 rounded-xl border inline-flex items-center gap-1.5 shrink-0 ${badge.bg}`}
        >
          {badge.icon}
          <span className="text-xs font-bold font-display whitespace-nowrap">{badge.title}</span>
        </div>
      </div>

      {/* Row 2: Smooth Animated Adaptive Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5 sm:h-2 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ease-out ${
            quizProgress.nearCompletion
              ? 'bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600'
          }`}
          style={{ width: `${quizProgress.percentage}%` }}
        />
      </div>

      {/* Row 3: Compact Horizontal Question Trail */}
      {quizSequence.length > 1 && (
        <div className="flex items-center justify-between gap-2 pt-0.5">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {quizSequence.map((qId, index) => {
              const ans = quizAnswers[qId];
              const isCurrent = index === currentQuestionIndex;
              const isSkipped = Boolean(ans?.skipped);
              const isAnswered = Boolean(ans && !ans.skipped && ans.selectedOptionId);

              return (
                <button
                  key={qId}
                  type="button"
                  onClick={() => jumpToQuestion(index)}
                  aria-label={`Buka pertanyaan ${index + 1}${isSkipped ? ' (dilewati)' : ''}`}
                  title={`Pertanyaan ${index + 1}${isSkipped ? ' (dilewati)' : ''}`}
                  className={`h-9 min-w-9 sm:h-8 sm:min-w-8 rounded-lg text-xs font-bold transition-interactive flex items-center justify-center shrink-0 cursor-pointer focus-ring ${
                    isCurrent
                      ? 'bg-blue-600 text-white ring-2 ring-blue-300 ring-offset-1 shadow-xs'
                      : isSkipped
                      ? 'bg-amber-50 text-amber-800 border border-amber-300 border-dashed hover:bg-amber-100'
                      : isAnswered
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isAnswered && !isCurrent ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  ) : (
                    index + 1
                  )}
                </button>
              );
            })}
          </div>

          <span className="text-[11px] sm:text-xs text-slate-600 font-semibold tabular-nums whitespace-nowrap shrink-0">
            {quizProgress.answeredCount} terjawab
            {quizProgress.skippedCount > 0 ? ` · ${quizProgress.skippedCount} dilewati` : ''}
          </span>
        </div>
      )}
    </header>
  );
};
