import React from 'react';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { GUIDING_PRINCIPLES } from '../../data/exhibitionData';
import { ShieldCheck, Compass, Lightbulb, Users } from 'lucide-react';

export const GuidingPrinciples: React.FC = () => {
  const getPrincipleMeta = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return {
          icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
          badgeBg: 'bg-emerald-50 border-emerald-200/80'
        };
      case 'Compass':
        return {
          icon: <Compass className="w-5 h-5 text-blue-700" />,
          badgeBg: 'bg-blue-50 border-blue-200/80'
        };
      case 'Sparkles':
        return {
          icon: <Lightbulb className="w-5 h-5 text-indigo-700" />,
          badgeBg: 'bg-indigo-50 border-indigo-200/80'
        };
      case 'Users':
        return {
          icon: <Users className="w-5 h-5 text-amber-700" />,
          badgeBg: 'bg-amber-50 border-amber-200/80'
        };
      default:
        return {
          icon: <Compass className="w-5 h-5 text-blue-700" />,
          badgeBg: 'bg-blue-50 border-blue-200/80'
        };
    }
  };

  return (
    <section id="prinsip-asesmen" className="py-14 md:py-20 bg-lavender-surface relative overflow-hidden">
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-60 h-60 bg-blue-100/35 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <PageContainer className="relative z-10">
        <SectionHeading
          kicker="Fondasi & Etika Eksplorasi"
          title="Prinsip Utama Pendampingan Siswa"
          subtitle="Aplikasi ini dirancang sebagai kawan diskusi yang objektif, adil lintas jurusan, dan suportif bagi masa depanmu."
          align="center"
        />

        {/* 2x2 Numbered Editorial Grid (distinct rhythm from the 4-card tracks strip above) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {GUIDING_PRINCIPLES.map((principle, idx) => {
            const meta = getPrincipleMeta(principle.iconName);
            return (
              <div
                key={principle.title}
                className="p-6 sm:p-7 bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md transition-interactive text-left flex items-start gap-4"
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div
                    className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${meta.badgeBg}`}
                  >
                    {meta.icon}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
};
