/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7.4 & 7.10: Deterministic, Sub-Cluster-Specific 8-Section Career Insight Builder
 *
 * Transforms any RecommendationCandidate (production catalog or simulation fallback)
 * into a concrete, grounded 8-section insight differentiated cleanly by track
 * (`Bekerja`, `Kuliah`, `Wirausaha`) and specific sub-domain role clusters.
 *
 * Guarantees:
 * - Never fabricates salaries, startup capital, omzet, campus names, tuition, or active vacancies.
 * - Uses exact income fallback when no reliable wage dataset is attached:
 *   "Informasi kisaran penghasilan belum tersedia dari sumber yang cukup tepercaya."
 * - Provides qualitative capital-factor context for Wirausaha and official-source guidance for Kuliah.
 * - Separates Hard Skills, Soft Skills, and Dasar untuk Pemula without assuming mastery beforehand.
 * - Avoids coarse domain-seed mismatches (e.g. garment workers never see vehicle oil or motor workshops).
 */

import { CareerDomainId } from '../types/assessment';
import {
  CareerInsightProfile,
  IncomeRangeInfo,
  UNAVAILABLE_INCOME_FALLBACK_TEXT
} from '../types/catalog';
import { CandidateMatchResult, RecommendationCandidate } from '../types/recommendation';
import { CATALOG_STARTER_ACTIONS } from '../data/catalogStarterActions';
import { inferDomainVisual } from './resultNarrativeBuilder';

interface DomainInsightSeed {
  purposeAndScope: string;
  realLifeExamples: string[];
  workSetting: string;
  studySetting: string;
  bizSetting: string;
  socialStyle: string;
  workRhythmWork: string;
  workRhythmStudy: string;
  workRhythmBiz: string;
  softSkills: string[];
  challenges: string[];
  preparations: string[];
  progressionWork: string[];
  progressionStudy: string[];
  progressionBiz: string[];
  switchNote: string;
  futureNote: string;
  bizEquipmentHint: string;
}

