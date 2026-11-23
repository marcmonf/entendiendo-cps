import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Filter,
  Search,
  Sparkles,
  StickyNote,
  X,
} from 'lucide-react';
import {
  ALL_15_THEMES,
  CONCEPTS,
  FAMILIES,
  FAMILY_MAP,
} from '../data/atlasData';

interface IndexViewProps {
  masteredSlugs: Set<string>;
  notesBySlug: Record<string, string>;
  onSelectConcept: (slug: string) => void;
  onJumpToConstellation: (familyId: string) => void;
}

type FilterMode = 'all' | 'core' | 'pillars' | 'mastered' | 'notes';

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export const IndexView: React.FC<IndexViewProps> = ({
  masteredSlugs,
  notesBySlug,
  onSelectConcept,
  onJumpToConstellation,
}) => {
  const [query, setQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<string>('all');
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [showThemes, setShowThemes] = useState(false);

  const filteredByFamily = useMemo(() => {
    const q = normalize(query.trim());
    const result: Record<string, typeof CONCEPTS> = {};

    for (const fam of FAMILIES) {
      if (selectedFamily !== 'all' && fam.id !== selectedFamily) continue;
      const items = CONCEPTS.filter((c) => {
        if (c.familyId !== fam.id) return false;
        if (filterMode === 'core' && c.tier !== 'core') return false;
        if (filterMode === 'pillars' && !c.isPillar) return false;
        if (filterMode === 'mastered' && !masteredSlugs.has(c.slug)) return false;
        if (filterMode === 'notes' && !(notesBySlug[c.slug]?.trim())) return false;
        if (q) {
          const hay = normalize(
            `${c.term} ${c.aliases.join(' ')} ${c.short} ${fam.name} ${fam.themes.join(' ')}`
          );
          if (!hay.includes(q)) return false;
        }
        return true;
      });
      if (items.length > 0) result[fam.id] = items;
    }
    return result;
  }, [query, selectedFamily, filterMode, masteredSlugs, notesBySlug]);

  const totalVisible = Object.values(filteredByFamily).reduce(
    (acc, list) => acc + list.length,
    0
  );

  return (
    <div
      className="custom-scroll h-full w-full overflow-y-auto pt-22 pb-24 px-4 sm:px-8"
      style={{
        background: `
          radial-gradient(circle at 20% 10%, rgba(245, 158, 11, 0.08) 0%, transparent 45%),
          radial-gradient(circle at 80% 25%, rgba(6, 182, 212, 0.07) 0%, transparent 45%),
          #06080f
        `,
      }}
    >
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Intro Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-mono-meta uppercase tracking-widest text-amber-300/90">
              Vista Índice · 9 Constelaciones · 15 Temáticas
            </p>
            <h2 className="mt-1 font-editorial text-3xl sm:text-4xl text-white">
              Atlas Completo de El Turrero Post
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-2xl">
              Explora los 94 conceptos en formato lectura rápida — ideal en móvil o
              para filtrar por familia, temática, nivel de entrada o tus notas.
            </p>
          </div>
          <span className="self-start sm:self-end rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono-meta text-xs text-slate-300">
            {totalVisible} de {CONCEPTS.length} conceptos
          </span>
        </div>

        {/* Search + Filter Controls */}
        <div className="rounded-3xl border border-white/10 bg-[#0a0f1c]/85 p-4 backdrop-blur-xl space-y-3.5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filtrar por concepto, alias o palabra clave..."
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-9 text-sm text-white placeholder:text-slate-500 focus:border-amber-400/40 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {(
                [
                  ['all', 'Todos'],
                  ['core', 'Puerta de entrada'],
                  ['pillars', '4 Pilares'],
                  ['mastered', 'Entendidos'],
                  ['notes', 'Con notas'],
                ] as Array<[FilterMode, string]>
              ).map(([mode, label]) => (
                <button
                  key={mode}
                  onClick={() => setFilterMode(mode)}
                  className={`rounded-xl px-3 py-2 text-xs font-medium transition ${
                    filterMode === mode
                      ? 'bg-amber-400/20 text-amber-100 border border-amber-400/40'
                      : 'border border-white/8 bg-white/[0.03] text-slate-400 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => setShowThemes((v) => !v)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition ${
                  showThemes
                    ? 'bg-cyan-400/18 text-cyan-100 border border-cyan-400/40'
                    : 'border border-white/8 bg-white/[0.03] text-slate-400 hover:text-white'
                }`}
              >
                <Filter className="h-3.5 w-3.5" />
                <span>15 Temáticas</span>
              </button>
            </div>
          </div>

          {/* Family Selector Pills */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedFamily('all')}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                selectedFamily === 'all'
                  ? 'bg-white/14 text-white border border-white/25'
                  : 'border border-white/8 bg-white/[0.02] text-slate-400 hover:text-slate-200'
              }`}
            >
              Todas las constelaciones
            </button>
            {FAMILIES.map((fam) => {
              const active = selectedFamily === fam.id;
              return (
                <button
                  key={fam.id}
                  onClick={() => setSelectedFamily(active ? 'all' : fam.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    active
                      ? 'text-white border'
                      : 'border border-white/8 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                  style={
                    active
                      ? {
                          backgroundColor: `${fam.color}24`,
                          borderColor: `${fam.color}66`,
                        }
                      : undefined
                  }
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: fam.color }}
                  />
                  <span>{fam.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Optional 15 Temáticas lens */}
          {showThemes && (
            <div className="border-t border-white/8 pt-3">
              <p className="text-[10px] font-mono-meta uppercase tracking-widest text-slate-400 mb-2">
                Filtrar por las 15 temáticas oficiales de El Turrero Post
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ALL_15_THEMES.map((t) => {
                  const fam = FAMILY_MAP[t.familyId];
                  return (
                    <button
                      key={t.name}
                      onClick={() => setSelectedFamily(t.familyId)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300 hover:border-white/25 hover:text-white transition"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: fam.color }}
                      />
                      <span>{t.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Grouped Family Sections */}
        {totalVisible === 0 ? (
          <div className="rounded-3xl border border-white/8 bg-white/[0.02] py-16 text-center">
            <p className="text-sm text-slate-400">
              No hay conceptos que coincidan con ese filtro.
            </p>
            <button
              onClick={() => {
                setQuery('');
                setSelectedFamily('all');
                setFilterMode('all');
              }}
              className="mt-3 rounded-xl border border-white/12 bg-white/6 px-4 py-2 text-xs text-white hover:bg-white/12 transition"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {FAMILIES.map((fam) => {
              const items = filteredByFamily[fam.id];
              if (!items || items.length === 0) return null;
              const masteredCount = items.filter((c) =>
                masteredSlugs.has(c.slug)
              ).length;

              return (
                <section key={fam.id} className="space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/8 pb-2.5">
                    <div className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 rounded-full shrink-0"
                        style={{
                          backgroundColor: fam.color,
                          boxShadow: `0 0 12px ${fam.color}`,
                        }}
                      />
                      <div>
                        <h3 className="font-editorial text-2xl text-white leading-none">
                          {fam.name}
                        </h3>
                        <p className="mt-1 text-xs text-slate-400">
                          {fam.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="font-mono-meta text-[11px] text-slate-400">
                        {masteredCount}/{items.length} entendidos
                      </span>
                      <button
                        onClick={() => onJumpToConstellation(fam.id)}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                      >
                        Ver en constelación ↗
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((c) => {
                      const mastered = masteredSlugs.has(c.slug);
                      const hasNote = Boolean(notesBySlug[c.slug]?.trim());
                      return (
                        <button
                          key={c.slug}
                          onClick={() => onSelectConcept(c.slug)}
                          className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1120]/85 p-4 text-left transition hover:border-white/25 hover:bg-[#10182d] hover:-translate-y-0.5"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-semibold text-[15px] text-white group-hover:text-amber-100 leading-snug">
                                {c.term}
                              </h4>
                              <div className="flex shrink-0 items-center gap-1">
                                {c.isPillar && (
                                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                                )}
                                {hasNote && (
                                  <StickyNote className="h-3.5 w-3.5 text-sky-300" />
                                )}
                                {mastered && (
                                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                )}
                              </div>
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-slate-400 line-clamp-3">
                              {c.short}
                            </p>
                          </div>

                          <div className="mt-3.5 flex items-center justify-between pt-2.5 border-t border-white/6 text-[10px] font-mono-meta text-slate-500">
                            <span>
                              {c.tier === 'core'
                                ? 'Puerta de entrada'
                                : 'Profundización'}
                            </span>
                            <span>
                              {c.sources.length}{' '}
                              {c.sources.length === 1 ? 'turra' : 'turras'} · 4
                              niveles →
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
