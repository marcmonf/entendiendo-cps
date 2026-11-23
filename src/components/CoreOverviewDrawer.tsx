import React from 'react';
import {
  ArrowRight,
  Compass,
  ExternalLink,
  Layers,
  Sparkles,
  X,
} from 'lucide-react';
import {
  ALL_15_THEMES,
  FAMILY_MAP,
  FIVE_ATTRACTORS,
  FOUR_PILLARS,
} from '../data/atlasData';

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
  return (
    <aside
      className="fixed right-3 top-20 bottom-3 z-30 flex w-[calc(100vw-1.5rem)] max-w-[468px] flex-col overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0a0f1c]/92 shadow-[0_24px_80px_rgba(0,0,0,0.75)] backdrop-blur-2xl animate-drawer-in"
      aria-label="Núcleo Complex Problem Solving"
    >
      <div
        className="h-[2px] w-full shrink-0"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #F59E0B 50%, transparent 100%)',
        }}
      />

      <div className="shrink-0 px-6 pt-5 pb-4 border-b border-white/8">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/35 bg-amber-400/12 px-2.5 py-1 text-[11px] font-medium text-amber-200">
            <Sparkles className="h-3 w-3" />
            El Sol del Observatorio
          </span>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Cerrar panel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h2 className="mt-3 font-editorial text-[34px] leading-[1.06] text-white">
          Complex Problem Solving
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Para Javier G. Recuenco, un problema complejo no es simplemente un problema
          difícil: es aquel ante el que{' '}
          <span className="text-amber-200 font-medium">
            los grandes expertos se declaran incompetentes
          </span>{' '}
          porque no existe un manual previo. El CPS es el{' '}
          <span className="text-white font-medium">cienciarte</span> de navegar esa
          niebla combinando cuatro pilares transversales.
        </p>

        <button
          onClick={onStartIntroRoute}
          className="mt-4 flex w-full items-center justify-between rounded-2xl bg-amber-400 px-4 py-3 text-xs font-semibold text-slate-950 transition hover:bg-amber-300"
        >
          <span className="flex items-center gap-2">
            <Compass className="h-4 w-4" />
            Iniciar ruta guiada: «Empieza aquí en CPS» (8 paradas)
          </span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="custom-scroll flex-1 overflow-y-auto px-6 py-5 space-y-6">
        {/* Los 4 Pilares */}
        <section>
          <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
            Los 4 Pilares del CPS
          </p>
          <div className="mt-2.5 grid grid-cols-1 gap-2.5">
            {FOUR_PILLARS.map((p) => (
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

        {/* Los 5 Atractores */}
        <section>
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
              En el centro: los 5 Atractores
            </p>
            <button
              onClick={() => onSelectConcept('atractores')}
              className="text-[11px] text-amber-300 hover:underline"
            >
              Ver concepto →
            </button>
          </div>
          <div className="mt-2.5 space-y-2">
            {FIVE_ATTRACTORS.map((a, idx) => (
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

        {/* Las 15 Temáticas de El Turrero Post */}
        <section>
          <div className="flex items-center gap-2 text-[11px] font-mono-meta uppercase tracking-widest text-slate-400">
            <Layers className="h-3.5 w-3.5" />
            <span>Las 15 temáticas de El Turrero Post</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Pulsa cualquier temática para desplegar su constelación en el mapa.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {ALL_15_THEMES.map((theme) => {
              const fam = FAMILY_MAP[theme.familyId];
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

        {/* Credit / Source */}
        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-xs text-slate-400 space-y-2">
          <p className="leading-relaxed">
            Basado en el archivo público, glosario (90 conceptos) y biblioteca (324
            libros) de{' '}
            <a
              href="https://turrero.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:underline inline-flex items-center gap-1"
            >
              El Turrero Post
              <ExternalLink className="h-3 w-3" />
            </a>
            , recopilado por la Comunidad CPS a partir de las turras de Javier G.
            Recuenco.
          </p>
        </div>
      </div>
    </aside>
  );
};