const DOMAIN_INSIGHT_SEEDS: Record<CareerDomainId, DomainInsightSeed> = {
  teknologi_informatika: {
    purposeAndScope:
      'Merancang, membangun, menguji, dan merawat sistem digital, aplikasi, jaringan komputer, maupun pengelolaan data agar layanan berjalan lancar dan aman.',
    realLifeExamples: [
      'Pembuatan aplikasi kasir atau website profil untuk UMKM dan sekolah',
      'Pengaturan jaringan Wi-Fi, server lokal, dan dukungan teknis perangkat komputer kantor',
      'Pengolahan data operasional atau pengujian alur aplikasi sebelum dipakai pengguna'
    ],
    workSetting: 'Umumnya di dalam ruangan ber-AC (kantor, ruang lab komputer, studio perangkat lunak) dengan komputer sebagai alat kerja utama.',
    studySetting: 'Banyak beraktivitas di laboratorium komputer, ruang diskusi proyek, dan praktik pemrograman mandiri.',
    bizSetting: 'Bisa dijalankan dari ruang kerja/rumah menggunakan laptop dan internet yang stabil, dengan pertemuan klien secara daring atau tatap muka.',
    socialStyle: 'Kombinasi fokus mandiri di depan layar dan koordinasi tim saat menyusun fitur atau melayani kebutuhan pengguna.',
    workRhythmWork: 'Terstruktur mengikuti jadwal proyek, target perbaikan sistem, atau penanganan kendala pengguna.',
    workRhythmStudy: 'Menggabungkan pemahaman logika di kelas, praktikum lab pemrograman, serta proyek pembuatan aplikasi/sistem.',
    workRhythmBiz: 'Mengikuti ritme pesanan klien; bisa ramai menjelang peluncuran proyek sehingga butuh pengaturan waktu mandiri.',
    softSkills: [
      'Ketelitian membaca detail kode atau konfigurasi serta kesabaran menelusuri penyebab error',
      'Komunikasi jelas saat menerjemahkan kebutuhan orang awam menjadi solusi teknis',
      'Kemauan terus belajar karena perangkat lunak dan alat digital cepat diperbarui'
    ],
    challenges: [
      'Menghadapi gangguan teknis atau error sistem yang butuh kesabaran menelusuri penyebabnya',
      'Alat dan teknologi digital cepat berganti sehingga perlu rutin memperbarui pemahaman dasar',
      'Menjaga fokus serta kesehatan mata dan postur saat bekerja di depan layar komputer'
    ],
    preparations: [
      'Biasakan membuat 1–2 proyek mini sederhana dan dokumentasikan di portofolio pribadi',
      'Latih alur logika pemecahan masalah langkah demi langkah sebelum langsung menulis kode',
      'Bangun kebiasaan rapi menyimpan file proyek dan mencatat cara memperbaiki kendala yang pernah ditemukan'
    ],
    progressionWork: [
      'Pemula: Teknisi Jaringan/IT Pemula, Junior Web/App Developer, atau Penguji Kualitas Aplikasi (QA)',
      'Menengah: Spesialis Perangkat Lunak/Jaringan atau Penanggung Jawab Sistem Informasi',
      'Lanjutan: System Analyst, Lead Engineer, atau Konsultan Solusi Digital'
    ],
    progressionStudy: [
      'Awal Kuliah: Logika pemrograman, algoritma, struktur data, dan dasar arsitektur komputer/jaringan',
      'Pertengahan–Akhir: Magang industri, proyek sistem nyata, atau pendalaman web, data, maupun keamanan siber',
      'Setelah Lulus: Terbuka masuk ke rekayasa perangkat lunak, analisis sistem bisnis, data, atau studi lanjut'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa perbaikan ringan, pembuatan halaman web profil, atau template digital sederhana untuk sekitar',
      'Berkembang: Jasa sistem/aplikasi kustom rutin atau alat otomasi untuk beberapa usaha lokal tetap',
      'Lanjutan: Mengembangkan produk digital berulang atau membentuk tim agensi teknologi kecil'
    ],
    switchNote:
      'Kemampuan logika sistem dan olah data digital mudah dibawa ke bidang bisnis digital, administrasi sistem, atau pendidikan teknologi.',
    futureNote:
      'Tetap relevan karena sekolah, UMKM, dan layanan publik semakin mengandalkan sistem komputer dan aplikasi yang andal.',
    bizEquipmentHint: 'Laptop/PC kerja yang memadai, koneksi internet stabil, perangkat lunak bebas pakai/resmi, dan portofolio contoh karya.'
  },
  teknik_industri: {
    purposeAndScope:
      'Menangani pengoperasian, perakitan, perawatan, pemeriksaan mutu, dan perbaikan mesin, kendaraan, kelistrikan, maupun sistem produksi fisik.',
    realLifeExamples: [
      'Servis berkala dan pengecekan komponen kendaraan di bengkel resmi atau bengkel umum',
      'Pengoperasian mesin produksi, pengukuran presisi komponen, dan pemeriksaan mutu barang jadi',
      'Pemasangan dan perawatan panel listrik atau sistem otomasi industri'
    ],
    workSetting: 'Area bengkel, lantai pabrik/produksi, ruang perakitan, atau lokasi instalasi lapangan dengan perlengkapan K3 (Keselamatan dan Kesehatan Kerja).',
    studySetting: 'Kombinasi kelas teori teknik/gambar teknik dan praktik intensif di workshop atau laboratorium mesin/elektro.',
    bizSetting: 'Bengkel rumahan, ruang servis kecil, atau jasa perbaikan panggilan ke rumah/lokasi pelanggan.',
    socialStyle: 'Kerja praktik langsung dengan alat/mesin bersama rekan teknisi satu shift serta komunikasi singkat yang jelas soal keselamatan.',
    workRhythmWork: 'Jam kerja tetap atau sistem shift teratur dengan aturan prosedur operasional (SOP) dan keselamatan kerja yang ketat.',
    workRhythmStudy: 'Umumnya memadukan hitungan teknik terapan, gambar kerja CAD (gambar teknik komputer), dan praktik alat di bengkel kampus.',
    workRhythmBiz: 'Mengikuti datangnya pelanggan atau jadwal panggilan perbaikan; menuntut ketahanan fisik dan perkiraan waktu kerja yang jujur.',
    softSkills: [
      'Disiplin mematuhi aturan keselamatan kerja K3 dan daftar periksa prosedur teknis',
      'Ketelitian membaca ukuran, gejala kerusakan, dan tanda peringatan alat',
      'Komunikasi jujur kepada pengguna atau atasan tentang kondisi perbaikan'
    ],
    challenges: [
      'Lingkungan bengkel atau pabrik bisa bising, panas, atau berhadapan dengan komponen berat dan kotor',
      'Kesalahan prosedur kecil dapat berdampak pada keselamatan kerja maupun kerusakan alat',
      'Membutuhkan stamina fisik yang baik saat berdiri lama atau membongkar komponen'
    ],
    preparations: [
      'Biasakan memakai alat pelindung diri (APD) dan merapikan kembali peralatan setelah praktik',
      'Latih membaca gambar teknik, simbol dasar rangkaian, serta penggunaan alat ukur presisi',
      'Catat pengalaman PKL atau praktik nyata yang pernah kamu tangani sebagai bukti kesiapan'
    ],
    progressionWork: [
      'Pemula: Operator Produksi, Teknisi Bengkel Pemula, atau Asisten Perawatan Alat',
      'Menengah: Teknisi Senior, Pemeriksa Mutu (QC / Quality Control), atau Kepala Regu Teknis',
      'Lanjutan: Supervisor Produksi, Teknisi Spesialis Otomasi, atau Instruktur Teknik'
    ],
    progressionStudy: [
      'Awal Kuliah: Dasar matematika teknik, fisika terapan, pengenalan material, dan gambar teknik',
      'Pertengahan–Akhir: Praktikum permesinan/otomasi, kerja praktik di industri, dan proyek perancangan alat',
      'Setelah Lulus: Berpeluang di manufaktur, energi, transportasi, perawatan fasilitas, atau pendidikan vokasi'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa servis ringan atau perbaikan panggilan untuk warga dan kendaraan sekitar',
      'Berkembang: Membuka bengkel atau layanan perbaikan terjadwal dengan pelanggan tetap',
      'Lanjutan: Menambah layanan suku cadang resmi dan mempekerjakan asisten mekanik'
    ],
    switchNote:
      'Keterampilan praktik mekanik dan listrik mudah diarahkan ke bidang logistik teknik, pengendalian mutu (QC), atau pengajaran vokasi.',
    futureNote:
      'Tetap dibutuhkan karena mesin, kendaraan, gedung, dan jalur produksi fisik tetap memerlukan teknisi terampil di lapangan.',
    bizEquipmentHint: 'Kunci perkakas dasar yang terawat, alat ukur dasar (seperti multimeter), perlengkapan keselamatan kerja (sarung tangan/kacamata), dan area kerja aman.'
  },
  hukum_keadilan: {
    purposeAndScope:
      'Mempelajari dan menerapkan aturan, kontrak, dokumen resmi, tata kelola publik, serta penyelesaian sengketa secara tertib agar hak dan kewajiban berjalan adil.',
    realLifeExamples: [
      'Pemberkasan dokumen administrasi hukum, pencatatan arsip perjanjian, dan layanan front-office kantor hukum',
      'Penyusunan analisis kasus aturan ketenagakerjaan, konsumen, atau perdata sederhana',
      'Pendampingan pemahaman hak masyarakat atau tata tertib organisasi secara tertib'
    ],
    workSetting: 'Dalam ruangan (kantor administrasi, instansi layanan publik, kantor hukum/notaris, atau ruang arsip dokumen).',
    studySetting: 'Ruang kuliah diskusi, perpustakaan referensi peraturan, serta simulasi penyusunan dokumen hukum atau peradilan semu.',
    bizSetting: 'Untuk lulusan SMK bukan membuka praktik advokat; bentuk mandiri yang aman sebatas layanan pengetikan/perapian dokumen umum non-hukum.',
    socialStyle: 'Banyak membaca dan meneliti mandiri, diikuti diskusi terstruktur, tanya jawab resmi, dan komunikasi sopan.',
    workRhythmWork: 'Teratur mengikuti jadwal jam kantor, tenggat berkas, dan ketelitian verifikasi dokumen.',
    workRhythmStudy: 'Banyak membaca teks peraturan, berdiskusi logika kasus, menulis makalah argumentasi, dan mengikuti praktik analisis dokumen.',
    workRhythmBiz: 'Mengikuti jadwal pengetikan dan perapian berkas umum sesuai kesepakatan waktu dengan pelanggan.',
    softSkills: [
      'Integritas, kejujuran, dan menjaga kerahasiaan data/dokumen orang lain',
      'Ketelitian tinggi membaca kalimat aturan agar tidak salah menafsirkan detail',
      'Kemampuan berbicara dan menulis secara runtut, tenang, dan sopan'
    ],
    challenges: [
      'Banyak membaca teks peraturan dan dokumen panjang yang menuntut ketelitian tinggi',
      'Profesi resmi seperti advokat, jaksa, hakim, atau notaris WAJIB menempuh S1 Ilmu Hukum dan pendidikan profesi lanjutan (seperti PKPA / Pendidikan Khusus Profesi Advokat) — tidak bisa langsung dari SMK',
      'Perlu mengendalikan emosi agar tetap objektif saat menghadapi perbedaan pendapat'
    ],
    preparations: [
      'Latih kebiasaan membaca teks panjang dengan cermat lalu merangkum poin utamanya secara netral',
      'Biasakan berargumen berbasis fakta dan aturan tertulis, bukan sekadar asumsi',
      'Jika ingin mengejar profesi hukum formal, persiapkan rencana kuliah S1 Ilmu Hukum sejak awal'
    ],
    progressionWork: [
      'Pemula (Lulusan SMK): Staf Administrasi Berkas/Arsip Dokumen atau Layanan Depan Kantor Umum',
      'Menengah (Dengan Kuliah Hukum): Asisten Legal / Paralegal Terlatih atau Analis Kepatuhan',
      'Lanjutan (S1 Hukum + Pendidikan Profesi): Advokat, Legal Counsel, Mediator, atau Aparatur Hukum'
    ],
    progressionStudy: [
      'Awal Kuliah: Pengantar ilmu hukum, tata negara, serta dasar hukum perdata dan pidana',
      'Pertengahan–Akhir: Praktik peradilan semu, penyusunan rancangan kontrak, dan magang di lembaga hukum/pemerintahan',
      'Setelah Lulus: Lanjut pendidikan profesi advokat (PKPA) / kenotariatan atau berkarier di bidang legal korporasi dan layanan publik'
    ],
    progressionBiz: [
      'Tahap Awal: Layanan pengetikan rapi dan pengorganisasian berkas umum/UMK (tanpa memberi nasihat hukum berizin)',
      'Berkembang: Jasa administrasi perizinan dasar UMKM (seperti pendampingan pengisian data usaha umum)',
      'Lanjutan: Konsultasi tata kelola usaha atau profesi legal hanya setelah memenuhi pendidikan formal S1 dan izin profesi'
    ],
    switchNote:
      'Ketelitian membaca aturan sangat berguna jika bergeser ke bidang SDM (HRD), administrasi pemerintahan, manajemen bisnis, atau jurnalisme.',
    futureNote:
      'Transaksi digital, perlindungan data pribadi, dan kontrak usaha membuat pemahaman aturan dan kepatuhan administrasi terus dibutuhkan.',
    bizEquipmentHint: 'Komputer/laptop, printer/scanner dokumen dasar, template pencatatan arsip rapi, dan kepatuhan batas kewenangan non-hukum.'
  },
  bahasa_sastra: {
    purposeAndScope:
      'Mengolah kemampuan berbahasa Indonesia maupun bahasa asing untuk menulis, menerjemahkan, menyunting naskah, dan menyampaikan pesan budaya atau informasi secara efektif.',
    realLifeExamples: [
      'Penulisan artikel informasi, skrip video edukasi, atau deskripsi produk yang jelas dan menarik',
      'Penerjemahan petunjuk produk, teks informasi dua bahasa, atau penyambutan tamu dwibahasa',
      'Penyuntingan naskah tugas, buletin sekolah, atau komunikasi layanan pelanggan tertulis'
    ],
    workSetting: 'Ruang kerja tenang, meja layanan informasi/resepsionis, kantor redaksi/penerbit, atau kerja digital dengan jadwal pengiriman naskah.',
    studySetting: 'Ruang kelas diskusi teks, laboratorium bahasa, perpustakaan, serta kegiatan penulisan kreatif dan terjemahan.',
    bizSetting: 'Meja kerja tenang di rumah/studio kecil dengan perangkat laptop dan kumpulan portofolio contoh tulisan/terjemahan.',
    socialStyle: 'Banyak bekerja fokus merangkai kata secara mandiri, sesekali berdiskusi revisi naskah atau melayani tamu secara ramah.',
    workRhythmWork: 'Mengikuti jadwal terbit tulisan, jam layanan informasi tamu, atau batas waktu penyuntingan dan terjemahan.',
    workRhythmStudy: 'Membaca beragam karya dan artikel bahasa, latihan mendengar/berbicara, analisis tata bahasa, serta menulis esai atau terjemahan.',
    workRhythmBiz: 'Bergantung pada jumlah pesanan penulisan atau terjemahan; menuntut disiplin mengatur target kata harian sendiri.',
    softSkills: [
      'Kepekaan memahami maksud pembicara atau pembaca dari berbagai latar belakang',
      'Ketelitian mengecek ejaan, tanda baca, dan ketepatan makna istilah',
      'Keterbukaan menerima masukan revisi tulisan tanpa mudah patah semangat'
    ],
    challenges: [
      'Menghadapi kebuntuan ide saat harus menghasilkan tulisan rutin setiap minggu',
      'Membedakan gaya bahasa santai sehari-hari dengan gaya bahasa resmi atau profesional',
      'Harus cermat memeriksa kebenaran fakta dan batas kewenangan penerjemahan dokumen resmi'
    ],
    preparations: [
      'Biasakan membaca artikel atau buku bermutu dan merangkum intinya dengan kalimatmu sendiri',
      'Kumpulkan 3–5 contoh tulisan, suntingan naskah, atau terjemahan singkat sebagai portofolio awal',
      'Latih kosakata dan percakapan bahasa asing sedikit demi sedikit setiap hari'
    ],
    progressionWork: [
      'Pemula: Penulis Konten Pemula, Staf Resepsionis/Informasi Dwibahasa, atau Penulis Deskripsi Produk',
      'Menengah: Copywriter, Editor Naskah, atau Penerjemah Umum Spesialis Bidang',
      'Lanjutan: Content Strategist, Penulis Profesional, atau Penerjemah Tersumpah (setelah lulus ujian kualifikasi resmi)'
    ],
    progressionStudy: [
      'Awal Kuliah: Penguasaan tata bahasa mendalam, bunyi/makna kata, dan keterampilan membaca/menulis akademik',
      'Pertengahan–Akhir: Kajian sastra, terjemahan terapan, penulisan kreatif, atau pengajaran bahasa',
      'Setelah Lulus: Berpeluang di penerbitan, media, komunikasi lembaga, diplomasi budaya, atau pengajaran'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa penulisan caption/artikel pendek atau perapian tata bahasa naskah umum',
      'Berkembang: Paket copywriting katalog UMKM atau jasa terjemahan materi umum non-hukum',
      'Lanjutan: Membangun studio penulisan konten atau penerbitan karya mandiri'
    ],
    switchNote:
      'Kemampuan merangkai kata dan bahasa asing membuka jalan mudah ke komunikasi pemasaran, jurnalistik, pengajaran bahasa, dan layanan tamu.',
    futureNote:
      'Walau alat bantu terjemahan otomatis berkembang, sentuhan makna, konteks budaya lokal, dan ketepatan penyuntingan manusia tetap dicari.',
    bizEquipmentHint: 'Laptop, kamus resmi KBBI/EYD dan rujukan bahasa asing, aplikasi pengolah kata, serta portofolio contoh tulisan.'
  },
  pendidikan: {
    purposeAndScope:
      'Membantu orang lain memahami pengetahuan atau keterampilan baru secara sabar, terstruktur, dan mudah diikuti sesuai tahap belajar mereka.',
    realLifeExamples: [
      'Mendampingi adik tingkat atau teman belajar materi sekolah maupun praktik komputer/keterampilan',
      'Menyusun modul singkat, latihan soal, atau alat peraga belajar langkah demi langkah',
      'Mengajar di bimbingan belajar, kursus keterampilan, atau kelas formal (setelah pendidikan sarjana & sertifikasi PPG)'
    ],
    workSetting: 'Ruang kelas sekolah, laboratorium praktik, lembaga kursus/bimbel, perpustakaan, atau kelas belajar daring.',
    studySetting: 'Ruang kuliah kependidikan, ruang latihan mengajar (microteaching), dan praktik lapangan di sekolah (PLP / Pengenalan Lapangan Persekolahan).',
    bizSetting: 'Ruang belajar rumahan yang tenang, bimbingan belajar skala kecil di lingkungan sekitar, atau kelas daring berjadwal.',
    socialStyle: 'Sangat tinggi berinteraksi tatap muka — berbicara di depan kelompok, mendengar pertanyaan, dan memberi umpan balik suportif.',
    workRhythmWork: 'Teratur mengikuti jadwal jam pelajaran atau sesi bimbingan ditambah waktu menyiapkan bahan ajar sebelumnya.',
    workRhythmStudy: 'Mempelajari ilmu bidang studi, psikologi perkembangan peserta didik, cara menyusun rencana ajar, dan praktik mengajar di sekolah.',
    workRhythmBiz: 'Mengikuti jam pulang sekolah siswa (umumnya sore atau akhir pekan) dan persiapan lembar latihan di luar jam ajar.',
    softSkills: [
      'Kesabaran mendampingi peserta belajar yang belum langsung paham setelah dijelaskan sekali',
      'Kemampuan menyederhanakan konsep sulit menjadi contoh sehari-hari yang mudah dicerna',
      'Sikap teladan, suara jelas, dan kemampuan menjaga suasana kelas tetap aman serta nyaman'
    ],
    challenges: [
      'Menghadapi peserta belajar dengan kecepatan paham dan minat yang berbeda-beda',
      'Untuk menjadi guru sekolah formal (SD/SMP/SMA/SMK), WAJIB menempuh S1 Kependidikan/relevan dan Pendidikan Profesi Guru (PPG)',
      'Perlu menyiapkan materi, alat peraga, dan evaluasi sebelum sesi dimulai agar kelas berjalan tertib'
    ],
    preparations: [
      'Mulai berlatih menjelaskan satu topik yang kamu kuasai kepada teman atau adik dengan bahasa sederhana',
      'Belajar membuat rangkuman materi yang rapi menggunakan poin atau gambar alur',
      'Jika bercita-cita menjadi guru sekolah formal, pelajari syarat kuliah S1 dan jalur PPG (Pendidikan Profesi Guru)'
    ],
    progressionWork: [
      'Pemula (Lulusan SMK): Asisten Pendamping Belajar Nonformal, Tutor Keterampilan Dasar, atau Tata Usaha/Teknisi Lab Sekolah',
      'Menengah (Kuliah / Pengalaman): Pengajar Kursus Keterampilan atau Pengembang Materi Belajar',
      'Lanjutan (S1 + PPG): Guru Sekolah Formal Bersertifikat, Instruktur Pelatihan Kerja, atau Pengelola Lembaga Belajar'
    ],
    progressionStudy: [
      'Awal Kuliah: Dasar ilmu pendidikan, perkembangan belajar anak/remaja, dan pendalaman materi bidang studi',
      'Pertengahan–Akhir: Praktik menyusun modul ajar, latihan mengajar (microteaching), dan magang di sekolah (PLP)',
      'Setelah Lulus: Lanjut program PPG (Pendidikan Profesi Guru) untuk sertifikasi guru formal atau berkarier di edukasi & pelatihan'
    ],
    progressionBiz: [
      'Tahap Awal: Les privat atau kelas kecil bantu PR/keterampilan dasar untuk anak sekitar atau teman',
      'Berkembang: Kelompok belajar rutin dengan jadwal tetap dan modul latihan buatan sendiri',
      'Lanjutan: Merintis lembaga bimbingan atau kelas keterampilan bersama rekan pengajar'
    ],
    switchNote:
      'Keahlian mengajar dan menyusun materi juga sangat kuat untuk menjadi trainer pelatihan kerja, pembuat konten edukasi, atau staf pelatihan HRD.',
    futureNote:
      'Kebutuhan pendampingan belajar, literasi dasar, dan pelatihan keterampilan praktis selalu ada di sekolah maupun masyarakat.',
    bizEquipmentHint: 'Papan tulis mini atau materi cetak, alat tulis, modul latihan singkat yang disusun rapi, dan sudut belajar tenang.'
  },
  kesehatan: {
    purposeAndScope:
      'Menjaga, merawat, dan mendukung kesehatan fisik, kebersihan klinis, gizi, serta keselamatan pasien atau masyarakat secara teliti sesuai standar kesehatan dan regulasi.',
    realLifeExamples: [
      'Layanan administrasi pendaftaran pasien dan pengelolaan berkas rekam layanan (peran non-medis untuk lulusan SMK)',
      'Praktik keperawatan, farmasi, atau gizi klinis di klinik dan rumah sakit (khusus lulusan pendidikan tinggi kesehatan berizin & ber-STR)',
      'Edukasi kebiasaan hidup sehat, kebersihan pangan, atau pengecekan keselamatan kerja (K3) di pabrik/bengkel'
    ],
    workSetting: 'Klinik, puskesmas, rumah sakit, unit K3 pabrik/perusahaan, atau loket administrasi layanan kesehatan yang higienis.',
    studySetting: 'Ruang kuliah sains kesehatan, laboratorium praktikum anatomi/kimia/pangan, serta dinas praktik di fasilitas kesehatan.',
    bizSetting: 'Catatan Penting: Tindakan medis dan layanan kesehatan klinis tidak boleh dibuka tanpa pendidikan profesi dan izin resmi; usaha pemula terbatas pada pangan sehat/kebersihan harian non-medis.',
    socialStyle: 'Membutuhkan empati tinggi, ketenangan menghadapi orang yang sedang cemas/sakit, dan koordinasi teliti bersama tim.',
    workRhythmWork: 'Sangat disiplin mengikuti protokol kebersihan dan jadwal kerja (klinik/rumah sakit sering memakai pembagian shift).',
    workRhythmStudy: 'Memadukan materi biologi/kesehatan yang padat, ujian praktikum laboratorium, serta jadwal praktik lapangan di fasilitas kesehatan.',
    workRhythmBiz: 'Untuk usaha makanan sehat/kebersihan non-medis: rutin menjaga standar bahan bersih dan ketepatan jadwal pengantaran.',
    softSkills: [
      'Empati tulus, kesabaran, dan sikap tenang saat berhadapan dengan pasien atau warga yang cemas',
      'Kedisiplinan ketat terhadap kebersihan, sterilitas, dan prosedur keselamatan kerja',
      'Ketelitian tinggi dalam pencatatan agar tidak terjadi kesalahan data maupun takaran'
    ],
    challenges: [
      'Lulusan SMK TIDAK berwenang melakukan tindakan medis klinis atau meracik obat resep — tenaga kesehatan berizin wajib lulus D3/S1 Kesehatan, uji kompetensi, dan memiliki STR (Surat Tanda Registrasi)',
      'Menjaga ketahanan fisik serta ketenangan batin saat jadwal praktik padat atau kondisi darurat',
      'Disiplin menjaga kebersihan diri dan kepatuhan standar tanpa kompromi'
    ],
    preparations: [
      'Perkuat pemahaman dasar biologi, kebersihan lingkungan, dan keselamatan kerja sejak di SMK',
      'Siapkan disiplin belajar serta ketahanan praktik laboratorium jika berencana kuliah di rumpun kesehatan',
      'Latih komunikasi yang ramah, santun, dan menenangkan saat melayani pertanyaan orang lain'
    ],
    progressionWork: [
      'Pemula (Lulusan SMK — Non-Medis): Petugas Pendaftaran/Admin Klinik, Kasir Non-Resep/Logistik Barang Umum, atau Asisten Kebersihan K3 Dasar',
      'Menengah (Lulusan D3/S1 + STR): Perawat, Ahli Gizi, Tenaga Teknis Kefarmasian, atau Analis Kesehatan Berizin',
      'Lanjutan (Profesi/Spesialisasi): Apoteker, Perawat Spesialis, Kepala Unit Layanan, atau Ahli K3 Tersertifikasi'
    ],
    progressionStudy: [
      'Awal Kuliah: Biologi/anatomi dasar, ilmu kesehatan/gizi/kimia dasar, serta etika layanan kesehatan',
      'Pertengahan–Akhir: Praktikum laboratorium terstandar dan praktik lapangan di puskesmas, rumah sakit, atau laboratorium',
      'Setelah Lulus: Menempuh uji kompetensi nasional untuk memperoleh STR (Surat Tanda Registrasi) — dan pendidikan profesi lanjutan bila disyaratkan — sebelum berpraktik resmi'
    ],
    progressionBiz: [
      'Tahap Awal: Usaha katering makanan bergizi harian atau produk kebersihan rumah tangga non-medis yang higienis',
      'Berkembang: Layanan paket bekal sehat terjadwal untuk pekerja/keluarga sekitar dengan izin pangan PIRT sesuai ketentuan daerah',
      'Lanjutan: Layanan klinik atau praktik kesehatan hanya boleh didirikan apabila memenuhi izin fasilitas kesehatan dan tenaga ber-STR'
    ],
    switchNote:
      'Ketelitian higienis dan kepedulian kesehatan juga sangat berguna di bidang Keselamatan & Kesehatan Kerja (K3) industri atau pengawasan mutu pangan.',
    futureNote:
      'Kesadaran masyarakat akan pencegahan penyakit, gizi seimbang, dan keselamatan kerja membuat peran kesehatan dan K3 terus relevan.',
    bizEquipmentHint: 'Peralatan dapur/kemasan bersih berstandar higienis khusus usaha makanan sehat atau kebersihan umum (bukan alat tindakan klinis).'
  },
  bisnis_ekonomi: {
    purposeAndScope:
      'Mengelola operasional usaha, pemasaran produk, pencatatan transaksi keuangan, serta strategi agar kegiatan jual beli memberi manfaat dan berjalan sehat.',
    realLifeExamples: [
      'Pencatatan kas masuk-keluar harian, pembuatan nota tagihan, dan laporan penjualan toko/UMKM',
      'Promosi produk di toko daring (marketplace) serta melayani pertanyaan pembeli dengan ramah',
      'Analisis kebutuhan pasar dan penataan stok barang toko agar perputarannya sehat'
    ],
    workSetting: 'Kantor administrasi/keuangan, toko retail, meja kasir, ruang operasional toko online, atau area penjualan.',
    studySetting: 'Ruang diskusi studi kasus bisnis, praktikum pembukuan/spreadsheet, dan proyek simulasi rencana usaha.',
    bizSetting: 'Bisa dimulai dari rumah menggunakan HP/laptop untuk pemesanan dan pembukuan sebelum menyewa tempat usaha.',
    socialStyle: 'Memadukan ketelitian menghitung data di balik layar dengan komunikasi aktif kepada pelanggan, pemasok, dan tim.',
    workRhythmWork: 'Teratur mengikuti jam buka toko/kantor, transaksi harian, dan penutupan kas mingguan atau bulanan.',
    workRhythmStudy: 'Mengkaji konsep ekonomi, akuntansi, manajemen pemasaran, serta analisis studi kasus usaha dan kebijakan keuangan.',
    workRhythmBiz: 'Dinamis mengikuti naik-turunnya permintaan pembeli; menuntut disiplin memisahkan uang pribadi dengan uang usaha.',
    softSkills: [
      'Kejujuran dan tanggung jawab penuh saat mengelola uang dan barang milik sendiri maupun tempat kerja',
      'Kemampuan komunikasi sopan untuk menjawab kebutuhan pembeli tanpa memaksa',
      'Ketahanan mental mengevaluasi strategi saat penjualan sedang sepi'
    ],
    challenges: [
      'Persaingan harga dan banyaknya produk serupa menuntut kejelasan kualitas dan layanan',
      'Kesalahan mencatat kas atau mencampur uang pribadi dengan uang usaha sering membuat usaha tersendat',
      'Menjaga kesabaran dan konsistensi saat membangun kepercayaan pembeli pertama dari awal'
    ],
    preparations: [
      'Biasakan mencatat setiap pemasukan dan pengeluaran pribadi atau kegiatan di spreadsheet secara rapi',
      'Latih cara menjawab pertanyaan calon pembeli dengan cepat, jujur, dan sopan',
      'Jika tertarik akuntansi profesional atau auditor, rencanakan studi lanjut D3/S1 Akuntansi dan sertifikasi profesinya'
    ],
    progressionWork: [
      'Pemula: Staf Admin Penjualan, Kasir/Pencatat Transaksi Kas, Pramuniaga, atau Admin Marketplace',
      'Menengah: Staf Keuangan Junior, Supervisor Toko/Penjualan, atau Analis Pemasaran',
      'Lanjutan: Manajer Operasional Bisnis, Akuntan/Auditor (setelah S1 & sertifikasi), atau Pengembang Bisnis'
    ],
    progressionStudy: [
      'Awal Kuliah: Pengantar ekonomi, dasar akuntansi, matematika keuangan, dan pengantar manajemen',
      'Pertengahan–Akhir: Analisis laporan keuangan, strategi pemasaran digital, dan magang di perusahaan atau UMKM',
      'Setelah Lulus: Berpeluang di sektor keuangan, perbankan, ritel, manajemen usaha, atau merintis usaha sendiri'
    ],
    progressionBiz: [
      'Tahap Awal: Jualan sistem pre-order/titip jual atau jasa admin toko online skala kecil tanpa menumpuk stok besar',
      'Berkembang: Memiliki pelanggan tetap, pembukuan laba-rugi bulanan rapi, serta legalitas NIB (Nomor Induk Berusaha) UMK',
      'Lanjutan: Memperluas variasi produk atau menambah titik layanan usaha secara bertahap'
    ],
    switchNote:
      'Dasar pembukuan dan pemasaran terpakai hampir di semua bidang — mulai dari studio desain, bengkel, kuliner, hingga usaha pertanian.',
    futureNote:
      'Perdagangan digital membuat pengelolaan arus kas yang sehat dan pelayanan pembeli yang jujur semakin menentukan bertahannya usaha.',
    bizEquipmentHint: 'Smartphone atau laptop, aplikasi spreadsheet pencatatan kas sederhana, nota digital/manual, dan saluran komunikasi pembeli.'
  },
  komunikasi_media: {
    purposeAndScope:
      'Menyampaikan informasi, cerita, berita, atau kampanye publik melalui media digital, penyiaran audio-visual, media sosial, dan hubungan masyarakat.',
    realLifeExamples: [
      'Menyusun jadwal unggahan media sosial, menulis naskah video pendek, dan membalas interaksi audiens',
      'Peliputan kegiatan sekolah/komunitas, wawancara narasumber, dan pengeditan paket berita',
      'Penataan suara/acara panggung, siaran podcast, atau dokumentasi foto dan video kegiatan'
    ],
    workSetting: 'Studio siaran/podcast, kantor media atau agensi kreatif, ruang kerja media sosial, atau lokasi liputan dan acara lapangan.',
    studySetting: 'Studio audio-visual kampus, ruang diskusi isu publik, laboratorium penyiaran, dan proyek liputan lapangan.',
    bizSetting: 'Studio mini di rumah bermodal kamera HP/laptop dan internet, ditambah kunjungan ke lokasi usaha klien saat pengambilan konten.',
    socialStyle: 'Sangat komunikatif — sering berkoordinasi dengan narasumber, tim acara, klien, maupun audiens secara langsung dan daring.',
    workRhythmWork: 'Cepat dan mengikuti jadwal tayang, tren berita, atau jadwal acara mingguan.',
    workRhythmStudy: 'Praktik produksi berita/audio-visual, analisis media, etika komunikasi publik, dan presentasi gagasan.',
    workRhythmBiz: 'Mengikuti kalender konten bulanan klien atau jadwal acara; butuh disiplin agar produksi tidak melewati tenggat.',
    softSkills: [
      'Kepercayaan diri berbicara dan menyesuaikan gaya bahasa sesuai audiens yang dituju',
      'Kepekaan menyaring kebenaran informasi serta etika agar tidak menyebar berita bohong',
      'Kemampuan mendengar aktif dan bekerja rapi dalam jadwal tayang yang cepat'
    ],
    challenges: [
      'Perubahan tren media sosial sangat cepat sehingga ide konten harus terus disesuaikan',
      'Menerima beragam komentar publik menuntut ketenangan emosi dan sikap profesional',
      'Menjaga kualitas audio, gambar, serta ketepatan fakta meski waktu produksi singkat'
    ],
    preparations: [
      'Latih berbicara jelas di depan kamera/mikrofon dan buat 2–3 contoh konten informatif sederhana',
      'Pelajari etika jurnalistik dasar, hak cipta gambar/musik bebas lisensi, serta pengecekan fakta',
      'Biasakan menyusun daftar rencana konten atau rundown sebelum mulai merekam'
    ],
    progressionWork: [
      'Pemula: Staf Media Sosial Pemula, Asisten Produksi Siaran/Audio, Kru Acara, atau Reporter Pemula',
      'Menengah: Social Media Specialist, Public Relations Officer, atau Produser Konten',
      'Lanjutan: Communication Manager, Pemimpin Redaksi, atau Konsultan Kampanye Publik'
    ],
    progressionStudy: [
      'Awal Kuliah: Teori komunikasi, dasar jurnalistik, penulisan naskah media, dan etika penyiaran',
      'Pertengahan–Akhir: Produksi program media, manajemen hubungan masyarakat (Humas/PR), dan riset audiens',
      'Setelah Lulus: Berpeluang di media penyiaran, agensi kreatif, humas instansi/perusahaan, atau produksi konten mandiri'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa kelola postingan media sosial atau foto/video pendek sederhana untuk usaha sekitar',
      'Berkembang: Paket manajemen media sosial bulanan atau jasa dokumentasi acara sekolah/UMKM tetap',
      'Lanjutan: Membangun studio produksi konten dan layanan kampanye kreatif bersama tim kecil'
    ],
    switchNote:
      'Keterampilan komunikasi publik sangat mudah digabungkan dengan pemasaran bisnis, desain visual, maupun pendidikan/pelatihan.',
    futureNote:
      'Di tengah derasnya arus informasi digital, kemampuan menyampaikan pesan yang jujur, jelas, dan menarik tetap sangat dicari.',
    bizEquipmentHint: 'Smartphone berkamera jelas atau kamera dasar, mikrofon klip sederhana, tripod, laptop editing dasar, dan kalender konten.'
  },
  psikologi_sosial: {
    purposeAndScope:
      'Memahami perilaku, emosi, motivasi, serta dinamika hubungan antarmanusia untuk mendukung kesejahteraan sosial, pengelolaan sumber daya manusia (SDM), maupun pendampingan komunitas.',
    realLifeExamples: [
      'Mendampingi kegiatan sosial masyarakat, kegiatan remaja, atau menjadi fasilitator diskusi kelompok',
      'Mendukung bagian administrasi sumber daya manusia (SDM/HR) dalam menyapa kandidat dan mengatur jadwal pelatihan',
      'Layanan konseling atau asesmen psikologi klinis (khusus lulusan S1 & Pendidikan Profesi Psikolog berizin)'
    ],
    workSetting: 'Ruang pertemuan atau kantor SDM yang tenang, sekolah/lembaga sosial, atau lapangan kegiatan komunitas.',
    studySetting: 'Ruang kelas diskusi perilaku manusia, laboratorium observasi/wawancara, serta kerja lapangan sosial kemasyarakatan.',
    bizSetting: 'Catatan Penting: Lulusan SMK tidak berizin membuka praktik psikolog atau terapi; kegiatan mandiri pemula terbatas pada fasilitasi acara komunitas atau kelas aktivitas positif non-klinis.',
    socialStyle: 'Sangat tinggi pada kemampuan mendengarkan dengan empati, membaca suasana kelompok, dan berkomunikasi suportif.',
    workRhythmWork: 'Teratur mengikuti jadwal kegiatan komunitas, jadwal rekrutmen dan pelatihan tim SDM, atau pendampingan warga.',
    workRhythmStudy: 'Banyak membaca literatur perilaku manusia, berlatih teknik wawancara/observasi, statistik sosial dasar, dan proyek komunitas.',
    workRhythmBiz: 'Menyesuaikan jadwal acara komunitas atau sesi kegiatan kelompok positif yang disepakati bersama warga.',
    softSkills: [
      'Kemampuan mendengarkan tanpa langsung menghakimi dan menjaga kerahasiaan cerita orang lain',
      'Kesabaran menjaga batas emosi pribadi agar tetap seimbang saat mendampingi orang lain',
      'Objektivitas serta etika dalam mengamati dan mencatat perilaku sosial'
    ],
    challenges: [
      'Gelar dan praktik Psikolog berizin HANYA bisa dicapai melalui S1 Psikologi dan Pendidikan Profesi Psikolog — bukan dari SMK maupun kursus singkat',
      'Menghadapi masalah sosial atau emosi orang lain menuntut kemampuan mengelola stres dan waktu istirahat sendiri',
      'Harus berhati-hati agar tidak sembarangan memberi label atau diagnosis kesehatan mental'
    ],
    preparations: [
      'Biasakan aktif di kepanitiaan sosial, OSIS, atau kegiatan karang taruna untuk melatih kepekaan bekerja dengan beragam karakter orang',
      'Latih mencatat hasil pengamatan dan diskusi kelompok secara objektif tanpa berprasangka',
      'Jika serius mengejar profesi psikolog atau pekerja sosial profesional, siapkan rencana kuliah S1 Psikologi atau Kesejahteraan Sosial'
    ],
    progressionWork: [
      'Pemula (Lulusan SMK): Staf Pendukung Kegiatan Komunitas atau Asisten Administrasi Layanan SDM',
      'Menengah (Lulusan S1): Staf HRD/Rekrutmen, Asisten Peneliti Sosial, atau Pendamping Program Pemberdayaan',
      'Lanjutan (S1 + Pendidikan Profesi): Psikolog Berizin, Konselor Profesional, atau Manajer Pengembangan Organisasi'
    ],
    progressionStudy: [
      'Awal Kuliah: Pengantar psikologi, sosiologi, perkembangan manusia, dan metode observasi',
      'Pertengahan–Akhir: Psikologi sosial/industri/pendidikan, teknik wawancara terstruktur, dan praktikum lapangan',
      'Setelah Lulus: Dapat masuk ke HRD perusahaan, lembaga sosial/NGO, riset sosial, atau melanjutkan pendidikan profesi psikolog'
    ],
    progressionBiz: [
      'Tahap Awal: Fasilitator kegiatan kreatif komunitas, panitia acara edukasi remaja, atau kegiatan hobi warga positif',
      'Berkembang: Penyelenggara kegiatan team-building atau pelatihan ringan bersama narasumber ahli yang kompeten',
      'Lanjutan: Biro layanan asesmen/konseling psikologi hanya boleh dijalankan setelah menyelesaikan pendidikan profesi psikolog berizin'
    ],
    switchNote:
      'Pemahaman karakter manusia sangat berguna jika digabungkan dengan manajemen SDM (HRD), pendidikan, layanan pelanggan, atau pemasaran.',
    futureNote:
      'Kesadaran akan lingkungan kerja yang sehat, kesejahteraan mental, dan pemberdayaan komunitas membuat peran ini terus dibutuhkan.',
    bizEquipmentHint: 'Materi fasilitasi kegiatan kelompok, lembar pencatatan observasi, serta kerja sama dengan mentor/ahli berizin bila mengadakan edukasi.'
  },
  seni_desain: {
    purposeAndScope:
      'Menerjemahkan ide, pesan, atau fungsi benda menjadi karya visual, grafis, ilustrasi, foto, video, kriya tangan, atau rancang ruang yang komunikatif dan nyaman dipakai.',
    realLifeExamples: [
      'Desain poster promosi, kemasan produk UMKM, logo identitas usaha, dan tata letak siap cetak',
      'Pemotretan produk katalog, penyuntingan video kreatif, atau animasi pendek',
      'Perancangan tampilan aplikasi (UI/UX) atau penataan ruang interior agar nyaman dan fungsional'
    ],
    workSetting: 'Studio desain, gerai percetakan, studio foto, ruang kerja kreatif dengan komputer grafis, atau lokasi pemotretan.',
    studySetting: 'Studio gambar/desain, laboratorium komputer grafis, bengkel kriya, dan sesi evaluasi karya bersama dosen dan teman.',
    bizSetting: 'Studio desain rumahan atau layanan kreatif mandiri menggunakan perangkat komputer/kamera serta portofolio daring.',
    socialStyle: 'Membutuhkan waktu fokus tenang saat berkarya, lalu komunikasi terbuka saat menerima arahan (brief) dan masukan revisi pemesan.',
    workRhythmWork: 'Berbasis proyek dan tenggat pengiriman karya; menuntut disiplin mengatur tahap sketsa hingga file siap cetak atau tayang.',
    workRhythmStudy: 'Memadukan teori warna/tipografi/komposisi, eksplorasi konsep visual, proyek studio, dan penyusunan portofolio karya.',
    workRhythmBiz: 'Mengikuti ritme permintaan klien; ada kalanya pesanan menumpuk sehingga perlu pintar menjadwalkan waktu kerja.',
    softSkills: [
      'Terbuka menerima masukan serta revisi karya tanpa menganggapnya serangan pribadi',
      'Ketelitian mengecek kontras warna, keterbacaan tulisan, serta ukuran layar atau kertas cetak',
      'Disiplin menghargai tenggat kerja dan etika hak cipta (tidak menjiplak karya orang lain)'
    ],
    challenges: [
      'Menghadapi revisi berulang atau perbedaan selera visual dengan pemesan',
      'Menjaga keaslian karya serta memahami aturan hak cipta foto, font, dan aset desain',
      'Menjaga kesehatan mata dan batas waktu agar tidak kelelahan mengejar tenggat mendadak'
    ],
    preparations: [
      'Kumpulkan 5–8 karya terbaikmu secara jujur (poster, foto, sketsa, atau UI) dalam folder portofolio yang rapi',
      'Latih membaca arahan pesanan (brief): siapa pembacanya, pesan apa yang ditonjolkan, dan di mana karya akan dipakai',
      'Pelajari dasar komposisi visual, kontras warna agar teks terbaca jelas, dan penggunaan aset bebas lisensi'
    ],
    progressionWork: [
      'Pemula: Desainer Grafis Pemula, Operator Percetakan, Asisten Studio Foto, atau Video Editor Junior',
      'Menengah: Visual Designer, UI/UX Designer, Illustrator, atau Desainer Produk/Interior Junior',
      'Lanjutan: Senior Brand/Product Designer, Creative Lead, atau Pemilik Studio Kreatif'
    ],
    progressionStudy: [
      'Awal Kuliah: Dasar komposisi visual (nirmana), tipografi, teori warna, sketsa tangan, dan sejarah desain',
      'Pertengahan–Akhir: Desain identitas merek, animasi/multimedia, desain produk/ruang, serta penyusunan pameran portofolio',
      'Setelah Lulus: Berpeluang di studio desain, percetakan, perusahaan digital, agensi media, maupun wirausaha kreatif'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa desain poster/feed medsos, cetak undangan/kemasan, atau kerajinan kustom pesanan kenalan dan UMKM',
      'Berkembang: Paket desain identitas usaha kecil atau kolaborasi desain tampilan website bersama rekan pemrogram',
      'Lanjutan: Membangun studio desain kreatif atau menjual produk karya dan aset desain orisinal secara berkala'
    ],
    switchNote:
      'Keahlian visual sangat kuat bila dipadukan dengan pemrograman antarmuka web, pemasaran digital, fotografi, atau usaha kriya/fashion.',
    futureNote:
      'Kepekaan rasa visual, pemahaman budaya lokal, dan kemampuan menerjemahkan pesan secara tepat tetap menjadi nilai pembeda desainer manusia.',
    bizEquipmentHint: 'Laptop/komputer dengan tampilan warna yang baik, perangkat lunak desain resmi/gratis, alat gambar dasar, dan portofolio karya.'
  },
  pertanian_lingkungan: {
    purposeAndScope:
      'Mengelola budidaya tanaman pangan atau hias, teknologi tanam modern (seperti hidroponik), pengolahan hasil panen bersih, serta perawatan dan pelestarian lingkungan hidup.',
    realLifeExamples: [
      'Perawatan kebun bibit, instalasi hidroponik sederhana, atau budidaya sayuran dan tanaman hias lokal',
      'Pemilahan sampah organik menjadi kompos, perawatan taman, atau pemantauan kebersihan area kerja',
      'Pengolahan hasil tani sekitar menjadi pangan kering atau studi kualitas tanah dan air (di jenjang perguruan tinggi)'
    ],
    workSetting: 'Area terbuka seperti kebun, greenhouse, lahan pembibitan, taman, unit pengolahan hasil tani, atau fasilitas pengelolaan sampah terpilah.',
    studySetting: 'Kombinasi ruang kelas sains hayati/tanah, laboratorium pangan/lingkungan, dan lahan kebun praktik kampus.',
    bizSetting: 'Halaman rumah, teras rak hidroponik/bibit, atau dapur olahan pangan tani skala awal di lingkungan sekitar.',
    socialStyle: 'Banyak aktivitas fisik mandiri atau kelompok kecil yang tenang merawat pertumbuhan tanaman dan bekerja dekat dengan alam.',
    workRhythmWork: 'Mengikuti siklus harian alam — penyiraman/pengecekan rutin pagi dan sore serta panen atau pengolahan berkala.',
    workRhythmStudy: 'Mempelajari biologi tanaman, ilmu tanah/air, pengendalian hama ramah lingkungan, dan praktik budidaya lapangan.',
    workRhythmBiz: 'Membutuhkan ketekunan perawatan harian; hasil panen mengikuti masa tumbuh alami tanaman sehingga tidak instan.',
    softSkills: [
      'Kesabaran dan konsistensi merawat proses alami yang membutuhkan waktu tumbuh bertahap',
      'Ketelitian mengamati tanda hama, kekeringan, atau perubahan mutu hasil panen',
      'Ketahanan bekerja aktif di luar ruangan dalam kondisi cuaca cerah maupun hujan'
    ],
    challenges: [
      'Dipengaruhi cuaca, serangan hama penyakit tanaman, dan tuntutan kerja fisik di luar ruangan',
      'Hasil budidaya butuh masa tunggu panen serta kedisiplinan perawatan rutin setiap hari',
      'Menjaga kesegaran atau daya simpan produk tani agar cepat terserap oleh pembeli sekitar'
    ],
    preparations: [
      'Coba mulai proyek kecil merawat 1–2 pot tanaman, bibit, atau kompos sederhana di rumah untuk melatih konsistensi',
      'Biasakan mencatat jadwal penyiraman, pemupukan, dan kondisi tumbuh tanaman tiap minggu',
      'Kenali jenis sayuran, bibit, atau produk olahan hasil tani yang paling diminati warga sekitar'
    ],
    progressionWork: [
      'Pemula: Operator Kebun/Greenhouse, Petugas Perawatan Taman/Pembibitan, atau Operator Pengolahan Hasil Tani',
      'Menengah: Teknisi Hidroponik/Agribisnis, Penyuluh Lapangan Junior, atau Staf Pengelola Lingkungan (HSE)',
      'Lanjutan: Ahli Agronomi, Manajer Kebun/Agribisnis, atau Konsultan Pengelolaan Lingkungan'
    ],
    progressionStudy: [
      'Awal Kuliah: Dasar agronomi, botani, ilmu tanah, ekologi, serta pengelolaan air dan limbah',
      'Pertengahan–Akhir: Teknologi budidaya modern, agribisnis pangan, konservasi lingkungan, dan praktik kebun',
      'Setelah Lulus: Berpeluang di sektor pangan, agroteknologi, konservasi lingkungan, laboratorium pangan, atau wirausaha tani'
    ],
    progressionBiz: [
      'Tahap Awal: Jual bibit tanaman hias/sayuran siap tanam atau sayuran segar sistem pre-order warga sekitar',
      'Berkembang: Suplai rutin sayur segar, produk olahan pangan lokal berizin PIRT, atau paket tanam pemula',
      'Lanjutan: Mengembangkan unit budidaya terpadu sekaligus pengolahan produk pangan lokal bernilai tambah'
    ],
    switchNote:
      'Pengalaman budidaya pangan mudah terhubung dengan usaha kuliner sehat, pengolahan pangan kemasan, maupun manajemen lingkungan.',
    futureNote:
      'Ketahanan pangan lokal, pertanian perkotaan (urban farming), dan pengelolaan sampah berkelanjutan menjadi kebutuhan jangka panjang.',
    bizEquipmentHint: 'Media tanam/bibit, wadah/rak tanam skala awal, alat berkebun dasar, dan buku catatan jadwal perawatan serta panen.'
  },
  pariwisata_kuliner: {
    purposeAndScope:
      'Menghadirkan pengalaman pelayanan tamu, perhotelan, pemanduan wisata lokal, serta pengolahan dan penyajian makanan atau minuman yang bersih, lezat, dan berkesan.',
    realLifeExamples: [
      'Pengolahan kue, minuman racikan, atau hidangan praktis dengan menjaga kebersihan dapur dan konsistensi rasa',
      'Penyambutan tamu di resepsionis, tata ruang penginapan, atau pelayanan kafe dan restoran yang ramah',
      'Penyusunan rute jalan kaki wisata lokal dan pemanduan rombongan pengunjung secara informatif'
    ],
    workSetting: 'Dapur produksi bersih, kafe/restoran, hotel/penginapan, pusat informasi wisata, atau area destinasi wisata.',
    studySetting: 'Laboratorium dapur tata boga, simulasi kamar/resepsionis hotel, kelas bahasa layanan tamu, dan praktik lapangan industri.',
    bizSetting: 'Dapur rumah yang higienis untuk sistem pre-order makanan/minuman, kedai mini teras, atau layanan pemanduan wisata lokal.',
    socialStyle: 'Ramah dan sigap melayani — menjaga komunikasi santun, kecepatan merespons kebutuhan tamu, serta kekompakan tim dapur dan layanan.',
    workRhythmWork: 'Aktif dan banyak berdiri/bergerak; sering lebih ramai saat jam makan, akhir pekan, atau musim liburan.',
    workRhythmStudy: 'Memadukan praktik memasak/tata hidang atau layanan hotel, standar sanitasi pangan, dan bahasa komunikasi tamu.',
    workRhythmBiz: 'Mengikuti jam pesanan makan atau jadwal libur tamu; membutuhkan ketepatan waktu persiapan bahan agar sajian tetap segar.',
    softSkills: [
      'Keramahan tulus, sopan santun, dan ketenangan menangani keluhan pelanggan dengan baik',
      'Kebersihan diri serta disiplin menjaga kehigienisan alat dan bahan makanan',
      'Kecepatan gerak serta koordinasi tim yang rapi saat jam sibuk'
    ],
    challenges: [
      'Jam kerja sering padat di akhir pekan, hari libur, atau jam sibuk makan siang dan malam',
      'Menuntut ketahanan fisik berdiri lama sekaligus ketelitian menjaga rasa dan kebersihan tetap konsisten',
      'Harus siap menghadapi beragam karakter tamu dengan sabar dan profesional'
    ],
    preparations: [
      'Latih memasak atau meracik 2–3 menu andalan memakai takaran pasti agar rasanya konsisten di setiap percobaan',
      'Biasakan menjaga kebersihan dapur, mencuci alat langsung, dan mengecek tanggal kedaluwarsa bahan',
      'Latih sapaan ramah dalam Bahasa Indonesia sopan dan Bahasa Inggris dasar untuk melayani tamu'
    ],
    progressionWork: [
      'Pemula: Kru Dapur/Barista Pemula, Pramusaji Kafe/Resto, atau Resepsionis/Housekeeping Pemula',
      'Menengah: Juru Masak/Baker Berpengalaman, Koordinator Layanan Tamu, atau Pemandu Wisata Berlisensi',
      'Lanjutan: Kepala Dapur (Head Chef), Manajer Restoran/Hotel, atau Pengelola Destinasi Wisata'
    ],
    progressionStudy: [
      'Awal Kuliah: Dasar tata boga atau perhotelan, sanitasi higienis pangan, dan etika layanan tamu (hospitality)',
      'Pertengahan–Akhir: Manajemen dapur/hotel, perencanaan wisata daerah, serta magang di industri perhotelan/kuliner',
      'Setelah Lulus: Berpeluang di hotel, restoran, jaringan kuliner, biro wisata, maupun membuka usaha boga terstandar'
    ],
    progressionBiz: [
      'Tahap Awal: Jual makanan/minuman sistem pre-order (PO) mingguan ke teman sekolah, tetangga, atau acara keluarga',
      'Berkembang: Mengurus NIB (Nomor Induk Berusaha) serta izin pangan PIRT/Halal bila menjual produk kemasan, lalu membuka titik jual tetap',
      'Lanjutan: Membuka kedai atau rumah produksi mandiri dengan menu khas dan standar kebersihan konsisten'
    ],
    switchNote:
      'Keahlian layanan ramah (hospitality) mudah dibawa ke bidang layanan pelanggan umum, pengelolaan acara, maupun bisnis ritel.',
    futureNote:
      'Kuliner harian dan wisata pengalaman lokal terus menjadi bagian penting ekonomi masyarakat di tingkat daerah.',
    bizEquipmentHint: 'Peralatan masak/saji rumahan yang bersih, timbangan/takaran bahan konsisten, kemasan pangan aman (food grade), dan daftar menu jelas.'
  },
  administrasi_logistik: {
    purposeAndScope:
      'Menjaga keteraturan surat-menyurat, arsip dokumen, jadwal kantor, pencatatan stok gudang, pemeriksaan mutu (QC), serta kelancaran alur masuk-keluar barang dan pengiriman.',
    realLifeExamples: [
      'Pencatatan data inventaris barang masuk-keluar di spreadsheet atau sistem gudang',
      'Pemeriksaan kecocokan jumlah barang dengan surat jalan, pengemasan aman, dan jadwal kurir',
      'Pengelolaan arsip dokumen kantor, notula rapat, jadwal pimpinan, dan digitalisasi berkas'
    ],
    workSetting: 'Kantor administrasi, unit arsip, area gudang barang yang tertata, pusat distribusi paket, atau ruang operasional toko online.',
    studySetting: 'Ruang kelas manajemen perkantoran/logistik, praktikum aplikasi spreadsheet & sistem arsip digital, serta simulasi rantai pasok.',
    bizSetting: 'Meja kerja komputer atau sudut pengemasan di rumah untuk jasa pengetikan/perapian dokumen, cetak mini, atau admin kirim barang.',
    socialStyle: 'Bekerja tenang dan runtut dengan data atau barang, disertai koordinasi jelas dengan pemasok, kurir, atau tim internal.',
    workRhythmWork: 'Teratur mengikuti jadwal operasional harian, jam batas pengiriman (cut-off), dan pemeriksaan stok berkala.',
    workRhythmStudy: 'Mempelajari pengarsipan modern, sistem logistik/rantai pasok, aplikasi perkantoran, dan tata kelola operasional.',
    workRhythmBiz: 'Mengikuti jadwal pengetikan, cetak dokumen, atau pengemasan harian agar pesanan pelanggan selesai tepat waktu.',
    softSkills: [
      'Ketelitian tinggi mengecek angka, ejaan nama, kode barang, dan alamat agar nol salah kirim',
      'Kejujuran serta kerapian menjaga berkas dan barang titipan milik orang lain',
      'Disiplin waktu terhadap jadwal pengiriman maupun tenggat laporan administrasi'
    ],
    challenges: [
      'Kesalahan input angka kecil atau salah tempel label dapat menimbulkan selisih stok atau komplain',
      'Pekerjaan cenderung berulang setiap hari sehingga membutuhkan konsistensi konsentrasi',
      'Saat jadwal tutup bulan atau musim ramai belanja, volume berkas atau paket meningkat tajam'
    ],
    preparations: [
      'Kuasai rumus dasar aplikasi spreadsheet (Excel/Google Sheets) seperti SUM, filter, dan pencarian data',
      'Latih kebiasaan menamai folder arsip secara seragam dan memeriksa ulang checklist sebelum menyerahkan tugas',
      'Jaga ketelitian saat menyortir daftar angka atau barang dalam jumlah banyak'
    ],
    progressionWork: [
      'Pemula: Staf Admin Kantor/Tata Usaha, Operator Input Data, Pemeriksa Mutu (QC), atau Staf Gudang Pemula',
      'Menengah: Koordinator Gudang/Inventaris, Asisten Pimpinan Senior, atau Staf Pengadaan (Purchasing)',
      'Lanjutan: Supervisor Logistik/Rantai Pasok, Office Manager, atau Manajer Operasional Distribusi'
    ],
    progressionStudy: [
      'Awal Kuliah: Manajemen perkantoran/kearsipan, dasar akuntansi operasional, pengantar logistik, dan sistem informasi kantor',
      'Pertengahan–Akhir: Manajemen rantai pasok (supply chain), pengarsipan digital, pengadaan barang, dan magang operasional',
      'Setelah Lulus: Berpeluang di perusahaan distribusi, e-commerce, manufaktur, lembaga arsip/perpustakaan, maupun instansi publik'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa pengetikan/perapian CV umum, cetak & jilid tugas sekolah, atau jastip lokal skala kecil',
      'Berkembang: Layanan pengemasan & titip kelola stok kecil (mini fulfillment) atau sentra layanan dokumen lingkungan sekitar',
      'Lanjutan: Agen titik pengiriman resmi atau layanan pendukung administrasi operasional UMKM lokal'
    ],
    switchNote:
      'Keterampilan administrasi dan manajemen stok sangat mudah nyambung ke akuntansi dasar, layanan pelanggan, pengadaan barang, atau toko daring.',
    futureNote:
      'Belanja daring dan kebutuhan tata kelola arsip digital yang tertib membuat tenaga administrasi dan logistik teliti tetap dibutuhkan.',
    bizEquipmentHint: 'Laptop/komputer dengan aplikasi spreadsheet dan pengolah kata, serta timbangan paket/printer dasar sesuai jenis jasanya.'
  }
};

