import React from 'react';
import { useStudentSession } from '../../context/StudentSessionContext';
import { StudentProgress } from './StudentProgress';
import { PageContainer } from '../common/PageContainer';

interface StudentFlowLayoutProps {
  children: React.ReactNode;
}

export const StudentFlowLayout: React.FC<StudentFlowLayoutProps> = ({ children }) => {
  const { step, isStarted, isAssessmentComplete } = useStudentSession();
  const isQuizActive = isStarted && step === 'assessment_shell' && !isAssessmentComplete;

  if (isQuizActive) {
    return (
      <div className="relative flex-1 min-h-0 flex flex-col py-2.5 sm:py-4 overflow-hidden bg-quiz-stage print:h-auto print:py-0 print:bg-white print:bg-none print:overflow-visible">
        <div
          className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none print:hidden"
          aria-hidden="true"
        />
        <div
          className="absolute -top-12 left-8 w-64 h-64 rounded-full bg-blue-200/30 blur-3xl pointer-events-none print:hidden"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-12 right-8 w-72 h-72 rounded-full bg-indigo-200/30 blur-3xl pointer-events-none print:hidden"
          aria-hidden="true"
        />

        <PageContainer className="relative z-10 flex-1 min-h-0 flex flex-col print:px-0">
          {children}
        </PageContainer>
      </div>
    );
  }

  return (
    <div className="relative min-h-[85vh] py-6 sm:py-10 overflow-hidden bg-stage-gradient print:min-h-0 print:py-0 print:bg-white print:bg-none print:overflow-visible">
      <div
        className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none print:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-10 w-72 h-72 rounded-full bg-blue-200/35 blur-3xl pointer-events-none print:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute top-48 right-8 w-80 h-80 rounded-full bg-indigo-200/35 blur-3xl pointer-events-none print:hidden"
        aria-hidden="true"
      />

      <PageContainer className="relative z-10 print:px-0">
        {isStarted && (
          <div className="print:hidden">
            <StudentProgress currentStep={step} isComplete={isAssessmentComplete} />
          </div>
        )}

        {children}
      </PageContainer>
    </div>
  );
};
