/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 4: Deterministic, Transparent Profile Scoring Engine
 *
 * Pure rule-based scoring service with zero dependency on UI, external AI APIs,
 * student major, or initial path preference. Produces 6 normalized profile
 * dimensions with evidence sufficiency, confidence levels, skill maturity
 * distinction, and complete audit traceability.
 */

import { QUESTION_MAP } from '../data/questionBank';
import {
  CATEGORY_DIMENSION_RELEVANCE,
  DIMENSION_METADATA_MAP,
  DIMENSION_TENDENCY_RULES,
  OPTION_DIMENSION_CALIBRATION,
  OPTION_SKILL_MATURITY_MAP,
  PROFILE_DIMENSIONS,
  PROFILE_SCORING_RULE_VERSION,
  QUESTION_DIMENSION_RELEVANCE_OVERRIDES,
  SIGNAL_DIMENSION_STRENGTH,
  SUFFICIENCY_THRESHOLDS
} from '../data/scoringRules';
import {
  AssessmentIndicator,
  CareerDomainId,
  QuizOption,
  QuizQuestion,
  StudentQuizAnswer
} from '../types/assessment';
import {
  ConfidenceLevel,
  CustomOtherAnswerRecord,
  DimensionScoreResult,
  EvidenceSufficiencyStatus,
  FlexibleResponseSummary,
  IndicatorContribution,
  ProfileDimensionId,
  QuestionEvidenceRecord,
  ScoringInput,
  SkillEvidenceItem,
  SkillMaturityClassification,
  SkillProfileBreakdown,
  StudentProfileAssessment,
  TendencyScore
} from '../types/scoring';

const MIN_ADAPTIVE_COMPLETION_QUESTIONS = 8;

const ALL_INDICATORS: AssessmentIndicator[] = [
  'technical_affinity',
  'creative_expression',
  'analytical_depth',
  'hands_on_practical',
  'interpersonal_social',
  'enterprising_business',
  'autonomy_independent',
  'structured_procedural',
  'career_urgency',
  'academic_aspiration',
  'exploratory_open'
];

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

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
}

export function isNonStandardOption(option: QuizOption | undefined | null): boolean {
  if (!option) return false;
  return (
    option.optionKind === 'other' ||
    option.optionKind === 'none_fit' ||
    option.optionKind === 'dont_know'
  );
}

/**
 * Validates, cleans, and deduplicates submitted answers so that:
 * 1. Skipped questions & neutral options (`other`, `none_fit`, `dont_know`) are tracked cleanly
 *    without entering numeric dimension denominators or faking domain interests.
 * 2. Incomplete or invalid entries are rejected cleanly.
 * 3. Navigating back or resubmitting never double-counts the same questionId.
 * 4. If an active adaptive sequence is supplied, orphaned answers outside that sequence are excluded.
 */
