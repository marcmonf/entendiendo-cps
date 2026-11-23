import React from 'react';
import { ArrowRight, Flame, X } from 'lucide-react';
import { CONCEPT_MAP, FAMILY_MAP } from '../data/atlasData';

interface RealProblem {
  id: string;
  question: string;
  diagnosis: string;
  accent: string;
  slugs: string[];
}

const REAL_PROBLEMS: RealProblem[] = [
  {
    id: 'equipo-estrellas',
    question: '«Tengo gente brillantísima, pero el equipo no rinde o choca»',
    diagnosis:
      'Juntar currículums estelares no suma en línea recta: suelen chocar egos, agendas y lenguajes. Necesitas orquestación y un traductor.',
    accent: '#EC4899',
    slugs: [
      'equipo-apolo',
      'orquestacion-cognitiva',
      'emulsificador-de-equipo',
      'asertividad',
      'recoger-cable',
    ],
  },
  {
    id: 'estrategia-humo',
    question: '«Nuestra estrategia suena preciosa en PowerPoint, pero no resuelve nada»',
    diagnosis:
      'Confundir lista de deseos con estrategia. Toca volver al diagnóstico crudo, comprobar si la propuesta de valor caducó y elegir renuncias.',
    accent: '#10B981',
    slugs: [
      'estrategia',
      'diagnostico',
      'hotel-de-hilbert',
      'cul-de-sac',
      'sidestepping',
    ],
  },
  {
    id: 'ia-pilotos',
    question: '«Hacemos mil pilotos de IA, pero nada cambia de verdad el negocio»',
    diagnosis:
      'Estás atrapado en el abismo entre la demo vistosa y la adopción real. Separa lo repetible de los procesos humanos de alta variabilidad.',
    accent: '#38BDF8',
    slugs: [
      'ia-chasm',
      'centauro',
      'lujo-humano',
      'procesos-de-alta-variabilidad',
      'ecosistemas-tecnologicos',
    ],
  },
  {
    id: 'incentivos-kpis',
    question: '«Ponemos KPIs y bonus, pero la gente hace justo lo contrario de lo esperado»',
    diagnosis:
      'Las canicas siempre ruedan hacia la pendiente real del suelo. Audita incentivos perversos, métricas engañosas y quién se juega el pellejo.',
    accent: '#F97316',
    slugs: [
      'arquitectura-de-incentivos',
      'incentivo-perverso',
      'falacia-de-mcnamara',
      'skin-in-the-game',
      'huevos-de-serpiente',
    ],
  },
  {
    id: 'nadie-dice-verdad',
    question: '«Todo el mundo sabe que algo va mal, pero nadie lo dice en la reunión»',
    diagnosis:
      'Conviven la pantomima corporativa, el miedo al aislamiento y la fatiga del «¿pa qué?». Hay que bajar el coste de decir la verdad.',
    accent: '#F43F5E',
    slugs: [
      'pantomima',
      'elefante-negro',
      'espiral-del-silencio',
      'espiral-del-pa-que',
      'truth-coping',
    ],
  },
  {
    id: 'incertidumbre-paralisis',
    question: '«No tenemos datos fiables y nos da vértigo decidir sin certezas»',
    diagnosis:
      'Bienvenido al cuadrante complejo. Aquí pedir el plan maestro perfecto paraliza: toca hacer sensemaking y experimentos pequeños con cabeza.',
    accent: '#06B6D4',
    slugs: [
      'cynefin',
      'sensemaking',
      'niebla-de-guerra',
      'incertidumbre',
      'vaca-esferica',
    ],
  },
  {
    id: 'marketing-ignorado',
    question: '«Invertimos más en marketing y datos, pero los clientes nos ignoran»',
    diagnosis:
      'La persecución masiva ha generado inmunidad. Deja de bombardear a desconocidos y construye relevancia real para que el cliente levante la mano.',
    accent: '#EC4899',
    slugs: [
      'personotecnia',
      'autosegmentacion',
      'capitalismo-de-vigilancia',
      'test-astudillo',
      'contexto',
    ],
  },
  {
    id: 'talento-no-encaja',
    question: '«Siento que pienso distinto (o lidero talento atípico) y el sistema ahoga»',
    diagnosis:
      'Las estructuras hechas para la media estadística desperdigaron el talento singular. Busca entornos liminales, mentores y convivencia real.',
    accent: '#A855F7',
    slugs: [
      'altas-capacidades',
      'neurodivergencia',
      'xavier-o-magneto',
      'zona-de-desarrollo-proximo',
      'liminalidad',
    ],
  },
];

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
              <span>Entrada práctica · Diagnóstico rápido</span>
            </div>
            <h2 className="mt-1 font-editorial text-3xl text-white">
              ¿Qué problema tienes hoy sobre la mesa?
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Elige la situación que más se parece a lo que estás viviendo y salta
              directamente a las herramientas de CPS que la iluminan.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="custom-scroll max-h-[68vh] overflow-y-auto p-5 grid grid-cols-1 gap-3 md:grid-cols-2">
          {REAL_PROBLEMS.map((prob) => (
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
                  const c = CONCEPT_MAP[slug];
                  if (!c) return null;
                  const fam = FAMILY_MAP[c.familyId];
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
