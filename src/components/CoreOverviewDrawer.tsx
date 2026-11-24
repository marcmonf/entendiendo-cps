import React from 'react';
import {
  ArrowRight,
  Compass,
  ExternalLink,
  Layers,
  Sparkles,
  X,
} from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

interface CoreOverviewDrawerProps {
  onClose: () => void;
  onSelectConcept: (slug: string) => void;
  onFocusFamily: (familyId: string) => void;
  onStartIntroRoute: () => void;
}

export const CoreOverviewDrawer: React.FC<CoreOverviewDrawerProps> = ({
  onClose,
  onSelectConcept,
  onFocusFamily,
  onStartIntroRoute,
}) => {
  const { fourPillars, fiveAttractors, all15Themes, familyMap, t } = useI18n();

  return (
    <aside
      className="fixed inset-0 z-40 md:z-30 flex h-[100dvh] w-full flex-col overflow-hidden bg-[#0a0f1c]/97 shadow-[0_24px_80px_rgba(0,0,0,0.75)] backdrop-blur-2xl animate-drawer-in md:inset-auto md:right-3 md:top-20 md:bottom-3 md:h-auto md:w-[calc(100vw-1.5rem)] md:max-w-[468px] md:rounded-3xl md:border md:border-amber-400/20 md:bg-[#0a0f1c]/92"
      aria-label="Complex Problem Solving Core"
    >
      <div
        className="h-[2px] w-full shrink-0"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #F59E0B 50%, transparent 100%)',
        }}
      />

      <div className="shrink-0 px-5 sm:px-6 pt-[max(1rem,env(safe-area-inset-top))] md:pt-5 pb-4 border-b border-white/8">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/35 bg-amber-400/12 px-2.5 py-1 text-[11px] font-medium text-amber-200">
            <Sparkles className="h-3 w-3" />
            {t.coreSunBadge}
          </span>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label={t.closePanel}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h2 className="mt-3 font-editorial text-[34px] leading-[1.06] text-white">
          Complex Problem Solving
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          {t.coreIntroLead}{' '}
          <span className="text-amber-200 font-medium">
            {t.coreIntroHighlight}
          </span>{' '}
          {t.coreIntroMid}{' '}
          <span className="text-white font-medium">{t.coreIntroArt}</span>{' '}
          {t.coreIntroEnd}
        </p>

        <button
          onClick={onStartIntroRoute}
          className="mt-4 flex w-full items-center justify-between rounded-2xl bg-amber-400 px-4 py-3 text-xs font-semibold text-slate-950 transition hover:bg-amber-300"
        >
          <span className="flex items-center gap-2">
            <Compass className="h-4 w-4" />
            {t.coreStartRouteCta}
          </span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="custom-scroll flex-1 overflow-y-auto px-6 py-5 space-y-6">
        <section>
          <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
            {t.coreFourPillarsTitle}
          </p>
          <div className="mt-2.5 grid grid-cols-1 gap-2.5">
            {fourPillars.map((p) => (
              <button
                key={p.slug}
                onClick={() => onSelectConcept(p.slug)}
                className="group flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 text-left transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: p.color,
                      boxShadow: `0 0 12px ${p.color}`,
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-amber-100">
                      {p.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                      {p.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-white" />
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
              {t.coreFiveAttractorsTitle}
            </p>
            <button
              onClick={() => onSelectConcept('atractores')}
              className="text-[11px] text-amber-300 hover:underline"
            >
              {t.coreViewConcept}
            </button>
          </div>
          <div className="mt-2.5 space-y-2">
            {fiveAttractors.map((a, idx) => (
              <div
                key={a.name}
                className="rounded-xl border border-white/8 bg-white/[0.025] px-3.5 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono-meta text-[10px] text-amber-300/90">
                    0{idx + 1}
                  </span>
                  <p className="text-xs font-semibold text-slate-100">{a.name}</p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
            <Layers className="h-3.5 w-3.5" />
            <span>{t.coreFifteenThemesTitle}</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            {t.coreFifteenThemesHelp}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {all15Themes.map((theme) => {
              const fam = familyMap[theme.familyId];
              return (
                <button
                  key={theme.name}
                  onClick={() => onFocusFamily(theme.familyId)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: fam.color }}
                  />
                  <span>{theme.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-xs text-slate-400 space-y-2">
          <p className="leading-relaxed">
            {t.coreCreditPre}{' '}
            <a
              href="https://turrero.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:underline inline-flex items-center gap-1"
            >
              El Turrero Post
              <ExternalLink className="h-3 w-3" />
            </a>
            {t.coreCreditPost}
          </p>
        </div>
      </div>
    </aside>
  );
};
