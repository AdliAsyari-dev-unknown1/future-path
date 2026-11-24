import React from 'react';
import {
  CheckSquare,
  Compass,
  Wrench,
  ClipboardCheck,
  AlertCircle,
  Eye,
  RefreshCw,
  RotateCcw
} from 'lucide-react';
import { FuturePathId } from '../../types/student';
import { StudentProfileAssessment } from '../../types/scoring';
import { RecommendationMatchingOutput } from '../../types/recommendation';
import {
  PersonalNextStepItem,
  buildPersonalNextSteps
} from '../../services/resultNarrativeBuilder';

interface PersonalNextStepsSectionProps {
  profileAssessment: StudentProfileAssessment;
  recommendations: RecommendationMatchingOutput | null;
  direction: FuturePathId | null;
  onReviewAnswers: () => void;
  onRetakeQuiz: () => void;
  onResetSession: () => void;
}

function getStepScopeMeta(scopeType: PersonalNextStepItem['scopeType']) {
  switch (scopeType) {
    case 'penguatan_skill':
      return {
        label: 'Penguatan Keterampilan',
        icon: <Wrench className="w-4 h-4 text-blue-700 shrink-0" />
      };
    case 'persiapan_praktis':
      return {
        label: 'Kesiapan Praktis',
        icon: <ClipboardCheck className="w-4 h-4 text-emerald-700 shrink-0" />
      };
    case 'kelengkapan_data':
      return {
        label: 'Kelengkapan Bukti',
        icon: <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
      };
    default:
      return {
        label: 'Langkah Eksplorasi',
        icon: <Compass className="w-4 h-4 text-indigo-700 shrink-0" />
      };
  }
}

export const PersonalNextStepsSection: React.FC<PersonalNextStepsSectionProps> = ({
  profileAssessment,
  recommendations,
  direction,
  onReviewAnswers,
  onRetakeQuiz,
  onResetSession
}) => {
  const steps = buildPersonalNextSteps(profileAssessment, recommendations, direction);

  return (
    <section
      id="hasil-langkah-berikutnya"
      aria-labelledby="next-steps-heading"
      className="space-y-6 text-left scroll-mt-24"
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
        <div className="space-y-1.5 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <CheckSquare className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Langkah Kecil dari Sekarang</span>
          </div>
          <h2
            id="next-steps-heading"
            className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight"
          >
            Hal Ringan yang Bisa Kamu Coba Selanjutnya
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Saran praktis di bawah disesuaikan dengan hal yang ingin kamu pelajari, latihan yang masih perlu dibiasakan, serta kesiapanmu saat ini.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => {
            const meta = getStepScopeMeta(step.scopeType);
            return (
              <li
                key={step.id}
                className="p-5 rounded-2xl bg-slate-50/85 border border-slate-200/80 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      {meta.icon}
                      <span>{meta.label}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-mono font-bold tabular-nums">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {step.actionDetail}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/70 text-xs text-slate-600 leading-snug">
                  Dasar saran: {step.groundedReason}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Non-Judgmental Reflection Footer + Action Controls */}
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/90 space-y-5">
        <div className="space-y-1.5">
          <div className="text-xs font-bold text-slate-800">
            Catatan Pameran RPL SMKN 1 Katapang
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hasil <strong>FUTURE PATH</strong> adalah cerminan jawabanmu hari ini untuk bahan diskusi dan eksplorasi diri — bukan penilaian mutlak, bukan ramalan pasti masa depan, dan bukan pengganti arahan guru maupun pilihanmu sendiri.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <button
              type="button"
              onClick={onReviewAnswers}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold text-blue-700 bg-white border border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer focus-ring"
            >
              <Eye className="w-4 h-4 shrink-0" />
              <span>Tinjau / Ubah Jawaban</span>
            </button>

            <button
              type="button"
              onClick={onRetakeQuiz}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer focus-ring"
            >
              <RefreshCw className="w-4 h-4 shrink-0" />
              <span>Ulangi Kuis (Peserta Sama)</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onResetSession}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer focus-ring"
          >
            <RotateCcw className="w-4 h-4 shrink-0" />
            <span>Selesai & Ganti Peserta Baru</span>
          </button>
        </div>
      </div>
    </section>
  );
};
