import React from 'react';
import { PageContainer } from '../common/PageContainer';
import { Compass, Layers, BookOpenCheck, ShieldCheck } from 'lucide-react';

export const AboutFuturePath: React.FC = () => {
  const highlights = [
    {
      icon: <Layers className="w-5 h-5 text-blue-700" />,
      title: 'Pertanyaan Adaptif & Fleksibel',
      description:
        'Jumlah dan arah soal menyesuaikan jawabanmu. Tersedia opsi Lainnya, Tidak ada yang sesuai, Belum tahu, dan Lewati.',
      bg: 'bg-blue-50 border-blue-200/80'
    },
    {
      icon: <Compass className="w-5 h-5 text-indigo-700" />,
      title: '65+ Bidang Lintas 4 Jalur',
      description:
        'Terbuka untuk pilihan Bekerja, Kuliah, Wirausaha, maupun Masih Bingung — tidak mengunci siswa berdasarkan jurusan sekolah.',
      bg: 'bg-indigo-50 border-indigo-200/80'
    },
    {
      icon: <BookOpenCheck className="w-5 h-5 text-emerald-700" />,
      title: 'Gambaran 8 Aspek Nyata & Ekspor PDF',
      description:
        'Menjelaskan aktivitas harian, lingkungan, skill (Hard/Soft/Pemula), syarat pendidikan, info penghasilan terverifikasi, tantangan & peluang.',
      bg: 'bg-emerald-50 border-emerald-200/80'
    }
  ];

  return (
    <section
      id="kenali-future-path"
      className="py-12 md:py-16 bg-warm-surface border-y border-slate-200/70 relative overflow-hidden"
    >
      <PageContainer className="relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
          {/* Left Column: Product Introduction */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
              Tentang Produk · PIXEL TO REALITY Exhibition
            </div>

            <h2
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display"
              style={{ textWrap: 'balance' }}
            >
              Apa itu FUTURE PATH?
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                <strong>FUTURE PATH</strong> adalah website eksplorasi masa depan yang membantu siswa mengenali minat, kebiasaan sehari-hari, gaya berpikir, dan bekal keterampilan mereka secara sederhana.
              </p>
              <p className="text-slate-600">
                Hasilnya disajikan sebagai bahan diskusi dan refleksi nyata untuk mempertimbangkan langkah setelah lulus SMK — bukan penilaian kepintaran ataupun keputusan wajib.
              </p>
            </div>

            <div className="pt-1 flex items-center gap-2 text-xs font-medium text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Berjalan privat di peramban stan pameran tanpa akun atau login.</span>
            </div>
          </div>

          {/* Right Column: Three Structured Pillars */}
          <div className="lg:col-span-6 space-y-3.5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-interactive"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.bg}`}>
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
