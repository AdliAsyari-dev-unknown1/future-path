/**
 * Recommendation and career/education catalog types.
 * Preserves Phase 1-3 UI metadata contracts and defines Phase 5
 * evidence-based recommendation matching contracts.
 */

import { FuturePathId, SmkMajor } from './student';
import { AssessmentDimension, AssessmentIndicator, CareerDomainId } from './assessment';
import {
  EvidenceSufficiencyStatus,
  ProfileDimensionId
} from './scoring';
import {
  CatalogPathAvailability,
  ProductionCatalogMetadata
} from './catalog';

export interface FuturePathMeta {
  id: FuturePathId;
  title: string;
  badgeLabel: string;
  tagline: string;
  summary: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  borderHover: string;
  iconName: 'Briefcase' | 'GraduationCap' | 'Rocket' | 'Compass';
  idealFor: string[];
  keyStrengths: string[];
  typicalChallenge: string;
  smkContextTip: string;
}

export interface CareerItem {
  id: string;
  title: string;
  field: string;
  relevantSmkMajors: string[];
  entryRequirements: string;
  growthPotential: 'Tinggi' | 'Sangat Tinggi' | 'Stabil';
  shortDescription: string;
}

export interface CampusOrMajorItem {
  id: string;
  name: string;
  type: 'Politeknik Vokasi (D3/D4)' | 'Universitas Akademik (S1)' | 'Institut Teknologi';
  location: string;
  focusArea: string;
  recommendedPathway: string;
}

export interface BusinessOpportunityItem {
  id: string;
  name: string;
  sector: 'Digital & Teknologi' | 'Jasa Kreatif' | 'Manufaktur & Teknik' | 'F&B & Retail';
  startupCapitalBand: 'Ringan (< 2 Juta)' | 'Sedang (2 - 10 Juta)' | 'Menengah (> 10 Juta)';
  description: string;
}

export interface PathScoringResult {
  primaryPath: FuturePathId;
  secondaryPath?: FuturePathId;
  scores: Record<FuturePathId, number>;
  dimensionBreakdown: Record<AssessmentDimension, number>;
  summaryInsight: string;
  recommendedActionSteps: string[];
}

// ============================================================================
// PHASE 5: EVIDENCE-BASED RECOMMENDATION MATCHING CONTRACTS
// ============================================================================

export type RecommendationPathCategory = 'bekerja' | 'kuliah' | 'wirausaha';

export type MatchingSufficiencyStatus = 'memadai' | 'terbatas' | 'belum_cukup';

export type MatchingConfidenceLevel = 'tinggi' | 'sedang' | 'rendah';

export type CandidateResourceProfile =
  | 'structured_industry'
  | 'academic_study'
  | 'low_capital_service'
  | 'moderate_resource';

export interface RecommendationCandidate {
  id: string;
  /** Clearly marks Phase 5 simulation fixture vs Phase 7 verified production catalog */
  isSimulationFixture: boolean;
  pathCategory: RecommendationPathCategory;
  name: string;
  categoryLabel: string;
  shortDescription: string;
  characteristics: string[];
  relevantDimensions: ProfileDimensionId[];
  /** Custom per-candidate weights summing to ~1.0 */
  dimensionWeights: Record<ProfileDimensionId, number>;
  /** Target dimension profile levels (0-100) representing realistic alignment */
  dimensionExpectations: Record<ProfileDimensionId, number>;
  /** Preferred qualitative tendency IDs within each dimension */
  preferredTendencies: Partial<Record<ProfileDimensionId, string[]>>;
  supportingIndicators: AssessmentIndicator[];
  requiredBasicSkills: string[];
  developableSkills: string[];
  requirementsOrConstraints: string[];
  resourceProfile: CandidateResourceProfile;
  /** Details explicitly pending verified Phase 7 production catalog */
  missingCatalogInfo: string[];
  /** Optional domain classification for Phase 7.3 career-domain precision matching & theming */
  domainId?: CareerDomainId;
  secondaryDomains?: CareerDomainId[];
  /** Optional contextual link only — NEVER used to restrict or bias matching score */
  contextRelatedMajors?: SmkMajor[];
  /** Phase 7 verified production catalog details & source traceability */
  productionMetadata?: ProductionCatalogMetadata;
}

export interface DimensionFitDetail {
  dimensionId: ProfileDimensionId;
  dimensionLabel: string;
  studentScore: number | null;
  candidateExpectation: number;
  candidateWeight: number;
  effectiveWeightShare: number;
  sufficiencyStatus: EvidenceSufficiencyStatus;
  tendencyFitScore: number; // 0-1
  dimensionFitScore: number | null; // 0-100 when sufficient/limited, null when belum_cukup
  includedInCalculation: boolean;
  note: string;
}

export interface SupportingQuestionEvidenceItem {
  questionId: string;
  questionText: string;
  selectedOptionId: string;
  selectedOptionLabel: string;
  matchedIndicators: AssessmentIndicator[];
  relevantDimensionLabel: string;
}

export interface CandidateSkillAlignment {
  currentSkillMatches: string[];
  learningInterestMatches: string[];
  skillsToDevelop: string[];
}

export interface CandidateMatchResult {
  candidate: RecommendationCandidate;
  /** 0-100 when evidence is sufficient/limited; null when evidence is belum_cukup */
  matchScore: number | null;
  matchSufficiency: MatchingSufficiencyStatus;
  confidenceLevel: MatchingConfidenceLevel;
  dimensionFitBreakdown: Record<ProfileDimensionId, DimensionFitDetail>;
  skillAlignment: CandidateSkillAlignment;
  reasonsConsidered: string[];
  supportingQuestionEvidence: SupportingQuestionEvidenceItem[];
  mismatchedOrUnknownAspects: string[];
  developableSkills: string[];
  requirementsAndConsiderations: string[];
  /** True only if student's SMK major is in candidate.contextRelatedMajors (never affects score) */
  isMajorRelatedContext: boolean;
}

export interface RecommendationMatchingInput {
  profileAssessment: import('./scoring').StudentProfileAssessment;
  initialDirection: FuturePathId | null;
  studentMajor?: SmkMajor | '';
  /** Optional custom candidate list (defaults to Phase 5 simulation fixture catalog) */
  candidates?: RecommendationCandidate[];
}

export type CatalogMode =
  | 'simulation_fixture'
  | 'production_verified'
  | 'hybrid_catalog'
  | 'empty_catalog';

export interface RecommendationMatchingOutput {
  ruleVersion: string;
  generatedAt: string;
  catalogMode: CatalogMode;
  catalogSummary?: {
    productionCount: number;
    simulationCount: number;
    verifiedCount: number;
    partiallyVerifiedCount: number;
    excludedUnverifiedCount: number;
    pathAvailability: CatalogPathAvailability;
  };
  selectedInitialDirection: FuturePathId | null;
  exploratoryMode: boolean;
  overallMatchingSufficiency: MatchingSufficiencyStatus;
  overallUncertaintyNote: string | null;
  activePathRecommendations: CandidateMatchResult[];
  crossPathExplorations: Record<RecommendationPathCategory, CandidateMatchResult[]>;
  auditMetadata: {
    profileRuleVersion: string;
    validAnsweredCount: number;
    majorRecordedWithoutBias: SmkMajor | '';
    directionRecordedWithoutBias: FuturePathId | null;
    candidateCountEvaluated: number;
    duplicateCandidateIdsDetected: boolean;
  };
}
