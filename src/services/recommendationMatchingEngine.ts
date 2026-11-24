/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 5: Deterministic, Evidence-Based Recommendation Matching Engine
 *
 * Matches a student's Phase 4.1 6-dimension profile assessment with structured
 * candidate options across Bekerja, Kuliah, Wirausaha, and Masih Bingung.
 *
 * Core Guarantees:
 * 1. Uses ONLY Phase 4/4.1 profile assessment evidence (never invents skills, grades, or finances).
 * 2. Never treats `belum_cukup` dimensions as 0; re-normalizes available weights or flags uncertainty.
 * 3. Deduplicates indicators per question so multi-tag options are never double-counted.
 * 4. Major (7 SMKN 1 Katapang majors) and initial direction never bias profile scores or candidate scores.
 * 5. Low capital / resource limits do not disqualify low-capital entrepreneurship alternatives.
 */

import { AssessmentIndicator, CareerDomainId } from '../types/assessment';
import {
  inferCatalogMode,
  resolveActiveCatalog,
  summarizeCatalogAvailability,
  validateCatalogDataset
} from './productionCatalogService';
import {
  CandidateMatchResult,
  CandidateSkillAlignment,
  DimensionFitDetail,
  MatchingConfidenceLevel,
  MatchingSufficiencyStatus,
  RecommendationCandidate,
  RecommendationMatchingInput,
  RecommendationMatchingOutput,
  RecommendationPathCategory,
  SupportingQuestionEvidenceItem
} from '../types/recommendation';
import {
  DimensionScoreResult,
  ProfileDimensionId,
  QuestionEvidenceRecord,
  StudentProfileAssessment
} from '../types/scoring';

export const RECOMMENDATION_MATCHING_RULE_VERSION = '1.2.0';

const ALL_CAREER_DOMAINS: CareerDomainId[] = [
  'teknologi_informatika',
  'teknik_industri',
  'hukum_keadilan',
  'bahasa_sastra',
  'pendidikan',
  'kesehatan',
  'bisnis_ekonomi',
  'komunikasi_media',
  'psikologi_sosial',
  'seni_desain',
  'pertanian_lingkungan',
  'pariwisata_kuliner',
  'administrasi_logistik'
];

const ALL_DIMENSIONS: ProfileDimensionId[] = [
  'minat',
  'gaya_berpikir',
  'kebiasaan',
  'kemampuan_saat_ini',
  'preferensi_lingkungan',
  'kesiapan_praktis'
];

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

// Note: Candidate deduplication & UNVERIFIED quarantine handled via productionCatalogService.

/**
 * Collects unique answered question evidence records across all 6 dimensions
 * keyed by questionId so no single question is counted twice in indicator matching.
 */
function collectUniqueQuestionEvidence(
  profile: StudentProfileAssessment
): Map<string, { record: QuestionEvidenceRecord; dimensionLabel: string }> {
  const uniqueMap = new Map<string, { record: QuestionEvidenceRecord; dimensionLabel: string }>();

  for (const dim of profile.dimensionList) {
    for (const rec of dim.evidenceRecords) {
      if (!uniqueMap.has(rec.questionId)) {
        uniqueMap.set(rec.questionId, { record: rec, dimensionLabel: dim.label });
      }
    }
  }

  return uniqueMap;
}

/**
 * Computes qualitative tendency fit (0..1) within a single dimension between the
 * student's observed tendency breakdown and the candidate's preferred tendencies.
 */
