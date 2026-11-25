import type { CynefinDomain } from '../data/atlasData';
import type { ConceptDeepDive } from '../data/deepDives';

export type LangCode = 'es' | 'en' | 'fr' | 'pt' | 'de' | 'ja' | 'zh';

export interface LanguageOption {
  code: LangCode;
  shortLabel: string;
  nativeName: string;
  ready: boolean;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'es', shortLabel: 'ES', nativeName: 'Español', ready: true },
  { code: 'en', shortLabel: 'EN', nativeName: 'English', ready: true },
  { code: 'fr', shortLabel: 'FR', nativeName: 'Français', ready: true },
  { code: 'pt', shortLabel: 'PT', nativeName: 'Português', ready: true },
  { code: 'de', shortLabel: 'DE', nativeName: 'Deutsch', ready: true },
  { code: 'ja', shortLabel: 'JA', nativeName: '日本語', ready: true },
  { code: 'zh', shortLabel: 'ZH', nativeName: '中文', ready: true },
];

export interface RealProblemItem {
  id: string;
  question: string;
  diagnosis: string;
  accent: string;
  slugs: string[];
}

export interface TourStepCopy {
  id: string;
  target?: string;
  title: string;
  description: string;
  tip?: string;
}

export interface UIStrings {
  pageTitle: string;
  brandTitle: string;
  brandSubtitle: string; // "{count} conceptos"
  navConstellation: string;
  navIndex: string;
  navMapShort: string;
  navSearchPlaceholder: string;
  navSearchButton: string;
  navYourProblem: string;
  navProblemShort: string;
  navRoutes: string;
  navRouteActive: string;
  navRouteShort: string;
  navProgressTooltip: string;
  navGuideTooltip: string;
  langComingSoon: string;

  // Canvas & Controls
  ringConstellations: string;
  ringGateway: string;
  ringDeepening: string;
  sunSubtitle: string;
  conceptsCount: string; // "{count} conceptos"
  understoodCount: string; // "{done}/{total} entendidos"
  zoomIn: string;
  zoomOut: string;
  centerView: string;
  expandAll: string;
  collapseAll: string;
  basedOnAttribution: string;
  suggestConcept: string;
  onboardingWhisperPrefix: string;
  onboardingWhisperStrong: string;
  onboardingWhisperMid: string;
  onboardingWhisperCta: string;
  hoverConstellation: string;
  hoverClickToToggle: string;
  hoverExpand: string;
  hoverCollapse: string;
  hoverConnections: string; // "{count} conexiones en el mapa · clic para profundizar"

  // Concept Drawer (4 levels)
  tierCore: string;
  tierDeep: string;
  pillarBadge: string;
  alsoCalled: string;
  copyLinkTooltip: string;
  copied: string;
  expandReadingTooltip: string;
  compactReadingTooltip: string;
  closePanel: string;
  routeStopCounter: string; // "Parada {current} / {total}"

  tabPlain: string;
  tabPractice: string;
  tabDeep: string;
  tabSources: string;

  oneSentenceTitle: string;
  analogyTitle: string;
  cynefinDomainsTitle: string;
  cynefinCpsBadge: string;
  connectsWithTitle: string; // "Conecta en la constelación con ({count})"
  ctaToPractice: string;

  howToApplyTitle: string;
  antiPatternTitle: string;
  glossarySynthesisTitle: string;
  originTitle: string;
  ctaToDeep: string;

  deepThesisLabel: string;
  deepReadingLabel: string;
  quoteAuthorPrefix: string; // "— Javier G. Recuenco, en"
  keyInsightsTitle: string;
  realExamplesTitle: string;
  reflectionQuestionsTitle: string;
  ctaToSources: string;

  sourcesTurrasTitle: string; // "Turras originales donde se desarrolla ({count})"
  sourcesOriginalSpanishNote: string;
  sourcesBooksTitle: string; // "Libros citados en estas turras ({count})"
  openInTurrero: string;

