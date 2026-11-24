import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Compass,
  Eye,
  Filter,
  GraduationCap,
  Info,
  Layers,
  Rocket,
  RotateCcw,
  Search,
  X
} from 'lucide-react';
import { CareerDomainId } from '../../types/assessment';
import {
  CandidateMatchResult,
  RecommendationMatchingOutput,
  RecommendationPathCategory
} from '../../types/recommendation';
import { FuturePathId } from '../../types/student';
import {
  CAREER_DOMAIN_MAP,
  ExplorationDomainFilter,
  ExplorationTrackFilter,
  ORDERED_CAREER_DOMAINS,
  PATH_COMPARISON_SUMMARIES,
  filterExplorationCandidates
} from '../../services/catalogExplorationService';
import { getDirectionDisplayMeta } from '../../services/resultNarrativeBuilder';
import { DOMAIN_THEME_CONFIG, DomainIconBadge } from './DomainIllustration';
import { RecommendationCandidateCard } from './RecommendationCandidateCard';

interface MainAndAlternativeRecommendationsSectionProps {
  recommendations: RecommendationMatchingOutput | null;
  direction: FuturePathId | null;
  onReviewAnswers: () => void;
  onOpenCandidateModal?: (result: CandidateMatchResult) => void;
  exploreAllNonce?: number;
  onBackToSummary?: () => void;
}

const SAMPLE_SEARCH_KEYWORDS = [
  'desain',
  'jaringan',
  'usaha makanan',
  'hukum',
  'kesehatan',
  'hidroponik'
];

function deduplicateCandidates(list: CandidateMatchResult[]): CandidateMatchResult[] {
  const seen = new Set<string>();
  const unique: CandidateMatchResult[] = [];
  for (const item of list) {
    if (!seen.has(item.candidate.id)) {
      seen.add(item.candidate.id);
      unique.push(item);
    }
  }
  return unique;
}

function getInitialTrackFilter(direction: FuturePathId | null): ExplorationTrackFilter {
  if (direction === 'bekerja' || direction === 'kuliah' || direction === 'wirausaha') {
    return direction;
  }
  return 'all';
}

function sortMergedCrossPath(list: CandidateMatchResult[]): CandidateMatchResult[] {
  return [...list].sort((a, b) => {
    const scoreA = a.matchScore ?? -1;
    const scoreB = b.matchScore ?? -1;
    if (scoreB !== scoreA) return scoreB - scoreA;
    return a.candidate.id.localeCompare(b.candidate.id);
  });
}

function getTrackDisplayLabel(track: ExplorationTrackFilter): string {
  switch (track) {
    case 'bekerja':
      return 'Bekerja';
    case 'kuliah':
      return 'Kuliah';
    case 'wirausaha':
      return 'Wirausaha';
    default:
      return 'Semua Jalur';
  }
}

export const MainAndAlternativeRecommendationsSection: React.FC<
  MainAndAlternativeRecommendationsSectionProps
