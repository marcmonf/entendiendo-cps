import React from 'react';
import { ArrowRight, Flame, X } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

interface ProblemsModalProps {
  open: boolean;
  onClose: () => void;
  onSelectConcept: (slug: string) => void;
}

export const ProblemsModal: React.FC<ProblemsModalProps> = ({
  open,
  onClose,
  onSelectConcept,
}) => {
  const { realProblems, conceptMap, familyMap, t } = useI18n();
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/68 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/14 bg-[#0b101d]/96 shadow-[0_30px_90px_rgba(0,0,0,0.85)] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono-meta uppercase tracking-widest text-amber-300">
              <Flame className="h-3.5 w-3.5" />
              <span>{t.problemsEyebrow}</span>
            </div>
            <h2 className="mt-1 font-editorial text-3xl text-white">
              {t.problemsTitle}
            </h2>
            <p className="mt-1 text-xs text-slate-400">{t.problemsSubtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label={t.closePanel}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="custom-scroll max-h-[68vh] overflow-y-auto p-5 grid grid-cols-1 gap-3 md:grid-cols-2">
          {realProblems.map((prob) => (
            <div
              key={prob.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20"
            >
              <div>
                <div className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: prob.accent,
                      boxShadow: `0 0 10px ${prob.accent}`,
                    }}
                  />
                  <h3 className="text-sm font-semibold leading-snug text-white">
                    {prob.question}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {prob.diagnosis}
                </p>
              </div>

              <div className="mt-3.5 pt-3 border-t border-white/8 flex flex-wrap gap-1.5">
                {prob.slugs.map((slug) => {
                  const c = conceptMap[slug];
                  if (!c) return null;
                  const fam = familyMap[c.familyId];
                  return (
                    <button
                      key={slug}
                      onClick={() => {
                        onSelectConcept(slug);
                        onClose();
                      }}
                      className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0d1426] px-2.5 py-1 text-[11px] text-slate-200 transition hover:border-amber-400/40 hover:bg-amber-400/12 hover:text-white"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: fam.color }}
                      />
                      <span>{c.term}</span>
                      <ArrowRight className="h-2.5 w-2.5 opacity-50 group-hover:opacity-100" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
