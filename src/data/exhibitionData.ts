/**
 * Context data for SMKN 1 Katapang RPL Exhibition
 * Interactive web project by RPL student group.
 */

export interface GuidingPrinciple {
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Compass' | 'Sparkles' | 'Users';
}

export const GUIDING_PRINCIPLES: GuidingPrinciple[] = [
  {
    title: 'Tanpa Jawaban Benar atau Salah',
    description: 'Setiap pilihan menggambarkan keunikan minat dan gayamu. Tidak ada standar baku yang mengharuskan kamu memilih satu jalan tertentu.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Panduan, Bukan Vonis Masa Depan',
    description: 'Hasil eksplorasi merupakan kompas awal untuk bahan refleksi dan diskusi bersama rekan atau guru pembimbing, bukan penentu mutlak takdirmu.',
    iconName: 'Compass'
  },
  {
    title: 'Terbuka untuk Seluruh 7 Jurusan',
    description: 'Jurusanmu saat ini di SMKN 1 Katapang adalah modal berharga, namun tidak membatasi impianmu apakah ingin bekerja, kuliah, berwirausaha, atau mengeksplorasi dulu.',
    iconName: 'Sparkles'
  },
  {
    title: 'Karya Siswa RPL untuk Teman Sebaya',
    description: 'Aplikasi web interaktif ini dirancang khusus oleh kelompok siswa jurusan RPL sebagai persembahan karya pada pameran jurusan RPL di SMKN 1 Katapang.',
    iconName: 'Users'
  }
];

export const EXHIBITION_INFO = {
  venue: 'SMKN 1 Katapang, Kabupaten Bandung',
  eventName: 'Pameran Karya Jurusan Rekayasa Perangkat Lunak (RPL)',
  targetAudience: 'Siswa & Guru SMKN 1 Katapang',
  boothLocation: 'Stan Pameran Karya Siswa RPL',
  projectTeam: 'Kelompok Siswa Jurusan RPL SMKN 1 Katapang'
};

export const DEVELOPMENT_PHASES = [
  {
    phase: 'Fondasi & Alur Peserta',
    title: 'Identitas Siswa 7 Jurusan & Pemilihan Arah',
    status: 'completed',
    description:
      'Form biodata ringkas khusus 7 jurusan resmi SMKN 1 Katapang, pemberitahuan privasi internal pameran, serta 4 pilihan arah eksplorasi (Bekerja, Kuliah, Wirausaha, Masih Bingung).'
  },
  {
    phase: 'Kuis Adaptif & Katalog Resmi',
    title: 'Pertanyaan Sehari-hari, Scoring 6 Dimensi & 65+ Bidang Terverifikasi',
    status: 'completed',
    description:
      'Pertanyaan adaptif yang mendukung opsi fleksibel (Lainnya, Tidak ada yang sesuai, Belum tahu, Lewati), pencocokan 6 dimensi bebas bias jurusan, dan 65+ bidang terverifikasi lintas jalur.'
  },
  {
    phase: 'Wawasan 8 Aspek & Ekspor PDF',
    title: 'Ringkasan 1 Menit, Gambaran Nyata 8 Aspek & Laporan A4',
    status: 'completed',
    description:
      'Menampilkan gambaran nyata suatu bidang (aktivitas, lingkungan, Hard/Soft Skill, pendidikan, info penghasilan terverifikasi, tantangan, dan peluang) yang siap diunduh atau dicetak sebagai PDF.'
  }
];