export function validateAndDeduplicateAnswers(
  rawAnswers: Record<string, StudentQuizAnswer> | StudentQuizAnswer[],
  plannedSequence?: string[]
): {
  validAnswers: Array<{ answer: StudentQuizAnswer; question: QuizQuestion; option: QuizOption }>;
  totalSubmitted: number;
  rejectedEntries: Array<{ questionId: string; reason: string }>;
  flexibleSummary: {
    skippedQuestionIds: string[];
    dontKnowCount: number;
    noneFitCount: number;
    otherCustomAnswers: CustomOtherAnswerRecord[];
  };
} {
  const entries: StudentQuizAnswer[] = Array.isArray(rawAnswers)
    ? rawAnswers
    : Object.values(rawAnswers || {});

  const allowedSequenceSet =
    plannedSequence && plannedSequence.length > 0 ? new Set(plannedSequence) : null;

  const dedupMap = new Map<string, StudentQuizAnswer>();
  const rejectedEntries: Array<{ questionId: string; reason: string }> = [];

  for (const item of entries) {
    if (!item || typeof item.questionId !== 'string' || !item.questionId.trim()) {
      rejectedEntries.push({ questionId: 'unknown', reason: 'ID pertanyaan kosong atau tidak valid' });
      continue;
    }

    const isSkipped = Boolean(item.skipped) || item.responseMode === 'skipped';
    if (!isSkipped && (typeof item.selectedOptionId !== 'string' || !item.selectedOptionId.trim())) {
      rejectedEntries.push({
        questionId: item.questionId,
        reason: 'Jawaban belum lengkap (opsi belum dipilih)'
      });
      continue;
    }

    // Deduplicate by questionId (keep latest entry if array had duplicates)
    dedupMap.set(item.questionId, item);
  }

  const validAnswers: Array<{ answer: StudentQuizAnswer; question: QuizQuestion; option: QuizOption }> = [];
  const skippedQuestionIds: string[] = [];
  let dontKnowCount = 0;
  let noneFitCount = 0;
  const otherCustomAnswers: CustomOtherAnswerRecord[] = [];

  for (const [questionId, answer] of dedupMap.entries()) {
    if (allowedSequenceSet && !allowedSequenceSet.has(questionId)) {
      rejectedEntries.push({
        questionId,
        reason: 'Pertanyaan tidak termasuk dalam urutan sesi aktif peserta'
      });
      continue;
    }

    const question = QUESTION_MAP[questionId];
    if (!question) {
      rejectedEntries.push({
        questionId,
        reason: 'Pertanyaan tidak ditemukan dalam bank soal'
      });
      continue;
    }

    if (Boolean(answer.skipped) || answer.responseMode === 'skipped') {
      skippedQuestionIds.push(questionId);
      continue;
    }

    const option = question.options.find((opt) => opt.id === answer.selectedOptionId);
    if (!option) {
      rejectedEntries.push({
        questionId,
        reason: `Opsi '${answer.selectedOptionId}' tidak valid untuk pertanyaan ${questionId}`
      });
      continue;
    }

    if (option.optionKind === 'dont_know') {
      dontKnowCount += 1;
      continue;
    }

    if (option.optionKind === 'none_fit') {
      noneFitCount += 1;
      continue;
    }

    if (option.optionKind === 'other') {
      const cleanedCustom = (answer.customText || '').trim();
      otherCustomAnswers.push({
        questionId,
        questionText: question.question,
        optionLabel: option.label,
        customText: cleanedCustom || '(Dipilih Lainnya tanpa catatan teks)'
      });
      continue;
    }

    validAnswers.push({ answer, question, option });
  }

  // Deterministic ordering by sequence if provided, else by questionId
  if (plannedSequence && plannedSequence.length > 0) {
    const orderIndex = new Map<string, number>();
    plannedSequence.forEach((id, idx) => orderIndex.set(id, idx));
    validAnswers.sort(
      (a, b) => (orderIndex.get(a.question.id) ?? 999) - (orderIndex.get(b.question.id) ?? 999)
    );
  } else {
    validAnswers.sort((a, b) => a.question.id.localeCompare(b.question.id));
  }

  return {
    validAnswers,
    totalSubmitted: entries.length,
    rejectedEntries,
    flexibleSummary: {
      skippedQuestionIds,
      dontKnowCount,
      noneFitCount,
      otherCustomAnswers
    }
  };
}

/**
 * Computes calibrated evidence intensity (0..1) of an option for a given dimension.
 * Uses explicit semantic calibration when defined, otherwise takes the strongest
 * single relevant indicator without double-counting co-occurring tags.
 */
function computeOptionEvidenceFactor(
  questionId: string,
  option: QuizOption,
  dimensionId: ProfileDimensionId
): number {
  const calibrated = OPTION_DIMENSION_CALIBRATION[`${questionId}:${option.id}`]?.[dimensionId];
  if (typeof calibrated === 'number') {
    return clamp(calibrated, 0, 1);
  }

  const weights = option.signals
    .map((sig) => SIGNAL_DIMENSION_STRENGTH[sig]?.[dimensionId] ?? 0)
    .filter((w) => w > 0);

  if (weights.length === 0) return 0;
  return clamp(Math.max(...weights), 0, 1);
}

/**
 * Determines the strict relevance weight of a question for a specific dimension.
 * Uses explicit question-level overrides first, then primary category relevance,
 * preventing unrelated categories from leaking into skill mastery or readiness.
 */
