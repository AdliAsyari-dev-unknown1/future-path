/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 4.1: Calibrated, Auditable Rule Tables for Profile Scoring Engine
 *
 * Every category weight, question-specific dimension relevance, option-level
 * semantic calibration, sufficiency threshold, and skill maturity classification
 * is explicitly defined here so that:
 * 1. Scores reflect true evidence (no blanket 90-100 inflation).
 * 2. Interest, Skill Mastery, Readiness, Thinking, Habits, and Environment
 *    are cleanly separated without cross-category leakage.
 * 3. Multi-signal options are never double-counted.
 * 4. Student major and initial direction never bias dimension scores.
 */

import { AssessmentIndicator, QuestionCategory } from '../types/assessment';
import {
  DimensionMetadata,
  ProfileDimensionId,
  SkillMaturityClassification
} from '../types/scoring';

export const PROFILE_SCORING_RULE_VERSION = '1.1.0';

export const SUFFICIENCY_THRESHOLDS = {
  CUKUP_MIN_EVIDENCE_COUNT: 3,
  CUKUP_MIN_EFFECTIVE_WEIGHT: 2.2,
  TERBATAS_MIN_EVIDENCE_COUNT: 2,
  TERBATAS_MIN_EFFECTIVE_WEIGHT: 1.1
} as const;

export const PROFILE_DIMENSIONS: DimensionMetadata[] = [
  {
    id: 'minat',
    code: 'A',
    label: 'Minat',
    description:
      'Menilai kekuatan serta kejelasan minat, rasa ingin tahu, dan dorongan topik yang ingin dipelajari atau dieksplorasi peserta.'
  },
  {
    id: 'gaya_berpikir',
    code: 'B',
    label: 'Gaya Berpikir',
    description:
      'Menilai pola berpikir dan cara peserta memahami serta memecahkan masalah (analitis, kreatif, sistematis, praktis, atau eksploratif).'
  },
  {
    id: 'kebiasaan',
    code: 'C',
    label: 'Kebiasaan',
    description:
      'Menilai konsistensi aktivitas kerja, kerapian prosedur, kemandirian tugas, dan pola kolaborasi sehari-hari.'
  },
  {
    id: 'kemampuan_saat_ini',
    code: 'D',
    label: 'Kemampuan Saat Ini',
    description:
      'Mengukur bukti keterampilan yang sudah benar-benar ditunjukkan saat ini, dipisahkan secara tegas dari keterampilan yang baru ingin dipelajari.'
  },
  {
    id: 'preferensi_lingkungan',
    code: 'E',
    label: 'Preferensi Lingkungan',
    description:
      'Menilai kejelasan dan kecocokan lingkungan belajar atau kerja yang disukai (mandiri, tim, bengkel/lapangan, teknis, atau studio kreatif).'
  },
  {
    id: 'kesiapan_praktis',
    code: 'F',
    label: 'Kesiapan Praktis',
    description:
      'Menilai kesiapan kondisi nyata seperti dukungan keluarga, dokumen, perangkat, jaringan, kesiapan fisik/mental, serta langkah awal yang telah disiapkan.'
  }
];

export const DIMENSION_METADATA_MAP: Record<ProfileDimensionId, DimensionMetadata> =
  PROFILE_DIMENSIONS.reduce((acc, dim) => {
    acc[dim.id] = dim;
    return acc;
  }, {} as Record<ProfileDimensionId, DimensionMetadata>);

/**
 * Primary category-to-dimension relevance mapping (strictly scoped so unrelated
 * categories do NOT leak into skill mastery, readiness, or interest).
 */
export const CATEGORY_DIMENSION_RELEVANCE: Record<
  QuestionCategory,
  Partial<Record<ProfileDimensionId, number>>
> = {
  interest_curiosity: {
    minat: 1.0
  },
  thinking_problem_solving: {
    gaya_berpikir: 1.0
  },
  habits_activities: {
    kebiasaan: 1.0
  },
  current_skills_learning: {
    kemampuan_saat_ini: 1.0
  },
  work_environment: {
    preferensi_lingkungan: 1.0
  },
  motivation_values: {
    minat: 0.75
  },
  practical_readiness: {
    kesiapan_praktis: 1.0
  }
};

/**
 * Explicit question-level relevance overrides for cross-dimension items that
 * genuinely contain direct evidence for another dimension (or zero evidence for
 * a category default, such as learning-preference items inside current_skills_learning).
 */
export const QUESTION_DIMENSION_RELEVANCE_OVERRIDES: Record<
  string,
  Partial<Record<ProfileDimensionId, number>>
