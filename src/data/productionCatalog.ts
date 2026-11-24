/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7, 7.3 & 7.7: Verified Production Catalog Aggregator (109 Active Candidates)
 *
 * Combines expanded source-backed catalogs across:
 * 1. Jalur Bekerja (`catalogWork.ts` — 43 occupational fields)
 * 2. Jalur Kuliah (`catalogStudy.ts` — 38 general higher-education fields)
 * 3. Jalur Wirausaha (`catalogEntrepreneurship.ts` — 28 starter business concepts)
 *
 * Preserves quarantined `UNVERIFIED_DRAFT_CANDIDATES` to enforce transparent governance.
 */

import { RecommendationCandidate } from '../types/recommendation';
import { PRODUCTION_WORK_CATALOG } from './catalogWork';
import { PRODUCTION_STUDY_CATALOG } from './catalogStudy';
import { PRODUCTION_ENTREPRENEURSHIP_CATALOG } from './catalogEntrepreneurship';

export {
  PRODUCTION_WORK_CATALOG,
  PRODUCTION_STUDY_CATALOG,
  PRODUCTION_ENTREPRENEURSHIP_CATALOG
};

export const PRODUCTION_CATALOG_CANDIDATES: RecommendationCandidate[] = [
  ...PRODUCTION_WORK_CATALOG,
  ...PRODUCTION_STUDY_CATALOG,
  ...PRODUCTION_ENTREPRENEURSHIP_CATALOG
];

/**
 * Explicit UNVERIFIED quarantine example used to prove catalog governance:
 * Entries marked UNVERIFIED are NEVER surfaced as verified factual recommendations.
 */
export const UNVERIFIED_DRAFT_CANDIDATES: RecommendationCandidate[] = [
  {
    id: 'DRAFT_UNVERIFIED_EXTERNAL_INTERNSHIP',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    name: 'Draf Belum Terverifikasi — Program Penempatan Industri Eksternal',
    categoryLabel: 'Draf Katalog (Belum Terverifikasi)',
    shortDescription:
      'Contoh entri yang belum memiliki sumber resmi tepercaya dan sengaja dikarantina agar tidak tampil sebagai rekomendasi faktual.',
    characteristics: ['Menunggu pemeriksaan dokumen resmi institusi mitra'],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.2,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.2,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 70,
      kebiasaan: 70,
      kemampuan_saat_ini: 70,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 70
    },
    preferredTendencies: {},
    supportingIndicators: ['technical_affinity'],
    requiredBasicSkills: ['Menunggu verifikasi sumber'],
    developableSkills: ['Menunggu verifikasi sumber'],
    requirementsOrConstraints: ['Belum terverifikasi — tidak untuk ditampilkan sebagai fakta'],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Seluruh sumber resmi dan tanggal verifikasi belum tersedia'],
    productionMetadata: {
      verificationStatus: 'UNVERIFIED',
      lastVerifiedDate: '',
      verificationLimitations: ['Belum memiliki sumber resmi yang dapat diperiksa.'],
      sources: []
    }
  }
];
