import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Info,
  Rocket,
  X
} from 'lucide-react';
import { CandidateMatchResult } from '../../types/recommendation';
import {
  getPathCategoryLabel,
  getProportionalMatchLabel,
  inferDomainVisual
} from '../../services/resultNarrativeBuilder';
import { CareerInsightPanel } from './CareerInsightPanel';
import { DOMAIN_THEME_CONFIG, DomainIconBadge } from './DomainIllustration';
import { getVerificationBadgeMeta } from './ResultStatusHelpers';

interface CandidateDetailModalProps {
  result: CandidateMatchResult | null;
  isTopFiveRecommendation: boolean;
  onClose: () => void;
}

function getPathIcon(path: 'bekerja' | 'kuliah' | 'wirausaha') {
  if (path === 'bekerja') return <Briefcase className="w-3.5 h-3.5" />;
  if (path === 'kuliah') return <GraduationCap className="w-3.5 h-3.5" />;
  return <Rocket className="w-3.5 h-3.5" />;
}

export const CandidateDetailModal: React.FC<CandidateDetailModalProps> = ({
  result,
  isTopFiveRecommendation,
  onClose
}) => {
  useEffect(() => {
    if (!result) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [result, onClose]);

  if (!result) return null;

  const { candidate, matchScore, matchSufficiency } = result;
  const domainVisual = inferDomainVisual(candidate);
  const theme = DOMAIN_THEME_CONFIG[domainVisual];
  const prodMeta = candidate.productionMetadata;
  const verification = getVerificationBadgeMeta(
    candidate.isSimulationFixture ? 'SIMULATION' : prodMeta?.verificationStatus ?? 'UNVERIFIED'
  );
  const proportional = getProportionalMatchLabel(matchScore, matchSufficiency);

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="candidate-detail-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-[2px] animate-fade-in print:hidden"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Modal Header */}
        <div className={`px-5 py-4 sm:px-7 sm:py-5 ${theme.softBg} border-b ${theme.softBorder} flex items-start justify-between gap-4 shrink-0`}>
          <div className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-slate-600">
              <span className={`inline-flex items-center gap-1 font-bold ${theme.accentText}`}>
                {getPathIcon(candidate.pathCategory)}
                <span>{getPathCategoryLabel(candidate.pathCategory)}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-slate-800 font-semibold">
                <DomainIconBadge kind={domainVisual} className="w-3.5 h-3.5" />
                <span>{theme.label}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className={`inline-flex items-center gap-1 ${verification.textColor}`}>
                {verification.icon}
                <span>{verification.label}</span>
              </span>
            </div>

            <h2
              id="candidate-detail-modal-title"
              className="text-lg sm:text-2xl font-black text-slate-900 font-display tracking-tight leading-snug"
            >
              {candidate.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail bidang"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-100 flex items-center justify-center shrink-0 cursor-pointer focus-ring transition-interactive"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-5">
          {/* Honest Assessment Context Banner (never mutates scores) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-700">
            <div className="flex items-start gap-2 leading-relaxed">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                {isTopFiveRecommendation
                  ? 'Termasuk dalam Top 5 rekomendasi teratas berdasarkan jawabanmu saat ini.'
                  : 'Mode eksplorasi wawasan: membuka bidang ini tidak mengubah skor maupun rekomendasi utama hasil asesmenmu.'}
              </span>
            </div>
            {matchScore !== null && matchSufficiency !== 'belum_cukup' && (
              <div className="shrink-0 font-mono font-bold text-slate-900 tabular-nums sm:text-right">
                {matchScore}/100 · {proportional.label}
              </div>
            )}
          </div>

          {/* Primary 8-Aspect Career Insight Panel */}
          <CareerInsightPanel candidate={candidate} defaultTab="all" showHeader={false} />
        </div>

        {/* Sticky Footer Return Control */}
        <div className="px-5 py-3.5 sm:px-7 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500">
            Filter, kata kunci pencarian, dan posisi eksplorasimu tetap tersimpan.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 cursor-pointer focus-ring transition-interactive"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar</span>
          </button>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : modalContent;
};
