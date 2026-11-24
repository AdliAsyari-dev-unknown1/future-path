import React from 'react';
import { PageContainer } from '../common/PageContainer';
import { EXHIBITION_INFO } from '../../data/exhibitionData';
import { School, MapPin, Users2, ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../common/PrimaryButton';

interface ExhibitionNoticeProps {
  onStartExplore: () => void;
}

export const ExhibitionNotice: React.FC<ExhibitionNoticeProps> = ({ onStartExplore }) => {
  return (
    <section id="info-stan" className="py-14 md:py-20 bg-white border-t border-slate-200/80">
      <PageContainer>
        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-7 sm:p-10 md:p-12 text-white shadow-xl relative overflow-hidden text-left">
          {/* Subtle ambient radial light */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-blue-400/15 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue-200">
                Pameran Karya Jurusan Rekayasa Perangkat Lunak
              </div>

              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white"
                style={{ textWrap: 'balance' }}
              >
                Kunjungi Stan Karya RPL di SMKN 1 Katapang
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                Website <strong>FUTURE PATH</strong> dalam pameran <strong>PIXEL TO REALITY</strong> merupakan proyek karya kelompok siswa jurusan RPL. Coba asesmen eksplorasi masa depan dan diskusikan hasil PDF-nya bersama teman atau guru pembimbingmu.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15">
                  <School className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="truncate">{EXHIBITION_INFO.venue}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15">
                  <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span className="truncate">{EXHIBITION_INFO.boothLocation}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15">
                  <Users2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="truncate">{EXHIBITION_INFO.projectTeam}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end gap-2.5">
              <PrimaryButton
                size="lg"
                onClick={onStartExplore}
                icon={<ArrowRight className="w-5 h-5" />}
                className="bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-900/30 w-full sm:w-auto whitespace-nowrap"
              >
                Mulai Eksplorasi Sekarang
              </PrimaryButton>
              <p className="text-xs text-slate-300 text-center lg:text-right">
                Karya Siswa RPL · SMKN 1 Katapang
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
