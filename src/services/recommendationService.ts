/**
 * PIXEL TO REALITY — FUTURE PATH
 * Recommendation Service
 *
 * Bridges Phase 4.1 Profile Scoring Engine with Phase 5 Evidence-Based
 * Recommendation Matching Engine deterministically.
 */

import { StudentQuizAnswer } from '../types/assessment';
import {
  PathScoringResult,
  RecommendationMatchingInput,
  RecommendationMatchingOutput
} from '../types/recommendation';
import { StudentProfileAssessment } from '../types/scoring';
import { FuturePathId, SmkMajor } from '../types/student';
import { evaluateStudentProfile } from './profileScoringEngine';
import { matchStudentRecommendations } from './recommendationMatchingEngine';

export interface RecommendationServiceContract {
  calculateScores(answers: StudentQuizAnswer[]): Promise<PathScoringResult | null>;
  matchFromProfile(input: RecommendationMatchingInput): RecommendationMatchingOutput;
  evaluateAndMatch(params: {
    answers: Record<string, StudentQuizAnswer> | StudentQuizAnswer[];
    plannedSequence?: string[];
    initialDirection: FuturePathId | null;
    major?: SmkMajor | '';
  }): {
    profileAssessment: StudentProfileAssessment;
    recommendations: RecommendationMatchingOutput;
  };
}

export function matchFromProfile(
  input: RecommendationMatchingInput
): RecommendationMatchingOutput {
  return matchStudentRecommendations(input);
}

export function evaluateAndMatch(params: {
  answers: Record<string, StudentQuizAnswer> | StudentQuizAnswer[];
  plannedSequence?: string[];
  initialDirection: FuturePathId | null;
  major?: SmkMajor | '';
}): {
  profileAssessment: StudentProfileAssessment;
  recommendations: RecommendationMatchingOutput;
} {
  const profileAssessment = evaluateStudentProfile({
    answers: params.answers,
    plannedSequence: params.plannedSequence,
    sessionContext: {
      initialDirection: params.initialDirection,
      major: params.major ?? ''
    }
  });

  const recommendations = matchStudentRecommendations({
    profileAssessment,
    initialDirection: params.initialDirection,
    studentMajor: params.major ?? ''
  });

  return { profileAssessment, recommendations };
}

export const recommendationService: RecommendationServiceContract = {
  async calculateScores(answers: StudentQuizAnswer[]): Promise<PathScoringResult | null> {
    if (!answers || answers.length === 0) return null;
    const { profileAssessment, recommendations } = evaluateAndMatch({
      answers,
      initialDirection: null
    });

    const bestScoreForPath = (path: 'bekerja' | 'kuliah' | 'wirausaha') => {
      const top = recommendations.crossPathExplorations[path][0];
      return top?.matchScore ?? 0;
    };

    const pathScores: Record<FuturePathId, number> = {
      bekerja: bestScoreForPath('bekerja'),
      kuliah: bestScoreForPath('kuliah'),
      wirausaha: bestScoreForPath('wirausaha'),
      bingung: profileAssessment.overallSufficiency === 'belum_cukup' ? 100 : 50
    };

    const sortedPaths = [...(['bekerja', 'kuliah', 'wirausaha'] as const)].sort(
      (a, b) => pathScores[b] - pathScores[a]
    );

    return {
      primaryPath: sortedPaths[0],
      secondaryPath: sortedPaths[1],
      scores: pathScores,
      dimensionBreakdown: {
        interest_curiosity: profileAssessment.dimensions.minat.normalizedScore ?? 0,
        thinking_problem_solving: profileAssessment.dimensions.gaya_berpikir.normalizedScore ?? 0,
        habits_activities: profileAssessment.dimensions.kebiasaan.normalizedScore ?? 0,
        current_skills_learning:
          profileAssessment.dimensions.kemampuan_saat_ini.normalizedScore ?? 0,
        work_environment:
          profileAssessment.dimensions.preferensi_lingkungan.normalizedScore ?? 0,
        motivation_values: profileAssessment.dimensions.minat.normalizedScore ?? 0,
        practical_readiness: profileAssessment.dimensions.kesiapan_praktis.normalizedScore ?? 0
      },
      summaryInsight:
        recommendations.overallUncertaintyNote ??
        recommendations.activePathRecommendations[0]?.reasonsConsidered[0] ??
        'Hasil pencocokan dihitung berdasarkan bukti jawaban sesi.',
      recommendedActionSteps:
        recommendations.activePathRecommendations[0]?.developableSkills ?? []
    };
  },
  matchFromProfile,
  evaluateAndMatch
};

export const recommendationServiceContractStub = recommendationService;