function computeTendencyFit(
  dimResult: DimensionScoreResult,
  preferredTendencyIds: string[] | undefined
): number {
  if (!preferredTendencyIds || preferredTendencyIds.length === 0) {
    return 0.75; // Neutral baseline when candidate has no specific tendency requirement
  }

  if (dimResult.tendencies.length === 0) {
    return 0.4;
  }

  const topShare = Math.max(
    0.45,
    (dimResult.tendencies[0]?.normalizedPercentage ?? 45) / 100
  );

  let bestAlignment = 0;
  let coveredShare = 0;

  for (const t of dimResult.tendencies) {
    const rank = preferredTendencyIds.indexOf(t.id);
    if (rank !== -1) {
      const priority = rank === 0 ? 1.0 : rank === 1 ? 0.68 : 0.52;
      const share = t.normalizedPercentage / 100;
      const rankAlignment = Math.min(1, share / topShare) * priority;
      if (rankAlignment > bestAlignment) {
        bestAlignment = rankAlignment;
      }
      coveredShare += share * priority;
    }
  }

  const rawFit = 0.65 * bestAlignment + 0.35 * Math.min(1, coveredShare);
  return clamp(round2(0.15 + rawFit * 0.85), 0.15, 1.0);
}

/**
 * Computes numeric level fit (0..1) comparing the student's normalized dimension score
 * against the candidate's target expectation, respecting softer resource expectations
 * for low-capital entrepreneurship options.
 */
function computeLevelFit(
  studentScore: number,
  expectation: number,
  dimensionId: ProfileDimensionId,
  candidate: RecommendationCandidate
): number {
  if (studentScore >= expectation) {
    const surplusRatio = (studentScore - expectation) / Math.max(15, 100 - expectation);
    return clamp(round2(0.88 + surplusRatio * 0.12), 0.88, 1.0);
  }

  const isLowCapitalReadiness =
    dimensionId === 'kesiapan_praktis' && candidate.resourceProfile === 'low_capital_service';

  const gap = expectation - studentScore;
  const slope = isLowCapitalReadiness ? 0.42 : 0.74;
  const floor = isLowCapitalReadiness ? 0.45 : 0.15;
  return clamp(round2(1 - (gap / Math.max(expectation, 45)) * slope), floor, 1.0);
}

function inferCandidateDomainId(candidate: RecommendationCandidate): CareerDomainId {
  if (candidate.domainId) return candidate.domainId;
  const text = `${candidate.id} ${candidate.name} ${candidate.categoryLabel}`.toLowerCase();
  if (text.includes('hukum')) return 'hukum_keadilan';
  if (text.includes('sastra') || text.includes('bahasa')) return 'bahasa_sastra';
  if (text.includes('pendidikan') || text.includes('pengajar') || text.includes('guru')) return 'pendidikan';
  if (text.includes('kesehatan') || text.includes('keperawatan') || text.includes('gizi')) return 'kesehatan';
  if (text.includes('psikologi') || text.includes('sosial')) return 'psikologi_sosial';
  if (text.includes('pertanian') || text.includes('agribisnis') || text.includes('lingkungan')) return 'pertanian_lingkungan';
  if (text.includes('pariwisata') || text.includes('perhotelan') || text.includes('kuliner') || text.includes('boga')) return 'pariwisata_kuliner';
  if (text.includes('jurnalistik') || text.includes('komunikasi') || text.includes('medsos')) return 'komunikasi_media';
  if (text.includes('dkv') || text.includes('desain') || text.includes('kreatif') || text.includes('animasi')) return 'seni_desain';
  if (text.includes('akuntansi') || text.includes('manajemen') || text.includes('bisnis') || text.includes('jualan') || text.includes('retail')) return 'bisnis_ekonomi';
  if (text.includes('admin') || text.includes('gudang') || text.includes('logistik') || text.includes('qc')) return 'administrasi_logistik';
  if (text.includes('otomotif') || text.includes('mesin') || text.includes('bengkel') || text.includes('manufaktur') || text.includes('sipil')) return 'teknik_industri';
  return 'teknologi_informatika';
}

