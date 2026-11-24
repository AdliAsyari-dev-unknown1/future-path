/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7: Production Catalog Registry, Source Validation & Gatekeeper Service
 *
 * Enforces:
 * 1. Strict separation between verified production candidates (`isSimulationFixture: false`)
 *    and simulation fixtures (`isSimulationFixture: true`).
 * 2. Exclusion of `UNVERIFIED` candidates from active verified recommendations.
 * 3. Source metadata validation (publisher, verifiedAt YYYY-MM-DD, supportedClaims).
 * 4. Duplicate ID detection across catalog entries.
 * 5. Safe per-path simulation fallback or graceful empty handling when production
 *    coverage for a path is not yet available.
 */

import {
  PRODUCTION_CATALOG_CANDIDATES,
  UNVERIFIED_DRAFT_CANDIDATES
} from '../data/productionCatalog';
import { SIMULATION_CANDIDATES } from '../data/simulationCandidates';
import {
  CatalogPathAvailability,
  CatalogSourceRecord,
  CatalogValidationReport,
  VerificationStatus
} from '../types/catalog';
import {
  CatalogMode,
  RecommendationCandidate,
  RecommendationPathCategory
} from '../types/recommendation';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export interface ResolvedCatalogResult {
  eligibleCandidates: RecommendationCandidate[];
  catalogMode: CatalogMode;
  validationReport: CatalogValidationReport;
  catalogSummary: {
    productionCount: number;
    simulationCount: number;
    verifiedCount: number;
    partiallyVerifiedCount: number;
    excludedUnverifiedCount: number;
    pathAvailability: CatalogPathAvailability;
  };
}

export function isValidSourceRecord(source: CatalogSourceRecord): boolean {
  if (!source || typeof source !== 'object') return false;
  if (!source.id?.trim() || !source.title?.trim() || !source.publisher?.trim()) {
    return false;
  }
  if (!DATE_RE.test(source.verifiedAt)) {
    return false;
  }
  if (!Array.isArray(source.supportedClaims) || source.supportedClaims.length === 0) {
    return false;
  }
  if (source.url !== undefined && !/^https:\/\/[a-zA-Z0-9.-]+/.test(source.url)) {
    return false;
  }
  return ['VERIFIED', 'PARTIALLY_VERIFIED', 'UNVERIFIED'].includes(source.status);
}

export function detectDuplicateCatalogIds(candidates: RecommendationCandidate[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const cand of candidates) {
    if (!cand?.id) continue;
    if (seen.has(cand.id)) {
      duplicates.add(cand.id);
    }
    seen.add(cand.id);
  }
  return Array.from(duplicates);
}

function hasValidTrackDetail(candidate: RecommendationCandidate): boolean {
  const meta = candidate.productionMetadata;
  if (!meta) return false;
  if (candidate.pathCategory === 'bekerja') {
    const w = meta.workDetail;
    return Boolean(
      w &&
        w.isVacancyListing === false &&
        w.fieldName?.trim() &&
        w.activityOverview?.trim() &&
        w.generalResponsibilities.length > 0 &&
        w.requiredCompetencies.length > 0 &&
        w.workEnvironments.length > 0
    );
  }
  if (candidate.pathCategory === 'kuliah') {
    const s = meta.studyDetail;
    return Boolean(
      s &&
        s.isSpecificInstitutionProgram === false &&
        s.studyFieldName?.trim() &&
        s.studentFriendlyDescription?.trim() &&
        s.typicalCoreTopics.length > 0 &&
        s.academicOrPracticeActivities.length > 0 &&
        s.relevantSkills.length > 0
    );
  }
  const e = meta.entrepreneurshipDetail;
  return Boolean(
    e &&
      e.capitalAmountStatus === 'belum_tersedia' &&
      e.businessConceptName?.trim() &&
      e.productOrServiceOverview?.trim() &&
      e.problemOrNeedServed?.trim() &&
      e.targetUsers.length > 0 &&
      e.startingProcessOverview.length > 0 &&
      e.challengesAndRisks.length > 0
  );
}

