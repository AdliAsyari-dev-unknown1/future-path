/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7.9: Result Exploration, 13-Domain Representation & Multi-Field Search Service
 *
 * Pure read-only exploration helper over the active recommendation pool.
 * Guarantees:
 * - Never modifies assessment answers, profile scores, or candidate matchScore.
 * - Never fabricates salaries, startup capital, campuses, or active vacancies.
 * - Provides distinct metadata for all 13 career domains and honest track-availability notes.
 */

import { CATALOG_STARTER_ACTIONS } from '../data/catalogStarterActions';
import { CareerDomainId } from '../types/assessment';
import {
  CandidateMatchResult,
  RecommendationCandidate,
  RecommendationPathCategory
} from '../types/recommendation';
import { DomainVisualKind, inferDomainVisual } from './resultNarrativeBuilder';

export type ExplorationTrackFilter = 'all' | RecommendationPathCategory;
export type ExplorationDomainFilter = 'all' | CareerDomainId;

export interface CareerDomainMetadata {
  id: CareerDomainId;
  label: string;
  shortLabel: string;
  visualKind: DomainVisualKind;
  description: string;
  exampleActivities: string;
}

export const ORDERED_CAREER_DOMAINS: CareerDomainMetadata[] = [
  {
    id: 'teknologi_informatika',
    label: 'Teknologi Informatika',
    shortLabel: 'Teknologi & IT',
    visualKind: 'tech',
    description:
      'Berfokus pada perancangan perangkat lunak, pengelolaan jaringan komputer, analisis data digital, serta dukungan teknis perangkat dan sistem informasi.',
    exampleActivities: 'Ngoding web/aplikasi, pasang jaringan Wi-Fi/LAN, cek bug sistem, dan merapikan database.'
  },
  {
    id: 'teknik_industri',
    label: 'Teknik Industri',
    shortLabel: 'Teknik & Industri',
    visualKind: 'engineering',
    description:
      'Mencakup perakitan, perawatan, perbaikan, dan gambar teknik untuk mesin, kelistrikan, otomotif, konstruksi, garmen, serta peralatan produksi nyata.',
    exampleActivities: 'Membaca gambar teknik, menyervis komponen mesin/listrik, menjahit/membuat barang fisik, dan menjaga keselamatan alat.'
  },
  {
    id: 'hukum_keadilan',
    label: 'Hukum & Keadilan',
    shortLabel: 'Hukum & Kebijakan',
    visualKind: 'law',
    description:
      'Membahas aturan perundang-undangan, tata kelola pemerintahan, kepatuhan prosedur, penyelesaian sengketa, serta tertib berkas administrasi hukum.',
    exampleActivities: 'Menelaah pasal/aturan, menyusun dokumen legal atau arsip kepatuhan, dan meneliti kebijakan publik.'
  },
  {
    id: 'bahasa_sastra',
    label: 'Bahasa & Sastra',
    shortLabel: 'Bahasa & Penulisan',
    visualKind: 'language',
    description:
      'Mengolah kemampuan berbahasa Indonesia maupun bahasa asing untuk penulisan naskah, penyuntingan teks, penerjemahan, dan kajian karya tulis.',
    exampleActivities: 'Menulis artikel/naskah, menyunting ejaan agar jernih dibaca, dan menerjemahkan materi lintas bahasa.'
  },
  {
    id: 'pendidikan',
    label: 'Pendidikan',
    shortLabel: 'Pendidikan',
    visualKind: 'education',
    description:
      'Berorientasi pada pendampingan belajar, penyampaian materi yang mudah dipahami, penyiapan perangkat ajar/lab sekolah, dan pembinaan peserta didik.',
    exampleActivities: 'Membimbing latihan soal, menyiapkan bahan ajar/alat praktikum, dan memfasilitasi kelas belajar.'
  },
  {
    id: 'kesehatan',
    label: 'Kesehatan',
    shortLabel: 'Kesehatan',
    visualKind: 'health',
    description:
      'Berhubungan dengan pelayanan kesehatan masyarakat, ilmu gizi, keselamatan dan kesehatan kerja (K3), serta dukungan administrasi/farmasi non-medis sesuai jenjang.',
    exampleActivities: 'Mengedukasi gizi seimbang, memeriksa kelengkapan APD/K3, dan mendampingi layanan administrasi klinik.'
  },
  {
    id: 'bisnis_ekonomi',
    label: 'Bisnis & Ekonomi',
    shortLabel: 'Bisnis & Ekonomi',
    visualKind: 'business',
    description:
      'Menangani pemasaran produk, penjualan ritel, pengelolaan kas dan akuntansi dasar, perencanaan usaha, serta pelayanan pelanggan yang rapi dan jujur.',
    exampleActivities: 'Menghitung arus kas, menata display barang toko, mengelola transaksi online, dan menganalisis kebutuhan pembeli.'
  },
  {
    id: 'komunikasi_media',
    label: 'Komunikasi & Media',
    shortLabel: 'Komunikasi & Media',
    visualKind: 'communication',
    description:
      'Menggabungkan penyampaian pesan publik, produksi audio-siaran, manajemen acara, jurnalistik, serta pengelolaan media sosial dan promosi.',
    exampleActivities: 'Mengatur tata suara/siaran, menyiapkan acara pameran, menulis siaran berita, dan mengelola kalender konten.'
  },
  {
    id: 'psikologi_sosial',
    label: 'Psikologi & Sosial',
    shortLabel: 'Sosial & SDM',
    visualKind: 'psychology',
    description:
      'Memahami perilaku manusia, dukungan sumber daya manusia (HR), fasilitasi komunitas, dan pendampingan sosial kemasyarakatan secara empatik.',
    exampleActivities: 'Menjadwalkan wawancara kerja, memfasilitasi kegiatan warga/pemuda, dan mempelajari dinamika perilaku tim.'
  },
  {
    id: 'seni_desain',
    label: 'Seni & Desain',
    shortLabel: 'Seni & Desain',
    visualKind: 'creative',
    description:
      'Mengekspresikan ide visual dan estetika melalui desain grafis, ilustrasi, fotografi, penyuntingan video, animasi, kriya tangan, hingga rancang ruang.',
    exampleActivities: 'Merancang poster/identitas visual, memotret produk, mengedit video, dan membuat kerajinan kustom.'
  },
  {
    id: 'pertanian_lingkungan',
    label: 'Pertanian & Lingkungan',
    shortLabel: 'Pertanian & Lingkungan',
    visualKind: 'agro',
    description:
      'Meliputi budidaya tanaman, hidroponik, pengolahan hasil pangan lokal, agribisnis, serta pelestarian kebersihan tanah, air, dan lingkungan sekitar.',
    exampleActivities: 'Merawat bibit dan nutrisi hidroponik, menyortir mutu hasil panen, dan memantau pengelolaan limbah/lingkungan.'
  },
  {
    id: 'pariwisata_kuliner',
    label: 'Pariwisata & Kuliner',
    shortLabel: 'Pariwisata & Kuliner',
    visualKind: 'hospitality',
    description:
      'Menyatukan keterampilan pengolahan makanan-minuman (tata boga/F&B), pelayanan tamu perhotelan, serta perancangan pengalaman wisata lokal.',
    exampleActivities: 'Meracik menu makanan/minuman, menyambut tamu hotel/wisata, dan menjaga standar kebersihan dapur saji.'
  },
  {
    id: 'administrasi_logistik',
    label: 'Administrasi & Logistik',
    shortLabel: 'Administrasi & Logistik',
    visualKind: 'admin',
    description:
      'Mengatur ketertiban dokumen, pengarsipan digital, pencatatan stok gudang, pemeriksaan mutu (QC), serta alur distribusi dan pengiriman barang.',
    exampleActivities: 'Mencatat barang masuk-keluar gudang, memeriksa kesesuaian mutu produk, dan merapikan arsip administrasi.'
  }
];

