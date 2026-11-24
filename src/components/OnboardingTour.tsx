import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  Compass,
  Flame,
  LayoutGrid,
  Orbit,
  Search,
  Sparkles,
  Trees,
  X,
} from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface OnboardingTourProps {
  open: boolean;
  onFinish: () => void;
}

function getStepIcon(id: string): React.ReactNode {
  switch (id) {
    case 'view-switcher':
      return <LayoutGrid className="h-4 w-4 text-cyan-300" />;
    case 'search':
      return <Search className="h-4 w-4 text-slate-200" />;
    case 'guides':
      return <Compass className="h-4 w-4 text-amber-300" />;
    case 'progress':
    case 'm-search-notes':
      return <Award className="h-4 w-4 text-emerald-300" />;
    case 'controls':
      return <Trees className="h-4 w-4 text-amber-300" />;
    case 'm-nav':
      return <Orbit className="h-4 w-4 text-cyan-300" />;
    default:
      return <Sparkles className="h-4 w-4 text-amber-300" />;
  }
}

function findVisibleTargetRect(targetName?: string): Rect | null {
  if (!targetName) return null;
  const nodes = document.querySelectorAll<HTMLElement>(
    `[data-tour="${targetName}"]`
  );
  for (const el of nodes) {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      const pad = 8;
      return {
        top: Math.max(4, r.top - pad),
        left: Math.max(4, r.left - pad),
        width: r.width + pad * 2,
        height: r.height + pad * 2,
      };
    }
  }
  return null;
}

export const OnboardingTour: React.FC<OnboardingTourProps> = ({
  open,
  onFinish,
}) => {
  const { desktopTourSteps, mobileTourSteps, t, fmt } = useI18n();
  const [stepIdx, setStepIdx] = useState(0);
  const [rect, setRect] = useState<Rect | null>(null);
  const [viewport, setViewport] = useState(() => ({
    w: typeof window !== 'undefined' ? window.innerWidth : 1280,
    h: typeof window !== 'undefined' ? window.innerHeight : 800,
  }));

  const isMobile = viewport.w < 768;
  const steps = isMobile ? mobileTourSteps : desktopTourSteps;
  const safeIdx = Math.min(stepIdx, steps.length - 1);
  const step = steps[safeIdx];

  useEffect(() => {
    if (open) setStepIdx(0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setViewport({ w, h });
      setRect(w < 768 ? null : findVisibleTargetRect(step.target));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [open, step.target]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onFinish();
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault();
        if (safeIdx < steps.length - 1) setStepIdx((i) => i + 1);
        else onFinish();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (safeIdx > 0) setStepIdx((i) => i - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, safeIdx, steps.length, onFinish]);

  if (!open) return null;

  const isFirst = safeIdx === 0;
  const isLast = safeIdx === steps.length - 1;

  const cardWidth = Math.min(392, viewport.w - 28);
  const positionedStyle: React.CSSProperties | undefined = rect
    ? (() => {
        const spaceBelow = viewport.h - (rect.top + rect.height);
        const placeBelow = spaceBelow >= 270;
        const top = placeBelow
          ? Math.min(viewport.h - 260, rect.top + rect.height + 16)
          : Math.max(16, rect.top - 255);
        const idealLeft = rect.left + rect.width / 2 - cardWidth / 2;
        const left = Math.max(12, Math.min(viewport.w - cardWidth - 12, idealLeft));
        return { top, left, width: cardWidth };
      })()
    : undefined;

  const cardInner = (
    <div
      className={`${
        positionedStyle ? 'fixed z-10' : 'pointer-events-auto w-full max-w-[392px]'
      } overflow-hidden rounded-3xl border border-amber-400/28 bg-[#0b1121]/97 shadow-[0_28px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 ease-out animate-fade-up`}
      style={positionedStyle}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="h-[2px] w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #F59E0B 50%, transparent 100%)',
        }}
      />

      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 text-[10px] font-mono-meta uppercase tracking-widest text-amber-200">
            {getStepIcon(step.id)}
            <span>
              {fmt(t.tourBadge, { current: safeIdx + 1, total: steps.length })}
            </span>
          </div>
          <button
            onClick={onFinish}
            className="rounded-full p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label={t.closePanel}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h3 className="mt-3 font-editorial text-2xl leading-tight text-white">
          {step.title}
        </h3>

        <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300">
          {step.description}
        </p>

        {step.tip && (
          <div className="mt-3 flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.035] px-3 py-2 text-[11px] leading-relaxed text-amber-100/90">
            <Flame className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-300" />
            <span>{step.tip}</span>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-white/8">
          <div className="flex items-center gap-1.5">
            {steps.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setStepIdx(idx)}
                aria-label={`${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === safeIdx
                    ? 'w-5 bg-amber-400'
                    : idx < safeIdx
                      ? 'w-1.5 bg-amber-400/50'
                      : 'w-1.5 bg-white/15 hover:bg-white/30'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            {isFirst ? (
              <button
                onClick={onFinish}
                className="rounded-xl px-2.5 py-2 text-xs text-slate-400 transition hover:text-slate-200"
              >
                {t.tourSkip}
              </button>
            ) : (
              <button
                onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
                className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2 text-xs text-slate-200 transition hover:bg-white/10"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>{t.tourBack}</span>
              </button>
            )}

            <button
              onClick={() => {
                if (isLast) onFinish();
                else setStepIdx((i) => i + 1);
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-3.5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              {isLast ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>{t.tourFinish}</span>
                </>
              ) : (
                <>
                  <span>{t.tourNext}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label={t.navGuideTooltip}
    >
      {rect ? (
        <>
          <div
            className="pointer-events-auto fixed inset-0 transition-opacity duration-300"
            onClick={onFinish}
          />
          <div
            className="pointer-events-none fixed rounded-2xl border-2 border-amber-300/90 transition-all duration-300 ease-out"
            style={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              boxShadow:
                '0 0 0 9999px rgba(4, 6, 14, 0.74), 0 0 28px rgba(245, 158, 11, 0.45)',
            }}
          />
          {cardInner}
        </>
      ) : (
        <>
          <div
            className="fixed inset-0 bg-[#04060e]/78 backdrop-blur-[3px] transition-opacity duration-300"
            onClick={onFinish}
          />
          <div className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center p-4">
            {cardInner}
          </div>
        </>
      )}
    </div>
  );
};
