import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  ALL_15_THEMES,
  CONCEPTS,
  FAMILIES,
  FIVE_ATTRACTORS,
  FOUR_PILLARS,
  GUIDED_ROUTES,
  type Attractor,
  type Concept,
  type Family,
  type GuidedRoute,
  type Pillar,
  type ThemeLink,
} from '../data/atlasData';
import { DEEP_DIVES, type ConceptDeepDive } from '../data/deepDives';
import {
  REAL_PROBLEMS_ES,
  TOUR_DESKTOP_ES,
  TOUR_MOBILE_ES,
  UI_ES,
} from './esStrings';
import {
  SUPPORTED_LANGUAGES,
  type LangCode,
  type LocalePack,
  type RealProblemItem,
  type TourStepCopy,
  type UIStrings,
} from './types';

const LANG_STORAGE_KEY = 'observatorio_cps_lang_v1';

interface LanguageContextValue {
  lang: LangCode;
  setLang: (next: LangCode) => void;
  isLoadingLang: boolean;
  t: UIStrings;
  fmt: (template: string, vars: Record<string, string | number>) => string;
  families: Family[];
  familyMap: Record<string, Family>;
  concepts: Concept[];
  conceptMap: Record<string, Concept>;
  deepDives: Record<string, ConceptDeepDive>;
  guidedRoutes: GuidedRoute[];
  fourPillars: Pillar[];
  fiveAttractors: Attractor[];
  all15Themes: ThemeLink[];
  realProblems: RealProblemItem[];
  desktopTourSteps: TourStepCopy[];
  mobileTourSteps: TourStepCopy[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): LangCode {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY) as LangCode | null;
    if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved && l.ready)) {
      return saved;
    }
    const navLang = (navigator.language || 'es').slice(0, 2).toLowerCase() as LangCode;
    if (SUPPORTED_LANGUAGES.some((l) => l.code === navLang && l.ready)) {
      return navLang;
    }
  } catch {
    // ignore
  }
  return 'es';
}

