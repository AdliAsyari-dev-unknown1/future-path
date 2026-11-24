import React, { useState } from 'react';
import {
  AlertCircle,
  Award,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  ExternalLink,
  GraduationCap,
  Layers,
  ShieldAlert,
  TrendingUp,
  Users,
  Wallet,
  Wrench
} from 'lucide-react';
import { RecommendationCandidate } from '../../types/recommendation';
import { buildCareerInsightForCandidate } from '../../services/careerInsightBuilder';
import { inferDomainVisual } from '../../services/resultNarrativeBuilder';
import { DOMAIN_THEME_CONFIG, DomainIconBadge } from './DomainIllustration';
import { getVerificationBadgeMeta } from './ResultStatusHelpers';

interface CareerInsightPanelProps {
  candidate: RecommendationCandidate;
  defaultTab?: 'all' | 'part1' | 'part2';
  showHeader?: boolean;
}

export const CareerInsightPanel: React.FC<CareerInsightPanelProps> = ({
  candidate,
  defaultTab = 'all',
  showHeader = true
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'part1' | 'part2'>(defaultTab);
  const insight = buildCareerInsightForCandidate(candidate);
  const domainVisual = inferDomainVisual(candidate);
  const theme = DOMAIN_THEME_CONFIG[domainVisual];
  const prodMeta = candidate.productionMetadata;

  const showPart1 = activeTab === 'all' || activeTab === 'part1';
  const showPart2 = activeTab === 'all' || activeTab === 'part2';

  return (
    <section
      aria-label={`Wawasan lengkap ${candidate.name}`}
      className={`rounded-3xl bg-white border ${theme.cardBorder} shadow-sm overflow-hidden text-left`}
    >
      {showHeader && (
        <div className={`px-5 py-4 sm:px-7 sm:py-5 ${theme.softBg} border-b ${theme.softBorder} flex flex-col lg:flex-row lg:items-center justify-between gap-3`}>
          <div className="space-y-1 min-w-0">
            <div className={`inline-flex items-center gap-1.5 text-xs font-bold ${theme.accentText}`}>
              <DomainIconBadge kind={domainVisual} className="w-3.5 h-3.5 shrink-0" />
              <span>Wawasan Bidang Lengkap (8 Aspek Nyata)</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 font-display leading-snug">
              {candidate.name}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter tampilan wawasan"
            className="inline-flex flex-wrap items-center gap-1.5 bg-white/95 p-1.5 rounded-2xl border border-slate-200/80 shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
              className={`px-3 py-2 min-h-[38px] rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-interactive cursor-pointer focus-ring ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              Semua (8 Aspek)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'part1'}
              onClick={() => setActiveTab('part1')}
              className={`px-3 py-2 min-h-[38px] rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-interactive cursor-pointer focus-ring ${
                activeTab === 'part1'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              1–4: Gambaran & Skill
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'part2'}
              onClick={() => setActiveTab('part2')}
              className={`px-3 py-2 min-h-[38px] rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-interactive cursor-pointer focus-ring ${
                activeTab === 'part2'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              5–8: Syarat & Peluang
            </button>
          </div>
        </div>
      )}

      <div className="p-5 sm:p-7 space-y-6">
        {/* Track-Specific Practical Callout */}
        {insight.trackSpecificHighlights && (
          <div className={`p-4 sm:p-5 rounded-2xl ${theme.softBg} border ${theme.softBorder} space-y-2.5`}>
            <div className={`text-xs font-extrabold uppercase tracking-wider ${theme.accentText}`}>
              {insight.trackSpecificHighlights.bulletHeading}
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
              {insight.trackSpecificHighlights.bullets.map((line, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className={`w-4 h-4 ${theme.accentText} shrink-0 mt-0.5`} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            {insight.trackSpecificHighlights.extraNote && (
              <p className="text-xs text-slate-700 pt-2 border-t border-slate-200/70 leading-relaxed">
                {insight.trackSpecificHighlights.extraNote}
              </p>
            )}
          </div>
        )}

        {showPart1 && (
          <div className="space-y-6">
            {/* 1. Mengenal Bidang & 2. Aktivitas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-slate-50/85 border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  <Compass className={`w-4 h-4 ${theme.accentText} shrink-0`} />
                  <span>1. Mengenal Bidang</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                  {insight.fieldOverview.simpleExplanation}
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900">Ruang lingkup & tujuan: </span>
                  {insight.fieldOverview.purposeAndScope}
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-200/70">
                  <div className="text-xs font-bold text-slate-800">Contoh Penerapan Nyata:</div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {insight.fieldOverview.realLifeExamples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-snug">
                        <span className={`${theme.accentText} font-bold shrink-0`}>•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  <Briefcase className={`w-4 h-4 ${theme.accentText} shrink-0`} />
                  <span>2. {insight.activitiesAndResponsibilities.heading}</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {insight.activitiesAndResponsibilities.items.map((act, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded-md ${theme.chipBg} ${theme.chipText} shrink-0 mt-0.5`}>
                        0{i + 1}
                      </span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Tempat & Lingkungan (Structured 3-Column Spec Strip) */}
            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/90 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                <Building2 className={`w-4 h-4 ${theme.accentText} shrink-0`} />
                <span>3. Tempat, Lingkungan & Ritme Aktivitas</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 md:divide-x md:divide-slate-200 text-xs sm:text-sm">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">Setting Tempat</div>
                  <p className="text-slate-700 leading-relaxed">
                    {insight.environmentAndWorkStyle.settingSummary}
                  </p>
                </div>
                <div className="space-y-1 md:pl-5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span>Interaksi Sosial</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {insight.environmentAndWorkStyle.socialInteraction}
                  </p>
                </div>
                <div className="space-y-1 md:pl-5">
                  <div className="font-bold text-slate-900">Ritme Keseharian</div>
                  <p className="text-slate-700 leading-relaxed">
                    {insight.environmentAndWorkStyle.workRhythm}
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Skill yang Dibutuhkan (Strictly Separated: Hard / Soft / Beginner) */}
            <div className="space-y-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  <Layers className={`w-4 h-4 ${theme.accentText} shrink-0`} />
                  <span>4. Skill yang Dibutuhkan (Terpisah Jelas)</span>
                </div>
                <p className="text-xs text-slate-600">
                  Kamu tidak harus langsung menguasai semua keterampilan di bawah ini sejak awal — banyak bekal dapat dilatih bertahap.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/65 border border-blue-200/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-950">
                    <Wrench className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>Hard Skills (Teknis Bidang)</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {insight.skillsSeparated.hardSkills.map((sk, i) => (
                      <li key={i} className="leading-snug">• {sk}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-violet-50/65 border border-violet-200/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-violet-950">
                    <Users className="w-3.5 h-3.5 text-violet-700 shrink-0" />
                    <span>Soft Skills (Sikap & Kerja Sama)</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {insight.skillsSeparated.softSkills.map((sk, i) => (
                      <li key={i} className="leading-snug">• {sk}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/65 border border-emerald-200/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-950">
                    <BookOpenCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Dasar untuk Pemula</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {insight.skillsSeparated.beginnerStarterSkills.map((sk, i) => (
                      <li key={i} className="leading-snug">• {sk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {showPart2 && (
          <div className="space-y-6">
            {/* 5. Pendidikan & Persyaratan */}
            <div className="p-5 rounded-2xl bg-slate-50/85 border border-slate-200/80 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                <GraduationCap className={`w-4 h-4 ${theme.accentText} shrink-0`} />
                <span>5. Pendidikan, Pelatihan & Persyaratan Penting</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:divide-x md:divide-slate-200 text-xs">
                <div className="space-y-1.5">
                  <div className="font-bold text-slate-900">Jalur Pendidikan Umum</div>
                  <ul className="space-y-1 text-slate-700">
                    {insight.educationAndRequirements.generalEducationPaths.map((item, i) => (
                      <li key={i} className="leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1.5 md:pl-4">
                  <div className="font-bold text-slate-900 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span>Pelatihan / Non-Formal</span>
                  </div>
                  <ul className="space-y-1 text-slate-700">
                    {insight.educationAndRequirements.nonFormalOrTraining.map((item, i) => (
                      <li key={i} className="leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1.5 md:pl-4">
                  <div className="font-bold text-slate-900 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span>Syarat Regulasi / Sertifikat</span>
                  </div>
                  <ul className="space-y-1 text-slate-700">
                    {insight.educationAndRequirements.regulatoryOrCertificationNotes.map((item, i) => (
                      <li key={i} className="leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Kisaran Penghasilan / Modal Awal / Biaya Kuliah (Strict verification guard) */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                <Wallet className={`w-4 h-4 ${theme.accentText} shrink-0`} />
                <span>{insight.financialContext?.sectionHeading ?? '6. Kisaran Penghasilan'}</span>
              </div>
              {insight.incomeInfo.status === 'available' ? (
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                  <div className="font-bold text-slate-900 text-base">
                    {insight.incomeInfo.rangeText}
                  </div>
                  <div className="text-xs text-slate-700 flex flex-wrap gap-x-3 gap-y-1">
                    <span>Level: {insight.incomeInfo.experienceLevel}</span>
                    <span aria-hidden="true">·</span>
                    <span>Konteks wilayah: {insight.incomeInfo.locationContext}</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    Sumber: {insight.incomeInfo.sourceTitle} ({insight.incomeInfo.sourcePublisher}, {insight.incomeInfo.verifiedAt})
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                    <span>{insight.incomeInfo.fallbackText}</span>
                  </div>
                  {insight.financialContext && (
                    <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 space-y-1.5 text-xs">
                      <div className="font-bold text-slate-900">
                        {insight.financialContext.qualitativeTitle}
                      </div>
                      <ul className="space-y-1 text-slate-700">
                        {insight.financialContext.qualitativeFactors.map((factor, idx) => (
                          <li key={idx} className="leading-relaxed">
                            • {factor}
                          </li>
                        ))}
                      </ul>
                      <p className="text-slate-600 leading-relaxed pt-1 border-t border-slate-200/60">
                        {insight.financialContext.guidanceNote}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 7. Tantangan & Persiapan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-amber-50/75 border border-amber-200/80 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-950">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>7a. Tantangan Nyata di Lapangan</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-amber-950">
                  {insight.challengesAndPreparation.challenges.map((ch, i) => (
                    <li key={i} className="leading-relaxed">• {ch}</li>
                  ))}
                </ul>
              </div>

              <div className={`p-5 rounded-2xl ${theme.softBg} border ${theme.softBorder} space-y-3`}>
                <div className={`flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider ${theme.accentText}`}>
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>7b. Langkah Awal & Hal yang Bisa Dipersiapkan</span>
                </div>
                {insight.starterActionStep && (
                  <div className="p-3.5 rounded-xl bg-white/90 border border-slate-200/80 space-y-1">
                    <div className={`text-[11px] font-extrabold uppercase tracking-wider ${theme.accentText}`}>
                      Langkah Awal Nyata
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                      {insight.starterActionStep}
                    </p>
                  </div>
                )}
                <ul className={`space-y-1.5 text-xs sm:text-sm ${theme.softText}`}>
                  {insight.challengesAndPreparation.preparations.map((prep, i) => (
                    <li key={i} className="leading-relaxed">• {prep}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 8. Peluang Perkembangan (Connected Progression Timeline) */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                <TrendingUp className={`w-4 h-4 ${theme.accentText} shrink-0`} />
                <span>8. Peluang Perkembangan & Arah Masa Depan</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {insight.growthOpportunities.progressionPath.map((stepText, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 leading-relaxed flex flex-col justify-between gap-1.5"
                  >
                    <div className={`font-mono font-bold ${theme.accentText}`}>
                      Tahap 0{idx + 1}
                    </div>
                    <div>{stepText}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
                <div className="leading-relaxed">
                  <span className="font-bold text-slate-900">Peluang lintas bidang: </span>
                  {insight.growthOpportunities.specializationOrPathSwitch}
                </div>
                <div className="leading-relaxed">
                  <span className="font-bold text-slate-900">Relevansi ke depan: </span>
                  {insight.growthOpportunities.futureRelevanceNote}
                </div>
              </div>
            </div>

            {/* Verified Sources Footer inside Insight Panel */}
            {prodMeta && prodMeta.sources.length > 0 && (
              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <div className="text-xs font-bold text-slate-800">
                  Sumber Resmi & Tanggal Verifikasi ({prodMeta.sources.length})
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {prodMeta.sources.map((src) => {
                    const srcMeta = getVerificationBadgeMeta(src.status);
                    return (
                      <div
                        key={src.id}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-bold text-slate-900">{src.title}</span>
                          <span className={`inline-flex items-center gap-1 font-semibold shrink-0 ${srcMeta.textColor}`}>
                            {srcMeta.icon}
                            <span>{srcMeta.label}</span>
                          </span>
                        </div>
                        <div className="text-slate-700 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                          <span>{src.publisher}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono">{src.verifiedAt}</span>
                          {src.url && (
                            <>
                              <span aria-hidden="true">·</span>
                              <a
                                href={src.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-blue-700 hover:underline font-medium focus-ring rounded"
                              >
                                <span>Buka rujukan</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