export const CAREER_DOMAIN_MAP: Record<CareerDomainId, CareerDomainMetadata> =
  ORDERED_CAREER_DOMAINS.reduce(
    (acc, item) => {
      acc[item.id] = item;
      return acc;
    },
    {} as Record<CareerDomainId, CareerDomainMetadata>
  );

export interface PathComparisonSummary {
  pathCategory: RecommendationPathCategory;
  title: string;
  tagline: string;
  mainFocus: string;
  dailyRhythm: string;
  honestNote: string;
}

export const PATH_COMPARISON_SUMMARIES: PathComparisonSummary[] = [
  {
    pathCategory: 'bekerja',
    title: 'Jalur Bekerja',
    tagline: 'Langsung praktik keterampilan & masuk ritme kerja',
    mainFocus: 'Menjalankan peran operasional, teknis, layanan, atau administrasi di dunia kerja nyata.',
    dailyRhythm: 'Mengikuti jadwal kerja tim/perusahaan, menyelesaikan tugas konkret harian, dan mengasah pengalaman lapangan.',
    honestNote: 'Gambaran bidang kerja umum untuk eksplorasi (bukan info lowongan kerja aktif atau nominal gaji).'
  },
  {
    pathCategory: 'kuliah',
    title: 'Jalur Kuliah',
    tagline: 'Mendalami teori, praktik laboratorium & jenjang profesi',
    mainFocus: 'Mempelajari konsep keilmuan dan keterampilan terapan secara terstruktur di program D3, D4, atau S1.',
    dailyRhythm: 'Mengikuti perkuliahan, praktikum/tugas proyek, diskusi akademik, dan persiapan karier profesional jangka panjang.',
    honestNote: 'Gambaran bidang studi umum (tanpa daftar nama kampus, akreditasi, jalur penerimaan rinci, atau biaya UKT).'
  },
  {
    pathCategory: 'wirausaha',
    title: 'Jalur Wirausaha',
    tagline: 'Membangun layanan atau produk mandiri bertahap',
    mainFocus: 'Mengubah keahlian atau kepekaan terhadap kebutuhan sekitar menjadi jasa atau produk kecil yang dikelola sendiri.',
    dailyRhythm: 'Menyiapkan produk/layanan, melayani pelanggan langsung, menjaga kualitas, dan mencatat arus kas sederhana.',
    honestNote: 'Contoh ide usaha pemula (nominal modal awal, perkiraan omzet, dan keuntungan tidak direka-reka).'
  }
];