function getQuestionRelevanceWeight(
  question: QuizQuestion,
  dimensionId: ProfileDimensionId
): number {
  const overrideMap = QUESTION_DIMENSION_RELEVANCE_OVERRIDES[question.id];
  if (overrideMap) {
    return overrideMap[dimensionId] ?? 0;
  }

  return CATEGORY_DIMENSION_RELEVANCE[question.category]?.[dimensionId] ?? 0;
}

/**
 * Determines skill maturity classification and fallback factor for `kemampuan_saat_ini`.
 * Note: when OPTION_DIMENSION_CALIBRATION already defines an explicit factor for the option,
 * that calibrated factor already incorporates maturity so it is not penalized twice.
 */
function getSkillMaturityDetails(
  questionId: string,
  option: QuizOption,
  dimensionId: ProfileDimensionId
): { factor: number; classification?: SkillMaturityClassification; summaryLabel?: string } {
  if (dimensionId !== 'kemampuan_saat_ini') {
    return { factor: 1.0 };
  }

  const key = `${questionId}:${option.id}`;
  const mapped = OPTION_SKILL_MATURITY_MAP[key];
  const hasExplicitCalibratedScore =
    typeof OPTION_DIMENSION_CALIBRATION[key]?.kemampuan_saat_ini === 'number';

  if (mapped) {
    if (hasExplicitCalibratedScore) {
      return {
        factor: 1.0,
        classification: mapped.classification,
        summaryLabel: mapped.summaryLabel
      };
    }

    switch (mapped.classification) {
      case 'possessed_skill':
      case 'possessed_non_career':
        return { factor: 1.0, classification: mapped.classification, summaryLabel: mapped.summaryLabel };
      case 'learning_goal':
        return { factor: 0.5, classification: 'learning_goal', summaryLabel: mapped.summaryLabel };
      case 'developing_area':
        return { factor: 0.28, classification: 'developing_area', summaryLabel: mapped.summaryLabel };
      default:
        return { factor: 0.75, classification: 'neutral', summaryLabel: mapped.summaryLabel };
    }
  }

  return { factor: hasExplicitCalibratedScore ? 1.0 : 0.75, classification: 'neutral' };
}

/**
 * Evaluates evidence sufficiency using both question count and effective weighted coverage.
 */
export function evaluateEvidenceSufficiency(
  evidenceCount: number,
  effectiveEvidenceWeight: number
): EvidenceSufficiencyStatus {
  if (
    evidenceCount >= SUFFICIENCY_THRESHOLDS.CUKUP_MIN_EVIDENCE_COUNT &&
    effectiveEvidenceWeight >= SUFFICIENCY_THRESHOLDS.CUKUP_MIN_EFFECTIVE_WEIGHT
  ) {
    return 'cukup';
  }

  if (
    evidenceCount >= SUFFICIENCY_THRESHOLDS.TERBATAS_MIN_EVIDENCE_COUNT ||
    effectiveEvidenceWeight >= SUFFICIENCY_THRESHOLDS.TERBATAS_MIN_EFFECTIVE_WEIGHT
  ) {
    return 'terbatas';
  }

  return 'belum_cukup';
}

/**
 * Builds normalized sub-tendency breakdown within a dimension from its evidence records.
 */
function computeDimensionTendencies(
  dimensionId: ProfileDimensionId,
  evidenceRecords: QuestionEvidenceRecord[]
): TendencyScore[] {
  const rules = DIMENSION_TENDENCY_RULES[dimensionId] || [];
  if (evidenceRecords.length === 0 || rules.length === 0) return [];

  const rawByTendency = new Map<string, number>();
  for (const rule of rules) {
    rawByTendency.set(rule.id, 0);
  }

  for (const rec of evidenceRecords) {
    const activeSignals = rec.contributingIndicators.map((c) => c.indicator);
    const matchedRules = rules.filter((rule) =>
      rule.indicators.some((ind) => activeSignals.includes(ind))
    );

    if (matchedRules.length === 0) continue;

    // Split question weight evenly across matched tendencies in this question to avoid double counting
    const sharePerRule = rec.categoryRelevanceWeight / matchedRules.length;
    for (const rule of matchedRules) {
      rawByTendency.set(rule.id, (rawByTendency.get(rule.id) || 0) + sharePerRule);
    }
  }

  const totalRaw = Array.from(rawByTendency.values()).reduce((sum, v) => sum + v, 0);
  if (totalRaw <= 0) return [];

  const result: TendencyScore[] = rules
    .map((rule) => {
      const rawWeight = round2(rawByTendency.get(rule.id) || 0);
      return {
        id: rule.id,
        label: rule.label,
        rawWeight,
        normalizedPercentage: Math.round((rawWeight / totalRaw) * 100)
      };
    })
    .filter((t) => t.rawWeight > 0)
    .sort((a, b) => b.rawWeight - a.rawWeight);

  return result;
}

