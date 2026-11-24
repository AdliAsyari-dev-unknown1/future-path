import React, { useEffect, useState } from 'react';
import { Briefcase, GraduationCap, Rocket, Layers } from 'lucide-react';
import {
  CandidateMatchResult,
  RecommendationMatchingOutput,
  RecommendationPathCategory
} from '../../types/recommendation';
import { FuturePathId } from '../../types/student';
import { RecommendationCandidateCard } from './RecommendationCandidateCard';

interface CrossPathExplorationSectionProps {
  recommendations: RecommendationMatchingOutput | null;
  direction: FuturePathId | null;
  onOpenDetailModal?: (result: CandidateMatchResult) => void;
}

const PATH_TABS: Array<{
  id: RecommendationPathCategory;
  label: string;
  icon: React.ReactNode;
}> = [
  { id: 'bekerja', label: 'Jalur Bekerja', icon: <Briefcase className="w-4 h-4 shrink-0" /> },
  { id: 'kuliah', label: 'Jalur Kuliah', icon: <GraduationCap className="w-4 h-4 shrink-0" /> },
  { id: 'wirausaha', label: 'Jalur Wirausaha', icon: <Rocket className="w-4 h-4 shrink-0" /> }
];

function getInitialCrossPathTab(direction: FuturePathId | null): RecommendationPathCategory {
  if (direction === 'bekerja') return 'kuliah';
  if (direction === 'kuliah') return 'bekerja';
  if (direction === 'wirausaha') return 'bekerja';
  return 'bekerja';
}

function deduplicateById(items: CandidateMatchResult[]): CandidateMatchResult[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.candidate.id)) return false;
    seen.add(item.candidate.id);
    return true;
  });
}

export const CrossPathExplorationSection: React.FC<CrossPathExplorationSectionProps> = ({
  recommendations,
  direction,
  onOpenDetailModal
}) => {
  const [selectedPath, setSelectedPath] = useState<RecommendationPathCategory>(() =>
    getInitialCrossPathTab(direction)
  );
  const [showExpandedCount, setShowExpandedCount] = useState(false);

  useEffect(() => {
    setSelectedPath(getInitialCrossPathTab(direction));
    setShowExpandedCount(false);
  }, [direction]);

  useEffect(() => {
    setShowExpandedCount(false);
  }, [selectedPath]);

  if (!recommendations) return null;

  const fullPathCandidates = deduplicateById(
    recommendations.crossPathExplorations[selectedPath] ?? []
  );
  const activeCandidates = fullPathCandidates.slice(0, showExpandedCount ? 8 : 3);

  const isSelectedOutsideInitial =
    direction !== null && direction !== 'bingung' && selectedPath !== direction;

  return (
    <section
      id="hasil-lintas-jalur"
      aria-labelledby="cross-path-heading"
      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 text-left scroll-mt-24"
    >
      <div className="space-y-2 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Layers className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Bandingkan Lintas Jalur</span>
          <span aria-hidden="true">·</span>
          <span>Terbuka untuk Semua Jurusan</span>
        </div>
        <h2
          id="cross-path-heading"
          className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight"
        >
          Bandingkan Pilihan Bekerja, Kuliah & Wirausaha
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Semua jalur dihitung adil dari jawabanmu — tidak dikunci oleh jurusan SMK maupun pilihan awalmu. Coba klik tiap tab untuk melihat aktivitas harian di jalur lain.
        </p>

        {/* Interactive Segmented Control (proper button semantics) */}
        <div
          role="tablist"
          aria-label="Pilih jalur eksplorasi lintas jalur"
          className="flex flex-wrap items-center gap-2 pt-2"
        >
          {PATH_TABS.map((tab) => {
            const isActive = selectedPath === tab.id;
            const isOutside =
              direction !== null && direction !== 'bingung' && tab.id !== direction;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedPath(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] rounded-xl text-xs sm:text-sm font-semibold border transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-ring ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-50 text-slate-700 border-slate-200/90 hover:bg-slate-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {isOutside && (
                  <span
                    className={`text-[11px] font-medium ${
                      isActive ? 'text-blue-200' : 'text-blue-700'
                    }`}
                  >
                    (Pembanding)
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contextual Explanation for Active Tab */}
      <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        {isSelectedOutsideInitial ? (
          <span>
            Menampilkan {activeCandidates.length} dari {fullPathCandidates.length} pilihan teratas di{' '}
            <strong>{PATH_TABS.find((t) => t.id === selectedPath)?.label}</strong> untuk perbandingan di luar pilihan awalmu.
          </span>
        ) : (
          <span>
            Menampilkan {activeCandidates.length} dari {fullPathCandidates.length} pilihan teratas di{' '}
            <strong>{PATH_TABS.find((t) => t.id === selectedPath)?.label}</strong> yang paling nyambung dengan jawabanmu.
          </span>
        )}
      </div>

      {activeCandidates.length > 0 ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {activeCandidates.map((cand) => (
              <RecommendationCandidateCard
                key={`cross-${selectedPath}-${cand.candidate.id}`}
                result={cand}
                activeDirection={direction}
                variant="cross_path"
                defaultExpanded={false}
                onOpenDetailModal={onOpenDetailModal}
              />
            ))}
          </div>

          {fullPathCandidates.length > 3 && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowExpandedCount((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer focus-ring"
              >
                <span>
                  {showExpandedCount
                    ? 'Ringkas Kembali (3 Teratas)'
                    : `Lihat Lebih Banyak di Jalur Ini (hingga ${Math.min(8, fullPathCandidates.length)} opsi)`}
                </span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700">
          Katalog terverifikasi untuk jalur ini sedang dikembangkan.
        </div>
      )}
    </section>
  );
};
