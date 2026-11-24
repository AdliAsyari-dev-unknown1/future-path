/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7.3: Expanded Production Catalog — Jalur Wirausaha (16 Beginner Business Models)
 *
 * Strictly realistic, non-fabricated starter business concepts for SMK students.
 * Guarantees:
 * - Zero fabricated startup capital, revenue estimates, or profit guarantees (`capitalAmountStatus: 'belum_tersedia'`).
 * - Preserves all 5 original PROD_BIZ_* IDs with enriched domain signals and clearer copy.
 * - Validated sources strictly from OSS NIB UMK, KemenkopUKM SPW/PLUT, Kemenparekraf, and sector references.
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

export const PRODUCTION_ENTREPRENEURSHIP_CATALOG: RecommendationCandidate[] = [
  // =========================================================================
  // 1. JASA SERVIS & TEKNIS RINGAN
  // =========================================================================
  {
    id: 'PROD_BIZ_LOW_CAP_SERVICE',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'teknik_industri',
    secondaryDomains: ['teknologi_informatika'],
    name: 'Usaha Jasa Servis Ringan & Perbaikan Harian',
    categoryLabel: 'Wirausaha Jasa Teknis — Mulai Tanpa Stok Besar',
    shortDescription:
      'Menerima jasa servis barang sehari-hari sesuai pesanan — seperti perbaikan laptop, servis kipas/elektronik ringan, pemasangan Wi-Fi rumah, atau servis motor ringan — tanpa menyetok banyak barang.',
    characteristics: [
      'Menjual keterampilan tangan sendiri untuk bantu orang sekitar yang alat atau kendaraannya bermasalah',
      'Bisa dicoba bertahap dari tetangga, teman sekolah, atau kegiatan SPW SMK sebelum sewa tempat',
      'Jika sudah berjalan rutin, usaha jasa perseorangan bisa didaftarkan NIB UMK gratis lewat oss.go.id'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.16,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.2,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 66,
      kebiasaan: 70,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 50
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_teknis', 'minat_usaha'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_mandiri', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_individu'],
      kesiapan_praktis: ['siap_usaha', 'siap_kerja']
    },
    supportingIndicators: ['hands_on_practical', 'technical_affinity', 'enterprising_business'],
    requiredBasicSkills: [
      'Menguasai minimal satu jenis perbaikan dasar yang aman dikerjakan',
      'Jujur menjelaskan kondisi kerusakan serta perkiraan waktu pengerjaan'
    ],
    developableSkills: [
      'Mencatat uang masuk-keluar, menghitung biaya suku cadang, dan mengurus NIB UMK di oss.go.id'
    ],
    requirementsOrConstraints: [
      'Nominal modal alat dan perkiraan pendapatan berstatus belum tersedia karena bergantung alat yang sudah dimiliki',
      'Kepercayaan pelanggan bergantung pada ketelitian dan keamanan hasil servis'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Estimasi nominal modal awal & proyeksi omzet/laba belum tersedia',
      'Pemilihan kode KBLI spesifik jasa perbaikan disesuaikan saat mendaftar OSS'
    ],
    contextRelatedMajors: ['Otomotif', 'Elektro', 'TKJ', 'Mesin'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Kerangka legalitas NIB UMK perseorangan (oss.go.id), SPW SMK, dan PLUT-KUKM terverifikasi; estimasi biaya alat & omzet tidak dibuat tanpa sumber lokal.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Servis Ringan, Instalasi & Perawatan Harian Perseorangan',
        productOrServiceOverview:
          'Layanan perbaikan ringan komputer/elektronik, pasang Wi-Fi rumah, atau perawatan motor/perkakas harian sesuai pesanan.',
        problemOrNeedServed:
          'Membantu warga sekitar, pelajar kos, atau warung yang butuh perbaikan cepat tanpa jauh ke toko servis besar.',
        targetUsers: ['Warga sekitar', 'Pelajar atau mahasiswa kos', 'Pemilik usaha mikro lokal'],
        requiredSkills: [
          'Keterampilan perbaikan dasar yang aman dan komunikasi jujur soal kerusakan ke pemilik barang'
        ],
        learnableSkills: [
          'Pencatatan kas harian sederhana, daftar NIB UMK di OSS, dan promosi lokal'
        ],
        startingProcessOverview: [
          'Mulai membantu perbaikan ringan dari teman atau keluarga memakai perkakas yang sudah tersedia',
          'Catat setiap pekerjaan, komponen yang dibeli, serta masukan dari pelanggan',
          'Daftarkan NIB UMK gratis lewat oss.go.id apabila pesanan sudah berjalan rutin'
        ],
        challengesAndRisks: [
          'Risiko salah diagnosis kerusakan barang serta jumlah pesanan yang belum stabil di awal merintis'
        ],
        resourceRequirementsNote:
          'Nominal modal awal berstatus belum tersedia dan tidak direka-reka. Usaha jasa perseorangan dapat mendaftar NIB gratis di oss.go.id.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_TECH_SOLUTION',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'teknologi_informatika',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Usaha Jasa Pembuatan Aplikasi Kasir/Admin & Alat Otomasi Sederhana',
    categoryLabel: 'Wirausaha Solusi Teknologi — Berbasis Proyek',
    shortDescription:
      'Membuat website profil usaha, sistem pencatat kas/stok sederhana untuk warung atau toko, atau alat bantu sensor ringan sesuai kebutuhan nyata pemesan.',
    characteristics: [
      'Mengubah keahlian coding atau elektronika menjadi alat bantu yang membereskan kerjaan berulang',
      'Mengharuskan diskusi singkat dengan calon pemakai supaya fitur yang dibuat benar-benar gampang dipakai',
      'Dapat dijalankan sebagai jasa proyek perorangan dan didaftarkan lewat OSS saat rutin'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 76,
      kebiasaan: 70,
      kemampuan_saat_ini: 66,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 60
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_usaha'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis', 'pikir_kreatif'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['technical_affinity', 'enterprising_business', 'analytical_depth'],
    requiredBasicSkills: [
      'Merancang dan menguji program web/aplikasi atau prototipe alat sederhana hingga stabil',
      'Mendengarkan alur kerja pemesan sebelum menulis kode'
    ],
    developableSkills: [
      'Menyepakati daftar fitur sejak awal, membuat panduan pakai ringkas, dan merawat sistem setelah diserahkan'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: SKKNI Pemrograman & OSS UMK terverifikasi, namun templat kontrak proyek IT mikro dan uji keselamatan alat kustom memerlukan rujukan lanjutan'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Estimasi modal perangkat keras, biaya server/hosting, serta tarif proyek tidak dicantumkan'
    ],
    contextRelatedMajors: ['RPL/PPLG', 'Elektro', 'TKJ', 'Mesin'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Kompetensi pemrograman (Kepmenaker No. 282/2016) dan registrasi UMK OSS terverifikasi; aspek perjanjian kerja perangkat lunak dan keamanan perangkat rakitan memerlukan rujukan teknis lanjutan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_SW,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Pembuatan Aplikasi Admin Sederhana, Web Usaha & Alat Otomasi',
        productOrServiceOverview:
          'Membuat website informasi toko, aplikasi pencatat stok/pesanan ringan, atau rangkaian sensor sederhana sesuai kebutuhan pemesan.',
        problemOrNeedServed:
          'Membantu pemilik warung, toko, atau panitia acara yang masih mencatat manual agar data pesanan lebih cepat rapi.',
        targetUsers: ['Pemilik toko atau warung sekitar', 'Komunitas sekolah & acara lokal'],
        requiredSkills: [
          'Membaca alur kerja pengguna awam, membuat aplikasi uji coba fungsional, dan menguji error sebelum serah terima'
        ],
        learnableSkills: [
          'Menulis batas fitur yang disepakati, membuat panduan singkat pengguna, dan mengatur jadwal revisi'
        ],
        startingProcessOverview: [
          'Bangun 1–2 contoh aplikasi nyata untuk kebutuhan sekitar sekolah sebagai bukti kemampuan',
          'Wawancara singkat calon pengguna agar fitur tidak terlalu rumit',
          'Catat kesepakatan fitur, waktu jadi, dan dukungan perbaikan awal'
        ],
        challengesAndRisks: [
          'Permintaan fitur tambahan terus muncul di tengah pengerjaan serta bug yang baru terlihat setelah dipakai harian'
        ],
        resourceRequirementsNote:
          'Perkiraan biaya komponen, hosting, maupun modal awal berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_DIGITAL_MICRO_PROD',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'teknologi_informatika',
    secondaryDomains: ['seni_desain', 'pendidikan'],
    name: 'Usaha Produk Digital Mikro (Template, Aset Desain & Lembar Kerja)',
    categoryLabel: 'Wirausaha Produk Digital — Karya Mandiri',
    shortDescription:
      'Membuat produk digital siap unduh buatan sendiri — seperti template spreadsheet pencatatan usaha, desain undangan/presentasi, komponen UI, atau lembar belajar — yang bisa dipakai ulang banyak pembeli.',
    characteristics: [
      'Sekali dibuat dengan rapi, file produk digital dapat ditawarkan berulang kali tanpa harus kirim barang fisik',
      'Mengutamakan kejelian melihat tugas berulang yang sering menyulitkan pelajar, guru, atau pemilik UMKM',
      'Termasuk kategori subsektor ekonomi kreatif digital pemula tanpa jaminan angka penjualan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.22,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 68,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 50
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_kreatif', 'minat_usaha'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_sistematis'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_individu', 'ling_teknis', 'ling_kreatif'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['technical_affinity', 'creative_expression', 'autonomy_independent'],
    requiredBasicSkills: [
      'Membuat template/aset yang rapi, jelas cara pakainya, dan bebas pelanggaran hak cipta font/gambar'
    ],
    developableSkills: [
      'Menyusun panduan singkat pemakaian produk, memamerkan cuplikan contoh hasil, dan menerima masukan pembeli'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Klasifikasi subsektor ekonomi kreatif & OSS UMK terverifikasi; pasar produk digital sangat bergantung pada orisinalitas karya dan tidak menjamin penjualan cepat'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Perkiraan biaya alat/koneksi internet, komisi platform digital, dan potensi pendapatan belum tersedia'
    ],
    contextRelatedMajors: ['RPL/PPLG', 'BP/Broadcasting Perfilman', 'TKJ'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Klasifikasi subsektor aplikasi/desain kreatif Kemenparekraf & OSS UMK terverifikasi; rincian pajak platform digital dan proyeksi penghasilan belum tersedia.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Pembuatan Produk Digital Mikro (Template, Aset Visual & Alat Bantu Digital)',
        productOrServiceOverview:
          'Merancang template catatan kas UMKM, template presentasi/poster, ikon, atau lembar kerja belajar yang siap diunduh dan dipakai ulang.',
        problemOrNeedServed:
          'Membantu pelajar, guru, atau pelaku usaha kecil yang butuh format dokumen/desain rapi tanpa membuat dari nol.',
        targetUsers: ['Pelajar & mahasiswa', 'Pemilik usaha kecil', 'Kreator konten pemula'],
        requiredSkills: [
          'Keterampilan teknis aplikasi desain/spreadsheet/web serta ketelitian mengecek fungsi setiap file'
        ],
        learnableSkills: [
          'Menjaga lisensi aset tetap orisinal, menulis deskripsi kegunaan produk yang jelas, dan membuat contoh tampilan'
        ],
        startingProcessOverview: [
          'Amati 1 masalah berulang yang sering dialami teman atau warung sekitar (misalnya tabel stok atau poster menu)',
          'Buat versi contoh paling sederhana, uji coba ke beberapa teman agar tahu bagian yang membingungkan',
          'Perbaiki panduan pemakaian sebelum mulai menawarkannya secara rutin'
        ],
        challengesAndRisks: [
          'Karya mudah ditiru atau disebarkan ulang tanpa izin, serta persaingan produk gratis di internet'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan perangkat dan estimasi pendapatan berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },

  // =========================================================================
  // 2. JASA KREATIF, MEDIA & KOMUNIKASI
  // =========================================================================
  {
    id: 'PROD_BIZ_DIGITAL_FREELANCE',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'seni_desain',
    secondaryDomains: ['komunikasi_media', 'teknologi_informatika'],
    name: 'Usaha Jasa Desain Konten, Foto/Video & Tampilan Web UMKM',
    categoryLabel: 'Wirausaha Jasa Kreatif — Modal Portofolio',
    shortDescription:
      'Membantu pemilik warung, toko, atau panitia acara sekitar membuat poster promo, desain logo/kemasan, mengedit video pendek, atau membuat halaman profil usaha sederhana.',
    characteristics: [
      'Menjual hasil karya visual atau digital sesuai permintaan klien per proyek atau per pesanan',
      'Bekal utama berupa kumpulan contoh karya (portofolio) yang bisa dimulai dari proyek tugas SMK',
      'Mengacu pada etika hak cipta aset gambar/musik dan dapat didaftarkan NIB UMK di OSS'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.25,
      gaya_berpikir: 0.2,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.11,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 70,
      kebiasaan: 68,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 50
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_usaha'],
      gaya_berpikir: ['pikir_kreatif'],
      kebiasaan: ['biasa_mandiri', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_kreatif'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_individu'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['creative_expression', 'autonomy_independent', 'enterprising_business'],
    requiredBasicSkills: [
      'Membuat poster, foto/video editan, atau tampilan web rapi plus punya 3–5 contoh karya',
      'Disiplin menepati waktu selesai dan hanya memakai font/gambar berlisensi aman'
    ],
    developableSkills: [
      'Menggali keinginan desain dari klien (brief), membatasi jumlah revisi, dan mencatat pembayaran jasa'
    ],
    requirementsOrConstraints: [
      'Memerlukan perangkat HP atau laptop yang cukup lancar untuk mengolah foto/desain/video',
      'Tarif jasa dan perkiraan penghasilan tidak dicantumkan'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Kisaran biaya perangkat, tarif proyek, maupun proyeksi omzet belum tersedia'
    ],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'RPL/PPLG', 'Tekstil'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Kerangka kompetensi desain (Kepmenaker No. 126/2023) dan legalitas UMK perseorangan (oss.go.id) terverifikasi; tarif jasa dan pendapatan belum tersedia.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_DKV,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Desain Promosi, Foto/Video Pendek & Tampilan Web UMKM',
        productOrServiceOverview:
          'Membuat poster promo, menu usaha, konten Instagram/TikTok, edit video pendek, atau laman info usaha bagi toko sekitar.',
        problemOrNeedServed:
          'Banyak usaha kecil sekitar memiliki produk bagus namun belum sempat membuat foto produk atau poster promo yang rapi.',
        targetUsers: ['Pemilik warung & UMKM sekitar', 'Panitia acara sekolah/komunitas', 'Usaha teman'],
        requiredSkills: [
          'Dasar desain grafis atau editing foto/video serta ketepatan menyelesaikan pesanan sesuai janji'
        ],
        learnableSkills: [
          'Menggali brief klien, menjaga etika hak cipta aset, dan mendaftarkan NIB UMK saat pesanan rutin'
        ],
        startingProcessOverview: [
          'Kumpulkan 3–5 contoh karya terbaik (termasuk tugas SMK) dalam satu tautan/folder rapi',
          'Tawarkan uji coba pengerjaan skala kecil ke kenalan atau lewat kegiatan PKK/SPW di sekolah',
          'Sepakati batas revisi dan waktu pengerjaan sebelum mulai mendesain'
        ],
        challengesAndRisks: [
          'Klien meminta revisi berulang tanpa kesepakatan awal serta jumlah order yang fluktuatif'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan perangkat & modal belum tersedia. Jasa perseorangan bisa urus NIB gratis di oss.go.id.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_SOCMED_AGENCY',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'komunikasi_media',
    secondaryDomains: ['bisnis_ekonomi', 'seni_desain'],
    name: 'Usaha Jasa Kelola Media Sosial & Promosi Harian UMKM',
    categoryLabel: 'Wirausaha Komunikasi Digital — Jasa Mitra',
    shortDescription:
      'Membantu usaha kecil lokal menyusun kalender unggahan rutin, menyiapkan foto/caption singkat, serta membalas komentar atau pesan calon pembeli di media sosial secara sopan dan konsisten.',
    characteristics: [
      'Berfokus pada konsistensi jadwal posting, gaya bahasa akrab dengan pembeli, dan laporan bulanan sederhana',
      'Cocok untuk yang aktif mengikuti tren media sosial dan komunikatif saat melayani pertanyaan audiens',
      'Bisa dikerjakan bersama 1–2 teman dengan pembagian tugas konten dan admin chat'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.18,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.18,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 68,
      kebiasaan: 68,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 50
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_usaha', 'minat_kreatif'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_tim', 'ling_kreatif'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['interpersonal_social', 'enterprising_business', 'creative_expression'],
    requiredBasicSkills: [
      'Menulis caption yang sopan dan mudah dibaca, menyusun jadwal unggahan, serta merespons pesan cepat'
    ],
    developableSkills: [
      'Membaca statistik jangkauan unggahan sederhana dan mengevaluasi jenis konten yang paling diminati audiens'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Pilar pemasaran digital PLUT-KUKM & subsektor komunikasi ekraf terverifikasi, namun tidak ada jaminan kenaikan omzet instan bagi klien'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Tarif paket pengelolaan bulanan maupun proyeksi pendapatan agensi pemula tidak dicantumkan'
    ],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'RPL/PPLG', 'TKJ'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Pembinaan pemasaran digital PLUT-KUKM dan subsektor ekraf terkait terverifikasi; tidak ada standar tarif baku atau jaminan hasil penjualan klien.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Pengelolaan Konten Media Sosial & Promosi UMKM Lokal',
        productOrServiceOverview:
          'Merencanakan jadwal posting mingguan, menulis caption promosi jujur, dan membantu mengelola balasan pesan akun usaha kecil.',
        problemOrNeedServed:
          'Banyak pemilik toko atau makanan rumahan sibuk mengurus produksi sehingga akun media sosial usahanya sering kosong.',
        targetUsers: ['Warung makan/kopi lokal', 'Toko pakaian/kerajinan sekitar', 'Pelaku usaha jasa setempat'],
        requiredSkills: [
          'Komunikasi ramah, konsistensi waktu posting, dan kejelian menyoroti keunggulan asli produk klien'
        ],
        learnableSkills: [
          'Membuat kalender konten bulanan, membaca laporan tayangan, dan komunikasi laporan kerja ke pemilik usaha'
        ],
        startingProcessOverview: [
          'Buat contoh rencana konten 1 minggu untuk satu usaha kenalan agar pemilik usaha melihat gaya kerjamu',
          'Sepakati sejak awal tugas yang ditangani (apakah termasuk foto produk atau hanya jadwal unggahan & caption)',
          'Kirim rekap perkembangan akun secara rutin agar kerja sama transparan'
        ],
        challengesAndRisks: [
          'Ekspektasi pemilik usaha yang menginginkan penjualan langsung melonjak dalam beberapa hari serta ketergantungan pada bahan foto dari klien'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan operasional dan paket jasa berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_EVENT_DECOR',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'komunikasi_media',
    secondaryDomains: ['seni_desain', 'pariwisata_kuliner'],
    name: 'Usaha Jasa Dekorasi Acara Sederhana & Dokumentasi Kegiatan',
    categoryLabel: 'Wirausaha Jasa Acara & Visual — Kerja Tim',
    shortDescription:
      'Menyediakan jasa penataan dekorasi acara sederhana (ulang tahun, lamaran kecil, atau stan pameran sekolah) sekaligus layanan foto/video dokumentasi kegiatan.',
    characteristics: [
      'Banyak kerja lapangan berkoordinasi dengan tim kecil dan pemilik acara agar susunan acara lancar',
      'Cocok untuk yang aktif bergerak, teliti menata estetika ruangan, dan tenang menghadapi jadwal acara',
      'Dapat dimulai dengan sistem sewa perlengkapan dasar sesuai pesanan atau kerja sama vendor'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.16,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.18,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 66,
      kebiasaan: 70,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_sosial', 'minat_usaha'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan', 'ling_kreatif'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['creative_expression', 'interpersonal_social', 'hands_on_practical'],
    requiredBasicSkills: [
      'Ketelitian menata dekorasi atau mengoperasikan kamera, koordinasi tim di lokasi, dan tepat waktu'
    ],
    developableSkills: [
      'Menyusun daftar perlengkapan acara (checklist), menghitung waktu bongkar-pasang, dan mengelola jadwal booking'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu pengelompokan ekonomi kreatif & OSS UMK; pekerjaan acara menuntut fisik siap kerja akhir pekan dan biaya perlengkapan tidak dicantumkan'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Estimasi biaya perlengkapan dekorasi/kamera, biaya transportasi, dan tarif paket acara belum tersedia'
    ],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'Tekstil'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Klasifikasi jasa kreatif acara Kemenparekraf & OSS UMK terverifikasi; kebutuhan modal perlengkapan & aturan sewa tempat tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Penataan Dekorasi Acara Sederhana & Dokumentasi Kegiatan',
        productOrServiceOverview:
          'Jasa memasang backdrop acara kecil, penataan meja pameran, atau paket foto-video dokumentasi acara keluarga dan komunitas.',
        problemOrNeedServed:
          'Membantu tuan rumah acara kecil atau panitia kegiatan agar suasana acara terlihat rapi dan terdokumentasi tanpa repot menata sendiri.',
        targetUsers: ['Keluarga yang mengadakan acara rumahan', 'Panitia kegiatan sekolah & komunitas'],
        requiredSkills: [
          'Kepekaan tata letak visual, ketahanan kerja pemasangan langsung di lokasi, dan komunikasi ramah dengan klien'
        ],
        learnableSkills: [
          'Pengaturan jadwal tim pasang-bongkar, manajemen inventaris properti dekorasi, dan perjanjian uang muka jelas'
        ],
        startingProcessOverview: [
          'Latih dulu dengan membantu acara sekolah, keluarga, atau kegiatan OSIS sambil memotret hasilnya sebagai portofolio',
          'Mulai dari paket sederhana memakai properti yang mudah dibawa dan dirawat ulang',
          'Pastikan selalu ada daftar barang kembali agar properti tidak hilang saat acara selesai'
        ],
        challengesAndRisks: [
          'Kerusakan properti saat pemakaian, jadwal acara mundur di luar perkiraan, serta sepi pesanan di luar musim acara'
        ],
        resourceRequirementsNote:
          'Nominal modal pembelian properti/alat dokumentasi berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },

  // =========================================================================
  // 3. KERAJINAN & PRODUKSI KUSTOM
  // =========================================================================
  {
    id: 'PROD_BIZ_MICRO_WORKSHOP',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'teknik_industri',
    secondaryDomains: ['seni_desain'],
    name: 'Usaha Produksi Barang Kustom (Jahit, Sablon, atau Bengkel Mikro)',
    categoryLabel: 'Wirausaha Produksi — Sistem Pesanan',
    shortDescription:
      'Membuat barang fisik sesuai pesanan (pre-order) — seperti kustomisasi tas/kaos, produk jahit, atau pembuatan rak/komponen bengkel besi/kayu sederhana skala kecil.',
    characteristics: [
      'Menghasilkan produk fisik buatan tangan atau mesin bengkel dengan perhatian pada kerapian ukuran',
      'Mengandalkan sistem pre-order agar bahan dibeli sesuai pesanan dan tidak menumpuk',
      'Menuntut perhatian khusus pada keselamatan ruang kerja dan kualitas akhir barang'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.14,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.2,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.16
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 66,
      kebiasaan: 72,
      kemampuan_saat_ini: 68,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_praktik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik'],
      preferensi_lingkungan: ['ling_lapangan'],
      kesiapan_praktis: ['siap_usaha', 'siap_kerja']
    },
    supportingIndicators: ['enterprising_business', 'hands_on_practical', 'structured_procedural'],
    requiredBasicSkills: [
      'Keterampilan membuat barang fisik yang rapi dan menghitung kebutuhan bahan per pesanan'
    ],
    developableSkills: [
      'Menjaga mutu hasil tetap seragam, mengemas produk aman kirim, dan mengatur jadwal produksi pre-order'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Pembinaan PLUT-KUKM & OSS NIB UMK terverifikasi; biaya mesin produksi serta standar ruang kerja mikro tidak dicantumkan'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Estimasi nominal biaya mesin/peralatan produksi dan bahan baku tidak tersedia'
    ],
    contextRelatedMajors: ['Tekstil', 'Mesin', 'Otomotif', 'Elektro'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Pendampingan UMKM dan NIB UMK terverifikasi lewat KemenkopUKM/PLUT-KUKM & OSS; kebutuhan modal alat dan standar teknis ruang kerja mikro belum tersedia.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Produksi Barang Kustom, Jahit/Konveksi atau Bengkel Skala Mikro',
        productOrServiceOverview:
          'Membuat produk fisik kustom (kaos komunitas, tas kain, atau rak/komponen bengkel ringan) berdasarkan pesanan.',
        problemOrNeedServed:
          'Memenuhi permintaan barang kustom dalam jumlah satuan atau kecil yang jarang dilayani pabrik besar.',
        targetUsers: ['Komunitas sekolah/kampus', 'Panitia acara lokal', 'Pembeli produk kustom sekitar'],
        requiredSkills: [
          'Keterampilan produksi/jahit/bengkel yang rapi serta teliti menghitung kebutuhan bahan'
        ],
        learnableSkills: [
          'Kontrol kualitas hasil sebelum dikirim, pengemasan rapi, dan pencatatan biaya bahan baku'
        ],
        startingProcessOverview: [
          'Gunakan sistem pre-order agar bahan baru dibeli sesudah pesanan dikonfirmasi',
          'Bekerja sama dengan bengkel atau penjahit mitra lebih dulu sebelum membeli mesin mahal',
          'Buat sampel contoh lebih dulu sebelum memproduksi pesanan jumlah banyak'
        ],
        challengesAndRisks: [
          'Sisa bahan menumpuk, hasil cacat yang harus dibuat ulang, serta keterbatasan ruang kerja aman'
        ],
        resourceRequirementsNote:
          'Kebutuhan modal peralatan dan bahan baku berstatus belum tersedia; hindari belanja alat besar sebelum uji permintaan.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_CRAFT_CUSTOM',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'seni_desain',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Usaha Kerajinan Tangan, Souvenir & Aksesori Kustom',
    categoryLabel: 'Wirausaha Kriya & Seni — Skala Kecil',
    shortDescription:
      'Membuat produk kriya dan hadiah kustom buatan tangan — seperti gantungan kunci ilustrasi, totebag lukis/sablon, buket/hampers hadiah, atau suvenir acara dengan sentuhan desain personal.',
    characteristics: [
      'Menonjolkan ketelitian tangan, pemilihan warna, dan keunikan desain yang tidak pasaran',
      'Bisa dicoba dari meja kerja di rumah dengan jumlah bahan terbatas sesuai pesanan',
      'Termasuk subsektor kriya pada pengelompokan ekonomi kreatif pemula'
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
      gaya_berpikir: 70,
      kebiasaan: 68,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 56
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_praktik', 'minat_usaha'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_mandiri', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_individu'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['creative_expression', 'hands_on_practical', 'enterprising_business'],
    requiredBasicSkills: [
      'Kerapian membuat kerajinan tangan, memadukan warna kemasan, dan memfoto hasil karya dengan bersih'
    ],
    developableSkills: [
      'Menghitung biaya bahan plus waktu pengerjaan secara wajar dan menyiapkan kemasan aman pengiriman'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Subsektor kriya Kemenparekraf & program SPW/OSS terverifikasi; modal bahan kerajinan dan harga jual bervariasi tiap produk'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Estimasi nominal modal bahan, biaya pengemasan, serta perkiraan laba tidak tersedia'
    ],
    contextRelatedMajors: ['Tekstil', 'BP/Broadcasting Perfilman'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Pengelompokan subsektor kriya Kemenparekraf & jalur NIB UMK OSS terverifikasi; harga bahan baku dan proyeksi omzet tidak dibuat tanpa riset lokal.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Pembuatan Kerajinan Tangan, Souvenir & Hadiah Kustom',
        productOrServiceOverview:
          'Membuat suvenir acara, aksesori kustom, hampers hadiah, atau produk kriya tekstil/kertas buatan tangan.',
        problemOrNeedServed:
          'Membantu pembeli yang mencari kado atau kenang-kenangan acara dengan desain personal dan kemasan menarik.',
        targetUsers: ['Pelajar yang mencari hadiah wisuda/ulang tahun', 'Panitia seminar atau acara komunitas'],
        requiredSkills: [
          'Keterampilan tangan yang rapi, selera warna/estetika, dan kesabaran membuat detail kecil'
        ],
        learnableSkills: [
          'Penghitungan waktu pengerjaan ke dalam biaya jasa, foto produk menarik, dan manajemen pesanan pre-order'
        ],
        startingProcessOverview: [
          'Buat 2–3 contoh suvenir atau aksesori unggulan untuk dipotret di pencahayaan terang',
          'Tawarkan sistem pesan dulu (pre-order) saat momen tertentu seperti kelulusan atau acara sekolah',
          'Pisahkan catatan uang beli pita/bahan dengan uang hasil jualan sejak pesanan pertama'
        ],
        challengesAndRisks: [
          'Waktu pengerjaan manual cukup lama saat pesanan menumpuk dan harga bahan pernak-pernik mudah berubah'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan modal awal berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },

  // =========================================================================
  // 4. NIAGA, BISNIS, ADMIN & PEMBUKUAN UMKM
  // =========================================================================
  {
    id: 'PROD_BIZ_SOCIAL_COMMERCE',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['komunikasi_media'],
    name: 'Usaha Jualan Online, Reseller & Penyaluran Produk Sekitar',
    categoryLabel: 'Wirausaha Niaga & Kemitraan — Semua Jurusan',
    shortDescription:
      'Menjual barang kebutuhan harian, produk teman, atau jajanan UMKM sekitar sebagai reseller atau mitra promosi online dan tatap muka tanpa wajib membuat barang sendiri.',
    characteristics: [
      'Terbuka untuk semua jurusan — fokus pada komunikasi jujur, foto produk, katalog WA/medsos, dan layanan cepat',
      'Tidak perlu langsung produksi sendiri karena bisa menyalurkan barang dari produsen tepercaya sekitar',
      'Selaras dengan praktik jualan daring Sekolah Pencetak Wirausaha (SPW) SMK'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.16,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.18,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 66,
      kebiasaan: 68,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 48
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_sosial'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_komunikasi'],
      preferensi_lingkungan: ['ling_tim'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['interpersonal_social', 'enterprising_business'],
    requiredBasicSkills: [
      'Percaya diri menjelaskan manfaat produk secara jujur dan rajin merespons chat pembeli'
    ],
    developableSkills: [
      'Menyusun katalog foto produk di medsos/marketplace, mencatat arus kas jualan, dan menjaga hubungan dengan pemasok'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Program SPW SMK dan PLUT-KUKM terverifikasi; ketentuan KBLI perdagangan eceran per komoditas dan estimasi margin komisi tidak dicantumkan'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Ketentuan rinci KBLI keagenan/perdagangan spesifik serta proyeksi margin komisi belum tersedia'
    ],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'Tekstil', 'TKJ', 'RPL/PPLG'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Praktik bisnis daring SPW SMK dan layanan pilar pemasaran PLUT-KUKM terverifikasi; pemilihan KBLI perdagangan spesifik pada OSS belum dirinci.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jualan Online, Reseller & Penyaluran Produk Mitra Lokal',
        productOrServiceOverview:
          'Memasarkan barang atau makanan ringan buatan produsen sekitar lewat katalog WhatsApp, media sosial, dan penjualan langsung.',
        problemOrNeedServed:
          'Banyak pembuat barang lokal punya produk bagus tetapi tidak punya waktu melayani promosi dan balasan chat pembeli.',
        targetUsers: ['Produsen lokal yang butuh mitra jualan', 'Pembeli di lingkungan sekolah dan sekitar'],
        requiredSkills: [
          'Komunikasi ramah dan jujur soal kondisi barang serta ketelitian mencatat pesanan'
        ],
        learnableSkills: [
          'Membuat katalog foto produk rapi, mencatat selisih uang beli-jual, dan membuat perjanjian bagi hasil jelas'
        ],
        startingProcessOverview: [
          'Pilih produk dari produsen atau teman yang kualitasnya sudah kamu uji langsung',
          'Gunakan sistem pesan dulu atau stok sangat kecil lewat praktik SPW agar barang tidak menumpuk',
          'Konsultasikan kode KBLI perdagangan saat mendaftar NIB UMK jika usaha berjalan rutin'
        ],
        challengesAndRisks: [
          'Stok barang dari pemasok mendadak habis atau mutu berbeda dari contoh, serta penolakan calon pembeli di awal'
        ],
        resourceRequirementsNote:
          'Nominal dana operasional dan perkiraan untung berstatus belum tersedia. Tidak ada jaminan penghasilan instan.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_BIZ_BOOKKEEPING',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Usaha Jasa Admin Toko Online, Rekap Pesanan & Pencatatan Kas UMKM',
    categoryLabel: 'Wirausaha Jasa Bisnis & Admin — Ketelitian Data',
    shortDescription:
      'Membantu pemilik warung atau toko online merapikan catatan pesanan harian, menyusun rekap pemasukan-pengeluaran di spreadsheet, dan menyiapkan daftar barang kirim.',
    characteristics: [
      'Menjual ketelitian, kerapian dokumen, dan kebiasaan mencatat transaksi supaya usaha kecil tidak bingung soal uangnya',
      'Cocok untuk yang teliti angka, suka spreadsheet/daftar rapi, dan senang kerja tenang di depan komputer',
      'Menjaga kerahasiaan data penjualan klien merupakan aturan etika utama'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.22,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 72,
      kebiasaan: 76,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 54
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_akademik', 'minat_teknis'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis'],
      preferensi_lingkungan: ['ling_individu', 'ling_teknis'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_usaha']
    },
    supportingIndicators: ['structured_procedural', 'analytical_depth', 'enterprising_business'],
    requiredBasicSkills: [
      'Mengoperasikan spreadsheet dasar (rumus jumlah/rekap sederhana) dan teliti mencocokkan nota pesanan'
    ],
    developableSkills: [
      'Menyusun laporan kas mingguan yang mudah dibaca pemilik toko dan memisahkan transaksi pribadi vs usaha klien'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Pengoperasian komputer (SKKNI No. 56/2018) & pilar pencatatan usaha PLUT-KUKM terverifikasi; jasa pembukuan ini bersifat pencatatan operasional ringan, bukan jasa akuntan publik bersertifikat'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Tarif layanan bulanan admin/rekap maupun batas ketentuan jasa pembukuan resmi tidak dicantumkan'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Pencatatan operasional memakai spreadsheet mengacu pada SKKNI No. 56/2018 dan pembinaan literasi keuangan UMKM PLUT-KUKM; layanan audit keuangan/pajak profesional tetap mensyaratkan akuntan bersertifikat.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Admin Toko Online, Rekap Pesanan & Pencatatan Kas Sederhana UMKM',
        productOrServiceOverview:
          'Merapikan data order harian dari WhatsApp/marketplace, mencocokkan resi pengiriman, dan merekap catatan uang masuk-keluar toko.',
        problemOrNeedServed:
          'Banyak pemilik usaha mikro tahu cara membuat produk enak atau bagus, tetapi kewalahan mencatat pesanan dan menghitung sisa stok.',
        targetUsers: ['Pemilik toko online skala rumahan', 'Warung atau usaha katering kecil'],
        requiredSkills: [
          'Ketelitian angka, kebiasaan kerja sistematis, dan kemampuan dasar spreadsheet'
        ],
        learnableSkills: [
          'Membuat templat rekap stok sederhana, menjaga kerahasiaan data usaha, dan berkomunikasi jelas saat ada selisih nota'
        ],
        startingProcessOverview: [
          'Buat contoh format rekap pesanan dan kas sederhana menggunakan spreadsheet agar calon klien melihat manfaatnya',
          'Bantu dulu 1 usaha keluarga atau kenalan untuk melatih ketepatan rekap harian',
          'Tegaskan sejak awal bahwa layanan bersifat admin operasional/pencatatan dasar, bukan konsultan pajak resmi'
        ],
        challengesAndRisks: [
          'Nota atau bukti transfer dari pemilik toko tidak lengkap serta risiko salah input angka apabila kurang teliti'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan operasional dan tarif jasa berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },

  // =========================================================================
  // 5. KULINER & PARIWISATA LOKAL
  // =========================================================================
  {
    id: 'PROD_BIZ_CULINARY_MICRO',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'pariwisata_kuliner',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Usaha Kuliner Rumahan, Minuman Kekinian & Camilan Pre-Order',
    categoryLabel: 'Wirausaha Makanan & Minuman — Skala Harian',
    shortDescription:
      'Memproduksi dan menjual makanan rumahan, kue kotak, camilan kemasan kecil, atau minuman segar dengan sistem pre-order atau titip jual supaya bahan makanan selalu segar.',
    characteristics: [
      'Menuntut kebersihan dapur, konsistensi rasa, dan kejelian menghitung harga bahan per porsi',
      'Cocok bagi yang senang memasak, meracik minuman, dan teliti mengemas makanan rapi',
      'Dapat dimulai dari sistem pesan dulu (PO) untuk teman sekolah/kantor agar tidak rugi makanan sisa'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.14,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 64,
      kebiasaan: 72,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_praktik', 'minat_kreatif'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_tim'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['hands_on_practical', 'enterprising_business', 'structured_procedural'],
    requiredBasicSkills: [
      'Menjaga kebersihan bahan dan alat masak, menjaga rasa tetap stabil, serta menimbang takaran dengan rapi'
    ],
    developableSkills: [
      'Menghitung biaya bahan baku + kemasan secara akurat dan mengenali syarat izin edar PIRT jika dijual luas'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Klasifikasi subsektor kuliner ekraf & pembinaan UMK SPW/PLUT terverifikasi; biaya bahan dapur dan proses perizinan pangan olahan (PIRT/halal) tiap daerah tidak dicantumkan'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Estimasi modal bahan baku/alat masak, potensi margin per porsi, serta prosedur rinci PIRT tidak tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Subsektor kuliner Kemenparekraf & pendampingan UMK PLUT-KUKM terverifikasi; biaya dapur/bahan dan syarat sertifikasi pangan daerah belum diverifikasi rinci.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Usaha Makanan Ringan, Minuman & Kuliner Pre-Order Rumahan',
        productOrServiceOverview:
          'Membuat menu camilan, minuman kemasan, atau nasi/kue kotak berdasarkan pesanan harian atau titip jual di kantin sekitar.',
        problemOrNeedServed:
          'Menjawab kebutuhan jajan praktis, bersih, dan segar bagi pelajar, pekerja sekitar, atau panitia rapat.',
        targetUsers: ['Teman sekolah/kampus', 'Pekerja sekitar rumah', 'Panitia acara & pengajian lokal'],
        requiredSkills: [
          'Kebersihan penyiapan makanan, ketepatan waktu antar sebelum jam makan, dan konsistensi rasa'
        ],
        learnableSkills: [
          'Pengemasan makanan aman tumpah, perhitungan modal bahan per porsi, dan informasi dasar izin UMK/PIRT'
        ],
        startingProcessOverview: [
          'Mulai dari 1–2 menu andalan yang paling sering dipuji teman atau keluarga',
          'Buka sistem pre-order (pesan hari sebelumnya) supaya bahan dibeli pas dan tidak banyak makanan terbuang',
          'Catat seluruh belanja bahan termasuk gas, plastik kemasan, dan ongkos antar'
        ],
        challengesAndRisks: [
          'Makanan mudah basi jika tidak terjual hari itu juga serta fluktuasi harga bahan pokok di pasar'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan modal awal dan perkiraan laba berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_HEALTHY_CATERING',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'kesehatan',
    secondaryDomains: ['pariwisata_kuliner'],
    name: 'Usaha Paket Makanan Sehat Harian & Produk Kebersihan Alami',
    categoryLabel: 'Wirausaha Gaya Hidup Sehat — Non-Medis',
    shortDescription:
      'Menyediakan paket bekal makanan sehat seimbang (sayur, lauk rendah minyak, jus buah tanpa gula berlebih) atau produk kebersihan rumah/sabun alami ringan (bukan layanan atau obat medis).',
    characteristics: [
      'Berfokus pada kebiasaan hidup bersih dan pilihan menu harian yang lebih segar untuk pelanggan sibuk',
      'Wajib sangat disiplin pada kebersihan pengolahan dan jujur menuliskan komposisi bahan bagi pembeli yang alergi',
      'Tidak boleh mengklaim manfaat penyembuhan penyakit atau menggantikan konsultasi tenaga medis/ahli gizi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.16,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 68,
      kebiasaan: 74,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_usaha', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan'],
      kesiapan_praktis: ['siap_usaha', 'siap_terstruktur']
    },
    supportingIndicators: ['structured_procedural', 'hands_on_practical', 'interpersonal_social'],
    requiredBasicSkills: [
      'Menjaga higienitas dapur/alat tinggi, menimbang porsi bersih, dan jujur mencantumkan bahan baku'
    ],
    developableSkills: [
      'Menyusun variasi menu mingguan, menyimpan bahan segar agar tahan tanpa pengawet, dan mematuhi aturan label produk'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Usaha ini adalah usaha makanan/kebersihan harian non-medis; konsultasi diet medis atau produk farmasi wajib ditangani tenaga kesehatan berizin (UU Kesehatan No. 17/2023)'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Ketentuan izin edar pangan olahan/BPOM/PIRT spesifik serta estimasi modal dapur sehat tidak dicantumkan'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu pada pembinaan UMK PLUT-KUKM & batasan UU Kesehatan No. 17/2023: dilarang membuat klaim terapi medis atau menggantikan ahli gizi/tenaga kesehatan ber-STR.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKES_NAKES_STR,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Layanan Paket Bekal Sehat Harian & Produk Kebersihan Rumahan Non-Medis',
        productOrServiceOverview:
          'Menyiapkan menu makan siang/sarapan rumahan rendah minyak/buah segar atau produk kebersihan harian ramah lingkungan skala pre-order.',
        problemOrNeedServed:
          'Membantu pekerja atau pelajar yang ingin makan teratur dan lebih segar tetapi tidak sempat memasak sendiri.',
        targetUsers: ['Karyawan kantor sekitar', 'Pelajar/mahasiswa kos yang ingin makanan bersih'],
        requiredSkills: [
          'Standar kebersihan penyiapan makanan sangat tinggi, ketepatan jam antar, dan keterbukaan soal bahan alergen'
        ],
        learnableSkills: [
          'Manajemen belanja bahan segar harian, kemasan ramah lingkungan, dan kepatuhan label tanpa klaim medis'
        ],
        startingProcessOverview: [
          'Uji coba dulu lewat pemesanan mingguan untuk 3–5 kenalan terdekat agar jadwal masak dan antar terkendali',
          'Cantumkan daftar bahan lengkap di setiap paket sebagai bentuk kejujuran kepada pembeli',
          'Konsultasikan izin pangan rumah tangga (PIRT/OSS) sebelum memperluas pemasaran'
        ],
        challengesAndRisks: [
          'Bahan segar cepat layu jika tidak terpakai dan tanggung jawab tinggi menjaga makanan bebas kontaminasi'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan modal awal berstatus belum tersedia; tidak termasuk kategori layanan medis.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_COMMUNITY_TOUR',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'pariwisata_kuliner',
    secondaryDomains: ['komunikasi_media', 'bahasa_sastra'],
    name: 'Usaha Jasa Pemandu Wisata Lokal & Paket Jelajah Budaya Sekitar',
    categoryLabel: 'Wirausaha Jasa Wisata & Komunitas — Berbasis Cerita',
    shortDescription:
      'Merancang rute jalan kaki wisata kampung/kota, wisata kuliner lokal, atau pengalaman kerajinan setempat bagi pengunjung dari luar daerah dengan bercerita secara ramah dan informatif.',
    characteristics: [
      'Menggabungkan pengetahuan sejarah/budaya setempat, komunikasi hangat, dan pengaturan jadwal rute yang aman',
      'Cocok untuk yang suka bertemu orang baru, senang bercerita, dan menguasai keunikan daerah sendiri',
      'Bisa bekerja sama dengan pengrajin, warung lokal, atau komunitas sadar wisata setempat'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.16,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.2,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 66,
      kebiasaan: 68,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 54
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_eksploratif', 'minat_usaha'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_komunikasi'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_tim'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['interpersonal_social', 'exploratory_open', 'enterprising_business'],
    requiredBasicSkills: [
      'Komunikasi ramah di depan kelompok kecil, meriset fakta akurat tentang tempat sekitar, dan sabar memandu peserta'
    ],
    developableSkills: [
      'Menyusun susunan acara rute (itinerary), berkoordinasi dengan mitra warung/lokasi, dan dasar bahasa asing untuk tamu'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Direktori wisata Kemenparekraf/Kemnaker & OSS UMK terverifikasi; pemanduan resmi objek wisata cagar budaya/berizin tertentu mensyaratkan lisensi pemandu daerah'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Aturan lisensi pemandu wisata per kabupaten/kota dan estimasi biaya paket wisata belum tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Rujukan umum jasa wisata Kemnaker & Kemenparekraf terverifikasi; penyelenggaraan wisata resmi maupun sertifikasi HPI/pramuwisata daerah mengikuti peraturan pariwisata setempat.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_PARIWISATA_KULINER_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Pemandu Jalan Kaki Lokal, Wisata Kuliner & Pengalaman Budaya',
        productOrServiceOverview:
          'Merancang paket jelajah singkat mengenal tempat bersejarah, sentra kerajinan, atau jajanan khas daerah bagi rombongan kecil.',
        problemOrNeedServed:
          'Membantu pendatang atau komunitas yang ingin merasakan sisi unik suatu daerah tanpa bingung menyusun rute dan mencari cerita aslinya.',
        targetUsers: ['Pengunjung luar kota atau pelajar studi wisata', 'Komunitas hobi jalan kaki & fotografi'],
        requiredSkills: [
          'Kemampuan bercerita yang menarik dengan fakta terpercaya serta kepekaan menjaga keamanan rombongan'
        ],
        learnableSkills: [
          'Negosiasi kerja sama dengan pemilik sanggar/warung lokal, menyusun waktu tempuh realistis, dan promosi di medsos'
        ],
        startingProcessOverview: [
          'Susun 1 rute jalan kaki berdurasi 1–2 jam lengkap dengan fakta sejarah/budaya yang sudah dicek kebenarannya',
          'Uji coba memandu kelompok kecil teman atau komunitas hobi lebih dulu untuk mengevaluasi durasi dan rute',
          'Pastikan izin masuk lokasi serta aturan pemandu daerah setempat sudah dipatuhi'
        ],
        challengesAndRisks: [
          'Cuaca hujan mendadak di luar ruangan, peserta sepi di hari kerja, serta aturan izin kawasan wisata setempat'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan biaya maupun proyeksi penghasilan berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },

  // =========================================================================
  // 6. PENDIDIKAN, BAHASA & PENULISAN
  // =========================================================================
  {
    id: 'PROD_BIZ_TUTORING_SERVICE',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'pendidikan',
    secondaryDomains: ['psikologi_sosial', 'bahasa_sastra'],
    name: 'Usaha Jasa Les Privat, Pendamping Belajar Anak & Kelas Keterampilan Dasar',
    categoryLabel: 'Wirausaha Pendidikan Nonformal — Jasa Pendampingan',
    shortDescription:
      'Membuka jasa pendampingan belajar anak SD/SMP, bimbingan PR sepulang sekolah, atau kelas keterampilan dasar (seperti mengetik, desain pemula, atau komputer dasar) skala kecil.',
    characteristics: [
      'Menjual waktu dan kesabaran menjelaskan materi dasar agar peserta belajar lebih paham dan percaya diri',
      'Cocok bagi yang sabar mendengarkan, senang berbagi ilmu, dan punya dasar pelajaran atau praktik yang kuat',
      'Jasa les privat nonformal bukan sekolah formal dan tidak mengeluarkan ijazah resmi negara'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.18,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 68,
      kebiasaan: 70,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 54
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik', 'minat_usaha'],
      gaya_berpikir: ['pikir_analitis', 'pikir_kreatif'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim'],
      kesiapan_praktis: ['siap_studi', 'siap_usaha']
    },
    supportingIndicators: ['interpersonal_social', 'academic_aspiration', 'enterprising_business'],
    requiredBasicSkills: [
      'Menguasai materi yang diajarkan (pelajaran dasar atau keterampilan praktik) serta sabar memberi contoh'
    ],
    developableSkills: [
      'Menyusun lembar latihan ringkas, berkomunikasi jelas dengan orang tua murid, dan mengatur jadwal sesi'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu kerangka pendampingan belajar nonformal Kemendikbudristek & OSS; layanan les privat tidak setara sekolah formal/PPG (UU Guru dan Dosen No. 14/2005)'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Tarif per pertemuan dan aturan izin mendirikan lembaga kursus (LKP) skala besar tidak dicantumkan'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Jasa les privat perorangan merujuk kerangka kegiatan belajar nonformal & OSS; mendirikan lembaga kursus formal (LKP) memiliki syarat perizinan dinas pendidikan daerah serta profesi guru sekolah mensyaratkan S1/PPG.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_PENDAMPING_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_GURU_PPG,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Bimbingan Belajar Dasar & Kelas Keterampilan Pemula Mandiri',
        productOrServiceOverview:
          'Mendampingi anak SD/SMP belajar berhitung, membaca, bahasa Inggris dasar, atau melatih keterampilan komputer/desain pemula.',
        problemOrNeedServed:
          'Membantu orang tua yang sibuk bekerja agar anak tetap punya teman belajar yang sabar membimbing latihan harian.',
        targetUsers: ['Keluarga dengan anak usia SD/SMP sekitar rumah', 'Pelajar yang ingin belajar keterampilan dasar'],
        requiredSkills: [
          'Penguasaan materi dasar yang benar, kesabaran menghadapi anak, dan komunikasi sopan ke orang tua'
        ],
        learnableSkills: [
          'Membuat modul latihan singkat, mencatat perkembangan tiap pertemuan, dan menjaga ketepatan waktu kelas'
        ],
        startingProcessOverview: [
          'Tentukan satu topik yang paling dikuasai agar kualitas bimbingan terjaga',
          'Mulai dari 1–3 murid di lingkungan sekitar dengan jadwal tetap yang tidak mengganggu sekolah/kuliahmu',
          'Selalu sampaikan laporan singkat perkembangan belajar anak kepada orang tua secara jujur'
        ],
        challengesAndRisks: [
          'Murid sulit fokus atau cepat bosan, pembatalan jadwal mendadak, serta ekspektasi nilai instan dari orang tua'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan operasional dan biaya les berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_WRITING_TRANSLATION',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'bahasa_sastra',
    secondaryDomains: ['komunikasi_media', 'pendidikan'],
    name: 'Usaha Jasa Penulisan Konten, Sunting Naskah & Terjemahan Dasar',
    categoryLabel: 'Wirausaha Jasa Bahasa & Teks — Kerja Mandiri',
    shortDescription:
      'Menerima jasa penulisan artikel blog/deskripsi produk toko online, perbaikan tata bahasa dokumen, pengetikan rapi, atau penerjemahan teks ringan non-resmi sesuai pesanan.',
    characteristics: [
      'Berfokus pada ketepatan kata, ejaan yang enak dibaca, dan kemampuan menangkap maksud tulisan pemesan',
      'Cocok untuk yang gemar membaca, rapi menyusun kalimat, dan nyaman bekerja tenang memakai laptop',
      'Terjemahan pemula bersifat umum/komersial ringan — bukan terjemahan tersumpah untuk dokumen hukum negara'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.22,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 72,
      kebiasaan: 70,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 52
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_kreatif', 'minat_usaha'],
      gaya_berpikir: ['pikir_analitis', 'pikir_kreatif'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_individu', 'ling_kreatif'],
      kesiapan_praktis: ['siap_usaha', 'siap_studi']
    },
    supportingIndicators: ['creative_expression', 'analytical_depth', 'autonomy_independent'],
    requiredBasicSkills: [
      'Paham ejaan Bahasa Indonesia baku/komunikatif (serta bahasa asing jika menawarkan terjemahan) dan teliti menyunting typo'
    ],
    developableSkills: [
      'Menyesuaikan gaya tulisan dengan pembaca toko/artikel serta melakukan cek ulang fakta sebelum naskah dikirim'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu subsektor penerbitan/ekraf & SKKNI komputer; jasa terjemahan tersumpah atau naskah hukum tetap mensyaratkan penerjemah tersumpah resmi'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Standar tarif per kata/halaman serta syarat sertifikasi penerjemah resmi tidak dicantumkan'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Klasifikasi jasa kreatif penulisan & operasional komputer (Kepmenaker No. 56/2018) terverifikasi; penerjemahan dokumen resmi hukum/negara wajib memakai penerjemah tersumpah.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Penulisan Artikel/Deskripsi Produk, Penyuntingan & Terjemahan Ringan',
        productOrServiceOverview:
          'Menulis deskripsi produk marketplace, naskah konten/artikel ringan, merapikan ejaan naskah, atau menerjemahkan teks non-resmi.',
        problemOrNeedServed:
          'Membantu pemilik toko atau pembuat konten yang butuh tulisan jelas dan bebas salah ketik untuk mempromosikan usaha atau karyanya.',
        targetUsers: ['Pemilik toko online/UMKM', 'Penulis atau kreator konten yang butuh bantuan sunting'],
        requiredSkills: [
          'Penguasaan tata bahasa yang rapi, daya baca cepat, dan kejujuran untuk tidak menjiplak (bebas plagiarisme)'
        ],
        learnableSkills: [
          'Riset topik singkat yang akurat, menulis kalimat ajakan jualan yang alami, dan manajemen tenggat naskah'
        ],
        startingProcessOverview: [
          'Siapkan 3 contoh tulisan berbeda (misal: deskripsi produk, artikel tips singkat, dan contoh suntingan teks)',
          'Tawarkan penulisan deskripsi produk atau naskah profil usaha ke kenalan pemilik toko kecil',
          'Hindari menerima naskah yang melanggar hak cipta atau dokumen hukum yang menuntut penerjemah tersumpah'
        ],
        challengesAndRisks: [
          'Persaingan dengan layanan otomatis, revisi gaya bahasa yang sangat subjektif, dan tenggat yang mepet'
        ],
        resourceRequirementsNote:
          'Nominal kebutuhan perangkat & tarif jasa berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },

  // =========================================================================
  // 7. PERTANIAN, TANAMAN & LINGKUNGAN
  // =========================================================================
  {
    id: 'PROD_BIZ_AGRO_PLANTS',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'pertanian_lingkungan',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Usaha Bibit Tanaman Hias, Hidroponik Rumahan & Produk Segar Lokal',
    categoryLabel: 'Wirausaha Pertanian & Tanaman — Skala Pekarangan',
    shortDescription:
      'Menanam dan merawat bibit tanaman hias, sayuran hidroponik skala pekarangan, media tanam/kompos, atau menyalurkan hasil panen segar petani sekitar langsung ke pembeli rumah tangga.',
    characteristics: [
      'Menuntut ketelatenan merawat makhluk hidup setiap hari (menyiram, memantau hama, dan menakar nutrisi)',
      'Cocok bagi yang lebih nyaman bekerja di halaman terbuka dengan tanaman daripada di depan layar seharian',
      'Bisa dimulai dari lahan kecil di teras rumah atau kerja sama dengan petani lokal sekitar'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.14,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 64,
      kebiasaan: 72,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 56
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_eksploratif', 'minat_usaha'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik'],
      preferensi_lingkungan: ['ling_lapangan'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'enterprising_business'],
    requiredBasicSkills: [
      'Telaten merawat tanaman secara rutin, mengenal dasar media tanam, dan rapi mengemas bibit/sayur agar segar'
    ],
    developableSkills: [
      'Pencatatan jadwal panen/semai, perawatan hidroponik dasar, serta pemasaran ke tetangga atau warung sayur'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Rujukan umum pertanian/agribisnis & OSS UMK terverifikasi; hasil panen sangat dipengaruhi cuaca dan hama, serta estimasi modal belum tersedia'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Estimasi modal instalasi hidroponik/bibit, lahan minimum, serta perkiraan hasil panen tidak tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Kerangka umum agribisnis Kementan & NIB UMK OSS terverifikasi; perhitungan biaya instalasi, risiko gagal panen per tanaman, dan proyeksi keuntungan tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENTAN_AGRIBISNIS_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Budidaya Bibit Tanaman, Sayuran Pekarangan & Produk Tani Lokal',
        productOrServiceOverview:
          'Merawat bibit tanaman hias/bumbu dapur dalam pot, sayuran hidroponik skala kecil, atau menjual kembali sayur segar petani sekitar.',
        problemOrNeedServed:
          'Memenuhi minat warga kota/perumahan terhadap tanaman hias yang mudah dirawat maupun sayuran segar harian.',
        targetUsers: ['Ibu rumah tangga & penghobi tanaman sekitar', 'Warung makan atau toko sayur lokal'],
        requiredSkills: [
          'Konsistensi merawat tanaman setiap hari dan kejujuran menjelaskan cara rawat tanaman ke pembeli'
        ],
        learnableSkills: [
          'Teknik perbanyakan bibit sederhana, pencegahan hama ramah lingkungan, dan pengemasan tanaman aman dikirim'
        ],
        startingProcessOverview: [
          'Mulai dari 1–2 jenis tanaman yang perawatannya mudah dan cepat tumbuh di iklim setempat',
          'Manfaatkan wadah tanam yang ada dulu sebelum membeli rak atau pipa hidroponik mahal',
          'Sertakan kartu panduan singkat cara menyiram bagi pembeli pemula'
        ],
        challengesAndRisks: [
          'Tanaman layu atau terserang hama sebelum terjual, cuaca ekstrem, dan waktu tunggu panen'
        ],
        resourceRequirementsNote:
          'Nominal biaya bibit, media tanam, maupun perkiraan hasil usaha berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },

  // =========================================================================
  // PHASE 7.7 EXPANSION (+12 IDE WIRAUSAHA PEMULA — TOTAL 28)
  // =========================================================================
  {
    id: 'PROD_BIZ_WARUNG_KELONTONG',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Usaha Warung Kebutuhan Harian, Toko Kelontong & Jajanan Sekitar',
    categoryLabel: 'Wirausaha Perdagangan Harian — Skala Lingkungan',
    shortDescription:
      'Menyediakan bahan pokok kemasan kecil, minuman dingin, bumbu dapur, atau kebutuhan rumah tangga mendadak bagi tetangga sekitar, baik meneruskan usaha keluarga maupun merintis rak kecil di teras rumah.',
    characteristics: [
      'Perputaran barang cepat karena menjual kebutuhan yang dipakai warga hampir setiap hari',
      'Kunci keberhasilannya ada pada keramahtamahan, ketelitian mencatat uang laci, dan tidak menumpuk stok barang kedaluwarsa',
      'Cocok bagi yang senang bertemu tetangga langsung dan rapi mengatur susunan dagangan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.16,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 66,
      kebiasaan: 74,
      kemampuan_saat_ini: 58,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 60
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_sosial'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_tim'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['enterprising_business', 'structured_procedural', 'interpersonal_social'],
    requiredBasicSkills: [
      'Ketelitian menghitung kembalian tunai/QRIS, kejujuran pencatatan kas, dan sikap ramah melayani tetangga'
    ],
    developableSkills: [
      'Membedakan barang cepat laku vs lambat laku, memutar uang kulakan, dan mengecek tanggal kedaluwarsa rutin'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu NIB UMK OSS & pembinaan UMKM; estimasi modal awal toko maupun keuntungan harian berstatus belum tersedia'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Nominal modal kulakan barang, biaya rak/listrik kulkas, dan proyeksi omzet tidak tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Prosedur NIB UMK OSS & pembinaan KemenkopUKM terverifikasi; perhitungan modal barang, risiko utang pembeli, dan omzet tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Warung Kebutuhan Harian & Toko Kelontong Lingkungan',
        productOrServiceOverview:
          'Menjual bahan pokok eceran, air minum, sabun, serta jajanan harian dengan harga jelas dan pelayanan cepat dekat tempat tinggal.',
        problemOrNeedServed:
          'Memudahkan warga sekitar membeli kebutuhan mendadak tanpa harus pergi jauh ke pasar atau minimarket.',
        targetUsers: ['Tetangga sekitar rumah', 'Pengendara atau pelajar yang lewat sekitar lokasi'],
        requiredSkills: [
          'Kebersihan area jualan, ketelitian kasir harian, dan kedisiplinan memisahkan uang belanja pribadi dengan uang kulakan'
        ],
        learnableSkills: [
          'Negosiasi pemasok grosir terdekat, penataan barang menarik, serta catatan stok barang cepat habis'
        ],
        startingProcessOverview: [
          'Catat 10–15 barang kebutuhan harian yang paling sering dicari tetangga terdekat terlebih dulu',
          'Pisahkan dompet uang warung dan uang pribadi sejak hari pertama agar modal tidak terpakai tanpa sadar',
          'Tampilkan label harga rapi dan batasi sistem utang supaya perputaran belanja barang tidak macet'
        ],
        challengesAndRisks: [
          'Uang usaha terpakai untuk keperluan pribadi, barang rusak/kedaluwarsa, dan pembeli berutang terlalu lama'
        ],
        resourceRequirementsNote:
          'Nominal modal etalase, stok barang awal, maupun perkiraan laba berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_CLOTHING_RETAIL',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['seni_desain'],
    name: 'Usaha Toko Pakaian Harian, Aksesori & Busana Terkurasi',
    categoryLabel: 'Wirausaha Fashion & Ritel — Skala Pemula',
    shortDescription:
      'Memilih, memadupadankan, dan menjual pakaian harian, kaus, kerudung, atau pakaian preloved bersih terkurasi lewat media sosial maupun bazar akhir pekan tanpa menumpuk stok besar.',
    characteristics: [
      'Menggabungkan selera gaya berpakaian, ketelitian mengecek kualitas bahan kain, dan keaktifan promosi visual',
      'Cocok bagi yang senang memilih padu padan pakaian serta berinteraksi menjelaskan ukuran ke calon pembeli',
      'Bisa dimulai dari kurasi sedikit produk atau pre-order sesuai pesanan ukuran'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.16,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 68,
      kebiasaan: 70,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 56
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_kreatif', 'minat_sosial'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_langsung', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_tim'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['enterprising_business', 'creative_expression', 'interpersonal_social'],
    requiredBasicSkills: [
      'Peka terhadap kebersihan & kenyamanan bahan pakaian serta jujur menginformasikan ukuran asli barang'
    ],
    developableSkills: [
      'Foto produk pakaian yang jelas di cahaya alami, pencatatan stok ukuran/warna, dan pengemasan pengiriman rapi'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu kategori ekraf mode & OSS UMK; estimasi modal stok atau omzet berstatus belum tersedia'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Nominal modal belanja stok, biaya sewa stan bazar, maupun rata-rata keuntungan tidak tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Kerangka umum usaha mikro ekraf mode & NIB OSS terverifikasi; risiko tren fesyen cepat berganti dan nominal modal tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Penjualan Pakaian Harian & Busana Terkurasi',
        productOrServiceOverview:
          'Menjual pilihan pakaian santai, kerudung, atau busana layak pakai bersih dengan informasi ukuran detail dan foto nyata.',
        problemOrNeedServed:
          'Membantu pembeli mendapatkan pakaian nyaman dengan padu padan yang jelas tanpa bingung memilih di pasar besar.',
        targetUsers: ['Pelajar, mahasiswa, dan pekerja muda sekitar', 'Pembeli online lewat grup atau marketplace'],
        requiredSkills: [
          'Mengukur lingkar dada/panjang baju dengan meteran kain serta memeriksa cacat jahitan sebelum dijual'
        ],
        learnableSkills: [
          'Menata foto katalog rapi, memilih produk yang tidak cepat ketinggalan model, dan melayani tanya-jawab ukuran dengan sabar'
        ],
        startingProcessOverview: [
          'Fokus dulu pada 1 jenis produk spesifik (misal kaus polos, kerudung harian, atau jaket bersih) dalam jumlah sangat sedikit',
          'Foto produk dengan pencahayaan terang dan cantumkan ukuran sentimeter asli agar pembeli tidak kecewa',
          'Pastikan setiap barang bersih, wangi, dan dicek ulang kancing/resletingnya sebelum diserahkan'
        ],
        challengesAndRisks: [
          'Ukuran baju tidak cocok saat sampai di pembeli, stok model lama tertahan, dan persaingan harga ketat'
        ],
        resourceRequirementsNote:
          'Nominal biaya stok produk, gantungan/kemasan, maupun proyeksi omzet berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_TAILOR_ALTERATION',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'teknik_industri',
    secondaryDomains: ['seni_desain'],
    name: 'Usaha Jasa Jahit, Permak Pakaian & Perbaikan Tekstil Rumahan',
    categoryLabel: 'Wirausaha Keterampilan Tangan & Tekstil — Skala Rumahan',
    shortDescription:
      'Menerima jasa memotong panjang celana, mengecilkan seragam, memasang resleting/kancing, hingga menjahit tas kain atau seragam sederhana dari rumah berdasarkan pesanan pelanggan sekitar.',
    characteristics: [
      'Jasa yang selalu dibutuhkan keluarga dan anak sekolah (terutama perbaikan seragam, celana, dan pakaian kerja)',
      'Menuntut kesabaran mengukur pas badan, ketelitian jahitan lurus, serta menepati tanggal selesai pesanan',
      'Sangat relevan bagi siswa Tekstil maupun siapa saja yang telaten menjahit'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.16,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 76,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_kreatif', 'minat_usaha'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_praktik'],
      preferensi_lingkungan: ['ling_individu', 'ling_terstruktur'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'autonomy_independent'],
    requiredBasicSkills: [
      'Mampu mengoperasikan mesin jahit dasar secara aman, mengukur garis lurus dengan meteran, dan sabar mendedel jika melenceng'
    ],
    developableSkills: [
      'Menghitung kebutuhan benang/resleting, menangani bahan kain licin maupun tebal, dan mengatur antrean jahitan'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu kategori kriya/tekstil & OSS UMK; estimasi harga mesin jahit maupun tarif jasa tidak dicantumkan'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Harga mesin jahit/obras, biaya servis jarum, maupun daftar tarif permak standar tidak dicantumkan'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Rujukan umum usaha mikro kriya/tekstil & NIB OSS terverifikasi; rincian harga mesin, tarif jasa per item, dan omzet tidak tersedia.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Jahit Pemula, Permak Pakaian & Jahitan Seragam',
        productOrServiceOverview:
          'Menerima perbaikan ukuran pakaian (kelim celana, pasang resleting, jahit sobekan) serta pembuatan produk kain sederhana.',
        problemOrNeedServed:
          'Membantu warga atau pelajar yang bajunya kebesaran, rusak resleting, atau butuh seragam/tas kain sesuai ukuran.',
        targetUsers: ['Keluarga & tetangga sekitar rumah', 'Siswa sekolah dan pekerja kantor sekitar'],
        requiredSkills: [
          'Keterampilan menjahit rapi, ketelitian menandai ukuran pakai kapur jahit, dan komunikasi jelas soal batas waktu selesai'
        ],
        learnableSkills: [
          'Pola pakaian dasar, perawatan mesin jahit ringan (ganti jarum/minyak mesin), dan pencatatan nota jahitan'
        ],
        startingProcessOverview: [
          'Mulai dari jasa permak ringan yang paling sering dicari sekitar (kelim celana, ganti resleting, pasang badge sekolah)',
          'Berikan nota kecil berisi nama pemilik, jenis perbaikan, dan tanggal pengambilan agar baju tidak tertukar',
          'Uji coba dulu pada kain perca sebelum menjahit pakaian penting milik pelanggan'
        ],
        challengesAndRisks: [
          'Salah potong ukuran baju pelanggan, kerusakan bahan halus, dan antrean menumpuk menjelang tahun ajaran baru/lebaran'
        ],
        resourceRequirementsNote:
          'Nominal biaya mesin jahit, perlengkapan jahit, maupun tarif jasa berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_MINI_PRINT_ATK',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'administrasi_logistik',
    secondaryDomains: ['seni_desain'],
    name: 'Usaha Jasa Cetak Dokumen Mini, Penjilidan & Alat Tulis Sekolah',
    categoryLabel: 'Wirausaha Jasa Cetak & Perlengkapan Belajar',
    shortDescription:
      'Menyediakan jasa cetak tugas sekolah, cetak pas foto, laminating, penjilidan makalah, serta menyediakan stok kecil alat tulis dan kertas untuk pelajar maupun warga sekitar.',
    characteristics: [
      'Jasa harian yang dekat dengan kebutuhan pelajar, mahasiswa, dan warga yang mengurus formulir atau tugas',
      'Menuntut kerapian pengaturan margin cetak sebelum menekan tombol print agar kertas tidak terbuang',
      'Cocok bagi yang teliti, sabar melayani banyak orang bergantian, dan suka menjaga kerapian perlengkapan tulis'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.16,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 68,
      kebiasaan: 74,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_praktik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_terstruktur', 'ling_tim'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['structured_procedural', 'enterprising_business', 'hands_on_practical'],
    requiredBasicSkills: [
      'Mampu mengecek tampilan halaman (print preview) dokumen PDF/Word, menjaga keamanan privasi file pelanggan, dan teliti menghitung lembar cetak'
    ],
    developableSkills: [
      'Perawatan ringan printer (isi tinta, bersihkan head), penataan margin foto cetak, dan pencatatan stok kertas/ATK'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu NIB UMK OSS & operasional komputer SKKNI; biaya printer/tinta maupun tarif per lembar berstatus belum tersedia'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Harga perangkat printer/laminating, biaya kertas/tinta, serta tarif cetak tidak tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Prosedur NIB UMK OSS & kompetensi operasi komputer terverifikasi; estimasi biaya mesin cetak, perawatan, dan omzet tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Cetak Dokumen, Penjilidan & Alat Tulis Pemula',
        productOrServiceOverview:
          'Menerima cetak file tugas dari ponsel/flashdisk, cetak foto ukuran dokumen, jilid rapi, serta menyediakan pulpen, map, dan buku tulis.',
        problemOrNeedServed:
          'Membantu pelajar dan tetangga mencetak tugas atau formulir dengan cepat tanpa harus jauh ke pusat pertokoan.',
        targetUsers: ['Pelajar sekolah sekitar', 'Warga sekitar yang butuh cetak formulir atau surat lamaran'],
        requiredSkills: [
          'Pengaturan ukuran kertas (A4/F4), pengecekan ulang halaman sebelum print, dan menghapus file pribadi pelanggan setelah selesai dicetak'
        ],
        learnableSkills: [
          'Mengatasi kertas macet ringan pada printer, menjilid laporan rapi, dan mengatur stok ATK yang paling laku'
        ],
        startingProcessOverview: [
          'Mulai dari melayani cetak file tugas teman/tetangga memakai perangkat yang sudah ada dengan sistem kirim file lewat pesan',
          'Selalu minta pelanggan mengecek pratinjau halaman di layar sebelum dicetak dalam jumlah banyak',
          'Hapus file dokumen milik pelanggan segera setelah selesai dicetak demi menjaga keamanan data mereka'
        ],
        challengesAndRisks: [
          'Printer macet atau tinta tersumbat saat sedang ramai tugas, salah cetak karena format file berubah, dan penumpukan stok ATK lambat laku'
        ],
        resourceRequirementsNote:
          'Nominal biaya perangkat cetak, tinta, stok alat tulis, maupun tarif per lembar berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_JASTIP_PACKING',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'administrasi_logistik',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Usaha Jasa Titip Belanja Lokal (Jastip) & Pengemasan Kiriman Mikro',
    categoryLabel: 'Wirausaha Logistik Ringan & Jasa Titip — Skala Lokal',
    shortDescription:
      'Membantu tetangga, mahasiswa, atau pemilik UMKM lokal membelikan titipan barang tertentu saat pergi ke pasar/pusat kota atau membantu mengemas paket kiriman supaya aman sampai tujuan.',
    characteristics: [
      'Menuntut kejujuran tinggi atas uang titipan, ketelitian mencocokkan daftar belanja, dan jadwal pengantaran tepat waktu',
      'Cocok bagi yang gesit berbelanja, teliti mengecek daftar pesanan, dan rapi membungkus barang agar tidak rusak',
      'Dapat dimulai dengan sistem titip berbayar jasa tanpa menanggung stok barang sendiri'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.16,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 76,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 60
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_praktik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_terstruktur'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['structured_procedural', 'enterprising_business', 'hands_on_practical'],
    requiredBasicSkills: [
      'Kejujuran menyimpan struk belanja asli, ketelitian mengecek varian pesanan, dan keterampilan membungkus paket aman'
    ],
    developableSkills: [
      'Mengatur rute belanja hemat waktu, membuat checklist pesanan tanpa tertukar, dan komunikasi transparan saat barang kosong'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu NIB UMK OSS & rujukan logistik ringan; tarif jasa titip atau biaya kendaraan berstatus belum tersedia'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Tarif jasa titip, biaya bahan kemasan, maupun estimasi pendapatan tidak dicantumkan'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Prosedur NIB UMK OSS & konteks logistik mikro terverifikasi; perhitungan tarif, biaya bensin, dan penghasilan tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_LOGISTICS_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Titip Belanja Terjadwal & Bantuan Pengemasan Paket UMKM',
        productOrServiceOverview:
          'Menerima daftar titipan belanja terpercaya dengan bukti struk asli atau membantu pemilik usaha membungkus serta menempel resi paket harian.',
        problemOrNeedServed:
          'Menghemat waktu warga atau pemilik toko rumahan yang tidak sempat keluar berbelanja atau kewalahan membungkus kiriman.',
        targetUsers: ['Tetangga & keluarga sibuk', 'Pemilik usaha online rumahan yang butuh bantuan packing'],
        requiredSkills: [
          'Kejujuran mutlak soal harga asli + struk, ketelitian memeriksa barang rusak/kedaluwarsa, dan tepat janji jam antar'
        ],
        learnableSkills: [
          'Teknik membungkus barang pecah belah dengan aman dan penyusunan rekap pesanan per nama pemesan'
        ],
        startingProcessOverview: [
          'Tetapkan jadwal khusus belanja (misal 2 hari sekali ke pasar/toko tertentu) agar rute tetap efisien',
          'Minta daftar titipan tertulis lengkap beserta opsi pengganti jika barang yang dicari kosong',
          'Selalu serahkan barang bersama foto atau kertas struk belanja asli dan jelaskan ongkos jasanya di awal'
        ],
        challengesAndRisks: [
          'Barang habis di toko setelah terlanjur pergi, pemesan membatalkan mendadak, dan risiko barang rusak di jalan'
        ],
        resourceRequirementsNote:
          'Nominal tarif jasa titip, bahan dus/lakban, maupun hasil usaha berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_ADMIN_TYPING_SERVICE',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'administrasi_logistik',
    secondaryDomains: ['bahasa_sastra'],
    name: 'Usaha Jasa Pengetikan Umum, Perapian Dokumen & CV Pemula',
    categoryLabel: 'Wirausaha Jasa Administrasi & Dokumen Non-Hukum',
    shortDescription:
      'Membantu pelajar, pencari kerja pemula, atau pelaku usaha kecil mengetik ulang dokumen fisik, merapikan format makalah/tabel spreadsheet, dan menyusun tata letak daftar riwayat hidup (CV) yang rapi.',
    characteristics: [
      'Jasa berbasis ketelitian komputer perkantoran yang hanya membutuhkan laptop/komputer kerja dan kemampuan mengetik rapi',
      'Penting menjaga batas: hanya mengerjakan pengetikan & tata letak dokumen umum — BUKAN konsultasi hukum atau pemalsuan dokumen resmi',
      'Cocok bagi yang sangat rapi mengatur huruf, margin, tabel, serta teliti membaca salah ketik'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.18,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 70,
      kebiasaan: 76,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 56
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_akademik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_individu', 'ling_terstruktur'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['structured_procedural', 'autonomy_independent', 'analytical_depth'],
    requiredBasicSkills: [
      'Menguasai pengolah kata & spreadsheet dasar, ejaan bahasa Indonesia rapi, dan menjaga kerahasiaan data pribadi pemesan'
    ],
    developableSkills: [
      'Menyusun CV ATS-friendly yang jujur berbasis data asli pemesan, membuat daftar isi otomatis, dan konversi format PDF bersih'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu SKKNI Pengoperasian Komputer & NIB UMK; DILARANG membuat/mengubah dokumen resmi negara atau kontrak hukum tanpa kewenangan'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Standar tarif jasa ketik per halaman/paket CV maupun perkiraan pendapatan tidak tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Standar operasi aplikasi perkantoran (SKKNI No. 56/2018) & NIB OSS terverifikasi; bukan layanan konsultan hukum ataupun jasa pembuatan akta/surat resmi instansi.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Pengetikan Dokumen Umum, Perapian Format & Tata Letak CV',
        productOrServiceOverview:
          'Merapikan pengetikan berkas tugas/proposal, menata daftar isi/margin makalah, dan menyusun tata letak CV berbasis data asli pemiliknya.',
        problemOrNeedServed:
          'Membantu teman, pelamar kerja pemula, atau pedagang yang kesulitan menata format dokumen agar terbaca jelas dan rapi.',
        targetUsers: ['Pencari kerja lulusan baru', 'Pelajar dan pelaku UMKM yang butuh dokumen usaha rapi'],
        requiredSkills: [
          'Kecepatan dan akurasi mengetik, pemahaman format margin/spasi, serta etika menjaga kerahasiaan biodata klien'
        ],
        learnableSkills: [
          'Merancang beberapa variasi tata letak CV bersih yang mudah dibaca dan rumus spreadsheet rekap sederhana'
        ],
        startingProcessOverview: [
          'Buat 2 contoh hasil perapian dokumen (1 contoh CV pemula dengan data fiktif dan 1 contoh proposal/laporan rapi)',
          'Selalu pastikan seluruh isi riwayat di CV berasal langsung dari fakta pemiliknya, bukan mengarang pengalaman',
          'Tolak tegas permintaan mengetik ulang ijazah, surat keterangan dokter/instansi, atau berkas palsu dalam bentuk apa pun'
        ],
        challengesAndRisks: [
          'Permintaan revisi format berulang kali, tulisan tangan sumber yang sulit dibaca, dan tenggat mendadak'
        ],
        resourceRequirementsNote:
          'Nominal biaya perangkat kerja maupun tarif per halaman berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_BEVERAGE_SNACK_STALL',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'pariwisata_kuliner',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Usaha Kedai Minuman Segar, Racikan Kopi/Teh & Jajanan Ringan',
    categoryLabel: 'Wirausaha Minuman & Jajanan — Skala Pemula',
    shortDescription:
      'Meracik dan menjual minuman segar berbasis teh, kopi susu, cokelat, atau buah lokal beserta jajanan pendamping sederhana dengan takaran resep konsisten dan area saji yang bersih.',
    characteristics: [
      'Menuntut kecekatan tangan meracik pesanan, kebersihan es/gelas/peralatan yang terjaga, dan keramahan menyapa pembeli',
      'Cocok bagi yang senang meracik minuman dan suka suasana berjualan langsung bertemu banyak orang',
      'Bisa diuji dulu dari rumah dengan sistem titip warung atau pesan antar sekitar sebelum membuka stan khusus'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.16,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 66,
      kebiasaan: 72,
      kemampuan_saat_ini: 58,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_praktik', 'minat_sosial'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_tim'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['enterprising_business', 'hands_on_practical', 'interpersonal_social'],
    requiredBasicSkills: [
      'Menjaga higienitas air/es/wadah saji, konsisten menakar bahan resep dengan sendok/gelas ukur, dan ramah melayani antrean'
    ],
    developableSkills: [
      'Membuat varian menu andalan yang tidak terlalu banyak jenisnya, menjaga kesegaran bahan baku, dan menghitung harga pokok gelas'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu kategori ekraf kuliner & OSS UMK; usaha pangan kemasan berjangka wajib memperhatikan izin PIRT/Halal serta estimasi modal belum tersedia'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Nominal modal meja/booth, bahan baku minuman, maupun omzet harian tidak dicantumkan'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Klasifikasi subsektor kuliner & NIB OSS terverifikasi; perhitungan biaya bahan baku, sewa tempat, dan pendapatan harian tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Racikan Minuman Segar & Jajanan Harian Skala Kecil',
        productOrServiceOverview:
          'Menjual 3–5 varian minuman segar racikan sendiri dengan takaran pas dan kebersihan penyajian terjamin.',
        problemOrNeedServed:
          'Menyediakan pelepas dahaga yang bersih, segar, dan mudah dijangkau pelajar maupun pekerja sekitar.',
        targetUsers: ['Pelajar, warga sekitar, dan pekerja kantoran/bengkel terdekat'],
        requiredSkills: [
          'Kebersihan peralatan saji, konsistensi takaran resep agar rasa selalu sama, dan kecepatan melayani pembeli'
        ],
        learnableSkills: [
          'Penyimpanan bahan susu/buah agar tidak cepat basi serta pencatatan gelas terjual setiap hari'
        ],
        startingProcessOverview: [
          'Uji coba 2–3 resep minuman andalan dulu memakai takaran gram/mililiter pasti dan minta masukan rasa ke keluarga',
          'Gunakan es dan air matang yang jelas kebersihannya serta tutup kemasan dengan rapat',
          'Mulai dari sistem pre-order atau stan meja kecil saat acara sekolah/akhir pekan sebelum menyewa tempat permanen'
        ],
        challengesAndRisks: [
          'Sepi pembeli saat musim hujan, bahan cair/susu cepat basi jika salah simpan, dan persaingan kedai minuman padat'
        ],
        resourceRequirementsNote:
          'Nominal biaya gerobak/alat racik, bahan awal, maupun laba harian berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_PASTRY_CAKE_ORDER',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'pariwisata_kuliner',
    secondaryDomains: ['seni_desain'],
    name: 'Usaha Kue Basah, Roti Rumahan & Paket Snack Acara (Pre-Order)',
    categoryLabel: 'Wirausaha Kue & Bakery Rumahan — Berbasis Pesanan',
    shortDescription:
      'Membuat dan menerima pesanan kue basah tradisional, roti rumahan, brownies, atau paket snack box untuk rapat kantor, pengajian, ulang tahun keluarga, dan acara sekolah.',
    characteristics: [
      'Sistem pre-order (pesan lebih dulu) sangat membantu mengurangi risiko kue sisa tidak laku di hari biasa',
      'Menuntut ketepatan takaran timbangan dapur, manajemen waktu memanggang/mengukus subuh hari, dan penataan dus yang rapi',
      'Cocok bagi yang hobi membuat kue dan senang melihat hasil olahannya rapi tersaji di kotak acara'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.16,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 68,
      kebiasaan: 74,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_kreatif', 'minat_usaha'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_individu', 'ling_kreatif'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['hands_on_practical', 'creative_expression', 'structured_procedural'],
    requiredBasicSkills: [
      'Teliti menimbang bahan kue sesuai resep, menjaga kebersihan dapur, dan mampu bangun pagi menyiapkan pesanan tepat jam antar'
    ],
    developableSkills: [
      'Menyesuaikan resep untuk jumlah porsi banyak, menata paket isi 3–4 kue seimbang, dan menghitung bahan tanpa boros'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu kategori ekraf kuliner & NIB OSS; produk tahan lama wajib memenuhi ketentuan PIRT/Halal serta modal awal belum tersedia'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Biaya oven/mixer, harga bahan kue per loyang, maupun estimasi keuntungan per kotak tidak tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Klasifikasi kuliner UMKM & NIB OSS terverifikasi; perhitungan biaya peralatan dapur dan margin usaha tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Pembuatan Kue Rumahan & Paket Snack Kotak Berdasarkan Pesanan',
        productOrServiceOverview:
          'Menyiapkan kue basah, brownies, roti manis, atau paket kotak snack segar sesuai jumlah pesanan acara.',
        problemOrNeedServed:
          'Memenuhi kebutuhan panitia rapat, sekolah, atau keluarga akan suguhan kue segar yang rapi tanpa repot memasak sendiri.',
        targetUsers: ['Keluarga yang menggelar acara', 'Panitia kegiatan sekolah, komunitas, dan kantor sekitar'],
        requiredSkills: [
          'Keterampilan memanggang/mengukus stabil, kebersihan pengemasan plastik/dus, dan ketepatan jam pengiriman'
        ],
        learnableSkills: [
          'Membuka jadwal PO mingguan dengan kuota kapasitas dapur agar tidak kewalahan sendiri'
        ],
        startingProcessOverview: [
          'Pilih 2 jenis kue andalan yang proses pembuatannya paling kamu kuasai memakai oven/kukusan yang sudah ada di rumah',
          'Foto hasil potongan kue dengan pencahayaan terang dan tawarkan paket isi contoh ke acara keluarga/guru sekitar',
          'Tetapkan batas waktu pemesanan (misal minimal H-2) serta uang muka ringan untuk pembelian bahan segar'
        ],
        challengesAndRisks: [
          'Adonan bantat/gagal mengembang saat pesanan mendesak, listrik/gas habis mendadak, dan kelelahan fisik saat pesanan banyak'
        ],
        resourceRequirementsNote:
          'Nominal biaya peralatan dapur, bahan kue, maupun perkiraan laba berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_PHOTO_GRAD_STUDIO',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'komunikasi_media',
    secondaryDomains: ['seni_desain'],
    name: 'Usaha Jasa Foto Produk UMKM, Dokumentasi Acara Sekolah & Cetak Foto',
    categoryLabel: 'Wirausaha Jasa Visual & Dokumentasi — Skala Pemula',
    shortDescription:
      'Menyediakan jasa pemotretan katalog produk untuk usaha sekitar (makanan, pakaian, kerajinan), foto profil/wisuda sederhana, atau liputan dokumentasi kegiatan sekolah dan keluarga.',
    characteristics: [
      'Menggabungkan pemahaman pencahayaan & sudut gambar dengan komunikasi santai agar orang/produk terlihat natural',
      'Bisa memanfaatkan kamera ponsel beresolusi baik + reflektor cahaya sederhana maupun kamera DSLR/mirrorless yang ada',
      'Sangat relevan bagi siswa Broadcasting/Multimedia maupun siapa saja yang gemar memotret'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.18,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 70,
      kebiasaan: 68,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_usaha', 'minat_sosial'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_langsung', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_lapangan'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['creative_expression', 'interpersonal_social', 'enterprising_business'],
    requiredBasicSkills: [
      'Peka terhadap arah cahaya alami, komposisi frame yang rapi, dan kemampuan menyunting warna foto secukupnya'
    ],
    developableSkills: [
      'Menata properti foto produk makanan/barang sederhana, mengarahkan pose ramah, dan mencadangkan file foto ganda agar tidak hilang'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu kategori ekraf fotografi & SKKNI desain visual; harga kamera maupun tarif paket foto berstatus belum tersedia'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Harga kamera/lampu foto, biaya cetak, serta tarif sesi pemotretan tidak dicantumkan'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Klasifikasi subsektor fotografi ekraf & NIB OSS terverifikasi; rincian harga peralatan maupun paket tarif jasa tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_BCAST,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Foto Katalog UMKM & Dokumentasi Acara Ringan',
        productOrServiceOverview:
          'Memotret produk jualan tetangga agar tampak menggugah selera/menarik di marketplace serta mendokumentasikan acara kecil secara rapi.',
        problemOrNeedServed:
          'Membantu pemilik usaha kecil atau keluarga yang tidak sempat mengambil foto produk jernih dan momen acara dengan komposisi baik.',
        targetUsers: ['Pemilik usaha makanan/kriya sekitar', 'Siswa/keluarga pada momen acara sekolah atau syukuran'],
        requiredSkills: [
          'Penataan pencahayaan (jendela/lampu sederhana), ketelitian mengecek fokus gambar, dan menjaga izin privasi foto klien'
        ],
        learnableSkills: [
          'Menyusun album contoh foto sebelum-sesudah edit dan pengiriman file rapi lewat tautan cloud'
        ],
        startingProcessOverview: [
          'Latih memotret 3 jenis barang (makanan, minuman, aksesori) di dekat jendela pagi hari memakai alas kertas/kain polos',
          'Tawarkan uji coba foto katalog gratis 3–5 gambar ke satu pedagang kenalan untuk dijadikan contoh bukti hasil',
          'Selalu cadangkan (backup) hasil foto di dua tempat sebelum menyerahkan file agar tidak hilang mendadak'
        ],
        challengesAndRisks: [
          'Kartu memori error atau file terhapus, cahaya lokasi acara sangat gelap, dan selera warna pemesan berbeda'
        ],
        resourceRequirementsNote:
          'Nominal biaya kamera, properti latar foto, maupun tarif jasa berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_AGRO_PROCESSED',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'pertanian_lingkungan',
    secondaryDomains: ['pariwisata_kuliner', 'bisnis_ekonomi'],
    name: 'Usaha Pengolahan Hasil Tani Lokal, Keripik/Minuman Herbal & Oleh-Oleh Kemasan',
    categoryLabel: 'Wirausaha Olahan Pertanian & Pangan Lokal — Skala Mikro',
    shortDescription:
      'Mengolah hasil kebun atau petani sekitar (seperti singkong, pisang, jahe, kunyit, atau sayur lokal) menjadi camilan kering, bubuk minuman herbal, atau bumbu kemasan praktis yang lebih tahan lama.',
    characteristics: [
      'Memberi nilai tambah pada hasil tani segar supaya tidak cepat busuk saat panen melimpah',
      'Menuntut kebersihan proses pengolahan, pengemasan kedap udara agar tetap renyah/awet, dan kejelasan informasi komposisi',
      'Cocok bagi yang dekat dengan lingkungan pertanian/perkebunan lokal dan tertarik mengolah bahan alami'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.16,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 74,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_usaha'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_terstruktur'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['hands_on_practical', 'enterprising_business', 'structured_procedural'],
    requiredBasicSkills: [
      'Kebersihan pengupasan & pengolahan bahan alami, ketelitian pengeringan/pengemasan kedap udara, dan kerja sama jujur dengan petani pemasok'
    ],
    developableSkills: [
      'Pengurusan perizinan PIRT & sertifikasi Halal UMK secara resmi serta desain stiker label komposisi yang rapi'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu pembinaan UMK Kementan/KemenkopUKM & OSS; produk pangan olahan kemasan wajib memperhatikan izin edar PIRT/BPOM dan standar higiene'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Biaya alat pengering/sealer kemasan, harga bahan mentah petani, maupun estimasi omzet tidak tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Rujukan umum agribisnis olahan hasil tani & OSS NIB terverifikasi; perhitungan biaya produksi, izin PIRT per produk, dan laba usaha tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENTAN_AGRIBISNIS_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Pengolahan Hasil Tani Lokal menjadi Camilan & Oleh-Oleh Kemasan',
        productOrServiceOverview:
          'Mengolah bahan pertanian sekitar menjadi keripik, serbuk herbal hangat, atau bumbu kemasan praktis yang lebih awet dan siap jual.',
        problemOrNeedServed:
          'Membantu menyerap hasil panen petani lokal agar bernilai jual lebih tinggi sekaligus menyediakan oleh-oleh praktis khas daerah.',
        targetUsers: ['Keluarga sekitar & peminat camilan alami', 'Toko oleh-oleh, warung kopi, atau pembeli online'],
        requiredSkills: [
          'Keterampilan memasak/mengeringkan bahan secara konsisten, kerapian segel kemasan, dan pencatatan tanggal produksi'
        ],
        learnableSkills: [
          'Pengurusan NIB & PIRT pangan rumah tangga sesuai prosedur pemerintah serta pemilahan mutu bahan baku'
        ],
        startingProcessOverview: [
          'Pilih 1 hasil tani yang melimpah dan mudah didapat di sekitar tempat tinggalmu',
          'Uji coba kemasan plastik klip/pouch kecil dengan penyegelan rapat untuk memeriksa daya tahan kerenyahan dalam 1–2 minggu',
          'Cantumkan komposisi bahan dan tanggal pembuatan dengan jelas serta pelajari alur NIB/PIRT dari dinas terkait sebelum produksi massal'
        ],
        challengesAndRisks: [
          'Harga bahan mentah naik-turun sesuai musim panen, produk melempem atau berjamur jika pengemasan kurang rapat, dan syarat izin edar pangan'
        ],
        resourceRequirementsNote:
          'Nominal biaya alat olah/sealer, bahan baku, maupun perkiraan penghasilan berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_CREATIVE_WORKSHOP_CLASS',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'pendidikan',
    secondaryDomains: ['seni_desain', 'psikologi_sosial'],
    name: 'Usaha Kelas Hobi Kreatif Anak, Klub Membaca & Kegiatan Belajar Akhir Pekan',
    categoryLabel: 'Wirausaha Edukasi Non-Formal & Kreativitas — Skala Komunitas',
    shortDescription:
      'Menyelenggarakan kelas kecil akhir pekan atau liburan sekolah untuk anak-anak sekitar — seperti kelas menggambar dasar, kerajinan kertas/origami, klub membaca cerita, atau permainan logika menyenangkan (non-formal).',
    characteristics: [
      'Menekankan suasana belajar santai yang membangun rasa ingin tahu anak, berbeda dari les ujian sekolah yang kaku',
      'Cocok bagi yang sabar mendampingi anak kecil, suka membuat kegiatan prakarya/permainan edukatif, dan mampu berkoordinasi dengan orang tua',
      'Bukan sekolah formal maupun lembaga pemberi ijazah resmi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.18,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 70,
      kebiasaan: 70,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 54
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_kreatif', 'minat_usaha'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_tim', 'ling_kreatif'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['interpersonal_social', 'creative_expression', 'enterprising_business'],
    requiredBasicSkills: [
      'Kesabaran tinggi berhadapan dengan anak, ketelitian menjaga keamanan alat prakarya (gunting tumpul/lem aman), dan komunikasi jelas kepada orang tua'
    ],
    developableSkills: [
      'Menyusun susunan acara kegiatan 60 menit yang seru tanpa membuat anak bosan dan mengelola kelompok kecil 4–6 anak'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu kerangka kegiatan pendampingan non-formal & ekraf; bukan satuan pendidikan formal atau pemberi ijazah/sertifikat guru (PPG)'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Biaya perlengkapan prakarya/buku, sewa tempat jika di luar rumah, maupun besaran iuran kegiatan tidak tersedia'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Kerangka kegiatan komunitas/edukasi nonformal & NIB OSS terverifikasi; bukan penyelenggaraan sekolah formal yang mensyaratkan izin satuan pendidikan dan guru bersertifikat PPG.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_PENDAMPING_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Kelas Hobi Kreatif, Klub Membaca & Prakarya Akhir Pekan (Non-Formal)',
        productOrServiceOverview:
          'Membuka sesi kegiatan kreatif berdurasi singkat (menggambar, origami, bercerita, atau eksperimen sains aman) untuk anak sekitar di luar jam sekolah.',
        problemOrNeedServed:
          'Memberi alternatif aktivitas positif bagi anak agar tidak terus-terusan menatap layar gawai di akhir pekan.',
        targetUsers: ['Orang tua anak usia SD sekitar lingkungan rumah/perumahan'],
        requiredSkills: [
          'Sikap ramah dan penuh perhatian terhadap keselamatan anak, persiapan bahan prakarya rapi, serta laporan singkat ke orang tua setelah sesi selesai'
        ],
        learnableSkills: [
          'Variasi permainan kelompok kreatif dan pengelolaan jadwal kelas kecil akhir pekan yang konsisten'
        ],
        startingProcessOverview: [
          'Rancang 1 tema kegiatan berdurasi 60 menit (misalnya membuat pembatas buku bergambar & membaca cerita bersama)',
          'Uji coba dulu dengan keponakan atau 3–4 anak tetangga terdekat di ruang keluarga yang aman dan terang',
          'Gunakan alat dan bahan yang aman bagi anak serta kirimkan foto hasil karya anak ke orang tua mereka setelah acara selesai'
        ],
        challengesAndRisks: [
          'Menjaga fokus anak yang mudah bosan, keamanan penggunaan alat prakarya, dan kehadiran peserta yang naik-turun saat musim liburan'
        ],
        resourceRequirementsNote:
          'Nominal biaya perlengkapan kertas/krayon maupun biaya iuran kegiatan berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  },
  {
    id: 'PROD_BIZ_DEVICE_CLEAN_CARE',
    isSimulationFixture: false,
    pathCategory: 'wirausaha',
    domainId: 'teknik_industri',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Usaha Jasa Cuci Sepatu, Cuci Helm & Perawatan Kebersihan Perlengkapan Harian',
    categoryLabel: 'Wirausaha Jasa Perawatan Barang Harian — Skala Rumahan',
    shortDescription:
      'Menerima jasa pembersihan, pengeringan aman, dan perawatan berkala barang yang sering dipakai warga sehari-hari (seperti sepatu kain/kulit, helm motor, tas ransel, atau pembersihan debu luar kipas/alat rumah tangga).',
    characteristics: [
      'Jasa praktis yang terus dibutuhkan karena pelajar, pengendara motor, dan pekerja butuh perlengkapan bersih namun sering tidak sempat mencuci sendiri',
      'Menuntut ketelitian memilih sikat/sabun sesuai bahan agar warna tidak luntur atau busa helm tidak rusak',
      'Cocok bagi yang suka kerja nyata dengan tangan, melihat hasil bersih yang langsung terlihat, dan teliti merawat barang'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.16,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 66,
      kebiasaan: 74,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 58
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_usaha'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_individu'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'enterprising_business'],
    requiredBasicSkills: [
      'Membedakan bahan kain, suede, kulit sintetis, atau kaca helm agar tidak tergores saat dibersihkan serta menandai barang agar tidak tertukar'
    ],
    developableSkills: [
      'Teknik pengeringan cepat tanpa sinar matahari langsung yang merusak lem sepatu dan foto dokumentasi kondisi barang sebelum-sesudah'
    ],
    requirementsOrConstraints: [
      'Status Sebagian Terverifikasi: Mengacu pembinaan usaha jasa mikro UMK & OSS; estimasi modal sabun/pengering maupun tarif per pasang tidak tersedia'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Biaya cairan pembersih khusus, sikat, alat pengering, maupun tarif jasa per item tidak dicantumkan'
    ],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Prosedur NIB UMK OSS & pembinaan jasa mikro terverifikasi; perhitungan biaya bahan pembersih dan potensi penghasilan tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT,
        CATALOG_SOURCE_REGISTRY.SRC_OSS_NIB_UMK
      ],
      entrepreneurshipDetail: {
        businessConceptName: 'Jasa Perawatan Kebersihan Sepatu, Helm & Tas Harian',
        productOrServiceOverview:
          'Membersihkan sepatu sekolah/olahraga, bagian dalam helm, dan tas harian menggunakan teknik sikat lembut dan pengeringan aman.',
        problemOrNeedServed:
          'Membantu pelajar dan pengendara menjaga kebersihan barang pakai hariannya tanpa merusak bahan atau lem akibat cuci sembarangan.',
        targetUsers: ['Pelajar sekolah & mahasiswa sekitar', 'Pengendara motor dan pekerja kantoran sekitar'],
        requiredSkills: [
          'Ketelitian memeriksa kondisi awal barang sebelum dicuci, kesabaran membersihkan sela sempit, dan penandaan label nama yang rapi'
        ],
        learnableSkills: [
          'Menangani noda membandel secara aman, mengatur antrean jemur saat musim hujan, dan pengemasan rapi saat pengembalian'
        ],
        startingProcessOverview: [
          'Praktikkan dulu pada 2–3 pasang sepatu dan helm milik sendiri atau keluarga dengan memfoto bagian sebelum dan sesudah dibersihkan',
          'Selalu foto kondisi barang (jika ada sobekan atau lem sudah terbuka) bersama pemilik saat barang diterima agar terhindar dari salah paham',
          'Mulai buka layanan antar-ambil sekitar perumahan atau sekolah tanpa perlu menyewa ruko dulu'
        ],
        challengesAndRisks: [
          'Pengeringan melambat saat musim hujan, risiko warna kain luntur atau lem sepatu lama lepas, dan klaim kerusakan jika kondisi awal tidak difoto'
        ],
        resourceRequirementsNote:
          'Nominal biaya sikat, cairan pembersih, rak pengering, maupun tarif jasa berstatus belum tersedia.',
        capitalAmountStatus: 'belum_tersedia'
      }
    }
  }
];
