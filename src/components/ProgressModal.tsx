import React from 'react';
import { Award, Download, RotateCcw, StickyNote, X } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

interface ProgressModalProps {
  open: boolean;
  masteredSlugs: Set<string>;
  notesBySlug: Record<string, string>;
  onClose: () => void;
  onFocusFamily: (familyId: string) => void;
  onResetProgress: () => void;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
  open,
  masteredSlugs,
  notesBySlug,
  onClose,
  onFocusFamily,
  onResetProgress,
}) => {
  const { concepts, families, t, fmt } = useI18n();
  if (!open) return null;

  const total = concepts.length;
  const count = masteredSlugs.size;
  const pct = Math.round((count / total) * 100);
  const notesCount = Object.values(notesBySlug).filter((v) => v.trim()).length;

  const handleExportMarkdown = () => {
    const today = new Date().toISOString().slice(0, 10);
    const lines: string[] = [
      `# ${t.mdTitle}`,
      ``,
      `- **${t.mdDateLabel}:** ${today}`,
      `- **${t.mdMasteredLabel}:** ${count} / ${total} (${pct}%)`,
      `- **${t.mdNotesLabel}:** ${notesCount}`,
      `- **${t.mdArchiveLabel}:** https://turrero.vercel.app/`,
      ``,
    ];

    for (const fam of families) {
      const famConcepts = concepts.filter(
        (c) =>
          c.familyId === fam.id &&
          (masteredSlugs.has(c.slug) || notesBySlug[c.slug]?.trim())
      );
      if (famConcepts.length === 0) continue;
      lines.push(`## ${fam.name}`);
      lines.push(``);
      for (const c of famConcepts) {
        const done = masteredSlugs.has(c.slug) ? 'x' : ' ';
        lines.push(`### [${done}] ${c.term}`);
        lines.push(`> ${c.short}`);
        const note = notesBySlug[c.slug]?.trim();
        if (note) {
          lines.push(``);
          lines.push(`**${t.mdMyNoteLabel}:**`);
          lines.push(note);
        }
        if (c.sources.length > 0) {
          lines.push(``);
          lines.push(
            `${t.mdSourcesLabel}: ${c.sources.map((s) => `[${s.title}](${s.url})`).join(' · ')}`
          );
        }
        lines.push(``);
      }
    }

    if (count === 0 && notesCount === 0) {
      lines.push(`_${t.mdEmptyMessage}_`);
    }

    const blob = new Blob([lines.join('\n')], {
      type: 'text/markdown;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cps-observatory-notes-${today}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/14 bg-[#0b101d]/95 shadow-[0_30px_90px_rgba(0,0,0,0.85)] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono-meta uppercase tracking-widest text-emerald-300">
              <Award className="h-3.5 w-3.5" />
              <span>{t.progressEyebrow}</span>
            </div>
            <h2 className="mt-1 font-editorial text-3xl text-white">
              {fmt(t.progressTitle, { count, total })}
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              {notesCount > 0 ? (
                <span className="inline-flex items-center gap-1 text-sky-300">
                  <StickyNote className="h-3 w-3" />
                  {notesCount === 1
                    ? t.progressNotesSavedSingular
                    : fmt(t.progressNotesSavedPlural, { count: notesCount })}{' '}
                  ·{' '}
                </span>
              ) : null}
              {t.progressSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 pt-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">{t.progressGlobalLabel}</span>
            <span className="font-mono-meta font-semibold text-emerald-300">
              {pct}%
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/8">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="custom-scroll max-h-[46vh] overflow-y-auto px-6 py-4 space-y-2.5">
          {families.map((fam) => {
            const famConcepts = concepts.filter((c) => c.familyId === fam.id);
            const famDone = famConcepts.filter((c) =>
              masteredSlugs.has(c.slug)
            ).length;
            const famPct = Math.round((famDone / famConcepts.length) * 100);

            return (
              <button
                key={fam.id}
                onClick={() => {
                  onFocusFamily(fam.id);
                  onClose();
                }}
                className="flex w-full flex-col gap-1.5 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-left transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: fam.color }}
                    />
                    <span className="font-semibold text-slate-100">{fam.name}</span>
                  </div>
                  <span className="font-mono-meta text-[11px] text-slate-400">
                    {famDone}/{famConcepts.length}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${famPct}%`,
                      backgroundColor: fam.color,
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/8 px-6 py-3.5">
          <button
            onClick={handleExportMarkdown}
            className="inline-flex items-center gap-2 rounded-xl border border-sky-400/35 bg-sky-500/14 px-3.5 py-2 text-xs font-medium text-sky-200 transition hover:bg-sky-500/22 hover:text-white"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{t.progressExportMd}</span>
          </button>

          {count > 0 && (
            <button
              onClick={onResetProgress}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-300 transition"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {t.progressReset}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
