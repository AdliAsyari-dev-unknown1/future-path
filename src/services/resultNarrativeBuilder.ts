/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 6: Deterministic Personal Result Narrative & Next-Steps Builder
 *
 * Strictly transforms Phase 4.1 (`StudentProfileAssessment`) and Phase 5
 * (`RecommendationMatchingOutput`) into grounded, human-readable summaries,
 * proportional labels, and realistic SMK next steps.
 *
 * Guarantees:
 * - Zero new score calculations or rule overrides.
 * - Never invents unverified skills, grades, institutions, jobs, or costs.
 * - Never converts `null` scores into `0` or treats `belum_cukup` as low capability.
 * - Explicitly separates possessed skills, learning goals, and developing areas.
 */

import { CareerDomainId } from '../types/assessment';
import {
  CandidateMatchResult,
  MatchingConfidenceLevel,
  RecommendationMatchingOutput,
  RecommendationPathCategory
} from '../types/recommendation';
import {
  DimensionScoreResult,
  EvidenceSufficiencyStatus,
  ProfileDimensionId,
  StudentProfileAssessment
} from '../types/scoring';
import { FuturePathId, StudentBiodata } from '../types/student';
import { CATALOG_STARTER_ACTIONS } from '../data/catalogStarterActions';

export interface PersonalOverviewAnswerBlock {
  id: string;
  questionPrompt: string;
  answerText: string;
  evidenceNote: string;
}

export interface PersonalProfileOverviewData {
  headlineSummary: string;
  cautionBanner: string | null;
  blocks: PersonalOverviewAnswerBlock[];
  environmentSummary: string;
  customOtherNotes: Array<{ questionId: string; questionText: string; customText: string }>;
  nonCareerPossessedNotes: string[];
  flexibleCountsNote: string | null;
}

export interface PersonalNextStepItem {
  id: string;
  title: string;
  actionDetail: string;
  groundedReason: string;
  scopeType: 'eksplorasi' | 'penguatan_skill' | 'persiapan_praktis' | 'kelengkapan_data';
}

export interface DirectionDisplayMeta {
  id: FuturePathId | 'unset';
  label: string;
  shortTagline: string;
  resultFocusTitle: string;
  resultFocusDescription: string;
}

const INDICATOR_ACTIVITY_LABEL: Record<string, string> = {
  technical_affinity: 'memahami cara kerja perangkat, jaringan, atau sistem teknis',
  creative_expression: 'merancang karya visual, media, atau penyajian desain kreatif',
  analytical_depth: 'menganalisis akar masalah dan menyusun alur sebab-akibat berbasis logika/data',
  hands_on_practical: 'melakukan praktik langsung dengan alat, mesin, atau pengerjaan lapangan',
  interpersonal_social: 'berkomunikasi, berdiskusi, dan berkoordinasi langsung dengan orang lain',
  enterprising_business: 'mengamati peluang jasa/produk dan menyusun nilai guna bagi pembeli',
  autonomy_independent: 'mengerjakan proyek secara mandiri dengan inisiatif pribadi',
  structured_procedural: 'bekerja runtut mengikuti daftar periksa, aturan mutu, dan prosedur',
  career_urgency: 'terjun cepat ke aktivitas kerja yang menghasilkan kemandirian praktis',
  academic_aspiration: 'mempelajari konsep teoretis atau studi terapan secara bertahap',
  exploratory_open: 'mencoba beragam aktivitas untuk mengenali kecocokan secara terbuka'
};

export function getDirectionDisplayMeta(direction: FuturePathId | null): DirectionDisplayMeta {
  switch (direction) {
    case 'bekerja':
      return {
        id: 'bekerja',
        label: 'Bekerja',
        shortTagline: 'Ingin cepat terjun ke dunia kerja',
        resultFocusTitle: 'Pilihan Bidang Pekerjaan yang Cocok untukmu',
        resultFocusDescription:
          'Di bawah ini adalah gambaran pekerjaan nyata (bukan info lowongan kerja) beserta kegiatan sehari-harinya, bekal yang sudah kamu punya, dan hal yang bisa kamu latih dari sekarang.'
      };
    case 'kuliah':
      return {
        id: 'kuliah',
        label: 'Kuliah',
        shortTagline: 'Ingin belajar lebih dalam setelah lulus',
        resultFocusTitle: 'Pilihan Bidang Kuliah yang Cocok untukmu',
        resultFocusDescription:
          'Di bawah ini adalah gambaran bidang studi umum (bukan daftar kampus atau biaya kuliah) beserta hal-hal yang biasa dipelajari, aktivitas tugasnya, dan info jalur masuk resminya.'
      };
    case 'wirausaha':
      return {
        id: 'wirausaha',
        label: 'Wirausaha',
        shortTagline: 'Ingin mencoba usaha atau jasa mandiri',
        resultFocusTitle: 'Pilihan Ide Usaha yang Cocok untukmu',
        resultFocusDescription:
          'Di bawah ini adalah contoh ide usaha pemula yang nyambung dengan minat dan kebiasaanmu — termasuk kegiatan hariannya dan panduan dasar legalitas UMK tanpa mengarang nominal modal.'
      };
    case 'bingung':
      return {
        id: 'bingung',
        label: 'Masih Bingung (Eksplorasi Terbuka)',
        shortTagline: 'Masih ingin membandingkan beberapa pilihan',
        resultFocusTitle: 'Perbandingan Pilihan Lintas Jalur',
        resultFocusDescription:
          'Masih bingung itu hal yang sangat wajar. Di bawah ini kami pilihkan beberapa contoh teratas dari jalur Bekerja, Kuliah, dan Wirausaha supaya kamu bisa membandingkan kegiatan sehari-harinya.'
      };
    default:
      return {
        id: 'unset',
        label: 'Belum Dipilih',
        shortTagline: 'Eksplorasi terbuka lintas jalur',
        resultFocusTitle: 'Gambaran Awal Lintas Jalur',
        resultFocusDescription:
          'Hasil ini merangkum gambaran awal pilihan Bekerja, Kuliah, dan Wirausaha dari jawabanmu.'
      };
  }
}

export function getProportionalMatchLabel(
  score: number | null,
  sufficiency: CandidateMatchResult['matchSufficiency']
): { label: string; tone: 'strong' | 'moderate' | 'exploratory' | 'insufficient' } {
  if (score === null || sufficiency === 'belum_cukup') {
    return { label: 'Belum Dapat Disimpulkan', tone: 'insufficient' };
  }
  if (sufficiency === 'terbatas') {
    if (score >= 72) {
      return { label: 'Cocok Awal (Data Terbatas)', tone: 'moderate' };
    }
    return { label: 'Layak Dikenali (Data Terbatas)', tone: 'exploratory' };
  }
  if (score >= 80) {
    return { label: 'Sangat Cocok dengan Polamu', tone: 'strong' };
  }
  if (score >= 65) {
    return { label: 'Cukup Cocok dengan Polamu', tone: 'moderate' };
  }
  if (score >= 48) {
    return { label: 'Bisa Jadi Bahan Perbandingan', tone: 'exploratory' };
  }
  return { label: 'Opsi Pembanding Alternatif', tone: 'exploratory' };
}

