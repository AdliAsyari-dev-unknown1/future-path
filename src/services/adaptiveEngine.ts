/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7.1.1: Dynamic Hobby-First Adaptive Question Engine
 *
 * Adapts both WHICH questions are asked and HOW MANY questions are needed:
 * - Starts with simple everyday hobby & preference questions (Q_HOB_01..04).
 * - Immediately branches into sub-hobby disambiguation (e.g., gaming -> play/community vs build vs strategy vs hardware).
 * - Monitors live 6-dimension sufficiency and recommendation differentiation.
 * - Stops early (~9–12 questions) once profile & top recommendations are clear,
 *   asks more (~13–16, max 18) when answers are mixed or exploratory, and guarantees >= 8 minimum.
 */

import { FuturePathId, SmkMajor } from '../types/student';
import {
  QuizQuestion,
  StudentQuizAnswer,
  AssessmentIndicator
} from '../types/assessment';
import { QUESTION_BANK, QUESTION_MAP } from '../data/questionBank';
import { evaluateStudentProfile } from './profileScoringEngine';
import { matchStudentRecommendations } from './recommendationMatchingEngine';
import { StudentProfileAssessment } from '../types/scoring';
import { RecommendationMatchingOutput } from '../types/recommendation';

export const MIN_ADAPTIVE_QUESTIONS = 8;
export const MAX_ADAPTIVE_QUESTIONS = 18;
/** Upper reference ceiling used only for safety bounds */
export const TARGET_SESSION_QUESTIONS = MAX_ADAPTIVE_QUESTIONS;

export interface EngineState {
  direction: FuturePathId;
  answers: Record<string, StudentQuizAnswer>;
  questionSequence: string[];
  currentIndex: number;
}

export interface AdaptiveStoppingEvaluation {
  shouldStop: boolean;
  nearCompletion: boolean;
  answeredCount: number;
  maxQuestions: number;
  reason:
    | 'min_not_reached'
    | 'max_reached'
    | 'profile_clear_ready'
    | 'need_dimension_coverage'
    | 'need_candidate_clarity'
    | 'exploratory_extension';
  stageHintText: string;
  liveProfile: StudentProfileAssessment;
  liveRecommendations: RecommendationMatchingOutput;
}

const CORE_FOUNDATION_ORDER = [
  'Q_HOB_01',
  'Q_DOM_01',
  'Q_EXP_03',
  'Q_EXP_05',
  'Q_HOB_02',
  'Q_HOB_04',
  'Q_EXP_10',
  'Q_RDN_10',
  'Q_SKL_10',
  'Q_SKL_13'
];

export function isQuestionHandled(answer: StudentQuizAnswer | undefined | null): boolean {
  if (!answer) return false;
  if (answer.skipped || answer.responseMode === 'skipped') return true;
  return Boolean(answer.selectedOptionId && answer.selectedOptionId.trim());
}

/**
 * Calculates accumulated signal counts from current standard answers.
 */
export function calculateAccumulatedSignals(
  answers: Record<string, StudentQuizAnswer>
): Record<AssessmentIndicator, number> {
  const signalCounts: Record<AssessmentIndicator, number> = {
    technical_affinity: 0,
    creative_expression: 0,
    analytical_depth: 0,
    hands_on_practical: 0,
    interpersonal_social: 0,
    enterprising_business: 0,
    autonomy_independent: 0,
    structured_procedural: 0,
    career_urgency: 0,
    academic_aspiration: 0,
    exploratory_open: 0
  };

  for (const [qId, ans] of Object.entries(answers)) {
    if (ans.skipped || ans.responseMode === 'skipped') continue;
    const question = QUESTION_MAP[qId];
    if (!question) continue;
    const option = question.options.find((o) => o.id === ans.selectedOptionId);
    if (!option || (option.optionKind && option.optionKind !== 'standard')) continue;

    for (const signal of option.signals) {
      signalCounts[signal] = (signalCounts[signal] || 0) + 1;
    }
  }

  return signalCounts;
}

/**
 * Gets dominant signals sorted by frequency.
 */
