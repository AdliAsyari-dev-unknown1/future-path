import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

interface PrivacyNoticeProps {
  accepted: boolean;
  onToggle: (checked: boolean) => void;
  errorMessage?: string;
}

export const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({
  accepted,
  onToggle,
  errorMessage
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/75 p-5 sm:p-6 text-left">
      <div className="flex items-center gap-2.5 mb-3 text-slate-900">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <h4 className="text-sm font-bold font-display">
          Komitmen Privasi & Etika Penggunaan Data Siswa
        </h4>
      </div>

      <ol className="space-y-2 text-xs text-slate-700 leading-relaxed pl-0.5">
        <li className="flex items-start gap-2">
          <span className="font-mono font-bold text-blue-700 shrink-0">01.</span>
          <span>
            <strong>Bukan Diagnosis Mutlak:</strong> Seluruh hasil kuis merupakan panduan refleksi eksplorasi minat setelah lulus SMK, bukan penentu takdir mutlak.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-mono font-bold text-indigo-700 shrink-0">02.</span>
          <span>
            <strong>Internal Pameran RPL:</strong> Informasi nama dan jawabanmu tidak akan dibagikan ke pihak luar atau dipertontonkan kepada peserta lain.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-mono font-bold text-amber-700 shrink-0">03.</span>
          <span>
            <strong>Penyimpanan Sesi Sementara:</strong> Data sesi saat ini hanya berada dalam memori aktif perangkat dan tidak dikirim ke server eksternal.
          </span>
        </li>
      </ol>

      {/* Checkbox Consent (>= 44px tap row) */}
      <div className="mt-4 pt-3.5 border-t border-slate-200/80">
        <label className="flex items-start gap-3 py-1.5 min-h-[44px] cursor-pointer select-none group">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => onToggle(e.target.checked)}
            className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-2 focus:ring-blue-500 border-slate-400 cursor-pointer shrink-0"
          />
          <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-slate-950 leading-snug">
            Saya memahami panduan di atas dan menyetujui pemrosesan sesi kuis eksplorasi ini.
          </span>
        </label>

        {errorMessage && (
          <div role="alert" className="mt-2 flex items-center gap-1.5 text-xs text-rose-700 font-semibold">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};
