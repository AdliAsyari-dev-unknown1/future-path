/**
 * Assessment engine type specifications for PIXEL TO REALITY — FUTURE PATH
 * Phase 3: Adaptive Question Engine, Question Bank, and Session Logic.
 */

import { FuturePathId } from './student';

export type QuestionCategory =
  | 'interest_curiosity'        // 1. Minat & Rasa Ingin Tahu
  | 'habits_activities'         // 2. Kebiasaan & Aktivitas Sehari-hari
  | 'thinking_problem_solving'  // 3. Pola Pikir & Pemecahan Masalah
  | 'current_skills_learning'   // 4. Keterampilan Saat Ini & Gaya Belajar
  | 'work_environment'          // 5. Preferensi Lingkungan Kerja
  | 'motivation_values'         // 6. Motivasi & Nilai Hidup
  | 'practical_readiness';      // 7. Kesiapan Praktis & Sumber Daya

export type AssessmentDimension = QuestionCategory;

export interface CategoryMetadata {
  id: QuestionCategory;
  label: string;
  shortLabel: string;
  description: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}

export const QUESTION_CATEGORIES: Record<QuestionCategory, CategoryMetadata> = {
  interest_curiosity: {
    id: 'interest_curiosity',
    label: 'Minat & Rasa Ingin Tahu',
    shortLabel: 'Minat',
    description: 'Menelusuri bidang, topik, dan rasa penasaran alami yang memikat perhatianmu.',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    badgeBorder: 'border-blue-200'
  },
  habits_activities: {
    id: 'habits_activities',
    label: 'Kebiasaan & Aktivitas',
    shortLabel: 'Kebiasaan',
    description: 'Mengenali rutinitas, cara menghabiskan waktu luang, dan pola kerjamu.',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700',
    badgeBorder: 'border-indigo-200'
  },
  thinking_problem_solving: {
    id: 'thinking_problem_solving',
    label: 'Pola Pikir & Pemecahan Masalah',
    shortLabel: 'Pola Pikir',
    description: 'Cara menghadapi kendala: sistematis, intuitif, analitis, atau eksperimental.',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
    badgeBorder: 'border-purple-200'
  },
  current_skills_learning: {
    id: 'current_skills_learning',
    label: 'Keterampilan & Gaya Belajar',
    shortLabel: 'Keterampilan',
    description: 'Kemampuan yang sudah kamu latih dan cara terbaikmu menyerap ilmu baru.',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700',
    badgeBorder: 'border-teal-200'
  },
  work_environment: {
    id: 'work_environment',
    label: 'Lingkungan & Gaya Kerja',
    shortLabel: 'Lingkungan',
    description: 'Preferensi suasana: workshop/bengkel, lab komputer, studio, lapangan, atau kantor.',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200'
  },
  motivation_values: {
    id: 'motivation_values',
    label: 'Motivasi & Nilai Hidup',
    shortLabel: 'Motivasi',
    description: 'Faktor pendorong utama: kemandirian finansial, karya cipta, atau kontribusi.',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700',
    badgeBorder: 'border-rose-200'
  },
  practical_readiness: {
    id: 'practical_readiness',
    label: 'Kesiapan Praktis & Sumber Daya',
    shortLabel: 'Kesiapan',
    description: 'Pertimbangan nyata: alokasi waktu, stamina belajar, dan daya dukung lingkungan.',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    badgeBorder: 'border-emerald-200'
  }
};

/**
 * Observable signal indicators gathered through student responses.
 * Used for dynamic question branching in Phase 3 and profile scoring in Phase 4.
 */
export type AssessmentIndicator =
  | 'technical_affinity'       // Tertarik pada sistem, kode, sirkuit, mesin, logika teknis
  | 'creative_expression'      // Tertarik pada estetika, visual, video, desain, kreasi orisinal
  | 'analytical_depth'         // Menyukai analisis akar masalah, riset, logika terstruktur
  | 'hands_on_practical'       // Menyukai kerja fisik nyata, alat, perakitan, instalasi
  | 'interpersonal_social'     // Menyukai komunikasi, melayani, kolaborasi, presentasi
  | 'enterprising_business'    // Inisiatif menjual, melihat peluang untung, mengelola modal
  | 'autonomy_independent'     // Suka kebebasan mengatur jadwal & cara kerja mandiri
  | 'structured_procedural'    // Nyaman dengan SOP jelas, stabilitas, pedoman terarah
  | 'career_urgency'           // Ingin segera mandiri finansial & langsung berpenghasilan
  | 'academic_aspiration'      // Berhasrat mendalami teori ke jenjang D4/S1 & riset ilmiah
  | 'exploratory_open';        // Terbuka mencoba banyak hal, belum membatasi pilihan

export type CareerDomainId =
  | 'teknologi_informatika'
  | 'teknik_industri'
  | 'hukum_keadilan'
  | 'bahasa_sastra'
  | 'pendidikan'
  | 'kesehatan'
  | 'bisnis_ekonomi'
  | 'komunikasi_media'
  | 'psikologi_sosial'
  | 'seni_desain'
  | 'pertanian_lingkungan'
  | 'pariwisata_kuliner'
  | 'administrasi_logistik';

export type QuizOptionKind = 'standard' | 'other' | 'none_fit' | 'dont_know';

export interface QuizOption {
  id: string;
  label: string;
  description?: string;
  optionKind?: QuizOptionKind;
  allowCustomInput?: boolean;
  customInputPlaceholder?: string;
  signals: AssessmentIndicator[];
  domainSignals?: Partial<Record<CareerDomainId, number>>;
  pathAffinity?: Partial<Record<FuturePathId, number>>;
}

export type QuestionPriority = 'core' | 'adaptive_branch' | 'deep_dive';

export interface BranchingRules {
  triggerSignals?: AssessmentIndicator[];
  targetPaths?: FuturePathId[];
  excludeIfSignals?: AssessmentIndicator[];
  /** Trigger this follow-up when any listed "questionId:optionId" was selected */
  triggerSelections?: string[];
  /** Optional stage hint for adaptive ordering */
  preferredStage?: 'opening' | 'hobby_branch' | 'desire_value' | 'habits_env' | 'skills_readiness';
}

export interface QuizQuestion {
  id: string;
  category: QuestionCategory;
  question: string;
  description?: string;
  options: QuizOption[];
  indicators: AssessmentIndicator[];
  targetPaths: FuturePathId[] | 'all';
  priority: QuestionPriority;
  isRequired: boolean;
  estimatedSeconds: number;
  branchingRules?: BranchingRules;
}

export type StudentAnswerResponseMode =
  | 'standard'
  | 'other'
  | 'none_fit'
  | 'dont_know'
  | 'skipped';

export interface StudentQuizAnswer {
  questionId: string;
  selectedOptionId: string;
  answeredAt: string;
  timeSpentMs?: number;
  skipped?: boolean;
  customText?: string;
  responseMode?: StudentAnswerResponseMode;
}

export type StudentAnswer = StudentQuizAnswer;

export interface AdaptiveSessionProgress {
  currentQuestionIndex: number;
  totalPlannedQuestions: number;
  answeredCount: number;
  skippedCount?: number;
  isComplete: boolean;
  activeSignals: Record<AssessmentIndicator, number>;
}