type SubClusterSeed = Partial<DomainInsightSeed> & {
  customActivityHeading?: string;
};

const SUB_CLUSTER_OVERRIDES: Record<string, SubClusterSeed> = {
  garment_tailor: {
    purposeAndScope:
      'Menangani pemotongan pola kain, pengoperasian mesin jahit, perbaikan atau permak pakaian, serta pemeriksaan kerapian jahitan dan kualitas busana.',
    realLifeExamples: [
      'Menjahit bagian pakaian sesuai pola, memasang kancing/resleting, dan merapikan obras tepi kain',
      'Memperbaiki ukuran celana/seragam (permak) atau menjahit tas kain dan busana pesanan warga sekitar',
      'Memeriksa kesamaan ukuran, kekuatan benang jahitan, dan kebersihan akhir pakaian sebelum dikemas'
    ],
    workSetting: 'Ruang kerja konveksi pakaian, studio jahit butik, atau lantai produksi garmen yang terang dan tertata.',
    bizSetting: 'Sudut jahit di rumah dengan meja potong kain, setrika uap/biasa, dan mesin jahit yang bersih.',
    socialStyle: 'Banyak fokus ketelitian tangan dan mata secara mandiri di depan mesin jahit atau meja pola, ditambah komunikasi sopan saat mengukur pesanan pelanggan.',
    workRhythmWork: 'Teratur mengikuti jadwal produksi konveksi atau target jumlah jahitan harian dengan jeda istirahat mata dan punggung.',
    workRhythmBiz: 'Mengikuti janji selesai pesanan pelanggan; bisa padat menjelang tahun ajaran baru atau hari raya.',
    softSkills: [
      'Ketelitian tangan dan mata menjaga jarak jahitan lurus maupun lengkung tetap rapi',
      'Kesabaran mengukur ulang agar ukuran pakaian pas dengan permintaan pemesan',
      'Kerapian menjaga kain dan meja kerja tetap bersih dari sisa benang atau minyak mesin'
    ],
    challenges: [
      'Menjaga kerapian jahitan dan kesamaan ukuran meski mengerjakan pesanan dalam jumlah banyak',
      'Keselamatan jari saat mengoperasikan jarum mesin jahit berkecepatan tinggi maupun alat potong kain',
      'Menjaga postur punggung, leher, dan mata saat duduk menjahit dalam durasi panjang'
    ],
    preparations: [
      'Latih kelurusan dan kelengkungan jahitan pada kain perca sisa sebelum memotong bahan utuh',
      'Biasakan menggunakan meteran kain, kapur jahit, dan memeriksa ulang ukuran sebelum menggunting',
      'Simpan foto hasil jahitan atau permak terbaikmu dari jarak dekat sebagai contoh portofolio karya'
    ],
    progressionWork: [
      'Pemula: Operator Mesin Jahit Pemula, Pemeriksa Benang/Finishing, atau Asisten Potong Pola Dasar',
      'Menengah: Penjahit Sampel (Sample Maker), Pembuat Pola (Pattern Maker), atau Pemeriksa Mutu Jahitan (QC Garmen)',
      'Lanjutan: Kepala Line Konveksi, Kepala Penjahit Butik, atau Pengusaha Konveksi Kecil'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa permak pakaian ringan (potong celana, kecilkan seragam, ganti resleting) untuk tetangga dan teman',
      'Berkembang: Menerima jahitan seragam kelompok kecil, busana harian, atau tas kain kustom sistem pre-order',
      'Lanjutan: Membuka studio jahit/konveksi mikro dengan bantuan beberapa penjahit mitra'
    ],
    switchNote:
      'Ketelitian pola dan bahan kain mudah dikembangkan ke usaha busana terkurasi, desain mode, atau pemeriksaan mutu (QC) tekstil.',
    futureNote:
      'Kebutuhan pakaian kerja, seragam sekolah, busana harian, dan jasa perbaikan pakaian terus ada sepanjang tahun di setiap lingkungan.',
    bizEquipmentHint: 'Mesin jahit rumahan/portable yang terawat, gunting kain tajam, meteran, jarum/benang beragam warna, dan setrika.'
  },
  civil_construction: {
    purposeAndScope:
      'Merancang, menggambar denah, menghitung kebutuhan dasar, serta merencanakan ruang dan konstruksi bangunan agar aman, nyaman, dan sesuai ukuran teknis.',
    realLifeExamples: [
      'Menggambar denah bangunan, tampak depan-samping, dan detail pintu/jendela memakai aplikasi gambar teknik 2D/3D (CAD)',
      'Mengukur dimensi ruangan atau lahan sederhana dan menyusun tata letak ruang agar pencahayaan serta alurnya nyaman',
      'Mempelajari struktur pondasi, kolom, balok, serta bahan bangunan aman (pada jenjang pendidikan teknik sipil/arsitektur)'
    ],
    workSetting: 'Ruang kerja gambar teknik/studio arsitektur dengan komputer layar lebar, sesekali meninjau lokasi pengukuran bangunan.',
    studySetting: 'Studio gambar arsitektur/sipil, laboratorium material konstruksi dan ukur tanah, serta tugas proyek perancangan bangunan.',
    softSkills: [
      'Ketelitian membaca dan menuliskan skala ukuran milimeter/sentimeter agar tidak meleset saat dibangun',
      'Kemampuan membayangkan bentuk 3 dimensi (spasial) dari gambar datar 2 dimensi',
      'Komunikasi jelas saat menerjemahkan kebutuhan ruang pemilik bangunan ke dalam gambar kerja'
    ],
    challenges: [
      'Kesalahan kecil angka skala pada gambar kerja bisa menimbulkan salah bangun yang mahal di lapangan',
      'Peran penandatangan desain struktur utama atau arsitek berizin wajib menempuh pendidikan sarjana teknik/arsitektur dan sertifikasi profesinya',
      'Proyek gambar bangunan sering memiliki revisi denah berulang mengikuti perubahan kebutuhan pemilik'
    ],
    preparations: [
      'Latih mengukur benda atau ruangan nyata memakai meteran lalu menggambar denahnya dengan skala konsisten',
      'Pelajari cara membaca simbol pintu, jendela, tangga, dan arah utara pada denah bangunan dasar',
      'Kumpulkan hasil gambar teknik atau sketsa tata ruang terbaikmu sebagai portofolio awal'
    ],
    progressionWork: [
      'Pemula (Lulusan SMK): Juru Gambar Teknik Junior (CAD Drafter) atau Asisten Pengukur Lapangan',
      'Menengah (Pengalaman / D3-S1): Drafter Senior, Estimator Volume Material (Quantity Surveyor Junior), atau Pengawas Lapangan',
      'Lanjutan (S1 Teknik Sipil/Arsitektur + Sertifikasi): Insinyur Sipil, Arsitek Berizin, atau Manajer Proyek Konstruksi'
    ],
    progressionStudy: [
      'Awal Kuliah: Gambar teknik/arsitektur, matematika teknik, mekanika dasar, serta pengenalan bahan bangunan',
      'Pertengahan–Akhir: Perancangan struktur bangunan, teknologi bahan, manajemen konstruksi, dan kerja praktik proyek',
      'Setelah Lulus: Berpeluang di konsultan perencana, kontraktor bangunan, manajemen properti, atau dinas pekerjaan umum'
    ],
    switchNote:
      'Kemampuan gambar teknik dan tata ruang juga sangat berguna di bidang desain interior, mebel kustom, maupun estimasi proyek.',
    futureNote:
      'Pembangunan perumahan, renovasi ruang usaha, dan perbaikan fasilitas umum membuat tenaga juru gambar dan perencana konstruksi terus dicari.'
  },
  welding_metal: {
    purposeAndScope:
      'Memotong, menyambung, merakit, dan merapikan komponen logam maupun rangka besi untuk kebutuhan konstruksi ringan, pagar, rak, atau perakitan bengkel.',
    realLifeExamples: [
      'Mengukur dan memotong besi siku/pipa sesuai gambar ukuran, lalu menyambungnya dengan las listrik ringan',
      'Menghaluskan bekas sambungan las memakai gerinda dan mengecek kesikuan sudut rangka rak atau pagar',
      'Menjaga area pengelasan bebas bahan mudah terbakar serta disiplin memakai helm dan sarung tangan las'
    ],
    workSetting: 'Bengkel fabrikasi logam, bengkel las konstruksi ringan, atau area perakitan industri dengan ventilasi dan perlengkapan keselamatan K3.',
    softSkills: [
      'Fokus tenang dan kestabilan tangan saat memegang stang las dan menjaga jarak busur',
      'Disiplin mutlak terhadap aturan keselamatan kerja K3 (masker mata las, sarung tangan kulit, apron)',
      'Ketelitian mengukur panjang dan sudut 90 derajat sebelum penyambungan permanen'
    ],
    challenges: [
      'Paparan cahaya busur las, percikan api panas, asap las, serta kebisingan mesin gerinda menuntut APD lengkap',
      'Jika sambungan salah sudut atau kurang matang, pembongkaran besi membutuhkan tenaga ekstra',
      'Pekerjaan menuntut ketahanan fisik berdiri, mengangkat rangka besi, dan menahan panas lingkungan bengkel'
    ],
    preparations: [
      'Biasakan selalu mengecek kelayakan kabel mesin las dan memakai pelindung mata/tangan sebelum praktik di bengkel sekolah',
      'Latih ketelitian mengukur dan menandai besi menggunakan siku besi serta meteran secara tepat',
      'Dokumentasikan foto hasil sambungan las dan benda rakitan praktik terbaikmu di sekolah'
    ],
    progressionWork: [
      'Pemula: Helper Fabrikasi Bengkel Las atau Operator Las Dasar',
      'Menengah: Welder Bersertifikat (uji kompetensi las) atau Perakit Konstruksi Logam',
      'Lanjutan: Kepala Bengkel Fabrikasi, Inspektur Sambungan Las (setelah sertifikasi), atau Pemilik Bengkel Las Kustom'
    ],
    switchNote:
      'Keterampilan ukur presisi dan fabrikasi logam mudah diarahkan ke perakitan rangka furnitur industrial atau pemesinan industri.',
    futureNote:
      'Kebutuhan konstruksi bangunan, rak usaha, pagar rumah, dan perawatan fasilitas pabrik tetap memerlukan juru las yang rapi dan aman.'
  },
  electrical_hvac: {
    purposeAndScope:
      'Memasang, merawat, memeriksa gangguan, serta memperbaiki instalasi listrik gedung, panel elektronika, pendingin ruangan (AC), dan peralatan listrik harian dengan aman.',
    realLifeExamples: [
      'Pengecekan sambungan kabel, sekring pengaman (MCB), dan pencahayaan di ruang sekolah atau gedung',
      'Pembersihan saringan dan pengecekan suhu pendingin ruangan (AC), kipas angin, atau kulkas rumah tangga',
      'Pengukuran tegangan arus listrik memakai multimeter dan perancangan sistem otomasi listrik (pada jenjang kuliah teknik elektro)'
    ],
    workSetting: 'Ruang panel gedung, workshop servis elektronika/pendingin, atau kunjungan ke rumah dan kantor pelanggan.',
    studySetting: 'Laboratorium rangkaian listrik, bengkel kontrol dan mikrokontroler, serta ruang kelas perhitungan teknik elektro.',
    softSkills: [
      'Ketelitian tinggi memutus sumber listrik terlebih dahulu dan mengecek kabel sesuai kode warna keselamatan',
      'Kesabaran menelusuri sumber gangguan arus atau komponen yang rusak secara sistematis',
      'Komunikasi sopan saat berkunjung ke rumah atau kantor pemilik perangkat'
    ],
    challenges: [
      'Risiko sengatan arus listrik atau korsleting menuntut ketenangan dan kepatuhan penuh pada prosedur K3 kelistrikan',
      'Sering bekerja di tempat tinggi memakai tangga saat mengecek unit AC dinding atau lampu plafon',
      'Harus mampu menjelaskan kerusakan komponen secara jujur kepada pelanggan tanpa melebih-lebihkan'
    ],
    preparations: [
      'Biasakan memakai alas kaki berisolasi, mengecek tespen/multimeter, dan memutus MCB sebelum menyentuh instalasi saat praktik',
      'Pelajari cara membaca simbol sakelar, stopkontak, dan pengaman listrik dasar',
      'Latih membongkar dan membersihkan bagian luar peralatan sederhana di rumah dengan hati-hati di bawah pengawasan'
    ],
    progressionWork: [
      'Pemula: Asisten Teknisi Listrik Gedung atau Teknisi Pembersihan & Perawatan AC Pemula',
      'Menengah: Teknisi Instalasi/Panel Listrik Berkompetensi atau Teknisi Pendingin Spesialis',
      'Lanjutan: Supervisor Perawatan Gedung (Engineering), Teknisi Otomasi, atau Insinyur Elektro (dengan kuliah S1/D4)'
    ],
    progressionStudy: [
      'Awal Kuliah: Rangkaian listrik, fisika listrik-magnet, elektronika dasar, dan pengenalan mikrokontroler',
      'Pertengahan–Akhir: Sistem tenaga listrik, otomasi industri/sensor, kontrol mesin, dan kerja praktik fasilitas industri',
      'Setelah Lulus: Berpeluang di pembangkitan energi, manufaktur otomasi, kontraktor gedung, atau riset teknologi'
    ],
    switchNote:
      'Pemahaman kelistrikan dan sensor sangat mudah dikembangkan ke bidang perawatan perangkat komputer, otomasi rumah pintar, atau jaringan.',
    futureNote:
      'Hampir seluruh gedung, rumah tangga, dan industri kini bergantung pada pasokan listrik dan sistem pendingin yang terawat baik.'
  },
  cleaning_care_micro: {
    purposeAndScope:
      'Memberikan layanan pembersihan menyeluruh, pengeringan aman, dan perawatan berkala barang harian seperti sepatu, helm motor, tas, maupun debu luar peralatan rumah tangga.',
    realLifeExamples: [
      'Mencuci sepatu berbahan kain kanvas, mesh, atau kulit sintetis memakai sikat lembut dan sabun khusus tanpa merusak lem',
      'Membersihkan busa dalam helm motor, kaca visor, dan menghilangkan bau apek dengan pengeringan higienis',
      'Memfoto kondisi barang sebelum dan sesudah dibersihkan sebagai bukti hasil kerja kepada pemilik'
    ],
    workSetting: 'Sudut cuci dan ruang pengeringan bersih di rumah yang terhindar dari debu serta sinar matahari langsung berlebih.',
    bizSetting: 'Area teras atau ruang cuci rumahan sederhana dengan rak pengering berventilasi baik dan lemari penyimpanan barang pelanggan.',
    socialStyle: 'Bekerja telaten secara mandiri membersihkan detail kotoran, diikuti komunikasi ramah saat menerima titipan dan menyerahkan barang selesai.',
    workRhythmBiz: 'Mengikuti jumlah barang titipan harian dan lama waktu pengeringan alami agar barang kembali wangi serta kering merata.',
    softSkills: [
      'Ketelatenan memeriksa jenis bahan (kanvas, kulit, suede, plastik visor) sebelum memilih cairan pembersih',
      'Kehati-hatian dan kejujuran menjaga barang milik pelanggan agar tidak tertukar atau rusak',
      'Kebersihan dan ketepatan waktu janji pengembalian barang'
    ],
    challenges: [
      'Noda membandel atau bahan sepatu/helm sensitif bisa rusak jika disikat terlalu keras atau dijemur di terik matahari langsung',
      'Cuaca musim hujan memperlambat waktu pengeringan bila hanya mengandalkan angin alami',
      'Risiko barang pelanggan tertukar jika tidak memberi label nama yang jelas sejak barang diterima'
    ],
    preparations: [
      'Uji coba membersihkan sepatu dan helm milik sendiri atau keluarga dengan membedakan sikat lembut dan sikat sol keras',
      'Pelajari cara memberi label kode barang dan foto bukti kondisi awal (jika ada cacat bawaan) sebelum mulai mencuci',
      'Catat lama waktu pengerjaan per pasang agar bisa menentukan jadwal selesai yang realistis'
    ],
    progressionBiz: [
      'Tahap Awal: Layanan cuci sepatu dan helm sistem antar-jemput sekitar sekolah atau tetangga terdekat',
      'Berkembang: Menambah layanan cuci tas, perawatan ringan perlengkapan harian, dan paket langganan bersih bulanan',
      'Lanjutan: Membuka gerai drop-off tetap bersama asisten cuci yang terlatih membedakan bahan'
    ],
    switchNote:
      'Keterampilan ketelitian merawat barang dan layanan pelanggan ini mudah berkembang ke usaha laundry atau perawatan perlengkapan lain.',
    futureNote:
      'Gaya hidup pelajar dan pekerja yang sibuk membuat layanan perawatan kebersihan sepatu dan helm tetap diminati di area perkotaan dan sekolah.',
    bizEquipmentHint: 'Sikat halus dan sikat sol terpisah, sabun pembersih ringan sesuai bahan, lap microfiber, rak pengering teduh, dan label penanda barang.'
  },
  photo_print_studio: {
    purposeAndScope:
      'Mengabadikan momen acara dan memotret produk usaha dengan pencahayaan rapi, hingga menyiapkan file desain siap cetak dan mengoperasikan cetak dokumen, stiker, atau kemasan.',
    realLifeExamples: [
      'Mengatur lampu foto dan sudut pengambilan gambar produk makanan/kerajinan UMKM agar terlihat bersih dan menarik',
      'Memeriksa batas potong kertas (bleed), resolusi gambar, dan warna file desain pelanggan sebelum naik cetak',
      'Mengoperasikan mesin cetak digital, memotong hasil cetakan dengan lurus, serta menjilid buku atau brosur'
    ],
    workSetting: 'Studio foto, gerai percetakan digital, area pemotretan produk toko online, atau lokasi liputan acara sekolah dan keluarga.',
    bizSetting: 'Sudut pemotretan sederhana di rumah memakai cahaya alami jendela + alas latar polos, atau layanan cetak/foto panggilan sesuai pesanan.',
    socialStyle: 'Menggabungkan ketelitian menyunting gambar dan setelan cetak dengan komunikasi ramah mengarahkan pose atau berdiskusi hasil bersama pemesan.',
    workRhythmWork: 'Mengikuti jadwal acara (sering di akhir pekan untuk foto acara) atau tenggat penyelesaian cetakan harian di gerai percetakan.',
    workRhythmBiz: 'Mengikuti jadwal pesanan foto produk UMKM atau acara sekolah; butuh waktu tambahan setelah memotret untuk memilih dan merapikan foto.',
    softSkills: [
      'Kepekaan melihat arah cahaya, sudut pandang, dan kerapian latar foto maupun susunan halaman cetak',
      'Ketelitian mengecek detail sebelum mencetak massal agar tidak membuang kertas dan tinta',
      'Kesabaran mengarahkan orang yang difoto agar merasa nyaman dan tidak kaku'
    ],
    challenges: [
      'Kesalahan pengecekan margin potong atau warna file pada mesin cetak bisa menyebabkan cetakan harus diulang',
      'Pencahayaan di lokasi acara sering berubah-ubah sehingga perlu cepat menyesuaikan setelan kamera atau posisi lampu',
      'Menjaga keselamatan tangan saat memakai pemotong kertas serta merawat lensa kamera dari debu dan jamur'
    ],
    preparations: [
      'Latih memotret benda di dekat cahaya jendela pagi memakai latar kertas karton polos agar terbiasa mengatur cahaya alami',
      'Pelajari cara mengecek resolusi gambar agar tidak pecah serta memberi batas aman tepi kertas sebelum dicetak ke PDF',
      'Susun 6–10 foto terbaik atau contoh desain siap cetak ke dalam satu folder portofolio rapi'
    ],
    progressionWork: [
      'Pemula: Asisten Studio Foto, Fotografer Pemula, atau Operator Mesin Cetak Digital & Finishing',
      'Menengah: Fotografer Katalog Produk/Acara atau Spesialis Pra-Cetak (Pre-Press) & Kemasan',
      'Lanjutan: Pemilik Studio Foto, Koordinator Produksi Percetakan, atau Pengarah Visual Acara'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa foto produk makanan/kerajinan UMKM atau dokumentasi kegiatan kelas memakai perangkat yang dimiliki',
      'Berkembang: Paket foto katalog + sunting warna rapi untuk toko online sekitar atau kerja sama cetak kemasan lokal',
      'Lanjutan: Membangun studio foto dan pusat cetak kreatif terpadu untuk acara dan usaha daerah'
    ],
    switchNote:
      'Keterampilan foto dan tata letak cetak sangat mudah dipadukan dengan desain grafis, kelola media sosial, maupun penjualan daring.',
    futureNote:
      'Pelaku usaha lokal tetap memerlukan foto produk yang jujur dan jelas serta kemasan cetak fisik untuk mempercantik jualannya.'
  },
  audio_broadcast: {
    purposeAndScope:
      'Mengatur peralatan suara, penempatan mikrofon, perekaman audio jernih, serta kelancaran siaran podcast, radio, peliputan berita, dan tata suara panggung acara.',
    realLifeExamples: [
      'Menata kabel mikrofon, mixer audio, dan melakukan pengecekan suara (soundcheck) sebelum acara dimulai',
      'Merekam suara narator atau wawancara podcast serta membersihkan kebisingan latar saat penyuntingan audio',
      'Menyiapkan naskah siaran, melakukan wawancara narasumber secara netral, dan menyusun laporan berita media'
    ],
    workSetting: 'Studio rekaman suara/podcast, ruang kontrol audio acara panggung, ruang redaksi media, atau lokasi liputan lapangan.',
    studySetting: 'Studio siaran/audio-visual kampus, ruang diskusi etika pers, laboratorium sunting suara, dan liputan lapangan.',
    softSkills: [
      'Kepekaan telinga membedakan suara jernih dengan suara berdengung (feedback) atau pecah',
      'Ketenangan bertindak cepat apabila mikrofon tiba-tiba mati atau kabel terputus saat acara berlangsung',
      'Komunikasi sopan dan runtut saat mewawancarai narasumber maupun berkoordinasi dengan pembawa acara'
    ],
    challenges: [
      'Harus datang lebih awal sebelum acara mulai untuk memasang alat dan memeriksa seluruh jalur suara',
      'Gangguan teknis mendadak saat acara langsung (live) menuntut kepala dingin untuk segera mengganti jalur cadangan',
      'Dalam peliputan berita, wajib memverifikasi kebenaran fakta sebelum disiarkan agar tidak menyebar informasi keliru'
    ],
    preparations: [
      'Latih menata dan menggulung kabel audio dengan rapi agar tidak kusut atau cepat putus di dalam',
      'Coba rekam suara bacaan 1 menit memakai mikrofon HP di ruangan tenang lalu dengarkan pakai headphone untuk belajar membedakan noise',
      'Jika tertarik sisi berita/siaran, berlatih merangkum peristiwa sekolah dengan unsur 5W+1H secara objektif'
    ],
    progressionWork: [
      'Pemula: Kru Kabel & Asisten Sound System Acara, Operator Podcast Pemula, atau Reporter/Kru Siaran Pemula',
      'Menengah: Sound Engineer Lapangan/Studio, Penyiar Program, atau Jurnalis Media',
      'Lanjutan: Penata Audio Utama Acara Besar, Produser Siaran, atau Editor Berita'
    ],
    progressionStudy: [
      'Awal Kuliah: Dasar komunikasi massa, etika jurnalistik, teknik penulisan berita, dan produksi audio-visual',
      'Pertengahan–Akhir: Produksi program siaran/podcast, liputan investigasi, dan magang di stasiun siaran atau media berita',
      'Setelah Lulus: Berpeluang di media berita, radio/TV, agensi podcast, humas instansi, atau vendor tata suara'
    ],
    switchNote:
      'Pemahaman audio dan siaran sangat mudah digabungkan dengan penyuntingan video, manajemen acara (EO), atau produksi konten edukasi.',
    futureNote:
      'Maraknya podcast, acara komunitas, serta video informasi tetap membutuhkan suara yang jernih dan penyampaian berita yang akurat.'
  },
  pharmacy_support: {
    purposeAndScope:
      'Mendukung ketertiban gudang farmasi non-klinis dan pelayanan kasir produk kesehatan umum — meliputi cek stok barang kesehatan bebas, tanggal kedaluwarsa, serta kerapian rak penyimpanan (BUKAN meracik atau menyerahkan obat resep).',
    realLifeExamples: [
      'Mengecek kesamaan jumlah kotak produk kesehatan umum yang datang dari distributor dengan surat jalan',
      'Menata stok berdasarkan prinsip FEFO (First Expired First Out — barang yang paling cepat kedaluwarsa diletakkan paling depan)',
      'Melayani pembayaran kasir untuk barang bebas seperti plester, tisu higienis, atau vitamin bebas sesuai aturan gerai'
    ],
    workSetting: 'Gudang alat kesehatan umum, area rak depan/kasir apotek, atau unit logistik farmasi non-klinis.',
    socialStyle: 'Kerja teliti dan tertib di area penyimpanan barang bersama tim apotek, serta melayani pembeli di meja kasir dengan ramah tanpa memberi saran pengobatan medis.',
    workRhythmWork: 'Mengikuti jam buka apotek atau jadwal shift gudang, termasuk pengecekan rutin tanggal kedaluwarsa setiap minggu.',
    softSkills: [
      'Ketelitian mutlak membaca kode batch, tanggal kedaluwarsa, dan petunjuk suhu simpan pada kemasan',
      'Kepatuhan tegas terhadap batas kewenangan agar tidak sekali pun memberi saran dosis atau menyerahkan obat resep',
      'Kerapian dan kejujuran dalam pencatatan keluar-masuk barang'
    ],
    challenges: [
      'BATAS HUKUM TEGAS: Lulusan SMK tidak berwenang meracik obat, menyerahkan obat keras/resep, atau memberi konsultasi obat — hal tersebut wajib dilakukan Apoteker atau Tenaga Vokasi Farmasi ber-STR',
      'Salah baca tanggal kedaluwarsa atau suhu penyimpanan bisa membuat produk rusak sebelum dipakai',
      'Pekerjaan kasir/gudang menuntut kesabaran berdiri dan fokus mengecek kesesuaian nama barang yang mirip'
    ],
    preparations: [
      'Latih ketelitian membedakan kemasan barang kesehatan yang namanya mirip serta mengecek tanggal kedaluwarsa',
      'Kuasai dasar pencatatan stok masuk-keluar memakai spreadsheet secara disiplin',
      'Jika bercita-cita meracik atau menangani obat secara profesional, persiapkan rencana kuliah D3/S1 Farmasi hingga pendidikan profesi'
    ],
    progressionWork: [
      'Pemula (Lulusan SMK — Non-Klinis): Kasir Produk Kesehatan Bebas atau Staf Gudang & Cek Stok Non-Klinis',
      'Menengah (Setelah Kuliah D3/S1 Farmasi + STR): Tenaga Vokasi Farmasi di Apotek, Klinik, atau Rumah Sakit',
      'Lanjutan (S1 Farmasi + Profesi Apoteker + STRA): Apoteker Penanggung Jawab atau Spesialis Mutu Industri Farmasi'
    ],
    switchNote:
      'Ketelitian cek kedaluwarsa (FEFO) dan stok gudang mudah dibawa ke logistik pangan, gudang retail modern, atau administrasi klinik.',
    futureNote:
      'Kepatuhan pencatatan distribusi dan penyimpanan produk kesehatan yang tertib selalu diperlukan di apotek maupun distributor kesehatan.'
  },
  pharmacy_study: {
    purposeAndScope:
      'Mempelajari ilmu tentang obat-obatan, bahan aktif alami maupun kimia, cara pembuatan dan pengujian sediaan obat, serta penggunaan obat yang aman di bidang kesehatan.',
    realLifeExamples: [
      'Praktikum laboratorium kimia dasar, pengenalan bahan baku obat, dan cara kerja obat di dalam tubuh manusia',
      'Mempelajari bentuk sediaan obat (tablet, kapsul, sirup, salep), cara penyimpanan, dan stabilitas mutu produk',
      'Mempelajari pelayanan informasi obat kepada pasien serta peran apoteker di rumah sakit, apotek, dan industri'
    ],
    workSetting: 'Ruang kuliah sains farmasi, laboratorium kimia/farmasetika yang higienis, serta tempat praktik kerja profesi di apotek, rumah sakit, atau pabrik obat.',
    studySetting: 'Banyak beraktivitas di kelas sains kimia-biologi, laboratorium formulasi/analisis dengan jas lab, dan praktikum kasus pelayanan obat.',
    softSkills: [
      'Ketelitian tinggi dalam menimbang, menghitung dosis/konsentrasi, dan mencatat hasil pengamatan laboratorium',
      'Tanggung jawab etis menjaga keselamatan pasien melalui informasi obat yang akurat',
      'Ketekunan mempelajari istilah kimia, biologi, dan aturan kefarmasian yang terus diperbarui'
    ],
    challenges: [
      'Materi kuliah banyak melibatkan kimia, biologi, perhitungan farmasi, dan laporan praktikum laboratorium yang padat',
      'Untuk memperoleh izin praktik sebagai Apoteker, lulusan S1 Farmasi masih WAJIB menempuh Program Profesi Apoteker dan memperoleh STRA/SIPA sesuai UU Kesehatan',
      'Menuntut kehati-hatian ekstra di laboratorium dengan jas lab dan aturan keselamatan bahan kimia'
    ],
    preparations: [
      'Perkuat pemahaman kimia dasar, biologi, dan perhitungan perbandingan satuan (miligram, mililiter, persen) sejak di SMK',
      'Latih kebiasaan membaca label aturan pakai dan cara simpan obat bebas di rumah dengan cermat',
      'Siapkan ketekunan membaca referensi ilmiah serta rencana kuliah bertahap hingga profesi bila ingin menjadi Apoteker'
    ],
    progressionStudy: [
      'Awal Kuliah: Kimia dasar/organik, biologi sel, anatomi manusia, serta pengantar ilmu farmasi',
      'Pertengahan–Akhir: Farmasetika (pembuatan sediaan), farmakologi (cara kerja obat), analisis mutu obat, dan praktik lapangan',
      'Setelah Lulus: Lulusan D3/S1 Farmasi menempuh jalur registrasi tenaga kefarmasian sesuai regulasi (atau S1 lanjut Profesi Apoteker untuk STRA) agar dapat berpraktik di apotek, rumah sakit, BPOM, atau industri obat/kosmetik'
    ],
    switchNote:
      'Pemahaman analisis laboratorium farmasi juga nyambung dengan pengujian mutu pangan, kosmetik aman, atau riset kesehatan.',
    futureNote:
      'Pengawasan keamanan obat, pengembangan bahan herbal terstandar, dan pelayanan farmasi klinik membuat keahlian farmasi tetap dibutuhkan.'
  },
  nutrition_healthy: {
    purposeAndScope:
      'Mempelajari kandungan zat gizi makanan, cara menyusun menu seimbang bagi individu maupun masyarakat, serta pengolahan makanan sehat dan bersih dalam kehidupan sehari-hari.',
    realLifeExamples: [
      'Menghitung komposisi karbohidrat, protein, sayur, dan buah agar porsi makan harian seimbang sesuai panduan gizi resmi',
      'Membantu penyuluhan gizi keluarga atau perencanaan menu sehat sekolah/instansi (pada jenjang lulusan D3/D4/S1 Gizi)',
      'Menyiapkan paket bekal makan siang rumahan rendah minyak berlebih atau minuman buah segar tanpa pemanis buatan berlebih (usaha pangan non-medis)'
    ],
    workSetting: 'Laboratorium gizi pangan, dapur institusi bersih, puskesmas/klinik (khusus Ahli Gizi ber-STR), atau dapur usaha katering sehat rumahan.',
    studySetting: 'Ruang kuliah sains pangan/gizi, laboratorium uji kandungan makanan, praktik dapur dietetik, dan penyuluhan masyarakat.',
    bizSetting: 'Dapur rumah yang bersih dan higienis untuk menyiapkan paket makanan sehat harian sistem pre-order (BUKAN terapi penyakit atau obat medis).',
    softSkills: [
      'Kepedulian terhadap kesehatan orang lain serta ketelatenan menakar bahan makanan bersih',
      'Kemampuan menjelaskan pilihan makanan sehat dengan bahasa sederhana yang tidak menggurui',
      'Disiplin menjaga kebersihan dapur, alat potong, dan kesegaran bahan baku setiap hari'
    ],
    challenges: [
      'Tindakan terapi gizi klinis untuk pasien sakit atau konsultasi diet medis HANYA berwenang dilakukan Ahli Gizi/Dietisien lulusan pendidikan tinggi Gizi ber-STR',
      'Pada usaha makanan sehat: bahan sayur dan lauk segar cepat layu/basi sehingga perlu pengaturan belanja dan pengantaran tepat waktu',
      'Harus konsisten menjaga rasa makanan sehat tetap enak agar pelanggan tidak cepat bosan'
    ],
    preparations: [
      'Pelajari pedoman resmi Isi Piringku dari Kemenkes dan coba amati keseimbangan porsi makanmu sendiri selama 3 hari',
      'Biasakan mencuci bahan makanan bersih, memisahkan talenan mentah dan matang, serta mencatat tanggal kedaluwarsa',
      'Jika ingin menjadi Ahli Gizi resmi di puskesmas/rumah sakit, siapkan rencana kuliah D3/D4/S1 Ilmu Gizi'
    ],
    progressionWork: [
      'Pemula (Lulusan SMK — Non-Klinis): Asisten Dapur Pangan Sehat atau Pelaksana Kebersihan Pengolahan Makanan',
      'Menengah (D3/D4/S1 Gizi + STR): Ahli Gizi di Puskesmas, Rumah Sakit, atau Dapur Institusi',
      'Lanjutan (Profesi Dietisien / Spesialis): Dietisien Klinis, Konsultan Gizi Masyarakat, atau Pengembang Pangan Sehat'
    ],
    progressionStudy: [
      'Awal Kuliah: Biokimia pangan, dasar ilmu gizi, anatomi pencernaan, dan keamanan pangan',
      'Pertengahan–Akhir: Penilaian status gizi, penyusunan menu dietetik, gizi masyarakat, dan praktik kerja lapangan di rumah sakit/puskesmas',
      'Setelah Lulus: Mengikuti uji kompetensi untuk STR Ahli Gizi agar dapat bekerja di fasilitas kesehatan, katering industri, atau program gizi masyarakat'
    ],
    progressionBiz: [
      'Tahap Awal: Katering paket bekal sehat harian sistem pre-order untuk teman sekolah, guru, atau pekerja kantor sekitar',
      'Berkembang: Layanan menu mingguan keluarga dengan variasi lauk bergizi dan izin pangan PIRT/Halal sesuai aturan produk',
      'Lanjutan: Rumah produksi pangan sehat harian dengan dapur terpisah dan standar higienis teruji'
    ],
    switchNote:
      'Pemahaman gizi dan higienitas pangan sangat mudah dibawa ke bidang tata boga profesional, pengawasan mutu pangan, atau edukasi kesehatan.',
    futureNote:
      'Meningkatnya kesadaran masyarakat terhadap pola makan seimbang dan pencegahan penyakit membuat bidang gizi dan pangan sehat terus tumbuh.'
  },
  k3_safety: {
    purposeAndScope:
      'Menjaga keselamatan kerja, pencegahan kecelakaan, ketersediaan alat pelindung diri (APD), serta kesehatan lingkungan kerja atau masyarakat agar semua orang beraktivitas dengan aman.',
    realLifeExamples: [
      'Memeriksa kelengkapan kotak P3K, masa berlaku tabung APAR (Alat Pemadam Api Ringan), dan rambu jalur evakuasi di bengkel atau pabrik',
      'Mengingatkan pekerja memakai helm keselamatan, kacamata las, atau sarung tangan sebelum mengoperasikan mesin',
      'Menganalisis risiko bahaya lingkungan kerja atau merancang kampanye pencegahan penyakit di masyarakat (pada jenjang D4/S1 K3 & Kesehatan Masyarakat)'
    ],
    workSetting: 'Area bengkel, pabrik manufaktur, gudang logistik, lokasi proyek, atau kantor dinas/lembaga kesehatan masyarakat.',
    studySetting: 'Ruang kuliah kesehatan masyarakat/K3, laboratorium pengukuran kebisingan/kualitas udara kerja, dan praktik inspeksi lapangan.',
    softSkills: [
      'Ketegasan yang sopan saat mengingatkan teman atau pekerja agar tidak melepas alat pelindung diri (APD)',
      'Kepekaan melihat potensi bahaya di sekitar (seperti kabel terkelupas, lantai licin, atau ventilasi kurang)',
      'Ketelitian mengisi formulir inspeksi dan laporan kejadian secara jujur'
    ],
    challenges: [
      'Posisi Ahli K3 Umum resmi atau tenaga kesehatan masyarakat berizin memerlukan pendidikan lanjutan dan sertifikasi resmi Kemnaker/Kemenkes',
      'Sebagian pekerja kadang menganggap aturan keselamatan memperlambat kerja, sehingga perlu kesabaran menjelaskan manfaatnya',
      'Menuntut kesiapan berjalan keliling area pabrik/bengkel untuk memeriksa kondisi fasilitas secara berkala'
    ],
    preparations: [
      'Biasakan mengamati posisi APAR, kotak P3K, dan jalur keluar aman di bengkel atau ruang praktik sekolahmu',
      'Pelajari arti warna rambu keselamatan kerja dasar (merah untuk larangan/api, kuning untuk peringatan, hijau untuk jalur selamat)',
      'Latih mencatat temuan ketidaktertiban lingkungan kerja dengan kalimat sopan dan jelas'
    ],
    progressionWork: [
      'Pemula (Lulusan SMK): Asisten Pemeriksa K3 Dasar & Kebersihan Area Kerja atau Pendukung Administrasi HSE',
      'Menengah (Sertifikasi K3 / Kuliah D4-S1): Staf K3 (HSE Officer) atau Petugas Promosi Kesehatan Kerja',
      'Lanjutan: Ahli K3 Umum Tersertifikasi, Manajer Keselamatan Pabrik, atau Analis Kesehatan Lingkungan'
    ],
    progressionStudy: [
      'Awal Kuliah: Dasar kesehatan masyarakat, epidemiologi, kesehatan lingkungan, dan pengantar K3',
      'Pertengahan–Akhir: Manajemen risiko kecelakaan kerja, higiene industri, promosi kesehatan, dan praktik lapangan di industri/puskesmas',
      'Setelah Lulus: Berpeluang di divisi K3/HSE perusahaan manufaktur dan konstruksi, puskesmas/dinas kesehatan, maupun lembaga lingkungan'
    ],
    switchNote:
      'Keahlian keselamatan kerja dan higienitas sangat nyambung dengan operasional manufaktur, teknik industri, pengelolaan lingkungan, dan farmasi/pangan.',
    futureNote:
      'Standar keselamatan kerja yang makin ketat di pabrik dan konstruksi membuat pengawasan K3 terus menjadi prioritas utama.'
  },
  gov_public_policy: {
    purposeAndScope:
      'Mempelajari cara kerja pemerintahan, tata kelola pelayanan publik (seperti layanan kependudukan, transportasi, dan tata kota), serta perumusan kebijakan daerah dan negara.',
    realLifeExamples: [
      'Menganalisis alur layanan masyarakat agar antrean, syarat berkas, dan pelayanan publik berjalan adil dan mudah dipahami warga',
      'Mempelajari pembagian kewenangan pemerintah pusat, pemerintah daerah, serta lembaga publik dalam menyusun anggaran dan aturan layanan',
      'Menyusun naskah ringkas usulan perbaikan program pelayanan warga berbasis data lapangan'
    ],
    workSetting: 'Kantor pemerintahan/pelayanan publik, lembaga penelitian kebijakan, organisasi masyarakat sipil, atau kantor sekretariat lembaga.',
    studySetting: 'Ruang kuliah diskusi tata kelola publik, seminar kebijakan, analisis dokumen pemerintahan, dan magang di instansi pelayanan masyarakat.',
    softSkills: [
      'Kemampuan membaca data sosial dan aturan pelayanan masyarakat secara objektif dan netral',
      'Keterampilan berdiskusi, mendengar aspirasi berbagai kelompok warga, dan menulis laporan runtut',
      'Integritas serta kepedulian terhadap kepentingan umum di atas kepentingan pribadi'
    ],
    challenges: [
      'Banyak membaca dokumen kebijakan, data pembangunan daerah, dan teks peraturan pelayanan publik',
      'Tidak menjanjikan kelulusan otomatis seleksi aparatur negara (CPNS/PPPK tetap melalui seleksi terbuka nasional sesuai formasi)',
      'Harus mampu berpikir jernih melihat masalah layanan masyarakat dari sudut pandang warga sekaligus keterbatasan aturan/anggaran'
    ],
    preparations: [
      'Biasakan membaca berita mengenai layanan masyarakat daerahmu lalu catat masalah dan ide perbaikannya secara adil',
      'Aktiflah dalam organisasi sekolah (OSIS/MPK/karang taruna) untuk merasakan proses musyawarah, rapat, dan menyusun tata tertib acara',
      'Latih menulis rangkuman 1 halaman yang padat dan bebas opini emosional'
    ],
    progressionStudy: [
      'Awal Kuliah: Pengantar ilmu politik, sistem administrasi negara, tata kelola pemerintahan daerah, dan sosiologi publik',
      'Pertengahan–Akhir: Analisis kebijakan publik, keuangan negara/daerah, pelayanan publik digital, dan magang instansi',
      'Setelah Lulus: Berpeluang di layanan administrasi publik/lembaga pemerintah (melalui seleksi resmi), lembaga riset kebijakan, hubungan eksternal perusahaan, atau LSM'
    ],
    switchNote:
      'Pemahaman kebijakan dan administrasi organisasi mudah dibawa ke bidang SDM, hubungan masyarakat (Humas), hukum bisnis, maupun manajemen operasional.',
    futureNote:
      'Digitalisasi layanan publik dan kebutuhan pemerintahan yang transparan membuat tenaga pengelola administrasi dan analis kebijakan publik terus diperlukan.'
  },
  library_archive: {
    purposeAndScope:
      'Menata, mengelompokkan, mendigitalkan, serta memeriksa kelengkapan arsip dokumen, buku, data input, dan berkas resmi agar setiap informasi mudah ditemukan kembali dan terjaga kerahasiaannya.',
    realLifeExamples: [
      'Menyalin data formulir fisik ke tabel spreadsheet atau sistem database dengan format penulisan tanggal dan nama yang seragam',
      'Mengelompokkan dokumen penting/arsip surat memakai nomor klasifikasi dan daftar isi berkas agar cepat ditemukan saat diaudit',
      'Memindai (scan) dokumen kertas menjadi arsip digital rapi serta menjaga daftar peminjaman buku atau berkas'
    ],
    workSetting: 'Ruang arsip kantor, perpustakaan sekolah/daerah, unit input data klinik/perusahaan, atau sekretariat dokumen.',
    studySetting: 'Ruang kuliah manajemen informasi/kearsipan, praktik pengatalogan buku dan arsip digital di laboratorium komputer/perpustakaan.',
    softSkills: [
      'Ketelitian luar biasa mengecek huruf, angka identitas, dan tanggal satu per satu agar nol salah ketik',
      'Konsistensi mengikuti aturan penamaan folder dan sistem pengelompokan dokumen',
      'Kejujuran dan tanggung jawab penuh menjaga kerahasiaan data pribadi atau berkas lembaga'
    ],
    challenges: [
      'Pekerjaan duduk di depan komputer atau rak arsip dalam durasi panjang menuntut konsentrasi stabil meski tugas berulang',
      'Salah satu huruf atau salah meletakkan map arsip bisa membuat berkas penting sulit dicari saat dibutuhkan mendadak',
      'Pada posisi arsip hukum/kontrak, lulusan SMK hanya mengelola administrasi berkas — bukan memberi pendapat hukum atau bertindak sebagai advokat'
    ],
    preparations: [
      'Latih kecepatan dan ketepatan mengetik 10 jari serta memeriksa ulang data angka memakai fitur filter di spreadsheet',
      'Coba rapikan dokumen tugas sekolah atau koleksi buku di rumah dengan memberi nama folder/kode kategori yang konsisten',
      'Biasakan membuat daftar isi ringkas pada setiap map berkas kegiatan'
    ],
    progressionWork: [
      'Pemula: Operator Input Data, Digitalisasi Arsip, Asisten Tata Usaha/Perpustakaan, atau Staf Pemberkasan Umum',
      'Menengah: Pengelola Arsip & Database Operasional (Arsiparis Junior) atau Koordinator Dokumen Kepatuhan',
      'Lanjutan: Pustakawan/Arsiparis Profesional (dengan kuliah D3/S1 Ilmu Perpustakaan/Kearsipan) atau Manajer Informasi Perusahaan'
    ],
    progressionStudy: [
      'Awal Kuliah: Pengantar ilmu informasi, sistem pengatalogan buku/arsip, klasifikasi dokumen, dan literasi informasi',
      'Pertengahan–Akhir: Digitalisasi arsip (e-archive), manajemen database perpustakaan, pelestarian dokumen, dan magang di arsip/perpustakaan',
      'Setelah Lulus: Berpeluang di perpustakaan sekolah/kampus/daerah, unit kearsipan instansi, atau pengelola pengetahuan (knowledge management) perusahaan'
    ],
    switchNote:
      'Kerapian mengolah data dan arsip merupakan bekal kuat untuk masuk ke administrasi kantor, logistik gudang, pembukuan, maupun QA data.',
    futureNote:
      'Peralihan dokumen kertas ke sistem arsip digital membuat perusahaan dan sekolah sangat membutuhkan orang yang teliti menata struktur data.'
  },
  micro_retail_warung: {
    purposeAndScope:
      'Melayani pembeli secara ramah, menata pajangan barang dengan rapi dan jelas harganya, mengecek stok dan tanggal kedaluwarsa, serta mencatat penjualan harian toko atau warung.',
    realLifeExamples: [
      'Menata barang dagangan di rak sesuai kategori dan prinsip FEFO (barang lebih dekat kedaluwarsanya diletakkan di depan)',
      'Menyambut pembeli di toko atau warung, membantu mencari barang, menghitung belanjaan di kasir, dan membalas pesan online',
      'Menawarkan produk ke mitra/toko sekitar secara sopan atau menyalurkan produk kenalan lewat sistem pesan dulu (reseller pre-order)'
    ],
    workSetting: 'Toko ritel, minimarket, warung kelontong lingkungan, ruang katalog toko online, atau area kunjungan mitra/bazar.',
    bizSetting: 'Teras rumah/rak kecil untuk warung kebutuhan harian, atau berjualan terkurasi lewat media sosial dan bazar tanpa menumpuk stok besar.',
    socialStyle: 'Sangat aktif berinteraksi langsung dengan pembeli setiap hari — menjaga senyum, kesopanan, dan kejelasan informasi produk.',
    workRhythmWork: 'Sering mengikuti pembagian shift toko (termasuk akhir pekan) dengan aktivitas berdiri melayani pembeli dan merapikan rak.',
    workRhythmBiz: 'Mengikuti jam ramai tetangga berbelanja (pagi dan sore/malam untuk warung) atau jadwal unggah katalog pre-order.',
    softSkills: [
      'Keramahan tulus dan kesabaran melayani berbagai karakter pembeli dari segala usia',
      'Kejujuran menghitung uang kembalian, mencatat kas harian, serta menyebutkan kondisi asli barang',
      'Kepekaan melihat barang mana yang paling cepat habis dan mana yang kurang laku'
    ],
    challenges: [
      'Untuk warung/toko sendiri: kesalahan mencatat utang-piutang kecil atau mengambil barang dagangan tanpa dicatat sering membuat modal habis tanpa terasa',
      'Pada pekerjaan ritel/kasir: jam kerja shift bisa jatuh di hari libur/akhir pekan dan menuntut ketahanan fisik berdiri lama',
      'Pada penjualan lapangan: harus siap menghadapi penolakan dengan sikap tetap sopan dan tidak putus asa'
    ],
    preparations: [
      'Latih memisahkan catatan uang pribadi dengan catatan uang barang secara disiplin di buku tulis atau spreadsheet HP',
      'Praktikkan menata 10 barang dengan label harga jelas dan mengecek tanggal kedaluwarsanya satu per satu',
      'Biasakan menjelaskan 2–3 kelebihan barang secara singkat dan jujur saat menawarkan kepada teman atau tetangga'
    ],
    progressionWork: [
      'Pemula: Kasir, Pramuniaga Toko, Penata Pajangan (Merchandiser), atau Staf Penjualan Pemula',
      'Menengah: Kepala Shift Toko, Koordinator Display & Stok Retail, atau Supervisor Penjualan',
      'Lanjutan: Kepala Toko/Store Manager atau Mengelola Usaha Ritel Sendiri'
    ],
    progressionBiz: [
      'Tahap Awal: Jualan sistem pre-order barang sekitar atau mulai rak kecil 10 kebutuhan paling sering dicari tetangga',
      'Berkembang: Pembukuan arus barang dan kas harian stabil, pelanggan tetap, serta memiliki NIB (Nomor Induk Berusaha) UMK',
      'Lanjutan: Menambah variasi produk sesuai permintaan warga atau membuka saluran pesan-antar lingkungan sekitar'
    ],
    switchNote:
      'Pengalaman melayani pembeli dan membaca selera barang sangat mudah dibawa ke bisnis e-commerce, logistik gudang, atau pemasaran digital.',
    futureNote:
      'Kebutuhan barang harian lingkungan dan belanja praktis tetap menjadi transaksi paling rutin di masyarakat.'
  },
  jastip_print_typing: {
    purposeAndScope:
      'Menyediakan jasa praktis yang membantu kebutuhan harian pelajar dan warga sekitar — mulai dari pengetikan/perapian dokumen umum, cetak dan jilid tugas mini, hingga jasa titip belanja lokal dan pengemasan paket.',
    realLifeExamples: [
      'Mengetik ulang tulisan fisik, merapikan margin dan daftar isi makalah sekolah, atau membuat tata letak CV pemula yang rapi',
      'Mencetak file tugas/foto memakai printer rumahan, melaminasi kartu, atau menjilid laporan serta menyediakan alat tulis dasar',
      'Membelikan barang titipan tetangga saat berangkat ke pasar/kota lalu mengemas paket kiriman secara aman agar tidak penyok'
    ],
    workSetting: 'Meja kerja komputer dan printer di rumah, atau rute terjadwal antar rumah tetangga dan titik kirim paket.',
    bizSetting: 'Bisa dijalankan dari meja belajar di rumah bermodal laptop, printer/alat tulis secukupnya, atau jadwal pergi ke pasar/pusat belanja.',
    socialStyle: 'Kombinasi fokus teliti mengetik/mengemas pesanan di meja kerja dan komunikasi ramah konfirmasi detail pesanan via chat.',
    workRhythmBiz: 'Sering ramai saat mendekati jadwal pengumpulan tugas sekolah, pembukaan lowongan kerja (untuk CV), atau jadwal belanja akhir pekan.',
    softSkills: [
      'Ketelitian membaca ulang daftar titipan, ukuran kertas cetak, atau ejaan nama sebelum dicetak dan dikirim',
      'Kejujuran menyertakan struk belanja asli (untuk jastip) dan menjaga kerahasiaan data CV/dokumen pelanggan',
      'Ketepatan waktu penyelesaian sesuai jam janji yang disepakati'
    ],
    challenges: [
      'Untuk jasa ketik: DILARANG membuat, mengubah, atau memalsukan dokumen resmi negara, ijazah, surat keterangan dokter, atau kontrak hukum berizin',
      'Pada jasa cetak mini: salah cetak kertas/warna karena lupa cek pratinjau halaman akan memakan biaya tinta dan kertas sendiri',
      'Pada jasa jastip: barang titipan yang ternyata salah ukuran/warna bisa menimbulkan komplain jika tidak dikonfirmasi foto dulu sebelum dibeli'
    ],
    preparations: [
      'Buat 2 contoh hasil perapian dokumen (CV pemula dan makalah berdaftar isi otomatis) sebagai contoh bukti kerapianmu',
      'Latih membuat formulir pesan singkat lewat chat (nama pemesan, jumlah lembar/barang, batas waktu, konfirmasi harga) agar tidak salah paham',
      'Catat biaya kertas, tinta, plastik pengemasan, dan ongkos jalan dengan jujur sebelum menentukan tarif jasa kecil'
    ],
    progressionBiz: [
      'Tahap Awal: Bantu cetak tugas teman, perapian format makalah/CV, atau jastip ke pasar/kota saat jadwal pergi pribadi',
      'Berkembang: Pelanggan tetap dari kalangan pelajar, mahasiswa kos, dan UMKM sekitar dengan jadwal antar rapi',
      'Lanjutan: Mengembangkan kios print & alat tulis mikro atau layanan pengemasan paket terpadu untuk penjual online sekitar'
    ],
    switchNote:
      'Kebiasaan menata dokumen, berbelanja teliti, dan mengemas barang menjadi bekal langsung untuk kerja administrasi kantor maupun logistik.',
    futureNote:
      'Selama ada sekolah, pencari kerja pemula, dan penjual online kecil di lingkungan sekitar, jasa dokumen dan titip kirim lokal selalu dibutuhkan.',
    bizEquipmentHint: 'Laptop/komputer, aplikasi pengolah kata/spreadsheet, serta printer atau timbangan & lakban pengemasan sesuai layanan yang dipilih.'
  },
  agro_food_processing: {
    purposeAndScope:
      'Menyortir hasil panen atau bahan pangan lokal lalu mengolahnya secara higienis menjadi produk kering, camilan, bumbu, atau minuman herbal kemasan yang lebih awet dan siap jual.',
    realLifeExamples: [
      'Menyortir singkong, pisang, jahe, atau sayuran segar berdasarkan ukuran, kematangan, dan kebersihannya',
      'Mencuci bersih, memotong seragam, mengeringkan atau memasak bahan tani menjadi keripik atau bubuk herbal',
      'Menimbang porsi kemasan, menyegel rapat (sealing), menempel label komposisi dan tanggal produksi secara bersih'
    ],
    workSetting: 'Dapur produksi pangan bersih, rumah pengemasan hasil tani, atau unit pengolahan pangan koperasi/UMKM.',
    bizSetting: 'Dapur bersih rumahan dengan area pencucian, pengeringan higienis, dan meja pengemasan bebas debu serta serangga.',
    socialStyle: 'Kerja telaten berfokus pada kebersihan, kesamaan ukuran potongan, dan ketepatan timbangan bersama kelompok kecil atau keluarga.',
    workRhythmWork: 'Teratur mengikuti jadwal datang bahan panen segar agar segera diolah sebelum layu atau turun mutunya.',
    workRhythmBiz: 'Mengikuti musim panen bahan lokal sekitar dan jadwal pengemasan pesanan toko/oleh-oleh.',
    softSkills: [
      'Kedisiplinan tinggi pada kebersihan tangan, celemek, penutup kepala, dan peralatan pengolah makanan',
      'Ketelitian menyortir bahan yang cacat atau busuk agar tidak merusak seluruh adonan/kemasan',
      'Konsistensi menakar bumbu dan berat isi di setiap bungkus'
    ],
    challenges: [
      'Produk pangan olahan yang dikemas tahan lama wajib memperhatikan aturan izin pangan PIRT/BPOM, informasi kedaluwarsa, serta kehalalan sesuai ketentuan',
      'Jika segel kemasan kurang rapat atau pengeringan kurang tuntas, camilan mudah melempem atau berjamur',
      'Harga dan ketersediaan bahan baku tani di pasar kadang berubah mengikuti musim panen'
    ],
    preparations: [
      'Uji coba mengolah 1 jenis hasil tani sekitar dalam porsi kecil (5 kemasan), catat tanggal buatnya, lalu cek kerenyahannya setelah 5–7 hari',
      'Biasakan memakai timbangan dapur, sarung tangan pangan bersih, dan mencatat komposisi bahan secara jujur',
      'Pelajari cara pengurusan NIB (Nomor Induk Berusaha) dan syarat dasar label kemasan pangan (nama produk, berat bersih, komposisi, kode produksi)'
    ],
    progressionWork: [
      'Pemula: Operator Sortir & Pengolahan Hasil Panen atau Kru Pengemasan Pangan Higienis',
      'Menengah: Koordinator Mutu Bahan Pangan Lokal atau Kepala Unit Produksi Olahan UMKM',
      'Lanjutan: Pengelola Rumah Kemas/Koperasi Pangan atau Analis Mutu Pangan (dengan kuliah Teknologi Pangan)'
    ],
    progressionBiz: [
      'Tahap Awal: Mengolah hasil kebun sekitar dalam skala uji coba kemasan kecil bersegel rapi untuk teman dan warga sekitar',
      'Berkembang: Mengurus NIB dan izin pangan PIRT/Halal sesuai aturan lalu menitipkan produk ke warung, toko oleh-oleh, atau pasar daring',
      'Lanjutan: Membangun rumah produksi pangan lokal bermitra langsung dengan petani sekitar'
    ],
    switchNote:
      'Keterampilan sortir mutu dan pengemasan pangan mudah dibawa ke industri makanan/minuman, logistik bahan segar, maupun usaha kuliner.',
    futureNote:
      'Mengubah hasil panen lokal menjadi produk olahan awet bernilai tambah terus didukung oleh program pemberdayaan pangan daerah.'
  },
  it_network_support: {
    purposeAndScope:
      'Memasang kabel jaringan komputer, mengatur koneksi internet/Wi-Fi, memperbaiki kendala ringan perangkat laptop/printer, serta mendampingi pengguna awam menyelesaikan masalah teknis sehari-hari.',
    realLifeExamples: [
      'Membuat konektor kabel jaringan (RJ45), mengecek sambungan internet, dan mengatur router Wi-Fi di sekolah atau kantor',
      'Membersihkan debu kipas laptop, memasang ulang sistem operasi/aplikasi kerja, serta mengatur printer jaringan',
      'Membimbing rekan kerja atau pengguna yang bingung saat komputer lambat atau aplikasi gagal masuk secara sabar'
    ],
    workSetting: 'Ruang server/IT kantor, laboratorium komputer sekolah, meja layanan helpdesk, atau kunjungan perbaikan ke rumah/usaha pelanggan.',
    bizSetting: 'Meja kerja servis kecil di rumah dilengkapi obeng presisi, flashdisk instalasi sistem resmi, dan perlengkapan jaringan dasar.',
    socialStyle: 'Banyak berinteraksi langsung mendengarkan keluhan pengguna yang sedang panik karena alatnya error, lalu menjelaskan solusinya dengan tenang.',
    workRhythmWork: 'Campuran jadwal pengecekan rutin perangkat dan penanganan cepat saat ada laporan jaringan putus atau komputer bermasalah.',
    workRhythmBiz: 'Mengikuti jadwal janji perbaikan perangkat milik teman, warga, atau usaha kecil di sekitar.',
    softSkills: [
      'Kesabaran tinggi mendengar pengguna awam menjelaskan masalah tanpa membuat mereka merasa bodoh',
      'Ketelitian mengikuti urutan pemeriksaan kendala dari hal paling sederhana (kabel/daya) sebelum membongkar sistem',
      'Kejujuran menjaga keamanan data pribadi yang ada di dalam laptop atau perangkat milik orang lain'
    ],
    challenges: [
      'Saat internet atau komputer kantor mati mendadak, pengguna sering terburu-buru meminta segera normal kembali',
      'Salah langkah saat instalasi sistem tanpa mencadangkan file penting (backup) bisa membuat data pemilik hilang',
      'Untuk layanan panggilan, perlu membawa alat kerja rapi dan memastikan keamanan perangkat selama perbaikan'
    ],
    preparations: [
      'Biasakan selalu bertanya dan mencadangkan data penting terlebih dahulu sebelum melakukan perbaikan sistem komputer',
      'Latih membuat panduan bergambar 1 halaman berisi solusi masalah ringan (misalnya printer macet atau Wi-Fi terputus) dengan bahasa awam',
      'Catat setiap gejala kendala dan cara perbaikannya di buku catatan teknis pribadi'
    ],
    progressionWork: [
      'Pemula: Teknisi Lab Komputer Sekolah, Staf IT Support Pemula, atau Agen Helpdesk Pengguna',
      'Menengah: Administrator Jaringan / Sistem Kantor atau Koordinator Layanan Teknis IT',
      'Lanjutan: Network Specialist, Infrastructure Lead, atau Konsultan Jaringan Usaha'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa bersih debu kipas laptop, pasang jaringan Wi-Fi rumahan, atau perbaikan perangkat lunak untuk kenalan sekitar',
      'Berkembang: Kontrak perawatan rutin bulanan komputer dan jaringan untuk warung internet, kantor kecil, atau klinik sekitar',
      'Lanjutan: Membuka bengkel servis komputer & penyedia instalasi jaringan lokal tepercaya'
    ],
    switchNote:
      'Keterampilan jaringan dan penanganan kendala sangat nyambung dengan pengoperasian sistem kantor, keamanan informasi dasar, maupun teknik elektronika.',
    futureNote:
      'Selama sekolah, toko, dan kantor memakai laptop, printer, dan jaringan Wi-Fi, tenaga teknisi IT support yang jujur dan komunikatif selalu dibutuhkan.'
  },
  culinary_beverage_pastry: {
    purposeAndScope:
      'Mengolah bahan makanan dan minuman — mulai dari persiapan bahan di dapur, meracik minuman kopi/teh/buah, hingga membuat kue basah atau roti pesanan acara — dengan rasa konsisten dan kebersihan tinggi.',
    realLifeExamples: [
      'Menimbang tepung, gula, atau takaran sirup dan susu memakai timbangan dan gelas ukur agar rasa setiap porsi tetap sama',
      'Menyiapkan bahan dapur (mencuci, memotong seragam, menyeduh minuman) serta menjaga meja kerja tetap bersih di jam sibuk',
      'Mengemas kue kotak acara (snack box) atau minuman pre-order dalam kemasan tertutup bersih dan tepat waktu antar'
    ],
    workSetting: 'Dapur kafe/kedai minuman, dapur restoran atau toko roti, atau dapur rumah bersih untuk pesanan acara.',
    studySetting: 'Laboratorium dapur tata boga, praktik tata hidang, kelas sanitasi pangan, dan proyek penyajian menu.',
    bizSetting: 'Dapur rumah higienis dengan meja racik rapi untuk produksi sistem pre-order (PO) kue/camilan maupun kedai minuman kecil.',
    softSkills: [
      'Disiplin menimbang dan mengikuti urutan resep tanpa mengira-ngira asal',
      'Kebersihan diri (cuci tangan, celemek bersih, rambut tertutup) dan kerapian merapikan alat sesudah masak',
      'Kecepatan gerak dan ketenangan kerja tim saat pesanan datang bersamaan'
    ],
    challenges: [
      'Dalam pekerjaan dapur/kafe: sering berdiri berjam-jam di ruang hangat serta paling sibuk di jam makan, akhir pekan, dan hari libur',
      'Dalam usaha kue/minuman: makanan basah dan minuman segar tidak tahan lama sehingga perhitungan jumlah pre-order harus cermat agar tidak terbuang',
      'Produk makanan atau minuman kemasan tahan lama wajib memperhatikan izin PIRT dan kehalalan sesuai ketentuan produk'
    ],
    preparations: [
      'Latih 2 menu minuman atau kue andalan dengan mencatat takaran gram/mililiter secara persis di buku resep pribadi',
      'Biasakan menyiapkan semua bahan tertakar (mise en place) sebelum menyalakan kompor atau blender',
      'Uji coba ketahanan kemasan selama perjalanan antar agar makanan/minuman tidak tumpah atau hancur'
    ],
    progressionWork: [
      'Pemula: Kru Dapur Persiapan, Barista Pemula, atau Asisten Pembuat Kue/Roti',
      'Menengah: Cook/Baker Terampil, Head Barista, atau Koordinator Dapur Produksi',
      'Lanjutan: Kepala Dapur (Head Chef), Manajer Kafe/Restoran, atau Pemilik Usaha Kuliner Mandiri'
    ],
    progressionBiz: [
      'Tahap Awal: Membuka pesanan kue atau minuman pre-order mingguan (5–10 porsi) ke teman kelas, guru, atau tetangga',
      'Berkembang: Menerima pesanan snack acara kantor/sekolah, mengurus NIB UMK dan izin pangan relevan, serta membuka titik jual tetap',
      'Lanjutan: Mengembangkan rumah produksi kue atau kedai minuman khas bersama tim dapur kecil'
    ],
    switchNote:
      'Keterampilan menakar bahan dan higienitas dapur mudah diarahkan ke pengolahan hasil pangan tani, perhotelan, maupun katering sehat.',
    futureNote:
      'Makanan ringan, minuman harian, dan konsumsi acara komunitas merupakan kebutuhan rutin yang selalu hidup di lingkungan sekolah dan masyarakat.'
  },
  hospitality_tourism: {
    purposeAndScope:
      'Memberikan sambutan hangat dan informasi akurat kepada tamu di hotel, penginapan, loket wisata, maupun merancang serta memandu perjalanan wisata lokal yang aman dan berkesan.',
    realLifeExamples: [
      'Menyambut tamu datang dengan ramah di meja resepsionis, memeriksa daftar pesanan kamar/tiket, dan menjelaskan fasilitas dengan sopan',
      'Merapikan kamar penginapan atau area publik agar bersih, wangi, dan nyaman ditempati tamu',
      'Merancang rute jalan kaki wisata kampung/kuliner lokal dan memandu pengunjung sambil bercerita sejarah atau budaya setempat'
    ],
    workSetting: 'Lobi resepsionis hotel/penginapan, pusat informasi wisata, atau rute kunjungan destinasi wisata dan kuliner lokal.',
    studySetting: 'Ruang simulasi resepsionis/kamar hotel kampus, kelas bahasa layanan tamu, serta praktik lapangan wisata daerah.',
    bizSetting: 'Layanan wisata jalan kaki atau paket jelajah lokal yang dimulai dari titik kumpul strategis dengan rute aman terencana.',
    softSkills: [
      'Keramahan alami, bahasa tubuh sopan, serta artikulasi suara yang jelas dan enak didengar',
      'Ketenangan menghadapi keluhan tamu atau perubahan cuaca/rute di lapangan tanpa panik',
      'Kepedulian terhadap keamanan dan kenyamanan setiap peserta rombongan atau tamu penginapan'
    ],
    challenges: [
      'Jam kerja perhotelan dan wisata justru memuncak saat akhir pekan, musim liburan, dan hari besar',
      'Pemanduan resmi di objek wisata cagar budaya atau destinasi khusus tertentu mensyaratkan lisensi pemandu wisata daerah yang berlaku',
      'Harus siap berbahasa sopan lintas budaya dan memiliki ketahanan fisik berjalan atau berdiri cukup lama'
    ],
    preparations: [
      'Latih kalimat sapaan ramah dan petunjuk arah sederhana dalam Bahasa Indonesia sopan dan Bahasa Inggris dasar',
      'Coba rancang 1 rute jalan kaki tematik berdurasi 1–2 jam di sekitar daerahmu lengkap dengan titik istirahat dan cerita menariknya',
      'Biasakan mengecek kerapian penampilan diri serta ketepatan jam janji'
    ],
    progressionWork: [
      'Pemula: Resepsionis Pemula, Kru Housekeeping, atau Petugas Informasi Wisata',
      'Menengah: Koordinator Layanan Tamu (Guest Relations), Supervisor Perhotelan, atau Pemandu Wisata Berlisensi',
      'Lanjutan: Manajer Penginapan/Hotel atau Pengembang Paket Wisata Daerah'
    ],
    progressionBiz: [
      'Tahap Awal: Memandu tur jalan kaki tematik kecil (kuliner/sejarah lokal) untuk komunitas atau teman sekolah di akhir pekan',
      'Berkembang: Bekerja sama dengan pemilik kuliner/kerajinan setempat membuat paket wisata pengalaman setengah hari',
      'Lanjutan: Merintis biro perjalanan atau pemanduan wisata berizin resmi sesuai regulasi pariwisata daerah'
    ],
    switchNote:
      'Keterampilan melayani tamu dan mengoordinasi jadwal sangat nyambung dengan penyelenggaraan acara (EO), layanan pelanggan, dan bahasa asing.',
    futureNote:
      'Minat wisata lokal, wisata kuliner, dan pengalaman budaya daerah terus berkembang dengan dukungan promosi media sosial.'
  },
  accounting_finance: {
    purposeAndScope:
      'Mencatat arus uang masuk dan keluar, memeriksa kecocokan nota transaksi, menyusun rekap penjualan atau laporan keuangan dasar, serta mempelajari cara kerja ekonomi dan perpajakan usaha.',
    realLifeExamples: [
      'Memasukkan nota belanja dan pemasukan harian toko/UMKM ke buku kas atau spreadsheet dengan saldo yang selalu cocok',
      'Membantu pemilik usaha kecil merekap jumlah pesanan, menghitung selisih biaya bahan dan penjualan kotor, serta membuat tagihan rapi',
      'Mempelajari akuntansi laporan keuangan, perpajakan, serta ekonomi pembangunan daerah (di jenjang pendidikan tinggi)'
    ],
    workSetting: 'Meja kasir atau ruang administrasi keuangan toko, koperasi, kantor usaha kecil-menengah, maupun meja kerja komputer mandiri.',
    studySetting: 'Ruang kelas hitungan akuntansi dan ekonomi, praktikum spreadsheet akuntansi, serta analisis laporan usaha nyata.',
    bizSetting: 'Layanan pembukuan jarak jauh atau kunjungan berkala ke pemilik UMKM sekitar dengan laptop dan aplikasi spreadsheet.',
    softSkills: [
      'Kejujuran dan integritas tinggi karena berhubungan langsung dengan catatan uang serta bukti transaksi',
      'Ketelitian memeriksa angka nol, koma, dan bukti nota agar laporan tidak selisih',
      'Kesabaran menjelaskan kondisi catatan keuangan dengan bahasa sederhana kepada pemilik usaha'
    ],
    challenges: [
      'Kesalahan satu angka saat mencatat transaksi membuat waktu pencocokan (rekonsiliasi) menjadi panjang',
      'Posisi Akuntan Publik bersertifikat atau Konsultan Pajak resmi WAJIB menempuh pendidikan tinggi S1/Profesi dan ujian sertifikasi yang berlaku — lulusan SMK memulai di pencatatan kas dasar',
      'Pada jasa admin UMKM: sering menerima tumpukan nota kertas yang belum rapi dari pemilik usaha sehingga perlu telaten merapikannya'
    ],
    preparations: [
      'Latih membuat buku kas sederhana 1 minggu (pemasukan, pengeluaran, sisa saldo) di spreadsheet memakai rumus penjumlahan otomatis',
      'Biasakan selalu memfoto atau menyimpan setiap nota sebelum memasukkannya ke catatan angka',
      'Jika bercita-cita menjadi akuntan atau analis keuangan profesional, siapkan rencana kuliah D3/S1 Akuntansi atau Ekonomi'
    ],
    progressionWork: [
      'Pemula (Lulusan SMK): Kasir Pencatat Transaksi, Staf Pembukuan Dasar, atau Admin Rekap Penjualan UMKM',
      'Menengah (D3/S1): Staf Akuntansi Junior, Staf Pajak, atau Analis Keuangan Usaha',
      'Lanjutan (S1 + Pendidikan Profesi): Akuntan Bersertifikat, Auditor, atau Manajer Keuangan'
    ],
    progressionStudy: [
      'Awal Kuliah: Pengantar akuntansi, matematika ekonomi, dasar manajemen keuangan, dan pengantar ekonomi mikro/makro',
      'Pertengahan–Akhir: Akuntansi keuangan dan biaya, perpajakan, pemeriksaan laporan (audit), serta analisis kebijakan ekonomi',
      'Setelah Lulus: Berpeluang di perbankan, bagian keuangan perusahaan, kantor akuntan/pajak (sesuai syarat sertifikasi), atau instansi ekonomi'
    ],
    progressionBiz: [
      'Tahap Awal: Membantu 1–2 pedagang/UMKM sekitar merapikan catatan pesanan dan buku kas harian memakai template spreadsheet rapi',
      'Berkembang: Layanan rekap pembukuan sederhana mingguan/bulanan tetap untuk beberapa toko online atau warung berkembang',
      'Lanjutan: Jasa pendampingan administrasi keuangan usaha kecil (atau konsultan akuntansi resmi setelah memenuhi gelar & izin profesi)'
    ],
    switchNote:
      'Keterampilan mencatat angka dan membaca arus kas menjadi bekal paling berharga bila suatu saat mengelola usaha sendiri atau masuk ke bidang logistik.',
    futureNote:
      'Semua usaha besar maupun mikro membutuhkan catatan keuangan yang bersih dan akurat agar bisa bertahan sehat dan dipercaya mitra.'
  },
  event_ops_decor: {
    purposeAndScope:
      'Merancang susunan acara (rundown), mengatur penataan meja/sudut dekorasi sederhana, menyiapkan perlengkapan lapangan, dan mendokumentasikan jalannya kegiatan sekolah, komunitas, atau keluarga.',
    realLifeExamples: [
      'Menyusun daftar cek alat, jadwal acara per menit (rundown), dan pembagian tugas panitia agar acara berjalan mulus',
      'Menata kain latar, bunga kertas/hiasan meja, dan pencahayaan sudut foto ulang tahun keluarga atau pameran kelas',
      'Mengatur alur tamu datang di lokasi bazar atau seminar agar tidak menumpuk di pintu masuk'
    ],
    workSetting: 'Lokasi bazar, gedung seminar, aula sekolah, panggung komunitas, atau halaman acara keluarga.',
    bizSetting: 'Ruang simpan properti dekorasi ringan di rumah serta lokasi acara klien saat pemasangan dan pembongkaran.',
    socialStyle: 'Sangat dinamis bekerja dalam tim lapangan — berkoordinasi cepat dengan MC, penyewa alat, tamu, dan pemilik acara.',
    workRhythmWork: 'Sering mengikuti jadwal pelaksanaan acara yang jatuh pada akhir pekan atau jam di luar jam kantor biasa.',
    workRhythmBiz: 'Padat menjelang hari pelaksanaan acara (persiapan & pemasangan), lalu masa tenang merawat properti sesudah acara selesai.',
    softSkills: [
      'Kemampuan tetap tenang dan sigap mencari jalan keluar jika jadwal acara tiba-tiba molor atau alat kurang',
      'Koordinasi tim yang jelas tanpa menyalahkan pihak lain saat situasi lapangan ramai',
      'Kerapian menata warna dekorasi dan memeriksa keamanan kabel atau penyangga agar tidak roboh'
    ],
    challenges: [
      'Waktu pemasangan (loading) dan pembongkaran sering sempit sehingga menuntut kerja cepat dan fisik bugar',
      'Jadwal kerja sering jatuh di akhir pekan saat teman-teman lain sedang libur',
      'Pada usaha dekorasi: properti dekor mudah rusak atau kotor jika tidak dibersihkan dan disimpan rapi setelah dipakai'
    ],
    preparations: [
      'Ikut aktif menjadi panitia seksi acara atau perlengkapan pada kegiatan OSIS, pentas seni, atau bazar sekolah',
      'Latih membuat lembar rundown + checklist barang lengkap dengan nama penanggung jawabnya untuk satu acara mini',
      'Foto sudut dekorasi sederhana yang pernah kamu rapikan (sebelum & sesudah) sebagai contoh bukti visual'
    ],
    progressionWork: [
      'Pemula: Kru Lapangan Acara, Asisten Perlengkapan Pameran, atau Staf Registrasi Tamu',
      'Menengah: Koordinator Lapangan Acara (Stage/Floor Manager) atau Perencana Acara Junior',
      'Lanjutan: Event Producer atau Pemilik Jasa Penyelenggara Acara (EO) & Dekorasi'
    ],
    progressionBiz: [
      'Tahap Awal: Jasa dekorasi sudut foto sederhana (engagement/ulang tahun kecil) atau panitia pelaksana acara kecil kenalan',
      'Berkembang: Paket dekorasi tematik lengkap dengan properti sewa terawat dan foto dokumentasi ringan',
      'Lanjutan: Usaha jasa penyelenggara acara (EO) dan dekorasi lokal bersama tim kreatif kecil'
    ],
    switchNote:
      'Pengalaman mengatur jadwal dan perlengkapan acara mudah diarahkan ke bidang perhotelan, komunikasi pemasaran, maupun administrasi operasional.',
    futureNote:
      'Kegiatan komunitas, pameran sekolah, bazar UMKM, dan acara keluarga selalu memerlukan tim lapangan yang sigap dan terorganisir.'
  },
  education_nonformal_vs_formal: {
    purposeAndScope:
      'Mendampingi proses belajar peserta didik melalui bimbingan nonformal, tata kelola sekolah/lab, kelas kreatif anak, hingga pendidikan guru formal bersertifikat pada jenjang sarjana.',
    realLifeExamples: [
      'Menjelaskan ulang materi pelajaran atau komputer dasar secara sabar kepada siswa SD/SMP atau adik kelas (tutor/les privat)',
      'Menyiapkan komputer atau alat praktik sebelum jam belajar dimulai serta menjaga tata tertib arsip sekolah (peran laboran/tata usaha)',
      'Merancang metode mengajar, permainan logika kelas, dan evaluasi belajar siswa sekolah formal (setelah lulus S1 Kependidikan & PPG)'
    ],
    workSetting: 'Ruang kelas sekolah, ruang tata usaha/perpustakaan, laboratorium praktik belajar, atau ruang belajar rumahan yang tenang.',
    studySetting: 'Ruang kuliah kependidikan, latihan mengajar (microteaching), dan praktik langsung mendampingi kelas di sekolah mitra (PLP).',
    bizSetting: 'Sudut belajar rumahan atau aula komunitas yang aman dan nyaman untuk bimbingan PR atau kelas hobi anak.',
    softSkills: [
      'Kesabaran luar biasa mengulang penjelasan memakai perumpamaan berbeda saat siswa belum paham',
      'Kehangatan sikap yang membuat anak atau teman belajar berani bertanya tanpa takut ditertawakan',
      'Kerapian menyiapkan lembar latihan, jadwal belajar, atau inventaris alat praktik kelas'
    ],
    challenges: [
      'BATAS REGULASI TEGAS: Menjadi guru sekolah formal (ASN maupun swasta tetap) WAJIB menempuh S1 Kependidikan/relevan dan Pendidikan Profesi Guru (PPG) sesuai UU Guru dan Dosen',
      'Menghadapi rentang perhatian anak atau remaja yang cepat bosan menuntut variasi cara belajar',
      'Pada posisi tata usaha/laboran sekolah: peran utamanya adalah dukungan administrasi atau alat praktik, bukan mengajar mata pelajaran utama'
    ],
    preparations: [
      'Mulai berlatih menyederhanakan satu topik sulit menjadi penjelasan 5 menit memakai contoh benda sekitar',
      'Biasakan membuat catatan belajar rapi bergambar atau tabel agar mudah dipakai teman belajar bersama',
      'Jika ingin menjadi guru formal atau pengajar profesional, pelajari persyaratan kuliah S1 kependidikan dan PPG sejak awal'
    ]
  },
  software_web_dev: {
    purposeAndScope:
      'Membangun, menguji, serta merawat tampilan dan logika aplikasi web atau sistem informasi agar berfungsi cepat, mudah dipakai pengguna, dan bebas kesalahan teknis.',
    realLifeExamples: [
      'Menulis kode HTML, CSS, JavaScript untuk membuat halaman web interaktif dan menguji tombol/formulir agar tidak error',
      'Memetakan alur data transaksi toko atau kantin sekolah menjadi tampilan aplikasi kasir dan rekap stok sederhana',
      'Mengecek kesesuaian tampilan aplikasi di layar HP maupun laptop serta mencatat temuan bug untuk diperbaiki tim'
    ],
    workSetting: 'Studio perangkat lunak, kantor tim IT usaha, atau ruang kerja mandiri dengan komputer dan koneksi internet stabil.',
    studySetting: 'Laboratorium pemrograman komputer, diskusi struktur data/algoritma, serta proyek pembuatan aplikasi secara tim.',
    bizSetting: 'Bisa dijalankan dari rumah dengan laptop untuk membuat website profil UMKM, aplikasi kasir mikro, atau template sistem digital.',
    softSkills: [
      'Kesabaran membaca pesan kesalahan (error) satu per satu dan menelusuri penyebabnya secara logis',
      'Ketelitian menjaga kerapian struktur kode dan mengecek tampilan di berbagai ukuran layar',
      'Kemampuan mendengar kebutuhan pemilik usaha/pengguna awam lalu menyederhanakannya menjadi fitur yang jelas'
    ],
    challenges: [
      'Aplikasi yang tampak sederhana di luar sering memerlukan pemecahan bug dan pengujian berbagai kemungkinan salah input pengguna',
      'Bahasa pemrograman serta alat pengembang cepat diperbarui sehingga perlu rajin mempelajari dasar yang kuat',
      'Duduk berjam-jam di depan layar menuntut manajemen istirahat mata dan punggung secara teratur'
    ],
    preparations: [
      'Mulai dari halaman web statis sederhana (HTML & CSS) lalu tambahkan satu interaksi kecil memakai JavaScript dan simpan di portofolio',
      'Biasakan menggambar alur langkah (flowchart) di kertas sebelum mulai mengetik kode program',
      'Catat kesalahan teknis yang berhasil kamu perbaiki beserta solusinya'
    ]
  },
  ui_product_design_anim: {
    purposeAndScope:
      'Merancang bentuk produk pakai, animasi bergerak, karya film pendek, serta tata letak ruang interior atau pengalaman visual digital yang nyaman dilihat dan mudah digunakan.',
    realLifeExamples: [
      'Membuat papan cerita (storyboard) 6 adegan dan menggerakkan karakter animasi 2D/3D atau video pendek',
      'Merancang sketsa ergonomis benda pakai harian, kerajinan kustom, atau tata letak ruangan agar alur gerak dan cahayanya nyaman',
      'Mendesain alur layar aplikasi (UI/UX) dan kemasan produk agar jelas terbaca oleh pengguna'
    ],
    workSetting: 'Studio animasi/desain, workshop kriya/produk, studio arsitektur interior, atau ruang kerja komputer grafis.',
    studySetting: 'Studio gambar/maket, laboratorium multimedia 3D/animasi, serta sesi ulasan dan kritik karya secara berkala.',
    bizSetting: 'Meja kerja rumah untuk merancang produk kerajinan kustom (pre-order) atau jasa desain visual/animasi digital.',
    softSkills: [
      'Kepekaan melihat kenyamanan penggunaan (bukan hanya bagus dilihat, tetapi juga mudah dipakai/dipegang)',
      'Ketelatenan mengerjakan detail gerakan per detik (animasi) atau penyelesaian akhir produk kerajinan',
      'Keterbukaan mendengarkan masukan pengguna atau dosen saat karya diuji coba'
    ],
    challenges: [
      'Seleksi masuk perguruan tinggi negeri jalur SNPMB untuk rumpun Seni & Desain umumnya mensyaratkan unggahan portofolio karya resmi',
      'Proses pembuatan animasi, maket interior, atau kerajinan tangan membutuhkan ketekunan waktu berjam-jam',
      'Harus menyeimbangkan kebebasan ide kreatif dengan kebutuhan nyata serta anggaran bahan/waktu pemesan'
    ],
    preparations: [
      'Buat kebiasaan menggambar sketsa pengamatan benda nyata atau tata letak ruang di buku sketsa setiap minggu',
      'Kumpulkan karya orisinal buatan sendiri (sketsa, kerajinan, storyboard, atau model 3D awal) dalam portofolio rapi',
      'Latih menerima kritik terhadap karya dengan mencatat bagian mana yang bisa disempurnakan'
    ]
  }
};

