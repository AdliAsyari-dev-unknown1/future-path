import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  BookOpenCheck,
  ChevronDown,
  ChevronUp,
  Eye,
  RefreshCw
} from 'lucide-react';
import { useStudentSession } from '../../context/StudentSessionContext';
import { downloadStudentResultPdf } from '../../services/resultPdfExporter';
import { inferDomainVisual } from '../../services/resultNarrativeBuilder';
import { CandidateMatchResult } from '../../types/recommendation';
import {
  CandidateDetailModal,
  CareerInsightPanel,
  CrossPathExplorationSection,
  MainAndAlternativeRecommendationsSection,
  OneMinuteResultCard,
  PersonalNextStepsSection,
  PersonalProfileOverviewSection,
  PrintableResultReport,
  SixDimensionProfileSection,
  SkillDevelopmentSection
} from '../results';
import { DOMAIN_THEME_CONFIG, DomainIconBadge } from '../results/DomainIllustration';

export const AssessmentCompletionView: React.FC = () => {
  const [showInsightDrawer, setShowInsightDrawer] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [exploreAllNonce, setExploreAllNonce] = useState(0);
  const [inspectedCandidate, setInspectedCandidate] = useState<CandidateMatchResult | null>(null);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [exportFeedback, setExportFeedback] = useState<string | null>(null);

  const {
    biodata,
    direction,
    profileAssessment,
    recommendations,
    canRequestMoreQuestions,
    requestMoreQuestions,
    jumpToQuestion,
    resetAssessmentQuiz,
    resetSession,
    recalculateRecommendations
  } = useStudentSession();

  useEffect(() => {
    if (profileAssessment && !recommendations) {
      recalculateRecommendations();
    }
  }, [profileAssessment, recommendations, recalculateRecommendations]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  }, []);

  const handleReviewAnswers = () => {
    jumpToQuestion(0);
  };

  const handleOpenCatalogExplorer = () => {
    setShowFullDetails(true);
    setExploreAllNonce((prev) => prev + 1);
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.setTimeout(() => {
        const target = document.getElementById('hasil-rekomendasi');
        target?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      }, 90);
    }
  };

  const handleBackToSummary = () => {
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const target = document.getElementById('ringkasan-1-menit');
      target?.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    }
  };

  const handleInspectCandidateById = (candidateId: string) => {
    if (!recommendations) return;
    const allPools = [
      ...recommendations.activePathRecommendations,
      ...(recommendations.crossPathExplorations.bekerja ?? []),
      ...(recommendations.crossPathExplorations.kuliah ?? []),
      ...(recommendations.crossPathExplorations.wirausaha ?? [])
    ];
    const found = allPools.find((item) => item.candidate.id === candidateId) ?? null;
    if (found) {
      setInspectedCandidate(found);
    }
  };

  const handleDownloadPdf = () => {
    if (!profileAssessment || isExportingPdf) return;
    setIsExportingPdf(true);
    setExportFeedback(null);
    try {
      const fileName = downloadStudentResultPdf({
        biodata,
        direction,
        profileAssessment,
        recommendations,
        assessmentDate: new Date()
      });
      setExportFeedback(`File PDF berhasil disiapkan dan diunduh: ${fileName}`);
    } catch {
      setExportFeedback(
        'Gagal membuat PDF otomatis. Kamu tetap dapat memakai tombol Cetak Hasil lalu pilih Simpan sebagai PDF.'
      );
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handlePrintResult = () => {
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
      window.print();
    }
  };

  if (!profileAssessment) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4 text-left">
        <div className="flex items-start gap-3 text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h1 className="text-lg sm:text-xl font-black text-slate-900 font-display">
              Hasil Belum Tersedia
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Belum ada data jawaban yang lengkap pada sesi ini. Silakan kembali ke pertanyaan atau ulangi sesi dari awal.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleReviewAnswers}
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-interactive cursor-pointer focus-ring"
          >
            <Eye className="w-4 h-4" />
            <span>Kembali ke Pertanyaan</span>
          </button>
          <button
            type="button"
            onClick={resetAssessmentQuiz}
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-interactive cursor-pointer focus-ring"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Ulangi Kuis</span>
          </button>
        </div>
      </div>
    );
  }

  const primaryCandidate =
    recommendations &&
    profileAssessment.overallSufficiency !== 'belum_cukup' &&
    recommendations.overallMatchingSufficiency !== 'belum_cukup'
      ? recommendations.activePathRecommendations[0] ?? null
      : null;

  const primaryDomain = primaryCandidate ? inferDomainVisual(primaryCandidate.candidate) : null;
  const primaryTheme = primaryDomain ? DOMAIN_THEME_CONFIG[primaryDomain] : null;

  const topFiveIds = new Set(
    (recommendations && recommendations.overallMatchingSufficiency !== 'belum_cukup'
      ? recommendations.activePathRecommendations.slice(0, 5)
      : []
    ).map((item) => item.candidate.id)
  );

  return (
    <>
      {/* INTERACTIVE SCREEN EXPERIENCE (Hidden during A4 Print) */}
      <div className="no-print print:hidden w-full max-w-4xl mx-auto space-y-5 sm:space-y-6 text-left">
        {/* PRIMARY ONE-MINUTE RESULT EXPERIENCE */}
        <div id="ringkasan-1-menit" className="scroll-mt-24">
          <OneMinuteResultCard
            biodata={biodata}
            direction={direction}
            profileAssessment={profileAssessment}
            recommendations={recommendations}
            canRequestMoreQuestions={canRequestMoreQuestions}
            onRequestMoreQuestions={requestMoreQuestions}
            onReviewAnswers={handleReviewAnswers}
            onResetSession={resetSession}
            onDownloadPdf={handleDownloadPdf}
            onPrintResult={handlePrintResult}
            isExportingPdf={isExportingPdf}
            exportFeedback={exportFeedback}
            onInspectCandidate={handleInspectCandidateById}
          />
        </div>

        {/* PHASE 7.4: 8-SECTION REAL-LIFE CAREER INSIGHT EXPANDER (Domain-Tinted Featured Callout) */}
        {primaryCandidate && primaryTheme && primaryDomain && (
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setShowInsightDrawer((prev) => !prev)}
              aria-expanded={showInsightDrawer}
              className={`w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 sm:px-6 sm:py-5 min-h-[60px] rounded-3xl border shadow-xs text-left transition-interactive cursor-pointer focus-ring ${primaryTheme.softBg} ${primaryTheme.cardBorder} hover:shadow-md`}
            >
              <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs">
                  <DomainIconBadge kind={primaryDomain} className={`w-5 h-5 ${primaryTheme.accentText}`} />
                </div>
                <div className="min-w-0 space-y-1">
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 font-display leading-snug">
                    {showInsightDrawer
                      ? `Tutup Wawasan Lengkap: ${primaryCandidate.candidate.name}`
                      : `Kenali Lebih Dalam (8 Aspek Nyata): ${primaryCandidate.candidate.name}`}
                  </div>
                  <div className="text-xs text-slate-700 leading-snug">
                    Aktivitas harian · Lingkungan · Hard/Soft Skill · Pendidikan · Penghasilan · Tantangan & Peluang
                  </div>
                </div>
              </div>

              <span
                className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200/80 text-xs font-bold shrink-0 whitespace-nowrap self-end sm:self-center shadow-xs ${primaryTheme.accentText}`}
              >
                <span>{showInsightDrawer ? 'Tutup Wawasan' : 'Buka 8 Aspek'}</span>
                {showInsightDrawer ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            {showInsightDrawer && (
              <div>
                <CareerInsightPanel candidate={primaryCandidate.candidate} />
              </div>
            )}
          </div>
        )}

        {/* COLLAPSIBLE FULL PROFILE & 13-DOMAIN EXPLORER ACCORDION */}
        <div className="pt-1 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setShowFullDetails((prev) => !prev)}
              aria-expanded={showFullDetails}
              className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 sm:px-6 sm:py-5 min-h-[56px] rounded-3xl bg-white border border-slate-200/90 hover:bg-slate-50/90 hover:border-slate-300 shadow-xs text-left transition-interactive cursor-pointer focus-ring"
            >
              <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center shrink-0">
                  <BookOpenCheck className="w-5 h-5 text-slate-700" />
                </div>
                <div className="min-w-0 space-y-0.5">
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 font-display leading-snug">
                    {showFullDetails
                      ? 'Tutup Eksplorasi Lengkap & Rincian Profil'
                      : 'Jelajahi Top 5 Lengkap, Filter 13 Bidang & Rincian Profil'}
                  </div>
                  <div className="text-xs text-slate-600 leading-snug">
                    Buka 100+ pilihan Bekerja/Kuliah/Wirausaha, filter bidang, 6 dimensi profil & perbandingan lintas jalur
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl bg-slate-100 text-xs font-bold text-slate-800 shrink-0 whitespace-nowrap self-end sm:self-center">
                <span>{showFullDetails ? 'Tutup' : 'Buka Eksplorasi'}</span>
                {showFullDetails ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            {!showFullDetails &&
              recommendations &&
              (recommendations.catalogSummary?.productionCount ?? 0) > 0 && (
                <button
                  type="button"
                  onClick={handleOpenCatalogExplorer}
                  className="sm:w-auto px-5 py-4 min-h-[56px] rounded-3xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-interactive cursor-pointer focus-ring whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span>
                    Jelajahi {recommendations.catalogSummary?.productionCount} Pilihan Bidang
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}
          </div>

          {showFullDetails && (
            <div className="mt-6 space-y-8">
              <PersonalProfileOverviewSection
                profileAssessment={profileAssessment}
                direction={direction}
                biodata={biodata}
              />

              <SixDimensionProfileSection profileAssessment={profileAssessment} />

              <SkillDevelopmentSection skillProfile={profileAssessment.skillProfile} />

              <MainAndAlternativeRecommendationsSection
                recommendations={recommendations}
                direction={direction}
                onReviewAnswers={handleReviewAnswers}
                onOpenCandidateModal={(cand) => setInspectedCandidate(cand)}
                exploreAllNonce={exploreAllNonce}
                onBackToSummary={handleBackToSummary}
              />

              <CrossPathExplorationSection
                recommendations={recommendations}
                direction={direction}
                onOpenDetailModal={(cand) => setInspectedCandidate(cand)}
              />

              <PersonalNextStepsSection
                profileAssessment={profileAssessment}
                recommendations={recommendations}
                direction={direction}
                onReviewAnswers={handleReviewAnswers}
                onRetakeQuiz={resetAssessmentQuiz}
                onResetSession={resetSession}
              />
            </div>
          )}
        </div>
      </div>

      {/* CANDIDATE 8-ASPECT EXPLORATION MODAL (Preserves filter/search/scroll behind it) */}
      <CandidateDetailModal
        result={inspectedCandidate}
        isTopFiveRecommendation={Boolean(
          inspectedCandidate && topFiveIds.has(inspectedCandidate.candidate.id)
        )}
        onClose={() => setInspectedCandidate(null)}
      />

      {/* DEDICATED A4 PRINT DOCUMENT (Visible only in @media print / window.print()) */}
      <PrintableResultReport
        biodata={biodata}
        direction={direction}
        profileAssessment={profileAssessment}
        recommendations={recommendations}
      />
    </>
  );
};