/**
 * Computes confidence score (0-100) and level (`tinggi`, `sedang`, `rendah`)
 * based on evidence coverage, tendency coherence (supporting valid dual interests
 * without over-penalizing), and answer dispersion (penalizing contradictory swings).
 */
function computeConfidence(
  sufficiencyStatus: EvidenceSufficiencyStatus,
  evidenceCount: number,
  effectiveEvidenceWeight: number,
  tendencies: TendencyScore[],
  evidenceRecords: QuestionEvidenceRecord[]
): { confidenceScore: number; confidenceLevel: ConfidenceLevel } {
  if (evidenceCount === 0) {
    return { confidenceScore: 0, confidenceLevel: 'rendah' };
  }

  // Up to 65 points from weighted evidence coverage
  const coveragePoints = Math.min(1, effectiveEvidenceWeight / 3.8) * 65;

  // Up to 35 points from pattern coherence minus contradictory swing dispersion
  let consistencyPoints = 0;
  let dispersionPenalty = 0;
  if (evidenceCount >= 2 && tendencies.length > 0) {
    const top1Share = tendencies[0].normalizedPercentage / 100;
    const top2Share =
      tendencies.length > 1
        ? (tendencies[0].normalizedPercentage + tendencies[1].normalizedPercentage) / 100
        : top1Share;

    // Coherent single OR balanced dual focus yields strong coherence; fragmented 4-5 way split lowers it
    const coherenceFactor = Math.max(top1Share, top2Share * 0.85);
    const coherencePoints = Math.min(25, Math.round(coherenceFactor * 28));

    // Measure dispersion of evidence intensity across answers in this dimension (0..~0.35)
    const ratios = evidenceRecords.map((r) =>
      r.maxContribution > 0 ? r.rawContribution / r.maxContribution : 0
    );
    const mean = ratios.reduce((s, v) => s + v, 0) / ratios.length;
    const variance =
      ratios.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / ratios.length;
    const stdDev = Math.sqrt(variance);

    // Reward stable answers and meaningfully penalize contradictory high/low swings
    const stabilityBonus = Math.max(0, Math.round((1 - Math.min(1, stdDev / 0.25)) * 10));
    dispersionPenalty = stdDev > 0.17 ? Math.round((stdDev - 0.17) * 180) : 0;

    consistencyPoints = Math.max(0, coherencePoints + stabilityBonus);
  }

  let confidenceScore = clamp(
    Math.round(coveragePoints + consistencyPoints - dispersionPenalty),
    0,
    100
  );
  let confidenceLevel: ConfidenceLevel = 'rendah';

  if (sufficiencyStatus === 'belum_cukup') {
    confidenceScore = Math.min(confidenceScore, 35);
    confidenceLevel = 'rendah';
  } else if (sufficiencyStatus === 'terbatas') {
    confidenceScore = Math.min(confidenceScore, 65);
    confidenceLevel = confidenceScore >= 40 ? 'sedang' : 'rendah';
  } else {
    confidenceLevel =
      confidenceScore >= 72 ? 'tinggi' : confidenceScore >= 45 ? 'sedang' : 'rendah';
  }

  return { confidenceScore, confidenceLevel };
}

