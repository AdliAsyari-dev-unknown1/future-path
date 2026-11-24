/**
 * PIXEL TO REALITY — FUTURE PATH
 * Phase 7.4: Client-Side A4 Result PDF Exporter (jspdf)
 *
 * Strictly binds to the active participant session:
 * 1. Identitas peserta (Nama, Jurusan, Kelas jika diisi, Tanggal asesmen, Arah eksplorasi)
 * 2. Ringkasan profil (Minat utama, Keinginan belajar, Kemampuan saat ini, Preferensi aktivitas & lingkungan)
 * 3. Rekomendasi utama (Nama bidang, Jalur, Penjelasan bidang — atau status Belum Dapat Disimpulkan)
 * 4. Informasi mendalam 8 aspek (Aktivitas & tanggung jawab, Lingkungan, Skill Hard/Soft/Dasar,
 *    Pendidikan/persyaratan, Kisaran penghasilan atau exact fallback, Tantangan & Peluang perkembangan)
 * 5. Pilihan alternatif
 * 6. Saran langkah berikutnya
 * 7. Sumber informasi & tanggal akses/verifikasi
 *
 * Guarantees clean multi-page flow (`Halaman X dari Y`), zero orphan headings,
 * zero text cutoff, and Phase 7.3 domain accent colors.
 */

import { jsPDF } from 'jspdf';
import {
  CandidateMatchResult,
  RecommendationMatchingOutput
} from '../types/recommendation';
import { StudentProfileAssessment } from '../types/scoring';
import { FuturePathId, StudentBiodata } from '../types/student';
import { buildCareerInsightForCandidate } from './careerInsightBuilder';
import {
  DomainVisualKind,
  buildPersonalNextSteps,
  buildPersonalProfileOverview,
  getDirectionDisplayMeta,
  getPathCategoryLabel,
  getProportionalMatchLabel,
  inferDomainVisual
} from './resultNarrativeBuilder';

export interface ResultExportInput {
  biodata: StudentBiodata;
  direction: FuturePathId | null;
  profileAssessment: StudentProfileAssessment;
  recommendations: RecommendationMatchingOutput | null;
  assessmentDate?: Date;
}

export interface GeneratedResultPdfOutput {
  doc: jsPDF;
  fileName: string;
  pageCount: number;
  arrayBuffer: ArrayBuffer;
  extractedTextSummary: string;
}

const DOMAIN_PDF_RGB: Record<DomainVisualKind, [number, number, number]> = {
  tech: [37, 99, 235],
  engineering: [234, 88, 12],
  law: [190, 18, 60],
  language: [13, 148, 136],
  education: [79, 70, 229],
  health: [5, 150, 105],
  business: [217, 119, 6],
  communication: [162, 28, 175],
  psychology: [219, 39, 119],
  creative: [124, 58, 237],
  agro: [22, 163, 74],
  hospitality: [234, 88, 12],
  admin: [2, 132, 199]
};

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN_X = 16;
const CONTENT_W = PAGE_W - MARGIN_X * 2;
const TOP_Y = 20;
const BOTTOM_LIMIT_Y = PAGE_H - 18;

const MONTHS_ID = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
];