function getCandidateSubCluster(candidate: RecommendationCandidate): string | null {
  switch (candidate.id) {
    case 'PROD_JOB_GARMENT_OPERATOR':
    case 'PROD_BIZ_TAILOR_ALTERATION':
    case 'PROD_BIZ_MICRO_WORKSHOP':
      return 'garment_tailor';
    case 'PROD_JOB_CIVIL_DRAFTER':
    case 'PROD_EDU_CIVIL_ENG':
    case 'PROD_EDU_CIVIL_INDUSTRIAL':
    case 'PROD_EDU_INTERIOR_ARCH':
      return 'civil_construction';
    case 'PROD_JOB_WELDING_FAB':
      return 'welding_metal';
    case 'PROD_JOB_ELEC_MAINT':
    case 'PROD_JOB_HVAC_APPLIANCE':
    case 'PROD_EDU_APPLIED_TECH':
    case 'PROD_EDU_ELECTRICAL_S1':
      return 'electrical_hvac';
    case 'PROD_BIZ_DEVICE_CLEAN_CARE':
      return 'cleaning_care_micro';
    case 'PROD_JOB_PHOTO_STUDIO':
    case 'PROD_JOB_PRINT_OPERATOR':
    case 'PROD_BIZ_PHOTO_GRAD_STUDIO':
      return 'photo_print_studio';
    case 'PROD_JOB_BROADCAST_AUDIO':
    case 'PROD_EDU_JOURNALISM':
      return 'audio_broadcast';
    case 'PROD_JOB_PHARMACY_LOGISTICS':
      return 'pharmacy_support';
    case 'PROD_EDU_PHARMACY':
      return 'pharmacy_study';
    case 'PROD_EDU_NUTRITION':
    case 'PROD_BIZ_HEALTHY_CATERING':
      return 'nutrition_healthy';
    case 'PROD_JOB_K3_SAFETY_SUPPORT':
    case 'PROD_EDU_HEALTH_PUBLIC':
      return 'k3_safety';
    case 'PROD_EDU_GOV_POLITICS':
      return 'gov_public_policy';
    case 'PROD_EDU_LIBRARY_ARCHIVE':
    case 'PROD_JOB_DATA_ENTRY':
    case 'PROD_JOB_PARALEGAL_SUPPORT':
    case 'PROD_JOB_LAW_ADMIN':
      return 'library_archive';
    case 'PROD_BIZ_WARUNG_KELONTONG':
    case 'PROD_BIZ_CLOTHING_RETAIL':
    case 'PROD_BIZ_SOCIAL_COMMERCE':
    case 'PROD_JOB_STORE_MERCHANDISER':
    case 'PROD_JOB_CUSTOMER_RETAIL':
    case 'PROD_JOB_SALES_FIELD':
    case 'PROD_JOB_E_COMMERCE_OPS':
      return 'micro_retail_warung';
    case 'PROD_BIZ_JASTIP_PACKING':
    case 'PROD_BIZ_MINI_PRINT_ATK':
    case 'PROD_BIZ_ADMIN_TYPING_SERVICE':
      return 'jastip_print_typing';
    case 'PROD_JOB_FOOD_PROCESSING':
    case 'PROD_BIZ_AGRO_PROCESSED':
      return 'agro_food_processing';
    case 'PROD_JOB_TECH_SYS':
    case 'PROD_JOB_TECH_SUPPORT':
    case 'PROD_JOB_LAB_ASSISTANT_EDU':
    case 'PROD_BIZ_LOW_CAP_SERVICE':
      return 'it_network_support';
    case 'PROD_JOB_WEB_DEV_JUNIOR':
    case 'PROD_EDU_SYSTEM_ANALYSIS':
    case 'PROD_EDU_INFO_SYSTEMS':
    case 'PROD_EDU_RPL_VOKASI':
    case 'PROD_BIZ_TECH_SOLUTION':
    case 'PROD_BIZ_DIGITAL_MICRO_PROD':
      return 'software_web_dev';
    case 'PROD_JOB_CULINARY_KITCHEN':
    case 'PROD_EDU_CULINARY':
    case 'PROD_BIZ_CULINARY_MICRO':
    case 'PROD_BIZ_BEVERAGE_SNACK_STALL':
    case 'PROD_BIZ_PASTRY_CAKE_ORDER':
      return 'culinary_beverage_pastry';
    case 'PROD_JOB_HOSPITALITY_CREW':
    case 'PROD_EDU_HOSPITALITY':
    case 'PROD_BIZ_COMMUNITY_TOUR':
      return 'hospitality_tourism';
    case 'PROD_JOB_FINANCE_CLERK':
    case 'PROD_EDU_ACCOUNTING':
    case 'PROD_EDU_ECON_DEV':
    case 'PROD_BIZ_BIZ_BOOKKEEPING':
      return 'accounting_finance';
    case 'PROD_JOB_EVENT_OPS':
    case 'PROD_BIZ_EVENT_DECOR':
      return 'event_ops_decor';
    case 'PROD_JOB_EDU_SOCIAL':
    case 'PROD_JOB_SCHOOL_ADMIN':
    case 'PROD_EDU_TEACHER_PGSD':
    case 'PROD_EDU_TEACHER_SUBJ':
    case 'PROD_EDU_MATH_SCI_TEACHER':
    case 'PROD_BIZ_TUTORING_SERVICE':
    case 'PROD_BIZ_CREATIVE_WORKSHOP_CLASS':
      return 'education_nonformal_vs_formal';
    case 'PROD_EDU_PRODUCT_ANIMATION':
    case 'PROD_BIZ_CRAFT_CUSTOM':
      return 'ui_product_design_anim';
    default:
      return null;
  }
}

