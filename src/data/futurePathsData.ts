import { FuturePathMeta } from '../types/recommendation';

export const FUTURE_PATHS: FuturePathMeta[] = [
  {
    id: 'bekerja',
    title: 'Bekerja',
    badgeLabel: 'Dunia Kerja & Industri',
    tagline: 'Mandiri secara finansial dan asah skill langsung di industri nyata.',
    summary: 'Jalur prioritas untuk kamu yang ingin segera mempraktikkan keahlian kejuruan, mandiri finansial, dan membangun jam terbang profesional di perusahaan rekanan industri.',
    accentColor: '#2563eb', // blue-600
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    badgeText: 'text-blue-700',
    borderHover: 'hover:border-blue-500 hover:shadow-blue-100',
    iconName: 'Briefcase',
    idealFor: [
      'Siswa yang ingin cepat mandiri secara finansial',
      'Menyukai aplikasi skill langsung dibanding teori berkepanjangan',
      'Ingin memperluas portofolio pengalaman industri (IDUKA)'
    ],
    keyStrengths: [
      'Sertifikasi kompetensi keahlian SMK',
      'Pengalaman PKL / magang industri nyata',
      'Kesiapan disiplin kerja dan problem solving di lapangan'
    ],
    typicalChallenge: 'Adaptasi budaya kerja profesional, jam kerja, dan standar keselamatan/kualitas ketat.',
    smkContextTip: 'Kembangkan portofolio praktik kejuruan dan jejaring kemitraan industri jurusanmu di SMKN 1 Katapang.'
  },
  {
    id: 'kuliah',
    title: 'Kuliah',
    badgeLabel: 'Pendidikan Tinggi',
    tagline: 'Perdalam teori, riset, dan raih jenjang karier strategis.',
    summary: 'Pilihan tepat untuk kamu yang ingin mendalami fondasi sains, teknologi lanjutan, manajemen, atau mengincar profesi yang mensyaratkan gelar sarjana/diploma terapan.',
    accentColor: '#7c3aed', // violet-600
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    badgeText: 'text-purple-700',
    borderHover: 'hover:border-purple-500 hover:shadow-purple-100',
    iconName: 'GraduationCap',
    idealFor: [
      'Memiliki rasa ingin tahu tinggi terhadap teori & riset',
      'Berminat melanjutkan ke Politeknik Vokasi (D3/D4) atau Universitas (S1)',
      'Membidik karier konsultan, perancang sistem, atau manajemen'
    ],
    keyStrengths: [
      'Keahlian teknis dasar dari SMK menjadi modal unggul praktikum',
      'Kesempatan beasiswa (KIP Kuliah, beasiswa industri vokasi)',
      'Jejaring akademisi dan komunitas mahasiswa luas'
    ],
    typicalChallenge: 'Biaya pendidikan dan adaptasi dengan tuntutan akademis serta literatur teoritis.',
    smkContextTip: 'Jalur SNBP, SNBT, dan seleksi mandiri vokasi terbuka lebar. Siswa SMK sangat berpeluang di politeknik negeri.'
  },
  {
    id: 'wirausaha',
    title: 'Wirausaha',
    badgeLabel: 'Bisnis & Inovasi',
    tagline: 'Ciptakan solusi, buka lapangan kerja, dan bangun masa depanmu sendiri.',
    summary: 'Bagi jiwa pemberani yang ingin mengubah keahlian teknis SMK menjadi produk atau jasa bernilai jual, merintis startup, atau mengelola usaha mandiri.',
    accentColor: '#ea580c', // orange-600
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    badgeText: 'text-amber-800',
    borderHover: 'hover:border-amber-500 hover:shadow-amber-100',
    iconName: 'Rocket',
    idealFor: [
      'Suka melihat peluang pasar dan memiliki inisiatif tinggi',
      'Berani mengambil risiko terukur dan tahan banting',
      'Ingin menciptakan lapangan kerja bagi lingkungan sekitar'
    ],
    keyStrengths: [
      'Kemampuan teknis produksi langsung dari jurusan SMK',
      'Fleksibilitas model bisnis (jasa servis, digital agency, produk kreasi)',
      'Ekosistem UMKM dan inkubasi kewirausahaan pemuda'
    ],
    typicalChallenge: 'Manajemen arus kas (cashflow), konsistensi mental, dan pemasaran produk.',
    smkContextTip: 'Program SPW (Sekolah Pencetak Wirausaha) di SMK menjadi pijakan nyata untuk mulai uji produk.'
  },
  {
    id: 'bingung',
    title: 'Masih Bingung',
    badgeLabel: 'Eksplorasi Minat',
    tagline: 'Wajar ragu! Langkah pertama adalah mengenal potensimu lebih dalam.',
    summary: 'Ragu dan bingung adalah tanda bahwa kamu peduli dengan masa depanmu. Tidak perlu terburu-buru, mari kenali minat dan kekuatanmu secara bertahap.',
    accentColor: '#059669', // emerald-600
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    badgeText: 'text-emerald-800',
    borderHover: 'hover:border-emerald-500 hover:shadow-emerald-100',
    iconName: 'Compass',
    idealFor: [
      'Siswa yang memiliki banyak minat sekaligus dan bingung memilih',
      'Merasa belum yakin apakah jurusannya saat ini sudah sesuai',
      'Perlu ruang diskusi tanpa tekanan untuk memetakan alternatif'
    ],
    keyStrengths: [
      'Pikiran terbuka untuk mengeksplorasi beragam opsi baru',
      'Tidak tergesa-gesa mengambil keputusan yang salah langkah',
      'Bisa memanfaatkan ajang pameran RPL untuk saling berdiskusi dan bertukar ide'
    ],
    typicalChallenge: 'Overthinking dan menunda-nunda mengambil langkah eksplorasi awal.',
    smkContextTip: 'Kuis eksplorasi ini didesain tanpa penilaian benar-salah. Diskusikan hasil eksplorasi ini bersama rekan kelompok dan guru pembimbing pameran!'
  }
];
