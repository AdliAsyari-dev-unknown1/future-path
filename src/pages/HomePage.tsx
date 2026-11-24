import React, { useState } from 'react';
import { useStudentSession } from '../context/StudentSessionContext';
import { HeroSection } from '../components/home/HeroSection';
import { AboutFuturePath } from '../components/home/AboutFuturePath';
import { FuturePathsPreview } from '../components/home/FuturePathsPreview';
import { GuidingPrinciples } from '../components/home/GuidingPrinciples';
import { ExhibitionNotice } from '../components/home/ExhibitionNotice';
import { PathDetailModal } from '../components/home/PathDetailModal';
import { StudentFlowLayout } from '../components/student/StudentFlowLayout';
import { BiodataForm } from '../components/student/BiodataForm';
import { DirectionSelector } from '../components/student/DirectionSelector';
import { AssessmentShell } from '../components/student/AssessmentShell';
import { FuturePathMeta } from '../types/recommendation';
import { useDisclosure } from '../hooks/useDisclosure';

export const HomePage: React.FC = () => {
  const { step, startExploration } = useStudentSession();
  const [selectedPath, setSelectedPath] = useState<FuturePathMeta | null>(null);
  const detailModal = useDisclosure(false);

  const handleSelectPath = (path: FuturePathMeta) => {
    setSelectedPath(path);
    detailModal.open();
  };

  const scrollToAbout = () => {
    const el = document.getElementById('kenali-future-path');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render Step 1: Biodata Minimal
  if (step === 'biodata') {
    return (
      <StudentFlowLayout>
        <BiodataForm />
      </StudentFlowLayout>
    );
  }

  // Render Step 2: Direction Selection Screen
  if (step === 'direction') {
    return (
      <StudentFlowLayout>
        <DirectionSelector />
      </StudentFlowLayout>
    );
  }

  // Render Step 3: Assessment Screen
  if (step === 'assessment_shell') {
    return (
      <StudentFlowLayout>
        <AssessmentShell />
      </StudentFlowLayout>
    );
  }

  // Default: Step 0 (Welcome Screen)
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection
        onStartExplore={startExploration}
        onScrollToAbout={scrollToAbout}
      />

      {/* 2. Product Introduction: Apa itu FUTURE PATH? */}
      <AboutFuturePath />

      {/* 3. Preview 4 Pilihan Masa Depan */}
      <FuturePathsPreview onSelectPath={handleSelectPath} />

      {/* 4. Informasi Singkat & Prinsip Asesmen */}
      <GuidingPrinciples />

      {/* 5. Konteks Stan Pameran SMKN 1 Katapang */}
      <ExhibitionNotice onStartExplore={startExploration} />

      {/* Path Detail Modal */}
      <PathDetailModal
        path={selectedPath}
        isOpen={detailModal.isOpen}
        onClose={detailModal.close}
        onExploreQuizNotice={startExploration}
      />
    </div>
  );
};