function sanitizeUniqueLines(items: string[], maxCount: number): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of items) {
    const clean = raw.replace(/\s+/g, ' ').trim();
    if (!clean) continue;
    const key = clean.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(clean);
    }
    if (out.length >= maxCount) break;
  }
  return out;
}

function cleanConstraintLine(raw: string): string {
  return raw
    .replace(/^Status Sebagian Terverifikasi:\s*/i, '')
    .replace(/^Catatan Wajib:\s*/i, '')
    .replace(/\s*\(bukan lowongan aktif\)\.?/gi, '')
    .trim();
}

function cleanOverviewDescription(raw: string): string {
  return raw.replace(/\s*\(bukan lowongan aktif\)/gi, '').trim();
}

function resolveCandidateDomainId(candidate: RecommendationCandidate): CareerDomainId {
  if (candidate.domainId) return candidate.domainId;
  const visual = inferDomainVisual(candidate);
  switch (visual) {
    case 'tech':
      return 'teknologi_informatika';
    case 'engineering':
      return 'teknik_industri';
    case 'law':
      return 'hukum_keadilan';
    case 'language':
      return 'bahasa_sastra';
    case 'education':
      return 'pendidikan';
    case 'health':
      return 'kesehatan';
    case 'business':
      return 'bisnis_ekonomi';
    case 'communication':
      return 'komunikasi_media';
    case 'psychology':
      return 'psikologi_sosial';
    case 'creative':
      return 'seni_desain';
    case 'agro':
      return 'pertanian_lingkungan';
    case 'hospitality':
      return 'pariwisata_kuliner';
    case 'admin':
      return 'administrasi_logistik';
  }
}

