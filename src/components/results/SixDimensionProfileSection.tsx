import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileSearch, ShieldCheck } from 'lucide-react';
import { DimensionScoreResult, StudentProfileAssessment } from '../../types/scoring';
import {
  ORDERED_DIMENSIONS,
  getDimensionQualitativeBand
} from '../../services/resultNarrativeBuilder';
import { getSufficiencyMeta } from './ResultStatusHelpers';

interface SixDimensionProfileSectionProps {
  profileAssessment: StudentProfileAssessment;
}

const DimensionResultItem: React.FC<{ dimension: DimensionScoreResult }> = ({ dimension }) => {
  const [showEvidence, setShowEvidence] = useState(false);
  const suff = getSufficiencyMeta(dimension.sufficiencyStatus);
  const scoreAvailable =
    dimension.normalizedScore !== null && dimension.sufficiencyStatus !== 'belum_cukup';
  const qualitativeLabel = getDimensionQualitativeBand(
    dimension.normalizedScore,
    dimension.sufficiencyStatus
  );

  return (
    <article className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4 text-left flex flex-col justify-between">
      <div className="space-y-4">
        {/* Header: Dimension title, metadata, and conditional numeric score */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500">
              <span className="font-mono font-bold text-blue-700">Dimensi {dimension.code}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{dimension.evidenceCount} bukti soal</span>
            </div>
            <h3 className="text-lg font-black text-slate-900 font-display">
              {dimension.label}
            </h3>
          </div>

          <div className="text-right shrink-0 space-y-1">
            {scoreAvailable && dimension.normalizedScore !== null ? (
              <div className="flex items-baseline justify-end gap-1 font-display">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums">
                  {dimension.normalizedScore}
                </span>
                <span className="text-xs font-semibold text-slate-600">/ 100</span>
              </div>
            ) : (
              <div className="text-xs font-bold text-slate-600 py-1">
                {dimension.evidenceCount === 0 ? 'Belum dinilai' : 'Belum dapat disimpulkan'}
              </div>
            )}
            <div className="inline-flex items-center justify-end gap-1.5 text-xs font-semibold">
              {suff.icon}
              <span className={suff.textColor}>{suff.label}</span>
            </div>
          </div>
        </div>

        {/* Visual Indicator Track (0 width and muted when score is unavailable) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-slate-700">{qualitativeLabel}</span>
            {scoreAvailable && dimension.primaryTendency && (
              <span className="text-slate-600 font-medium truncate max-w-[55%]">
                Dominan: {dimension.primaryTendency.label}
              </span>
            )}
          </div>
          <div
            className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"
            aria-label={
              scoreAvailable && dimension.normalizedScore !== null
                ? `Skor ${dimension.label} ${dimension.normalizedScore} dari 100`
                : `${dimension.label} belum memiliki cukup bukti`
            }
          >
            <div
              className={`h-full rounded-full transition-all duration-300 ${suff.barColor}`}
              style={{
                width: `${
                  scoreAvailable && dimension.normalizedScore !== null
                    ? dimension.normalizedScore
                    : 0
                }%`
              }}
            />
          </div>
        </div>

        {/* Explanation & Uncertainty Note */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {dimension.transparencyNote}
        </p>

        {dimension.sufficiencyStatus !== 'cukup' && (
          <div className={`p-3 rounded-xl border text-xs leading-relaxed ${suff.surfaceClass}`}>
            {dimension.sufficiencyStatus === 'belum_cukup'
              ? 'Skor numerik sengaja tidak ditampilkan agar ketiadaan bukti tidak disalahartikan sebagai nilai rendah atau nol.'
              : `Bukti pada dimensi ini masih terbatas (${dimension.evidenceCount} soal, keyakinan ${dimension.confidenceScore}%), sehingga pembacaan bersifat sementara.`}
          </div>
        )}

        {/* Top Observed Tendencies inside Dimension */}
        {scoreAvailable && dimension.tendencies.length > 0 && (
          <div className="space-y-1.5 pt-1">
            <div className="text-xs font-semibold text-slate-600">
              Pola Kecenderungan Terbaca
            </div>
            <div className="space-y-1.5">
              {dimension.tendencies.slice(0, 3).map((tend) => (
                <div
                  key={tend.id}
                  className="flex items-center justify-between gap-2 text-xs text-slate-700 bg-slate-50/90 px-3 py-2 rounded-xl"
                >
                  <span className="font-medium truncate">{tend.label}</span>
                  <span className="font-mono font-bold text-slate-800 tabular-nums shrink-0">
                    {tend.normalizedPercentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Expandable Evidence Traceability */}
      <div className="pt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={() => setShowEvidence((prev) => !prev)}
          aria-expanded={showEvidence}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 cursor-pointer py-2 min-h-[44px] focus-ring"
        >
          <FileSearch className="w-3.5 h-3.5 shrink-0" />
          <span>
            {showEvidence
              ? 'Tutup Bukti Jawaban Pendukung'
              : `Lihat Bukti Jawaban (${dimension.evidenceRecords.length} soal)`}
          </span>
          {showEvidence ? (
            <ChevronUp className="w-3.5 h-3.5 shrink-0" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 shrink-0" />
          )}
        </button>

        {showEvidence && (
          <div className="mt-2.5 space-y-2 text-xs bg-slate-50/90 p-3.5 rounded-2xl border border-slate-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 pb-2 border-b border-slate-200/80">
              <span>
                Keyakinan: <strong className="font-mono tabular-nums">{dimension.confidenceScore}%</strong>
              </span>
              <span>
                Bobot efektif: <strong className="font-mono tabular-nums">{dimension.effectiveEvidenceWeight}</strong>
              </span>
            </div>

            {dimension.evidenceRecords.length === 0 ? (
              <p className="text-slate-500 italic">
                Belum ada bukti pertanyaan yang tercatat untuk dimensi ini.
              </p>
            ) : (
              <ul className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {dimension.evidenceRecords.map((rec) => (
                  <li
                    key={rec.questionId}
                    className="p-2.5 rounded-xl bg-white border border-slate-200/70 space-y-1"
                  >
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono font-bold text-blue-700">{rec.questionId}</span>
                      <span className="font-mono text-slate-500 tabular-nums">
                        rel {rec.categoryRelevanceWeight}
                      </span>
                    </div>
                    <div className="text-slate-600 line-clamp-2">{rec.questionText}</div>
                    <div className="font-semibold text-slate-900">
                      Pilihan: {rec.selectedOptionLabel}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export const SixDimensionProfileSection: React.FC<SixDimensionProfileSectionProps> = ({
  profileAssessment
}) => {
  const orderedDims = ORDERED_DIMENSIONS.map((id) => profileAssessment.dimensions[id]);

  return (
    <section
      id="hasil-enam-dimensi"
      aria-labelledby="six-dimensions-heading"
      className="space-y-5 text-left scroll-mt-24"
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Profil Enam Dimensi</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">
                Keyakinan rata-rata {profileAssessment.overallConfidenceScore}%
              </span>
            </div>
            <h2
              id="six-dimensions-heading"
              className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight"
            >
              Gambaran Enam Dimensi Profil
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Angka pada tiap dimensi (jika bukti mencukupi) menunjukkan kekuatan kecenderungan dari jawabanmu — bukan nilai ujian, bakat bawaan, ataupun jaminan keberhasilan.
            </p>
          </div>
        </div>

        {/* Clean Horizontal Profile Comparison Strip (never turns null into 0) */}
        <div className="space-y-2.5">
          <div className="text-xs font-semibold text-slate-600">
            Ringkasan Perbandingan Enam Dimensi
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {orderedDims.map((dim) => {
              const available =
                dim.normalizedScore !== null && dim.sufficiencyStatus !== 'belum_cukup';
              const suff = getSufficiencyMeta(dim.sufficiencyStatus);
              return (
                <div
                  key={`strip-${dim.dimensionId}`}
                  className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/70 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-slate-800 truncate">{dim.label}</span>
                    {available && dim.normalizedScore !== null ? (
                      <span className="font-mono font-bold text-slate-900 tabular-nums shrink-0">
                        {dim.normalizedScore}/100
                      </span>
                    ) : (
                      <span className="text-slate-500 font-medium shrink-0">Belum dinilai</span>
                    )}
                  </div>
                  <div className="w-full bg-slate-200/70 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${suff.barColor}`}
                      style={{
                        width: `${available && dim.normalizedScore !== null ? dim.normalizedScore : 0}%`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Individual 6 Dimension Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {orderedDims.map((dim) => (
          <DimensionResultItem key={dim.dimensionId} dimension={dim} />
        ))}
      </div>
    </section>
  );
};
