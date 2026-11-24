import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Rocket,
  Compass,
  Info,
  ShieldCheck,
  Eye,
  RotateCcw,
  RefreshCw
} from 'lucide-react';
import { FuturePathId, StudentBiodata } from '../../types/student';
import { StudentProfileAssessment } from '../../types/scoring';
import { RecommendationMatchingOutput } from '../../types/recommendation';
import { getDirectionDisplayMeta } from '../../services/resultNarrativeBuilder';
import { getSufficiencyMeta } from './ResultStatusHelpers';

interface ResultIntroductionSectionProps {
  biodata: StudentBiodata;
  direction: FuturePathId | null;
  profileAssessment: StudentProfileAssessment;
  recommendations: RecommendationMatchingOutput | null;
  onReviewAnswers: () => void;
  onRetakeQuiz: () => void;
  onResetSession: () => void;
}

function getDirectionIcon(direction: FuturePathId | null) {
  switch (direction) {
    case 'bekerja':
      return <Briefcase className="w-5 h-5 text-blue-700 shrink-0" />;
    case 'kuliah':
      return <GraduationCap className="w-5 h-5 text-indigo-700 shrink-0" />;
    case 'wirausaha':
      return <Rocket className="w-5 h-5 text-amber-700 shrink-0" />;
    default:
      return <Compass className="w-5 h-5 text-emerald-700 shrink-0" />;
  }
}

