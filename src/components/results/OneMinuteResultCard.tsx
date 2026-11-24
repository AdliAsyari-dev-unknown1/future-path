import React from 'react';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Briefcase,
  Check,
  CheckCircle2,
  Compass,
  Download,
  Eye,
  GraduationCap,
  Layers,
  Lightbulb,
  PlusCircle,
  Printer,
  Rocket,
  RotateCcw,
  ShieldAlert,
  Wrench
} from 'lucide-react';
import { FuturePathId, StudentBiodata } from '../../types/student';
import { StudentProfileAssessment } from '../../types/scoring';
import {
  RecommendationMatchingOutput,
  RecommendationPathCategory
} from '../../types/recommendation';
import {
  buildOneMinuteResultSummary,
  getDirectionDisplayMeta
} from '../../services/resultNarrativeBuilder';
import {
  DOMAIN_THEME_CONFIG,
  DomainIconBadge,
  DomainIllustration
} from './DomainIllustration';

interface OneMinuteResultCardProps {
  biodata: StudentBiodata;
  direction: FuturePathId | null;
  profileAssessment: StudentProfileAssessment;
  recommendations: RecommendationMatchingOutput | null;
  canRequestMoreQuestions: boolean;
  onRequestMoreQuestions: () => void;
  onReviewAnswers: () => void;
  onResetSession: () => void;
  onDownloadPdf: () => void;
  onPrintResult: () => void;
  isExportingPdf?: boolean;
  exportFeedback?: string | null;
  onInspectCandidate?: (candidateId: string) => void;
}

function getTrackBadgeIcon(pathCategory: RecommendationPathCategory) {
  switch (pathCategory) {
    case 'bekerja':
      return <Briefcase className="w-3.5 h-3.5 shrink-0" />;
    case 'kuliah':
      return <GraduationCap className="w-3.5 h-3.5 shrink-0" />;
    case 'wirausaha':
      return <Rocket className="w-3.5 h-3.5 shrink-0" />;
  }
}

