import React from 'react';
import { AlertTriangle, FileText } from 'lucide-react';
import { FuturePathId, StudentBiodata } from '../../types/student';
import { StudentProfileAssessment } from '../../types/scoring';
import { buildPersonalProfileOverview } from '../../services/resultNarrativeBuilder';

interface PersonalProfileOverviewSectionProps {
  profileAssessment: StudentProfileAssessment;
  direction: FuturePathId | null;
  biodata: StudentBiodata;
}

export const PersonalProfileOverviewSection: React.FC<PersonalProfileOverviewSectionProps> = ({
  profileAssessment,
  direction,
  biodata
}) => {
  const overview = buildPersonalProfileOverview(profileAssessment, direction, biodata);

  return (
    <section
      id="hasil-ringkasan"
      aria-labelledby="overview-heading"
      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 text-left scroll-mt-24"
    >
      <div className="space-y-2 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Gambaran Profil Personal</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono tabular-nums">
            {profileAssessment.validAnsweredCount} bukti jawaban dianalisis
          </span>
        </div>
        <h2
          id="overview-heading"
          className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight"
        >
          Apa yang Terlihat dari Jawabanmu
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
          {overview.headlineSummary}
        </p>
      </div>

      {overview.cautionBanner && (
        <div
          role="status"
          className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/85 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed"
        >
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>{overview.cautionBanner}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {overview.blocks.map((block, idx) => (
          <div
            key={block.id}
            className="space-y-1.5 pb-4 border-b border-slate-100 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-mono font-bold text-blue-700 tabular-nums">
                0{idx + 1}.
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                {block.questionPrompt}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {block.answerText}
            </p>
            <div className="text-xs text-slate-500 font-medium pt-0.5">
              {block.evidenceNote}
            </div>
          </div>
        ))}
      </div>

      {(overview.customOtherNotes.length > 0 || overview.nonCareerPossessedNotes.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          {overview.customOtherNotes.length > 0 && (
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
              <div className="text-xs font-bold text-blue-950">
                Catatan Jawaban Khususmu ("Lainnya")
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {overview.customOtherNotes.map((note, idx) => (
                  <li key={`${note.questionId}-${idx}`} className="leading-relaxed">
                    <span className="font-medium text-slate-700">{note.questionText}: </span>
                    <span className="font-bold text-slate-900">"{note.customText}"</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-600 leading-snug">
                Dicatat apa adanya sebagai preferensi pribadimu tanpa dipaksakan ke bidang yang tidak relevan.
              </p>
            </div>
          )}

          {overview.nonCareerPossessedNotes.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="text-xs font-bold text-slate-900">
                Kemampuan yang Dipisahkan dari Target Karier
              </div>
              <ul className="space-y-1 text-xs text-slate-700">
                {overview.nonCareerPossessedNotes.map((label, idx) => (
                  <li key={idx} className="leading-relaxed">• {label}</li>
                ))}
              </ul>
              <p className="text-xs text-slate-600 leading-snug">
                Kemampuan ini tetap dihargai sebagai bekal praktik tanpa mendorong rekomendasi karier yang tidak kamu minati.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
