import type { RealProblemItem, TourStepCopy, UIStrings } from './types';

export const UI_ES: UIStrings = {
  pageTitle: 'Observatorio CPS · Atlas Conceptual de El Turrero Post',
  brandTitle: 'Observatorio CPS',
  brandSubtitle: 'El Turrero Post · {count} conceptos',
  navConstellation: 'Constelación',
  navIndex: 'Índice',
  navMapShort: 'Mapa',
  navSearchPlaceholder: 'Buscar concepto, autor o tema…',
  navSearchButton: 'Buscar',
  navYourProblem: '¿Tu problema?',
  navProblemShort: 'Problema',
  navRoutes: 'Rutas',
  navRouteActive: 'Ruta activa',
  navRouteShort: 'Ruta',
  navProgressTooltip: 'Tu progreso y notas exportables',
  navGuideTooltip: 'Ver guía rápida de navegación',
  langComingSoon: 'Próximamente',

  ringConstellations: '9 CONSTELACIONES',
  ringGateway: 'PUERTA DE ENTRADA',
  ringDeepening: 'PROFUNDIZACIÓN',
  sunSubtitle: '4 PILARES · 5 ATRACTORES',
  conceptsCount: '{count} conceptos',
  understoodCount: '{done}/{total} entendidos',
  zoomIn: 'Acercar',
  zoomOut: 'Alejar',
  centerView: 'Centrar vista',
  expandAll: 'Desplegar todo',
  collapseAll: 'Contraer todo',
  basedOnAttribution: 'Basado en El Turrero Post · @Recuenco',
  suggestConcept: '¿Falta un concepto? Sugiérelo',
  onboardingWhisperPrefix: 'Haz clic en una',
  onboardingWhisperStrong: 'constelación',
  onboardingWhisperMid: 'para abrir sus ramas · o',
  onboardingWhisperCta: 'empieza la ruta guiada',
  hoverConstellation: 'Constelación',
  hoverClickToToggle: 'Clic para {action} sus ramas',
  hoverExpand: 'desplegar',
  hoverCollapse: 'contraer',
  hoverConnections: '{count} conexiones en el mapa · clic para profundizar',

  tierCore: 'Puerta de entrada',
  tierDeep: 'Profundización',
  pillarBadge: 'Pilar CPS',
  alsoCalled: 'También llamado:',
  copyLinkTooltip: 'Copiar enlace directo a este concepto',
  copied: 'Copiado',
  expandReadingTooltip: 'Ampliar panel de lectura',
  compactReadingTooltip: 'Vista compacta',
  closePanel: 'Cerrar panel',
  routeStopCounter: 'Parada {current} / {total}',

  tabPlain: '1 · Llano',
  tabPractice: '2 · Práctica',
  tabDeep: '3 · A fondo',
  tabSources: '4 · Fuentes',

  oneSentenceTitle: 'La idea en una frase',
  analogyTitle: 'Imagínalo así (analogía cotidiana)',
  cynefinDomainsTitle: 'Los 5 dominios de Cynefin',
  cynefinCpsBadge: 'Terreno CPS',
  connectsWithTitle: 'Conecta en la constelación con ({count})',
  ctaToPractice: 'Nivel 2 · Cómo aplicarlo y trampas típicas',

  howToApplyTitle: 'Cómo usarlo en tu día a día',
  antiPatternTitle: 'La trampa típica (anti-patrón)',
  glossarySynthesisTitle: 'Síntesis del glosario · El Turrero Post',
  originTitle: 'De dónde viene',
  ctaToDeep: 'Nivel 3 · Profundizando (lectura a fondo de las turras)',

  deepThesisLabel: 'Tesis de fondo en las turras',
  deepReadingLabel: 'Lectura en profundidad',
  quoteAuthorPrefix: '— Javier G. Recuenco, en',
  keyInsightsTitle: 'Ideas fuerza de los hilos',
  realExamplesTitle: 'Casos y referencias reales de las turras',
  reflectionQuestionsTitle: 'Preguntas diagnósticas para tu terreno',
  ctaToSources: 'Nivel 4 · Ir a las turras originales y libros citados',

  sourcesTurrasTitle: 'Turras originales donde se desarrolla ({count})',
  sourcesOriginalSpanishNote: '',
  sourcesBooksTitle: 'Libros citados en estas turras ({count})',
  openInTurrero: 'Abrir ficha en El Turrero Post',

  notesHeader: 'Tus notas sobre «{term}»',
  notesSavedLocally: 'Guardado en este navegador',
  notesPlaceholder:
    'Anota cómo aplica esto en tu proyecto, una idea clave o una duda para revisar luego...',
  markUnderstood: 'Marcar entendido',
  understood: 'Entendido',
  noteSingular: 'Nota',
  notesLabel: 'Notas',
  prevStop: 'Parada anterior',
  nextStop: 'Siguiente',

  coreSunBadge: 'El Sol del Observatorio',
  coreIntroLead:
    'Para Javier G. Recuenco, un problema complejo no es simplemente un problema difícil: es aquel ante el que',
  coreIntroHighlight: 'los grandes expertos se declaran incompetentes',
  coreIntroMid: 'porque no existe un manual previo. El CPS es el',
  coreIntroArt: 'cienciarte',
  coreIntroEnd: 'de navegar esa niebla combinando cuatro pilares transversales.',
  coreStartRouteCta: 'Iniciar ruta guiada: «Empieza aquí en CPS» (8 paradas)',
  coreFourPillarsTitle: 'Los 4 Pilares del CPS',
  coreFiveAttractorsTitle: 'En el centro: los 5 Atractores',
  coreViewConcept: 'Ver concepto →',
  coreFifteenThemesTitle: 'Las 15 temáticas de El Turrero Post',
  coreFifteenThemesHelp:
    'Pulsa cualquier temática para desplegar su constelación en el mapa.',
  coreCreditPre:
    'Basado en el archivo público (263 turras), glosario (90 conceptos) y biblioteca (324 libros) de',
  coreCreditPost:
    ', recopilado por la Comunidad CPS a partir de las turras de Javier G. Recuenco.',

  indexEyebrow: 'El Turrero Post · 9 Constelaciones · 4 Niveles',
  indexTitle: 'Atlas de Complex Problem Solving',
  indexSubtitle:
    'Los 121 conceptos de Javier G. Recuenco explicados en llano, con práctica, lectura a fondo de las 263 turras y libros citados.',
  indexCountBadge: '{visible} de {total} conceptos',
  indexQuickStartTitle: 'Empieza aquí',
  indexQuickStartSub: 'Ruta de 8 paradas',
  indexQuickProblemTitle: '¿Tu problema?',
  indexQuickProblemSub: '8 situaciones reales',
  indexQuickPillarsTitle: '4 Pilares y 5 Atractores',
  indexQuickPillarsSub: 'El núcleo del CPS',
  indexSearchPlaceholder: 'Buscar concepto, alias o tema...',
  filterAll: 'Todos',
  filterCore: 'Puerta de entrada',
  filterPillars: '4 Pilares',
  filterMastered: 'Entendidos',
  filterNotes: 'Con notas',
  filterThemes: '15 Temáticas',
  allFamiliesPill: 'Todas (9)',
  themesSectionHelp:
    'Filtrar por las 15 temáticas oficiales de El Turrero Post',
  noFilterResults: 'No hay conceptos que coincidan con ese filtro.',
  clearFilters: 'Limpiar filtros',
  viewOnMap: 'Ver en mapa ↗',
  turraSingular: 'turra',
  turraPlural: 'turras',
  fourLevelsTag: '4 niveles →',

  searchModalPlaceholder:
    'Busca un concepto, autor, alias o tema (ej. Cynefin, Personotecnia, IA, AACC)...',
  searchResultsFound: '{count} resultados encontrados',
  searchRecommendedHeader:
    'Puertas de entrada recomendadas ({count} conceptos en total)',
  searchNoMatches: 'No hay coincidencias para «{query}».',

  routesEyebrow: 'Recorridos Guiados',
  routesTitle: 'Explora el universo CPS paso a paso',
  routesSubtitle:
    'Cada ruta ilumina una trayectoria numerada sobre la constelación y te guía de lo más sencillo a lo más profundo.',
  routeActiveBadge: 'Activa',
  routeExitFree: 'Salir de la ruta activa y explorar libremente',

  problemsEyebrow: 'Entrada práctica · Diagnóstico rápido',
  problemsTitle: '¿Qué problema tienes hoy sobre la mesa?',
  problemsSubtitle:
    'Elige la situación que más se parece a lo que estás viviendo y salta directamente a las herramientas de CPS que la iluminan.',

  progressEyebrow: 'Tu mapa de aprendizaje',
  progressTitle: '{count} de {total} conceptos entendidos',
  progressNotesSavedSingular: '1 nota personal guardada',
  progressNotesSavedPlural: '{count} notas personales guardadas',
  progressSubtitle:
    'Tu progreso y notas se guardan en este navegador y puedes exportarlos a Markdown (Obsidian/Notion).',
  progressGlobalLabel: 'Dominio global del universo CPS',
  progressExportMd: 'Exportar notas (.md)',
  progressReset: 'Reiniciar progreso',

  tourBadge: 'Guía rápida · {current} / {total}',
  tourSkip: 'Saltar',
  tourBack: 'Atrás',
  tourNext: 'Siguiente',
  tourFinish: '¡A explorar!',

  mdTitle: 'Observatorio CPS · Mis notas y progreso',
  mdDateLabel: 'Fecha de exportación',
  mdMasteredLabel: 'Conceptos entendidos',
  mdNotesLabel: 'Notas personales',
  mdArchiveLabel: 'Archivo original',
  mdMyNoteLabel: 'Mi nota',
  mdSourcesLabel: 'Fuentes',
  mdEmptyMessage:
    'Todavía no has marcado conceptos ni escrito notas. Marca conceptos como «Entendido» o añade tus propias notas y vuelve a exportar.',
};

