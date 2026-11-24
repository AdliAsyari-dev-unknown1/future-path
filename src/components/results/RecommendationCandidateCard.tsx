import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Rocket,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Wrench,
  TrendingUp,
  FileSearch,
  Info,
  AlertTriangle
} from 'lucide-react';
import { CandidateMatchResult, RecommendationPathCategory } from '../../types/recommendation';
import { FuturePathId } from '../../types/student';
import {
  ORDERED_DIMENSIONS,
  getCandidateInsightHighlight,
  getConfidenceDisplayText,
  getDimensionFitLabel,
  getPathCategoryLabel,
  getProportionalMatchLabel,
  inferDomainVisual
} from '../../services/resultNarrativeBuilder';
import { extractTrackSummaryFacts } from '../../services/catalogExplorationService';
import { DOMAIN_THEME_CONFIG, DomainIconBadge } from './DomainIllustration';
import { getSufficiencyMeta, getVerificationBadgeMeta } from './ResultStatusHelpers';
import { CareerInsightPanel } from './CareerInsightPanel';

interface RecommendationCandidateCardProps {
  result: CandidateMatchResult;
  activeDirection: FuturePathId | null;
  rankIndex?: number;
  variant?: 'spotlight' | 'alternative' | 'cross_path';
  defaultExpanded?: boolean;
  onOpenDetailModal?: (result: CandidateMatchResult) => void;
}

function getPathCategoryIcon(pathCategory: RecommendationPathCategory) {
  switch (pathCategory) {
    case 'bekerja':
      return <Briefcase className="w-4 h-4 text-blue-700 shrink-0" />;
    case 'kuliah':
      return <GraduationCap className="w-4 h-4 text-indigo-700 shrink-0" />;
    case 'wirausaha':
      return <Rocket className="w-4 h-4 text-amber-700 shrink-0" />;
  }
}

function getConcreteDailyActivities(result: CandidateMatchResult): {
  heading: string;
  items: string[];
} {
  const { candidate } = result;
  const prodMeta = candidate.productionMetadata;

  if (candidate.pathCategory === 'bekerja') {
    const workItems = prodMeta?.workDetail?.generalResponsibilities ?? [];
    return {
      heading: 'Kerjanya ngapain aja sehari-hari?',
      items: (workItems.length > 0 ? workItems : candidate.characteristics).slice(0, 3)
    };
  }

  if (candidate.pathCategory === 'kuliah') {
    const activities = prodMeta?.studyDetail?.academicOrPracticeActivities ?? [];
    const topics = prodMeta?.studyDetail?.typicalCoreTopics ?? [];
    const merged = [...activities, ...topics];
    return {
      heading: 'Yang biasa dipelajari & dikerjakan',
      items: (merged.length > 0 ? merged : candidate.characteristics).slice(0, 3)
    };
  }

  const bizItems = prodMeta?.entrepreneurshipDetail?.startingProcessOverview ?? [];
  return {
    heading: 'Kegiatan usahanya sehari-hari',
    items: (bizItems.length > 0 ? bizItems : candidate.characteristics).slice(0, 3)
  };
}

