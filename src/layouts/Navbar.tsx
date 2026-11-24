import React, { useState } from 'react';
import { AppLogo } from '../components/common/AppLogo';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { useStudentSession } from '../context/StudentSessionContext';
import { Menu, X, RotateCcw, Home, Layers } from 'lucide-react';

interface NavbarProps {
  onStartExplore: () => void;
  onOpenRoadmap: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartExplore, onOpenRoadmap }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { step, isStarted, isAssessmentComplete, resetSession, biodata } = useStudentSession();

  const navLinks = [
    { label: 'Kenali Produk', href: '#kenali-future-path' },
    { label: 'Pilihan Masa Depan', href: '#pilihan-masa-depan' },
    { label: 'Prinsip Asesmen', href: '#prinsip-asesmen' },
    { label: 'Stan Pameran RPL', href: '#info-stan' }
  ];

  const activeStageLabel =
    step === 'biodata'
      ? 'Isi Biodata'
      : step === 'direction'
      ? 'Pilih Arah'
      : isAssessmentComplete
      ? 'Hasil Asesmen'
      : 'Kuis Adaptif';

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-interactive print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (Clean Unboxed Links/Status) — Zone 3 (Action) */}
        <div className="flex items-center justify-between gap-4 lg:gap-8 h-18">
          {/* Zone 1: Official P2R Logo & FUTURE PATH Brand Wordmark */}
          <button
            type="button"
            onClick={resetSession}
            className="flex items-center gap-2 select-none shrink-0 text-left cursor-pointer focus-ring rounded-lg"
            aria-label="Kembali ke Beranda FUTURE PATH — PIXEL TO REALITY"
          >
            <AppLogo size="sm" withTagline={false} variant="light" />
          </button>

          {/* Zone 2: Navigation Links OR Clean Unboxed Session Status */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-slate-700 min-w-0">
            {isStarted ? (
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-600 whitespace-nowrap min-w-0">
                <span className="font-bold text-slate-900 truncate max-w-[180px]">
                  {biodata.fullName.trim() || 'Peserta Baru'}
                </span>
                {biodata.major && (
                  <>
                    <span className="text-slate-300" aria-hidden="true">·</span>
                    <span className="text-slate-600">{biodata.major}</span>
                  </>
                )}
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className={isAssessmentComplete ? 'font-bold text-emerald-700' : 'font-bold text-blue-700'}>
                  {activeStageLabel}
                </span>
              </div>
            ) : (
              <>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors py-1.5 hover:underline underline-offset-4 decoration-blue-600/40 focus-ring rounded"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={onOpenRoadmap}
                  className="hidden lg:inline-flex whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors py-1.5 items-center cursor-pointer text-slate-700 hover:underline underline-offset-4 decoration-blue-600/40 focus-ring rounded"
                >
                  Tentang Sistem
                </button>
              </>
            )}
          </div>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {isStarted ? (
              <button
                type="button"
                onClick={resetSession}
                className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-interactive cursor-pointer border border-slate-200 whitespace-nowrap shrink-0 focus-ring"
                title="Keluar dari sesi dan kembali ke beranda"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>Ganti Peserta / Beranda</span>
              </button>
            ) : (
              <PrimaryButton
                size="md"
                onClick={onStartExplore}
                className="whitespace-nowrap shrink-0"
              >
                Mulai Eksplorasi
              </PrimaryButton>
            )}
          </div>

          {/* Mobile Menu Button (>= 44px touch targets) */}
          <div className="flex sm:hidden items-center gap-1 shrink-0">
            {isStarted && (
              <button
                type="button"
                onClick={resetSession}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center focus-ring"
                aria-label="Kembali ke beranda"
              >
                <Home className="w-5 h-5" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-ring"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-100 py-3 px-1 space-y-1.5 bg-white">
            {isStarted ? (
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs space-y-1.5 mb-2">
                <div className="font-bold text-blue-700">FUTURE PATH · Sesi Aktif</div>
                <div>
                  Peserta: <strong>{biodata.fullName.trim() || 'Belum diisi'}</strong>
                </div>
                {biodata.major && (
                  <div>
                    Jurusan: <strong>{biodata.major}</strong>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-200 flex justify-between items-center gap-2">
                  <span>
                    Tahap: <strong>{activeStageLabel}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      resetSession();
                    }}
                    className="px-3 py-2 min-h-[44px] inline-flex items-center gap-1.5 rounded-lg text-blue-700 font-bold hover:bg-blue-50 cursor-pointer focus-ring"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Sesi</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center min-h-[44px] px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors focus-ring"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRoadmap();
                  }}
                  className="w-full min-h-[44px] text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors flex items-center gap-2 focus-ring"
                >
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>Tentang Sistem</span>
                </button>
                <div className="pt-2">
                  <PrimaryButton
                    size="md"
                    fullWidth
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onStartExplore();
                    }}
                  >
                    Mulai Eksplorasi
                  </PrimaryButton>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