export function getDominantSignals(
  signalCounts: Record<AssessmentIndicator, number>,
  topN = 3
): AssessmentIndicator[] {
  return (Object.entries(signalCounts) as [AssessmentIndicator, number][])
    .filter(([_, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([signal]) => signal);
}

/**
 * Checks whether a question's selection-based trigger matches current answers.
 */
function matchesSelectionTrigger(
  question: QuizQuestion,
  answers: Record<string, StudentQuizAnswer>
): boolean {
  const triggers = question.branchingRules?.triggerSelections;
  if (!triggers || triggers.length === 0) return false;
  return triggers.some((ref) => {
    const [qId, optId] = ref.split(':');
    const ans = answers[qId];
    if (!ans || ans.skipped || ans.responseMode === 'skipped') return false;
    return Boolean(qId && optId && ans.selectedOptionId === optId);
  });
}

/**
 * Evaluates live profile sufficiency and candidate clarity to decide whether
 * the adaptive quiz has gathered enough insight to stop or should ask more questions.
 */
export function evaluateAdaptiveStoppingCondition(
  direction: FuturePathId,
  currentSequence: string[],
  answers: Record<string, StudentQuizAnswer>,
  major: SmkMajor | '' = '',
  minTargetOverride?: number
): AdaptiveStoppingEvaluation {
  const handledInSeq = currentSequence.filter((qId) => isQuestionHandled(answers[qId]));
  const reachedCount = handledInSeq.length;

  const liveProfile = evaluateStudentProfile({
    answers,
    plannedSequence: currentSequence,
    sessionContext: { initialDirection: direction, major }
  });

  // Substantive answered count excludes skipped, dont_know, none_fit, and custom other answers
  const answeredCount = liveProfile.validAnsweredCount;
  const minThreshold = Math.max(MIN_ADAPTIVE_QUESTIONS, minTargetOverride ?? MIN_ADAPTIVE_QUESTIONS);

  const liveRecommendations = matchStudentRecommendations({
    profileAssessment: liveProfile,
    initialDirection: direction,
    studentMajor: major
  });

  if (reachedCount >= MAX_ADAPTIVE_QUESTIONS) {
    return {
      shouldStop: true,
      nearCompletion: true,
      answeredCount,
      maxQuestions: MAX_ADAPTIVE_QUESTIONS,
      reason: 'max_reached',
      stageHintText: 'Kita sudah mencapai batas maksimal — melihat hasil',
      liveProfile,
      liveRecommendations
    };
  }

  if (answeredCount < minThreshold) {
    const flexCount =
      (liveProfile.flexibleResponseSummary?.skippedCount ?? 0) +
      (liveProfile.flexibleResponseSummary?.dontKnowCount ?? 0) +
      (liveProfile.flexibleResponseSummary?.noneFitCount ?? 0);

    return {
      shouldStop: false,
      nearCompletion: answeredCount >= minThreshold - 2 && liveProfile.overallSufficiency !== 'belum_cukup',
      answeredCount,
      maxQuestions: MAX_ADAPTIVE_QUESTIONS,
      reason: 'min_not_reached',
      stageHintText:
        flexCount > 0 && answeredCount < 5
          ? 'Santai saja — pilih yang sesuai atau lewati kalau belum yakin'
          : answeredCount < 3
          ? 'Mengenali hal yang kamu sukai'
          : answeredCount < 6
          ? 'Mendalami kegiatan & hal yang ingin dikuasai'
          : 'Menyelaraskan kebiasaan & kesiapanmu',
      liveProfile,
      liveRecommendations
    };
  }

  // Check 6-dimension sufficiency balance
  const insufficientDimCount = liveProfile.dimensionList.filter(
    (d) => d.sufficiencyStatus === 'belum_cukup'
  ).length;
  const sufficientDimCount = liveProfile.dimensionList.filter(
    (d) => d.sufficiencyStatus === 'cukup'
  ).length;

  // Check if any high-priority hobby branch was triggered and still unanswered
  const hasPendingHobbyBranch = QUESTION_BANK.some(
    (q) =>
      !currentSequence.includes(q.id) &&
      q.branchingRules?.preferredStage === 'hobby_branch' &&
      matchesSelectionTrigger(q, answers)
  );

  // Check essential skill / readiness coverage
  const skillDimOk = liveProfile.dimensions.kemampuan_saat_ini.sufficiencyStatus !== 'belum_cukup';
  const readinessDimOk = liveProfile.dimensions.kesiapan_praktis.sufficiencyStatus !== 'belum_cukup';

  if (
    insufficientDimCount > 0 ||
    !skillDimOk ||
    !readinessDimOk ||
    liveRecommendations.overallMatchingSufficiency === 'belum_cukup' ||
    hasPendingHobbyBranch
  ) {
    return {
      shouldStop: false,
      nearCompletion: insufficientDimCount <= 1 && !hasPendingHobbyBranch && answeredCount >= 9,
      answeredCount,
      maxQuestions: MAX_ADAPTIVE_QUESTIONS,
      reason: 'need_dimension_coverage',
      stageHintText: 'Melengkapi gambaran bekal & kesiapanmu',
      liveProfile,
      liveRecommendations
    };
  }

  // Evaluate recommendation separation & signal clarity
  const topCandidates = liveRecommendations.activePathRecommendations;
  const top1Score = topCandidates[0]?.matchScore ?? 0;
  const top2Score = topCandidates[1]?.matchScore ?? 0;
  const scoreGap = top1Score - top2Score;
  const exploratoryCount = liveProfile.indicatorTotals.exploratory_open ?? 0;
  const topTendencyPct = liveProfile.dimensions.minat.primaryTendency?.normalizedPercentage ?? 0;
  const isMixedOrUnsure =
    direction === 'bingung' ||
    exploratoryCount >= 3 ||
    topTendencyPct < 34 ||
    liveProfile.dimensions.minat.primaryTendency?.id === 'minat_eksploratif';

  // For mixed / undecided students, gather ~13-14 answers to differentiate accurately
  if (isMixedOrUnsure && answeredCount < 13 && (scoreGap < 6 || sufficientDimCount < 6)) {
    return {
      shouldStop: false,
      nearCompletion: answeredCount >= 11,
      answeredCount,
      maxQuestions: MAX_ADAPTIVE_QUESTIONS,
      reason: 'exploratory_extension',
      stageHintText: 'Membandingkan beberapa minat agar lebih jelas',
      liveProfile,
      liveRecommendations
    };
  }

  // If top candidates are tightly tied (< 3 pts) and we still have room below 14 questions, clarify once more
  if (scoreGap < 3 && answeredCount < 14 && sufficientDimCount < 6) {
    return {
      shouldStop: false,
      nearCompletion: true,
      answeredCount,
      maxQuestions: MAX_ADAPTIVE_QUESTIONS,
      reason: 'need_candidate_clarity',
      stageHintText: 'Kita sudah hampir selesai',
      liveProfile,
      liveRecommendations
    };
  }

  // Clear profile reached (>= 8 valid, 0 insufficient dimensions, clear differentiation or >= 5 sufficient dims)
  if (
    (sufficientDimCount >= 4 && answeredCount >= 9 && !isMixedOrUnsure) ||
    (liveProfile.overallSufficiency === 'cukup' && answeredCount >= 9 && !isMixedOrUnsure) ||
    answeredCount >= 13
  ) {
    return {
      shouldStop: true,
      nearCompletion: true,
      answeredCount,
      maxQuestions: MAX_ADAPTIVE_QUESTIONS,
      reason: 'profile_clear_ready',
      stageHintText: 'Kita sudah hampir selesai — siap melihat hasilmu',
      liveProfile,
      liveRecommendations
    };
  }

  return {
    shouldStop: false,
    nearCompletion: answeredCount >= 9,
    answeredCount,
    maxQuestions: MAX_ADAPTIVE_QUESTIONS,
    reason: 'need_dimension_coverage',
    stageHintText: 'Kita sudah hampir selesai',
    liveProfile,
    liveRecommendations
  };
}

/**
 * Initializes an adaptive session starting with the friendly hobby-first opener.
 */
export function initializeAdaptiveSequence(_direction: FuturePathId): string[] {
  return ['Q_HOB_01'];
}

/**
 * Selects the single highest-value next question dynamically based on prior answers,
 * sub-hobby branches, missing profile dimension evidence, and path context.
 */
export function selectNextQuestion(
  direction: FuturePathId,
  currentSequence: string[],
  answers: Record<string, StudentQuizAnswer>,
  major: SmkMajor | '' = ''
): string | null {
  if (currentSequence.length >= MAX_ADAPTIVE_QUESTIONS) {
    return null;
  }

  const sequenceSet = new Set(currentSequence);
  const candidates = QUESTION_BANK.filter((q) => {
    if (sequenceSet.has(q.id)) return false;
    // Never surface a selection-triggered branch question unless its trigger actually matched
    const hasSelectionRule = Boolean(q.branchingRules?.triggerSelections?.length);
    if (hasSelectionRule && !matchesSelectionTrigger(q, answers)) {
      return false;
    }
    return true;
  });
  if (candidates.length === 0) return null;

  const signalCounts = calculateAccumulatedSignals(answers);
  const dominantSignals = getDominantSignals(signalCounts, 3);
  const liveProfile = evaluateStudentProfile({
    answers,
    plannedSequence: currentSequence,
    sessionContext: { initialDirection: direction, major }
  });

  const stepIndex = currentSequence.length;

  // 1. Highest priority: Immediately ask triggered sub-hobby & domain disambiguation branches
  const triggeredBranches = candidates.filter(
    (q) =>
      q.branchingRules?.preferredStage === 'hobby_branch' &&
      matchesSelectionTrigger(q, answers)
  );
  if (triggeredBranches.length > 0 && stepIndex <= 7) {
    return triggeredBranches[0].id;
  }

  // Determine which profile dimensions need evidence most right now
  const dimsNeedingEvidence = new Set(
    liveProfile.dimensionList
      .filter((d) => d.sufficiencyStatus === 'belum_cukup')
      .map((d) => d.dimensionId)
  );
  const dimsLimited = new Set(
    liveProfile.dimensionList
      .filter((d) => d.sufficiencyStatus === 'terbatas')
      .map((d) => d.dimensionId)
  );

  // Score remaining candidates cleanly
  const scored = candidates.map((q) => {
    let score = 0;

    // Prioritize curated hobby-first / desire / everyday core sequence early
    const foundationIdx = CORE_FOUNDATION_ORDER.indexOf(q.id);
    if (foundationIdx !== -1) {
      // Strongly prefer earlier unasked foundation items first
      score += 120 - foundationIdx * 10;
    }

    // Sub-hobby branch that was triggered later
    if (matchesSelectionTrigger(q, answers)) {
      score += 95;
    }

    // Category-to-missing-dimension boost so dynamic sessions hit all 6 dimensions fairly
    if (
      (q.category === 'current_skills_learning' || q.id === 'Q_RDN_10' || q.id === 'Q_SKL_02' || q.id === 'Q_SKL_10') &&
      dimsNeedingEvidence.has('kemampuan_saat_ini') &&
      q.id !== 'Q_HOB_04' &&
      q.id !== 'Q_SKL_01' &&
      q.id !== 'Q_SKL_05'
    ) {
      score += 62;
    } else if (
      q.category === 'practical_readiness' &&
      dimsNeedingEvidence.has('kesiapan_praktis')
    ) {
      score += 58;
    } else if (
      q.category === 'thinking_problem_solving' &&
      dimsNeedingEvidence.has('gaya_berpikir')
    ) {
      score += 55;
    } else if (
      q.category === 'habits_activities' &&
      dimsNeedingEvidence.has('kebiasaan')
    ) {
      score += 55;
    } else if (
      q.category === 'work_environment' &&
      dimsNeedingEvidence.has('preferensi_lingkungan')
    ) {
      score += 52;
    } else if (
      (q.category === 'interest_curiosity' || q.category === 'motivation_values') &&
      dimsNeedingEvidence.has('minat')
    ) {
      score += 50;
    }

    // Secondary boost for limited dimensions once all dimensions have >= 1-2 items
    if (
      q.category === 'current_skills_learning' &&
      dimsLimited.has('kemampuan_saat_ini') &&
      q.id !== 'Q_HOB_04' &&
      q.id !== 'Q_SKL_01' &&
      q.id !== 'Q_SKL_05'
    ) {
      score += 24;
    }
    if (q.category === 'practical_readiness' && dimsLimited.has('kesiapan_praktis')) {
      score += 22;
    }
    if (q.category === 'thinking_problem_solving' && dimsLimited.has('gaya_berpikir')) {
      score += 22;
    }
    if (q.category === 'habits_activities' && dimsLimited.has('kebiasaan')) {
      score += 20;
    }

    // Signal-triggered adaptive branch relevance
    if (q.branchingRules?.triggerSignals) {
      const matched = q.branchingRules.triggerSignals.filter((s) =>
        dominantSignals.includes(s)
      ).length;
      score += matched * 16;
    }

    // Indicator relevance with student's natural pattern
    const overlap = q.indicators.filter((ind) => dominantSignals.includes(ind)).length;
    score += overlap * 8;

    // Direction contextual match (especially for bingung clarifying or wirausaha/kuliah/bekerja readiness)
    if (q.targetPaths === 'all') {
      score += 8;
    } else if (Array.isArray(q.targetPaths) && q.targetPaths.includes(direction)) {
      score += 18;
    }

    // Avoid over-repeating same category consecutively
    const lastQ = currentSequence.length > 0 ? QUESTION_MAP[currentSequence[currentSequence.length - 1]] : null;
    if (lastQ && lastQ.category === q.category && foundationIdx === -1 && !matchesSelectionTrigger(q, answers)) {
      score -= 18;
    }

    // Keep deep-dive clarifying questions for after step 6
    if (q.priority === 'deep_dive' && stepIndex < 6) {
      score -= 15;
    }

    return { question: q, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.question.id ?? null;
}

/**
 * Re-evaluates future questions when an answer at `changedIndex` is changed.
 * Keeps questions 0..changedIndex intact and drops stale downstream questions
 * so the quiz dynamically branches along the student's revised answer.
 */
export function reevaluateSequenceOnAnswerChange(
  _direction: FuturePathId,
  currentSequence: string[],
  _answers: Record<string, StudentQuizAnswer>,
  changedIndex: number
): string[] {
  return currentSequence.slice(0, Math.max(1, changedIndex + 1));
}
