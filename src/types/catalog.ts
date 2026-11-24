/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7: Verified Production Catalog Types & Source Verification Contracts
 */

export type VerificationStatus = 'VERIFIED' | 'PARTIALLY_VERIFIED' | 'UNVERIFIED';

export type CatalogSourceCategory =
  | 'government'
  | 'higher_education'
  | 'training_body'
  | 'occupational_standard'
  | 'other_official';

export interface CatalogSourceRecord {
  id: string;
  title: string;
  publisher: string;
  url?: string;
  verifiedAt: string; // YYYY-MM-DD
  supportedClaims: string[];
  sourceType: CatalogSourceCategory;
  status: VerificationStatus;
}

export interface WorkCatalogDetail {
  fieldName: string;
  activityOverview: string;
  generalResponsibilities: string[];
  requiredCompetencies: string[];
  beginnerLearnableSkills: string[];
  educationOrTrainingNotes: string;
  workEnvironments: string[];
  /** Explicitly separates general occupational field exploration from live job vacancies */
  isVacancyListing: false;
}

export interface StudyCatalogDetail {
  studyFieldName: string;
  studentFriendlyDescription: string;
  typicalCoreTopics: string[];
  academicOrPracticeActivities: string[];
  relevantSkills: string[];
  careerConnections: string[];
  verifiedEntryPathwaysNote: string;
  /** Explicitly indicates general study taxonomy without fabricated institution/tuition claims */
  isSpecificInstitutionProgram: false;
}

export interface EntrepreneurshipCatalogDetail {
  businessConceptName: string;
  productOrServiceOverview: string;
  problemOrNeedServed: string;
  targetUsers: string[];
  requiredSkills: string[];
  learnableSkills: string[];
  startingProcessOverview: string[];
  challengesAndRisks: string[];
  resourceRequirementsNote: string;
  /** Never fabricates nominal startup capital, revenue, or profit guarantees */
  capitalAmountStatus: 'belum_tersedia';
}

export const UNAVAILABLE_INCOME_FALLBACK_TEXT =
  'Informasi kisaran penghasilan belum tersedia dari sumber yang cukup tepercaya.' as const;

export type IncomeRangeInfo =
  | {
      status: 'available';
      rangeText: string;
      experienceLevel: string;
      locationContext: string;
      sourceTitle: string;
      sourcePublisher: string;
      verifiedAt: string;
    }
  | {
      status: 'unavailable';
      fallbackText: typeof UNAVAILABLE_INCOME_FALLBACK_TEXT;
    };

export interface CareerInsightProfile {
  fieldOverview: {
    simpleExplanation: string;
    purposeAndScope: string;
    realLifeExamples: string[];
  };
  activitiesAndResponsibilities: {
    heading: string;
    items: string[];
  };
  environmentAndWorkStyle: {
    settingSummary: string;
    socialInteraction: string;
    workRhythm: string;
  };
  skillsSeparated: {
    hardSkills: string[];
    softSkills: string[];
    beginnerStarterSkills: string[];
  };
  educationAndRequirements: {
    generalEducationPaths: string[];
    nonFormalOrTraining: string[];
    regulatoryOrCertificationNotes: string[];
  };
  incomeInfo: IncomeRangeInfo;
  /** Track-specific qualitative context for Bekerja/Kuliah/Wirausaha without fabricating amounts */
  financialContext?: {
    sectionHeading: string;
    qualitativeTitle: string;
    qualitativeFactors: string[];
    guidanceNote: string;
  };
  challengesAndPreparation: {
    challenges: string[];
    preparations: string[];
  };
  growthOpportunities: {
    progressionPath: string[];
    specializationOrPathSwitch: string;
    futureRelevanceNote: string;
  };
  /** Audited candidate-specific concrete first step (Phase 7.6) */
  starterActionStep?: string;
  trackSpecificHighlights?: {
    trackLabel: 'Bekerja' | 'Kuliah' | 'Wirausaha';
    bulletHeading: string;
    bullets: string[];
    extraNote?: string;
  };
}

export interface ProductionCatalogMetadata {
  verificationStatus: VerificationStatus;
  lastVerifiedDate: string;
  verificationLimitations: string[];
  sources: CatalogSourceRecord[];
  workDetail?: WorkCatalogDetail;
  studyDetail?: StudyCatalogDetail;
  entrepreneurshipDetail?: EntrepreneurshipCatalogDetail;
  careerInsight?: CareerInsightProfile;
}

export interface CatalogPathAvailability {
  bekerja: {
    verifiedCount: number;
    partiallyVerifiedCount: number;
    excludedUnverifiedCount: number;
    simulationFallbackCount: number;
  };
  kuliah: {
    verifiedCount: number;
    partiallyVerifiedCount: number;
    excludedUnverifiedCount: number;
    simulationFallbackCount: number;
  };
  wirausaha: {
    verifiedCount: number;
    partiallyVerifiedCount: number;
    excludedUnverifiedCount: number;
    simulationFallbackCount: number;
  };
}

export interface CatalogValidationReport {
  isValid: boolean;
  totalInspected: number;
  eligibleCount: number;
  duplicateIds: string[];
  excludedUnverifiedIds: string[];
  invalidSourceCandidateIds: string[];
  errors: string[];
}