export function getPathCategoryLabel(path: RecommendationPathCategory): string {
  switch (path) {
    case 'bekerja':
      return 'Jalur Bekerja';
    case 'kuliah':
      return 'Jalur Kuliah';
    case 'wirausaha':
      return 'Jalur Wirausaha';
  }
}

export function getConfidenceDisplayText(level: MatchingConfidenceLevel): string {
  switch (level) {
    case 'tinggi':
      return 'Keyakinan Tinggi';
    case 'sedang':
      return 'Keyakinan Sedang';
    case 'rendah':
      return 'Keyakinan Rendah';
  }
}

export function getDimensionQualitativeBand(
  score: number | null,
  status: EvidenceSufficiencyStatus
): string {
  if (score === null || status === 'belum_cukup') {
    return 'Belum cukup bukti';
  }
  if (status === 'terbatas') {
    if (score >= 70) return 'Terlihat menonjol (data terbatas)';
    if (score >= 48) return 'Cukup terlihat (data terbatas)';
    return 'Masih awal (data terbatas)';
  }
  if (score >= 75) return 'Terlihat sangat jelas';
  if (score >= 55) return 'Cukup terlihat';
  if (score >= 38) return 'Sedang berkembang';
  return 'Masih tahap awal';
}

function formatTendencySummary(dim: DimensionScoreResult): string {
  if (dim.sufficiencyStatus === 'belum_cukup' || dim.normalizedScore === null) {
    return `Belum cukup bukti (${dim.evidenceCount} soal terjawab)`;
  }
  if (!dim.primaryTendency) {
    return `Skor ${dim.normalizedScore}/100, pola jawabanmu masih tersebar rata`;
  }
  const second = dim.tendencies[1];
  const secondPart =
    second && second.normalizedPercentage >= 22 ? ` serta ${second.label} (${second.normalizedPercentage}%)` : '';
  return `${dim.primaryTendency.label} (${dim.primaryTendency.normalizedPercentage}%${secondPart}, skor ${dim.normalizedScore}/100)`;
}