function buildEffectiveSeed(candidate: RecommendationCandidate): DomainInsightSeed {
  const domainId = resolveCandidateDomainId(candidate);
  const baseSeed = DOMAIN_INSIGHT_SEEDS[domainId];
  const subKey = getCandidateSubCluster(candidate);
  if (!subKey || !SUB_CLUSTER_OVERRIDES[subKey]) {
    return baseSeed;
  }
  const ov = SUB_CLUSTER_OVERRIDES[subKey];
  return {
    ...baseSeed,
    ...ov
  };
}

function resolveActivityHeading(candidate: RecommendationCandidate): string {
  const path = candidate.pathCategory;
  if (path === 'kuliah') return 'Contoh Materi & Aktivitas Belajar di Kuliah';
  if (path === 'wirausaha') return 'Aktivitas Operasional & Keseharian Usaha';

  const dom = resolveCandidateDomainId(candidate);
  switch (dom) {
    case 'seni_desain':
    case 'komunikasi_media':
      return 'Aktivitas Kreatif & Produksi Sehari-hari';
    case 'administrasi_logistik':
    case 'bisnis_ekonomi':
    case 'hukum_keadilan':
      return 'Aktivitas Administrasi, Data & Layanan Sehari-hari';
    case 'pendidikan':
    case 'psikologi_sosial':
      return 'Aktivitas Pendampingan & Layanan Sosial Sehari-hari';
    case 'pariwisata_kuliner':
      return 'Aktivitas Pelayanan & Produksi Sehari-hari';
    default:
      return 'Aktivitas Teknis & Tanggung Jawab Sehari-hari';
  }
}