> = {
  // Phase 7.1.1 Hobby-first opening, disambiguation & values
  Q_HOB_01: { minat: 1.0, preferensi_lingkungan: 0.45 },
  Q_BR_GAME_01: { minat: 0.95, gaya_berpikir: 0.65, kebiasaan: 0.45 },
  Q_BR_VIS_01: { minat: 0.95, gaya_berpikir: 0.6, preferensi_lingkungan: 0.45 },
  Q_BR_SOC_01: { minat: 0.95, kebiasaan: 0.65, preferensi_lingkungan: 0.5 },
  Q_BR_PRAC_01: { kebiasaan: 0.95, minat: 0.75, preferensi_lingkungan: 0.65 },
  Q_DOM_01: { minat: 1.0, gaya_berpikir: 0.55 },
  Q_BR_TECH_01: { minat: 1.0, gaya_berpikir: 0.55 },
  Q_BR_HUM_01: { minat: 1.0, gaya_berpikir: 0.55 },
  Q_BR_LIT_01: { minat: 1.0, gaya_berpikir: 0.55 },
  Q_BR_CARE_01: { minat: 1.0, preferensi_lingkungan: 0.5 },
  Q_BR_AGRO_01: { minat: 0.95, kebiasaan: 0.75, preferensi_lingkungan: 0.55 },
  Q_HOB_02: { kebiasaan: 1.0, gaya_berpikir: 0.55 },
  Q_HOB_03: { preferensi_lingkungan: 1.0, minat: 0.6 },
  Q_HOB_04: { kemampuan_saat_ini: 0, minat: 0.9, gaya_berpikir: 0.55 },
  Q_VAL_01: { preferensi_lingkungan: 0.95, kebiasaan: 0.7 },
  Q_VAL_02: { minat: 0.8, kesiapan_praktis: 0.65 },

  // Interest items with genuine troubleshooting / setting / prior experience / cognitive evidence
  Q_INT_03: { minat: 0.85, gaya_berpikir: 0.6, kemampuan_saat_ini: 0.75 },
  Q_INT_05: { minat: 1.0, preferensi_lingkungan: 0.45 },
  Q_INT_06: { minat: 0.9, gaya_berpikir: 0.55 },
  Q_INT_10: { minat: 0.85, kemampuan_saat_ini: 0.75 },

  // Habit items with genuine cognitive, interest, environment, skill, or physical readiness evidence
  Q_HAB_01: { kebiasaan: 1.0, gaya_berpikir: 0.5 },
  Q_HAB_03: { kebiasaan: 0.9, gaya_berpikir: 0.45, kemampuan_saat_ini: 0.65 },
  Q_HAB_04: { kebiasaan: 1.0, kesiapan_praktis: 0.45 },
  Q_HAB_05: { kebiasaan: 0.95, preferensi_lingkungan: 0.6, kemampuan_saat_ini: 0.45 },
  Q_HAB_06: { kebiasaan: 0.95, gaya_berpikir: 0.5 },
  Q_HAB_07: { kebiasaan: 0.9, minat: 0.6 },
  Q_HAB_09: { kebiasaan: 1.0, preferensi_lingkungan: 0.55 },
  Q_HAB_10: { kebiasaan: 0.75, preferensi_lingkungan: 0.65, kesiapan_praktis: 0.65 },
  Q_HAB_11: { kebiasaan: 0.85, minat: 0.65 },
  Q_HAB_12: { kebiasaan: 0.9, preferensi_lingkungan: 0.6 },

  // Thinking items with genuine procedural habit or presentation capability evidence
  Q_THK_05: { gaya_berpikir: 1.0, kebiasaan: 0.45 },
  Q_THK_06: { gaya_berpikir: 1.0, preferensi_lingkungan: 0.45 },
  Q_THK_07: { gaya_berpikir: 1.0, kebiasaan: 0.5 },
  Q_THK_08: { gaya_berpikir: 1.0, kebiasaan: 0.5 },
  Q_THK_11: { gaya_berpikir: 0.85, kemampuan_saat_ini: 0.65 },
  Q_THK_12: { gaya_berpikir: 1.0, kebiasaan: 0.5 },

  // Current Skills & Learning: separate learning style / attitude items from proven skill items
  Q_SKL_01: { kemampuan_saat_ini: 0, gaya_berpikir: 0.7, kebiasaan: 0.55, preferensi_lingkungan: 0.45 },
  Q_SKL_02: { kemampuan_saat_ini: 1.0, kebiasaan: 0.45 },
  Q_SKL_03: { kemampuan_saat_ini: 0.95, kebiasaan: 0.5, minat: 0.45 },
  Q_SKL_04: { kemampuan_saat_ini: 0.9, kebiasaan: 0.6, minat: 0.5 },
  Q_SKL_05: { kemampuan_saat_ini: 0, kesiapan_praktis: 0.75, minat: 0.45 },
  Q_SKL_06: { kemampuan_saat_ini: 1.0, preferensi_lingkungan: 0.45 },
  Q_SKL_07: { kemampuan_saat_ini: 0.95, gaya_berpikir: 0.45 },
  Q_SKL_08: { kemampuan_saat_ini: 0.9, kebiasaan: 0.5 },
  Q_SKL_09: { kemampuan_saat_ini: 1.0, preferensi_lingkungan: 0.45 },
  Q_SKL_10: { kemampuan_saat_ini: 1.0, kesiapan_praktis: 0.65 },
  Q_SKL_11: { kemampuan_saat_ini: 0.5, minat: 0.7 },
  Q_SKL_12: { kemampuan_saat_ini: 0.95, kebiasaan: 0.55, gaya_berpikir: 0.45 },
  Q_SKL_13: { kemampuan_saat_ini: 0.85, minat: 0 },

  // Work environment items with genuine habit or practical adaptability constraints
  Q_ENV_02: { preferensi_lingkungan: 1.0, kebiasaan: 0.45 },
  Q_ENV_03: { preferensi_lingkungan: 1.0, kesiapan_praktis: 0.55 },
  Q_ENV_05: { preferensi_lingkungan: 1.0, kebiasaan: 0.45 },
  Q_ENV_06: { preferensi_lingkungan: 0.9, kesiapan_praktis: 0.6 },
  Q_ENV_08: { preferensi_lingkungan: 0.9, kesiapan_praktis: 0.6 },
  Q_ENV_10: { preferensi_lingkungan: 1.0, kebiasaan: 0.45 },

  // Motivation items with practical commitment / environment relevance
  Q_MOT_03: { minat: 0.7, kesiapan_praktis: 0.6 },
  Q_MOT_04: { minat: 0.75, kesiapan_praktis: 0.5 },
  Q_MOT_07: { minat: 0.6, preferensi_lingkungan: 0.55, kesiapan_praktis: 0.6 },
  Q_MOT_09: { minat: 0.75, preferensi_lingkungan: 0.45 },
  Q_MOT_11: { minat: 0.7, kesiapan_praktis: 0.65 },

  // Practical readiness items with explicit current skill or work environment evidence
  Q_RDN_03: { kesiapan_praktis: 1.0, preferensi_lingkungan: 0.55 },
  Q_RDN_08: { kesiapan_praktis: 0.95, minat: 0.45 },
  Q_RDN_10: { kesiapan_praktis: 0.9, kemampuan_saat_ini: 0.85 },

  // Phase 7.7 Broad Everyday Exploration Questions
  Q_EXP_01: { minat: 1.0, kebiasaan: 0.45 },
  Q_EXP_02: { minat: 0.9, kebiasaan: 0.55 },
  Q_EXP_03: { preferensi_lingkungan: 1.0, minat: 0.5 },
  Q_EXP_04: { preferensi_lingkungan: 0.95, kebiasaan: 0.65 },
  Q_EXP_05: { preferensi_lingkungan: 0.9, minat: 0.6 },
  Q_EXP_06: { kebiasaan: 0.9, preferensi_lingkungan: 0.75 },
  Q_EXP_07: { gaya_berpikir: 1.0, kebiasaan: 0.45 },
  Q_EXP_08: { gaya_berpikir: 1.0, kebiasaan: 0.5 },
  Q_EXP_09: { minat: 0.75, preferensi_lingkungan: 0.65 },
  Q_EXP_10: { minat: 0.85, kesiapan_praktis: 0.55 },
  Q_EXP_11: { kesiapan_praktis: 0.95, minat: 0.6 },
  Q_EXP_12: { kesiapan_praktis: 0.95, minat: 0.45 },
  Q_EXP_13: { minat: 0.95, kesiapan_praktis: 0.45 }
};

/**
 * Calibrated baseline signal-to-dimension strength on [0, 1] when an option does
 * not require a finer semantic override. Max ideal ceiling is 1.0, while realistic
 * authentic single answers sit around 0.78–0.88 so profiles do not artificially peg 99–100.
 */
export const SIGNAL_DIMENSION_STRENGTH: Record<
  AssessmentIndicator,
  Partial<Record<ProfileDimensionId, number>>