export function buildPersonalProfileOverview(
  profile: StudentProfileAssessment,
  direction: FuturePathId | null,
  biodata: StudentBiodata
): PersonalProfileOverviewData {
  const dims = profile.dimensions;
  const insufficientDims = profile.dimensionList.filter(
    (d) => d.sufficiencyStatus === 'belum_cukup'
  );
  const limitedDims = profile.dimensionList.filter((d) => d.sufficiencyStatus === 'terbatas');
  const sufficientDims = profile.dimensionList.filter((d) => d.sufficiencyStatus === 'cukup');

  const isInsufficientOverall = profile.overallSufficiency === 'belum_cukup';
  const isLimitedOverall = profile.overallSufficiency === 'terbatas';
  const firstName = biodata.fullName.trim() || 'Peserta';

  const flex = profile.flexibleResponseSummary;
  const skippedCount = flex?.skippedCount ?? 0;
  const dontKnowCount = flex?.dontKnowCount ?? 0;
  const noneFitCount = flex?.noneFitCount ?? 0;
  const otherCustomAnswers = flex?.otherCustomAnswers ?? [];
  const nonCareerPossessed = profile.skillProfile.nonCareerPossessedSkills ?? [];

  const flexibleParts: string[] = [];
  if (skippedCount > 0) flexibleParts.push(`${skippedCount} dilewati`);
  if (dontKnowCount > 0) flexibleParts.push(`${dontKnowCount} belum tahu`);
  if (noneFitCount > 0) flexibleParts.push(`${noneFitCount} tidak ada yang sesuai`);
  if (otherCustomAnswers.length > 0) {
    flexibleParts.push(`${otherCustomAnswers.length} jawaban khusus ("Lainnya")`);
  }
  const flexibleCountsNote =
    flexibleParts.length > 0
      ? `Respon fleksibel tercatat (${flexibleParts.join(', ')}) — seluruhnya tidak mengurangi skor kemampuanmu maupun memaksakan kecocokan yang tidak sesuai.`
      : null;

  let cautionBanner: string | null = null;
  if (isInsufficientOverall) {
    cautionBanner = `Baru ${profile.validAnsweredCount} jawaban valid bermuatan profil yang masuk sehingga gambarmu belum lengkap. Jawab lebih banyak pertanyaan supaya semua sisi profil bisa terbaca dengan adil.`;
  } else if (isLimitedOverall || limitedDims.length > 0 || insufficientDims.length > 0) {
    const flagged = [...insufficientDims, ...limitedDims].map((d) => d.label).join(', ');
    cautionBanner = `Beberapa bagian (${flagged}) masih punya bukti terbatas atau belum cukup, jadi hasil ini adalah gambaran awal yang masih bisa bergeser jika jawaban dilengkapi.`;
  }

  let headlineSummary: string;
  if (isInsufficientOverall) {
    headlineSummary = `${firstName}, bukti jawabanmu masih terlalu sedikit untuk menyimpulkan pola kecenderunganmu. Coba lengkapi lebih banyak soal terlebih dahulu.`;
  } else if (dims.minat.primaryTendency?.id === 'minat_eksploratif') {
    headlineSummary = `Dari ${profile.validAnsweredCount} jawaban valid, ${firstName} sedang suka mencoba banyak hal berbeda dan belum terpaku pada satu bidang saja.`;
  } else {
    const dirLabel = getDirectionDisplayMeta(direction).label;
    headlineSummary = `Dari ${profile.validAnsweredCount} jawaban valid (tingkat konsistensi ${profile.overallConfidenceScore}%), inilah gambaran minat, kebiasaan, dan bekal ${firstName} saat melihat arah ${dirLabel}.`;
  }

  // 1. Kecenderungan apa yang terlihat dari jawaban?
  const tendencyParts = sufficientDims
    .filter((d) => d.primaryTendency !== null)
    .slice(0, 3)
    .map((d) => `${d.label}: ${d.primaryTendency!.label}`);

  const block1Answer =
    tendencyParts.length > 0
      ? `Dari jawaban yang sudah lengkap, arah yang paling menonjol adalah ${tendencyParts.join('; ')}.`
      : limitedDims.length > 0
      ? `Gambaran awal yang mulai terlihat: ${limitedDims
          .filter((d) => d.primaryTendency)
          .slice(0, 2)
          .map((d) => `${d.label}: ${d.primaryTendency!.label}`)
          .join('; ') || 'belum ada satu pola yang paling dominan'}.`
      : 'Belum terlihat pola yang jelas karena jumlah jawaban masih sedikit.';

  // 2. Aktivitas seperti apa yang menarik bagi peserta?
  const topIndicators = (Object.entries(profile.indicatorTotals) as Array<[string, number]>)
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

  const block2Answer =
    dims.minat.sufficiencyStatus === 'belum_cukup'
      ? otherCustomAnswers.length > 0
        ? `Kamu menuliskan minat khusus secara mandiri ("${otherCustomAnswers.map((o) => o.customText).join('", "')}").`
        : 'Belum cukup bukti pada bagian Minat untuk melihat aktivitas apa yang paling bikin kamu semangat.'
      : topIndicators.length > 0
      ? `Kamu paling sering tertarik pada kegiatan yang melibatkan ${topIndicators
          .map(([ind]) => INDICATOR_ACTIVITY_LABEL[ind] ?? ind)
          .join(' dan ')}.`
      : `Minat tercatat pada ${formatTendencySummary(dims.minat)}.`;

  // 3. Pola berpikir, kebiasaan & preferensi lingkungan
  const thinkText = formatTendencySummary(dims.gaya_berpikir);
  const habitText = formatTendencySummary(dims.kebiasaan);
  const envSummaryText =
    dims.preferensi_lingkungan.sufficiencyStatus === 'belum_cukup'
      ? 'Preferensi lingkungan kerja/belajar belum memiliki cukup bukti.'
      : formatTendencySummary(dims.preferensi_lingkungan);
  const block3Answer = `Cara berpikirmu cenderung ${thinkText}. Kebiasaanmu sehari-hari mengarah ke ${habitText}. Preferensi lingkunganmu: ${envSummaryText}.`;

  // 4. Apa yang sudah dikuasai? (Memisahkan skill karier vs skill non-karier)
  const possessed = profile.skillProfile.possessedSkills;
  const nonCareerSuffix =
    nonCareerPossessed.length > 0
      ? ` (Catatan: kamu juga menandai kemampuan yang tetap bisa dikerjakan namun tidak ingin dijadikan karier utama: ${nonCareerPossessed[0].summaryLabel}.)`
      : '';
  const block4Answer =
    possessed.length > 0
      ? `Kamu sudah punya ${possessed.length} bekal pengalaman yang terlihat dari jawabanmu, seperti: ${possessed
          .slice(0, 2)
          .map((s) => s.summaryLabel)
          .join('; ')}.${nonCareerSuffix}`
      : nonCareerPossessed.length > 0
      ? `Kamu menandai bahwa ada keterampilan yang sebenarnya bisa dikerjakan, namun kamu memilih tidak menjadikannya arah karier utama.${nonCareerSuffix}`
      : 'Belum ada pengalaman siap pakai yang terpilih di jawabanmu — bukan berarti tidak bisa, hanya saja belum tercatat di sesi ini.';

  // 5. Apa yang masih ingin dipelajari?
  const goals = profile.skillProfile.learningGoals;
  const developing = profile.skillProfile.developingAreas;
  let block5Answer: string;
  if (goals.length > 0) {
    block5Answer = `Kamu menunjukkan rasa ingin tahu untuk belajar ${goals.length} hal, antara lain: ${goals
      .slice(0, 2)
      .map((g) => g.summaryLabel)
      .join('; ')}.`;
  } else if (developing.length > 0) {
    block5Answer = `Belum ada target belajar khusus yang dipilih, tapi ada ${developing.length} hal yang ingin kamu biasakan pelan-pelan: ${developing[0].summaryLabel}.`;
  } else {
    block5Answer =
      'Belum ada topik belajar tambahan khusus yang terpilih pada sesi ini.';
  }

  // 6. Aspek apa yang belum memiliki cukup bukti & catatan respon fleksibel?
  let block6Answer: string;
  if (insufficientDims.length > 0) {
    block6Answer = `Bagian yang buktinya belum cukup: ${insufficientDims
      .map((d) => `${d.label} (${d.evidenceCount} soal)`)
      .join(', ')}. Bagian ini sengaja tidak diberi skor.`;
  } else if (limitedDims.length > 0) {
    block6Answer = `Semua bagian terisi, namun buktinya masih terbatas di: ${limitedDims
      .map((d) => `${d.label} (${d.evidenceCount} soal)`)
      .join(', ')}.`;
  } else {
    block6Answer =
      'Keenam bagian profil sudah punya bukti yang cukup untuk dibaca sebagai gambaran awalmu.';
  }
  if (flexibleCountsNote) {
    block6Answer = `${block6Answer} ${flexibleCountsNote}`;
  }

  return {
    headlineSummary,
    cautionBanner,
    environmentSummary: envSummaryText,
    customOtherNotes: otherCustomAnswers.map((item) => ({
      questionId: item.questionId,
      questionText: item.questionText,
      customText: item.customText
    })),
    nonCareerPossessedNotes: nonCareerPossessed.map((item) => item.summaryLabel),
    flexibleCountsNote,
    blocks: [
      {
        id: 'tendency',
        questionPrompt: 'Sifat & kecenderungan yang terlihat',
        answerText: block1Answer,
        evidenceNote: `Tingkat konsistensi jawaban: ${profile.overallConfidenceScore}%`
      },
      {
        id: 'activities',
        questionPrompt: 'Kegiatan yang paling menarik buatmu',
        answerText: block2Answer,
        evidenceNote: `Dari ${dims.minat.evidenceCount} soal tentang minat`
      },
      {
        id: 'thinking_habits',
        questionPrompt: 'Cara berpikir, kebiasaan & lingkungan yang disukai',
        answerText: block3Answer,
        evidenceNote: `Gaya Berpikir (${dims.gaya_berpikir.evidenceCount}) · Kebiasaan (${dims.kebiasaan.evidenceCount}) · Lingkungan (${dims.preferensi_lingkungan.evidenceCount})`
      },
      {
        id: 'mastered',
        questionPrompt: 'Bekal yang sudah pernah kamu lakukan',
        answerText: block4Answer,
        evidenceNote: `${possessed.length} pengalaman tercatat`
      },
      {
        id: 'learning',
        questionPrompt: 'Hal yang ingin dipelajari atau dilatih',
        answerText: block5Answer,
        evidenceNote: `${goals.length} target belajar · ${developing.length} area latihan`
      },
      {
        id: 'evidence_gaps',
        questionPrompt: 'Catatan kelengkapan data & respon fleksibel',
        answerText: block6Answer,
        evidenceNote: `Total ${profile.validAnsweredCount} jawaban valid dianalisis`
      }
    ]
  };
}

