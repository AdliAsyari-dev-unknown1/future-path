/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7.3: Expanded Production Catalog — Jalur Kuliah (26 General Study Fields across 12+ Domains)
 *
 * Strictly general Indonesian higher education nomenclatures (D3, D4/Sarjana Terapan, S1)
 * without fabricated campus names, accreditation ranks, UTBK thresholds, or tuition amounts.
 */

import { RecommendationCandidate } from '../types/recommendation';
import { CATALOG_SOURCE_REGISTRY, CATALOG_VERIFICATION_DATE } from './catalogSources';

const ALL_DIMS: RecommendationCandidate['relevantDimensions'] = [
  'minat',
  'gaya_berpikir',
  'kebiasaan',
  'kemampuan_saat_ini',
  'preferensi_lingkungan',
  'kesiapan_praktis'
];

export const PRODUCTION_STUDY_CATALOG: RecommendationCandidate[] = [
  // =========================================================================
  // 1. INFORMATIKA & TEKNOLOGI (3 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_SYSTEM_ANALYSIS',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'teknologi_informatika',
    name: 'Kuliah Teknik Informatika & Ilmu Komputer (S1)',
    categoryLabel: 'Bidang Studi Informatika & Komputasi',
    shortDescription:
      'Mempelajari logika algoritma, pemrograman perangkat lunak/web/mobile, struktur data, dan kecerdasan komputasi untuk membangun sistem digital modern (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Banyak praktik menulis kode program, menyusun algoritma logika, dan memecahkan bug',
      'Menggabungkan konsep dasar komputasi dengan proyek pembuatan aplikasi dan basis data',
      'Cocok untuk yang suka ngoprek logika aplikasi dan belajar teknologi digital terus-menerus'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.28,
      gaya_berpikir: 0.26,
      kebiasaan: 0.14,
      kemampuan_saat_ini: 0.1,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 76,
      kebiasaan: 68,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_akademik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_teknis', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_studi', 'siap_kerja']
    },
    supportingIndicators: ['technical_affinity', 'analytical_depth', 'academic_aspiration'],
    requiredBasicSkills: [
      'Rasa ingin tahu cara kerja aplikasi dan kesabaran menelusuri alur logika kode'
    ],
    developableSkills: [
      'Algoritma pemrograman, pengelolaan database, pengembangan web/mobile, dan pengujian sistem'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum: tidak menyebutkan nama kampus, kuota, atau rincian biaya kuliah'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: [
      'Daftar universitas/institut, daya tampung SNPMB, akreditasi, dan rincian UKT tidak dimasukkan'
    ],
    contextRelatedMajors: ['RPL/PPLG', 'TKJ', 'Elektro'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Terverifikasi pada klasifikasi Rumpun Ilmu Komputer/Teknik Informatika serta alur SNPMB; detail biaya atau kampus tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Teknik Informatika & Ilmu Komputer (S1)',
        studentFriendlyDescription:
          'Belajar bagaimana perangkat lunak, website, database, dan sistem cerdas dirancang serta dibangun memakai logika pemrograman.',
        typicalCoreTopics: [
          'Algoritma & Pemrograman Dasar',
          'Struktur Data & Basis Data (Database)',
          'Rekayasa Perangkat Lunak & Jaringan Komputer'
        ],
        academicOrPracticeActivities: [
          'Praktikum coding membangun aplikasi web atau mobile bertahap',
          'Proyek tim merancang database dan menguji alur sistem digital'
        ],
        relevantSkills: [
          'Logika komputasi runtut',
          'Pemecahan error program (debugging)',
          'Belajar dokumentasi teknis mandiri'
        ],
        careerConnections: [
          'Software Engineer, Web/Mobile Developer, Data Engineer, dan pengelola sistem IT'
        ],
        verifiedEntryPathwaysNote:
          'Tersedia lewat seleksi nasional SNBP, SNBT/UTBK, maupun jalur mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_INFO_SYSTEMS',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'teknologi_informatika',
    secondaryDomains: ['bisnis_ekonomi', 'administrasi_logistik'],
    name: 'Kuliah Sistem Informasi & Manajemen Data Bisnis (S1/D4)',
    categoryLabel: 'Komputasi, Data & Organisasi',
    shortDescription:
      'Menghubungkan teknologi aplikasi dan analisis data dengan kebutuhan proses kerja organisasi atau bisnis agar sistem mudah dipakai manusia (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Belajar merancang alur sistem, database perusahaan, tampilan UI/UX, sekaligus proses bisnis',
      'Cocok untuk yang tertarik dunia IT dan aplikasi namun tidak ingin hanya berkutat di coding rumit',
      'Banyak proyek menganalisis kebutuhan pengguna dan membuat rancangan sistem kerja digital'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.24,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 70,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_akademik', 'minat_usaha'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_tim'],
      kesiapan_praktis: ['siap_studi', 'siap_terstruktur']
    },
    supportingIndicators: ['technical_affinity', 'structured_procedural', 'analytical_depth'],
    requiredBasicSkills: [
      'Ketelitian memetakan alur kerja, komunikasi dengan pengguna, dan minat teknologi informasi'
    ],
    developableSkills: [
      'Perancangan basis data, desain alur pengguna (UI/UX), dan analisis data operasional'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; kurikulum spesifik dapat berbeda antara kampus vokasi dan universitas'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar kampus, daya tampung, dan biaya kuliah tidak dicantumkan'],
    contextRelatedMajors: ['RPL/PPLG', 'TKJ'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke nomenklatur pendidikan tinggi rumpun Informatika/Sistem Informasi dan portal SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Sistem Informasi & Manajemen Data Bisnis (S1 / D4)',
        studentFriendlyDescription:
          'Mempelajari bagaimana teknologi aplikasi, database, dan sistem digital dirancang supaya cocok dengan cara kerja tim dan bisnis.',
        typicalCoreTopics: [
          'Analisis & Perancangan Sistem Informasi',
          'Manajemen Basis Data & Visualisasi Data',
          'Proses Bisnis Digital & Desain Antarmuka (UI/UX)'
        ],
        academicOrPracticeActivities: [
          'Wawancara kebutuhan pengguna lalu menyusun diagram alur aplikasi',
          'Merancang prototipe sistem informasi dan basis data dalam proyek kelompok'
        ],
        relevantSkills: [
          'Pemetaan alur sistem yang rapi',
          'Komunikasi antara pengguna dan tim teknis',
          'Pengelolaan data terstruktur'
        ],
        careerConnections: [
          'System Analyst, UI/UX Designer, Product Operations, atau Administrator Basis Data'
        ],
        verifiedEntryPathwaysNote: 'Terbuka melalui jalur SNBP, SNBT, dan seleksi mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_RPL_VOKASI',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'teknologi_informatika',
    name: 'Kuliah Vokasi Rekayasa Perangkat Lunak & Teknologi Komputer (D3/D4)',
    categoryLabel: 'Vokasi Praktik Perangkat Lunak',
    shortDescription:
      'Jalur kuliah vokasi yang porsinya lebih banyak praktik langsung membangun aplikasi web/mobile, merawat server, dan proyek siap kerja di industri digital (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Lebih banyak praktikum laboratorium coding dan proyek nyata dibanding teori murni',
      'Biasanya memiliki program magang terstruktur di semester akhir sebelum lulus',
      'Pas untuk yang ingin kuliah bidang IT sambil langsung mengasah portofolio aplikasi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.2,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 70,
      kemampuan_saat_ini: 58,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_praktik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_teknis', 'ling_lapangan'],
      kesiapan_praktis: ['siap_studi', 'siap_kerja']
    },
    supportingIndicators: ['technical_affinity', 'hands_on_practical', 'academic_aspiration'],
    requiredBasicSkills: [
      'Senang praktik langsung di komputer dan teliti menyelesaikan proyek pemrograman bertahap'
    ],
    developableSkills: [
      'Pembuatan aplikasi web/mobile siap pakai, pengujian aplikasi, dan kerja tim proyek TI'
    ],
    requirementsOrConstraints: [
      'Kategori umum program politeknik/vokasi D3 atau Sarjana Terapan (D4); tanpa daftar kampus tertentu'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar politeknik, kuota, dan rincian biaya tidak dicantumkan'],
    contextRelatedMajors: ['RPL/PPLG', 'TKJ'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke nomenklatur vokasi D3/D4 dan SNPMB jalur Vokasi.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI,
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM
      ],
      studyDetail: {
        studyFieldName: 'Rekayasa Perangkat Lunak / Manajemen Informatika Vokasi (D3 / D4)',
        studentFriendlyDescription:
          'Kuliah berfokus pada praktik membangun aplikasi, menguji kualitas software, dan proyek terapan yang dekat dengan kebutuhan kerja.',
        typicalCoreTopics: [
          'Pemrograman Web & Aplikasi Mobile Terapan',
          'Pengujian Perangkat Lunak & Keamanan Aplikasi Dasar',
          'Manajemen Proyek Aplikasi & Basis Data'
        ],
        academicOrPracticeActivities: [
          'Praktikum pemrograman mingguan di lab komputer dengan proyek berbasis studi kasus',
          'Magang proyek perangkat lunak sebelum tugas akhir terapan'
        ],
        relevantSkills: [
          'Coding praktis berorientasi hasil',
          'Pengujian fitur aplikasi',
          'Kerja kolaboratif tim produk'
        ],
        careerConnections: [
          'Web Developer, Mobile App Developer, QA Engineer, dan Administrator Sistem Aplikasi'
        ],
        verifiedEntryPathwaysNote: 'Tersedia melalui jalur SNPMB Vokasi (SNBP, SNBT) dan seleksi mandiri politeknik.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 2. HUKUM & KEADILAN (2 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_LAW_GENERAL',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'hukum_keadilan',
    name: 'Kuliah Ilmu Hukum (S1)',
    categoryLabel: 'Bidang Studi Hukum & Keadilan',
    shortDescription:
      'Mempelajari aturan perundang-undangan, sistem peradilan, hak dan kewajiban warga, kontrak hukum, serta cara menyusun argumen hukum yang adil berdasarkan bukti (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Banyak membaca pasal peraturan, menganalisis kasus nyata, berdiskusi, dan menulis argumen',
      'Melatih ketajaman logika bukti, etika keadilan, dan komunikasi lisan maupun tulisan yang runtut',
      'Syarat akademik wajib untuk profesi advokat, jaksa, hakim, notaris, atau penasihat hukum'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.28,
      gaya_berpikir: 0.28,
      kebiasaan: 0.14,
      kemampuan_saat_ini: 0.1,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 76,
      kebiasaan: 68,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 64,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_sosial'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_individu', 'ling_tim'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['analytical_depth', 'academic_aspiration', 'interpersonal_social'],
    requiredBasicSkills: [
      'Suka membaca bacaan panjang secara teliti, berpikir objektif, dan berani berargumen berbasis bukti'
    ],
    developableSkills: [
      'Penalaran hukum (legal reasoning), penyusunan perjanjian/kontrak, dan retorika peradilan semu'
    ],
    requirementsOrConstraints: [
      'Untuk berpraktik sebagai Advokat, Jaksa, Hakim, atau Notaris setelah lulus S1 Ilmu Hukum tetap wajib mengikuti pendidikan profesi/ujian khusus masing-masing'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar fakultas hukum, akreditasi, dan rincian biaya kuliah tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti/SNPMB dan UU No. 18 Tahun 2003 tentang Advokat.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_UU_ADVOKAT_HUKUM
      ],
      studyDetail: {
        studyFieldName: 'Ilmu Hukum (S1)',
        studentFriendlyDescription:
          'Mempelajari cara kerja aturan negara, hukum perdata, hukum pidana, tata negara, serta bagaimana sengketa diselesaikan secara adil.',
        typicalCoreTopics: [
          'Pengantar Ilmu Hukum & Tata Negara',
          'Hukum Pidana, Hukum Perdata & Hukum Acara',
          'Perancangan Kontrak & Penyelesaian Sengketa'
        ],
        academicOrPracticeActivities: [
          'Bedah kasus hukum dan diskusi debat argumentasi di kelas',
          'Praktik peradilan semu (moot court) serta latihan membuat draf kontrak perjanjian'
        ],
        relevantSkills: [
          'Analisis bacaan aturan yang detail',
          'Argumentasi lisan & tulisan yang terstruktur',
          'Objektivitas menilai bukti'
        ],
        careerConnections: [
          'Staf Legal Perusahaan, Advokat/Pengacara (dengan PKPA/ujian), Notaris (dengan M.Kn), atau Analis Kebijakan'
        ],
        verifiedEntryPathwaysNote: 'Tersedia bagi lulusan SMK melalui SNBP, SNBT, maupun jalur mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_LAW_BUSINESS',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'hukum_keadilan',
    secondaryDomains: ['bisnis_ekonomi', 'administrasi_logistik'],
    name: 'Kuliah Hukum Bisnis, Kepatuhan & Ilmu Pemerintahan (S1)',
    categoryLabel: 'Aturan Bisnis & Kebijakan Publik',
    shortDescription:
      'Fokus mempelajari aturan perdagangan, perizinan usaha, perlindungan konsumen/pekerja, hak cipta digital, dan kebijakan layanan publik di masyarakat (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Menghubungkan pemahaman aturan hukum dengan praktik usaha, kontrak dagang, dan layanan masyarakat',
      'Banyak menganalisis kebijakan publik, aturan ketenagakerjaan, serta izin operasional usaha',
      'Cocok bagi yang tertarik dunia aturan/keadilan sekaligus dinamika bisnis dan organisasi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.26,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.1,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 74,
      kebiasaan: 70,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 64,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_usaha', 'minat_sosial'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_tim', 'ling_individu'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['analytical_depth', 'structured_procedural', 'academic_aspiration'],
    requiredBasicSkills: [
      'Ketelitian membaca dokumen aturan serta kemampuan bernegosiasi secara santun dan tegas'
    ],
    developableSkills: [
      'Pemeriksaan kepatuhan aturan usaha (compliance), hukum ketenagakerjaan, dan analisis kebijakan'
    ],
    requirementsOrConstraints: [
      'Kategori rumpun studi umum (biasanya berupa peminatan di Ilmu Hukum atau Administrasi/Ilmu Pemerintahan)'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi dan nama peminatan spesifik per kampus tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Umumnya tersedia sebagai peminatan/konsentrasi dalam S1 Ilmu Hukum atau Ilmu Pemerintahan/Administrasi Publik.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      studyDetail: {
        studyFieldName: 'Hukum Bisnis, Kepatuhan & Kebijakan Publik (S1)',
        studentFriendlyDescription:
          'Mempelajari aturan perizinan usaha, perjanjian kerja sama, hak cipta karya, serta tata kelola aturan publik agar organisasi berjalan tertib.',
        typicalCoreTopics: [
          'Hukum Kontrak Dagang & Perlindungan Konsumen',
          'Hukum Ketenagakerjaan & Kekayaan Intelektual (Hak Cipta)',
          'Tata Kelola Pemerintahan & Kepatuhan Regulasi'
        ],
        academicOrPracticeActivities: [
          'Studi kasus sengketa usaha/konsumen dan latihan menyusun dokumen perizinan',
          'Simulasi rapat penyusunan aturan organisasi dan analisis kebijakan publik'
        ],
        relevantSkills: [
          'Kepatuhan prosedur aturan',
          'Negosiasi tertulis & lisan',
          'Analisis risiko kebijakan'
        ],
        careerConnections: [
          'Staf Kepatuhan (Compliance), Pengelola Hubungan Industrial/HR Legal, dan Analis Administrasi Publik'
        ],
        verifiedEntryPathwaysNote: 'Melalui seleksi masuk S1 Ilmu Hukum atau Administrasi/Pemerintahan sesuai SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 3. BAHASA & SASTRA (2 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_LANG_INDO',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'bahasa_sastra',
    secondaryDomains: ['komunikasi_media'],
    name: 'Kuliah Bahasa & Sastra Indonesia serta Penulisan Kreatif (S1)',
    categoryLabel: 'Bahasa, Sastra & Kepenulisan',
    shortDescription:
      'Mendalami struktur bahasa Indonesia, penyuntingan naskah, apresiasi karya sastra, dan teknik menulis kreatif mulai dari cerita hingga konten media (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Banyak membaca buku/karya sastra, berdiskusi makna budaya, dan berlatih menulis bermacam format',
      'Mengasah kepekaan tata bahasa, penyuntingan naskah (editing), dan gaya penyampaian ide',
      'Cocok untuk yang gemar membaca, bercerita, menulis esai/fiksi, atau tertarik dunia penerbitan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.28,
      gaya_berpikir: 0.24,
      kebiasaan: 0.14,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 72,
      kebiasaan: 66,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 64,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_akademik'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_analitis'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_individu', 'ling_kreatif'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['creative_expression', 'academic_aspiration', 'analytical_depth'],
    requiredBasicSkills: [
      'Kebiasaan rajin membaca dan kemampuan menyusun kalimat yang jelas serta menarik'
    ],
    developableSkills: [
      'Penyuntingan naskah profesional, penulisan skenario/fiksi, dan kajian budaya'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa daftar kampus, kuota, atau rincian biaya'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar universitas dan peminatan penerbitan/jurnalistik per kampus tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur rumpun Humaniora/Bahasa & Sastra PDDikti dan jalur SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Sastra Indonesia & Kepenulisan Kreatif (S1)',
        studentFriendlyDescription:
          'Belajar memahami kekayaan bahasa, teknik menyunting tulisan agar tepat sasaran, dan menciptakan karya tulis fiksi maupun nonfiksi.',
        typicalCoreTopics: [
          'Linguistik & Tata Bahasa Indonesia Lanjut',
          'Penyuntingan Naskah (Editing) & Penulisan Kreatif',
          'Apresiasi Sastra, Filologi & Budaya Nusantara'
        ],
        academicOrPracticeActivities: [
          'Workshop menulis cerpen, esai, resensi, atau naskah publikasi',
          'Diskusi bedah buku serta praktik menyunting naskah majalah/media kampus'
        ],
        relevantSkills: [
          'Menulis terstruktur dan ekspresif',
          'Kepekaan ejaan & penyuntingan',
          'Analisis makna teks'
        ],
        careerConnections: [
          'Editor Penerbitan, Penulis Konten/Copywriter, Penulis Naskah Media, atau Pengajar BIPA'
        ],
        verifiedEntryPathwaysNote: 'Terbuka bagi lulusan SMK melalui SNBP, SNBT, atau seleksi mandiri.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_LANG_FOREIGN',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'bahasa_sastra',
    secondaryDomains: ['komunikasi_media', 'pariwisata_kuliner'],
    name: 'Kuliah Bahasa Inggris, Sastra Asing & Penerjemahan (S1/D3)',
    categoryLabel: 'Bahasa Asing & Komunikasi Global',
    shortDescription:
      'Mempelajari penguasaan bahasa asing secara lisan dan tulisan, budaya negara penuturnya, teknik penerjemahan teks/percakapan, dan komunikasi lintas budaya (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Intensif berlatih berbicara, menyimak, menulis, dan menerjemahkan bahasa asing secara akurat',
      'Membahas budaya, bisnis global, atau karya sastra berbahasa asing (Inggris/Jepang/Mandarin/lainnya)',
      'Cocok untuk yang senang belajar kosakata bahasa baru dan berkomunikasi lintas negara'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 70,
      kebiasaan: 68,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_sosial', 'minat_kreatif'],
      gaya_berpikir: ['pikir_analitis', 'pikir_kreatif'],
      kebiasaan: ['biasa_mandiri', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_individu'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['academic_aspiration', 'interpersonal_social', 'creative_expression'],
    requiredBasicSkills: [
      'Ketekunan berlatih kosakata/pelafalan setiap hari dan keberanian berbicara dengan bahasa asing'
    ],
    developableSkills: [
      'Penerjemahan dokumen/subtitling film, korespondensi bisnis internasional, dan interpretasi lisan'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; pilihan bahasa asing tertentu bergantung pada ketersediaan jurusan di masing-masing kampus'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar jurusan bahasa asing spesifik per perguruan tinggi tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke rumpun Bahasa & Sastra Asing pada PDDikti dan jalur masuk SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Bahasa Inggris, Sastra Asing & Penerjemahan (S1 / D3)',
        studentFriendlyDescription:
          'Melatih kefasihan berbahasa asing untuk kebutuhan terjemahan, komunikasi kerja internasional, penulisan, maupun layanan lintas budaya.',
        typicalCoreTopics: [
          'Keterampilan Berbahasa Asing (Speaking, Writing, Listening)',
          'Teknik Penerjemahan Teks & Subtitling Media',
          'Kajian Budaya & Komunikasi Lintas Negara'
        ],
        academicOrPracticeActivities: [
          'Praktik percakapan di laboratorium bahasa dan presentasi berbahasa asing',
          'Proyek menerjemahkan artikel, dokumen bisnis, atau teks video pendek'
        ],
        relevantSkills: [
          'Komunikasi bahasa asing aktif',
          'Ketelitian menerjemahkan makna konteks',
          'Kepekaan lintas budaya'
        ],
        careerConnections: [
          'Penerjemah/Interpreter, Staf Komunikasi Internasional, Penulis Konten Global, atau Pendamping Wisata'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jenjang D3 Bahasa Terapan maupun S1 Sastra melalui SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 4. PENDIDIKAN (2 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_TEACHER_PGSD',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'pendidikan',
    secondaryDomains: ['psikologi_sosial'],
    name: 'Kuliah Pendidikan Guru Sekolah Dasar & Anak Usia Dini (S1)',
    categoryLabel: 'Pendidikan & Pendampingan Anak',
    shortDescription:
      'Mempelajari cara anak belajar, metode mengajar yang menyenangkan dan sabar, penyusunan media ajar, serta pengelolaan kelas SD/PAUD (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Banyak belajar psikologi perkembangan anak, membuat alat peraga kreatif, dan praktik mengajar',
      'Melatih kesabaran luar biasa, penyampaian materi sederhana, dan komunikasi hangat dengan orang tua',
      'Jalur resmi S1 sebelum menempuh Pendidikan Profesi Guru (PPG) untuk menjadi guru sekolah formal'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.28,
      gaya_berpikir: 0.2,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 70,
      kebiasaan: 70,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_tim'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['interpersonal_social', 'academic_aspiration', 'creative_expression'],
    requiredBasicSkills: [
      'Kesabaran mendampingi anak-anak dan kemampuan menjelaskan konsep dengan cara sederhana'
    ],
    developableSkills: [
      'Desain modul ajar kreatif, evaluasi perkembangan belajar anak, dan pengelolaan kelas'
    ],
    requirementsOrConstraints: [
      'Sesuai UU Guru dan Dosen, menjadi guru sekolah formal memerlukan lulus S1 Pendidikan dan sertifikat PPG'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi keguruan (FKIP) dan rincian biaya tidak tercantum'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti dan ketentuan S1 + PPG pada UU No. 14/2005.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_GURU_PPG
      ],
      studyDetail: {
        studyFieldName: 'Pendidikan Guru Sekolah Dasar (PGSD) & PAUD (S1)',
        studentFriendlyDescription:
          'Membekali calon pendidik tentang cara memahami karakter anak, merancang kegiatan belajar seru, dan membimbing literasi serta numerasi dasar.',
        typicalCoreTopics: [
          'Psikologi Perkembangan Anak & Pedagogi Dasar',
          'Perancangan Media Belajar & Permainan Edukatif',
          'Kurikulum SD/PAUD & Penilaian Belajar Anak'
        ],
        academicOrPracticeActivities: [
          'Membuat alat peraga belajar dan simulasi mengajar di kelas teman (microteaching)',
          'Praktik pengalaman lapangan (PPL) mendampingi kegiatan di sekolah mitra'
        ],
        relevantSkills: [
          'Komunikasi sabar & hangat',
          'Kreativitas media belajar',
          'Pengelolaan kelas yang tertib'
        ],
        careerConnections: [
          'Guru SD/PAUD (setelah lulus S1 & PPG), Pengelola Taman Bacaan, atau Pengembang Bahan Ajar Anak'
        ],
        verifiedEntryPathwaysNote: 'Terbuka lewat seleksi nasional SNBP, SNBT, dan jalur mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_TEACHER_SUBJ',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'pendidikan',
    secondaryDomains: ['teknologi_informatika', 'bahasa_sastra'],
    name: 'Kuliah Pendidikan Bidang Studi, Teknologi Pendidikan & Bimbingan Konseling (S1)',
    categoryLabel: 'Pengajaran Bidang Ilmu & BK',
    shortDescription:
      'Mempelajari penguasaan materi ilmu spesifik (seperti Informatika, Bahasa, Matematika, atau Bimbingan Konseling) sekaligus cara mengajarkannya secara efektif kepada remaja/pelajar (kategori umum).',
    characteristics: [
      'Memadukan pendalaman ilmu bidang studi dengan strategi penyampaian materi di kelas atau media belajar digital',
      'Cocok bagi yang senang mengajari teman sebaya dan ingin menjadi pendidik atau mentor profesional',
      'Membuka jalan ke profesi guru SMP/SMA/SMK (bersama PPG), pengembang e-learning, atau konselor sekolah'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.24,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 72,
      kebiasaan: 68,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_sosial'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_kreatif'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['interpersonal_social', 'academic_aspiration', 'analytical_depth'],
    requiredBasicSkills: [
      'Kemampuan memecah materi sulit menjadi penjelasan runtut yang mudah diikuti orang lain'
    ],
    developableSkills: [
      'Desain kurikulum pelatihan/e-learning, asesmen hasil belajar, dan bimbingan siswa'
    ],
    requirementsOrConstraints: [
      'Untuk diangkat menjadi guru formal tetap diwajibkan menempuh S1 kependidikan dan PPG'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar jurusan pendidikan per mata pelajaran dan nama kampus tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke rumpun Pendidikan (PDDikti) dan syarat sertifikat pendidik UU No. 14/2005.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_GURU_PPG
      ],
      studyDetail: {
        studyFieldName: 'Pendidikan Bidang Studi, Teknologi Pendidikan & Bimbingan Konseling (S1)',
        studentFriendlyDescription:
          'Mendalami satu bidang ilmu atau bimbingan siswa sambil melatih keterampilan mengajar, membuat modul belajar digital, dan mengevaluasi pemahaman.',
        typicalCoreTopics: [
          'Strategi Pembelajaran & Evaluasi Pendidikan',
          'Pendalaman Materi Bidang (TIK/Bahasa/Sains/BK)',
          'Pengembangan Media Belajar & E-Learning'
        ],
        academicOrPracticeActivities: [
          'Praktik microteaching di depan dosen/teman serta pembuatan modul atau video pembelajaran',
          'Praktik asistensi mengajar atau layanan konseling sekolah saat semester atas'
        ],
        relevantSkills: [
          'Public speaking di kelas',
          'Penyusunan materi ajar terstruktur',
          'Empati membimbing pelajar'
        ],
        careerConnections: [
          'Guru SMP/SMA/SMK (dengan PPG), Konselor Pendidikan, atau Pengembang Modul Pelatihan/EdTech'
        ],
        verifiedEntryPathwaysNote: 'Melalui jalur SNBP, SNBT, maupun seleksi mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 5. KESEHATAN (2 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_HEALTH_NURSING',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'kesehatan',
    name: 'Kuliah Ilmu Keperawatan & Layanan Klinis Kesehatan (D3/S1)',
    categoryLabel: 'Bidang Studi Kesehatan Klinis',
    shortDescription:
      'Mempelajari anatomi tubuh, prosedur perawatan pasien yang aman, kebersihan klinis, dan komunikasi empatik mendampingi proses pemulihan pasien (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Belajar di ruang kelas biologi kesehatan sekaligus praktikum laboratorium tindakan perawatan dasar',
      'Menuntut ketelitian tinggi pada prosedur kebersihan, dosis, catatan medis, dan ketenangan menghadapi pasien',
      'Jalur akademik resmi yang wajib ditempuh bagi siapa pun yang bercita-cita menjadi perawat berizin'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.2,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 72,
      kebiasaan: 76,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan'],
      kesiapan_praktis: ['siap_studi', 'siap_terstruktur']
    },
    supportingIndicators: ['interpersonal_social', 'structured_procedural', 'academic_aspiration'],
    requiredBasicSkills: [
      'Ketelatenan merawat sesama, kedisiplinan terhadap kebersihan dan SOP, serta kesiapan fisik/mental'
    ],
    developableSkills: [
      'Prosedur keperawatan dasar, pemantauan tanda vital, komunikasi terapeutik, dan praktik profesi Ners'
    ],
    requirementsOrConstraints: [
      'Syarat Wajib: Untuk berpraktik sebagai perawat profesional wajib lulus kuliah kesehatan (D3/S1+Ners), lulus Uji Kompetensi, dan memiliki STR resmi (UU Kesehatan No. 17/2023). Periksa juga syarat seleksi kampus kesehatan bagi lulusan SMK.'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Syarat jurusan asal SMA/SMK dan kuota tiap perguruan tinggi kesehatan berbeda-beda'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur rumpun Ilmu Kesehatan dan ketentuan STR pada UU Kesehatan No. 17/2023.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKES_NAKES_STR
      ],
      studyDetail: {
        studyFieldName: 'Ilmu Keperawatan & Layanan Klinis (D3 / S1 + Profesi)',
        studentFriendlyDescription:
          'Mempelajari ilmu kesehatan tubuh manusia serta keterampilan merawat pasien secara aman, bersih, dan penuh kepedulian.',
        typicalCoreTopics: [
          'Anatomi & Fisiologi Dasar Manusia',
          'Keperawatan Dasar & Pencegahan Infeksi',
          'Komunikasi Terapeutik & Etika Profesi Kesehatan'
        ],
        academicOrPracticeActivities: [
          'Praktik keterampilan prosedur perawatan di laboratorium keperawatan kampus',
          'Praktik klinik bertahap di fasilitas kesehatan di bawah bimbingan pembimbing klinik'
        ],
        relevantSkills: [
          'Kepatuhan ketat pada SOP higienitas',
          'Empati & komunikasi tenang dengan pasien',
          'Ketelitian pencatatan kondisi kesehatan'
        ],
        careerConnections: [
          'Perawat Klinis (setelah lulus D3/Ners + Uji Kompetensi + STR) atau Pendidik Kesehatan Masyarakat'
        ],
        verifiedEntryPathwaysNote: 'Melalui SNPMB atau seleksi khusus institusi pendidikan kesehatan; pastikan mengecek persyaratan latar SMK di kampus tujuan.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_HEALTH_PUBLIC',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'kesehatan',
    secondaryDomains: ['administrasi_logistik', 'psikologi_sosial'],
    name: 'Kuliah Kesehatan Masyarakat, Ilmu Gizi & Keselamatan Kerja K3 (S1/D4)',
    categoryLabel: 'Preventif, Gizi & K3 Industri',
    shortDescription:
      'Mempelajari pencegahan penyakit di masyarakat, edukasi pola makan bergizi, sanitasi lingkungan, dan pengelolaan keselamatan & kesehatan kerja (K3) di kantor maupun pabrik (kategori umum).',
    characteristics: [
      'Berfokus pada pencegahan masalah kesehatan, data penyebaran penyakit, penyuluhan, dan standar K3',
      'Menggabungkan ilmu kesehatan dasar dengan komunikasi masyarakat serta tata kelola keselamatan kerja',
      'Cocok untuk yang tertarik dunia kesehatan dan keselamatan kerja tanpa harus selalu bekerja di ruang tindakan medis'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.24,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.1,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 70,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_sosial'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan'],
      kesiapan_praktis: ['siap_studi', 'siap_terstruktur']
    },
    supportingIndicators: ['analytical_depth', 'interpersonal_social', 'structured_procedural'],
    requiredBasicSkills: [
      'Ketertarikan membaca data kesehatan, komunikasi edukasi, dan kepedulian pada keselamatan lingkungan kerja'
    ],
    developableSkills: [
      'Analisis risiko keselamatan kerja (K3), edukasi gizi/kesehatan masyarakat, dan survei kesehatan'
    ],
    requirementsOrConstraints: [
      'Untuk menjadi ahli gizi klinis atau tenaga kesehatan masyarakat teregistrasi tetap mengikuti ketentuan uji kompetensi & STR UU Kesehatan No. 17/2023'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Rincian kuota per peminatan K3/Gizi/Kesmas dan nama kampus tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi pada nomenklatur rumpun Ilmu Kesehatan PDDikti dan UU Kesehatan No. 17/2023.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKES_NAKES_STR
      ],
      studyDetail: {
        studyFieldName: 'Kesehatan Masyarakat, Gizi & Keselamatan Kerja K3 (S1 / D4)',
        studentFriendlyDescription:
          'Mempelajari bagaimana menjaga masyarakat dan pekerja tetap sehat melalui pencegahan penyakit, gizi seimbang, serta aturan keselamatan kerja.',
        typicalCoreTopics: [
          'Dasar Epidemiologi & Pencegahan Penyakit',
          'Keselamatan & Kesehatan Kerja (K3) Industri',
          'Promosi Kesehatan & Dasar Ilmu Gizi Masyarakat'
        ],
        academicOrPracticeActivities: [
          'Mengolah data survei kesehatan lingkungan dan merancang kampanye edukasi hidup sehat',
          'Praktik audit checklist keselamatan kerja dan pengukuran sanitasi lingkungan'
        ],
        relevantSkills: [
          'Analisis data kesehatan dasar',
          'Penyuluhan & komunikasi masyarakat',
          'Pemeriksaan standar keselamatan kerja'
        ],
        careerConnections: [
          'Ahli/Staf K3 Industri, Promotor Kesehatan Masyarakat, atau Ahli Gizi (sesuai jalur studi & STR)'
        ],
        verifiedEntryPathwaysNote: 'Melalui seleksi SNBP, SNBT, dan jalur mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 6. BISNIS & EKONOMI (3 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_COMM_MGMT',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['komunikasi_media'],
    name: 'Kuliah Manajemen Bisnis, Pemasaran & Kewirausahaan (D3/D4/S1)',
    categoryLabel: 'Manajemen & Strategi Bisnis',
    shortDescription:
      'Mempelajari cara mengelola tim dan usaha, menyusun strategi pemasaran, membaca perilaku pembeli, dan merencanakan keuangan bisnis secara berkelanjutan (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Banyak membahas studi kasus bisnis nyata, kerja kelompok proyek pemasaran, dan presentasi ide',
      'Mengenalkan dasar akuntansi manajerial, operasional usaha, hingga pemasaran digital',
      'Cocok bagi yang tertarik melihat peluang usaha dan memimpin kegiatan tim'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 68,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_analitis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_kreatif'],
      kesiapan_praktis: ['siap_studi', 'siap_usaha']
    },
    supportingIndicators: ['enterprising_business', 'interpersonal_social', 'academic_aspiration'],
    requiredBasicSkills: [
      'Ketertarikan pada cara produk dibuat-dipasarkan, komunikasi tim, dan hitung untung-rugi sederhana'
    ],
    developableSkills: [
      'Perencanaan bisnis, riset perilaku konsumen, dan strategi pemasaran digital'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan universitas, kuota, atau rincian UKT'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar universitas/sekolah bisnis, status akreditasi, dan rincian biaya tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Terverifikasi pada klasifikasi Rumpun Manajemen/Ekonomi serta panduan SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_RUMPUN_ILMU,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Manajemen Bisnis, Pemasaran & Kewirausahaan (D3 / D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana sebuah usaha merancang produk/jasa, mengatur tim, mempromosikan ke pembeli, dan mengelola keuangannya agar berkembang.',
        typicalCoreTopics: [
          'Pengantar Manajemen & Perilaku Konsumen',
          'Pemasaran Digital & Strategi Penjualan',
          'Manajemen Operasional & Keuangan Bisnis Dasar'
        ],
        academicOrPracticeActivities: [
          'Membuat rencana bisnis kelompok dan menyimulasikan peluncuran produk',
          'Presentasi studi kasus usaha dan survei kepuasan pembeli sederhana'
        ],
        relevantSkills: [
          'Komunikasi & negosiasi bisnis',
          'Membaca peluang kebutuhan pasar',
          'Koordinasi kerja tim'
        ],
        careerConnections: [
          'Staf Pemasaran, Pengelola Operasional Bisnis, Analis Pengembangan Usaha, atau Wirausaha Terencana'
        ],
        verifiedEntryPathwaysNote: 'Tersedia melalui jalur SNBP, SNBT, dan seleksi mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_ACCOUNTING',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Kuliah Akuntansi, Perpajakan & Keuangan Terapan (D3/D4/S1)',
    categoryLabel: 'Akuntansi, Angka & Keuangan',
    shortDescription:
      'Mempelajari penyusunan laporan keuangan yang akurat, perhitungan pajak usaha, pemeriksaan catatan transaksi (audit), serta analisis anggaran keuangan (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Banyak berlatih menyusun neraca keuangan, pencatatan transaksi debit-kredit, dan rumus laporan',
      'Menuntut ketelitian angka tingkat tinggi, kejujuran, serta kepatuhan pada standar akuntansi',
      'Tersedia dari jalur vokasi terapan (Akuntansi/Perpajakan D3/D4) hingga S1 Akuntansi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.24,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 74,
      kebiasaan: 76,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_akademik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_studi', 'siap_terstruktur']
    },
    supportingIndicators: ['structured_procedural', 'analytical_depth', 'enterprising_business'],
    requiredBasicSkills: [
      'Suka berhitung teliti, sabar mencocokkan data angka, dan konsisten bekerja runtut'
    ],
    developableSkills: [
      'Penyusunan laporan keuangan terstandar, perangkat lunak akuntansi, dan administrasi perpajakan'
    ],
    requirementsOrConstraints: [
      'Untuk berpraktik sebagai Akuntan Publik bersertifikat setelah S1 tetap memerlukan pendidikan profesi/sertifikasi profesi akuntansi'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar fakultas ekonomi/vokasi dan rincian biaya tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan rumpun ilmu Ekonomi/Akuntansi PDDikti dan jalur seleksi SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Akuntansi, Perpajakan & Keuangan Terapan (D3 / D4 / S1)',
        studentFriendlyDescription:
          'Belajar bagaimana arus uang masuk-keluar dicatat secara sah, diaudit kebenarannya, dan dianalisis untuk mengambil keputusan keuangan.',
        typicalCoreTopics: [
          'Akuntansi Keuangan Dasar & Menengah',
          'Akuntansi Biaya & Perpajakan Indonesia',
          'Sistem Informasi Akuntansi & Dasar Pemeriksaan (Audit)'
        ],
        academicOrPracticeActivities: [
          'Latihan menyusun jurnal transaksi dan laporan keuangan perusahaan memakai software akuntansi',
          'Studi kasus perhitungan pajak serta pemeriksaan kecocokan bukti transaksi'
        ],
        relevantSkills: [
          'Ketelitian angka & pencatatan',
          'Analisis laporan kas & anggaran',
          'Kepatuhan aturan keuangan'
        ],
        careerConnections: [
          'Staf Akuntansi/Keuangan, Konsultan/Staf Pajak, Auditor Pemula, atau Analis Anggaran'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jenjang D3/D4 Vokasi maupun S1 Akademik lewat SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_BIZ_ADMIN',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'administrasi_logistik',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Kuliah Administrasi Bisnis, Kesekretariatan & Rantai Pasok (D3/D4/S1)',
    categoryLabel: 'Administrasi Organisasi & Logistik',
    shortDescription:
      'Mempelajari tata kelola administrasi perkantoran modern, koordinasi operasional tim, pengelolaan dokumen kerja, hingga kelancaran alur barang logistik (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Berfokus pada kelancaran operasional organisasi, sistem arsip digital, dan manajemen pengadaan barang',
      'Tersedia luas di program D3/D4 Administrasi Bisnis, Manajemen Logistik, dan S1 Administrasi Bisnis',
      'Cocok bagi yang teratur, suka mengatur jadwal/dokumen rapi, dan menjaga alur kerja tim lancar'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.2,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 70,
      kebiasaan: 76,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_praktik', 'minat_akademik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_teknis', 'ling_tim'],
      kesiapan_praktis: ['siap_studi', 'siap_terstruktur']
    },
    supportingIndicators: ['structured_procedural', 'enterprising_business', 'academic_aspiration'],
    requiredBasicSkills: [
      'Kerapian mencatat data, koordinasi jadwal antarbagian, dan penguasaan aplikasi perkantoran'
    ],
    developableSkills: [
      'Administrasi pengadaan & stok logistik, korespondensi bisnis, dan tata kelola SDM pemula'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum tanpa menyebut kampus atau rincian biaya tertentu'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar politeknik/universitas penyedia program tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti rumpun Administrasi & Vokasi.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Administrasi Bisnis & Manajemen Operasional/Logistik (D3 / D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana administrasi kantor, koordinasi dokumen, dan distribusi barang dikelola rapi agar organisasi bekerja efisien.',
        typicalCoreTopics: [
          'Administrasi Perkantoran Modern & Kearsipan Digital',
          'Koordinasi Operasional & Manajemen Rantai Pasok Dasar',
          'Komunikasi Bisnis & Pengelolaan Sumber Daya'
        ],
        academicOrPracticeActivities: [
          'Simulasi korespondensi bisnis, pengarsipan elektronik, dan perencanaan pengadaan barang',
          'Studi kasus efisiensi pengiriman barang dan jadwal kerja operasional'
        ],
        relevantSkills: [
          'Pengelolaan dokumen & jadwal rapi',
          'Koordinasi operasional antar tim',
          'Ketelitian stok & logistik'
        ],
        careerConnections: [
          'Staf Administrasi Profesional, Koordinator Operasional/Logistik, atau Staf General Affairs'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jenjang D3/D4 maupun S1 melalui seleksi nasional SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 7. KOMUNIKASI & MEDIA (2 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_COMM_PR',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'komunikasi_media',
    secondaryDomains: ['bisnis_ekonomi', 'seni_desain'],
    name: 'Kuliah Ilmu Komunikasi, Hubungan Masyarakat & Media Digital (S1/D4)',
    categoryLabel: 'Komunikasi Publik & Kampanye Media',
    shortDescription:
      'Mempelajari cara menyampaikan pesan kepada masyarakat luas, mengelola citra organisasi (PR/Humas), merancang kampanye komunikasi digital, dan teknik berbicara di depan publik (kategori umum).',
    characteristics: [
      'Banyak berlatih presentasi, menulis rilis media, menyusun kampanye sosial/produk, dan diskusi tim',
      'Menggabungkan pemahaman psikologi audiens dengan kreativitas media cetak maupun digital',
      'Cocok untuk yang aktif berkomunikasi, suka berorganisasi, dan tertarik dunia humas atau media'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.28,
      gaya_berpikir: 0.22,
      kebiasaan: 0.14,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 70,
      kebiasaan: 66,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_kreatif', 'minat_usaha'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_tim', 'ling_kreatif'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['interpersonal_social', 'creative_expression', 'enterprising_business'],
    requiredBasicSkills: [
      'Keberanian berbicara dengan jelas, kepekaan membaca respons audiens, dan kerja sama acara'
    ],
    developableSkills: [
      'Public speaking profesional, strategi hubungan media (PR), dan perencanaan kampanye komunikasi'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa daftar kampus atau rincian biaya kuliah'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Nama perguruan tinggi dan peminatan PR/Marketing Comm tiap kampus tidak dicantumkan'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur rumpun Ilmu Komunikasi PDDikti dan SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Ilmu Komunikasi, Kehumasan (PR) & Media Digital (S1 / D4)',
        studentFriendlyDescription:
          'Mempelajari bagaimana pesan, konten kampanye, dan hubungan dengan masyarakat dirancang secara efektif di berbagai media.',
        typicalCoreTopics: [
          'Dasar Ilmu Komunikasi & Psikologi Khalayak',
          'Hubungan Masyarakat (Public Relations) & Komunikasi Krisis',
          'Produksi Kampanye Media Digital & Public Speaking'
        ],
        academicOrPracticeActivities: [
          'Merancang proyek kampanye sosial/merek dan praktik konferensi pers atau presentasi publik',
          'Membuat konten komunikasi multiplatform dan menganalisis respons audiens'
        ],
        relevantSkills: [
          'Public speaking & presentasi percaya diri',
          'Penulisan pesan persuasi & siaran pers',
          'Manajemen acara komunikasi'
        ],
        careerConnections: [
          'Public Relations (Humas), Spesialis Media Sosial/Komunikasi Korporat, atau Perencana Kampanye'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jalur SNBP, SNBT, maupun seleksi mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_JOURNALISM',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'komunikasi_media',
    secondaryDomains: ['bahasa_sastra', 'seni_desain'],
    name: 'Kuliah Jurnalistik, Penyiaran & Produksi Berita Media (S1/D3)',
    categoryLabel: 'Peliputan, Siaran & Jurnalistik',
    shortDescription:
      'Mempelajari teknik wawancara narasumber, verifikasi fakta berita, penulisan laporan jurnalistik, serta produksi program audio-video untuk televisi, radio, maupun portal berita (kategori umum).',
    characteristics: [
      'Aktif turun mencari bahan berita, mewawancarai orang, menulis laporan cepat, dan mengedit siaran',
      'Menekankan akurasi fakta, keberimbangan informasi, dan etika jurnalistik',
      'Cocok untuk yang rasa ingin tahunya tinggi tentang peristiwa sekitar dan suka bercerita lewat media'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 72,
      kebiasaan: 68,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_kreatif', 'minat_akademik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_kreatif'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_kreatif', 'ling_tim'],
      kesiapan_praktis: ['siap_studi', 'siap_kerja']
    },
    supportingIndicators: ['interpersonal_social', 'creative_expression', 'analytical_depth'],
    requiredBasicSkills: [
      'Keberanian bertanya, kebiasaan memeriksa fakta sebelum percaya, dan menulis laporan ringkas'
    ],
    developableSkills: [
      'Teknik liputan lapangan, penulisan berita multiplatform, penyiaran studio, dan etika pers'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan kampus tertentu atau rincian biaya'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar jurusan jurnalistik/broadcasting spesifik kampus tidak dicantumkan'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan rumpun Komunikasi/Penyiaran PDDikti, SNPMB, dan SKKNI Penyiaran.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_BCAST
      ],
      studyDetail: {
        studyFieldName: 'Jurnalistik, Penyiaran & Produksi Berita (S1 / D3)',
        studentFriendlyDescription:
          'Mempelajari bagaimana informasi faktual dikumpulkan lewat wawancara dan riset lapangan lalu diolah menjadi berita tulis, radio, atau video.',
        typicalCoreTopics: [
          'Teknik Peliputan, Wawancara & Verifikasi Fakta',
          'Penulisan Berita Cetak, Online & Naskah Siaran',
          'Produksi Berita Video/Audio & Etika Jurnalistik'
        ],
        academicOrPracticeActivities: [
          'Praktik liputan lapangan membuat laporan berita kampus/komunitas dan buletin video',
          'Simulasi menjadi presenter, produser siaran, atau penyunting desk berita'
        ],
        relevantSkills: [
          'Wawancara & menggali fakta',
          'Penulisan berita akurat & singkat',
          'Pengambilan gambar/audio siaran'
        ],
        careerConnections: [
          'Reporter/Jurnalis Multimedia, Produser Siaran/Podcast, Penulis Dokumenter, atau Editor Berita'
        ],
        verifiedEntryPathwaysNote: 'Melalui jalur SNBP, SNBT, dan seleksi mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 8. PSIKOLOGI & ILMU SOSIAL (2 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_PSYCHOLOGY',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'psikologi_sosial',
    secondaryDomains: ['pendidikan'],
    name: 'Kuliah Psikologi (S1)',
    categoryLabel: 'Ilmu Perilaku & Kesehatan Mental',
    shortDescription:
      'Mempelajari pola berpikir, emosi, perkembangan manusia, dinamika kelompok, dan metode penelitian perilaku secara ilmiah untuk diterapkan di dunia kerja, pendidikan, atau masyarakat (kategori umum).',
    characteristics: [
      'Banyak membaca teori perilaku manusia, melakukan observasi/wawancara, serta mengolah data penelitian sosial',
      'Melatih empati sekaligus objektivitas ilmiah saat memahami masalah individu maupun tim kerja',
      'Jenjang S1 adalah syarat dasar sebelum melanjutkan Profesi Psikolog bila ingin praktik konseling klinis'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.28,
      gaya_berpikir: 0.24,
      kebiasaan: 0.14,
      kemampuan_saat_ini: 0.1,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 74,
      kebiasaan: 68,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_individu'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['interpersonal_social', 'analytical_depth', 'academic_aspiration'],
    requiredBasicSkills: [
      'Keinginan kuat memahami perasaan orang tanpa langsung menghakimi dan betah membaca kajian ilmiah'
    ],
    developableSkills: [
      'Observasi perilaku, wawancara terstruktur, dasar asesmen SDM/HRD, dan metode riset sosial'
    ],
    requirementsOrConstraints: [
      'Lulusan S1 Psikologi (S.Psi) belum berwenang praktik sebagai Psikolog klinis; gelar Psikolog memerlukan pendidikan lanjutan Profesi Psikologi'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar universitas penyedia S1 Psikologi dan rincian biaya tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur rumpun Psikologi PDDikti dan jalur seleksi SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Ilmu Psikologi (S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana pikiran, emosi, kebiasaan belajar, dan perilaku manusia bekerja di lingkungan pribadi, sekolah, maupun tempat kerja.',
        typicalCoreTopics: [
          'Psikologi Perkembangan & Kepribadian',
          'Psikologi Sosial, Pendidikan & Industri/Organisasi',
          'Observasi, Wawancara & Statistika Penelitian Perilaku'
        ],
        academicOrPracticeActivities: [
          'Latihan teknik observasi perilaku dan wawancara konseling dasar secara etis',
          'Meneliti kebiasaan kelompok lewat kuesioner sederhana dan menyusun laporan psikologi'
        ],
        relevantSkills: [
          'Mendengar aktif penuh empati',
          'Analisis perilaku secara objektif',
          'Pengolahan data penelitian sosial'
        ],
        careerConnections: [
          'Staf SDM/Rekrutmen (HRD), Fasilitator Pelatihan, Asisten Riset Perilaku, atau lanjut Profesi Psikolog'
        ],
        verifiedEntryPathwaysNote: 'Terbuka melalui seleksi nasional SNBP, SNBT, dan jalur mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_SOCIAL_WELFARE',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'psikologi_sosial',
    secondaryDomains: ['hukum_keadilan', 'pendidikan'],
    name: 'Kuliah Kesejahteraan Sosial, Sosiologi & Pemberdayaan Masyarakat (S1)',
    categoryLabel: 'Kemasyarakatan & Perubahan Sosial',
    shortDescription:
      'Mempelajari cara kerja kelompok masyarakat, penyebab masalah sosial seperti kesenjangan atau pengangguran, serta merancang program pendampingan komunitas agar lebih mandiri (kategori umum).',
    characteristics: [
      'Banyak turun melakukan survei lapangan, diskusi kelompok warga, dan analisis kebijakan sosial',
      'Cocok bagi yang peka melihat persoalan di lingkungan sekitar dan suka kegiatan sosial masyarakat',
      'Memadukan kepekaan kemanusiaan dengan perencanaan program pendampingan sosial yang terukur'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.28,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.1,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 68,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_tim'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['interpersonal_social', 'academic_aspiration', 'analytical_depth'],
    requiredBasicSkills: [
      'Kepedulian pada isu masyarakat, nyaman ngobrol dengan beragam usia, dan suka riset lapangan'
    ],
    developableSkills: [
      'Pemetaan kebutuhan komunitas, perencanaan program sosial/CSR, dan advokasi kebijakan warga'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa daftar universitas atau rincian biaya tertentu'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar jurusan Sosiologi/Kesejahteraan Sosial per kampus tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur rumpun Ilmu Sosial PDDikti dan jalur SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Kesejahteraan Sosial, Sosiologi & Pemberdayaan Masyarakat (S1)',
        studentFriendlyDescription:
          'Mempelajari dinamika kehidupan masyarakat dan merancang program sosial nyata agar komunitas lebih berdaya dan sejahtera.',
        typicalCoreTopics: [
          'Pengantar Sosiologi & Struktur Masyarakat',
          'Metode Pekerjaan Sosial & Pendampingan Komunitas',
          'Kebijakan Sosial & Riset Lapangan Masyarakat'
        ],
        academicOrPracticeActivities: [
          'Observasi sosial di desa/komunitas serta diskusi merancang program pemberdayaan warga',
          'Praktik pendampingan kelompok masyarakat bersama lembaga sosial'
        ],
        relevantSkills: [
          'Komunikasi inklusif dengan masyarakat',
          'Pemetaan masalah sosial secara objektif',
          'Perencanaan program komunitas'
        ],
        careerConnections: [
          'Pekerja Sosial, Pendamping Program Pemberdayaan/CSR, Analis Kebijakan Sosial, atau Peneliti Sosial'
        ],
        verifiedEntryPathwaysNote: 'Terbuka melalui seleksi nasional SNBP, SNBT, dan jalur mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 9. SENI & DESAIN (2 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_DESIGN_MEDIA',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'seni_desain',
    secondaryDomains: ['komunikasi_media'],
    name: 'Kuliah Desain Komunikasi Visual (DKV) & Media Kreatif (D3/D4/S1)',
    categoryLabel: 'Desain Visual & Komunikasi Kreatif',
    shortDescription:
      'Mempelajari cara menyampaikan pesan lewat ilustrasi, tipografi, fotografi, desain antarmuka digital (UI), dan karya video kreatif (kategori umum, tanpa kampus spesifik).',
    characteristics: [
      'Banyak mengerjakan proyek studio membuat karya visual, sketsa ide, dan presentasi konsep desain',
      'Jalur masuk seleksi nasional umumnya mewajibkan unggah portofolio karya seni/desain',
      'Cocok untuk yang menikmati proses berkreasi visual dan peduli detail estetika tampilan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.28,
      gaya_berpikir: 0.24,
      kebiasaan: 0.14,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 76,
      gaya_berpikir: 74,
      kebiasaan: 64,
      kemampuan_saat_ini: 58,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 60
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_akademik'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_mandiri', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_individu'],
      kesiapan_praktis: ['siap_studi', 'siap_usaha']
    },
    supportingIndicators: ['creative_expression', 'academic_aspiration'],
    requiredBasicSkills: [
      'Rasa suka menggambar atau menata elemen visual serta mau menerima kritik untuk perbaikan karya'
    ],
    developableSkills: [
      'Teori warna & tipografi, identitas merek (branding), ilustrasi digital, dan produksi multimedia'
    ],
    requirementsOrConstraints: [
      'Jalur seleksi nasional SNPMB untuk rumpun seni/desain mensyaratkan unggah portofolio karya sesuai aturan panitia'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar kampus seni/DKV, passing grade, dan rincian biaya studi tidak dicantumkan'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'RPL/PPLG', 'Tekstil'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Diverifikasi berdasarkan aturan portofolio seni SNPMB, klasifikasi DKV PDDikti, dan SKKNI DKV.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI,
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_RUMPUN_ILMU,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_DKV
      ],
      studyDetail: {
        studyFieldName: 'Desain Komunikasi Visual (DKV) & Media Kreatif (D3 / D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari seni dan teknik komunikasi lewat gambar, huruf, kemasan, foto, video, dan desain tampilan digital yang punya pesan jelas.',
        typicalCoreTopics: [
          'Nirmana, Tipografi & Prinsip Tata Letak',
          'Ilustrasi, Identitas Visual (Branding) & Kemasan',
          'Fotografi, Videografi & Desain Antarmuka Digital'
        ],
        academicOrPracticeActivities: [
          'Membuat sketsa tangan dan karya desain di studio lalu mempresentasikan makna konsepnya',
          'Mengikuti pameran karya mahasiswa dan menyusun portofolio profesional'
        ],
        relevantSkills: [
          'Kreativitas visual orisinal',
          'Kepekaan komposisi & warna',
          'Keterbukaan menerima kritik desain'
        ],
        careerConnections: [
          'Desainer Grafis, Ilustrator, UI/UX Designer, atau Pengarah Seni Media Kreatif'
        ],
        verifiedEntryPathwaysNote:
          'Seleksi SNBP/SNBT bidang seni & desain memerlukan portofolio karya sesuai ketentuan portal SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_PRODUCT_ANIMATION',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'seni_desain',
    secondaryDomains: ['teknologi_informatika'],
    name: 'Kuliah Animasi, Film, Desain Produk & Kriya Terapan (D4/S1)',
    categoryLabel: 'Animasi, Karya 3D & Desain Produk',
    shortDescription:
      'Mempelajari pembuatan film pendek atau animasi 2D/3D, perancangan bentuk benda/produk fungsional (seperti fesyen, kriya, atau alat harian), hingga proses pembuatan purwarupa (kategori umum).',
    characteristics: [
      'Memadukan imajinasi visual dengan keterampilan teknis membuat model 3D, storyboard, atau prototipe fisik',
      'Banyak bekerja di studio animasi komputer, workshop kriya/tekstil, atau laboratorium desain produk',
      'Jalur seleksi nasional juga umumnya memerlukan portofolio karya kreatif dasar'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 72,
      kebiasaan: 68,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_praktik', 'minat_teknis'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_langsung', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_lapangan'],
      kesiapan_praktis: ['siap_studi', 'siap_usaha']
    },
    supportingIndicators: ['creative_expression', 'hands_on_practical', 'technical_affinity'],
    requiredBasicSkills: [
      'Kesabaran mengerjakan detail bentuk/frame secara bertahap dan minat membuat karya tiga dimensi/gerak'
    ],
    developableSkills: [
      'Pemodelan 3D & animasi, penyutradaraan film pendek, serta perancangan purwarupa produk'
    ],
    requirementsOrConstraints: [
      'Jalur seleksi nasional SNPMB rumpun seni/desain mewajibkan portofolio sesuai panduan resmi'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi seni/desain produk serta rincian biaya alat tidak dicantumkan'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'Tekstil', 'RPL/PPLG'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi pada nomenklatur PDDikti rumpun Seni/Desain dan ketentuan portofolio SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Animasi, Film, Desain Produk & Kriya Terapan (D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari perancangan gambar bergerak (animasi/film) maupun penciptaan produk/kriya nyata yang indah sekaligus nyaman dipakai.',
        typicalCoreTopics: [
          'Storyboard, Sinematografi & Dasar Animasi 2D/3D',
          'Ergonomi Bentuk, Material & Perancangan Produk',
          'Teknik Pembuatan Prototipe & Pasca-Produksi'
        ],
        academicOrPracticeActivities: [
          'Produksi proyek animasi pendek atau pembuatan purwarupa benda pakai/kriya di studio',
          'Menguji fungsi serta kenyamanan produk buatan bersama dosen dan rekan kelompok'
        ],
        relevantSkills: [
          'Imajinasi ruang 3D & gerak',
          'Ketekunan mengerjakan detail produksi',
          'Kreativitas material & visual'
        ],
        careerConnections: [
          'Animator 2D/3D, Kreator Film/Video, Desainer Produk Industri/Fesyen, atau Perajin Kreatif'
        ],
        verifiedEntryPathwaysNote: 'Memerlukan persiapan portofolio karya jika mendaftar lewat jalur seni SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 10. TEKNIK & INDUSTRI (3 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_APPLIED_TECH',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'teknik_industri',
    secondaryDomains: ['teknologi_informatika'],
    name: 'Kuliah Vokasi Teknik Elektro, Jaringan & Otomasi Industri (D3/D4)',
    categoryLabel: 'Vokasi Rekayasa Elektro & Otomasi',
    shortDescription:
      'Mempelajari rangkaian elektronika, sensor kendali, sistem jaringan perangkat, serta pemrograman mikrokontroler dan otomasi alat industri lewat banyak praktikum lab (kategori umum).',
    characteristics: [
      'Porsi praktikum bengkel elektronika, instalasi sensor, dan sistem kendali lebih dominan dibanding teori abstrak',
      'Menghubungkan kelistrikan/elektronika fisik dengan kontrol perangkat komputer (IoT/PLC)',
      'Cocok untuk yang suka merakit sistem perangkat fisik sekaligus logika kendali teknis'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 70,
      kemampuan_saat_ini: 58,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_teknis', 'ling_lapangan'],
      kesiapan_praktis: ['siap_studi', 'siap_kerja']
    },
    supportingIndicators: ['technical_affinity', 'hands_on_practical', 'structured_procedural'],
    requiredBasicSkills: [
      'Minat merakit sistem perangkat keras, kelistrikan/jaringan dasar, dan ketelitian keselamatan kerja'
    ],
    developableSkills: [
      'Pemrograman kendali otomatis (PLC/mikrokontroler), sensor IoT, dan pengelolaan jaringan'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; nama politeknik atau jurusan spesifik tidak dicantumkan'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar politeknik negeri/swasta dan rincian UKT tidak tersedia'],
    contextRelatedMajors: ['Elektro', 'TKJ', 'RPL/PPLG'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Diverifikasi melalui panduan SNPMB Vokasi dan nomenklatur PDDikti Teknik Elektro/Otomasi.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI,
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_RUMPUN_ILMU
      ],
      studyDetail: {
        studyFieldName: 'Teknik Elektro, Jaringan & Otomasi Industri (D3 / D4)',
        studentFriendlyDescription:
          'Mempelajari bagaimana rangkaian listrik, sensor elektronik, dan kendali komputer digabungkan untuk menjalankan alat otomatis dan jaringan.',
        typicalCoreTopics: [
          'Rangkaian Elektronika & Instrumentasi Sensor',
          'Sistem Kendali Otomatis (PLC) & Mikrokontroler',
          'Jaringan Komunikasi Data & Kelistrikan Terapan'
        ],
        academicOrPracticeActivities: [
          'Praktikum merangkai papan kendali sensor di lab dan memprogram kerja alat otomatis',
          'Proyek merancang alat berbasis mikrokontroler dan magang industri teknik'
        ],
        relevantSkills: [
          'Pembacaan skema rangkaian listrik',
          'Perakitan & pengujian perangkat keras',
          'Logika kendali otomatis'
        ],
        careerConnections: [
          'Teknisi Otomasi Industri, Pengembang Sistem IoT/Hardware, atau Teknisi Jaringan Terapan'
        ],
        verifiedEntryPathwaysNote: 'Tersedia lewat jalur SNBP, SNBT Vokasi, dan seleksi mandiri politeknik.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_PRACTICAL_ENG',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'teknik_industri',
    name: 'Kuliah Vokasi Teknik Mesin, Manufaktur & Otomotif (D3/D4)',
    categoryLabel: 'Vokasi Permesinan & Otomotif',
    shortDescription:
      'Mempelajari teknik perancangan komponen mesin (CAD), pengoperasian mesin industri modern (CNC), perawatan kendaraan otomotif, dan tata kelola mutu bengkel produksi (kategori umum).',
    characteristics: [
      'Belajar langsung di bengkel/workshop kampus memakai alat ukur presisi, mesin bubut/CNC, atau unit kendaraan',
      'Membahas prinsip mekanika terapan, material teknik, gambar kerja 3D, dan manajemen perawatan',
      'Cocok bagi yang sangat suka aktivitas praktik alat fisik dan ingin naik ke tingkat ahli rekayasa mesin'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.18,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 70,
      kebiasaan: 74,
      kemampuan_saat_ini: 58,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_teknis'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_studi', 'siap_kerja']
    },
    supportingIndicators: ['hands_on_practical', 'technical_affinity', 'structured_procedural'],
    requiredBasicSkills: [
      'Kesenangan bekerja di bengkel mesin/kendaraan serta kedisiplinan terhadap ukuran gambar dan K3'
    ],
    developableSkills: [
      'Gambar teknik 3D (CAD/CAM), pemrograman mesin CNC, dan manajemen perawatan sistem otomotif'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa daftar politeknik, kuota, atau rincian biaya kuliah'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar politeknik teknik manufaktur/otomotif dan biaya studi tidak dicantumkan'],
    contextRelatedMajors: ['Mesin', 'Otomotif', 'Elektro'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur vokasi rekayasa D3/D4 PDDikti dan SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_RUMPUN_ILMU,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Teknik Mesin, Manufaktur & Otomotif Vokasi (D3 / D4)',
        studentFriendlyDescription:
          'Mempelajari desain komponen mesin, proses manufaktur modern, serta teknologi sistem kendaraan bermotor lewat banyak praktik bengkel.',
        typicalCoreTopics: [
          'Gambar Teknik CAD & Material Mekanik',
          'Teknologi Pemesinan CNC & Manufaktur',
          'Sistem Kelistrikan, Mesin & Perawatan Otomotif'
        ],
        academicOrPracticeActivities: [
          'Praktikum permesinan workshop dan pengujian komponen mekanik/kendaraan',
          'Proyek merancang alat/komponen manufaktur serta magang industri'
        ],
        relevantSkills: [
          'Praktik perkakas & mesin kerja',
          'Pembacaan gambar teknik presisi',
          'Diagnosis gangguan mekanis'
        ],
        careerConnections: [
          'Supervisor Perawatan Mesin, Desainer CAD Manufaktur, atau Ahli Teknik Otomotif Terapan'
        ],
        verifiedEntryPathwaysNote: 'Tersedia lewat jalur SNBP, SNBT Vokasi, maupun seleksi mandiri.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_CIVIL_INDUSTRIAL',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'teknik_industri',
    secondaryDomains: ['bisnis_ekonomi', 'administrasi_logistik'],
    name: 'Kuliah Teknik Industri & Teknik Sipil Terapan (S1/D4)',
    categoryLabel: 'Rekayasa Proses Kerja & Konstruksi',
    shortDescription:
      'Mempelajari bagaimana merancang alur kerja pabrik/logistik agar efisien (Teknik Industri) atau merancang struktur bangunan dan fasilitas fisik yang kokoh (Teknik Sipil) (kategori umum).',
    characteristics: [
      'Menghitung efisiensi waktu/biaya kerja, tata letak fasilitas, atau perhitungan kekuatan struktur',
      'Menggabungkan hitungan teknik, pemecahan masalah sistem, dan kerja sama lapangan/proyek',
      'Cocok untuk yang suka memikirkan bagaimana sistem kerja besar atau bangunan tersusun rapi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.24,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 74,
      kebiasaan: 72,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_akademik', 'minat_praktik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_teknis', 'ling_lapangan'],
      kesiapan_praktis: ['siap_studi', 'siap_terstruktur']
    },
    supportingIndicators: ['analytical_depth', 'structured_procedural', 'technical_affinity'],
    requiredBasicSkills: [
      'Kesiapan belajar hitungan matematika teknik terapan dan ketelitian perencanaan jadwal proyek'
    ],
    developableSkills: [
      'Optimasi proses produksi & rantai pasok, manajemen mutu, atau perencanaan proyek bangunan'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum tanpa mencantumkan kampus tertentu atau nilai minimal masuk'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi Teknik Industri/Sipil dan biaya tidak dicantumkan'],
    contextRelatedMajors: ['Mesin', 'Elektro', 'Tekstil'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan rumpun Teknik/Rekayasa PDDikti dan jalur masuk SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Teknik Industri & Teknik Sipil Terapan (S1 / D4)',
        studentFriendlyDescription:
          'Mempelajari cara merancang alur produksi serta logistik yang hemat tenaga (Teknik Industri) atau merancang bangunan dan prasarana fisik (Teknik Sipil).',
        typicalCoreTopics: [
          'Perancangan Sistem Kerja, Ergonomi & Rantai Pasok',
          'Mekanika Struktur, Gambar Konstruksi & Material',
          'Pengendalian Kualitas (QC) & Manajemen Proyek'
        ],
        academicOrPracticeActivities: [
          'Praktik mengukur waktu kerja produksi atau menggambar rancangan proyek lapangan',
          'Studi kasus penataan tata letak pabrik/gudang atau survei kondisi konstruksi'
        ],
        relevantSkills: [
          'Perhitungan efisiensi sistem',
          'Perencanaan proyek terstruktur',
          'Koordinasi tim teknis lapangan'
        ],
        careerConnections: [
          'Staf Perencanaan Produksi (PPIC), Quality Assurance, Logistik Manufaktur, atau Pelaksana Proyek Sipil'
        ],
        verifiedEntryPathwaysNote: 'Tersedia melalui jalur seleksi nasional SNBP, SNBT, dan mandiri.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 11. PERTANIAN & LINGKUNGAN (2 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_AGRIBUSINESS',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'pertanian_lingkungan',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Kuliah Agribisnis, Agronomi & Teknologi Pangan (S1/D4)',
    categoryLabel: 'Pertanian Modern & Pengolahan Pangan',
    shortDescription:
      'Mempelajari budidaya tanaman modern (termasuk hidroponik/greenhouse), cara mengolah hasil tani menjadi produk pangan awet bernilai tambah, dan pemasaran hasil pertanian (kategori umum).',
    characteristics: [
      'Memadukan praktik kebun/laboratorium pangan dengan pemahaman rantai usaha hasil tani',
      'Membahas cara meningkatkan mutu tanaman, pengendalian hama aman, dan kemasan pangan higienis',
      'Cocok untuk yang tertarik dunia tanaman, pangan sehat, atau membangun usaha berbasis produk alam'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.2,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 70,
      kebiasaan: 70,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_usaha', 'minat_akademik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_analitis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_tim'],
      kesiapan_praktis: ['siap_studi', 'siap_usaha']
    },
    supportingIndicators: ['hands_on_practical', 'enterprising_business', 'academic_aspiration'],
    requiredBasicSkills: [
      'Ketelatenan mengamati pertumbuhan tanaman atau proses bahan pangan dan kenyamanan beraktivitas lapangan'
    ],
    developableSkills: [
      'Budidaya hortikultura modern, keamanan pengolahan pangan, dan manajemen rantai pasok tani'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa daftar kampus pertanian atau rincian biaya kuliah'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar fakultas pertanian/politeknik pertanian dan biaya tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan rumpun Ilmu Pertanian & Pangan pada PDDikti dan SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Agribisnis, Agronomi & Teknologi Pangan (S1 / D4)',
        studentFriendlyDescription:
          'Mempelajari cara menumbuhkan komoditas tanaman secara modern, mengolah hasil panen jadi produk pangan aman, dan memasarkannya.',
        typicalCoreTopics: [
          'Ilmu Tanaman, Tanah & Budidaya Hidroponik/Greenhouse',
          'Pengolahan, Pengawetan & Keamanan Produk Pangan',
          'Manajemen Usaha Tani & Pemasaran Agribisnis'
        ],
        academicOrPracticeActivities: [
          'Praktik menanam & memantau pertumbuhan tanaman di lahan percobaan kampus',
          'Praktikum laboratorium pengolahan pangan dan menyusun rencana usaha hasil tani'
        ],
        relevantSkills: [
          'Pemantauan kualitas tanaman & bahan pangan',
          'Pengolahan hasil panen higienis',
          'Perencanaan usaha komoditas'
        ],
        careerConnections: [
          'Pengelola Kebun Modern, Staf Quality Control Pangan, Pendamping Petani, atau Wirausaha Agribisnis'
        ],
        verifiedEntryPathwaysNote: 'Terbuka lewat SNBP, SNBT, dan jalur seleksi mandiri perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_ENVIRONMENT',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'pertanian_lingkungan',
    secondaryDomains: ['kesehatan', 'teknik_industri'],
    name: 'Kuliah Ilmu Lingkungan, Teknik Lingkungan & Kehutanan (S1)',
    categoryLabel: 'Pelestarian Alam & Pengelolaan Lingkungan',
    shortDescription:
      'Mempelajari pengelolaan air bersih dan limbah, pelestarian ekosistem hutan/alam, daur ulang material, serta analisis dampak lingkungan agar pembangunan tetap ramah alam (kategori umum).',
    characteristics: [
      'Banyak mengerjakan pengamatan lapangan kualitas air/udara, pemetaan kawasan hijau, dan kajian daur ulang',
      'Cocok bagi yang peduli perubahan iklim, kelestarian hutan/satwa, dan kebersihan lingkungan industri',
      'Menggabungkan ilmu biologi/kimia dasar dengan kebijakan pengelolaan lingkungan hidup'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.24,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.1,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 72,
      kebiasaan: 68,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_praktik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['academic_aspiration', 'analytical_depth', 'hands_on_practical'],
    requiredBasicSkills: [
      'Kepedulian pada alam dan kesiapan mengambil sampel atau survei di lapangan terbuka'
    ],
    developableSkills: [
      'Analisis kualitas air & tanah, tata kelola limbah industri, dan konservasi keanekaragaman hayati'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum tanpa daftar perguruan tinggi tertentu atau rincian biaya'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar jurusan Ilmu/Teknik Lingkungan dan syarat lintas jurusan per kampus tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti rumpun Ilmu Lingkungan/Kehutanan dan SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Ilmu Lingkungan, Teknik Lingkungan & Kehutanan (S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana menjaga kelestarian alam, mengolah limbah dengan aman, serta memastikan lingkungan tetap sehat bagi generasi mendatang.',
        typicalCoreTopics: [
          'Ekologi, Konservasi Alam & Pengelolaan Hutan',
          'Pengelolaan Sampah, Air Bersih & Pengolahan Limbah',
          'Analisis Mengenai Dampak Lingkungan (AMDAL)'
        ],
        academicOrPracticeActivities: [
          'Pengambilan sampel uji air/tanah di lapangan dan pengamatan ekosistem terbuka',
          'Proyek merancang sistem daur ulang atau kajian kelestarian kawasan'
        ],
        relevantSkills: [
          'Survei & pengamatan lapangan alam',
          'Pengukuran indikator lingkungan',
          'Kepatuhan aturan kelestarian'
        ],
        careerConnections: [
          'Staf Pengelola Lingkungan/HSE, Analis Dampak Lingkungan, Pengelola Konservasi, atau Fasilitator Daur Ulang'
        ],
        verifiedEntryPathwaysNote: 'Terbuka lewat seleksi nasional SNBP, SNBT, maupun jalur mandiri.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // 12. PARIWISATA & KULINER (2 KANDIDAT)
  // =========================================================================
  {
    id: 'PROD_EDU_HOSPITALITY',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'pariwisata_kuliner',
    secondaryDomains: ['komunikasi_media', 'bisnis_ekonomi'],
    name: 'Kuliah Manajemen Pariwisata & Perhotelan (D3/D4/S1)',
    categoryLabel: 'Pariwisata, Hotel & Event Wisata',
    shortDescription:
      'Mempelajari standar layanan hotel berkelas, manajemen destinasi wisata, perencanaan paket perjalanan & acara wisata (MICE), serta pelayanan tamu lintas budaya (kategori umum).',
    characteristics: [
      'Banyak praktik pelayanan tamu (front office/tata graha), perencanaan perjalanan wisata, dan bahasa asing',
      'Membekali standar etika hospitalitas internasional serta pengelolaan bisnis wisata lokal',
      'Cocok bagi yang ramah, rapi penampilan, dan betah mengatur pengalaman orang lain saat berlibur/acara'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.18,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 68,
      kebiasaan: 72,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_usaha', 'minat_praktik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan'],
      kesiapan_praktis: ['siap_studi', 'siap_kerja']
    },
    supportingIndicators: ['interpersonal_social', 'structured_procedural', 'enterprising_business'],
    requiredBasicSkills: [
      'Sikap ramah melayani orang baru, kerapian penampilan, dan minat mempelajari bahasa/budaya'
    ],
    developableSkills: [
      'Operasional perhotelan, perancangan paket wisata/event, dan komunikasi bahasa asing pariwisata'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan kampus pariwisata atau biaya seragam/praktik'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar politeknik pariwisata dan rincian biaya praktik tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti rumpun Pariwisata/Perhotelan dan SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Manajemen Pariwisata & Perhotelan (D3 / D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana mengelola penginapan, menyusun tur wisata menarik, menyelenggarakan acara, dan melayani tamu secara profesional.',
        typicalCoreTopics: [
          'Operasional Perhotelan (Front Office & Housekeeping)',
          'Perencanaan Perjalanan Wisata & Manajemen Acara (MICE)',
          'Bahasa Asing Pariwisata & Pemasaran Destinasi'
        ],
        academicOrPracticeActivities: [
          'Praktikum simulasi pelayanan resepsionis hotel dan tata kelola acara wisata',
          'Kunjungan observasi destinasi serta praktik magang di industri perhotelan/wisata'
        ],
        relevantSkills: [
          'Standar pelayanan ramah & sigap',
          'Koordinasi perjalanan & acara',
          'Komunikasi lintas budaya'
        ],
        careerConnections: [
          'Pengelola Layanan Hotel, Perencana Acara/Wisata (Event & Tour Planner), atau Pengelola Desa Wisata'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jalur politeknik vokasi maupun S1 pariwisata lewat SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_CULINARY',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'pariwisata_kuliner',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Kuliah Tata Boga & Manajemen Seni Kuliner (D3/D4)',
    categoryLabel: 'Kuliner, Dapur Profesional & Bisnis F&B',
    shortDescription:
      'Mempelajari teknik memasak dan pembuatan kue/roti (pastry) terstandar, keamanan pangan dapur profesional, penyusunan menu, serta pengelolaan usaha kuliner (kategori umum).',
    characteristics: [
      'Porsi praktikum di dapur latih sangat besar mulai dari persiapan bahan, teknik olah, hingga penyajian',
      'Membahas standar kebersihan dapur, perhitungan biaya bahan resep, dan manajemen usaha makanan',
      'Cocok untuk yang hobi memasak dan ingin menjadikannya karier dapur profesional atau bisnis kuliner'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.18,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 68,
      kebiasaan: 74,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_kreatif', 'minat_usaha'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_kreatif'],
      kesiapan_praktis: ['siap_studi', 'siap_usaha']
    },
    supportingIndicators: ['hands_on_practical', 'creative_expression', 'enterprising_business'],
    requiredBasicSkills: [
      'Kesenangan mengolah bahan makanan, kebersihan diri tinggi, dan ketahanan berdiri di dapur'
    ],
    developableSkills: [
      'Teknik kuliner nusantara & kontinental, pastry & bakery, food safety, serta perhitungan biaya menu'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan kampus tertentu atau biaya bahan praktikum'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi tata boga/kuliner dan rincian biaya lab tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur vokasi Tata Boga/Seni Kuliner PDDikti dan SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Tata Boga & Manajemen Seni Kuliner (D3 / D4)',
        studentFriendlyDescription:
          'Mempelajari keterampilan memasak profesional, penyajian hidangan menarik, standar kebersihan pangan, dan cara mengelola dapur usaha kuliner.',
        typicalCoreTopics: [
          'Teknik Pengolahan Makanan & Pastry/Bakery',
          'Sanitasi, Keamanan Pangan & Gizi Dasar Hidangan',
          'Perencanaan Menu, Food Cost & Manajemen Usaha Kuliner'
        ],
        academicOrPracticeActivities: [
          'Praktik memasak dan membuat roti/kue di dapur praktik dengan penilaian rasa & kebersihan',
          'Proyek membuat konsep menu usaha kuliner atau layanan katering kecil'
        ],
        relevantSkills: [
          'Takaran resep & kepekaan rasa',
          'Kerapian penyajian hidangan',
          'Kebersihan & alur dapur cepat'
        ],
        careerConnections: [
          'Juru Masak/Pastry Profesional, Pengembang Resep Produk Makanan, atau Pemilik Usaha Kuliner'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jenjang vokasi Politeknik maupun Pendidikan Tata Boga via SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },

  // =========================================================================
  // PHASE 7.7 EXPANSION (+11 BIDANG STUDI UMUM — TOTAL 38)
  // =========================================================================
  {
    id: 'PROD_EDU_MATH_SCI_TEACHER',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'pendidikan',
    secondaryDomains: ['teknik_industri'],
    name: 'Kuliah Pendidikan Matematika, IPA & Sains Terapan (S1)',
    categoryLabel: 'Kependidikan Matematika & Sains',
    shortDescription:
      'Mempelajari pendalaman konsep matematika, fisika, kimia, atau biologi sekaligus metode menyusun alat peraga, praktikum laboratorium sekolah, dan cara menjelaskan konsep sulit agar mudah dipahami siswa (kategori umum).',
    characteristics: [
      'Menggabungkan ketelitian hitungan atau eksperimen sains dengan keterampilan membimbing kelas',
      'Melatih pembuatan modul belajar, soal latihan bertahap, serta praktikum sederhana yang aman',
      'Untuk menjadi guru sekolah formal setelah lulus S1 perlu melanjutkan sertifikasi pendidik (PPG)'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 76,
      kebiasaan: 70,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_sosial'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_akademik', 'ling_tim'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['analytical_depth', 'interpersonal_social', 'academic_aspiration'],
    requiredBasicSkills: [
      'Kesabaran menjelaskan langkah hitung atau logika sebab-akibat tanpa cepat kesal'
    ],
    developableSkills: [
      'Perancangan lembar kerja belajar, praktikum sains dasar, dan evaluasi pemahaman siswa'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; sertifikasi guru sekolah formal mengikuti ketentuan S1 Kependidikan dan PPG'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar universitas kependidikan dan rincian biaya kuliah tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti rumpun Pendidikan MIPA dan UU No. 14/2005 tentang Guru dan Dosen.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_GURU_PPG
      ],
      studyDetail: {
        studyFieldName: 'Pendidikan Matematika & Ilmu Pengetahuan Alam (S1)',
        studentFriendlyDescription:
          'Mempelajari ilmu hitung atau sains sekaligus cara membimbing pelajar memahami konsepnya lewat contoh dan percobaan.',
        typicalCoreTopics: [
          'Konsep Matematika / Sains Lanjutan & Eksperimen Lab Sekolah',
          'Strategi Pengajaran Konsep Abstrak & Alat Peraga',
          'Penyusunan Evaluasi Belajar & Psikologi Perkembangan Remaja'
        ],
        academicOrPracticeActivities: [
          'Praktik simulasi mengajar (microteaching) di depan kelas dan praktikum laboratorium',
          'Magang pengenalan sekolah (PLP) bersama guru pamong'
        ],
        relevantSkills: [
          'Penalaran logis & terstruktur',
          'Komunikasi sabar dan runtut',
          'Penyusunan materi ajar'
        ],
        careerConnections: [
          'Pendidik MIPA (setelah PPG), Pengajar Bimbingan Belajar, atau Pengembang Materi/Alat Peraga Sains'
        ],
        verifiedEntryPathwaysNote: 'Terbuka lewat SNBP, SNBT, dan seleksi PTN/PTS untuk lulusan SMK/SMA.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_ECON_DEV',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Kuliah Ekonomi Pembangunan & Ekonomi Keuangan (S1)',
    categoryLabel: 'Ilmu Ekonomi, Kebijakan & Pasar',
    shortDescription:
      'Mempelajari cara kerja harga pasar, perbankan, pemberdayaan UMKM daerah, inflasi, dan analisis data ekonomi masyarakat dalam skala kota hingga nasional (kategori umum).',
    characteristics: [
      'Cocok bagi yang penasaran mengapa harga kebutuhan naik-turun dan bagaimana kebijakan keuangan memengaruhi usaha warga',
      'Banyak membahas pembacaan grafik data ekonomi, laporan survei, dan logika sebab-akibat kebijakan',
      'Lebih berfokus pada analisis ekonomi makro/mikro dibanding pembukuan harian perusahaan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.24,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 76,
      kebiasaan: 70,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_usaha'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_akademik', 'ling_terstruktur'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['analytical_depth', 'academic_aspiration', 'enterprising_business'],
    requiredBasicSkills: [
      'Minat membaca berita ekonomi/usaha dan ketelitian membandingkan angka persentase'
    ],
    developableSkills: [
      'Statistik ekonomi dasar, analisis pasar UMKM/daerah, dan penyusunan ringkasan kebijakan'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan universitas, passing grade, atau biaya kuliah'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi ilmu ekonomi dan rincian biaya studi tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti rumpun Ilmu Ekonomi & Pembangunan serta SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Ilmu Ekonomi / Ekonomi Pembangunan & Ekonomi Syariah (S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana ekonomi masyarakat berjalan, mulai dari perilaku belanja rumah tangga, UMKM, perbankan, hingga kebijakan daerah.',
        typicalCoreTopics: [
          'Ekonomi Mikro, Ekonomi Makro & Keuangan Publik',
          'Statistika Ekonomi & Analisis Data Survei',
          'Pemberdayaan UMKM, Koperasi & Ekonomi Daerah'
        ],
        academicOrPracticeActivities: [
          'Mengolah data harga, ketenagakerjaan, atau pendapatan usaha kecil menjadi grafik ringkas',
          'Diskusi studi kasus kebijakan ekonomi daerah dan magang lembaga keuangan/perencanaan'
        ],
        relevantSkills: [
          'Pembacaan grafik & tren angka',
          'Penalaran sebab-akibat sosial-ekonomi',
          'Penulisan ringkasan laporan'
        ],
        careerConnections: [
          'Analis Ekonomi/Riset Pasar, Staf Lembaga Keuangan/Perbankan, atau Pendamping Program UMKM'
        ],
        verifiedEntryPathwaysNote: 'Terbuka melalui jalur SNBP, SNBT, dan seleksi perguruan tinggi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_GOV_POLITICS',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'hukum_keadilan',
    secondaryDomains: ['psikologi_sosial', 'komunikasi_media'],
    name: 'Kuliah Administrasi Publik, Ilmu Pemerintahan & Kebijakan (S1)',
    categoryLabel: 'Pemerintahan, Tata Kelola & Pelayanan Publik',
    shortDescription:
      'Mempelajari bagaimana layanan pemerintah, organisasi masyarakat, dan kebijakan publik dirancang, dijalankan secara tertib, serta dievaluasi agar benar-benar membantu warga (kategori umum).',
    characteristics: [
      'Cocok bagi yang aktif berorganisasi, tertarik urusan masyarakat, dan suka memikirkan aturan layanan yang adil',
      'Banyak diskusi isu sosial-pemerintahan, tata kelola surat-menyurat publik, dan pelayanan warga',
      'Berbeda dengan Ilmu Hukum murni yang fokus pada pasal pengadilan; bidang ini fokus pada tata kelola layanan publik'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 70,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_akademik'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['interpersonal_social', 'structured_procedural', 'academic_aspiration'],
    requiredBasicSkills: [
      'Minat mengikuti isu layanan masyarakat, rapi dalam tata tertib organisasi, dan mampu berdiskusi santun'
    ],
    developableSkills: [
      'Penyusunan telaah kebijakan publik, manajemen layanan warga, dan koordinasi program komunitas'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa menjanjikan kelulusan seleksi aparatur atau mencantumkan kampus tertentu'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi dan rincian jalur ikatan dinas/reguler spesifik tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti rumpun Ilmu Pemerintahan & Administrasi Publik.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Administrasi Publik / Ilmu Pemerintahan (S1 / D4)',
        studentFriendlyDescription:
          'Mempelajari cara merancang layanan masyarakat, mengelola anggaran organisasi publik, dan menyelesaikan persoalan warga secara tertib.',
        typicalCoreTopics: [
          'Tata Kelola Pelayanan Publik & Birokrasi',
          'Kebijakan Publik & Perencanaan Program Daerah',
          'Etika Administrasi & Pemberdayaan Masyarakat'
        ],
        academicOrPracticeActivities: [
          'Observasi layanan publik setempat (seperti puskesmas, kelurahan, atau layanan perizinan)',
          'Simulasi rapat perumusan program masyarakat dan magang instansi publik/LSM'
        ],
        relevantSkills: [
          'Komunikasi publik & negosiasi',
          'Membaca peraturan program',
          'Koordinasi organisasi'
        ],
        careerConnections: [
          'Analis Layanan Publik, Pengelola Program Lembaga Sosial/NGO, atau Staf Administrasi Pemerintahan'
        ],
        verifiedEntryPathwaysNote: 'Terbuka bagi semua jurusan SMK/SMA melalui SNPMB dan seleksi kampus.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_CIVIL_ENG',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'teknik_industri',
    secondaryDomains: ['seni_desain'],
    name: 'Kuliah Teknik Sipil & Konstruksi Bangunan (D3/D4/S1)',
    categoryLabel: 'Teknik Bangunan, Infrastruktur & Struktur',
    shortDescription:
      'Mempelajari perhitungan struktur bangunan, sifat bahan beton/baja/tanah, survei pemetaan lahan, serta pengaturan jadwal dan keselamatan proyek pembangunan jembatan, jalan, dan gedung (kategori umum).',
    characteristics: [
      'Menggabungkan hitungan gaya struktur di kelas dengan survei lapangan dan pengujian material bangunan',
      'Cocok bagi yang tertarik melihat bagaimana gedung tinggi, jembatan, atau drainase kota dibangun agar kokoh',
      'Banyak menggunakan gambar teknik bangunan dan pengawasan mutu material'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.22,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 74,
      kebiasaan: 74,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_teknis', 'minat_akademik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_terstruktur'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'analytical_depth'],
    requiredBasicSkills: [
      'Ketelitian berhitung ukuran, kesiapan belajar gambar teknik, dan kenyamanan meninjau lokasi lapangan'
    ],
    developableSkills: [
      'Ukur tanah (survei pemetaan), gambar bangunan 2D/3D, perhitungan volume pekerjaan (RAB), dan mutu material'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan kampus tertentu atau biaya alat praktik lapangan'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar jurusan teknik sipil/konstruksi dan rincian biaya praktik lab tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti rumpun Teknik Sipil & Perencanaan Infrastruktur.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Teknik Sipil & Konstruksi Bangunan (D3 / D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari cara merancang, menghitung kekuatan, dan mengawasi pembangunan rumah, gedung, jalan, serta jembatan secara aman.',
        typicalCoreTopics: [
          'Mekanika Struktur, Beton & Baja Konstruksi',
          'Ilmu Ukur Tanah (Survei Lahan) & Geoteknik',
          'Manajemen Proyek Konstruksi, RAB & Keselamatan Kerja (K3)'
        ],
        academicOrPracticeActivities: [
          'Praktikum mengukur kontur lahan dan menguji kuat tekan bahan bangunan di lab',
          'Membuat gambar rencana bangunan serta jadwal kerja proyek'
        ],
        relevantSkills: [
          'Ketelitian ukuran & kalkulasi',
          'Pembacaan gambar rencana bangunan',
          'Koordinasi proyek lapangan'
        ],
        careerConnections: [
          'Pelaksana Proyek Konstruksi, Drafter/Estimator Bangunan (QS), atau Pengawas Mutu Infrastruktur'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jalur Politeknik (D3/D4) maupun Universitas (S1) via SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_ELECTRICAL_S1',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'teknik_industri',
    secondaryDomains: ['teknologi_informatika'],
    name: 'Kuliah Teknik Elektro & Sistem Tenaga Listrik (S1/D4)',
    categoryLabel: 'Kelistrikan, Elektronika & Kendali',
    shortDescription:
      'Mempelajari pembangkitan dan penyaluran tenaga listrik, rangkaian elektronika, sistem kendali otomatis, dan pemrosesan sinyal perangkat modern pada tingkat sarjana/sarjana terapan (kategori umum).',
    characteristics: [
      'Menuntut pemahaman matematika-fisika kelistrikan sekaligus ketelitian merangkai dan menguji alat di lab',
      'Mencakup pilihan minat luas mulai dari kelistrikan energi terbarukan hingga robotika/embedded system',
      'Sangat nyambung bagi siswa Elektro/TKJ maupun jurusan lain yang suka mengutak-atik rangkaian'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.22,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 76,
      kebiasaan: 72,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_akademik', 'minat_praktik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_terstruktur', 'ling_akademik'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['technical_affinity', 'analytical_depth', 'hands_on_practical'],
    requiredBasicSkills: [
      'Ketertarikan pada kelistrikan/elektronika dan kesiapan mempelajari hitungan fisika listrik'
    ],
    developableSkills: [
      'Analisis rangkaian listrik, desain PCB/mikrokontroler, instalasi tenaga, dan keselamatan kelistrikan'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan kampus atau rincian biaya lab praktikum'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi Teknik Elektro dan rincian biaya lab tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti rumpun Teknik Elektro dan Spektrum Keahlian SMK Elektronika.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      studyDetail: {
        studyFieldName: 'Teknik Elektro / Teknik Listrik Industri (D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana listrik disalurkan secara aman serta bagaimana rangkaian elektronik dan sistem kendali otomatis bekerja.',
        typicalCoreTopics: [
          'Rangkaian Listrik, Elektronika Analog & Digital',
          'Sistem Tenaga Listrik & Energi Terbarukan',
          'Sistem Kendali Otomatis & Mikrokontroler'
        ],
        academicOrPracticeActivities: [
          'Menguji rangkaian memakai osiloskop dan multimeter di laboratorium elektro',
          'Merancang proyek alat kendali sederhana atau simulasi instalasi listrik'
        ],
        relevantSkills: [
          'Analisis rangkaian & logika teknis',
          'Pengukuran & keselamatan listrik',
          'Pemecahan kendala perangkat'
        ],
        careerConnections: [
          'Engineer Kelistrikan/Energi, Spesialis Otomasi & IoT, atau Perancang Sistem Kendali Industri'
        ],
        verifiedEntryPathwaysNote: 'Terbuka lewat SNBP, SNBT, dan jalur vokasi Politeknik.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_MECHANICAL_S1',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'teknik_industri',
    secondaryDomains: [],
    name: 'Kuliah Teknik Mesin & Perancangan Manufaktur (S1/D4)',
    categoryLabel: 'Perancangan Mesin, Energi & Manufaktur',
    shortDescription:
      'Mempelajari prinsip mekanika gerak, termodinamika energi, sifat logam/material, serta perancangan mesin dan alat bantu produksi menggunakan gambar teknik modern (kategori umum).',
    characteristics: [
      'Berfokus pada pemahaman mendalam cara kerja mesin dan cara merancangnya, bukan hanya servis komponen',
      'Menggabungkan hitungan kekuatan bahan, gambar 3D CAD, dan praktik pengecoran/permesinan di bengkel lab',
      'Cocok bagi siswa Mesin/Otomotif yang ingin naik level menjadi perancang sistem mekanik atau energi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.22,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 76,
      kebiasaan: 72,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_teknis', 'minat_akademik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_terstruktur'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['hands_on_practical', 'analytical_depth', 'structured_procedural'],
    requiredBasicSkills: [
      'Minat tinggi pada cara kerja mesin dan kesiapan mempelajari fisika mekanika serta gambar teknik'
    ],
    developableSkills: [
      'Pemodelan 3D CAD, pemilihan material teknik, perpindahan panas/energi, dan proses manufaktur'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan kampus tertentu atau biaya bengkel praktikum'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar universitas Teknik Mesin dan rincian biaya praktikum tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti rumpun Teknik Mesin dan Spektrum Keahlian SMK Pemesinan/Otomotif.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      studyDetail: {
        studyFieldName: 'Teknik Mesin / Teknik Perancangan Manufaktur (S1 / D4)',
        studentFriendlyDescription:
          'Mempelajari cara kerja gaya dan energi pada mesin serta merancang komponen atau alat produksi agar kuat, aman, dan efisien.',
        typicalCoreTopics: [
          'Mekanika Teknik, Kekuatan Bahan & Material Logam',
          'Termodinamika, Mesin Konversi Energi & Fluida',
          'Gambar Teknik CAD 3D & Proses Manufaktur Modern'
        ],
        academicOrPracticeActivities: [
          'Merancang model komponen mesin di komputer dan menguji kekuatannya secara simulasi atau lab',
          'Praktikum permesinan/pengujian material di bengkel kampus dan kerja praktik pabrik'
        ],
        relevantSkills: [
          'Visualisasi bentuk 3D & presisi',
          'Hitungan gaya dan energi mesin',
          'Penguasaan alat ukur & workshop'
        ],
        careerConnections: [
          'Mechanical/Design Engineer, Engineer Perawatan Pabrik, atau Spesialis Manufaktur Otomotif'
        ],
        verifiedEntryPathwaysNote: 'Terbuka lewat SNBP, SNBT, dan jalur Politeknik Negeri.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_PHARMACY',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'kesehatan',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Kuliah Farmasi & Ilmu Obat-obatan (D3/S1)',
    categoryLabel: 'Kefarmasian, Laboratorium & Mutu Obat',
    shortDescription:
      'Mempelajari komposisi zat aktif obat, cara kerja obat dalam tubuh, peracikan sediaan farmasi yang aman, pengendalian mutu bahan kosmetik/herbal, dan etika pelayanan informasi obat (kategori umum).',
    characteristics: [
      'Sangat kental dengan praktikum kimia, biologi, dan ketelitian menimbang takaran di laboratorium',
      'Cocok bagi yang sangat teliti, suka kebersihan tinggi, dan tertarik pada ilmu obat-obatan maupun bahan alami',
      'Untuk berpraktik sebagai Apoteker berizin wajib menempuh pendidikan profesi apoteker & STR sesuai UU Kesehatan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.22,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 76,
      kebiasaan: 76,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_sosial'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis'],
      preferensi_lingkungan: ['ling_terstruktur', 'ling_akademik'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['structured_procedural', 'analytical_depth', 'academic_aspiration'],
    requiredBasicSkills: [
      'Ketelitian sangat tinggi pada angka takaran/label dan minat mendalami biologi serta kimia'
    ],
    developableSkills: [
      'Pengujian bahan laboratorium, tata kelola penyimpanan sediaan farmasi, dan komunikasi informasi penggunaan obat'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; praktik profesi Apoteker atau Tenaga Vokasi Farmasi wajib memenuhi pendidikan profesi, uji kompetensi, dan STR sesuai UU No. 17/2023'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi Farmasi serta biaya praktikum lab tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti Farmasi dan UU Kesehatan No. 17 Tahun 2023 tentang persyaratan STR tenaga kefarmasian.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKES_NAKES_STR
      ],
      studyDetail: {
        studyFieldName: 'Farmasi (D3 Tenaga Vokasi Farmasi / S1 Farmasi)',
        studentFriendlyDescription:
          'Mempelajari bagaimana obat, suplemen, maupun produk perawatan dibuat, diuji keamanannya, dan dijelaskan aturan pakainya secara benar.',
        typicalCoreTopics: [
          'Kimia Farmasi, Farmakologi & Bahan Alam/Herbal',
          'Teknologi Sediaan Obat, Kosmetik & Pengendalian Mutu',
          'Pelayanan Kefarmasian & Keamanan Penyimpanan Obat'
        ],
        academicOrPracticeActivities: [
          'Praktikum laboratorium menguji bahan aktif dan meracik sediaan sesuai standar kebersihan',
          'Praktik kerja kefarmasian di apotek, rumah sakit, atau laboratorium mutu setelah memenuhi syarat'
        ],
        relevantSkills: [
          'Ketelitian takaran dan prosedur steril',
          'Analisis kimia-biologi dasar',
          'Komunikasi instruksi obat yang jelas'
        ],
        careerConnections: [
          'Tenaga Vokasi Farmasi / Apoteker (setelah profesi & STR), Analis Mutu (QC) Obat/Kosmetik/Pangan'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jenjang D3 dan S1 melalui SNPMB sesuai persyaratan masing-masing prodi.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_NUTRITION',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'kesehatan',
    secondaryDomains: ['pariwisata_kuliner', 'pendidikan'],
    name: 'Kuliah Ilmu Gizi & Dietetik (D3/D4/S1)',
    categoryLabel: 'Gizi Masyarakat, Pangan Sehat & Edukasi Kesehatan',
    shortDescription:
      'Mempelajari kebutuhan zat gizi tubuh manusia di berbagai usia, penyusunan menu seimbang untuk masyarakat/pasien, keamanan pangan, serta penyuluhan pola makan sehat (kategori umum).',
    characteristics: [
      'Menghubungkan ilmu kesehatan manusia dengan bahan makanan sehari-hari dan edukasi gaya hidup',
      'Cocok untuk yang suka memasak/makanan sekaligus peduli pada kesehatan dan perhitungan kandungan gizi',
      'Untuk berpraktik sebagai Ahli Gizi berizin klinik wajib lulus uji kompetensi dan memiliki STR'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.2,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 72,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik', 'minat_praktik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_akademik'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['interpersonal_social', 'analytical_depth', 'structured_procedural'],
    requiredBasicSkills: [
      'Kepedulian pada pola hidup sehat, ketelitian membaca komposisi gizi, dan kesabaran memberi edukasi'
    ],
    developableSkills: [
      'Perhitungan kalori & kecukupan gizi, manajemen penyelenggaraan makanan sehat, dan konseling gizi dasar'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; praktik profesi Dietisien/Ahli Gizi di fasilitas kesehatan memerlukan pendidikan gizi, uji kompetensi, dan STR sesuai UU Kesehatan'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi Ilmu Gizi dan rincian biaya praktik dapur gizi/klinik tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti Ilmu Gizi dan UU Kesehatan No. 17/2023 terkait registrasi tenaga gizi.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKES_NAKES_STR
      ],
      studyDetail: {
        studyFieldName: 'Ilmu Gizi / Gizi & Dietetik (D3 / D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana makanan dan zat gizi memengaruhi tubuh, serta cara merancang menu sehat dan mengedukasi masyarakat.',
        typicalCoreTopics: [
          'Ilmu Gizi Dasar, Biokimia Gizi & Metabolisme',
          'Penyusunan Menu Sehat & Penyelenggaraan Makanan Massal',
          'Gizi Masyarakat, Pencegahan Stunting & Konseling Gizi'
        ],
        academicOrPracticeActivities: [
          'Praktikum menghitung takaran gizi dan mengolah menu diet sehat di lab kuliner gizi',
          'Kegiatan penyuluhan gizi masyarakat serta praktik magang di fasilitas layanan kesehatan/katering institusi'
        ],
        relevantSkills: [
          'Analisis kandungan gizi makanan',
          'Penyusunan menu seimbang',
          'Edukasi kesehatan yang empatik'
        ],
        careerConnections: [
          'Ahli Gizi (setelah uji kompetensi & STR), Pengelola Katering Sehat/Industri Pangan, atau Edukator Gizi'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jalur Politeknik Kesehatan maupun Universitas lewat SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_AGROTECH',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'pertanian_lingkungan',
    secondaryDomains: ['teknik_industri'],
    name: 'Kuliah Agroteknologi, Ilmu Tanah & Budidaya Tanaman (S1/D4)',
    categoryLabel: 'Pertanian Modern, Tanah & Ketahanan Pangan',
    shortDescription:
      'Mempelajari biologi pertumbuhan tanaman, kesuburan tanah, pengendalian hama ramah lingkungan, pemuliaan bibit unggul, serta teknik budidaya modern seperti hidroponik dan rumah kaca (kategori umum).',
    characteristics: [
      'Lebih berfokus pada sisi sains dan teknologi penanaman dibanding aspek jualan di Agribisnis',
      'Banyak praktik langsung di kebun percobaan, rumah kaca (greenhouse), dan laboratorium tanah/hama',
      'Cocok bagi yang betah bekerja di alam terbuka sekaligus ingin memahami biologi tumbuhan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.2,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 72,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_akademik', 'minat_eksploratif'],
      gaya_berpikir: ['pikir_praktis', 'pikir_analitis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_akademik'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['hands_on_practical', 'analytical_depth', 'academic_aspiration'],
    requiredBasicSkills: [
      'Ketelatenan mengamati perubahan makhluk hidup dan kenyamanan beraktivitas di kebun/laboratorium'
    ],
    developableSkills: [
      'Analisis kesuburan tanah & nutrisi hidroponik, identifikasi hama tanaman, dan manajemen budidaya berkelanjutan'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan universitas pertanian tertentu atau biaya penelitian lapangan'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar kampus dan rincian biaya praktikum kebun/lab tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti Agroteknologi/Agronomi dan rujukan umum Kementan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENTAN_AGRIBISNIS_PARTIAL
      ],
      studyDetail: {
        studyFieldName: 'Agroteknologi / Agronomi & Hortikultura (D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana membuat tanaman tumbuh sehat dan berkualitas, dari ilmu tanah, pembibitan, hingga teknologi pertanian modern.',
        typicalCoreTopics: [
          'Ilmu Tanah, Pemupukan & Nutrisi Tanaman',
          'Perlindungan Tanaman & Pengendalian Hama Terpadu',
          'Teknologi Hidroponik, Kultur Jaringan & Pertanian Berkelanjutan'
        ],
        academicOrPracticeActivities: [
          'Merawat petak percobaan tanaman di kebun praktik kampus serta mencatat pertumbuhannya',
          'Mengamati sampel tanah atau hama tanaman menggunakan mikroskop di laboratorium'
        ],
        relevantSkills: [
          'Observasi biologi tanaman',
          'Pengelolaan media tanam & nutrisi',
          'Pencatatan data percobaan lapangan'
        ],
        careerConnections: [
          'Agronomis/Pendamping Budidaya Modern, Spesialis Pembibitan & Greenhouse, atau Peneliti Mutu Benih'
        ],
        verifiedEntryPathwaysNote: 'Terbuka lewat SNBP, SNBT, dan Politeknik Pembangunan Pertanian/UMUM.',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_INTERIOR_ARCH',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'seni_desain',
    secondaryDomains: ['teknik_industri'],
    name: 'Kuliah Arsitektur & Desain Interior Ruang (S1/D4)',
    categoryLabel: 'Rancang Bangun Ruang, Estetika & Fungsi',
    shortDescription:
      'Mempelajari cara merancang tata letak ruangan dan bangunan agar nyaman dihuni, sehat pencahayaan-udaranya, kuat strukturnya, sekaligus indah dipandang (kategori umum).',
    characteristics: [
      'Memadukan kepekaan seni ruang, ergonomi kenyamanan manusia, dan ketelitian gambar teknis bangunan',
      'Banyak tugas studio merancang maket, sketsa tangan, dan gambar ruang 3D berulang kali dengan masukan dosen',
      'Banyak perguruan tinggi seni/desain meminta portofolio sketsa gambar saat seleksi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 74,
      kebiasaan: 70,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_praktik'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_akademik'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['creative_expression', 'structured_procedural', 'hands_on_practical'],
    requiredBasicSkills: [
      'Kepekaan terhadap tata letak ruang, warna, proporsi benda, serta kesabaran menggambar sketsa detail'
    ],
    developableSkills: [
      'Gambar kerja arsitektur/interior, pembuatan maket ruang, pemilihan material bangunan, dan rendering 3D'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan kampus tertentu atau biaya bahan maket/perangkat grafis'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar perguruan tinggi Arsitektur/Desain Interior dan biaya bahan studio tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti Arsitektur & Desain Interior dan ketentuan portofolio SNPMB bidang seni/desain.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Arsitektur / Desain Interior (D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana merancang ruangan dan bangunan yang fungsional, nyaman bagi penggunanya, terang alami, dan estetis.',
        typicalCoreTopics: [
          'Studio Perancangan Ruang & Tata Cahaya/Sirkulasi Udara',
          'Gambar Teknik Bangunan, Konstruksi Ringan & Material Interior',
          'Ergonomi Ruang, Sejarah Desain & Visualisasi 3D'
        ],
        academicOrPracticeActivities: [
          'Membuat sketsa ide ruang, maket skala kecil dari karton/kayu balsa, dan gambar 3D',
          'Presentasi kritik desain di studio untuk menyempurnakan fungsi serta kenyamanan rancangan'
        ],
        relevantSkills: [
          'Kepekaan tata ruang & proporsi',
          'Sketsa manual & gambar teknik',
          'Komunikasi konsep desain ke klien'
        ],
        careerConnections: [
          'Asisten Arsitek/Desainer Interior, Visualisator Ruang 3D, atau Perancang Tata Ruang Pameran/Toko'
        ],
        verifiedEntryPathwaysNote: 'Terbuka lewat SNBP/SNBT (prodi Desain Interior/Seni dapat mensyaratkan portofolio karya).',
        isSpecificInstitutionProgram: false
      }
    }
  },
  {
    id: 'PROD_EDU_LIBRARY_ARCHIVE',
    isSimulationFixture: false,
    pathCategory: 'kuliah',
    domainId: 'administrasi_logistik',
    secondaryDomains: ['bahasa_sastra', 'pendidikan'],
    name: 'Kuliah Ilmu Perpustakaan, Kearsipan & Manajemen Informasi (D3/D4/S1)',
    categoryLabel: 'Informasi, Arsip Digital & Perpustakaan',
    shortDescription:
      'Mempelajari cara mengklasifikasi buku, dokumen penting, dan arsip digital lembaga agar mudah ditemukan kembali, menjaga kelestarian koleksi, serta membantu masyarakat mengakses informasi tepercaya (kategori umum).',
    characteristics: [
      'Cocok bagi yang suka suasana kerja tenang, rapi menata kategori informasi, dan senang membaca atau mencari fakta',
      'Menggabungkan tata kelola arsip fisik dengan katalog digital dan literasi informasi modern',
      'Alternatif non-teknis yang terstruktur bagi yang suka kerapian data tanpa harus menjadi programmer penuh'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.22,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 72,
      kebiasaan: 74,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_sosial'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_terstruktur', 'ling_akademik'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['structured_procedural', 'academic_aspiration', 'analytical_depth'],
    requiredBasicSkills: [
      'Kerapian mengurutkan dokumen/kategori, ketelitian mengecek detail judul/tanggal, dan kesabaran melayani pencari informasi'
    ],
    developableSkills: [
      'Klasifikasi katalog perpustakaan, digitalisasi arsip lembaga, pengelolaan basis data informasi, dan literasi baca'
    ],
    requirementsOrConstraints: [
      'Kategori bidang studi umum; tanpa mencantumkan kampus tertentu atau biaya studi'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: ['Daftar kampus Ilmu Perpustakaan/Kearsipan dan biaya kuliah tidak dicantumkan'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Diverifikasi berdasarkan nomenklatur PDDikti Ilmu Perpustakaan dan Kearsipan serta SNPMB.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_DIKTI_SNPMB_RUMPUN_UMUM,
        CATALOG_SOURCE_REGISTRY.SRC_SNPMB_VOKASI
      ],
      studyDetail: {
        studyFieldName: 'Ilmu Perpustakaan / Kearsipan & Rekaman Informasi (D3 / D4 / S1)',
        studentFriendlyDescription:
          'Mempelajari bagaimana informasi, buku, dan dokumen penting organisasi ditata, didigitalkan, serta dirawat agar selalu akurat dan cepat dicari.',
        typicalCoreTopics: [
          'Klasifikasi, Katalogisasi & Preservasi Arsip Fisik/Digital',
          'Manajemen Perpustakaan, Pusat Dokumentasi & Literasi Informasi',
          'Sistem Informasi Kearsipan & Pelayanan Pemustaka'
        ],
        academicOrPracticeActivities: [
          'Praktikum memberi indeks katalog koleksi, mendigitalkan berkas lama, dan menata ruang baca',
          'Magang di perpustakaan sekolah/daerah, unit arsip kantor, atau pusat dokumentasi media'
        ],
        relevantSkills: [
          'Pengelompokan & penamaan berkas rapi',
          'Penelusuran sumber tepercaya',
          'Pelayanan informasi ramah'
        ],
        careerConnections: [
          'Pustakawan/Pengelola Perpustakaan, Arsiparis Organisasi/Perusahaan, atau Document Controller'
        ],
        verifiedEntryPathwaysNote: 'Tersedia di jenjang D3/D4 Kearsipan dan S1 Ilmu Perpustakaan lewat SNPMB.',
        isSpecificInstitutionProgram: false
      }
    }
  }
];