export interface TrackSummaryFacts {
  trackLabel: string;
  items: Array<{ label: string; value: string }>;
  starterStep: string;
}

export function extractTrackSummaryFacts(candidate: RecommendationCandidate): TrackSummaryFacts {
  const meta = candidate.productionMetadata;
  const starterStep =
    CATALOG_STARTER_ACTIONS[candidate.id] ||
    (candidate.pathCategory === 'wirausaha'
      ? meta?.entrepreneurshipDetail?.startingProcessOverview?.[0]
      : candidate.pathCategory === 'kuliah'
      ? meta?.studyDetail?.academicOrPracticeActivities?.[0]
      : meta?.workDetail?.generalResponsibilities?.[0]) ||
    'Mulai dari latihan sederhana sesuai bidang ini untuk mengenali kecocokannya secara nyata.';

  if (candidate.pathCategory === 'bekerja') {
    const wd = meta?.workDetail;
    const envs = wd?.workEnvironments?.slice(0, 2).join('; ') || 'Lingkungan kerja operasional sesuai bidang';
    const skills =
      (wd?.requiredCompetencies?.length ? wd.requiredCompetencies : candidate.requiredBasicSkills)
        .slice(0, 2)
        .join('; ') || 'Keterampilan dasar dan ketelitian kerja';
    return {
      trackLabel: 'Fakta Jalur Bekerja',
      items: [
        { label: 'Lingkungan Kerja', value: envs },
        { label: 'Keterampilan Diperlukan', value: skills },
        { label: 'Persiapan Awal', value: starterStep }
      ],
      starterStep
    };
  }

  if (candidate.pathCategory === 'kuliah') {
    const sd = meta?.studyDetail;
    const devSkills =
      (sd?.relevantSkills?.length ? sd.relevantSkills : candidate.developableSkills)
        .slice(0, 2)
        .join('; ') || 'Analisis konsep dan praktik terapan bidang studi';
    const careerHint =
      sd?.careerConnections?.slice(0, 2).join('; ') ||
      'Beragam peran profesional dan terapan yang relevan dengan bidang studi ini';
    const reqNote = candidate.requirementsOrConstraints?.[0] || '';
    const items: Array<{ label: string; value: string }> = [
      { label: 'Skill Dikembangkan', value: devSkills },
      { label: 'Gambaran Arah Karier', value: careerHint }
    ];
    if (reqNote) {
      items.push({ label: 'Catatan & Persyaratan', value: reqNote });
    }
    return {
      trackLabel: 'Fakta Bidang Studi',
      items,
      starterStep
    };
  }

  const ed = meta?.entrepreneurshipDetail;
  const productOffer =
    ed?.productOrServiceOverview || candidate.shortDescription;
  const targetCustomers = ed?.targetUsers?.length
    ? ed.targetUsers.slice(0, 3).join(', ')
    : ed?.problemOrNeedServed || 'Pelajar, warga sekitar, atau pelaku usaha lokal';
  const reqSkills =
    (ed?.requiredSkills?.length ? ed.requiredSkills : candidate.requiredBasicSkills)
      .slice(0, 2)
      .join('; ') || 'Keterampilan dasar produk/jasa dan komunikasi jujur ke pembeli';

  return {
    trackLabel: 'Fakta Ide Wirausaha',
    items: [
      { label: 'Produk / Jasa', value: productOffer },
      { label: 'Calon Pelanggan', value: targetCustomers },
      { label: 'Keterampilan Dibutuhkan', value: reqSkills },
      { label: 'Langkah Awal', value: starterStep }
    ],
    starterStep
  };
}