export function buildCareerInsightForCandidate(
  candidate: RecommendationCandidate
): CareerInsightProfile {
  const meta = candidate.productionMetadata;
  if (meta?.careerInsight) {
    return meta.careerInsight;
  }

  const seed = buildEffectiveSeed(candidate);
  const path = candidate.pathCategory;

  // 1. Mengenal Bidang (Candidate-grounded overview, scope & concrete examples)
  const cleanSimple = cleanOverviewDescription(candidate.shortDescription);
  let specificScope = seed.purposeAndScope;
  if (path === 'bekerja' && meta?.workDetail?.activityOverview) {
    specificScope = `${meta.workDetail.activityOverview} ${seed.purposeAndScope}`;
  } else if (path === 'kuliah' && meta?.studyDetail?.studentFriendlyDescription) {
    specificScope = `${meta.studyDetail.studentFriendlyDescription} ${seed.purposeAndScope}`;
  } else if (path === 'wirausaha' && meta?.entrepreneurshipDetail?.problemOrNeedServed) {
    specificScope = `Usaha ini membantu memenuhi kebutuhan: ${meta.entrepreneurshipDetail.problemOrNeedServed}. ${seed.purposeAndScope}`;
  }

  const realLifeExamples = sanitizeUniqueLines(
    [
      ...seed.realLifeExamples,
      ...(path === 'bekerja' ? meta?.workDetail?.generalResponsibilities?.slice(0, 1) ?? [] : []),
      ...(path === 'wirausaha' && meta?.entrepreneurshipDetail?.productOrServiceOverview
        ? [meta.entrepreneurshipDetail.productOrServiceOverview]
        : [])
    ],
    3
  );

  const fieldOverview = {
    simpleExplanation: cleanSimple,
    purposeAndScope: specificScope.trim(),
    realLifeExamples
  };

  // 2. Aktivitas & Tanggung Jawab (Track- & Candidate-Specific)
  const activitiesHeading = resolveActivityHeading(candidate);
  let rawActivities: string[] = [];

  if (path === 'bekerja') {
    rawActivities = [
      ...(meta?.workDetail?.generalResponsibilities ?? []),
      ...candidate.characteristics
    ];
  } else if (path === 'kuliah') {
    const topics = (meta?.studyDetail?.typicalCoreTopics ?? []).map(
      (t) => `Contoh topik yang umumnya dipelajari: ${t}`
    );
    const acts = (meta?.studyDetail?.academicOrPracticeActivities ?? []).map(
      (a) => `Aktivitas praktik kuliah: ${a}`
    );
    rawActivities = [...acts, ...topics, ...candidate.characteristics];
  } else {
    rawActivities = [
      ...(meta?.entrepreneurshipDetail?.startingProcessOverview ?? []),
      meta?.entrepreneurshipDetail?.productOrServiceOverview
        ? `Fokus produk/layanan: ${meta.entrepreneurshipDetail.productOrServiceOverview}`
        : '',
      ...candidate.characteristics
    ].filter(Boolean);
  }

  const activitiesAndResponsibilities = {
    heading: activitiesHeading,
    items: sanitizeUniqueLines(rawActivities, 5)
  };

  // 3. Tempat & Lingkungan (Honest, physical vs digital accurate)
  let settingSummary = seed.workSetting;
  let workRhythm = seed.workRhythmWork;
  if (path === 'bekerja' && meta?.workDetail?.workEnvironments?.length) {
    settingSummary = `Umumnya dilakukan di ${meta.workDetail.workEnvironments.join(', ')}.`;
  } else if (path === 'kuliah') {
    settingSummary = seed.studySetting;
    workRhythm = seed.workRhythmStudy;
  } else if (path === 'wirausaha') {
    settingSummary = seed.bizSetting;
    workRhythm = seed.workRhythmBiz;
  }

  const environmentAndWorkStyle = {
    settingSummary,
    socialInteraction: seed.socialStyle,
    workRhythm
  };

  // 4. Skill yang Dibutuhkan (Separated cleanly; never assumes beginner mastery)
  const rawHardSkills =
    path === 'bekerja'
      ? [
          ...(meta?.workDetail?.requiredCompetencies ?? []),
          ...candidate.requiredBasicSkills
        ]
      : path === 'kuliah'
      ? [
          ...(meta?.studyDetail?.relevantSkills ?? []),
          ...candidate.requiredBasicSkills
        ]
      : [
          ...(meta?.entrepreneurshipDetail?.requiredSkills ?? []),
          ...candidate.requiredBasicSkills
        ];

  const rawBeginnerSkills =
    path === 'bekerja'
      ? [
          ...(meta?.workDetail?.beginnerLearnableSkills ?? []),
          ...candidate.developableSkills
        ]
      : path === 'wirausaha'
      ? [
          ...(meta?.entrepreneurshipDetail?.learnableSkills ?? []),
          ...candidate.developableSkills
        ]
      : [
          ...candidate.developableSkills,
          ...(meta?.studyDetail?.typicalCoreTopics?.[0]
            ? [`Mengenal konsep dasar: ${meta.studyDetail.typicalCoreTopics[0]}`]
            : []),
          ...(meta?.studyDetail?.academicOrPracticeActivities?.[0]
            ? [`Latihan awal terpandu: ${meta.studyDetail.academicOrPracticeActivities[0]}`]
            : []),
          ...seed.preparations.slice(0, 1)
        ];

  const skillsSeparated = {
    hardSkills: sanitizeUniqueLines(rawHardSkills, 4),
    softSkills: sanitizeUniqueLines(seed.softSkills, 3),
    beginnerStarterSkills: sanitizeUniqueLines(rawBeginnerSkills, 4)
  };

  // 5. Pendidikan & Persyaratan (Full regulatory & licensing accuracy with plain-Indonesian explanations)
  const generalEducationPaths: string[] = [];
  const nonFormalOrTraining: string[] = [];
  const regulatoryOrCertificationNotes: string[] = [];

  if (path === 'bekerja') {
    generalEducationPaths.push(
      meta?.workDetail?.educationOrTrainingNotes ||
        'Terbuka untuk lulusan SMK pada peran pemula/asisten dasar; beberapa jenjang lanjutan memerlukan pendidikan tinggi atau sertifikasi resmi.'
    );
    nonFormalOrTraining.push(
      'Pengalaman PKL/Prakerin sekolah, portofolio tugas praktik, atau pelatihan berbasis SKKNI (Standar Kompetensi Kerja Nasional Indonesia) membantu membuktikan kesiapan awal.'
    );
  } else if (path === 'kuliah') {
    generalEducationPaths.push(
      'Terbuka bagi lulusan SMK/SMA/MA melalui program Diploma (D3/D4 Vokasi Politeknik) maupun Sarjana (S1).'
    );
    generalEducationPaths.push(
      meta?.studyDetail?.verifiedEntryPathwaysNote ||
        'Jalur seleksi nasional resmi meliputi SNBP (prestasi), SNBT/UTBK (tes), dan seleksi mandiri perguruan tinggi.'
    );
    nonFormalOrTraining.push(
      candidate.domainId === 'seni_desain'
        ? 'Latihan soal seleksi masuk perguruan tinggi sekaligus menyiapkan portofolio karya orisinal sesuai syarat rumpun seni dan desain.'
        : 'Mempersiapkan nilai rapor, latihan soal seleksi masuk perguruan tinggi, serta memperdalam dasar materi bidang yang diminati.'
    );
  } else {
    generalEducationPaths.push(
      'Dapat dirintis bertahap oleh lulusan SMK dari skala layanan kecil atau sistem pesan dulu (pre-order) sesuai keahlian.'
    );
    nonFormalOrTraining.push(
      'Pembinaan wirausaha pelajar seperti Sekolah Pencetak Wirausaha (SPW) SMK dan pendampingan usaha mikro (PLUT-KUKM).'
    );
    regulatoryOrCertificationNotes.push(
      'Legalitas usaha mikro perseorangan resmi berupa NIB (Nomor Induk Berusaha) dapat dibuat gratis melalui portal pemerintah OSS RBA (oss.go.id) sesuai jenis kegiatannya.'
    );
  }

  for (const constraint of candidate.requirementsOrConstraints) {
    const cleaned = cleanConstraintLine(constraint);
    if (!cleaned) continue;
    if (
      /STR|STRA|PPG|Advokat|Apoteker|Kefarmasian|Gizi|Dietisien|Psikolog|Penerjemah|Lisensi|Konstruksi|Arsitek|S1|D3|D4|Izin|K3|Sertifikat|Portofolio|NIB|PIRT|BPOM|Halal|Akuntan|Guru|UU /i.test(
        cleaned
      )
    ) {
      regulatoryOrCertificationNotes.push(cleaned);
    }
  }

  const fallbackRegulatory = candidate.requirementsOrConstraints
    .map(cleanConstraintLine)
    .filter(Boolean)
    .slice(0, 2);

  const educationAndRequirements = {
    generalEducationPaths: sanitizeUniqueLines(generalEducationPaths, 3),
    nonFormalOrTraining: sanitizeUniqueLines(nonFormalOrTraining, 3),
    regulatoryOrCertificationNotes: sanitizeUniqueLines(
      regulatoryOrCertificationNotes.length > 0 ? regulatoryOrCertificationNotes : fallbackRegulatory,
      3
    )
  };

  // 6. Kisaran Penghasilan / Modal Awal / Biaya Pendidikan (Honest, non-fabricated)
  const incomeInfo: IncomeRangeInfo = {
    status: 'unavailable',
    fallbackText: UNAVAILABLE_INCOME_FALLBACK_TEXT
  };

  let financialContext: CareerInsightProfile['financialContext'];
  if (path === 'wirausaha') {
    const resourceHint = meta?.entrepreneurshipDetail?.resourceRequirementsNote
      ? cleanConstraintLine(meta.entrepreneurshipDetail.resourceRequirementsNote)
      : 'Bisa dimulai dari jasa keahlian skala kecil atau sistem pre-order sebelum menambah alat.';
    financialContext = {
      sectionHeading: '6. Gambaran Modal Awal & Penghasilan Usaha',
      qualitativeTitle: 'Faktor yang Memengaruhi Kebutuhan Modal Awal',
      qualitativeFactors: [
        'Skala usaha saat memulai (misalnya melayani pesanan pre-order dari rumah jauh lebih ringan dibanding langsung menyewa tempat sendiri).',
        'Peralatan yang sudah dimiliki di rumah vs peralatan tambahan yang benar-benar perlu dibeli secara bertahap.',
        `Bahan baku, kemasan, lokasi, serta model layanan (${resourceHint}).`
      ],
      guidanceNote:
        'Nominal modal awal, perkiraan omzet, maupun jaminan keuntungan tidak direka-reka karena bergantung pada kondisi nyata di tiap lingkungan.'
    };
  } else if (path === 'kuliah') {
    financialContext = {
      sectionHeading: '6. Informasi Biaya Kuliah & Penghasilan Lulusan',
      qualitativeTitle: 'Cara Mengecek Biaya Kuliah Secara Akurat',
      qualitativeFactors: [
        'Besaran biaya kuliah (seperti UKT / Uang Kuliah Tunggal atau SPP) berbeda-beda di setiap kampus dan jalur masuk.',
        'Ketersediaan beasiswa maupun program bantuan biaya pendidikan pemerintah (seperti KIP Kuliah) dapat dicek langsung oleh calon mahasiswa.'
      ],
      guidanceNote:
        'Katalog ini sengaja tidak mencantumkan nominal UKT, daftar nama kampus, atau status akreditasi tertentu — periksa selalu di situs resmi perguruan tinggi tujuan dan portal SNPMB.'
    };
  } else {
    financialContext = {
      sectionHeading: '6. Kisaran Penghasilan & Konteks Kerja',
      qualitativeTitle: 'Hal yang Memengaruhi Penghasilan di Dunia Kerja',
      qualitativeFactors: [
        'Besaran upah/gaji berbeda menurut wilayah (mengikuti UMK/UMP daerah), skala usaha atau perusahaan, serta jenis peran.',
        'Pengalaman praktik, ketelitian kerja, sertifikat kompetensi, dan portofolio nyata turut memengaruhi kesempatan berkembang.'
      ],
      guidanceNote:
        'Informasi nominal gaji tidak dicantumkan tanpa data resmi yang terverifikasi. Rujukan ketentuan upah resmi dapat diperiksa melalui kanal Kementerian Ketenagakerjaan (Kemnaker) atau Dinas Tenaga Kerja setempat.'
    };
  }

  // 7. Tantangan & Persiapan (Candidate-aware challenges + beginner preparations)
  const candidateConstraintChallenges = candidate.requirementsOrConstraints
    .map(cleanConstraintLine)
    .filter((line) =>
      /^(Sering|Membutuhkan|Menuntut|Terpapar|Jam kerja|Bekerja mengikuti|Banyak berdiri|Rutinitas|Pekerjaan|Menghadapi)/i.test(
        line
      )
    );

  const rawChallenges = [
    ...(path === 'wirausaha' ? meta?.entrepreneurshipDetail?.challengesAndRisks ?? [] : []),
    ...candidateConstraintChallenges,
    ...seed.challenges
  ];

  const candidateFirstDevelopable = candidate.developableSkills[0]
    ? `Latih secara bertahap kemampuan dasar "${candidate.developableSkills[0]}" — kamu tidak harus langsung mahir sebelum memulai.`
    : '';

  const challengesAndPreparation = {
    challenges: sanitizeUniqueLines(rawChallenges, 3),
    preparations: sanitizeUniqueLines(
      [candidateFirstDevelopable, ...seed.preparations].filter(Boolean),
      3
    )
  };

  // 8. Peluang Perkembangan (Sub-cluster specific progression without promises)
  const progressionPath =
    path === 'bekerja'
      ? seed.progressionWork
      : path === 'kuliah'
      ? seed.progressionStudy
      : seed.progressionBiz;

  const growthOpportunities = {
    progressionPath,
    specializationOrPathSwitch: seed.switchNote,
    futureRelevanceNote: seed.futureNote
  };

  // Track-specific differentiated highlight block
  let trackSpecificHighlights: CareerInsightProfile['trackSpecificHighlights'];
  if (path === 'kuliah') {
    const careerLinks = meta?.studyDetail?.careerConnections?.length
      ? `Umumnya terhubung dengan bidang karier seperti: ${meta.studyDetail.careerConnections.slice(0, 3).join(', ')}.`
      : 'Contoh bidang studi ini umumnya mengantar ke berbagai peran profesional atau terapan sesuai minat.';
    trackSpecificHighlights = {
      trackLabel: 'Kuliah',
      bulletHeading: 'Ringkasan Jalur Kuliah (Gambaran Umum)',
      bullets: [
        careerLinks,
        'Materi yang tertulis di atas adalah gambaran umum rumpun studi (bukan kurikulum wajib dari satu kampus tertentu).'
      ],
      extraNote:
        'Catatan: Katalog ini tidak mencantumkan nama kampus, kuota daya tampung, akreditasi, atau nominal biaya kuliah.'
    };
  } else if (path === 'wirausaha') {
    const users = meta?.entrepreneurshipDetail?.targetUsers?.length
      ? meta.entrepreneurshipDetail.targetUsers.join(', ')
      : 'Pelajar, warga sekitar, atau pelaku UMKM lokal';
    trackSpecificHighlights = {
      trackLabel: 'Wirausaha',
      bulletHeading: 'Gambaran Praktis Usaha Pemula',
      bullets: [
        `Calon pelanggan: ${users}`,
        `Peralatan umum yang biasa disiapkan: ${seed.bizEquipmentHint}`,
        meta?.entrepreneurshipDetail?.resourceRequirementsNote ||
          'Bisa dirintis dari layanan keahlian skala kecil/pre-order sebelum menambah peralatan.'
      ],
      extraNote:
        'Catatan: Nominal modal awal, perkiraan omzet, atau jaminan keuntungan usaha berstatus belum tersedia dan tidak direka-reka.'
    };
  } else {
    trackSpecificHighlights = {
      trackLabel: 'Bekerja',
      bulletHeading: 'Gambaran Praktis Dunia Kerja',
      bullets: [
        meta?.workDetail?.activityOverview || cleanSimple,
        'Penjelasan ini menggambarkan kondisi umum bidang pekerjaan untuk eksplorasi karier — bukan pengumuman lowongan kerja yang sedang dibuka.'
      ]
    };
  }

  const starterActionStep =
    CATALOG_STARTER_ACTIONS[candidate.id] ??
    (path === 'wirausaha'
      ? meta?.entrepreneurshipDetail?.startingProcessOverview?.[0]
      : path === 'kuliah'
      ? meta?.studyDetail?.academicOrPracticeActivities?.[0]
      : meta?.workDetail?.generalResponsibilities?.[0]) ??
    seed.preparations[0];

  return {
    fieldOverview,
    activitiesAndResponsibilities,
    environmentAndWorkStyle,
    skillsSeparated,
    educationAndRequirements,
    incomeInfo,
    financialContext,
    challengesAndPreparation,
    growthOpportunities,
    starterActionStep,
    trackSpecificHighlights
  };
}

export function buildCareerInsightFromMatch(
  result: CandidateMatchResult
): CareerInsightProfile {
  return buildCareerInsightForCandidate(result.candidate);
}