/**
 * Validates any list of RecommendationCandidate entries (production or simulation),
 * rejecting UNVERIFIED production items, duplicate IDs, and malformed sources.
 */
export function validateCatalogDataset(
  candidates: RecommendationCandidate[]
): {
  eligible: RecommendationCandidate[];
  report: CatalogValidationReport;
} {
  const duplicateIds = detectDuplicateCatalogIds(candidates);
  const seenIds = new Set<string>();
  const eligible: RecommendationCandidate[] = [];
  const excludedUnverifiedIds: string[] = [];
  const invalidSourceCandidateIds: string[] = [];
  const errors: string[] = [];

  if (duplicateIds.length > 0) {
    errors.push(`Duplikasi ID kandidat terdeteksi: ${duplicateIds.join(', ')}`);
  }

  for (const cand of candidates) {
    if (!cand || !cand.id?.trim() || !cand.name?.trim()) {
      errors.push('Ditemukan entri katalog tanpa ID atau nama.');
      continue;
    }

    if (seenIds.has(cand.id)) {
      continue; // Skip duplicate copy safely
    }
    seenIds.add(cand.id);

    // Simulation fixtures remain eligible ONLY as explicitly marked simulation fallbacks
    if (cand.isSimulationFixture) {
      eligible.push(cand);
      continue;
    }

    const meta = cand.productionMetadata;
    if (!meta) {
      invalidSourceCandidateIds.push(cand.id);
      errors.push(`${cand.id}: data produksi wajib memiliki productionMetadata.`);
      continue;
    }

    if (meta.verificationStatus === 'UNVERIFIED') {
      excludedUnverifiedIds.push(cand.id);
      continue;
    }

    if (!DATE_RE.test(meta.lastVerifiedDate)) {
      invalidSourceCandidateIds.push(cand.id);
      errors.push(`${cand.id}: tanggal verifikasi tidak valid (${meta.lastVerifiedDate}).`);
      continue;
    }

    if (!Array.isArray(meta.sources) || meta.sources.length === 0) {
      excludedUnverifiedIds.push(cand.id);
      errors.push(`${cand.id}: data tanpa sumber valid otomatis dikecualikan.`);
      continue;
    }

    const allSourcesValid = meta.sources.every((s) => isValidSourceRecord(s));
    const hasVerifiedSupport = meta.sources.some((s) => s.status !== 'UNVERIFIED');
    if (!allSourcesValid || !hasVerifiedSupport) {
      invalidSourceCandidateIds.push(cand.id);
      errors.push(`${cand.id}: format sumber tidak valid atau seluruh sumber berstatus UNVERIFIED.`);
      continue;
    }

    if (!hasValidTrackDetail(cand)) {
      invalidSourceCandidateIds.push(cand.id);
      errors.push(`${cand.id}: struktur detail faktual jalur ${cand.pathCategory} tidak lengkap.`);
      continue;
    }

    eligible.push(cand);
  }

  return {
    eligible,
    report: {
      isValid: duplicateIds.length === 0 && invalidSourceCandidateIds.length === 0,
      totalInspected: candidates.length,
      eligibleCount: eligible.length,
      duplicateIds,
      excludedUnverifiedIds,
      invalidSourceCandidateIds,
      errors
    }
  };
}

export function getCandidateVerificationStatus(
  candidate: RecommendationCandidate
): VerificationStatus | 'SIMULATION' {
  if (candidate.isSimulationFixture) return 'SIMULATION';
  return candidate.productionMetadata?.verificationStatus ?? 'UNVERIFIED';
}