export const RecommendationCandidateCard: React.FC<RecommendationCandidateCardProps> = ({
  result,
  activeDirection,
  rankIndex,
  variant = 'alternative',
  defaultExpanded = false,
  onOpenDetailModal
}) => {
  const [showDetails, setShowDetails] = useState(defaultExpanded);
  const { candidate, matchScore, matchSufficiency, confidenceLevel } = result;
  const suff = getSufficiencyMeta(matchSufficiency);
  const proportional = getProportionalMatchLabel(matchScore, matchSufficiency);
  const insight = getCandidateInsightHighlight(result, activeDirection);
  const dailyActivities = getConcreteDailyActivities(result);
  const trackFacts = extractTrackSummaryFacts(candidate);
  const scoreAvailable = matchScore !== null && matchSufficiency !== 'belum_cukup';

  const prodMeta = candidate.productionMetadata;
  const verificationKey = candidate.isSimulationFixture
    ? 'SIMULATION'
    : prodMeta?.verificationStatus ?? 'UNVERIFIED';
  const verificationBadge = getVerificationBadgeMeta(verificationKey);

  const isOutsideInitialDirection =
    activeDirection !== null &&
    activeDirection !== 'bingung' &&
    candidate.pathCategory !== activeDirection;

  const isSpotlight = variant === 'spotlight';
  const domainVisual = inferDomainVisual(candidate);
  const domainTheme = DOMAIN_THEME_CONFIG[domainVisual];

  return (
    <article
      className={`rounded-3xl border text-left transition-colors ${
        isSpotlight
          ? `bg-white ${domainTheme.cardBorder} shadow-sm p-6 sm:p-8`
          : `bg-white ${domainTheme.cardBorder} shadow-xs p-5 sm:p-6`
      } space-y-5`}
    >
      {/* Top Meta Line + Title + Match Readout */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="space-y-1.5 min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-slate-500">
            {rankIndex !== undefined && (
              <>
                <span className={`font-mono font-bold ${domainTheme.accentText}`}>
                  {isSpotlight ? 'Paling Cocok Saat Ini' : `Pilihan #${rankIndex}`}
                </span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span className="inline-flex items-center gap-1.5 text-slate-700">
              {getPathCategoryIcon(candidate.pathCategory)}
              <span>{getPathCategoryLabel(candidate.pathCategory)}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg ${domainTheme.chipBg} ${domainTheme.chipText} border ${domainTheme.chipBorder}`}
            >
              <DomainIconBadge kind={domainVisual} className="w-3 h-3" />
              <span>{domainTheme.label}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{candidate.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className={`inline-flex items-center gap-1 ${verificationBadge.textColor}`}>
              {verificationBadge.icon}
              <span>{verificationBadge.label}</span>
              {!candidate.isSimulationFixture && prodMeta?.lastVerifiedDate && (
                <span className="font-mono text-slate-500 font-normal">
                  ({prodMeta.lastVerifiedDate})
                </span>
              )}
            </span>
          </div>

          <h3
            className={`${
              isSpotlight ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            } font-black text-slate-900 font-display tracking-tight`}
          >
            {candidate.name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            {insight.keyFocusText}
          </p>

          {(result.isMajorRelatedContext || isOutsideInitialDirection) && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-slate-600">
              {result.isMajorRelatedContext && (
                <span className="inline-flex items-center gap-1 text-slate-700">
                  <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Nyambung dengan jurusan sekolahmu (tidak menambah skor)</span>
                </span>
              )}
              {isOutsideInitialDirection && (
                <span className="inline-flex items-center gap-1 text-indigo-700 font-medium">
                  <span>Jalur lain sebagai pembanding</span>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Conditional Score & Sufficiency Display (NEVER converts null to 0) */}
        <div className="sm:text-right shrink-0 space-y-1.5 sm:min-w-[180px]">
          {scoreAvailable && matchScore !== null ? (
            <div className="space-y-0.5">
              <div className="flex sm:justify-end items-baseline gap-1 font-display">
                <span className="text-3xl font-black text-slate-900 tabular-nums">
                  {matchScore}
                </span>
                <span className="text-xs font-semibold text-slate-600">/ 100</span>
              </div>
              <div className="text-xs font-bold text-slate-800">{proportional.label}</div>
            </div>
          ) : (
            <div className="space-y-0.5">
              <div className="text-sm font-bold text-slate-800">Belum Dapat Disimpulkan</div>
              <div className="text-xs text-slate-500">Bukti jawaban belum memadai</div>
            </div>
          )}

          <div className="flex flex-wrap sm:justify-end items-center gap-x-2 gap-y-1 text-xs font-semibold">
            <span className={`inline-flex items-center gap-1 ${suff.textColor}`}>
              {suff.icon}
              <span>{suff.label}</span>
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-600">{getConfidenceDisplayText(confidenceLevel)}</span>
          </div>
        </div>
      </div>

      {/* Explicit Limitation Banner for PARTIALLY_VERIFIED entries */}
      {!candidate.isSimulationFixture &&
        prodMeta?.verificationStatus === 'PARTIALLY_VERIFIED' &&
        prodMeta.verificationLimitations.length > 0 && (
          <div
            role="note"
            className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-amber-50/85 border border-amber-200/90 text-xs text-amber-950 leading-relaxed"
          >
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold">Catatan Kelengkapan Info: </span>
              <span>{prodMeta.verificationLimitations.join(' ')}</span>
            </div>
          </div>
        )}

      {/* Always-Visible Concrete Daily Activities */}
      {dailyActivities.items.length > 0 && (
        <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-2">
          <div className="text-xs font-bold text-slate-800">{dailyActivities.heading}</div>
          <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
            {dailyActivities.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-blue-600 font-bold shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Why Considered (Direct grounded reasons) */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-slate-700">
          Kenapa Ini Cocok dengan Jawabanmu?
        </div>
        {result.reasonsConsidered.length > 0 ? (
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            {result.reasonsConsidered.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs sm:text-sm text-slate-600">
            Ditampilkan sebagai pembanding awal sambil menunggu jawaban lebih lengkap.
          </p>
        )}
      </div>

      {/* Explicit Skill Alignment Trio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
        <div className="p-3.5 rounded-2xl bg-emerald-50/55 border border-emerald-200/75 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
            <Wrench className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Bekal yang Sudah Terlihat</span>
          </div>
          {result.skillAlignment.currentSkillMatches.length > 0 ? (
            <ul className="space-y-1 text-xs text-slate-700">
              {result.skillAlignment.currentSkillMatches.map((item, i) => (
                <li key={i} className="leading-snug">
                  • {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-600 leading-snug">
              Belum ada bekal langsung yang tercatat dari jawabanmu.
            </p>
          )}
        </div>

        <div className="p-3.5 rounded-2xl bg-blue-50/55 border border-blue-200/75 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
            <BookOpen className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>Hal yang Ingin Dipelajari</span>
          </div>
          {result.skillAlignment.learningInterestMatches.length > 0 ? (
            <ul className="space-y-1 text-xs text-slate-700">
              {result.skillAlignment.learningInterestMatches.map((item, i) => (
                <li key={i} className="leading-snug">
                  • {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-600 leading-snug">
              Belum ada topik belajar khusus yang dipilih terkait bidang ini.
            </p>
          )}
        </div>

        <div className="p-3.5 rounded-2xl bg-amber-50/55 border border-amber-200/75 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
            <TrendingUp className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Yang Perlu Dilatih</span>
          </div>
          {result.skillAlignment.skillsToDevelop.length > 0 ? (
            <ul className="space-y-1 text-xs text-slate-700">
              {result.skillAlignment.skillsToDevelop.map((item, i) => (
                <li key={i} className="leading-snug">
                  • {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-600 leading-snug">
              Latihan bertahap sesuai aktivitas harian bidang ini tetap dianjurkan.
            </p>
          )}
        </div>
      </div>

      {/* Track-Specific Practical Facts (Bekerja / Kuliah / Wirausaha) */}
      {trackFacts.items.length > 0 && (
        <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 text-xs">
          {trackFacts.items.map((fact) => (
            <div key={fact.label} className="space-y-0.5 min-w-0">
              <div className="font-bold text-slate-500 uppercase tracking-wide text-[11px]">
                {fact.label}
              </div>
              <div className="text-slate-800 leading-relaxed">{fact.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Expandable Evidence, Dimension Fit, Track Facts, Constraints & Official Sources */}
      <div className="pt-2 border-t border-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            aria-expanded={showDetails}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 cursor-pointer py-2 px-1 -ml-1 rounded-lg min-h-[44px] focus-ring transition-interactive"
          >
            <FileSearch className="w-3.5 h-3.5 shrink-0" />
            <span>
              {showDetails
                ? 'Tutup Rincian & Sumber Resmi'
                : `Lihat Rincian Lengkap, Sumber Resmi (${prodMeta?.sources.length ?? 0}) & Bukti Jawaban (${result.supportingQuestionEvidence.length})`}
            </span>
            {showDetails ? (
              <ChevronUp className="w-3.5 h-3.5 shrink-0" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 shrink-0" />
            )}
          </button>

          {onOpenDetailModal && (
            <button
              type="button"
              onClick={() => onOpenDetailModal(result)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-xl text-xs font-bold border ${domainTheme.chipBg} ${domainTheme.chipText} ${domainTheme.chipBorder} hover:opacity-90 cursor-pointer focus-ring transition-interactive`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>Buka Detail 8 Aspek</span>
            </button>
          )}
        </div>

        {showDetails && (
          <div className="mt-3 space-y-4 p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-xs">
            {/* Phase 7.4 Full 8-Section Career Insight & Official Sources */}
            <CareerInsightPanel candidate={candidate} defaultTab="all" showHeader={false} />

            {/* Dimension Fit Breakdown */}
            <div className="space-y-2">
              <div className="font-bold text-slate-800">Keselarasan per Dimensi Profil</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {ORDERED_DIMENSIONS.map((dimId) => {
                  const detail = result.dimensionFitBreakdown[dimId];
                  return (
                    <div
                      key={dimId}
                      className="p-2.5 rounded-xl bg-white border border-slate-200/80 space-y-0.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-slate-800 truncate">
                          {detail.dimensionLabel}
                        </span>
                        <span className="font-mono font-bold text-slate-700 tabular-nums shrink-0">
                          {detail.includedInCalculation && detail.dimensionFitScore !== null
                            ? `${detail.dimensionFitScore}/100`
                            : 'N/A'}
                        </span>
                      </div>
                      <div className="text-slate-600">{getDimensionFitLabel(detail)}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Supporting Question Evidence */}
            <div className="space-y-2">
              <div className="font-bold text-slate-800">
                Bukti Jawaban Pendukung ({result.supportingQuestionEvidence.length})
              </div>
              {result.supportingQuestionEvidence.length > 0 ? (
                <ul className="space-y-2">
                  {result.supportingQuestionEvidence.slice(0, 4).map((ev, idx) => (
                    <li
                      key={`${ev.questionId}-${ev.selectedOptionId}`}
                      className="p-2.5 rounded-xl bg-white border border-slate-200/80 space-y-0.5"
                    >
                      <div className="flex items-center justify-between gap-2 text-slate-600">
                        <span className="font-semibold text-blue-800">
                          {ev.relevantDimensionLabel}
                        </span>
                        <span className="text-[11px] text-slate-500">Bukti #{idx + 1}</span>
                      </div>
                      <div className="text-slate-600 line-clamp-2">{ev.questionText}</div>
                      <div className="font-semibold text-slate-900">
                        Pilihanmu: {ev.selectedOptionLabel}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600">
                  Belum ada soal indikator pendukung yang tercatat secara langsung untuk kandidat ini.
                </p>
              )}
            </div>

            {/* Requirements & Mismatched / Unknown Aspects + Missing Production Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="space-y-1.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <div className="font-bold text-slate-800">
                  Hal yang Perlu Dipertimbangkan / Persyaratan Dasar
                </div>
                <ul className="space-y-1 text-slate-600 leading-relaxed">
                  {result.requirementsAndConsiderations.map((req, idx) => (
                    <li key={idx}>• {req}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Aspek Belum Selaras & Cakupan Data Belum Tersedia</span>
                </div>
                {result.mismatchedOrUnknownAspects.length > 0 && (
                  <ul className="space-y-1 text-slate-700 leading-relaxed">
                    {result.mismatchedOrUnknownAspects.map((item, idx) => (
                      <li key={`mismatch-${idx}`}>• {item}</li>
                    ))}
                  </ul>
                )}
                {candidate.missingCatalogInfo.length > 0 && (
                  <div className="pt-1 text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-700">Cakupan belum tersedia di katalog ini: </span>
                    {candidate.missingCatalogInfo.join(' · ')}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
