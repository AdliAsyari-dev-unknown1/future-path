/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7.3: Expanded Production Catalog — Jalur Bekerja (22 Concrete Occupational Fields)
 *
 * Strictly general occupational descriptions & competencies without active job
 * listings, company names, salary claims, or fabricated SKKNI decree numbers.
 * Roles requiring formal higher education/licensure (e.g., Advocate, Clinical Nurse,
 * Formal School Teacher) include explicit qualification notices.
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

export const PRODUCTION_WORK_CATALOG: RecommendationCandidate[] = [
  {
    id: 'PROD_JOB_TECH_SYS',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'teknologi_informatika',
    secondaryDomains: ['teknik_industri'],
    name: 'Teknisi Jaringan Komputer & IT Support Perangkat',
    categoryLabel: 'Teknis Komputer & Jaringan',
    shortDescription:
      'Memasang Wi-Fi dan jaringan kabel, merawat komputer kantor agar tidak bermasalah, serta membantu pengguna mengatasi gangguan perangkat (gambaran bidang kerja, bukan lowongan aktif).',
    characteristics: [
      'Memasang router atau kabel jaringan lokal dan mengecek koneksi internet kantor/sekolah',
      'Mengecek komputer atau perangkat kerja yang error dan memulihkan pengaturannya',
      'Mencatat riwayat perbaikan perangkat dan menjaga keamanan akses dasar'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.18,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.22,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 70,
      kebiasaan: 70,
      kemampuan_saat_ini: 66,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_teknis', 'ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['technical_affinity', 'hands_on_practical', 'structured_procedural'],
    requiredBasicSkills: [
      'Pemasangan dasar komputer, jaringan Wi-Fi/kabel, dan pengecekan perangkat keras',
      'Ketelitian membaca panduan kerja dan menelusuri penyebab gangguan'
    ],
    developableSkills: [
      'Pengaturan server jaringan dasar, keamanan akun kantor, dan pencatatan inventaris perangkat IT'
    ],
    requirementsOrConstraints: [
      'Gambaran bidang pekerjaan umum, bukan pengumuman lowongan kerja aktif',
      'Syarat melamar dan sertifikasi tambahan ditentukan masing-masing tempat kerja'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: [
      'Daftar lowongan kerja aktif dan nominal gaji per perusahaan tidak dicantumkan'
    ],
    contextRelatedMajors: ['TKJ', 'RPL/PPLG', 'Elektro'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Terverifikasi pada cakupan SKKNI Jaringan Komputer & Pengoperasian Komputer; tidak memuat lowongan kerja aktif maupun nominal gaji.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_NET,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Teknisi Jaringan Komputer & IT Support Perangkat',
        activityOverview:
          'Memasang perangkat Wi-Fi/jaringan kabel serta merawat komputer dan perlengkapan IT kantor agar operasional kerja tetap lancar.',
        generalResponsibilities: [
          'Memasang kabel/perangkat jaringan dan memastikan koneksi internet berjalan stabil',
          'Mengecek komputer, printer, atau perangkat kerja yang error lalu memperbaikinya',
          'Menjaga keamanan akses akun dasar dan mencatat pekerjaan perbaikan harian'
        ],
        requiredCompetencies: [
          'Paham dasar cara kerja jaringan komputer, sistem operasi, dan perakitan PC',
          'Teliti mengikuti langkah pemeriksaan dan sabar membantu pengguna'
        ],
        beginnerLearnableSkills: [
          'Konfigurasi router dasar, manajemen akses jaringan lokal, dan perawatan rutin perangkat'
        ],
        educationOrTrainingNotes:
          'Selaras dengan kompetensi dasar SMK bidang TJKT/TKJ dan PPLG/RPL serta SKKNI No. 321/2016.',
        workEnvironments: ['Ruang server, tim IT kantor/sekolah, atau penyedia layanan internet'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_WEB_DEV_JUNIOR',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'teknologi_informatika',
    secondaryDomains: ['seni_desain'],
    name: 'Pengembang Web, Aplikasi Pemula & Penguji Kualitas (QA)',
    categoryLabel: 'Pemrograman & Pengembangan Aplikasi',
    shortDescription:
      'Menulis kode tampilan atau fitur aplikasi web/mobile sederhana, memperbaiki bug program, dan menguji alur aplikasi sebelum dipakai pengguna (bukan lowongan aktif).',
    characteristics: [
      'Menulis dan merapikan kode program web/aplikasi sesuai rancangan fitur',
      'Mencoba setiap tombol dan alur aplikasi untuk menemukan error atau bug sebelum rilis',
      'Bekerja dengan catatan tugas fitur, basis data dasar, dan contoh portofolio proyek'
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
      gaya_berpikir: 74,
      kebiasaan: 68,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_akademik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_kerja', 'siap_studi']
    },
    supportingIndicators: ['technical_affinity', 'analytical_depth', 'structured_procedural'],
    requiredBasicSkills: [
      'Dasar logika pemrograman, pembuatan halaman web/aplikasi, dan pelacakan error',
      'Sabar menguji fitur satu per satu dan membaca dokumentasi kode'
    ],
    developableSkills: [
      'Pengelolaan basis data, penulisan kode tim yang rapi, dan penyusunan portofolio aplikasi'
    ],
    requirementsOrConstraints: [
      'Gambaran bidang pekerjaan umum; perusahaan biasanya meminta contoh karya atau tes praktik coding sederhana'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: [
      'Lowongan kerja spesifik, syarat bahasa pemrograman tiap kantor, dan nominal gaji tidak dicantumkan'
    ],
    contextRelatedMajors: ['RPL/PPLG', 'TKJ'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu pada SKKNI Pemrograman dan Spektrum PPLG/RPL SMK; standar teknologi tiap perusahaan berbeda.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_SW,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Pengembang Web/Aplikasi Pemula & Quality Assurance (QA)',
        activityOverview:
          'Membangun fitur aplikasi atau situs web sederhana, mengelola database dasar, dan menguji aplikasi agar bebas error saat dipakai.',
        generalResponsibilities: [
          'Membuat tampilan antarmuka atau logika fungsi program sesuai daftar kebutuhan',
          'Menguji fitur aplikasi dan mencatat temuan error agar segera diperbaiki tim',
          'Memelihara pembaruan kode dan dokumentasi singkat perubahan fitur'
        ],
        requiredCompetencies: [
          'Logika pemrograman dasar, pemahaman HTML/CSS/pemrograman terstruktur, dan ketelitian debugging'
        ],
        beginnerLearnableSkills: [
          'Pengujian aplikasi otomatis/manual dasar, pengelolaan basis data, dan kerja tim berbasis repositori kode'
        ],
        educationOrTrainingNotes:
          'Selaras dengan SKKNI Pemrograman (Kepmenaker No. 282/2016) dan kompetensi SMK PPLG/RPL.',
        workEnvironments: ['Tim pengembang aplikasi, studio perangkat lunak, atau divisi IT perusahaan'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_FIELD_OPS',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'teknik_industri',
    name: 'Teknisi Bengkel, Perawatan Mesin & Operator Produksi',
    categoryLabel: 'Praktik Alat, Otomotif & Manufaktur',
    shortDescription:
      'Servis kendaraan bermotor, merawat mesin bengkel/pabrik, pengelasan, atau mengoperasikan mesin produksi sesuai aturan keselamatan kerja (bukan lowongan aktif).',
    characteristics: [
      'Banyak bergerak aktif langsung dengan perkakas tangan, alat ukur, atau mesin produksi',
      'Menjaga mesin dan kendaraan tetap aman dipakai lewat cek rutin dan ganti suku cadang',
      'Mengikuti urutan kerja standar dan perlengkapan keselamatan kerja (K3)'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.16,
      gaya_berpikir: 0.14,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.14
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 66,
      kebiasaan: 74,
      kemampuan_saat_ini: 68,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 74
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_teknis'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural'],
    requiredBasicSkills: [
      'Terbiasa memakai perkakas bengkel atau mesin dasar dan membaca ukuran gambar kerja',
      'Disiplin memakai alat pelindung diri dan menjaga kebersihan area kerja'
    ],
    developableSkills: [
      'Mendeteksi kerusakan kelistrikan/mesin kendaraan, pengoperasian mesin CNC, atau kontrol lini pabrik'
    ],
    requirementsOrConstraints: [
      'Pekerjaan dilakukan sambil bergerak aktif di bengkel/area produksi; aturan tes fisik berbeda tiap tempat kerja'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak memuat lowongan bengkel/pabrik spesifik atau besaran upah'],
    contextRelatedMajors: ['Mesin', 'Otomotif', 'Elektro', 'Tekstil'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Kompetensi mengacu pada SKKNI Otomotif & Manufaktur; detail lowongan per perusahaan tidak dicantumkan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_AUTO,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_MFG,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Teknisi Bengkel Otomotif, Mekanik & Operator Mesin Produksi',
        activityOverview:
          'Menjalankan servis berkala kendaraan atau mesin, mengoperasikan mesin produksi/perkakas, dan memperbaiki komponen mekanik dasar.',
        generalResponsibilities: [
          'Mengecek kondisi rutin kendaraan atau mesin serta mengganti komponen yang aus',
          'Mengoperasikan mesin kerja atau perkakas bengkel sesuai ukuran gambar tugas',
          'Menjalankan aturan keselamatan kerja dan merapikan peralatan sesudah dipakai'
        ],
        requiredCompetencies: [
          'Keterampilan praktik alat bengkel atau permesinan dasar serta ketelitian membaca alat ukur'
        ],
        beginnerLearnableSkills: [
          'Pengecekan kelistrikan kendaraan modern, teknik las terstandar, dan penggunaan mesin CNC'
        ],
        educationOrTrainingNotes:
          'Mengacu pada SKKNI Kepmenaker No. 97/2018, No. 179/2020, dan No. 109/2018.',
        workEnvironments: ['Bengkel motor/mobil, workshop pemesinan, atau area lini produksi pabrik'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_ELEC_MAINT',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'teknik_industri',
    secondaryDomains: ['teknologi_informatika'],
    name: 'Teknisi Kelistrikan, Panel Elektronika & Perawatan Gedung',
    categoryLabel: 'Kelistrikan & Elektronika Praktis',
    shortDescription:
      'Memasang dan merawat panel listrik, sensor alat kerja, pendingin ruangan, atau perangkat elektronika dasar dengan standar keselamatan kelistrikan (bukan lowongan aktif).',
    characteristics: [
      'Membaca diagram kabel/rangkaian dan memeriksa tegangan dengan alat ukur multimeter',
      'Merawat instalasi listrik, sakelar, lampu, atau panel kontrol peralatan agar aman dipakai',
      'Mentaati prosedur keselamatan kerja listrik saat memeriksa maupun mengganti komponen'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.18,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.2,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 70,
      kebiasaan: 74,
      kemampuan_saat_ini: 68,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_teknis', 'ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['technical_affinity', 'hands_on_practical', 'structured_procedural'],
    requiredBasicSkills: [
      'Dasar pengukuran listrik/elektronika, penyolderan komponen, dan membaca skema kabel'
    ],
    developableSkills: [
      'Pemeliharaan panel kontrol otomasi dasar dan sertifikasi keselamatan kerja listrik (K3)'
    ],
    requirementsOrConstraints: [
      'Memerlukan ketelitian tinggi terhadap keselamatan arus listrik dan kerapian instalasi'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Sertifikat instalasi khusus atau persyaratan proyek tertentu diatur terpisah'],
    contextRelatedMajors: ['Elektro', 'Mesin', 'Otomotif'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu pada spektrum SMK Elektronika dan rujukan umum direktori SKKNI otomasi/elektronika; syarat sertifikasi ketenagalistrikan berizin diatur terpisah.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_SECTOR_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Teknisi Kelistrikan, Panel Elektronika & Perawatan Peralatan',
        activityOverview:
          'Memeriksa rangkaian listrik/elektronika, memasang komponen dasar, dan merawat sistem kelistrikan peralatan atau gedung.',
        generalResponsibilities: [
          'Mengecek sambungan kabel, sekering, dan panel listrik memakai alat ukur standar',
          'Mengganti komponen elektronika atau sakelar yang rusak sesuai prosedur aman',
          'Mencatat jadwal pengecekan berkala dan temuan kerusakan peralatan'
        ],
        requiredCompetencies: [
          'Pemahaman dasar arus listrik, alat ukur kelistrikan, dan kepatuhan standar K3'
        ],
        beginnerLearnableSkills: [
          'Pembacaan panel kontrol otomasi dan pemeriksaan kerusakan sistem pendingin/elektronika'
        ],
        educationOrTrainingNotes:
          'Dekat dengan bekal SMK Teknik Elektronika; instalasi listrik bertegangan tertentu memerlukan sertifikat kompetensi resmi.',
        workEnvironments: ['Ruang panel gedung, workshop servis elektronika, atau lini fasilitas pabrik'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_DIGITAL_CREATIVE',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'seni_desain',
    secondaryDomains: ['komunikasi_media'],
    name: 'Desainer Grafis, Editor Video & Kru Produksi Konten',
    categoryLabel: 'Karya Visual & Produksi Media',
    shortDescription:
      'Membuat desain poster, katalog produk, mengedit video, mengoperasikan kamera/audio, dan menata materi visual untuk media informasi atau promosi (bukan lowongan aktif).',
    characteristics: [
      'Mengubah pesan menjadi poster, slide, foto produk, atau video yang rapi dan menarik',
      'Bekerja memakai software desain grafis/editing video serta perangkat kamera atau audio dasar',
      'Sering menerima masukan revisi tampilan dari rekan tim maupun atasan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.2,
      kebiasaan: 0.14,
      kemampuan_saat_ini: 0.2,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 72,
      kebiasaan: 64,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_sosial'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_mandiri', 'biasa_kolaboratif', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_usaha']
    },
    supportingIndicators: ['creative_expression', 'interpersonal_social'],
    requiredBasicSkills: [
      'Peka terhadap warna, huruf, tata letak, atau dasar pengambilan gambar dan edit video'
    ],
    developableSkills: [
      'Menyusun portofolio karya rapi, bekerja sesuai brief desain, dan menjaga aturan hak cipta aset'
    ],
    requirementsOrConstraints: [
      'Biasanya diminta menunjukkan contoh hasil desain, foto, atau video yang pernah dibuat'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Standar perangkat lunak kantor tertentu dan daftar lowongan tidak tersedia'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'RPL/PPLG', 'Tekstil'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Mengacu pada SKKNI Desain Grafis/DKV (No. 126/2023) dan Penyiaran (No. 352/2014 & No. 111/2018); tanpa lowongan aktif.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_DKV,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_BCAST,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Desainer Grafis, Editor Video & Kru Produksi Konten',
        activityOverview:
          'Membuat materi visual seperti poster, foto produk, tampilan media sosial, dan video informasi sesuai kebutuhan acara atau usaha.',
        generalResponsibilities: [
          'Membaca permintaan desain/konten lalu membuat rancangan visual atau naskah visualnya',
          'Mengambil gambar/rekaman sederhana serta mengedit video, suara, atau layout grafis',
          'Merevisi karya sesuai masukan dan menyimpan file siap cetak atau siap unggah'
        ],
        requiredCompetencies: [
          'Kepekaan komposisi warna/tata letak dan penguasaan aplikasi edit gambar atau video dasar'
        ],
        beginnerLearnableSkills: [
          'Penulisan naskah visual singkat, manajemen aset file desain, dan etika hak cipta media'
        ],
        educationOrTrainingNotes:
          'Selaras dengan SKKNI Kepmenaker No. 126/2023 (DKV) dan SKKNI Penyiaran.',
        workEnvironments: ['Studio kreatif, tim dokumentasi acara, bagian promosi usaha, atau percetakan'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_OFFICE_ADMIN',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'administrasi_logistik',
    secondaryDomains: ['bisnis_ekonomi'],
    name: 'Staf Administrasi Kantor, Jadwal & Data Operasional',
    categoryLabel: 'Administrasi & Data Rapi',
    shortDescription:
      'Menginput data laporan harian ke spreadsheet/aplikasi kantor, merapikan arsip surat, menyusun jadwal rapat/pengiriman, dan memastikan dokumen lengkap (bukan lowongan aktif).',
    characteristics: [
      'Mengetik dokumen, merekap angka atau daftar hadir di spreadsheet secara teliti',
      'Menyimpan berkas fisik dan file digital di folder yang jelas agar gampang dicari',
      'Berkoordinasi rapi dengan bagian lain supaya catatan dan jadwal tidak bentrok'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.16,
      gaya_berpikir: 0.18,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 64,
      gaya_berpikir: 68,
      kebiasaan: 76,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_akademik', 'minat_usaha'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['structured_procedural', 'analytical_depth'],
    requiredBasicSkills: [
      'Penguasaan aplikasi pengolah kata, spreadsheet dasar, dan ketelitian memeriksa angka/teks'
    ],
    developableSkills: [
      'Pengelolaan arsip digital rapi, rumus rekap data spreadsheet, dan korespondensi kantor formal'
    ],
    requirementsOrConstraints: [
      'Pekerjaan duduk di depan layar komputer dan membutuhkan ketelitian jangka panjang terhadap dokumen'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan lowongan admin spesifik atau besaran upah'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Terverifikasi pada cakupan SKKNI Pengoperasian Komputer; tidak memuat lowongan perusahaan tertentu.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS],
      workDetail: {
        fieldName: 'Staf Administrasi Kantor, Entri Data & Jadwal Operasional',
        activityOverview:
          'Membantu merapikan surat-menyurat, mencatat data harian di komputer, menyusun jadwal kegiatan, dan menjaga keteraturan arsip kerja.',
        generalResponsibilities: [
          'Memasukkan data operasional harian ke tabel spreadsheet atau sistem administrasi kantor',
          'Menyiapkan surat, daftar hadir, dan arsip dokumen fisik maupun file digital',
          'Mengecek kelengkapan dokumen agar tidak ada jadwal atau berkas yang terlewat'
        ],
        requiredCompetencies: [
          'Menggunakan aplikasi perkantoran dasar dengan rapi serta teliti mengecek ulang catatan'
        ],
        beginnerLearnableSkills: [
          'Pembuatan rekap tabel otomatis sederhana dan tata kelola arsip digital kantor'
        ],
        educationOrTrainingNotes:
          'Selaras dengan SKKNI Bidang Pengoperasian Komputer (Kepmenaker No. 56/2018); terbuka bagi lulusan semua jurusan.',
        workEnvironments: ['Ruang administrasi sekolah, kantor usaha, klinik, atau bagian operasional'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_FINANCE_CLERK',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Staf Pembukuan Pemula, Kasir Keuangan & Rekap Transaksi',
    categoryLabel: 'Keuangan & Pencatatan Bisnis',
    shortDescription:
      'Mencatat pemasukan dan pengeluaran harian usaha, memeriksa bukti nota pembayaran, menyusun rekap tagihan sederhana, dan menjaga kas tetap seimbang (bukan lowongan aktif).',
    characteristics: [
      'Teliti mencocokkan angka nota, bukti transfer, dan laporan kas harian',
      'Bekerja rutin dengan tabel perhitungan keuangan dasar dan arsip faktur',
      'Jujur dan disiplin menjaga kerahasiaan data transaksi tempat kerja'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.2,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 66,
      gaya_berpikir: 72,
      kebiasaan: 78,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_akademik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['structured_procedural', 'analytical_depth', 'enterprising_business'],
    requiredBasicSkills: [
      'Berhitung akurat, mengoperasikan spreadsheet perhitungan, dan teliti memeriksa bukti transaksi'
    ],
    developableSkills: [
      'Pemahaman dasar laporan laba-rugi sederhana dan aplikasi pembukuan UMKM'
    ],
    requirementsOrConstraints: [
      'Catatan: Peran pemula hanya untuk pencatatan kas/transaksi dasar; profesi Akuntan Publik atau Analis Keuangan formal membutuhkan kuliah D3/S1 Akuntansi dan sertifikasi.'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Syarat latar belakang pendidikan keuangan tiap perusahaan dapat berbeda'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Merujuk ke direktori SKKNI pengoperasian komputer dan rujukan umum pencatatan keuangan; posisi akuntan/auditor profesional mensyaratkan kuliah Akuntansi.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_KEUANGAN_ADMIN_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS
      ],
      workDetail: {
        fieldName: 'Staf Pencatat Keuangan Pemula & Rekap Transaksi Usaha',
        activityOverview:
          'Mencatat transaksi masuk-keluar harian, memeriksa bukti nota pembayaran, dan membantu menyiapkan rekap kas usaha secara tertib.',
        generalResponsibilities: [
          'Mencatat pemasukan, pengeluaran, serta mencocokkan bukti nota transaksi harian',
          'Menyusun tabel rekap tagihan atau pembayaran secara berkala untuk atasan',
          'Menjaga kerapian arsip kwitansi dan ketepatan perhitungan kas'
        ],
        requiredCompetencies: [
          'Ketelitian angka tinggi, penggunaan rumus spreadsheet dasar, dan integritas menjaga data'
        ],
        beginnerLearnableSkills: [
          'Pencatatan pembukuan UMKM terstandar dan pengenalan dasar administrasi pajak usaha'
        ],
        educationOrTrainingNotes:
          'Staf pencatat transaksi pemula dapat dimulai setelah pelatihan/SMK, sedangkan jenjang akuntan atau analis keuangan memerlukan pendidikan D3/S1.',
        workEnvironments: ['Bagian keuangan usaha kecil/menengah, koperasi, atau bagian kasir kantor'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_CUSTOMER_RETAIL',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['komunikasi_media', 'pariwisata_kuliner'],
    name: 'Staf Pelayanan Pelanggan, Kasir & Penjualan Retail',
    categoryLabel: 'Layanan Pelanggan & Penjualan',
    shortDescription:
      'Menyambut pembeli di toko atau loket layanan, menjelaskan produk dengan ramah, menangani transaksi pembayaran, dan menjaga kerapian area display (bukan lowongan aktif).',
    characteristics: [
      'Sering bertemu langsung dan mengobrol ramah dengan beragam pembeli setiap hari',
      'Membantu pembeli menemukan produk yang pas dan menyelesaikan pembayaran di kasir',
      'Menjaga stok pajangan tetap rapi, bersih, dan lengkap label harganya'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.12,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.18,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 62,
      kebiasaan: 70,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_usaha'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_berkembang'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_usaha']
    },
    supportingIndicators: ['interpersonal_social', 'enterprising_business', 'career_urgency'],
    requiredBasicSkills: [
      'Komunikasi sopan, sabar menghadapi pertanyaan pembeli, dan teliti menghitung uang transaksi'
    ],
    developableSkills: [
      'Menggunakan mesin kasir digital (POS), menangani keluhan dengan tenang, dan teknik menawarkan produk'
    ],
    requirementsOrConstraints: [
      'Sering bekerja sistem shift termasuk akhir pekan dan banyak berdiri melayani pembeli'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Jam shift, target penjualan toko, dan gaji spesifik tidak tersedia'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Mengacu pada SKKNI pengoperasian komputer/kasir dan kerangka umum layanan penjualan; tanpa lowongan toko spesifik.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS],
      workDetail: {
        fieldName: 'Staf Pelayanan Pelanggan, Kasir & Penjualan Retail',
        activityOverview:
          'Menyapa dan membantu pembeli, mengoperasikan mesin kasir atau pencatatan pesanan, serta menata kerapian barang jualan.',
        generalResponsibilities: [
          'Menyambut pembeli, menjawab pertanyaan tentang produk, dan membantu proses memilih barang',
          'Melayani pembayaran di kasir dengan teliti dan merapikan struk atau laporan harian',
          'Menata ulang rak pajangan dan mencatat barang yang hampir habis'
        ],
        requiredCompetencies: [
          'Sikap ramah, komunikasi lisan jelas, dan ketelitian berhitung saat transaksi'
        ],
        beginnerLearnableSkills: [
          'Penggunaan software kasir modern dan penanganan keluhan pelanggan secara profesional'
        ],
        educationOrTrainingNotes: 'Terbuka bagi lulusan SMK dari seluruh jurusan.',
        workEnvironments: ['Toko retail, minimarket, loket layanan, atau gerai penjualan produk'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_TECH_SUPPORT',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'teknologi_informatika',
    secondaryDomains: ['komunikasi_media'],
    name: 'Staf Helpdesk & Pendamping Pengguna Aplikasi/Perangkat',
    categoryLabel: 'Layanan Teknis & Komunikasi',
    shortDescription:
      'Menjawab kendala pengguna lewat chat/telepon/tatap muka, memandu langkah perbaikan sederhana, dan meneruskan masalah teknis rumit ke tim ahli (bukan lowongan aktif).',
    characteristics: [
      'Gabungan antara paham cara kerja aplikasi/alat dan sabar menjelaskan ke orang awam',
      'Mencatat keluhan pengguna ke sistem tiket secara terurut supaya tidak terlewat',
      'Menguji kendala dasar sebelum menaikkan laporan ke teknisi lanjutan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.18,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 70,
      kebiasaan: 70,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_sosial'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_teknis', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['technical_affinity', 'interpersonal_social', 'structured_procedural'],
    requiredBasicSkills: [
      'Paham menu aplikasi/perangkat umum dan mampu menjelaskan solusi dengan bahasa yang ramah'
    ],
    developableSkills: [
      'Penulisan panduan pengguna singkat (FAQ) dan pelacakan masalah sistem bertahap'
    ],
    requirementsOrConstraints: [
      'Memerlukan kesabaran tinggi menghadapi pengguna yang panik atau bingung saat alat error'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan lowongan aktif atau syarat shift call-center'],
    contextRelatedMajors: ['RPL/PPLG', 'TKJ', 'Elektro'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Mengacu pada SKKNI Pengoperasian Komputer & Jaringan Komputer; tanpa daftar lowongan aktif.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_NET
      ],
      workDetail: {
        fieldName: 'Staf Helpdesk & Pendamping Pengguna Teknologi',
        activityOverview:
          'Membantu pengguna mengatasi kendala pemakaian aplikasi, akun, atau perangkat melalui chat, telepon, maupun tatap muka.',
        generalResponsibilities: [
          'Menerima laporan kendala pengguna dan mencatat gejalanya dengan jelas',
          'Memandu pengguna melakukan langkah pengecekan awal dengan sabar',
          'Meneruskan gangguan berat ke tim teknisi atau pengembang disertai catatan pengujian'
        ],
        requiredCompetencies: [
          'Pemahaman penggunaan komputer/internet dan komunikasi lisan maupun tulisan yang sopan'
        ],
        beginnerLearnableSkills: [
          'Penggunaan sistem tiket dukungan pelanggan dan pembuatan panduan langkah bergambar'
        ],
        educationOrTrainingNotes:
          'Mengacu pada SKKNI Pengoperasian Komputer; relevan bagi lulusan bidang TIK maupun jurusan lain yang nyaman berkomunikasi.',
        workEnvironments: ['Ruang layanan dukungan pelanggan, kantor IT, atau tim layanan aplikasi'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_ADMIN_QC',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'administrasi_logistik',
    secondaryDomains: ['teknik_industri'],
    name: 'Pemeriksa Kualitas Produk (QC) & Pencatat Data Produksi',
    categoryLabel: 'Ketelitian Mutu & Produksi',
    shortDescription:
      'Memeriksa barang hasil produksi satu per satu agar sesuai standar ukuran/kerapian, memisahkan barang cacat, dan mencatat laporan mutu harian (bukan lowongan aktif).',
    characteristics: [
      'Fokus penuh memeriksa detail kecil seperti jahitan, ukuran, kemasan, atau fungsi barang',
      'Disiplin mengikuti daftar periksa (checklist) mutu agar barang rusak tidak lolos',
      'Mencatat jumlah barang lolos dan temuan cacat secara rapi per sesi kerja'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.14,
      gaya_berpikir: 0.18,
      kebiasaan: 0.26,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 62,
      gaya_berpikir: 68,
      kebiasaan: 78,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_teknis'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['structured_procedural', 'hands_on_practical', 'analytical_depth'],
    requiredBasicSkills: [
      'Ketelitian mata terhadap cacat kecil, pemakaian alat ukur dasar, dan disiplin checklist'
    ],
    developableSkills: [
      'Pencatatan data mutu sederhana untuk mencari pola penyebab kerusakan berulang'
    ],
    requirementsOrConstraints: [
      'Rutinitas kerja berulang membutuhkan konsentrasi stabil dan ketahanan penglihatan yang baik'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak memuat standar QC pabrik tertentu atau syarat fisik spesifik'],
    contextRelatedMajors: ['Tekstil', 'Mesin', 'Otomotif', 'Elektro'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Mengacu pada SKKNI Manufaktur dan Pengoperasian Komputer; tidak mencantumkan lowongan pabrik spesifik.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_MFG,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS
      ],
      workDetail: {
        fieldName: 'Pemeriksa Kualitas (Quality Control) & Pencatat Produksi',
        activityOverview:
          'Memeriksa barang hasil produksi menggunakan panduan ukuran dan visual agar produk yang dikirim sesuai standar kualitas.',
        generalResponsibilities: [
          'Mengecek kesesuaian ukuran, tampilan, atau fungsi barang memakai daftar periksa',
          'Memisahkan produk yang kurang rapi atau cacat lalu memberi label catatan temuan',
          'Merekap jumlah produk lolos dan rusak setiap akhir shift kerja'
        ],
        requiredCompetencies: [
          'Ketelitian pengamatan detail, kejujuran laporan, dan ketertiban mengikuti standar kerja'
        ],
        beginnerLearnableSkills: [
          'Penggunaan alat ukur presisi serta penyusunan tabel rekap cacat produk'
        ],
        educationOrTrainingNotes:
          'Selaras dengan kompetensi SMK bidang garmen/tekstil, manufaktur mesin, dan elektronika.',
        workEnvironments: ['Area inspeksi pabrik garmen/tekstil, manufaktur logam/plastik, atau pengemasan'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_LOGISTICS_WAREHOUSE',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'administrasi_logistik',
    name: 'Staf Gudang, Stok Barang & Operasional Pengiriman',
    categoryLabel: 'Logistik, Gudang & Barang',
    shortDescription:
      'Menerima dan mengecek barang masuk, menata rak gudang berdasarkan kode barang, menyiapkan paket pesanan, dan mencatat stok keluar-masuk dengan akurat (bukan lowongan aktif).',
    characteristics: [
      'Menggabungkan aktivitas gerak fisik menata barang dengan ketelitian menghitung stok',
      'Mencocokkan surat jalan barang, kode paket, dan jumlah unit sebelum dikirim',
      'Menjaga gudang tetap tertata aman, bersih, dan mudah dilacak'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.14,
      gaya_berpikir: 0.14,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.18,
      kesiapan_praktis: 0.14
    },
    dimensionExpectations: {
      minat: 62,
      gaya_berpikir: 64,
      kebiasaan: 76,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 74
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_usaha'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'career_urgency'],
    requiredBasicSkills: [
      'Ketelitian mencocokkan kode barang, berhitung stok akurat, dan siap bergerak fisik ringan-sedang'
    ],
    developableSkills: [
      'Pemakaian scanner barcode, sistem pencatatan gudang (WMS), dan penataan jalur barang'
    ],
    requirementsOrConstraints: [
      'Pekerjaan aktif bergerak di ruang penyimpanan/gudang; terkadang menangani pengemasan berjam-jam'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak memuat daftar gudang penerima, jam shift, atau upah spesifik'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Status Sebagian Terverifikasi: merujuk ke direktori SKKNI sektor logistik/pergudangan tanpa nomor Kepmenaker spesifik.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_LOGISTICS_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS
      ],
      workDetail: {
        fieldName: 'Staf Gudang, Pencatat Stok & Operasional Pengiriman',
        activityOverview:
          'Mengurus penerimaan barang, penataan rak sesuai kode, pengepakan pesanan, dan pencatatan jumlah stok agar tidak selisih.',
        generalResponsibilities: [
          'Menerima barang datang lalu menghitung dan mencocokkan dengan daftar surat jalan',
          'Menata barang ke rak berdasarkan kategori serta menjaga kerapian gudang',
          'Menyiapkan paket pengiriman dan memperbarui catatan stok di komputer/kertas'
        ],
        requiredCompetencies: [
          'Ketertiban mencatat stok, ketahanan fisik bergerak aktif, dan kecermatan membaca kode barang'
        ],
        beginnerLearnableSkills: [
          'Aplikasi inventaris stok komputer dan pemeriksaan berkala (stock opname)'
        ],
        educationOrTrainingNotes: 'Terbuka untuk lulusan SMK seluruh jurusan.',
        workEnvironments: ['Gudang toko online, pusat distribusi barang, atau ruang persediaan pabrik'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_EDU_SOCIAL',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'pendidikan',
    secondaryDomains: ['psikologi_sosial'],
    name: 'Asisten Pengajar, Pendamping Belajar & Staf Kegiatan Sosial',
    categoryLabel: 'Pendampingan & Pendidikan Nonformal',
    shortDescription:
      'Membantu guru/mentor mendampingi anak atau peserta pelatihan belajar praktik, menyiapkan alat peraga, serta mengkoordinir kegiatan komunitas (bukan lowongan aktif).',
    characteristics: [
      'Sabar mendampingi peserta atau anak-anak saat berlatih materi dasar',
      'Membantu menyiapkan jadwal, ruang kelas, alat peraga, dan daftar hadir kegiatan',
      'Banyak berkomunikasi hangat dengan peserta belajar, rekan tim, maupun orang tua'
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
      kebiasaan: 68,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim'],
      kesiapan_praktis: ['siap_studi', 'siap_kerja']
    },
    supportingIndicators: ['interpersonal_social', 'academic_aspiration'],
    requiredBasicSkills: [
      'Kesabaran membimbing, komunikasi ramah yang mudah dimengerti, dan tanggung jawab menjaga peserta'
    ],
    developableSkills: [
      'Teknik mengajar interaktif dan persiapan melanjutkan kuliah kependidikan bila ingin jadi guru formal'
    ],
    requirementsOrConstraints: [
      'Catatan Wajib: Posisi asisten belajar/tutor nonformal dapat dimulai oleh lulusan SMK; menjadi guru sekolah formal tetap mensyaratkan kuliah S1 Pendidikan + PPG.'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Belum memuat daftar tempat bimbel/lembaga sosial spesifik'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke kerangka umum pendidikan nonformal dan UU Guru & Dosen terkait batas syarat guru formal.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_PENDAMPING_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_GURU_PPG
      ],
      workDetail: {
        fieldName: 'Asisten Pengajar, Tutor Pemula & Staf Kegiatan Sosial',
        activityOverview:
          'Mendampingi peserta belajar secara langsung, membantu menyiapkan bahan latihan, serta ikut mengelola acara pendidikan atau komunitas.',
        generalResponsibilities: [
          'Membimbing peserta memahami latihan soal atau praktik dasar secara sabar',
          'Menyiapkan ruang belajar, absensi, dan bahan peraga kegiatan harian',
          'Berkoordinasi dengan pengajar utama atau pengurus komunitas'
        ],
        requiredCompetencies: [
          'Komunikasi ramah, sabar mengulang penjelasan, dan peduli perkembangan peserta'
        ],
        beginnerLearnableSkills: [
          'Penyusunan materi latihan sederhana dan manajemen kegiatan kelompok anak/remaja'
        ],
        educationOrTrainingNotes:
          'Dapat dimulai sebagai asisten belajar atau admin lembaga kursus; untuk menjadi guru sekolah formal wajib menempuh kuliah S1 dan PPG.',
        workEnvironments: ['Tempat les/bimbel, sanggar kegiatan belajar, perpustakaan, atau komunitas sosial'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_MARKETING_CONTENT',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'komunikasi_media',
    secondaryDomains: ['bisnis_ekonomi', 'seni_desain'],
    name: 'Staf Pemasaran Digital, Admin Media Sosial & Konten Promosi',
    categoryLabel: 'Promosi & Komunikasi Publik',
    shortDescription:
      'Mengelola akun media sosial usaha, membalas komentar/chat calon pembeli, menjadwalkan postingan foto-video promosi, dan memantau respons audiens (bukan lowongan aktif).',
    characteristics: [
      'Menulis caption ringan, menyusun kalender unggahan harian, dan memantau tren konten',
      'Berdiskusi dengan bagian desain/penjualan untuk meramu pesan promosi yang menarik',
      'Membalas pertanyaan pengikut di kolom komentar atau pesan masuk secara responsif'
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
      kebiasaan: 66,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_kreatif', 'minat_sosial'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_usaha']
    },
    supportingIndicators: ['enterprising_business', 'creative_expression', 'interpersonal_social'],
    requiredBasicSkills: [
      'Pemahaman fitur media sosial, menulis kalimat ajakan yang natural, dan komunikasi ramah'
    ],
    developableSkills: [
      'Membaca statistik jangkauan konten (insight) dan dasar penataan strategi promosi'
    ],
    requirementsOrConstraints: [
      'Tren media sosial cepat berubah sehingga perlu rutin memantau ide konten baru'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Target penjualan dan lowongan perusahaan tertentu tidak tercantum'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'RPL/PPLG'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: CATALOG_VERIFICATION_DATE,
      verificationLimitations: [
        'Mengacu pada SKKNI Penyiaran dan Pengoperasian Komputer; tanpa data lowongan kerja aktif.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_BCAST,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS
      ],
      workDetail: {
        fieldName: 'Staf Pemasaran Digital & Pengelola Media Sosial Usaha',
        activityOverview:
          'Membantu usaha mengenalkan produk melalui media sosial, menyusun jadwal unggahan konten, dan melayani interaksi calon pembeli secara daring.',
        generalResponsibilities: [
          'Menyiapkan jadwal posting foto/video singkat serta menulis caption yang mudah dimengerti',
          'Menjawab komentar atau pesan calon pembeli dengan ramah lalu mengarahkan ke bagian order',
          'Mencatat konten mana yang paling banyak ditonton atau disukai audiens'
        ],
        requiredCompetencies: [
          'Kreativitas menulis pesan singkat, familiar dengan aplikasi konten HP/PC, dan peka pada audiens'
        ],
        beginnerLearnableSkills: [
          'Dasar analisis insight media sosial dan pengenalan fitur iklan digital berbayar'
        ],
        educationOrTrainingNotes:
          'Terbuka untuk berbagai jurusan, terutama yang terbiasa membuat konten atau berkomunikasi daring.',
        workEnvironments: ['Tim pemasaran usaha lokal, toko online, atau agensi konten'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_WRITER_MEDIA',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'bahasa_sastra',
    secondaryDomains: ['komunikasi_media'],
    name: 'Penulis Konten, Copywriter Pemula & Penyunting Teks Media',
    categoryLabel: 'Bahasa, Penulisan & Literasi',
    shortDescription:
      'Menulis artikel informasi, deskripsi produk toko online, naskah video pendek, atau memeriksa ejaan dan kerapian kalimat naskah sebelum diterbitkan (bukan lowongan aktif).',
    characteristics: [
      'Menulis dan menyunting kalimat agar enak dibaca, jelas, dan tepat ejaan',
      'Mengumpulkan bahan bacaan atau wawancara singkat sebelum menyusun tulisan',
      'Bekerja sama dengan tim visual atau media sosial untuk melengkapi pesan teks'
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
      gaya_berpikir: 72,
      kebiasaan: 68,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_akademik'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_analitis'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_individu', 'ling_kreatif'],
      kesiapan_praktis: ['siap_kerja', 'siap_studi']
    },
    supportingIndicators: ['creative_expression', 'analytical_depth', 'academic_aspiration'],
    requiredBasicSkills: [
      'Menulis kalimat runtut dalam Bahasa Indonesia yang baik dan rajin membaca referensi'
    ],
    developableSkills: [
      'Penulisan artikel terstruktur (SEO dasar), penulisan naskah siaran, dan kemampuan Bahasa Inggris'
    ],
    requirementsOrConstraints: [
      'Pelamar umumnya perlu menyiapkan contoh tulisan singkat atau portofolio artikel sederhana'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Tidak mencantumkan tarif per tulisan atau lowongan redaksi spesifik'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke rujukan umum SKKNI penyiaran dan klasifikasi subsektor penerbitan/ekonomi kreatif.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_BCAST,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL
      ],
      workDetail: {
        fieldName: 'Penulis Konten, Copywriter Pemula & Penyunting Teks',
        activityOverview:
          'Menyusun teks artikel, skrip video, deskripsi produk, serta memeriksa kerapian tata bahasa dan keakuratan informasi sebelum dipublikasikan.',
        generalResponsibilities: [
          'Mencari bahan informasi dari sumber tepercaya lalu merangkumnya jadi tulisan yang ringan dibaca',
          'Menulis naskah konten promosi, deskripsi katalog, atau skrip video pendek',
          'Menyunting kesalahan ketik (typo), ejaan, dan alur kalimat sebelum naik tayang'
        ],
        requiredCompetencies: [
          'Kemampuan merangkai kata yang rapi, ketelitian ejaan, dan kebiasaan membaca kritis'
        ],
        beginnerLearnableSkills: [
          'Teknik copywriting dasar, penulisan artikel web, dan penerjemahan ringkas Bahasa Inggris'
        ],
        educationOrTrainingNotes:
          'Dapat dimulai sebagai penulis konten lepas atau staf redaksi pemula; jalur jurnalis/editor profesional umumnya diperkuat dengan kuliah Sastra/Komunikasi.',
        workEnvironments: ['Tim konten media digital, toko online, atau portal berita/komunitas'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_LAW_ADMIN',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'hukum_keadilan',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Staf Administrasi Dokumen Hukum, Arsip Kepatuhan & Layanan Publik Dasar',
    categoryLabel: 'Administrasi Hukum & Aturan',
    shortDescription:
      'Membantu mengarsipkan surat perjanjian, memeriksa kelengkapan berkas legalitas atau izin usaha, dan melayani alur pendaftaran dokumen warga/klien di kantor layanan (bukan lowongan aktif).',
    characteristics: [
      'Sangat berhati-hati menjaga kerahasiaan, tanggal berlaku, dan keaslian berkas dokumen',
      'Membantu mengetik draf surat resmi standar dan menyusun indeks arsip perkara atau perizinan',
      'Memandu tamu atau pemohon memeriksa kelengkapan syarat formulir sesuai aturan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.22,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 74,
      kebiasaan: 78,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_sosial'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_studi']
    },
    supportingIndicators: ['structured_procedural', 'analytical_depth', 'academic_aspiration'],
    requiredBasicSkills: [
      'Ketelitian membaca dokumen formal, penguasaan pengolah kata, dan kerahasiaan berkas'
    ],
    developableSkills: [
      'Pemahaman alur perizinan dasar serta persiapan melanjutkan kuliah S1 Ilmu Hukum'
    ],
    requirementsOrConstraints: [
      'Catatan Wajib: Posisi pemula terbatas pada administrasi berkas dan arsip kantor. Profesi Advokat, Jaksa, Hakim, atau Notaris WAJIB lulus S1 Ilmu Hukum dan pendidikan profesi hukum.'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Lowongan spesifik kantor layanan/notaris tidak tersedia'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke SKKNI Pengoperasian Komputer untuk administrasi berkas serta UU No. 18/2003 yang membatasi praktik profesi hukum resmi pada lulusan S1 Hukum.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_UU_ADVOKAT_HUKUM
      ],
      workDetail: {
        fieldName: 'Staf Administrasi Dokumen Hukum & Layanan Kepatuhan Dasar',
        activityOverview:
          'Mendukung kerapian arsip surat perjanjian, berkas perizinan, dan alur administrasi layanan publik sesuai prosedur aturan tertulis.',
        generalResponsibilities: [
          'Menginput jadwal agenda berkas dan menyusun indeks arsip dokumen penting',
          'Mengecek kelengkapan salinan identitas atau lampiran syarat formulir pemohon',
          'Membantu mengetik surat pengantar administrasi sesuai format standar kantor'
        ],
        requiredCompetencies: [
          'Kejelian membaca aturan tertulis, ketelitian pengarsipan, dan menjaga kerahasiaan dokumen'
        ],
        beginnerLearnableSkills: [
          'Tata kelola arsip elektronik dan pengenalan prosedur perizinan berusaha/publik'
        ],
        educationOrTrainingNotes:
          'Lulusan SMK dapat memulai dari tugas administrasi umum dokumen; tidak diperbolehkan memberikan nasihat atau pembelaan hukum profesional tanpa gelar S1 Hukum dan izin profesi.',
        workEnvironments: ['Kantor administrasi perizinan, layanan publik, atau sekretariat kantor hukum'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_HEALTH_SUPPORT',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'kesehatan',
    secondaryDomains: ['administrasi_logistik', 'psikologi_sosial'],
    name: 'Staf Administrasi Klinik, Pendaftaran Pasien & Pendukung Kebersihan K3 Ringan',
    categoryLabel: 'Layanan Administrasi Kesehatan',
    shortDescription:
      'Melayani pendaftaran pasien di loket klinik/puskesmas, merapikan jadwal antrean, mencatat stok perlengkapan non-medis, dan menjaga ketertiban area layanan kesehatan (bukan lowongan aktif).',
    characteristics: [
      'Menyambut pasien dan keluarga dengan sikap tenang, empati, dan jelas memberi arahan',
      'Menginput data kunjungan pasien dan jadwal pemeriksaan ke sistem komputer klinik',
      'Menjaga kerapian loket pendaftaran dan kebersihan fasilitas umum layanan kesehatan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.16,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 76,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_teknis'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['interpersonal_social', 'structured_procedural', 'hands_on_practical'],
    requiredBasicSkills: [
      'Sikap tenang dan empati menghadapi pasien serta ketelitian mencatat data kunjungan'
    ],
    developableSkills: [
      'Pemahaman alur layanan pendaftaran kesehatan dan persiapan kuliah kesehatan jika ingin menjadi tenaga medis'
    ],
    requirementsOrConstraints: [
      'Catatan Wajib: Posisi awal SMK hanya pada administrasi/layanan non-klinis. Tindakan keperawatan, kebidanan, gizi klinis, atau farmasi profesional WAJIB menempuh pendidikan tinggi kesehatan, uji kompetensi, dan STR resmi (UU Kesehatan No. 17/2023).'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Lowongan klinik/rumah sakit tertentu dan syarat administrasi setempat'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Batas peran non-klinis diverifikasi berdasarkan UU Kesehatan No. 17/2023 dan SKKNI Pengoperasian Komputer.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKES_NAKES_STR,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS
      ],
      workDetail: {
        fieldName: 'Staf Administrasi Klinik & Layanan Pendukung Non-Medis',
        activityOverview:
          'Membantu pendaftaran pasien, pencatatan jadwal kontrol, dan kelancaran layanan informasi di fasilitas kesehatan tanpa melakukan tindakan medis.',
        generalResponsibilities: [
          'Menerima pasien di meja pendaftaran dan mengarahkan alur pemeriksaan dengan ramah',
          'Mencatat identitas kunjungan dan mengarsipkan formulir pendaftaran secara tertib',
          'Menjaga ketertiban ruang tunggu serta ketersediaan formulir/alat tulis loket'
        ],
        requiredCompetencies: [
          'Keramahan empatik, komunikasi jelas, dan ketelitian mencatat identitas pasien tanpa tertukar'
        ],
        beginnerLearnableSkills: [
          'Penggunaan sistem antrean elektronik klinik dan persiapan kuliah D3/S1 Kesehatan bila berminat ke ranah klinis'
        ],
        educationOrTrainingNotes:
          'Tidak menjalankan tindakan medis; seluruh profesi tenaga kesehatan klinis mewajibkan ijazah pendidikan tinggi kesehatan dan STR aktif.',
        workEnvironments: ['Loket administrasi klinik, ruang pendaftaran lab kesehatan, atau unit K3 kantor'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_PSYCH_COMMUNITY',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'psikologi_sosial',
    secondaryDomains: ['pendidikan', 'komunikasi_media'],
    name: 'Fasilitator Komunitas, Staf Layanan Sosial & Pendamping Kegiatan Pemuda',
    categoryLabel: 'Layanan Sosial & Kemasyarakatan',
    shortDescription:
      'Membantu menjalankan kegiatan sosial, survei kebutuhan warga, mendampingi aktivitas komunitas pemuda/anak, dan menjadi penghubung komunikasi antarpeserta (bukan lowongan aktif).',
    characteristics: [
      'Aktif mendengarkan cerita orang lain dan membantu suasana kelompok tetap akrab',
      'Mengatur kegiatan komunitas, jadwal relawan, dan dokumentasi laporan kegiatan sosial',
      'Banyak berinteraksi langsung dengan berbagai karakter warga maupun anggota tim'
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
      kebiasaan: 68,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_analitis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_studi']
    },
    supportingIndicators: ['interpersonal_social', 'analytical_depth', 'structured_procedural'],
    requiredBasicSkills: [
      'Empati tinggi, keterampilan mendengar aktif, dan koordinasi acara kelompok kecil'
    ],
    developableSkills: [
      'Pembuatan laporan kegiatan komunitas dan persiapan studi lanjutan Psikologi atau Kesejahteraan Sosial'
    ],
    requirementsOrConstraints: [
      'Catatan Wajib: Peran pemula berfokus pada fasilitasi acara dan pendataan sosial; konseling psikologis klinis profesional hanya boleh dilakukan oleh Psikolog berizin.'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Tidak mencantumkan daftar yayasan/lembaga sosial spesifik'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu pada kerangka umum kegiatan sosial kemasyarakatan Kemendikbudristek; peran konseling klinis membutuhkan pendidikan profesi Psikologi.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_PENDAMPING_PARTIAL],
      workDetail: {
        fieldName: 'Fasilitator Komunitas & Staf Pendukung Layanan Sosial',
        activityOverview:
          'Membantu pelaksanaan program sosial, pengumpulan data lapangan warga, dan koordinasi relawan atau kegiatan pemberdayaan masyarakat.',
        generalResponsibilities: [
          'Mendampingi jalannya acara komunitas, pelatihan warga, atau aktivitas kelompok pemuda',
          'Mencatat kehadiran, umpan balik peserta, dan menyusun laporan sederhana kegiatan',
          'Menjembatani komunikasi antara pengurus program dan peserta di lapangan'
        ],
        requiredCompetencies: [
          'Kemampuan berinteraksi hangat, sabar mendengarkan, dan kerjasama tim yang baik'
        ],
        beginnerLearnableSkills: [
          'Teknik wawancara/survei sederhana dan manajemen program kegiatan masyarakat'
        ],
        educationOrTrainingNotes:
          'Pengalaman lapangan menjadi modal bagus sebelum melanjutkan kuliah S1 Psikologi, Sosiologi, atau Kesejahteraan Sosial.',
        workEnvironments: ['Komunitas sosial, lembaga pelatihan masyarakat, atau pusat kegiatan pemuda'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_AGRO_TECH',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'pertanian_lingkungan',
    name: 'Teknisi Kebun Hidroponik, Perawatan Tanaman & Pengolahan Hasil Tani',
    categoryLabel: 'Pertanian Modern & Tanaman',
    shortDescription:
      'Merawat bibit tanaman atau instalasi hidroponik, mengecek jadwal penyiraman dan nutrisi, memanen hasil segar, serta menyortir kemasan hasil pertanian lokal (bukan lowongan aktif).',
    characteristics: [
      'Banyak bekerja di area kebun terbuka, rumah kaca (greenhouse), atau ruang sortir hasil panen',
      'Teliti mengecek kondisi daun, kelembapan media tanam, dan takaran nutrisi harian',
      'Menyortir hasil panen yang segar lalu mengemasnya rapi siap kirim'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.14,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.18,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 64,
      kebiasaan: 74,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 76,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_teknis'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_berkembang'],
      preferensi_lingkungan: ['ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural'],
    requiredBasicSkills: [
      'Ketelatenan merawat makhluk hidup secara rutin dan siap beraktivitas di luar ruangan'
    ],
    developableSkills: [
      'Pengukuran kadar nutrisi air hidroponik (pH/TDS) dan pengemasan pangan segar higienis'
    ],
    requirementsOrConstraints: [
      'Aktivitas menuntut ketekunan harian memantau tanaman termasuk kondisi cuaca panas/lembap'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Belum mencantumkan daftar kebun usaha atau petani mitra tertentu'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke rujukan umum sektor pertanian/hortikultura tanpa lowongan kebun spesifik.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMENTAN_AGRIBISNIS_PARTIAL],
      workDetail: {
        fieldName: 'Teknisi Kebun Hidroponik, Pembibitan & Sortir Hasil Tani',
        activityOverview:
          'Menjalankan perawatan tanaman harian, memantau nutrisi instalasi kebun, memanen, dan mengemas produk tanaman secara rapi.',
        generalResponsibilities: [
          'Menyiapkan media tanam/semai bibit serta mengecek jadwal siram dan pemupukan',
          'Mengamati kesehatan tanaman dari hama dan menjaga kebersihan area tanam',
          'Menyortir hasil panen berdasarkan kualitas lalu menimbang untuk pengiriman'
        ],
        requiredCompetencies: [
          'Ketekunan merawat tanaman setiap hari dan kedisiplinan mengikuti jadwal pemeliharaan'
        ],
        beginnerLearnableSkills: [
          'Teknik budidaya hidroponik dasar dan pengelolaan kualitas pascapanen'
        ],
        educationOrTrainingNotes: 'Terbuka untuk pemula yang tertarik dunia pertanian praktis.',
        workEnvironments: ['Greenhouse hidroponik, kebun pembibitan tanaman hias/sayur, atau pusat sortir pangan'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_ENV_SUPPORT',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'pertanian_lingkungan',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Staf Pengelolaan Sampah Terpilah, Daur Ulang & Lingkungan Area',
    categoryLabel: 'Lingkungan & Pengelolaan Daur Ulang',
    shortDescription:
      'Membantu memilah sampah organik/anorganik, mengelola titik pengumpulan bank sampah atau kompos, mencatat timbangan material daur ulang, dan menjaga kebersihan kawasan (bukan lowongan aktif).',
    characteristics: [
      'Aktif bergerak di area fasilitas pengelolaan sampah terpilah atau ruang terbuka hijau',
      'Mencatat berat material daur ulang serta menjaga ketertiban pemilahan bahan',
      'Berkontribusi langsung menjaga lingkungan tetap bersih dan mengurangi timbulan sampah'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.14,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.18,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 66,
      gaya_berpikir: 64,
      kebiasaan: 74,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_sosial'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_berkembang'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural'],
    requiredBasicSkills: [
      'Disiplin menjaga keselamatan/kebersihan diri dan ketelitian memilah jenis bahan'
    ],
    developableSkills: [
      'Teknik pengomposan organik dan pencatatan alur material bank sampah'
    ],
    requirementsOrConstraints: [
      'Wajib disiplin menggunakan sarung tangan, masker, dan perlengkapan keselamatan kerja (APD)'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Tidak mencantumkan daftar fasilitas pengelola lingkungan tertentu'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu pada rujukan umum pengelolaan lingkungan dan kebersihan terpilah tanpa data lowongan aktif.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMENTAN_AGRIBISNIS_PARTIAL],
      workDetail: {
        fieldName: 'Staf Pengelolaan Daur Ulang & Lingkungan Area',
        activityOverview:
          'Menjalankan pemilahan material daur ulang, pencatatan bank sampah/kompos, serta pemeliharaan kebersihan area hijau.',
        generalResponsibilities: [
          'Memilah bahan organik, plastik, kertas, atau logam ke wadah kategori yang benar',
          'Menimbang dan mencatat material daur ulang yang masuk untuk laporan berkala',
          'Menjaga kebersihan fasilitas serta mengedukasi pemilahan sederhana ke pengunjung/warga'
        ],
        requiredCompetencies: [
          'Kepedulian lingkungan, kepatuhan memakai APD, dan kerapian pencatatan timbangan'
        ],
        beginnerLearnableSkills: [
          'Pengolahan kompos organik sederhana dan tata kelola administrasi bank sampah'
        ],
        educationOrTrainingNotes: 'Terbuka untuk lulusan SMK yang peduli kerja nyata di bidang lingkungan.',
        workEnvironments: ['Bank sampah terpadu, taman kawasan, atau fasilitas pengelolaan lingkungan'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_HOSPITALITY_CREW',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'pariwisata_kuliner',
    secondaryDomains: ['komunikasi_media'],
    name: 'Kru Perhotelan, Resepsionis Wisata & Layanan Tamu',
    categoryLabel: 'Pariwisata & Pelayanan Tamu',
    shortDescription:
      'Menyambut tamu penginapan atau tempat wisata dengan ramah, membantu proses check-in/informasi, serta menjaga kenyamanan kamar atau area kunjungan selalu siap pakai (bukan lowongan aktif).',
    characteristics: [
      'Menjaga penampilan rapi, ramah, dan sigap membantu pertanyaan pengunjung',
      'Bekerja mengikuti standar kebersihan ruangan, waktu check-in, dan jadwal layanan tamu',
      'Cocok bagi yang suka bertemu banyak orang baru di suasana pariwisata/acara'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.14,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 64,
      kebiasaan: 74,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_praktik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['interpersonal_social', 'structured_procedural', 'hands_on_practical'],
    requiredBasicSkills: [
      'Keramahan melayani tamu, ketelitian kerapian ruangan, dan komunikasi sopan'
    ],
    developableSkills: [
      'Percakapan Bahasa Inggris dasar pariwisata dan sistem pemesanan penginapan'
    ],
    requirementsOrConstraints: [
      'Bekerja mengikuti jadwal shift termasuk akhir pekan dan hari libur nasional'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak memuat daftar hotel/destinasi penerima atau rincian gaji'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke rujukan umum direktori SKKNI sektor pariwisata/perhotelan tanpa data lowongan.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_PARIWISATA_KULINER_PARTIAL],
      workDetail: {
        fieldName: 'Kru Perhotelan, Layanan Tamu & Resepsionis Wisata',
        activityOverview:
          'Memberikan layanan sambutan tamu, informasi lokasi wisata/fasilitas, dan memastikan area penginapan selalu nyaman serta bersih.',
        generalResponsibilities: [
          'Menyambut tamu datang, mencatat daftar tamu, dan menjelaskan fasilitas yang tersedia',
          'Mengecek kerapian dan kelengkapan ruangan sebelum dan sesudah dipakai tamu',
          'Membantu menyelesaikan permintaan atau keluhan ringan pengunjung dengan cepat dan sopan'
        ],
        requiredCompetencies: [
          'Etika layanan ramah, penampilan rapi, dan cekatan bekerja bersama tim'
        ],
        beginnerLearnableSkills: [
          'Bahasa Inggris dasar perhotelan dan penggunaan aplikasi reservasi penginapan'
        ],
        educationOrTrainingNotes: 'Terbuka bagi lulusan SMK yang menyukai pelayanan tatap muka.',
        workEnvironments: ['Penginapan/hotel, loket informasi wisata, atau pusat layanan pengunjung'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_CULINARY_KITCHEN',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'pariwisata_kuliner',
    name: 'Asisten Dapur, Barista & Kru Layanan Makanan-Minuman',
    categoryLabel: 'Kuliner, Dapur & Layanan F&B',
    shortDescription:
      'Menyiapkan bahan masakan atau racikan minuman sesuai takaran resep, menjaga kebersihan alat dapur/konter, dan menyajikan pesanan pembeli dengan cepat dan higienis (bukan lowongan aktif).',
    characteristics: [
      'Aktif bergerak di dapur atau meja bar minuman sepanjang jam operasional',
      'Teliti menjaga takaran resep, kesegaran bahan, dan standar kebersihan makanan',
      'Kerja cepat mengikuti alur antrean pesanan bersama tim dapur dan kasir'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.14,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 64,
      kebiasaan: 74,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_kreatif', 'minat_sosial'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'interpersonal_social', 'structured_procedural'],
    requiredBasicSkills: [
      'Kebersihan penyiapan bahan pangan, ketepatan menakar resep, dan cekatan bekerja tim'
    ],
    developableSkills: [
      'Teknik penyajian minuman/kopi (barista), keamanan pangan (food hygiene), dan manajemen stok bahan'
    ],
    requirementsOrConstraints: [
      'Banyak berdiri di area panas/sibuk saat jam makan ramai serta mengikuti jadwal shift'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Lowongan kedai/restoran spesifik dan standar upah tidak tercantum'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke rujukan umum SKKNI sektor jasa makanan-minuman tanpa daftar lowongan aktif.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_PARIWISATA_KULINER_PARTIAL],
      workDetail: {
        fieldName: 'Asisten Dapur, Barista & Kru Penyajian Makanan-Minuman',
        activityOverview:
          'Membantu persiapan bahan masakan, meracik minuman/kopi sesuai takaran standar, serta menjaga kebersihan dapur dan area saji.',
        generalResponsibilities: [
          'Mencuci, memotong, dan menakar bahan masakan/minuman agar rasa tetap konsisten',
          'Menyiapkan pesanan pembeli dengan cepat serta menjaga tampilan hidangan rapi',
          'Membersihkan peralatan kerja dapur dan mengecek kesegaran stok bahan harian'
        ],
        requiredCompetencies: [
          'Kebiasaan higienis, ketepatan mengikuti takaran resep, dan stamina kerja tim'
        ],
        beginnerLearnableSkills: [
          'Penyajian kopi/minuman kekinian, manajemen bahan pangan FIFO, dan keamanan dapur'
        ],
        educationOrTrainingNotes: 'Terbuka untuk lulusan SMK yang suka memasak atau bekerja praktis di bidang F&B.',
        workEnvironments: ['Dapur restoran, kafe/kedai minuman, layanan katering, atau kantin'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_EVENT_OPS',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'komunikasi_media',
    secondaryDomains: ['administrasi_logistik', 'bisnis_ekonomi'],
    name: 'Kru Operasional Acara, Staf Pameran & Koordinasi Lapangan',
    categoryLabel: 'Manajemen Acara & Lapangan',
    shortDescription:
      'Menyiapkan perlengkapan acara/bazar, mengatur alur tamu dan pengisi acara di lapangan, memastikan rundown tepat waktu, serta membereskan logistik pasca-acara (bukan lowongan aktif).',
    characteristics: [
      'Dinamis bergerak di lokasi acara sambil memantau rundown lewat HT atau grup koordinasi',
      'Menyambut narasumber/tamu, menjaga pos registrasi, dan memastikan perlengkapan lengkap',
      'Cocok bagi yang cepat tanggap saat ada kendala mendadak di lapangan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.16,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 72,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_usaha', 'minat_praktik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['interpersonal_social', 'hands_on_practical', 'structured_procedural'],
    requiredBasicSkills: [
      'Komunikasi sigap dalam tim, ketelitian daftar perlengkapan, dan ketenangan saat jadwal padat'
    ],
    developableSkills: [
      'Penyusunan rundown teknis acara dan koordinasi vendor perlengkapan pameran'
    ],
    requirementsOrConstraints: [
      'Jadwal kerja sering mengikuti waktu acara (akhir pekan atau jam fleksibel) dan banyak berdiri'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Tidak mencantumkan daftar penyelenggara acara atau tarif kru'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'RPL/PPLG', 'TKJ'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-21',
      verificationLimitations: [
        'Mengacu ke rujukan umum SKKNI logistik & penyiaran serta subsektor acara ekonomi kreatif.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_BCAST
      ],
      workDetail: {
        fieldName: 'Kru Operasional Acara, Pameran & Staf Lapangan Event',
        activityOverview:
          'Mendukung kelancaran acara seminar, pameran, atau bazar dari persiapan meja registrasi, perlengkapan stan, hingga jalannya susunan acara.',
        generalResponsibilities: [
          'Mengecek kesiapan lokasi, daftar hadir tamu, dan perlengkapan pengisi acara',
          'Berkoordinasi di lapangan agar perpindahan sesi berjalan sesuai susunan waktu',
          'Membantu mengatasi kebutuhan mendadak peserta atau panitia di tempat acara'
        ],
        requiredCompetencies: [
          'Cekatan bekerja sama dalam tim, komunikatif, dan teratur mengikuti checklist acara'
        ],
        beginnerLearnableSkills: [
          'Perencanaan jadwal produksi acara (rundown) dan tata kelola stan pameran'
        ],
        educationOrTrainingNotes:
          'Pengalaman menjadi panitia OSIS/ekstrakurikuler atau kru pameran sekolah menjadi bekal awal yang relevan.',
        workEnvironments: ['Lokasi pameran, gedung seminar, penyelenggara acara komunitas, atau bazar'],
        isVacancyListing: false
      }
    }
  },

  // =========================================================================
  // PHASE 7.7: EXPANDED WORK CATALOG (+21 = 43 TOTAL OCCUPATIONAL FIELDS)
  // =========================================================================
  {
    id: 'PROD_JOB_SECRETARY_ADMIN',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'administrasi_logistik',
    secondaryDomains: ['bahasa_sastra', 'komunikasi_media'],
    name: 'Asisten Administrasi Pimpinan, Persuratan & Sekretaris Kantor Pemula',
    categoryLabel: 'Kesekretariatan & Tata Naskah Kantor',
    shortDescription:
      'Menyusun surat resmi kantor, mencatat notulen rapat, mengatur jadwal pertemuan pimpinan, dan menyambut tamu kerja secara profesional (gambaran bidang kerja, bukan lowongan aktif).',
    characteristics: [
      'Mengetik surat dinas, memo internal, serta merangkum poin keputusan rapat dengan rapi',
      'Mengatur agenda pertemuan, pengingat jadwal, dan penerimaan telepon/tamu kantor',
      'Menuntut kesopanan bahasa, ketelitian tata naskah, dan menjaga kerahasiaan dokumen kantor'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.16,
      kebiasaan: 0.26,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 68,
      kebiasaan: 76,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_tim'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['structured_procedural', 'interpersonal_social', 'career_urgency'],
    requiredBasicSkills: [
      'Pengetikan surat resmi yang rapi di pengolah kata, penyusunan notulen, dan komunikasi sopan'
    ],
    developableSkills: [
      'Tata kearsipan digital kantor, manajemen agenda pimpinan, dan korespondensi bisnis dasar'
    ],
    requirementsOrConstraints: [
      'Gambaran bidang kerja umum (bukan lowongan aktif); posisi sekretaris eksekutif lanjutan sering menyukai pendidikan D3/S1'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar perusahaan, standar upah, atau lowongan aktif'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu pada SKKNI Pengoperasian Komputer dan rujukan umum Administrasi Perkantoran.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_KEUANGAN_ADMIN_PARTIAL
      ],
      workDetail: {
        fieldName: 'Asisten Administrasi Pimpinan & Persuratan Kantor Pemula',
        activityOverview:
          'Mendukung kelancaran komunikasi resmi dan jadwal harian unit kerja melalui pengetikan naskah, notulen, dan penataan agenda.',
        generalResponsibilities: [
          'Menyiapkan draf surat keluar, undangan rapat, dan pencatatan surat masuk',
          'Mencatat ringkasan jalannya rapat (notulen) dan daftar tindak lanjut tim',
          'Mengatur jadwal ruang rapat, tamu kantor, serta arsip dokumen korespondensi'
        ],
        requiredCompetencies: [
          'Bahasa Indonesia tertulis yang baku dan sopan, pengolah kata rapi, dan menjaga kerahasiaan'
        ],
        beginnerLearnableSkills: [
          'Pengelolaan kalender tim daring dan sistem penomoran arsip surat kantor'
        ],
        educationOrTrainingNotes:
          'Terbuka untuk lulusan SMK di posisi asisten tata usaha atau administrasi kantor pemula.',
        workEnvironments: ['Kantor perusahaan, sekolah/yayasan, atau instansi layanan administrasi'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_DATA_ENTRY',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'administrasi_logistik',
    secondaryDomains: ['teknologi_informatika'],
    name: 'Operator Input Data & Digitalisasi Arsip Dokumen',
    categoryLabel: 'Pengelolaan Data & Digitalisasi Kantor',
    shortDescription:
      'Memindahkan data dari formulir kertas atau bukti transaksi ke dalam spreadsheet atau sistem komputer, memindai dokumen, dan mengecek ulang keakuratan isiannya (bukan lowongan aktif).',
    characteristics: [
      'Banyak bekerja fokus dan tenang di depan komputer memeriksa baris demi baris data',
      'Memastikan tidak ada salah ketik angka, nama, tanggal, atau berkas yang terlewat',
      'Cocok bagi yang sabar pada pekerjaan teratur, teliti, dan tidak terlalu suka kebisingan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.18,
      kebiasaan: 0.28,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 64,
      gaya_berpikir: 68,
      kebiasaan: 78,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_individu', 'ling_teknis'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['structured_procedural', 'autonomy_independent', 'career_urgency'],
    requiredBasicSkills: [
      'Mengetik dengan teliti dan cepat, memakai spreadsheet dasar, serta memverifikasi kecocokan data'
    ],
    developableSkills: [
      'Rumus pembersihan data di spreadsheet, penamaan arsip digital (scanning), dan verifikasi ganda'
    ],
    requirementsOrConstraints: [
      'Membutuhkan konsentrasi duduk di depan layar dalam waktu lama serta menjaga kerahasiaan data'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar lowongan, target input harian, atau besaran gaji'],
    contextRelatedMajors: ['RPL/PPLG', 'TKJ'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke unit kompetensi pengoperasian komputer (Kepmenaker No. 56/2018) tanpa memuat lowongan spesifik.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_KEUANGAN_ADMIN_PARTIAL
      ],
      workDetail: {
        fieldName: 'Operator Input Data & Digitalisasi Arsip',
        activityOverview:
          'Memasukkan, memperbarui, memindai, dan memeriksa keakuratan dokumen atau catatan transaksi ke dalam sistem komputer organisasi.',
        generalResponsibilities: [
          'Mengetik dan memindahkan data formulir atau catatan operasional ke tabel spreadsheet/sistem',
          'Memindai (scan) dokumen fisik dan menyimpannya dalam folder arsip digital sesuai aturan nama',
          'Mengecek ulang data ganda, kolom kosong, atau ketidaksesuaian angka sebelum laporan dikirim'
        ],
        requiredCompetencies: [
          'Ketelitian tinggi terhadap detail karakter/angka dan kelancaran mengoperasikan aplikasi perkantoran'
        ],
        beginnerLearnableSkills: [
          'Fungsi filter, validasi data spreadsheet, dan tata kelola folder arsip aman'
        ],
        educationOrTrainingNotes: 'Terbuka bagi lulusan SMK yang teliti dan terbiasa memakai komputer.',
        workEnvironments: ['Kantor administrasi, unit arsip, klinik/sekolah, atau pusat pengolahan data'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_STORE_MERCHANDISER',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Pramuniaga Toko, Penata Pajangan Barang (Display) & Cek Stok Retail',
    categoryLabel: 'Ritel Toko & Penataan Barang',
    shortDescription:
      'Menata produk di rak toko agar rapi dan menarik, mengecek label harga serta masa kedaluwarsa barang, mengisi ulang stok rak, dan membantu pengunjung menemukan produk (bukan lowongan aktif).',
    characteristics: [
      'Aktif bergerak di lantai toko mengecek kerapian rak dan ketersediaan barang pajangan',
      'Membantu pembeli dengan ramah menunjukkan letak barang atau informasi promo yang berlaku',
      'Cocok bagi yang suka kerja praktis, rapi menyusun barang, dan tidak suka duduk diam seharian'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.14,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 62,
      kebiasaan: 74,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_sosial', 'minat_usaha'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_tim', 'ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'interpersonal_social'],
    requiredBasicSkills: [
      'Kerapian menyusun barang, ketelitian membaca kode/tanggal kedaluwarsa, dan sikap ramah'
    ],
    developableSkills: [
      'Teknik penataan rak (FIFO/FEFO), pengecekan stok opname harian, dan informasi promosi produk'
    ],
    requirementsOrConstraints: [
      'Jam kerja umumnya mengikuti sistem shift toko (termasuk akhir pekan) dan banyak berdiri/berjalan'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan merek toko/minimarket atau besaran upah'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke rujukan umum SKKNI sektor ritel/administrasi niaga tanpa daftar lowongan aktif.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_KEUANGAN_ADMIN_PARTIAL],
      workDetail: {
        fieldName: 'Pramuniaga Toko & Penata Pajangan Barang (Display)',
        activityOverview:
          'Menjaga kerapian rak pajangan, kelengkapan label harga, kesegaran stok barang, dan membantu pelanggan berbelanja dengan nyaman.',
        generalResponsibilities: [
          'Mengisi ulang barang dari gudang ke rak toko serta menerapkan urutan barang lama di depan (FIFO)',
          'Memeriksa tanggal kedaluwarsa dan keutuhan kemasan barang secara berkala',
          'Menyambut pengunjung dengan ramah dan menunjukkan lokasi atau keterangan produk'
        ],
        requiredCompetencies: [
          'Cekatan menata barang fisik, teliti mengecek harga/tanggal, dan sopan kepada pelanggan'
        ],
        beginnerLearnableSkills: [
          'Penghitungan stok opname ritel dan teknik penataan visual rak toko'
        ],
        educationOrTrainingNotes: 'Terbuka luas bagi lulusan SMK dari berbagai jurusan sebagai langkah awal kerja.',
        workEnvironments: ['Toko ritel modern, swalayan, toko perlengkapan rumah, atau gerai buku/fashion'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_SALES_FIELD',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['komunikasi_media'],
    name: 'Staf Penjualan Lapangan (Sales), Kunjungan Mitra & Pemasaran Produk',
    categoryLabel: 'Penjualan & Pengembangan Pelanggan',
    shortDescription:
      'Memperkenalkan produk perusahaan secara langsung ke warung, toko mitra, atau calon pembeli, mencatat pesanan, serta menjaga hubungan baik agar pelanggan mau memesan ulang (bukan lowongan aktif).',
    characteristics: [
      'Banyak bergerak menemui orang baru di berbagai lokasi atau area pemasaran',
      'Mengandalkan komunikasi hangat, kemampuan menjelaskan manfaat barang, dan ketahanan menghadapi penolakan',
      'Cocok untuk yang tidak betah duduk di kantor terus dan suka melihat hasil nyata dari usaha sendiri'
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
      gaya_berpikir: 66,
      kebiasaan: 70,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_sosial'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_komunikasi'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_usaha']
    },
    supportingIndicators: ['enterprising_business', 'interpersonal_social', 'career_urgency'],
    requiredBasicSkills: [
      'Komunikasi percaya diri dengan orang baru, ketekunan mengikuti target kunjungan, dan jujur mencatat pesanan'
    ],
    developableSkills: [
      'Teknik presentasi manfaat produk, negosiasi wajar dengan mitra toko, dan pencatatan wilayah pelanggan'
    ],
    requirementsOrConstraints: [
      'Membutuhkan ketahanan mental menghadapi penolakan dan sering memerlukan mobilitas perjalanan area sekitar'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Tidak mencantumkan daftar perusahaan, skema komisi, atau target penjualan'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke rujukan umum SKKNI pemasaran/administrasi niaga tanpa mencantumkan skema gaji/komisi.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_KEUANGAN_ADMIN_PARTIAL],
      workDetail: {
        fieldName: 'Staf Penjualan & Kunjungan Mitra (Sales Pemula)',
        activityOverview:
          'Memasarkan produk atau layanan perusahaan ke toko, mitra usaha, atau pelanggan langsung serta mencatat pesanan dan masukan pasar.',
        generalResponsibilities: [
          'Mengunjungi atau menghubungi calon pelanggan/warung mitra untuk mengenalkan katalog barang',
          'Mencatat pesanan dengan tepat, memantau pengiriman, dan menjaga hubungan baik pasca-penjualan',
          'Menyampaikan masukan soal kebutuhan pembeli atau kendala produk ke tim kantor'
        ],
        requiredCompetencies: [
          'Sikap ramah, mendengarkan kebutuhan pembeli, jujur soal spesifikasi barang, dan tahan penolakan'
        ],
        beginnerLearnableSkills: [
          'Penyusunan daftar kunjungan harian dan teknik menjaga pelanggan berlangganan'
        ],
        educationOrTrainingNotes:
          'Terbuka untuk lulusan SMK yang komunikatif dan menyukai aktivitas lapangan.',
        workEnvironments: ['Area pemasaran lapangan, kunjungan toko mitra, pameran bazar, atau tim penjualan'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_E_COMMERCE_OPS',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'bisnis_ekonomi',
    secondaryDomains: ['administrasi_logistik', 'komunikasi_media'],
    name: 'Admin Toko Online (Marketplace), Pengelolaan Katalog & Balasan Pembeli',
    categoryLabel: 'Niaga Daring & Layanan Toko Online',
    shortDescription:
      'Mengunggah foto dan deskripsi produk ke marketplace, memperbarui jumlah stok varian, membalas chat pertanyaan pembeli dengan cepat dan ramah, serta mencetak label pengiriman paket (bukan lowongan aktif).',
    characteristics: [
      'Gabungan kerja di depan layar komputer/HP dengan cek barang di ruang kemas usaha',
      'Menjaga kecepatan balasan chat agar rating toko baik dan pesanan tidak salah varian',
      'Cocok bagi yang akrab dengan cara belanja di marketplace dan teliti membaca rincian pesanan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.16,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 66,
      kebiasaan: 74,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_sosial', 'minat_teknis'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['enterprising_business', 'structured_procedural', 'interpersonal_social'],
    requiredBasicSkills: [
      'Menjawab pertanyaan pembeli dengan bahasa sopan, teliti mengecek ukuran/warna varian, dan memakai spreadsheet dasar'
    ],
    developableSkills: [
      'Pengelolaan dashboard penjual marketplace, pencetakan resi otomatis, dan penanganan komplain retur'
    ],
    requirementsOrConstraints: [
      'Jam ramai pesanan bisa terjadi saat tanggal promo atau jam sore menjelang batas serah kurir'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak memuat nama toko online penerima atau besaran upah/bonus'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu pada SKKNI Pengoperasian Komputer dan pembinaan pemasaran digital PLUT-KUKM.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKOP_SPW_PLUT
      ],
      workDetail: {
        fieldName: 'Admin Toko Online & Operasional Marketplace',
        activityOverview:
          'Mengelola etalase produk di platform belanja daring, melayani tanya-jawab pembeli, dan memproses resi pesanan harian hingga siap dikirim.',
        generalResponsibilities: [
          'Memperbarui foto produk, harga promo, deskripsi ukuran, dan stok barang di marketplace',
          'Membalas chat pembeli dengan cepat serta membantu menyarankan produk yang sesuai',
          'Mencetak label pengiriman (resi) dan memastikan tim gudang mengemas varian yang tepat'
        ],
        requiredCompetencies: [
          'Ketelitian membaca detail varian pesanan, kesabaran menjawab pertanyaan berulang, dan rapi mencatat retur'
        ],
        beginnerLearnableSkills: [
          'Sinkronisasi stok antar-kanal toko online dan penyusunan format balasan cepat (auto-reply)'
        ],
        educationOrTrainingNotes: 'Cocok untuk lulusan SMK yang akrab dengan aplikasi belanja daring dan komunikasi tertulis.',
        workEnvironments: ['Kantor toko online, gudang usaha UMKM ritel, atau ruang operasional niaga daring'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_GARMENT_OPERATOR',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'teknik_industri',
    secondaryDomains: ['seni_desain'],
    name: 'Operator Mesin Jahit, Tata Pola Garmen & Pemeriksa Jahitan Tekstil',
    categoryLabel: 'Tekstil, Garmen & Jahit Produksi',
    shortDescription:
      'Mengoperasikan mesin jahit industri atau obras, menyusun potongan kain sesuai pola ukuran, dan memeriksa kerapian jahitan pakaian sebelum dikemas (gambaran bidang kerja, bukan lowongan aktif).',
    characteristics: [
      'Memadukan ketenangan tangan, ketelitian mata terhadap garis jahitan, dan ketekunan produksi',
      'Bekerja dengan standar ukuran pola, urutan perakitan bagian pakaian, serta pengecekan benang dan ukuran',
      'Sangat selaras dengan bekal dasar praktik tekstil/garmen dan tata busana'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.14,
      kebiasaan: 0.26,
      kemampuan_saat_ini: 0.2,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 66,
      gaya_berpikir: 64,
      kebiasaan: 76,
      kemampuan_saat_ini: 66,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_kreatif'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'career_urgency'],
    requiredBasicSkills: [
      'Kontrol kecepatan mesin jahit dasar, ketelitian mengikuti garis pola, dan keselamatan tangan saat menjahit'
    ],
    developableSkills: [
      'Pengoperasian mesin jahit khusus (obras/overdeck), tata letak pemotongan kain hemat bahan, dan QC jahitan'
    ],
    requirementsOrConstraints: [
      'Aktivitas produksi mengikuti target jumlah potong per hari dengan posisi duduk/berdiri berulang'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar pabrik garmen/konveksi atau standar upah'],
    contextRelatedMajors: ['Tekstil'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke rujukan subsektor tekstil/garmen di direktori SKKNI serta Spektrum SMK keahlian tekstil.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_SECTOR_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Operator Jahit Produksi, Pola & Pemeriksa Mutu Garmen',
        activityOverview:
          'Merakit potongan kain menjadi pakaian jadi sesuai pola ukuran, menjaga kerapian jahitan, dan memastikan produk lolos pemeriksaan mutu.',
        generalResponsibilities: [
          'Menjahit atau mengobras bagian pakaian sesuai urutan kerja dan tanda ukuran pola',
          'Mengganti benang/jarum dasar serta menjaga mesin jahit bersih dan aman digunakan',
          'Memeriksa kesesuaian ukuran, jahitan lepas, atau noda kain sebelum pakaian disetrika dan dikemas'
        ],
        requiredCompetencies: [
          'Ketenangan gerak tangan-kaki pada mesin jahit, ketelitian detail ukuran, dan disiplin keselamatan jarum/gunting'
        ],
        beginnerLearnableSkills: [
          'Membaca lembar spesifikasi ukuran garmen (tech pack) dan pengecekan cacat kain'
        ],
        educationOrTrainingNotes:
          'Selaras dengan kompetensi SMK bidang Tekstil/Tata Busana maupun pelatihan menjahit kerja.',
        workEnvironments: ['Konveksi pakaian, studio jahit butik, atau lantai produksi pabrik garmen'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_HVAC_APPLIANCE',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'teknik_industri',
    name: 'Asisten Teknisi Pendingin Ruangan (AC) & Peralatan Listrik Rumah Tangga',
    categoryLabel: 'Teknis Pendingin & Perawatan Alat Listrik',
    shortDescription:
      'Membantu pembersihan unit AC berkala, pengecekan kelistrikan alat rumah tangga seperti kulkas, dispenser, atau mesin cuci, serta pemasangan unit dasar bersama teknisi senior (bukan lowongan aktif).',
    characteristics: [
      'Banyak bekerja di lokasi rumah warga, sekolah, atau kantor membantu teknisi lapangan',
      'Menggabungkan pemahaman kelistrikan dasar dengan ketelitian mekanik pipa dan kebersihan lokasi kerja',
      'Cocok bagi yang suka kerja nyata bergerak ke berbagai tempat dan melihat alat kembali berfungsi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.16,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.2,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 68,
      kebiasaan: 72,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_teknis'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'technical_affinity', 'structured_procedural'],
    requiredBasicSkills: [
      'Pemahaman dasar arus listrik aman, penggunaan perkakas tangan serta multimeter, dan sopan di rumah pelanggan'
    ],
    developableSkills: [
      'Prosedur cuci unit AC aman, pengecekan tekanan pendingin bersama senior, dan keselamatan kerja ketinggian'
    ],
    requirementsOrConstraints: [
      'Memerlukan ketahanan fisik membawa perkakas, kehati-hatian listrik, dan pekerjaan di tangga/lokasi lapangan'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar penyedia jasa servis atau upah asisten teknisi'],
    contextRelatedMajors: ['Elektro', 'Mesin'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke rujukan umum SKKNI sektor elektronika/teknik pendingin dan Spektrum SMK Elektronika.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_SECTOR_PARTIAL,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Asisten Teknisi Pendingin (AC) & Alat Listrik Rumah Tangga',
        activityOverview:
          'Mendampingi perawatan rutin unit AC dan perbaikan peralatan listrik rumah tangga seperti mesin cuci, kipas, atau kulkas.',
        generalResponsibilities: [
          'Menyiapkan alat cuci AC, pelindung area kerja, dan membersihkan saringan/unit secara aman',
          'Membantu pengecekan sambungan kabel, sekering, dan arus listrik dasar memakai multimeter',
          'Menjaga kerapian serta kebersihan ruangan pelanggan setelah servis selesai'
        ],
        requiredCompetencies: [
          'Kepatuhan prosedur pemutusan arus listrik aman (K3) dan sikap jujur kepada pelanggan'
        ],
        beginnerLearnableSkills: [
          'Deteksi gejala kerusakan umum pada motor kipas, kompresor ringan, dan instalasi unit'
        ],
        educationOrTrainingNotes:
          'Dapat dimulai sebagai asisten teknisi pemula bagi lulusan SMK Elektronika/Kelistrikan atau pelatihan kerja BLK.',
        workEnvironments: ['Jasa servis panggilan, gedung perkantoran/sekolah, atau bengkel elektronik'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_WELDING_FAB',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'teknik_industri',
    name: 'Operator Pengelasan Ringan, Fabrikasi Logam & Perakitan Konstruksi Bengkel',
    categoryLabel: 'Pemesinan, Las & Fabrikasi Logam',
    shortDescription:
      'Memotong bahan besi sesuai gambar ukuran, menyambung rangka logam dengan pengelasan dasar, menghaluskan sambungan, dan merakit rangka rak, pagar, atau komponen teknik (bukan lowongan aktif).',
    characteristics: [
      'Pekerjaan fisik langsung mengubah bahan logam mentah menjadi rangka atau komponen nyata',
      'Menuntut ketelitian mengukur sudut dan panjang serta kepatuhan mutlak pada alat pelindung diri (APD)',
      'Cocok bagi yang menikmati bengkel praktik logam dan melihat hasil fisik yang kokoh'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.14,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.2,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 64,
      kebiasaan: 74,
      kemampuan_saat_ini: 66,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_praktik'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik'],
      preferensi_lingkungan: ['ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'career_urgency'],
    requiredBasicSkills: [
      'Pengukuran presisi menggunakan meteran/sigmat, pembacaan gambar kerja sederhana, dan kedisiplinan APD las'
    ],
    developableSkills: [
      'Teknik las sambungan rapi (SMAW/MIG dasar), penggunaan gerinda aman, dan pencegahan distorsi bahan'
    ],
    requirementsOrConstraints: [
      'Wajib menggunakan helm las, sarung tangan kulit, dan pelindung percikan api; lingkungan bengkel panas & bising'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan sertifikasi juru las spesifik per proyek atau daftar upah'],
    contextRelatedMajors: ['Mesin', 'Otomotif'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke SKKNI Industri Logam Mesin (Kepmenaker No. 109/2018) tanpa mencantumkan lowongan aktif.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_MFG,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Operator Pengelasan & Fabrikasi Logam Bengkel',
        activityOverview:
          'Memotong, mengukur, menyambung, dan merapikan komponen logam menjadi rangka atau bagian konstruksi teknik sesuai gambar ukuran.',
        generalResponsibilities: [
          'Mengukur dan menandai bahan besi atau pelat sesuai ukuran pada gambar kerja',
          'Menyambung bagian logam dengan teknik pengelasan dasar dan merapikan bekas las',
          'Menjaga kelengkapan APD, keselamatan percikan api, serta kebersihan area bengkel'
        ],
        requiredCompetencies: [
          'Ketenangan tangan menyambung material, ketelitian ukuran siku, dan disiplin K3 bengkel'
        ],
        beginnerLearnableSkills: [
          'Pembacaan simbol las pada gambar teknik dan pemeriksaan kerataan rangka'
        ],
        educationOrTrainingNotes:
          'Selaras dengan kompetensi SMK Teknik Pemesinan/Pengelasan dan pelatihan juru las pemula.',
        workEnvironments: ['Bengkel fabrikasi logam, bengkel las konstruksi, atau unit perakitan industri'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_CIVIL_DRAFTER',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'teknik_industri',
    secondaryDomains: ['seni_desain', 'administrasi_logistik'],
    name: 'Juru Gambar Teknik Pemula (CAD Drafter) & Asisten Pengukur Lapangan',
    categoryLabel: 'Gambar Teknik & Perancangan Konstruksi',
    shortDescription:
      'Membuat gambar kerja 2D/3D komponen bangunan atau mesin menggunakan perangkat lunak CAD berdasarkan arahan perencana, serta membantu mencatat ukuran lapangan (bukan lowongan aktif).',
    characteristics: [
      'Menjembatani ide rancangan teknik menjadi gambar ukuran jelas yang bisa dikerjakan tukang atau teknisi',
      'Banyak bekerja di depan komputer menggambar garis presisi, sesekali turun mengecek ukuran lokasi',
      'Cocok bagi yang teliti angka ukuran, suka menggambar rapi, namun lebih suka suasana ruang kerja daripada bongkar mesin berat'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.22,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 72,
      kebiasaan: 74,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_kreatif'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_kreatif'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['technical_affinity', 'structured_procedural', 'creative_expression'],
    requiredBasicSkills: [
      'Pemahaman skala gambar teknik, ketelitian ukuran milimeter/sentimeter, dan dasar aplikasi gambar 2D CAD'
    ],
    developableSkills: [
      'Pengaturan layer gambar kerja bangunan/mesin, penyiapan berkas cetak gambar, dan asistensi survei ukur'
    ],
    requirementsOrConstraints: [
      'Peran desain struktur utama dan penandatanganan dokumen konstruksi resmi tetap menjadi kewenangan sarjana teknik/arsitek berlisensi'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar biro konsultan/kontraktor atau gaji juru gambar'],
    contextRelatedMajors: ['Mesin', 'Elektro'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu pada SKKNI Manufaktur/Gambar Teknik dan Spektrum SMK; peran pemula sebagai asisten drafter CAD.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_MFG,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Juru Gambar Teknik Pemula (CAD Drafter)',
        activityOverview:
          'Menuangkan sketsa dan ukuran teknik dari perencana senior ke dalam gambar digital 2D/3D yang rapi dan mudah dibaca di lapangan.',
        generalResponsibilities: [
          'Menggambar denah atau komponen teknik sesuai skala, garis ukuran, dan standar simbol gambar',
          'Merevisi gambar kerja berdasarkan catatan perbaikan dari pengawas proyek atau insinyur',
          'Membantu mengukur dimensi ruang atau bagian komponen di lokasi bersama tim teknis'
        ],
        requiredCompetencies: [
          'Membaca proyeksi gambar teknik dasar, ketelitian angka ukuran, dan ketelatenan menggambar di komputer'
        ],
        beginnerLearnableSkills: [
          'Penggunaan perangkat lunak CAD 2D/3D standar industri dan manajemen revisi file gambar'
        ],
        educationOrTrainingNotes:
          'Posisi drafter pemula terbuka bagi lulusan SMK yang menguasai dasar CAD; sertifikat pelatihan CAD memperkuat peluang.',
        workEnvironments: ['Kantor teknik, bengkel perancangan manufaktur, atau ruang gambar proyek konstruksi'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_SCHOOL_ADMIN',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'pendidikan',
    secondaryDomains: ['administrasi_logistik'],
    name: 'Staf Tata Usaha Sekolah, Layanan Siswa & Pengelola Perpustakaan Dasar',
    categoryLabel: 'Administrasi Lembaga Pendidikan',
    shortDescription:
      'Membantu pencatatan data siswa, persuratan sekolah/lembaga kursus, penataan katalog buku perpustakaan, serta melayani pertanyaan orang tua dan peserta didik dengan sabar (bukan lowongan aktif).',
    characteristics: [
      'Beraktivitas di lingkungan pendidikan yang tertib, tenang, dan dekat dengan guru maupun pelajar',
      'Menggabungkan pekerjaan administrasi kantor dengan keramahan melayani kebutuhan belajar peserta',
      'Catatan Penting: Berbeda dengan guru kelas formal yang mewajibkan S1 + PPG'
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
      gaya_berpikir: 66,
      kebiasaan: 74,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_teknis'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['structured_procedural', 'interpersonal_social', 'academic_aspiration'],
    requiredBasicSkills: [
      'Kerapian pengarsipan data peserta, pengoperasian spreadsheet/surat kantor, dan sikap ramah kepada siswa serta orang tua'
    ],
    developableSkills: [
      'Sistem inventaris buku perpustakaan sederhana, rekap absensi/jadwal kelas, dan layanan front-office sekolah'
    ],
    requirementsOrConstraints: [
      'Peran staf administrasi/tata usaha berbeda dengan guru mata pelajaran formal yang mensyaratkan S1 Kependidikan dan PPG'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar sekolah/lembaga kursus atau status kepegawaian'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke SKKNI Pengoperasian Komputer dan kerangka pendidikan nonformal; formasi ASN/sekolah negeri mengikuti aturan rekrutmen masing-masing.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_PENDAMPING_PARTIAL
      ],
      workDetail: {
        fieldName: 'Staf Tata Usaha Sekolah & Pengelola Perpustakaan Pemula',
        activityOverview:
          'Mendukung kelancaran administrasi harian sekolah, bimbingan belajar, atau perpustakaan agar data siswa, jadwal, dan koleksi buku tertata rapi.',
        generalResponsibilities: [
          'Memperbarui daftar siswa, jadwal kegiatan belajar, serta menyiapkan surat keterangan rutin',
          'Menata peminjaman buku perpustakaan atau inventaris alat peraga belajar agar rapi',
          'Melayani pertanyaan orang tua dan siswa terkait berkas pendaftaran atau informasi jadwal'
        ],
        requiredCompetencies: [
          'Keramahan melayani di lingkungan pendidikan, ketelitian data, dan kesabaran menjaga ketertiban arsip'
        ],
        beginnerLearnableSkills: [
          'Pengelolaan sistem katalog perpustakaan digital sederhana dan arsip administrasi akademik'
        ],
        educationOrTrainingNotes:
          'Lulusan SMK dapat masuk sebagai staf layanan/administrasi lembaga kursus atau asisten tata usaha; untuk jenjang karier kepegawaian lanjutan sering mendukung kuliah sambil bekerja.',
        workEnvironments: ['Ruang tata usaha sekolah, perpustakaan, atau kantor administrasi lembaga kursus'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_LAB_ASSISTANT_EDU',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'pendidikan',
    secondaryDomains: ['teknologi_informatika', 'administrasi_logistik'],
    name: 'Teknisi Laboratorium Komputer Sekolah / Pengelola Alat Praktik Belajar',
    categoryLabel: 'Dukungan Lab & Fasilitas Belajar',
    shortDescription:
      'Menyiapkan komputer, proyektor, atau alat praktik sebelum jam praktikum dimulai, menjaga kebersihan dan pencatatan peminjaman alat lab, serta membantu siswa saat kendala teknis dasar muncul (bukan lowongan aktif).',
    characteristics: [
      'Berperan menjaga kesiapan ruang lab/bengkel sekolah atau tempat pelatihan agar belajar berjalan lancar',
      'Cocok untuk yang senang suasana lingkungan belajar sekaligus punya ketelitian merawat perangkat/alat',
      'Menggabungkan peran teknis pemeliharaan ringan dengan sikap sabar mendampingi peserta didik'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.16,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 68,
      kebiasaan: 74,
      kemampuan_saat_ini: 66,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_sosial'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_teknis', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['technical_affinity', 'structured_procedural', 'interpersonal_social'],
    requiredBasicSkills: [
      'Pengecekan dasar perangkat lab/komputer, pencatatan inventaris peminjaman alat, dan komunikasi ramah ke siswa'
    ],
    developableSkills: [
      'Instalasi perangkat lunak pembelajaran, pemeliharaan rutin ruang praktik, dan tata tertib K3 lab'
    ],
    requirementsOrConstraints: [
      'Posisi teknisi/laboran pemula mendukung guru atau instruktur di kelas praktik (bukan guru mata pelajaran utama)'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan formasi sekolah atau lembaga kursus tertentu'],
    contextRelatedMajors: ['TKJ', 'RPL/PPLG', 'Elektro'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke SKKNI Pengoperasian Komputer & Jaringan serta Spektrum SMK sebagai pengelola alat praktik.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_PENDAMPING_PARTIAL
      ],
      workDetail: {
        fieldName: 'Teknisi Laboratorium Komputer & Pengelola Alat Praktik',
        activityOverview:
          'Memastikan seluruh perangkat komputer, audio-visual, atau perlengkapan praktik belajar siap pakai dan terawat sepanjang jadwal kelas.',
        generalResponsibilities: [
          'Menyiapkan komputer, aplikasi praktik, atau peralatan bengkel sebelum sesi belajar dimulai',
          'Mencatat peminjaman dan pengembalian alat serta melaporkan komponen yang rusak ke penanggung jawab',
          'Membantu peserta saat terjadi kendala teknis sederhana selama praktik berlangsung'
        ],
        requiredCompetencies: [
          'Ketertiban inventaris barang, pemahaman dasar perangkat lab, dan kesabaran membantu pemula'
        ],
        beginnerLearnableSkills: [
          'Perawatan berkala ruang praktikum dan penjadwalan pemakaian fasilitas bersama'
        ],
        educationOrTrainingNotes:
          'Posisi laboran atau asisten lab dasar dapat dimulai dari pengalaman praktik di SMK.',
        workEnvironments: ['Laboratorium komputer sekolah, pusat pelatihan kerja, atau studio praktik kampus'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_PHARMACY_LOGISTICS',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'kesehatan',
    secondaryDomains: ['administrasi_logistik', 'bisnis_ekonomi'],
    name: 'Staf Logistik Gudang Farmasi Non-Klinis & Kasir Produk Kesehatan Umum',
    categoryLabel: 'Dukungan Operasional Non-Klinis Kesehatan',
    shortDescription:
      'Mencatat stok masuk-keluar barang kesehatan bebas dan alat kebersihan medis di rak gudang, memeriksa tanggal kedaluwarsa (FEFO), dan melayani kasir non-resep (bukan apoteker maupun tenaga kefarmasian klinis ber-STR).',
    characteristics: [
      'Lingkungan kerja bersih, rapi, dan membutuhkan ketelitian tinggi memeriksa nomor batch serta tanggal kedaluwarsa',
      'Catatan Penting: Lulusan SMK umum TIDAK berwenang meracik obat resep, memberi nasihat medis, atau menggantikan Apoteker/TTK ber-STR',
      'Cocok bagi yang menyukai suasana bersih dan teliti mengelola barang sensitif tanggal kedaluwarsa'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.16,
      kebiasaan: 0.28,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 68,
      kebiasaan: 78,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_teknis', 'ling_tim'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['structured_procedural', 'interpersonal_social', 'career_urgency'],
    requiredBasicSkills: [
      'Ketelitian membaca kode barang serta tanggal kedaluwarsa, kerapian rak bersih, dan kepatuhan batas kewenangan non-klinis'
    ],
    developableSkills: [
      'Pencatatan stok sistem FEFO (First Expired First Out) dan layanan kasir produk kesehatan umum'
    ],
    requirementsOrConstraints: [
      'BATAS KEWENANGAN TEGAS: Meracik obat, menyerahkan obat resep, dan memberi saran pengobatan wajib dilakukan Apoteker/Tenaga Kefarmasian ber-STR (UU Kesehatan No. 17/2023)'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar apotek/distributor alat kesehatan atau besaran gaji'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Terbatas ketat pada tugas administratif gudang & kasir non-resep sesuai UU Kesehatan No. 17/2023.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKES_NAKES_STR,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_LOGISTICS_PARTIAL
      ],
      workDetail: {
        fieldName: 'Staf Logistik Gudang Non-Klinis & Kasir Produk Kesehatan Umum',
        activityOverview:
          'Membantu pencatatan stok produk kesehatan umum, pengecekan tanggal kedaluwarsa rak gudang, dan pelayanan kasir barang bebas di bawah pengawasan tenaga berizin.',
        generalResponsibilities: [
          'Mencatat penerimaan boks barang non-klinis dan menyusun urutan kedaluwarsa (FEFO)',
          'Menjaga kebersihan rak penyimpanan serta memisahkan produk yang mendekati masa kedaluwarsa',
          'Melayani transaksi kasir produk umum dan meneruskan pertanyaan obat/keluhan pasien ke apoteker bertugas'
        ],
        requiredCompetencies: [
          'Disiplin kebersihan tinggi, ketelitian membaca angka tanggal kedaluwarsa, dan patuh aturan kewenangan'
        ],
        beginnerLearnableSkills: [
          'Pencatatan inventaris batch di spreadsheet dan tata kelola ruang simpan bersuhu terkontrol'
        ],
        educationOrTrainingNotes:
          'Hanya untuk peran pendukung non-klinis; untuk menjadi Apoteker atau Tenaga Teknis Kefarmasian wajib menempuh pendidikan tinggi Farmasi dan memiliki STR.',
        workEnvironments: ['Gudang alat kesehatan umum, area front-office apotek (kasir umum), atau unit logistik klinik'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_K3_SAFETY_SUPPORT',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'kesehatan',
    secondaryDomains: ['teknik_industri', 'administrasi_logistik'],
    name: 'Asisten Keselamatan & Kesehatan Kerja (K3) Dasar & Kebersihan Higienis Area Kerja',
    categoryLabel: 'Keselamatan Kerja & Higienitas Lingkungan',
    shortDescription:
      'Mengecek kelengkapan rambu keselamatan dan alat pelindung diri (APD) pekerja, memeriksa kotak P3K, serta mencatat daftar periksa kebersihan dan keselamatan bengkel atau pabrik (bukan tenaga medis klinis).',
    characteristics: [
      'Menghubungkan kepedulian pada keselamatan orang lain dengan ketelitian prosedur inspeksi harian',
      'Banyak berkeliling memeriksa kerapian jalur darurat, ketersediaan APD, dan kebersihan tempat kerja',
      'Cocok untuk yang peduli kesehatan/keselamatan namun juga akrab dengan suasana pabrik, proyek, atau bengkel'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.16,
      kebiasaan: 0.26,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 78,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['structured_procedural', 'hands_on_practical', 'interpersonal_social'],
    requiredBasicSkills: [
      'Kepekaan terhadap potensi bahaya kecil (kabel terkelupas, lantai licin, kurang APD) dan berani mengingatkan dengan sopan'
    ],
    developableSkills: [
      'Pengisian formulir inspeksi K3 harian, pemeriksaan isi kotak P3K, dan pelatihan K3 dasar bersertifikat'
    ],
    requirementsOrConstraints: [
      'Posisi Ahli K3 Umum resmi atau tenaga medis perusahaan mensyaratkan pelatihan sertifikasi khusus dan/atau jenjang D3/S1'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan biaya sertifikasi Ahli K3 eksternal atau daftar pabrik'],
    contextRelatedMajors: ['Mesin', 'Elektro', 'Otomotif', 'Tekstil'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke standar umum keselamatan kerja manufaktur SKKNI dan peraturan kewenangan medis UU Kesehatan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_MFG,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENKES_NAKES_STR
      ],
      workDetail: {
        fieldName: 'Asisten Pengawas Keselamatan Kerja (K3) Dasar & Higienitas',
        activityOverview:
          'Mendukung pembudayaan kerja selamat dan bersih melalui pemeriksaan rutin APD, rambu bahaya, APAR/P3K, dan catatan inspeksi harian.',
        generalResponsibilities: [
          'Berjalan keliling memeriksa pemakaian APD (helm, sarung tangan, masker) serta kerapian jalur evakuasi',
          'Mengecek kelengkapan isi kotak P3K dan tanggal kedaluwarsa alat pemadam api ringan sesuai daftar periksa',
          'Mencatat temuan kondisi kurang aman dan meneruskannya ke koordinator K3 atau pimpinan bengkel'
        ],
        requiredCompetencies: [
          'Ketelitian memeriksa checklist keselamatan dan kemampuan mengingatkan rekan kerja dengan sopan namun tegas'
        ],
        beginnerLearnableSkills: [
          'Identifikasi bahaya lingkungan kerja (HIRADC dasar) dan prosedur pelaporan insiden kecil'
        ],
        educationOrTrainingNotes:
          'Dapat dimulai sebagai asisten/helper K3 bagi lulusan SMK; posisi Ahli K3 penuh mensyaratkan sertifikasi resmi Kemnaker.',
        workEnvironments: ['Area pabrik, bengkel besar, gudang logistik, atau fasilitas produksi pangan'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_PHOTO_STUDIO',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'seni_desain',
    secondaryDomains: ['komunikasi_media'],
    name: 'Fotografer Pemula, Asisten Studio Foto & Pencahayaan Acara',
    categoryLabel: 'Fotografi, Studio & Dokumentasi Visual',
    shortDescription:
      'Menyiapkan lampu dan latar pemotretan studio, memotret produk katalog atau momen acara sesuai arahan, memilah hasil foto terbaik, dan merapikan pencahayaan/warna dasar (bukan lowongan aktif).',
    characteristics: [
      'Menuntut kepekaan sudut pandang gambar, kesabaran mengatur posisi objek/orang, dan penguasaan kamera dasar',
      'Menggabungkan aktivitas gerak menata studio/lokasi acara dengan pekerjaan teliti mengolah file foto',
      'Cocok bagi yang senang menangkap momen visual dan menyukai peralatan kamera atau pencahayaan'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.24,
      gaya_berpikir: 0.18,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 68,
      kebiasaan: 68,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 66
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_praktik'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_praktis'],
      kebiasaan: ['biasa_langsung', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_lapangan'],
      kesiapan_praktis: ['siap_kerja']
    },
    supportingIndicators: ['creative_expression', 'hands_on_practical', 'interpersonal_social'],
    requiredBasicSkills: [
      'Pemahaman komposisi foto dasar, pengaturan pencahayaan sederhana, dan keramahan mengarahkan pose klien'
    ],
    developableSkills: [
      'Pengaturan pencahayaan studio 2–3 lampu, penyortiran file RAW/JPG, dan retouching warna natural'
    ],
    requirementsOrConstraints: [
      'Sering membutuhkan jadwal kerja akhir pekan saat acara berlangsung serta ketahanan membawa peralatan kamera'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Tidak mencantumkan daftar studio foto atau tarif kerja pemotretan'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu pada SKKNI Penyiaran/Audio-Visual dan DKV serta Spektrum SMK Broadcasting & Perfilman.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_BCAST,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_DKV
      ],
      workDetail: {
        fieldName: 'Fotografer Pemula & Asisten Studio Foto',
        activityOverview:
          'Membantu persiapan peralatan studio, pengambilan gambar produk atau acara, serta seleksi dan perapian warna dasar hasil foto.',
        generalResponsibilities: [
          'Menata tripod, lampu studio, dan latar belakang foto sesuai konsep pemotretan',
          'Memotret produk usaha, pasfoto, atau dokumentasi acara dengan sudut gambar yang rapi',
          'Memindahkan, mencadangkan (backup), dan merapikan kecerahan warna foto sebelum dikirim ke klien'
        ],
        requiredCompetencies: [
          'Peka terhadap cahaya dan bingkai gambar, komunikatif mengarahkan objek, dan menjaga kebersihan alat kamera'
        ],
        beginnerLearnableSkills: [
          'Teknik pencahayaan produk reflektif dan manajemen arsip foto klien agar tidak hilang'
        ],
        educationOrTrainingNotes:
          'Portofolio contoh foto nyata sangat membantu lulusan SMK masuk sebagai asisten studio atau fotografer junior.',
        workEnvironments: ['Studio foto, ruang pemotretan produk toko online, atau lokasi acara'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_PRINT_OPERATOR',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'seni_desain',
    secondaryDomains: ['administrasi_logistik', 'teknik_industri'],
    name: 'Operator Mesin Cetak Digital, Setting Layout Percetakan & Penjilidan',
    categoryLabel: 'Percetakan Digital & Produksi Grafis',
    shortDescription:
      'Memeriksa ukuran dan garis potong file desain dari pelanggan sebelum dicetak, mengoperasikan mesin cetak banner/stiker/buku, serta memotong dan menjilid hasil cetakan dengan rapi (bukan lowongan aktif).',
    characteristics: [
      'Memadukan ketelitian memeriksa file desain di komputer dengan praktik langsung di mesin cetak dan pemotong',
      'Mengawal pesanan dari file masuk sampai produk cetak rapi siap diambil pelanggan',
      'Cocok untuk yang teliti ukuran, senang melihat desain berubah jadi benda fisik, dan betah kerja toko produksi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.16,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 66,
      kebiasaan: 74,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_teknis'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['creative_expression', 'hands_on_practical', 'structured_procedural'],
    requiredBasicSkills: [
      'Dasar aplikasi desain cetak (ukuran kertas, margin potong/bleed), ketelitian warna, dan ketekunan finishing kertas'
    ],
    developableSkills: [
      'Pengaturan profil warna mesin cetak digital, kalibrasi kertas/stiker, dan teknik jilid rapi'
    ],
    requirementsOrConstraints: [
      'Membutuhkan ketelitian agar tidak salah cetak bahan dalam jumlah besar serta berdiri saat proses finishing'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar usaha percetakan atau besaran gaji operator'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'RPL/PPLG'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke SKKNI Desain Grafis (Kepmenaker No. 126/2023) terkait penyiapan file siap cetak.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_DKV],
      workDetail: {
        fieldName: 'Operator Percetakan Digital & Setting Pracetak',
        activityOverview:
          'Memastikan file desain pelanggan siap cetak, mengoperasikan printer digital format kecil atau besar, dan menyelesaikan pemotongan serta penjilidan.',
        generalResponsibilities: [
          'Mengecek resolusi, ukuran kertas, dan batas potong aman (bleed) pada file desain masuk',
          'Menjalankan proses cetak pada kertas, stiker, atau bahan spanduk serta memantau hasil warna',
          'Memotong, melaminasi, atau menjilid hasil cetak dan mengecek jumlah sesuai nota pesanan'
        ],
        requiredCompetencies: [
          'Teliti satuan sentimeter/milimeter, sabar menghadapi revisi ukuran file pelanggan, dan rapi bekerja manual'
        ],
        beginnerLearnableSkills: [
          'Tata letak imposisi halaman buku dan perawatan kepala cetak (printhead) mesin digital'
        ],
        educationOrTrainingNotes:
          'Sangat terbuka bagi lulusan SMK yang paham dasar desain grafis atau teliti bekerja dengan mesin cetak toko.',
        workEnvironments: ['Gerai percetakan digital, pusat fotokopi modern, atau workshop kemasan produk'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_BROADCAST_AUDIO',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'komunikasi_media',
    secondaryDomains: ['teknik_industri', 'seni_desain'],
    name: 'Operator Audio, Penata Suara Acara (Sound System) & Kru Siaran Studio',
    categoryLabel: 'Audio, Penyiaran & Produksi Suara',
    shortDescription:
      'Memasang mikrofon dan kabel mixer suara, mengatur keseimbangan audio saat siaran podcast, radio, atau acara panggung, serta menjaga kualitas rekaman suara tetap jernih tanpa dengung (bukan lowongan aktif).',
    characteristics: [
      'Menuntut kepekaan telinga terhadap kejernihan suara sekaligus ketelitian kabel dan perangkat audio',
      'Beraktivitas di ruang studio rekaman/siaran atau lokasi acara bersama pengisi suara dan kru produksi',
      'Cocok bagi yang tertarik dunia musik, siaran, atau kelistrikan audio namun tidak selalu ingin tampil di depan kamera'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.18,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 72,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_kreatif'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_praktik'],
      preferensi_lingkungan: ['ling_teknis', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['technical_affinity', 'hands_on_practical', 'creative_expression'],
    requiredBasicSkills: [
      'Pemasangan kabel audio & mikrofon dengan rapi, pengecekan suara dasar (soundcheck), dan ketenangan saat siaran'
    ],
    developableSkills: [
      'Pengaturan mixer audio multi-saluran, penyuntingan suara rekaman podcast/video, dan pencegahan feedback suara'
    ],
    requirementsOrConstraints: [
      'Sering membutuhkan kesiapan datang lebih awal sebelum acara mulai untuk penataan kabel dan soundcheck'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: ['Tidak mencantumkan daftar stasiun penyiaran/vendor sound system atau tarif kru'],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'Elektro'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke SKKNI Penyiaran Televisi & Radio (No. 352/2014 & 111/2018) serta Spektrum SMK Broadcasting.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_BCAST,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_SPEKTRUM_SMK
      ],
      workDetail: {
        fieldName: 'Operator Audio, Penata Suara & Kru Siaran Studio',
        activityOverview:
          'Mengelola perlengkapan suara, mixer audio, dan kejernihan rekaman pada kegiatan penyiaran studio, podcast, maupun acara langsung.',
        generalResponsibilities: [
          'Memasang mikrofon, speaker, dan kabel audio sesuai urutan agar aman dan tidak tersandung',
          'Mengatur volume suara narasumber serta musik latar di mixer saat siaran atau acara berjalan',
          'Menyunting rekaman audio sederhana agar bersih dari gangguan suara bising'
        ],
        requiredCompetencies: [
          'Kepekaan telinga terhadap keseimbangan audio, ketelitian jalur kabel, dan sigap saat gangguan teknis muncul'
        ],
        beginnerLearnableSkills: [
          'Pengoperasian software rekaman/mixing audio digital (DAW dasar) dan tata akustik ruangan sederhana'
        ],
        educationOrTrainingNotes:
          'Bekal praktik Broadcasting atau Elektronika SMK menjadi modal awal yang kuat untuk kru audio pemula.',
        workEnvironments: ['Studio podcast/siaran, ruang kendali audio acara, atau vendor peralatan suara'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_FRONT_OFFICE_LANG',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'bahasa_sastra',
    secondaryDomains: ['komunikasi_media', 'pariwisata_kuliner'],
    name: 'Staf Layanan Informasi, Resepsionis Dwibahasa & Pembuat Terjemahan Ringan Kantor',
    categoryLabel: 'Layanan Bahasa & Informasi Publik',
    shortDescription:
      'Menyambut tamu atau penelepon kantor dalam Bahasa Indonesia dan Bahasa Inggris dasar, menjawab pertanyaan informasi lembaga, serta membantu menerjemahkan teks pengumuman atau panduan ringan (bukan lowongan aktif).',
    characteristics: [
      'Menjadikan kemampuan bahasa dan tata bicara yang santun sebagai kekuatan utama kerja sehari-hari',
      'Banyak berinteraksi menyambut tamu, membalas email/pesan resmi, dan menjaga citra ramah lembaga',
      'Catatan: Berbeda dengan penerjemah tersumpah resmi yang memiliki ujian sertifikasi khusus'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.16,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 72,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_teknis'],
      kesiapan_praktis: ['siap_kerja', 'siap_studi']
    },
    supportingIndicators: ['interpersonal_social', 'structured_procedural', 'academic_aspiration'],
    requiredBasicSkills: [
      'Komunikasi lisan dan tertulis yang jelas dalam Bahasa Indonesia serta percakapan dasar Bahasa Inggris/asing'
    ],
    developableSkills: [
      'Korespondensi bisnis dua bahasa, penyusunan FAQ layanan pengunjung, dan etika front-office'
    ],
    requirementsOrConstraints: [
      'Untuk layanan penerjemahan dokumen resmi hukum/negara dibutuhkan penerjemah tersumpah yang terakreditasi'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar kantor layanan, syarat skor TOEFL/IELTS, atau gaji'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke SKKNI Pengoperasian Komputer dan rujukan umum layanan bahasa/ekraf tanpa data lowongan.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMENPAREKRAF_EKRAF_PARTIAL
      ],
      workDetail: {
        fieldName: 'Resepsionis Layanan Informasi & Staf Komunikasi Dwibahasa Pemula',
        activityOverview:
          'Melayani tamu atau pertanyaan tertulis dalam Bahasa Indonesia dan Inggris dasar serta membantu merapikan materi informasi publik organisasi.',
        generalResponsibilities: [
          'Menyambut pengunjung di meja informasi, mencatat buku tamu, dan mengarahkan ke bagian tujuan',
          'Menjawab pesan pertanyaan layanan melalui telepon, email, atau chat dengan bahasa sopan',
          'Membantu menyunting atau menerjemahkan informasi brosur serta petunjuk dasar non-hukum'
        ],
        requiredCompetencies: [
          'Penguasaan tata bahasa sopan, pengucapan jelas, dan kesiapan mendengar pertanyaan beragam tamu'
        ],
        beginnerLearnableSkills: [
          'Istilah pelayanan tamu internasional dan penulisan surat/email dua bahasa yang ringkas'
        ],
        educationOrTrainingNotes:
          'Cocok untuk lulusan SMK yang gemar berbahasa Inggris/asing; dapat sambil melanjutkan kuliah Sastra atau Komunikasi.',
        workEnvironments: ['Meja resepsionis kantor, pusat informasi publik, klinik/hotel, atau lembaga kursus'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_PARK_NURSERY',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'pertanian_lingkungan',
    name: 'Pekerja Pembibitan Tanaman, Perawatan Taman & Lanskap Area Terbuka',
    categoryLabel: 'Pertamanan, Bibit & Lanskap Hijau',
    shortDescription:
      'Menyiapkan media tanam, menyemai dan menyiram bibit tanaman hias atau pohon, memangkas taman agar rapi, serta merawat area hijau perumahan, kantor, atau wisata alam (bukan lowongan aktif).',
    characteristics: [
      'Sepenuhnya berada di ruang terbuka dekat tanah, udara luar, dan berbagai jenis tanaman',
      'Mengandalkan kesabaran menyiram, memangkas, serta menjaga kebersihan jalur taman setiap hari',
      'Cocok bagi yang lebih sehat dan tenang beraktivitas fisik di alam daripada duduk di ruangan sempit'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.14,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 68,
      gaya_berpikir: 62,
      kebiasaan: 72,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 76,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_eksploratif'],
      gaya_berpikir: ['pikir_praktis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik'],
      preferensi_lingkungan: ['ling_lapangan'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'career_urgency'],
    requiredBasicSkills: [
      'Ketelatenan merawat tanaman hidup, penggunaan perkakas kebun dengan aman, dan ketahanan bekerja di luar ruangan'
    ],
    developableSkills: [
      'Teknik perbanyakan bibit (stek/cangkok), penataan pola taman dasar, dan pembuatan pupuk kompos alami'
    ],
    requirementsOrConstraints: [
      'Terpapar cuaca panas/hujan di luar ruangan serta membutuhkan stamina fisik untuk menyiram, menggali, dan memangkas'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar usaha tanaman/pengelola kawasan atau standar upah'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu pada rujukan umum sektor pertanian dan hortikultura Kementan tanpa daftar lowongan aktif.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMENTAN_AGRIBISNIS_PARTIAL],
      workDetail: {
        fieldName: 'Pekerja Pembibitan Tanaman & Perawatan Taman',
        activityOverview:
          'Menanam, menyiram, memupuk, dan merapikan tanaman hias maupun area hijau agar sehat, subur, dan sedap dipandang.',
        generalResponsibilities: [
          'Mencampur media tanam, mengisi polibag, dan menyemai bibit tanaman secara teratur',
          'Menyiram tanaman sesuai kebutuhan cuaca, menyiangi gulma, dan memangkas ranting kering',
          'Menjaga kebersihan alat berkebun serta mencatat jumlah bibit siap jual atau siap tanam'
        ],
        requiredCompetencies: [
          'Kebiasaan telaten terhadap jadwal rawat makhluk hidup dan kepatuhan keselamatan memakai gunting/alat kebun'
        ],
        beginnerLearnableSkills: [
          'Pengenalan jenis tanaman hias indoor/outdoor dan pencegahan hama daun dasar'
        ],
        educationOrTrainingNotes:
          'Terbuka untuk lulusan SMK yang suka bekerja di alam terbuka dan telaten merawat tanaman.',
        workEnvironments: ['Kebun bibit tanaman hias, taman kawasan perumahan/wisata, atau greenhouse'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_FOOD_PROCESSING',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'pertanian_lingkungan',
    secondaryDomains: ['pariwisata_kuliner', 'administrasi_logistik'],
    name: 'Operator Pengolahan Hasil Tani, Pengemasan Pangan Lokal & Penyortiran Mutu Panen',
    categoryLabel: 'Pascapanen & Pengolahan Pangan',
    shortDescription:
      'Menyortir hasil panen atau bahan pangan lokal berdasarkan ukuran dan kesegaran, mengolah bahan menjadi produk bersih siap jual, menimbang porsi, dan menyegel kemasan sesuai standar higienis (bukan lowongan aktif).',
    characteristics: [
      'Menghubungkan dunia pertanian dengan produksi makanan/bahan pangan yang bersih dan tertata',
      'Bekerja mengikuti standar kebersihan ruangan pangan, timbangan berat bersih, dan kode tanggal produksi',
      'Cocok bagi yang teliti memeriksa mutu bahan alami dan suka aktivitas produksi nyata'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.14,
      kebiasaan: 0.26,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 66,
      gaya_berpikir: 64,
      kebiasaan: 76,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 72
    },
    preferredTendencies: {
      minat: ['minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_praktis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['hands_on_practical', 'structured_procedural', 'career_urgency'],
    requiredBasicSkills: [
      'Kebiasaan higienis (cuci tangan/sarung tangan pangan), ketelitian menyortir bahan baik vs rusak, dan menimbang akurat'
    ],
    developableSkills: [
      'Pengoperasian mesin pengemas/penutup segel pangan (sealer/vacuum) dan pencatatan kode produksi'
    ],
    requirementsOrConstraints: [
      'Menuntut kepatuhan ketat pada kebersihan pakaian kerja pangan dan ketelitian menjaga mutu bahan'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar pabrik/rumah produksi pangan atau standar upah'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke rujukan umum penanganan pascapanen pertanian dan industri pangan dasar tanpa data lowongan.'
      ],
      sources: [CATALOG_SOURCE_REGISTRY.SRC_KEMENTAN_AGRIBISNIS_PARTIAL],
      workDetail: {
        fieldName: 'Operator Penyortiran Hasil Panen & Pengemasan Pangan Lokal',
        activityOverview:
          'Memilah hasil tani/bahan pangan segar, mengolah sesuai prosedur kebersihan, menimbang tepat takaran, dan mengemas agar awet serta layak jual.',
        generalResponsibilities: [
          'Memisahkan bahan baku segar dari bahan yang memar atau tidak memenuhi standar mutu',
          'Mencuci, mengeringkan, atau mengolah bahan pangan sesuai takaran kebersihan yang ditentukan',
          'Menimbang, mengemas, menempel label tanggal produksi/kedaluwarsa, dan merapikan dus penyimpanan'
        ],
        requiredCompetencies: [
          'Disiplin sanitasi pangan, kesabaran menyortir barang, dan ketelitian angka timbangan'
        ],
        beginnerLearnableSkills: [
          'Standar penyimpanan bahan pangan kering/dingin dan perawatan mesin pengemas ringan'
        ],
        educationOrTrainingNotes: 'Terbuka untuk lulusan SMK yang teliti dan disiplin menjaga kebersihan produk pangan.',
        workEnvironments: ['Rumah pengemasan produk tani, koperasi pangan, atau unit produksi olahan UMKM'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_HR_COMMUNITY_SUPPORT',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'psikologi_sosial',
    secondaryDomains: ['administrasi_logistik', 'komunikasi_media'],
    name: 'Asisten Administrasi SDM (HR), Penjadwal Wawancara & Layanan Karyawan Pemula',
    categoryLabel: 'Sumber Daya Manusia & Dukungan Tim',
    shortDescription:
      'Membantu menata berkas lamaran masuk, menghubungi pelamar untuk jadwal wawancara, membantu orientasi karyawan baru, dan mencatat daftar hadir atau pelatihan tim (bukan Psikolog maupun Asesor klinis berizin).',
    characteristics: [
      'Menghubungkan minat memahami orang lain dengan kerapian administrasi data karyawan dan jadwal rekrutmen',
      'Banyak berkomunikasi ramah kepada pelamar dan rekan kerja lintas bagian sambil menjaga kerahasiaan data pribadi',
      'Catatan Penting: Berbeda dengan Psikolog atau Konselor berizin yang mensyaratkan S1 + Profesi Psikologi'
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
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_akademik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim', 'ling_teknis'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['interpersonal_social', 'structured_procedural', 'analytical_depth'],
    requiredBasicSkills: [
      'Komunikasi sopan dan ramah ke pelamar kerja, ketertiban arsip data pribadi, serta dasar spreadsheet'
    ],
    developableSkills: [
      'Penjadwalan alur seleksi wawancara, penyusunan materi orientasi karyawan baru, dan rekap kehadiran pelatihan'
    ],
    requirementsOrConstraints: [
      'Posisi spesialis HRD, Rekrutmen Analis, dan Psikolog Industri pada perusahaan menengah/besar umumnya mensyaratkan S1 Psikologi/Manajemen SDM'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar perusahaan penerima atau standar upah staf admin HR'],
    productionMetadata: {
      verificationStatus: 'PARTIALLY_VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Mengacu ke SKKNI Pengoperasian Komputer & kerangka umum layanan sosial/SDM sebagai posisi asisten administrasi pemula.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS,
        CATALOG_SOURCE_REGISTRY.SRC_KEMDIKBUD_PENDAMPING_PARTIAL
      ],
      workDetail: {
        fieldName: 'Asisten Administrasi SDM (HR Support) Pemula',
        activityOverview:
          'Mendukung bagian kepegawaian/SDM dalam pencatatan berkas pelamar, pengaturan jadwal wawancara, dan kelancaran administrasi pelatihan karyawan.',
        generalResponsibilities: [
          'Mengelompokkan berkas CV masuk dan mengonfirmasi jadwal wawancara dengan calon pelamar',
          'Menyiapkan formulir pengenalan kerja bagi rekan baru serta mencatat daftar hadir pelatihan',
          'Menjaga kerahasiaan data identitas pribadi seluruh karyawan di ruang arsip/komputer'
        ],
        requiredCompetencies: [
          'Sikap ramah dan netral kepada semua orang, menjaga rahasia data, serta rapi mengolah daftar jadwal'
        ],
        beginnerLearnableSkills: [
          'Pengelolaan spreadsheet pelamar kerja dan pencatatan kalender program pelatihan internal'
        ],
        educationOrTrainingNotes:
          'Lulusan SMK dapat memulai di posisi pendukung administrasi; pengembangan karier HR lanjutan dianjurkan menempuh kuliah Psikologi/Manajemen.',
        workEnvironments: ['Kantor kepegawaian/HRD perusahaan, unit pelatihan kerja, atau lembaga sosial'],
        isVacancyListing: false
      }
    }
  },
  {
    id: 'PROD_JOB_PARALEGAL_SUPPORT',
    isSimulationFixture: false,
    pathCategory: 'bekerja',
    domainId: 'hukum_keadilan',
    secondaryDomains: ['administrasi_logistik', 'bahasa_sastra'],
    name: 'Staf Pemberkasan Perjanjian Umum, Layanan Tata Tertib & Kepatuhan Administrasi',
    categoryLabel: 'Administrasi Kepatuhan & Pemberkasan Aturan',
    shortDescription:
      'Memeriksa kelengkapan formulir syarat administrasi, mencatat arsip masa berlaku dokumen izin atau perjanjian standar kantor, dan membantu layanan informasi prosedur kerja (bukan advokat maupun pemberi nasihat hukum berizin).',
    characteristics: [
      'Menekankan ketelitian membaca syarat formulir, tanggal berlaku berkas, dan kepatuhan urutan prosedur',
      'Bekerja rapi di kantor layanan publik, koperasi, atau perusahaan yang banyak mengelola dokumen perizinan',
      'Catatan Penting: Praktik advokat, notaris, hakim, dan jaksa wajib menempuh S1 Ilmu Hukum & pendidikan profesi'
    ],
    relevantDimensions: ALL_DIMS,
    dimensionWeights: {
      minat: 0.2,
      gaya_berpikir: 0.2,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.14,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 72,
      kebiasaan: 76,
      kemampuan_saat_ini: 62,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_sosial'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_studi']
    },
    supportingIndicators: ['structured_procedural', 'analytical_depth', 'interpersonal_social'],
    requiredBasicSkills: [
      'Ketelitian membaca syarat tertulis sampai tuntas, menjaga kerahasiaan berkas, dan mencatat tanggal pengingat'
    ],
    developableSkills: [
      'Verifikasi kelengkapan berkas perizinan/administrasi standar dan tata kelola dokumen arsip kepatuhan'
    ],
    requirementsOrConstraints: [
      'Lulusan SMK hanya menjalankan tugas pemberkasan & administrasi umum; profesi Advokat wajib S1 Ilmu Hukum dan lulus PKPA/ujian profesi (UU No. 18/2003)'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: ['Tidak mencantumkan daftar kantor layanan hukum/perusahaan atau standar upah'],
    productionMetadata: {
      verificationStatus: 'VERIFIED',
      lastVerifiedDate: '2026-11-22',
      verificationLimitations: [
        'Terbatas ketat pada administrasi pemberkasan & layanan informasi non-advokasi sesuai UU No. 18/2003 dan SKKNI Komputer.'
      ],
      sources: [
        CATALOG_SOURCE_REGISTRY.SRC_UU_ADVOKAT_HUKUM,
        CATALOG_SOURCE_REGISTRY.SRC_KEMNAKER_SKKNI_OPS
      ],
      workDetail: {
        fieldName: 'Staf Pemberkasan Perjanjian Umum & Kepatuhan Administrasi',
        activityOverview:
          'Memastikan berkas perjanjian standar, formulir izin, dan arsip kepatuhan organisasi lengkap syaratnya serta tersimpan tertib.',
        generalResponsibilities: [
          'Memeriksa kelengkapan lampiran tanda tangan, identitas, dan tanggal pada berkas administrasi standar',
          'Mencatat pengingat masa berlaku dokumen izin atau perjanjian rutin sebelum kedaluwarsa',
          'Membantu menginformasikan tata cara pengisian formulir sesuai panduan resmi kepada pemohon'
        ],
        requiredCompetencies: [
          'Integritas tinggi menjaga dokumen penting, cermat membaca detail aturan tertulis, dan komunikasi netral'
        ],
        beginnerLearnableSkills: [
          'Penomoran sistem arsip kepatuhan dan penyusunan checklist kelengkapan berkas'
        ],
        educationOrTrainingNotes:
          'Dapat menjadi pijakan kerja awal lulusan SMK yang berminat pada dunia aturan sambil mempersiapkan kuliah S1 Ilmu Hukum.',
        workEnvironments: ['Unit layanan perizinan, bagian administrasi kontrak perusahaan, atau kantor notaris (staf arsip)'],
        isVacancyListing: false
      }
    }
  }
];