export function buildPersonalNextSteps(
  profile: StudentProfileAssessment,
  recommendations: RecommendationMatchingOutput | null,
  direction: FuturePathId | null
): PersonalNextStepItem[] {
  const steps: PersonalNextStepItem[] = [];
  const isInsufficient =
    profile.overallSufficiency === 'belum_cukup' ||
    !recommendations ||
    recommendations.overallMatchingSufficiency === 'belum_cukup';

  // Case 1: Insufficient evidence -> prioritize exploration & completing assessment rather than specific directives
  if (isInsufficient) {
    steps.push({
      id: 'step_complete_evidence',
      title: 'Lengkapi jawaban kuis terlebih dahulu',
      actionDetail:
        'Klik Jawab Pertanyaan Tambahan atau Ubah Jawaban supaya profilmu terbaca lebih lengkap.',
      groundedReason: `Baru tercatat ${profile.validAnsweredCount} jawaban valid sehingga bukti masih terlalu sedikit.`,
      scopeType: 'kelengkapan_data'
    });
    steps.push({
      id: 'step_low_stakes_explore',
      title: 'Ngobrol & lihat aktivitas ringan di sekolah',
      actionDetail:
        'Perhatikan karya atau praktik teman di sekitarmu dan catat kegiatan harian apa yang bikin kamu paling penasaran.',
      groundedReason:
        'Data awal belum cukup untuk menyarankan langkah spesifik ke satu pekerjaan, jurusan kuliah, atau usaha.',
      scopeType: 'eksplorasi'
    });
    return steps;
  }

  const topCandidate = recommendations.activePathRecommendations[0] ?? null;
  const developing = profile.skillProfile.developingAreas;
  const learningGoals = profile.skillProfile.learningGoals;
  const kesiapanScore = profile.dimensions.kesiapan_praktis.normalizedScore;

  // Step 1: Address reported developing areas or candidate skills to develop
  if (developing.length > 0) {
    const firstDev = developing[0];
    steps.push({
      id: 'step_developing_area',
      title: 'Latih pelan-pelan hal yang masih terasa kaku',
      actionDetail: `Mulai dari latihan kecil di kelas atau bareng 1–2 teman untuk membiasakan hal ini: "${firstDev.summaryLabel}".`,
      groundedReason: `Terlihat langsung dari pilihanmu (${firstDev.questionId}) sebagai bagian yang masih perlu dibiasakan.`,
      scopeType: 'penguatan_skill'
    });
  } else if (topCandidate && topCandidate.skillAlignment.skillsToDevelop.length > 0) {
    steps.push({
      id: 'step_candidate_skill',
      title: 'Latih satu keterampilan dasar yang sering dipakai',
      actionDetail: `Coba satu latihan atau tugas mini yang nyambung dengan: ${topCandidate.skillAlignment.skillsToDevelop[0]}.`,
      groundedReason: `Dibutuhkan sebagai bekal awal untuk pilihan teratasmu (${topCandidate.candidate.name}).`,
      scopeType: 'penguatan_skill'
    });
  }

  // Step 2: Act on stated learning goals
  if (learningGoals.length > 0) {
    steps.push({
      id: 'step_learning_goal',
      title: 'Coba pelajari topik yang bikin kamu penasaran',
      actionDetail: `Luangkan waktu 15–30 menit menonton video pengenalan gratis, baca panduan dasar, atau tanya kakak kelas soal: "${learningGoals[0].summaryLabel}".`,
      groundedReason: `Dipilih sebagai minat belajar pada pertanyaan ${learningGoals[0].questionId}.`,
      scopeType: 'eksplorasi'
    });
  }

  // Step 3: Direction & readiness-aware grounded action
  if (
    direction === 'wirausaha' ||
    (kesiapanScore !== null && kesiapanScore < 58)
  ) {
    steps.push({
      id: 'step_readiness_small_scale',
      title: 'Mulai dari langkah kecil tanpa modal besar',
      actionDetail:
        'Kalau tertarik coba usaha atau kerja mandiri, mulai dulu dari menawarkan jasa keahlian kecil sesuai pesanan teman/lingkungan sekitar tanpa langsung keluar biaya besar.',
      groundedReason:
        kesiapanScore !== null && kesiapanScore < 58
          ? `Kesiapan alat/modalmu (${kesiapanScore}/100) menunjukkan langkah bertahap dan hemat biaya lebih aman untuk awal.`
          : 'Menjaga langkah awal tetap ringan dan realistis sebelum masuk ke rencana biaya.',
      scopeType: 'persiapan_praktis'
    });
  } else if (direction === 'kuliah') {
    steps.push({
      id: 'step_study_info',
      title: 'Cari tahu kegiatan belajar dari bidang yang kamu lirik',
      actionDetail:
        'Cek gambaran mata kuliah dasar, bedanya D3/D4 (praktik) dan S1 (teori), lalu rapikan contoh tugas sekolah terbaikmu.',
      groundedReason:
        'Membantu memastikan materi belajarnya benar-benar kamu sukai sebelum memilih jurusan kuliah.',
      scopeType: 'eksplorasi'
    });
  } else if (direction === 'bekerja') {
    steps.push({
      id: 'step_work_portfolio',
      title: 'Kumpulkan contoh hasil tugas atau praktikmu',
      actionDetail:
        'Simpan foto, file, atau catatan 2–3 tugas praktik yang pernah kamu kerjakan beserta peranmu di sana agar mudah diceritakan saat melamar.',
      groundedReason:
        'Bukti karya nyata membuatmu lebih percaya diri menunjukkan kemampuan tanpa harus punya pengalaman kerja panjang.',
      scopeType: 'persiapan_praktis'
    });
  }

  // Step 4: Exploratory cross-path reflection (especially for bingung or exploratory profiles)
  if (
    recommendations.exploratoryMode ||
    profile.dimensions.minat.primaryTendency?.id === 'minat_eksploratif' ||
    steps.length < 3
  ) {
    steps.push({
      id: 'step_compare_cross_path',
      title: 'Bandingkan aktivitas harian di 2 jalur yang berbeda',
      actionDetail:
        'Lihat bagian Bandingkan Lintas Jalur di halaman ini, lalu bayangkan kegiatan harian mana yang paling betah kamu jalani.',
      groundedReason:
        recommendations.exploratoryMode
          ? 'Kamu memilih Masih Bingung, jadi membandingkan aktivitas nyata jauh lebih membantu daripada menebak langsung.'
          : 'Membandingkan jalur lain membantu memastikan pilihanmu benar-benar cocok dengan kebiasaanmu.',
      scopeType: 'eksplorasi'
    });
  }

  return steps.slice(0, 4);
}

