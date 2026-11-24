import React from 'react';
import {
  CandidateMatchResult,
  RecommendationMatchingOutput
} from '../../types/recommendation';
import { StudentProfileAssessment } from '../../types/scoring';
import { FuturePathId, StudentBiodata } from '../../types/student';
import { buildCareerInsightForCandidate } from '../../services/careerInsightBuilder';
import {
  buildPersonalNextSteps,
  buildPersonalProfileOverview,
  getDirectionDisplayMeta,
  getPathCategoryLabel,
  getProportionalMatchLabel
} from '../../services/resultNarrativeBuilder';
import { formatIndonesianDate } from '../../services/resultPdfExporter';

interface PrintableResultReportProps {
  biodata: StudentBiodata;
  direction: FuturePathId | null;
  profileAssessment: StudentProfileAssessment;
  recommendations: RecommendationMatchingOutput | null;
}

export const PrintableResultReport: React.FC<PrintableResultReportProps> = ({
  biodata,
  direction,
  profileAssessment,
  recommendations
}) => {
  const fullName = biodata.fullName.trim() || 'Peserta Pameran';
  const majorLabel = biodata.major || 'Belum diisi';
  const gradeClass = (biodata.gradeLevel || '').trim();
  const formattedDate = formatIndonesianDate(new Date());
  const dirMeta = getDirectionDisplayMeta(direction);

  const overview = buildPersonalProfileOverview(
    profileAssessment,
    direction,
    biodata
  );

  const primaryCandidate: CandidateMatchResult | null =
    recommendations &&
    profileAssessment.overallSufficiency !== 'belum_cukup' &&
    recommendations.overallMatchingSufficiency !== 'belum_cukup'
      ? recommendations.activePathRecommendations[0] ?? null
      : null;

  const alternatives = recommendations
    ? recommendations.activePathRecommendations
        .filter((item) => !primaryCandidate || item.candidate.id !== primaryCandidate.candidate.id)
        .slice(0, 4)
    : [];

  const nextSteps = buildPersonalNextSteps(
    profileAssessment,
    recommendations,
    direction
  );

  const collectedCandidates = [
    ...(primaryCandidate ? [primaryCandidate.candidate] : []),
    ...alternatives.map((a) => a.candidate)
  ];
  const seenSourceKeys = new Set<string>();
  const uniqueSources: Array<{
    title: string;
    publisher: string;
    status: string;
    verifiedAt: string;
    url?: string;
  }> = [];
  for (const cand of collectedCandidates) {
    for (const src of cand.productionMetadata?.sources ?? []) {
      const key = `${src.title}|${src.publisher}`;
      if (!seenSourceKeys.has(key)) {
        seenSourceKeys.add(key);
        uniqueSources.push(src);
      }
    }
  }

  const primaryInsight = primaryCandidate
    ? buildCareerInsightForCandidate(primaryCandidate.candidate)
    : null;

  const minatText = overview.blocks.find((b) => b.id === 'activities')?.answerText ?? '';
  const learningText = overview.blocks.find((b) => b.id === 'learning')?.answerText ?? '';
  const masteredText = overview.blocks.find((b) => b.id === 'mastered')?.answerText ?? '';
  const envPrefText = overview.blocks.find((b) => b.id === 'thinking_habits')?.answerText ?? '';

  return (
    <article
      aria-label="Versi Cetak Laporan Hasil Asesmen"
      className="hidden print:block text-slate-900 bg-white text-[10.5pt] leading-relaxed space-y-5"
    >
      {/* Print Cover Banner */}
      <header className="border-b-2 border-slate-900 pb-3 space-y-1 print-avoid-break">
        <div className="text-[8.5pt] font-bold uppercase tracking-wider text-blue-700">
          PIXEL TO REALITY — FUTURE PATH · Dari Potensi Menjadi Masa Depan
        </div>
        <h1 className="text-[17pt] font-black text-slate-950 font-display leading-tight">
          Laporan Hasil Eksplorasi: {fullName}
        </h1>
        <div className="text-[9pt] text-slate-600">
          Pameran Jurusan RPL SMKN 1 Katapang · Tanggal Asesmen: {formattedDate}
        </div>
      </header>

      {/* 1. Identitas Peserta */}
      <section className="space-y-1.5 print-avoid-break">
        <h2 className="text-[11.5pt] font-extrabold text-slate-950 font-display border-b border-slate-300 pb-1">
          1. Identitas Peserta
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[9.5pt] bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div>
            <span className="font-bold">Nama:</span> {fullName}
          </div>
          <div>
            <span className="font-bold">Jurusan Asal:</span> {majorLabel}
          </div>
          {gradeClass && (
            <div>
              <span className="font-bold">Kelas:</span> {gradeClass}
            </div>
          )}
          <div>
            <span className="font-bold">Tanggal Asesmen:</span> {formattedDate}
          </div>
          <div className="col-span-2">
            <span className="font-bold">Arah Eksplorasi:</span> {dirMeta.label}
          </div>
        </div>
      </section>

      {/* 2. Ringkasan Profil */}
      <section className="space-y-2 print-avoid-break">
        <h2 className="text-[11.5pt] font-extrabold text-slate-950 font-display border-b border-slate-300 pb-1">
          2. Ringkasan Profil Jawabanmu
        </h2>
        <p className="font-semibold text-[9.8pt]">{overview.headlineSummary}</p>
        <div className="space-y-1 text-[9.3pt] text-slate-800">
          <p><span className="font-bold">Minat Utama:</span> {minatText}</p>
          <p><span className="font-bold">Keinginan Belajar:</span> {learningText}</p>
          <p><span className="font-bold">Kemampuan Saat Ini:</span> {masteredText}</p>
          <p><span className="font-bold">Preferensi Aktivitas & Lingkungan:</span> {envPrefText}</p>
          {overview.customOtherNotes.length > 0 && (
            <p>
              <span className="font-bold">Jawaban Khusus ("Lainnya"):</span>{' '}
              {overview.customOtherNotes.map((n) => `${n.questionText} → "${n.customText}"`).join('; ')}
            </p>
          )}
          {overview.flexibleCountsNote && (
            <p className="text-[8.5pt] text-slate-600">{overview.flexibleCountsNote}</p>
          )}
        </div>
      </section>

      {/* 3. Rekomendasi Utama */}
      <section className="space-y-2 print-avoid-break">
        <h2 className="text-[11.5pt] font-extrabold text-slate-950 font-display border-b border-slate-300 pb-1">
          3. Rekomendasi Utama
        </h2>
        {!primaryCandidate || !primaryInsight ? (
          <div className="p-3 rounded-lg border border-amber-300 bg-amber-50 text-[9.5pt]">
            <p className="font-bold">Status: Belum Dapat Disimpulkan</p>
            <p>
              Bukti jawabanmu pada sesi ini masih belum memadai untuk menetapkan satu rekomendasi utama secara pasti.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="p-3 rounded-lg border border-slate-300 bg-slate-50">
              <div className="text-[8.5pt] font-bold uppercase text-blue-700">
                {getPathCategoryLabel(primaryCandidate.candidate.pathCategory)} ·{' '}
                {primaryCandidate.candidate.categoryLabel} ·{' '}
                {getProportionalMatchLabel(
                  primaryCandidate.matchScore,
                  primaryCandidate.matchSufficiency
                ).label}
                {primaryCandidate.matchScore !== null ? ` (${primaryCandidate.matchScore}/100)` : ''}
              </div>
              <div className="text-[13pt] font-black text-slate-950 font-display">
                {primaryCandidate.candidate.name}
              </div>
            </div>
            <p className="text-[9.5pt]">{primaryInsight.fieldOverview.simpleExplanation}</p>
            <p className="text-[9.3pt] text-slate-800">
              <span className="font-bold">Tujuan & Ruang Lingkup:</span>{' '}
              {primaryInsight.fieldOverview.purposeAndScope}
            </p>
          </div>
        )}
      </section>

      {/* 4. Informasi Mendalam */}
      {primaryInsight && (
        <section className="space-y-3">
          <h2 className="text-[11.5pt] font-extrabold text-slate-950 font-display border-b border-slate-300 pb-1">
            4. Informasi Mendalam Bidang (8 Aspek)
          </h2>

          <div className="print-avoid-break space-y-1 text-[9.3pt]">
            <h3 className="font-bold text-slate-950">
              A. {primaryInsight.activitiesAndResponsibilities.heading}
            </h3>
            <ul className="list-disc pl-5 space-y-0.5">
              {primaryInsight.activitiesAndResponsibilities.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="print-avoid-break space-y-1 text-[9.3pt]">
            <h3 className="font-bold text-slate-950">B. Tempat & Lingkungan</h3>
            <ul className="list-disc pl-5 space-y-0.5">
              <li><span className="font-semibold">Setting:</span> {primaryInsight.environmentAndWorkStyle.settingSummary}</li>
              <li><span className="font-semibold">Interaksi sosial:</span> {primaryInsight.environmentAndWorkStyle.socialInteraction}</li>
              <li><span className="font-semibold">Ritme keseharian:</span> {primaryInsight.environmentAndWorkStyle.workRhythm}</li>
            </ul>
          </div>

          <div className="print-avoid-break space-y-1 text-[9.3pt]">
            <h3 className="font-bold text-slate-950">C. Skill yang Dibutuhkan (Terpisah)</h3>
            <p><span className="font-semibold">Hard Skills:</span> {primaryInsight.skillsSeparated.hardSkills.join('; ')}</p>
            <p><span className="font-semibold">Soft Skills:</span> {primaryInsight.skillsSeparated.softSkills.join('; ')}</p>
            <p><span className="font-semibold">Dasar untuk Pemula:</span> {primaryInsight.skillsSeparated.beginnerStarterSkills.join('; ')}</p>
          </div>

          <div className="print-avoid-break space-y-1 text-[9.3pt]">
            <h3 className="font-bold text-slate-950">D. Pendidikan & Persyaratan</h3>
            <ul className="list-disc pl-5 space-y-0.5">
              {primaryInsight.educationAndRequirements.generalEducationPaths.map((p, i) => (
                <li key={`ed-${i}`}>{p}</li>
              ))}
              {primaryInsight.educationAndRequirements.nonFormalOrTraining.map((p, i) => (
                <li key={`nf-${i}`}>{p}</li>
              ))}
              {primaryInsight.educationAndRequirements.regulatoryOrCertificationNotes.map((p, i) => (
                <li key={`rg-${i}`}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="print-avoid-break space-y-1.5 text-[9.3pt]">
            <h3 className="font-bold text-slate-950">
              {primaryInsight.financialContext
                ? primaryInsight.financialContext.sectionHeading.replace(/^6\.\s*/, 'E. ')
                : 'E. Kisaran Penghasilan'}
            </h3>
            {primaryInsight.incomeInfo.status === 'available' ? (
              <p>
                {primaryInsight.incomeInfo.rangeText} (Level: {primaryInsight.incomeInfo.experienceLevel},
                Lokasi: {primaryInsight.incomeInfo.locationContext}) — Sumber:{' '}
                {primaryInsight.incomeInfo.sourceTitle} ({primaryInsight.incomeInfo.sourcePublisher},{' '}
                {primaryInsight.incomeInfo.verifiedAt})
              </p>
            ) : (
              <div className="space-y-1">
                <p>{primaryInsight.incomeInfo.fallbackText}</p>
                {primaryInsight.financialContext && (
                  <div className="space-y-0.5 text-[8.8pt] text-slate-800">
                    <p className="font-semibold">{primaryInsight.financialContext.qualitativeTitle}:</p>
                    <ul className="list-disc pl-5 space-y-0.5">
                      {primaryInsight.financialContext.qualitativeFactors.map((factor, idx) => (
                        <li key={idx}>{factor}</li>
                      ))}
                    </ul>
                    <p className="text-slate-600">{primaryInsight.financialContext.guidanceNote}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="print-avoid-break space-y-1 text-[9.3pt]">
            <h3 className="font-bold text-slate-950">F. Tantangan, Langkah Awal & Persiapan</h3>
            {primaryInsight.starterActionStep && (
              <p>
                <span className="font-semibold">Langkah Awal Nyata:</span>{' '}
                {primaryInsight.starterActionStep}
              </p>
            )}
            <ul className="list-disc pl-5 space-y-0.5">
              {primaryInsight.challengesAndPreparation.challenges.map((c, i) => (
                <li key={`ch-${i}`}><span className="font-semibold">Tantangan:</span> {c}</li>
              ))}
              {primaryInsight.challengesAndPreparation.preparations.map((p, i) => (
                <li key={`pr-${i}`}><span className="font-semibold">Persiapan:</span> {p}</li>
              ))}
            </ul>
          </div>

          <div className="print-avoid-break space-y-1 text-[9.3pt]">
            <h3 className="font-bold text-slate-950">G. Peluang Perkembangan</h3>
            <ul className="list-disc pl-5 space-y-0.5">
              {primaryInsight.growthOpportunities.progressionPath.map((g, i) => (
                <li key={`gr-${i}`}>{g}</li>
              ))}
              <li><span className="font-semibold">Lintas bidang:</span> {primaryInsight.growthOpportunities.specializationOrPathSwitch}</li>
              <li><span className="font-semibold">Relevansi masa depan:</span> {primaryInsight.growthOpportunities.futureRelevanceNote}</li>
            </ul>
          </div>
        </section>
      )}

      {/* 5. Pilihan Alternatif */}
      <section className="space-y-2 print-avoid-break">
        <h2 className="text-[11.5pt] font-extrabold text-slate-950 font-display border-b border-slate-300 pb-1">
          5. Pilihan Alternatif
        </h2>
        {alternatives.length > 0 ? (
          <ul className="space-y-1.5 text-[9.3pt]">
            {alternatives.map((alt, i) => (
              <li key={alt.candidate.id}>
                <span className="font-bold">
                  {i + 1}. {alt.candidate.name} ({getPathCategoryLabel(alt.candidate.pathCategory)}
                  {alt.matchScore !== null ? ` · ${alt.matchScore}/100` : ''}):
                </span>{' '}
                {alt.candidate.shortDescription}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[9.3pt]">Belum ada alternatif tambahan untuk sesi ini.</p>
        )}
      </section>

      {/* 6. Saran Langkah Berikutnya */}
      <section className="space-y-2 print-avoid-break">
        <h2 className="text-[11.5pt] font-extrabold text-slate-950 font-display border-b border-slate-300 pb-1">
          6. Saran Langkah Berikutnya
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-[9.3pt]">
          {nextSteps.map((step) => (
            <li key={step.id}>
              <span className="font-bold">{step.title}:</span> {step.actionDetail}
            </li>
          ))}
        </ul>
      </section>

      {/* 7. Sumber Informasi & Tanggal Verifikasi */}
      <section className="space-y-1.5 print-avoid-break border-t border-slate-300 pt-2">
        <h2 className="text-[10.5pt] font-extrabold text-slate-950 font-display">
          7. Sumber Informasi & Tanggal Verifikasi
        </h2>
        {uniqueSources.length > 0 ? (
          <ul className="list-disc pl-5 space-y-0.5 text-[8.5pt] text-slate-700">
            {uniqueSources.map((src, idx) => (
              <li key={idx}>
                {src.title} — {src.publisher} ({src.status}, diperiksa {src.verifiedAt}
                {src.url ? `, ${src.url}` : ''})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[8.5pt] text-slate-700">
            Disusun pada {formattedDate} · Pameran Jurusan RPL SMKN 1 Katapang.
          </p>
        )}
        <p className="text-[8pt] text-slate-500 pt-1">
          PIXEL TO REALITY — FUTURE PATH · SMKN 1 Katapang · Panduan eksplorasi awal, bukan layanan resmi penempatan kerja, penerimaan mahasiswa, atau konsultasi usaha.
        </p>
      </section>
    </article>
  );
};