function computeDomainFit(
  candidate: RecommendationCandidate,
  profile: StudentProfileAssessment
): { domainFitScore: number; hasExplicitDomainEvidence: boolean; primaryRatio: number } {
  const affinities = profile.domainAffinities;
  if (!affinities) {
    return { domainFitScore: 65, hasExplicitDomainEvidence: false, primaryRatio: 0 };
  }

  let totalWeight = 0;
  let maxWeight = 0;
  for (const dom of ALL_CAREER_DOMAINS) {
    const val = affinities[dom] ?? 0;
    totalWeight += val;
    if (val > maxWeight) maxWeight = val;
  }

  if (totalWeight <= 0 || maxWeight <= 0) {
    return { domainFitScore: 65, hasExplicitDomainEvidence: false, primaryRatio: 0 };
  }

  const primaryDom = inferCandidateDomainId(candidate);
  const primaryVal = affinities[primaryDom] ?? 0;
  const secondaryMax = Math.max(
    0,
    ...(candidate.secondaryDomains ?? []).map((dom) => affinities[dom] ?? 0)
  );

  const effectiveVal = Math.max(primaryVal, secondaryMax * 0.65);
  const ratio = clamp(effectiveVal / Math.max(1, maxWeight), 0, 1);

  const domainFitScore =
    effectiveVal <= 0
      ? maxWeight >= 3
        ? 14
        : 28
      : clamp(Math.round(18 + ratio * 82), 18, 100);

  return {
    domainFitScore,
    hasExplicitDomainEvidence: true,
    primaryRatio: ratio
  };
}

/**
 * Evaluates a single candidate across all 6 dimensions cleanly without treating
 * `belum_cukup` dimensions as 0.
 */
