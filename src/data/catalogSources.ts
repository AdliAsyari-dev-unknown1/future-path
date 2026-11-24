/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7: Verified & Auditable Source Registry
 *
 * Strictly records verifiable Indonesian institutional frameworks retrieved on
 * 2026-11-18 without fabricated deep links, fake accreditations, fake salaries,
 * or invented campus/capital figures.
 */

import { CatalogSourceRecord } from '../types/catalog';

export const CATALOG_VERIFICATION_DATE = '2026-11-18';

export const CATALOG_SOURCE_REGISTRY: Record<string, CatalogSourceRecord> = {
  SRC_KEMNAKER_SKKNI_SW: {
    id: 'SRC_KEMNAKER_SKKNI_SW',
    title: 'SKKNI Sektor TIK Bidang Software Development – Pemrograman (Kepmenaker No. 282 Tahun 2016)',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Cakupan unit kompetensi pemrograman terstruktur/berorientasi objek, basis data, debugging, dan antarmuka pengguna'
    ],
    sourceType: 'occupational_standard',
    status: 'VERIFIED'
  },
  SRC_KEMNAKER_SKKNI_NET: {
    id: 'SRC_KEMNAKER_SKKNI_NET',
    title: 'SKKNI Bidang Jaringan Komputer (No. 321 Tahun 2016)',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Cakupan kompetensi instalasi perangkat jaringan, konfigurasi layanan server dasar, dan pengelolaan keamanan jaringan'
    ],
    sourceType: 'occupational_standard',
    status: 'VERIFIED'
  },
  SRC_KEMNAKER_SKKNI_OPS: {
    id: 'SRC_KEMNAKER_SKKNI_OPS',
    title: 'SKKNI Bidang Pengoperasian Komputer (Kepmenaker No. 56 Tahun 2018)',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Standar kompetensi pengoperasian aplikasi perkantoran, perangkat komputer dasar, dan dukungan pengguna'
    ],
    sourceType: 'occupational_standard',
    status: 'VERIFIED'
  },
  SRC_KEMNAKER_SKKNI_AUTO: {
    id: 'SRC_KEMNAKER_SKKNI_AUTO',
    title: 'SKKNI Otomotif Kendaraan Ringan (Kepmenaker No. 97/2018) & Industri Manufaktur Otomotif Roda Empat (No. 179/2020)',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Kompetensi perawatan berkala engine, kelistrikan kendaraan, pengoperasian peralatan manufaktur, dan pengendalian mutu bengkel'
    ],
    sourceType: 'occupational_standard',
    status: 'VERIFIED'
  },
  SRC_KEMNAKER_SKKNI_MFG: {
    id: 'SRC_KEMNAKER_SKKNI_MFG',
    title: 'SKKNI Sistem Manufaktur & Industri Logam Mesin (Kepmenaker No. 109 Tahun 2018)',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Standar kompetensi pengerjaan permesinan, pengawasan parameter produksi, dan prosedur keselamatan kerja manufaktur'
    ],
    sourceType: 'occupational_standard',
    status: 'VERIFIED'
  },
  SRC_KEMNAKER_SKKNI_DKV: {
    id: 'SRC_KEMNAKER_SKKNI_DKV',
    title: 'SKKNI Bidang Desain Grafis dan Desain Komunikasi Visual (Kepmenaker No. 126 Tahun 2023)',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Unit kompetensi penyusunan design brief, prinsip komposisi visual, produksi karya grafis, dan pengelolaan hak cipta karya'
    ],
    sourceType: 'occupational_standard',
    status: 'VERIFIED'
  },
  SRC_KEMNAKER_SKKNI_BCAST: {
    id: 'SRC_KEMNAKER_SKKNI_BCAST',
    title: 'SKKNI Bidang Penyiaran Televisi & Radio (Kepmenaker No. 352/2014 & No. 111/2018)',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Kompetensi perencanaan konten siaran, pengoperasian perangkat produksi audio-visual, dan kepatuhan etika penyiaran'
    ],
    sourceType: 'occupational_standard',
    status: 'VERIFIED'
  },
  SRC_KEMNAKER_SKKNI_SECTOR_PARTIAL: {
    id: 'SRC_KEMNAKER_SKKNI_SECTOR_PARTIAL',
    title: 'Direktori SKKNI Sektor Otomasi Industri, Elektronika, serta Tekstil & Garmen',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Keberadaan standar sistem kendali otomasi industri serta ketersediaan subsektor tekstil/garmen di direktori SKKNI'
    ],
    sourceType: 'occupational_standard',
    status: 'PARTIALLY_VERIFIED'
  },
  SRC_KEMDIKBUD_SPEKTRUM_SMK: {
    id: 'SRC_KEMDIKBUD_SPEKTRUM_SMK',
    title: 'Spektrum Program & Konsentrasi Keahlian SMK (PPLG, TJKT, Pemesinan, Otomotif, Elektronika, Tekstil, Broadcasting)',
    publisher: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi / Direktorat SMK',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Keselarasan materi dasar ketujuh jurusan SMK (RPL/PPLG, TKJ, Mesin, Otomotif, Elektro, Tekstil, BP/Broadcasting)'
    ],
    sourceType: 'government',
    status: 'VERIFIED'
  },
  SRC_SNPMB_VOKASI: {
    id: 'SRC_SNPMB_VOKASI',
    title: 'Informasi Resmi Jalur Seleksi Nasional SNBP & SNBT untuk Jenjang D3, D4/Sarjana Terapan Politeknik dan S1',
    publisher: 'Panitia SNPMB — BPPP Kemendikbudristek',
    url: 'https://snpmb.bppp.kemdikbud.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Siswa kelas 12 SMK yang memenuhi syarat sekolah/NPSN/PDSS dapat mengikuti SNBP maupun SNBT/UTBK untuk jenjang D3, D4 Politeknik Negeri, maupun S1',
      'Program studi bidang seni di jalur seleksi nasional mensyaratkan unggah portofolio sesuai ketentuan panitia'
    ],
    sourceType: 'higher_education',
    status: 'VERIFIED'
  },
  SRC_DIKTI_RUMPUN_ILMU: {
    id: 'SRC_DIKTI_RUMPUN_ILMU',
    title: 'Klasifikasi Rumpun Ilmu & Nomenklatur Umum Pendidikan Tinggi (Informatika, DKV, Manajemen Bisnis, Vokasi Rekayasa)',
    publisher: 'Direktorat Jenderal Pendidikan Tinggi / Kemdiktisaintek',
    url: 'https://portal.snpmb.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Struktur umum jenjang D3 (Ahli Madya), D4 (Sarjana Terapan), dan S1 (Sarjana Akademik) tanpa klaim akreditasi atau biaya kampus spesifik'
    ],
    sourceType: 'higher_education',
    status: 'VERIFIED'
  },
  SRC_OSS_NIB_UMK: {
    id: 'SRC_OSS_NIB_UMK',
    title: 'Sistem Perizinan Berusaha Berbasis Risiko (OSS RBA) — Pembuatan NIB UMK Orang Perseorangan',
    publisher: 'Kementerian Investasi / BKPM — Portal OSS Republik Indonesia',
    url: 'https://oss.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Pelaku Usaha Mikro dan Kecil (UMK) perseorangan dapat mengurus Nomor Induk Berusaha (NIB) secara daring dan gratis melalui oss.go.id menggunakan NIK e-KTP serta pemilihan KBLI sesuai aktivitas jasa/usaha'
    ],
    sourceType: 'government',
    status: 'VERIFIED'
  },
  SRC_KEMENKOP_SPW_PLUT: {
    id: 'SRC_KEMENKOP_SPW_PLUT',
    title: 'Pembinaan UMK PLUT-KUKM (5 Pilar Pendampingan) & Program Sekolah Pencetak Wirausaha (SPW) SMK',
    publisher: 'Kementerian Koperasi dan UKM RI & Direktorat Pendidikan Vokasi Kemendikbudristek',
    url: 'https://kemenkopukm.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Pendampingan wirausaha pemula melalui PLUT-KUKM mencakup 5 pilar: kelembagaan/NIB, SDM, produksi/pengemasan, literasi pembiayaan, dan pemasaran digital',
      'Program SPW di SMK melatih praktik kewirausahaan siswa berbasis mata pelajaran PKK tanpa mengharuskan modal awal besar'
    ],
    sourceType: 'government',
    status: 'VERIFIED'
  },
  SRC_KEMNAKER_LOGISTICS_PARTIAL: {
    id: 'SRC_KEMNAKER_LOGISTICS_PARTIAL',
    title: 'Direktori SKKNI Sektor Logistik, Pergudangan & Manajemen Rantai Pasok (Rujukan Umum)',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Keberadaan standar kompetensi bidang pergudangan, pencatatan keluar-masuk stok, dan operasional pengiriman di direktori SKKNI Kemnaker'
    ],
    sourceType: 'occupational_standard',
    status: 'PARTIALLY_VERIFIED'
  },
  SRC_KEMDIKBUD_PENDAMPING_PARTIAL: {
    id: 'SRC_KEMDIKBUD_PENDAMPING_PARTIAL',
    title: 'Kerangka Umum Pendidikan Nonformal, Pendampingan Belajar & Kegiatan Sosial Kemasyarakatan',
    publisher: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    url: 'https://kemdikbud.go.id',
    verifiedAt: CATALOG_VERIFICATION_DATE,
    supportedClaims: [
      'Gambaran umum peran asisten pengajar/pendamping belajar pemula dan fasilitator kegiatan komunitas atau sosial di luar jalur industri teknis'
    ],
    sourceType: 'government',
    status: 'PARTIALLY_VERIFIED'
  },
  SRC_DIKTI_SNPMB_RUMPUN_UMUM: {
    id: 'SRC_DIKTI_SNPMB_RUMPUN_UMUM',
    title: 'Klasifikasi Rumpun Ilmu Pendidikan Tinggi & Jalur Seleksi Nasional (Informatika, Hukum, Sastra, Pendidikan, Kesehatan, Ekonomi, Komunikasi, Psikologi, Teknik, Pertanian, Pariwisata)',
    publisher: 'Kemdiktisaintek (PDDikti) & Panitia SNPMB',
    url: 'https://pddikti.kemdiktisaintek.go.id',
    verifiedAt: '2026-11-21',
    supportedClaims: [
      'Nomenklatur umum bidang studi jenjang D3, D4/Sarjana Terapan, dan S1 yang terbuka bagi lulusan SMA/SMK melalui SNBP, SNBT, atau seleksi perguruan tinggi tanpa klaim nama kampus, kuota, akreditasi, atau rincian biaya kuliah'
    ],
    sourceType: 'higher_education',
    status: 'VERIFIED'
  },
  SRC_UU_ADVOKAT_HUKUM: {
    id: 'SRC_UU_ADVOKAT_HUKUM',
    title: 'Kerangka Pendidikan Tinggi Hukum & Syarat Profesi Advokat (UU No. 18 Tahun 2003)',
    publisher: 'Republik Indonesia / JDIH Nasional',
    url: 'https://peraturan.bpk.go.id',
    verifiedAt: '2026-11-21',
    supportedClaims: [
      'Profesi penegak hukum dan advokat mensyaratkan gelar Sarjana berlatar pendidikan tinggi hukum (S1 Ilmu Hukum) serta pendidikan profesi/ujian lanjutan, bukan langsung dari lulusan SMK'
    ],
    sourceType: 'government',
    status: 'VERIFIED'
  },
  SRC_KEMENKES_NAKES_STR: {
    id: 'SRC_KEMENKES_NAKES_STR',
    title: 'Undang-Undang Kesehatan No. 17 Tahun 2023 & Persyaratan Pendidikan Tinggi serta STR Tenaga Kesehatan',
    publisher: 'Kementerian Kesehatan Republik Indonesia',
    url: 'https://satusehat.kemkes.go.id',
    verifiedAt: '2026-11-21',
    supportedClaims: [
      'Praktik tenaga kesehatan formal (seperti perawat, bidan, ahli gizi, atau tenaga klinis berizin) wajib menempuh pendidikan tinggi bidang kesehatan, uji kompetensi, dan memiliki Surat Tanda Registrasi (STR)'
    ],
    sourceType: 'government',
    status: 'VERIFIED'
  },
  SRC_KEMDIKBUD_GURU_PPG: {
    id: 'SRC_KEMDIKBUD_GURU_PPG',
    title: 'Undang-Undang Guru dan Dosen No. 14 Tahun 2005 & Pendidikan Profesi Guru (PPG)',
    publisher: 'Kementerian Pendidikan Dasar dan Menengah / Kemendikbudristek',
    url: 'https://kemdikbud.go.id',
    verifiedAt: '2026-11-21',
    supportedClaims: [
      'Menjadi guru sekolah formal mensyaratkan kualifikasi akademik sarjana (S1/D4) dan sertifikat pendidik melalui Pendidikan Profesi Guru (PPG); lulusan SMK dapat memulai dari peran asisten belajar nonformal atau melanjutkan kuliah kependidikan'
    ],
    sourceType: 'government',
    status: 'VERIFIED'
  },
  SRC_KEMNAKER_KEUANGAN_ADMIN_PARTIAL: {
    id: 'SRC_KEMNAKER_KEUANGAN_ADMIN_PARTIAL',
    title: 'Direktori SKKNI Sektor Administrasi Perkantoran, Akuntansi & Jasa Keuangan (Rujukan Umum)',
    publisher: 'Kementerian Ketenagakerjaan Republik Indonesia',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: '2026-11-21',
    supportedClaims: [
      'Keberadaan standar kompetensi bidang administrasi perkantoran, pencatatan transaksi kas/pembukuan dasar, dan dukungan operasional layanan keuangan di direktori SKKNI'
    ],
    sourceType: 'occupational_standard',
    status: 'PARTIALLY_VERIFIED'
  },
  SRC_KEMNAKER_PARIWISATA_KULINER_PARTIAL: {
    id: 'SRC_KEMNAKER_PARIWISATA_KULINER_PARTIAL',
    title: 'Direktori SKKNI Sektor Pariwisata, Perhotelan & Jasa Makanan-Minuman (Rujukan Umum)',
    publisher: 'Kementerian Ketenagakerjaan & Kemenparekraf RI',
    url: 'https://skkni.kemnaker.go.id',
    verifiedAt: '2026-11-21',
    supportedClaims: [
      'Keberadaan standar kompetensi bidang layanan tata graha/resepsionis hotel, pemanduan wisata, dan pengolahan makanan/minuman tanpa mencantumkan lowongan atau estimasi pendapatan'
    ],
    sourceType: 'occupational_standard',
    status: 'PARTIALLY_VERIFIED'
  },
  SRC_KEMENTAN_AGRIBISNIS_PARTIAL: {
    id: 'SRC_KEMENTAN_AGRIBISNIS_PARTIAL',
    title: 'Rujukan Umum Sektor Pertanian, Hortikultura & Pelestarian Lingkungan Kerja',
    publisher: 'Kementerian Pertanian & KLHK RI (Direktori Kompetensi Umum)',
    url: 'https://pertanian.go.id',
    verifiedAt: '2026-11-21',
    supportedClaims: [
      'Gambaran umum aktivitas budidaya tanaman, hidroponik, pengolahan hasil tani lokal, serta pengelolaan kebersihan dan konservasi lingkungan tingkat pemula'
    ],
    sourceType: 'government',
    status: 'PARTIALLY_VERIFIED'
  },
  SRC_KEMENPAREKRAF_EKRAF_PARTIAL: {
    id: 'SRC_KEMENPAREKRAF_EKRAF_PARTIAL',
    title: 'Klasifikasi Subsektor Ekonomi Kreatif & Usaha Mikro Pemula (Kuliner, Kriya, Konten, Aplikasi, Jasa Acara)',
    publisher: 'Kementerian Pariwisata dan Ekonomi Kreatif & KemenkopUKM RI',
    url: 'https://kemenparekraf.go.id',
    verifiedAt: '2026-11-21',
    supportedClaims: [
      'Pengelompokan bidang usaha kreatif dan jasa mandiri pemula di Indonesia tanpa klaim nominal modal, omzet, atau jaminan keuntungan usaha'
    ],
    sourceType: 'government',
    status: 'PARTIALLY_VERIFIED'
  }
};
