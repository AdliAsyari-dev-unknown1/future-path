# PIXEL TO REALITY — FUTURE PATH

**"Dari Potensi Menjadi Masa Depan"**

Website interaktif eksplorasi masa depan siswa **SMKN 1 Katapang** untuk acara **Pameran Jurusan RPL — PIXEL TO REALITY**. Aplikasi ini membantu peserta memahami kecenderungan diri, mengeksplorasi jalur masa depan (**Bekerja**, **Kuliah**, **Wirausaha**, maupun mode **Masih Bingung**), mempelajari Career Insight nyata di setiap bidang, hingga mengunduh atau mencetak ringkasan hasil personal dalam bentuk PDF.

---

## Project Overview

- **Identitas Produk**: PIXEL TO REALITY — FUTURE PATH (*Dari Potensi Menjadi Masa Depan*)
- **Target Pengguna**: Siswa dan pengunjung Pameran Jurusan RPL SMKN 1 Katapang
- **Arsitektur**: Client-side Static Single Page Application (SPA), local-first, tanpa backend atau database wajib
- **Fitur Utama**:
  - **Alur Eksplorasi Terpandu**: Halaman awal, biodata peserta, pemilihan jalur eksplorasi, dan asesmen adaptif (8–18 pertanyaan dari bank 110 pertanyaan lintas bidang).
  - **Scoring 6 Dimensi & Matching Engine**: Pencocokan profil terhadap 109 kandidat aktif (43 Bekerja, 38 Kuliah, 28 Wirausaha) across 13 domain karier dengan anti-bias jurusan.
  - **Ringkasan 1 Menit & Top 5 Rekomendasi**: Hasil utama, alternatif relevan, rekomendasi lintas jalur, serta mode `belum_cukup` / *Masih Bingung*.
  - **Eksplorasi 109 Pilihan Bidang**: Filter jalur, filter domain, pencarian multi-field, dan modal detail kandidat.
  - **Career Insight 8 Aspek**: Aktivitas nyata, lingkungan kerja/kuliah/usaha, keterampilan (hard, soft, dasar), pendidikan/persyaratan, kisaran penghasilan/prospek, tantangan, peluang perkembangan, dan langkah awal konkret.
  - **Ekspor PDF & Halaman Cetak**: Laporan A4 personal berbasis `jsPDF` serta halaman cetak `window.print()`.

---

## Technology Stack

| Komponen | Teknologi & Versi (`package.json`) |
| --- | --- |
| Framework UI | `react` (`^19.0.1`), `react-dom` (`^19.0.1`) |
| Bahasa | TypeScript (`^7.0.2`) |
| Build Tool & Dev Server | `vite` (`^8.3.0`), `@vitejs/plugin-react` (`^6.1.1`) |
| Styling | Tailwind CSS v4 (`tailwindcss` `^4.3.3`, `@tailwindcss/vite` `^4.3.3`) |
| Ikon & Animasi | `lucide-react` (`^0.546.0`), `motion` (`^12.23.24`) |
| Ekspor PDF | `jspdf` (`^4.2.1`) |

---

## Requirements

- **Node.js**: Direkomendasikan versi `>= 20.0.0` (teruji pada `v22.23.5`)
- **Package Manager**: `npm` (`>= 10.0.0`, teruji pada `10.9.9`) atau `Bun` (`>= 1.1.0`, teruji pada `1.4.4`, menggunakan `bun.lock` yang tersedia di repository)

---

## Environment Variables

Aplikasi ini berjalan **100% di sisi klien (client-side)** dan **tidak memerlukan environment variable apa pun** untuk pengembangan lokal maupun deployment production di Vercel.

Lihat `.env.example` untuk dokumentasi variabel opsional di masa mendatang. Jangan menyimpan API key atau rahasia apa pun ke dalam repository.

---

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   # atau jika menggunakan Bun:
   bun install
   ```
2. **Jalankan server development** (berjalan di `http://localhost:3000`):
   ```bash
   npm run dev
   ```
3. **Pemeriksaan tipe TypeScript (`lint`)**:
   ```bash
   npm run lint
   ```

---

## Production Build

Untuk membangun output statis ke direktori `dist/` dan mengujinya secara lokal sebelum deployment:

```bash
npm run lint
npm run build
npm run preview
```

Secara default `npm run preview` menyajikan hasil build production `dist/` pada port lokal Vite (umumnya `http://localhost:4173`).

---

## Deployment to Vercel

### Persiapan Repository GitHub

1. Pastikan proyek sudah diinisialisasi sebagai repository Git dan di-push ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "chore: prepare PIXEL TO REALITY — FUTURE PATH for production release"
   git branch -M main
   git remote add origin https://github.com/<username>/<nama-repo>.git
   git push -u origin main
   ```

### Langkah Import & Deploy ke Vercel

1. **Login ke Vercel** melalui [https://vercel.com](https://vercel.com) (disarankan masuk menggunakan akun GitHub yang sama).
2. Klik tombol **Add New...** lalu pilih **Project**.
3. Pilih repository GitHub **PIXEL TO REALITY — FUTURE PATH** dari daftar **Import Git Repository**, lalu klik **Import**.
4. Pada bagian **Framework Preset**, pastikan terpilih **Vite** (terdeteksi otomatis melalui `vercel.json` dan `package.json`).
5. Pastikan **Root Directory** dibiarkan default (`./`).
6. Pastikan **Build and Output Settings** menggunakan:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: biarkan default Vercel (atau `npm install` / `bun install`)
7. Pada bagian **Environment Variables**, **tidak perlu menambahkan variabel apa pun** karena aplikasi tidak bergantung pada API key atau backend eksternal.
8. Klik **Deploy** dan tunggu proses instalasi serta build Vite selesai.
9. Setelah deployment selesai, buka URL publik `https://<project-name>.vercel.app` yang diberikan Vercel untuk memverifikasi halaman utama, alur asesmen, eksplorasi 109 bidang, gambar logo, dan ekspor PDF.
