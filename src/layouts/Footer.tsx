import React from 'react';
import { AppLogo } from '../components/common/AppLogo';
import { EXHIBITION_INFO } from '../data/exhibitionData';
import { MapPin, School, Users2 } from 'lucide-react';

interface FooterProps {
  onOpenRoadmap: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRoadmap }) => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 mt-20 text-left print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-10 border-b border-slate-800">
          {/* Column 1: Official Logo & Full Project Identity */}
          <div className="space-y-4">
            <AppLogo size="sm" withTagline={false} variant="dark" />
            <div className="space-y-1.5">
              <div className="text-sm font-bold text-white font-display tracking-tight">
                PIXEL TO REALITY — FUTURE PATH
              </div>
              <p className="text-xs font-semibold text-blue-400">
                Dari Potensi Menjadi Masa Depan.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Proyek Kelompok Siswa Jurusan RPL — Pameran Jurusan RPL SMKN 1 Katapang.
              </p>
            </div>
          </div>

          {/* Column 2: SMKN 1 Katapang Exhibition Context */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Konteks Proyek
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <School className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{EXHIBITION_INFO.eventName}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{EXHIBITION_INFO.venue}</span>
              </div>
              <div className="flex items-start gap-2">
                <Users2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{EXHIBITION_INFO.projectTeam}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Status & Roadmap */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Tentang FUTURE PATH
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Aplikasi eksplorasi interaktif dengan pertanyaan adaptif yang menyesuaikan jawabanmu untuk siswa 7 jurusan SMKN 1 Katapang. Disajikan sebagai media refleksi diri, bukan keputusan mutlak masa depan.
            </p>
            <div>
              <button
                type="button"
                onClick={onOpenRoadmap}
                className="text-xs font-semibold text-blue-300 hover:text-blue-200 underline underline-offset-4 cursor-pointer focus-ring rounded"
              >
                Lihat Ringkasan Sistem →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 PIXEL TO REALITY — FUTURE PATH · Proyek Kelompok Siswa Jurusan RPL SMKN 1 Katapang.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#kenali-future-path" className="hover:text-slate-200 transition-colors focus-ring rounded">
              Apa itu FUTURE PATH?
            </a>
            <span aria-hidden="true">·</span>
            <a href="#pilihan-masa-depan" className="hover:text-slate-200 transition-colors focus-ring rounded">
              Pilihan Masa Depan
            </a>
            <span aria-hidden="true">·</span>
            <a href="#prinsip-asesmen" className="hover:text-slate-200 transition-colors focus-ring rounded">
              Prinsip Panduan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
