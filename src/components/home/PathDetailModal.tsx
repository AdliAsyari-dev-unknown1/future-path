import React from 'react';
import { Modal } from '../common/Modal';
import { FuturePathMeta } from '../../types/recommendation';
import { PrimaryButton } from '../common/PrimaryButton';
import { SecondaryButton } from '../common/SecondaryButton';
import { CheckCircle2, AlertCircle, School, Star } from 'lucide-react';

interface PathDetailModalProps {
  path: FuturePathMeta | null;
  isOpen: boolean;
  onClose: () => void;
  onExploreQuizNotice: () => void;
}

export const PathDetailModal: React.FC<PathDetailModalProps> = ({
  path,
  isOpen,
  onClose,
  onExploreQuizNotice
}) => {
  if (!path) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Panduan Jalur: ${path.title}`} maxWidth="lg">
      <div className="space-y-6 text-left">
        {/* Header badge & title */}
        <div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${path.badgeBg} ${path.badgeText}`}>
            {path.badgeLabel}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 font-display">
            {path.title}
          </h3>
          <p className="text-sm font-medium text-slate-600 mt-1">
            {path.tagline}
          </p>
        </div>

        {/* Overview summary */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <p className="text-sm text-slate-700 leading-relaxed">
            {path.summary}
          </p>
        </div>

        {/* 2-column detail sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ideal For */}
          <div className="p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-blue-700" />
              <span>Sangat Cocok Jika Kamu:</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              {path.idealFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Strengths from SMK */}
          <div className="p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700" />
              <span>Kekuatan Utama Siswa SMK:</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              {path.keyStrengths.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Realistic challenge & SMK tip */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/75 border border-amber-200/80 text-amber-950 text-xs">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>Tantangan Nyata:</strong> {path.typicalChallenge}
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/75 border border-blue-200/80 text-blue-950 text-xs">
            <School className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <strong>Tips Khusus SMKN 1 Katapang:</strong> {path.smkContextTip}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <SecondaryButton size="md" onClick={onClose}>
            Tutup
          </SecondaryButton>
          <PrimaryButton
            size="md"
            onClick={() => {
              onClose();
              onExploreQuizNotice();
            }}
          >
            Mulai Eksplorasi Jalur Ini
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};