export function getCandidateInsightHighlight(
  result: CandidateMatchResult,
  activeDirection: FuturePathId | null
): {
  roleContextLabel: string;
  keyFocusText: string;
} {
  const pathCat = result.candidate.pathCategory;
  if (activeDirection === 'bingung' || activeDirection === null) {
    return {
      roleContextLabel: `${getPathCategoryLabel(pathCat)} · ${result.candidate.categoryLabel}`,
      keyFocusText: result.candidate.shortDescription
    };
  }
  if (pathCat === 'bekerja') {
    return {
      roleContextLabel: `Aktivitas Kerja · ${result.candidate.categoryLabel}`,
      keyFocusText: result.candidate.shortDescription
    };
  }
  if (pathCat === 'kuliah') {
    return {
      roleContextLabel: `Bidang Studi · ${result.candidate.categoryLabel}`,
      keyFocusText: result.candidate.shortDescription
    };
  }
  return {
    roleContextLabel: `Model Usaha · ${result.candidate.categoryLabel}`,
    keyFocusText: result.candidate.shortDescription
  };
}

export function getDimensionFitLabel(detail: {
  includedInCalculation: boolean;
  dimensionFitScore: number | null;
  sufficiencyStatus: EvidenceSufficiencyStatus;
}): string {
  if (!detail.includedInCalculation || detail.dimensionFitScore === null) {
    return 'Belum cukup bukti';
  }
  if (detail.dimensionFitScore >= 78) return 'Sangat selaras';
  if (detail.dimensionFitScore >= 60) return 'Cukup selaras';
  if (detail.dimensionFitScore >= 45) return 'Selaras sebagian';
  return 'Perlu penyesuaian';
}

export const ORDERED_DIMENSIONS: ProfileDimensionId[] = [
  'minat',
  'gaya_berpikir',
  'kebiasaan',
  'kemampuan_saat_ini',
  'preferensi_lingkungan',
  'kesiapan_praktis'
];

// ============================================================================
// PHASE 7.1.1 & 7.3: ONE-MINUTE RESULT EXPERIENCE BUILDER (13 DOMAINS + TRACK-SPECIFIC)
// ============================================================================

export type DomainVisualKind =
  | 'tech'
  | 'engineering'
  | 'law'
  | 'language'
  | 'education'
  | 'health'
  | 'business'
  | 'communication'
  | 'psychology'
  | 'creative'
  | 'agro'
  | 'hospitality'
  | 'admin';

export interface OneMinutePrimaryRecommendation {
  candidateId: string;
  title: string;
  pathCategory: RecommendationPathCategory;
  pathLabel: 'Bekerja' | 'Kuliah' | 'Wirausaha';
  categoryLabel: string;
  domainVisual: DomainVisualKind;
  whatItIs: string;
  dailyActivities: string[];
  neededSkills: string[];
  singleReason: string;
  criticalNotice: string | null;
  starterStep: string;
  kuliahDetails?: {
    topics: string[];
    projects: string[];
  };
  wirausahaDetails?: {
    challenge: string;
    firstStep: string;
  };
}

export interface OneMinuteAlternativeItem {
  candidateId: string;
  title: string;
  pathCategory: RecommendationPathCategory;
  pathLabel: 'Bekerja' | 'Kuliah' | 'Wirausaha';
  domainVisual: DomainVisualKind;
  oneSentenceDesc: string;
  quickHighlight: string;
}

export interface OneMinuteResultSummary {
  status: 'ready' | 'insufficient' | 'empty_catalog';
  isExploratoryMode: boolean;
  sectionHeadline: string;
  subHeadline: string;
  primary: OneMinutePrimaryRecommendation | null;
  alternatives: OneMinuteAlternativeItem[];
  insufficientMessage: string | null;
}

const INDICATOR_PLAIN_PHRASE: Record<string, string> = {
  technical_affinity: 'tertarik pada cara kerja teknologi dan sistem',
  creative_expression: 'suka berkreasi dengan gambar, tulisan, atau konten visual',
  analytical_depth: 'senang menelusuri alasan suatu masalah secara logis',
  hands_on_practical: 'nyaman beraktivitas langsung dengan alat atau praktik nyata',
  interpersonal_social: 'senang berinteraksi dan membantu banyak orang',
  enterprising_business: 'tertarik melihat peluang usaha, layanan, atau promosi',
  autonomy_independent: 'nyaman mengatur pekerjaan secara mandiri',
  structured_procedural: 'suka pekerjaan yang rapi dengan alur dan aturan jelas',
  career_urgency: 'ingin segera siap kerja dan mandiri secara praktis',
  academic_aspiration: 'ingin mendalami konsep dan ilmu lebih lanjut',
  exploratory_open: 'terbuka mencoba berbagai aktivitas dan bidang baru'
};

const CAREER_DOMAIN_TO_VISUAL: Record<CareerDomainId, DomainVisualKind> = {
  teknologi_informatika: 'tech',
  teknik_industri: 'engineering',
  hukum_keadilan: 'law',
  bahasa_sastra: 'language',
  pendidikan: 'education',
  kesehatan: 'health',
  bisnis_ekonomi: 'business',
  komunikasi_media: 'communication',
  psikologi_sosial: 'psychology',
  seni_desain: 'creative',
  pertanian_lingkungan: 'agro',
  pariwisata_kuliner: 'hospitality',
  administrasi_logistik: 'admin'
};

export function inferDomainVisual(candidate: CandidateMatchResult['candidate']): DomainVisualKind {
  if (candidate.domainId && CAREER_DOMAIN_TO_VISUAL[candidate.domainId]) {
    return CAREER_DOMAIN_TO_VISUAL[candidate.domainId];
  }

  const text = `${candidate.id} ${candidate.name} ${candidate.categoryLabel}`.toLowerCase();
  if (/hukum|advokat|legal|paralegal/.test(text)) return 'law';
  if (/bahasa|sastra|terjemah|penulis|writing/.test(text)) return 'language';
  if (/pendidikan|guru|pgsd|tutor|mengajar/.test(text)) return 'education';
  if (/kesehatan|perawat|kesmas|gizi|medis|healthy/.test(text)) return 'health';
  if (/psikologi|konseling|sosial/.test(text)) return 'psychology';
  if (/komunikasi|media|jurnalistik|siaran|socmed|pr/.test(text)) return 'communication';
  if (/bisnis|manajemen|akuntansi|keuangan|jualan|commerce|bookkeeping/.test(text)) return 'business';
  if (/pertanian|agribisnis|lingkungan|tanaman|agro|hidroponik/.test(text)) return 'agro';
  if (/pariwisata|perhotelan|kuliner|wisata|hospitality|barista/.test(text)) return 'hospitality';
  if (/administrasi|logistik|gudang|arsip|qc/.test(text)) return 'admin';
  if (/desain|dkv|seni|kriya|craft|creative|animasi/.test(text)) return 'creative';
  if (/mesin|otomotif|bengkel|elektro|manufaktur|las|workshop/.test(text)) return 'engineering';
  if (/informatika|komputer|jaringan|web|software|system|aplikasi|tech/.test(text)) return 'tech';
  return 'admin';
}