export function summarizeCatalogAvailability(
  eligibleCandidates: RecommendationCandidate[],
  excludedUnverifiedCount = 0
): ResolvedCatalogResult['catalogSummary'] {
  const pathAvailability: CatalogPathAvailability = {
    bekerja: { verifiedCount: 0, partiallyVerifiedCount: 0, excludedUnverifiedCount: 0, simulationFallbackCount: 0 },
    kuliah: { verifiedCount: 0, partiallyVerifiedCount: 0, excludedUnverifiedCount: 0, simulationFallbackCount: 0 },
    wirausaha: { verifiedCount: 0, partiallyVerifiedCount: 0, excludedUnverifiedCount: 0, simulationFallbackCount: 0 }
  };

  let productionCount = 0;
  let simulationCount = 0;
  let verifiedCount = 0;
  let partiallyVerifiedCount = 0;

  for (const cand of eligibleCandidates) {
    const bucket = pathAvailability[cand.pathCategory];
    if (cand.isSimulationFixture) {
      simulationCount++;
      bucket.simulationFallbackCount++;
      continue;
    }
    productionCount++;
    const status = cand.productionMetadata?.verificationStatus ?? 'UNVERIFIED';
    if (status === 'VERIFIED') {
      verifiedCount++;
      bucket.verifiedCount++;
    } else if (status === 'PARTIALLY_VERIFIED') {
      partiallyVerifiedCount++;
      bucket.partiallyVerifiedCount++;
    }
  }

  return {
    productionCount,
    simulationCount,
    verifiedCount,
    partiallyVerifiedCount,
    excludedUnverifiedCount,
    pathAvailability
  };
}

export function inferCatalogMode(
  candidates: RecommendationCandidate[]
): CatalogMode {
  if (candidates.length === 0) return 'empty_catalog';
  const hasProd = candidates.some((c) => !c.isSimulationFixture);
  const hasSim = candidates.some((c) => c.isSimulationFixture);
  if (hasProd && hasSim) return 'hybrid_catalog';
  if (hasProd) return 'production_verified';
  return 'simulation_fixture';
}

/**
 * Resolves the active catalog candidates safely:
 * - Includes verified / partially-verified production candidates
 * - Quarantines UNVERIFIED candidates automatically
 * - Applies per-path simulation fallback ONLY for pathways lacking verified entries
 *   (when allowSimulationFallback !== false)
 */
export function resolveActiveCatalog(options?: {
  productionPool?: RecommendationCandidate[];
  simulationFallbackPool?: RecommendationCandidate[];
  allowSimulationFallback?: boolean;
}): ResolvedCatalogResult {
  const productionPool = options?.productionPool ?? [
    ...PRODUCTION_CATALOG_CANDIDATES,
    ...UNVERIFIED_DRAFT_CANDIDATES
  ];
  const simulationPool = options?.simulationFallbackPool ?? SIMULATION_CANDIDATES;
  const allowFallback = options?.allowSimulationFallback ?? true;

  const { eligible: eligibleProd, report } = validateCatalogDataset(productionPool);

  const finalCandidates: RecommendationCandidate[] = [...eligibleProd];

  const paths: RecommendationPathCategory[] = ['bekerja', 'kuliah', 'wirausaha'];
  if (allowFallback) {
    for (const path of paths) {
      const hasProdForPath = eligibleProd.some((c) => c.pathCategory === path);
      if (!hasProdForPath) {
        const simForPath = simulationPool.filter(
          (c) => c.pathCategory === path && c.isSimulationFixture
        );
        finalCandidates.push(...simForPath);
      }
    }
  }

  const catalogMode = inferCatalogMode(finalCandidates);
  const catalogSummary = summarizeCatalogAvailability(
    finalCandidates,
    report.excludedUnverifiedIds.length
  );

  for (const cand of productionPool) {
    if (!cand.isSimulationFixture && cand.productionMetadata?.verificationStatus === 'UNVERIFIED') {
      catalogSummary.pathAvailability[cand.pathCategory].excludedUnverifiedCount++;
    }
  }

  return {
    eligibleCandidates: finalCandidates,
    catalogMode,
    validationReport: report,
    catalogSummary
  };
}