> = ({
  recommendations,
  direction,
  onReviewAnswers,
  onOpenCandidateModal,
  exploreAllNonce = 0,
  onBackToSummary
}) => {
  const dirMeta = getDirectionDisplayMeta(direction);
  const isExploratory =
    Boolean(recommendations?.exploratoryMode) || direction === 'bingung' || direction === null;

  const [selectedTrack, setSelectedTrack] = useState<ExplorationTrackFilter>(() =>
    getInitialTrackFilter(direction)
  );
  const [selectedDomain, setSelectedDomain] = useState<ExplorationDomainFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleLimit, setVisibleLimit] = useState<number>(5);
  const [showPathComparison, setShowPathComparison] = useState<boolean>(isExploratory);

  useEffect(() => {
    setSelectedTrack(getInitialTrackFilter(direction));
    setSelectedDomain('all');
    setSearchQuery('');
    setVisibleLimit(5);
    setShowPathComparison(
      Boolean(recommendations?.exploratoryMode) || direction === 'bingung' || direction === null
    );
  }, [direction, recommendations?.exploratoryMode]);

  useEffect(() => {
    if (exploreAllNonce > 0) {
      setSelectedTrack('all');
      setSelectedDomain('all');
      setSearchQuery('');
      setVisibleLimit(12);
    }
  }, [exploreAllNonce]);

  const handleSelectTrack = (track: ExplorationTrackFilter) => {
    setSelectedTrack(track);
    setVisibleLimit(5);
  };

  const handleSelectDomain = (domain: ExplorationDomainFilter) => {
    setSelectedDomain(domain);
    setVisibleLimit(5);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleLimit(8);
  };

  const handleResetToInitialView = () => {
    setSelectedTrack(getInitialTrackFilter(direction));
    setSelectedDomain('all');
    setSearchQuery('');
    setVisibleLimit(5);
  };

  const handleResetAllFilters = () => {
    setSelectedTrack('all');
    setSelectedDomain('all');
    setSearchQuery('');
    setVisibleLimit(12);
  };

  const { allCandidatesPool, trackOrderedPools } = useMemo(() => {
    if (!recommendations) {
      return {
        allCandidatesPool: [] as CandidateMatchResult[],
        trackOrderedPools: {
          all: [] as CandidateMatchResult[],
          bekerja: [] as CandidateMatchResult[],
          kuliah: [] as CandidateMatchResult[],
          wirausaha: [] as CandidateMatchResult[]
        }
      };
    }

    const bekerja = deduplicateCandidates(recommendations.crossPathExplorations.bekerja ?? []);
    const kuliah = deduplicateCandidates(recommendations.crossPathExplorations.kuliah ?? []);
    const wirausaha = deduplicateCandidates(recommendations.crossPathExplorations.wirausaha ?? []);
    const mergedAll = sortMergedCrossPath(deduplicateCandidates([...bekerja, ...kuliah, ...wirausaha]));

    const exploratoryAll = isExploratory
      ? deduplicateCandidates(recommendations.activePathRecommendations)
      : mergedAll;

    const allPool =
      isExploratory && selectedDomain === 'all' && !searchQuery.trim()
        ? exploratoryAll.length === mergedAll.length
          ? exploratoryAll
          : mergedAll
        : mergedAll;

    return {
      allCandidatesPool: mergedAll,
      trackOrderedPools: {
        all: allPool,
        bekerja,
        kuliah,
        wirausaha
      }
    };
  }, [recommendations, isExploratory, selectedDomain, searchQuery]);

  const explorationResult = useMemo(
    () =>
      filterExplorationCandidates(allCandidatesPool, trackOrderedPools, {
        track: selectedTrack,
        domain: selectedDomain,
        query: searchQuery
      }),
    [allCandidatesPool, trackOrderedPools, selectedTrack, selectedDomain, searchQuery]
  );

  if (!recommendations || recommendations.catalogMode === 'empty_catalog') {
    return (
      <section
        id="hasil-rekomendasi"
        aria-labelledby="recommendations-heading"
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5 text-left scroll-mt-24"
      >
        <div className="space-y-1.5 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Compass className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Katalog Rekomendasi</span>
          </div>
          <h2
            id="recommendations-heading"
            className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight"
          >
            {dirMeta.resultFocusTitle}
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-3 text-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <div className="text-sm sm:text-base font-bold">
                Katalog Terverifikasi Sedang Dikembangkan
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
                {recommendations?.overallUncertaintyNote ||
                  'Kandidat produksi terverifikasi untuk jalur ini sedang dikembangkan. Sistem sengaja tidak menampilkan rekomendasi palsu maupun skor nol.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const isInsufficientMode = recommendations.overallMatchingSufficiency === 'belum_cukup';
  const filteredPool = explorationResult.filteredCandidates;
  const displayedCandidates = filteredPool.slice(0, visibleLimit);
  const remainingCount = Math.max(0, filteredPool.length - displayedCandidates.length);
  const hasSearchQuery = Boolean(searchQuery.trim());
  const isDefaultInitialFilter =
    selectedTrack === getInitialTrackFilter(direction) &&
    selectedDomain === 'all' &&
    !hasSearchQuery;
  const isDefaultRankedView = !isInsufficientMode && isDefaultInitialFilter;

  const topCandidate = isDefaultRankedView ? displayedCandidates[0] ?? null : null;
  const listCandidates = isDefaultRankedView ? displayedCandidates.slice(1) : displayedCandidates;

  const activeDomainMeta =
    selectedDomain !== 'all' ? CAREER_DOMAIN_MAP[selectedDomain as CareerDomainId] : null;
  const activeDomainTheme = activeDomainMeta
    ? DOMAIN_THEME_CONFIG[activeDomainMeta.visualKind]
    : null;

  const availableOtherTracks = explorationResult.domainAvailabilityInOtherTracks.filter(
    (entry) => entry.count > 0 && entry.path !== selectedTrack
  );

  return (
    <section
      id="hasil-rekomendasi"
      aria-labelledby="recommendations-heading"
      className="space-y-6 text-left scroll-mt-24"
    >
      {/* Honest Insufficient-Evidence Banner (Preserved, while still opening the 109 reference catalog below) */}
      {isInsufficientMode && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-amber-200 shadow-sm space-y-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-3 text-amber-950">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <div className="text-sm sm:text-base font-bold">
                  Rekomendasi Utama Belum Dapat Ditentukan
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
                  {recommendations.overallUncertaintyNote ||
                    'Jumlah bukti jawaban pada profilmu belum mencukupi ambang batas pencocokan sehingga sistem sengaja menahan skor keselarasan dan tidak memaksakan kandidat utama.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={onReviewAnswers}
                className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer focus-ring"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Lengkapi / Tinjau Jawaban</span>
              </button>
              {onBackToSummary && (
                <button
                  type="button"
                  onClick={onBackToSummary}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-semibold text-amber-950 bg-white border border-amber-300 hover:bg-amber-50 transition-colors cursor-pointer focus-ring"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke Ringkasan</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-start gap-2.5 px-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>
              <strong>Mode Referensi Katalog Terbuka:</strong> Meskipun skor personal tetap ditahan hingga jawabanmu lengkap, kamu tetap dapat mencari dan menjelajahi seluruh{' '}
              <span className="font-bold tabular-nums">{allCandidatesPool.length}</span> pilihan bidang di bawah ini sebagai gambaran awal tanpa memunculkan skor palsu.
            </span>
          </div>
        </div>
      )}

      {/* Main Header, Framing & Search + Filter Hub */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-slate-500">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                {recommendations.catalogMode === 'production_verified'
                  ? 'Katalog Bidang Terverifikasi'
                  : recommendations.catalogMode === 'hybrid_catalog'
                  ? 'Katalog Bidang & Pembanding Awal'
                  : 'Kandidat Simulasi'}
              </span>
              <span aria-hidden="true">·</span>
              <span>{dirMeta.label}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-700 font-bold tabular-nums">
                {filteredPool.length} dari {allCandidatesPool.length} Bidang
              </span>
            </div>
            <h2
              id="recommendations-heading"
              className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight"
            >
              {isInsufficientMode
                ? `Jelajahi Referensi ${allCandidatesPool.length} Bidang Masa Depan`
                : isDefaultRankedView
                ? dirMeta.resultFocusTitle
                : `Eksplorasi Bidang (${getTrackDisplayLabel(selectedTrack)})`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {isInsufficientMode
                ? 'Gunakan pencarian kata kunci serta filter jalur dan 13 domain di bawah ini untuk mengenal beragam profesi, bidang kuliah, dan ide usaha.'
                : dirMeta.resultFocusDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {!isDefaultInitialFilter && (
              <button
                type="button"
                onClick={handleResetToInitialView}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer focus-ring whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {isInsufficientMode ? 'Reset Filter Awal' : 'Kembali ke 5 Rekomendasi Awal'}
                </span>
              </button>
            )}
            {onBackToSummary && (
              <button
                type="button"
                onClick={onBackToSummary}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer focus-ring whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                <span>Ringkasan 1 Menit</span>
              </button>
            )}
          </div>
        </div>

        {/* Clear Separation: Personalized Top 5 vs Open 109 Exploration */}
        {!isInsufficientMode && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
            <div className="flex items-start gap-2 leading-relaxed">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong>Rekomendasi Utama (Top 5)</strong> tetap dihitung dari jawaban asesmenmu.
                Memfilter jalur, memilih domain, atau mencari kata kunci di sini bersifat{' '}
                <strong>eksplorasi bebas terhadap {allCandidatesPool.length} bidang</strong> dan{' '}
                <strong>tidak mengubah skor maupun hasil tesmu</strong>.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowPathComparison((prev) => !prev)}
              aria-expanded={showPathComparison}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[38px] rounded-xl text-xs font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer focus-ring shrink-0 whitespace-nowrap"
            >
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>{showPathComparison ? 'Tutup Beda 3 Jalur' : 'Pahami Beda 3 Jalur'}</span>
            </button>
          </div>
        )}

        {isInsufficientMode && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowPathComparison((prev) => !prev)}
              aria-expanded={showPathComparison}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-xl text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer focus-ring"
            >
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>{showPathComparison ? 'Tutup Beda 3 Jalur' : 'Pahami Beda Jalur Bekerja, Kuliah & Wirausaha'}</span>
            </button>
          </div>
        )}

        {/* 3-Path Comparison Strip (Always open initially in Bingung mode, toggleable anytime) */}
        {showPathComparison && (
          <div
            aria-label="Perbedaan jalur Bekerja, Kuliah, dan Wirausaha"
            className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80"
          >
            {PATH_COMPARISON_SUMMARIES.map((pathItem) => {
              const isSelected = selectedTrack === pathItem.pathCategory;
              return (
                <div
                  key={pathItem.pathCategory}
                  className={`p-3.5 rounded-2xl bg-white border space-y-1.5 transition-colors ${
                    isSelected ? 'border-slate-900 shadow-xs' : 'border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-900 font-display">
                      {pathItem.pathCategory === 'bekerja' ? (
                        <Briefcase className="w-3.5 h-3.5 text-blue-700" />
                      ) : pathItem.pathCategory === 'kuliah' ? (
                        <GraduationCap className="w-3.5 h-3.5 text-indigo-700" />
                      ) : (
                        <Rocket className="w-3.5 h-3.5 text-amber-700" />
                      )}
                      <span>{pathItem.title}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectTrack(pathItem.pathCategory)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 underline underline-offset-2 cursor-pointer min-h-[36px] px-2 py-1 -mr-2 rounded-lg focus-ring"
                    >
                      Lihat Jalur Ini
                    </button>
                  </div>
                  <div className="text-xs font-semibold text-slate-800">{pathItem.tagline}</div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{pathItem.mainFocus}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-1.5">
                    {pathItem.honestNote}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {!isInsufficientMode && recommendations.overallUncertaintyNote && (
          <div
            role="status"
            className="flex items-start gap-2.5 p-4 rounded-2xl bg-amber-50/85 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed"
          >
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>{recommendations.overallUncertaintyNote}</span>
          </div>
        )}

        {/* Keyword Search + Track + All 13-Domain Filter Controls */}
        <div className="pt-3 border-t border-slate-100 space-y-4">
          {/* Search Input & Live Count */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label
                htmlFor="catalog-search-input"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider"
              >
                <Search className="w-3.5 h-3.5 text-blue-600" />
                <span>Cari Bidang, Topik Kuliah, Profesi, atau Ide Usaha</span>
              </label>
              <span className="text-xs font-semibold text-slate-600 tabular-nums">
                Ditemukan {filteredPool.length} dari {allCandidatesPool.length} bidang
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 min-w-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="catalog-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Ketik kata kunci (mis. desain, jaringan, usaha makanan, hukum, foto, guru)..."
                  className="w-full pl-10 pr-10 py-2.5 min-h-[44px] rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-none focus-ring transition-colors"
                />
                {hasSearchQuery && (
                  <button
                    type="button"
                    onClick={() => handleSearchChange('')}
                    aria-label="Hapus kata kunci pencarian"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {(selectedTrack !== 'all' || selectedDomain !== 'all' || hasSearchQuery) && (
                <button
                  type="button"
                  onClick={handleResetAllFilters}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-2xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer focus-ring whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Semua ({allCandidatesPool.length})</span>
                </button>
              )}
            </div>

            {/* Quick Sample Keyword Chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-500 font-medium mr-1">Coba cari:</span>
              {SAMPLE_SEARCH_KEYWORDS.map((kw) => {
                const isSameQuery = searchQuery.trim().toLowerCase() === kw;
                return (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => handleSearchChange(isSameQuery ? '' : kw)}
                    aria-pressed={isSameQuery}
                    className={`px-3 py-1.5 min-h-[36px] rounded-xl text-xs font-semibold border transition-colors cursor-pointer focus-ring ${
                      isSameQuery
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {kw}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Track Filter Buttons */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>Filter Jalur & 13 Domain Bidang</span>
            </div>

            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter jalur">
              {(
                [
                  {
                    id: 'all',
                    label: `Semua Jalur (${explorationResult.trackCountsForDomain.all})`,
                    icon: <Layers className="w-3.5 h-3.5" />
                  },
                  {
                    id: 'bekerja',
                    label: `Bekerja (${explorationResult.trackCountsForDomain.bekerja})`,
                    icon: <Briefcase className="w-3.5 h-3.5" />
                  },
                  {
                    id: 'kuliah',
                    label: `Kuliah (${explorationResult.trackCountsForDomain.kuliah})`,
                    icon: <GraduationCap className="w-3.5 h-3.5" />
                  },
                  {
                    id: 'wirausaha',
                    label: `Wirausaha (${explorationResult.trackCountsForDomain.wirausaha})`,
                    icon: <Rocket className="w-3.5 h-3.5" />
                  }
                ] as Array<{ id: ExplorationTrackFilter; label: string; icon: React.ReactNode }>
              ).map((track) => {
                const active = selectedTrack === track.id;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => handleSelectTrack(track.id)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-semibold border transition-colors cursor-pointer whitespace-nowrap focus-ring tabular-nums ${
                      active
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {track.icon}
                    <span>{track.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* All 13 Domain Buttons (Always visible with clear availability counts) */}
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter 13 domain bidang">
            <button
              type="button"
              onClick={() => handleSelectDomain('all')}
              aria-pressed={selectedDomain === 'all'}
              className={`px-3 py-1.5 min-h-[36px] rounded-xl text-xs font-semibold border transition-colors cursor-pointer focus-ring tabular-nums ${
                selectedDomain === 'all'
                  ? 'bg-blue-700 text-white border-blue-700'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Semua Domain ({explorationResult.trackCountsForDomain[selectedTrack]})
            </button>
            {ORDERED_CAREER_DOMAINS.map((dom) => {
              const count = explorationResult.domainCountsForTrack[dom.id] ?? 0;
              const active = selectedDomain === dom.id;
              const domTheme = DOMAIN_THEME_CONFIG[dom.visualKind];
              return (
                <button
                  key={dom.id}
                  type="button"
                  onClick={() => handleSelectDomain(dom.id)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-xl text-xs border transition-colors cursor-pointer focus-ring tabular-nums ${
                    active
                      ? 'bg-blue-700 text-white border-blue-700 font-semibold'
                      : count === 0
                      ? 'bg-slate-50/70 text-slate-500 border-dashed border-slate-200 hover:bg-slate-100 font-normal'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 font-medium'
                  }`}
                >
                  <DomainIconBadge
                    kind={dom.visualKind}
                    className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-white' : domTheme.accentText}`}
                  />
                  <span>
                    {dom.shortLabel} ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Domain Identity & Cross-Track Availability Card */}
          {activeDomainMeta && activeDomainTheme && (
            <div
              className={`p-4 sm:p-5 rounded-2xl border ${activeDomainTheme.softBg} ${activeDomainTheme.softBorder} space-y-3`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1.5 min-w-0">
                  <div className={`inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider ${activeDomainTheme.accentText}`}>
                    <DomainIconBadge kind={activeDomainMeta.visualKind} className="w-4 h-4 shrink-0" />
                    <span>Domain: {activeDomainMeta.label}</span>
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${activeDomainTheme.softText}`}>
                    {activeDomainMeta.description}
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Contoh kegiatan:</strong> {activeDomainMeta.exampleActivities}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60 text-xs">
                <span className="font-semibold text-slate-700">Ketersediaan domain ini per jalur:</span>
                {explorationResult.domainAvailabilityInOtherTracks.map((tr) => (
                  <button
                    key={tr.path}
                    type="button"
                    onClick={() => handleSelectTrack(tr.path)}
                    className={`px-2.5 py-1 rounded-lg font-semibold border transition-colors cursor-pointer focus-ring tabular-nums ${
                      selectedTrack === tr.path
                        ? 'bg-slate-900 text-white border-slate-900'
                        : tr.count > 0
                        ? 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100'
                        : 'bg-white/60 text-slate-500 border-slate-200/80'
                    }`}
                  >
                    {tr.label}: {tr.count}
                  </button>
                ))}
                {selectedTrack !== 'all' && (
                  <button
                    type="button"
                    onClick={() => handleSelectTrack('all')}
                    className="px-2.5 py-1 rounded-lg font-semibold bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer focus-ring"
                  >
                    Lihat Semua Jalur di Domain Ini
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Empty Search / Track-Domain Combination State */}
      {filteredPool.length === 0 && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-display">
              Belum Ada Pilihan yang Cocok dengan Filter Saat Ini
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeDomainMeta && !hasSearchQuery && availableOtherTracks.length > 0
                ? `Bidang ${activeDomainMeta.label} belum memiliki pilihan pada jalur ${getTrackDisplayLabel(
                    selectedTrack
                  )} di katalog terverifikasi saat ini. Namun domain ini tersedia di jalur lain:`
                : hasSearchQuery
                ? `Tidak ada bidang yang memuat kata kunci "${searchQuery.trim()}" pada kombinasi filter ${getTrackDisplayLabel(
                    selectedTrack
                  )}${activeDomainMeta ? ` · ${activeDomainMeta.label}` : ''}.`
                : 'Coba ubah jalur atau domain yang dipilih untuk melihat pilihan bidang yang tersedia.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {activeDomainMeta &&
              availableOtherTracks.map((tr) => (
                <button
                  key={tr.path}
                  type="button"
                  onClick={() => handleSelectTrack(tr.path as RecommendationPathCategory)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer focus-ring"
                >
                  <span>
                    Buka {activeDomainMeta.shortLabel} di Jalur {tr.label} ({tr.count})
                  </span>
                </button>
              ))}

            <button
              type="button"
              onClick={handleResetAllFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer focus-ring"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Tampilkan Semua {allCandidatesPool.length} Bidang</span>
            </button>

            {hasSearchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer focus-ring"
              >
                <X className="w-3.5 h-3.5" />
                <span>Hapus Kata Kunci</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Default Personalized Spotlight Rank #1 */}
      {topCandidate && (
        <div className="space-y-3">
          <div className="px-1">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-display">
              {isExploratory
                ? 'Pilihan Awal yang Bisa Kamu Bandingkan'
                : 'Pilihan Utama yang Paling Cocok Saat Ini'}
            </h3>
            <p className="text-xs text-slate-600">
              {isExploratory
                ? 'Menampilkan perbandingan awal lintas Bekerja, Kuliah, dan Wirausaha, lalu kamu dapat memfilter semua 109 bidang.'
                : 'Dipilih berdasarkan keselarasan jawabanmu di enam sisi profil, lengkap dengan contoh kegiatan hariannya.'}
            </p>
          </div>
          <RecommendationCandidateCard
            result={topCandidate}
            activeDirection={direction}
            rankIndex={1}
            variant="spotlight"
            defaultExpanded={true}
            onOpenDetailModal={onOpenCandidateModal}
          />
        </div>
      )}

      {/* Alternatives or Filtered/Search List */}
      {listCandidates.length > 0 && (
        <div className="space-y-3 pt-1">
          <div className="px-1 flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-display">
                {isDefaultRankedView
                  ? isExploratory
                    ? 'Pilihan Lain untuk Dibandingkan'
                    : 'Pilihan Lain yang Juga Nyambung'
                  : isInsufficientMode
                  ? 'Daftar Bidang Referensi'
                  : 'Hasil Eksplorasi Bidang'}
              </h3>
              <p className="text-xs text-slate-600 tabular-nums">
                Menampilkan {displayedCandidates.length} dari {filteredPool.length} bidang pada filter ini.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {listCandidates.map((cand, idx) => (
              <RecommendationCandidateCard
                key={`${selectedTrack}-${selectedDomain}-${cand.candidate.id}`}
                result={cand}
                activeDirection={direction}
                rankIndex={isDefaultRankedView ? idx + 2 : undefined}
                variant="alternative"
                defaultExpanded={false}
                onOpenDetailModal={onOpenCandidateModal}
              />
            ))}
          </div>

          {/* Progressive Expansion & Quick Return Controls */}
          {(remainingCount > 0 || visibleLimit > 5 || !isDefaultInitialFilter) && (
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2">
              {remainingCount > 0 && (
                <button
                  type="button"
                  onClick={() => setVisibleLimit((prev) => prev + 12)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-2xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-xs transition-colors cursor-pointer focus-ring tabular-nums"
                >
                  <ChevronDown className="w-4 h-4" />
                  <span>
                    Lihat Pilihan Lainnya (+{Math.min(12, remainingCount)} · sisa {remainingCount})
                  </span>
                </button>
              )}

              {remainingCount > 12 && (
                <button
                  type="button"
                  onClick={() => setVisibleLimit(filteredPool.length)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-2xl text-xs sm:text-sm font-semibold text-blue-800 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer focus-ring tabular-nums"
                >
                  <span>Tampilkan Semua ({filteredPool.length})</span>
                </button>
              )}

              {visibleLimit > 5 && (
                <button
                  type="button"
                  onClick={() => setVisibleLimit(5)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer focus-ring"
                >
                  <ChevronUp className="w-4 h-4" />
                  <span>Ringkas ke 5 Teratas</span>
                </button>
              )}

              {!isDefaultInitialFilter && (
                <button
                  type="button"
                  onClick={handleResetToInitialView}
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer focus-ring"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>
                    {isInsufficientMode ? 'Reset Filter Awal' : 'Kembali ke Rekomendasi Awal'}
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
