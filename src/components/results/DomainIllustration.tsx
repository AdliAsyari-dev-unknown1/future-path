import React from 'react';
import {
  BookText,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  GraduationCap,
  HeartPulse,
  Megaphone,
  Palette,
  Scale,
  Sprout,
  Users,
  Utensils,
  Wrench
} from 'lucide-react';
import { DomainVisualKind } from '../../services/resultNarrativeBuilder';

export interface DomainThemeMeta {
  kind: DomainVisualKind;
  label: string;
  heroGradient: string;
  heroBadgeBg: string;
  heroBadgeText: string;
  cardBorder: string;
  softBg: string;
  softBorder: string;
  softText: string;
  accentText: string;
  checkBg: string;
  checkText: string;
  chipBg: string;
  chipBorder: string;
  chipText: string;
  altHoverBorder: string;
}

export const DOMAIN_THEME_CONFIG: Record<DomainVisualKind, DomainThemeMeta> = {
  tech: {
    kind: 'tech',
    label: 'Teknologi & Informatika',
    heroGradient: 'bg-gradient-to-br from-blue-700 via-indigo-700 to-cyan-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-blue-200',
    softBg: 'bg-blue-50/85',
    softBorder: 'border-blue-200/80',
    softText: 'text-blue-950',
    accentText: 'text-blue-700',
    checkBg: 'bg-blue-100',
    checkText: 'text-blue-700',
    chipBg: 'bg-blue-50',
    chipBorder: 'border-blue-200',
    chipText: 'text-blue-900',
    altHoverBorder: 'hover:border-blue-300'
  },
  engineering: {
    kind: 'engineering',
    label: 'Teknik, Mesin & Otomotif',
    heroGradient: 'bg-gradient-to-br from-slate-800 via-orange-700 to-amber-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-orange-200',
    softBg: 'bg-orange-50/85',
    softBorder: 'border-orange-200/80',
    softText: 'text-orange-950',
    accentText: 'text-orange-700',
    checkBg: 'bg-orange-100',
    checkText: 'text-orange-700',
    chipBg: 'bg-orange-50',
    chipBorder: 'border-orange-200',
    chipText: 'text-orange-950',
    altHoverBorder: 'hover:border-orange-300'
  },
  law: {
    kind: 'law',
    label: 'Hukum & Tata Keadilan',
    heroGradient: 'bg-gradient-to-br from-red-800 via-rose-800 to-amber-800',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-rose-200',
    softBg: 'bg-rose-50/80',
    softBorder: 'border-rose-200/80',
    softText: 'text-rose-950',
    accentText: 'text-rose-800',
    checkBg: 'bg-rose-100',
    checkText: 'text-rose-800',
    chipBg: 'bg-rose-50',
    chipBorder: 'border-rose-200',
    chipText: 'text-rose-950',
    altHoverBorder: 'hover:border-rose-300'
  },
  language: {
    kind: 'language',
    label: 'Bahasa, Sastra & Penulisan',
    heroGradient: 'bg-gradient-to-br from-teal-700 via-emerald-700 to-cyan-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-teal-200',
    softBg: 'bg-teal-50/85',
    softBorder: 'border-teal-200/80',
    softText: 'text-teal-950',
    accentText: 'text-teal-700',
    checkBg: 'bg-teal-100',
    checkText: 'text-teal-700',
    chipBg: 'bg-teal-50',
    chipBorder: 'border-teal-200',
    chipText: 'text-teal-950',
    altHoverBorder: 'hover:border-teal-300'
  },
  education: {
    kind: 'education',
    label: 'Pendidikan & Pengajaran',
    heroGradient: 'bg-gradient-to-br from-indigo-700 via-sky-700 to-blue-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-indigo-200',
    softBg: 'bg-indigo-50/85',
    softBorder: 'border-indigo-200/80',
    softText: 'text-indigo-950',
    accentText: 'text-indigo-700',
    checkBg: 'bg-indigo-100',
    checkText: 'text-indigo-700',
    chipBg: 'bg-indigo-50',
    chipBorder: 'border-indigo-200',
    chipText: 'text-indigo-950',
    altHoverBorder: 'hover:border-indigo-300'
  },
  health: {
    kind: 'health',
    label: 'Kesehatan & Layanan Medis',
    heroGradient: 'bg-gradient-to-br from-emerald-700 via-teal-700 to-green-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-emerald-200',
    softBg: 'bg-emerald-50/85',
    softBorder: 'border-emerald-200/80',
    softText: 'text-emerald-950',
    accentText: 'text-emerald-700',
    checkBg: 'bg-emerald-100',
    checkText: 'text-emerald-700',
    chipBg: 'bg-emerald-50',
    chipBorder: 'border-emerald-200',
    chipText: 'text-emerald-950',
    altHoverBorder: 'hover:border-emerald-300'
  },
  business: {
    kind: 'business',
    label: 'Bisnis, Ekonomi & Keuangan',
    heroGradient: 'bg-gradient-to-br from-amber-700 via-orange-700 to-yellow-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-amber-200',
    softBg: 'bg-amber-50/85',
    softBorder: 'border-amber-200/80',
    softText: 'text-amber-950',
    accentText: 'text-amber-800',
    checkBg: 'bg-amber-100',
    checkText: 'text-amber-800',
    chipBg: 'bg-amber-50',
    chipBorder: 'border-amber-200',
    chipText: 'text-amber-950',
    altHoverBorder: 'hover:border-amber-300'
  },
  communication: {
    kind: 'communication',
    label: 'Komunikasi, Media & Publik',
    heroGradient: 'bg-gradient-to-br from-fuchsia-700 via-purple-700 to-indigo-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-fuchsia-200',
    softBg: 'bg-fuchsia-50/80',
    softBorder: 'border-fuchsia-200/80',
    softText: 'text-fuchsia-950',
    accentText: 'text-fuchsia-700',
    checkBg: 'bg-fuchsia-100',
    checkText: 'text-fuchsia-700',
    chipBg: 'bg-fuchsia-50',
    chipBorder: 'border-fuchsia-200',
    chipText: 'text-fuchsia-950',
    altHoverBorder: 'hover:border-fuchsia-300'
  },
  psychology: {
    kind: 'psychology',
    label: 'Psikologi & Sosial Masyarakat',
    heroGradient: 'bg-gradient-to-br from-rose-700 via-pink-700 to-purple-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-pink-200',
    softBg: 'bg-pink-50/85',
    softBorder: 'border-pink-200/80',
    softText: 'text-pink-950',
    accentText: 'text-rose-700',
    checkBg: 'bg-pink-100',
    checkText: 'text-rose-700',
    chipBg: 'bg-pink-50',
    chipBorder: 'border-pink-200',
    chipText: 'text-rose-950',
    altHoverBorder: 'hover:border-pink-300'
  },
  creative: {
    kind: 'creative',
    label: 'Seni, Desain & Karya Visual',
    heroGradient: 'bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-violet-200',
    softBg: 'bg-violet-50/85',
    softBorder: 'border-violet-200/80',
    softText: 'text-violet-950',
    accentText: 'text-violet-700',
    checkBg: 'bg-violet-100',
    checkText: 'text-violet-700',
    chipBg: 'bg-violet-50',
    chipBorder: 'border-violet-200',
    chipText: 'text-violet-950',
    altHoverBorder: 'hover:border-violet-300'
  },
  agro: {
    kind: 'agro',
    label: 'Pertanian & Lingkungan Hidup',
    heroGradient: 'bg-gradient-to-br from-green-700 via-emerald-700 to-lime-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-green-200',
    softBg: 'bg-green-50/85',
    softBorder: 'border-green-200/80',
    softText: 'text-green-950',
    accentText: 'text-green-700',
    checkBg: 'bg-green-100',
    checkText: 'text-green-700',
    chipBg: 'bg-green-50',
    chipBorder: 'border-green-200',
    chipText: 'text-green-950',
    altHoverBorder: 'hover:border-green-300'
  },
  hospitality: {
    kind: 'hospitality',
    label: 'Pariwisata, Hotel & Kuliner',
    heroGradient: 'bg-gradient-to-br from-orange-700 via-rose-700 to-amber-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-orange-200',
    softBg: 'bg-orange-50/85',
    softBorder: 'border-orange-200/80',
    softText: 'text-orange-950',
    accentText: 'text-orange-700',
    checkBg: 'bg-orange-100',
    checkText: 'text-orange-700',
    chipBg: 'bg-orange-50',
    chipBorder: 'border-orange-200',
    chipText: 'text-orange-950',
    altHoverBorder: 'hover:border-orange-300'
  },
  admin: {
    kind: 'admin',
    label: 'Administrasi, Data & Logistik',
    heroGradient: 'bg-gradient-to-br from-sky-700 via-blue-700 to-slate-700',
    heroBadgeBg: 'bg-white/20 border border-white/30',
    heroBadgeText: 'text-white',
    cardBorder: 'border-sky-200',
    softBg: 'bg-sky-50/85',
    softBorder: 'border-sky-200/80',
    softText: 'text-sky-950',
    accentText: 'text-sky-700',
    checkBg: 'bg-sky-100',
    checkText: 'text-sky-700',
    chipBg: 'bg-sky-50',
    chipBorder: 'border-sky-200',
    chipText: 'text-sky-950',
    altHoverBorder: 'hover:border-sky-300'
  }
};