function evaluateSingleCandidate(
  candidate: RecommendationCandidate,
  profile: StudentProfileAssessment,
  uniqueQuestionEvidence: Map<string, { record: QuestionEvidenceRecord; dimensionLabel: string }>,
  studentMajor: string
): CandidateMatchResult {
  const includedDims: Array<{
    dimId: ProfileDimensionId;
    rawWeight: number;
    fitScore: number;
    tendencyFit: number;
    dimResult: DimensionScoreResult;
  }> = [];

  const preliminaryBreakdown = {} as Record<ProfileDimensionId, DimensionFitDetail>;

  for (const dimId of ALL_DIMENSIONS) {
    const dimResult = profile.dimensions[dimId];
    const candWeight = candidate.dimensionWeights[dimId] ?? 0;
    const expectation = candidate.dimensionExpectations[dimId] ?? 65;

    if (
      !dimResult ||
      dimResult.sufficiencyStatus === 'belum_cukup' ||
      dimResult.normalizedScore === null
    ) {
      preliminaryBreakdown[dimId] = {
        dimensionId: dimId,
        dimensionLabel: dimResult?.label ?? dimId,
        studentScore: dimResult?.normalizedScore ?? null,
        candidateExpectation: expectation,
        candidateWeight: candWeight,
        effectiveWeightShare: 0,
        sufficiencyStatus: dimResult?.sufficiencyStatus ?? 'belum_cukup',
        tendencyFitScore: 0,
        dimensionFitScore: null,
        includedInCalculation: false,
        note: `Bukti dimensi ${dimResult?.label ?? dimId} belum cukup sehingga tidak dihitung sebagai skor 0.`
      };
      continue;
    }

    const levelFit = computeLevelFit(dimResult.normalizedScore, expectation, dimId, candidate);
    const tendencyFit = computeTendencyFit(dimResult, candidate.preferredTendencies[dimId]);

    // Gate numeric levelFit by qualitative tendencyFit on orientation/domain dimensions
    // so a high numeric score in an unrelated orientation (e.g. Creative vs Workshop)
    // cannot artificially inflate a mismatched candidate.
    let combinedFit: number;
    if (dimId === 'kesiapan_praktis') {
      combinedFit = levelFit * 0.68 + tendencyFit * 0.32;
    } else if (dimId === 'minat' || dimId === 'gaya_berpikir') {
      combinedFit = tendencyFit * (0.52 + 0.48 * levelFit);
    } else if (dimId === 'kemampuan_saat_ini') {
      combinedFit = (levelFit * 0.56 + tendencyFit * 0.44) * (0.45 + 0.55 * tendencyFit);
    } else {
      combinedFit = (levelFit * 0.45 + tendencyFit * 0.55) * (0.5 + 0.5 * tendencyFit);
    }

    const dimensionFitScore = clamp(Math.round(combinedFit * 100), 0, 100);

    includedDims.push({
      dimId,
      rawWeight: candWeight,
      fitScore: dimensionFitScore,
      tendencyFit,
      dimResult
    });

    const dimNote =
      dimResult.sufficiencyStatus === 'terbatas'
        ? `Bukti masih terbatas (${dimResult.evidenceCount} soal); kecenderungan awal: ${dimResult.primaryTendency?.label ?? '-'}.`
        : `Skor ${dimResult.normalizedScore}/100 dengan kecenderungan ${dimResult.primaryTendency?.label ?? '-'}.`;

    preliminaryBreakdown[dimId] = {
      dimensionId: dimId,
      dimensionLabel: dimResult.label,
      studentScore: dimResult.normalizedScore,
      candidateExpectation: expectation,
      candidateWeight: candWeight,
      effectiveWeightShare: 0, // populated below after normalization
      sufficiencyStatus: dimResult.sufficiencyStatus,
      tendencyFitScore: tendencyFit,
      dimensionFitScore,
      includedInCalculation: true,
      note: dimNote
    };
  }

  const includedWeightSum = includedDims.reduce((sum, d) => sum + d.rawWeight, 0);

  // Re-normalize weights across included dimensions
  for (const item of includedDims) {
    preliminaryBreakdown[item.dimId].effectiveWeightShare =
      includedWeightSum > 0 ? round2(item.rawWeight / includedWeightSum) : 0;
  }

  // Deduplicated supporting question evidence matching candidate.supportingIndicators
  const supportingQuestionEvidence: SupportingQuestionEvidenceItem[] = [];
  for (const [qId, entry] of uniqueQuestionEvidence.entries()) {
    const matchedIndicators: AssessmentIndicator[] = entry.record.contributingIndicators
      .map((c) => c.indicator)
      .filter((ind) => candidate.supportingIndicators.includes(ind));

    // Deduplicate matched indicator tags within this question
    const uniqueMatched = Array.from(new Set(matchedIndicators));
    if (uniqueMatched.length > 0) {
      supportingQuestionEvidence.push({
        questionId: qId,
        questionText: entry.record.questionText,
        selectedOptionId: entry.record.selectedOptionId,
        selectedOptionLabel: entry.record.selectedOptionLabel,
        matchedIndicators: uniqueMatched,
        relevantDimensionLabel: entry.dimensionLabel
      });
    }
  }

  // Determine sufficiency status for matching this candidate
  const terbatasCount = includedDims.filter(
    (d) => d.dimResult.sufficiencyStatus === 'terbatas'
  ).length;

  let matchSufficiency: MatchingSufficiencyStatus = 'memadai';
  if (
    includedDims.length < 3 ||
    includedWeightSum < 0.45 ||
    profile.validAnsweredCount < 6
  ) {
    matchSufficiency = 'belum_cukup';
  } else if (includedDims.length < 5 || terbatasCount >= 2 || profile.overallSufficiency !== 'cukup') {
    matchSufficiency = 'terbatas';
  }

  const { domainFitScore, hasExplicitDomainEvidence } = computeDomainFit(candidate, profile);

  // Compute match score only when evidence is at least `terbatas` (never fabricate when `belum_cukup`)
  let matchScore: number | null = null;
  if (matchSufficiency !== 'belum_cukup' && includedWeightSum > 0) {
    const weightedDimFit = includedDims.reduce(
      (sum, d) => sum + d.fitScore * (d.rawWeight / includedWeightSum),
      0
    );

    // Deduplicated indicator coverage across unique answered questions
    const coverageRatio =
      profile.validAnsweredCount > 0
        ? supportingQuestionEvidence.length / profile.validAnsweredCount
        : 0;
    const indicatorScore = clamp(Math.round((coverageRatio / 0.55) * 100), 0, 100);

    if (hasExplicitDomainEvidence) {
      matchScore = clamp(
        Math.round(weightedDimFit * 0.56 + indicatorScore * 0.14 + domainFitScore * 0.3),
        0,
        100
      );
    } else {
      matchScore = clamp(Math.round(weightedDimFit * 0.78 + indicatorScore * 0.22), 0, 100);
    }
  }

  // Compute matching confidence level grounded in profile confidence & coverage
  let confidenceLevel: MatchingConfidenceLevel = 'rendah';
  if (matchSufficiency === 'memadai' && profile.overallConfidenceScore >= 72) {
    confidenceLevel = 'tinggi';
  } else if (matchSufficiency !== 'belum_cukup' && profile.overallConfidenceScore >= 45) {
    confidenceLevel = 'sedang';
  }

  // Skill alignment strictly grounded in Phase 4.1 skillProfile breakdown
  const currentSkillMatches = profile.skillProfile.possessedSkills
    .filter((item) => item.indicators.some((ind) => candidate.supportingIndicators.includes(ind)))
    .map((item) => item.summaryLabel);

  const learningInterestMatches = profile.skillProfile.learningGoals
    .filter((item) => item.indicators.some((ind) => candidate.supportingIndicators.includes(ind)))
    .map((item) => item.summaryLabel);

  const skillDim = profile.dimensions.kemampuan_saat_ini;
  const skillsToDevelop: string[] = [];

  for (const area of profile.skillProfile.developingAreas) {
    skillsToDevelop.push(`${area.summaryLabel} (tercatat di ${area.questionId})`);
  }

  if (
    skillDim.sufficiencyStatus !== 'belum_cukup' &&
    skillDim.normalizedScore !== null &&
    skillDim.normalizedScore < candidate.dimensionExpectations.kemampuan_saat_ini
  ) {
    for (const reqSkill of candidate.requiredBasicSkills) {
      if (!skillsToDevelop.includes(reqSkill)) {
        skillsToDevelop.push(`Perlu dilatih: ${reqSkill}`);
      }
    }
  }

  for (const devSkill of candidate.developableSkills) {
    skillsToDevelop.push(devSkill);
  }

  const skillAlignment: CandidateSkillAlignment = {
    currentSkillMatches,
    learningInterestMatches,
    skillsToDevelop
  };

  // Build strict evidence-based reasons, unknowns/mismatches, and practical considerations
  const reasonsConsidered: string[] = [];
  const mismatchedOrUnknownAspects: string[] = [];

  if (matchSufficiency === 'belum_cukup') {
    reasonsConsidered.push(
      `Jawaban yang masuk baru ${profile.validAnsweredCount} soal, jadi belum cukup untuk melihat kecocokan secara kuat pada ${candidate.name}.`
    );
  } else {
    if (hasExplicitDomainEvidence && domainFitScore >= 72) {
      reasonsConsidered.push(
        `Topik minat yang kamu pilih langsung mengarah ke bidang ${candidate.categoryLabel}.`
      );
    }
    // Cite dimensions that positively support this candidate
    const strongMatches = includedDims
      .filter((d) => d.fitScore >= 62 && d.tendencyFit >= 0.45)
      .sort((a, b) => b.fitScore - a.fitScore);

    for (const m of strongMatches.slice(0, 3)) {
      const tendLabel = m.dimResult.primaryTendency?.label ?? 'pola umum';
      reasonsConsidered.push(
        `Dari ${m.dimResult.label} (${m.dimResult.normalizedScore}/100): jawabanmu cenderung pada ${tendLabel}, yang nyambung dengan aktivitas bidang ini.`
      );
    }

    if (currentSkillMatches.length > 0) {
      reasonsConsidered.push(
        `Kamu sudah menunjukkan ${currentSkillMatches.length} bekal pengalaman yang nyambung, misalnya: ${currentSkillMatches[0]}.`
      );
    } else if (learningInterestMatches.length > 0) {
      reasonsConsidered.push(
        `Walau bekal praktiknya masih awal, kamu tertarik mempelajari: ${learningInterestMatches[0]}.`
      );
    }

    if (reasonsConsidered.length === 0) {
      reasonsConsidered.push(
        'Ditampilkan sebagai pembanding awal untuk membantu melihat gambaran bidang lain di luar kebiasaanmu.'
      );
    }
  }

  // Record mismatched or unknown aspects honestly
  for (const dimId of ALL_DIMENSIONS) {
    const detail = preliminaryBreakdown[dimId];
    if (!detail.includedInCalculation) {
      mismatchedOrUnknownAspects.push(
        `Bukti untuk ${detail.dimensionLabel} masih belum cukup untuk dinilai penuh.`
      );
    } else if (detail.dimensionFitScore !== null && detail.dimensionFitScore < 58) {
      if (dimId === 'kemampuan_saat_ini') {
        mismatchedOrUnknownAspects.push(
          `Bekal keterampilan saat ini (${detail.studentScore}/100) masih di bawah target awal bidang ini (${detail.candidateExpectation}/100), jadi perlu latihan bertahap.`
        );
      } else if (dimId === 'kesiapan_praktis' && candidate.resourceProfile === 'low_capital_service') {
        mismatchedOrUnknownAspects.push(
          `Kesiapan waktu, alat, atau biaya saat ini (${detail.studentScore}/100) masih terbatas; bidang ini tetap bisa dicoba dari jasa keahlian kecil tanpa modal besar.`
        );
      } else {
        mismatchedOrUnknownAspects.push(
          `Pola pada ${detail.dimensionLabel} (${detail.studentScore}/100, cenderung ${profile.dimensions[dimId].primaryTendency?.label ?? '-'}) agak berbeda dari kebiasaan umum di bidang ini.`
        );
      }
    } else if (
      dimId === 'minat' &&
      (profile.dimensions.minat.primaryTendency?.id === 'minat_eksploratif' ||
        (detail.studentScore !== null && detail.studentScore < 65))
    ) {
      mismatchedOrUnknownAspects.push(
        `Ketertarikan di bagian Minat (${detail.studentScore}/100, cenderung ${profile.dimensions.minat.primaryTendency?.label ?? '-'}) masih terbagi, jadi cocok dianggap bahan penjajakan dulu.`
      );
    }
  }

  if (supportingQuestionEvidence.length === 0 && profile.validAnsweredCount > 0) {
    mismatchedOrUnknownAspects.push(
      'Belum ada jawaban yang secara langsung menunjukkan kebiasaan atau minat utama dari bidang ini.'
    );
  }

  const requirementsAndConsiderations = [...candidate.requirementsOrConstraints];
  if (
    candidate.resourceProfile === 'low_capital_service' &&
    (profile.dimensions.kesiapan_praktis.normalizedScore ?? 100) < 55
  ) {
    requirementsAndConsiderations.unshift(
      'Catatan Sumber Daya Terbatas: Bisa dimulai dari jasa keahlian kecil sesuai pesanan sebelum menambah alat atau modal.'
    );
  }

  const isMajorRelatedContext = Boolean(
    studentMajor &&
      candidate.contextRelatedMajors &&
      candidate.contextRelatedMajors.includes(studentMajor as never)
  );

  return {
    candidate,
    matchScore,
    matchSufficiency,
    confidenceLevel,
    dimensionFitBreakdown: preliminaryBreakdown,
    skillAlignment,
    reasonsConsidered,
    supportingQuestionEvidence: supportingQuestionEvidence.slice(0, 6),
    mismatchedOrUnknownAspects,
    developableSkills: candidate.developableSkills,
    requirementsAndConsiderations,
    isMajorRelatedContext
  };
}

