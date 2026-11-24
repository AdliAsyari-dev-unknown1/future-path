/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 5: Simulation Fixture Catalog (Data Simulasi Terstruktur)
 *
 * IMPORTANT: Seluruh kandidat di file ini adalah DATA FIXTURE SIMULASI (`isSimulationFixture: true`)
 * untuk menguji logika pencocokan (matching engine) Phase 5 secara objektif.
 * Data ini TIDAK mengarang nama kampus resmi, lowongan kerja aktif, besaran biaya kuliah,
 * ataupun nominal modal usaha. Katalog produksi terverifikasi akan dikembangkan pada Phase 7.
 */

import { RecommendationCandidate } from '../types/recommendation';

export const SIMULATION_CANDIDATES: RecommendationCandidate[] = [
  // =========================================================================
  // JALUR A: BEKERJA (5 KANDIDAT SIMULASI)
  // =========================================================================
  {
    id: 'SIM_JOB_TECH_SYS',
    isSimulationFixture: true,
    pathCategory: 'bekerja',
    name: 'Bidang Teknisi Sistem & Pemeliharaan Perangkat (Simulasi)',
    categoryLabel: 'Pekerjaan Teknis & Sistem',
    shortDescription:
      'Kandidat bidang kerja yang berfokus pada instalasi, troubleshooting, pemeliharaan perangkat keras/lunak, dan keandalan sistem teknis.',
    characteristics: [
      'Menangani konfigurasi perangkat, jaringan, atau sistem perangkat lunak secara sistematis',
      'Mengandalkan ketelitian prosedur dan pemecahan masalah teknis berbasis logika',
      'Membutuhkan kesiapan mengikuti standar operasional dan keamanan kerja'
    ],
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
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.22,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 72,
      kebiasaan: 70,
      kemampuan_saat_ini: 68,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 70
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_praktik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['technical_affinity', 'structured_procedural', 'analytical_depth'],
    requiredBasicSkills: [
      'Pemahaman dasar cara kerja perangkat atau sistem teknis',
      'Kemampuan membaca panduan teknis dan melakukan pemeriksaan bertahap'
    ],
    developableSkills: [
      'Troubleshooting error tingkat lanjut dan dokumentasi pemeliharaan',
      'Penguasaan standar keselamatan kerja (K3) dan sertifikasi teknis industri'
    ],
    requirementsOrConstraints: [
      'Membutuhkan kesiapan mengikuti SOP dan ketekunan menangani perbaikan berulang',
      'Detail kualifikasi dan lokasi kerja resmi menunggu katalog produksi Phase 7'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: [
      'Daftar perusahaan mitra & kualifikasi rekrutmen terverifikasi (Phase 7)',
      'Standar sertifikasi kompetensi spesifik tiap sektor (Phase 7)'
    ],
    contextRelatedMajors: ['RPL/PPLG', 'TKJ', 'Elektro']
  },
  {
    id: 'SIM_JOB_FIELD_OPS',
    isSimulationFixture: true,
    pathCategory: 'bekerja',
    name: 'Bidang Operator & Teknisi Bengkel / Lapangan (Simulasi)',
    categoryLabel: 'Pekerjaan Praktik & Operasional',
    shortDescription:
      'Kandidat bidang kerja yang berfokus pada perakitan fisik, pengoperasian mesin/peralatan, dan eksekusi tugas lapangan atau workshop.',
    characteristics: [
      'Aktivitas kerja didominasi praktik langsung menggunakan alat dan mesin',
      'Mengutamakan ketahanan fisik, kecepatan eksekusi, dan kepatuhan standar kerja',
      'Cocok dengan lingkungan bengkel, produksi, atau area operasional dinamis'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.14,
      gaya_berpikir: 0.14,
      kebiasaan: 0.22,
      kemampuan_saat_ini: 0.2,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.14
    },
    dimensionExpectations: {
      minat: 66,
      gaya_berpikir: 66,
      kebiasaan: 74,
      kemampuan_saat_ini: 68,
      preferensi_lingkungan: 72,
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
      'Keterampilan praktik dasar penggunaan perkakas atau mesin jurusan',
      'Kedisiplinan merawat alat kerja dan mematuhi prosedur keselamatan'
    ],
    developableSkills: [
      'Presisi perakitan skala industri dan kecepatan diagnosis kerusakan fisik',
      'Adaptasi terhadap ritme kerja shift dan target produksi'
    ],
    requirementsOrConstraints: [
      'Memerlukan kesiapan fisik untuk aktivitas berdiri atau bergerak aktif di bengkel/lapangan',
      'Detail syarat medis dan standar industri spesifik menunggu katalog Phase 7'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: [
      'Kebutuhan spesifik sektor manufaktur/otomotif/tekstil (Phase 7)',
      'Informasi skema magang dan penempatan industri terverifikasi (Phase 7)'
    ],
    contextRelatedMajors: ['Mesin', 'Otomotif', 'Tekstil', 'Elektro']
  },
  {
    id: 'SIM_JOB_DIGITAL_CREATIVE',
    isSimulationFixture: true,
    pathCategory: 'bekerja',
    name: 'Bidang Produksi Visual & Konten Digital (Simulasi)',
    categoryLabel: 'Pekerjaan Kreatif & Media',
    shortDescription:
      'Kandidat bidang kerja yang berfokus pada penyusunan visual, desain antarmuka/grafis, penyuntingan audio-video, dan penyajian karya kreatif.',
    characteristics: [
      'Menghasilkan karya visual yang komunikatif, rapi, dan memperhatikan estetika',
      'Menggabungkan kepekaan desain dengan penguasaan perangkat lunak kreatif',
      'Sering berkolaborasi dengan tim atau klien untuk menyempurnakan konsep'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.25,
      gaya_berpikir: 0.22,
      kebiasaan: 0.12,
      kemampuan_saat_ini: 0.19,
      preferensi_lingkungan: 0.14,
      kesiapan_praktis: 0.08
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 72,
      kebiasaan: 65,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_sosial'],
      gaya_berpikir: ['pikir_kreatif'],
      kebiasaan: ['biasa_mandiri', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_tim'],
      kesiapan_praktis: ['siap_kerja', 'siap_usaha']
    },
    supportingIndicators: ['creative_expression', 'interpersonal_social', 'autonomy_independent'],
    requiredBasicSkills: [
      'Kepekaan komposisi visual, kerapian desain, atau penyuntingan dasar',
      'Kumpulan contoh karya/portofolio sederhana untuk menunjukkan gaya kerja'
    ],
    developableSkills: [
      'Penguasaan perangkat lunak produksi media tingkat lanjut',
      'Penerjemahan kebutuhan audiens/klien menjadi konsep visual efektif'
    ],
    requirementsOrConstraints: [
      'Memerlukan portofolio karya nyata dan keterbukaan terhadap revisi desain',
      'Daftar studio/agensi dan kebutuhan spesifikasi alat menunggu Phase 7'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: [
      'Standar portofolio industri kreatif & media terverifikasi (Phase 7)'
    ],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'RPL/PPLG', 'Tekstil']
  },
  {
    id: 'SIM_JOB_TECH_SUPPORT',
    isSimulationFixture: true,
    pathCategory: 'bekerja',
    name: 'Bidang Layanan Teknis & Koordinasi Pengguna (Simulasi)',
    categoryLabel: 'Pekerjaan Teknis & Komunikasi',
    shortDescription:
      'Kandidat bidang kerja yang menjembatani pemahaman teknis dengan komunikasi langsung kepada pengguna, tim, atau pelanggan.',
    characteristics: [
      'Menjelaskan solusi teknis dengan bahasa yang mudah dipahami orang lain',
      'Menangani kendala pengguna sambil menjaga sikap ramah dan solutif',
      'Memadukan kemampuan berkomunikasi dengan pemahaman dasar sistem atau produk'
    ],
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
      gaya_berpikir: 0.16,
      kebiasaan: 0.18,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.18,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 70,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 74,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_teknis'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_tim', 'ling_teknis'],
      kesiapan_praktis: ['siap_kerja', 'siap_terstruktur']
    },
    supportingIndicators: ['interpersonal_social', 'technical_affinity', 'hands_on_practical'],
    requiredBasicSkills: [
      'Kemampuan mendengarkan keluhan dan menjelaskan langkah solusi secara runtut',
      'Pemahaman dasar penggunaan perangkat atau alur layanan teknis'
    ],
    developableSkills: [
      'Manajemen situasi pelanggan yang mendesak dan dokumentasi tiket layanan',
      'Pendalaman pengetahuan produk atau sistem yang ditangani'
    ],
    requirementsOrConstraints: [
      'Memerlukan kenyamanan berinteraksi intensif dengan berbagai tipe orang',
      'Detail unit layanan industri menunggu katalog produksi Phase 7'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: [
      'Contoh peran layanan teknis lintas bidang yang terverifikasi (Phase 7)'
    ],
    contextRelatedMajors: ['TKJ', 'RPL/PPLG', 'Otomotif', 'BP/Broadcasting Perfilman']
  },
  {
    id: 'SIM_JOB_ADMIN_QC',
    isSimulationFixture: true,
    pathCategory: 'bekerja',
    name: 'Bidang Pemeriksaan Mutu & Dokumentasi Teknis (Simulasi)',
    categoryLabel: 'Pekerjaan Terstruktur & Analisis',
    shortDescription:
      'Kandidat bidang kerja yang berfokus pada pengecekan kualitas hasil produksi, pencatatan data, dan penyusunan laporan sesuai standar.',
    characteristics: [
      'Menekankan ketelitian detail, konsistensi aturan, dan kerapian pencatatan',
      'Cocok untuk peserta yang nyaman bekerja dengan daftar periksa dan evaluasi objektif',
      'Menghindari kesalahan kerja melalui pemantauan prosedur yang disiplin'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.14,
      gaya_berpikir: 0.24,
      kebiasaan: 0.24,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 64,
      gaya_berpikir: 74,
      kebiasaan: 76,
      kemampuan_saat_ini: 64,
      preferensi_lingkungan: 68,
      kesiapan_praktis: 68
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_akademik'],
      gaya_berpikir: ['pikir_sistematis', 'pikir_analitis'],
      kebiasaan: ['biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_terstruktur', 'siap_kerja']
    },
    supportingIndicators: ['structured_procedural', 'analytical_depth', 'technical_affinity'],
    requiredBasicSkills: [
      'Ketelitian membaca parameter ukuran/data dan menyusun catatan kerja rapi',
      'Kepatuhan terhadap daftar periksa dan prosedur evaluasi'
    ],
    developableSkills: [
      'Teknik inspeksi mutu terstandar dan penyusunan laporan evaluasi periodik',
      'Penguasaan perangkat pengolah data atau alat ukur presisi'
    ],
    requirementsOrConstraints: [
      'Memerlukan kesabaran menghadapi tugas pengawasan berulang dan teliti',
      'Standar sertifikasi mutu tiap sektor menunggu katalog Phase 7'
    ],
    resourceProfile: 'structured_industry',
    missingCatalogInfo: [
      'Rincian standar kualitas industri terkait jurusan (Phase 7)'
    ],
    contextRelatedMajors: ['Tekstil', 'Mesin', 'Elektro', 'RPL/PPLG']
  },

  // =========================================================================
  // JALUR B: KULIAH (5 KANDIDAT SIMULASI)
  // =========================================================================
  {
    id: 'SIM_EDU_APPLIED_TECH',
    isSimulationFixture: true,
    pathCategory: 'kuliah',
    name: 'Bidang Studi Vokasi Rekayasa & Sistem Terapan (Simulasi)',
    categoryLabel: 'Pendidikan Lanjut Terapan',
    shortDescription:
      'Kandidat bidang studi lanjut yang menggabungkan pendalaman konsep teknik/komputasi dengan proyek terapan di laboratorium dan industri.',
    characteristics: [
      'Memperdalam pemahaman cara kerja sistem, perancangan, dan analisis teknis',
      'Cocok bagi siswa yang ingin meningkatkan kompetensi keahlian ke level terapan lanjutan',
      'Menyeimbangkan teori inti dengan tugas praktikum dan proyek terstruktur'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.25,
      gaya_berpikir: 0.25,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 74,
      kebiasaan: 68,
      kemampuan_saat_ini: 58,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_teknis'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_studi', 'siap_terstruktur']
    },
    supportingIndicators: ['academic_aspiration', 'technical_affinity', 'analytical_depth'],
    requiredBasicSkills: [
      'Kemauan mempelajari konsep teknis secara bertahap dan membaca referensi terstruktur',
      'Dasar logika pemecahan masalah atau praktik kejuruan yang dapat terus diasah'
    ],
    developableSkills: [
      'Perancangan sistem terapan, penulisan laporan ilmiah, dan riset proyek',
      'Penguasaan bahasa teknis/asing dan metode pengujian sistematis'
    ],
    requirementsOrConstraints: [
      'Memerlukan komitmen waktu belajar berkelanjutan dan kesiapan seleksi masuk pendidikan tinggi',
      'Daftar politeknik/program studi resmi dan jalur beasiswa menunggu katalog Phase 7'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: [
      'Daftar program studi vokasi/sarjana terapan terverifikasi (Phase 7)',
      'Informasi jalur masuk & pembiayaan pendidikan resmi (Phase 7)'
    ],
    contextRelatedMajors: ['RPL/PPLG', 'TKJ', 'Elektro', 'Mesin']
  },
  {
    id: 'SIM_EDU_DESIGN_MEDIA',
    isSimulationFixture: true,
    pathCategory: 'kuliah',
    name: 'Bidang Studi Desain, Komunikasi Visual & Media (Simulasi)',
    categoryLabel: 'Pendidikan Lanjut Kreatif & Media',
    shortDescription:
      'Kandidat bidang studi lanjut yang mendalami perancangan visual, penceritaan media, produksi audio-visual, dan estetika karya.',
    characteristics: [
      'Mengeksplorasi konsep desain, komunikasi visual, dan produksi karya orisinal',
      'Menuntut kepekaan ide kreatif sekaligus kemampuan menjelaskan konsep di balik karya',
      'Memadukan tugas studio kreatif dengan kajian teori komunikasi dan media'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
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
      gaya_berpikir: 72,
      kebiasaan: 64,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 60
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_akademik'],
      gaya_berpikir: ['pikir_kreatif'],
      kebiasaan: ['biasa_mandiri', 'biasa_kolaboratif'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_komunikasi'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_tim'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['creative_expression', 'academic_aspiration', 'interpersonal_social'],
    requiredBasicSkills: [
      'Ketertarikan menyusun ide visual dan keterbukaan bereksperimen dengan bentuk karya',
      'Kemauan menerima kritik konstruktif untuk pengembangan desain'
    ],
    developableSkills: [
      'Penyusunan portofolio karya konseptual dan penulisan kajian desain',
      'Teknik presentasi ide dan kolaborasi produksi media lintas peran'
    ],
    requirementsOrConstraints: [
      'Memerlukan ketekunan menyelesaikan proyek studio dan kesiapan menyusun portofolio',
      'Rincian perguruan tinggi dan syarat seleksi portofolio menunggu Phase 7'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: [
      'Daftar program studi desain/media & ketentuan seleksi karya (Phase 7)'
    ],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'Tekstil', 'RPL/PPLG']
  },
  {
    id: 'SIM_EDU_PRACTICAL_ENG',
    isSimulationFixture: true,
    pathCategory: 'kuliah',
    name: 'Bidang Studi Diploma Teknologi Praktik & Manufaktur (Simulasi)',
    categoryLabel: 'Pendidikan Vokasi Lapangan & Bengkel',
    shortDescription:
      'Kandidat bidang studi vokasi berorientasi praktikum intensif di bengkel/laboratorium untuk memperdalam teknologi manufaktur, mesin, atau kelistrikan.',
    characteristics: [
      'Porsi praktikum bengkel dan aplikasi lapangan lebih dominan dibanding teori abstrak murni',
      'Menghubungkan keterampilan tangan SMK dengan penguasaan teknik tingkat madya',
      'Cocok bagi siswa praktikal yang tetap ingin meningkatkan kualifikasi akademik terapan'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.18,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.16,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 68,
      kebiasaan: 70,
      kemampuan_saat_ini: 60,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_praktik', 'minat_akademik', 'minat_teknis'],
      gaya_berpikir: ['pikir_praktis', 'pikir_sistematis'],
      kebiasaan: ['biasa_langsung', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_teknis'],
      kesiapan_praktis: ['siap_studi', 'siap_kerja']
    },
    supportingIndicators: ['hands_on_practical', 'academic_aspiration', 'structured_procedural'],
    requiredBasicSkills: [
      'Kenyamanan bekerja dengan alat praktik dan kedisiplinan prosedur bengkel',
      'Kesiapan mempelajari dasar perhitungan teknik terapan'
    ],
    developableSkills: [
      'Penguasaan sistem produksi terotomasi dan pemeliharaan mesin lanjutan',
      'Penyusunan laporan teknis dan manajemen bengkel terstruktur'
    ],
    requirementsOrConstraints: [
      'Memerlukan keseimbangan antara praktik bengkel dan kedisiplinan tugas teori terapan',
      'Informasi politeknik dan jurusan vokasi resmi menunggu katalog Phase 7'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: [
      'Katalog politeknik vokasi & skema jalur prestasi SMK (Phase 7)'
    ],
    contextRelatedMajors: ['Mesin', 'Otomotif', 'Elektro', 'Tekstil']
  },
  {
    id: 'SIM_EDU_COMM_MGMT',
    isSimulationFixture: true,
    pathCategory: 'kuliah',
    name: 'Bidang Studi Komunikasi, Manajemen & Bisnis Terapan (Simulasi)',
    categoryLabel: 'Pendidikan Lanjut Sosial & Bisnis',
    shortDescription:
      'Kandidat bidang studi yang mempelajari komunikasi organisasi, pengelolaan tim, pemasaran, serta perencanaan bisnis berbasis analisis.',
    characteristics: [
      'Berpusat pada interaksi manusia, presentasi gagasan, dan koordinasi kelompok',
      'Mengolah data pasar dan perilaku audiens menjadi strategi komunikasi atau usaha',
      'Cocok bagi siswa komunikatif yang ingin memperkuat fondasi konseptual dan manajerial'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.2,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.12,
      preferensi_lingkungan: 0.16,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 72,
      gaya_berpikir: 68,
      kebiasaan: 66,
      kemampuan_saat_ini: 56,
      preferensi_lingkungan: 72,
      kesiapan_praktis: 60
    },
    preferredTendencies: {
      minat: ['minat_sosial', 'minat_usaha', 'minat_akademik'],
      gaya_berpikir: ['pikir_kreatif', 'pikir_analitis'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_komunikasi', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_tim'],
      kesiapan_praktis: ['siap_studi', 'siap_usaha']
    },
    supportingIndicators: ['interpersonal_social', 'enterprising_business', 'academic_aspiration'],
    requiredBasicSkills: [
      'Kemauan berdiskusi, berkolaborasi, dan belajar menyampaikan gagasan secara terstruktur',
      'Minat mengamati kebutuhan masyarakat atau pengguna'
    ],
    developableSkills: [
      'Komunikasi publik, negosiasi, serta analisis perencanaan proyek dan usaha',
      'Penulisan proposal dan pengelolaan proyek kelompok'
    ],
    requirementsOrConstraints: [
      'Memerlukan keterbukaan terhadap kerja kelompok, diskusi kelas, dan presentasi',
      'Pilihan program studi resmi menunggu katalog Phase 7'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: [
      'Daftar program studi komunikasi/manajemen & jalur masuk terverifikasi (Phase 7)'
    ],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'TKJ', 'RPL/PPLG']
  },
  {
    id: 'SIM_EDU_SYSTEM_ANALYSIS',
    isSimulationFixture: true,
    pathCategory: 'kuliah',
    name: 'Bidang Studi Informatika, Data & Analisis Sistem (Simulasi)',
    categoryLabel: 'Pendidikan Lanjut Analitis & Komputasi',
    shortDescription:
      'Kandidat bidang studi yang menekankan logika matematis, perancangan perangkat lunak/algoritma, serta analisis akar masalah berbasis data.',
    characteristics: [
      'Mengutamakan kedalaman berpikir analitis, riset mandiri, dan konsistensi logika',
      'Mempelajari literatur teknis mendalam serta pengembangan sistem terstruktur',
      'Cocok bagi peserta yang senang bertanya "mengapa sistem bekerja demikian"'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.26,
      gaya_berpikir: 0.28,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.1,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.1
    },
    dimensionExpectations: {
      minat: 76,
      gaya_berpikir: 78,
      kebiasaan: 68,
      kemampuan_saat_ini: 54,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 62
    },
    preferredTendencies: {
      minat: ['minat_akademik', 'minat_teknis'],
      gaya_berpikir: ['pikir_analitis', 'pikir_sistematis'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_analitis', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_studi']
    },
    supportingIndicators: ['analytical_depth', 'academic_aspiration', 'technical_affinity'],
    requiredBasicSkills: [
      'Ketahanan berpikir logis dan kemauan mempelajari teori/literatur secara bertahap',
      'Kebiasaan mencatat atau menelusuri alur sebab-akibat masalah'
    ],
    developableSkills: [
      'Pemodelan algoritma, analisis data terstruktur, dan riset ilmiah terapan',
      'Penguasaan literatur teknis berbahasa Inggris dan kerja proyek rekayasa'
    ],
    requirementsOrConstraints: [
      'Menuntut kesiapan menghadapi bacaan teori padat dan latihan pemecahan masalah abstrak',
      'Detail program studi dan syarat seleksi resmi menunggu Phase 7'
    ],
    resourceProfile: 'academic_study',
    missingCatalogInfo: [
      'Daftar program studi informatika/komputasi resmi (Phase 7)'
    ],
    contextRelatedMajors: ['RPL/PPLG', 'TKJ', 'Elektro']
  },

  // =========================================================================
  // JALUR C: WIRAUSAHA (5 KANDIDAT SIMULASI — TERMASUK MODAL TERBATAS)
  // =========================================================================
  {
    id: 'SIM_BIZ_LOW_CAP_SERVICE',
    isSimulationFixture: true,
    pathCategory: 'wirausaha',
    name: 'Usaha Jasa Perbaikan & Layanan Teknis Skala Awal (Simulasi)',
    categoryLabel: 'Wirausaha Jasa — Sumber Daya Terbatas',
    shortDescription:
      'Kandidat jenis usaha berbasis keahlian teknis/perbaikan (servis perangkat, instalasi ringan, atau perawatan berkala) yang dapat dimulai dari skala kecil tanpa stok barang besar.',
    characteristics: [
      'Mengandalkan keahlian praktik langsung dan kepercayaan pelanggan sekitar',
      'Dapat dimulai bertahap dengan sumber daya/modal terbatas dari pesanan awal',
      'Menuntut kemandirian, ketekunan melayani klien, dan ketelitian pengerjaan'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
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
      kesiapan_praktis: 48 // Low-capital friendly floor!
    },
    preferredTendencies: {
      minat: ['minat_usaha', 'minat_praktik', 'minat_teknis'],
      gaya_berpikir: ['pikir_praktis', 'pikir_kreatif'],
      kebiasaan: ['biasa_mandiri', 'biasa_langsung'],
      kemampuan_saat_ini: ['mampu_praktik', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_lapangan', 'ling_individu'],
      kesiapan_praktis: ['siap_usaha', 'siap_kerja']
    },
    supportingIndicators: ['enterprising_business', 'hands_on_practical', 'autonomy_independent'],
    requiredBasicSkills: [
      'Satu keterampilan teknis/praktik dasar yang bisa ditawarkan sebagai jasa nyata',
      'Kesediaan berkomunikasi jujur mengenai estimasi pengerjaan kepada pelanggan'
    ],
    developableSkills: [
      'Penetapan harga jasa yang wajar, pencatatan pemasukan sederhana, dan layanan purnajual',
      'Pengembangan peralatan kerja secara bertahap dari hasil jasa awal'
    ],
    requirementsOrConstraints: [
      'Dapat dimulai dengan sumber daya terbatas berbasis pesanan, namun menuntut keandalan hasil kerja',
      'Panduan legalitas mikro & contoh rincian usaha terverifikasi menunggu Phase 7'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Panduan legalitas usaha mikro & inkubasi lokal terverifikasi (Phase 7)'
    ],
    contextRelatedMajors: ['Otomotif', 'Elektro', 'TKJ', 'Mesin']
  },
  {
    id: 'SIM_BIZ_DIGITAL_FREELANCE',
    isSimulationFixture: true,
    pathCategory: 'wirausaha',
    name: 'Usaha Jasa Desain, Konten & Karya Digital Mandiri (Simulasi)',
    categoryLabel: 'Wirausaha Kreatif Digital — Modal Ringan',
    shortDescription:
      'Kandidat jenis usaha jasa kreatif digital (desain grafis, pembuatan website sederhana, atau penyuntingan video) berbasis portofolio dan perangkat kerja dasar.',
    characteristics: [
      'Berfokus pada kreativitas visual atau solusi digital bagi UMKM dan klien personal',
      'Fleksibel dikerjakan mandiri dengan biaya awal yang relatif ringan bila perangkat tersedia',
      'Menuntut disiplin tenggat waktu pribadi serta kemampuan mempromosikan portofolio'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
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
      kesiapan_praktis: 48
    },
    preferredTendencies: {
      minat: ['minat_kreatif', 'minat_usaha', 'minat_teknis'],
      gaya_berpikir: ['pikir_kreatif'],
      kebiasaan: ['biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_kreatif', 'mampu_teknis'],
      preferensi_lingkungan: ['ling_kreatif', 'ling_individu'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['creative_expression', 'autonomy_independent', 'enterprising_business'],
    requiredBasicSkills: [
      'Keterampilan dasar membuat contoh karya digital atau visual yang rapi',
      'Kemandirian mengatur jadwal pengerjaan tanpa pengawasan langsung'
    ],
    developableSkills: [
      'Penyusunan katalog/portofolio daring, negosiasi revisi, dan komunikasi penawaran klien',
      'Pengelolaan keuangan jasa mandiri dan pemasaran digital bertahap'
    ],
    requirementsOrConstraints: [
      'Memerlukan akses minimal ke perangkat kerja (atau fasilitas bersama) dan disiplin tenggat',
      'Referensi ekosistem klien & modul usaha kreatif menunggu Phase 7'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Contoh skema jasa digital terverifikasi & panduan kontrak sederhana (Phase 7)'
    ],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'RPL/PPLG', 'Tekstil']
  },
  {
    id: 'SIM_BIZ_MICRO_WORKSHOP',
    isSimulationFixture: true,
    pathCategory: 'wirausaha',
    name: 'Usaha Bengkel atau Produksi Karya Skala Mikro (Simulasi)',
    categoryLabel: 'Wirausaha Produksi & Bengkel',
    shortDescription:
      'Kandidat jenis usaha pembuatan produk fisik, konveksi/kustomisasi tekstil, atau workshop teknik skala kecil yang membutuhkan peralatan dan ruang kerja memadai.',
    characteristics: [
      'Menghasilkan barang nyata atau layanan bengkel terstruktur untuk pasar lokal',
      'Membutuhkan manajemen bahan baku, alat kerja, dan kedisiplinan kualitas produk',
      'Sering memerlukan kolaborasi mitra atau kesiapan sumber daya awal yang lebih terencana'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.18,
      gaya_berpikir: 0.14,
      kebiasaan: 0.2,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.12,
      kesiapan_praktis: 0.18
    },
    dimensionExpectations: {
      minat: 70,
      gaya_berpikir: 66,
      kebiasaan: 72,
      kemampuan_saat_ini: 68,
      preferensi_lingkungan: 70,
      kesiapan_praktis: 72
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
      'Keterampilan produksi fisik yang konsisten serta pengelolaan alat kerja',
      'Kemampuan menghitung kebutuhan bahan dan waktu pengerjaan'
    ],
    developableSkills: [
      'Pengendalian mutu produk, kemitraan pemasok bahan, dan efisiensi biaya produksi',
      'Perencanaan bertahap dari sistem pra-pesan (pre-order) sebelum ekspansi alat'
    ],
    requirementsOrConstraints: [
      'Memerlukan perencanaan alat, ruang kerja, atau kemitraan karena biaya awal lebih tinggi dari jasa murni',
      'Skema pembiayaan/kemitraan mikro terverifikasi menunggu katalog Phase 7'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Informasi program kemitraan UMKM/bengkel pemula (Phase 7)'
    ],
    contextRelatedMajors: ['Tekstil', 'Mesin', 'Otomotif', 'Elektro']
  },
  {
    id: 'SIM_BIZ_SOCIAL_COMMERCE',
    isSimulationFixture: true,
    pathCategory: 'wirausaha',
    name: 'Usaha Layanan Promosi, Penjualan & Kemitraan Produk (Simulasi)',
    categoryLabel: 'Wirausaha Komunikatif — Modal Ringan',
    shortDescription:
      'Kandidat jenis usaha yang mengutamakan kemampuan komunikasi, membangun relasi pembeli, dan memasarkan produk/jasa secara kolaboratif atau sistem keagenan.',
    characteristics: [
      'Mengubah jaringan komunikasi dan kepercayaan sosial menjadi transaksi usaha',
      'Dapat dimulai sebagai penyalur/agen jasa atau koordinator pesanan tanpa pabrik sendiri',
      'Mengandalkan keaktifan menawarkan nilai produk serta menjaga kepuasan pelanggan'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
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
      gaya_berpikir: ['pikir_kreatif'],
      kebiasaan: ['biasa_kolaboratif', 'biasa_mandiri'],
      kemampuan_saat_ini: ['mampu_komunikasi'],
      preferensi_lingkungan: ['ling_tim'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['interpersonal_social', 'enterprising_business'],
    requiredBasicSkills: [
      'Kepercayaan diri berinteraksi dengan calon pembeli dan menjelaskan manfaat produk',
      'Ketekunan menindaklanjuti pesanan dan umpan balik pelanggan'
    ],
    developableSkills: [
      'Teknik pemasaran etis, pencatatan arus kas harian, dan negosiasi mitra pemasok',
      'Pemanfaatan media sosial atau katalog digital secara terukur'
    ],
    requirementsOrConstraints: [
      'Menuntut kesiapan menghadapi penolakan awal dan fluktuasi pendapatan di tahap rintisan',
      'Referensi program pendampingan kewirausahaan menunggu Phase 7'
    ],
    resourceProfile: 'low_capital_service',
    missingCatalogInfo: [
      'Rujukan program pendampingan niaga mikro terverifikasi (Phase 7)'
    ],
    contextRelatedMajors: ['BP/Broadcasting Perfilman', 'Tekstil', 'TKJ', 'RPL/PPLG']
  },
  {
    id: 'SIM_BIZ_TECH_SOLUTION',
    isSimulationFixture: true,
    pathCategory: 'wirausaha',
    name: 'Usaha Rintisan Solusi Teknis & Kustomisasi Alat/Sistem (Simulasi)',
    categoryLabel: 'Wirausaha Inovasi Teknis',
    shortDescription:
      'Kandidat jenis usaha yang merancang alat bantu, automasi sederhana, atau solusi perangkat lunak kustom untuk kebutuhan usaha atau komunitas lokal.',
    characteristics: [
      'Memadukan analisis masalah teknis dengan kejelian melihat peluang solusi bernilai jual',
      'Menghasilkan prototipe atau sistem terpadu yang disesuaikan dengan masalah klien',
      'Memerlukan perencanaan teknis yang matang serta ketahanan menguji ulang produk'
    ],
    relevantDimensions: [
      'minat',
      'gaya_berpikir',
      'kebiasaan',
      'kemampuan_saat_ini',
      'preferensi_lingkungan',
      'kesiapan_praktis'
    ],
    dimensionWeights: {
      minat: 0.22,
      gaya_berpikir: 0.22,
      kebiasaan: 0.16,
      kemampuan_saat_ini: 0.18,
      preferensi_lingkungan: 0.1,
      kesiapan_praktis: 0.12
    },
    dimensionExpectations: {
      minat: 74,
      gaya_berpikir: 76,
      kebiasaan: 70,
      kemampuan_saat_ini: 68,
      preferensi_lingkungan: 66,
      kesiapan_praktis: 64
    },
    preferredTendencies: {
      minat: ['minat_teknis', 'minat_usaha'],
      gaya_berpikir: ['pikir_analitis', 'pikir_kreatif', 'pikir_sistematis'],
      kebiasaan: ['biasa_mandiri', 'biasa_terstruktur'],
      kemampuan_saat_ini: ['mampu_teknis', 'mampu_analitis'],
      preferensi_lingkungan: ['ling_teknis', 'ling_individu'],
      kesiapan_praktis: ['siap_usaha']
    },
    supportingIndicators: ['technical_affinity', 'enterprising_business', 'analytical_depth'],
    requiredBasicSkills: [
      'Kemampuan analisis akar masalah dan perancangan solusi teknis tingkat dasar-menengah',
      'Ketekunan menguji dan memperbaiki kesalahan sebelum diserahkan ke pengguna'
    ],
    developableSkills: [
      'Validasi kebutuhan pengguna, penyusunan penawaran proyek, dan manajemen revisi',
      'Pengembangan produk modular agar mudah dirawat jangka panjang'
    ],
    requirementsOrConstraints: [
      'Memerlukan keseimbangan antara keahlian teknis, komunikasi kebutuhan klien, dan kesiapan waktu',
      'Detail ekosistem inkubasi/komunitas teknologi menunggu katalog Phase 7'
    ],
    resourceProfile: 'moderate_resource',
    missingCatalogInfo: [
      'Informasi komunitas inkubasi rintisan teknologi lokal (Phase 7)'
    ],
    contextRelatedMajors: ['RPL/PPLG', 'Elektro', 'TKJ', 'Mesin']
  }
];
