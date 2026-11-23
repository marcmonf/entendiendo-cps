import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Search, Sparkles, X } from 'lucide-react';
import { CONCEPTS, FAMILY_MAP, type Concept } from '../data/atlasData';

interface SearchModalProps {
  open: boolean;
  masteredSlugs: Set<string>;
  onClose: () => void;
  onSelectConcept: (slug: string) => void;
}

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export const SearchModal: React.FC<SearchModalProps> = ({
  open,
  masteredSlugs,
  onClose,
  onSelectConcept,
}) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  const results: Concept[] = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) {
      // Show essential pillars & gateway concepts first when empty
      return CONCEPTS.filter((c) => c.tier === 'core').slice(0, 14);
    }
    const scored = CONCEPTS.map((c) => {
      const fam = FAMILY_MAP[c.familyId];
      const termN = normalize(c.term);
      const aliasesN = normalize(c.aliases.join(' '));
      const shortN = normalize(c.short);
      const famN = normalize(`${fam.name} ${fam.themes.join(' ')}`);

      let score = 0;
      if (termN === q) score += 120;
      else if (termN.startsWith(q)) score += 90;
      else if (termN.includes(q)) score += 65;

      if (aliasesN.includes(q)) score += 50;
      if (famN.includes(q)) score += 25;
      if (shortN.includes(q)) score += 18;

      return { c, score };
    })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 18)
      .map((x) => x.c);

    return scored;
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(results.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === 'Enter' && results[activeIndex]) {
      e.preventDefault();
      onSelectConcept(results[activeIndex].slug);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/65 px-4 pt-[12vh] backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/14 bg-[#0b101d]/95 shadow-[0_30px_90px_rgba(0,0,0,0.85)] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <Search className="h-4.5 w-4.5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca un concepto, autor, alias o tema (ej. Cynefin, Personotecnia, IA, AACC)..."
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="rounded-full p-1 text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-block rounded-md border border-white/12 bg-white/5 px-1.5 py-0.5 font-mono-meta text-[10px] text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="custom-scroll max-h-[56vh] overflow-y-auto p-2">
          <p className="px-3 py-1.5 text-[10px] font-mono-meta uppercase tracking-widest text-slate-500">
            {query.trim()
              ? `${results.length} resultados encontrados`
              : 'Puertas de entrada recomendadas (94 conceptos en total)'}
          </p>

          {results.length === 0 ? (
            <div className="py-10 text-center text-sm text-slate-400">
              No hay coincidencias para «{query}». Prueba con Cynefin, estrategia,
              equipos o sesgo.
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((concept, idx) => {
                const fam = FAMILY_MAP[concept.familyId];
                const active = idx === activeIndex;
                const mastered = masteredSlugs.has(concept.slug);
                return (
                  <button
                    key={concept.slug}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => {
                      onSelectConcept(concept.slug);
                      onClose();
                    }}
                    className={`flex w-full items-start justify-between gap-3 rounded-2xl px-3.5 py-2.5 text-left transition ${
                      active ? 'bg-white/10' : 'hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: fam.color }}
                        />
                        <span className="truncate text-sm font-semibold text-white">
                          {concept.term}
                        </span>
                        {concept.isPillar && (
                          <Sparkles className="h-3 w-3 text-amber-300 shrink-0" />
                        )}
                        {mastered && (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        )}
                      </div>
                      <p className="mt-0.5 truncate text-xs text-slate-400">
                        {concept.short}
                      </p>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-mono-meta"
                      style={{
                        backgroundColor: `${fam.color}1a`,
                        color: fam.color,
                      }}
                    >
                      {fam.shortName}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