export const OneMinuteResultCard: React.FC<OneMinuteResultCardProps> = ({
  biodata,
  direction,
  profileAssessment,
  recommendations,
  canRequestMoreQuestions,
  onRequestMoreQuestions,
  onReviewAnswers,
  onResetSession,
  onDownloadPdf,
  onPrintResult,
  isExportingPdf = false,
  exportFeedback = null,
  onInspectCandidate
}) => {
  const summary = buildOneMinuteResultSummary(profileAssessment, recommendations, direction);
  const firstName = biodata.fullName.trim() || 'Peserta';
  const dirLabel = getDirectionDisplayMeta(direction).label;

  const primary = summary.primary;
  const primaryTheme = primary ? DOMAIN_THEME_CONFIG[primary.domainVisual] : null;
  const isErrorFeedback = Boolean(exportFeedback && exportFeedback.toLowerCase().includes('gagal'));

  return (
    <section aria-labelledby="one-minute-heading" className="space-y-6 text-left">
      <div className="bg-white rounded-3xl px-5 py-4 sm:px-7 sm:py-5 border border-slate-200/90 shadow-xs space-y-3.5">
        <div className="flex flex-col gap-3.5">
          <div className="space-y-1 min-w-0">
            <div className="text-xs font-semibold text-slate-600 flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span className="font-display font-extrabold text-blue-700">FUTURE PATH</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="truncate text-slate-900 font-bold">{firstName}</span>
              {biodata.major && (
                <>
                  <span className="text-slate-300" aria-hidden="true">·</span>
                  <span className="truncate">{biodata.major}</span>
                </>
              )}
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>{dirLabel}</span>
            </div>
            <h1
              id="one-minute-heading"
              className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight"
            >
              {summary.sectionHeadline}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">{summary.subHeadline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
            <button
              type="button"
              onClick={onDownloadPdf}
              disabled={isExportingPdf}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[44px] rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 whitespace-nowrap shrink-0 transition-interactive cursor-pointer focus-ring shadow-xs"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>{isExportingPdf ? 'Menyiapkan PDF...' : 'Unduh PDF'}</span>
            </button>
            <button
              type="button"
              onClick={onPrintResult}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 whitespace-nowrap shrink-0 transition-interactive cursor-pointer focus-ring"
            >
              <Printer className="w-3.5 h-3.5 shrink-0" />
              <span>Cetak Hasil</span>
            </button>
            {canRequestMoreQuestions && summary.status !== 'insufficient' && (
              <button
                type="button"
                onClick={onRequestMoreQuestions}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100/80 whitespace-nowrap shrink-0 transition-interactive cursor-pointer focus-ring"
              >
                <PlusCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Tanya Lebih Lanjut</span>
              </button>
            )}
            <button
              type="button"
              onClick={onReviewAnswers}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 whitespace-nowrap shrink-0 transition-interactive cursor-pointer focus-ring"
            >
              <Eye className="w-3.5 h-3.5 shrink-0" />
              <span>Ubah Jawaban</span>
            </button>
            <button
              type="button"
              onClick={onResetSession}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 whitespace-nowrap shrink-0 transition-interactive cursor-pointer focus-ring"
            >
              <RotateCcw className="w-3.5 h-3.5 shrink-0" />
              <span>Peserta Baru</span>
            </button>
          </div>
        </div>

        {exportFeedback && (
          <div
            role="status"
            className={`flex items-center gap-2 text-xs font-medium rounded-xl px-3.5 py-2.5 border ${
              isErrorFeedback
                ? 'text-amber-950 bg-amber-50 border-amber-200'
                : 'text-emerald-950 bg-emerald-50 border-emerald-200'
            }`}
          >
            {isErrorFeedback ? (
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            )}
            <span>{exportFeedback}</span>
          </div>
        )}
      </div>

      {summary.status === 'insufficient' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 shadow-sm space-y-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-2.5">
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                {summary.insufficientMessage}
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {canRequestMoreQuestions && (
                  <button
                    type="button"
                    onClick={onRequestMoreQuestions}
                    className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer focus-ring"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Jawab Pertanyaan Tambahan</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={onReviewAnswers}
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer focus-ring"
                >
                  <Eye className="w-4 h-4" />
                  <span>Tinjau Jawaban</span>
                </button>
              </div>
            </div>
          </div>

          {summary.alternatives.length > 0 && (
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Contoh Bidang untuk Gambaran Awal
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {summary.alternatives.map((alt) => {
                  const altTheme = DOMAIN_THEME_CONFIG[alt.domainVisual];
                  return (
                    <div
                      key={alt.candidateId}
                      className={`p-4 rounded-2xl ${altTheme.softBg} border ${altTheme.softBorder} space-y-1.5`}
                    >
                      <div className={`inline-flex items-center gap-1.5 text-xs font-bold ${altTheme.accentText}`}>
                        <DomainIconBadge kind={alt.domainVisual} className="w-3.5 h-3.5" />
                        <span>Jalur {alt.pathLabel}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 font-display">{alt.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {alt.oneSentenceDesc}
                      </p>
                      {onInspectCandidate && (
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={() => onInspectCandidate(alt.candidateId)}
                            className={`inline-flex items-center gap-1.5 text-xs font-bold ${altTheme.accentText} hover:underline cursor-pointer min-h-[38px] px-2.5 py-1.5 -ml-2.5 focus-ring rounded-xl hover:bg-white/70 transition-colors`}
                          >
                            <BookOpen className="w-3.5 h-3.5 shrink-0" />
                            <span>Lihat Detail 8 Aspek</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {summary.status === 'ready' && primary && primaryTheme && (
        <article
          className={`bg-white rounded-3xl overflow-hidden border ${primaryTheme.cardBorder} shadow-md`}
        >
          {/* Vibrant Domain-Accented Hero Band */}
          <div className={`${primaryTheme.heroGradient} px-6 py-6 sm:px-8 sm:py-7 text-white`}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_210px] gap-6 items-center">
              <div className="space-y-3 min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl ${primaryTheme.heroBadgeBg} ${primaryTheme.heroBadgeText}`}
                  >
                    {getTrackBadgeIcon(primary.pathCategory)}
                    <span>Jalur {primary.pathLabel}</span>
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl ${primaryTheme.heroBadgeBg} ${primaryTheme.heroBadgeText}`}
                  >
                    <DomainIconBadge kind={primary.domainVisual} className="w-3.5 h-3.5" />
                    <span>{primaryTheme.label}</span>
                  </span>
                </div>

                <h2
                  className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  {primary.title}
                </h2>

                <div className="pt-1 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/85">
                    {primary.pathCategory === 'kuliah'
                      ? 'Apa yang Dipelajari?'
                      : primary.pathCategory === 'wirausaha'
                      ? 'Produk atau Layanan'
                      : 'Gambaran Pekerjaan'}
                  </div>
                  <p className="text-sm sm:text-base text-white/95 leading-relaxed max-w-2xl">
                    {primary.whatItIs}
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[210px] aspect-[4/3] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-white p-1.5 shadow-sm">
                <DomainIllustration kind={primary.domainVisual} />
              </div>
            </div>
          </div>

          {/* Track-Differentiated Concise Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {primary.pathCategory === 'kuliah' && primary.kuliahDetails ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${primaryTheme.accentText}`}>
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Contoh Mata Kuliah & Materi</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-800">
                    {primary.kuliahDetails.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-snug">
                        <span
                          className={`w-5 h-5 rounded-full ${primaryTheme.checkBg} ${primaryTheme.checkText} flex items-center justify-center shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2.5">
                    <h3 className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${primaryTheme.accentText}`}>
                      <Layers className="w-3.5 h-3.5" />
                      <span>Aktivitas & Proyek Kuliah</span>
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-800">
                      {primary.kuliahDetails.projects.map((proj, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-snug">
                          <ArrowRight className={`w-4 h-4 ${primaryTheme.accentText} shrink-0 mt-0.5`} />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {primary.neededSkills.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Kemampuan yang Relevan
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {primary.neededSkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 rounded-xl ${primaryTheme.chipBg} border ${primaryTheme.chipBorder} text-xs font-semibold ${primaryTheme.chipText}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${primaryTheme.accentText}`}>
                      <Compass className="w-3.5 h-3.5" />
                      <span>
                        {primary.pathCategory === 'wirausaha'
                          ? 'Kegiatan Sehari-hari'
                          : 'Aktivitas Sehari-hari'}
                      </span>
                    </h3>
                    <ul className="space-y-2.5 text-sm text-slate-800">
                      {primary.dailyActivities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-snug">
                          <span
                            className={`w-5 h-5 rounded-full ${primaryTheme.checkBg} ${primaryTheme.checkText} flex items-center justify-center shrink-0 mt-0.5`}
                          >
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${primaryTheme.accentText}`}>
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Kemampuan yang Dibutuhkan</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {primary.neededSkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 rounded-xl ${primaryTheme.chipBg} border ${primaryTheme.chipBorder} text-xs sm:text-sm font-semibold ${primaryTheme.chipText}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {primary.pathCategory === 'wirausaha' && primary.wirausahaDetails ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-1.5">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
                        <span>Tantangan Utama</span>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                        {primary.wirausahaDetails.challenge}
                      </p>
                    </div>
                    <div className={`p-4 rounded-2xl ${primaryTheme.softBg} border ${primaryTheme.softBorder} space-y-1.5`}>
                      <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${primaryTheme.accentText}`}>
                        <Rocket className="w-3.5 h-3.5" />
                        <span>Langkah Awal</span>
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed ${primaryTheme.softText}`}>
                        {primary.starterStep}
                      </p>
                    </div>
                  </div>
                ) : null}
              </>
            )}

            {/* Concrete Starter Step for Bekerja & Kuliah tracks */}
            {primary.pathCategory !== 'wirausaha' && primary.starterStep && (
              <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50/90 to-white border ${primaryTheme.softBorder} space-y-1.5`}>
                <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${primaryTheme.accentText}`}>
                  <Rocket className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {primary.pathCategory === 'kuliah'
                      ? 'Langkah Awal Mengenal Bidang Studi'
                      : 'Langkah Awal Persiapan Kerja'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {primary.starterStep}
                </p>
              </div>
            )}

            {/* Single Everyday Recommendation Reason */}
            <div
              className={`p-4 rounded-2xl ${primaryTheme.softBg} border ${primaryTheme.softBorder} text-sm ${primaryTheme.softText} leading-relaxed flex items-start gap-2.5`}
            >
              <Lightbulb className={`w-4 h-4 ${primaryTheme.accentText} shrink-0 mt-0.5`} />
              <div>
                <span className="font-bold">Kenapa ini cocok: </span>
                <span>{primary.singleReason}</span>
              </div>
            </div>

            {primary.criticalNotice && (
              <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 leading-relaxed">
                <AlertCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{primary.criticalNotice}</span>
              </div>
            )}
          </div>
        </article>
      )}

      {summary.status === 'ready' && summary.alternatives.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 font-display px-1">
            {summary.isExploratoryMode ? 'Pilihan Pembanding Teratas' : 'Pilihan Alternatif Terdekat'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {summary.alternatives.map((alt) => {
              const altTheme = DOMAIN_THEME_CONFIG[alt.domainVisual];
              return (
                <article
                  key={alt.candidateId}
                  className={`bg-white rounded-2xl p-5 border ${altTheme.cardBorder} ${altTheme.altHoverBorder} shadow-xs space-y-2.5 flex flex-col justify-between transition-colors`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${altTheme.chipBg} ${altTheme.chipText} border ${altTheme.chipBorder}`}
                      >
                        <DomainIconBadge kind={alt.domainVisual} className="w-3.5 h-3.5" />
                        <span>{altTheme.label}</span>
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Jalur {alt.pathLabel}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display leading-snug">
                      {alt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {alt.oneSentenceDesc}
                    </p>
                  </div>
                  <div className="space-y-2.5 pt-2.5 border-t border-slate-100">
                    {alt.quickHighlight && (
                      <div className={`text-xs ${altTheme.accentText} font-medium flex items-start gap-1.5`}>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-normal">{alt.quickHighlight}</span>
                      </div>
                    )}
                    {onInspectCandidate && (
                      <div>
                        <button
                          type="button"
                          onClick={() => onInspectCandidate(alt.candidateId)}
                          className={`inline-flex items-center gap-1.5 text-xs font-bold ${altTheme.accentText} hover:underline cursor-pointer min-h-[38px] px-2.5 py-1.5 -ml-2.5 focus-ring rounded-xl hover:bg-slate-50 transition-colors`}
                        >
                          <BookOpen className="w-3.5 h-3.5 shrink-0" />
                          <span>Lihat Detail 8 Aspek</span>
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