function buildTransparencyNote(
  dimensionLabel: string,
  normalizedScore: number | null,
  evidenceCount: number,
  effectiveEvidenceWeight: number,
  sufficiencyStatus: EvidenceSufficiencyStatus,
  confidenceLevel: ConfidenceLevel,
  primaryTendency: TendencyScore | null
): string {
  if (evidenceCount === 0 || normalizedScore === null) {
    return `Belum ada pertanyaan valid yang memberi bukti untuk dimensi ${dimensionLabel}, sehingga nilainya belum dapat disimpulkan.`;
  }

  if (sufficiencyStatus === 'belum_cukup') {
    return `Bukti untuk ${dimensionLabel} belum cukup (${evidenceCount} pertanyaan, bobot ${effectiveEvidenceWeight}). Skor tidak disimpulkan agar tidak keliru menafsirkan keterbatasan data sebagai rendahnya potensi.`;
  }

  if (sufficiencyStatus === 'terbatas') {
    const tendText = primaryTendency ? ` Indikasi awal condong ke ${primaryTendency.label}.` : '';
    return `Bukti untuk ${dimensionLabel} masih terbatas (${evidenceCount} pertanyaan, bobot ${effectiveEvidenceWeight}).${tendText} Tambahan jawaban akan memperjelas gambaran dimensi ini.`;
  }

  const consistencyNote =
    confidenceLevel === 'rendah' || confidenceLevel === 'sedang'
      ? ' Jawaban menunjukkan variasi sinyal atau sinyal campuran.'
      : '';
  const tendText = primaryTendency
    ? ` Kecenderungan paling menonjol: ${primaryTendency.label} (${primaryTendency.normalizedPercentage}%).`
    : '';
  return `Dihitung dari ${evidenceCount} pertanyaan relevan (bobot efektif ${effectiveEvidenceWeight}).${tendText}${consistencyNote}`;
}

/**
 * Evaluates a single dimension deterministically from validated answers.
 */
function calculateDimensionResult(
  dimensionId: ProfileDimensionId,
  validAnswers: Array<{ answer: StudentQuizAnswer; question: QuizQuestion; option: QuizOption }>
): DimensionScoreResult {
  const meta = DIMENSION_METADATA_MAP[dimensionId];
  const evidenceRecords: QuestionEvidenceRecord[] = [];

  for (const { question, option } of validAnswers) {
    const relevance = getQuestionRelevanceWeight(question, dimensionId);
    if (relevance <= 0) continue;

    // Normalize against theoretical ceiling (relevance * 1.0) so adaptive sequences remain fair
    // and strong options produce realistic ~80-90 scores instead of compressing to 99-100.
    const maxContribution = relevance;
    const evidenceFactor = computeOptionEvidenceFactor(question.id, option, dimensionId);
    const selectedMaturity = getSkillMaturityDetails(question.id, option, dimensionId);
    const effectiveFactor = clamp(evidenceFactor * selectedMaturity.factor, 0, 1);
    const rawContribution = relevance * effectiveFactor;

    const contributingIndicators: IndicatorContribution[] = option.signals.map((sig) => ({
      indicator: sig,
      weight: round2(SIGNAL_DIMENSION_STRENGTH[sig]?.[dimensionId] ?? 0)
    }));

    evidenceRecords.push({
      questionId: question.id,
      questionText: question.question,
      questionCategory: question.category,
      selectedOptionId: option.id,
      selectedOptionLabel: option.label,
      contributingIndicators,
      categoryRelevanceWeight: round2(relevance),
      maturityFactor: round2(selectedMaturity.factor),
      rawContribution: round2(rawContribution),
      maxContribution: round2(maxContribution),
      skillClassification: selectedMaturity.classification
    });
  }

  const evidenceCount = evidenceRecords.length;
  const effectiveEvidenceWeight = round2(
    evidenceRecords.reduce((sum, r) => sum + r.categoryRelevanceWeight, 0)
  );
  const rawWeightedScore = round2(
    evidenceRecords.reduce((sum, r) => sum + r.rawContribution, 0)
  );
  const maxPossibleWeightedScore = round2(
    evidenceRecords.reduce((sum, r) => sum + r.maxContribution, 0)
  );

  const normalizedScore =
    evidenceCount === 0 || maxPossibleWeightedScore <= 0
      ? null
      : clamp(Math.round((rawWeightedScore / maxPossibleWeightedScore) * 100), 0, 100);

  const sufficiencyStatus = evaluateEvidenceSufficiency(evidenceCount, effectiveEvidenceWeight);
  const tendencies = computeDimensionTendencies(dimensionId, evidenceRecords);
  const primaryTendency = tendencies.length > 0 ? tendencies[0] : null;
  const { confidenceScore, confidenceLevel } = computeConfidence(
    sufficiencyStatus,
    evidenceCount,
    effectiveEvidenceWeight,
    tendencies,
    evidenceRecords
  );

  const transparencyNote = buildTransparencyNote(
    meta.label,
    normalizedScore,
    evidenceCount,
    effectiveEvidenceWeight,
    sufficiencyStatus,
    confidenceLevel,
    primaryTendency
  );

  return {
    dimensionId,
    code: meta.code,
    label: meta.label,
    description: meta.description,
    normalizedScore,
    rawWeightedScore,
    maxPossibleWeightedScore,
    evidenceCount,
    effectiveEvidenceWeight,
    sufficiencyStatus,
    confidenceScore,
    confidenceLevel,
    tendencies,
    primaryTendency,
    evidenceRecords,
    transparencyNote,
    ruleVersion: PROFILE_SCORING_RULE_VERSION
  };
}

