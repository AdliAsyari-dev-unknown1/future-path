import React from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  ShieldCheck,
  ShieldAlert,
  FlaskConical
} from 'lucide-react';
import { EvidenceSufficiencyStatus } from '../../types/scoring';
import { MatchingSufficiencyStatus } from '../../types/recommendation';
import { VerificationStatus } from '../../types/catalog';

export function getSufficiencyMeta(
  status: EvidenceSufficiencyStatus | MatchingSufficiencyStatus
): {
  label: string;
  icon: React.ReactNode;
  textColor: string;
  barColor: string;
  surfaceClass: string;
} {
  if (status === 'cukup' || status === 'memadai') {
    return {
      label: status === 'cukup' ? 'Bukti Cukup' : 'Bukti Memadai',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />,
      textColor: 'text-emerald-800',
      barColor: 'bg-blue-600',
      surfaceClass: 'bg-emerald-50/70 border-emerald-200/80 text-emerald-900'
    };
  }
  if (status === 'terbatas') {
    return {
      label: 'Bukti Terbatas',
      icon: <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />,
      textColor: 'text-amber-800',
      barColor: 'bg-amber-500',
      surfaceClass: 'bg-amber-50/80 border-amber-200/80 text-amber-900'
    };
  }
  return {
    label: 'Belum Cukup Bukti',
    icon: <AlertCircle className="w-4 h-4 text-rose-700 shrink-0" />,
    textColor: 'text-rose-800',
    barColor: 'bg-slate-200',
    surfaceClass: 'bg-rose-50/70 border-rose-200/80 text-rose-900'
  };
}

export function getVerificationBadgeMeta(
  status: VerificationStatus | 'SIMULATION'
): {
  label: string;
  icon: React.ReactNode;
  textColor: string;
  surfaceClass: string;
} {
  if (status === 'VERIFIED') {
    return {
      label: 'Terverifikasi Sumber Resmi',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />,
      textColor: 'text-emerald-800',
      surfaceClass: 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950'
    };
  }
  if (status === 'PARTIALLY_VERIFIED') {
    return {
      label: 'Sebagian Terverifikasi',
      icon: <ShieldAlert className="w-3.5 h-3.5 text-amber-700 shrink-0" />,
      textColor: 'text-amber-800',
      surfaceClass: 'bg-amber-50/80 border-amber-200/90 text-amber-950'
    };
  }
  if (status === 'SIMULATION') {
    return {
      label: 'Data Simulasi (Bukan Katalog Nyata)',
      icon: <FlaskConical className="w-3.5 h-3.5 text-amber-700 shrink-0" />,
      textColor: 'text-amber-800',
      surfaceClass: 'bg-amber-50/80 border-amber-200/90 text-amber-950'
    };
  }
  return {
    label: 'Belum Terverifikasi',
    icon: <AlertCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />,
    textColor: 'text-rose-800',
    surfaceClass: 'bg-rose-50/80 border-rose-200/90 text-rose-950'
  };
}
