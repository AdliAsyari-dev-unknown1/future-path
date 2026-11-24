import React from 'react';
import { useStudentSession } from '../../context/StudentSessionContext';
import { MAJOR_LIST } from '../../data/studentMajors';
import { GRADE_LEVELS, SmkMajor, GradeLevel } from '../../types/student';
import { PrivacyNotice } from './PrivacyNotice';
import { NavigationControls } from './NavigationControls';
import { AlertCircle, User, BookOpen, GraduationCap } from 'lucide-react';

export const BiodataForm: React.FC = () => {
  const {
    biodata,
    setBiodataField,
    validationErrors,
    goToNextStep,
    goToPrevStep,
    resetSession
  } = useStudentSession();

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 sm:space-y-8 text-left">
      {/* Title & Introduction */}
      <div className="text-center space-y-2">
        <div className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700">
          Langkah 01 · Identitas Singkat Peserta
        </div>
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display"
          style={{ textWrap: 'balance' }}
        >
          Kenalkan Dirimu Terlebih Dahulu
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Isi nama dan pilih jurusanmu di SMKN 1 Katapang agar hasil refleksi dan laporan PDF sesuai dengan profilmu.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-md shadow-slate-200/40 space-y-6">
        {/* Field 1: Nama Peserta (Wajib) */}
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold text-slate-800"
          >
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Nama Lengkap atau Panggilan</span>
              <span className="text-rose-600 font-bold" aria-hidden="true">*</span>
            </span>
            <span className="text-xs text-slate-600 font-medium">Wajib diisi</span>
          </label>

          <input
            id="fullName"
            type="text"
            value={biodata.fullName}
            onChange={(e) => setBiodataField('fullName', e.target.value)}
            placeholder="Contoh: Rian Pratama atau Rian"
            className={`w-full px-4 py-3 min-h-[48px] rounded-xl border text-sm sm:text-base text-slate-900 placeholder:text-slate-500 bg-slate-50/60 focus:bg-white transition-interactive focus-ring ${
              validationErrors.fullName
                ? 'border-rose-500 ring-2 ring-rose-100'
                : 'border-slate-300 hover:border-slate-400'
            }`}
          />

          {validationErrors.fullName && (
            <div role="alert" className="flex items-center gap-1.5 text-xs text-rose-700 font-semibold pt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{validationErrors.fullName}</span>
            </div>
          )}
        </div>

        {/* Field 2: Jurusan (Wajib - 7 Jurusan Resmi SMKN 1 Katapang) */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold text-slate-800">
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Pilihan Jurusan di SMKN 1 Katapang</span>
              <span className="text-rose-600 font-bold" aria-hidden="true">*</span>
            </span>
            <span className="text-xs text-slate-600 font-medium">Pilih 1 dari 7 jurusan</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {MAJOR_LIST.map((majorItem) => {
              const isSelected = biodata.major === majorItem.id;
              return (
                <button
                  type="button"
                  key={majorItem.id}
                  aria-pressed={isSelected}
                  onClick={() => setBiodataField('major', majorItem.id as SmkMajor)}
                  className={`flex flex-col justify-center p-3.5 min-h-[56px] rounded-xl border text-left transition-interactive cursor-pointer select-none focus-ring active:scale-[0.992] ${
                    isSelected
                      ? 'animate-option-pop bg-gradient-to-br from-blue-50 to-indigo-50/70 border-blue-600 ring-2 ring-blue-500/20 text-blue-950 shadow-sm'
                      : 'bg-white hover:bg-slate-50/90 border-slate-200 hover:border-blue-300 text-slate-800 shadow-xs hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span className="text-sm font-bold font-display">
                      {majorItem.label}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-slate-400'
                      }`}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                  <span className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                    {majorItem.hint}
                  </span>
                </button>
              );
            })}
          </div>

          {validationErrors.major && (
            <div role="alert" className="flex items-center gap-1.5 text-xs text-rose-700 font-semibold pt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{validationErrors.major}</span>
            </div>
          )}
        </div>

        {/* Field 3: Tingkat / Kelas (Opsional) */}
        <div className="space-y-1.5 pt-1">
          <label
            htmlFor="gradeLevel"
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800"
          >
            <GraduationCap className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Tingkat Kelas di SMKN 1 Katapang</span>
            <span className="text-xs text-slate-600 font-normal">(Opsional)</span>
          </label>

          <select
            id="gradeLevel"
            value={biodata.gradeLevel || ''}
            onChange={(e) => setBiodataField('gradeLevel', e.target.value as GradeLevel)}
            className="w-full px-3.5 py-3 min-h-[48px] rounded-xl border border-slate-300 hover:border-slate-400 text-sm text-slate-900 bg-slate-50/60 focus:bg-white transition-interactive focus-ring cursor-pointer"
          >
            <option value="">-- Pilih Tingkat Kelas (Opsional) --</option>
            {GRADE_LEVELS.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>

        {/* Privacy Notice with Consent Checkbox */}
        <div className="pt-2">
          <PrivacyNotice
            accepted={biodata.consentAccepted}
            onToggle={(checked) => setBiodataField('consentAccepted', checked)}
            errorMessage={validationErrors.consent}
          />
        </div>
      </div>

      {/* Navigation Controls: Back to Welcome, Next to Direction */}
      <NavigationControls
        onBack={goToPrevStep}
        onNext={goToNextStep}
        onReset={resetSession}
        backLabel="Kembali ke Beranda"
        nextLabel="Lanjut: Pilih Arah"
      />
    </div>
  );
};