const localeCache = new Map<LangCode, LocalePack>();

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<LangCode>(() => detectInitialLang());
  const [pack, setPack] = useState<LocalePack | null>(null);
  const [isLoadingLang, setIsLoadingLang] = useState(false);

  const setLang = useCallback((next: LangCode) => {
    const opt = SUPPORTED_LANGUAGES.find((l) => l.code === next);
    if (!opt || !opt.ready) return;
    setLangState(next);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (lang === 'es') {
      setPack(null);
      setIsLoadingLang(false);
      return;
    }
    const cached = localeCache.get(lang);
    if (cached) {
      setPack(cached);
      setIsLoadingLang(false);
      return;
    }
    let cancelled = false;
    setIsLoadingLang(true);
    fetch(`./locales/${lang}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<LocalePack>;
      })
      .then((loaded) => {
        localeCache.set(lang, loaded);
        if (!cancelled) {
          setPack(loaded);
          setIsLoadingLang(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPack(null);
          setIsLoadingLang(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [lang]);

  const t: UIStrings = useMemo(
    () => (pack?.ui ? { ...UI_ES, ...pack.ui } : UI_ES),
    [pack]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.pageTitle;
  }, [lang, t.pageTitle]);

  const fmt = useCallback(
    (template: string, vars: Record<string, string | number>) => {
      let out = template;
      for (const [k, v] of Object.entries(vars)) {
        out = out.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
      return out;
    },
    []
  );

  const families = useMemo<Family[]>(() => {
    if (!pack?.families) return FAMILIES;
    return FAMILIES.map((f) => {
      const tr = pack.families[f.id];
      const translatedThemes = pack.themes
        ? f.themes.map((th) => pack.themes[th] || th)
        : f.themes;
      return tr ? { ...f, ...tr, themes: translatedThemes } : { ...f, themes: translatedThemes };
    });
  }, [pack]);

  const familyMap = useMemo<Record<string, Family>>(
    () => Object.fromEntries(families.map((f) => [f.id, f])),
    [families]
  );

  const concepts = useMemo<Concept[]>(() => {
    if (!pack?.concepts) return CONCEPTS;
    return CONCEPTS.map((c) => {
      const tr = pack.concepts[c.slug];
      if (!tr) return c;
      return {
        ...c,
        term: tr.term || c.term,
        short: tr.short || c.short,
        analogy: tr.analogy || c.analogy,
        howToApply: tr.howToApply || c.howToApply,
        antiPattern: tr.antiPattern || c.antiPattern,
        paragraphs: tr.paragraphs?.length ? tr.paragraphs : c.paragraphs,
        origin: tr.origin ?? c.origin,
        aliases: tr.aliases ?? c.aliases,
        domains: tr.domains !== undefined ? tr.domains : c.domains,
      };
    });
  }, [pack]);

  const conceptMap = useMemo<Record<string, Concept>>(
    () => Object.fromEntries(concepts.map((c) => [c.slug, c])),
    [concepts]
  );

  const deepDives = useMemo<Record<string, ConceptDeepDive>>(() => {
    if (!pack?.concepts) return DEEP_DIVES;
    const out: Record<string, ConceptDeepDive> = { ...DEEP_DIVES };
    for (const [slug, tr] of Object.entries(pack.concepts)) {
      if (tr.deepDive) out[slug] = tr.deepDive;
    }
    return out;
  }, [pack]);

  const guidedRoutes = useMemo<GuidedRoute[]>(() => {
    if (!pack?.routes) return GUIDED_ROUTES;
    return GUIDED_ROUTES.map((r) => {
      const tr = pack.routes[r.id];
      if (!tr) return r;
      return {
        ...r,
        title: tr.title || r.title,
        subtitle: tr.subtitle || r.subtitle,
        duration: tr.duration || r.duration,
        steps: r.steps.map((st) => ({
          ...st,
          note: tr.stepNotes?.[st.slug] || st.note,
        })),
      };
    });
  }, [pack]);

  const fourPillars = useMemo<Pillar[]>(() => {
    if (!pack?.pillars) return FOUR_PILLARS;
    return FOUR_PILLARS.map((p) => {
      const tr = pack.pillars[p.slug];
      return tr ? { ...p, ...tr } : p;
    });
  }, [pack]);

  const fiveAttractors = useMemo<Attractor[]>(() => {
    if (!pack?.attractors?.length) return FIVE_ATTRACTORS;
    return pack.attractors;
  }, [pack]);

  const all15Themes = useMemo<ThemeLink[]>(() => {
    if (!pack?.themes) return ALL_15_THEMES;
    return ALL_15_THEMES.map((th) => ({
      ...th,
      name: pack.themes[th.name] || th.name,
    }));
  }, [pack]);

  const realProblems = useMemo<RealProblemItem[]>(() => {
    if (!pack?.problems) return REAL_PROBLEMS_ES;
    return REAL_PROBLEMS_ES.map((p) => {
      const tr = pack.problems[p.id];
      return tr ? { ...p, ...tr } : p;
    });
  }, [pack]);

  const desktopTourSteps = useMemo<TourStepCopy[]>(
    () => (pack?.tourDesktop?.length ? pack.tourDesktop : TOUR_DESKTOP_ES),
    [pack]
  );

  const mobileTourSteps = useMemo<TourStepCopy[]>(
    () => (pack?.tourMobile?.length ? pack.tourMobile : TOUR_MOBILE_ES),
    [pack]
  );

  const value: LanguageContextValue = {
    lang,
    setLang,
    isLoadingLang,
    t,
    fmt,
    families,
    familyMap,
    concepts,
    conceptMap,
    deepDives,
    guidedRoutes,
    fourPillars,
    fiveAttractors,
    all15Themes,
    realProblems,
    desktopTourSteps,
    mobileTourSteps,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useI18n(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}