  notesHeader: string; // "Tus notas sobre «{term}»"
  notesSavedLocally: string;
  notesPlaceholder: string;
  markUnderstood: string;
  understood: string;
  noteSingular: string;
  notesLabel: string;
  prevStop: string;
  nextStop: string;

  // Core Overview Drawer
  coreSunBadge: string;
  coreIntroLead: string;
  coreIntroHighlight: string;
  coreIntroMid: string;
  coreIntroArt: string;
  coreIntroEnd: string;
  coreStartRouteCta: string;
  coreFourPillarsTitle: string;
  coreFiveAttractorsTitle: string;
  coreViewConcept: string;
  coreFifteenThemesTitle: string;
  coreFifteenThemesHelp: string;
  coreCreditPre: string;
  coreCreditPost: string;

  // Index View
  indexEyebrow: string;
  indexTitle: string;
  indexSubtitle: string;
  indexCountBadge: string; // "{visible} de {total} conceptos"
  indexQuickStartTitle: string;
  indexQuickStartSub: string;
  indexQuickProblemTitle: string;
  indexQuickProblemSub: string;
  indexQuickPillarsTitle: string;
  indexQuickPillarsSub: string;
  indexSearchPlaceholder: string;
  filterAll: string;
  filterCore: string;
  filterPillars: string;
  filterMastered: string;
  filterNotes: string;
  filterThemes: string;
  allFamiliesPill: string;
  themesSectionHelp: string;
  noFilterResults: string;
  clearFilters: string;
  viewOnMap: string;
  turraSingular: string;
  turraPlural: string;
  fourLevelsTag: string;

  // Modals (Search, Routes, Problems, Progress, Tour)
  searchModalPlaceholder: string;
  searchResultsFound: string; // "{count} resultados encontrados"
  searchRecommendedHeader: string; // "Puertas de entrada recomendadas ({count} conceptos en total)"
  searchNoMatches: string; // "No hay coincidencias para «{query}»."

  routesEyebrow: string;
  routesTitle: string;
  routesSubtitle: string;
  routeActiveBadge: string;
  routeExitFree: string;

  problemsEyebrow: string;
  problemsTitle: string;
  problemsSubtitle: string;

  progressEyebrow: string;
  progressTitle: string; // "{count} de {total} conceptos entendidos"
  progressNotesSavedSingular: string;
  progressNotesSavedPlural: string;
  progressSubtitle: string;
  progressGlobalLabel: string;
  progressExportMd: string;
  progressReset: string;

  tourBadge: string; // "Guía rápida · {current} / {total}"
  tourSkip: string;
  tourBack: string;
  tourNext: string;
  tourFinish: string;

  // Markdown export headers
  mdTitle: string;
  mdDateLabel: string;
  mdMasteredLabel: string;
  mdNotesLabel: string;
  mdArchiveLabel: string;
  mdMyNoteLabel: string;
  mdSourcesLabel: string;
  mdEmptyMessage: string;
}

export interface TranslatedFamily {
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
}

export interface TranslatedConcept {
  term: string;
  short: string;
  analogy: string;
  howToApply: string;
  antiPattern: string;
  paragraphs: string[];
  origin: string;
  aliases: string[];
  domains?: CynefinDomain[] | null;
  deepDive?: ConceptDeepDive;
}

export interface TranslatedRoute {
  title: string;
  subtitle: string;
  duration: string;
  stepNotes: Record<string, string>;
}

export interface TranslatedPillar {
  name: string;
  desc: string;
}

export interface TranslatedAttractor {
  name: string;
  detail: string;
}

export interface LocalePack {
  lang: LangCode;
  ui: UIStrings;
  families: Record<string, TranslatedFamily>;
  concepts: Record<string, TranslatedConcept>;
  routes: Record<string, TranslatedRoute>;
  pillars: Record<string, TranslatedPillar>;
  attractors: TranslatedAttractor[];
  themes: Record<string, string>; // es theme name -> translated theme name
  problems: Record<string, { question: string; diagnosis: string }>;
  tourDesktop: TourStepCopy[];
  tourMobile: TourStepCopy[];
}
