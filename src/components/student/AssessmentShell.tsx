import React from 'react';
import { useStudentSession } from '../../context/StudentSessionContext';
import { AssessmentHeader } from './AssessmentHeader';
import { AssessmentQuestionCard } from './AssessmentQuestionCard';
import { AssessmentCompletionView } from './AssessmentCompletionView';

export const AssessmentShell: React.FC = () => {
  const { isAssessmentComplete } = useStudentSession();

  if (isAssessmentComplete) {
    return (
      <div className="w-full max-w-5xl mx-auto space-y-6">
        <AssessmentCompletionView />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex-1 min-h-0 flex flex-col bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-card-elevated overflow-hidden">
      <AssessmentHeader />
      <AssessmentQuestionCard />
    </div>
  );
};
