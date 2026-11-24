import React from 'react';
import { PageContainer } from '../common/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { OptionCard } from '../common/OptionCard';
import { FUTURE_PATHS } from '../../data/futurePathsData';
import { FuturePathMeta } from '../../types/recommendation';
import { Briefcase, GraduationCap, Rocket, Compass } from 'lucide-react';

interface FuturePathsPreviewProps {
  onSelectPath: (path: FuturePathMeta) => void;
}

export const FuturePathsPreview: React.FC<FuturePathsPreviewProps> = ({ onSelectPath }) => {
  const getPathIcon = (iconName: FuturePathMeta['iconName'], colorClass: string) => {
    const props = { className: `w-6 h-6 ${colorClass}` };
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'Rocket':
        return <Rocket {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      default:
        return <Compass {...props} />;
    }
  };

  const getIconColorClass = (id: string) => {
    switch (id) {
      case 'bekerja':
        return 'text-blue-600';
      case 'kuliah':
        return 'text-purple-600';
      case 'wirausaha':
        return 'text-orange-600';
      case 'bingung':
        return 'text-emerald-600';
      default:
        return 'text-slate-600';
    }
  };

  return (
    <section id="pilihan-masa-depan" className="py-14 md:py-20 bg-warm-surface border-y border-slate-200/80 relative">
      {/* Decorative soft pastel blobs */}
      <div
        className="absolute top-10 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <PageContainer className="relative z-10">
        <SectionHeading
          kicker="Empat Jalan Potensi"
          title="Ke Mana Langkahmu Setelah Lulus SMK?"
          subtitle="Setiap arah memiliki tantangan dan peluang tersendiri. Pelajari intisari masing-masing jalur berikut untuk mengenali mana yang paling selaras dengan kondisimu."
          align="center"
        />

        {/* 4 Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUTURE_PATHS.map((path) => (
            <OptionCard
              key={path.id}
              id={path.id}
              title={path.title}
              subtitle={path.tagline}
              description={path.summary}
              badgeLabel={path.badgeLabel}
              badgeBg={path.badgeBg}
              badgeText={path.badgeText}
              icon={getPathIcon(path.iconName, getIconColorClass(path.id))}
              ctaText="Detail & Tips Persiapan"
              onClick={() => onSelectPath(path)}
              className="h-full bg-white/95 backdrop-blur-xs hover:border-slate-300 shadow-sm"
            />
          ))}
        </div>

        {/* Concise Action Guidance Note */}
        <div className="mt-10 p-4 rounded-2xl bg-white/85 border border-slate-200/90 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Tips Cepat:</strong> Klik salah satu kartu di atas untuk membaca contoh aktivitas, tantangan nyata, dan bekal awal dari masing-masing jalur sebelum memulai kuis.
          </p>
        </div>
      </PageContainer>
    </section>
  );
};