> = {
  technical_affinity: {
    minat: 0.86,
    gaya_berpikir: 0.84,
    kebiasaan: 0.8,
    kemampuan_saat_ini: 0.84,
    preferensi_lingkungan: 0.84,
    kesiapan_praktis: 0.78
  },
  creative_expression: {
    minat: 0.86,
    gaya_berpikir: 0.85,
    kebiasaan: 0.78,
    kemampuan_saat_ini: 0.82,
    preferensi_lingkungan: 0.85,
    kesiapan_praktis: 0.72
  },
  analytical_depth: {
    minat: 0.84,
    gaya_berpikir: 0.88,
    kebiasaan: 0.8,
    kemampuan_saat_ini: 0.84,
    preferensi_lingkungan: 0.8,
    kesiapan_praktis: 0.76
  },
  hands_on_practical: {
    minat: 0.84,
    gaya_berpikir: 0.82,
    kebiasaan: 0.85,
    kemampuan_saat_ini: 0.84,
    preferensi_lingkungan: 0.85,
    kesiapan_praktis: 0.84
  },
  interpersonal_social: {
    minat: 0.84,
    gaya_berpikir: 0.78,
    kebiasaan: 0.84,
    kemampuan_saat_ini: 0.82,
    preferensi_lingkungan: 0.86,
    kesiapan_praktis: 0.76
  },
  enterprising_business: {
    minat: 0.86,
    gaya_berpikir: 0.84,
    kebiasaan: 0.84,
    kemampuan_saat_ini: 0.8,
    preferensi_lingkungan: 0.82,
    kesiapan_praktis: 0.82
  },
  autonomy_independent: {
    minat: 0.8,
    gaya_berpikir: 0.82,
    kebiasaan: 0.85,
    kemampuan_saat_ini: 0.78,
    preferensi_lingkungan: 0.86,
    kesiapan_praktis: 0.78
  },
  structured_procedural: {
    minat: 0.74,
    gaya_berpikir: 0.82,
    kebiasaan: 0.88,
    kemampuan_saat_ini: 0.76,
    preferensi_lingkungan: 0.84,
    kesiapan_praktis: 0.82
  },
  career_urgency: {
    minat: 0.78,
    gaya_berpikir: 0.74,
    kebiasaan: 0.8,
    kemampuan_saat_ini: 0.76,
    preferensi_lingkungan: 0.78,
    kesiapan_praktis: 0.86
  },
  academic_aspiration: {
    minat: 0.86,
    gaya_berpikir: 0.86,
    kebiasaan: 0.8,
    kemampuan_saat_ini: 0.74,
    preferensi_lingkungan: 0.82,
    kesiapan_praktis: 0.8
  },
  exploratory_open: {
    minat: 0.36,
    gaya_berpikir: 0.36,
    kebiasaan: 0.32,
    kemampuan_saat_ini: 0.24,
    preferensi_lingkungan: 0.34,
    kesiapan_praktis: 0.26
  }
};

/**
 * Option-level semantic calibration keyed by `${questionId}:${optionId}`.
 * Ensures options reflecting hesitation, lack of experience, conditional readiness,
 * low curiosity, or genuine skill mastery are scored accurately rather than inheriting
 * an inflated generic signal strength.
 */
export const OPTION_DIMENSION_CALIBRATION: Record<
  string,
  Partial<Record<ProfileDimensionId, number>>