function normalizeSearchStr(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const DOMAIN_SEARCH_ALIASES: Partial<Record<CareerDomainId, string>> = {
  pariwisata_kuliner: 'makanan minuman masak boga kuliner jajanan kue roti kopi teh wisata hotel',
  teknologi_informatika: 'it komputer aplikasi coding program web jaringan wifi laptop software',
  teknik_industri: 'mesin bengkel listrik otomotif motor las manufaktur jahit garmen',
  seni_desain: 'desain grafis visual gambar ilustrasi foto video animasi kreatif',
  komunikasi_media: 'komunikasi media sosial promosi konten siaran berita acara',
  administrasi_logistik: 'admin administrasi kantor arsip dokumen gudang stok logistik pengiriman',
  bisnis_ekonomi: 'bisnis dagang jualan toko kasir akuntansi keuangan usaha',
  pertanian_lingkungan: 'pertanian tanaman kebun hidroponik pangan alam lingkungan',
  kesehatan: 'kesehatan medis klinik gizi obat apotek k3 perawat',
  pendidikan: 'pendidikan guru mengajar les tutor belajar kelas sekolah',
  hukum_keadilan: 'hukum aturan peraturan pemerintahan kontrak arsip legal',
  bahasa_sastra: 'bahasa sastra tulis menulis artikel naskah terjemahan',
  psikologi_sosial: 'psikologi sosial masyarakat konseling komunitas sdm hr'
};

export function buildCandidateSearchText(candidate: RecommendationCandidate): string {
  const domId = candidate.domainId;
  const domMeta = domId ? CAREER_DOMAIN_MAP[domId] : undefined;
  const meta = candidate.productionMetadata;
  const wd = meta?.workDetail;
  const sd = meta?.studyDetail;
  const ed = meta?.entrepreneurshipDetail;

  const trackSynonyms =
    candidate.pathCategory === 'bekerja'
      ? 'bekerja kerja pekerjaan karier profesi'
      : candidate.pathCategory === 'kuliah'
      ? 'kuliah studi jurusan kampus sarjana vokasi'
      : 'wirausaha usaha bisnis jualan jasa mandiri';

  const parts: Array<string | undefined> = [
    candidate.name,
    candidate.categoryLabel,
    candidate.shortDescription,
    trackSynonyms,
    domMeta?.label,
    domMeta?.shortLabel,
    domMeta?.description,
    domId ? DOMAIN_SEARCH_ALIASES[domId] : undefined,
    ...(candidate.secondaryDomains ?? []).map((sdId) => CAREER_DOMAIN_MAP[sdId]?.label),
    ...candidate.characteristics,
    ...candidate.requiredBasicSkills,
    ...candidate.developableSkills,
    CATALOG_STARTER_ACTIONS[candidate.id],
    wd?.fieldName,
    wd?.activityOverview,
    ...(wd?.generalResponsibilities ?? []),
    ...(wd?.requiredCompetencies ?? []),
    ...(wd?.workEnvironments ?? []),
    sd?.studyFieldName,
    sd?.studentFriendlyDescription,
    ...(sd?.typicalCoreTopics ?? []),
    ...(sd?.academicOrPracticeActivities ?? []),
    ...(sd?.relevantSkills ?? []),
    ...(sd?.careerConnections ?? []),
    ed?.businessConceptName,
    ed?.productOrServiceOverview,
    ed?.problemOrNeedServed,
    ...(ed?.targetUsers ?? []),
    ...(ed?.requiredSkills ?? []),
    ...(ed?.learnableSkills ?? []),
    ...(ed?.startingProcessOverview ?? [])
  ];

  return normalizeSearchStr(parts.filter(Boolean).join(' '));
}

export function matchesCandidateSearch(
  candidate: RecommendationCandidate,
  query: string
): boolean {
  const cleaned = normalizeSearchStr(query);
  if (!cleaned) return true;
  const tokens = cleaned.split(' ').filter(Boolean);
  if (tokens.length === 0) return true;

  const haystack = buildCandidateSearchText(candidate);
  return tokens.every((tok) => haystack.includes(tok));
}

export interface ExplorationFilterParams {
  track: ExplorationTrackFilter;
  domain: ExplorationDomainFilter;
  query: string;
}

export interface ExplorationFilterResult {
  filteredCandidates: CandidateMatchResult[];
  trackCountsForDomain: Record<ExplorationTrackFilter, number>;
  domainCountsForTrack: Record<CareerDomainId, number>;
  domainAvailabilityInOtherTracks: Array<{
    path: RecommendationPathCategory;
    label: string;
    count: number;
  }>;
}

export function filterExplorationCandidates(
  allCandidatesPool: CandidateMatchResult[],
  trackOrderedPools: Record<ExplorationTrackFilter, CandidateMatchResult[]>,
  params: ExplorationFilterParams
): ExplorationFilterResult {
  const { track, domain, query } = params;

  // Deduplicate source pools safely
  const activeBase = trackOrderedPools[track] ?? [];

  // Search-filtered pool on active track (used for domain counts on the active track)
  const searchFilteredOnTrack = query.trim()
    ? activeBase.filter((item) => matchesCandidateSearch(item.candidate, query))
    : activeBase;

  const domainCountsForTrack = ORDERED_CAREER_DOMAINS.reduce(
    (acc, dom) => {
      acc[dom.id] = 0;
      return acc;
    },
    {} as Record<CareerDomainId, number>
  );

  for (const item of searchFilteredOnTrack) {
    if (item.candidate.domainId) {
      domainCountsForTrack[item.candidate.domainId] =
        (domainCountsForTrack[item.candidate.domainId] ?? 0) + 1;
    }
  }

  // Domain + search filtered counts per track (used for track tabs)
  const filterByDomainAndQuery = (list: CandidateMatchResult[]) =>
    list.filter((item) => {
      if (domain !== 'all' && item.candidate.domainId !== domain) return false;
      if (query.trim() && !matchesCandidateSearch(item.candidate, query)) return false;
      return true;
    });

  const trackCountsForDomain: Record<ExplorationTrackFilter, number> = {
    all: filterByDomainAndQuery(allCandidatesPool).length,
    bekerja: filterByDomainAndQuery(trackOrderedPools.bekerja ?? []).length,
    kuliah: filterByDomainAndQuery(trackOrderedPools.kuliah ?? []).length,
    wirausaha: filterByDomainAndQuery(trackOrderedPools.wirausaha ?? []).length
  };

  const filteredCandidates =
    domain === 'all'
      ? searchFilteredOnTrack
      : searchFilteredOnTrack.filter((item) => item.candidate.domainId === domain);

  // Honest availability breakdown across the 3 tracks when a specific domain is inspected
  const domainAvailabilityInOtherTracks: ExplorationFilterResult['domainAvailabilityInOtherTracks'] =
    domain === 'all'
      ? []
      : (
          [
            { path: 'bekerja', label: 'Bekerja' },
            { path: 'kuliah', label: 'Kuliah' },
            { path: 'wirausaha', label: 'Wirausaha' }
          ] as Array<{ path: RecommendationPathCategory; label: string }>
        ).map((t) => ({
          path: t.path,
          label: t.label,
          count: (trackOrderedPools[t.path] ?? []).filter((item) => item.candidate.domainId === domain)
            .length
        }));

  return {
    filteredCandidates,
    trackCountsForDomain,
    domainCountsForTrack,
    domainAvailabilityInOtherTracks
  };
}

export function inferCandidateDomainMeta(
  candidate: RecommendationCandidate
): CareerDomainMetadata {
  if (candidate.domainId && CAREER_DOMAIN_MAP[candidate.domainId]) {
    return CAREER_DOMAIN_MAP[candidate.domainId];
  }
  const visual = inferDomainVisual(candidate);
  const found = ORDERED_CAREER_DOMAINS.find((d) => d.visualKind === visual);
  return found ?? ORDERED_CAREER_DOMAINS[0];
}