export const REAL_PROBLEMS_ES: RealProblemItem[] = [
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
    question:
      '«Nuestra estrategia suena preciosa en PowerPoint, pero no resuelve nada»',
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
    question:
      '«Ponemos KPIs y bonus, pero la gente hace justo lo contrario de lo esperado»',
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
    question:
      '«Todo el mundo sabe que algo va mal, pero nadie lo dice en la reunión»',
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
    question:
      '«No tenemos datos fiables y nos da vértigo decidir sin certezas»',
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
    question:
      '«Invertimos más en marketing y datos, pero los clientes nos ignoran»',
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
    question:
      '«Siento que pienso distinto (o lidero talento atípico) y el sistema ahoga»',
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

export const TOUR_DESKTOP_ES: TourStepCopy[] = [
  {
    id: 'welcome',
    title: 'Bienvenido al Observatorio CPS',
    description:
      'Aquí tienes 121 conceptos de Complex Problem Solving organizados en 9 constelaciones y 4 niveles de profundidad (de lo más sencillo a la lectura de las 263 turras originales). Haz clic en cualquier constelación para desplegar sus ramas, o en el Sol central para ver los 4 Pilares y los 5 Atractores.',
    tip: 'Arrastra el fondo para moverte libremente por el cielo.',
  },
  {
    id: 'view-switcher',
    target: 'view-switcher',
    title: 'Cambia entre Mapa e Índice',
    description:
      'Alterna cuando quieras entre la vista visual de Constelación y la vista Índice en tarjetas filtrables por las 15 temáticas de El Turrero Post.',
    tip: 'En móvil o para buscar rápido por tema, la vista Índice es comodísima.',
  },
  {
    id: 'search',
    target: 'search',
    title: 'Buscador instantáneo (⌘K)',
    description:
      'Introduce aquí cualquier concepto, alias, autor o palabra clave (por ejemplo «Cynefin», «Personotecnia» o «AACC») y el mapa volará directamente hasta esa estrella.',
    tip: 'En ordenador puedes abrirlo en cualquier momento pulsando ⌘K o Ctrl+K.',
  },
  {
    id: 'guides',
    target: 'guides',
    title: '¿Tu problema? y Rutas guiadas',
    description:
      '¿No sabes por dónde empezar? En «¿Tu problema?» eliges una situación real (equipos, IA, estrategia, incentivos) y te lleva a las herramientas exactas. En «Rutas» sigues recorridos numerados paso a paso.',
    tip: 'Cada concepto tiene 4 pestañas: Llano → Práctica → A fondo → Fuentes.',
  },
  {
    id: 'progress',
    target: 'progress',
    title: 'Tu progreso y notas personales',
    description:
      'Marca conceptos como «Entendido» y escribe tus propias notas dentro de cada ficha. Aquí verás tu avance por constelación y podrás exportar todo a Markdown para Obsidian o Notion.',
    tip: 'Todo se guarda automáticamente en tu navegador, sin cuentas ni registros.',
  },
  {
    id: 'controls',
    target: 'controls',
    title: 'Zoom, encuadre y desplegar todo',
    description:
      'Desde estos controles puedes acercar (+), alejar (−), centrar la vista o desplegar las 121 estrellas a la vez con un solo clic.',
    tip: 'También puedes hacer zoom con la rueda del ratón o pellizcando con dos dedos en móvil y tablet.',
  },
];

export const TOUR_MOBILE_ES: TourStepCopy[] = [
  {
    id: 'm-welcome',
    title: 'Bienvenido al Observatorio CPS',
    description:
      'Tienes 121 conceptos de Complex Problem Solving de Javier G. Recuenco organizados en 9 constelaciones. Toca cualquier tarjeta para abrir sus 4 niveles: En llano, Práctica, A fondo (263 turras) y Fuentes.',
    tip: 'Puedes empezar por la ruta guiada «Empieza aquí» o filtrar por familia.',
  },
  {
    id: 'm-nav',
    title: 'Navegación rápida abajo',
    description:
      'En la barra inferior puedes saltar en un toque entre el Índice, el Mapa de constelaciones interactivo, las 5 Rutas guiadas paso a paso y «¿Tu problema?» para buscar por situaciones reales.',
    tip: 'En la vista Mapa puedes arrastrar con un dedo y hacer zoom pellizcando con dos dedos.',
  },
  {
    id: 'm-search-notes',
    title: 'Buscador, progreso y notas',
    description:
      'Arriba tienes la lupa para buscar cualquier término al instante y tu contador de progreso. Dentro de cada ficha puedes marcar «Entendido», guardar tus notas y copiar el enlace directo.',
    tip: 'Puedes repetir esta guía cuando quieras tocando el icono ? arriba.',
  },
];