> = {
  // --- PHASE 7.1.1 HOBBY-FIRST OPENING, BRANCHING & VALUES ---
  'Q_HOB_01:opt_1': { minat: 0.78, preferensi_lingkungan: 0.72 },
  'Q_HOB_01:opt_2': { minat: 0.84, preferensi_lingkungan: 0.8 },
  'Q_HOB_01:opt_3': { minat: 0.82, preferensi_lingkungan: 0.82 },
  'Q_HOB_01:opt_4': { minat: 0.84, preferensi_lingkungan: 0.84 },
  'Q_BR_GAME_01:opt_1': { minat: 0.82, gaya_berpikir: 0.74, kebiasaan: 0.78 },
  'Q_BR_GAME_01:opt_2': { minat: 0.86, gaya_berpikir: 0.88, kebiasaan: 0.8 },
  'Q_BR_GAME_01:opt_3': { minat: 0.84, gaya_berpikir: 0.86, kebiasaan: 0.84 },
  'Q_BR_GAME_01:opt_4': { minat: 0.86, gaya_berpikir: 0.82, kebiasaan: 0.84 },
  'Q_BR_VIS_01:opt_1': { minat: 0.86, gaya_berpikir: 0.82, preferensi_lingkungan: 0.84 },
  'Q_BR_VIS_01:opt_2': { minat: 0.86, gaya_berpikir: 0.8, preferensi_lingkungan: 0.82 },
  'Q_BR_VIS_01:opt_3': { minat: 0.84, gaya_berpikir: 0.82, preferensi_lingkungan: 0.82 },
  'Q_BR_VIS_01:opt_4': { minat: 0.84, gaya_berpikir: 0.84, preferensi_lingkungan: 0.84 },
  'Q_BR_SOC_01:opt_1': { minat: 0.86, kebiasaan: 0.84, preferensi_lingkungan: 0.84 },
  'Q_BR_SOC_01:opt_2': { minat: 0.86, kebiasaan: 0.84, preferensi_lingkungan: 0.82 },
  'Q_BR_SOC_01:opt_3': { minat: 0.86, kebiasaan: 0.82, preferensi_lingkungan: 0.84 },
  'Q_BR_SOC_01:opt_4': { minat: 0.84, kebiasaan: 0.86, preferensi_lingkungan: 0.84 },
  'Q_BR_PRAC_01:opt_1': { kebiasaan: 0.86, minat: 0.86, preferensi_lingkungan: 0.86 },
  'Q_BR_PRAC_01:opt_2': { kebiasaan: 0.88, minat: 0.84, preferensi_lingkungan: 0.86 },
  'Q_BR_PRAC_01:opt_3': { kebiasaan: 0.8, minat: 0.8, preferensi_lingkungan: 0.84 },
  'Q_BR_PRAC_01:opt_4': { kebiasaan: 0.84, minat: 0.86, preferensi_lingkungan: 0.84 },
  'Q_DOM_01:opt_1': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_DOM_01:opt_2': { minat: 0.86, gaya_berpikir: 0.86 },
  'Q_DOM_01:opt_3': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_DOM_01:opt_4': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_BR_TECH_01:opt_1': { minat: 0.88, gaya_berpikir: 0.88 },
  'Q_BR_TECH_01:opt_2': { minat: 0.88, gaya_berpikir: 0.84 },
  'Q_BR_TECH_01:opt_3': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_BR_TECH_01:opt_4': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_BR_HUM_01:opt_1': { minat: 0.88, gaya_berpikir: 0.88 },
  'Q_BR_HUM_01:opt_2': { minat: 0.88, gaya_berpikir: 0.86 },
  'Q_BR_HUM_01:opt_3': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_BR_HUM_01:opt_4': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_BR_LIT_01:opt_1': { minat: 0.88, gaya_berpikir: 0.86 },
  'Q_BR_LIT_01:opt_2': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_BR_LIT_01:opt_3': { minat: 0.88, gaya_berpikir: 0.84 },
  'Q_BR_LIT_01:opt_4': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_BR_CARE_01:opt_1': { minat: 0.88, preferensi_lingkungan: 0.84 },
  'Q_BR_CARE_01:opt_2': { minat: 0.88, preferensi_lingkungan: 0.86 },
  'Q_BR_CARE_01:opt_3': { minat: 0.88, preferensi_lingkungan: 0.84 },
  'Q_BR_CARE_01:opt_4': { minat: 0.84, preferensi_lingkungan: 0.84 },
  'Q_BR_AGRO_01:opt_1': { minat: 0.88, kebiasaan: 0.86, preferensi_lingkungan: 0.88 },
  'Q_BR_AGRO_01:opt_2': { minat: 0.88, kebiasaan: 0.86, preferensi_lingkungan: 0.86 },
  'Q_BR_AGRO_01:opt_3': { minat: 0.88, kebiasaan: 0.86, preferensi_lingkungan: 0.86 },
  'Q_BR_AGRO_01:opt_4': { minat: 0.86, kebiasaan: 0.86, preferensi_lingkungan: 0.86 },
  'Q_HOB_02:opt_1': { kebiasaan: 0.86, gaya_berpikir: 0.84 },
  'Q_HOB_02:opt_2': { kebiasaan: 0.82, gaya_berpikir: 0.8 },
  'Q_HOB_02:opt_3': { kebiasaan: 0.84, gaya_berpikir: 0.78 },
  'Q_HOB_02:opt_4': { kebiasaan: 0.86, gaya_berpikir: 0.84 },
  'Q_HOB_03:opt_1': { preferensi_lingkungan: 0.86, minat: 0.84 },
  'Q_HOB_03:opt_2': { preferensi_lingkungan: 0.86, minat: 0.84 },
  'Q_HOB_03:opt_3': { preferensi_lingkungan: 0.86, minat: 0.84 },
  'Q_HOB_03:opt_4': { preferensi_lingkungan: 0.84, minat: 0.84 },
  'Q_HOB_04:opt_1': { minat: 0.86, gaya_berpikir: 0.82 },
  'Q_HOB_04:opt_2': { minat: 0.86, gaya_berpikir: 0.82 },
  'Q_HOB_04:opt_3': { minat: 0.86, gaya_berpikir: 0.84 },
  'Q_HOB_04:opt_4': { minat: 0.84, gaya_berpikir: 0.78 },
  'Q_VAL_01:opt_1': { preferensi_lingkungan: 0.86, kebiasaan: 0.86 },
  'Q_VAL_01:opt_2': { preferensi_lingkungan: 0.76, kebiasaan: 0.74 },
  'Q_VAL_01:opt_3': { preferensi_lingkungan: 0.84, kebiasaan: 0.82 },
  'Q_VAL_01:opt_4': { preferensi_lingkungan: 0.36, kebiasaan: 0.36 },
  'Q_VAL_02:opt_1': { minat: 0.84, kesiapan_praktis: 0.84 },
  'Q_VAL_02:opt_2': { minat: 0.86, kesiapan_praktis: 0.82 },
  'Q_VAL_02:opt_3': { minat: 0.84, kesiapan_praktis: 0.82 },
  'Q_VAL_02:opt_4': { minat: 0.84, kesiapan_praktis: 0.76 },

  // --- INTEREST & CURIOSITY ---
  'Q_INT_02:opt_4': { minat: 0.48 },
  'Q_INT_03:opt_1': { minat: 0.84, gaya_berpikir: 0.82, kemampuan_saat_ini: 0.84 },
  'Q_INT_03:opt_2': { minat: 0.88, gaya_berpikir: 0.88, kemampuan_saat_ini: 0.88 },
  'Q_INT_03:opt_3': { minat: 0.78, gaya_berpikir: 0.76, kemampuan_saat_ini: 0.62 },
  'Q_INT_03:opt_4': { minat: 0.34, gaya_berpikir: 0.34, kemampuan_saat_ini: 0.22 },
  'Q_INT_04:opt_4': { minat: 0.56 },
  'Q_INT_06:opt_4': { minat: 0.48, gaya_berpikir: 0.52 },
  'Q_INT_07:opt_1': { minat: 0.9 },
  'Q_INT_07:opt_2': { minat: 0.55 },
  'Q_INT_07:opt_3': { minat: 0.72 },
  'Q_INT_07:opt_4': { minat: 0.28 },
  'Q_INT_08:opt_4': { minat: 0.3 },
  'Q_INT_09:opt_4': { minat: 0.34 },
  'Q_INT_10:opt_1': { minat: 0.86, kemampuan_saat_ini: 0.86 },
  'Q_INT_10:opt_2': { minat: 0.78, kemampuan_saat_ini: 0.8 },
  'Q_INT_10:opt_3': { minat: 0.82, kemampuan_saat_ini: 0.28 }, // High interest, zero experience yet
  'Q_INT_10:opt_4': { minat: 0.78, kemampuan_saat_ini: 0.42 },
  'Q_INT_11:opt_2': { minat: 0.76 },
  'Q_INT_11:opt_4': { minat: 0.36 },
  'Q_INT_12:opt_4': { minat: 0.3 },

  // --- HABITS & ACTIVITIES ---
  'Q_HAB_02:opt_3': { kebiasaan: 0.62 },
  'Q_HAB_02:opt_4': { kebiasaan: 0.24 },
  'Q_HAB_03:opt_1': { kebiasaan: 0.86, gaya_berpikir: 0.82, kemampuan_saat_ini: 0.88 },
  'Q_HAB_03:opt_2': { kebiasaan: 0.86, gaya_berpikir: 0.88, kemampuan_saat_ini: 0.84 },
  'Q_HAB_03:opt_3': { kebiasaan: 0.8, gaya_berpikir: 0.82, kemampuan_saat_ini: 0.72 },
  'Q_HAB_03:opt_4': { kebiasaan: 0.42, gaya_berpikir: 0.44, kemampuan_saat_ini: 0.24 },
  'Q_HAB_04:opt_4': { kebiasaan: 0.45 },
  'Q_HAB_05:opt_4': { kebiasaan: 0.56, preferensi_lingkungan: 0.5, kemampuan_saat_ini: 0.48 },
  'Q_HAB_06:opt_3': { kebiasaan: 0.72, gaya_berpikir: 0.7 },
  'Q_HAB_06:opt_4': { kebiasaan: 0.46, gaya_berpikir: 0.52 },
  'Q_HAB_07:opt_2': { kebiasaan: 0.6, minat: 0.55 },
  'Q_HAB_07:opt_4': { kebiasaan: 0.28, minat: 0.28 },
  'Q_HAB_08:opt_2': { kebiasaan: 0.68 },
  'Q_HAB_08:opt_4': { kebiasaan: 0.24 },
  'Q_HAB_09:opt_3': { kebiasaan: 0.72, preferensi_lingkungan: 0.84 },
  'Q_HAB_09:opt_4': { kebiasaan: 0.2 },
  'Q_HAB_10:opt_4': { kebiasaan: 0.36, preferensi_lingkungan: 0.34, kesiapan_praktis: 0.28 },
  'Q_HAB_11:opt_1': { kebiasaan: 0.88, minat: 0.9 },
  'Q_HAB_11:opt_2': { kebiasaan: 0.68, minat: 0.6 },
  'Q_HAB_11:opt_4': { kebiasaan: 0.42, minat: 0.28 },
  'Q_HAB_12:opt_4': { kebiasaan: 0.34, preferensi_lingkungan: 0.36 },

  // --- THINKING & PROBLEM SOLVING ---
  'Q_THK_01:opt_4': { gaya_berpikir: 0.4 },
  'Q_THK_02:opt_4': { gaya_berpikir: 0.28 },
  'Q_THK_03:opt_4': { gaya_berpikir: 0.28 },
  'Q_THK_04:opt_3': { gaya_berpikir: 0.62 },
  'Q_THK_04:opt_4': { gaya_berpikir: 0.36 },
  'Q_THK_06:opt_4': { gaya_berpikir: 0.42 },
  'Q_THK_07:opt_4': { gaya_berpikir: 0.32 },
  'Q_THK_08:opt_4': { gaya_berpikir: 0.26 },
  'Q_THK_09:opt_4': { gaya_berpikir: 0.56 },
  'Q_THK_10:opt_4': { gaya_berpikir: 0.52 },
  'Q_THK_11:opt_1': { gaya_berpikir: 0.84, kemampuan_saat_ini: 0.86 },
  'Q_THK_11:opt_2': { gaya_berpikir: 0.88, kemampuan_saat_ini: 0.86 },
  'Q_THK_11:opt_3': { gaya_berpikir: 0.8, kemampuan_saat_ini: 0.78 },
  'Q_THK_11:opt_4': { gaya_berpikir: 0.38, kemampuan_saat_ini: 0.24 },

  // --- CURRENT SKILLS & LEARNING ---
  'Q_SKL_01:opt_4': { gaya_berpikir: 0.72, kebiasaan: 0.7, preferensi_lingkungan: 0.78 },
  'Q_SKL_02:opt_4': { kemampuan_saat_ini: 0.78 }, // Adaptability is a genuine soft skill
  'Q_SKL_03:opt_1': { kemampuan_saat_ini: 0.9, kebiasaan: 0.88, minat: 0.9 },
  'Q_SKL_03:opt_2': { kemampuan_saat_ini: 0.66, kebiasaan: 0.68, minat: 0.48 },
  'Q_SKL_03:opt_3': { kemampuan_saat_ini: 0.74, kebiasaan: 0.78, minat: 0.8 },
  'Q_SKL_03:opt_4': { kemampuan_saat_ini: 0.22, kebiasaan: 0.32, minat: 0.34 },
  'Q_SKL_04:opt_1': { kemampuan_saat_ini: 0.88, kebiasaan: 0.9, minat: 0.9 },
  'Q_SKL_04:opt_2': { kemampuan_saat_ini: 0.54, kebiasaan: 0.58, minat: 0.55 },
  'Q_SKL_04:opt_3': { kemampuan_saat_ini: 0.64, kebiasaan: 0.76, minat: 0.82 },
  'Q_SKL_04:opt_4': { kemampuan_saat_ini: 0.26, kebiasaan: 0.34, minat: 0.28 },
  'Q_SKL_05:opt_4': { kesiapan_praktis: 0.28, minat: 0.34 },
  'Q_SKL_06:opt_1': { kemampuan_saat_ini: 0.88 },
  'Q_SKL_06:opt_2': { kemampuan_saat_ini: 0.82 },
  'Q_SKL_06:opt_3': { kemampuan_saat_ini: 0.58 },
  'Q_SKL_06:opt_4': { kemampuan_saat_ini: 0.22 },
  'Q_SKL_07:opt_1': { kemampuan_saat_ini: 0.88, gaya_berpikir: 0.88 },
  'Q_SKL_07:opt_2': { kemampuan_saat_ini: 0.56, gaya_berpikir: 0.68 },
  'Q_SKL_07:opt_3': { kemampuan_saat_ini: 0.84, gaya_berpikir: 0.82 },
  'Q_SKL_07:opt_4': { kemampuan_saat_ini: 0.22, gaya_berpikir: 0.34 },
  'Q_SKL_08:opt_4': { kemampuan_saat_ini: 0.46, kebiasaan: 0.58 },
  'Q_SKL_09:opt_1': { kemampuan_saat_ini: 0.92 },
  'Q_SKL_09:opt_2': { kemampuan_saat_ini: 0.84 },
  'Q_SKL_09:opt_3': { kemampuan_saat_ini: 0.72 },
  'Q_SKL_09:opt_4': { kemampuan_saat_ini: 0.22 },
  'Q_SKL_10:opt_1': { kemampuan_saat_ini: 0.9, kesiapan_praktis: 0.9 },
  'Q_SKL_10:opt_2': { kemampuan_saat_ini: 0.9, kesiapan_praktis: 0.9 },
  'Q_SKL_10:opt_3': { kemampuan_saat_ini: 0.44, kesiapan_praktis: 0.55 },
  'Q_SKL_10:opt_4': { kemampuan_saat_ini: 0.18, kesiapan_praktis: 0.22 },
  'Q_SKL_11:opt_1': { kemampuan_saat_ini: 0.4, minat: 0.88 },
  'Q_SKL_11:opt_2': { kemampuan_saat_ini: 0.76, minat: 0.6 },
  'Q_SKL_11:opt_3': { kemampuan_saat_ini: 0.44, minat: 0.84 },
  'Q_SKL_11:opt_4': { kemampuan_saat_ini: 0.22, minat: 0.28 },
  'Q_SKL_12:opt_4': { kemampuan_saat_ini: 0.2, kebiasaan: 0.3, gaya_berpikir: 0.3 },
  'Q_SKL_13:opt_1': { kemampuan_saat_ini: 0.82 },
  'Q_SKL_13:opt_2': { kemampuan_saat_ini: 0.8 },
  'Q_SKL_13:opt_3': { kemampuan_saat_ini: 0.86 },
  'Q_SKL_13:opt_4': { kemampuan_saat_ini: 0.26 },

  // --- WORK ENVIRONMENT ---
  'Q_ENV_01:opt_4': { preferensi_lingkungan: 0.32 },
  'Q_ENV_02:opt_4': { preferensi_lingkungan: 0.32, kebiasaan: 0.32 },
  'Q_ENV_03:opt_3': { preferensi_lingkungan: 0.78, kesiapan_praktis: 0.82 },
  'Q_ENV_03:opt_4': { preferensi_lingkungan: 0.34, kesiapan_praktis: 0.28 },
  'Q_ENV_04:opt_4': { preferensi_lingkungan: 0.5 },
  'Q_ENV_05:opt_4': { preferensi_lingkungan: 0.42, kebiasaan: 0.44 },
  'Q_ENV_06:opt_2': { preferensi_lingkungan: 0.82, kesiapan_praktis: 0.76 },
  'Q_ENV_06:opt_3': { preferensi_lingkungan: 0.74, kesiapan_praktis: 0.66 },
  'Q_ENV_06:opt_4': { preferensi_lingkungan: 0.34, kesiapan_praktis: 0.26 },
  'Q_ENV_07:opt_3': { preferensi_lingkungan: 0.74 },
  'Q_ENV_07:opt_4': { preferensi_lingkungan: 0.78 },
  'Q_ENV_08:opt_4': { preferensi_lingkungan: 0.36, kesiapan_praktis: 0.28 },
  'Q_ENV_09:opt_4': { preferensi_lingkungan: 0.44 },
  'Q_ENV_10:opt_4': { preferensi_lingkungan: 0.44 },

  // --- MOTIVATION & VALUES ---
  'Q_MOT_01:opt_4': { minat: 0.42 },
  'Q_MOT_02:opt_4': { minat: 0.42 },
  'Q_MOT_03:opt_3': { minat: 0.82, kesiapan_praktis: 0.65 },
  'Q_MOT_03:opt_4': { minat: 0.36, kesiapan_praktis: 0.32 },
  'Q_MOT_04:opt_4': { minat: 0.34, kesiapan_praktis: 0.24 },
  'Q_MOT_05:opt_4': { minat: 0.42 },
  'Q_MOT_06:opt_4': { minat: 0.34 },
  'Q_MOT_07:opt_4': { minat: 0.36, preferensi_lingkungan: 0.36, kesiapan_praktis: 0.3 },
  'Q_MOT_08:opt_4': { minat: 0.45 },
  'Q_MOT_09:opt_4': { minat: 0.44, preferensi_lingkungan: 0.38 },
  'Q_MOT_10:opt_4': { minat: 0.32 },
  'Q_MOT_11:opt_4': { minat: 0.34, kesiapan_praktis: 0.28 },

  // --- PRACTICAL READINESS ---
  'Q_RDN_01:opt_1': { kesiapan_praktis: 0.74 },
  'Q_RDN_01:opt_2': { kesiapan_praktis: 0.64 }, // Conditional on full scholarship
  'Q_RDN_01:opt_3': { kesiapan_praktis: 0.86 },
  'Q_RDN_01:opt_4': { kesiapan_praktis: 0.24 },
  'Q_RDN_02:opt_1': { kesiapan_praktis: 0.9 },
  'Q_RDN_02:opt_2': { kesiapan_praktis: 0.88 },
  'Q_RDN_02:opt_3': { kesiapan_praktis: 0.74 },
  'Q_RDN_02:opt_4': { kesiapan_praktis: 0.16 },
  'Q_RDN_03:opt_1': { kesiapan_praktis: 0.9, preferensi_lingkungan: 0.84 },
  'Q_RDN_03:opt_2': { kesiapan_praktis: 0.78, preferensi_lingkungan: 0.8 },
  'Q_RDN_03:opt_3': { kesiapan_praktis: 0.66, preferensi_lingkungan: 0.82 },
  'Q_RDN_03:opt_4': { kesiapan_praktis: 0.22, preferensi_lingkungan: 0.34 },
  'Q_RDN_04:opt_1': { kesiapan_praktis: 0.88 },
  'Q_RDN_04:opt_2': { kesiapan_praktis: 0.84 },
  'Q_RDN_04:opt_3': { kesiapan_praktis: 0.74 },
  'Q_RDN_04:opt_4': { kesiapan_praktis: 0.2 },
  'Q_RDN_05:opt_1': { kesiapan_praktis: 0.86 },
  'Q_RDN_05:opt_2': { kesiapan_praktis: 0.72 },
  'Q_RDN_05:opt_3': { kesiapan_praktis: 0.76 },
  'Q_RDN_05:opt_4': { kesiapan_praktis: 0.18 },
  'Q_RDN_06:opt_1': { kesiapan_praktis: 0.9 },
  'Q_RDN_06:opt_2': { kesiapan_praktis: 0.56 }, // Only smartphone available
  'Q_RDN_06:opt_3': { kesiapan_praktis: 0.88 },
  'Q_RDN_06:opt_4': { kesiapan_praktis: 0.32 }, // Limited hardware/equipment
  'Q_RDN_07:opt_1': { kesiapan_praktis: 0.28 }, // All options represent readiness barriers
  'Q_RDN_07:opt_2': { kesiapan_praktis: 0.25 },
  'Q_RDN_07:opt_3': { kesiapan_praktis: 0.22 },
  'Q_RDN_07:opt_4': { kesiapan_praktis: 0.18 },
  'Q_RDN_08:opt_1': { kesiapan_praktis: 0.84, minat: 0.84 },
  'Q_RDN_08:opt_2': { kesiapan_praktis: 0.88, minat: 0.72 },
  'Q_RDN_08:opt_3': { kesiapan_praktis: 0.84, minat: 0.86 },
  'Q_RDN_08:opt_4': { kesiapan_praktis: 0.25, minat: 0.38 },
  'Q_RDN_09:opt_1': { kesiapan_praktis: 0.9 },
  'Q_RDN_09:opt_2': { kesiapan_praktis: 0.52 }, // No mentor/network yet
  'Q_RDN_09:opt_3': { kesiapan_praktis: 0.68 },
  'Q_RDN_09:opt_4': { kesiapan_praktis: 0.24 },
  'Q_RDN_10:opt_1': { kesiapan_praktis: 0.88, kemampuan_saat_ini: 0.88 },
  'Q_RDN_10:opt_2': { kesiapan_praktis: 0.52, kemampuan_saat_ini: 0.42 },
  'Q_RDN_10:opt_3': { kesiapan_praktis: 0.84, kemampuan_saat_ini: 0.84 },
  'Q_RDN_10:opt_4': { kesiapan_praktis: 0.22, kemampuan_saat_ini: 0.2 },
  'Q_RDN_11:opt_1': { kesiapan_praktis: 0.88 },
  'Q_RDN_11:opt_2': { kesiapan_praktis: 0.86 },
  'Q_RDN_11:opt_3': { kesiapan_praktis: 0.86 },
  'Q_RDN_11:opt_4': { kesiapan_praktis: 0.34 },

  // --- PHASE 7.7 BROAD EXPLORATION CALIBRATION ---
  'Q_EXP_09:opt_1': { minat: 0.76, preferensi_lingkungan: 0.78 },
  'Q_EXP_09:opt_2': { minat: 0.76, preferensi_lingkungan: 0.78 },
  'Q_EXP_09:opt_3': { minat: 0.76, preferensi_lingkungan: 0.78 },
  'Q_EXP_09:opt_4': { minat: 0.76, preferensi_lingkungan: 0.78 },
  'Q_EXP_11:opt_2': { kesiapan_praktis: 0.84, minat: 0.8 },
  'Q_EXP_12:opt_4': { kesiapan_praktis: 0.34, minat: 0.38 }
};

