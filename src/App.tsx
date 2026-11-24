import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Compass,
  ExternalLink,
  Flame,
  HelpCircle,
  LayoutGrid,
  Maximize2,
  Minus,
  Orbit,
  Plus,
  Search,
  Sparkles,
  Trees,
  X,
} from 'lucide-react';
import type { GuidedRoute } from './data/atlasData';
import { computeAtlasLayout } from './utils/layout';
import { useI18n } from './i18n/LanguageContext';
import {
  ConstellationCanvas,
  type CameraState,
} from './components/ConstellationCanvas';
import { ConceptDrawer } from './components/ConceptDrawer';
import { CoreOverviewDrawer } from './components/CoreOverviewDrawer';
import { SearchModal } from './components/SearchModal';
import { RoutesModal } from './components/RoutesModal';
import { ProgressModal } from './components/ProgressModal';
import { IndexView } from './components/IndexView';
import { ProblemsModal } from './components/ProblemsModal';
import { OnboardingTour } from './components/OnboardingTour';
import { LanguageSelector } from './components/LanguageSelector';

const STORAGE_KEY = 'observatorio_cps_mastered_v1';
const NOTES_STORAGE_KEY = 'observatorio_cps_notes_v1';
const TOUR_STORAGE_KEY = 'observatorio_cps_tour_done_v1';

type ViewMode = 'constellation' | 'index';

function isMobileViewport(): boolean {
  return typeof window !== 'undefined' && window.innerWidth < 768;
}

function getInitialScale(): number {
  if (typeof window === 'undefined') return 0.84;
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (w < 768) {
    return Math.max(0.37, Math.min(0.62, Math.min(w / 870, h / 940)));
  }
  const minDim = Math.min(w, h);
  return Math.max(0.54, Math.min(0.92, minDim / 860));
}

