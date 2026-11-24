import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { StudentBiodata, StudentFlowStep, FuturePathId } from '../types/student';
import {
  QuizQuestion,
  StudentQuizAnswer,
  AssessmentIndicator
} from '../types/assessment';
import {
  MAX_ADAPTIVE_QUESTIONS,
  AdaptiveStoppingEvaluation,
  initializeAdaptiveSequence,
  selectNextQuestion,
  evaluateAdaptiveStoppingCondition,
  reevaluateSequenceOnAnswerChange,
  calculateAccumulatedSignals,
  isQuestionHandled
} from '../services/adaptiveEngine';
import { QUESTION_MAP } from '../data/questionBank';
import { StudentProfileAssessment } from '../types/scoring';
import { evaluateStudentProfile } from '../services/profileScoringEngine';
import { RecommendationMatchingOutput } from '../types/recommendation';
import { matchStudentRecommendations } from '../services/recommendationMatchingEngine';

interface ValidationErrors {
  fullName?: string;
  major?: string;
  consent?: string;
  direction?: string;
  quizOption?: string;
}

interface StudentSessionContextValue {
  // Navigation & Flow
  step: StudentFlowStep;
  biodata: StudentBiodata;
  direction: FuturePathId | null;
  validationErrors: ValidationErrors;
  isStarted: boolean;

  // Student Actions
  setBiodataField: <K extends keyof StudentBiodata>(field: K, value: StudentBiodata[K]) => void;
  setDirection: (direction: FuturePathId) => void;
  startExploration: () => void;
  goToNextStep: () => boolean;
  goToPrevStep: () => void;
  goToStep: (step: StudentFlowStep) => void;
  resetSession: () => void;
  clearFieldError: (field: keyof ValidationErrors) => void;

  // Dynamic Adaptive Quiz State
  quizSequence: string[];
  currentQuestionIndex: number;
  currentQuestion: QuizQuestion | null;
  quizAnswers: Record<string, StudentQuizAnswer>;
  currentAnswer: StudentQuizAnswer | null;
  isAssessmentComplete: boolean;
  accumulatedSignals: Record<AssessmentIndicator, number>;
  stoppingEvaluation: AdaptiveStoppingEvaluation | null;
  canRequestMoreQuestions: boolean;
  quizProgress: {
    current: number;
    total: number;
    percentage: number;
    answeredCount: number;
    skippedCount: number;
    nearCompletion: boolean;
    stageHintText: string;
  };

  // Adaptive Quiz Actions
  selectQuizOption: (optionId: string, customText?: string) => void;
  updateCustomAnswerText: (customText: string) => void;
  skipCurrentQuestion: () => boolean;
  confirmAndNextQuestion: () => boolean;
  goToPrevQuestion: () => void;
  jumpToQuestion: (index: number) => void;
  resetAssessmentQuiz: () => void;
  requestMoreQuestions: () => void;

  // Profile Scoring State & Recalculation
  profileAssessment: StudentProfileAssessment | null;
  recalculateProfileAssessment: () => StudentProfileAssessment | null;

  // Recommendation Matching State & Recalculation
  recommendations: RecommendationMatchingOutput | null;
  recalculateRecommendations: () => RecommendationMatchingOutput | null;
}

const INITIAL_BIODATA: StudentBiodata = {
  fullName: '',
  major: '',
  gradeLevel: '',
  consentAccepted: false
};

const StudentSessionContext = createContext<StudentSessionContextValue | null>(null);

