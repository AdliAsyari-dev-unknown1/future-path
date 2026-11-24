import React from 'react';
import { Wrench, BookOpen, TrendingUp } from 'lucide-react';
import { SkillProfileBreakdown } from '../../types/scoring';

interface SkillDevelopmentSectionProps {
  skillProfile: SkillProfileBreakdown;
}

export const SkillDevelopmentSection: React.FC<SkillDevelopmentSectionProps> = ({
  skillProfile
}) => {
  const { possessedSkills, learningGoals, developingAreas } = skillProfile;

  return (
    <section
      id="hasil-keterampilan"
      aria-labelledby="skills-heading"
      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 text-left scroll-mt-24"
    >
      <div className="space-y-1.5 pb-4 border-b border-slate-100">
        <h2
          id="skills-heading"
          className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight"
        >
          Profil Keterampilan & Kebutuhan Pengembangan
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Ketiga kelompok di bawah dipisahkan secara tegas berdasarkan pilihan jawabanmu agar keterampilan yang baru ingin dipelajari tidak dianggap sebagai kemampuan yang sudah dikuasai.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* 1. Sudah Dimiliki */}
        <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-3 flex flex-col">
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-emerald-200/60">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-950 font-display">
              <Wrench className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Sudah Dimiliki</span>
            </div>
            <span className="font-mono text-xs font-bold text-emerald-800 tabular-nums">
              {possessedSkills.length} bukti
            </span>
          </div>

          {possessedSkills.length > 0 ? (
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 flex-1">
              {possessedSkills.map((item) => (
                <li
                  key={`${item.questionId}-${item.optionId}`}
                  className="space-y-0.5 pb-2 border-b border-emerald-200/40 last:border-b-0 last:pb-0"
                >
                  <div className="font-medium text-slate-800 leading-snug">
                    {item.summaryLabel}
                  </div>
                  <div className="text-xs text-slate-600 font-mono">
                    Sumber: {item.questionId}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
              Belum ada keterampilan mapan yang tercatat sebagai pengalaman siap pakai dari jawaban sesi ini. Hal ini wajar bila kamu sedang berada di tahap awal atau masih lebih banyak mengeksplorasi minat.
            </p>
          )}
        </div>

        {/* 2. Ingin Dipelajari */}
        <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3 flex flex-col">
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-blue-200/60">
            <div className="flex items-center gap-2 text-sm font-bold text-blue-950 font-display">
              <BookOpen className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Ingin Dipelajari</span>
            </div>
            <span className="font-mono text-xs font-bold text-blue-800 tabular-nums">
              {learningGoals.length} topik
            </span>
          </div>

          {learningGoals.length > 0 ? (
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 flex-1">
              {learningGoals.map((item) => (
                <li
                  key={`${item.questionId}-${item.optionId}`}
                  className="space-y-0.5 pb-2 border-b border-blue-200/40 last:border-b-0 last:pb-0"
                >
                  <div className="font-medium text-slate-800 leading-snug">
                    {item.summaryLabel}
                  </div>
                  <div className="text-xs text-slate-600 font-mono">
                    Sumber: {item.questionId}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
              Tidak ada topik tujuan belajar tambahan yang terpilih secara khusus pada pertanyaan sesi ini. Kamu tetap bisa menjajaki hal baru dari rekomendasi eksplorasi di bawah.
            </p>
          )}
        </div>

        {/* 3. Perlu Dikembangkan */}
        <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3 flex flex-col">
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-amber-200/60">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-950 font-display">
              <TrendingUp className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Perlu Dikembangkan</span>
            </div>
            <span className="font-mono text-xs font-bold text-amber-900 tabular-nums">
              {developingAreas.length} area
            </span>
          </div>

          {developingAreas.length > 0 ? (
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 flex-1">
              {developingAreas.map((item) => (
                <li
                  key={`${item.questionId}-${item.optionId}`}
                  className="space-y-0.5 pb-2 border-b border-amber-200/40 last:border-b-0 last:pb-0"
                >
                  <div className="font-medium text-slate-800 leading-snug">
                    {item.summaryLabel}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    Sumber: {item.questionId}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
              Tidak ada area hambatan atau kepercayaan diri yang dilaporkan pada sesi ini. Pengembangan bertahap tetap dapat disesuaikan dengan kebutuhan kandidat yang kamu pilih.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
