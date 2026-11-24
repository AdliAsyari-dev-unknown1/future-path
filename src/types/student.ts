/**
 * Student participant and session data models
 * Strictly aligned with SMKN 1 Katapang RPL Exhibition context.
 */

export type FuturePathId = 'bekerja' | 'kuliah' | 'wirausaha' | 'bingung';

// The exact 7 vocational majors at SMKN 1 Katapang
export const SMK_MAJORS = [
  'Elektro',
  'Mesin',
  'Otomotif',
  'Tekstil',
  'TKJ',
  'RPL/PPLG',
  'BP/Broadcasting Perfilman'
] as const;

export type SmkMajor = typeof SMK_MAJORS[number];

export const GRADE_LEVELS = [
  'Kelas X (10)',
  'Kelas XI (11)',
  'Kelas XII (12)'
] as const;

export type GradeLevel = typeof GRADE_LEVELS[number];

export interface StudentBiodata {
  fullName: string;              // Wajib (nama lengkap atau panggilan)
  major: SmkMajor | '';          // Wajib dipilih dari 7 jurusan resmi SMKN 1 Katapang
  gradeLevel?: GradeLevel | '';  // Opsional (Kelas X, XI, XII SMKN 1 Katapang)
  consentAccepted: boolean;      // Wajib disetujui (pemrosesan sesi kuis pameran)
}

export type StudentProfile = StudentBiodata;

export type StudentFlowStep = 'welcome' | 'biodata' | 'direction' | 'assessment_shell';

export interface StudentSessionState {
  sessionId: string;
  step: StudentFlowStep;
  biodata: StudentBiodata;
  direction: FuturePathId | null;
  startedAt: string;
  updatedAt: string;
}
