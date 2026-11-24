import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useStudentSession } from '../context/StudentSessionContext';

interface MainLayoutProps {
  children: React.ReactNode;
  onStartExplore: () => void;
  onOpenRoadmap: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  onStartExplore,
  onOpenRoadmap
}) => {
  const { isStarted, step, isAssessmentComplete } = useStudentSession();
  const isQuizActive = isStarted && step === 'assessment_shell' && !isAssessmentComplete;

  return (
    <div
      className={
        isQuizActive
          ? 'h-[100dvh] flex flex-col overflow-hidden bg-slate-50 text-slate-800 print:h-auto print:overflow-visible'
          : 'min-h-screen flex flex-col bg-slate-50 text-slate-800'
      }
    >
      <Navbar onStartExplore={onStartExplore} onOpenRoadmap={onOpenRoadmap} />
      <main className={isQuizActive ? 'flex-1 min-h-0 flex flex-col overflow-hidden print:overflow-visible' : 'flex-1'}>
        {children}
      </main>
      {!isQuizActive && <Footer onOpenRoadmap={onOpenRoadmap} />}
    </div>
  );
};