function getShortPathWord(path: RecommendationPathCategory): 'Bekerja' | 'Kuliah' | 'Wirausaha' {
  if (path === 'bekerja') return 'Bekerja';
  if (path === 'kuliah') return 'Kuliah';
  return 'Wirausaha';
}

const TRAILING_DANGLING_WORDS_RE =
  /\s+(?:dan|serta|atau|di|ke|dari|untuk|yang|lalu|dengan|maupun|pada|oleh|dalam|buat|agar|supaya|tanpa|seperti|termasuk|selain|antara|bagi|terhadap|tentang|sebagai)$/i;

function cleanTruncatedPhrase(rawText: string): string {
  let out = rawText.replace(/[,;:\-–—/+]+$/, '').trim();
  // Remove unclosed opening parenthesis fragment if truncated mid-parenthetical
  const lastOpen = out.lastIndexOf('(');
  const lastClose = out.lastIndexOf(')');
  if (lastOpen > lastClose) {
    out = out.slice(0, lastOpen).replace(/[,;:\-–—]+$/, '').trim();
  }
  while (TRAILING_DANGLING_WORDS_RE.test(out)) {
    out = out.replace(TRAILING_DANGLING_WORDS_RE, '').replace(/[,;:\-]+$/, '').trim();
  }
  return out;
}

function condenseSentence(text: string, maxChars: number): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  const firstClause = cleaned.split(/\s+[—–]\s+|\.\s+/)[0] || cleaned;
  const candidate = firstClause.length <= maxChars ? firstClause : cleaned;
  if (candidate.length <= maxChars) {
    return candidate.endsWith('.') ? candidate : `${candidate}.`;
  }
  const sliced = candidate.slice(0, maxChars - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  const base = lastSpace > 30 ? sliced.slice(0, lastSpace) : sliced;
  const polished = cleanTruncatedPhrase(base);
  return `${polished}.`;
}

function condenseBullet(text: string, maxChars = 76): string {
  const cleaned = text.replace(/\s+/g, ' ').replace(/\.$/, '').trim();
  if (cleaned.length <= maxChars) return cleaned;
  const sliced = cleaned.slice(0, maxChars - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  const base = lastSpace > 24 ? sliced.slice(0, lastSpace) : sliced;
  return cleanTruncatedPhrase(base);
}

function extractCompactSkillChips(result: CandidateMatchResult): string[] {
  const { candidate } = result;
  const rawList = [...candidate.requiredBasicSkills, ...candidate.developableSkills];
  const chips: string[] = [];

  for (const raw of rawList) {
    const parts = raw
      .split(/,\s*(?:dan|serta)?\s*|\s+dan\s+|\s+serta\s+/i)
      .map((p) =>
        p
          .replace(/^(bisa|mampu|terbiasa|mau|menggunakan|nyaman)\s+/i, '')
          .replace(/^(beraktivitas|berdiskusi)\s+di\s+/i, '')
          .trim()
      )
      .filter((p) => p.length >= 6);

    for (const part of parts) {
      const tokens = part.split(/\s+/);
      let sliceCount = 3;
      if (
        tokens.length >= 4 &&
        /^(di|ke|dari|untuk|dengan|atau|dan|yang|pada)$/i.test(tokens[2] || '')
      ) {
        sliceCount = 4;
      }
      const rawPhrase = tokens.slice(0, sliceCount).join(' ').replace(/[.;:()]+$/, '');
      const words = cleanTruncatedPhrase(rawPhrase);
      const wordCount = words ? words.split(/\s+/).length : 0;
      if (
        words.length >= 8 &&
        wordCount >= 2 &&
        !chips.some((c) => c.toLowerCase() === words.toLowerCase())
      ) {
        chips.push(words.charAt(0).toUpperCase() + words.slice(1));
      }
      if (chips.length >= 4) break;
    }
    if (chips.length >= 4) break;
  }

  return chips.slice(0, 4);
}

function extractDailyThree(result: CandidateMatchResult): string[] {
  const { candidate } = result;
  const meta = candidate.productionMetadata;
  let primarySource: string[] = [];

  if (candidate.pathCategory === 'bekerja') {
    primarySource = meta?.workDetail?.generalResponsibilities ?? [];
  } else if (candidate.pathCategory === 'kuliah') {
    primarySource = [
      ...(meta?.studyDetail?.academicOrPracticeActivities ?? []),
      ...(meta?.studyDetail?.typicalCoreTopics ?? [])
    ];
  } else {
    primarySource = meta?.entrepreneurshipDetail?.startingProcessOverview ?? [];
  }

  const combined = [...primarySource, ...candidate.characteristics];
  const seen = new Set<string>();
  const picked: string[] = [];

  for (const item of combined) {
    const bullet = condenseBullet(item, 76);
    const norm = bullet.toLowerCase();
    if (bullet && !seen.has(norm)) {
      seen.add(norm);
      picked.push(bullet);
    }
    if (picked.length >= 3) break;
  }

  return picked;
}

function buildSingleEverydayReason(
  result: CandidateMatchResult,
  profile: StudentProfileAssessment
): string {
  // Ground strictly in matched option indicators & top profile signals without any jargon/scores
  const matchedSignals = new Set<string>();
  for (const ev of result.supportingQuestionEvidence) {
    for (const sig of ev.matchedIndicators) {
      matchedSignals.add(sig);
    }
  }

  const orderedSignals = (Object.entries(profile.indicatorTotals) as Array<[string, number]>)
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([sig]) => sig);

  const chosen: string[] = [];
  for (const sig of orderedSignals) {
    if (matchedSignals.has(sig) && INDICATOR_PLAIN_PHRASE[sig]) {
      chosen.push(INDICATOR_PLAIN_PHRASE[sig]);
    }
    if (chosen.length >= 2) break;
  }

  if (chosen.length === 0) {
    for (const sig of result.candidate.supportingIndicators) {
      if (INDICATOR_PLAIN_PHRASE[sig]) {
        chosen.push(INDICATOR_PLAIN_PHRASE[sig]);
      }
      if (chosen.length >= 2) break;
    }
  }

  if (chosen.length >= 2) {
    return `Cocok karena kamu ${chosen[0]}, sekaligus ${chosen[1]}.`;
  }
  if (chosen.length === 1) {
    return `Cocok karena pilihanmu menunjukkan kamu ${chosen[0]}.`;
  }
  return 'Cocok dengan gabungan minat dan kebiasaan harianmu.';
}

