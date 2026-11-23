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
import {
  CONCEPTS,
  CONCEPT_MAP,
  FAMILIES,
  GUIDED_ROUTES,
  type GuidedRoute,
} from './data/atlasData';
import { computeAtlasLayout } from './utils/layout';
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

const STORAGE_KEY = 'observatorio_cps_mastered_v1';
const NOTES_STORAGE_KEY = 'observatorio_cps_notes_v1';
const TOUR_STORAGE_KEY = 'observatorio_cps_tour_done_v1';

type ViewMode = 'constellation' | 'index';

function getInitialScale(): number {
  if (typeof window === 'undefined') return 0.84;
  const minDim = Math.min(window.innerWidth, window.innerHeight);
  return Math.max(0.52, Math.min(0.92, minDim / 860));
}

export function App() {
  const { familyLayouts, conceptPositions, familyPositions } = useMemo(
    () => computeAtlasLayout(),
    []
  );

  // Desktop starts on Constellation; mobile starts on Constellation too with 1-tap switch to Index
  const [viewMode, setViewMode] = useState<ViewMode>('constellation');

  // Progressive disclosure: start calm with all 9 constellations neatly folded around CPS
  const [expandedFamilies, setExpandedFamilies] = useState<Set<string>>(
    () => new Set<string>()
  );
  const [selectedConceptSlug, setSelectedConceptSlug] = useState<string | null>(
    null
  );
  const [selectedCore, setSelectedCore] = useState<boolean>(false);

  // Persisted learning progress
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

  // Persisted personal notes per concept
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

  // Active Guided Route
  const [activeRoute, setActiveRoute] = useState<GuidedRoute | null>(null);
  const [activeRouteStep, setActiveRouteStep] = useState<number>(0);

  // Modals & gentle onboarding hint
  const [searchOpen, setSearchOpen] = useState(false);
  const [routesOpen, setRoutesOpen] = useState(false);
  const [progressOpen, setProgressOpen] = useState(false);
  const [problemsOpen, setProblemsOpen] = useState(false);
  const [showOnboardingHint, setShowOnboardingHint] = useState(true);
  const [tourOpen, setTourOpen] = useState<boolean>(() => {
    try {
      // Do not interrupt visitors arriving directly via a shared concept/route hash (#cynefin)
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

  // Camera state + smooth RAF flight
  const [camera, setCamera] = useState<CameraState>(() => ({
    tx: 0,
    ty: 12,
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
        const t = Math.min(1, elapsed / durationMs);
        const e = 1 - Math.pow(1 - t, 3);
        const next: CameraState = {
          tx: start.tx + (target.tx - start.tx) * e,
          ty: start.ty + (target.ty - start.ty) * e,
          scale: start.scale + (target.scale - start.scale) * e,
        };
        setCamera(next);
        if (t < 1) {
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

  // Sync URL hash cleanly without jarring scroll jumps
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

  // Fly smoothly to a specific concept (auto-expanding its constellation!)
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

      const targetScale = Math.max(
        0.86,
        Math.min(1.06, cameraRef.current.scale < 0.78 ? 0.92 : cameraRef.current.scale)
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

  // Toggle expanding/collapsing a family constellation
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
          const targetScale = Math.min(0.84, Math.max(0.62, getInitialScale() * 0.92));
          const focusX = fl.x * 1.48;
          const focusY = fl.y * 1.48;
          const offsetX = selectedConceptSlug || selectedCore ? getDrawerOffsetX() : 0;
          animateCameraTo({
            scale: targetScale,
            tx: -focusX * targetScale + offsetX,
            ty: -focusY * targetScale + 12,
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
      const targetScale = Math.min(0.86, Math.max(0.64, getInitialScale() * 0.94));
      animateCameraTo({
        scale: targetScale,
        tx: -fl.x * 1.5 * targetScale,
        ty: -fl.y * 1.5 * targetScale + 12,
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
        animateCameraTo({ scale: s, tx: getDrawerOffsetX() * 0.65, ty: 12 });
      }
      return next;
    });
  }, [animateCameraTo, setUrlHash]);

  const handleToggleAllFamilies = useCallback(() => {
    setShowOnboardingHint(false);
    const allOpen = expandedFamilies.size === FAMILIES.length;
    if (allOpen) {
      setExpandedFamilies(new Set());
      setSelectedConceptSlug(null);
      setUrlHash('');
      animateCameraTo({ tx: 0, ty: 12, scale: getInitialScale() });
    } else {
      setExpandedFamilies(new Set(FAMILIES.map((f) => f.id)));
      const fitAllScale =
        typeof window !== 'undefined'
          ? Math.max(
              0.38,
              Math.min(0.56, Math.min(window.innerWidth, window.innerHeight) / 1780)
            )
          : 0.46;
      animateCameraTo({ tx: 0, ty: 14, scale: fitAllScale }, 680);
    }
  }, [expandedFamilies.size, animateCameraTo, setUrlHash]);

  const handleResetView = useCallback(() => {
    const anyOpen = expandedFamilies.size > 2;
    const hasDrawer = Boolean(selectedConceptSlug || selectedCore);
    const targetScale = anyOpen
      ? Math.max(
          0.38,
          Math.min(0.56, Math.min(window.innerWidth, window.innerHeight) / 1780)
        )
      : getInitialScale();
    animateCameraTo({
      tx: hasDrawer ? getDrawerOffsetX() : 0,
      ty: 16,
      scale: targetScale,
    });
  }, [expandedFamilies.size, selectedConceptSlug, selectedCore, animateCameraTo]);

  const handleStartRoute = useCallback(
    (route: GuidedRoute, updateHash = true) => {
      setShowOnboardingHint(false);
      setViewMode('constellation');
      setActiveRoute(route);
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
          const targetScale = 0.88;
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
      const clamped = Math.max(0, Math.min(activeRoute.steps.length - 1, nextStep));
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

  // Deep-linking: read initial URL hash (#cynefin or #ruta/empieza-aqui) + respond to hashchange
  useEffect(() => {
    const applyHash = () => {
      const raw = decodeURIComponent(window.location.hash.replace(/^#/, '').trim());
      if (!raw) return;
      if (raw.startsWith('ruta/')) {
        const routeId = raw.slice(5);
        const route = GUIDED_ROUTES.find((r) => r.id === routeId);
        if (route) handleStartRoute(route, false);
        return;
      }
      if (CONCEPT_MAP[raw]) {
        handleSelectConcept(raw, false);
      }
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, [handleSelectConcept, handleStartRoute]);

  // Keyboard shortcuts: Cmd/Ctrl+K search, Esc close, Left/Right guided route
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
        handleRouteStepChange(activeRouteStep + (e.key === 'ArrowRight' ? 1 : -1));
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
    ? CONCEPT_MAP[selectedConceptSlug] ?? null
    : null;
  const allExpanded = expandedFamilies.size === FAMILIES.length;
  const masteredPct = Math.round((masteredSlugs.size / CONCEPTS.length) * 100);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#06080f] text-slate-100">
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
        />
      )}

      {/* Top Floating Glassmorphism HUD */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-between gap-2 px-3 py-3 sm:px-5">
        {/* Left: Brand Emblem + View Mode Switcher */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={handleSelectCore}
            className="group flex shrink-0 items-center gap-2.5 rounded-2xl border border-white/10 bg-[#090e1a]/85 px-3 py-2 backdrop-blur-xl transition hover:border-amber-400/35 hover:bg-[#0d1426]/90 whitespace-nowrap"
          >
            <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/15 border border-amber-400/40">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            </span>
            <div className="text-left">
              <h1 className="font-editorial text-lg sm:text-xl leading-none tracking-tight text-white">
                Observatorio CPS
              </h1>
              <p className="mt-0.5 hidden sm:block text-[10px] font-mono-meta uppercase tracking-widest text-slate-400 group-hover:text-amber-200/80 transition">
                El Turrero Post · {CONCEPTS.length} conceptos
              </p>
            </div>
          </button>

          {/* Constellation / Index Switcher */}
          <div
            data-tour="view-switcher"
            className="flex items-center rounded-2xl border border-white/10 bg-[#090e1a]/85 p-1 backdrop-blur-xl"
          >
            <button
              onClick={() => setViewMode('constellation')}
              className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-medium transition ${
                viewMode === 'constellation'
                  ? 'bg-white/14 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Vista Constelación"
            >
              <Orbit className="h-3.5 w-3.5 text-amber-300" />
              <span className="hidden md:inline">Constelación</span>
            </button>
            <button
              onClick={() => setViewMode('index')}
              className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-medium transition ${
                viewMode === 'index'
                  ? 'bg-white/14 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Vista Índice / Móvil"
            >
              <LayoutGrid className="h-3.5 w-3.5 text-cyan-300" />
              <span className="hidden md:inline">Índice</span>
            </button>
          </div>
        </div>

        {/* Center Command Search Pill (large screens) */}
        <button
          data-tour="search"
          onClick={() => setSearchOpen(true)}
          className="pointer-events-auto hidden xl:flex items-center gap-3 rounded-2xl border border-white/10 bg-[#090e1a]/85 px-4 py-2.5 text-xs text-slate-400 backdrop-blur-xl transition hover:border-white/25 hover:bg-[#0f1629]/90 hover:text-slate-200 w-76 justify-between"
        >
          <span className="flex items-center gap-2.5 truncate">
            <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="truncate">Buscar concepto, autor o tema…</span>
          </span>
          <kbd className="rounded-md border border-white/12 bg-white/5 px-1.5 py-0.5 font-mono-meta text-[10px] text-slate-400">
            ⌘K
          </kbd>
        </button>

        {/* Right Action Pills */}
        <div className="pointer-events-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            data-tour="search"
            onClick={() => setSearchOpen(true)}
            className="flex xl:hidden items-center justify-center rounded-2xl border border-white/10 bg-[#090e1a]/85 p-2.5 text-slate-300 backdrop-blur-xl hover:bg-white/10"
            aria-label="Buscar"
            title="Buscar (⌘K)"
          >
            <Search className="h-4 w-4" />
          </button>

          <div data-tour="guides" className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setProblemsOpen(true)}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-2xl border border-white/12 bg-[#090e1a]/85 px-3 py-2.5 text-xs font-medium text-slate-200 backdrop-blur-xl transition hover:border-rose-400/40 hover:text-white"
              title="Entrar por un problema real"
            >
              <Flame className="h-3.5 w-3.5 shrink-0 text-rose-400" />
              <span className="hidden lg:inline">¿Tu problema?</span>
            </button>

            <button
              onClick={() => setRoutesOpen(true)}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-2xl border px-3 py-2.5 text-xs font-medium backdrop-blur-xl transition ${
                activeRoute
                  ? 'border-amber-400/45 bg-amber-400/15 text-amber-100'
                  : 'border-white/12 bg-[#090e1a]/85 text-slate-200 hover:border-amber-400/35 hover:text-white'
              }`}
              title="Rutas guiadas paso a paso"
            >
              <Compass className="h-3.5 w-3.5 shrink-0 text-amber-300" />
              <span className="hidden sm:inline">
                {activeRoute ? 'Ruta activa' : 'Rutas'}
              </span>
            </button>
          </div>

          <button
            data-tour="progress"
            onClick={() => setProgressOpen(true)}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-2xl border border-white/12 bg-[#090e1a]/85 px-3 py-2.5 text-xs font-medium text-slate-200 backdrop-blur-xl transition hover:border-emerald-400/35 hover:text-white"
            title="Tu progreso y notas exportables"
          >
            <Award className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
            <span className="font-mono-meta text-[11px]">
              {masteredSlugs.size}/{CONCEPTS.length}
            </span>
            {masteredPct > 0 && (
              <span className="hidden sm:inline text-[10px] text-emerald-300/90 font-mono-meta">
                ({masteredPct}%)
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Bottom-Left Constellation & Camera Controls (Constellation mode only) */}
      {viewMode === 'constellation' && (
        <div
          data-tour="controls"
          className="fixed bottom-4 left-4 z-20 flex items-center gap-1.5 rounded-2xl border border-white/10 bg-[#090e1a]/86 p-1.5 shadow-xl backdrop-blur-xl"
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
            title="Acercar"
            aria-label="Acercar"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            onClick={() =>
              animateCameraTo(
                {
                  ...cameraRef.current,
                  scale: Math.max(0.38, cameraRef.current.scale * 0.8),
                },
                260
              )
            }
            className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            title="Alejar"
            aria-label="Alejar"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            onClick={handleResetView}
            className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            title="Centrar vista"
            aria-label="Centrar vista"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
          <div className="mx-0.5 h-5 w-px bg-white/10" />
          <button
            onClick={handleToggleAllFamilies}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition ${
              allExpanded
                ? 'bg-amber-400/18 text-amber-200 hover:bg-amber-400/25'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Trees className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">
              {allExpanded ? 'Contraer todo' : 'Desplegar todo'}
            </span>
          </button>
          <div className="mx-0.5 h-5 w-px bg-white/10" />
          <button
            onClick={() => {
              setSelectedConceptSlug(null);
              setSelectedCore(false);
              setTourOpen(true);
            }}
            className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-amber-300"
            title="Ver guía rápida de navegación"
            aria-label="Ver guía rápida de navegación"
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Discreet Source Attribution Pill (bottom-right when no drawer is open) */}
      {!selectedConcept && !selectedCore && (
        <a
          href="https://turrero.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-20 hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-[#090e1a]/75 px-3 py-1.5 text-[11px] text-slate-400 backdrop-blur-xl transition hover:border-amber-400/30 hover:text-amber-200"
        >
          <span>Basado en El Turrero Post · @Recuenco</span>
          <ExternalLink className="h-3 w-3 opacity-70" />
        </a>
      )}

      {/* Gentle First-Visit Onboarding Whisper Pill */}
      {viewMode === 'constellation' &&
        showOnboardingHint &&
        !activeRoute &&
        !selectedConcept &&
        !selectedCore && (
          <div className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 hidden xl:flex items-center gap-3 rounded-full border border-white/12 bg-[#090e1a]/88 px-4 py-2 text-xs text-slate-300 shadow-2xl backdrop-blur-xl animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>
              Haz clic en una <strong className="text-white">constelación</strong>{' '}
              para abrir sus ramas · o{' '}
              <button
                onClick={() => handleStartRoute(GUIDED_ROUTES[0])}
                className="font-semibold text-amber-300 underline decoration-amber-400/40 underline-offset-2 hover:text-amber-200"
              >
                empieza la ruta guiada
              </button>
            </span>
            <button
              onClick={() => setShowOnboardingHint(false)}
              className="text-slate-500 hover:text-slate-200"
              aria-label="Ocultar ayuda"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

      {/* Active Guided Route Floating Dock */}
      {viewMode === 'constellation' && activeRoute && !selectedConcept && (
        <div className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-3 rounded-2xl border border-amber-400/30 bg-[#0b101d]/92 px-4 py-2.5 text-xs shadow-2xl backdrop-blur-xl animate-fade-up">
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
            className="text-left"
          >
            <p className="text-[10px] font-mono-meta uppercase tracking-wider text-amber-300">
              {activeRoute.title} · {activeRouteStep + 1}/{activeRoute.steps.length}
            </p>
            <p className="font-medium text-white">
              {CONCEPT_MAP[activeRoute.steps[activeRouteStep].slug]?.term}
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
              setActiveRoute(null);
              setUrlHash('');
            }}
            className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
            title="Salir de la ruta"
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
          onStartIntroRoute={() => handleStartRoute(GUIDED_ROUTES[0])}
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
          setActiveRoute(null);
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