export interface TendencyRule {
  id: string;
  label: string;
  indicators: AssessmentIndicator[];
}

export const DIMENSION_TENDENCY_RULES: Record<ProfileDimensionId, TendencyRule[]> = {
  minat: [
    { id: 'minat_teknis', label: 'Teknis & Sistem', indicators: ['technical_affinity'] },
    { id: 'minat_kreatif', label: 'Kreatif & Visual', indicators: ['creative_expression'] },
    { id: 'minat_praktik', label: 'Praktik & Operasional', indicators: ['hands_on_practical'] },
    { id: 'minat_usaha', label: 'Peluang & Bisnis', indicators: ['enterprising_business'] },
    { id: 'minat_akademik', label: 'Akademik & Riset', indicators: ['academic_aspiration', 'analytical_depth'] },
    { id: 'minat_sosial', label: 'Sosial & Komunikasi', indicators: ['interpersonal_social'] },
    { id: 'minat_eksploratif', label: 'Eksplorasi Terbuka', indicators: ['exploratory_open'] }
  ],
  gaya_berpikir: [
    { id: 'pikir_analitis', label: 'Analitis & Mendalam', indicators: ['analytical_depth', 'academic_aspiration'] },
    { id: 'pikir_kreatif', label: 'Kreatif & Inovatif', indicators: ['creative_expression', 'enterprising_business'] },
    { id: 'pikir_sistematis', label: 'Sistematis & Terstruktur', indicators: ['structured_procedural', 'technical_affinity'] },
    { id: 'pikir_praktis', label: 'Praktis & Solutif Langsung', indicators: ['hands_on_practical'] },
    { id: 'pikir_eksploratif', label: 'Eksploratif & Menimbang', indicators: ['exploratory_open'] }
  ],
  kebiasaan: [
    { id: 'biasa_terstruktur', label: 'Terstruktur & Disiplin SOP', indicators: ['structured_procedural'] },
    { id: 'biasa_mandiri', label: 'Mandiri & Inisiatif Pribadi', indicators: ['autonomy_independent'] },
    { id: 'biasa_kolaboratif', label: 'Kolaboratif & Komunikatif', indicators: ['interpersonal_social'] },
    { id: 'biasa_langsung', label: 'Aktivitas Praktik Langsung', indicators: ['hands_on_practical'] },
    { id: 'biasa_eksploratif', label: 'Fleksibel / Belum Tetap', indicators: ['exploratory_open'] }
  ],
  kemampuan_saat_ini: [
    { id: 'mampu_teknis', label: 'Keahlian Teknis & Perangkat', indicators: ['technical_affinity'] },
    { id: 'mampu_praktik', label: 'Eksekusi Bengkel / Lapangan', indicators: ['hands_on_practical'] },
    { id: 'mampu_kreatif', label: 'Produksi Visual & Estetika', indicators: ['creative_expression'] },
    { id: 'mampu_analitis', label: 'Analisis & Penyusunan Konsep', indicators: ['analytical_depth', 'academic_aspiration'] },
    { id: 'mampu_komunikasi', label: 'Komunikasi & Presentasi', indicators: ['interpersonal_social', 'enterprising_business'] },
    { id: 'mampu_berkembang', label: 'Tahap Pengenalan & Belajar Awal', indicators: ['exploratory_open'] }
  ],
  preferensi_lingkungan: [
    { id: 'ling_individu', label: 'Kerja Individu / Mandiri', indicators: ['autonomy_independent'] },
    { id: 'ling_tim', label: 'Kerja Tim & Interaksi Sosial', indicators: ['interpersonal_social'] },
    { id: 'ling_lapangan', label: 'Lapangan, Bengkel & Produksi', indicators: ['hands_on_practical'] },
    { id: 'ling_teknis', label: 'Lingkungan Teknis / Lab / Teratur', indicators: ['technical_affinity', 'structured_procedural'] },
    { id: 'ling_kreatif', label: 'Studio & Aktivitas Kreatif', indicators: ['creative_expression'] }
  ],
  kesiapan_praktis: [
    { id: 'siap_kerja', label: 'Kesiapan Kerja & Kemandirian Cepat', indicators: ['career_urgency', 'hands_on_practical'] },
    { id: 'siap_studi', label: 'Kesiapan Studi & Belajar Berkelanjutan', indicators: ['academic_aspiration'] },
    { id: 'siap_usaha', label: 'Kesiapan Sumber Daya & Rintisan Usaha', indicators: ['enterprising_business', 'autonomy_independent'] },
    { id: 'siap_terstruktur', label: 'Kesiapan Mengikuti Sistem & Fasilitas', indicators: ['structured_procedural'] },
    { id: 'siap_pertimbangan', label: 'Masih Dalam Pertimbangan & Diskusi', indicators: ['exploratory_open'] }
  ]
};