function extractKuliahDetails(result: CandidateMatchResult): OneMinutePrimaryRecommendation['kuliahDetails'] {
  if (result.candidate.pathCategory !== 'kuliah') return undefined;
  const sd = result.candidate.productionMetadata?.studyDetail;
  const rawTopics = sd?.typicalCoreTopics?.length
    ? sd.typicalCoreTopics
    : result.candidate.characteristics;
  const rawProjects = sd?.academicOrPracticeActivities?.length
    ? sd.academicOrPracticeActivities
    : result.candidate.developableSkills;

  const topics: string[] = [];
  for (const item of rawTopics) {
    const bullet = condenseBullet(item, 68);
    if (bullet && !topics.includes(bullet)) topics.push(bullet);
    if (topics.length >= 3) break;
  }

  const projects: string[] = [];
  for (const item of rawProjects) {
    const bullet = condenseBullet(item, 76);
    if (bullet && !projects.includes(bullet)) projects.push(bullet);
    if (projects.length >= 2) break;
  }

  return { topics, projects };
}

function extractStarterStep(result: CandidateMatchResult): string {
  const mapped = CATALOG_STARTER_ACTIONS[result.candidate.id];
  if (mapped) return mapped;

  const meta = result.candidate.productionMetadata;
  if (result.candidate.pathCategory === 'wirausaha') {
    const raw =
      meta?.entrepreneurshipDetail?.startingProcessOverview?.[0] ??
      result.candidate.characteristics?.[0] ??
      'Buat satu contoh karya atau layanan kecil dulu lalu ujikan ke 2–3 kenalan terdekat untuk mendapat masukan nyata.';
    return raw.endsWith('.') ? raw : `${raw}.`;
  }
  if (result.candidate.pathCategory === 'kuliah') {
    const raw =
      meta?.studyDetail?.academicOrPracticeActivities?.[0] ??
      result.candidate.characteristics?.[0] ??
      'Pelajari gambaran mata kuliah dasar bidang ini dan kerjakan satu latihan pengantar sederhana untuk menguji ketertarikanmu.';
    return raw.endsWith('.') ? raw : `${raw}.`;
  }
  const raw =
    meta?.workDetail?.generalResponsibilities?.[0] ??
    result.candidate.requiredBasicSkills?.[0] ??
    'Latih satu keterampilan inti bidang ini melalui tugas mini dan simpan hasilnya sebagai bukti praktik.';
  return raw.endsWith('.') ? raw : `${raw}.`;
}

function extractWirausahaDetails(
  result: CandidateMatchResult
): OneMinutePrimaryRecommendation['wirausahaDetails'] {
  if (result.candidate.pathCategory !== 'wirausaha') return undefined;
  const ed = result.candidate.productionMetadata?.entrepreneurshipDetail;
  const rawChallenge =
    ed?.challengesAndRisks?.[0] ??
    result.candidate.requirementsOrConstraints?.[0] ??
    'Menjaga konsistensi kualitas dan jadwal pengerjaan di awal merintis.';

  return {
    challenge: condenseSentence(rawChallenge, 150),
    firstStep: extractStarterStep(result)
  };
}

function extractCriticalNotice(
  result: CandidateMatchResult,
  isExploratory: boolean
): string | null {
  const id = result.candidate.id;
  const domainId = result.candidate.domainId;

  if (id === 'PROD_JOB_EDU_SOCIAL' || id === 'PROD_JOB_SCHOOL_ADMIN' || id === 'PROD_JOB_LAB_ASSISTANT_EDU') {
    return 'Catatan Penting: Posisi staf sekolah, asisten lab, atau pendamping pemula terbuka bagi lulusan SMK; menjadi guru sekolah formal tetap mensyaratkan kuliah S1 dan PPG.';
  }
  if (id === 'PROD_JOB_HR_COMMUNITY_SUPPORT') {
    return 'Catatan Penting: Peran pemula mencakup administrasi jadwal/rekrutmen awal dan pendampingan komunitas; menjadi psikolog berizin praktik mensyaratkan S1 Psikologi dan pendidikan profesi.';
  }
  if (domainId === 'hukum_keadilan' && result.candidate.pathCategory === 'bekerja') {
    return 'Catatan Penting: Lulusan SMK dapat memulai di bidang administrasi dokumen/kearsipan kantor; menjadi advokat, hakim, atau jaksa mensyaratkan S1 Ilmu Hukum dan ujian profesi.';
  }
  if (domainId === 'kesehatan' && result.candidate.pathCategory === 'bekerja') {
    if (id === 'PROD_JOB_K3_SAFETY_SUPPORT') {
      return 'Catatan Penting: Asisten K3 pemula membantu pencatatan checklist keselamatan dan APD dasar; menjadi Ahli K3 Umum bersertifikat atau tenaga medis klinik memerlukan pelatihan/sertifikasi resmi.';
    }
    return 'Catatan Penting: Lulusan SMK hanya untuk peran admin, logistik stok, atau layanan non-medis; praktik perawat/apoteker/tenaga kesehatan berizin wajib menempuh kuliah kesehatan dan memiliki STR.';
  }
  if (id === 'PROD_JOB_ACCOUNTING_JUNIOR') {
    return 'Catatan Penting: Peran pemula mencakup pencatatan kas & admin keuangan dasar; auditor atau akuntan profesional mensyaratkan jenjang D3/S1 Akuntansi.';
  }
  if (id === 'PROD_JOB_FIELD_OPS' || id === 'PROD_JOB_TECH_SYS' || id === 'PROD_JOB_WELDING_FAB') {
    return 'Catatan: Sebagian tugas praktik bengkel atau kerja lapangan membutuhkan kesiapan fisik dan kepatuhan alat pelindung diri (APD).';
  }
  if (result.candidate.pathCategory === 'kuliah') {
    if (domainId === 'kesehatan') {
      return 'Catatan: Kuliah kesehatan memerlukan ketahanan praktik klinik/laboratorium serta uji kompetensi & STR sebelum praktik resmi; katalog ini tidak memuat nama kampus atau biaya kuliah.';
    }
    if (domainId === 'hukum_keadilan') {
      return 'Gambaran bidang studi umum (tanpa nama kampus atau biaya); untuk berpraktik sebagai advokat/jaksa diperlukan S1 Ilmu Hukum serta pendidikan profesi lanjutan.';
    }
    if (domainId === 'pendidikan') {
      return 'Gambaran bidang studi umum (tanpa nama kampus atau biaya); setelah lulus S1 Kependidikan perlu menempuh Pendidikan Profesi Guru (PPG) untuk sertifikasi guru sekolah formal.';
    }
    return 'Gambaran bidang studi umum (bukan daftar kampus, akreditasi, atau rincian biaya kuliah).';
  }
  if (id === 'PROD_BIZ_ADMIN_TYPING_SERVICE') {
    return 'Contoh ide usaha jasa pengetikan & tata letak dokumen umum (bukan layanan hukum/pembuatan berkas resmi instansi); nominal modal & tarif berstatus belum tersedia.';
  }
  if (id === 'PROD_BIZ_CREATIVE_WORKSHOP_CLASS') {
    return 'Contoh ide kegiatan hobi/kreatif non-formal skala komunitas (bukan sekolah formal atau sertifikasi guru); nominal modal & biaya kegiatan berstatus belum tersedia.';
  }
  if (result.candidate.pathCategory === 'wirausaha') {
    return 'Contoh ide usaha pemula; nominal modal awal dan perkiraan pendapatan berstatus belum tersedia dan tidak direka-reka.';
  }
  if (isExploratory) {
    return 'Gambaran bidang kerja umum (bukan info lowongan aktif), cocok jadi bahan perbandingan awal.';
  }
  return null;
}