export const ResultIntroductionSection: React.FC<ResultIntroductionSectionProps> = ({
  biodata,
  direction,
  profileAssessment,
  recommendations,
  onReviewAnswers,
  onRetakeQuiz,
  onResetSession
}) => {
  const dirMeta = getDirectionDisplayMeta(direction);
  const overallSuff = getSufficiencyMeta(profileAssessment.overallSufficiency);
  const firstName = biodata.fullName.trim() || 'Peserta';
  const catalogMode = recommendations?.catalogMode ?? 'simulation_fixture';
  const catalogSummary = recommendations?.catalogSummary;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      aria-labelledby="result-intro-heading"
      className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-left"
    >
      {/* Top Identity & Metadata Strip */}
      <div className="px-6 sm:px-9 pt-6 sm:pt-8 pb-6 border-b border-slate-100 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold text-slate-600">
            <span className="font-display font-extrabold text-blue-700 tracking-wide">
              FUTURE PATH
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span>Pameran RPL PIXEL TO REALITY</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span>SMKN 1 Katapang</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold">
            {overallSuff.icon}
            <span className={overallSuff.textColor}>{overallSuff.label}</span>
            <span className="text-slate-300 mx-1" aria-hidden="true">·</span>
            <span className="text-slate-600 font-mono tabular-nums">
              {profileAssessment.validAnsweredCount} jawaban valid
            </span>
          </div>
        </div>

        {/* Personal Exploratory Headline */}
        <div className="space-y-2.5 max-w-3xl">
          <h1
            id="result-intro-heading"
            className="text-2xl sm:text-4xl font-black text-slate-900 font-display tracking-tight leading-[1.15]"
            style={{ textWrap: 'balance' }}
          >
            Gambaran Pilihan Masa Depan untuk {firstName}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Halaman ini merangkum pola jawabanmu di{' '}
            <strong className="text-slate-800">FUTURE PATH</strong>. Ini bukan nilai kepintaran ataupun keputusan wajib — anggap saja sebagai teman diskusi untuk melihat gambaran pekerjaan, kuliah, atau usaha yang nyambung dengan kebiasaanmu.
          </p>
        </div>

        {/* Participant Context Grid (Single-level clean surfaces, unboxed metadata) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 space-y-1">
            <div className="text-xs font-semibold text-slate-500">Peserta</div>
            <div className="text-base font-bold text-slate-900 font-display truncate">
              {firstName}
            </div>
            <div className="text-xs text-slate-600">
              SMKN 1 Katapang{biodata.gradeLevel ? ` · ${biodata.gradeLevel}` : ''}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 space-y-1">
            <div className="text-xs font-semibold text-slate-500">Jurusan Sekolah</div>
            <div className="text-base font-bold text-slate-900 font-display truncate">
              {biodata.major || 'Belum tercatat'}
            </div>
            <div className="text-xs text-slate-600">
              Hanya sebagai catatan, tidak membatasi rekomendasi
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 space-y-1">
            <div className="text-xs font-semibold text-slate-500">Arah yang Kamu Pilih</div>
            <div className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
              {getDirectionIcon(direction)}
              <span className="truncate">{dirMeta.label}</span>
            </div>
            <div className="text-xs text-slate-600">{dirMeta.shortTagline}</div>
          </div>
        </div>
      </div>

      {/* Honest Catalog Verification & Source Disclosure + Section Jump Navigation */}
      <div className="px-6 sm:px-9 py-5 bg-slate-50/60 space-y-4">
        {catalogMode === 'production_verified' && (
          <div
            role="note"
            className="flex items-start gap-3 p-4 rounded-2xl bg-blue-50/75 border border-blue-200/90 text-xs sm:text-sm text-slate-800 leading-relaxed"
          >
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-slate-900">
                Informasi Bidang Terverifikasi Sumber Resmi
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Katalog memuat{' '}
                <strong>{catalogSummary?.verifiedCount ?? 0} bidang terverifikasi penuh</strong> dan{' '}
                <strong>{catalogSummary?.partiallyVerifiedCount ?? 0} bidang sebagian terverifikasi</strong>{' '}
                dari acuan SKKNI Kemnaker, Spektrum SMK, SNPMB/Dikti, dan OSS RBA/KemenkopUKM (diperiksa 18 Nov 2026). Halaman ini <strong>bukan portal lowongan kerja, pendaftaran kampus, maupun hitungan modal usaha</strong>; biaya kuliah, akreditasi prodi, dan nominal modal sengaja tidak direka-reka.
              </p>
            </div>
          </div>
        )}

        {catalogMode === 'hybrid_catalog' && (
          <div
            role="note"
            className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/85 border border-amber-200/90 text-xs sm:text-sm text-amber-950 leading-relaxed"
          >
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-amber-900">
                Katalog Campuran (Produksi Terverifikasi + Simulasi Terbatas)
              </div>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                Sebagian jalur telah memakai data terverifikasi ({catalogSummary?.productionCount ?? 0} entri produksi), sementara jalur yang belum lengkap masih mempertahankan penanda simulasi ({catalogSummary?.simulationCount ?? 0} entri simulasi) secara terpisah.
              </p>
            </div>
          </div>
        )}

        {catalogMode === 'simulation_fixture' && (
          <div
            role="note"
            className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/85 border border-amber-200/90 text-xs sm:text-sm text-amber-950 leading-relaxed"
          >
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-amber-900">
                Pemberitahuan Data Simulasi (Bukan Katalog Produksi Nyata)
              </div>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                Kandidat di bawah menggunakan{' '}
                <strong>data simulasi terstruktur (bukan katalog produksi nyata)</strong>. Halaman ini tidak menampilkan lowongan kerja aktif, daftar kampus resmi, biaya kuliah, maupun rincian modal usaha.
              </p>
            </div>
          </div>
        )}

        {catalogMode === 'empty_catalog' && (
          <div
            role="note"
            className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50/80 border border-rose-200/90 text-xs sm:text-sm text-rose-950 leading-relaxed"
          >
            <Info className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-rose-900">
                Katalog Rekomendasi Sedang Dikembangkan
              </div>
              <p className="text-xs text-rose-900/90 leading-relaxed">
                Belum ada entri katalog terverifikasi yang tersedia untuk ditampilkan pada sesi ini. Profil enam dimensi dan keterampilan tetap valid untuk refleksi tanpa rekomendasi bidang paksaan.
              </p>
            </div>
          </div>
        )}

        {/* Section Quick-Jump Bar + Primary Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
          <nav
            aria-label="Navigasi bagian halaman hasil"
            className="flex flex-wrap items-center gap-1.5"
          >
            {[
              { id: 'hasil-ringkasan', label: 'Ringkasan Profil' },
              { id: 'hasil-enam-dimensi', label: '6 Dimensi' },
              { id: 'hasil-keterampilan', label: 'Keterampilan' },
              { id: 'hasil-rekomendasi', label: 'Rekomendasi' },
              { id: 'hasil-lintas-jalur', label: 'Lintas Jalur' },
              { id: 'hasil-langkah-berikutnya', label: 'Langkah Berikutnya' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-ring min-h-[38px]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onReviewAnswers}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-semibold text-blue-700 bg-white border border-blue-200 hover:bg-blue-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-ring"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Ubah Jawaban</span>
            </button>

            <button
              type="button"
              onClick={onRetakeQuiz}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-ring"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Ulangi Kuis</span>
            </button>

            <button
              type="button"
              onClick={onResetSession}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-ring"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Peserta Baru</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