/**
 * Extracts explicit distinction between skills currently possessed vs skills the participant
 * wants to learn/develop vs skills explicitly marked as not desired for main career,
 * strictly grounded in answered options.
 */
function buildSkillProfileBreakdown(
  validAnswers: Array<{ answer: StudentQuizAnswer; question: QuizQuestion; option: QuizOption }>
): SkillProfileBreakdown {
  const possessedSkills: SkillEvidenceItem[] = [];
  const learningGoals: SkillEvidenceItem[] = [];
  const developingAreas: SkillEvidenceItem[] = [];
  const nonCareerPossessedSkills: SkillEvidenceItem[] = [];

  for (const { question, option } of validAnswers) {
    const key = `${question.id}:${option.id}`;
    const mapped = OPTION_SKILL_MATURITY_MAP[key];
    if (!mapped) continue;

    const item: SkillEvidenceItem = {
      questionId: question.id,
      optionId: option.id,
      summaryLabel: mapped.summaryLabel,
      sourceQuestion: question.question,
      indicators: [...option.signals],
      classification: mapped.classification
    };

    if (mapped.classification === 'possessed_skill') {
      possessedSkills.push(item);
    } else if (mapped.classification === 'learning_goal') {
      learningGoals.push(item);
    } else if (mapped.classification === 'developing_area') {
      developingAreas.push(item);
    } else if (mapped.classification === 'possessed_non_career') {
      nonCareerPossessedSkills.push(item);
    }
  }

  return {
    possessedSkills,
    learningGoals,
    developingAreas,
    nonCareerPossessedSkills
  };
}

/**
 * Main entry point for Phase 4 / 7.4 Profile Scoring Engine.
 * Deterministically evaluates 6 profile dimensions from valid student quiz answers,
 * keeping skipped, `dont_know`, `none_fit`, and custom `other` responses strictly neutral.
 */