export function buildOneMinuteResultSummary(
  profile: StudentProfileAssessment,
  recommendations: RecommendationMatchingOutput | null,
  direction: FuturePathId | null
): OneMinuteResultSummary {
  if (!recommendations || recommendations.catalogMode === 'empty_catalog') {
    return {
      status: 'empty_catalog',
      isExploratoryMode: direction === 'bingung',
      sectionHeadline: 'Pilihan Bidang Belum Tersedia',
      subHeadline: 'Katalog bidang belum tersedia untuk sesi ini.',
      primary: null,
      alternatives: [],
      insufficientMessage:
        'Belum ada data bidang yang dapat ditampilkan saat ini. Kamu tetap bisa meninjau ulang jawabanmu.'
    };
  }

  const isExploratoryMode = recommendations.exploratoryMode || direction === 'bingung';

  if (
    profile.overallSufficiency === 'belum_cukup' ||
    recommendations.overallMatchingSufficiency === 'belum_cukup'
  ) {
    const previewList: OneMinuteAlternativeItem[] = recommendations.activePathRecommendations
      .slice(0, 2)
      .map((item) => ({
        candidateId: item.candidate.id,
        title: item.candidate.name,
        pathCategory: item.candidate.pathCategory,
        pathLabel: getShortPathWord(item.candidate.pathCategory),
        domainVisual: inferDomainVisual(item.candidate),
        oneSentenceDesc: condenseSentence(item.candidate.shortDescription, 110),
        quickHighlight: extractDailyThree(item)[0] ?? ''
      }));

    return {
      status: 'insufficient',
      isExploratoryMode,
      sectionHeadline: 'Jawabanmu Masih Terlalu Sedikit',
      subHeadline:
        'Sistem belum menyimpulkan pilihan utama agar hasil tidak menebak-nebak.',
      primary: null,
      alternatives: previewList,
      insufficientMessage:
        'Jawab beberapa pertanyaan tambahan dulu supaya gambaran minat, kebiasaan, dan pilihan bidangmu jauh lebih pas.'
    };
  }

  const seen = new Set<string>();
  const uniqueActive: CandidateMatchResult[] = [];
  for (const item of recommendations.activePathRecommendations) {
    if (!seen.has(item.candidate.id)) {
      seen.add(item.candidate.id);
      uniqueActive.push(item);
    }
  }

  const top = uniqueActive[0] ?? null;
  if (!top) {
    return {
      status: 'empty_catalog',
      isExploratoryMode,
      sectionHeadline: 'Belum Ada Pilihan yang Cocok',
      subHeadline: 'Coba tinjau kembali jawabanmu atau bandingkan jalur lain.',
      primary: null,
      alternatives: [],
      insufficientMessage: null
    };
  }

  let altCandidates = uniqueActive.slice(1, 5);
  if (isExploratoryMode) {
    const activeRank = new Map<string, number>();
    uniqueActive.forEach((item, idx) => activeRank.set(item.candidate.id, idx));

    const crossPool: CandidateMatchResult[] = [];
    for (const pathKey of ['bekerja', 'kuliah', 'wirausaha'] as RecommendationPathCategory[]) {
      for (const candidateForPath of (recommendations.crossPathExplorations[pathKey] ?? []).slice(0, 2)) {
        if (
          candidateForPath.candidate.id !== top.candidate.id &&
          !crossPool.some((c) => c.candidate.id === candidateForPath.candidate.id)
        ) {
          crossPool.push(candidateForPath);
        }
      }
    }
    crossPool.sort((a, b) => {
      const scoreDiff = (b.matchScore ?? -1) - (a.matchScore ?? -1);
      if (scoreDiff !== 0) return scoreDiff;
      return (activeRank.get(a.candidate.id) ?? 999) - (activeRank.get(b.candidate.id) ?? 999);
    });
    if (crossPool.length >= 2) {
      altCandidates = crossPool.slice(0, 4);
    }
  }

  const primary: OneMinutePrimaryRecommendation = {
    candidateId: top.candidate.id,
    title: top.candidate.name,
    pathCategory: top.candidate.pathCategory,
    pathLabel: getShortPathWord(top.candidate.pathCategory),
    categoryLabel: top.candidate.categoryLabel,
    domainVisual: inferDomainVisual(top.candidate),
    whatItIs: condenseSentence(top.candidate.shortDescription, 140),
    dailyActivities: extractDailyThree(top),
    neededSkills: extractCompactSkillChips(top),
    singleReason: buildSingleEverydayReason(top, profile),
    criticalNotice: extractCriticalNotice(top, isExploratoryMode),
    starterStep: extractStarterStep(top),
    kuliahDetails: extractKuliahDetails(top),
    wirausahaDetails: extractWirausahaDetails(top)
  };

  const alternatives: OneMinuteAlternativeItem[] = altCandidates.map((alt) => ({
    candidateId: alt.candidate.id,
    title: alt.candidate.name,
    pathCategory: alt.candidate.pathCategory,
    pathLabel: getShortPathWord(alt.candidate.pathCategory),
    domainVisual: inferDomainVisual(alt.candidate),
    oneSentenceDesc: condenseSentence(alt.candidate.shortDescription, 100),
    quickHighlight: condenseBullet(extractDailyThree(alt)[0] ?? '', 68)
  }));

  return {
    status: 'ready',
    isExploratoryMode,
    sectionHeadline: isExploratoryMode
      ? 'Pilihan Awal untuk Kamu Bandingkan'
      : 'Rekomendasi Utama untukmu',
    subHeadline: isExploratoryMode
      ? 'Masih bingung itu wajar — mulai kenali dulu pilihan utama dan 4 bidang pembanding di bawah.'
      : 'Dirangkum singkat dari jawabanmu lengkap dengan 4 pilihan alternatif terdekat.',
    primary,
    alternatives,
    insufficientMessage: null
  };
}


