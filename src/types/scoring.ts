/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 4: Profile Scoring Engine Type System
 *
 * Defines the 6 profile dimensions, evidence sufficiency & confidence levels,
 * skill maturity distinction (possessed vs learning goals), and full audit traceability.
 */

import { FuturePathId, SmkMajor } from './student';
import { AssessmentIndicator, CareerDomainId, QuestionCategory, StudentQuizAnswer } from './assessment';

export type ProfileDimensionId =
  | 'minat'
  | 'gaya_berpikir'
  | 'kebiasaan'
  | 'kemampuan_saat_ini'
  | 'preferensi_lingkungan'
  | 'kesiapan_praktis';

export type EvidenceSufficiencyStatus = 'cukup' | 'terbatas' | 'belum_cukup';

export type ConfidenceLevel = 'tinggi' | 'sedang' | 'rendah';

export type SkillMaturityClassification =
  | 'possessed_skill'
  | 'learning_goal'
  | 'developing_area'
  | 'possessed_non_career'
  | 'neutral';

export interface DimensionMetadata {
  id: ProfileDimensionId;
  code: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  label: string;
  description: string;
}

export interface TendencyScore {
  id: string;
  label: string;
  rawWeight: number;
  normalizedPercentage: number; // 0-100 share within this dimension
}

export interface IndicatorContribution {
  indicator: AssessmentIndicator;
  weight: number;
}

export interface QuestionEvidenceRecord {
  questionId: string;
  questionText: string;
  questionCategory: QuestionCategory;
  selectedOptionId: string;
  selectedOptionLabel: string;
  contributingIndicators: IndicatorContribution[];
  categoryRelevanceWeight: number;
  maturityFactor: number;
  rawContribution: number;
  maxContribution: number;
  skillClassification?: SkillMaturityClassification;
}

export interface DimensionScoreResult {
  dimensionId: ProfileDimensionId;
  code: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  label: string;
  description: string;
  normalizedScore: number | null; // Strictly 0-100 when evidenceCount > 0, null when 0 evidence
  rawWeightedScore: number;
  maxPossibleWeightedScore: number;
  evidenceCount: number;
  effectiveEvidenceWeight: number;
  sufficiencyStatus: EvidenceSufficiencyStatus;
  confidenceScore: number; // 0-100
  confidenceLevel: ConfidenceLevel;
  tendencies: TendencyScore[];
  primaryTendency: TendencyScore | null;
  evidenceRecords: QuestionEvidenceRecord[];
  transparencyNote: string;
  ruleVersion: string;
}

export interface SkillEvidenceItem {
  questionId: string;
  optionId: string;
  summaryLabel: string;
  sourceQuestion: string;
  indicators: AssessmentIndicator[];
  classification: SkillMaturityClassification;
}

export interface SkillProfileBreakdown {
  possessedSkills: SkillEvidenceItem[];
  learningGoals: SkillEvidenceItem[];
  developingAreas: SkillEvidenceItem[];
  nonCareerPossessedSkills?: SkillEvidenceItem[];
}

export interface CustomOtherAnswerRecord {
  questionId: string;
  questionText: string;
  optionLabel: string;
  customText: string;
}

export interface FlexibleResponseSummary {
  skippedQuestionIds: string[];
  skippedCount: number;
  dontKnowCount: number;
  noneFitCount: number;
  otherCustomAnswers: CustomOtherAnswerRecord[];
  uncataloguedInterestsDetected: boolean;
  careerAntiPreferences: string[];
}

export interface ScoringInput {
  answers: Record<string, StudentQuizAnswer> | StudentQuizAnswer[];
  plannedSequence?: string[];
  /**
   * Optional session context metadata recorded for audit continuity only.
   * Note: initialDirection and major MUST NOT bias or restrict dimension scores.
   */
  sessionContext?: {
    initialDirection?: FuturePathId | null;
    major?: SmkMajor | '';
  };
}

export interface StudentProfileAssessment {
  ruleVersion: string;
  evaluatedAt: string;
  isCompleteSession: boolean;
  totalSubmittedAnswers: number;
  validAnsweredCount: number;
  rejectedAnswerCount: number;
  dimensions: Record<ProfileDimensionId, DimensionScoreResult>;
  dimensionList: DimensionScoreResult[];
  skillProfile: SkillProfileBreakdown;
  indicatorTotals: Record<AssessmentIndicator, number>;
  domainAffinities?: Record<CareerDomainId, number>;
  flexibleResponseSummary?: FlexibleResponseSummary;
  overallSufficiency: EvidenceSufficiencyStatus;
  overallConfidenceScore: number;
  auditSummary: {
    usedQuestionIds: string[];
    rejectedEntries: Array<{ questionId: string; reason: string }>;
    directionRecordedWithoutBias: FuturePathId | null;
    majorRecordedWithoutBias: SmkMajor | '';
  };
}