export function evaluateStudentProfile(input: ScoringInput): StudentProfileAssessment {
  const { validAnswers, totalSubmitted, rejectedEntries, flexibleSummary } =
    validateAndDeduplicateAnswers(input.answers, input.plannedSequence);

  // Initialize indicator totals cleanly
  const indicatorTotals = ALL_INDICATORS.reduce((acc, ind) => {
    acc[ind] = 0;
    return acc;
  }, {} as Record<AssessmentIndicator, number>);

  // Initialize career domain affinities cleanly
  const domainAffinities = ALL_CAREER_DOMAINS.reduce((acc, dom) => {
    acc[dom] = 0;
    return acc;
  }, {} as Record<CareerDomainId, number>);

  for (const { question, option } of validAnswers) {
    const mappedSkill = OPTION_SKILL_MATURITY_MAP[`${question.id}:${option.id}`];
    // Ability without career desire MUST NOT artificially boost career interest indicators/domains
    if (mappedSkill?.classification === 'possessed_non_career') {
      continue;
    }

    for (const sig of option.signals) {
      indicatorTotals[sig] = (indicatorTotals[sig] || 0) + 1;
    }
    if (option.domainSignals) {
      for (const [dom, weight] of Object.entries(option.domainSignals) as [
        CareerDomainId,
        number
      ][]) {
        if (typeof weight === 'number' && weight > 0) {
          domainAffinities[dom] = round2((domainAffinities[dom] || 0) + weight);
        }
      }
    }
  }

  // Evaluate all 6 dimensions
  const dimensionList: DimensionScoreResult[] = PROFILE_DIMENSIONS.map((meta) =>
    calculateDimensionResult(meta.id, validAnswers)
  );

  const dimensions = dimensionList.reduce((acc, res) => {
    acc[res.dimensionId] = res;
    return acc;
  }, {} as Record<ProfileDimensionId, DimensionScoreResult>);

  const skillProfile = buildSkillProfileBreakdown(validAnswers);

  const flexibleResponseSummary: FlexibleResponseSummary = {
    skippedQuestionIds: flexibleSummary.skippedQuestionIds,
    skippedCount: flexibleSummary.skippedQuestionIds.length,
    dontKnowCount: flexibleSummary.dontKnowCount,
    noneFitCount: flexibleSummary.noneFitCount,
    otherCustomAnswers: flexibleSummary.otherCustomAnswers,
    uncataloguedInterestsDetected: flexibleSummary.otherCustomAnswers.some((item) =>
      ['Q_HOB_01', 'Q_DOM_01', 'Q_HOB_04', 'Q_INT_01', 'Q_INT_02', 'Q_EXP_01', 'Q_EXP_13'].includes(item.questionId) ||
      item.questionId.startsWith('Q_BR_')
    ),
    careerAntiPreferences: (skillProfile.nonCareerPossessedSkills ?? []).map(
      (item) => item.summaryLabel
    )
  };

  // Compute overall sufficiency & confidence across all 6 dimensions
  const sufficiencyCounts = {
    cukup: dimensionList.filter((d) => d.sufficiencyStatus === 'cukup').length,
    terbatas: dimensionList.filter((d) => d.sufficiencyStatus === 'terbatas').length,
    belum_cukup: dimensionList.filter((d) => d.sufficiencyStatus === 'belum_cukup').length
  };

  let overallSufficiency: EvidenceSufficiencyStatus = 'cukup';
  if (sufficiencyCounts.belum_cukup >= 2 || validAnswers.length < 8) {
    overallSufficiency = 'belum_cukup';
  } else if (sufficiencyCounts.cukup < 5) {
    overallSufficiency = 'terbatas';
  }

  const overallConfidenceScore = clamp(
    Math.round(
      dimensionList.reduce((sum, d) => sum + d.confidenceScore, 0) / dimensionList.length
    ),
    0,
    100
  );

  const plannedCount = input.plannedSequence?.length ?? MIN_ADAPTIVE_COMPLETION_QUESTIONS;

  return {
    ruleVersion: PROFILE_SCORING_RULE_VERSION,
    evaluatedAt: new Date().toISOString(),
    isCompleteSession:
      validAnswers.length >= MIN_ADAPTIVE_COMPLETION_QUESTIONS &&
      validAnswers.length + flexibleResponseSummary.skippedCount >= plannedCount,
    totalSubmittedAnswers: totalSubmitted,
    validAnsweredCount: validAnswers.length,
    rejectedAnswerCount: rejectedEntries.length,
    dimensions,
    dimensionList,
    skillProfile,
    indicatorTotals,
    domainAffinities,
    flexibleResponseSummary,
    overallSufficiency,
    overallConfidenceScore,
    auditSummary: {
      usedQuestionIds: validAnswers.map((v) => v.question.id),
      rejectedEntries,
      directionRecordedWithoutBias: input.sessionContext?.initialDirection ?? null,
      majorRecordedWithoutBias: input.sessionContext?.major ?? ''
    }
  };
}