function computeTieBreakerScore(r: CandidateMatchResult): number {
  const weightedFit = Object.values(r.dimensionFitBreakdown).reduce((sum, d) => {
    if (!d.includedInCalculation || d.dimensionFitScore === null) return sum;
    return sum + d.dimensionFitScore * d.effectiveWeightShare;
  }, 0);
  return weightedFit + r.supportingQuestionEvidence.length * 1.5;
}

function sortCandidateResults(results: CandidateMatchResult[]): CandidateMatchResult[] {
  return [...results].sort((a, b) => {
    if (a.matchScore === null && b.matchScore === null) {
      return a.candidate.id.localeCompare(b.candidate.id);
    }
    if (a.matchScore === null) return 1;
    if (b.matchScore === null) return -1;
    if (b.matchScore !== a.matchScore) {
      return b.matchScore - a.matchScore;
    }
    const tieDiff = computeTieBreakerScore(b) - computeTieBreakerScore(a);
    if (Math.abs(tieDiff) > 0.001) {
      return tieDiff;
    }
    return a.candidate.id.localeCompare(b.candidate.id);
  });
}

/**
 * Main Phase 5 Recommendation Matching Engine entry point.
 * Produces deterministic, evidence-based candidate matching across all four
 * student paths (`bekerja`, `kuliah`, `wirausaha`, `bingung`) without bias from
 * student major or initial path selection.
 */
