import React from 'react';
import { Modal } from '../common/Modal';
import { DEVELOPMENT_PHASES } from '../../data/exhibitionData';
import { PrimaryButton } from '../common/PrimaryButton';
import { SecondaryButton } from '../common/SecondaryButton';
import { CheckCircle2, Compass, Layers } from 'lucide-react';

interface ExploreRoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToPaths: () => void;
}

export const ExploreRoadmapModal: React.FC<ExploreRoadmapModalProps> = ({
  isOpen,
  onClose,
  onScrollToPaths
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Tentang Sistem: PIXEL TO REALITY — FUTURE PATH"
      maxWidth="lg"
    >
      <div className="space-y-6 text-left">
        {/* Intro */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/85 border border-blue-200/80 text-blue-950">
          <Compass className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="text-slate-900">Selamat Datang di Stan Pameran RPL SMKN 1 Katapang!</strong>
            <p className="mt-1 text-slate-700">
              Aplikasi web interaktif karya kelompok siswa jurusan RPL ini membantu kamu memetakan minat dan kebiasaan menjadi gambaran pekerjaan, bidang kuliah, maupun ide usaha pemula lengkap dengan ekspor PDF.
            </p>
          </div>
        </div>

        {/* Active Architecture Pillars */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-600" />
            <span>Komponen Utama yang Aktif di Aplikasi:</span>
          </h4>

          {DEVELOPMENT_PHASES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border bg-emerald-50/45 border-emerald-200/80 text-slate-800 space-y-1.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                    {item.phase} — {item.title}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-emerald-800">
                  Aktif Digunakan
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scope note */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs leading-relaxed">
          <strong>Catatan Proyek:</strong> Seluruh pemrosesan kuis berjalan langsung di peramban untuk menjaga privasi peserta pameran. Rujukan bidang bersumber dari SKKNI Kemnaker, Spektrum SMK, SNPMB/Dikti, dan OSS RBA/KemenkopUKM sebagai panduan eksplorasi awal.
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <SecondaryButton size="md" onClick={onClose}>
            Tutup
          </SecondaryButton>
          <PrimaryButton
            size="md"
            onClick={() => {
              onClose();
              onScrollToPaths();
            }}
          >
            Lihat 4 Jalur Masa Depan
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};
