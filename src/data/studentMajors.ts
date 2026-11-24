import { SmkMajor, SMK_MAJORS } from '../types/student';

export interface MajorMetadata {
  id: SmkMajor;
  label: string;
  category: string;
  hint: string;
}

export const MAJOR_LIST: MajorMetadata[] = [
  {
    id: 'Elektro',
    label: 'Elektro',
    category: 'Teknik Ketenagalistrikan & Elektronika',
    hint: 'Instalasi tenaga listrik, otomasi industri, mikroelektronika & sistem kendali'
  },
  {
    id: 'Mesin',
    label: 'Mesin',
    category: 'Teknik Mesin Manufaktur',
    hint: 'Fabrikasi, permesinan CNC, bubut, perancangan mekanik presisi'
  },
  {
    id: 'Otomotif',
    label: 'Otomotif',
    category: 'Teknik Kendaraan Ringan & Sepeda Motor',
    hint: 'Diagnostik mesin kendaraan, kelistrikan bodi, servis & pemeliharaan'
  },
  {
    id: 'Tekstil',
    label: 'Tekstil',
    category: 'Teknologi Tekstil & Kimia Serat',
    hint: 'Pencelupan, penyempurnaan kain, garmen, pengujian mutu tekstil'
  },
  {
    id: 'TKJ',
    label: 'TKJ',
    category: 'Teknik Komputer & Jaringan',
    hint: 'Infrastruktur jaringan, routing, mikrotik, server & administrasi sistem'
  },
  {
    id: 'RPL/PPLG',
    label: 'RPL/PPLG',
    category: 'Rekayasa Perangkat Lunak & Gim',
    hint: 'Pemrograman web, mobile app, basis data, algoritma & rekayasa aplikasi'
  },
  {
    id: 'BP/Broadcasting Perfilman',
    label: 'BP/Broadcasting Perfilman',
    category: 'Seni Penyiaran & Produksi Film',
    hint: 'Produksi video, tata kamera, audio mixing, editing & multimedia penyiaran'
  }
];

export { SMK_MAJORS };
