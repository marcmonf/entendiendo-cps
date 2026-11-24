import React, { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Circle,
  Compass,
  ExternalLink,
  Flame,
  HelpCircle,
  Layers,
  Lightbulb,
  Maximize2,
  Minimize2,
  Network,
  Quote,
  Share2,
  Sparkles,
  StickyNote,
  Wrench,
  X,
} from 'lucide-react';
import type { Concept, GuidedRoute } from '../data/atlasData';
import { useI18n } from '../i18n/LanguageContext';

type DepthTab = 'plain' | 'practice' | 'deep' | 'sources';

interface ConceptDrawerProps {
  concept: Concept;
  isMastered: boolean;
  note: string;
  activeRoute: GuidedRoute | null;
  activeRouteStep: number;
  onClose: () => void;
  onToggleMastered: (slug: string) => void;
  onNoteChange: (slug: string, text: string) => void;
  onSelectConcept: (slug: string) => void;
  onRouteStepChange: (nextStep: number) => void;
}

export const ConceptDrawer: React.FC<ConceptDrawerProps> = ({
  concept,
  isMastered,
  note,
  activeRoute,
  activeRouteStep,
  onClose,
  onToggleMastered,
  onNoteChange,
  onSelectConcept,
  onRouteStepChange,
}) => {
  const { conceptMap, familyMap, deepDives, t, fmt } = useI18n();
  const [tab, setTab] = useState<DepthTab>('plain');
  const [wideReading, setWideReading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const family = familyMap[concept.familyId];
  const deepDive = deepDives[concept.slug];

  useEffect(() => {
    setTab('plain');
    setCopiedLink(false);
    setNotesOpen(false);
  }, [concept.slug]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [tab, concept.slug]);

  const handleCopyShareLink = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#${concept.slug}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      window.location.hash = concept.slug;
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const currentRouteNote =
    activeRoute && activeRoute.steps[activeRouteStep]?.slug === concept.slug
      ? activeRoute.steps[activeRouteStep].note
      : null;

  const isInRoute = Boolean(currentRouteNote && activeRoute);
  const canPrev = isInRoute && activeRouteStep > 0;
  const canNext =
    isInRoute && activeRoute && activeRouteStep < activeRoute.steps.length - 1;

  const cleanAliases = concept.aliases.filter(
    (a) => a.trim().toLowerCase() !== concept.term.trim().toLowerCase()
  );

  const sourcesTotal = concept.sources.length + concept.books.length;

  return (
    <aside
      className={`fixed inset-0 z-40 md:z-30 flex h-[100dvh] w-full flex-col overflow-hidden bg-[#0a0f1c]/97 shadow-[0_24px_80px_rgba(0,0,0,0.78)] backdrop-blur-2xl animate-drawer-in transition-[max-width] duration-300 md:inset-auto md:right-3 md:top-20 md:bottom-3 md:h-auto md:w-[calc(100vw-1.5rem)] md:rounded-3xl md:border md:border-white/12 md:bg-[#0a0f1c]/94 ${
        wideReading ? 'md:max-w-[680px]' : 'md:max-w-[480px]'
      }`}
      aria-label={concept.term}
    >
      <div
        className="h-[2px] w-full shrink-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${family.color} 50%, transparent 100%)`,
        }}
      />

      {/* Header */}
      <div className="shrink-0 px-4 sm:px-6 pt-[max(1rem,env(safe-area-inset-top))] md:pt-5 pb-3.5 sm:pb-4 border-b border-white/8">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
              style={{
                backgroundColor: `${family.color}1e`,
                color: family.color,
                border: `1px solid ${family.color}40`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: family.color }}
              />
              {family.shortName}
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono-meta text-slate-300">
              {concept.tier === 'core' ? t.tierCore : t.tierDeep}
            </span>

            {concept.isPillar && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/35 bg-amber-400/12 px-2.5 py-1 text-[11px] font-medium text-amber-200">
                <Sparkles className="h-3 w-3" />
                {t.pillarBadge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleCopyShareLink}
              className={`inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-[11px] font-medium transition ${
                copiedLink
                  ? 'bg-emerald-500/20 text-emerald-200'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
              title={t.copyLinkTooltip}
              aria-label={t.copyLinkTooltip}
            >
              {copiedLink ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{t.copied}</span>
                </>
              ) : (
                <Share2 className="h-3.5 w-3.5" />
              )}
            </button>
            <button
              onClick={() => setWideReading((v) => !v)}
              className="hidden sm:inline-flex rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              title={wideReading ? t.compactReadingTooltip : t.expandReadingTooltip}
              aria-label={
                wideReading ? t.compactReadingTooltip : t.expandReadingTooltip
              }
            >
              {wideReading ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              aria-label={t.closePanel}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <h2 className="mt-2.5 sm:mt-3 font-editorial text-[28px] sm:text-[34px] leading-[1.06] tracking-tight text-white">
          {concept.term}
        </h2>

        {cleanAliases.length > 0 && (
          <p className="mt-1.5 text-xs text-slate-400">
            {t.alsoCalled}{' '}
            <span className="text-slate-300">{cleanAliases.join(' · ')}</span>
          </p>
        )}

        {isInRoute && activeRoute && (
          <div
            className="mt-3.5 rounded-xl border px-3.5 py-2.5 text-xs"
            style={{
              backgroundColor: `${activeRoute.accent}14`,
              borderColor: `${activeRoute.accent}3d`,
            }}
          >
            <div className="flex items-center justify-between text-[10px] font-mono-meta uppercase tracking-wider text-slate-300">
              <span className="flex items-center gap-1.5">
                <Compass className="h-3 w-3" style={{ color: activeRoute.accent }} />
                {activeRoute.title}
              </span>
              <span>
                {fmt(t.routeStopCounter, {
                  current: activeRouteStep + 1,
                  total: activeRoute.steps.length,
                })}
              </span>
            </div>
            <p className="mt-1 leading-relaxed text-slate-100">{currentRouteNote}</p>
          </div>
        )}

        {/* 4-Level Progressive Depth Switcher */}
        <div className="mt-3.5 sm:mt-4 grid grid-cols-4 gap-1 rounded-2xl bg-white/[0.04] p-1 border border-white/8">
          <button
            onClick={() => setTab('plain')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 rounded-xl py-1.5 sm:py-2 px-1 text-[10px] sm:text-[11px] font-medium transition whitespace-nowrap ${
              tab === 'plain'
                ? 'bg-white/13 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Lightbulb className="h-3.5 w-3.5 shrink-0 text-amber-300" />
            <span>{t.tabPlain}</span>
          </button>

          <button
            onClick={() => setTab('practice')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 rounded-xl py-1.5 sm:py-2 px-1 text-[10px] sm:text-[11px] font-medium transition whitespace-nowrap ${
              tab === 'practice'
                ? 'bg-white/13 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Wrench className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
            <span>{t.tabPractice}</span>
          </button>

          <button
            onClick={() => setTab('deep')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 rounded-xl py-1.5 sm:py-2 px-1 text-[10px] sm:text-[11px] font-medium transition whitespace-nowrap ${
              tab === 'deep'
                ? 'bg-violet-400/20 text-violet-100 shadow-sm ring-1 ring-violet-400/35'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="h-3.5 w-3.5 shrink-0 text-violet-300" />
            <span>{t.tabDeep}</span>
          </button>

          <button
            onClick={() => setTab('sources')}
            className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 rounded-xl py-1.5 sm:py-2 px-1 text-[10px] sm:text-[11px] font-medium transition whitespace-nowrap ${
              tab === 'sources'
                ? 'bg-white/13 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5 shrink-0 text-sky-300" />
            <span>
              {t.tabSources}
              {sourcesTotal > 0 && (
                <span className="ml-0.5 hidden sm:inline opacity-65">
                  ({sourcesTotal})
                </span>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Scrollable Body */}
      <div
        ref={scrollRef}
        className="custom-scroll flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-5 space-y-5"
      >
        {tab === 'plain' && (
          <div className="space-y-4 animate-fade-up">
            <div>
              <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
                {t.oneSentenceTitle}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-100 font-medium">
                {concept.short}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-300/18 bg-gradient-to-br from-amber-400/[0.08] via-amber-500/[0.03] to-transparent p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-200">
                <Lightbulb className="h-4 w-4 text-amber-300" />
                <span>{t.analogyTitle}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {concept.analogy}
              </p>
            </div>

            {concept.domains && concept.domains.length > 0 && (
              <div className="space-y-2.5">
                <p className="text-[11px] font-mono-meta uppercase tracking-widest text-cyan-300/90">
                  {t.cynefinDomainsTitle}
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {concept.domains.map((d, idx) => (
                    <div
                      key={d.name}
                      className={`rounded-xl border p-3 ${
                        idx === 2
                          ? 'border-cyan-400/40 bg-cyan-400/10'
                          : 'border-white/8 bg-white/[0.03]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">
                          {d.name}
                        </span>
                        {idx === 2 && (
                          <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-[10px] font-mono-meta text-cyan-200">
                            {t.cynefinCpsBadge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {d.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {concept.related.length > 0 && (
              <div className="pt-1">
                <div className="flex items-center gap-2 text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
                  <Network className="h-3.5 w-3.5" />
                  <span>
                    {fmt(t.connectsWithTitle, { count: concept.related.length })}
                  </span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {concept.related.map((relSlug) => {
                    const rel = conceptMap[relSlug];
                    if (!rel) return null;
                    const relFam = familyMap[rel.familyId];
                    const isCrossFamily = rel.familyId !== concept.familyId;
                    return (
                      <button
                        key={relSlug}
                        onClick={() => onSelectConcept(relSlug)}
                        className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                      >
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: relFam.color }}
                        />
                        <span>{rel.term}</span>
                        {isCrossFamily && (
                          <span className="text-[10px] text-slate-400 group-hover:text-slate-300">
                            ↗
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <button
              onClick={() => setTab('practice')}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-xs text-slate-300 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.06] hover:text-white"
            >
              <span>{t.ctaToPractice}</span>
              <ArrowRight className="h-4 w-4 text-emerald-300" />
            </button>
          </div>
        )}

        {tab === 'practice' && (
          <div className="space-y-4 animate-fade-up">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.07] p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
                <Wrench className="h-4 w-4 text-emerald-300" />
                <span>{t.howToApplyTitle}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {concept.howToApply}
              </p>
            </div>

            <div className="rounded-2xl border border-rose-400/22 bg-rose-500/[0.07] p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-200">
                <AlertTriangle className="h-4 w-4 text-rose-300" />
                <span>{t.antiPatternTitle}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {concept.antiPattern}
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
                {t.glossarySynthesisTitle}
              </p>
              {concept.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-200/95">
                  {p}
                </p>
              ))}
            </div>

            {concept.origin && (
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
                  {t.originTitle}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  {concept.origin}
                </p>
              </div>
            )}

            <button
              onClick={() => setTab('deep')}
              className="flex w-full items-center justify-between rounded-2xl border border-violet-400/25 bg-violet-500/[0.08] px-4 py-3 text-left text-xs text-violet-100 transition hover:border-violet-400/45 hover:bg-violet-500/[0.14]"
            >
              <span className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-violet-300" />
                <span>{t.ctaToDeep}</span>
              </span>
              <ArrowRight className="h-4 w-4 text-violet-300" />
            </button>
          </div>
        )}

        {tab === 'deep' && deepDive && (
          <div className="space-y-5 animate-fade-up">
            <div className="rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.05] to-transparent p-4.5">
              <div className="flex items-center gap-2 text-[10px] font-mono-meta uppercase tracking-widest text-violet-300">
                <Layers className="h-3.5 w-3.5" />
                <span>{t.deepThesisLabel}</span>
              </div>
              <p className="mt-2 font-editorial text-[22px] leading-[1.24] text-white">
                {deepDive.thesis}
              </p>
            </div>

            <div className="space-y-3.5">
              <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
                {t.deepReadingLabel}
              </p>
              {deepDive.essay.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[14.5px] leading-[1.72] text-slate-200/95"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {deepDive.quote?.text && (
              <blockquote className="relative overflow-hidden rounded-2xl border border-amber-300/20 bg-white/[0.03] px-5 py-4">
                <Quote className="h-4 w-4 text-amber-300/75" />
                <p className="mt-2 font-editorial text-[19px] italic leading-snug text-amber-50/95">
                  «{deepDive.quote.text}»
                </p>
                {deepDive.quote.sourceTitle && (
                  <footer className="mt-2.5 text-[11px] text-slate-400">
                    {t.quoteAuthorPrefix}{' '}
                    <span className="text-slate-300">
                      {deepDive.quote.sourceTitle}
                    </span>
                  </footer>
                )}
              </blockquote>
            )}

            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
                <Flame className="h-3.5 w-3.5 text-amber-300" />
                <span>{t.keyInsightsTitle}</span>
              </div>
              <div className="space-y-2">
                {deepDive.keyInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-3.5 py-3"
                  >
                    <span className="mt-0.5 shrink-0 font-mono-meta text-[11px] font-semibold text-violet-300">
                      0{idx + 1}
                    </span>
                    <p className="text-xs leading-relaxed text-slate-200">
                      {insight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {deepDive.threadExamples.length > 0 && (
              <div className="space-y-2.5">
                <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
                  {t.realExamplesTitle}
                </p>
                <div className="space-y-2.5">
                  {deepDive.threadExamples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/10 bg-[#0d1426]/80 p-4"
                    >
                      <p className="text-xs font-semibold text-amber-200">
                        {ex.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                        {ex.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {deepDive.reflectionQuestions.length > 0 && (
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.06] p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-200">
                  <HelpCircle className="h-4 w-4 text-cyan-300" />
                  <span>{t.reflectionQuestionsTitle}</span>
                </div>
                <ul className="space-y-2">
                  {deepDive.reflectionQuestions.map((q, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs leading-relaxed text-slate-200"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={() => setTab('sources')}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-xs text-slate-300 transition hover:border-sky-400/35 hover:bg-sky-400/[0.07] hover:text-white"
            >
              <span>{t.ctaToSources}</span>
              <ArrowRight className="h-4 w-4 text-sky-300" />
            </button>
          </div>
        )}

        {tab === 'sources' && (
          <div className="space-y-5 animate-fade-up">
            <div>
              <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
                {fmt(t.sourcesTurrasTitle, { count: concept.sources.length })}
              </p>
              {t.sourcesOriginalSpanishNote && (
                <p className="mt-1 text-[11px] text-slate-500">
                  {t.sourcesOriginalSpanishNote}
                </p>
              )}
              <div className="mt-2.5 space-y-2">
                {concept.sources.map((src) => (
                  <a
                    key={src.threadId}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition hover:border-amber-400/35 hover:bg-amber-400/[0.06]"
                  >
                    <div>
                      <p className="text-sm font-medium leading-snug text-slate-100 group-hover:text-amber-100">
                        {src.title}
                      </p>
                      <p className="mt-1 text-[11px] font-mono-meta text-slate-400">
                        turrero.vercel.app/turra/{src.threadId}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-amber-300" />
                  </a>
                ))}
              </div>
            </div>

            {concept.books.length > 0 && (
              <div>
                <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
                  {fmt(t.sourcesBooksTitle, { count: concept.books.length })}
                </p>
                <div className="mt-2.5 space-y-2">
                  {concept.books.map((book) => (
                    <a
                      key={book.title}
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition hover:border-sky-400/35 hover:bg-sky-400/[0.06]"
                    >
                      <div className="flex items-start gap-2.5">
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-sky-300/80" />
                        <div>
                          <p className="text-sm font-medium leading-snug text-slate-100 group-hover:text-sky-100">
                            {book.title}
                          </p>
                          {book.author && (
                            <p className="mt-0.5 text-xs text-slate-400">
                              {book.author}
                            </p>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-500 transition group-hover:text-sky-300" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <a
              href={concept.glossaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-slate-300 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
            >
              <span>{t.openInTurrero}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* Collapsible Personal Notes Drawer */}
      {notesOpen && (
        <div className="shrink-0 border-t border-sky-400/20 bg-[#080d1a] px-5 py-3 animate-fade-up">
          <div className="flex items-center justify-between mb-1.5">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-sky-200">
              <StickyNote className="h-3.5 w-3.5 text-sky-300" />
              {fmt(t.notesHeader, { term: concept.term })}
            </span>
            <span className="text-[10px] font-mono-meta text-slate-500">
              {t.notesSavedLocally}
            </span>
          </div>
          <textarea
            value={note}
            onChange={(e) => onNoteChange(concept.slug, e.target.value)}
            rows={3}
            placeholder={t.notesPlaceholder}
            className="custom-scroll w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs leading-relaxed text-slate-100 placeholder:text-slate-500 focus:border-sky-400/40 focus:outline-none"
          />
        </div>
      )}

      {/* Sticky Footer */}
      <div className="shrink-0 border-t border-white/8 bg-[#070b15]/95 px-4 sm:px-5 pt-3 pb-[max(0.85rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => onToggleMastered(concept.slug)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-semibold transition ${
              isMastered
                ? 'border border-emerald-400/40 bg-emerald-500/18 text-emerald-200 hover:bg-emerald-500/25'
                : 'border border-white/12 bg-white/[0.06] text-slate-200 hover:bg-white/12 hover:text-white'
            }`}
          >
            {isMastered ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                <span>{t.understood}</span>
              </>
            ) : (
              <>
                <Circle className="h-4 w-4 text-slate-400" />
                <span>{t.markUnderstood}</span>
              </>
            )}
          </button>

          <button
            onClick={() => setNotesOpen((v) => !v)}
            className={`inline-flex items-center gap-1.5 rounded-2xl border px-3 py-2.5 text-xs font-medium transition ${
              notesOpen || note.trim()
                ? 'border-sky-400/35 bg-sky-500/15 text-sky-200 hover:bg-sky-500/22'
                : 'border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <StickyNote className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">
              {note.trim() ? t.noteSingular : t.notesLabel}
            </span>
          </button>

          {isInRoute && (
            <div className="flex items-center gap-1.5">
              <button
                disabled={!canPrev}
                onClick={() => onRouteStepChange(activeRouteStep - 1)}
                className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:bg-white/12 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label={t.prevStop}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                disabled={!canNext}
                onClick={() => onRouteStepChange(activeRouteStep + 1)}
                className="flex items-center gap-1.5 rounded-xl bg-amber-400 px-3.5 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-amber-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span>{t.nextStop}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
