/**
 * Assessment Service Contract
 * Architectural definition for Phase 2 implementation.
 * No mock scoring or fake question evaluation is run during Phase 1.
 */

import { QuizQuestion, StudentAnswer } from '../types/assessment';

export interface AssessmentServiceContract {
  fetchQuestionBatch(): Promise<QuizQuestion[]>;
  evaluateAnswers(answers: StudentAnswer[]): Promise<{ readyForScoring: boolean }>;
}

export const assessmentServiceContractStub: AssessmentServiceContract = {
  async fetchQuestionBatch(): Promise<QuizQuestion[]> {
    // Scheduled for implementation in Phase 2
    return [];
  },
  async evaluateAnswers(): Promise<{ readyForScoring: boolean }> {
    return { readyForScoring: false };
  }
};