export function App() {
  const { families, concepts, conceptMap, guidedRoutes, t, fmt } = useI18n();

  const { familyLayouts, conceptPositions, familyPositions } = useMemo(
    () => computeAtlasLayout(families, concepts),
    [families, concepts]
  );

  const [isMobile, setIsMobile] = useState<boolean>(() => isMobileViewport());

  useEffect(() => {
    const onResize = () => setIsMobile(isMobileViewport());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const [viewMode, setViewMode] = useState<ViewMode>(() =>
    isMobileViewport() ? 'index' : 'constellation'
  );

  const [expandedFamilies, setExpandedFamilies] = useState<Set<string>>(
    () => new Set<string>()
  );
  const [selectedConceptSlug, setSelectedConceptSlug] = useState<string | null>(
    null
  );
  const [selectedCore, setSelectedCore] = useState<boolean>(false);

  const [masteredSlugs, setMasteredSlugs] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return new Set<string>(parsed);
      }
    } catch {
      // ignore
    }
    return new Set<string>();
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...masteredSlugs]));
    } catch {
      // ignore
    }
  }, [masteredSlugs]);

  const [notesBySlug, setNotesBySlug] = useState<Record<string, string>>(() => {
    try {
      const raw = localStorage.getItem(NOTES_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch {
      // ignore
    }
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notesBySlug));
    } catch {
      // ignore
    }
  }, [notesBySlug]);

  // Store active route by ID so switching language automatically updates route title/notes live!
  const [activeRouteId, setActiveRouteId] = useState<string | null>(null);
  const [activeRouteStep, setActiveRouteStep] = useState<number>(0);

  const activeRoute: GuidedRoute | null = useMemo(
    () =>
      activeRouteId
        ? guidedRoutes.find((r) => r.id === activeRouteId) ?? null
        : null,
    [activeRouteId, guidedRoutes]
  );

  const [searchOpen, setSearchOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(false);
  const [progressOpen, setProgressOpen] = useState(false);
  const [problemsOpen, setProblemsOpen] = useState(false);
  const [showOnboardingHint, setShowOnboardingHint] = useState(true);
  const [tourOpen, setTourOpen] = useState<boolean>(() => {
    try {
      if (window.location.hash && window.location.hash.length > 1) return false;
      return localStorage.getItem(TOUR_STORAGE_KEY) !== '1';
    } catch {
      return false;
    }
  });

  const handleFinishTour = useCallback(() => {
    setTourOpen(false);
    try {
      localStorage.setItem(TOUR_STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  }, []);

  const [camera, setCamera] = useState<CameraState>(() => ({
    tx: 0,
    ty: 8,
    scale: getInitialScale(),
  }));
  const cameraRef = useRef<CameraState>(camera);
  cameraRef.current = camera;

  const animFrameRef = useRef<number | null>(null);

  const cancelCameraAnimation = useCallback(() => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  }, []);

  const animateCameraTo = useCallback(
    (target: CameraState, durationMs = 540) => {
      cancelCameraAnimation();
      const start = { ...cameraRef.current };
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const tVal = Math.min(1, elapsed / durationMs);
        const e = 1 - Math.pow(1 - tVal, 3);
        const next: CameraState = {
          tx: start.tx + (target.tx - start.tx) * e,
          ty: start.ty + (target.ty - start.ty) * e,
          scale: start.scale + (target.scale - start.scale) * e,
        };
        setCamera(next);
        if (tVal < 1) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          animFrameRef.current = null;
        }
      };

      animFrameRef.current = requestAnimationFrame(step);
    },
    [cancelCameraAnimation]
  );

  const handleManualCameraChange = useCallback(
    (next: CameraState) => {
      cancelCameraAnimation();
      setCamera(next);
    },
    [cancelCameraAnimation]
  );

  const getDrawerOffsetX = () =>
    typeof window !== 'undefined' && window.innerWidth >= 1024 ? -225 : 0;

  const setUrlHash = useCallback((hashValue: string) => {
    try {
      const nextHash = hashValue ? `#${hashValue}` : '';
      if (window.location.hash !== nextHash) {
        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}${window.location.search}${nextHash}`
        );
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSelectConcept = useCallback(
    (slug: string, updateHash = true) => {
      const layout = conceptPositions[slug];
      if (!layout) return;

      setShowOnboardingHint(false);
      setSelectedCore(false);
      setSelectedConceptSlug(slug);
      if (updateHash) setUrlHash(slug);

      setExpandedFamilies((prev) => {
        if (prev.has(layout.family.id)) return prev;
        const next = new Set(prev);
        next.add(layout.family.id);
        return next;
      });

      const targetScale = isMobileViewport()
        ? 0.72
        : Math.max(
            0.86,
            Math.min(
              1.06,
              cameraRef.current.scale < 0.78 ? 0.92 : cameraRef.current.scale
            )
          );
      const offsetX = getDrawerOffsetX();
      animateCameraTo({
        scale: targetScale,
        tx: -layout.x * targetScale + offsetX,
        ty: -layout.y * targetScale + 10,
      });
    },
    [conceptPositions, animateCameraTo, setUrlHash]
  );

  const handleToggleFamily = useCallback(
    (familyId: string) => {
      setShowOnboardingHint(false);
      const fl = familyPositions[familyId];
      if (!fl) return;

      setExpandedFamilies((prev) => {
        const next = new Set(prev);
        if (next.has(familyId)) {
          next.delete(familyId);
          if (
            selectedConceptSlug &&
            conceptPositions[selectedConceptSlug]?.family.id === familyId
          ) {
            setSelectedConceptSlug(null);
            setUrlHash('');
          }
        } else {
          next.add(familyId);
          const targetScale = isMobileViewport()
            ? 0.56
            : Math.min(0.84, Math.max(0.62, getInitialScale() * 0.92));
          const focusX = fl.x * 1.48;
          const focusY = fl.y * 1.48;
          const offsetX =
            selectedConceptSlug || selectedCore ? getDrawerOffsetX() : 0;
          animateCameraTo({
            scale: targetScale,
            tx: -focusX * targetScale + offsetX,
            ty: -focusY * targetScale + 8,
          });
        }
        return next;
      });
    },
    [
      familyPositions,
      selectedConceptSlug,
      selectedCore,
      conceptPositions,
      animateCameraTo,
      setUrlHash,
    ]
  );

  const handleFocusFamily = useCallback(
    (familyId: string) => {
      setShowOnboardingHint(false);
      setViewMode('constellation');
      const fl = familyPositions[familyId];
      if (!fl) return;
      setSelectedCore(false);
      setSelectedConceptSlug(null);
      setUrlHash('');
      setExpandedFamilies((prev) => {
        const next = new Set(prev);
        next.add(familyId);
        return next;
      });
      const targetScale = isMobileViewport()
        ? 0.56
        : Math.min(0.86, Math.max(0.64, getInitialScale() * 0.94));
      animateCameraTo({
        scale: targetScale,
        tx: -fl.x * 1.5 * targetScale,
        ty: -fl.y * 1.5 * targetScale + 8,
      });
    },
    [familyPositions, animateCameraTo, setUrlHash]
  );

  const handleSelectCore = useCallback(() => {
    setShowOnboardingHint(false);
    setSelectedConceptSlug(null);
    setUrlHash('');
    setSelectedCore((prev) => {
      const next = !prev;
      if (next) {
        const s = getInitialScale();
        animateCameraTo({ scale: s, tx: getDrawerOffsetX() * 0.65, ty: 8 });
      }
      return next;
    });
  }, [animateCameraTo, setUrlHash]);

  const handleToggleAllFamilies = useCallback(() => {
    setShowOnboardingHint(false);
    const allOpen = expandedFamilies.size === families.length;
    if (allOpen) {
      setExpandedFamilies(new Set());
      setSelectedConceptSlug(null);
      setUrlHash('');
      animateCameraTo({ tx: 0, ty: 8, scale: getInitialScale() });
    } else {
      setExpandedFamilies(new Set(families.map((f) => f.id)));
      const fitAllScale =
        typeof window !== 'undefined'
          ? Math.max(
              0.24,
              Math.min(
                0.56,
                Math.min(window.innerWidth, window.innerHeight) / 1780
              )
            )
          : 0.46;
      animateCameraTo({ tx: 0, ty: 8, scale: fitAllScale }, 680);
    }
  }, [expandedFamilies.size, families, animateCameraTo, setUrlHash]);

  const handleResetView = useCallback(() => {
    const anyOpen = expandedFamilies.size > 2;
    const hasDrawer = Boolean(selectedConceptSlug || selectedCore);
    const targetScale = anyOpen
      ? Math.max(
          0.26,
          Math.min(0.56, Math.min(window.innerWidth, window.innerHeight) / 1780)
        )
      : getInitialScale();
    animateCameraTo({
      tx: hasDrawer ? getDrawerOffsetX() : 0,
      ty: 8,
      scale: targetScale,
    });
  }, [expandedFamilies.size, selectedConceptSlug, selectedCore, animateCameraTo]);

  const handleStartRoute = useCallback(
    (route: GuidedRoute, updateHash = true) => {
      setShowOnboardingHint(false);
      if (!isMobileViewport()) {
        setViewMode('constellation');
      }
      setActiveRouteId(route.id);
      setActiveRouteStep(0);
      setSelectedCore(false);
      if (updateHash) setUrlHash(`ruta/${route.id}`);

      const neededFamilies = new Set<string>();
      for (const st of route.steps) {
        const c = conceptPositions[st.slug];
        if (c) neededFamilies.add(c.family.id);
      }
      setExpandedFamilies(neededFamilies);

      const firstSlug = route.steps[0]?.slug;
      if (firstSlug) {
        const layout = conceptPositions[firstSlug];
        setSelectedConceptSlug(firstSlug);
        if (layout) {
          const targetScale = isMobileViewport() ? 0.62 : 0.88;
          animateCameraTo({
            scale: targetScale,
            tx: -layout.x * targetScale + getDrawerOffsetX(),
            ty: -layout.y * targetScale + 10,
          });
        }
      }
    },
    [conceptPositions, animateCameraTo, setUrlHash]
  );

  const handleRouteStepChange = useCallback(
    (nextStep: number) => {
      if (!activeRoute) return;
      const clamped = Math.max(
        0,
        Math.min(activeRoute.steps.length - 1, nextStep)
      );
      setActiveRouteStep(clamped);
      const slug = activeRoute.steps[clamped]?.slug;
      if (slug) handleSelectConcept(slug, false);
    },
    [activeRoute, handleSelectConcept]
  );

  const handleToggleMastered = useCallback((slug: string) => {
    setMasteredSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }, []);

  const handleNoteChange = useCallback((slug: string, text: string) => {
    setNotesBySlug((prev) => ({ ...prev, [slug]: text }));
  }, []);

  // Deep-linking on initial mount + hashchange
  const hashInitializedRef = useRef(false);
  useEffect(() => {
    const applyHash = () => {
      const raw = decodeURIComponent(
        window.location.hash.replace(/^#/, '').trim()
      );
      if (!raw) return;
      if (raw.startsWith('ruta/')) {
        const routeId = raw.slice(5);
        const route = guidedRoutes.find((r) => r.id === routeId);
        if (route) handleStartRoute(route, false);
        return;
      }
      if (conceptMap[raw]) {
        handleSelectConcept(raw, false);
      }
    };

    if (!hashInitializedRef.current) {
      hashInitializedRef.current = true;
      applyHash();
    }
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, [conceptMap, guidedRoutes, handleSelectConcept, handleStartRoute]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((v) => !v);
      } else if (e.key === 'Escape') {
        if (searchOpen) setSearchOpen(false);
        else if (routesOpen) setRoutesOpen(false);
        else if (progressOpen) setProgressOpen(false);
        else if (problemsOpen) setProblemsOpen(false);
        else {
          setSelectedConceptSlug(null);
          setSelectedCore(false);
          setUrlHash('');
        }
      } else if (
        activeRoute &&
        !searchOpen &&
        !routesOpen &&
        !progressOpen &&
        !problemsOpen &&
        (e.key === 'ArrowRight' || e.key === 'ArrowLeft')
      ) {
        const tag = (document.activeElement?.tagName || '').toLowerCase();
        if (tag === 'textarea' || tag === 'input') return;
        e.preventDefault();
        handleRouteStepChange(
          activeRouteStep + (e.key === 'ArrowRight' ? 1 : -1)
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    searchOpen,
    routesOpen,
    progressOpen,
    problemsOpen,
    activeRoute,
    activeRouteStep,
    handleRouteStepChange,
    setUrlHash,
  ]);

  const selectedConcept = selectedConceptSlug
    ? conceptMap[selectedConceptSlug] ?? null
    : null;
  const allExpanded = expandedFamilies.size === families.length;
  const masteredPct = Math.round((masteredSlugs.size / concepts.length) * 100);

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-[#06080f] text-slate-100">
      {/* Main Surface: Constellation OR Index View */}
      {viewMode === 'constellation' ? (
        <ConstellationCanvas
          familyLayouts={familyLayouts}
          conceptPositions={conceptPositions}
          familyPositions={familyPositions}
          expandedFamilies={expandedFamilies}
          selectedConceptSlug={selectedConceptSlug}
          selectedCore={selectedCore}
          masteredSlugs={masteredSlugs}
          activeRoute={activeRoute}
          activeRouteStep={activeRouteStep}
          camera={camera}
          isCompactMobile={isMobile}
          onCameraChange={handleManualCameraChange}
          onToggleFamily={handleToggleFamily}
          onSelectConcept={(slug) => handleSelectConcept(slug, true)}
          onSelectCore={handleSelectCore}
          onBackgroundClick={() => {
            setSelectedConceptSlug(null);
            setSelectedCore(false);
            setUrlHash('');
          }}
        />
      ) : (
        <IndexView
          masteredSlugs={masteredSlugs}
          notesBySlug={notesBySlug}
          onSelectConcept={(slug) => handleSelectConcept(slug, true)}
          onJumpToConstellation={handleFocusFamily}
          onStartIntroRoute={() => handleStartRoute(guidedRoutes[0], true)}
          onOpenProblems={() => setProblemsOpen(true)}
          onSelectCore={handleSelectCore}
        />
      )}

      {/* Top Floating Glassmorphism HUD */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 md:z-40 flex items-center justify-between gap-2 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 sm:px-5 md:py-3">
        {/* Left: Brand Emblem + Desktop View Mode Switcher */}
        <div className="pointer-events-auto flex items-center gap-2 min-w-0">
          <button
            onClick={handleSelectCore}
            className="group flex shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-[#090e1a]/88 px-2.5 sm:px-3 py-2 backdrop-blur-xl transition hover:border-amber-400/35 hover:bg-[#0d1426]/90 whitespace-nowrap"
          >
            <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/15 border border-amber-400/40">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            </span>
            <div className="text-left">
              <h1 className="font-editorial text-[18px] sm:text-xl leading-none tracking-tight text-white">
                {t.brandTitle}
              </h1>
              <p className="mt-0.5 hidden sm:block text-[10px] font-mono-meta uppercase tracking-widest text-slate-400 group-hover:text-amber-200/80 transition">
                {fmt(t.brandSubtitle, { count: concepts.length })}
              </p>
            </div>
          </button>

          <div
            data-tour="view-switcher"
            className="hidden md:flex items-center rounded-2xl border border-white/10 bg-[#090e1a]/85 p-1 backdrop-blur-xl"
          >
            <button
              onClick={() => {
                setViewMode('constellation');
                animateCameraTo({ tx: 0, ty: 8, scale: getInitialScale() }, 420);
              }}
              className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-medium transition ${
                viewMode === 'constellation'
                  ? 'bg-white/14 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title={t.navConstellation}
            >
              <Orbit className="h-3.5 w-3.5 text-amber-300" />
              <span>{t.navConstellation}</span>
            </button>
            <button
              onClick={() => setViewMode('index')}
              className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-medium transition ${
                viewMode === 'index'
                  ? 'bg-white/14 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title={t.navIndex}
            >
              <LayoutGrid className="h-3.5 w-3.5 text-cyan-300" />
              <span>{t.navIndex}</span>
            </button>
          </div>
        </div>

        {/* Center Command Search Pill (large screens) */}
        <button
          data-tour="search"
          onClick={() => setSearchOpen(true)}
          className="pointer-events-auto hidden xl:flex items-center gap-3 rounded-2xl border border-white/10 bg-[#090e1a]/85 px-4 py-2.5 text-xs text-slate-400 backdrop-blur-xl transition hover:border-white/25 hover:bg-[#0f1629]/90 hover:text-slate-200 w-72 justify-between"
        >
          <span className="flex items-center gap-2.5 truncate">
            <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{t.navSearchPlaceholder}</span>
          </span>
          <kbd className="rounded-md border border-white/12 bg-white/5 px-1.5 py-0.5 font-mono-meta text-[10px] text-slate-400">
            ⌘K
          </kbd>
        </button>

        {/* Right Action Pills + Language Selector */}
        <div className="pointer-events-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            data-tour="search"
            onClick={() => setSearchOpen(true)}
            className="flex xl:hidden items-center justify-center rounded-2xl border border-white/10 bg-[#090e1a]/88 p-2.5 text-slate-200 backdrop-blur-xl hover:bg-white/10"
            aria-label={t.navSearchButton}
            title={`${t.navSearchButton} (⌘K)`}
          >
            <Search className="h-4 w-4" />
          </button>

          <div data-tour="guides" className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setProblemsOpen(true)}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-2xl border border-white/12 bg-[#090e1a]/85 px-3 py-2.5 text-xs font-medium text-slate-200 backdrop-blur-xl transition hover:border-rose-400/40 hover:text-white"
              title={t.navYourProblem}
            >
              <Flame className="h-3.5 w-3.5 shrink-0 text-rose-400" />
              <span className="hidden lg:inline">{t.navYourProblem}</span>
            </button>

            <button
              onClick={() => setRoutesOpen(true)}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-2xl border px-3 py-2.5 text-xs font-medium backdrop-blur-xl transition ${
                activeRoute
                  ? 'border-amber-400/45 bg-amber-400/15 text-amber-100'
                  : 'border-white/12 bg-[#090e1a]/85 text-slate-200 hover:border-amber-400/35 hover:text-white'
              }`}
              title={t.navRoutes}
            >
              <Compass className="h-3.5 w-3.5 shrink-0 text-amber-300" />
              <span>{activeRoute ? t.navRouteActive : t.navRoutes}</span>
            </button>
          </div>

          <button
            data-tour="progress"
            onClick={() => setProgressOpen(true)}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-2xl border border-white/12 bg-[#090e1a]/88 px-2.5 sm:px-3 py-2.5 text-xs font-medium text-slate-200 backdrop-blur-xl transition hover:border-emerald-400/35 hover:text-white"
            title={t.navProgressTooltip}
          >
            <Award className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
            <span className="font-mono-meta text-[11px]">
              {masteredSlugs.size}/{concepts.length}
            </span>
            {masteredPct > 0 && (
              <span className="hidden sm:inline text-[10px] text-emerald-300/90 font-mono-meta">
                ({masteredPct}%)
              </span>
            )}
          </button>

          {/* Language Selector (ES / EN + upcoming languages) */}
          <LanguageSelector />

          {/* Mobile quick Help (?) replay tour button */}
          <button
            onClick={() => {
              setSelectedConceptSlug(null);
              setSelectedCore(false);
              setTourOpen(true);
            }}
            className="hidden xs:flex md:hidden items-center justify-center rounded-2xl border border-white/10 bg-[#090e1a]/88 p-2.5 text-slate-400 backdrop-blur-xl hover:text-amber-300"
            aria-label={t.navGuideTooltip}
            title={t.navGuideTooltip}
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Bottom-Left Constellation & Camera Controls */}
      {viewMode === 'constellation' && (
        <div
          data-tour="controls"
          className="fixed bottom-20 left-3 md:bottom-4 md:left-4 z-20 flex items-center gap-1 rounded-2xl border border-white/10 bg-[#090e1a]/88 p-1.5 shadow-xl backdrop-blur-xl"
        >
          <button
            onClick={() =>
              animateCameraTo(
                {
                  ...cameraRef.current,
                  scale: Math.min(2.1, cameraRef.current.scale * 1.25),
                },
                260
              )
            }
            className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            title={t.zoomIn}
            aria-label={t.zoomIn}
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            onClick={() =>
              animateCameraTo(
                {
                  ...cameraRef.current,
                  scale: Math.max(0.24, cameraRef.current.scale * 0.8),
                },
                260
              )
            }
            className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            title={t.zoomOut}
            aria-label={t.zoomOut}
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            onClick={handleResetView}
            className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            title={t.centerView}
            aria-label={t.centerView}
          >
            <Maximize2 className="h-4 w-4" />
          </button>
          <div className="mx-0.5 h-5 w-px bg-white/10" />
          <button
            onClick={handleToggleAllFamilies}
            aria-label={allExpanded ? t.collapseAll : t.expandAll}
            title={allExpanded ? t.collapseAll : t.expandAll}
            className={`flex items-center gap-1.5 rounded-xl px-2.5 sm:px-3 py-2 text-xs font-medium transition ${
              allExpanded
                ? 'bg-amber-400/18 text-amber-200 hover:bg-amber-400/25'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Trees className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">
              {allExpanded ? t.collapseAll : t.expandAll}
            </span>
          </button>
          <div className="hidden md:block mx-0.5 h-5 w-px bg-white/10" />
          <button
            onClick={() => {
              setSelectedConceptSlug(null);
              setSelectedCore(false);
              setTourOpen(true);
            }}
            className="hidden md:inline-flex rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-amber-300"
            title={t.navGuideTooltip}
            aria-label={t.navGuideTooltip}
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Floating iOS-style Mobile Bottom Navigation Dock */}
      {!selectedConcept && !selectedCore && (
        <nav
          aria-label="Mobile navigation"
          className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] inset-x-3 z-30 grid grid-cols-4 gap-1 rounded-2xl border border-white/12 bg-[#0a0f1c]/94 p-1.5 shadow-[0_14px_45px_rgba(0,0,0,0.75)] backdrop-blur-2xl md:hidden"
        >
          <button
            onClick={() => setViewMode('index')}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[10px] font-medium transition ${
              viewMode === 'index'
                ? 'bg-white/12 text-white'
                : 'text-slate-400 active:bg-white/8'
            }`}
          >
            <LayoutGrid
              className={`h-4 w-4 ${
                viewMode === 'index' ? 'text-cyan-300' : 'text-slate-400'
              }`}
            />
            <span>{t.navIndex}</span>
          </button>

          <button
            onClick={() => {
              setViewMode('constellation');
              animateCameraTo({ tx: 0, ty: 8, scale: getInitialScale() }, 420);
            }}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[10px] font-medium transition ${
              viewMode === 'constellation'
                ? 'bg-white/12 text-white'
                : 'text-slate-400 active:bg-white/8'
            }`}
          >
            <Orbit
              className={`h-4 w-4 ${
                viewMode === 'constellation'
                  ? 'text-amber-300'
                  : 'text-slate-400'
              }`}
            />
            <span>{t.navMapShort}</span>
          </button>

          <button
            onClick={() => setRoutesOpen(true)}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[10px] font-medium transition ${
              activeRoute
                ? 'bg-amber-400/18 text-amber-200'
                : 'text-slate-400 active:bg-white/8'
            }`}
          >
            <Compass className="h-4 w-4 text-amber-300" />
            <span>{activeRoute ? t.navRouteShort : t.navRoutes}</span>
          </button>

          <button
            onClick={() => setProblemsOpen(true)}
            className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[10px] font-medium text-slate-400 transition active:bg-white/8 hover:text-white"
          >
            <Flame className="h-4 w-4 text-rose-400" />
            <span>{t.navProblemShort}</span>
          </button>
        </nav>
      )}

      {/* Discreet Source Attribution Pill (desktop bottom-right) */}
      {!selectedConcept && !selectedCore && (
        <a
          href="https://turrero.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-20 hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-[#090e1a]/75 px-3 py-1.5 text-[11px] text-slate-400 backdrop-blur-xl transition hover:border-amber-400/30 hover:text-amber-200"
        >
          <span>{t.basedOnAttribution}</span>
          <ExternalLink className="h-3 w-3 opacity-70" />
        </a>
      )}

      {/* Gentle First-Visit Onboarding Whisper Pill (desktop) */}
      {viewMode === 'constellation' &&
        showOnboardingHint &&
        !tourOpen &&
        !activeRoute &&
        !selectedConcept &&
        !selectedCore && (
          <div className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 hidden xl:flex items-center gap-3 rounded-full border border-white/12 bg-[#090e1a]/88 px-4 py-2 text-xs text-slate-300 shadow-2xl backdrop-blur-xl animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>
              {t.onboardingWhisperPrefix}{' '}
              <strong className="text-white">{t.onboardingWhisperStrong}</strong>{' '}
              {t.onboardingWhisperMid}{' '}
              <button
                onClick={() => handleStartRoute(guidedRoutes[0])}
                className="font-semibold text-amber-300 underline decoration-amber-400/40 underline-offset-2 hover:text-amber-200"
              >
                {t.onboardingWhisperCta}
              </button>
            </span>
            <button
              onClick={() => setShowOnboardingHint(false)}
              className="text-slate-500 hover:text-slate-200"
              aria-label={t.closePanel}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

      {/* Active Guided Route Floating Dock */}
      {activeRoute && !selectedConcept && (
        <div className="fixed bottom-20 md:bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-amber-400/30 bg-[#0b101d]/92 px-4 py-2.5 text-xs shadow-2xl backdrop-blur-xl animate-fade-up max-w-[calc(100vw-1.5rem)]">
          <button
            disabled={activeRouteStep <= 0}
            onClick={() => handleRouteStepChange(activeRouteStep - 1)}
            className="rounded-lg p-1.5 text-slate-300 hover:bg-white/10 disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() =>
              handleSelectConcept(activeRoute.steps[activeRouteStep].slug, false)
            }
            className="text-left min-w-0"
          >
            <p className="truncate text-[10px] font-mono-meta uppercase tracking-wider text-amber-300">
              {activeRoute.title} · {activeRouteStep + 1}/
              {activeRoute.steps.length}
            </p>
            <p className="truncate font-medium text-white">
              {conceptMap[activeRoute.steps[activeRouteStep].slug]?.term}
            </p>
          </button>
          <button
            disabled={activeRouteStep >= activeRoute.steps.length - 1}
            onClick={() => handleRouteStepChange(activeRouteStep + 1)}
            className="rounded-lg p-1.5 text-slate-300 hover:bg-white/10 disabled:opacity-30"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
          <div className="h-5 w-px bg-white/10" />
          <button
            onClick={() => {
              setActiveRouteId(null);
              setUrlHash('');
            }}
            className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
            title={t.routeExitFree}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Right Slide-Over Panels */}
      {selectedConcept && (
        <ConceptDrawer
          concept={selectedConcept}
          isMastered={masteredSlugs.has(selectedConcept.slug)}
          note={notesBySlug[selectedConcept.slug] ?? ''}
          activeRoute={activeRoute}
          activeRouteStep={activeRouteStep}
          onClose={() => {
            setSelectedConceptSlug(null);
            setUrlHash('');
          }}
          onToggleMastered={handleToggleMastered}
          onNoteChange={handleNoteChange}
          onSelectConcept={(slug) => handleSelectConcept(slug, true)}
          onRouteStepChange={handleRouteStepChange}
        />
      )}

      {selectedCore && !selectedConcept && (
        <CoreOverviewDrawer
          onClose={() => setSelectedCore(false)}
          onSelectConcept={(slug) => handleSelectConcept(slug, true)}
          onFocusFamily={handleFocusFamily}
          onStartIntroRoute={() => handleStartRoute(guidedRoutes[0])}
        />
      )}

      {/* Modals */}
      <SearchModal
        open={searchOpen}
        masteredSlugs={masteredSlugs}
        onClose={() => setSearchOpen(false)}
        onSelectConcept={(slug) => handleSelectConcept(slug, true)}
      />

      <ProblemsModal
        open={problemsOpen}
        onClose={() => setProblemsOpen(false)}
        onSelectConcept={(slug) => handleSelectConcept(slug, true)}
      />

      <RoutesModal
        open={routesOpen}
        activeRouteId={activeRoute?.id ?? null}
        onClose={() => setRoutesOpen(false)}
        onSelectRoute={(route) => handleStartRoute(route, true)}
        onClearRoute={() => {
          setActiveRouteId(null);
          setUrlHash('');
        }}
      />

      <ProgressModal
        open={progressOpen}
        masteredSlugs={masteredSlugs}
        notesBySlug={notesBySlug}
        onClose={() => setProgressOpen(false)}
        onFocusFamily={handleFocusFamily}
        onResetProgress={() => setMasteredSlugs(new Set())}
      />

      <OnboardingTour open={tourOpen} onFinish={handleFinishTour} />
    </div>
  );
}

export default App;