export function matchStudentRecommendations(
  input: RecommendationMatchingInput
): RecommendationMatchingOutput {
  const { profileAssessment, initialDirection, studentMajor = '' } = input;

  let uniqueCandidates: RecommendationCandidate[];
  let hadDuplicates = false;
  let excludedUnverifiedCount = 0;

  if (input.candidates !== undefined) {
    const { eligible, report } = validateCatalogDataset(input.candidates);
    uniqueCandidates = eligible;
    hadDuplicates = report.duplicateIds.length > 0;
    excludedUnverifiedCount = report.excludedUnverifiedIds.length;
  } else {
    const resolved = resolveActiveCatalog();
    uniqueCandidates = resolved.eligibleCandidates;
    hadDuplicates = resolved.validationReport.duplicateIds.length > 0;
    excludedUnverifiedCount = resolved.validationReport.excludedUnverifiedIds.length;
  }

  const catalogMode = inferCatalogMode(uniqueCandidates);
  const catalogSummary = summarizeCatalogAvailability(uniqueCandidates, excludedUnverifiedCount);
  const uniqueQuestionEvidence = collectUniqueQuestionEvidence(profileAssessment);

  const evaluated = uniqueCandidates.map((cand) =>
    evaluateSingleCandidate(cand, profileAssessment, uniqueQuestionEvidence, studentMajor)
  );

  const crossPathExplorations: Record<RecommendationPathCategory, CandidateMatchResult[]> = {
    bekerja: sortCandidateResults(evaluated.filter((r) => r.candidate.pathCategory === 'bekerja')),
    kuliah: sortCandidateResults(evaluated.filter((r) => r.candidate.pathCategory === 'kuliah')),
    wirausaha: sortCandidateResults(
      evaluated.filter((r) => r.candidate.pathCategory === 'wirausaha')
    )
  };

  const exploratoryMode = initialDirection === 'bingung' || initialDirection === null;

  let activePathRecommendations: CandidateMatchResult[];
  if (exploratoryMode) {
    // Select balanced exploratory top candidates from all 3 pathways (top 2 per path, sorted fairly),
    // then append the remaining ranked cross-path candidates so students can explore further via "Lihat Rekomendasi Lainnya"
    const exploratoryTop = sortCandidateResults([
      ...crossPathExplorations.bekerja.slice(0, 2),
      ...crossPathExplorations.kuliah.slice(0, 2),
      ...crossPathExplorations.wirausaha.slice(0, 2)
    ]);
    const topIds = new Set(exploratoryTop.map((item) => item.candidate.id));
    const remainingPool = sortCandidateResults([
      ...crossPathExplorations.bekerja,
      ...crossPathExplorations.kuliah,
      ...crossPathExplorations.wirausaha
    ]).filter((item) => !topIds.has(item.candidate.id));
    activePathRecommendations = [...exploratoryTop, ...remainingPool];
  } else {
    activePathRecommendations = crossPathExplorations[initialDirection];
  }

  // Overall matching sufficiency & honest uncertainty acknowledgment
  let overallMatchingSufficiency: MatchingSufficiencyStatus = 'memadai';
  let overallUncertaintyNote: string | null = null;

  const hasAnySufficientCandidate = evaluated.some((r) => r.matchSufficiency !== 'belum_cukup');
  const isExploratoryDominant =
    profileAssessment.dimensions.minat.primaryTendency?.id === 'minat_eksploratif';
  const topActiveScore = activePathRecommendations[0]?.matchScore ?? 0;

  if (uniqueCandidates.length === 0) {
    overallMatchingSufficiency = 'belum_cukup';
    overallUncertaintyNote =
      'Katalog kandidat yang memenuhi syarat verifikasi sedang dikembangkan atau belum tersedia. Sistem tidak memaksakan rekomendasi maupun nilai skor palsu.';
  } else if (!hasAnySufficientCandidate || profileAssessment.overallSufficiency === 'belum_cukup') {
    overallMatchingSufficiency = 'belum_cukup';
    overallUncertaintyNote =
      'Bukti jawaban belum mencukupi untuk menyimpulkan kecocokan bidang secara akurat. Lengkapi lebih banyak pertanyaan agar gambaran minat, kemampuan, dan kesiapan dapat terbaca.';
  } else if (profileAssessment.overallSufficiency === 'terbatas') {
    overallMatchingSufficiency = 'terbatas';
    overallUncertaintyNote =
      'Sebagian dimensi profil masih memiliki bukti terbatas, sehingga peringkat kandidat bersifat indikatif awal dan dapat berubah jika ada jawaban tambahan.';
  } else if (exploratoryMode) {
    overallUncertaintyNote = isExploratoryDominant
      ? 'Pola jawabanmu saat ini masih sangat eksploratif. Daftar lintas jalur di bawah disajikan sebagai bahan penjajakan awal, bukan keputusan final.'
      : 'Karena kamu memilih jalur Masih Bingung, sistem menampilkan kandidat teratas lintas Bekerja, Kuliah, dan Wirausaha untuk membantu membandingkan opsi secara terbuka.';
  } else if (
    isExploratoryDominant ||
    profileAssessment.overallConfidenceScore < 60 ||
    topActiveScore < 62
  ) {
    overallUncertaintyNote =
      'Pola jawaban saat ini belum menunjukkan kecenderungan dominan yang kuat (eksploratif/berimbang), sehingga kecocokan kandidat bersifat penjajakan awal dan layak dibandingkan lintas jalur.';
  }

  return {
    ruleVersion: RECOMMENDATION_MATCHING_RULE_VERSION,
    generatedAt: new Date().toISOString(),
    catalogMode,
    catalogSummary,
    selectedInitialDirection: initialDirection,
    exploratoryMode,
    overallMatchingSufficiency,
    overallUncertaintyNote,
    activePathRecommendations,
    crossPathExplorations,
    auditMetadata: {
      profileRuleVersion: profileAssessment.ruleVersion,
      validAnsweredCount: profileAssessment.validAnsweredCount,
      majorRecordedWithoutBias: studentMajor,
      directionRecordedWithoutBias: initialDirection,
      candidateCountEvaluated: uniqueCandidates.length,
      duplicateCandidateIdsDetected: hadDuplicates
    }
  };
}
