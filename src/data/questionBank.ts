/**
 * PIXEL TO REALITY — FUTURE PATH
 * Question Bank (80 Curated Questions across 7 Core Categories)
 * Phase 7.1: Person-first, everyday relatable wording for SMKN 1 Katapang students.
 */

import { QuizOption, QuizQuestion } from '../types/assessment';

const BASE_QUESTION_BANK: QuizQuestion[] = [
  // =========================================================================
  // KATEGORI 0 (PHASE 7.1.1): HOBBY-FIRST OPENING, DISAMBIGUATION & VALUES
  // =========================================================================
  {
    id: 'Q_HOB_01',
    category: 'interest_curiosity',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 10,
    targetPaths: 'all',
    indicators: ['technical_affinity', 'creative_expression', 'interpersonal_social', 'hands_on_practical'],
    branchingRules: { preferredStage: 'opening' },
    question: 'Kalau lagi punya waktu luang tanpa tugas sekolah, kegiatan apa yang paling sering bikin kamu lupa waktu?',
    description: 'Pilih hal yang paling sering kamu lakukan dengan senang hati.',
    options: [
      {
        id: 'opt_1',
        label: 'Main game, ngoprek HP/laptop, atau nyobain aplikasi seru',
        signals: ['technical_affinity', 'exploratory_open'],
        domainSignals: { teknologi_informatika: 2 },
        pathAffinity: { bekerja: 2, kuliah: 2, bingung: 1 }
      },
      {
        id: 'opt_2',
        label: 'Gambar, ngedit foto/video, membaca/menulis, atau bikin konten kreatif',
        signals: ['creative_expression'],
        domainSignals: { seni_desain: 2, bahasa_sastra: 1, komunikasi_media: 1 },
        pathAffinity: { kuliah: 2, wirausaha: 2, bekerja: 1 }
      },
      {
        id: 'opt_3',
        label: 'Ngobrol seru, bahas berita/isu sekitar, atau ikut kegiatan bareng banyak orang',
        signals: ['interpersonal_social'],
        domainSignals: { komunikasi_media: 1, psikologi_sosial: 1, pendidikan: 1, hukum_keadilan: 1 },
        pathAffinity: { bekerja: 2, wirausaha: 2, bingung: 1 }
      },
      {
        id: 'opt_4',
        label: 'Bongkar pasang barang, masak, merawat tanaman, atau aktivitas langsung di luar ruangan',
        signals: ['hands_on_practical', 'structured_procedural'],
        domainSignals: { teknik_industri: 1, pertanian_lingkungan: 1, pariwisata_kuliner: 1 },
        pathAffinity: { bekerja: 3, wirausaha: 1 }
      }
    ]
  },
  {
    id: 'Q_BR_GAME_01',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'technical_affinity', 'structured_procedural', 'hands_on_practical'],
    branchingRules: {
      triggerSelections: ['Q_HOB_01:opt_1'],
      triggerSignals: ['technical_affinity'],
      preferredStage: 'hobby_branch'
    },
    question: 'Dari kegiatan main game atau ngoprek HP/komputer, bagian mana yang paling kamu nikmati?',
    options: [
      {
        id: 'opt_1',
        label: 'Main bareng teman, ikut komunitas, jadi panitia turnamen, atau bikin konten/stream',
        signals: ['interpersonal_social', 'creative_expression'],
        domainSignals: { komunikasi_media: 2, bisnis_ekonomi: 1 },
        pathAffinity: { wirausaha: 2, bekerja: 2 }
      },
      {
        id: 'opt_2',
        label: 'Penasaran cara kerja aplikasinya dan pengen bisa bikin program atau sistem sendiri',
        signals: ['technical_affinity', 'analytical_depth'],
        domainSignals: { teknologi_informatika: 3 },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      },
      {
        id: 'opt_3',
        label: 'Suka nyusun strategi, ngatur tim, atau merapikan skor dan jadwal biar tertib',
        signals: ['structured_procedural', 'analytical_depth'],
        domainSignals: { bisnis_ekonomi: 2, administrasi_logistik: 2, teknologi_informatika: 1 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_4',
        label: 'Suka oprek setting perangkat, jaringan Wi-Fi, atau bantu benerin HP/PC teman',
        signals: ['hands_on_practical', 'technical_affinity'],
        domainSignals: { teknologi_informatika: 2, teknik_industri: 1 },
        pathAffinity: { bekerja: 3 }
      }
    ]
  },
  {
    id: 'Q_BR_VIS_01',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['creative_expression', 'hands_on_practical', 'enterprising_business', 'structured_procedural'],
    branchingRules: {
      triggerSelections: ['Q_HOB_01:opt_2'],
      triggerSignals: ['creative_expression'],
      preferredStage: 'hobby_branch'
    },
    question: 'Kalau suka gambar, nulis, foto, atau edit video, bagian mana yang paling bikin kamu betah?',
    options: [
      {
        id: 'opt_1',
        label: 'Gambar bebas, bikin ilustrasi, atau nyari gaya desain yang estetik',
        signals: ['creative_expression'],
        domainSignals: { seni_desain: 3 },
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      },
      {
        id: 'opt_2',
        label: 'Motong video, ngatur suara, atau motret momen biar seru ditonton',
        signals: ['creative_expression', 'hands_on_practical'],
        domainSignals: { seni_desain: 2, komunikasi_media: 2 },
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_3',
        label: 'Nulis cerita/caption, nyusun berita, atau bikin konten yang rame dibaca dan dilihat orang',
        signals: ['enterprising_business', 'interpersonal_social', 'creative_expression'],
        domainSignals: { bahasa_sastra: 2, komunikasi_media: 2, bisnis_ekonomi: 1 },
        pathAffinity: { bekerja: 2, wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Ngerapihin tata letak halaman, presentasi, atau tampilan aplikasi supaya gampang dipakai orang',
        signals: ['structured_procedural', 'creative_expression'],
        domainSignals: { seni_desain: 2, teknologi_informatika: 2 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      }
    ]
  },
  {
    id: 'Q_BR_SOC_01',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'academic_aspiration', 'enterprising_business', 'structured_procedural'],
    branchingRules: {
      triggerSelections: ['Q_HOB_01:opt_3', 'Q_HOB_02:opt_2', 'Q_HOB_02:opt_3', 'Q_HOB_03:opt_2'],
      triggerSignals: ['interpersonal_social'],
      preferredStage: 'hobby_branch'
    },
    question: 'Saat sering ketemu dan ngobrol sama banyak orang, hal apa yang paling bikin kamu senang?',
    options: [
      {
        id: 'opt_1',
        label: 'Dengerin cerita orang, bantu merawat atau mendampingi kebutuhan mereka dengan sabar',
        signals: ['interpersonal_social', 'structured_procedural'],
        domainSignals: { psikologi_sosial: 2, kesehatan: 2, pariwisata_kuliner: 1 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Ngajarin atau jelasin materi pelan-pelan sampai teman benar-benar paham',
        signals: ['interpersonal_social', 'academic_aspiration'],
        domainSignals: { pendidikan: 3, bahasa_sastra: 1 },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      },
      {
        id: 'opt_3',
        label: 'Ngenalin produk/jasa dengan menarik, negosiasi, atau bikin orang yakin untuk membeli',
        signals: ['enterprising_business', 'interpersonal_social'],
        domainSignals: { bisnis_ekonomi: 3, komunikasi_media: 2 },
        pathAffinity: { wirausaha: 3, bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Bahas aturan bersama, ngatur acara, jadi penghubung tim, dan menjaga diskusi tetap adil',
        signals: ['structured_procedural', 'interpersonal_social'],
        domainSignals: { hukum_keadilan: 2, komunikasi_media: 2, administrasi_logistik: 1 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      }
    ]
  },
  {
    id: 'Q_BR_PRAC_01',
    category: 'habits_activities',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'technical_affinity', 'structured_procedural', 'enterprising_business'],
    branchingRules: {
      triggerSelections: ['Q_HOB_01:opt_4', 'Q_HOB_03:opt_3'],
      triggerSignals: ['hands_on_practical'],
      preferredStage: 'hobby_branch'
    },
    question: 'Kalau lagi asyik sama aktivitas praktik atau barang nyata, kegiatan mana yang paling terasa pas?',
    options: [
      {
        id: 'opt_1',
        label: 'Bongkar pasang dan servis mesin, kelistrikan, atau perangkat biar normal lagi',
        signals: ['hands_on_practical', 'technical_affinity'],
        domainSignals: { teknik_industri: 3 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Ngecek barang, nyusun rak stok, atau merapikan pencatatan paket pengiriman',
        signals: ['hands_on_practical', 'structured_procedural'],
        domainSignals: { administrasi_logistik: 3 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Merawat tanaman, berkegiatan di alam terbuka, atau gerak aktif lapangan',
        signals: ['hands_on_practical', 'exploratory_open'],
        domainSignals: { pertanian_lingkungan: 3, pariwisata_kuliner: 1 },
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Memasak, bikin makanan/minuman, atau bikin produk karya sendiri yang bisa dinikmati orang',
        signals: ['hands_on_practical', 'enterprising_business'],
        domainSignals: { pariwisata_kuliner: 3, seni_desain: 1 },
        pathAffinity: { wirausaha: 3 }
      }
    ]
  },
  {
    id: 'Q_DOM_01',
    category: 'interest_curiosity',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['technical_affinity', 'analytical_depth', 'creative_expression', 'interpersonal_social'],
    branchingRules: { preferredStage: 'hobby_branch' },
    question: 'Kalau lagi baca berita, nonton video, atau dengar cerita bidang kerja orang, topik mana yang paling bikin kamu betah nyimak?',
    description: 'Pilih kelompok topik yang paling menarik perhatianmu saat ini.',
    options: [
      {
        id: 'opt_1',
        label: 'Cara kerja aplikasi, coding, teknologi digital, atau mesin & alat teknik',
        signals: ['technical_affinity'],
        domainSignals: { teknologi_informatika: 2, teknik_industri: 1 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Aturan hukum & keadilan, dunia bisnis, keuangan, atau pengelolaan kantor',
        signals: ['analytical_depth', 'structured_procedural'],
        domainSignals: { hukum_keadilan: 2, bisnis_ekonomi: 2, administrasi_logistik: 1 },
        pathAffinity: { kuliah: 2, bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_3',
        label: 'Bahasa asing, dunia menulis cerita/berita, komunikasi publik, atau karya desain visual',
        signals: ['creative_expression', 'interpersonal_social'],
        domainSignals: { bahasa_sastra: 2, komunikasi_media: 2, seni_desain: 2 },
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Dunia mengajar, kesehatan & merawat, psikologi manusia, atau alam, kuliner & wisata',
        signals: ['interpersonal_social', 'academic_aspiration'],
        domainSignals: {
          pendidikan: 2,
          kesehatan: 2,
          psikologi_sosial: 2,
          pertanian_lingkungan: 1,
          pariwisata_kuliner: 1
        },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      }
    ]
  },
  {
    id: 'Q_BR_TECH_01',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['technical_affinity', 'hands_on_practical', 'creative_expression', 'structured_procedural'],
    branchingRules: {
      triggerSelections: ['Q_DOM_01:opt_1'],
      preferredStage: 'hobby_branch'
    },
    question: 'Dari topik teknologi dan cara kerja alat, bidang mana yang paling pengen kamu tekuni?',
    options: [
      {
        id: 'opt_1',
        label: 'Pembuatan aplikasi, pemrograman/coding, website, database, atau sistem IT',
        signals: ['technical_affinity', 'analytical_depth'],
        domainSignals: { teknologi_informatika: 4 },
        pathAffinity: { kuliah: 2, bekerja: 2, wirausaha: 1 }
      },
      {
        id: 'opt_2',
        label: 'Mesin, otomotif, bengkel, kelistrikan, atau merakit peralatan manufaktur',
        signals: ['hands_on_practical', 'technical_affinity'],
        domainSignals: { teknik_industri: 4 },
        pathAffinity: { bekerja: 3, kuliah: 1 }
      },
      {
        id: 'opt_3',
        label: 'Desain tampilan aplikasi/grafis, animasi, foto/video, atau konten digital kreatif',
        signals: ['creative_expression', 'technical_affinity'],
        domainSignals: { seni_desain: 3, teknologi_informatika: 1, komunikasi_media: 1 },
        pathAffinity: { wirausaha: 2, kuliah: 2 }
      },
      {
        id: 'opt_4',
        label: 'Pengelolaan data operasional, sistem administrasi kantor, atau alur kerja logistik',
        signals: ['structured_procedural', 'technical_affinity'],
        domainSignals: { administrasi_logistik: 3, bisnis_ekonomi: 2 },
        pathAffinity: { bekerja: 3 }
      }
    ]
  },
  {
    id: 'Q_BR_HUM_01',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['analytical_depth', 'enterprising_business', 'structured_procedural', 'interpersonal_social'],
    branchingRules: {
      triggerSelections: ['Q_DOM_01:opt_2'],
      preferredStage: 'hobby_branch'
    },
    question: 'Dari topik aturan, bisnis, atau pengelolaan kegiatan, hal mana yang paling bikin kamu penasaran?',
    options: [
      {
        id: 'opt_1',
        label: 'Ilmu hukum, aturan perundang-undangan, pembelaan keadilan, dan menyusun argumen kasus',
        signals: ['analytical_depth', 'academic_aspiration'],
        domainSignals: { hukum_keadilan: 4 },
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Manajemen bisnis, akuntansi, hitung keuangan/pajak, dan strategi jualan',
        signals: ['enterprising_business', 'structured_procedural'],
        domainSignals: { bisnis_ekonomi: 4 },
        pathAffinity: { wirausaha: 2, kuliah: 2, bekerja: 1 }
      },
      {
        id: 'opt_3',
        label: 'Administrasi kantor, arsip dokumen resmi, pencatatan stok, dan koordinasi operasional',
        signals: ['structured_procedural'],
        domainSignals: { administrasi_logistik: 4 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_4',
        label: 'Hubungan masyarakat, komunikasi tim, negosiasi, dan manajemen acara',
        signals: ['interpersonal_social', 'enterprising_business'],
        domainSignals: { komunikasi_media: 3, bisnis_ekonomi: 2 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      }
    ]
  },
  {
    id: 'Q_BR_LIT_01',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['creative_expression', 'academic_aspiration', 'interpersonal_social'],
    branchingRules: {
      triggerSelections: ['Q_DOM_01:opt_3'],
      preferredStage: 'hobby_branch'
    },
    question: 'Dari bidang bahasa, menulis, komunikasi, atau desain, mana yang paling dekat dengan minatmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Bahasa & sastra — menulis cerita/artikel, membaca kritis, atau penerjemahan bahasa asing',
        signals: ['academic_aspiration', 'creative_expression'],
        domainSignals: { bahasa_sastra: 4 },
        pathAffinity: { kuliah: 3, wirausaha: 1 }
      },
      {
        id: 'opt_2',
        label: 'Komunikasi & media — jurnalistik, siaran, public speaking, atau manajemen media sosial',
        signals: ['interpersonal_social', 'creative_expression'],
        domainSignals: { komunikasi_media: 4 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_3',
        label: 'Seni & desain — ilustrasi, desain grafis, fotografi, video kreatif, atau desain produk',
        signals: ['creative_expression'],
        domainSignals: { seni_desain: 4 },
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Pengajaran & bimbingan bahasa — membantu orang lain paham membaca, menulis, atau berbahasa asing',
        signals: ['interpersonal_social', 'academic_aspiration'],
        domainSignals: { pendidikan: 3, bahasa_sastra: 2 },
        pathAffinity: { kuliah: 2, wirausaha: 1 }
      }
    ]
  },
  {
    id: 'Q_BR_CARE_01',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'academic_aspiration', 'hands_on_practical', 'analytical_depth'],
    branchingRules: {
      triggerSelections: ['Q_DOM_01:opt_4'],
      preferredStage: 'hobby_branch'
    },
    question: 'Dari bidang layanan manusia, kesehatan, alam, atau kuliner, mana yang paling ingin kamu jalani?',
    options: [
      {
        id: 'opt_1',
        label: 'Pendidikan & mengajar — mendampingi belajar, jadi tutor, atau guru di bidang tertentu',
        signals: ['interpersonal_social', 'academic_aspiration'],
        domainSignals: { pendidikan: 4 },
        pathAffinity: { kuliah: 3, bekerja: 1 }
      },
      {
        id: 'opt_2',
        label: 'Kesehatan & layanan medis — merawat kesehatan, gizi, kebersihan klinis, atau K3',
        signals: ['academic_aspiration', 'interpersonal_social', 'structured_procedural'],
        domainSignals: { kesehatan: 4 },
        pathAffinity: { kuliah: 3, bekerja: 1 }
      },
      {
        id: 'opt_3',
        label: 'Psikologi & sosial — memahami perasaan/perilaku orang, konseling, atau kegiatan masyarakat',
        signals: ['interpersonal_social', 'analytical_depth'],
        domainSignals: { psikologi_sosial: 4 },
        pathAffinity: { kuliah: 3, bekerja: 1 }
      },
      {
        id: 'opt_4',
        label: 'Alam, tanaman & pertanian, atau dunia kuliner, memasak, dan pelayanan wisata/hotel',
        signals: ['hands_on_practical', 'enterprising_business'],
        domainSignals: { pertanian_lingkungan: 2, pariwisata_kuliner: 2 },
        pathAffinity: { wirausaha: 2, bekerja: 2, kuliah: 1 }
      }
    ]
  },
  {
    id: 'Q_BR_AGRO_01',
    category: 'habits_activities',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'enterprising_business', 'structured_procedural'],
    branchingRules: {
      triggerSelections: ['Q_BR_CARE_01:opt_4'],
      preferredStage: 'hobby_branch'
    },
    question: 'Kalau berurusan dengan alam, makanan, atau pelayanan tamu, kegiatan mana yang paling seru buatmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Bertani modern, hidroponik, merawat tanaman, pangan, atau menjaga kelestarian lingkungan',
        signals: ['hands_on_practical', 'academic_aspiration'],
        domainSignals: { pertanian_lingkungan: 4 },
        pathAffinity: { kuliah: 2, bekerja: 2, wirausaha: 1 }
      },
      {
        id: 'opt_2',
        label: 'Memasak, bikin usaha makanan/minuman, perhotelan, atau menyambut tamu wisata',
        signals: ['hands_on_practical', 'enterprising_business', 'interpersonal_social'],
        domainSignals: { pariwisata_kuliner: 4 },
        pathAffinity: { wirausaha: 2, bekerja: 2, kuliah: 1 }
      },
      {
        id: 'opt_3',
        label: 'Merakit/servis alat kerja, bengkel mesin, atau instalasi teknis di lapangan',
        signals: ['hands_on_practical', 'technical_affinity'],
        domainSignals: { teknik_industri: 4 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_4',
        label: 'Mengelola persediaan barang, logistik pengiriman, dan penataan gudang usaha',
        signals: ['structured_procedural', 'hands_on_practical'],
        domainSignals: { administrasi_logistik: 4 },
        pathAffinity: { bekerja: 3 }
      }
    ]
  },
  {
    id: 'Q_HOB_02',
    category: 'habits_activities',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 10,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'enterprising_business', 'interpersonal_social', 'hands_on_practical'],
    branchingRules: { preferredStage: 'opening' },
    question: 'Di kegiatan sehari-hari atau tugas bareng teman, peran mana yang paling sering bikin kamu nyaman?',
    options: [
      {
        id: 'opt_1',
        label: 'Merapikan catatan, data, aturan, atau jadwal biar semuanya teratur dan nggak ada yang kelewat',
        signals: ['structured_procedural'],
        domainSignals: { administrasi_logistik: 2, hukum_keadilan: 1, bisnis_ekonomi: 1 },
        pathAffinity: { bekerja: 3, kuliah: 1 }
      },
      {
        id: 'opt_2',
        label: 'Ngenalin hasil karya, nawarin produk/jasa, atau ngajak orang biar tertarik ikut',
        signals: ['enterprising_business', 'interpersonal_social'],
        domainSignals: { bisnis_ekonomi: 2, komunikasi_media: 2 },
        pathAffinity: { wirausaha: 3, bekerja: 1 }
      },
      {
        id: 'opt_3',
        label: 'Dengerin kebutuhan orang lain dan sabar bantu mereka sampai urusannya beres',
        signals: ['interpersonal_social'],
        domainSignals: { psikologi_sosial: 2, pendidikan: 1, kesehatan: 1, pariwisata_kuliner: 1 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_4',
        label: 'Langsung bikin atau ngeberesin bagian teknisnya sampai barang, aplikasi, atau sistemnya jadi',
        signals: ['hands_on_practical', 'technical_affinity'],
        domainSignals: { teknologi_informatika: 1, teknik_industri: 1 },
        pathAffinity: { bekerja: 3 }
      }
    ]
  },
  {
    id: 'Q_HOB_03',
    category: 'work_environment',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 10,
    targetPaths: 'all',
    indicators: ['technical_affinity', 'interpersonal_social', 'hands_on_practical', 'creative_expression'],
    branchingRules: { preferredStage: 'desire_value' },
    question: 'Dalam kegiatan atau pekerjaan nanti, kamu paling betah lebih sering berhadapan dengan apa?',
    options: [
      {
        id: 'opt_1',
        label: 'Komputer, kode program, data, atau sistem digital',
        signals: ['technical_affinity', 'structured_procedural'],
        domainSignals: { teknologi_informatika: 2, administrasi_logistik: 1 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Banyak orang — ngobrol, mengajar, merawat, melayani tamu, atau berdiskusi kasus',
        signals: ['interpersonal_social'],
        domainSignals: { pendidikan: 1, kesehatan: 1, psikologi_sosial: 1, komunikasi_media: 1, hukum_keadilan: 1 },
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_3',
        label: 'Benda nyata — alat bengkel, mesin, dapur kuliner, tanaman alam, atau barang stok',
        signals: ['hands_on_practical'],
        domainSignals: { teknik_industri: 1, pertanian_lingkungan: 1, pariwisata_kuliner: 1, administrasi_logistik: 1 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_4',
        label: 'Ide tulisan, bahasa, visual kreatif, konten cerita, atau peluang bisnis baru',
        signals: ['creative_expression', 'enterprising_business'],
        domainSignals: { seni_desain: 2, bahasa_sastra: 1, bisnis_ekonomi: 1, komunikasi_media: 1 },
        pathAffinity: { wirausaha: 2, kuliah: 2 }
      }
    ]
  },
  {
    id: 'Q_HOB_04',
    category: 'current_skills_learning',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 10,
    targetPaths: 'all',
    indicators: ['technical_affinity', 'creative_expression', 'structured_procedural', 'interpersonal_social'],
    branchingRules: { preferredStage: 'desire_value' },
    question: 'Hal apa yang paling ingin kamu kuasai atau bisa lakukan dengan baik ke depannya?',
    options: [
      {
        id: 'opt_1',
        label: 'Bisa bikin aplikasi, ngoding, ngelola sistem IT, atau ngeberesin perangkat teknis',
        signals: ['technical_affinity'],
        domainSignals: { teknologi_informatika: 2, teknik_industri: 1 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Bisa bikin desain, tulisan menarik, bahasa asing, foto/video, atau konten komunikasi',
        signals: ['creative_expression'],
        domainSignals: { seni_desain: 2, bahasa_sastra: 1, komunikasi_media: 1 },
        pathAffinity: { wirausaha: 2, bekerja: 2 }
      },
      {
        id: 'opt_3',
        label: 'Bisa ngatur bisnis, pembukuan keuangan, hukum aturan, administrasi, atau stok operasional',
        signals: ['structured_procedural'],
        domainSignals: { bisnis_ekonomi: 2, administrasi_logistik: 2, hukum_keadilan: 1 },
        pathAffinity: { bekerja: 3, kuliah: 1 }
      },
      {
        id: 'opt_4',
        label: 'Bisa mengajar, merawat kesehatan, mendampingi orang, mengolah kuliner/alam, atau merintis usaha',
        signals: ['interpersonal_social', 'enterprising_business'],
        domainSignals: { pendidikan: 1, kesehatan: 1, psikologi_sosial: 1, pariwisata_kuliner: 1, pertanian_lingkungan: 1 },
        pathAffinity: { wirausaha: 2, kuliah: 2 }
      }
    ]
  },
  {
    id: 'Q_VAL_01',
    category: 'work_environment',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 10,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'exploratory_open', 'autonomy_independent'],
    branchingRules: { preferredStage: 'habits_env' },
    question: 'Soal ritme kegiatan setiap hari nanti, mana yang lebih bikin kamu betah?',
    options: [
      {
        id: 'opt_1',
        label: 'Teratur dan jelas — tahu pasti apa yang harus dikerjain dari pagi sampai selesai',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Bervariasi dan nggak monoton — selalu ketemu hal atau orang baru tiap hari',
        signals: ['exploratory_open', 'interpersonal_social'],
        pathAffinity: { wirausaha: 2, bekerja: 2 }
      },
      {
        id: 'opt_3',
        label: 'Mandiri dan fleksibel — bisa atur cara kerja sendiri tanpa diawasi ketat terus-menerus',
        signals: ['autonomy_independent'],
        pathAffinity: { wirausaha: 3, kuliah: 1 }
      },
      {
        id: 'opt_4',
        label: 'Belum yakin, pengen nyoba dulu untuk lihat ritme mana yang paling pas',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_VAL_02',
    category: 'motivation_values',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 10,
    targetPaths: 'all',
    indicators: ['career_urgency', 'academic_aspiration', 'hands_on_practical', 'enterprising_business'],
    branchingRules: { preferredStage: 'desire_value' },
    question: 'Menurutmu, hal apa yang paling penting dari pekerjaan atau kegiatanmu nanti?',
    options: [
      {
        id: 'opt_1',
        label: 'Punya penghasilan tetap secepatnya biar bisa mandiri dan bantu keluarga',
        signals: ['career_urgency', 'structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Terus belajar hal baru dan paham ilmunya makin dalam',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Bisa langsung lihat hasil nyatanya dan ngebantu orang lain pakai karya atau layanan kita',
        signals: ['hands_on_practical', 'interpersonal_social'],
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Punya ruang berkreasi bebas atau merintis usaha milik sendiri pelan-pelan',
        signals: ['creative_expression', 'enterprising_business', 'autonomy_independent'],
        pathAffinity: { wirausaha: 3 }
      }
    ]
  },

  // =========================================================================
  // KATEGORI 1: INTEREST & CURIOSITY (12 SOAL: Q_INT_01 s.d. Q_INT_12)
  // =========================================================================
  {
    id: 'Q_INT_01',
    category: 'interest_curiosity',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['technical_affinity', 'creative_expression', 'hands_on_practical', 'enterprising_business'],
    question: 'Saat melihat produk, aplikasi, atau karya baru yang lagi ramai dibahas, apa yang pertama bikin kamu penasaran?',
    description: 'Pilih hal yang paling spontan muncul di pikiranmu.',
    options: [
      {
        id: 'opt_1',
        label: 'Cara kerjanya di dalam — kok bisa nyala, jalan, atau nyambung rapi seperti itu',
        signals: ['technical_affinity'],
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Tampilan luarnya — warna, bentuk kemasan, foto, atau gaya desainnya yang keren',
        signals: ['creative_expression'],
        pathAffinity: { kuliah: 2, wirausaha: 1 }
      },
      {
        id: 'opt_3',
        label: 'Cara membuatnya langsung — alat apa yang dipakai dan gimana proses merakitnya',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_4',
        label: 'Peluang lakunya — berapa kira-kira modalnya dan kenapa banyak orang mau beli',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      }
    ]
  },
  {
    id: 'Q_INT_02',
    category: 'interest_curiosity',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['academic_aspiration', 'career_urgency', 'enterprising_business', 'exploratory_open'],
    question: 'Kalau punya satu hari kosong bebas tugas dan boleh belajar apa saja, topik mana yang paling bikin kamu semangat?',
    options: [
      {
        id: 'opt_1',
        label: 'Keterampilan praktis yang bisa langsung dipakai kerja atau membantu pekerjaan kantor/lapangan',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Pengetahuan lebih dalam tentang alasan di balik suatu ilmu, teknologi, atau fenomena',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Cara mulai jualan atau buka jasa kecil sendiri — dari cari ide sampai dapat pembeli pertama',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Mencoba beberapa kegiatan ringan berbeda dulu karena masih suka banyak hal',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_INT_03',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 14,
    targetPaths: ['bekerja', 'kuliah'],
    indicators: ['technical_affinity', 'analytical_depth'],
    branchingRules: { triggerSignals: ['technical_affinity'] },
    question: 'Saat HP, laptop, atau alat di rumah tiba-tiba bermasalah dan nggak mau jalan normal, biasanya kamu ngapain?',
    options: [
      {
        id: 'opt_1',
        label: 'Langsung coba utak-atik sendiri — cek kabel, setting, atau coba perbaiki pelan-pelan',
        signals: ['hands_on_practical', 'technical_affinity'],
        pathAffinity: { bekerja: 2 }
      },
      {
        id: 'opt_2',
        label: 'Cari tutorial atau baca panduannya dulu biar tahu sumber masalah pastinya sebelum sentuh apa-apa',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Hitung mana yang lebih hemat: diperbaiki, diganti bagiannya, atau pakai cara lain saja',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Jarang ngutak-atik sendiri, biasanya langsung tanya teman atau bawa ke orang yang paham',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_INT_04',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'kuliah'],
    indicators: ['creative_expression', 'enterprising_business'],
    branchingRules: { triggerSignals: ['creative_expression'] },
    question: 'Saat lagi scroll TikTok, Instagram, atau YouTube, konten seperti apa yang paling sering bikin kamu berhenti nonton sampai habis?',
    options: [
      {
        id: 'opt_1',
        label: 'Video editan keren, fotografi, desain gambar, atau proses orang bikin karya seni',
        signals: ['creative_expression'],
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      },
      {
        id: 'opt_2',
        label: 'Konten bongkar-pasang barang, tips praktik kerja, review gadget/motor, atau cara kerja alat',
        signals: ['technical_affinity', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Cerita orang jualan dari nol, tips dagang, review usaha kecil, atau cara melayani pembeli',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Cerita kehidupan mahasiswa, fakta unik sehari-hari, atau pembahasan wawasan umum',
        signals: ['academic_aspiration', 'exploratory_open'],
        pathAffinity: { kuliah: 2, bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_INT_05',
    category: 'interest_curiosity',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'interpersonal_social', 'creative_expression'],
    question: 'Dari berbagai tugas atau proyek yang pernah kamu kerjakan di sekolah, momen mana yang rasanya paling bikin puas?',
    options: [
      {
        id: 'opt_1',
        label: 'Pas hasil yang dibuat beneran jalan, rapi, dan berfungsi sesuai target',
        signals: ['technical_affinity', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Pas bisa jelasin karya ke orang lain, ngobrol bareng tim, dan orang lain ngerti manfaatnya',
        signals: ['interpersonal_social', 'enterprising_business'],
        pathAffinity: { wirausaha: 2, kuliah: 1 }
      },
      {
        id: 'opt_3',
        label: 'Pas tampilannya kelihatan estetik, enak dilihat, dan dipuji karena detail desainnya',
        signals: ['creative_expression'],
        pathAffinity: { kuliah: 2, bekerja: 1 }
      },
      {
        id: 'opt_4',
        label: 'Pas akhirnya paham alasan logis di balik materi atau cara kerjanya',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      }
    ]
  },
  {
    id: 'Q_INT_06',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bingung'],
    indicators: ['enterprising_business', 'exploratory_open'],
    branchingRules: { triggerSignals: ['enterprising_business'] },
    question: 'Kalau lihat teman atau tetangga lagi kesulitan sama urusan sehari-hari (misalnya tugas numpuk, barang rusak, atau butuh promosi), apa yang terlintas di kepalamu?',
    options: [
      {
        id: 'opt_1',
        label: 'Kepikiran ide jasa atau barang kecil yang bisa bantu mereka sekaligus jadi pemasukan',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Langsung pengen bantuin beresin secara praktik pakai tenaga atau alat yang ada',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 2 }
      },
      {
        id: 'opt_3',
        label: 'Penasaran nyari tahu pola masalahnya kenapa hal kayak gitu sering kejadian',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Ngedengerin ceritanya dulu dan ngobrol santai bareng teman buat lihat sudut pandang lain',
        signals: ['exploratory_open', 'interpersonal_social'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_INT_07',
    category: 'interest_curiosity',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'bekerja'],
    indicators: ['academic_aspiration', 'analytical_depth'],
    question: 'Kalau disuruh memahami topik baru, seberapa betah kamu membaca penjelasan atau panduan yang cukup panjang?',
    options: [
      {
        id: 'opt_1',
        label: 'Betah banget — saya suka baca penjelasan runtut sampai paham konsepnya secara utuh',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Saya ambil poin langkah pentingnya saja supaya bisa langsung dicoba praktik',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Lebih gampang nangkep kalau lihat video contoh nyata atau dengar cerita orang yang sudah jalanin',
        signals: ['enterprising_business', 'creative_expression'],
        pathAffinity: { wirausaha: 2, bekerja: 1 }
      },
      {
        id: 'opt_4',
        label: 'Jujur cepat ngantuk atau bosan kalau harus baca teks yang terlalu panjang',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2, bekerja: 2 }
      }
    ]
  },
  {
    id: 'Q_INT_08',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bingung', 'bekerja'],
    indicators: ['exploratory_open', 'career_urgency'],
    question: 'Waktu ngelihat teman seangkatan mulai ngomongin rencana setelah lulus sekolah, perasaan apa yang paling dekat denganmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Pengen cepat siap kerja biar punya penghasilan sendiri dan pengalaman nyata',
        signals: ['career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Tertarik cari tahu jurusan lanjutan atau beasiswa yang cocok sama rasa ingin tahuku',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Semangat pengen nyoba bangun usaha atau kerja mandiri kecil-kecilan dulu',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Masih galau dan pengen kenalan dulu sama berbagai pilihan biar nggak salah langkah',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_INT_09',
    category: 'interest_curiosity',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['technical_affinity', 'enterprising_business', 'creative_expression'],
    question: 'Andai lagi jalan-jalan di festival atau bazar karya siswa, booth mana yang kemungkinan besar paling awal kamu samperin?',
    options: [
      {
        id: 'opt_1',
        label: 'Booth demo alat, rakitan teknologi, atau sistem digital yang bisa langsung dicoba',
        signals: ['technical_affinity'],
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Booth pameran desain visual, foto, film pendek, atau karya kreatif unik',
        signals: ['creative_expression'],
        pathAffinity: { kuliah: 2, wirausaha: 1 }
      },
      {
        id: 'opt_3',
        label: 'Booth jualan produk karya anak muda yang ramai pembeli dan cara promosinya seru',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Keliling santai saja melihat semua booth yang rame tanpa incar satu jenis tertentu',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_INT_10',
    category: 'interest_curiosity',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bekerja'],
    indicators: ['enterprising_business', 'hands_on_practical'],
    question: 'Soal pengalaman cari uang jajan sendiri atau bantu-bantu kerja sebelum lulus, mana yang paling sesuai denganmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Pernah jualan barang/makanan/jasa dan saya senang proses melayani pembeli',
        signals: ['enterprising_business', 'interpersonal_social'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Pernah bantu kerja saudara, tetangga, atau jaga tempat usaha di bagian tugas rutin',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 2, wirausaha: 1 }
      },
      {
        id: 'opt_3',
        label: 'Belum pernah, tapi pengen banget nyobain jualan atau buka jasa kecil-kecilan nanti',
        signals: ['enterprising_business', 'exploratory_open'],
        pathAffinity: { wirausaha: 2, bingung: 1 }
      },
      {
        id: 'opt_4',
        label: 'Belum pernah, sekarang masih fokus ngasah kemampuan dasar yang saya minati dulu',
        signals: ['technical_affinity', 'academic_aspiration'],
        pathAffinity: { bekerja: 2, kuliah: 2 }
      }
    ]
  },
  {
    id: 'Q_INT_11',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: ['kuliah', 'bingung'],
    indicators: ['academic_aspiration', 'exploratory_open'],
    question: 'Menurutmu pribadi, melanjutkan belajar ke jenjang kuliah (D3/D4/S1) setelah SMK itu rasanya seperti apa?',
    options: [
      {
        id: 'opt_1',
        label: 'Menarik — saya pengen mendalami ilmu lebih luas dan ketemu lingkungan belajar baru',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Bagus juga, tapi sekarang saya lebih kepengin langsung terjun kerja cari pengalaman',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Bukan prioritas utama, buat saya lebih seru belajar sambil langsung bangun usaha/karya',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Masih ragu apakah gaya belajar kuliah cocok sama diri dan kondisiku nanti',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3, kuliah: 1 }
      }
    ]
  },
  {
    id: 'Q_INT_12',
    category: 'interest_curiosity',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'autonomy_independent'],
    question: 'Kalau lagi nongkrong santai bareng teman dekat, obrolan apa yang paling sering bikin kamu ikut nimbrung semangat?',
    options: [
      {
        id: 'opt_1',
        label: 'Ngobrolin gadget, aplikasi baru, game/teknologi, atau cara kerja alat keren',
        signals: ['technical_affinity'],
        pathAffinity: { bekerja: 2, kuliah: 1 }
      },
      {
        id: 'opt_2',
        label: 'Ngobrolin tren jualan, ide cari cuan sampingan, atau barang apa yang lagi dicari orang',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Ngobrolin rencana kuliah, beasiswa, atau bidang ilmu menarik di luar pelajaran sekolah',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Ngobrol ngalor-ngidul apa saja — dari hiburan, kegiatan sehari-hari, sampai cerita lucu',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },

  // =========================================================================
  // KATEGORI 2: HABITS & ACTIVITIES (12 SOAL: Q_HAB_01 s.d. Q_HAB_12)
  // =========================================================================
  {
    id: 'Q_HAB_01',
    category: 'habits_activities',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'technical_affinity', 'creative_expression'],
    question: 'Waktu baru mulai mengerjakan tugas proyek atau kegiatan baru, kebiasaan pertamamu biasanya gimana?',
    options: [
      {
        id: 'opt_1',
        label: 'Langsung nyoba pegang alat atau prakteknya dulu sambil jalan dan lihat hasilnya',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Baca aturan main, peta kerja, atau susunan langkahnya dulu biar nggak salah arah',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Mikirin gimana hasil akhirnya nanti biar kelihatan rapi, menarik, dan punya ciri khas',
        signals: ['creative_expression'],
        pathAffinity: { kuliah: 1, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Ngajak teman ngobrol bagi peran biar cepat selesai dan semua kebagian tugas pas',
        signals: ['enterprising_business', 'interpersonal_social'],
        pathAffinity: { wirausaha: 2, bekerja: 1 }
      }
    ]
  },
  {
    id: 'Q_HAB_02',
    category: 'habits_activities',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'autonomy_independent'],
    question: 'Dalam keseharian, bagaimana caramu mengatur waktu antara tugas sekolah dan kegiatan pribadi?',
    options: [
      {
        id: 'opt_1',
        label: 'Biasa bikin catatan atau urutan prioritas, lalu dikerjain satu-satu biar tenang',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Lebih suka jam yang fleksibel — ngerjain sesuai mood dan ritme sendiri asal beres',
        signals: ['autonomy_independent', 'creative_expression'],
        pathAffinity: { wirausaha: 3, kuliah: 1 }
      },
      {
        id: 'opt_3',
        label: 'Lebih gampang jalan kalau sudah ada jadwal dan deadline jelas dari guru/pembimbing',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Masih sering keteteran dan belum punya pola jadwal harian yang tetap',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_HAB_03',
    category: 'habits_activities',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'kuliah'],
    indicators: ['technical_affinity', 'hands_on_practical'],
    branchingRules: { triggerSignals: ['technical_affinity', 'hands_on_practical'] },
    question: 'Kalau ada barang rusak di rumah (seperti kipas angin, kursi goyang, atau perangkat komputer lemot), biasanya kamu:',
    options: [
      {
        id: 'opt_1',
        label: 'Senang bongkar dan coba benerin sendiri pakai alat yang ada di rumah',
        signals: ['hands_on_practical', 'technical_affinity'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Cari dulu penyebab dan panduan resminya di internet sebelum mutusin langkah perbaikan',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Kepikiran apakah barang atau bagiannya masih bisa dimanfaatin buat bikin sesuatu yang baru',
        signals: ['enterprising_business', 'creative_expression'],
        pathAffinity: { wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Lebih pilih langsung bawa ke tukang servis atau minta tolong yang lebih paham',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 1, bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_HAB_04',
    category: 'habits_activities',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bekerja'],
    indicators: ['enterprising_business', 'autonomy_independent'],
    branchingRules: { triggerSignals: ['enterprising_business'] },
    question: 'Kalau punya uang jajan sisa di akhir minggu, kebiasaanmu paling sering ke mana?',
    options: [
      {
        id: 'opt_1',
        label: 'Disisihkan buat beli bahan, stok barang, atau alat kecil yang bisa diputar lagi',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Disimpan rutin ke tabungan sebagai pegangan aman buat keperluan mendadak',
        signals: ['structured_procedural', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Dipakai buat ikut kelas tambahan, beli buku, atau hal yang nambah wawasan',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Dipakai buat jajan, nongkrong, atau nyobain tempat dan kegiatan seru bareng teman',
        signals: ['exploratory_open', 'interpersonal_social'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_HAB_05',
    category: 'habits_activities',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'autonomy_independent'],
    question: 'Waktu kerja kelompok bareng teman, peran apa yang tanpa sadar hampir selalu kamu ambil?',
    options: [
      {
        id: 'opt_1',
        label: 'Bagian ngerjain langsung di lapangan atau bagian teknis biar tugasnya cepat jadi',
        signals: ['hands_on_practical', 'technical_affinity'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Yang ngebagi tugas, nge-chat anggota tim, dan ngatur jadwal biar semua jalan bareng',
        signals: ['enterprising_business', 'interpersonal_social'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Yang nyari bahan, ngerapihin catatan, dan nyusun materi presentasi biar jelas',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Fleksibel aja — bantuin bagian mana pun yang lagi kurang orang atau keteteran',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2, bekerja: 1 }
      }
    ]
  },
  {
    id: 'Q_HAB_06',
    category: 'habits_activities',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'bekerja'],
    indicators: ['academic_aspiration', 'structured_procedural'],
    question: 'Kalau ketemu pelajaran atau materi di kelas yang terasa susah dimengerti, biasanya kamu ngapain?',
    options: [
      {
        id: 'opt_1',
        label: 'Nyatet poinnya, nyari penjelasan tambahan di rumah, lalu ulangi sampai beneran ngerti',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Nunggu sesi praktik langsung karena saya jauh lebih cepat ngerti lewat contoh nyata',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Nanya ke teman yang sudah ngerti dan belajar bareng sambil diskusi santai',
        signals: ['interpersonal_social'],
        pathAffinity: { wirausaha: 1, kuliah: 1 }
      },
      {
        id: 'opt_4',
        label: 'Cepat hilang fokus kalau cuma dengar penjelasan lisan tanpa kegiatan nyata',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      }
    ]
  },
  {
    id: 'Q_HAB_07',
    category: 'habits_activities',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bingung'],
    indicators: ['creative_expression', 'enterprising_business'],
    question: 'Waktu megang HP atau laptop di waktu luang, seberapa sering kamu bikin sesuatu sendiri dibanding cuma scrolling?',
    options: [
      {
        id: 'opt_1',
        label: 'Lumayan sering — suka ngedit video/foto, desain poster, bikin tulisan, atau utak-atik karya',
        signals: ['creative_expression', 'technical_affinity'],
        pathAffinity: { wirausaha: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Sesekali saja kalau lagi ada tugas atau lagi kepengen nyoba ide tertentu',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2 }
      },
      {
        id: 'opt_3',
        label: 'Lebih sering cek info jualan, marketplace, atau bantu promosiin produk orang',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Lebih banyak dipakai buat hiburan, nonton, atau chatting sama teman',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_HAB_08',
    category: 'habits_activities',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'hands_on_practical'],
    question: 'Gimana kebiasaanmu menata barang pribadi, file tugas di HP/laptop, atau meja belajarmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Rapi dan teratur — semua ditaruh di tempat atau folder yang sama biar gampang dicari',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Agak berantakan pas lagi asyik ngerjain sesuatu, tapi saya sendiri tahu letaknya',
        signals: ['creative_expression', 'autonomy_independent'],
        pathAffinity: { wirausaha: 2, kuliah: 1 }
      },
      {
        id: 'opt_3',
        label: 'Punya sistem penamaan atau kategori sendiri biar data dan catatan nggak ketukar',
        signals: ['analytical_depth', 'technical_affinity'],
        pathAffinity: { kuliah: 2, bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Sering numpuk dulu dan baru diberesin pas lagi perlu banget atau diingetin orang',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_HAB_09',
    category: 'habits_activities',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['autonomy_independent', 'interpersonal_social'],
    question: 'Misalnya kamu dikasih proyek pribadi seminggu penuh tanpa dicek guru tiap hari, apa yang paling mungkin terjadi?',
    options: [
      {
        id: 'opt_1',
        label: 'Justru nyaman karena bisa atur jam kerja dan cara ngerjainnya sendiri',
        signals: ['autonomy_independent'],
        pathAffinity: { wirausaha: 3, kuliah: 1 }
      },
      {
        id: 'opt_2',
        label: 'Tetap jalan sesuai target harian karena nggak enak kalau numpuk di akhir',
        signals: ['structured_procedural', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Ngajak teman kerja bareng atau diskusi rutin biar tetap semangat ngerjainnya',
        signals: ['interpersonal_social'],
        pathAffinity: { wirausaha: 1, kuliah: 1 }
      },
      {
        id: 'opt_4',
        label: 'Agak susah jaga konsistensi, ujung-ujungnya sering kebut pas sudah mepet deadline',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_HAB_10',
    category: 'habits_activities',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'wirausaha'],
    indicators: ['hands_on_practical', 'career_urgency'],
    question: 'Dari sisi aktivitas fisik sehari-hari, gaya bergerak seperti apa yang paling bikin kamu betah berjam-jam?',
    options: [
      {
        id: 'opt_1',
        label: 'Aktif gerak, berdiri, keliling ruangan/lapangan, atau ngerjain hal fisik langsung',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Duduk fokus di depan layar komputer, meja admin, atau ruang belajar yang tenang',
        signals: ['technical_affinity', 'academic_aspiration'],
        pathAffinity: { kuliah: 2, bekerja: 1 }
      },
      {
        id: 'opt_3',
        label: 'Bebas pindah-pindah antara ketemu orang, gerak di luar, dan kerja di meja sesuai kebutuhan',
        signals: ['enterprising_business', 'autonomy_independent'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Belum terlalu kebayang ritme aktivitas mana yang paling pas buat tenagaku',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_HAB_11',
    category: 'habits_activities',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'bingung'],
    indicators: ['academic_aspiration', 'analytical_depth'],
    question: 'Seberapa sering kamu kepo cari tahu berita, tren, atau ilmu baru di luar tugas yang diminta sekolah?',
    options: [
      {
        id: 'opt_1',
        label: 'Sering banget — saya suka ngikutin perkembangan terbaru dan nyari tahu kenapa itu terjadi',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Pas lagi butuh saja biar kerjaan atau praktik sehari-hari jadi lebih gampang',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Seringnya cari tren yang bisa dijadiin ide jualan, konten, atau layanan baru',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Jarang cari di luar tugas — fokus beresin kewajiban harian dulu sudah cukup',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 1, bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_HAB_12',
    category: 'habits_activities',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'enterprising_business'],
    question: 'Kalau kelasmu bikin acara pameran atau bazar sekolah, bagian mana yang paling bikin kamu antusias?',
    options: [
      {
        id: 'opt_1',
        label: 'Jaga stan depan — nyapa pengunjung, jawab pertanyaan, dan promosiin karya ke orang baru',
        signals: ['interpersonal_social', 'enterprising_business'],
        pathAffinity: { wirausaha: 3, kuliah: 1 }
      },
      {
        id: 'opt_2',
        label: 'Bagian persiapan di belakang layar — pasang alat, cek perlengkapan, dan jaga acara lancar',
        signals: ['technical_affinity', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Bikin poster, tata stan biar keren, atau ngerekam dokumentasi foto dan video acara',
        signals: ['creative_expression'],
        pathAffinity: { kuliah: 2, wirausaha: 1 }
      },
      {
        id: 'opt_4',
        label: 'Ikut bantu sebisanya dan keliling lihat karya teman-teman di stan lain',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },

  // =========================================================================
  // KATEGORI 3: THINKING & PROBLEM SOLVING (12 SOAL: Q_THK_01 s.d. Q_THK_12)
  // =========================================================================
  {
    id: 'Q_THK_01',
    category: 'thinking_problem_solving',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['analytical_depth', 'hands_on_practical', 'creative_expression'],
    question: 'Waktu ketemu tugas atau cara kerja baru yang belum pernah diajarin sebelumnya, langkah awalmu adalah:',
    options: [
      {
        id: 'opt_1',
        label: 'Baca petunjuk dari awal sampai akhir biar paham alurnya dulu baru mulai',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Langsung coba kerjain langkah pertamanya dan pelajari sambil dicoba',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Coba cari cara lain yang lebih simpel dan kreatif sesuai gaya sendiri',
        signals: ['creative_expression', 'enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Nunggu lihat contoh dari teman yang sudah nyoba duluan biar lebih yakin',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2, bekerja: 1 }
      }
    ]
  },
  {
    id: 'Q_THK_02',
    category: 'thinking_problem_solving',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 14,
    targetPaths: 'all',
    indicators: ['enterprising_business', 'structured_procedural'],
    question: 'Waktu harus ambil keputusan penting yang hasilnya belum pasti 100%, sikapmu cenderung:',
    options: [
      {
        id: 'opt_1',
        label: 'Pilih jalan yang paling aman, aturan mainnya jelas, dan risikonya kecil',
        signals: ['structured_procedural', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Berani nyoba selama peluangnya bagus dan masih bisa tanggung jawab kalau meleset',
        signals: ['enterprising_business', 'autonomy_independent'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Bandingin dulu plus-minusnya secara teliti pakai informasi yang ada sebelum mutusin',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Sering kepikiran takut salah pilih jadi butuh banyak ngobrol dengan orang terdekat',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_THK_03',
    category: 'thinking_problem_solving',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'bekerja'],
    indicators: ['analytical_depth', 'technical_affinity'],
    branchingRules: { triggerSignals: ['analytical_depth'] },
    question: 'Saat menghadapi sesuatu yang punya banyak aturan dan bagian saling terhubung (seperti aplikasi, jadwal acara besar, atau alat kerja), pikiranmu:',
    options: [
      {
        id: 'opt_1',
        label: 'Tertantang buat ngerti alur besarnya sampai detail hubungan tiap bagiannya',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Fokus tahu bagian mana dipakai buat apa supaya bisa cepat jalan tanpa ribet',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Langsung kebayang gimana cara bikin versi lebih praktis yang berguna buat banyak orang',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Cepat pusing kalau harus ngurus alur yang terlalu rumit sekaligus',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_THK_04',
    category: 'thinking_problem_solving',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'kuliah'],
    indicators: ['creative_expression', 'enterprising_business'],
    question: 'Kalau rencana yang sudah kamu susun tiba-tiba berantakan di tengah jalan, reaksi pertamamu biasanya:',
    options: [
      {
        id: 'opt_1',
        label: 'Cepat cari rencana cadangan dan putar cara lain biar tetap jalan',
        signals: ['enterprising_business', 'creative_expression'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Mundur sebentar buat ngecek di bagian mana kesalahan awalnya terjadi',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Langsung minta saran guru, senior, atau pembimbing yang lebih berpengalaman',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Butuh waktu tenangkan diri dulu sebelum berani mulai ngelanjutin lagi',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_THK_05',
    category: 'thinking_problem_solving',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'creative_expression'],
    question: 'Menurut versimu, sebuah pekerjaan atau karya baru bisa disebut "bagus banget" kalau:',
    options: [
      {
        id: 'opt_1',
        label: 'Rapi, aman dipakai, tepat sesuai aturan, dan nggak gampang rusak atau salah',
        signals: ['structured_procedural', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Beda dari yang lain, estetik, dan punya sentuhan ide segar',
        signals: ['creative_expression'],
        pathAffinity: { kuliah: 2, wirausaha: 1 }
      },
      {
        id: 'opt_3',
        label: 'Beneran kepakai sehari-hari, hemat biaya, dan banyak orang mau beli/pakai',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Punya alasan dan konsep yang kuat, bukan sekadar asal jadi',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      }
    ]
  },
  {
    id: 'Q_THK_06',
    category: 'thinking_problem_solving',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bingung'],
    indicators: ['enterprising_business', 'interpersonal_social'],
    question: 'Kalau dua temanmu beda pendapat keras pas lagi ngerjain tugas bareng, biasanya kamu bersikap gimana?',
    options: [
      {
        id: 'opt_1',
        label: 'Jadi penengah dan bantu nyari jalan tengah biar dua-duanya tetap nyaman kerja bareng',
        signals: ['interpersonal_social', 'enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Ngecek ulang aturan atau contoh tugas yang diminta biar jelas mana yang paling tepat',
        signals: ['structured_procedural', 'technical_affinity'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Bandingin kelebihan dan kekurangan kedua pendapat secara objektif tanpa memihak',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Milih diam dulu nunggu suasana adem sebelum ikut ngasih pendapat',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_THK_07',
    category: 'thinking_problem_solving',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'kuliah'],
    indicators: ['hands_on_practical', 'academic_aspiration'],
    question: 'Dalam mengerjakan sesuatu, sisi "ketelitian" mana yang paling sering kamu perhatikan?',
    options: [
      {
        id: 'opt_1',
        label: 'Kerapian hasil fisik atau kesesuaian langkah kerja biar hasilnya nggak cacat',
        signals: ['hands_on_practical', 'structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Ketepatan hitungan, data, tulisan, atau urutan logika biar nggak ada yang salah',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Kecepatan respon dan kepastian orang lain puas sama hasil yang saya kasih',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Jujur saya masih sering kelewat detail kecil dan lagi belajar lebih teliti',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_THK_08',
    category: 'thinking_problem_solving',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['autonomy_independent', 'structured_procedural'],
    question: 'Kalau kamu dikasih target hasil akhir tapi cara ngerjainnya dibebasin total, apa reaksimu?',
    options: [
      {
        id: 'opt_1',
        label: 'Asyik banget, jadi leluasa nyusun cara dan ide sendiri dari nol',
        signals: ['autonomy_independent', 'enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Minta arahan batasan aturan yang jelas dulu biar kerjaannya nggak salah standar',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Cari referensi contoh atau cara terbaik dari berbagai sumber dulu sebelum mulai',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Agak bingung harus mulai dari mana kalau belum ada contoh langkah per langkah',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_THK_09',
    category: 'thinking_problem_solving',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['analytical_depth', 'hands_on_practical'],
    question: 'Menurutmu, apa sih yang bikin seseorang benar-benar jago dan bisa diandalkan di bidang kerjanya?',
    options: [
      {
        id: 'opt_1',
        label: 'Jam terbang tinggi — tangannya sudah cekatan karena sering praktik langsung',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Paham ilmunya dari akar jadi nggak cuma hafal cara, tapi ngerti alasannya',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Punya banyak akal, luwes menghadapi orang, dan jeli lihat peluang di tiap situasi',
        signals: ['enterprising_business', 'creative_expression'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Mau terus belajar dan nggak malu nanya meski sudah banyak pengalaman',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2, kuliah: 1 }
      }
    ]
  },
  {
    id: 'Q_THK_10',
    category: 'thinking_problem_solving',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bekerja'],
    indicators: ['enterprising_business', 'career_urgency'],
    question: 'Kalau pakai barang, layanan, atau aplikasi sehari-hari yang rasanya ribet dan bikin kesel, pikiranmu biasanya:',
    options: [
      {
        id: 'opt_1',
        label: 'Kepengen otak-atik atau ubah sedikit biar cara pakainya langsung lebih enak',
        signals: ['hands_on_practical', 'creative_expression'],
        pathAffinity: { bekerja: 2, wirausaha: 1 }
      },
      {
        id: 'opt_2',
        label: 'Mikir peluang bikin layanan atau barang tandingan yang lebih nyaman buat pembeli',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Cari tahu kenapa pembuatnya bikin kayak gitu dan bandingin sama versi lain yang lebih bagus',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Pakai saja sesuai aturan yang ada selama fungsinya masih jalan',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2, bingung: 1 }
      }
    ]
  },
  {
    id: 'Q_THK_11',
    category: 'thinking_problem_solving',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'wirausaha'],
    indicators: ['academic_aspiration', 'creative_expression'],
    question: 'Gimana rasanya kalau diminta jelasin ide atau hasil kerjamu di depan kelas atau orang banyak?',
    options: [
      {
        id: 'opt_1',
        label: 'Seru! Saya senang cerita langsung dan jawab pertanyaan orang lain',
        signals: ['interpersonal_social', 'enterprising_business'],
        pathAffinity: { wirausaha: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Cukup tenang asal bahan catatan, slide, dan poin datanya sudah saya siapkan rapi',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Lebih suka langsung nunjukin contoh barang/hasil jadinya daripada banyak ngomong',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_4',
        label: 'Masih sering grogi kalau jadi pusat perhatian dan butuh latihan lagi',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_THK_12',
    category: 'thinking_problem_solving',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'autonomy_independent'],
    question: 'Kalau ketemu cara yang lebih cepat buat nyelesain tugas dibanding aturan biasa, sikapmu gimana?',
    options: [
      {
        id: 'opt_1',
        label: 'Hati-hati — pastiin dulu cara cepat itu tetap aman dan nggak melanggar aturan',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Langsung dipakai kalau terbukti hemat waktu dan hasilnya tetap bagus',
        signals: ['enterprising_business', 'hands_on_practical'],
        pathAffinity: { wirausaha: 2, bekerja: 1 }
      },
      {
        id: 'opt_3',
        label: 'Dipikirin dulu apakah ada efek samping atau kekurangan tersembunyi di belakang hari',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Biasanya ikut cara normal yang dipakai kebanyakan orang saja biar aman',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },

  // =========================================================================
  // KATEGORI 4: CURRENT SKILLS & LEARNING (12 SOAL: Q_SKL_01 s.d. Q_SKL_12)
  // =========================================================================
  {
    id: 'Q_SKL_01',
    category: 'current_skills_learning',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'academic_aspiration', 'technical_affinity'],
    question: 'Dari pengalaman belajarmu selama ini, cara mana yang paling cepet bikin sesuatu nempel di kepala?',
    options: [
      {
        id: 'opt_1',
        label: 'Nyoba langsung berulang-ulang pakai tangan sendiri sampai kebiasa',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Paham dulu alasan "kenapa harus begini" sebelum mulai nyoba',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Dikasih contoh proyek atau kasus nyata yang langsung kepakai di sekitar',
        signals: ['enterprising_business', 'creative_expression'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Belajar bareng teman sambil ngobrol dan saling jelasin gantian',
        signals: ['interpersonal_social', 'exploratory_open'],
        pathAffinity: { bingung: 2, kuliah: 1 }
      }
    ]
  },
  {
    id: 'Q_SKL_02',
    category: 'current_skills_learning',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['technical_affinity', 'creative_expression', 'enterprising_business'],
    question: 'Dari sifat dan kebiasaan di bawah, mana yang paling sering terasa jadi kelebihanmu saat ini?',
    options: [
      {
        id: 'opt_1',
        label: 'Sabar, teliti, dan tahan fokus meski kerjaannya detail dan makan waktu',
        signals: ['technical_affinity', 'structured_procedural'],
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Mudah ngobrol, ramah, dan gampang bikin orang baru merasa nyaman',
        signals: ['interpersonal_social', 'enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Punya selera visual yang rapi dan peka lihat keserasian warna atau desain',
        signals: ['creative_expression'],
        pathAffinity: { kuliah: 2, wirausaha: 1 }
      },
      {
        id: 'opt_4',
        label: 'Cepat beradaptasi dan tenang walau suasana atau rencana mendadak berubah',
        signals: ['exploratory_open', 'autonomy_independent'],
        pathAffinity: { bingung: 2, wirausaha: 2 }
      }
    ]
  },
  {
    id: 'Q_SKL_03',
    category: 'current_skills_learning',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'kuliah'],
    indicators: ['technical_affinity', 'hands_on_practical'],
    branchingRules: { triggerSignals: ['hands_on_practical'] },
    question: 'Waktu ketemu aplikasi, software, atau alat kerja baru yang belum pernah kamu pakai, perasaanmu gimana?',
    options: [
      {
        id: 'opt_1',
        label: 'Semangat! Suka pencet-pencet dan eksplor menunya sendiri sampai lancar',
        signals: ['technical_affinity', 'hands_on_practical'],
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Biasa saja, saya pelajari menu yang perlu dipakai buat tugas sesuai panduan',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2 }
      },
      {
        id: 'opt_3',
        label: 'Langsung kepikiran apakah alat atau aplikasi ini bisa dipakai buat jasa/jualan',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Agak canggung di awal dan butuh waktu lebih lama biar nggak takut salah pencet',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_SKL_04',
    category: 'current_skills_learning',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'wirausaha'],
    indicators: ['academic_aspiration', 'autonomy_independent'],
    branchingRules: { triggerSignals: ['academic_aspiration'] },
    question: 'Seberapa sering kamu belajar hal baru sendiri lewat YouTube, Google, atau artikel tanpa disuruh guru?',
    options: [
      {
        id: 'opt_1',
        label: 'Hampir tiap hari selalu ada hal baru yang saya cari dan pelajari sendiri',
        signals: ['academic_aspiration', 'autonomy_independent'],
        pathAffinity: { kuliah: 3, wirausaha: 2 }
      },
      {
        id: 'opt_2',
        label: 'Pas lagi kepepet tugas saja supaya tahu langkah cepat nyelesainnya',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Seringnya nonton tips promosi, desain konten, atau cara mulai jualan',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Jarang cari sendiri — lebih nyambung kalau dijelasin langsung sama guru atau teman',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2, bingung: 1 }
      }
    ]
  },
  {
    id: 'Q_SKL_05',
    category: 'current_skills_learning',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['career_urgency', 'hands_on_practical'],
    question: 'Soal bukti kemampuan seperti sertifikat latihan, hasil uji praktik, atau piagam kegiatan, apa pendapatmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Penting banget sebagai bukti nyata saat melamar kerja nanti',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Bagus sebagai bekal awal sebelum lanjut memperdalam ilmu di jenjang kuliah',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Berguna untuk bikin calon pembeli atau klien makin percaya pakai jasaku',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Belum terlalu paham seberapa besar pengaruh sertifikat buat langkah setelah lulus',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_SKL_06',
    category: 'current_skills_learning',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bekerja'],
    indicators: ['enterprising_business', 'interpersonal_social'],
    question: 'Kalau ada kesempatan ngenalin keahlian atau bantuan yang kamu bisa ke orang baru, seberapa nyaman kamu melakukannya?',
    options: [
      {
        id: 'opt_1',
        label: 'Cukup nyaman — saya bisa jelasin apa yang saya bisa dengan bahasa yang gampang dimengerti',
        signals: ['enterprising_business', 'interpersonal_social'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Lebih nyaman kalau lewat contoh hasil karya atau pesan tertulis terlebih dulu',
        signals: ['technical_affinity'],
        pathAffinity: { bekerja: 2, kuliah: 1 }
      },
      {
        id: 'opt_3',
        label: 'Lebih nyaman ikut jalur wawancara resmi atau tanya-jawab terarah',
        signals: ['structured_procedural', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_4',
        label: 'Masih sering malu dan bingung gimana cara mulai nawarin kemampuan diri',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_SKL_07',
    category: 'current_skills_learning',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'bingung'],
    indicators: ['academic_aspiration', 'analytical_depth'],
    question: 'Saat diminta menulis rangkuman kegiatan, catatan rapi, atau laporan tugas yang agak panjang:',
    options: [
      {
        id: 'opt_1',
        label: 'Cukup menikmati — senang nyusun kalimat, ngerapiin data, dan nulis kesimpulannya',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Kerjain seperlunya biar beres, soalnya saya lebih suka bagian praktiknya',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Fokus ngerapiin tampilan halamannya biar menarik dan enak dibaca orang lain',
        signals: ['creative_expression', 'enterprising_business'],
        pathAffinity: { wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Sering macet merangkai kata dan butuh bantuan contoh dulu',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_SKL_08',
    category: 'current_skills_learning',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['creative_expression', 'technical_affinity'],
    question: 'Kalau kamu lihat tampilan aplikasi, poster promo, atau kemasan barang yang berantakan dan bikin bingung:',
    options: [
      {
        id: 'opt_1',
        label: 'Rasanya pengen langsung benerin tata letaknya biar lebih rapi dan enak dilihat',
        signals: ['creative_expression'],
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      },
      {
        id: 'opt_2',
        label: 'Lebih merhatiin alur dan fungsinya — masih gampang dipakai dan lancar atau tidak',
        signals: ['technical_affinity', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Langsung kepikiran apakah tampilan kayak gitu bikin orang males beli atau males pakai',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Jarang terlalu mikirin tampilannya selama masih bisa dipakai',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2, bingung: 1 }
      }
    ]
  },
  {
    id: 'Q_SKL_09',
    category: 'current_skills_learning',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'hands_on_practical'],
    question: 'Waktu teman sekelas minta diajarin materi atau keterampilan yang sudah kamu kuasai:',
    options: [
      {
        id: 'opt_1',
        label: 'Senang banget bantu jelasin pelan-pelan sampai dia beneran ngerti',
        signals: ['interpersonal_social', 'academic_aspiration'],
        pathAffinity: { kuliah: 2, wirausaha: 1 }
      },
      {
        id: 'opt_2',
        label: 'Langsung contohin langkah geraknya biar dia bisa ngikutin dan coba sendiri',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Bantu arahin dia pegang bagian lain yang lebih sesuai sama kelebihannya',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Agak ragu ngajarin karena takut penjelasan saya malah bikin dia tambah bingung',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_SKL_10',
    category: 'current_skills_learning',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bekerja'],
    indicators: ['enterprising_business', 'career_urgency'],
    question: 'Apakah kamu sudah mulai menyimpan contoh hasil kerja atau karyamu selama sekolah (foto proyek, desain, video, catatan, atau aplikasi)?',
    options: [
      {
        id: 'opt_1',
        label: 'Sudah ada beberapa yang tersimpan rapi buat bukti kalau nanti melamar kerja',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Sudah pernah saya posting di medsos atau tunjukkin ke orang biar ada yang tertarik',
        signals: ['enterprising_business', 'creative_expression'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Ada beberapa tugas, pengen saya kembangin lebih matang lagi di bangku kuliah',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Belum sempat kumpulin dan masih bingung mana yang pantes disimpen sebagai karya',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_SKL_11',
    category: 'current_skills_learning',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'bingung'],
    indicators: ['academic_aspiration', 'exploratory_open'],
    question: 'Gimana minatmu belajar bahasa asing (seperti Bahasa Inggris atau lainnya) buat bekal masa depan?',
    options: [
      {
        id: 'opt_1',
        label: 'Tertarik banget — pengen lancar biar gampang akses bacaan, ilmu, dan peluang lebih luas',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Yang penting ngerti istilah yang sering muncul di menu aplikasi, alat kerja, atau kerjaan',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Pengen bisa biar gampang komunikasi sama calon pembeli atau mitra dari luar',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Masih terasa cukup susah dan belum jadi fokus belajarku saat ini',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_SKL_12',
    category: 'current_skills_learning',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'hands_on_practical'],
    question: 'Waktu sadar kamu bikin kesalahan di tengah ngerjain tugas atau proyek:',
    options: [
      {
        id: 'opt_1',
        label: 'Langsung ngaku, bongkar ulang bagian yang salah, lalu beresin sampai rapi',
        signals: ['structured_procedural', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Cari tahu dulu penyebab dasarnya biar kesalahan yang sama nggak kejadian lagi',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Nyari cara kreatif buat nutupin atau ubah pendekatannya biar hasilnya tetap kepakai',
        signals: ['enterprising_business', 'creative_expression'],
        pathAffinity: { wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Sering panik duluan dan ragu buat benerin sendiri tanpa ditemani',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_SKL_13',
    category: 'current_skills_learning',
    priority: 'core',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'structured_procedural', 'technical_affinity', 'exploratory_open'],
    branchingRules: { preferredStage: 'skills_readiness' },
    question: 'Pernah nggak kamu bisa ngerjain suatu keterampilan, tapi sebenarnya kamu nggak pengen ngejadiin itu pekerjaan utama ke depan?',
    description: 'Bantu kami memisahkan kemampuan yang sudah kamu bisa dengan minat yang benar-benar ingin kamu jalani.',
    options: [
      {
        id: 'opt_1',
        label: 'Pernah — saya bisa praktik/teknisnya, tapi sebenarnya lebih pengen ngejar minat bidang lain',
        signals: ['hands_on_practical'],
        pathAffinity: { bingung: 1 }
      },
      {
        id: 'opt_2',
        label: 'Pernah — saya bisa bagian administrasi/pencatatan, tapi nggak pengen kerja di bidang itu',
        signals: ['structured_procedural'],
        pathAffinity: { bingung: 1 }
      },
      {
        id: 'opt_3',
        label: 'Nggak sih — keahlian yang paling saya kuasai sekarang memang nyambung sama yang saya suka',
        signals: ['technical_affinity'],
        pathAffinity: { bekerja: 1, kuliah: 1 }
      },
      {
        id: 'opt_4',
        label: 'Belum terasa punya keahlian khusus, jadi sekarang fokus mengenali minat dan latihan dasar',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },

  // =========================================================================
  // KATEGORI 5: WORK ENVIRONMENT PREFERENCES (10 SOAL: Q_ENV_01 s.d. Q_ENV_10)
  // =========================================================================
  {
    id: 'Q_ENV_01',
    category: 'work_environment',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'technical_affinity', 'creative_expression', 'autonomy_independent'],
    question: 'Kalau ngebayangin suasana tempat beraktivitas setiap hari nanti, mana yang rasanya paling bikin kamu betah?',
    options: [
      {
        id: 'opt_1',
        label: 'Tempat kerja aktif yang dinamis — bengkel, area produksi, toko, atau lapangan',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Ruangan tenang dan teratur — meja kerja, kantor admin, lab komputer, atau ruang belajar',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Tempat santai yang fleksibel — studio kreatif, tempat usaha sendiri, atau kerja dari mana saja',
        signals: ['autonomy_independent', 'creative_expression'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Belum punya bayangan pasti, masih pengen lihat berbagai suasana kerja dulu',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_ENV_02',
    category: 'work_environment',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'autonomy_independent'],
    question: 'Soal pembagian jam aktivitas harian, pola mana yang paling cocok dengan gaya hidupmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Jam masuk dan pulang yang pasti (misal pagi–sore), sisanya bisa istirahat penuh',
        signals: ['structured_procedural', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Ada jadwal kelas/kegiatan tetap, tapi punya waktu luang buat belajar dan eksplor mandiri',
        signals: ['academic_aspiration', 'autonomy_independent'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Jam fleksibel — rela kerja ekstra pas ramai pesanan asal bisa atur waktu libur sendiri',
        signals: ['enterprising_business', 'autonomy_independent'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Belum tahu ritme jam seperti apa yang paling kuat dijalani sehari-hari',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_ENV_03',
    category: 'work_environment',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'wirausaha'],
    indicators: ['structured_procedural', 'autonomy_independent'],
    branchingRules: { targetPaths: ['bekerja', 'wirausaha'] },
    question: 'Gimana rasanya kalau nanti kerja dengan aturan ketat dan arahan langsung dari atasan?',
    options: [
      {
        id: 'opt_1',
        label: 'Nggak masalah, aturan justru bikin kerjaan jelas dan semua orang aman',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Kurang nyaman kalau terlalu dikekang — saya lebih senang pegang kendali sendiri',
        signals: ['autonomy_independent', 'enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Oke buat belajar disiplin di awal karier sebelum nanti jalan mandiri',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Masih agak khawatir apakah bisa langsung menyesuaikan diri sama aturan ketat',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_ENV_04',
    category: 'work_environment',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'bekerja'],
    indicators: ['academic_aspiration', 'hands_on_practical'],
    branchingRules: { targetPaths: ['kuliah'] },
    question: 'Kalau membayangkan lingkungan pergaulan setelah lulus nanti, teman-teman seperti apa yang kamu harap ada di sekitarmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Teman-teman yang suka diskusi ide baru, aktif organisasi, dan wawasannya luas',
        signals: ['academic_aspiration', 'interpersonal_social'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Teman-teman yang kompak sama-sama ngasah keterampilan kerja dan praktik nyata',
        signals: ['hands_on_practical'],
        pathAffinity: { kuliah: 2, bekerja: 1 }
      },
      {
        id: 'opt_3',
        label: 'Teman-teman yang semangat cari peluang bisnis atau bikin proyek bareng',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3, kuliah: 1 }
      },
      {
        id: 'opt_4',
        label: 'Lingkungan santai dan suportif yang bantu saya pelan-pelan nemuin minat',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_ENV_05',
    category: 'work_environment',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'autonomy_independent'],
    question: 'Dalam beraktivitas seharian, energimu biasanya terasa paling penuh saat:',
    options: [
      {
        id: 'opt_1',
        label: 'Kerja fokus sendirian di tempat tenang tanpa banyak gangguan orang lain',
        signals: ['autonomy_independent', 'technical_affinity'],
        pathAffinity: { bekerja: 2, kuliah: 1 }
      },
      {
        id: 'opt_2',
        label: 'Banyak ngobrol, ketemu orang baru, melayani tamu/pembeli, atau tukar ide',
        signals: ['interpersonal_social', 'enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Kerja bareng tim kecil yang sudah akrab dan pembagian tugasnya jelas',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_4',
        label: 'Tergantung mood — kadang betah sendiri, kadang butuh suasana ramai',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_ENV_06',
    category: 'work_environment',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bingung'],
    indicators: ['enterprising_business', 'autonomy_independent'],
    question: 'Gimana perasaanmu soal pemasukan bulanan yang jumlahnya belum pasti (kadang ramai, kadang sepi) di masa awal?',
    options: [
      {
        id: 'opt_1',
        label: 'Siap menghadapi risikonya, yang penting bebas ngatur usaha sendiri',
        signals: ['autonomy_independent', 'enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Kurang cocok — saya jauh lebih tenang kalau punya gaji tetap tiap bulan',
        signals: ['career_urgency', 'structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Nggak apa-apa selama masih sambil kuliah atau ada dukungan beasiswa',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Justru hal itu yang bikin saya masih ragu kalau harus langsung usaha sendiri',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3, bekerja: 1 }
      }
    ]
  },
  {
    id: 'Q_ENV_07',
    category: 'work_environment',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'wirausaha'],
    indicators: ['hands_on_practical', 'technical_affinity'],
    question: 'Seberapa nyaman kamu bekerja di tempat yang ramai suara mesin, bengkel, atau produksi barang fisik?',
    options: [
      {
        id: 'opt_1',
        label: 'Sudah biasa dan nggak masalah — suasana kerja lapangan seperti itu terasa hidup',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Lebih nyaman di ruangan tertutup pakai komputer, dokumen, atau ketemu orang di dalam gedung',
        signals: ['technical_affinity'],
        pathAffinity: { kuliah: 2, bekerja: 1 }
      },
      {
        id: 'opt_3',
        label: 'Bisa menyesuaikan diri asalkan perlengkapan keamanan dan aturannya lengkap',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Kurang nyaman dengan suara bising/kotor — lebih betah di ruangan bersih dan tenang',
        signals: ['creative_expression', 'academic_aspiration'],
        pathAffinity: { kuliah: 2, bingung: 1 }
      }
    ]
  },
  {
    id: 'Q_ENV_08',
    category: 'work_environment',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['career_urgency', 'autonomy_independent'],
    question: 'Kalau nanti ada peluang kerja atau belajar di luar Bandung / luar kota setelah lulus, bagaimana sikapmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Siap berangkat demi pengalaman kerja lebih luas dan penghasilan lebih baik',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Lebih pengen lanjut belajar di kota terdekat atau sekitar Jawa Barat dulu',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Pengen berkembang di daerah sendiri supaya dekat keluarga dan kenal pasar sekitar',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Masih perlu pertimbangan sama orang tua sebelum mutusin jauh dari rumah',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_ENV_09',
    category: 'work_environment',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'hands_on_practical'],
    question: 'Orang-orang seperti apa yang paling bikin kamu semangat kerja bareng setiap hari?',
    options: [
      {
        id: 'opt_1',
        label: 'Rekan kerja yang cekatan, disiplin, dan saling bantu beresin target harian',
        signals: ['structured_procedural', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Pembimbing atau pengajar yang sabar ngajak diskusi memperdalam wawasan',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Pelanggan, pembeli, atau partner kerja yang berbeda-beda tiap harinya',
        signals: ['enterprising_business', 'interpersonal_social'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Suasana kerja yang santai, ramah, dan nggak terlalu menekan pemula',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_ENV_10',
    category: 'work_environment',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['autonomy_independent', 'structured_procedural'],
    question: 'Soal cara berpakaian saat kerja atau kuliah nanti, mana yang terasa paling pas buatmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Senang pakai seragam kerja rapi — terasa profesional dan nggak usah bingung pilih baju',
        signals: ['structured_procedural', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Lebih suka baju bebas rapi yang nyaman dan bisa nunjukin gaya diri sendiri',
        signals: ['creative_expression', 'academic_aspiration'],
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      },
      {
        id: 'opt_3',
        label: 'Bebas apa saja yang sopan dan praktis buat ketemu pelanggan atau kerja',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Nggak terlalu mempermasalahkan pakaian selama nyaman buat bergerak',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },

  // =========================================================================
  // KATEGORI 6: MOTIVATION & VALUES (11 SOAL: Q_MOT_01 s.d. Q_MOT_11)
  // =========================================================================
  {
    id: 'Q_MOT_01',
    category: 'motivation_values',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['career_urgency', 'academic_aspiration', 'enterprising_business', 'exploratory_open'],
    question: 'Kalau lihat ke 1–3 tahun ke depan setelah lulus SMK, hal apa yang paling pengen segera terwujud?',
    options: [
      {
        id: 'opt_1',
        label: 'Sudah punya penghasilan sendiri dan bisa bantu kebutuhan orang tua di rumah',
        signals: ['career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Lagi serius belajar di kampus atau pelatihan lanjut buat memperdalam bidang yang disuka',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Punya usaha atau jasa mandiri yang mulai berjalan stabil dan dikenal orang',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Nyobain beberapa pengalaman baru dulu supaya makin yakin sama pilihan sendiri',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_MOT_02',
    category: 'motivation_values',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'autonomy_independent', 'academic_aspiration'],
    question: 'Dalam pekerjaan dan hidup, arti "sukses" yang paling bikin hatimu puas adalah:',
    options: [
      {
        id: 'opt_1',
        label: 'Punya kerjaan tetap, diandalkan di tempat kerja, dan hidup terasa aman terjamin',
        signals: ['career_urgency', 'structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Berhasil menyelesaikan pendidikan tinggi dan jadi orang yang ahli di bidang yang diminati',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Punya merek atau usaha buatan sendiri yang hasilnya beneran dipakai banyak orang',
        signals: ['enterprising_business', 'creative_expression'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Menjalani aktivitas sehari-hari dengan hati tenang dan seimbang tanpa terlalu tertekan',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_MOT_03',
    category: 'motivation_values',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'wirausaha'],
    indicators: ['career_urgency', 'enterprising_business'],
    branchingRules: { targetPaths: ['bekerja', 'wirausaha'] },
    question: 'Seberapa besar keinginanmu untuk segera mandiri secara uang tanpa harus minta ke orang tua lagi?',
    options: [
      {
        id: 'opt_1',
        label: 'Besar banget — itu alasan utama saya pengen langsung kerja begitu lulus',
        signals: ['career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Pengen cepat mandiri juga, tapi lewat jualan atau buka jasa sendiri',
        signals: ['enterprising_business', 'career_urgency'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Pengen mandiri, tapi rela hidup hemat dulu kalau ada peluang kuliah atau beasiswa',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Belum terlalu keburu-buru, keluarga masih kasih ruang buat cari pilihan terbaik dulu',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_MOT_04',
    category: 'motivation_values',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'bingung'],
    indicators: ['academic_aspiration', 'analytical_depth'],
    branchingRules: { targetPaths: ['kuliah', 'bingung'] },
    question: 'Misalkan tiba-tiba ada tawaran beasiswa kuliah penuh tanpa biaya, reaksi pertamamu adalah:',
    options: [
      {
        id: 'opt_1',
        label: 'Langsung ambil tanpa mikir dua kali! Itu kesempatan yang saya tunggu',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Pertimbangkan baik-baik kalau bidang studinya cocok sama minat praktisku',
        signals: ['hands_on_practical', 'academic_aspiration'],
        pathAffinity: { kuliah: 2, bekerja: 1 }
      },
      {
        id: 'opt_3',
        label: 'Kemungkinan tetap pilih langsung kerja dulu biar cepat dapat gaji dan pengalaman',
        signals: ['career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_4',
        label: 'Senang sih, tapi masih takut nggak kuat ngikutin tugas dan ujian kuliahnya',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_MOT_05',
    category: 'motivation_values',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'hands_on_practical'],
    question: 'Hal apa yang paling ingin kamu tunjukkan ke orang tua atau keluarga agar mereka merasa tenang melihat masa depanmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Sudah bisa pegang penghasilan rutin sendiri dari pekerjaan yang jelas',
        signals: ['career_urgency', 'structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Bisa lanjut kuliah dengan sungguh-sungguh sampai lulus dan bawa ijazah',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Punya usaha atau layanan sendiri yang dikelola jujur dan terus berkembang',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Tumbuh jadi pribadi dewasa yang tanggung jawab dan nyaman dengan jalan pilihan sendiri',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_MOT_06',
    category: 'motivation_values',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'kuliah'],
    indicators: ['creative_expression', 'enterprising_business'],
    question: 'Kalau ide, desain, atau cara kerjamu ditiru orang lain tanpa izin, apa yang biasanya kamu rasakan?',
    options: [
      {
        id: 'opt_1',
        label: 'Kesel sih, tapi justru kepacu buat bikin ide baru yang lebih bagus lagi',
        signals: ['enterprising_business', 'creative_expression'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Jadi kepo cari tahu aturan hak cipta biar karya sendiri bisa terlindungi lebih baik',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Fokus jaga kualitas kerjaku sendiri biar tetap lebih rapi daripada tiruannya',
        signals: ['hands_on_practical'],
        pathAffinity: { bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Jadi males atau ragu lagi buat nunjukkin karya ke orang banyak',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_MOT_07',
    category: 'motivation_values',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'bingung'],
    indicators: ['career_urgency', 'structured_procedural'],
    question: 'Gimana pandanganmu kalau sewaktu-waktu tempat kerja lagi ramai dan diminta kerja tambahan (lembur)?',
    options: [
      {
        id: 'opt_1',
        label: 'Siap saja dijalani profesional selama hitungan bayaran tambahannya adil dan jelas',
        signals: ['career_urgency', 'structured_procedural'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Lebih suka jam kerja normal saja biar malam masih punya tenaga buat belajar lagi',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Kalau kerja ekstra buat usaha sendiri rasanya jauh lebih semangat daripada buat tempat lain',
        signals: ['enterprising_business', 'autonomy_independent'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Agak khawatir tenagaku gampang habis kalau jam kerjanya terlalu panjang',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_MOT_08',
    category: 'motivation_values',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'enterprising_business'],
    question: 'Seberapa penting buatmu punya pekerjaan atau kegiatan yang hasilnya langsung ngebantu orang di sekitar?',
    options: [
      {
        id: 'opt_1',
        label: 'Penting banget — pengen nanti bisa buka usaha dan ngajak teman sekitar kerja bareng',
        signals: ['enterprising_business', 'interpersonal_social'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Penting — lewat ilmu, inovasi, atau karya yang menyelesaikan masalah masyarakat',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Lewat kerja jujur, ramah melayani orang, dan tanggung jawab saja sudah sangat berarti',
        signals: ['structured_procedural', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_4',
        label: 'Sekarang masih fokus menata kesiapan diri sendiri dulu sebelum mikir sejauh itu',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_MOT_09',
    category: 'motivation_values',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['autonomy_independent', 'structured_procedural'],
    question: 'Kalau merem sebentar dan bayangin dirimu 5 tahun lagi, gambaran mana yang paling bikin kamu senyum?',
    options: [
      {
        id: 'opt_1',
        label: 'Jadi staf senior atau kepala tim yang dipercaya di kantor, toko, atau perusahaan',
        signals: ['structured_procedural', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Lulusan kuliah yang kerja sebagai perancang, analis, atau ahli di bidang yang saya minati',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Punya usaha atau studio sendiri yang pelanggannya ramai dan terus jalan',
        signals: ['enterprising_business', 'autonomy_independent'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Sudah nemu pekerjaan sehari-hari yang beneran cocok dan bikin betah dijalanin',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_MOT_10',
    category: 'motivation_values',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bekerja'],
    indicators: ['enterprising_business', 'career_urgency'],
    question: 'Buat dirimu sendiri, kata "gagal" waktu nyoba sesuatu yang baru itu artinya apa?',
    options: [
      {
        id: 'opt_1',
        label: 'Bagian wajar dari belajar — dari situ jadi tahu cara mana yang berhasil lain kali',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Sinyal buat lebih hati-hati dan selalu ikutin langkah aturan standar biar aman',
        signals: ['structured_procedural', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Bahan catatan buat dievaluasi ulang kenapa perkiraannya meleset',
        signals: ['analytical_depth', 'academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Jujur masih sering bikin kepikiran lama dan takut nyoba lagi',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_MOT_11',
    category: 'motivation_values',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah', 'bekerja'],
    indicators: ['academic_aspiration', 'career_urgency'],
    question: 'Andai harus milih sekarang, mana yang lebih dekat sama prioritas hidupmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Sabar belajar lanjut beberapa tahun dulu biar bekal ilmu dan peluang kariernya lebih tinggi',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Dapat penghasilan langsung dulu sekarang; urusan kuliah bisa nyusul sambil kerja nanti',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3, kuliah: 1 }
      },
      {
        id: 'opt_3',
        label: 'Mulai bangun usaha/jasa sendiri yang hasilnya sepadan sama kerja keras sendiri',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Masih bingung nimbang antara kebutuhan sekarang sama rencana jangka panjang',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },

  // =========================================================================
  // KATEGORI 7: PRACTICAL READINESS (11 SOAL: Q_RDN_01 s.d. Q_RDN_11)
  // =========================================================================
  {
    id: 'Q_RDN_01',
    category: 'practical_readiness',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['career_urgency', 'academic_aspiration', 'enterprising_business'],
    question: 'Kalau lihat kondisi nyata keluarga menjelang lulus nanti, situasi mana yang paling menggambarkan keadaanmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Diharapkan bisa segera kerja dan pegang penghasilan sendiri setelah lulus',
        signals: ['career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Keluarga dukung lanjut kuliah, terutama kalau bisa tembus beasiswa seperti KIP Kuliah',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Ada dukungan keluarga atau sedikit tabungan buat coba mulai usaha/jasa kecil',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Masih perlu ngobrol lebih serius bareng orang tua soal rencana yang paling pas',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_RDN_02',
    category: 'practical_readiness',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'academic_aspiration', 'career_urgency'],
    question: 'Sejauh ini, hal praktis apa yang sudah mulai kamu siapin buat langkah setelah lulus?',
    options: [
      {
        id: 'opt_1',
        label: 'Jaga kesehatan fisik dan mulai siapin CV serta mental buat tes/wawancara kerja',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Jaga nilai rapor dan mulai cari tahu materi seleksi masuk perguruan tinggi',
        signals: ['academic_aspiration', 'analytical_depth'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Mulai nyusun ide barang/jasa sederhana dan ngecek apa yang dibutuhkan orang sekitar',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Belum nyiapin apa-apa karena masih nyari tahu arah mana yang paling cocok',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_RDN_03',
    category: 'practical_readiness',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'bingung'],
    indicators: ['career_urgency', 'hands_on_practical'],
    branchingRules: { targetPaths: ['bekerja'] },
    question: 'Gimana kesiapan mentalmu menghadapi rutinitas kerja penuh sekitar 8 jam sehari?',
    options: [
      {
        id: 'opt_1',
        label: 'Sudah siap — pengalaman praktik atau PKL sebelumnya bikin saya kebayang ritmenya',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Siap, apalagi kalau di tempat kerja masih bisa belajar keterampilan baru',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2, kuliah: 1 }
      },
      {
        id: 'opt_3',
        label: 'Rasanya bakal cepat jenuh kalau tiap hari jam dan tugasnya kaku terus',
        signals: ['autonomy_independent', 'enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Masih agak cemas apakah kuat menghadapi target dan tekanan kerja setiap hari',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_RDN_04',
    category: 'practical_readiness',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['kuliah'],
    indicators: ['academic_aspiration', 'analytical_depth'],
    branchingRules: { targetPaths: ['kuliah'] },
    question: 'Kalau nanti berkesempatan kuliah, jalur mana yang paling masuk akal buat kamu pertimbangkan?',
    options: [
      {
        id: 'opt_1',
        label: 'Politeknik Vokasi (D3/D4) yang lebih banyak praktik lewat jalur seleksi nasional',
        signals: ['academic_aspiration', 'hands_on_practical'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Universitas (S1) lewat jalur SNBP/SNBT dengan dukungan beasiswa pemerintah seperti KIP-K',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Kerja dulu 1–2 tahun buat nabung, baru kuliah kelas karyawan pakai biaya sendiri',
        signals: ['career_urgency', 'academic_aspiration'],
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_4',
        label: 'Belum begitu ngerti beda politeknik, universitas, dan cara daftarnya',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_RDN_05',
    category: 'practical_readiness',
    priority: 'adaptive_branch',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha'],
    indicators: ['enterprising_business', 'autonomy_independent'],
    branchingRules: { targetPaths: ['wirausaha'] },
    question: 'Kalau mau nyoba mulai usaha kecil tanpa bikin pusing modal besar, cara mana yang paling realistis buatmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Mulai dari jasa atau layanan digital pakai keahlian sendiri tanpa perlu stok barang banyak',
        signals: ['enterprising_business', 'technical_affinity'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Kerja ikut orang dulu beberapa bulan buat ngumpulin pengalaman sekaligus tabungan modal',
        signals: ['career_urgency', 'enterprising_business'],
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_3',
        label: 'Patungan kecil dan bagi peran bareng teman dekat yang sama-sama niat',
        signals: ['enterprising_business', 'interpersonal_social'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Masih bingung cara mulainya dan takut rugi kalau uangnya habis di tengah jalan',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_RDN_06',
    category: 'practical_readiness',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'technical_affinity'],
    question: 'Perangkat atau alat kerja apa yang sekarang sudah kamu punya sendiri di rumah?',
    options: [
      {
        id: 'opt_1',
        label: 'Punya laptop atau komputer pribadi yang cukup lancar buat kerja/belajar mandiri',
        signals: ['technical_affinity', 'autonomy_independent'],
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      },
      {
        id: 'opt_2',
        label: 'Baru punya HP, jadi buat urusan praktik alat atau komputer masih ngandelin fasilitas sekolah',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Punya peralatan praktik tangan/bengkel/produksi sendiri di rumah',
        signals: ['hands_on_practical', 'enterprising_business'],
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Alatnya masih terbatas — lebih berharap nanti pakai fasilitas yang disediakan tempat kerja/kampus',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2, bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_RDN_07',
    category: 'practical_readiness',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bingung'],
    indicators: ['exploratory_open', 'interpersonal_social'],
    branchingRules: { targetPaths: ['bingung'] },
    question: 'Kalau saat ini masih merasa bingung milih langkah setelah lulus, hal apa yang paling bikin ragu?',
    options: [
      {
        id: 'opt_1',
        label: 'Keinginan pribadi terasa agak beda sama harapan orang tua',
        signals: ['exploratory_open', 'interpersonal_social'],
        pathAffinity: { bingung: 3 }
      },
      {
        id: 'opt_2',
        label: 'Tertarik ke banyak hal berbeda tapi belum tahu mana yang paling cocok buat dijalani',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      },
      {
        id: 'opt_3',
        label: 'Takut masalah biaya kalau kuliah, atau takut salah pilih tempat kerja',
        signals: ['career_urgency', 'exploratory_open'],
        pathAffinity: { bingung: 3, bekerja: 1 }
      },
      {
        id: 'opt_4',
        label: 'Merasa belum terlalu kenal sama kelebihan dan potensi diri sendiri',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_RDN_08',
    category: 'practical_readiness',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['bekerja', 'kuliah'],
    indicators: ['career_urgency', 'academic_aspiration'],
    question: 'Misalnya setelah lulus kamu kerja dulu, apakah ada niat suatu saat kuliah sambil kerja (kelas karyawan)?',
    options: [
      {
        id: 'opt_1',
        label: 'Iya, kepikiran banget — kerja cari pegangan uang dulu, nanti kuliah pakai biaya sendiri',
        signals: ['career_urgency', 'academic_aspiration'],
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Kayaknya tidak — lebih pengen fokus kerja dulu dan naik posisi lewat pengalaman langsung',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Lebih pengen langsung kuliah reguler sekarang selagi masih segar habis lulus SMK',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_4',
        label: 'Belum tahu apakah tenaganya bakal sanggup bagi waktu antara kerja dan kuliah',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_RDN_09',
    category: 'practical_readiness',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: ['wirausaha', 'bingung'],
    indicators: ['enterprising_business', 'interpersonal_social'],
    question: 'Di lingkungan keluarga atau kenalan terdekatmu, ada nggak orang yang sudah usaha sendiri dan bisa diajak ngobrol?',
    options: [
      {
        id: 'opt_1',
        label: 'Ada, dan mereka terbuka diajak sharing pengalaman atau ngasih arahan',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Nggak ada, kalau mau mulai usaha harus nyari tahu dan belajar sendiri dari nol',
        signals: ['autonomy_independent', 'enterprising_business'],
        pathAffinity: { wirausaha: 2 }
      },
      {
        id: 'opt_3',
        label: 'Kebanyakan orang tua/keluarga kerja sebagai karyawan atau pegawai, jarang yang dagang',
        signals: ['structured_procedural'],
        pathAffinity: { bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Belum pernah ngobrol atau nyari kenalan soal dunia usaha sama sekali',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 2 }
      }
    ]
  },
  {
    id: 'Q_RDN_10',
    category: 'practical_readiness',
    priority: 'core',
    isRequired: true,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'hands_on_practical', 'exploratory_open'],
    question: 'Kalau jujur sama diri sendiri, seberapa siap kamu pakai kemampuanmu saat ini buat kegiatan nyata di luar sekolah?',
    options: [
      {
        id: 'opt_1',
        label: 'Cukup yakin — tugas praktik dan kegiatan sekolah sudah ngebekalin dasar kerja yang oke',
        signals: ['hands_on_practical', 'career_urgency'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Dasarnya ada, tapi masih pengen belajar konsep dan ilmunya lebih dalam lagi',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Cukup bisa dipakai buat bikin layanan atau produk sederhana buat orang sekitar',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Jujur masih kurang pede dan merasa butuh banyak latihan tambahan dulu',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_RDN_11',
    category: 'practical_readiness',
    priority: 'deep_dive',
    isRequired: true,
    estimatedSeconds: 13,
    targetPaths: 'all',
    indicators: ['exploratory_open', 'career_urgency', 'academic_aspiration', 'enterprising_business'],
    question: 'Langkah kecil apa yang paling pengen kamu lakukan dalam 1 bulan ke depan setelah pameran ini?',
    options: [
      {
        id: 'opt_1',
        label: 'Ngerapiin CV, kumpulin contoh karya, dan mulai lihat info bidang kerja yang cocok',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Cari info pilihan bidang studi kuliah, syarat jalur masuk, dan info beasiswa',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Nyobain bikin satu jasa atau jualan kecil-kecilan ke teman atau warga sekitar',
        signals: ['enterprising_business'],
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Ngobrol santai bareng guru BK, wali kelas, atau orang tua buat bahas hasil refleksi ini',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },

  // =========================================================================
  // KATEGORI 8 (PHASE 7.7): PERTANYAAN EKSPLORASI LUAS & KONDISI NYATA
  // =========================================================================
  {
    id: 'Q_EXP_01',
    category: 'interest_curiosity',
    priority: 'core',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'interpersonal_social', 'enterprising_business', 'academic_aspiration'],
    branchingRules: { preferredStage: 'desire_value' },
    question: 'Kalau ada kegiatan mingguan gratis di luar kelas yang boleh kamu pilih bebas, kegiatan mana yang paling bikin penasaran?',
    description: 'Pilih aktivitas yang rasanya paling menyenangkan untuk dicoba.',
    options: [
      {
        id: 'opt_1',
        label: 'Kelas bikin sesuatu dengan tangan — misalnya masak, menjahit, merakit alat, atau berkebun',
        signals: ['hands_on_practical', 'creative_expression'],
        domainSignals: { teknik_industri: 2, pariwisata_kuliner: 2, pertanian_lingkungan: 2 },
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_2',
        label: 'Kegiatan bantu sesama — seperti relawan kesehatan, bakti sosial, atau pendampingan belajar adik kelas',
        signals: ['interpersonal_social'],
        domainSignals: { kesehatan: 2, psikologi_sosial: 2, pendidikan: 2 },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      },
      {
        id: 'opt_3',
        label: 'Klub jualan kecil-kecilan, bazar sekolah, atau belajar cara mengelola uang dan toko',
        signals: ['enterprising_business', 'structured_procedural'],
        domainSignals: { bisnis_ekonomi: 3, administrasi_logistik: 1 },
        pathAffinity: { wirausaha: 3, bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Klub diskusi buku, menulis artikel, belajar bahasa asing, atau mengamati isu sosial/aturan',
        signals: ['academic_aspiration', 'analytical_depth'],
        domainSignals: { bahasa_sastra: 2, hukum_keadilan: 2, komunikasi_media: 1 },
        pathAffinity: { kuliah: 3 }
      }
    ]
  },
  {
    id: 'Q_EXP_02',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'interpersonal_social', 'analytical_depth', 'creative_expression'],
    branchingRules: { preferredStage: 'desire_value' },
    question: 'Saat terlibat dalam kegiatan atau proyek bareng teman, peran mana yang paling bikin kamu merasa berguna?',
    options: [
      {
        id: 'opt_1',
        label: 'Menjaga kelengkapan berkas, daftar belanja, jadwal kerja, dan pencatatan uang kas biar rapi',
        signals: ['structured_procedural'],
        domainSignals: { administrasi_logistik: 3, bisnis_ekonomi: 2 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Menyapa tamu, melobi pihak lain, mempromosikan acara, atau memandu jalannya kegiatan',
        signals: ['interpersonal_social', 'enterprising_business'],
        domainSignals: { komunikasi_media: 2, pariwisata_kuliner: 2, bisnis_ekonomi: 1 },
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_3',
        label: 'Mencari solusi kalau ada bagian yang macet, menganalisis data, atau ngecek ketepatan cara kerja',
        signals: ['analytical_depth', 'technical_affinity'],
        domainSignals: { teknologi_informatika: 2, teknik_industri: 2, hukum_keadilan: 1 },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Menyiapkan tampilan poster, foto dokumentasi, kemasan barang, atau dekorasi ruangan biar menarik',
        signals: ['creative_expression'],
        domainSignals: { seni_desain: 3, komunikasi_media: 1 },
        pathAffinity: { wirausaha: 2, kuliah: 2 }
      }
    ]
  },
  {
    id: 'Q_EXP_03',
    category: 'work_environment',
    priority: 'core',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'interpersonal_social', 'hands_on_practical', 'autonomy_independent'],
    branchingRules: { preferredStage: 'habits_env' },
    question: 'Kalau membayangkan tempatmu beraktivitas nanti, lingkungan seperti apa yang paling bikin kamu nyaman seharian?',
    options: [
      {
        id: 'opt_1',
        label: 'Ruangan kantor atau meja kerja yang tenang, rapi, dengan komputer dan dokumen teratur',
        signals: ['structured_procedural', 'autonomy_independent'],
        domainSignals: { administrasi_logistik: 2, bisnis_ekonomi: 2, teknologi_informatika: 1, hukum_keadilan: 1 },
        pathAffinity: { bekerja: 3, kuliah: 1 }
      },
      {
        id: 'opt_2',
        label: 'Toko, kafe, resepsionis, atau tempat pelayanan yang ramai bertemu banyak orang baru',
        signals: ['interpersonal_social', 'enterprising_business'],
        domainSignals: { pariwisata_kuliner: 2, bisnis_ekonomi: 2, komunikasi_media: 1 },
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_3',
        label: 'Bengkel, dapur produksi, studio kerja, atau ruang praktik langsung dengan alat dan bahan',
        signals: ['hands_on_practical'],
        domainSignals: { teknik_industri: 2, pariwisata_kuliner: 2, seni_desain: 1 },
        pathAffinity: { bekerja: 3, wirausaha: 1 }
      },
      {
        id: 'opt_4',
        label: 'Ruang kelas, fasilitas kesehatan, taman terbuka, atau lokasi lapangan yang dekat dengan masyarakat & alam',
        signals: ['interpersonal_social', 'hands_on_practical'],
        domainSignals: { pendidikan: 2, kesehatan: 2, pertanian_lingkungan: 2, psikologi_sosial: 1 },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      }
    ]
  },
  {
    id: 'Q_EXP_04',
    category: 'work_environment',
    priority: 'adaptive_branch',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['structured_procedural', 'creative_expression', 'interpersonal_social', 'hands_on_practical'],
    branchingRules: { preferredStage: 'habits_env' },
    question: 'Dari sisi ritme aktivitas sehari-hari, pola kerja seperti apa yang paling cocok buatmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Jadwal tetap dan tugas jelas tiap hari — datang, kerjakan sesuai urutan, lalu pulang tepat waktu',
        signals: ['structured_procedural', 'career_urgency'],
        domainSignals: { administrasi_logistik: 2, hukum_keadilan: 1, bisnis_ekonomi: 1 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Setiap minggu ada proyek atau topik baru yang bikin mikir kreatif dan tidak monoton',
        signals: ['creative_expression', 'autonomy_independent'],
        domainSignals: { seni_desain: 2, komunikasi_media: 2, bahasa_sastra: 1 },
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      },
      {
        id: 'opt_3',
        label: 'Aktif melayani orang, ngobrol, membimbing, atau membantu kebutuhan harian banyak pihak',
        signals: ['interpersonal_social'],
        domainSignals: { pendidikan: 2, kesehatan: 2, pariwisata_kuliner: 1, psikologi_sosial: 1 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_4',
        label: 'Banyak gerak fisik, mengecek barang/tanaman/mesin secara langsung daripada duduk diam terus',
        signals: ['hands_on_practical'],
        domainSignals: { teknik_industri: 2, pertanian_lingkungan: 2, administrasi_logistik: 1 },
        pathAffinity: { bekerja: 3 }
      }
    ]
  },
  {
    id: 'Q_EXP_05',
    category: 'work_environment',
    priority: 'core',
    isRequired: false,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['interpersonal_social', 'structured_procedural', 'hands_on_practical', 'creative_expression'],
    branchingRules: { preferredStage: 'habits_env' },
    question: 'Dalam pekerjaan atau belajar nanti, kamu paling betah kalau keseharianmu paling banyak berurusan dengan apa?',
    options: [
      {
        id: 'opt_1',
        label: 'Manusia — ngajar, dengerin cerita, merawat, atau melayani tamu dan pembeli',
        signals: ['interpersonal_social'],
        domainSignals: { pendidikan: 2, psikologi_sosial: 2, kesehatan: 2, pariwisata_kuliner: 1 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Angka, catatan, stok barang, dokumen, atau aturan yang perlu ketelitian tinggi',
        signals: ['structured_procedural', 'analytical_depth'],
        domainSignals: { administrasi_logistik: 2, bisnis_ekonomi: 2, hukum_keadilan: 2 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_3',
        label: 'Benda nyata — perkakas bengkel, bahan masakan, kain jahit, tanaman, atau bangunan',
        signals: ['hands_on_practical'],
        domainSignals: { teknik_industri: 2, pertanian_lingkungan: 2, pariwisata_kuliner: 2 },
        pathAffinity: { bekerja: 3, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Ide dan karya — tulisan, bahasa, desain visual, video, atau sistem program komputer',
        signals: ['creative_expression', 'technical_affinity'],
        domainSignals: { seni_desain: 2, bahasa_sastra: 2, komunikasi_media: 2, teknologi_informatika: 2 },
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      }
    ]
  },
  {
    id: 'Q_EXP_06',
    category: 'habits_activities',
    priority: 'adaptive_branch',
    isRequired: false,
    estimatedSeconds: 11,
    targetPaths: 'all',
    indicators: ['autonomy_independent', 'structured_procedural', 'interpersonal_social'],
    branchingRules: { preferredStage: 'habits_env' },
    question: 'Kalau disuruh memilih suasana interaksi saat menyelesaikan tugas, mana yang paling pas buatmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Fokus kerja sendiri di meja yang tenang, sesekali saja lapor hasil ke atasan atau teman',
        signals: ['autonomy_independent', 'analytical_depth'],
        domainSignals: { bahasa_sastra: 2, seni_desain: 1, teknologi_informatika: 1, administrasi_logistik: 1 },
        pathAffinity: { kuliah: 2, wirausaha: 2 }
      },
      {
        id: 'opt_2',
        label: 'Kerja bareng tim kecil (3–5 orang) yang saling bagi tugas dengan jelas dan kompak',
        signals: ['structured_procedural', 'interpersonal_social'],
        domainSignals: { teknik_industri: 2, administrasi_logistik: 2, kesehatan: 1 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Suasana ramai yang terus ketemu pelanggan, pengunjung, atau rekan baru setiap hari',
        signals: ['interpersonal_social', 'enterprising_business'],
        domainSignals: { bisnis_ekonomi: 2, pariwisata_kuliner: 2, komunikasi_media: 2 },
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Membimbing atau berdiskusi akrab dalam kelompok belajar dan kegiatan komunitas',
        signals: ['interpersonal_social', 'academic_aspiration'],
        domainSignals: { pendidikan: 2, psikologi_sosial: 2 },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      }
    ]
  },
  {
    id: 'Q_EXP_07',
    category: 'thinking_problem_solving',
    priority: 'core',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'academic_aspiration', 'creative_expression', 'structured_procedural'],
    branchingRules: { preferredStage: 'habits_env' },
    question: 'Waktu belajar keterampilan atau pengetahuan baru, cara mana yang paling bikin kamu cepat nyambung?',
    options: [
      {
        id: 'opt_1',
        label: 'Langsung pegang alat, coba praktik di tempat, dan perbaiki pelan-pelan sambil jalan',
        signals: ['hands_on_practical'],
        domainSignals: { teknik_industri: 2, pariwisata_kuliner: 1, pertanian_lingkungan: 1 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Pahami dulu teori, alasan ilmiah, dan gambaran besarnya dari buku atau penjelasan guru',
        signals: ['academic_aspiration', 'analytical_depth'],
        domainSignals: { hukum_keadilan: 1, psikologi_sosial: 1, pendidikan: 1, kesehatan: 1 },
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Lihat contoh visual yang keren lalu bereksperimen memodifikasi dengan gaya sendiri',
        signals: ['creative_expression', 'autonomy_independent'],
        domainSignals: { seni_desain: 2, komunikasi_media: 2, bahasa_sastra: 1 },
        pathAffinity: { wirausaha: 2, kuliah: 2 }
      },
      {
        id: 'opt_4',
        label: 'Ikuti panduan langkah demi langkah (checklist) dari awal sampai selesai tanpa loncat-loncat',
        signals: ['structured_procedural'],
        domainSignals: { administrasi_logistik: 2, bisnis_ekonomi: 2, kesehatan: 1 },
        pathAffinity: { bekerja: 3 }
      }
    ]
  },
  {
    id: 'Q_EXP_08',
    category: 'thinking_problem_solving',
    priority: 'adaptive_branch',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['analytical_depth', 'structured_procedural', 'creative_expression', 'interpersonal_social'],
    branchingRules: { preferredStage: 'habits_env' },
    question: 'Kalau melihat suatu kegiatan atau tempat kerja yang terasa berantakan, biasanya hal apa yang langsung ingin kamu benahi dulu?',
    options: [
      {
        id: 'opt_1',
        label: 'Mencari sumber error atau penyebab alat/sistemnya tidak berjalan sebagaimana mestinya',
        signals: ['analytical_depth', 'technical_affinity'],
        domainSignals: { teknologi_informatika: 2, teknik_industri: 2 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_2',
        label: 'Merapikan catatan stok, penamaan berkas, antrean, dan urutan jadwal kerjanya',
        signals: ['structured_procedural'],
        domainSignals: { administrasi_logistik: 3, bisnis_ekonomi: 2, hukum_keadilan: 1 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Menata ulang tampilan visual, kerapian produk, atau cara promosinya biar lebih sedap dipandang',
        signals: ['creative_expression', 'enterprising_business'],
        domainSignals: { seni_desain: 2, pariwisata_kuliner: 1, komunikasi_media: 2 },
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Mengajak orang-orangnya ngobrol sebentar supaya pembagian peran dan suasananya adem lagi',
        signals: ['interpersonal_social'],
        domainSignals: { psikologi_sosial: 2, pendidikan: 2, komunikasi_media: 1 },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      }
    ]
  },
  {
    id: 'Q_EXP_09',
    category: 'motivation_values',
    priority: 'adaptive_branch',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['hands_on_practical', 'autonomy_independent', 'structured_procedural', 'creative_expression'],
    branchingRules: { preferredStage: 'desire_value' },
    question: 'Supaya rekomendasi tidak meleset, aktivitas sehari-hari mana yang rasanya paling TIDAK cocok kalau harus kamu jalani terus?',
    description: 'Jawabanmu di sini membantu menyaring suasana yang paling tidak kamu sukai.',
    options: [
      {
        id: 'opt_1',
        label: 'Tidak betah kalau harus duduk menghadap layar komputer atau mengetik angka seharian penuh',
        signals: ['hands_on_practical', 'interpersonal_social'],
        domainSignals: { pariwisata_kuliner: 1, teknik_industri: 1, pertanian_lingkungan: 1, pendidikan: 1 },
        pathAffinity: { bekerja: 2, wirausaha: 1 }
      },
      {
        id: 'opt_2',
        label: 'Cepat lelah kalau harus membujuk, berjualan, atau terus-menerus menghadapi orang asing ramai',
        signals: ['autonomy_independent', 'structured_procedural'],
        domainSignals: { administrasi_logistik: 1, bahasa_sastra: 1, teknologi_informatika: 1, pertanian_lingkungan: 1 },
        pathAffinity: { bekerja: 2, kuliah: 2 }
      },
      {
        id: 'opt_3',
        label: 'Kurang nyaman di area bengkel yang kotor oli, bising mesin keras, atau angkat beban berat',
        signals: ['structured_procedural', 'creative_expression'],
        domainSignals: { administrasi_logistik: 1, bisnis_ekonomi: 1, seni_desain: 1, bahasa_sastra: 1 },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      },
      {
        id: 'opt_4',
        label: 'Cepat jenuh kalau aktivitas tiap hari sangat kaku berulang dan tidak boleh mencoba ide baru',
        signals: ['creative_expression', 'enterprising_business'],
        domainSignals: { seni_desain: 1, komunikasi_media: 1, pariwisata_kuliner: 1 },
        pathAffinity: { wirausaha: 2, kuliah: 2 }
      }
    ]
  },
  {
    id: 'Q_EXP_10',
    category: 'motivation_values',
    priority: 'core',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['career_urgency', 'academic_aspiration', 'creative_expression', 'interpersonal_social'],
    branchingRules: { preferredStage: 'desire_value' },
    question: 'Dalam memilih langkah setelah lulus nanti, harapan mana yang paling terasa penting buat hidupmu?',
    options: [
      {
        id: 'opt_1',
        label: 'Punya pekerjaan dan penghasilan rutin yang stabil supaya cepat mandiri membantu keluarga',
        signals: ['career_urgency', 'structured_procedural'],
        domainSignals: { administrasi_logistik: 1, bisnis_ekonomi: 1, teknik_industri: 1 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_2',
        label: 'Punya kesempatan belajar lebih dalam sampai jenjang sarjana/ahli sebelum masuk karier profesional',
        signals: ['academic_aspiration'],
        domainSignals: { pendidikan: 1, hukum_keadilan: 1, kesehatan: 1, psikologi_sosial: 1 },
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_3',
        label: 'Bisa menuangkan kreativitas atau membangun usaha sendiri walau dimulai dari skala kecil',
        signals: ['enterprising_business', 'creative_expression', 'autonomy_independent'],
        domainSignals: { bisnis_ekonomi: 2, seni_desain: 1, pariwisata_kuliner: 1 },
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_4',
        label: 'Merasa pekerjaan atau belajarku langsung memberi manfaat nyata untuk orang banyak dan lingkungan',
        signals: ['interpersonal_social'],
        domainSignals: { kesehatan: 2, pendidikan: 2, pertanian_lingkungan: 1, psikologi_sosial: 1 },
        pathAffinity: { kuliah: 2, bekerja: 2 }
      }
    ]
  },
  {
    id: 'Q_EXP_11',
    category: 'practical_readiness',
    priority: 'adaptive_branch',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['enterprising_business', 'career_urgency', 'academic_aspiration'],
    branchingRules: { preferredStage: 'skills_readiness' },
    question: 'Bagaimana gambaran minat dan kondisimu kalau bicara soal merintis usaha atau ikut usaha keluarga?',
    options: [
      {
        id: 'opt_1',
        label: 'Sangat tertarik mencoba usaha sendiri pelan-pelan — mulai dari jualan ringan atau jasa keahlian',
        signals: ['enterprising_business', 'autonomy_independent'],
        domainSignals: { bisnis_ekonomi: 2, pariwisata_kuliner: 1 },
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_2',
        label: 'Di rumah/keluarga sudah ada rintisan usaha atau toko yang bisa dibantu dan dikembangkan',
        signals: ['enterprising_business', 'structured_procedural'],
        domainSignals: { bisnis_ekonomi: 2, administrasi_logistik: 1 },
        pathAffinity: { wirausaha: 2, bekerja: 2 }
      },
      {
        id: 'opt_3',
        label: 'Lebih nyaman bekerja dulu sebagai karyawan di tempat yang sistemnya sudah tertata rapi',
        signals: ['career_urgency', 'structured_procedural'],
        domainSignals: { administrasi_logistik: 1, teknik_industri: 1 },
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_4',
        label: 'Saat ini prioritas utamaku ingin fokus menempuh kuliah atau pelatihan bidang keahlian dulu',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      }
    ]
  },
  {
    id: 'Q_EXP_12',
    category: 'practical_readiness',
    priority: 'adaptive_branch',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['academic_aspiration', 'career_urgency', 'enterprising_business', 'exploratory_open'],
    branchingRules: { preferredStage: 'skills_readiness' },
    question: 'Kalau bidang yang kamu incar butuh waktu belajar tambahan setelah lulus SMK, mana yang paling sanggup kamu jalani?',
    options: [
      {
        id: 'opt_1',
        label: 'Siap kuliah penuh 3–4 tahun lewat jalur masuk perguruan tinggi atau beasiswa yang sesuai',
        signals: ['academic_aspiration'],
        pathAffinity: { kuliah: 3 }
      },
      {
        id: 'opt_2',
        label: 'Lebih cocok ikut pelatihan kerja singkat (1–6 bulan) supaya cepat siap melamar kerja',
        signals: ['career_urgency', 'hands_on_practical'],
        pathAffinity: { bekerja: 3 }
      },
      {
        id: 'opt_3',
        label: 'Ingin belajar langsung sambil praktik bekerja atau mencoba proyek usaha kecil',
        signals: ['enterprising_business', 'career_urgency'],
        pathAffinity: { bekerja: 2, wirausaha: 2 }
      },
      {
        id: 'opt_4',
        label: 'Masih perlu berdiskusi dengan keluarga soal waktu, biaya, dan kesiapan sebelum memutuskan',
        signals: ['exploratory_open'],
        pathAffinity: { bingung: 3 }
      }
    ]
  },
  {
    id: 'Q_EXP_13',
    category: 'interest_curiosity',
    priority: 'adaptive_branch',
    isRequired: false,
    estimatedSeconds: 12,
    targetPaths: 'all',
    indicators: ['enterprising_business', 'hands_on_practical', 'creative_expression', 'interpersonal_social'],
    branchingRules: { preferredStage: 'desire_value' },
    question: 'Andai suatu hari kamu mencoba membuat layanan atau usaha kecil di lingkungan sekitar, jenis usaha apa yang paling kebayang cocok?',
    options: [
      {
        id: 'opt_1',
        label: 'Toko kelontong, jualan barang kebutuhan harian, pakaian, atau admin kirim paket/cetak dokumen',
        signals: ['enterprising_business', 'structured_procedural'],
        domainSignals: { bisnis_ekonomi: 3, administrasi_logistik: 2 },
        pathAffinity: { wirausaha: 3, bekerja: 1 }
      },
      {
        id: 'opt_2',
        label: 'Usaha minuman segar, camilan, kue pesanan, atau hidangan praktis untuk warga & pelajar',
        signals: ['enterprising_business', 'hands_on_practical'],
        domainSignals: { pariwisata_kuliner: 3, pertanian_lingkungan: 1 },
        pathAffinity: { wirausaha: 3 }
      },
      {
        id: 'opt_3',
        label: 'Jasa jahit/permak, perbaikan barang harian, perawatan kendaraan ringan, atau jual bibit tanaman',
        signals: ['hands_on_practical', 'enterprising_business'],
        domainSignals: { teknik_industri: 2, pertanian_lingkungan: 2 },
        pathAffinity: { wirausaha: 3, bekerja: 1 }
      },
      {
        id: 'opt_4',
        label: 'Jasa foto/desain, pengetikan, kelola media sosial, les privat anak, atau buat aplikasi sederhana',
        signals: ['creative_expression', 'interpersonal_social'],
        domainSignals: { seni_desain: 2, komunikasi_media: 2, pendidikan: 2, bahasa_sastra: 1, teknologi_informatika: 1 },
        pathAffinity: { wirausaha: 3 }
      }
    ]
  }
];

const QUESTIONS_WITH_OTHER = new Set<string>([
  'Q_HOB_01',
  'Q_DOM_01',
  'Q_HOB_04',
  'Q_EXP_01',
  'Q_EXP_03',
  'Q_EXP_09',
  'Q_EXP_13',
  'Q_BR_GAME_01',
  'Q_BR_VIS_01',
  'Q_BR_SOC_01',
  'Q_BR_PRAC_01',
  'Q_BR_TECH_01',
  'Q_BR_HUM_01',
  'Q_BR_LIT_01',
  'Q_BR_CARE_01',
  'Q_BR_AGRO_01',
  'Q_INT_01',
  'Q_INT_02',
  'Q_SKL_02',
  'Q_ENV_01',
  'Q_RDN_06',
  'Q_RDN_07',
  'Q_RDN_11'
]);

const QUESTIONS_WITH_NONE_FIT = new Set<string>([
  'Q_HOB_01',
  'Q_HOB_02',
  'Q_HOB_03',
  'Q_HOB_04',
  'Q_DOM_01',
  'Q_EXP_01',
  'Q_EXP_03',
  'Q_EXP_09',
  'Q_EXP_13',
  'Q_BR_GAME_01',
  'Q_BR_VIS_01',
  'Q_BR_SOC_01',
  'Q_BR_PRAC_01',
  'Q_BR_TECH_01',
  'Q_BR_HUM_01',
  'Q_BR_LIT_01',
  'Q_BR_CARE_01',
  'Q_BR_AGRO_01',
  'Q_INT_01',
  'Q_INT_02',
  'Q_SKL_02',
  'Q_SKL_13',
  'Q_ENV_01',
  'Q_MOT_01'
]);

const QUESTIONS_WITH_DONT_KNOW = new Set<string>([
  'Q_HOB_04',
  'Q_VAL_01',
  'Q_VAL_02',
  'Q_EXP_09',
  'Q_EXP_10',
  'Q_EXP_11',
  'Q_EXP_12',
  'Q_SKL_13',
  'Q_ENV_01',
  'Q_ENV_02',
  'Q_ENV_06',
  'Q_ENV_08',
  'Q_MOT_01',
  'Q_MOT_03',
  'Q_MOT_11',
  'Q_RDN_01',
  'Q_RDN_04',
  'Q_RDN_05',
  'Q_RDN_08',
  'Q_RDN_10',
  'Q_RDN_11'
]);

function attachContextualFlexibleOptions(question: QuizQuestion): QuizQuestion {
  const extraOptions: QuizOption[] = [];

  if (QUESTIONS_WITH_OTHER.has(question.id)) {
    extraOptions.push({
      id: 'opt_other',
      label: 'Lainnya (tuliskan pilihanmu sendiri)',
      description: 'Tulis singkat minat, kebiasaan, atau kondisimu kalau belum terwakili di atas.',
      optionKind: 'other',
      allowCustomInput: true,
      customInputPlaceholder: 'Contoh: olahraga futsal, merawat hewan, musik, atau hal lainnya...',
      signals: []
    });
  }

  if (QUESTIONS_WITH_NONE_FIT.has(question.id)) {
    extraOptions.push({
      id: 'opt_none_fit',
      label: 'Tidak ada yang sesuai',
      description: 'Tidak akan dianggap nilai jelek atau dipaksa ke bidang yang tidak cocok.',
      optionKind: 'none_fit',
      signals: []
    });
  }

  if (QUESTIONS_WITH_DONT_KNOW.has(question.id)) {
    extraOptions.push({
      id: 'opt_dont_know',
      label: 'Belum tahu',
      description: 'Wajar kalau belum pasti — tidak mengurangi skor kemampuanmu.',
      optionKind: 'dont_know',
      signals: []
    });
  }

  if (extraOptions.length === 0) return question;
  return {
    ...question,
    options: [...question.options, ...extraOptions]
  };
}

export const QUESTION_BANK: QuizQuestion[] = BASE_QUESTION_BANK.map(attachContextualFlexibleOptions);

export const QUESTION_MAP: Record<string, QuizQuestion> = QUESTION_BANK.reduce(
  (acc, q) => {
    acc[q.id] = q;
    return acc;
  },
  {} as Record<string, QuizQuestion>
);

export const QUESTIONS_BY_CATEGORY: Record<string, QuizQuestion[]> = QUESTION_BANK.reduce(
  (acc, q) => {
    if (!acc[q.category]) {
      acc[q.category] = [];
    }
    acc[q.category].push(q);
    return acc;
  },
  {} as Record<string, QuizQuestion[]>
);