export const StudentSessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [step, setStep] = useState<StudentFlowStep>('welcome');
  const [biodata, setBiodata] = useState<StudentBiodata>(INITIAL_BIODATA);
  const [direction, setDirectionState] = useState<FuturePathId | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  // Dynamic Adaptive Quiz State
  const [quizSequence, setQuizSequence] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, StudentQuizAnswer>>({});
  const [isAssessmentComplete, setIsAssessmentComplete] = useState<boolean>(false);
  const [extraQuestionsTarget, setExtraQuestionsTarget] = useState<number | null>(null);
  const [profileAssessment, setProfileAssessment] = useState<StudentProfileAssessment | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendationMatchingOutput | null>(null);

  const clearFieldError = useCallback((field: keyof ValidationErrors) => {
    setValidationErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const setBiodataField = useCallback(
    <K extends keyof StudentBiodata>(field: K, value: StudentBiodata[K]) => {
      setBiodata((prev) => ({ ...prev, [field]: value }));
      if (field === 'fullName') clearFieldError('fullName');
      if (field === 'major') clearFieldError('major');
      if (field === 'consentAccepted') clearFieldError('consent');
    },
    [clearFieldError]
  );

  const setDirection = useCallback(
    (newDirection: FuturePathId) => {
      setDirectionState((prev) => {
        if (prev !== newDirection) {
          setQuizAnswers({});
          setCurrentQuestionIndex(0);
          setIsAssessmentComplete(false);
          setExtraQuestionsTarget(null);
          setProfileAssessment(null);
          setRecommendations(null);
          setQuizSequence(initializeAdaptiveSequence(newDirection));
        }
        return newDirection;
      });
      clearFieldError('direction');
    },
    [clearFieldError]
  );

  const startExploration = useCallback(() => {
    setValidationErrors({});
    setStep('biodata');
  }, []);

  const validateBiodata = useCallback((): boolean => {
    const errors: ValidationErrors = {};

    if (!biodata.fullName.trim() || biodata.fullName.trim().length < 2) {
      errors.fullName = 'Mohon isi nama panggilan atau nama lengkapmu (minimal 2 huruf).';
    }

    if (!biodata.major) {
      errors.major = 'Silakan pilih jurusanmu dari 7 jurusan SMKN 1 Katapang.';
    }

    if (!biodata.consentAccepted) {
      errors.consent = 'Mohon centang persetujuan panduan kuis sebelum melanjutkan.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [biodata]);

  const validateDirection = useCallback((): boolean => {
    const errors: ValidationErrors = {};

    if (!direction) {
      errors.direction =
        'Pilih salah satu dari 4 arah masa depan yang paling menarik perhatianmu saat ini.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [direction]);

  const goToNextStep = useCallback((): boolean => {
    if (step === 'welcome') {
      setStep('biodata');
      return true;
    }

    if (step === 'biodata') {
      if (validateBiodata()) {
        setValidationErrors({});
        setStep('direction');
        return true;
      }
      return false;
    }

    if (step === 'direction') {
      if (validateDirection()) {
        setValidationErrors({});
        if (direction && quizSequence.length === 0) {
          setQuizSequence(initializeAdaptiveSequence(direction));
        }
        setStep('assessment_shell');
        return true;
      }
      return false;
    }

    return true;
  }, [step, validateBiodata, validateDirection, direction, quizSequence.length]);

  const goToPrevStep = useCallback(() => {
    setValidationErrors({});
    if (step === 'assessment_shell') {
      setStep('direction');
    } else if (step === 'direction') {
      setStep('biodata');
    } else if (step === 'biodata') {
      setStep('welcome');
    }
  }, [step]);

  const goToStep = useCallback((targetStep: StudentFlowStep) => {
    setValidationErrors({});
    setStep(targetStep);
  }, []);

  const resetSession = useCallback(() => {
    setBiodata(INITIAL_BIODATA);
    setDirectionState(null);
    setValidationErrors({});
    setQuizSequence([]);
    setCurrentQuestionIndex(0);
    setQuizAnswers({});
    setIsAssessmentComplete(false);
    setExtraQuestionsTarget(null);
    setProfileAssessment(null);
    setRecommendations(null);
    setStep('welcome');
  }, []);

  const currentQuestionId = quizSequence[currentQuestionIndex] || null;
  const currentQuestion = useMemo<QuizQuestion | null>(() => {
    if (!currentQuestionId) return null;
    return QUESTION_MAP[currentQuestionId] || null;
  }, [currentQuestionId]);

  const currentAnswer = useMemo<StudentQuizAnswer | null>(() => {
    if (!currentQuestionId) return null;
    return quizAnswers[currentQuestionId] || null;
  }, [currentQuestionId, quizAnswers]);

  // Live stopping evaluation based on current sequence + answers
  const stoppingEvaluation = useMemo<AdaptiveStoppingEvaluation | null>(() => {
    if (!direction || quizSequence.length === 0) return null;
    return evaluateAdaptiveStoppingCondition(
      direction,
      quizSequence,
      quizAnswers,
      biodata.major,
      extraQuestionsTarget ?? undefined
    );
  }, [direction, quizSequence, quizAnswers, biodata.major, extraQuestionsTarget]);

  const selectQuizOption = useCallback(
    (optionId: string, customText?: string) => {
      if (!currentQuestion || !direction) return;

      clearFieldError('quizOption');

      const chosenOption = currentQuestion.options.find((opt) => opt.id === optionId);
      const responseMode =
        chosenOption?.optionKind === 'other'
          ? 'other'
          : chosenOption?.optionKind === 'none_fit'
          ? 'none_fit'
          : chosenOption?.optionKind === 'dont_know'
          ? 'dont_know'
          : 'standard';

      const prevAnswer = quizAnswers[currentQuestion.id];
      const prevSelected = prevAnswer?.skipped ? '__skipped__' : prevAnswer?.selectedOptionId;
      const nextCustomText =
        chosenOption?.optionKind === 'other'
          ? customText !== undefined
            ? customText
            : prevAnswer?.selectedOptionId === optionId
            ? prevAnswer?.customText || ''
            : ''
          : undefined;

      let updatedAnswers: Record<string, StudentQuizAnswer> = {
        ...quizAnswers,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          selectedOptionId: optionId,
          skipped: false,
          responseMode,
          customText: nextCustomText,
          answeredAt: new Date().toISOString()
        }
      };

      // If revising an earlier question with a different choice, drop downstream questions
      // so the next step dynamically branches from the revised choice.
      if (prevSelected && prevSelected !== optionId && currentQuestionIndex < quizSequence.length - 1) {
        const preservedSequence = reevaluateSequenceOnAnswerChange(
          direction,
          quizSequence,
          updatedAnswers,
          currentQuestionIndex
        );
        const preservedSet = new Set(preservedSequence);
        const cleanedAnswers: Record<string, StudentQuizAnswer> = {};
        for (const [qId, ans] of Object.entries(updatedAnswers)) {
          if (preservedSet.has(qId)) {
            cleanedAnswers[qId] = ans;
          }
        }
        updatedAnswers = cleanedAnswers;
        setQuizSequence(preservedSequence);
        setExtraQuestionsTarget(null);
        setProfileAssessment(null);
        setRecommendations(null);
        setIsAssessmentComplete(false);
      }

      setQuizAnswers(updatedAnswers);
    },
    [
      currentQuestion,
      direction,
      quizAnswers,
      currentQuestionIndex,
      quizSequence,
      clearFieldError
    ]
  );

  const updateCustomAnswerText = useCallback(
    (customText: string) => {
      if (!currentQuestion) return;
      clearFieldError('quizOption');
      const otherOption = currentQuestion.options.find((opt) => opt.optionKind === 'other');
      if (!otherOption) return;

      setQuizAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          selectedOptionId: otherOption.id,
          skipped: false,
          responseMode: 'other',
          customText,
          answeredAt: new Date().toISOString()
        }
      }));
    },
    [currentQuestion, clearFieldError]
  );

  const recalculateProfileAssessment = useCallback((): StudentProfileAssessment | null => {
    if (quizSequence.length === 0) return null;
    const computed = evaluateStudentProfile({
      answers: quizAnswers,
      plannedSequence: quizSequence,
      sessionContext: {
        initialDirection: direction,
        major: biodata.major
      }
    });
    setProfileAssessment(computed);
    const matched = matchStudentRecommendations({
      profileAssessment: computed,
      initialDirection: direction,
      studentMajor: biodata.major
    });
    setRecommendations(matched);
    return computed;
  }, [quizAnswers, quizSequence, direction, biodata.major]);

  const recalculateRecommendations = useCallback((): RecommendationMatchingOutput | null => {
    const activeProfile = profileAssessment ?? recalculateProfileAssessment();
    if (!activeProfile) return null;
    const matched = matchStudentRecommendations({
      profileAssessment: activeProfile,
      initialDirection: direction,
      studentMajor: biodata.major
    });
    setRecommendations(matched);
    return matched;
  }, [profileAssessment, recalculateProfileAssessment, direction, biodata.major]);

  const advanceOrFinishAfterAnswer = useCallback(
    (updatedAnswers: Record<string, StudentQuizAnswer>) => {
      if (!direction) return true;

      // If reviewing an earlier question inside an already-built sequence, step forward
      if (currentQuestionIndex < quizSequence.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        return true;
      }

      const evalResult = evaluateAdaptiveStoppingCondition(
        direction,
        quizSequence,
        updatedAnswers,
        biodata.major,
        extraQuestionsTarget ?? undefined
      );

      if (evalResult.shouldStop) {
        setProfileAssessment(evalResult.liveProfile);
        setRecommendations(evalResult.liveRecommendations);
        setIsAssessmentComplete(true);
        return true;
      }

      const nextId = selectNextQuestion(direction, quizSequence, updatedAnswers, biodata.major);
      if (!nextId) {
        setProfileAssessment(evalResult.liveProfile);
        setRecommendations(evalResult.liveRecommendations);
        setIsAssessmentComplete(true);
        return true;
      }

      setQuizSequence((prev) => [...prev, nextId]);
      setCurrentQuestionIndex((prev) => prev + 1);
      return true;
    },
    [direction, currentQuestionIndex, quizSequence, biodata.major, extraQuestionsTarget]
  );

  const confirmAndNextQuestion = useCallback((): boolean => {
    if (!currentQuestion || !direction) return false;

    const answer = quizAnswers[currentQuestion.id];
    if (!answer || (!answer.skipped && !answer.selectedOptionId)) {
      setValidationErrors((prev) => ({
        ...prev,
        quizOption: 'Pilih salah satu jawaban dulu atau klik "Lewati pertanyaan ini".'
      }));
      return false;
    }

    if (answer.responseMode === 'other' && (!answer.customText || answer.customText.trim().length < 2)) {
      setValidationErrors((prev) => ({
        ...prev,
        quizOption:
          'Tuliskan pilihanmu secara singkat (minimal 2 huruf), atau pilih opsi lain / lewati pertanyaan ini.'
      }));
      return false;
    }

    clearFieldError('quizOption');
    return advanceOrFinishAfterAnswer(quizAnswers);
  }, [
    currentQuestion,
    direction,
    quizAnswers,
    clearFieldError,
    advanceOrFinishAfterAnswer
  ]);

  const skipCurrentQuestion = useCallback((): boolean => {
    if (!currentQuestion || !direction) return false;
    clearFieldError('quizOption');

    const prevAnswer = quizAnswers[currentQuestion.id];
    const wasSubstantiveBefore =
      prevAnswer && !prevAnswer.skipped && prevAnswer.responseMode === 'standard';

    let nextSequence = quizSequence;
    let updatedAnswers: Record<string, StudentQuizAnswer> = {
      ...quizAnswers,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selectedOptionId: '',
        skipped: true,
        responseMode: 'skipped',
        answeredAt: new Date().toISOString()
      }
    };

    if (wasSubstantiveBefore && currentQuestionIndex < quizSequence.length - 1) {
      nextSequence = reevaluateSequenceOnAnswerChange(
        direction,
        quizSequence,
        updatedAnswers,
        currentQuestionIndex
      );
      const preservedSet = new Set(nextSequence);
      const cleanedAnswers: Record<string, StudentQuizAnswer> = {};
      for (const [qId, ans] of Object.entries(updatedAnswers)) {
        if (preservedSet.has(qId)) cleanedAnswers[qId] = ans;
      }
      updatedAnswers = cleanedAnswers;
      setQuizSequence(nextSequence);
      setExtraQuestionsTarget(null);
      setProfileAssessment(null);
      setRecommendations(null);
      setIsAssessmentComplete(false);
    }

    setQuizAnswers(updatedAnswers);

    if (currentQuestionIndex < nextSequence.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      return true;
    }

    const evalResult = evaluateAdaptiveStoppingCondition(
      direction,
      nextSequence,
      updatedAnswers,
      biodata.major,
      extraQuestionsTarget ?? undefined
    );

    if (evalResult.shouldStop) {
      setProfileAssessment(evalResult.liveProfile);
      setRecommendations(evalResult.liveRecommendations);
      setIsAssessmentComplete(true);
      return true;
    }

    const nextId = selectNextQuestion(direction, nextSequence, updatedAnswers, biodata.major);
    if (!nextId) {
      setProfileAssessment(evalResult.liveProfile);
      setRecommendations(evalResult.liveRecommendations);
      setIsAssessmentComplete(true);
      return true;
    }

    setQuizSequence((prev) => [...prev, nextId]);
    setCurrentQuestionIndex((prev) => prev + 1);
    return true;
  }, [
    currentQuestion,
    direction,
    quizAnswers,
    quizSequence,
    currentQuestionIndex,
    biodata.major,
    extraQuestionsTarget,
    clearFieldError
  ]);

  const goToPrevQuestion = useCallback(() => {
    clearFieldError('quizOption');
    if (isAssessmentComplete) {
      setIsAssessmentComplete(false);
      setCurrentQuestionIndex(Math.max(0, quizSequence.length - 1));
      return;
    }

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setStep('direction');
    }
  }, [isAssessmentComplete, quizSequence.length, currentQuestionIndex, clearFieldError]);

  const jumpToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < quizSequence.length) {
        clearFieldError('quizOption');
        setIsAssessmentComplete(false);
        setCurrentQuestionIndex(index);
      }
    },
    [quizSequence.length, clearFieldError]
  );

  const resetAssessmentQuiz = useCallback(() => {
    if (!direction) return;
    setQuizAnswers({});
    setCurrentQuestionIndex(0);
    setIsAssessmentComplete(false);
    setExtraQuestionsTarget(null);
    setProfileAssessment(null);
    setRecommendations(null);
    setQuizSequence(initializeAdaptiveSequence(direction));
  }, [direction]);

  const requestMoreQuestions = useCallback(() => {
    if (!direction) return;
    const handledCount = quizSequence.filter((qId) => isQuestionHandled(quizAnswers[qId])).length;
    if (handledCount >= MAX_ADAPTIVE_QUESTIONS) return;

    const nextId = selectNextQuestion(direction, quizSequence, quizAnswers, biodata.major);
    if (!nextId) return;

    const nextTarget = Math.min(MAX_ADAPTIVE_QUESTIONS, (stoppingEvaluation?.answeredCount ?? handledCount) + 3);
    setExtraQuestionsTarget(nextTarget);
    setIsAssessmentComplete(false);
    setQuizSequence((prev) => [...prev, nextId]);
    setCurrentQuestionIndex(quizSequence.length);
  }, [direction, quizSequence, quizAnswers, biodata.major, stoppingEvaluation?.answeredCount]);

  const accumulatedSignals = useMemo(() => {
    return calculateAccumulatedSignals(quizAnswers);
  }, [quizAnswers]);

  const canRequestMoreQuestions =
    quizSequence.length < MAX_ADAPTIVE_QUESTIONS &&
    Boolean(direction) &&
    selectNextQuestion(direction!, quizSequence, quizAnswers, biodata.major) !== null;

  const quizProgress = useMemo(() => {
    const answeredCount = stoppingEvaluation?.answeredCount ?? 0;
    const skippedCount = quizSequence.filter((qId) => Boolean(quizAnswers[qId]?.skipped)).length;
    const current = currentQuestionIndex + 1;
    const total = Math.max(1, quizSequence.length);
    const nearCompletion = stoppingEvaluation?.nearCompletion ?? false;
    const willFinishHere =
      currentQuestionIndex === quizSequence.length - 1 && (stoppingEvaluation?.shouldStop ?? false);

    let percentage: number;
    if (isAssessmentComplete) {
      percentage = 100;
    } else if (willFinishHere) {
      percentage = 95;
    } else if (nearCompletion) {
      percentage = Math.min(92, Math.max(76, Math.round((answeredCount / Math.max(answeredCount + 1, 10)) * 90)));
    } else {
      percentage = Math.min(82, Math.max(10, Math.round((answeredCount / 11) * 82)));
    }

    return {
      current,
      total,
      percentage,
      answeredCount,
      skippedCount,
      nearCompletion,
      stageHintText: stoppingEvaluation?.stageHintText ?? 'Mengenali hal yang kamu sukai'
    };
  }, [quizSequence, quizAnswers, currentQuestionIndex, isAssessmentComplete, stoppingEvaluation]);

  const value = useMemo<StudentSessionContextValue>(
    () => ({
      step,
      biodata,
      direction,
      validationErrors,
      isStarted: step !== 'welcome',
      setBiodataField,
      setDirection,
      startExploration,
      goToNextStep,
      goToPrevStep,
      goToStep,
      resetSession,
      clearFieldError,
      quizSequence,
      currentQuestionIndex,
      currentQuestion,
      quizAnswers,
      currentAnswer,
      isAssessmentComplete,
      accumulatedSignals,
      stoppingEvaluation,
      canRequestMoreQuestions,
      quizProgress,
      selectQuizOption,
      updateCustomAnswerText,
      skipCurrentQuestion,
      confirmAndNextQuestion,
      goToPrevQuestion,
      jumpToQuestion,
      resetAssessmentQuiz,
      requestMoreQuestions,
      profileAssessment,
      recalculateProfileAssessment,
      recommendations,
      recalculateRecommendations
    }),
    [
      step,
      biodata,
      direction,
      validationErrors,
      setBiodataField,
      setDirection,
      startExploration,
      goToNextStep,
      goToPrevStep,
      goToStep,
      resetSession,
      clearFieldError,
      quizSequence,
      currentQuestionIndex,
      currentQuestion,
      quizAnswers,
      currentAnswer,
      isAssessmentComplete,
      accumulatedSignals,
      stoppingEvaluation,
      canRequestMoreQuestions,
      quizProgress,
      selectQuizOption,
      updateCustomAnswerText,
      skipCurrentQuestion,
      confirmAndNextQuestion,
      goToPrevQuestion,
      jumpToQuestion,
      resetAssessmentQuiz,
      requestMoreQuestions,
      profileAssessment,
      recalculateProfileAssessment,
      recommendations,
      recalculateRecommendations
    ]
  );

  return (
    <StudentSessionContext.Provider value={value}>{children}</StudentSessionContext.Provider>
  );
};

export function useStudentSession(): StudentSessionContextValue {
  const context = useContext(StudentSessionContext);
  if (!context) {
    throw new Error('useStudentSession must be used within a StudentSessionProvider');
  }
  return context;
}
