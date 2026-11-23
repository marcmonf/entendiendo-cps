import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Compass,
  Flame,
  LayoutGrid,
  Search,
  Sparkles,
  Trees,
  Award,
  X,
} from 'lucide-react';

export interface TourStep {
  id: string;
  target?: string; // matches [data-tour="..."] on visible element
  title: string;
  description: string;
  tip?: string;
  icon: React.ReactNode;
}

const TOUR_STEPS: TourStep[] = [
  {
    id: 'welcome',
    title: 'Bienvenido al Observatorio CPS',
    description:
      'Aquí tienes 94 conceptos de Complex Problem Solving organizados en 9 constelaciones y 4 niveles de profundidad (de lo más sencillo a la lectura de las 131 turras originales). Haz clic en cualquier constelación para desplegar sus ramas, o en el Sol central para ver los 4 Pilares y los 5 Atractores.',
    tip: 'Arrastra el fondo para moverte libremente por el cielo.',
    icon: <Sparkles className="h-4 w-4 text-amber-300" />,
  },
  {
    id: 'view-switcher',
    target: 'view-switcher',
    title: 'Cambia entre Mapa e Índice',
    description:
      'Alterna cuando quieras entre la vista visual de Constelación y la vista Índice en tarjetas filtrables por las 15 temáticas de El Turrero Post.',
    tip: 'En móvil o para buscar rápido por tema, la vista Índice es comodísima.',
    icon: <LayoutGrid className="h-4 w-4 text-cyan-300" />,
  },
  {
    id: 'search',
    target: 'search',
    title: 'Buscador instantáneo (⌘K)',
    description:
      'Introduce aquí cualquier concepto, alias, autor o palabra clave (por ejemplo «Cynefin», «Personotecnia» o «AACC») y el mapa volará directamente hasta esa estrella.',
    tip: 'En ordenador puedes abrirlo en cualquier momento pulsando ⌘K o Ctrl+K.',
    icon: <Search className="h-4 w-4 text-slate-200" />,
  },
  {
    id: 'guides',
    target: 'guides',
    title: '¿Tu problema? y Rutas guiadas',
    description:
      '¿No sabes por dónde empezar? En «¿Tu problema?» eliges una situación real (equipos, IA, estrategia, incentivos) y te lleva a las herramientas exactas. En «Rutas» sigues recorridos numerados paso a paso.',
    tip: 'Cada concepto tiene 4 pestañas: Llano → Práctica → A fondo → Fuentes.',
    icon: <Compass className="h-4 w-4 text-amber-300" />,
  },
  {
    id: 'progress',
    target: 'progress',
    title: 'Tu progreso y notas personales',
    description:
      'Marca conceptos como «Entendido» y escribe tus propias notas dentro de cada ficha. Aquí verás tu avance por constelación y podrás exportar todo a Markdown para Obsidian o Notion.',
    tip: 'Todo se guarda automáticamente en tu navegador, sin cuentas ni registros.',
    icon: <Award className="h-4 w-4 text-emerald-300" />,
  },
  {
    id: 'controls',
    target: 'controls',
    title: 'Zoom, encuadre y desplegar todo',
    description:
      'Desde estos controles puedes acercar (+), alejar (−), centrar la vista o desplegar las 94 estrellas a la vez con un solo clic.',
    tip: 'También puedes hacer zoom con la rueda del ratón o pellizcando con dos dedos en móvil y tablet.',
    icon: <Trees className="h-4 w-4 text-amber-300" />,
  },
];

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
  const [stepIdx, setStepIdx] = useState(0);
  const [rect, setRect] = useState<Rect | null>(null);
  const [viewport, setViewport] = useState(() => ({
    w: typeof window !== 'undefined' ? window.innerWidth : 1280,
    h: typeof window !== 'undefined' ? window.innerHeight : 800,
  }));

  useEffect(() => {
    if (open) setStepIdx(0);
  }, [open]);

  const step = TOUR_STEPS[stepIdx];

  useEffect(() => {
    if (!open) return;
    const update = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
      setRect(findVisibleTargetRect(step.target));
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
        if (stepIdx < TOUR_STEPS.length - 1) setStepIdx((i) => i + 1);
        else onFinish();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (stepIdx > 0) setStepIdx((i) => i - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, stepIdx, onFinish]);

  if (!open) return null;

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === TOUR_STEPS.length - 1;

  // Smart card placement so the tooltip never clips off-screen on desktop or mobile
  const cardWidth = Math.min(392, viewport.w - 24);
  let cardStyle: React.CSSProperties;

  if (!rect) {
    cardStyle = {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: cardWidth,
    };
  } else {
    const spaceBelow = viewport.h - (rect.top + rect.height);
    const placeBelow = spaceBelow >= 270;
    const top = placeBelow
      ? Math.min(viewport.h - 260, rect.top + rect.height + 16)
      : Math.max(16, rect.top - 255);
    const idealLeft = rect.left + rect.width / 2 - cardWidth / 2;
    const left = Math.max(12, Math.min(viewport.w - cardWidth - 12, idealLeft));
    cardStyle = {
      top,
      left,
      width: cardWidth,
    };
  }

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Guía rápida de navegación"
    >
      {/* Dimmed backdrop with real spotlight cutout around the highlighted button */}
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
        </>
      ) : (
        <div
          className="fixed inset-0 bg-[#04060e]/75 backdrop-blur-[2px] transition-opacity duration-300"
          onClick={onFinish}
        />
      )}

      {/* Floating Guide Card */}
      <div
        className="fixed z-10 overflow-hidden rounded-3xl border border-amber-400/28 bg-[#0b1121]/96 shadow-[0_28px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 ease-out animate-fade-up"
        style={cardStyle}
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
          {/* Header row */}
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 text-[10px] font-mono-meta uppercase tracking-widest text-amber-200">
              {step.icon}
              <span>
                Guía rápida · {stepIdx + 1} / {TOUR_STEPS.length}
              </span>
            </div>
            <button
              onClick={onFinish}
              className="rounded-full p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Cerrar guía"
              title="Saltar guía (Esc)"
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

          {/* Step progress dots */}
          <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-white/8">
            <div className="flex items-center gap-1.5">
              {TOUR_STEPS.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setStepIdx(idx)}
                  aria-label={`Ir al paso ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === stepIdx
                      ? 'w-5 bg-amber-400'
                      : idx < stepIdx
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
                  Saltar
                </button>
              ) : (
                <button
                  onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
                  className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2 text-xs text-slate-200 transition hover:bg-white/10"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Atrás</span>
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
                    <span>¡A explorar!</span>
                  </>
                ) : (
                  <>
                    <span>Siguiente</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
