import React from 'react';
import { useStudentSession } from '../../context/StudentSessionContext';
import { DirectionCard } from './DirectionCard';
import { NavigationControls } from './NavigationControls';
import { FuturePathId } from '../../types/student';
import { AlertCircle, Info } from 'lucide-react';

export const DirectionSelector: React.FC = () => {
  const {
    biodata,
    direction,
    setDirection,
    validationErrors,
    goToNextStep,
    goToPrevStep,
    resetSession
  } = useStudentSession();

  const directionOptions: {
    id: FuturePathId;
    title: string;
    tagline: string;
    description: string;
  }[] = [
    {
      id: 'bekerja',
      title: 'Bekerja',
      tagline: 'Dunia Kerja & Industri',
      description:
        'Mengenali gambaran pekerjaan sehari-hari dan bekal yang sesuai dengan minat serta kebiasaanmu.'
    },
    {
      id: 'kuliah',
      title: 'Kuliah',
      tagline: 'Pendidikan Vokasi & Akademik',
      description:
        'Mengeksplorasi bidang studi kuliah, materi praktik maupun teori, dan jalur masuk resminya.'
    },
    {
      id: 'wirausaha',
      title: 'Wirausaha',
      tagline: 'Usaha & Jasa Mandiri',
      description:
        'Mengenali ide usaha atau jasa pemula yang nyambung dengan ketertarikan serta kesiapan awalmu.'
    },
    {
      id: 'bingung',
      title: 'Masih Bingung',
      tagline: 'Eksplorasi Terbuka Lintas Jalur',
      description:
        'Membandingkan beberapa opsi lintas Bekerja, Kuliah, dan Wirausaha tanpa harus langsung memilih satu sekarang.'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 text-left">
      {/* Header Banner */}
      <div className="text-center space-y-2">
        <div className="text-xs font-extrabold uppercase tracking-[0.14em] text-indigo-700">
          Langkah 02 · Pemilihan Arah Fokus
        </div>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display"
          style={{ textWrap: 'balance' }}
        >
          Apa yang paling ingin kamu eksplorasi setelah lulus?
        </h2>

        <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Halo, <strong className="text-slate-900">{biodata.fullName || 'Siswa Hebat'}</strong>! Pilih salah satu dari empat fokus di bawah sebagai kompas awal alur kuis adaptifmu.
        </p>
      </div>

      {/* Validation Error Notice */}
      {validationErrors.direction && (
        <div role="alert" className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-center gap-3 text-xs sm:text-sm font-medium">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
          <span>{validationErrors.direction}</span>
        </div>
      )}

      {/* 4 Direction Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {directionOptions.map((opt) => (
          <DirectionCard
            key={opt.id}
            id={opt.id}
            title={opt.title}
            tagline={opt.tagline}
            description={opt.description}
            isSelected={direction === opt.id}
            onSelect={() => setDirection(opt.id)}
          />
        ))}
      </div>

      {/* Reassurance note */}
      <div className="p-4 rounded-2xl bg-white/85 border border-slate-200/90 text-slate-700 text-xs sm:text-sm flex items-center justify-center gap-2 text-center max-w-2xl mx-auto">
        <Info className="w-4 h-4 text-blue-700 shrink-0" />
        <span>
          Tidak perlu khawatir salah pilih — di halaman hasil nanti kamu tetap bisa membandingkan pilihan lintas jalur.
        </span>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        onBack={goToPrevStep}
        onNext={goToNextStep}
        onReset={resetSession}
        backLabel="Kembali ke Biodata"
        nextLabel="Lanjut: Mulai Kuis Adaptif"
        isNextDisabled={!direction}
      />
    </div>
  );
};
