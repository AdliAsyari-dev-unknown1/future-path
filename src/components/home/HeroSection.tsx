import React from 'react';
import { PageContainer } from '../common/PageContainer';
import { PrimaryButton } from '../common/PrimaryButton';
import { SecondaryButton } from '../common/SecondaryButton';
import {
  ArrowRight,
  Compass,
  School,
  CheckCircle2,
  Clock,
  FileDown
} from 'lucide-react';

interface HeroSectionProps {
  onStartExplore: () => void;
  onScrollToAbout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartExplore,
  onScrollToAbout
}) => {
  const quickSteps = [
    {
      num: '01',
      title: 'Profil & Arah Awal',
      desc: 'Isi nama, jurusan SMK, lalu pilih arah yang ingin dieksplorasi.'
    },
    {
      num: '02',
      title: 'Kuis Adaptif Ringan',
      desc: 'Jawab sesuai kebiasaanmu — tersedia opsi Lainnya, Belum tahu, & Lewati.'
    },
    {
      num: '03',
      title: 'Hasil 8 Aspek & PDF',
      desc: 'Lihat gambaran bidang nyata sehari-hari dan unduh laporan A4.'
    }
  ];

  const trackHighlights = [
    { label: 'Bekerja', tone: 'bg-blue-50 text-blue-800 border-blue-200/80' },
    { label: 'Kuliah', tone: 'bg-indigo-50 text-indigo-800 border-indigo-200/80' },
    { label: 'Wirausaha', tone: 'bg-amber-50 text-amber-900 border-amber-200/80' },
    { label: 'Masih Bingung', tone: 'bg-emerald-50 text-emerald-800 border-emerald-200/80' }
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 bg-stage-gradient">
      {/* Subtle decorative grid pattern overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient depth glows */}
      <div
        className="absolute -top-12 right-10 w-96 h-96 bg-indigo-200/35 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-12 w-80 h-80 bg-blue-200/45 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <PageContainer className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Product Identity & Singular Focal CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Typographic Exhibition Eyebrow */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700">
              <span>PIXEL TO REALITY EXHIBITION</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="font-semibold tracking-normal text-slate-700 normal-case">
                SMKN 1 Katapang
              </span>
            </div>

            {/* Primary Product Title & Tagline */}
            <div className="space-y-2.5">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] font-display"
                style={{ textWrap: 'balance' }}
              >
                FUTURE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                  PATH
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-extrabold text-slate-800 font-display">
                Dari Potensi Menjadi Masa Depan.
              </p>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Aplikasi interaktif karya siswa jurusan RPL SMKN 1 Katapang untuk membantu kamu mengenali gambaran pekerjaan, bidang kuliah, atau ide usaha yang nyambung dengan kebiasaanmu — praktis, tanpa tekanan, dan siap diunduh sebagai laporan PDF.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <PrimaryButton
                size="lg"
                onClick={onStartExplore}
                icon={<ArrowRight className="w-5 h-5" />}
                className="shadow-md shadow-blue-600/25 font-bold whitespace-nowrap"
              >
                Mulai Eksplorasi Sekarang
              </PrimaryButton>

              <SecondaryButton
                size="lg"
                onClick={onScrollToAbout}
                icon={<Compass className="w-5 h-5 text-slate-700" />}
                className="bg-white/95 hover:bg-white border-slate-300 font-semibold whitespace-nowrap"
              >
                Cara Kerja & Info
              </SecondaryButton>
            </div>

            {/* Grounded Guiding Strip */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Tanpa jawaban benar/salah</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Durasi ± 2 menit adaptif</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <School className="w-4 h-4 text-indigo-700 shrink-0" />
                <span>7 Jurusan SMKN 1 Katapang</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official Visual Showcase & 3-Step Flow Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-violet-500/20 rounded-[2rem] blur-2xl"
                aria-hidden="true"
              />
              <div
                className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-dot-pattern opacity-60 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white/95 backdrop-blur-xs p-6 sm:p-7 shadow-card-elevated space-y-5 text-left">
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
                  aria-hidden="true"
                />
                {/* Official Emblem Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                  <div className="p-2.5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/60 border border-slate-200/80 shrink-0">
                    <img
                      src="/assets/images/logo_p2r_transparent.png"
                      alt="Pixel to Reality Official Logo"
                      referrerPolicy="no-referrer"
                      className="h-16 sm:h-20 w-auto object-contain select-none"
                    />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <div className="text-[11px] font-extrabold uppercase tracking-widest text-blue-700 font-display">
                      ALUR EKSPLORASI
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-slate-900 font-display leading-snug">
                      3 Langkah Mengenal Pilihanmu
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {trackHighlights.map((t) => (
                        <span
                          key={t.label}
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${t.tone}`}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3-Step Visual Journey */}
                <ol className="space-y-2.5">
                  {quickSteps.map((step) => (
                    <li
                      key={step.num}
                      className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/90 hover:bg-blue-50/45 border border-slate-200/75 hover:border-blue-200/80 transition-interactive"
                    >
                      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {step.num}
                      </span>
                      <div className="min-w-0 space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                          {step.title}
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Verified Report Output Footer inside Preview Card */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <FileDown className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>Hasil ringkas 1 menit + 8 aspek nyata</span>
                  </span>
                  <span className="font-mono font-bold text-slate-700 shrink-0">A4 PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