export const DomainIconBadge: React.FC<{
  kind: DomainVisualKind;
  className?: string;
}> = ({ kind, className = 'w-4 h-4' }) => {
  switch (kind) {
    case 'tech':
      return <Code2 className={className} />;
    case 'engineering':
      return <Wrench className={className} />;
    case 'law':
      return <Scale className={className} />;
    case 'language':
      return <BookText className={className} />;
    case 'education':
      return <GraduationCap className={className} />;
    case 'health':
      return <HeartPulse className={className} />;
    case 'business':
      return <BriefcaseBusiness className={className} />;
    case 'communication':
      return <Megaphone className={className} />;
    case 'psychology':
      return <Users className={className} />;
    case 'creative':
      return <Palette className={className} />;
    case 'agro':
      return <Sprout className={className} />;
    case 'hospitality':
      return <Utensils className={className} />;
    case 'admin':
      return <FolderKanban className={className} />;
  }
};

interface DomainIllustrationProps {
  kind: DomainVisualKind;
  className?: string;
}

export const DomainIllustration: React.FC<DomainIllustrationProps> = ({ kind, className = '' }) => {
  if (kind === 'tech') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#EFF6FF" />
        <circle cx="192" cy="38" r="24" fill="#DBEAFE" />
        <circle cx="44" cy="144" r="18" fill="#E0E7FF" />
        <rect x="46" y="40" width="148" height="92" rx="14" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="2.5" />
        <rect x="46" y="40" width="148" height="22" rx="14" fill="#2563EB" />
        <rect x="46" y="52" width="148" height="10" fill="#2563EB" />
        <circle cx="62" cy="51" r="3" fill="#93C5FD" />
        <circle cx="72" cy="51" r="3" fill="#93C5FD" />
        <circle cx="82" cy="51" r="3" fill="#93C5FD" />
        <rect x="60" y="74" width="52" height="44" rx="8" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="68" y="82" width="28" height="6" rx="3" fill="#2563EB" />
        <rect x="68" y="93" width="36" height="5" rx="2.5" fill="#60A5FA" />
        <rect x="68" y="103" width="24" height="5" rx="2.5" fill="#BFDBFE" />
        <rect x="122" y="74" width="58" height="20" rx="6" fill="#EEF2FF" />
        <circle cx="134" cy="84" r="4" fill="#4F46E5" />
        <rect x="144" y="81" width="28" height="6" rx="3" fill="#818CF8" />
        <rect x="122" y="100" width="58" height="18" rx="6" fill="#ECFEFF" />
        <circle cx="134" cy="109" r="4" fill="#0891B2" />
        <rect x="144" y="106" width="24" height="6" rx="3" fill="#22D3EE" />
        <rect x="106" y="132" width="28" height="10" rx="2" fill="#93C5FD" />
        <rect x="88" y="142" width="64" height="6" rx="3" fill="#2563EB" />
      </svg>
    );
  }

  if (kind === 'engineering') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#FFF7ED" />
        <circle cx="190" cy="40" r="24" fill="#FFEDD5" />
        <circle cx="48" cy="142" r="20" fill="#FEF3C7" />
        <rect x="44" y="38" width="152" height="104" rx="14" fill="#FFFFFF" stroke="#FED7AA" strokeWidth="2.5" />
        <circle cx="96" cy="88" r="26" fill="#FDBA74" />
        <circle cx="96" cy="88" r="14" fill="#FFFFFF" />
        <circle cx="96" cy="88" r="6" fill="#EA580C" />
        <circle cx="146" cy="72" r="16" fill="#60A5FA" />
        <circle cx="146" cy="72" r="7" fill="#FFFFFF" />
        <rect x="126" y="102" width="54" height="24" rx="7" fill="#1E293B" />
        <rect x="134" y="111" width="38" height="6" rx="3" fill="#FB923C" />
      </svg>
    );
  }

  if (kind === 'law') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#FFF1F2" />
        <circle cx="52" cy="42" r="22" fill="#FFE4E6" />
        <circle cx="192" cy="140" r="20" fill="#FEF3C7" />
        <rect x="44" y="36" width="152" height="108" rx="14" fill="#FFFFFF" stroke="#FECDD3" strokeWidth="2.5" />
        {/* Balance scale */}
        <rect x="116" y="54" width="8" height="66" rx="4" fill="#9F1239" />
        <rect x="88" y="118" width="64" height="10" rx="5" fill="#9F1239" />
        <rect x="74" y="62" width="92" height="6" rx="3" fill="#BE123C" />
        <path d="M78 68L66 94H90L78 68Z" fill="#FDA4AF" />
        <path d="M162 68L150 94H174L162 68Z" fill="#F59E0B" />
        <rect x="64" y="94" width="28" height="7" rx="3.5" fill="#E11D48" />
        <rect x="148" y="94" width="28" height="7" rx="3.5" fill="#D97706" />
      </svg>
    );
  }

  if (kind === 'language') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#F0FDFA" />
        <circle cx="190" cy="42" r="22" fill="#CCFBF1" />
        <rect x="44" y="38" width="152" height="104" rx="14" fill="#FFFFFF" stroke="#99F6E4" strokeWidth="2.5" />
        {/* Open book & quote bubble */}
        <rect x="58" y="56" width="56" height="68" rx="8" fill="#CCFBF1" stroke="#14B8A6" strokeWidth="1.5" />
        <rect x="68" y="68" width="36" height="6" rx="3" fill="#0F766E" />
        <rect x="68" y="80" width="28" height="5" rx="2.5" fill="#14B8A6" />
        <rect x="68" y="91" width="32" height="5" rx="2.5" fill="#5EEAD4" />
        <rect x="122" y="56" width="60" height="34" rx="10" fill="#0D9488" />
        <rect x="132" y="67" width="40" height="5" rx="2.5" fill="#FFFFFF" />
        <rect x="132" y="76" width="26" height="5" rx="2.5" fill="#99F6E4" />
        <rect x="122" y="98" width="60" height="26" rx="8" fill="#ECFEFF" stroke="#67E8F9" strokeWidth="1.5" />
        <rect x="132" y="108" width="36" height="6" rx="3" fill="#0891B2" />
      </svg>
    );
  }

  if (kind === 'education') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#EEF2FF" />
        <circle cx="52" cy="40" r="22" fill="#E0E7FF" />
        <circle cx="192" cy="142" r="20" fill="#DBEAFE" />
        <rect x="44" y="38" width="152" height="104" rx="14" fill="#FFFFFF" stroke="#C7D2FE" strokeWidth="2.5" />
        <rect x="58" y="52" width="124" height="54" rx="10" fill="#312E81" />
        <rect x="70" y="64" width="62" height="7" rx="3.5" fill="#A5B4FC" />
        <rect x="70" y="77" width="88" height="6" rx="3" fill="#60A5FA" />
        <rect x="70" y="89" width="48" height="6" rx="3" fill="#34D399" />
        <rect x="58" y="114" width="38" height="16" rx="6" fill="#4F46E5" />
        <rect x="102" y="114" width="38" height="16" rx="6" fill="#0EA5E9" />
        <rect x="146" y="114" width="36" height="16" rx="6" fill="#E2E8F0" />
      </svg>
    );
  }

  if (kind === 'health') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#ECFDF5" />
        <circle cx="192" cy="40" r="24" fill="#D1FAE5" />
        <rect x="44" y="38" width="152" height="104" rx="14" fill="#FFFFFF" stroke="#A7F3D0" strokeWidth="2.5" />
        {/* Medical shield + pulse */}
        <rect x="64" y="56" width="52" height="68" rx="14" fill="#059669" />
        <rect x="85" y="72" width="10" height="34" rx="3" fill="#FFFFFF" />
        <rect x="73" y="84" width="34" height="10" rx="3" fill="#FFFFFF" />
        <rect x="126" y="62" width="56" height="26" rx="8" fill="#D1FAE5" />
        <path d="M134 75H144L149 67L155 83L161 73L166 75H174" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="126" y="96" width="56" height="22" rx="8" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
        <rect x="136" y="104" width="34" height="6" rx="3" fill="#10B981" />
      </svg>
    );
  }

  if (kind === 'business') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#FFFBEB" />
        <circle cx="52" cy="42" r="22" fill="#FEF3C7" />
        <circle cx="192" cy="142" r="22" fill="#FFEDD5" />
        <rect x="44" y="38" width="152" height="104" rx="14" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="2.5" />
        {/* Rising bars + ledger */}
        <rect x="64" y="98" width="18" height="26" rx="5" fill="#FBBF24" />
        <rect x="90" y="82" width="18" height="42" rx="5" fill="#F59E0B" />
        <rect x="116" y="64" width="18" height="60" rx="5" fill="#D97706" />
        <rect x="144" y="60" width="38" height="64" rx="8" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1.5" />
        <circle cx="163" cy="78" r="9" fill="#EA580C" />
        <rect x="152" y="94" width="22" height="5" rx="2.5" fill="#F97316" />
        <rect x="152" y="104" width="16" height="5" rx="2.5" fill="#FDBA74" />
      </svg>
    );
  }

  if (kind === 'communication') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#FDF4FF" />
        <circle cx="192" cy="40" r="22" fill="#FAE8FF" />
        <rect x="44" y="38" width="152" height="104" rx="14" fill="#FFFFFF" stroke="#F5D0FE" strokeWidth="2.5" />
        <rect x="58" y="54" width="74" height="44" rx="10" fill="#A21CAF" />
        <circle cx="78" cy="76" r="10" fill="#F0ABFC" />
        <rect x="94" y="68" width="28" height="6" rx="3" fill="#FFFFFF" />
        <rect x="94" y="79" width="20" height="5" rx="2.5" fill="#F5D0FE" />
        <rect x="140" y="54" width="42" height="44" rx="10" fill="#F3E8FF" />
        <circle cx="161" cy="76" r="10" fill="#7E22CE" />
        <rect x="58" y="106" width="124" height="22" rx="8" fill="#FAF5FF" stroke="#E9D5FF" strokeWidth="1.5" />
        <rect x="70" y="114" width="60" height="6" rx="3" fill="#9333EA" />
      </svg>
    );
  }

  if (kind === 'psychology') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#FDF2F8" />
        <circle cx="52" cy="44" r="24" fill="#FCE7F3" />
        <circle cx="192" cy="140" r="20" fill="#F3E8FF" />
        <rect x="44" y="38" width="152" height="104" rx="14" fill="#FFFFFF" stroke="#FBCFE8" strokeWidth="2.5" />
        <circle cx="90" cy="76" r="16" fill="#BE185D" />
        <path d="M64 124C64 108 75.5 98 90 98C104.5 98 116 108 116 124H64Z" fill="#EC4899" />
        <circle cx="150" cy="78" r="15" fill="#7C3AED" />
        <path d="M126 124C126 109.5 136.5 100 150 100C163.5 100 174 109.5 174 124H126Z" fill="#8B5CF6" />
        <rect x="98" y="46" width="44" height="18" rx="9" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="1.5" />
        <circle cx="112" cy="55" r="2.5" fill="#E11D48" />
        <circle cx="120" cy="55" r="2.5" fill="#E11D48" />
        <circle cx="128" cy="55" r="2.5" fill="#E11D48" />
      </svg>
    );
  }

  if (kind === 'creative') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#F5F3FF" />
        <circle cx="52" cy="40" r="22" fill="#EDE9FE" />
        <circle cx="196" cy="142" r="22" fill="#FEF3C7" />
        <rect x="44" y="34" width="132" height="102" rx="14" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="2.5" />
        <rect x="58" y="48" width="104" height="54" rx="10" fill="#F3E8FF" />
        <circle cx="90" cy="75" r="18" fill="#7C3AED" />
        <rect x="100" y="60" width="46" height="32" rx="8" fill="#F59E0B" fillOpacity="0.88" />
        <path d="M74 96L94 74L114 96H74Z" fill="#EC4899" fillOpacity="0.85" />
        <rect x="58" y="112" width="24" height="12" rx="4" fill="#7C3AED" />
        <rect x="88" y="112" width="24" height="12" rx="4" fill="#F59E0B" />
        <rect x="118" y="112" width="44" height="12" rx="4" fill="#E2E8F0" />
        <rect x="150" y="76" width="48" height="68" rx="12" fill="#FFFFFF" stroke="#C4B5FD" strokeWidth="2.5" />
        <circle cx="174" cy="96" r="10" fill="#6D28D9" />
        <rect x="160" y="114" width="28" height="5" rx="2.5" fill="#A78BFA" />
        <rect x="160" y="124" width="20" height="5" rx="2.5" fill="#DDD6FE" />
      </svg>
    );
  }

  if (kind === 'agro') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#F0FDF4" />
        <circle cx="192" cy="40" r="24" fill="#DCFCE7" />
        <rect x="44" y="38" width="152" height="104" rx="14" fill="#FFFFFF" stroke="#BBF7D0" strokeWidth="2.5" />
        <circle cx="88" cy="78" r="24" fill="#16A34A" />
        <circle cx="120" cy="68" r="22" fill="#22C55E" />
        <rect x="98" y="88" width="10" height="36" rx="5" fill="#15803D" />
        <rect x="74" y="116" width="58" height="14" rx="7" fill="#86EFAC" />
        <rect x="142" y="64" width="42" height="58" rx="9" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1.5" />
        <rect x="150" y="76" width="26" height="6" rx="3" fill="#059669" />
        <rect x="150" y="88" width="18" height="5" rx="2.5" fill="#34D399" />
        <rect x="150" y="100" width="22" height="5" rx="2.5" fill="#6EE7B7" />
      </svg>
    );
  }

  if (kind === 'hospitality') {
    return (
      <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
        <rect width="240" height="180" rx="20" fill="#FFF7ED" />
        <circle cx="52" cy="40" r="22" fill="#FFEDD5" />
        <circle cx="190" cy="142" r="22" fill="#FFE4E6" />
        <rect x="44" y="38" width="152" height="104" rx="14" fill="#FFFFFF" stroke="#FED7AA" strokeWidth="2.5" />
        {/* Dish dome + ticket */}
        <path d="M64 102C64 81 80 65 100 65C120 65 136 81 136 102H64Z" fill="#EA580C" />
        <circle cx="100" cy="59" r="5" fill="#F97316" />
        <rect x="58" y="104" width="84" height="10" rx="5" fill="#9A3412" />
        <rect x="150" y="60" width="34" height="62" rx="8" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1.5" />
        <circle cx="167" cy="78" r="8" fill="#E11D48" />
        <rect x="157" y="94" width="20" height="5" rx="2.5" fill="#FB7185" />
        <rect x="157" y="104" width="14" height="5" rx="2.5" fill="#FDA4AF" />
      </svg>
    );
  }

  // 'admin' (Administrasi, Data & Logistik)
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`w-full h-full ${className}`}>
      <rect width="240" height="180" rx="20" fill="#F0F9FF" />
      <circle cx="188" cy="40" r="24" fill="#E0F2FE" />
      <circle cx="48" cy="142" r="20" fill="#DBEAFE" />
      <rect x="44" y="40" width="152" height="98" rx="14" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="2.5" />
      <rect x="58" y="54" width="54" height="38" rx="8" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
      <rect x="68" y="64" width="34" height="6" rx="3" fill="#0284C7" />
      <rect x="68" y="75" width="22" height="5" rx="2.5" fill="#38BDF8" />
      <rect x="120" y="54" width="62" height="38" rx="8" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
      <circle cx="138" cy="73" r="9" fill="#2563EB" />
      <circle cx="138" cy="73" r="3.5" fill="#FFFFFF" />
      <rect x="153" y="67" width="20" height="5" rx="2.5" fill="#60A5FA" />
      <rect x="153" y="76" width="15" height="5" rx="2.5" fill="#93C5FD" />
      <rect x="58" y="102" width="124" height="22" rx="7" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      <circle cx="72" cy="113" r="5" fill="#0EA5E9" />
      <rect x="84" y="110" width="44" height="6" rx="3" fill="#334155" />
      <rect x="136" y="110" width="34" height="6" rx="3" fill="#CBD5E1" />
    </svg>
  );
};