export interface OptionSkillMaturityEntry {
  classification: SkillMaturityClassification;
  summaryLabel: string;
}

/**
 * Explicit option-level classification separating:
 * - `possessed_skill`: capabilities & experience the student has already demonstrated
 * - `learning_goal`: skills/topics the student wants to learn or deepen next
 * - `developing_area`: areas where the student explicitly states needing more confidence/practice
 */
export const OPTION_SKILL_MATURITY_MAP: Record<string, OptionSkillMaturityEntry> = {
  // Q_HOB_04: "Hal apa yang paling ingin kamu kuasai ke depannya?" -> explicit learning goals
  'Q_HOB_04:opt_1': { classification: 'learning_goal', summaryLabel: 'Ingin menguasai pembuatan aplikasi, sistem IT, atau perangkat teknis' },
  'Q_HOB_04:opt_2': { classification: 'learning_goal', summaryLabel: 'Ingin menguasai desain, penulisan kreatif, bahasa asing, atau konten media' },
  'Q_HOB_04:opt_3': { classification: 'learning_goal', summaryLabel: 'Ingin menguasai bisnis, keuangan, aturan hukum, administrasi, atau operasional rapi' },
  'Q_HOB_04:opt_4': { classification: 'learning_goal', summaryLabel: 'Ingin menguasai pengajaran, layanan kesehatan/sosial, kuliner/alam, atau merintis usaha' },

  // Q_INT_02: "topik mana yang paling bikin kamu semangat?" -> explicit learning goals
  'Q_INT_02:opt_1': { classification: 'learning_goal', summaryLabel: 'Ingin mempelajari keterampilan praktis siap kerja' },
  'Q_INT_02:opt_2': { classification: 'learning_goal', summaryLabel: 'Ingin mendalami alasan ilmu, teori, dan cara kerja suatu bidang' },
  'Q_INT_02:opt_3': { classification: 'learning_goal', summaryLabel: 'Ingin belajar cara memulai jualan atau jasa mandiri dari nol' },
  'Q_INT_02:opt_4': { classification: 'learning_goal', summaryLabel: 'Ingin mencoba berbagai kegiatan ringan untuk mengenali kecocokan' },

  // Q_INT_03: Troubleshooting response
  'Q_INT_03:opt_1': { classification: 'possessed_skill', summaryLabel: 'Terbiasa langsung mengutak-atik dan mencoba perbaikan perangkat' },
  'Q_INT_03:opt_2': { classification: 'possessed_skill', summaryLabel: 'Terbiasa mencari panduan resmi dan menelusuri akar masalah' },
  'Q_INT_03:opt_4': { classification: 'developing_area', summaryLabel: 'Belum terbiasa mengatasi gangguan perangkat sendiri tanpa bantuan' },

  // Q_INT_10: Sales / service experience
  'Q_INT_10:opt_1': { classification: 'possessed_skill', summaryLabel: 'Berpengalaman berjualan barang/jasa dan melayani pembeli' },
  'Q_INT_10:opt_2': { classification: 'possessed_skill', summaryLabel: 'Berpengalaman membantu pekerjaan rutin di tempat usaha/keluarga' },
  'Q_INT_10:opt_3': { classification: 'learning_goal', summaryLabel: 'Belum pernah berjualan namun tertarik mencoba usaha kecil' },
  'Q_INT_10:opt_4': { classification: 'learning_goal', summaryLabel: 'Ingin mengasah satu keahlian dasar terlebih dahulu' },

  // Q_SKL_02: Current soft skill mastery
  'Q_SKL_02:opt_1': { classification: 'possessed_skill', summaryLabel: 'Sabar, teliti, dan mampu fokus pada pekerjaan detail' },
  'Q_SKL_02:opt_2': { classification: 'possessed_skill', summaryLabel: 'Mudah mengobrol, ramah, dan cepat akrab dengan orang baru' },
  'Q_SKL_02:opt_3': { classification: 'possessed_skill', summaryLabel: 'Peka terhadap kerapian visual dan keserasian tampilan' },
  'Q_SKL_02:opt_4': { classification: 'possessed_skill', summaryLabel: 'Cepat menyesuaikan diri saat suasana atau rencana berubah' },

  // Q_SKL_03: Learning new apps/tools
  'Q_SKL_03:opt_1': { classification: 'possessed_skill', summaryLabel: 'Terbiasa mengeksplorasi aplikasi atau alat baru secara mandiri' },
  'Q_SKL_03:opt_2': { classification: 'possessed_skill', summaryLabel: 'Mampu mempelajari fungsi alat/aplikasi sesuai panduan tugas' },
  'Q_SKL_03:opt_4': { classification: 'developing_area', summaryLabel: 'Masih membutuhkan waktu adaptasi lebih lama dengan alat atau aplikasi baru' },

  // Q_SKL_04: Self-directed learning habit
  'Q_SKL_04:opt_1': { classification: 'possessed_skill', summaryLabel: 'Terbiasa mencari dan belajar hal baru secara mandiri lewat internet' },
  'Q_SKL_04:opt_2': { classification: 'learning_goal', summaryLabel: 'Mencari tutorial atau cara cepat saat menghadapi tugas yang macet' },
  'Q_SKL_04:opt_3': { classification: 'learning_goal', summaryLabel: 'Aktif mencari tips promosi, desain konten, dan cara berjualan' },
  'Q_SKL_04:opt_4': { classification: 'developing_area', summaryLabel: 'Masih lebih mengandalkan penjelasan langsung daripada belajar mandiri' },

  // Q_SKL_06: Pitching skills to strangers
  'Q_SKL_06:opt_1': { classification: 'possessed_skill', summaryLabel: 'Nyaman menjelaskan kemampuan atau bantuan diri ke orang baru' },
  'Q_SKL_06:opt_2': { classification: 'possessed_skill', summaryLabel: 'Mampu menunjukkan kemampuan lewat contoh hasil kerja atau tulisan' },
  'Q_SKL_06:opt_4': { classification: 'developing_area', summaryLabel: 'Masih merasa malu atau canggung menawarkan kemampuan kepada orang lain' },

  // Q_SKL_07: Writing notes & reports
  'Q_SKL_07:opt_1': { classification: 'possessed_skill', summaryLabel: 'Mampu merangkum catatan, merapikan data, dan menulis laporan' },
  'Q_SKL_07:opt_3': { classification: 'possessed_skill', summaryLabel: 'Mampu menata tampilan dokumen/halaman agar rapi dan mudah dibaca' },
  'Q_SKL_07:opt_4': { classification: 'developing_area', summaryLabel: 'Masih sering kesulitan merangkai kata dalam tulisan panjang' },

  // Q_SKL_08: Visual / Flow quality attention
  'Q_SKL_08:opt_1': { classification: 'possessed_skill', summaryLabel: 'Peka merapikan tata letak poster, tampilan, atau kemasan agar jelas' },
  'Q_SKL_08:opt_2': { classification: 'possessed_skill', summaryLabel: 'Teliti mengecek alur fungsi agar nyaman dan lancar digunakan' },

  // Q_SKL_09: Peer mentoring
  'Q_SKL_09:opt_1': { classification: 'possessed_skill', summaryLabel: 'Mampu menjelaskan materi atau keterampilan pelan-pelan kepada teman' },
  'Q_SKL_09:opt_2': { classification: 'possessed_skill', summaryLabel: 'Mampu mencontohkan langkah praktik secara langsung untuk ditiru' },
  'Q_SKL_09:opt_4': { classification: 'developing_area', summaryLabel: 'Belum percaya diri mengajari atau membimbing teman' },

  // Q_SKL_10: Portfolio readiness
  'Q_SKL_10:opt_1': { classification: 'possessed_skill', summaryLabel: 'Sudah mengumpulkan contoh hasil kerja/karya dengan rapi' },
  'Q_SKL_10:opt_2': { classification: 'possessed_skill', summaryLabel: 'Sudah pernah membagikan contoh karya di media sosial untuk menarik minat' },
  'Q_SKL_10:opt_3': { classification: 'learning_goal', summaryLabel: 'Sudah punya beberapa tugas awal dan ingin mengembangkannya lebih matang' },
  'Q_SKL_10:opt_4': { classification: 'developing_area', summaryLabel: 'Belum mengumpulkan dokumentasi hasil kerja atau karya secara teratur' },

  // Q_SKL_11: Foreign language skill vs aspiration
  'Q_SKL_11:opt_1': { classification: 'learning_goal', summaryLabel: 'Tertarik belajar bahasa asing untuk akses wawasan lebih luas' },
  'Q_SKL_11:opt_2': { classification: 'possessed_skill', summaryLabel: 'Memahami istilah harian/kerja pada menu aplikasi dan alat' },
  'Q_SKL_11:opt_3': { classification: 'learning_goal', summaryLabel: 'Ingin menguasai bahasa asing untuk berkomunikasi dengan pembeli/mitra' },
  'Q_SKL_11:opt_4': { classification: 'developing_area', summaryLabel: 'Penguasaan bahasa asing masih dirasakan cukup sulit saat ini' },

  // Q_SKL_12: Error recovery
  'Q_SKL_12:opt_1': { classification: 'possessed_skill', summaryLabel: 'Sanggup mengulang dan memperbaiki kesalahan pengerjaan dengan teliti' },
  'Q_SKL_12:opt_2': { classification: 'possessed_skill', summaryLabel: 'Terbiasa mencari akar penyebab kesalahan agar tidak terulang' },
  'Q_SKL_12:opt_4': { classification: 'developing_area', summaryLabel: 'Masih mudah panik atau ragu saat memperbaiki kesalahan sendiri' },

  // Q_SKL_13: Explicit separation between possessed capability vs career disinterest
  'Q_SKL_13:opt_1': { classification: 'possessed_non_career', summaryLabel: 'Memiliki kemampuan praktik/teknis tetapi tidak ingin menjadikannya bidang karier utama' },
  'Q_SKL_13:opt_2': { classification: 'possessed_non_career', summaryLabel: 'Memiliki kemampuan administrasi/pencatatan tetapi memilih mencari arah karier lain' },
  'Q_SKL_13:opt_3': { classification: 'possessed_skill', summaryLabel: 'Keahlian yang sudah dikuasai selaras dengan minat yang ingin dijalani' },
  'Q_SKL_13:opt_4': { classification: 'developing_area', summaryLabel: 'Masih dalam tahap mengenali keahlian inti sambil menjajaki minat' },

  // Q_THK_11: Explaining ideas in public
  'Q_THK_11:opt_1': { classification: 'possessed_skill', summaryLabel: 'Percaya diri menceritakan ide dan menjawab pertanyaan orang banyak' },
  'Q_THK_11:opt_2': { classification: 'possessed_skill', summaryLabel: 'Mampu menyampaikan gagasan secara teratur dengan catatan dan data' },
  'Q_THK_11:opt_4': { classification: 'developing_area', summaryLabel: 'Masih gugup berbicara di depan banyak orang dan perlu latihan' },

  // Q_RDN_10: Practical readiness self-assessment
  'Q_RDN_10:opt_1': { classification: 'possessed_skill', summaryLabel: 'Merasa cukup siap dengan bekal praktik dan kegiatan sekolah saat ini' },
  'Q_RDN_10:opt_2': { classification: 'learning_goal', summaryLabel: 'Ingin memperdalam konsep dan ilmu secara lebih matang lagi' },
  'Q_RDN_10:opt_3': { classification: 'possessed_skill', summaryLabel: 'Mampu membuat layanan atau produk sederhana yang berguna bagi sekitar' },
  'Q_RDN_10:opt_4': { classification: 'developing_area', summaryLabel: 'Masih membutuhkan banyak latihan tambahan agar lebih percaya diri' }
};

