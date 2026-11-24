/**
 * Admin experience and analytics data structures.
 * Prepares the architecture for booth officers and exhibition managers at SMKN 1 Katapang RPL Exhibition.
 */

import { FuturePathId, StudentProfile } from './student';

export interface ExhibitionBoothStats {
  totalVisitors: number;
  totalCompletedAssessments: number;
  pathDistribution: Record<FuturePathId, number>;
  topSmkMajors: { major: string; count: number }[];
  averageSessionDurationSeconds: number;
}

export interface AdminSessionRecord {
  id: string;
  student: StudentProfile;
  assignedPath: FuturePathId;
  completedAt: string;
  boothNotes?: string;
}

export interface AdminAuthSession {
  isAuthenticated: boolean;
  role: 'superadmin' | 'rpl_exhibition_admin' | 'booth_officer';
  userName?: string;
}
