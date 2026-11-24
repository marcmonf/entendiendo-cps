import React from 'react';
import { ArrowRight, Compass, X } from 'lucide-react';
import type { GuidedRoute } from '../data/atlasData';
import { useI18n } from '../i18n/LanguageContext';

interface RoutesModalProps {
  open: boolean;
  activeRouteId: string | null;
  onClose: () => void;
  onSelectRoute: (route: GuidedRoute) => void;
  onClearRoute: () => void;
}

export const RoutesModal: React.FC<RoutesModalProps> = ({
  open,
  activeRouteId,
  onClose,
  onSelectRoute,
  onClearRoute,
}) => {
  const { guidedRoutes, conceptMap, t } = useI18n();
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/14 bg-[#0b101d]/95 shadow-[0_30px_90px_rgba(0,0,0,0.85)] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono-meta uppercase tracking-widest text-amber-300">
              <Compass className="h-3.5 w-3.5" />
              <span>{t.routesEyebrow}</span>
            </div>
            <h2 className="mt-1 font-editorial text-3xl text-white">
              {t.routesTitle}
            </h2>
            <p className="mt-1 text-xs text-slate-400">{t.routesSubtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="custom-scroll max-h-[65vh] overflow-y-auto p-5 space-y-3">
          {guidedRoutes.map((route) => {
            const isActive = route.id === activeRouteId;
            return (
              <button
                key={route.id}
                onClick={() => {
                  onSelectRoute(route);
                  onClose();
                }}
                className={`group flex w-full flex-col gap-2.5 rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? 'border-amber-400/50 bg-amber-400/10'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: route.accent,
                          boxShadow: `0 0 10px ${route.accent}`,
                        }}
                      />
                      <h3 className="text-sm font-semibold text-white">
                        {route.title}
                      </h3>
                      {isActive && (
                        <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-mono-meta text-amber-200">
                          {t.routeActiveBadge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {route.subtitle}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="font-mono-meta text-[11px] text-slate-400">
                      {route.duration}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {route.steps.map((st, idx) => {
                    const c = conceptMap[st.slug];
                    if (!c) return null;
                    return (
                      <span
                        key={st.slug}
                        className="inline-flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.04] px-2 py-0.5 text-[10px] text-slate-300"
                      >
                        <span
                          className="font-mono-meta font-semibold"
                          style={{ color: route.accent }}
                        >
                          {idx + 1}
                        </span>
                        {c.term}
                      </span>
                    );
                  })}
                </div>
              </button>
            );
          })}
        </div>

        {activeRouteId && (
          <div className="flex justify-end border-t border-white/8 px-6 py-3.5">
            <button
              onClick={() => {
                onClearRoute();
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-rose-300 transition"
            >
              {t.routeExitFree}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