export function formatIndonesianDate(date: Date): string {
  const day = date.getDate();
  const month = MONTHS_ID[date.getMonth()] ?? '';
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function sanitizePdfText(raw: string): string {
  return raw
    .replace(/\u2014|\u2013/g, '-')
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u201C|\u201D/g, '"')
    .replace(/\u2022/g, '-')
    .replace(/\u00B7/g, ' | ')
    .replace(/\u2192/g, '->')
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugifyFilePart(name: string): string {
  const cleaned = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return cleaned || 'peserta';
}

export function generateStudentResultPdfDocument(
  input: ResultExportInput
): GeneratedResultPdfOutput {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const assessmentDate = input.assessmentDate ?? new Date();
  const formattedDate = formatIndonesianDate(assessmentDate);
  const fullName = input.biodata.fullName.trim() || 'Peserta Pameran';
  const majorLabel = input.biodata.major || 'Belum diisi';
  const gradeClass = (input.biodata.gradeLevel || '').trim();
  const dirMeta = getDirectionDisplayMeta(input.direction);

  const primaryCandidate: CandidateMatchResult | null =
    input.recommendations &&
    input.profileAssessment.overallSufficiency !== 'belum_cukup' &&
    input.recommendations.overallMatchingSufficiency !== 'belum_cukup'
      ? input.recommendations.activePathRecommendations[0] ?? null
      : null;

  const primaryVisual: DomainVisualKind = primaryCandidate
    ? inferDomainVisual(primaryCandidate.candidate)
    : 'tech';
  const accentRgb = DOMAIN_PDF_RGB[primaryVisual];

  const textChunks: string[] = [];
  const pushText = (s: string) => {
    textChunks.push(s);
  };

  let y = TOP_Y;

  const drawSubPageHeader = () => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(accentRgb[0], accentRgb[1], accentRgb[2]);
    doc.text('PIXEL TO REALITY - FUTURE PATH', MARGIN_X, 11);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    const shortHeaderName =
      fullName.length > 34 ? `${fullName.slice(0, 31).trimEnd()}...` : fullName;
    const rightHeader = sanitizePdfText(`${shortHeaderName} | ${formattedDate}`);
    doc.text(rightHeader, PAGE_W - MARGIN_X, 11, { align: 'right' });

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(MARGIN_X, 13.5, PAGE_W - MARGIN_X, 13.5);
  };

  const ensureSpace = (neededMm: number) => {
    if (y + neededMm > BOTTOM_LIMIT_Y) {
      doc.addPage();
      drawSubPageHeader();
      y = TOP_Y;
    }
  };

  const drawSectionTitle = (numStr: string, titleText: string) => {
    ensureSpace(16);
    y += 2;
    doc.setFillColor(accentRgb[0], accentRgb[1], accentRgb[2]);
    doc.rect(MARGIN_X, y, 2.2, 5.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11.5);
    doc.setTextColor(15, 23, 42);
    const full = sanitizePdfText(`${numStr}. ${titleText}`);
    doc.text(full, MARGIN_X + 4.5, y + 4.2);
    pushText(full);
    y += 8.5;
  };

  const drawParagraph = (
    text: string,
    opts?: {
      fontSize?: number;
      bold?: boolean;
      color?: [number, number, number];
      indentMm?: number;
      lineGap?: number;
      afterGap?: number;
    }
  ) => {
    const fontSize = opts?.fontSize ?? 9.5;
    const indent = opts?.indentMm ?? 0;
    const lineGap = opts?.lineGap ?? 4.5;
    const afterGap = opts?.afterGap ?? 2.2;
    const color = opts?.color ?? [51, 65, 85];

    const safe = sanitizePdfText(text);
    if (!safe) return;
    pushText(safe);

    doc.setFont('helvetica', opts?.bold ? 'bold' : 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);

    const lines: string[] = doc.splitTextToSize(safe, CONTENT_W - indent);
    for (const line of lines) {
      ensureSpace(lineGap + 2);
      doc.text(line, MARGIN_X + indent, y);
      y += lineGap;
    }
    y += afterGap;
  };

  const drawBulletList = (
    items: string[],
    opts?: { indentMm?: number; fontSize?: number; color?: [number, number, number] }
  ) => {
    const indent = opts?.indentMm ?? 2.5;
    const fontSize = opts?.fontSize ?? 9.2;
    const color = opts?.color ?? [51, 65, 85];

    for (const item of items) {
      const safe = sanitizePdfText(item);
      if (!safe) continue;
      pushText(safe);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(fontSize);
      doc.setTextColor(color[0], color[1], color[2]);
      const lines: string[] = doc.splitTextToSize(safe, CONTENT_W - indent - 4);
      ensureSpace(lines.length * 4.4 + 2);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(accentRgb[0], accentRgb[1], accentRgb[2]);
      doc.text('-', MARGIN_X + indent, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(color[0], color[1], color[2]);
      for (const line of lines) {
        doc.text(line, MARGIN_X + indent + 4, y);
        y += 4.3;
      }
      y += 0.8;
    }
    y += 1.5;
  };

  // =========================================================================
  // COVER HEADER BANNER (Page 1, dynamically sized for long participant names)
  // =========================================================================
  const bannerTop = 'PIXEL TO REALITY - FUTURE PATH | DARI POTENSI MENJADI MASA DEPAN';
  const bannerTitle = sanitizePdfText(`Laporan Hasil Eksplorasi: ${fullName}`);
  const bannerSub = sanitizePdfText(
    `Pameran Jurusan RPL SMKN 1 Katapang | Dicetak/Diunduh: ${formattedDate}`
  );

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14.5);
  const bannerTitleLines: string[] = doc.splitTextToSize(bannerTitle, CONTENT_W - 12);
  const titleLineH = 6.2;
  const bannerHeight = Math.max(28, 16.5 + bannerTitleLines.length * titleLineH + 7.5);

  doc.setFillColor(accentRgb[0], accentRgb[1], accentRgb[2]);
  doc.roundedRect(MARGIN_X, 14, CONTENT_W, bannerHeight, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(235, 244, 255);
  doc.text(bannerTop, MARGIN_X + 6, 21);
  pushText(bannerTop);

  doc.setFontSize(14.5);
  doc.setTextColor(255, 255, 255);
  let titleY = 28.5;
  for (const tLine of bannerTitleLines) {
    doc.text(tLine, MARGIN_X + 6, titleY);
    titleY += titleLineH;
  }
  pushText(bannerTitle);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(241, 245, 249);
  doc.text(bannerSub, MARGIN_X + 6, 14 + bannerHeight - 4.5);
  pushText(bannerSub);

  y = 14 + bannerHeight + 7;

  // =========================================================================
  // 1. IDENTITAS PESERTA
  // =========================================================================
  drawSectionTitle('1', 'Identitas Peserta');

  const identityLines = [
    `Nama Lengkap : ${fullName}`,
    `Jurusan Asal : ${majorLabel}`,
    ...(gradeClass ? [`Kelas        : ${gradeClass}`] : []),
    `Tanggal      : ${formattedDate}`,
    `Arah Dipilih : ${dirMeta.label}`
  ];

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.2);
  const wrappedIdentityRows: string[][] = identityLines.map((row) => {
    const safe = sanitizePdfText(row);
    pushText(safe);
    return doc.splitTextToSize(safe, CONTENT_W - 9);
  });
  const totalIdentityLines = wrappedIdentityRows.reduce((acc, lines) => acc + lines.length, 0);
  const identityBoxHeight = totalIdentityLines * 5 + 5.5;

  ensureSpace(identityBoxHeight + 6);
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(MARGIN_X, y, CONTENT_W, identityBoxHeight, 2.5, 2.5, 'FD');
  let idY = y + 5.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(30, 41, 59);
  for (const lines of wrappedIdentityRows) {
    for (const line of lines) {
      doc.text(line, MARGIN_X + 4.5, idY);
      idY += 5;
    }
  }
  y += identityBoxHeight + 5;

  // =========================================================================
  // 2. RINGKASAN PROFIL
  // =========================================================================
  drawSectionTitle('2', 'Ringkasan Profil Jawabanmu');
  const overview = buildPersonalProfileOverview(
    input.profileAssessment,
    input.direction,
    input.biodata
  );
  drawParagraph(overview.headlineSummary, { bold: true, color: [15, 23, 42] });

  const minatText = overview.blocks.find((b) => b.id === 'activities')?.answerText ?? '';
  const learningText = overview.blocks.find((b) => b.id === 'learning')?.answerText ?? '';
  const masteredText = overview.blocks.find((b) => b.id === 'mastered')?.answerText ?? '';
  const envPrefText = overview.blocks.find((b) => b.id === 'thinking_habits')?.answerText ?? '';

  drawParagraph(`Minat Utama: ${minatText}`);
  drawParagraph(`Keinginan Belajar: ${learningText}`);
  drawParagraph(`Kemampuan Saat Ini: ${masteredText}`);
  drawParagraph(`Preferensi Aktivitas & Lingkungan: ${envPrefText}`);

  if (overview.customOtherNotes.length > 0) {
    drawParagraph('Catatan Jawaban Khusus ("Lainnya") dari Peserta:', {
      bold: true,
      color: [30, 64, 175],
      afterGap: 1
    });
    drawBulletList(
      overview.customOtherNotes.map((n) => `${n.questionText} -> "${n.customText}"`)
    );
  }
  if (overview.flexibleCountsNote) {
    drawParagraph(overview.flexibleCountsNote, { fontSize: 8.6, color: [100, 116, 139] });
  }

  // =========================================================================
  // 3. REKOMENDASI UTAMA & 4. INFORMASI MENDALAM (8 ASPEK)
  // =========================================================================
  drawSectionTitle('3', 'Rekomendasi Utama');

  if (!primaryCandidate) {
    drawParagraph(
      'Status: Belum Dapat Disimpulkan. Bukti jawabanmu pada sesi ini masih belum memadai untuk menetapkan satu rekomendasi utama secara pasti.',
      { bold: true, color: [146, 64, 14] }
    );
    drawParagraph(
      'Disarankan untuk menjawab lebih banyak pertanyaan agar profil minat, kebiasaan, dan bekalmu terbaca lebih akurat.'
    );

    drawSectionTitle('4', 'Informasi Mendalam Bidang');
    drawParagraph(
      'Wawasan 8 aspek bidang akan tampil lengkap setelah rekomendasi utama dapat disimpulkan dengan cukup bukti.'
    );
  } else {
    const cand = primaryCandidate.candidate;
    const matchLabel = getProportionalMatchLabel(
      primaryCandidate.matchScore,
      primaryCandidate.matchSufficiency
    );
    const insight = buildCareerInsightForCandidate(cand);

    const pathMetaLine = sanitizePdfText(
      `${getPathCategoryLabel(cand.pathCategory)} | ${cand.categoryLabel} | ${matchLabel.label}${
        primaryCandidate.matchScore !== null ? ` (${primaryCandidate.matchScore}/100)` : ''
      }`
    );
    const candTitle = sanitizePdfText(cand.name);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    const metaLines: string[] = doc.splitTextToSize(pathMetaLine, CONTENT_W - 9);
    doc.setFontSize(12.5);
    const candTitleLines: string[] = doc.splitTextToSize(candTitle, CONTENT_W - 9);

    const candBoxHeight = metaLines.length * 4.2 + candTitleLines.length * 5.8 + 7.5;
    ensureSpace(candBoxHeight + 6);

    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(accentRgb[0], accentRgb[1], accentRgb[2]);
    doc.setLineWidth(0.45);
    doc.roundedRect(MARGIN_X, y, CONTENT_W, candBoxHeight, 2.5, 2.5, 'FD');

    let boxY = y + 5.5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(accentRgb[0], accentRgb[1], accentRgb[2]);
    for (const mLine of metaLines) {
      doc.text(mLine, MARGIN_X + 4.5, boxY);
      boxY += 4.2;
    }
    pushText(pathMetaLine);

    boxY += 1.2;
    doc.setFontSize(12.5);
    doc.setTextColor(15, 23, 42);
    for (const cLine of candTitleLines) {
      doc.text(cLine, MARGIN_X + 4.5, boxY);
      boxY += 5.8;
    }
    pushText(candTitle);
    y += candBoxHeight + 4.5;

    drawParagraph(insight.fieldOverview.simpleExplanation, {
      bold: true,
      color: [15, 23, 42]
    });
    drawParagraph(`Tujuan & Ruang Lingkup: ${insight.fieldOverview.purposeAndScope}`);
    if (insight.fieldOverview.realLifeExamples.length > 0) {
      drawParagraph('Contoh Penerapan Nyata:', { bold: true, afterGap: 1 });
      drawBulletList(insight.fieldOverview.realLifeExamples);
    }

    if (primaryCandidate.reasonsConsidered.length > 0) {
      drawParagraph('Alasan Keselarasan dengan Profilmu:', { bold: true, afterGap: 1 });
      drawBulletList(primaryCandidate.reasonsConsidered);
    }

    // 4. INFORMASI MENDALAM
    drawSectionTitle('4', 'Informasi Mendalam Bidang (8 Aspek)');

    drawParagraph(`A. ${insight.activitiesAndResponsibilities.heading}:`, {
      bold: true,
      color: [15, 23, 42],
      afterGap: 1
    });
    drawBulletList(insight.activitiesAndResponsibilities.items);

    drawParagraph('B. Tempat & Lingkungan:', {
      bold: true,
      color: [15, 23, 42],
      afterGap: 1
    });
    drawBulletList([
      `Setting tempat: ${insight.environmentAndWorkStyle.settingSummary}`,
      `Interaksi sosial: ${insight.environmentAndWorkStyle.socialInteraction}`,
      `Ritme keseharian: ${insight.environmentAndWorkStyle.workRhythm}`
    ]);

    drawParagraph('C. Skill yang Dibutuhkan (Terpisah):', {
      bold: true,
      color: [15, 23, 42],
      afterGap: 1
    });
    drawParagraph(`- Hard Skills: ${insight.skillsSeparated.hardSkills.join('; ')}`, {
      indentMm: 2,
      afterGap: 1.5
    });
    drawParagraph(`- Soft Skills: ${insight.skillsSeparated.softSkills.join('; ')}`, {
      indentMm: 2,
      afterGap: 1.5
    });
    drawParagraph(
      `- Dasar untuk Pemula: ${insight.skillsSeparated.beginnerStarterSkills.join('; ')}`,
      { indentMm: 2, afterGap: 2.5 }
    );

    drawParagraph('D. Pendidikan & Persyaratan:', {
      bold: true,
      color: [15, 23, 42],
      afterGap: 1
    });
    drawBulletList([
      ...insight.educationAndRequirements.generalEducationPaths,
      ...insight.educationAndRequirements.nonFormalOrTraining,
      ...insight.educationAndRequirements.regulatoryOrCertificationNotes
    ]);

    drawParagraph(
      cand.pathCategory === 'wirausaha'
        ? 'E. Gambaran Modal Awal & Penghasilan Usaha:'
        : cand.pathCategory === 'kuliah'
        ? 'E. Informasi Biaya Kuliah & Penghasilan Lulusan:'
        : 'E. Kisaran Penghasilan:',
      {
        bold: true,
        color: [15, 23, 42],
        afterGap: 1
      }
    );
    if (insight.incomeInfo.status === 'available') {
      drawParagraph(
        `${insight.incomeInfo.rangeText} (Level: ${insight.incomeInfo.experienceLevel}, Lokasi: ${insight.incomeInfo.locationContext}) - Sumber: ${insight.incomeInfo.sourceTitle}, ${insight.incomeInfo.sourcePublisher} (${insight.incomeInfo.verifiedAt})`,
        { indentMm: 2 }
      );
    } else {
      drawParagraph(insight.incomeInfo.fallbackText, {
        indentMm: 2,
        color: [71, 85, 105]
      });
      if (insight.financialContext?.guidanceNote) {
        drawParagraph(insight.financialContext.guidanceNote, {
          indentMm: 2,
          color: [71, 85, 105]
        });
      }
    }

    drawParagraph('F. Tantangan, Langkah Awal & Hal yang Perlu Dipersiapkan:', {
      bold: true,
      color: [15, 23, 42],
      afterGap: 1
    });
    if (insight.starterActionStep) {
      drawParagraph(`Langkah Awal Nyata: ${insight.starterActionStep}`, {
        indentMm: 2,
        bold: true,
        color: accentRgb,
        afterGap: 1.5
      });
    }
    drawBulletList([
      ...insight.challengesAndPreparation.challenges.map((c) => `Tantangan: ${c}`),
      ...insight.challengesAndPreparation.preparations.map((p) => `Persiapan: ${p}`)
    ]);

    drawParagraph('G. Peluang Perkembangan:', {
      bold: true,
      color: [15, 23, 42],
      afterGap: 1
    });
    drawBulletList([
      ...insight.growthOpportunities.progressionPath,
      `Peluang lintas bidang: ${insight.growthOpportunities.specializationOrPathSwitch}`,
      `Relevansi ke depan: ${insight.growthOpportunities.futureRelevanceNote}`
    ]);
  }

  // =========================================================================
  // 5. PILIHAN ALTERNATIF
  // =========================================================================
  drawSectionTitle('5', 'Pilihan Alternatif');
  const alternatives = input.recommendations
    ? input.recommendations.activePathRecommendations
        .filter((item) => !primaryCandidate || item.candidate.id !== primaryCandidate.candidate.id)
        .slice(0, 3)
    : [];

  if (alternatives.length === 0) {
    drawParagraph('Belum ada pilihan alternatif tambahan yang ditampilkan untuk sesi ini.');
  } else {
    for (let i = 0; i < alternatives.length; i++) {
      const alt = alternatives[i];
      const lbl = getProportionalMatchLabel(alt.matchScore, alt.matchSufficiency).label;
      drawParagraph(
        `${i + 1}. ${alt.candidate.name} (${getPathCategoryLabel(alt.candidate.pathCategory)} | ${lbl}${
          alt.matchScore !== null ? ` - ${alt.matchScore}/100` : ''
        })`,
        { bold: true, color: [15, 23, 42], afterGap: 1 }
      );
      drawParagraph(alt.candidate.shortDescription, { indentMm: 3, afterGap: 2 });
    }
  }

  // =========================================================================
  // 6. SARAN LANGKAH BERIKUTNYA
  // =========================================================================
  drawSectionTitle('6', 'Saran Langkah Berikutnya');
  const nextSteps = buildPersonalNextSteps(
    input.profileAssessment,
    input.recommendations,
    input.direction
  );
  drawBulletList(nextSteps.map((s) => `${s.title}: ${s.actionDetail}`));

  // =========================================================================
  // 7. SUMBER INFORMASI & TANGGAL AKSES/VERIFIKASI
  // =========================================================================
  drawSectionTitle('7', 'Sumber Informasi & Tanggal Verifikasi');
  const collectedCandidates = [
    ...(primaryCandidate ? [primaryCandidate.candidate] : []),
    ...alternatives.map((a) => a.candidate)
  ];
  const seenSourceKeys = new Set<string>();
  const sourceLines: string[] = [];
  for (const cand of collectedCandidates) {
    for (const src of cand.productionMetadata?.sources ?? []) {
      const key = `${src.title}|${src.publisher}`;
      if (!seenSourceKeys.has(key)) {
        seenSourceKeys.add(key);
        sourceLines.push(
          `${src.title} - Penerbit: ${src.publisher} | Status: ${src.status} | Diperiksa: ${src.verifiedAt}${
            src.url ? ` (${src.url})` : ''
          }`
        );
      }
    }
  }

  if (sourceLines.length > 0) {
    drawBulletList(sourceLines, { fontSize: 8.5 });
  } else {
    drawParagraph(
      `Tanggal penyusunan laporan: ${formattedDate}. Catatan katalog: dokumen eksplorasi edukatif pameran RPL SMKN 1 Katapang.`,
      { fontSize: 8.8 }
    );
  }
  drawParagraph(
    'Disclaimer: Dokumen ini adalah panduan eksplorasi awal pameran jurusan RPL SMKN 1 Katapang — bukan layanan resmi penempatan kerja, penerimaan mahasiswa, atau konsultasi usaha.',
    { fontSize: 8.2, color: [100, 116, 139] }
  );

  // =========================================================================
  // CONSISTENT FOOTER ON ALL PAGES ("Halaman X dari Y")
  // =========================================================================
  const totalPages = doc.getNumberOfPages();
  for (let page = 1; page <= totalPages; page++) {
    doc.setPage(page);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(MARGIN_X, PAGE_H - 13, PAGE_W - MARGIN_X, PAGE_H - 13);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(
      'PIXEL TO REALITY - FUTURE PATH | SMKN 1 Katapang',
      MARGIN_X,
      PAGE_H - 8.5
    );
    doc.text(`Halaman ${page} dari ${totalPages}`, PAGE_W - MARGIN_X, PAGE_H - 8.5, {
      align: 'right'
    });
  }

  const fileName = `future-path-hasil-${slugifyFilePart(fullName)}.pdf`;
  const arrayBuffer = doc.output('arraybuffer');

  return {
    doc,
    fileName,
    pageCount: totalPages,
    arrayBuffer,
    extractedTextSummary: textChunks.join('\n')
  };
}

export function downloadStudentResultPdf(input: ResultExportInput): string {
  const generated = generateStudentResultPdfDocument(input);
  generated.doc.save(generated.fileName);
  return generated.fileName;
}
