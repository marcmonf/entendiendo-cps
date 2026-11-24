// Generado a partir del archivo público de El Turrero Post (https://turrero.vercel.app/)
// Contiene 121 conceptos organizados en 9 constelaciones + 5 rutas guiadas (V2: barrido completo de 263 turras).

export interface ConceptSource {
  threadId: string;
  title: string;
  url: string;
}

export interface ConceptBook {
  title: string;
  author: string;
  url: string;
}

export interface CynefinDomain {
  name: string;
  text: string;
}

export interface Concept {
  slug: string;
  term: string;
  familyId: string;
  tier: 'core' | 'deep';
  short: string;
  analogy: string;
  howToApply: string;
  antiPattern: string;
  paragraphs: string[];
  origin: string;
  aliases: string[];
  related: string[];
  sources: ConceptSource[];
  books: ConceptBook[];
  domains: CynefinDomain[] | null;
  glossaryUrl: string;
  isPillar: boolean;
}

export interface Family {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
  color: string;
  glow: string;
  themes: string[];
  angleDeg: number;
}

export interface RouteStep {
  slug: string;
  note: string;
}

export interface GuidedRoute {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  accent: string;
  steps: RouteStep[];
}

export interface Pillar {
  slug: string;
  name: string;
  desc: string;
  color: string;
}

export interface Attractor {
  name: string;
  detail: string;
}

export interface ThemeLink {
  name: string;
  url: string;
  familyId: string;
}

export const FAMILIES: Family[] = [
  {
    "id": "oficio",
    "name": "El Oficio CPS",
    "shortName": "Oficio CPS",
    "subtitle": "Cómo piensa y trabaja un solucionador",
    "description": "El núcleo metodológico y artesanal de la Resolución de Problemas Complejos: ni fórmula rígida ni intuición vacía, sino cienciarte, diagnóstico honesto y orquestación de talento.",
    "color": "#F59E0B",
    "glow": "rgba(245, 158, 11, 0.38)",
    "themes": [
      "Método CPS",
      "Reflexiones personales"
    ],
    "angleDeg": -90
  },
  {
    "id": "sistemas",
    "name": "Sistemas y Sensemaking",
    "shortName": "Sistemas",
    "subtitle": "Leer realidades vivas sin mutilarlas",
    "description": "Marcos de las ciencias de la complejidad para entender por qué un sistema vivo no se arregla como un motor: Cynefin, emergencia, autopoiesis y dar sentido antes de actuar.",
    "color": "#06B6D4",
    "glow": "rgba(6, 182, 212, 0.38)",
    "themes": [
      "Sistemas complejos y sensemaking"
    ],
    "angleDeg": -50
  },
  {
    "id": "incertidumbre",
    "name": "Incertidumbre y Contexto",
    "shortName": "Incertidumbre",
    "subtitle": "Navegar la niebla con criterio",
    "description": "Cuando las reglas cambian sobre la marcha y el contexto lo decide todo: procesos de alta variabilidad, hormesis, elefantes negros y la incomodidad fértil de no tener certezas.",
    "color": "#818CF8",
    "glow": "rgba(129, 140, 248, 0.38)",
    "themes": [
      "Sistemas complejos y sensemaking",
      "Desarrollo personal"
    ],
    "angleDeg": -10
  },
  {
    "id": "estrategia",
    "name": "Estrategia y Metajuego",
    "shortName": "Estrategia",
    "subtitle": "Resolver problemas y anticipar el juego",
    "description": "Si no resuelve el problema, no es estrategia. Propuestas de valor que caducan, cinco atractores de fondo, pasos laterales y leer el metajuego antes que el rival.",
    "color": "#10B981",
    "glow": "rgba(16, 185, 129, 0.38)",
    "themes": [
      "Estrategia"
    ],
    "angleDeg": 30
  },
  {
    "id": "empresas",
    "name": "Empresas, Incentivos y Capital",
    "shortName": "Empresas",
    "subtitle": "Dinero, poder y trampas corporativas",
    "description": "Cómo se comportan realmente las organizaciones cuando hay deuda, bonus, consultoras y egos en juego: arquitectura de incentivos, skin in the game y huevos de serpiente.",
    "color": "#F97316",
    "glow": "rgba(249, 115, 22, 0.38)",
    "themes": [
      "Organizaciones e incentivos",
      "Finanzas e inversión"
    ],
    "angleDeg": 70
  },
  {
    "id": "factorx",
    "name": "Factor X, Equipos y Personotecnia",
    "shortName": "Factor X",
    "subtitle": "Conducta humana y relevancia a escala",
    "description": "Las personas no son piezas de Excel. Desde evitar equipos de estrellas disfuncionales hasta tratar a cada cliente como único a escala sin caer en el spam algorítmico.",
    "color": "#EC4899",
    "glow": "rgba(236, 72, 153, 0.38)",
    "themes": [
      "Equipos y liderazgo",
      "Personotecnia",
      "Marketing y publicidad"
    ],
    "angleDeg": 110
  },
  {
    "id": "mente",
    "name": "Psicología, Sesgos y AACC",
    "shortName": "Mente y AACC",
    "subtitle": "Sesgos, neurodivergencia y aprendizaje",
    "description": "Cómo procesamos la verdad incómoda, por qué nadie cambia por convencimiento puro y el papel decisivo de las altas capacidades, la neurodivergencia y la educación.",
    "color": "#A855F7",
    "glow": "rgba(168, 85, 247, 0.38)",
    "themes": [
      "Psicología y decisiones",
      "Educación y altas capacidades",
      "Desarrollo personal"
    ],
    "angleDeg": 150
  },
  {
    "id": "sociedad",
    "name": "Sociedad, Relatos y Tribus",
    "shortName": "Sociedad",
    "subtitle": "Cultura, humo y espíritu de la época",
    "description": "Diagnóstico sin anestesia de las dinámicas colectivas: idealismo desconectado de la realidad, pantomimas compartidas, rebaños tribales y el pulso del zeitgeist.",
    "color": "#F43F5E",
    "glow": "rgba(244, 63, 94, 0.38)",
    "themes": [
      "Sociedad y política"
    ],
    "angleDeg": 190
  },
  {
    "id": "tecnologia",
    "name": "IA, Tecnología y Cultura",
    "shortName": "IA y Cultura",
    "subtitle": "Megatendencias, IA y metáforas lúdicas",
    "description": "Dónde encaja la IA en el CPS real, por qué lo humano se vuelve un lujo escaso y cómo videojuegos, cómics y ficción sirven de laboratorio mental para pensar mejor.",
    "color": "#38BDF8",
    "glow": "rgba(56, 189, 248, 0.38)",
    "themes": [
      "IA y tecnología",
      "Cómic, cine y videojuegos"
    ],
    "angleDeg": 230
  }
];

export const CONCEPTS: Concept[] = [
  {
    "slug": "arquitectura-de-incentivos",
    "term": "Arquitectura de incentivos",
    "familyId": "empresas",
    "tier": "core",
    "short": "Conjunto de premios y castigos, explícitos o implícitos, que moldea lo que hacen las personas de una organización.",
    "analogy": "La pendiente real del suelo de una habitación: da igual hacia dónde pintes las flechas en la pared, las canicas rodarán hacia donde caiga el suelo.",
    "howToApply": "Antes de pedir un cambio cultural con un discurso bonito, revisa qué se premia en los bonus, ascensos y palmaditas del lunes.",
    "antiPattern": "Esperar colaboración transversal mientras evalúas y pagas exclusivamente por objetivos individuales de cada silo.",
    "paragraphs": [
      "Según Recuenco, una arquitectura de incentivos sirve para una cosa: modificar el comportamiento de un individuo o de un colectivo. Conductas económicas que parecen absurdas se vuelven lógicas cuando descubres los incentivos que hay debajo. Le dedicó una trilogía, donde avisa de que diseñar incentivos corporativos es «como subir al Everest sin oxígeno», porque mezcla la complejidad de la organización con la de la motivación humana."
    ],
    "origin": "",
    "aliases": [
      "arquitectura de incentivos",
      "arquitecturas de incentivos",
      "arquitecturas dinámicas de incentivos",
      "incentivo",
      "incentivos"
    ],
    "related": [
      "business-acumen",
      "efecto-cobra",
      "emergencia",
      "factor-x",
      "falacia-de-mcnamara",
      "huevos-de-serpiente",
      "incentivo-perverso",
      "metaincentivos",
      "private-equity",
      "procesos-de-alta-variabilidad",
      "skin-in-the-game"
    ],
    "sources": [
      {
        "threadId": "1662345754642378753",
        "title": "Revelada la tercera parte de la trilogía sobre arquitectura de incentivos y modificación de comportamiento",
        "url": "https://turrero.vercel.app/turra/1662345754642378753"
      },
      {
        "threadId": "1357937382318886913",
        "title": "Si usted está ideologizado, no tiene por qué sufrir como yo y puede hacerme unfollow tranquilamente",
        "url": "https://turrero.vercel.app/turra/1357937382318886913"
      },
      {
        "threadId": "1654727164086960130",
        "title": "Continúa la trilogía sobre incentivos: impacto en la dinámica corporativa",
        "url": "https://turrero.vercel.app/turra/1654727164086960130"
      }
    ],
    "books": [
      {
        "title": "Counselling for Toads: A Psychological Adventure",
        "author": "Robert De Board",
        "url": "https://www.goodreads.com/book/show/548887.Counselling_for_Toads"
      },
      {
        "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        "author": "James Clear",
        "url": "https://www.goodreads.com/book/show/40121378-atomic-habits"
      },
      {
        "title": "Don't Shoot the Dog!: The New Art of Teaching and Training",
        "author": "Karen Pryor",
        "url": "https://www.goodreads.com/book/show/31052.Don_t_Shoot_the_Dog_"
      },
      {
        "title": "Persuasive Technology: Using Computers to Change What We Think and Do",
        "author": "B.J. Fogg",
        "url": "https://www.goodreads.com/book/show/344733.Persuasive_Technology"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#arquitectura-de-incentivos",
    "isPillar": false
  },
  {
    "slug": "decision-makers",
    "term": "Decision makers",
    "familyId": "empresas",
    "tier": "core",
    "short": "Quienes de verdad toman las decisiones en una empresa, tengan o no el cargo que lo aparenta.",
    "analogy": "Quien tiene de verdad las llaves del coche, aunque en la foto oficial aparezca sentado en el asiento de atrás.",
    "howToApply": "Mapea quién tiene poder de veto real, quién controla el presupuesto y quién influye de verdad en la decisión antes de presentar una propuesta.",
    "antiPattern": "Invertir meses en convencer a un mando entusiasta que en realidad no puede firmar ni mover a quienes sí deciden.",
    "paragraphs": [
      "Recuenco insiste en que el CPS es una disciplina de CEOs y decision makers: no se puede hacer desde la sombra, sino alineado con quien decide y con los recursos necesarios. A veces el acceso llega por el middle management, que conoce mejor el pulso de la compañía. Uno de sus diagnósticos habituales es la distancia entre los decision makers y los tecnólogos, que frena la transformación real."
    ],
    "origin": "",
    "aliases": [
      "decision makers",
      "decision maker"
    ],
    "related": [
      "ecosistemas-tecnologicos",
      "estrategia",
      "metaincentivos"
    ],
    "sources": [
      {
        "threadId": "1738462543344005507",
        "title": "Metaincentivos y decisiones en corporaciones (sobre cómo hablar al board)",
        "url": "https://turrero.vercel.app/turra/1738462543344005507"
      },
      {
        "threadId": "1639529423274913794",
        "title": "El movimiento ludita y su resistencia al cambio en la Revolución Industrial",
        "url": "https://turrero.vercel.app/turra/1639529423274913794"
      },
      {
        "threadId": "1847550414226411917",
        "title": "La distancia entre tecnología y líderes empresariales y la necesidad de puentes para una transformación real",
        "url": "https://turrero.vercel.app/turra/1847550414226411917"
      }
    ],
    "books": [
      {
        "title": "Board Talk: 18 crucial conversations that count inside and outside the boardroom",
        "author": "Kathryn Bishop",
        "url": "https://www.goodreads.com/book/show/125396725-board-talk"
      },
      {
        "title": "Crucial Conversations: Tools for Talking When Stakes are High",
        "author": "Kerry Patterson",
        "url": "https://www.goodreads.com/book/show/15014.Crucial_Conversations"
      },
      {
        "title": "Bullshit Jobs: A Theory",
        "author": "David Graeber",
        "url": "https://www.goodreads.com/book/show/34466958-bullshit-jobs"
      },
      {
        "title": "The End of Jobs: Money, Meaning and Freedom Without the 9-to-5",
        "author": "Taylor Pearson",
        "url": "https://www.goodreads.com/book/show/25827122-the-end-of-jobs"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#decision-makers",
    "isPillar": false
  },
  {
    "slug": "falacia-de-mcnamara",
    "term": "Falacia de McNamara",
    "familyId": "empresas",
    "tier": "core",
    "short": "Decidir fijándose solo en lo que se puede medir con facilidad y asumir que lo que no cabe en el indicador no existe o no importa.",
    "analogy": "Juzgar la salud de un matrimonio contando únicamente cuántas veces se mandan WhatsApps al día porque el cariño no cabe en una hoja de cálculo.",
    "howToApply": "Combina métricas duras con observación cualitativa directa sobre el terreno; pregunta siempre «qué es vital aquí que NO estamos midiendo».",
    "antiPattern": "Gestionar exclusivamente por dashboards y optimizar indicadores fáciles mientras se pudre lo verdaderamente importante.",
    "paragraphs": [
      "Bautizada por Daniel Yankelovich a partir de la gestión de Robert McNamara en Vietnam: medir bajas enemigas era fácil; medir la voluntad política y el contexto cultural era difícil, así que se ignoró lo decisivo.",
      "En el mundo corporativo aparece cada día disfrazada de cuadros de mando impecables: KPIs verdes mientras la empresa se desangra por la cultura, la pérdida de confianza del cliente o la caducidad de su propuesta de valor."
    ],
    "origin": "Daniel Yankelovich (1972), muy citada en las turras sobre métricas, Excel y cultura luterana.",
    "aliases": [
      "Falacia cuantitativa",
      "Tiranía del KPI"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "contexto",
      "cultura-luterana",
      "efecto-cobra",
      "test-astudillo",
      "vaca-esferica"
    ],
    "sources": [
      {
        "threadId": "1621752572087345152",
        "title": "La falacia de McNamara: un peligro para la toma de decisiones en el Corporate Game",
        "url": "https://turrero.vercel.app/turra/1621752572087345152"
      }
    ],
    "books": [
      {
        "title": "Games People Play",
        "author": "Eric Berne",
        "url": "https://www.goodreads.com/book/show/49176.Games_People_Play"
      },
      {
        "title": "Skin in the Game: The Hidden Asymmetries in Daily Life",
        "author": "Nassim Nicholas Taleb",
        "url": "https://www.goodreads.com/book/show/36064445-skin-in-the-game"
      },
      {
        "title": "Decoding Leadership Bullshit",
        "author": "Hal O&apos;Ween",
        "url": "https://www.goodreads.com/book/show/21269468-decoding-leadership-bullshit"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1621752572087345152",
    "isPillar": false
  },
  {
    "slug": "incentivo-perverso",
    "term": "Incentivo perverso",
    "familyId": "empresas",
    "tier": "core",
    "short": "Incentivo que empuja a hacer justo lo contrario de lo que buscaba quien lo diseñó.",
    "analogy": "Pagar por cada cobra muerta para acabar con una plaga y descubrir que la gente empieza a criar cobras en casa para cobrar más.",
    "howToApply": "Antes de lanzar cualquier bono o KPI, juega diez minutos a «si yo quisiera hackear esta regla para cobrar fácil, ¿qué haría?».",
    "antiPattern": "Sorprenderte de la «falta de ética» de la gente cuando en realidad está haciendo exactamente lo que tu sistema de premios le paga por hacer.",
    "paragraphs": [
      "Recuenco lo asocia al efecto cobra, las consecuencias imprevistas de un incentivo. En la empresa pone ejemplos concretos: premiar solo los ingresos empuja a engañar a los clientes, y premiar la velocidad baja la calidad. Avisa de que toda solución parcial genera problemas no previstos e incentivos perversos, y los ve también en los consejos de administración, junto a los huevos de serpiente."
    ],
    "origin": "",
    "aliases": [
      "incentivo perverso",
      "incentivos perversos",
      "efecto cobra"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "consultoria",
      "efecto-cobra",
      "enshittification",
      "huevos-de-serpiente"
    ],
    "sources": [
      {
        "threadId": "1654727164086960130",
        "title": "Continúa la trilogía sobre incentivos: impacto en la dinámica corporativa",
        "url": "https://turrero.vercel.app/turra/1654727164086960130"
      }
    ],
    "books": [
      {
        "title": "Skin in the Game: The Hidden Asymmetries in Daily Life",
        "author": "Nassim Nicholas Taleb",
        "url": "https://www.goodreads.com/book/show/36064445-skin-in-the-game"
      },
      {
        "title": "Punished by Rewards: The Trouble with Gold Stars, Incentive Plans, A's, Praise and Other Bribes",
        "author": "Alfie Kohn",
        "url": "https://www.goodreads.com/book/show/541132.Punished_by_Rewards"
      },
      {
        "title": "Predictably Irrational: The Hidden Forces That Shape Our Decisions",
        "author": "Dan Ariely",
        "url": "https://www.goodreads.com/book/show/1713426.Predictably_Irrational"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#incentivo-perverso",
    "isPillar": false
  },
  {
    "slug": "skin-in-the-game",
    "term": "Skin in the game",
    "familyId": "empresas",
    "tier": "core",
    "short": "Jugarse algo propio en el resultado de lo que decides o recomiendas, para que ganes o pierdas con él.",
    "analogy": "El chef que cena todos los días en su propio restaurante o el ingeniero que cruza el puente que acaba de calcular.",
    "howToApply": "Desconfía de consejos de quien no sufre las consecuencias si salen mal, y busca acuerdos donde todos compartan riesgo y recompensa.",
    "antiPattern": "Escuchar planes audaces de opinadores, consultores o directivos que cobran igual si aciertan o si hunden el barco.",
    "paragraphs": [
      "Recuenco lo toma de Nassim Nicholas Taleb y lo considera la vacuna contra los problemas de agencia. Singular Solving trabaja así, con revenue share, equity o joint ventures, sobre todo con empresas familiares. Su consejo: desconfía de las decisiones en las que nadie se juega nada y de quien te venda estrategia sin incentivos alineados."
    ],
    "origin": "Nassim Nicholas Taleb, «Skin in the Game»",
    "aliases": [
      "skin in the game"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "consultoria",
      "efecto-cobra",
      "enactacion",
      "huevos-de-serpiente",
      "metaincentivos",
      "post-pe-y-cfu",
      "singular-solving"
    ],
    "sources": [
      {
        "threadId": "1456867302494834690",
        "title": "Los huevos de serpiente. No de los literales, que es un tema fascinante per se, sino de los metafóricos. (Un problema latente que un directivo deja a su sucesor)",
        "url": "https://turrero.vercel.app/turra/1456867302494834690"
      },
      {
        "threadId": "1469583058563121153",
        "title": "Soluciones a problemas imposibles y como abordarlos",
        "url": "https://turrero.vercel.app/turra/1469583058563121153"
      },
      {
        "threadId": "1621752572087345152",
        "title": "La falacia de McNamara: un peligro para la toma de decisiones en el Corporate Game",
        "url": "https://turrero.vercel.app/turra/1621752572087345152"
      }
    ],
    "books": [
      {
        "title": "The Theory of Incentives: The Principal-Agent Model",
        "author": "Jean-Jacques Laffont",
        "url": "https://www.goodreads.com/book/show/2530177.The_Theory_of_Incentives"
      },
      {
        "title": "Winning",
        "author": "Jack Welch",
        "url": "https://www.goodreads.com/book/show/866222.Winning"
      },
      {
        "title": "Denial: Why Business Leaders Fail to Look Facts in the Face---And What to Do about It",
        "author": "Richard S. Tedlow",
        "url": "https://www.goodreads.com/book/show/7796938-denial"
      },
      {
        "title": "F'd Companies: Spectacular Dot Com Flameouts",
        "author": "Philip J. Kaplan",
        "url": "https://www.goodreads.com/book/show/25147.F_d_Companies"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#skin-in-the-game",
    "isPillar": false
  },
  {
    "slug": "post-pe-y-cfu",
    "term": "Post-PE y CFU",
    "familyId": "empresas",
    "tier": "core",
    "short": "La transición del Private Equity mecánico y apalancado hacia el Post-PE relacional y el Company Fixer-Upper (CFU): equipos CPS que rescatan y transforman estratégicamente empresas viables.",
    "analogy": "Dejar de maquillar y trocear casas antiguas con bricolaje barato para venderlas rápido, y traer arquitectos e ingenieros capaces de reformar a fondo un «fixer-upper» para que valga el doble de verdad.",
    "howToApply": "Desplaza el centro de gravedad de la creación de valor del apalancamiento financiero y el recorte cortoplacista a la estrategia, el juego iterado a largo plazo y la diferenciación personotécnica.",
    "antiPattern": "Encadenar fondos de continuación, «tanatopraxia financiera» y más optimización luterana sobre un modelo de negocio caducado (solución reiterada ineficiente).",
    "paragraphs": [
      "Ante el atasco de liquidez del Private Equity tradicional —tipos más altos, billones atrapados sin salida, fondos zombi y mercados secundarios crecientes—, Recuenco plantea en su arco 2025-2026 el salto al Post-PE: mover el fulcro del deal de las finanzas a la estrategia, del corto plazo al juego infinito y del capital al talento.",
      "El vehículo operativo de ese cambio es el CFU (Company Fixer-Upper), un «Distress 2.0» inspirado en la reforma inmobiliaria donde equipos CPS rehabilitan compañías viables en apuros en lugar de enviarlas al matadero financiero."
    ],
    "origin": "Javier G. Recuenco (arco Post-PE, 2025-2026)",
    "aliases": [
      "Post-PE",
      "CFU",
      "Company Fixer-Upper",
      "Distress 2.0"
    ],
    "related": [
      "cps-hispano",
      "decadencia-y-reconversion",
      "hotel-de-hilbert",
      "juego-infinito",
      "optimizacion-luterana-y-feijoada",
      "private-equity",
      "skin-in-the-game"
    ],
    "sources": [
      {
        "threadId": "1999746151839338739",
        "title": "CFU: el \"fixer-upper\" corporativo que promete reemplazar al Private Equity tradicional",
        "url": "https://turrero.vercel.app/turra/1999746151839338739"
      },
      {
        "threadId": "2030161085941039583",
        "title": "Del PE mecánico al juego infinito y personotécnico",
        "url": "https://turrero.vercel.app/turra/2030161085941039583"
      },
      {
        "threadId": "2025116934572843338",
        "title": "Feijoada, post-PE y CPS: crítica a la optimización luterana",
        "url": "https://turrero.vercel.app/turra/2025116934572843338"
      },
      {
        "threadId": "2002288705726304422",
        "title": "Cierre de la discusión sobre PE y oportunidades de mercado",
        "url": "https://turrero.vercel.app/turra/2002288705726304422"
      },
      {
        "threadId": "1994665880878186846",
        "title": "El PE español se enfrenta a un colapso financiero",
        "url": "https://turrero.vercel.app/turra/1994665880878186846"
      }
    ],
    "books": [
      {
        "title": "The Big Short: Inside the Doomsday Machine",
        "author": "Michael Lewis",
        "url": "https://www.goodreads.com/book/show/26889576-the-big-short"
      },
      {
        "title": "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets",
        "author": "Nassim Nicholas Taleb",
        "url": "https://goodreads.com/book/show/38315.Fooled_by_Randomness_The_Hidden_Role_of_Chance_in_Life_and_in_the_Markets"
      },
      {
        "title": "Game Theory and Economic Behaviour: Selected Essays",
        "author": "Reinhard Selten",
        "url": "https://www.goodreads.com/book/show/4731519-game-theory-and-economic-behaviour"
      },
      {
        "title": "The Savage Mind",
        "author": "Claude Lévi-Strauss",
        "url": "https://www.goodreads.com/book/show/782026.The_Savage_Mind"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1999746151839338739",
    "isPillar": false
  },
  {
    "slug": "blitzscaling",
    "term": "Blitzscaling",
    "familyId": "empresas",
    "tier": "deep",
    "short": "Crecimiento relámpago que prima la velocidad sobre la eficiencia para engordar una empresa y venderla cuanto antes.",
    "analogy": "Tirarse de un avión y coser el paracaídas mientras caes, apostando a que quemar capital más rápido que nadie te dejará solo en el mercado.",
    "howToApply": "Úsalo únicamente si existe un efecto red brutal donde el primero que captura el mercado se lo queda todo y tienes pulmón para sostenerlo.",
    "antiPattern": "Copiar la receta del blitzscaling en un negocio tradicional sin efectos red, destruyendo márgenes, cultura y calidad sin foso real.",
    "paragraphs": [
      "Reid Hoffman y Chris Yeh acuñaron el término para el crecimiento rápido y agresivo de las startups. Recuenco habla de la «mirada blitzscaler»: llevar la lógica del private equity a cualquier negocio, sin compromiso con el largo plazo ni con el sentido de la compañía, solo engorde rápido y venta de la carcasa. Hay mucho dinero en ello, dice, pero no hay épica ni alma."
    ],
    "origin": "Reid Hoffman y Chris Yeh, «Blitzscaling»",
    "aliases": [
      "blitzscaling",
      "blitzscaler",
      "mirada blitzscaler"
    ],
    "related": [
      "juego-infinito",
      "lujo-humano",
      "private-equity"
    ],
    "sources": [
      {
        "threadId": "1870373349282484488",
        "title": "El impacto del blitzscaling y el futuro del lujo humano",
        "url": "https://turrero.vercel.app/turra/1870373349282484488"
      }
    ],
    "books": [
      {
        "title": "Ford Vs Ferrari",
        "author": "Anthony Pritchard",
        "url": "https://www.goodreads.com/book/show/9702401-ford-vs-ferrari"
      },
      {
        "title": "The Little Book of Hermès: The Story of the Iconic Fashion House",
        "author": "Karen Homer",
        "url": "https://www.goodreads.com/book/show/60001876-the-little-book-of-herm-s"
      },
      {
        "title": "Blitzscaling: The Lightning-Fast Path to Building Massively Valuable Companies",
        "author": "Reid Hoffman",
        "url": "https://www.goodreads.com/book/show/38398157-blitzscaling"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#blitzscaling",
    "isPillar": false
  },
  {
    "slug": "consultoria",
    "term": "Consultoría",
    "familyId": "empresas",
    "tier": "deep",
    "short": "Servicio que asesora y define soluciones para empresas. Recuenco critica que se venda para problemas que no sabe resolver.",
    "analogy": "Pagar a alguien para que te diga la hora mirando tu propio reloj y te entregue un PowerPoint precioso sin quedarse a comprobar si llegas al tren.",
    "howToApply": "Exige diagnóstico honesto, transferencia de capacidad y alineación de riesgo; contrata ayuda para pensar mejor, no para comprar coartadas.",
    "antiPattern": "Usar una gran firma solo para cubrirte las espaldas ante el consejo («si sale mal, nadie me despedirá por haber contratado a esta marca»).",
    "paragraphs": [
      "Recuenco distingue los servicios profesionales, que implantan soluciones, de la consultoría, que las define, y dentro de esta la estratégica. No la considera inútil: la llama disciplina «violín», que borda los proyectos canon, los que ya se han hecho antes. Su crítica va a los problemas de casting (gente joven sin experiencia donde haría falta mucha) y a la doble asimetría: el cliente no sabe juzgar al experto y a menudo no hay un repertorio claro que pedirle. Para cubrir esa incertidumbre se venden success stories y tokens de justificación."
    ],
    "origin": "",
    "aliases": [
      "consultoría",
      "consultoría estratégica",
      "consultoras"
    ],
    "related": [
      "companias-problem-centric",
      "cps",
      "cynefin",
      "incentivo-perverso",
      "incertidumbre",
      "skin-in-the-game",
      "tokens-de-confianza"
    ],
    "sources": [
      {
        "threadId": "1325000695897071616",
        "title": "La psicología para la acción comercial",
        "url": "https://turrero.vercel.app/turra/1325000695897071616"
      },
      {
        "threadId": "1723236412487553316",
        "title": "Análisis de la convergencia entre CPS e IA en las firmas de servicios profesionales",
        "url": "https://turrero.vercel.app/turra/1723236412487553316"
      }
    ],
    "books": [
      {
        "title": "Mad World: An Oral History of New Wave Artists and Songs That Defined the 1980s",
        "author": "Lori Majewski",
        "url": "https://www.goodreads.com/book/show/18405526-mad-world"
      },
      {
        "title": "When McKinsey Comes to Town",
        "author": "Walt Bogdanich",
        "url": "https://www.goodreads.com/es/book/show/60644838"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#consultoria",
    "isPillar": false
  },
  {
    "slug": "huevos-de-serpiente",
    "term": "Huevos de serpiente",
    "familyId": "empresas",
    "tier": "deep",
    "short": "Problema latente que un máximo directivo deja a su sucesor y que estalla cuando él ya se ha ido.",
    "analogy": "Esconder la basura debajo de la alfombra para que la casa brille el día que enseñas los resultados, sabiendo que olerá fatal cuando ya no vivas ahí.",
    "howToApply": "Audita qué deuda técnica, cultural o comercial está creciendo en silencio para maquillar los resultados del trimestre actual.",
    "antiPattern": "Premiar únicamente el resultado de corto plazo de directivos rotatorios que cobran el bonus y se marchan antes de que eclosione el problema.",
    "paragraphs": [
      "Recuenco saca la idea del libro «Lights Out», sobre la caída de General Electric: Jack Welch dejó a Jeff Immelt el marrón de desmontar GE Capital en plena época post-Lehman Brothers. Las variantes van desde calcular que la empresa aguante justo hasta tu jubilación hasta vender activos para maquillar las cuentas antes de irte. En el origen suele haber un problema de agencia, y la vacuna es el skin in the game."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "huevos de serpiente",
      "huevo de serpiente"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "efecto-cobra",
      "incentivo-perverso",
      "metaincentivos",
      "skin-in-the-game"
    ],
    "sources": [
      {
        "threadId": "1456867302494834690",
        "title": "Los huevos de serpiente. No de los literales, que es un tema fascinante per se, sino de los metafóricos. (Un problema latente que un directivo deja a su sucesor)",
        "url": "https://turrero.vercel.app/turra/1456867302494834690"
      },
      {
        "threadId": "1649673649866113024",
        "title": "Analizando la importancia de los incentivos en el ámbito empresarial y cómo influyen en el éxito o fracaso",
        "url": "https://turrero.vercel.app/turra/1649673649866113024"
      }
    ],
    "books": [
      {
        "title": "The Theory of Incentives: The Principal-Agent Model",
        "author": "Jean-Jacques Laffont",
        "url": "https://www.goodreads.com/book/show/2530177.The_Theory_of_Incentives"
      },
      {
        "title": "Winning",
        "author": "Jack Welch",
        "url": "https://www.goodreads.com/book/show/866222.Winning"
      },
      {
        "title": "Denial: Why Business Leaders Fail to Look Facts in the Face---And What to Do about It",
        "author": "Richard S. Tedlow",
        "url": "https://www.goodreads.com/book/show/7796938-denial"
      },
      {
        "title": "F'd Companies: Spectacular Dot Com Flameouts",
        "author": "Philip J. Kaplan",
        "url": "https://www.goodreads.com/book/show/25147.F_d_Companies"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#huevos-de-serpiente",
    "isPillar": false
  },
  {
    "slug": "private-equity",
    "term": "Private equity",
    "familyId": "empresas",
    "tier": "deep",
    "short": "Fondos que compran empresas con deuda, las optimizan a fondo y las revenden para maximizar la salida.",
    "analogy": "Reformar una casa con hipoteca alta para darle un lavado de cara brillante y revenderla en cinco años al mejor postor.",
    "howToApply": "Si tratas con fondos, entiende su reloj financiero, su necesidad de salida y su foco en EBITDA para distinguir creación real de ingeniería financiera.",
    "antiPattern": "Recortar talento, I+D y mantenimiento para inflar el margen a corto plazo mientras vacías la capacidad futura de la empresa.",
    "paragraphs": [
      "Recuenco resume su mecánica clásica en ocho pasos, entre ellos cargar la empresa con toda la deuda que aguante su caja, vender activos no esenciales, fichar gestores con sueldos ligados a resultados y controlar el gasto al máximo. Sostiene que el sector vive de hacer deals y no sabe sobrevivir en mercado abierto, así que necesita otra arquitectura de incentivos y otra propuesta de valor. Le dedicó el arco del post private equity."
    ],
    "origin": "",
    "aliases": [
      "private equity",
      "post Private Equity",
      "post private equity"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "blitzscaling",
      "cul-de-sac",
      "cultura-luterana",
      "hotel-de-hilbert",
      "juego-infinito",
      "optimizacion-luterana-y-feijoada",
      "post-pe-y-cfu"
    ],
    "sources": [
      {
        "threadId": "1494930305811111938",
        "title": "La transición de la creación del valor del dinero y las operaciones a las propuestas de valor",
        "url": "https://turrero.vercel.app/turra/1494930305811111938"
      },
      {
        "threadId": "1667419646671179776",
        "title": "Momentos decisivos en el ámbito financiero: Private Equity, M&A, Fondos y la figura de los Zelotes",
        "url": "https://turrero.vercel.app/turra/1667419646671179776"
      },
      {
        "threadId": "1989585041949622370",
        "title": "Ciclos de auge y caída en la era de los bonos basura",
        "url": "https://turrero.vercel.app/turra/1989585041949622370"
      }
    ],
    "books": [
      {
        "title": "The Buyout of America: How Private Equity Is Destroying Jobs and Killing the American Economy",
        "author": "Joshua Kosman",
        "url": "https://www.goodreads.com/book/show/19013459-the-buyout-of-america"
      },
      {
        "title": "The Big Short: Inside the Doomsday Machine",
        "author": "Michael Lewis",
        "url": "https://www.goodreads.com/book/show/26889576-the-big-short"
      },
      {
        "title": "The Party's Over: Oil, War and the Fate of Industrial Societies",
        "author": "Richard Heinberg",
        "url": "https://www.goodreads.com/book/show/138040.The_Party_s_Over"
      },
      {
        "title": "When Genius Failed: The Rise and Fall of Long-Term Capi…",
        "author": "Roger Lowenstein",
        "url": "https://www.goodreads.com/es/book/show/10669.When_Genius_Failed"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#private-equity",
    "isPillar": false
  },
  {
    "slug": "sindrome-del-coronel-thompson",
    "term": "Síndrome del Coronel Thompson",
    "familyId": "empresas",
    "tier": "deep",
    "short": "Resolver un problema de forma brillante y fracasar igual por ignorar el contexto o llegar a destiempo.",
    "analogy": "Diseñar el invento perfecto para una guerra que terminó ayer: excelencia técnica impecable, impacto cero en la realidad.",
    "howToApply": "Valida en paralelo al diseño técnico el momento del mercado, la adopción humana y quién gana o pierde si tu solución triunfa.",
    "antiPattern": "Enamorarte tanto de la elegancia interna de tu solución que te olvidas de comprobar si el mundo sigue necesitándola.",
    "paragraphs": [
      "El nombre viene del coronel que inventó el subfusil Thompson, cuya historia Recuenco usa a menudo para recordar que «la gente está lista cuando está lista y ni un minuto antes». Produces algo que soluciona el problema limpia y elegantemente, incluso creas una industria nueva, y aun así te comes el fracaso. Pasa porque toda solución vale dentro de un contexto: cada par solución/contexto funciona como una llave y su cerradura."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "síndrome del Coronel Thompson",
      "Síndrome del Coronel Thompson",
      "síndrome del coronel Thompson"
    ],
    "related": [
      "abrochador-liminal",
      "aftershock",
      "contexto",
      "eta",
      "soluciones-de-mierda",
      "zeitgeist"
    ],
    "sources": [
      {
        "threadId": "1684876869949120512",
        "title": "Descifrando el síndrome del Coronel Thompson: implicaciones y reflexiones",
        "url": "https://turrero.vercel.app/turra/1684876869949120512"
      }
    ],
    "books": [
      {
        "title": "Tommy: The Gun That Changed America",
        "author": "Karen Blumenthal",
        "url": "https://www.goodreads.com/en/book/show/22718722-tommy"
      },
      {
        "title": "Expert Failure",
        "author": "Roger Koppl",
        "url": "https://www.goodreads.com/book/show/36019959-expert-failure"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#sindrome-del-coronel-thompson",
    "isPillar": false
  },
  {
    "slug": "taylorismo",
    "term": "Taylorismo",
    "familyId": "empresas",
    "tier": "deep",
    "short": "Organización científica y mecanicista del trabajo nacida para la fábrica industrial que colapsa cuando se impone sobre problemas complejos, únicos y no lineales.",
    "analogy": "Intentar curar a todos los pacientes de un hospital con la misma receta fotocopiada y un cronómetro porque ese sistema funcionó de maravilla ensamblando coches en 1911.",
    "howToApply": "Aplica estandarización, cronometraje y eficiencia solo a tareas repetitivas y predecibles; cuando entren la incertidumbre, la estrategia o el Factor X, abandona la plantilla y diseña una solución contextual.",
    "antiPattern": "Tratar el marketing, la educación, la atención al cliente o el talento atípico como una cadena de montaje y comprar «plataformas mágicas» esperando que reduzcan la incertidumbre por arte de magia.",
    "paragraphs": [
      "Recuenco reconoce que el taylorismo de Frederick Taylor (1911) permitió a la humanidad dar un salto evolutivo gigantesco al entrar en la era industrial, pero denuncia las taras graves que dejó en herencia: la creencia ciega de que la cadena de producción y la plantilla son la única manera de escalar. A su obsesión por aplicarlo fuera de su dominio lo bautiza «taylorismo de mierda»: dietas de fotocopia, funnels estándar, ERPs vendidos como reductores esotéricos de incertidumbre y una educación reglada convertida en fábrica de obediencia que tritura el talento neurodivergente mientras la IA liquida la mediocridad solvente."
    ],
    "origin": "Frederick W. Taylor (1911) / Crítica de Javier G. Recuenco",
    "aliases": [
      "taylorismo de mierda",
      "gestión científica",
      "producción en cadena",
      "soluciones de plantilla"
    ],
    "related": [
      "cps",
      "cultura-luterana",
      "optimizacion-luterana-y-feijoada",
      "procesos-de-alta-variabilidad",
      "soluciones-de-mierda",
      "vaca-esferica"
    ],
    "sources": [
      {
        "threadId": "1434087755198386177",
        "title": "Taylorismo de mierda",
        "url": "https://turrero.vercel.app/turra/1434087755198386177"
      },
      {
        "threadId": "2053002707628142991",
        "title": "Educación, neurodivergencia e IA: formar talento para un mundo no lineal",
        "url": "https://turrero.vercel.app/turra/2053002707628142991"
      },
      {
        "threadId": "2025116934572843338",
        "title": "Feijoada, post-PE y CPS: crítica a la optimización luterana",
        "url": "https://turrero.vercel.app/turra/2025116934572843338"
      },
      {
        "threadId": "1791716794312318984",
        "title": "Reflexión sobre los desafíos y el futuro del CPS en la comunidad de innovación",
        "url": "https://turrero.vercel.app/turra/1791716794312318984"
      }
    ],
    "books": [
      {
        "title": "The Management Myth: Why the Experts Keep Getting it Wrong",
        "author": "Matthew Stewart",
        "url": "https://www.goodreads.com/book/show/6100832-the-management-myth"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1434087755198386177",
    "isPillar": false
  },
  {
    "slug": "metaincentivos",
    "term": "Metaincentivos",
    "familyId": "empresas",
    "tier": "deep",
    "short": "Las motivaciones no explícitas, subterráneas y agendas particulares que mueven realmente a cada miembro de un consejo de administración por debajo del debate oficial.",
    "analogy": "Jugar una partida de póker donde crees que todos apuestan por el bote del centro, cuando en realidad cada jugador tiene un pacto secreto sobre a quién quiere echar de la mesa.",
    "howToApply": "Antes de presentar una transformación al board, mapea las agendas invisibles de cada consejero, acorta la distancia de intermediarios hasta quien decide de verdad y exige skin in the game compartido.",
    "antiPattern": "Entrar en una sala de consejo creyendo que el debate gira únicamente sobre la moda tecnológica del día (saveur du jour) y que la mejor presentación racional ganará por sí sola.",
    "paragraphs": [
      "Al explicar cómo hablar al board, Recuenco señala que en toda sala de consejo conviven tres planos: la moda del momento —hoy la IA—, el futuro real del negocio y una montaña silenciosa de la que nadie habla: las agendas particulares de cada decisor. Mientras las motivaciones explícitas se deducen observando, los metaincentivos operan en distintos niveles de subterraneidad, sobre todo en compañías en apuros. Cartografiar esa arquitectura oculta es «dificultad máxima rollo software español de los 80, final boss y niebla de Silent Hill», y tu probabilidad de éxito cae logarítmicamente con cada intermediario que te separa del board."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "agendas ocultas",
      "hablar al board",
      "incentivos subterráneos",
      "arquitectura real de incentivos"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "decision-makers",
      "efecto-cobra",
      "huevos-de-serpiente",
      "pantomima",
      "skin-in-the-game"
    ],
    "sources": [
      {
        "threadId": "1738462543344005507",
        "title": "Metaincentivos y decisiones en corporaciones (sobre cómo hablar al board)",
        "url": "https://turrero.vercel.app/turra/1738462543344005507"
      },
      {
        "threadId": "1662345754642378753",
        "title": "Revelada la tercera parte de la trilogía sobre arquitectura de incentivos y modificación de comportamiento",
        "url": "https://turrero.vercel.app/turra/1662345754642378753"
      },
      {
        "threadId": "1398571638170529792",
        "title": "CPS real en grandes corporaciones cuando los incentivos están desalineados",
        "url": "https://turrero.vercel.app/turra/1398571638170529792"
      }
    ],
    "books": [
      {
        "title": "Board Talk: 18 Crucial Conversations That Count Inside and Outside the Boardroom",
        "author": "Kathryn Bishop",
        "url": "https://www.goodreads.com/book/show/125396725-board-talk"
      },
      {
        "title": "Crucial Conversations: Tools for Talking When Stakes are High",
        "author": "Kerry Patterson, Joseph Grenny, Ron McMillan, Al Switzler",
        "url": "https://www.goodreads.com/es/book/show/15014"
      },
      {
        "title": "Migrating Legacy Systems: Gateways, Interfaces and the Incremental Approach",
        "author": "Michael L. Brodie, Michael Stonebraker",
        "url": "https://www.goodreads.com/book/show/832398.Migrating_Legacy_Systems"
      },
      {
        "title": "Persuasive Technology: Using Computers to Change What We Think and Do",
        "author": "B.J. Fogg",
        "url": "https://www.goodreads.com/book/show/344733.Persuasive_Technology"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1738462543344005507",
    "isPillar": false
  },
  {
    "slug": "efecto-cobra",
    "term": "Efecto cobra",
    "familyId": "empresas",
    "tier": "deep",
    "short": "Fenómeno por el cual un incentivo mal diseñado o un parche parcial en un sistema complejo agrava exactamente el problema que pretendía erradicar.",
    "analogy": "Pagar una recompensa por cada rata entregada para limpiar un edificio y descubrir meses después que la gente ha montado criaderos clandestinos de ratas en el sótano.",
    "howToApply": "Antes de implantar un bono o KPI, pregúntate cómo lo explotaría un actor racional sin escrúpulos y alinea skin in the game en todo el sistema en lugar de premiar una métrica aislada.",
    "antiPattern": "Lanzar comisiones ligadas solo a facturación, velocidad de producción o bonos trimestrales desde arriba sin medir el daño colateral en calidad, clientes o innovación.",
    "paragraphs": [
      "En su trilogía sobre arquitecturas dinámicas de incentivos, Recuenco sitúa el efecto cobra —junto a los problemas de agencia— en el corazón del fracaso corporativo. Cuando se aplican soluciones parciales a sistemas entrelazados o se diseñan premios desde la pereza de la falacia de McNamara y sin skin in the game, las personas optimizan la métrica y destruyen el valor real: comerciales manipulando contratos, velocidad arruinando la calidad o atención al cliente degenerada en procesos Golem. Como advierte con dureza: todos los modelos débiles de incentivos corporativos son letales."
    ],
    "origin": "Horst Siebert (2001) / Trilogía de incentivos de Javier G. Recuenco",
    "aliases": [
      "consecuencias imprevistas de incentivos",
      "efecto bumerán",
      "incentivos contraproducentes"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "falacia-de-mcnamara",
      "huevos-de-serpiente",
      "incentivo-perverso",
      "metaincentivos",
      "sistemas-complejos",
      "skin-in-the-game"
    ],
    "sources": [
      {
        "threadId": "1654727164086960130",
        "title": "Continúa la trilogía sobre incentivos: impacto en la dinámica corporativa",
        "url": "https://turrero.vercel.app/turra/1654727164086960130"
      },
      {
        "threadId": "1649673649866113024",
        "title": "Analizando la importancia de los incentivos en el ámbito empresarial y cómo influyen en el éxito o fracaso",
        "url": "https://turrero.vercel.app/turra/1649673649866113024"
      },
      {
        "threadId": "1642053681766883330",
        "title": "La tensión entre fidelidad y conveniencia en el éxito de productos y servicios en el mercado",
        "url": "https://turrero.vercel.app/turra/1642053681766883330"
      },
      {
        "threadId": "1543107844043673600",
        "title": "Complejidad vs. aleatoriedad: La ampliamente usada complejidad de Kolmogorov es simplemente una medida de la aleatoriedad",
        "url": "https://turrero.vercel.app/turra/1543107844043673600"
      }
    ],
    "books": [
      {
        "title": "Predictably Irrational: The Hidden Forces That Shape Our Decisions",
        "author": "Dan Ariely",
        "url": "https://www.goodreads.com/book/show/1713426.Predictably_Irrational"
      },
      {
        "title": "Punished by Rewards: The Trouble with Gold Stars, Incentive Plans, A's, Praise and Other Bribes",
        "author": "Alfie Kohn",
        "url": "https://www.goodreads.com/book/show/541132.Punished_by_Rewards"
      },
      {
        "title": "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
        "author": "Steven D. Levitt, Stephen J. Dubner",
        "url": "https://www.goodreads.com/book/show/1202.Freakonomics"
      },
      {
        "title": "Skin in the Game: The Hidden Asymmetries in Daily Life",
        "author": "Nassim Nicholas Taleb",
        "url": "https://www.goodreads.com/book/show/36064445-skin-in-the-game"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1654727164086960130",
    "isPillar": false
  },
  {
    "slug": "atractores",
    "term": "Atractores",
    "familyId": "estrategia",
    "tier": "core",
    "short": "Las cinco grandes fuerzas de fondo que empujan mercados y sociedades y condicionan cualquier estrategia durante años.",
    "analogy": "Las corrientes oceánicas profundas: puedes remar con fuerza en la superficie, pero si ignoras la corriente de fondo acabarás a kilómetros de tu destino.",
    "howToApply": "Contrasta cualquier plan a 3-5 años contra las grandes fuerzas estructurales (tecnología, cambio de modelos de negocio, hiperpersonalización, geopolítica).",
    "antiPattern": "Planificar tu futuro mirando solo a tu competidor de al lado mientras una ola estructural cambia las reglas de toda la industria.",
    "paragraphs": [
      "Recuenco los compara con la vida de una estrella: aparecen, se consolidan, alcanzan su máxima atracción y colapsan. No son modas: un hype pasa, un atractor arrastra decisiones de todo tipo durante una década. Por eso los reformula cuando cambia el contexto. La versión original, de 2016, eran megatendencias tecnológicas, crunching business models, espacios hiperpersonales, customer centricity o personotecnia y la Agenda 2030 (ODS, ethical challengers y consumidor coherente). En la versión de 2026 solo siguen igual las megatendencias tecnológicas. Crunching business models pasa a ser warp speed, los espacios hiperpersonales y la personotecnia se funden en relevance first, el colapso de los acuerdos posteriores a la Segunda Guerra Mundial ocupa el sitio de la Agenda 2030, como su reverso, y se suma el reshuffling de la jerarquía intelectual. Insiste en que las tendencias entran cuando la gente está lista, no cuando la tecnología está disponible."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "atractor",
      "atractores",
      "cinco atractores",
      "macroatractor",
      "macroatractores",
      "macro atractor"
    ],
    "related": [
      "aftershock",
      "business-acumen",
      "ciencias-de-la-complejidad",
      "decadencia-y-reconversion",
      "factor-x",
      "reshuffle",
      "zeitgeist"
    ],
    "sources": [
      {
        "threadId": "2004624575837958361",
        "title": "Nuevos atractores 2026 redefinen el futuro tecnológico",
        "url": "https://turrero.vercel.app/turra/2004624575837958361"
      },
      {
        "threadId": "1373170914226008064",
        "title": "El mercado energético es un ejemplo perfecto de como han llegado los cinco atractores de repente",
        "url": "https://turrero.vercel.app/turra/1373170914226008064"
      },
      {
        "threadId": "1454341690022670339",
        "title": "Dead men walking. El concepto de la audiencia mucho más allá de su vida útil",
        "url": "https://turrero.vercel.app/turra/1454341690022670339"
      },
      {
        "threadId": "1368127688343490560",
        "title": "Diferenciar a un atractor de un hype",
        "url": "https://turrero.vercel.app/turra/1368127688343490560"
      }
    ],
    "books": [
      {
        "title": "Superfuel: Thorium, the Green Energy Source for the Future",
        "author": "Richard Martin",
        "url": "https://www.goodreads.com/book/show/12698060-superfuel"
      },
      {
        "title": "What We Need to Do Now: For a Zero Carbon Future",
        "author": "Chris Goodall",
        "url": "https://www.goodreads.com/book/show/50345546-what-we-need-to-do-now"
      },
      {
        "title": "Energy and Civilization: A History",
        "author": "Vaclav Smil",
        "url": "https://www.goodreads.com/book/show/31850765-energy-and-civilization"
      },
      {
        "title": "The Myth of the Entrepreneurial State",
        "author": "Deirdre Nansen McCloskey",
        "url": "https://www.goodreads.com/book/show/55767523-the-myth-of-the-entrepreneurial-state"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#atractores",
    "isPillar": false
  },
  {
    "slug": "business-acumen",
    "term": "Business acumen",
    "familyId": "estrategia",
    "tier": "core",
    "short": "Olfato para los negocios: estrategia, propuesta de valor y lectura de señales. Uno de los cuatro pilares del CPS.",
    "analogy": "El olfato del buen comerciante que entra en un local y en dos minutos detecta dónde se gana dinero, dónde se fuga y qué cliente está enfriándose.",
    "howToApply": "Entrena la lectura de modelos de negocio reales: de dónde viene el margen, quién decide la compra y qué propuesta de valor está envejeciendo.",
    "antiPattern": "Creer que tener un producto técnicamente impecable basta para sobrevivir sin entender la caja, la distribución ni el poder de negociación.",
    "paragraphs": [
      "Recuenco divide el CPS en cuatro macrodisciplinas: ciencias de la complejidad, ecosistemas tecnológicos, Factor X y business acumen. Este último cubre todo lo relativo a contextos empresariales y comerciales. En su trilogía sobre incentivos lo resume como la forma de llevar la arquitectura de incentivos al kernel de la estrategia. Pone de ejemplo a Charlie Munger, que invierte apoyándose sobre todo en business acumen y Factor X."
    ],
    "origin": "",
    "aliases": [
      "business acumen"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "atractores",
      "ciencias-de-la-complejidad",
      "ecosistemas-tecnologicos",
      "estrategia",
      "factor-x"
    ],
    "sources": [
      {
        "threadId": "1340160478316785666",
        "title": "Cierro con éste la trilogía sobre libros recomendados para CPS",
        "url": "https://turrero.vercel.app/turra/1340160478316785666"
      },
      {
        "threadId": "1649673649866113024",
        "title": "Analizando la importancia de los incentivos en el ámbito empresarial y cómo influyen en el éxito o fracaso",
        "url": "https://turrero.vercel.app/turra/1649673649866113024"
      }
    ],
    "books": [
      {
        "title": "The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power",
        "author": "Shoshana Zuboff",
        "url": "https://www.goodreads.com/book/show/26195941-the-age-of-surveillance-capitalism"
      },
      {
        "title": "Business Adventures",
        "author": "John Brooks",
        "url": "https://www.goodreads.com/book/show/4191136-business-adventures"
      },
      {
        "title": "Business Anthropology",
        "author": "Ann T. Jordan",
        "url": "https://www.goodreads.com/en/book/show/4509587-business-anthropology"
      },
      {
        "title": "Tiny Habits: The Small Changes That Change Everything",
        "author": "B.J. Fogg",
        "url": "https://www.goodreads.com/book/show/43261127-tiny-habits"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#business-acumen",
    "isPillar": true
  },
  {
    "slug": "estrategia",
    "term": "Estrategia",
    "familyId": "estrategia",
    "tier": "core",
    "short": "Resolver problemas: diagnóstico, política guía y acciones coherentes, en ese orden. Si no resuelve el problema, es mala estrategia.",
    "analogy": "Cruzar un río revuelto: primero miras dónde está la corriente y las piedras (diagnóstico), decides si construir puente o balsa (política guía) y solo luego cortas madera (acciones).",
    "howToApply": "Aplica el núcleo de Rumelt: diagnóstico crudo del reto, una política guía clara que renuncia a cosas y un conjunto de acciones coherentes entre sí.",
    "antiPattern": "Llamar «estrategia» a una lista de deseos («crecer un 20 % y ser líderes en innovación») sin renuncias ni diagnóstico.",
    "paragraphs": [
      "Recuenco viene de la estrategia empresarial y la define con Richard Rumelt: «la estrategia es problem solving». Sigue el kernel de Rumelt: primero el diagnóstico, luego las políticas guía y después las acciones coherentes, sin atajos. Se queja de que se llame estrategia a cualquier plan vistoso que no toca el problema real."
    ],
    "origin": "Richard Rumelt, «Good Strategy, Bad Strategy»",
    "aliases": [
      "estrategia",
      "kernel de estrategia",
      "kernel de la estrategia"
    ],
    "related": [
      "business-acumen",
      "decision-makers",
      "metajuego",
      "oceano-azul",
      "sidestepping",
      "soluciones-de-mierda"
    ],
    "sources": [
      {
        "threadId": "1522830977088819203",
        "title": "Sobre el maltrato al que se somete todos los días a la estrategia, con una mecánica de enhebrado/patchwork de manifestaciones previas",
        "url": "https://turrero.vercel.app/turra/1522830977088819203"
      },
      {
        "threadId": "1786636941607260240",
        "title": "Debate sobre la naturaleza estratégica del baloncesto en conversación con Pedro Torrijos",
        "url": "https://turrero.vercel.app/turra/1786636941607260240"
      },
      {
        "threadId": "1794224768574476545",
        "title": "La importancia de una estrategia clara en las organizaciones",
        "url": "https://turrero.vercel.app/turra/1794224768574476545"
      }
    ],
    "books": [
      {
        "title": "The Elephant in the Room: Silence and Denial in Everyday Life",
        "author": "Eviatar Zerubavel",
        "url": "https://www.goodreads.com/book/show/379779.The_Elephant_in_the_Room"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#estrategia",
    "isPillar": false
  },
  {
    "slug": "hotel-de-hilbert",
    "term": "Hotel de Hilbert",
    "familyId": "estrategia",
    "tier": "core",
    "short": "Metáfora de Recuenco: los negocios son habitaciones cuyas puertas se abren un tiempo y luego se cierran para siempre.",
    "analogy": "Un hotel infinito donde cada negocio es una puerta abierta durante un tiempo: mientras entras dinero a espuertas parece eterna, hasta que un día se cierra sin aviso.",
    "howToApply": "Asume que toda propuesta de valor tiene fecha de caducidad; empieza a explorar la siguiente habitación mientras la actual aún da beneficios.",
    "antiPattern": "Creer que el éxito pasado garantiza rentas perpetuas y reaccionar solo cuando la puerta ya se ha cerrado de golpe.",
    "paragraphs": [
      "Recuenco adapta el hotel infinito de David Hilbert: las habitaciones son oportunidades de negocio, y cada puerta que se abre pone en marcha un contador de cierre inexorable. No habla de necesidades, que son eternas, sino de las propuestas para cubrirlas: lo que funcionó en el siglo XV hoy no sirve. Por eso las propuestas de valor caducan y hay que reformularlas de forma constante, también en el private equity."
    ],
    "origin": "Javier G. Recuenco, a partir del hotel infinito de David Hilbert",
    "aliases": [
      "hotel de Hilbert",
      "Hotel de Hilbert",
      "propuesta de valor caducada",
      "propuestas de valor caducadas"
    ],
    "related": [
      "cul-de-sac",
      "decadencia-y-reconversion",
      "enshittification",
      "eta",
      "harbingers-of-doom",
      "post-pe-y-cfu",
      "private-equity",
      "reshuffle",
      "zugzwang"
    ],
    "sources": [
      {
        "threadId": "1294936782497361928",
        "title": "Visionarios del futuro empresarial percibidos como cenizos",
        "url": "https://turrero.vercel.app/turra/1294936782497361928"
      },
      {
        "threadId": "1479732314791886850",
        "title": "La plasmación de un Zugzwang clásico en gestas deportivas",
        "url": "https://turrero.vercel.app/turra/1479732314791886850"
      }
    ],
    "books": [
      {
        "title": "Confess: The Autobiography",
        "author": "Rob Halford",
        "url": "https://www.goodreads.com/book/show/48613493-confess"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#hotel-de-hilbert",
    "isPillar": false
  },
  {
    "slug": "metajuego",
    "term": "Metajuego",
    "familyId": "estrategia",
    "tier": "core",
    "short": "El juego más allá del juego: leer qué táctica domina el entorno y anticipar cuándo dejará de hacerlo.",
    "analogy": "En póker o eSports, no juegas solo tus cartas: juegas contra lo que toda la mesa cree hoy que es la estrategia ganadora.",
    "howToApply": "Observa qué táctica está copiando todo tu sector ahora mismo y pregúntate qué contra-jugada la deja obsoleta mañana.",
    "antiPattern": "Optimizar la receta ganadora del año pasado justo cuando todos tus rivales ya la conocen y saben neutralizarla.",
    "paragraphs": [
      "Lo explicó @nudpiedo en dos turras en las que sustituyó a Recuenco. Viene de los videojuegos, donde «la meta» es la Most Effective Tactic Available, la táctica que todos usan porque ahora funciona. Cada nueva meta se propaga siguiendo una curva sigmoide hasta que deja de dar ventaja, así que ganar de forma consistente exige mirar más allá de la microoptimización."
    ],
    "origin": "",
    "aliases": [
      "metajuego",
      "metagame",
      "M.E.T.A.",
      "META permanente"
    ],
    "related": [
      "estrategia",
      "game-awareness",
      "roguelike-de-mazos",
      "sidestepping"
    ],
    "sources": [
      {
        "threadId": "1880543676876874203",
        "title": "El metajuego y su impacto en la estrategia en entornos competitivos (1 de 2)",
        "url": "https://turrero.vercel.app/turra/1880543676876874203"
      },
      {
        "threadId": "1890657339599999084",
        "title": "El metajuego y su impacto en la estrategia en entornos competitivos (2 de 2)",
        "url": "https://turrero.vercel.app/turra/1890657339599999084"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#metajuego",
    "isPillar": false
  },
  {
    "slug": "cul-de-sac",
    "term": "Cul de sac",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "Callejón sin salida empresarial: hay que dar marcha atrás y cambiar de propuesta de valor, sin ganas ni energía.",
    "analogy": "Meter el coche cada vez más rápido por una calle sin salida esperando que, si aceleras lo suficiente, el muro del fondo desaparezca.",
    "howToApply": "Reconoce a tiempo cuándo optimizar más solo te entierra más hondo; frena, asume la pérdida hundida y da marcha atrás hacia una nueva propuesta.",
    "antiPattern": "Seguir inyectando presupuesto y horas extra en un negocio agotado porque «ya hemos invertido demasiado para parar ahora».",
    "paragraphs": [
      "Recuenco lo describe como el momento de tomar una decisión que no apetece, en circunstancias desagradables y sin fuerzas. En la empresa familiar aparece cuando descubres que eres experto en un negocio que se vuelve irrelevante. Los seis hilos del arco del post private equity tratan de cómo gestionar estos callejones."
    ],
    "origin": "",
    "aliases": [
      "cul de sac",
      "cul de sac empresarial",
      "cul de sacs"
    ],
    "related": [
      "all-models-are-wrong",
      "decadencia-y-reconversion",
      "desierto-tipo-sierra",
      "eta",
      "harbingers-of-doom",
      "hotel-de-hilbert",
      "private-equity",
      "zugzwang"
    ],
    "sources": [
      {
        "threadId": "2009896595203018960",
        "title": "El callejón sin salida: reinventarse para sobrevivir",
        "url": "https://turrero.vercel.app/turra/2009896595203018960"
      }
    ],
    "books": [
      {
        "title": "The Essential Joseph Schumpeter (Essential Scholars)",
        "author": "Russell S. Sobel",
        "url": "https://www.goodreads.com/book/show/53927110-the-essential-joseph-schumpeter"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#cul-de-sac",
    "isPillar": false
  },
  {
    "slug": "fatiga-de-materiales",
    "term": "Fatiga de materiales",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "Desgaste acumulado que acaba rompiendo un modelo de negocio o una trayectoria que antes funcionaba.",
    "analogy": "Un clip metálico doblado cien veces: las primeras noventa y nueve parece intacto, y en la centésima se parte en dos de golpe.",
    "howToApply": "Monitoriza señales tempranas de desgaste en equipos clave, márgenes y propuesta de valor antes de que el colapso parezca repentino.",
    "antiPattern": "Confiar en que «siempre hemos aguantado la presión así» sin ver las microfisuras que se acumulan bajo la superficie.",
    "paragraphs": [
      "Recuenco toma la expresión de la ingeniería: la acumulación de pequeñas estupideces parece no tener efecto, pero termina alcanzándote. La aplicó en 2019 a los modelos de negocio de las grandes plataformas y la ve confirmada en los problemas de Meta y en el deterioro de las búsquedas de Google. También la usa con personas: los has been, lo que una vez fue y ya no es."
    ],
    "origin": "",
    "aliases": [
      "fatiga de materiales"
    ],
    "related": [
      "decadencia-y-reconversion",
      "game-awareness",
      "transicion-obligada"
    ],
    "sources": [
      {
        "threadId": "1751154901659381958",
        "title": "El pompismo, segunda parte: Reflexión sobre la adaptación y anticipación en un mundo en constante cambio",
        "url": "https://turrero.vercel.app/turra/1751154901659381958"
      }
    ],
    "books": [
      {
        "title": "MetaMaus: A Look Inside a Modern Classic, Maus",
        "author": "Art Spiegelman",
        "url": "https://www.goodreads.com/book/show/10420795-metamaus"
      },
      {
        "title": "Gretzky",
        "author": "Wayne Gretzky",
        "url": "https://www.goodreads.com/book/show/1781435.Gretzky"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#fatiga-de-materiales",
    "isPillar": false
  },
  {
    "slug": "game-awareness",
    "term": "Game awareness",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "Capacidad de percibir, entender y anticipar cómo cambia el juego, y adaptar tus decisiones en consecuencia.",
    "analogy": "El base de baloncesto que levanta la cabeza y ve que el rival acaba de cambiar a defensa zonal antes de que su equipo pierda tres balones seguidos.",
    "howToApply": "Reserva tiempo periódico para mirar desde arriba el tablero entero: qué reglas nuevas han entrado y qué truco viejo ha dejado de colar.",
    "antiPattern": "Jugar con máxima intensidad y perfección técnica un partido cuyas reglas cambiaron hace seis meses.",
    "paragraphs": [
      "Recuenco toma el término del deporte y lo resume con Wayne Gretzky: patina hacia donde va a estar el puck, no hacia donde está. Lo aplica a la carrera profesional: no puedes salir de la facultad creyendo que sigue en pie el trato que les funcionó a tus padres. Para él es otra forma de su idea de siempre: sin un diagnóstico adecuado y una estrategia acorde no se llega a ninguna parte."
    ],
    "origin": "",
    "aliases": [
      "game awareness"
    ],
    "related": [
      "fatiga-de-materiales",
      "metajuego",
      "niebla-de-guerra",
      "pompismo",
      "roguelike-de-mazos"
    ],
    "sources": [
      {
        "threadId": "1751154901659381958",
        "title": "El pompismo, segunda parte: Reflexión sobre la adaptación y anticipación en un mundo en constante cambio",
        "url": "https://turrero.vercel.app/turra/1751154901659381958"
      }
    ],
    "books": [
      {
        "title": "MetaMaus: A Look Inside a Modern Classic, Maus",
        "author": "Art Spiegelman",
        "url": "https://www.goodreads.com/book/show/10420795-metamaus"
      },
      {
        "title": "Gretzky",
        "author": "Wayne Gretzky",
        "url": "https://www.goodreads.com/book/show/1781435.Gretzky"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#game-awareness",
    "isPillar": false
  },
  {
    "slug": "juego-infinito",
    "term": "Juego infinito",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "Juego sin final cuyo objetivo es seguir jugando, frente al juego finito que busca ganar una partida.",
    "analogy": "La diferencia entre un partido de fútbol (termina en el minuto 90 con marcador) y cuidar tu salud o tu reputación (el objetivo es seguir jugando bien toda la vida).",
    "howToApply": "No quemes tu credibilidad, tu equipo ni tu propuesta futura por ganar un trimestre aislado; diseña para mantenerte relevante década tras década.",
    "antiPattern": "Jugar con reglas de juego finito (saqueo rápido, trucos de corto plazo) dentro de un ecosistema infinito donde la memoria pesa.",
    "paragraphs": [
      "La distinción viene de «Finite and Infinite Games» de James Carse. Recuenco la aplica al private equity: tiene que pasar de juegos finitos, deals aislados con ganadores y perdedores, a un juego infinito centrado en la sostenibilidad, las relaciones con los inversores y la reputación. Lo presenta como lo contrario del blitzscaling."
    ],
    "origin": "James Carse, «Finite and Infinite Games»",
    "aliases": [
      "juego infinito",
      "juegos infinitos",
      "juegos finitos",
      "juego finito"
    ],
    "related": [
      "blitzscaling",
      "post-pe-y-cfu",
      "private-equity"
    ],
    "sources": [
      {
        "threadId": "2030161085941039583",
        "title": "Del PE mecánico al juego infinito y personotécnico",
        "url": "https://turrero.vercel.app/turra/2030161085941039583"
      }
    ],
    "books": [
      {
        "title": "game theory and economic behaviour",
        "author": "Reinhard Selten",
        "url": "https://www.goodreads.com/book/show/4731519-game-theory-and-economic-behaviour"
      },
      {
        "title": "Fooled by Randomness The Hidden Role of Chance in Life and in the Markets",
        "author": "Nassim Nicholas Taleb",
        "url": "https://goodreads.com/book/show/38315.Fooled_by_Randomness_The_Hidden_Role_of_Chance_in_Life_and_in_the_Markets"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#juego-infinito",
    "isPillar": false
  },
  {
    "slug": "moat",
    "term": "Moat",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "Foso económico: ventaja competitiva duradera que protege un negocio de la competencia, según Warren Buffett.",
    "analogy": "El foso con cocodrilos que rodea un castillo: aunque el rival vea exactamente cómo es tu torre, le cuesta sangre y años llegar hasta la puerta.",
    "howToApply": "Construye defensas difíciles de clonar (marca real, red de relaciones, costes de cambio legítimos, oficio acumulado), no solo funciones fáciles de copiar.",
    "antiPattern": "Creer que una ventaja temporal de precio o una función de software replicable en dos semanas es un foso duradero.",
    "paragraphs": [
      "Warren Buffett y Charlie Munger usan la imagen del foso que rodea un castillo económico. Recuenco sostiene que la complejidad es un moat natural: protege a quien sabe manejarla. Con la IA habla del «moat humano»: los negocios que piden cuantización serán apisonados, y tendrán foso los que piden toque humano y capacidad de hacer CPS."
    ],
    "origin": "Warren Buffett",
    "aliases": [
      "moat",
      "moat humano",
      "foso económico"
    ],
    "related": [
      "centauro",
      "ciencias-de-la-complejidad",
      "lujo-humano"
    ],
    "sources": [
      {
        "threadId": "1713075981328519678",
        "title": "La complejidad como ventaja competitiva: una profunda inmersión en sus implicaciones y beneficios",
        "url": "https://turrero.vercel.app/turra/1713075981328519678"
      },
      {
        "threadId": "1725782327131885653",
        "title": "Continuación de la tetralogía sobre CPS e IA: Explorando el moat humano y la sobrecarga cognitiva",
        "url": "https://turrero.vercel.app/turra/1725782327131885653"
      }
    ],
    "books": [
      {
        "title": "Sleights of Mind: What the Neuroscience of Magic Reveals about Our Everyday Deceptions",
        "author": "Stephen L. Macknik",
        "url": "https://www.goodreads.com/es/book/show/7873438"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#moat",
    "isPillar": false
  },
  {
    "slug": "oceano-azul",
    "term": "Océano azul",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "Mercado nuevo donde no compites con nadie, frente al océano rojo saturado donde todos pelean por lo mismo.",
    "analogy": "En lugar de abrir la vigésima hamburguesería idéntica en la misma calle peleando por bajar diez céntimos, inventas una experiencia gastronómica nueva.",
    "howToApply": "Redefine qué valor entregas y a quién, combinando atributos de industrias distintas para hacer irrelevante la guerra de precios.",
    "antiPattern": "Llamar «océano azul» a un nicho donde no hay competidores simplemente porque tampoco hay clientes dispuestos a pagar.",
    "paragraphs": [
      "Recuenco lo cita con el caso de la Wii: Satoru Iwata evitó la guerra de potencia con Sony y Microsoft y buscó consumidores que ni se veían como jugadores. Para él, toda la estrategia del océano azul es un ejemplo de sidestepping. Avisa a las startups de que, para llegar a un océano azul, antes hay que pasar por los early adopters."
    ],
    "origin": "W. Chan Kim y Renée Mauborgne, «Blue Ocean Strategy»",
    "aliases": [
      "océano azul",
      "océanos azules",
      "blue ocean",
      "Blue Ocean Strategy",
      "océano rojo",
      "océanos rojos"
    ],
    "related": [
      "estrategia",
      "sidestepping"
    ],
    "sources": [
      {
        "threadId": "1893203295725871217",
        "title": "Estrategias disruptivas y creatividad en negocios y videojuegos",
        "url": "https://turrero.vercel.app/turra/1893203295725871217"
      },
      {
        "threadId": "1487312375351029760",
        "title": "Gestión de la autosegmentación",
        "url": "https://turrero.vercel.app/turra/1487312375351029760"
      }
    ],
    "books": [
      {
        "title": "The Complete Calvin and Hobbes",
        "author": "Bill Watterson",
        "url": "https://www.goodreads.com/book/show/24812.The_Complete_Calvin_and_Hobbes"
      },
      {
        "title": "Cultish: The Language of Fanaticism",
        "author": "Amanda Montell",
        "url": "https://www.goodreads.com/book/show/55338982-cultish"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#oceano-azul",
    "isPillar": false
  },
  {
    "slug": "sidestepping",
    "term": "Sidestepping",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "Esquivar la pelea frontal con un paso lateral que deja al rival descolocado y abre un espacio propio.",
    "analogy": "Un torero o un judoka que no choca fuerza contra fuerza: da un paso lateral elegante y deja que la inercia del gigante pase de largo.",
    "howToApply": "Cuando un competidor te supera en músculo o presupuesto, busca el ángulo asimétrico donde su tamaño sea una desventaja y no pelees en su terreno.",
    "antiPattern": "Empeñarte en una guerra frontal de desgaste contra alguien diez veces más grande solo por orgullo.",
    "paragraphs": [
      "Recuenco llegó al concepto por el Tekken 3, donde un personaje que no es el más fuerte gana esquivando y dejando al enemigo con el flanco abierto. Su ejemplo de empresa es la Wii: en vez de competir con PS3 y Xbox 360 en potencia, Nintendo apostó por el control por movimiento y por un público nuevo. Esquivar obliga a reajustar pesos y coordinar toda la organización, y dice que su propio CPS es un sidestepping frente a las empresas de servicios clásicas."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "sidestepping",
      "sidestep"
    ],
    "related": [
      "estrategia",
      "metajuego",
      "oceano-azul"
    ],
    "sources": [
      {
        "threadId": "1893203295725871217",
        "title": "Estrategias disruptivas y creatividad en negocios y videojuegos",
        "url": "https://turrero.vercel.app/turra/1893203295725871217"
      },
      {
        "threadId": "1903343437719670927",
        "title": "Por qué Nintendo ganó con Wii: sidestepping, orquestación y foco en experiencia",
        "url": "https://turrero.vercel.app/turra/1903343437719670927"
      },
      {
        "threadId": "1908407119902024001",
        "title": "Sidestepping empresarial: sensórica, reajuste de pesos y coordinación para evitar el golpe",
        "url": "https://turrero.vercel.app/turra/1908407119902024001"
      }
    ],
    "books": [
      {
        "title": "The Complete Calvin and Hobbes",
        "author": "Bill Watterson",
        "url": "https://www.goodreads.com/book/show/24812.The_Complete_Calvin_and_Hobbes"
      },
      {
        "title": "The JOLT Effect: How High Performers Overcome Customer …",
        "author": "Matthew Dixon",
        "url": "https://www.goodreads.com/book/show/61418641-the-jolt-effect"
      },
      {
        "title": "Muay Thai Basics: Introductory Thai Boxing Techniques",
        "author": "Christoph Delp",
        "url": "https://www.goodreads.com/book/show/661185.Muay_Thai_Basics"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#sidestepping",
    "isPillar": false
  },
  {
    "slug": "zugzwang",
    "term": "Zugzwang",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "Posición de ajedrez en la que cualquier movimiento empeora tu posición, pero estás obligado a mover.",
    "analogy": "Una jugada de ajedrez donde preferirías pasar turno y no tocar nada, porque cualquier pieza que muevas empeora tu posición.",
    "howToApply": "Cuando detectes que un problema va hacia un zugzwang, actúa antes de quedarte sin casillas o cambia las reglas del tablero entero.",
    "antiPattern": "Quedarte paralizado esperando que el rival cometa un error milagroso mientras tus pocas opciones buenas desaparecen una a una.",
    "paragraphs": [
      "Recuenco lo aplica al deporte: el entrenador que tiene que deshacerse del equipo que le llevó a la gloria sin que se le echen al cuello. Su tesis es que no hay zugzwang empresarial si usas bien el CPS: incluso con la empresa contra la pared o en suspensión de pagos, siempre hay movimientos en la dirección correcta."
    ],
    "origin": "",
    "aliases": [
      "zugzwang",
      "Zugzwang"
    ],
    "related": [
      "cul-de-sac",
      "hotel-de-hilbert"
    ],
    "sources": [
      {
        "threadId": "1479732314791886850",
        "title": "La plasmación de un Zugzwang clásico en gestas deportivas",
        "url": "https://turrero.vercel.app/turra/1479732314791886850"
      }
    ],
    "books": [
      {
        "title": "Confess: The Autobiography",
        "author": "Rob Halford",
        "url": "https://www.goodreads.com/book/show/48613493-confess"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#zugzwang",
    "isPillar": false
  },
  {
    "slug": "futurismo-de-frontera",
    "term": "Futurismo de frontera",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "La práctica del CPS como puente entre la mejora incremental y el moonshooting: soluciones radicales a problemas sin precedente ejecutables en horizontes de 6 a 18 meses.",
    "analogy": "Ni arreglar un bache en la carretera comarcal ni diseñar planos para colonizar Marte en 2050: construir el puente de campaña que cruza el río crecido hoy mismo con los materiales que ya existen.",
    "howToApply": "Combina pensamiento lateral con tecnologías maduras y fija hipótesis comprobables a seis meses vista con líneas estratégicas a dieciocho, descartando cualquier plan plurianual rígido como wishful thinking.",
    "antiPattern": "Quedarse atrapado en presupuestos anuales que fingen certidumbre o enamorarse de «visiones oceánicas» a diez años que suenan inspiradoras pero no bajan jamás a ejecución.",
    "paragraphs": [
      "Recuenco acuña y reivindica el futurismo de frontera (fringe futurism) como una piedra angular del CPS. Frente a la optimización incremental —propia de problemas claros o complicados— y el futurismo clásico o el diseño especulativo a cinco o diez años vista, el CPS opera en la franja inmediata de lo inédito: problemas sin manual que exigen creatividad radical pero actuación contundente y tangible hoy.",
      "A diferencia del Moonshot Thinking canónico de Peter Diamandis, el futurismo de frontera no exige un avance tecnológico disruptivo ni un batallón de veinteañeros sin experiencia: incorpora el pensamiento lateral con tecnologías maduras de Gunpei Yokoi —como la Game Boy o el iPod— y sustituye la extrapolación de rectas del pasado por hipótesis que se prueban y ajustan sobre el terreno."
    ],
    "origin": "Javier G. Recuenco (fringe futurism en su framework CPS), en diálogo con Gunpei Yokoi y el Moonshot Thinking de Peter Diamandis",
    "aliases": [
      "fringe futurism",
      "futurismo de frontera",
      "moonshooting",
      "lateral thinking with withered technologies"
    ],
    "related": [
      "aftershock",
      "cps",
      "cynefin",
      "eta",
      "incertidumbre",
      "pensamiento-lateral",
      "santuario-humano",
      "sensemaking"
    ],
    "sources": [
      {
        "threadId": "2118979141928104262",
        "title": "El CPS como puente entre lo incremental y el moonshot",
        "url": "https://turrero.vercel.app/turra/2118979141928104262"
      },
      {
        "threadId": "1469583058563121153",
        "title": "Soluciones a problemas imposibles y como abordarlos",
        "url": "https://turrero.vercel.app/turra/1469583058563121153"
      },
      {
        "threadId": "1746066280782631368",
        "title": "CFOs y el desafío de adaptarse en un mundo incierto",
        "url": "https://turrero.vercel.app/turra/1746066280782631368"
      }
    ],
    "books": [
      {
        "title": "Gunpei Yokoi: The Life & Philosophy of Nintendo's God of Toys",
        "author": "Florent Gorges & Takefumi Makino",
        "url": "https://www.goodreads.com/book/show/17126891-gunpei-yokoi"
      },
      {
        "title": "Aha! Insight",
        "author": "Martin Gardner",
        "url": "https://www.goodreads.com/book/show/397238.Aha_Insight"
      },
      {
        "title": "Ingenuity in Mathematics",
        "author": "Ross Honsberger",
        "url": "https://www.goodreads.com/book/show/1416864.Ingenuity_in_Mathematics"
      },
      {
        "title": "Future Ready: How to Master Business Forecasting",
        "author": "Steve Morlidge & Steve Player",
        "url": "https://www.goodreads.com/book/show/7554096-future-ready"
      },
      {
        "title": "Great by Choice: Uncertainty, Chaos, and Luck—Why Some Thrive Despite Them All",
        "author": "Jim Collins & Morten T. Hansen",
        "url": "https://www.goodreads.com/book/show/12675109-great-by-choice"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2118979141928104262",
    "isPillar": false
  },
  {
    "slug": "decadencia-y-reconversion",
    "term": "Decadencia y reconversión",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "El ciclo por el que empresas, sagas familiares y sectores enteros declinan aferrados a su pasado glorioso, y el reto quirúrgico de planificar su transición en vez de sedarlos con subvenciones.",
    "analogy": "Un cirujano frente a un enfermo grave que niega su diagnóstico: operar duele y exige cortar a tiempo, mientras que despachar barbitúricos solo compra calma aparente hasta que la zona muere.",
    "howToApply": "Afronta la caducidad de tu modelo antes de agotar caja y energía emocional; evalúa con crudeza si el equipo actual tiene humildad para pivotar o necesita sangre nueva, y diseña transiciones reales en vez de subsidios perpetuos.",
    "antiPattern": "Pedirle a un asesor una «máquina del tiempo» para volver a los años dorados, colgarse del larguero en la tercera generación por miedo a perder lo heredado o confundir paz social subvencionada con reconversión.",
    "paragraphs": [
      "En su gran arco de mayo y junio de 2025 —junto a su análisis previo de las reconversiones industriales en España—, Recuenco disecciona la anatomía humana y estratégica del declive: desde la nostalgia congelada de «Ventiladores Clyde» de Seth hasta el agotamiento físico y emocional que convierte la reinvención bajo los mismos líderes en «pasarse el juego en modo hardcore».",
      "Ya sea en una pyme familiar atrapada en la aversión al riesgo de la tercera generación o en comarcas enteras arrasadas tras el cierre de la minería, la siderurgia o los astilleros, el diagnóstico coincide: los modelos funcionan hasta que dejan de funcionar. Saltar a tiempo a otra liana —como Nintendo desde las cartas hanafuda o IBM bajo Gerstner— exige audacia y cirugía, nunca cuidados paliativos disfrazados de política industrial."
    ],
    "origin": "Arco de Javier G. Recuenco sobre decadencia empresarial, tercera generación y reconversiones industriales (en diálogo con Seth, Ronald Heifetz, John Kotter y Louis Gerstner)",
    "aliases": [
      "decadencia empresarial",
      "reconversión industrial",
      "riesgo de la tercera generación",
      "salto de la liana",
      "Ventiladores Clyde"
    ],
    "related": [
      "atractores",
      "cul-de-sac",
      "fatiga-de-materiales",
      "harbingers-of-doom",
      "hotel-de-hilbert",
      "post-pe-y-cfu",
      "transicion-obligada",
      "truth-coping"
    ],
    "sources": [
      {
        "threadId": "1918555369426522309",
        "title": "Decadencia empresarial: nostalgia, pasado glorioso y el coste humano de no adaptarse",
        "url": "https://turrero.vercel.app/turra/1918555369426522309"
      },
      {
        "threadId": "1923622497406140517",
        "title": "Decadencia empresarial: cuándo renovar la guardia y cuándo apostar por los mismos líderes",
        "url": "https://turrero.vercel.app/turra/1923622497406140517"
      },
      {
        "threadId": "1926142175105995150",
        "title": "Obsolescencia global y reconversiones industriales: el pulso público-privado",
        "url": "https://turrero.vercel.app/turra/1926142175105995150"
      },
      {
        "threadId": "1936303239193878741",
        "title": "El riesgo de la tercera generación en negocios familiares",
        "url": "https://turrero.vercel.app/turra/1936303239193878741"
      },
      {
        "threadId": "1413787729079545858",
        "title": "Reconversiones. Los sectores estratégicos se pueden y se deben cuestionar, lo que tienes que planificar con ellos es la transición",
        "url": "https://turrero.vercel.app/turra/1413787729079545858"
      }
    ],
    "books": [
      {
        "title": "Leadership Without Easy Answers",
        "author": "Ronald A. Heifetz",
        "url": "https://www.goodreads.com/book/show/6638.Leadership_Without_Easy_Answers"
      },
      {
        "title": "Leading Change",
        "author": "John P. Kotter",
        "url": "https://www.goodreads.com/book/show/51370.Leading_Change"
      },
      {
        "title": "Who Says Elephants Can't Dance? Inside IBM's Historic Turnaround",
        "author": "Louis V. Gerstner Jr.",
        "url": "https://www.goodreads.com/book/show/603985.Who_Says_Elephants_Can_t_Dance_Inside_IBM_s_Historic_Turnaround"
      },
      {
        "title": "The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail",
        "author": "Clayton M. Christensen",
        "url": "https://www.goodreads.com/book/show/26160019-the-innovator-s-dilemma"
      },
      {
        "title": "That Will Never Work: The Birth of Netflix and the Amazing Life of an Idea",
        "author": "Marc Randolph",
        "url": "https://www.goodreads.com/book/show/44428950-that-will-never-work"
      },
      {
        "title": "The Name of the Game",
        "author": "Will Eisner",
        "url": "https://www.goodreads.com/book/show/602517.The_Name_of_the_Game"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1918555369426522309",
    "isPillar": false
  },
  {
    "slug": "harbingers-of-doom",
    "term": "Harbingers of Doom",
    "familyId": "estrategia",
    "tier": "deep",
    "short": "Profesionales entrenados para detectar las primeras grietas de un negocio exitoso y advertir qué puertas del Hotel de Hilbert están a punto de cerrarse, aunque sean percibidos como cenizos.",
    "analogy": "Un inspector de edificios que avisa del primer brote de moho en la esquina antes de que el techo se hunda, y al que los inquilinos odian porque les obliga a hacer la mudanza cuando estaban cómodos.",
    "howToApply": "Escucha a quien señala las debilidades estructurales de tu negocio cuando todavía funciona bien y prepara la mudanza a la siguiente habitación antes de que el temporizador te eche al pasillo.",
    "antiPattern": "Despachar como agorero, envidioso o negativo interesado a cualquiera que cuestione tu propuesta de valor actual mientras sigues relajado disfrutando de rentas pasadas.",
    "paragraphs": [
      "En el hilo turras fundacional de agosto de 2020, Recuenco explica por qué quienes anticipan el agotamiento de modelos de negocio son tachados de cenizos o «Bad News» (como Marvin Barnes). No buscan polemizar ni hacer de enfant terrible: como Karnak de Los Inhumanos, están entrenados para ver la semilla de autodestrucción sembrada en cada negocio exitoso y detectar la pelusa antes de que la habitación del Hotel de Hilbert acumule diez centímetros de basura. Son ecológicamente necesarios —como los escarabajos peloteros, los buitres o las levaduras— para evitar el desahucio."
    ],
    "origin": "Javier G. Recuenco (hilo fundacional, 2020)",
    "aliases": [
      "cenizos",
      "Bad News",
      "inspectores de habitación",
      "Karnak empresarial"
    ],
    "related": [
      "asertividad",
      "cul-de-sac",
      "decadencia-y-reconversion",
      "elefante-negro",
      "hotel-de-hilbert",
      "zeitgeist"
    ],
    "sources": [
      {
        "threadId": "1294936782497361928",
        "title": "Visionarios del futuro empresarial percibidos como cenizos",
        "url": "https://turrero.vercel.app/turra/1294936782497361928"
      },
      {
        "threadId": "1989585041949622370",
        "title": "Ciclos de auge y caída en la era de los bonos basura",
        "url": "https://turrero.vercel.app/turra/1989585041949622370"
      },
      {
        "threadId": "1842453861094609097",
        "title": "Modelos extractivos de datos ponen en riesgo la privacidad y el control de los anunciantes",
        "url": "https://turrero.vercel.app/turra/1842453861094609097"
      },
      {
        "threadId": "1517738336210894850",
        "title": "La importancia de la asertividad en la vida, especialmente en el ámbito de la complejidad.",
        "url": "https://turrero.vercel.app/turra/1517738336210894850"
      },
      {
        "threadId": "1494930305811111938",
        "title": "La transición de la creación del valor del dinero y las operaciones a las propuestas de valor",
        "url": "https://turrero.vercel.app/turra/1494930305811111938"
      }
    ],
    "books": [
      {
        "title": "When Genius Failed: The Rise and Fall of Long-Term Capital Management",
        "author": "Roger Lowenstein",
        "url": "https://www.goodreads.com/es/book/show/10669.When_Genius_Failed"
      },
      {
        "title": "The Buyout of America: How Private Equity Will Cause the Next Great Credit Crisis",
        "author": "Josh Kosman",
        "url": "https://www.goodreads.com/book/show/19013459-the-buyout-of-america"
      },
      {
        "title": "The Art of Everyday Assertiveness: Speak Up. Say No. Set Boundaries. Take Back Control.",
        "author": "Patrick King",
        "url": "https://www.goodreads.com/book/show/37786303-the-art-of-everyday-assertiveness"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1294936782497361928",
    "isPillar": false
  },
  {
    "slug": "emulsificador-de-equipo",
    "term": "Emulsificador de equipo",
    "familyId": "factorx",
    "tier": "core",
    "short": "Persona que consigue que gente incompatible trabaje junta, dando sentido y propósito a una mezcla inestable.",
    "analogy": "La yema de huevo en la mayonesa: sin ella el aceite y el agua se repelen por naturaleza; con ella forman una mezcla estable y deliciosa.",
    "howToApply": "Si juntas perfiles radicalmente distintos (técnicos puros, creativos, negocio), asigna a alguien con autoridad moral y empatía para traducir entre mundos.",
    "antiPattern": "Meter talentos extremos en la misma sala sin traductor ni propósito común y esperar que la magia surja sola.",
    "paragraphs": [
      "Como el emulsionante que une agua y aceite, su labor muchas veces solo se nota cuando desaparece: se le saca del tablero y la mayonesa se corta. No es un mediador, que conecta partes enfrentadas sin necesariamente expandirlas, sino alguien que logra un estado nuevo del grupo. El ejemplo de Recuenco es Andy Fletcher, que sin gran talento musical mantuvo unido a Depeche Mode."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "emulsificador de equipo",
      "emulsificadores de equipo",
      "emulsionador",
      "emulsionantes colectivos"
    ],
    "related": [
      "equipo-apolo",
      "orquestacion-cognitiva",
      "resolutivas-invisibles",
      "sincronizacion-de-pedalada"
    ],
    "sources": [
      {
        "threadId": "1530425616423690244",
        "title": "Los emulsificadores de equipo: el proceso de mezclar dos líquidos que son difíciles de mezclar",
        "url": "https://turrero.vercel.app/turra/1530425616423690244"
      }
    ],
    "books": [
      {
        "title": "A Chef's Guide to Gelling, Thickening, and Emulsifying Agents",
        "author": "Alicia Foundation",
        "url": "https://www.goodreads.com/book/show/25069687-a-chef-s-guide-to-gelling-thickening-and-emulsifying-agents"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#emulsificador-de-equipo",
    "isPillar": false
  },
  {
    "slug": "equipo-apolo",
    "term": "Equipo Apolo",
    "familyId": "factorx",
    "tier": "core",
    "short": "Equipo lleno de gente muy talentosa que rinde muy por debajo de lo esperado.",
    "analogy": "Un equipo de fútbol lleno de Balones de Oro donde nadie defiende, todos quieren tirar las faltas y acaban perdiendo contra un equipo modesto y unido.",
    "howToApply": "Equilibra estrellas con conectores, ejecutores y perfiles complementarios; prioriza la fricción sana sobre el brillo individual de currículums.",
    "antiPattern": "Fichar solo a los «números uno» más egoístas asumiendo que el talento individual se suma en línea recta.",
    "paragraphs": [
      "El talento trae egos enormes, gente que prefiere hacer las cosas a su manera y discusiones hasta la extenuación. Por eso Recuenco los llama bombas de relojería: sin un orquestador cognitivo acaban colapsando, como Van Halen. Conoció el concepto por Elena Sanz, expresidenta de Mensa."
    ],
    "origin": "Meredith Belbin, «Management Teams» (síndrome de Apolo)",
    "aliases": [
      "equipos Apolo",
      "equipo Apolo",
      "síndrome de Apolo"
    ],
    "related": [
      "altas-capacidades",
      "emulsificador-de-equipo",
      "orquestacion-cognitiva",
      "sincronizacion-de-pedalada"
    ],
    "sources": [
      {
        "threadId": "1307211330349420545",
        "title": "Un aspecto crítico en Complex Problem Solving: La construcción de equipos CPS",
        "url": "https://turrero.vercel.app/turra/1307211330349420545"
      },
      {
        "threadId": "1317382505880866816",
        "title": "Cómo Van Halen se deshace como banda por falta de un orquestador cognitivo",
        "url": "https://turrero.vercel.app/turra/1317382505880866816"
      }
    ],
    "books": [
      {
        "title": "Runnin' with the Devil: A Backstage Pass to the Wild Times, Loud Rock, and the Down and Dirty Truth Behind the Making of Van Halen",
        "author": "Noel E. Monk",
        "url": "https://www.goodreads.com/book/show/32726815"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#equipo-apolo",
    "isPillar": false
  },
  {
    "slug": "factor-x",
    "term": "Factor X",
    "familyId": "factorx",
    "tier": "core",
    "short": "Pilar del CPS que estudia la conducta humana en entornos complejos, asumiendo que se puede modelar aunque nunca del todo.",
    "analogy": "La física explica la trayectoria de una pelota, pero si la pelota tiene miedos, orgullo, envidia y ambición, necesitas otra capa de lectura.",
    "howToApply": "Incluye siempre emociones, estatus, miedos, incentivos ocultos y prestigio personal al diseñar cualquier cambio o producto.",
    "antiPattern": "Diseñar soluciones impecables en papel que fracasan el día uno porque asumen que los humanos somos calculadoras racionales.",
    "paragraphs": [
      "Es una de las cuatro macrodisciplinas del framework CPS de Recuenco y reúne la psicología y otras ciencias de la conducta. Se diferencia del «factor humano» en que no da por caótico e incontrolable el comportamiento de las personas: intenta modelarlo y gestionarlo como parte de la solución, sabiendo que todo modelo es incorrecto. Parte de que el ser humano es el sistema complejo primigenio, y de ahí su máxima «no hay CPS sin gestión del Factor X», que casi siempre obliga a tener «la conversación» difícil que nadie quiere tener. Ignorarlo, dice, es garantía de catástrofe, por brillante que sea la estrategia."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "Factor X",
      "factor X"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "asertividad",
      "atractores",
      "business-acumen",
      "cienciarte",
      "ciencias-de-la-complejidad",
      "cps",
      "ecosistemas-tecnologicos",
      "javier-g-recuenco",
      "personotecnia",
      "personotecnia-ia",
      "resolutivas-invisibles",
      "santuario-humano",
      "sesgo",
      "sincronizacion-de-pedalada",
      "sistemas-complejos",
      "test-astudillo",
      "truth-coping",
      "vaca-esferica"
    ],
    "sources": [
      {
        "threadId": "1604019306349592577",
        "title": "Factor humano y su conexión con el CPS",
        "url": "https://turrero.vercel.app/turra/1604019306349592577"
      },
      {
        "threadId": "1669966506208161793",
        "title": "Explorando el Factor X: inspirado por las palabras de @cesarastudillo y su relevancia en el contexto actual",
        "url": "https://turrero.vercel.app/turra/1669966506208161793"
      },
      {
        "threadId": "1446745515501264896",
        "title": "La figura de el 'listo' en el Factor X",
        "url": "https://turrero.vercel.app/turra/1446745515501264896"
      }
    ],
    "books": [
      {
        "title": "Crucial Conversations: Tools for Talking When Stakes are High",
        "author": "Kerry Patterson",
        "url": "https://www.goodreads.com/book/show/15014.Crucial_Conversations"
      },
      {
        "title": "How to Have Impossible Conversations: A Very Practical Guide",
        "author": "Peter Boghossian",
        "url": "https://www.goodreads.com/book/show/43885240-how-to-have-impossible-conversations"
      },
      {
        "title": "Primates: The Fearless Science of Jane Goodall, Dian Fossey, and Biruté Galdikas",
        "author": "Jim Ottaviani",
        "url": "https://www.goodreads.com/book/show/16002028-primates"
      },
      {
        "title": "Doing Good Better: How Effective Altruism Can Help You Make a Difference",
        "author": "William MacAskill",
        "url": "https://www.goodreads.com/book/show/23398748-doing-good-better"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#factor-x",
    "isPillar": true
  },
  {
    "slug": "personotecnia",
    "term": "Personotecnia",
    "familyId": "factorx",
    "tier": "core",
    "short": "Disciplina que construye mensajes y propuestas relevantes para una persona concreta en un contexto concreto, también a escala.",
    "analogy": "La frutera de barrio que sabe que hoy vienes con prisa y prefieres la fruta madura para esta noche, pero aplicado con cabeza y tecnología a miles de personas.",
    "howToApply": "Entiende el momento, necesidad y contexto real de cada persona para ofrecerle algo genuinamente útil y relevante, no un correo genérico con su nombre.",
    "antiPattern": "Pegar un «Hola, {{nombre}}» en un correo masivo idéntico para todos y llamarlo personalización.",
    "paragraphs": [
      "Recuenco la formuló en su libro «Personalización» (2004) como respuesta a la personalización fake del marketing: el modelo es la frutera del barrio, que sabe lo que te gusta, y el reto es lograrlo a escala. La define como el conjunto de metodologías y saberes para construir mensajes relevantes para un receptor y un contexto concretos, con tres reglas. Todo atajo al perfilar se paga en precisión. Cuanto más íntimo es el dato, más recíproca debe ser la relación. Y el contexto es singular, porque las personas no son segmentos estables. Es horizontal y toca toda la cadena de valor, no solo marketing o ventas, y algunos de sus seguidores la describen como «el CPS del Factor X»."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "personotecnia",
      "Personotecnia",
      "personotécnia",
      "personotécnico",
      "personotécnica",
      "personotécnicos"
    ],
    "related": [
      "autosegmentacion",
      "capitalismo-de-vigilancia",
      "contexto",
      "cps",
      "cps-hispano",
      "factor-x",
      "ia-chasm",
      "javier-g-recuenco",
      "neuroestetica",
      "personotecnia-ia",
      "procesos-de-alta-variabilidad",
      "s4-nightmare"
    ],
    "sources": [
      {
        "threadId": "2101155734700405039",
        "title": "Personotecnia y economía de la atención: relevancia, contexto e inmunidad",
        "url": "https://turrero.vercel.app/turra/2101155734700405039"
      },
      {
        "threadId": "1319891330307338240",
        "title": "Hablaremos de #personotecnia (clave en el CPS)",
        "url": "https://turrero.vercel.app/turra/1319891330307338240"
      }
    ],
    "books": [
      {
        "title": "Freemium Economics: Leveraging Analytics and User Segme…",
        "author": "Eric Benjamin Seufert",
        "url": "https://www.goodreads.com/book/show/18607052-freemium-economics"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#personotecnia",
    "isPillar": false
  },
  {
    "slug": "test-astudillo",
    "term": "Test Astudillo",
    "familyId": "factorx",
    "tier": "core",
    "short": "Comprueba si una propuesta de negocio tiene en cuenta el Factor X o solo cuadra en el Excel.",
    "analogy": "Preguntar «¿esto de verdad lo haría una persona normal un martes por la tarde cansada?» antes de aprobar un plan brillante en Excel.",
    "howToApply": "Pasa cada hoja de cálculo y modelo de negocio por la prueba ácida de la conducta humana real: pereza, estatus, desconfianza y hábito.",
    "antiPattern": "Aprobar proyectos millonarios porque las tasas de conversión supuestas en la celda G14 hacen que la gráfica suba preciosa.",
    "paragraphs": [
      "Recuenco lo bautiza con una frase de César Astudillo sobre modelos de negocio y propuestas de valor: «Eso no aprueba primero de sociología». Una propuesta que satisface a la hoja de cálculo pero no entiende la psicología ni el Zeitgeist acaba estrellándose: ninguna vaca esférica que ignore el Factor X aterriza bien. Recuenco lo pone a la altura del test de Bechdel."
    ],
    "origin": "Javier G. Recuenco, a partir de una frase de César Astudillo",
    "aliases": [
      "test Astudillo",
      "Test Astudillo",
      "test de Astudillo"
    ],
    "related": [
      "factor-x",
      "falacia-de-mcnamara",
      "vaca-esferica",
      "zeitgeist"
    ],
    "sources": [
      {
        "threadId": "1581161865035407360",
        "title": "Importancia del cuerpo calloso y el Test Astudillo",
        "url": "https://turrero.vercel.app/turra/1581161865035407360"
      },
      {
        "threadId": "1763816753929347384",
        "title": "El impacto del deseo de tener razón en múltiples contextos",
        "url": "https://turrero.vercel.app/turra/1763816753929347384"
      }
    ],
    "books": [
      {
        "title": "Mistakes Were Made (But Not by Me): Why We Justify Foolish Beliefs, Bad Decisions, and Hurtful Acts",
        "author": "Carol Tavris",
        "url": "https://www.goodreads.com/book/show/522525.Mistakes_Were_Made_But_Not_by_Me_"
      },
      {
        "title": "Hieronymus White: A Bird Who Believed That He Always Was Right",
        "author": "Jeff Moss",
        "url": "https://www.goodreads.com/book/show/1643206.Hieronymus_White"
      },
      {
        "title": "A Mind of Its Own: How Your Brain Distorts and Deceives",
        "author": "Cordelia Fine",
        "url": "https://www.goodreads.com/book/show/357666.A_Mind_of_Its_Own"
      },
      {
        "title": "El arte de tener siempre la razón y otros ensayos",
        "author": "Arthur Schopenhauer",
        "url": "https://www.goodreads.com/es/book/show/8501578"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#test-astudillo",
    "isPillar": false
  },
  {
    "slug": "asertividad",
    "term": "Asertividad",
    "familyId": "factorx",
    "tier": "deep",
    "short": "Capacidad de defender tu criterio con firmeza y franqueza, sin agresividad y sin dejar de respetar al otro.",
    "analogy": "Hablar con la firmeza de una pared de piedra y la calma de un lago: dices «esto no funciona» sin gritar ni pedir perdón por existir.",
    "howToApply": "Separa el problema de la persona: expón hechos, postura y límites con claridad, escuchando sin ceder tus principios por quedar bien.",
    "antiPattern": "Confundir asertividad con agresividad pasiva o con ser un «sí a todo» simpático para evitar el conflicto a corto plazo.",
    "paragraphs": [
      "Recuenco la considera imprescindible en el CPS, porque quien diagnostica tiene que decir verdades incómodas a la dirección, venga quien venga del MIT o del INSEAD. Como la asertividad genera conflicto y casi todo el mundo lo evita, a menudo se sustituye por adulación, y así se degrada la estrategia. Solo funciona acompañada de un autocontrol casi obsesivo que evite la «pirotecnia abrasiva»."
    ],
    "origin": "",
    "aliases": [
      "asertividad",
      "asertivo",
      "asertiva",
      "asertivos"
    ],
    "related": [
      "autoengano",
      "factor-x",
      "harbingers-of-doom",
      "truth-coping",
      "zelotes"
    ],
    "sources": [
      {
        "threadId": "1517738336210894850",
        "title": "La importancia de la asertividad en la vida, especialmente en el ámbito de la complejidad.",
        "url": "https://turrero.vercel.app/turra/1517738336210894850"
      },
      {
        "threadId": "1522830977088819203",
        "title": "Sobre el maltrato al que se somete todos los días a la estrategia, con una mecánica de enhebrado/patchwork de manifestaciones previas",
        "url": "https://turrero.vercel.app/turra/1522830977088819203"
      },
      {
        "threadId": "1647132462982524929",
        "title": "El síndrome del impostor en profesionales de la salud y cómo afecta la toma de decisiones en situaciones críticas",
        "url": "https://turrero.vercel.app/turra/1647132462982524929"
      }
    ],
    "books": [
      {
        "title": "The Assertiveness Guide for Women: How to Communicate Your Needs, Set Healthy Boundaries, and Transform Your Relationships",
        "author": "Julie de Azevedo Hanks",
        "url": "https://www.goodreads.com/book/show/27214316-the-assertiveness-guide-for-women?ac=1&from_search=true&qid=fBqUtoageL&rank=1"
      },
      {
        "title": "The Art of Everyday Assertiveness: Speak Up. Say No. Set Boundaries. Take Back Control.",
        "author": "Patrick King",
        "url": "https://www.goodreads.com/book/show/37786303-the-art-of-everyday-assertiveness"
      },
      {
        "title": "The Elephant in the Room: Silence and Denial in Everyday Life",
        "author": "Eviatar Zerubavel",
        "url": "https://www.goodreads.com/book/show/379779.The_Elephant_in_the_Room"
      },
      {
        "title": "The Imposter Cure: How to stop feeling like a fraud and escape the mind-trap of imposter syndrome",
        "author": "Jessamy Hibberd",
        "url": "https://www.goodreads.com/book/show/53019828-the-imposter-cure?ref=nav_sb_ss_3_21"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#asertividad",
    "isPillar": false
  },
  {
    "slug": "autosegmentacion",
    "term": "Autosegmentación",
    "familyId": "factorx",
    "tier": "deep",
    "short": "Cuando alguien, ante un mensaje no dirigido a él, se identifica solo como interesado mediante su comportamiento.",
    "analogy": "Poner un cartel honesto en la puerta de un taller de jazz: no persigues a nadie por la calle, pero quien ama el jazz entra solo.",
    "howToApply": "Crea señales, contenidos y propuestas tan nítidas y con criterio que el cliente adecuado levante la mano por iniciativa propia.",
    "antiPattern": "Hacer mensajes tibios «para todo el mundo» y luego gastar fortunas en perseguir con anuncios a gente a la que no le importas.",
    "paragraphs": [
      "Recuenco la ve como el mecanismo adecuado para lanzar ideas complejas o productos no mainstream. Él mismo emite mensajes que no son comerciales, pero que hacen que se autoseleccione la gente con la que podría hacer negocio. Si te presionas para llegar a más gente, le echas agua al vino. Y un cliente que no se ha autosegmentado tiene pocas opciones de éxito, aunque necesite el CPS."
    ],
    "origin": "",
    "aliases": [
      "autosegmentación",
      "autosegmentado",
      "autosegmentarse",
      "autosegmente"
    ],
    "related": [
      "alta-agencia",
      "capitalismo-de-vigilancia",
      "personotecnia",
      "personotecnia-ia",
      "s4-nightmare",
      "tokens-de-confianza"
    ],
    "sources": [
      {
        "threadId": "1487312375351029760",
        "title": "Gestión de la autosegmentación",
        "url": "https://turrero.vercel.app/turra/1487312375351029760"
      },
      {
        "threadId": "1771432938288107757",
        "title": "Estrategias y formación en CPS destacadas por venir",
        "url": "https://turrero.vercel.app/turra/1771432938288107757"
      }
    ],
    "books": [
      {
        "title": "Cultish: The Language of Fanaticism",
        "author": "Amanda Montell",
        "url": "https://www.goodreads.com/book/show/55338982-cultish"
      },
      {
        "title": "The Power of Agency: The 7 Principles to Conquer Obstacles, Make Effective Decisions, and Create a Life on Your Own Terms",
        "author": "Paul Napper",
        "url": "https://www.goodreads.com/book/show/39863462-the-power-of-agency"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#autosegmentacion",
    "isPillar": false
  },
  {
    "slug": "man-on-a-mission",
    "term": "Man on a mission",
    "familyId": "factorx",
    "tier": "deep",
    "short": "Persona entregada a una misión que la impulsa con enorme energía, pero con riesgo de visión de túnel.",
    "analogy": "Un rompehielos nuclear: abre camino donde nadie más se atreve, pero si nadie corrige el rumbo puede embestir el puerto entero.",
    "howToApply": "Canaliza esa energía arrolladora dándole un reto digno y rodéalo de personas con autoridad para cuestionar sus puntos ciegos.",
    "antiPattern": "Apagar su fuego con burocracia absurda o, al contrario, dejarlo sin contrapesos hasta que arrase al equipo por visión de túnel.",
    "paragraphs": [
      "Recuenco se reconoce a sí mismo como man on a mission en varios frentes. Las ventajas: vas dopado, tu honestidad desarma y arrasas a la competencia. Los riesgos: visión de túnel, implicación emocional y falta de objetividad y de visión periférica. El peligro serio aparece cuando coinciden tres cosas: tener una misión, no haber encontrado el sweet spot y tener acceso a algún tipo de poder."
    ],
    "origin": "",
    "aliases": [
      "man on a mission",
      "Man on a Mission"
    ],
    "related": [
      "alta-agencia",
      "man-out-of-time",
      "pompismo",
      "sweet-spot"
    ],
    "sources": [
      {
        "threadId": "1753677668996837620",
        "title": "Tercera y última parte del pompismo: El peligro del idealismo y la obsesión",
        "url": "https://turrero.vercel.app/turra/1753677668996837620"
      }
    ],
    "books": [
      {
        "title": "When Prophecy Fails: A Social and Psychological Study of a Modern Group that Predicted the Destruction of the World",
        "author": "Leon Festinger",
        "url": "https://www.goodreads.com/book/show/1835405.When_Prophecy_Fails?ref=nav_sb_ss_1_10"
      },
      {
        "title": "Por qué creemos en mierdas: Cómo nos engañamos a nosotros mismos",
        "author": "Ramón Nogueras Pérez",
        "url": "https://www.goodreads.com/es/book/show/51825715"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#man-on-a-mission",
    "isPillar": false
  },
  {
    "slug": "man-out-of-time",
    "term": "Man out of time",
    "familyId": "factorx",
    "tier": "deep",
    "short": "Visionario adelantado a su época, cuyo talento solo se reconoce y aprovecha cuando ya ha muerto.",
    "analogy": "Un surfista que se lanza a la ola diez segundos demasiado pronto: aunque tenga la mejor técnica del mundo, la ola aún no tiene fuerza y lo hunde.",
    "howToApply": "Acompaña las ideas visionarias de lectura del zeitgeist y puentes pragmáticos hacia el presente para que la sociedad pueda digerirlas hoy.",
    "antiPattern": "Confundir tener razón en abstracto con tener éxito en el mercado: llegar demasiado pronto se parece mucho a equivocarse.",
    "paragraphs": [
      "Recuenco los describe como «OOPArts de carne y hueso» y admira sobre todo su valentía. Sus ejemplos favoritos son Nikola Tesla, mucho menos adaptado a su tiempo que Edison, y el publicitario Howard Gossage, que tenía talento para ser un icono del siglo XX y cuyas ideas disfrutaron generaciones posteriores. El nombre viene de «Tesla: Man Out of Time», la biografía de 1981."
    ],
    "origin": "",
    "aliases": [
      "man out of time",
      "men out of time",
      "Man out of time",
      "MOOT"
    ],
    "related": [
      "man-on-a-mission"
    ],
    "sources": [
      {
        "threadId": "1593870067128627200",
        "title": "Visiones y su ejecución, la importancia ambas y la distancia que las separa",
        "url": "https://turrero.vercel.app/turra/1593870067128627200"
      },
      {
        "threadId": "1576087451524907008",
        "title": "Quién fue la Primera persona que intentó crear una compañía en torno a CPS",
        "url": "https://turrero.vercel.app/turra/1576087451524907008"
      },
      {
        "threadId": "1877979196271550821",
        "title": "Edison vs. Tesla: El choque de dos cosmovisiones en la guerra de las corrientes",
        "url": "https://turrero.vercel.app/turra/1877979196271550821"
      }
    ],
    "books": [
      {
        "title": "Fearful Symmetry: A Study of William Blake",
        "author": "Northrop Frye",
        "url": "https://www.goodreads.com/book/show/131885.Fearful_Symmetry"
      },
      {
        "title": "The One to One Future",
        "author": "Don Peppers",
        "url": "https://www.goodreads.com/book/show/724622.The_One_to_One_Future"
      },
      {
        "title": "Blake",
        "author": "Peter Ackroyd",
        "url": "https://www.goodreads.com/book/show/67720.Blake"
      },
      {
        "title": "Changing the World Is the Only Fit Work for a Grown Man",
        "author": "Steve Harrison",
        "url": "https://www.goodreads.com/book/show/13819354-changing-the-world-is-the-only-fit-work-for-a-grown-man"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#man-out-of-time",
    "isPillar": false
  },
  {
    "slug": "recoger-cable",
    "term": "Recoger cable",
    "familyId": "factorx",
    "tier": "deep",
    "short": "Reconocer un error, procesarlo y cambiar de idea sin aferrarse al ego. En un trabajo exploratorio como el CPS es imprescindible.",
    "analogy": "Un navegante que ve cambiar el viento y corrige las velas sin vergüenza: lo importante es llegar a puerto, no demostrar que su primera apuesta era perfecta.",
    "howToApply": "Normaliza decir en voz alta «con los datos nuevos cambio de opinión»; premia a quien corrige pronto en lugar de ridiculizarlo.",
    "antiPattern": "Aferrarte a una decisión errónea durante meses solo para proteger tu ego y no admitir que te equivocaste.",
    "paragraphs": [
      "Recuenco pone como modelo a Antonio Escohotado, que abandonó el comunismo por la evidencia y no por presión: decepción, asimilación, interiorización y, al final, asunción de responsabilidad. Como el CPS es exploratorio y trabaja con hipótesis, equivocarse y rectificar forma parte del método, aunque el cliente lo perciba como impericia. Lo resume con una frase de Singular Solving: «todas las cagadas están bien mientras sean nuevas»."
    ],
    "origin": "",
    "aliases": [
      "recoger cable"
    ],
    "related": [
      "cps",
      "sesgo",
      "truth-coping"
    ],
    "sources": [
      {
        "threadId": "1578640745979846662",
        "title": "La importancia del recalibrado en escenarios CPS, recoger cable, inversiones de ego y la arquitectura mental Antonio Escohotado",
        "url": "https://turrero.vercel.app/turra/1578640745979846662"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#recoger-cable",
    "isPillar": false
  },
  {
    "slug": "resolutivas-invisibles",
    "term": "Resolutivas invisibles",
    "familyId": "factorx",
    "tier": "deep",
    "short": "El arquetipo de la persona aparentemente secundaria que, sin foco ni grandilocuencia, sostiene la realidad y desbloquea los problemas cotidianos mediante inteligencia práctica y sentido común.",
    "analogy": "La regidora entre bambalinas que nadie aplaude al caer el telón, pero sin cuya calma, ingenio y mano izquierda el decorado se desplomaría en el minuto cinco.",
    "howToApply": "Identifica y protege en tu organización a quienes resuelven fricciones reales sin buscar el foco; dales autoridad directa en vez de obligarlas a operar a través de intermediarios.",
    "antiPattern": "Confundir presencia escénica, título o volumen de voz con capacidad resolutiva, ignorando al perfil discreto que mantiene a flote la operación hasta el día en que se marcha.",
    "paragraphs": [
      "A partir de una propuesta de Pedro Pajares, Recuenco analiza el arquetipo cultural de la «resolutiva invisible» contraponiendo dos figuras memorables: los personajes de Gracita Morales en el cine español de los sesenta y Bettye McCartt, la secretaria de Albert S. Ruddy en la serie «The Offer» sobre el rodaje de «El Padrino».",
      "Aunque pertenecen a mundos distintos —Bettye encarna el rigor operativo luterano y Gracita es CPS Hispano por los cuatro costados—, ambas demuestran que la fuerza real raramente viste de grandilocuencia: mezcla intuición, firmeza moral, lectura humana y capacidad para desactivar conflictos cuando todo parece perdido. En la era de las megamáquinas de IA, esa competencia humana silenciosa se vuelve más valiosa que nunca."
    ],
    "origin": "Javier G. Recuenco (a sugerencia de Pedro Pajares), a partir del contraste cultural entre Gracita Morales y Bettye McCartt en «The Offer»",
    "aliases": [
      "resolutiva invisible",
      "arquetipo Gracita Morales",
      "Bettye McCartt",
      "inteligencia práctica silenciosa"
    ],
    "related": [
      "companias-problem-centric",
      "cps-hispano",
      "emulsificador-de-equipo",
      "factor-x",
      "lujo-humano",
      "orquestacion-cognitiva"
    ],
    "sources": [
      {
        "threadId": "2014969801395814716",
        "title": "El poder silencioso de las resolutivas invisibles",
        "url": "https://turrero.vercel.app/turra/2014969801395814716"
      },
      {
        "threadId": "1779018888203608064",
        "title": "The Offer: Las compañías problem-centric y el CPS sistemático",
        "url": "https://turrero.vercel.app/turra/1779018888203608064"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2014969801395814716",
    "isPillar": false
  },
  {
    "slug": "sincronizacion-de-pedalada",
    "term": "Sincronización de pedalada",
    "familyId": "factorx",
    "tier": "deep",
    "short": "Sutileza de la orquestación cognitiva que consiste en acoplar ritmos, agendas vitales y prioridades de talentos muy distintos sin anular su brillantez individual.",
    "analogy": "Un cuarteto de jazz donde cada músico improvisa a su máximo nivel escuchando el pulso de los demás, frente a una clase de spinning donde todos pedalean igual como autómatas.",
    "howToApply": "Dedica tiempo explícito al inicio del proyecto a alinear agendas internas, plazos, inseguridades y una historia común poderosa en lugar de asumir que la química surgirá sola.",
    "antiPattern": "Juntar estrellas como si fuera una plantilla de PlayStation esperando resultados inmediatos, o intentar sincronizarlas a base de automatismos rígidos y ejercicios corporativos artificiales.",
    "paragraphs": [
      "Recuenco distingue radicalmente esta sutileza del sincronismo robótico de una clase de spinning o de un ejército al paso de la oca. En CPS, acompasar la pedalada exige mantener intacta la excelencia individual mientras cada persona logra operar rodeada de otros perfiles igualmente brillantes e incómodos. No ocurre de forma espontánea: incluso con respeto mutuo, compartir prioridades, tiempos internos y gestionar el síndrome del pato o los fallos inevitables del Factor X requiere tiempo, un relato compartido y un orquestador que evite que el equipo implosione como los Galácticos o Van Halen."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "acompasar la pedalada",
      "orquestación de pedalada",
      "acoplamiento de ritmos",
      "cadencia de equipo"
    ],
    "related": [
      "autopoiesis",
      "emulsificador-de-equipo",
      "equipo-apolo",
      "factor-x",
      "homeostasis",
      "orquestacion-cognitiva"
    ],
    "sources": [
      {
        "threadId": "1489874989809639424",
        "title": "Una sutileza en la orquestación cognitiva: La sincronización de pedalada",
        "url": "https://turrero.vercel.app/turra/1489874989809639424"
      },
      {
        "threadId": "1502547574263361538",
        "title": "Orquestación cognitiva en equipos y cómo esto afecta a su rendimiento",
        "url": "https://turrero.vercel.app/turra/1502547574263361538"
      },
      {
        "threadId": "1834829754488221846",
        "title": "La autopoiesis y la tensión en la evolución empresarial",
        "url": "https://turrero.vercel.app/turra/1834829754488221846"
      },
      {
        "threadId": "1634418954511822848",
        "title": "Loonshots: Cómo las ideas radicales y la colaboración pueden cambiar la historia y la innovación",
        "url": "https://turrero.vercel.app/turra/1634418954511822848"
      }
    ],
    "books": [
      {
        "title": "Loonshots: How to Nurture the Crazy Ideas That Win Wars, Cure Diseases, and Transform Industries",
        "author": "Safi Bahcall",
        "url": "https://www.goodreads.com/book/show/39863447-loonshots"
      },
      {
        "title": "Autopoiesis and Cognition: The Realization of the Living",
        "author": "Humberto R. Maturana, Francisco J. Varela",
        "url": "https://www.goodreads.com/book/show/695442.Autopoiesis_and_Cognition"
      },
      {
        "title": "Social Systems",
        "author": "Niklas Luhmann",
        "url": "https://www.goodreads.com/book/show/337482.Social_Systems"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1489874989809639424",
    "isPillar": false
  },
  {
    "slug": "contexto",
    "term": "Contexto",
    "familyId": "incertidumbre",
    "tier": "core",
    "short": "Circunstancias concretas que rodean un problema y deciden si una solución funciona o fracasa. Para Recuenco, casi todo.",
    "analogy": "La misma semilla que florece en tierra húmeda se muere en el desierto: el éxito nunca estaba solo dentro de la semilla.",
    "howToApply": "Antes de importar un caso de éxito («así lo hace Spotify o Amazon»), audita qué condiciones irrepetibles existían allí y faltan aquí.",
    "antiPattern": "Copiar mejores prácticas como recetas universales ignorando cultura, momento histórico, caja y madurez del equipo.",
    "paragraphs": [
      "Recuenco repite que el contexto es a veces más importante que la cosa en sí. En CPS cada par solución/contexto funciona como una llave y su cerradura: da igual que encajen seis dientes si el séptimo falla. Por eso desconfía de los heurísticos, que no entienden de contexto, y de las recetas copiadas de otro caso. Nos cuesta tenerlo en cuenta porque complica cualquier análisis."
    ],
    "origin": "",
    "aliases": [
      "contexto",
      "context is king",
      "contexto über alles"
    ],
    "related": [
      "all-models-are-wrong",
      "falacia-de-mcnamara",
      "personotecnia",
      "personotecnia-ia",
      "sindrome-del-coronel-thompson",
      "sistemas-complejos"
    ],
    "sources": [
      {
        "threadId": "1684876869949120512",
        "title": "Descifrando el síndrome del Coronel Thompson: implicaciones y reflexiones",
        "url": "https://turrero.vercel.app/turra/1684876869949120512"
      },
      {
        "threadId": "1545639451765997568",
        "title": "Emoción en el CPS",
        "url": "https://turrero.vercel.app/turra/1545639451765997568"
      },
      {
        "threadId": "1337670943276224513",
        "title": "Relación entre Complejidad, Alineamiento y Agile",
        "url": "https://turrero.vercel.app/turra/1337670943276224513"
      }
    ],
    "books": [
      {
        "title": "Tommy: The Gun That Changed America",
        "author": "Karen Blumenthal",
        "url": "https://www.goodreads.com/en/book/show/22718722-tommy"
      },
      {
        "title": "Expert Failure",
        "author": "Roger Koppl",
        "url": "https://www.goodreads.com/book/show/36019959-expert-failure"
      },
      {
        "title": "Situations Matter: Understanding How Context Transforms Your World",
        "author": "Sam Sommers",
        "url": "https://www.goodreads.com/book/show/11361213-situations-matter"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#contexto",
    "isPillar": false
  },
  {
    "slug": "elefante-negro",
    "term": "Elefante negro",
    "familyId": "incertidumbre",
    "tier": "core",
    "short": "Riesgo muy probable que decidimos ignorar y que, cuando estalla, fingimos que nadie podía prever.",
    "analogy": "Un elefante enorme sentado en mitad del salón al que nadie señala para no estropear la cena; cuando aplasta el sofá, todos gritan «¡qué cisne negro!».",
    "howToApply": "Haz una lista periódica de riesgos obvios e incómodos que todo el equipo conoce en privado pero nadie mete en el orden del día.",
    "antiPattern": "Disfrazar de «imprevisto imposible» crisis que llevaban años dando señales clarísimas.",
    "paragraphs": [
      "Recuenco lo toma de la respuesta de Taleb a quienes llamaban «cisne negro» a la pandemia: no era inesperada, solo la habíamos ignorado a conciencia. Lo emparenta con el «elefante en el ascensor» de Rumelt, eso que no vemos porque no nos interesa admitirlo. Cualquier estratega con experiencia ha visto a una compañía no ver lo que tiene delante."
    ],
    "origin": "",
    "aliases": [
      "elefante negro",
      "elefantes negros"
    ],
    "related": [
      "harbingers-of-doom",
      "incertidumbre",
      "sesgo",
      "truth-coping"
    ],
    "sources": [
      {
        "threadId": "1257237030062510080",
        "title": "La pandémia no es un cisne negro",
        "url": "https://turrero.vercel.app/turra/1257237030062510080"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#elefante-negro",
    "isPillar": false
  },
  {
    "slug": "incertidumbre",
    "term": "Incertidumbre",
    "familyId": "incertidumbre",
    "tier": "core",
    "short": "Falta de certezas sobre lo que va a pasar. El CPS la asume y la gestiona, pero el cerebro la soporta fatal.",
    "analogy": "Caminar por un bosque de noche con una linterna que solo alumbra cinco metros: no ves el final, pero sí ves suficiente para dar el siguiente paso seguro.",
    "howToApply": "Sustituye predicciones falsas por opciones reversibles, información temprana y capacidad de adaptación rápida según lo que aparezca.",
    "antiPattern": "Exigir certezas del 100 % antes de moverte o comprar predicciones precisas a vendehúmos solo para calmar la ansiedad.",
    "paragraphs": [
      "Para Recuenco el CPS es en cierta manera la gestión de la incertidumbre. El cerebro humano se bloquea ante ella, y por eso siempre hay dinero para los «reductores de incertidumbre»: profetas, chamanes, adivinos o consultores estratégicos que venden certezas ficticias. Critica que ninguna asignatura escolar enseñe a gestionarla, cuando los entornos de máxima incertidumbre ya son lo normal."
    ],
    "origin": "",
    "aliases": [
      "incertidumbre",
      "incertidumbres",
      "reductores de incertidumbre",
      "gestión de la incertidumbre"
    ],
    "related": [
      "aftershock",
      "all-models-are-wrong",
      "aporia",
      "consultoria",
      "cps-hispano",
      "cultura-luterana",
      "cynefin",
      "elefante-negro",
      "futurismo-de-frontera",
      "niebla-de-guerra",
      "santuario-humano"
    ],
    "sources": [
      {
        "threadId": "1363049095003316224",
        "title": "Al azar en general se le solía representar como a una diosa, todopoderosa, inclemente, y voluble",
        "url": "https://turrero.vercel.app/turra/1363049095003316224"
      },
      {
        "threadId": "1434087755198386177",
        "title": "Taylorismo de mierda",
        "url": "https://turrero.vercel.app/turra/1434087755198386177"
      },
      {
        "threadId": "1520307318931570688",
        "title": "Nuestra relación complicada con la complejidad y su origen, así como también una tesis algo loca al respecto",
        "url": "https://turrero.vercel.app/turra/1520307318931570688"
      }
    ],
    "books": [
      {
        "title": "Utopía: Tecnofuturos 2020",
        "author": "Francisco J. Jariego",
        "url": "https://www.goodreads.com/book/show/55749716-utop-a"
      },
      {
        "title": "The Management Myth: Why the Experts Keep Getting it Wrong",
        "author": "Matthew Stewart",
        "url": "https://www.goodreads.com/book/show/6100832-the-management-myth"
      },
      {
        "title": "Bayesian Statistics the Fun Way: Understanding Statistics and Probability with Star Wars, Lego, and Rubber Ducks",
        "author": "Will Kurt",
        "url": "https://www.goodreads.com/book/show/41392893-bayesian-statistics-the-fun-way"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#incertidumbre",
    "isPillar": false
  },
  {
    "slug": "niebla-de-guerra",
    "term": "Niebla de guerra",
    "familyId": "incertidumbre",
    "tier": "core",
    "short": "Incertidumbre que rodea cualquier problema complejo: se ve poco, se avanza con cautela y hay que actuar igualmente.",
    "analogy": "Conducir por una carretera de montaña con niebla espesa: no apagas el motor, bajas la velocidad, afinas los sentidos y ajustas curva a curva.",
    "howToApply": "Asume que los informes llegan tarde e incompletos; diseña ciclos cortos de exploración y verificación directa sobre el terreno.",
    "antiPattern": "Tomar decisiones irreversibles apostando todo a un solo mapa viejo como si tuvieras visibilidad perfecta del campo.",
    "paragraphs": [
      "Recuenco toma el concepto de Clausewitz y repite que la niebla forma parte de la guerra. Su versión nerd es la niebla de Silent Hill, que reduce la visión a unos metros y convierte un paseo en tensión constante. Según su corolario al teorema de Roca Salvatella, abordar una disciplina más compleja que tu cualificación te mete en una niebla que no impide actuar, pero reduce las posibilidades de éxito."
    ],
    "origin": "Carl von Clausewitz, De la guerra",
    "aliases": [
      "niebla de guerra",
      "fog of war",
      "niebla de Silent Hill",
      "niebla rollo Silent Hill"
    ],
    "related": [
      "colapso-cognitivo",
      "cynefin",
      "game-awareness",
      "incertidumbre",
      "teorema-de-roca-salvatella"
    ],
    "sources": [
      {
        "threadId": "1784107483444687237",
        "title": "Sobre la inexactitud de la medicina y las complejidades científicas en TEDxMálaga",
        "url": "https://turrero.vercel.app/turra/1784107483444687237"
      },
      {
        "threadId": "1971825115165028522",
        "title": "CPS Hispano: la nueva estrategia de creatividad y rebeldía",
        "url": "https://turrero.vercel.app/turra/1971825115165028522"
      }
    ],
    "books": [
      {
        "title": "L'impresa responsabile: Un'intervista su Adriano Olivet…",
        "author": "Luciano Gallino",
        "url": "https://www.goodreads.com/book/show/23273468-l-impresa-responsabile"
      },
      {
        "title": "Lo Barroco",
        "author": "Eugeni d&apos;Ors",
        "url": "https://www.goodreads.com/book/show/39715965-lo-barroco"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#niebla-de-guerra",
    "isPillar": false
  },
  {
    "slug": "procesos-de-alta-variabilidad",
    "term": "Procesos de alta variabilidad (PAV)",
    "familyId": "incertidumbre",
    "tier": "core",
    "short": "Procesos con máxima granularidad y dependencia del contexto, casi siempre con personas, que no caben en un procedimiento estándar.",
    "analogy": "Atender a un paciente complejo o cerrar una venta consultiva frente a embotellar refrescos: cada caso cambia tanto que un guion rígido lo arruina.",
    "howToApply": "No estandarices lo que exige criterio humano contextual; dota a la persona de principios claros, autonomía y buenas herramientas.",
    "antiPattern": "Meter en un call center con script cerrado procesos que requieren empatía, lectura fina y adaptación al caso único.",
    "paragraphs": [
      "Los que interactúan con humanos suelen ser PAV, porque el humano es el sistema complejo primigenio. Tratarlos con una plataforma procedural, como un CRM para la relación cliente-marca, es meter una pieza redonda en un agujero cuadrado, y en atención al cliente produce los «procesos Golem». Recuenco sostiene que elegir entre gestionar el contexto o escalar es una falsa dicotomía, y que diseñarlos pide Personotecnia y un equipo orquestado. Pone como ejemplos los incentivos y el cambio cultural."
    ],
    "origin": "",
    "aliases": [
      "procesos de alta variabilidad",
      "alta variabilidad",
      "PAV",
      "PAVs"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "neuroestetica",
      "orquestacion-cognitiva",
      "personotecnia",
      "personotecnia-ia",
      "sistemas-complejos",
      "taylorismo",
      "vaca-esferica"
    ],
    "sources": [
      {
        "threadId": "1527905242376962054",
        "title": "Los procesos de gran variabilidad",
        "url": "https://turrero.vercel.app/turra/1527905242376962054"
      },
      {
        "threadId": "1642053681766883330",
        "title": "La tensión entre fidelidad y conveniencia en el éxito de productos y servicios en el mercado",
        "url": "https://turrero.vercel.app/turra/1642053681766883330"
      },
      {
        "threadId": "1649673649866113024",
        "title": "Analizando la importancia de los incentivos en el ámbito empresarial y cómo influyen en el éxito o fracaso",
        "url": "https://turrero.vercel.app/turra/1649673649866113024"
      }
    ],
    "books": [
      {
        "title": "The Human Brand",
        "author": "Chris Malone",
        "url": "https://www.goodreads.com/book/show/18202508-the-human-brand"
      },
      {
        "title": "Alan Moore: magia y precisión",
        "author": "Francisco Naranjo",
        "url": "https://www.goodreads.com/book/show/12503753-alan-moore"
      },
      {
        "title": "Nacha Pop: Magia y precisión",
        "author": "Álex Fernández",
        "url": "https://www.goodreads.com/book/show/6708475-nacha-pop"
      },
      {
        "title": "The Monkey's Paw",
        "author": "W.W. Jacobs",
        "url": "https://www.goodreads.com/book/show/8779896-the-monkey-s-paw"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#procesos-de-alta-variabilidad",
    "isPillar": false
  },
  {
    "slug": "aporia",
    "term": "Aporía",
    "familyId": "incertidumbre",
    "tier": "deep",
    "short": "Callejón sin salida del razonamiento: argumentos igual de sólidos en ambos lados y ninguna respuesta clara.",
    "analogy": "Dos mapas igual de precisos que te indican caminos opuestos ante el mismo cruce: discutir más sobre los mapas no resuelve la contradicción.",
    "howToApply": "Cuando un debate se enquista con buenos argumentos en ambos lados, cambia el nivel de análisis o prueba un experimento pequeño en la realidad.",
    "antiPattern": "Quedarte atrapado en reuniones eternas esperando que aparezca el argumento lógico definitivo que convenza a todos.",
    "paragraphs": [
      "Viene del griego «sin camino». Recuenco se reconcilia con ella a través del dominio confuso de Cynefin, donde ni siquiera sabes qué tipo de problema tienes. En el sensemaking es el momento en que nada encaja y no hay más información con la que contrastar. La consultoría tapa esas grietas con lugares comunes. El CPS las trabaja como el kintsugi trabaja las roturas, y en eso ve la parte de arte del oficio."
    ],
    "origin": "",
    "aliases": [
      "aporía",
      "aporías",
      "desorden aporético"
    ],
    "related": [
      "cienciarte",
      "cynefin",
      "incertidumbre",
      "sensemaking"
    ],
    "sources": [
      {
        "threadId": "1865306644827029957",
        "title": "La gestión de la aporía como arte en el CPS",
        "url": "https://turrero.vercel.app/turra/1865306644827029957"
      }
    ],
    "books": [
      {
        "title": "The Aporetic Tradition in Ancient Philosophy",
        "author": "George E. Karamanolis",
        "url": "https://www.goodreads.com/book/show/35749478-the-aporetic-tradition-in-ancient-philosophy"
      },
      {
        "title": "Aporetics: Rational Deliberation in the Face of Inconsistency",
        "author": "Nicholas Rescher",
        "url": "https://www.goodreads.com/book/show/9324452-aporetics"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#aporia",
    "isPillar": false
  },
  {
    "slug": "hormesis",
    "term": "Hormesis",
    "familyId": "incertidumbre",
    "tier": "deep",
    "short": "Dosis de estrés o dolor que, en lugar de destruir, fortalece y enseña. Recuenco la llama «dolor necesario para aprender».",
    "analogy": "Levantar pesas: la micro-rotura controlada del músculo duele hoy, pero es justo lo que dispara la señal para volver más fuerte mañana.",
    "howToApply": "Exponte a retos exigentes con feedback real y riesgo acotado: sin fricción ni error real no hay aprendizaje profundo.",
    "antiPattern": "Sobreproteger a equipos o personas de cualquier incomodidad (fragilidad) o someterlos a estrés crónico letal sin recuperación.",
    "paragraphs": [
      "Viene de la biología: una exposición pequeña a algo dañino provoca una adaptación beneficiosa. Recuenco la aplica a personas y empresas. Al talento junior le falta hormesis porque la IA está eliminando los puestos de entrada donde se aprendía a golpes. Y en las empresas familiares, los herederos que no pasaron las penalidades de los fundadores sufren el relajamiento de la hormesis."
    ],
    "origin": "",
    "aliases": [
      "hormesis",
      "hormésis"
    ],
    "related": [
      "autopoiesis",
      "desierto-tipo-sierra",
      "homeostasis"
    ],
    "sources": [
      {
        "threadId": "1943924463415820480",
        "title": "CPS y el Insight Lab: Soluciones creativas para el marketing complejo",
        "url": "https://turrero.vercel.app/turra/1943924463415820480"
      },
      {
        "threadId": "1832301234105061777",
        "title": "La compleja dinámica de las empresas familiares en la serie 'Galgos'",
        "url": "https://turrero.vercel.app/turra/1832301234105061777"
      },
      {
        "threadId": "1834829754488221846",
        "title": "La autopoiesis y la tensión en la evolución empresarial",
        "url": "https://turrero.vercel.app/turra/1834829754488221846"
      }
    ],
    "books": [
      {
        "title": "Marketing 6.0: The Future Is Immersive",
        "author": "Philip Kotler",
        "url": "https://www.goodreads.com/es/book/show/140691008-marketing-6-0"
      },
      {
        "title": "Your Business, Your Family, Your Legacy: Building a Multigenerational Family Business that Lasts",
        "author": "George A. Isaac",
        "url": "https://www.goodreads.com/book/show/51485709-your-business-your-family-your-legacy"
      },
      {
        "title": "El padrino",
        "author": "Mario Puzo",
        "url": "https://www.goodreads.com/book/show/56817.El_padrino"
      },
      {
        "title": "The Culture Map: Breaking Through the Invisible Boundaries of Global Business",
        "author": "Erin Meyer",
        "url": "https://www.goodreads.com/book/show/22085568-the-culture-map?ref=nav_sb_ss_1_15"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#hormesis",
    "isPillar": false
  },
  {
    "slug": "rabbit-hole",
    "term": "Rabbit hole",
    "familyId": "incertidumbre",
    "tier": "deep",
    "short": "Tema que parece sencillo y en el que acabas hundiéndote, cada vez más profundo y difícil de abandonar.",
    "analogy": "Entrar a mirar un dato rápido sobre relojes mecánicos y acabar a las tres de la madrugada estudiando metalurgia suiza del siglo XVIII.",
    "howToApply": "Usa tus inmersiones profundas como combustible liminal: baja hondo para entender de verdad, pero ponte alarmas para volver a conectar con tu objetivo.",
    "antiPattern": "Quedarte atrapado indefinidamente en la erudición de nicho perdiendo de vista el problema práctico que querías resolver.",
    "paragraphs": [
      "La imagen viene de la caída de Alicia en el cuento de Lewis Carroll. Recuenco defiende bajar por ellos, pero cambiando de madriguera de vez en cuando: varios rabbit holes distintos generan conexiones inesperadas, alimentan el pensamiento liminal y evitan el monocultivo obsesivo del friki que se queda en uno solo. Para él, mucha gente que hace sensemaking falla porque le falta calle y le faltan rabbit holes."
    ],
    "origin": "Lewis Carroll, «Alicia en el país de las maravillas» (origen de la metáfora)",
    "aliases": [
      "rabbit hole",
      "rabbit holes",
      "madriguera de conejo",
      "agujero de conejo"
    ],
    "related": [
      "liminalidad",
      "sensemaking"
    ],
    "sources": [
      {
        "threadId": "1799313887285669975",
        "title": "Exploración de los rabbit holes y su impacto en la mente y la vida",
        "url": "https://turrero.vercel.app/turra/1799313887285669975"
      }
    ],
    "books": [
      {
        "title": "Einstein in Kafkaland: How Albert Fell Down the Rabbit Hole and Came Up With the Universe",
        "author": "Ken Krimstein",
        "url": "https://www.goodreads.com/book/show/195391718-einstein-in-kafkaland"
      },
      {
        "title": "Reaching Down the Rabbit Hole: A Renowned Neurologist Explains the Mystery and Drama of Brain Disease",
        "author": "Allan H. Ropper",
        "url": "https://www.goodreads.com/book/show/19286537-reaching-down-the-rabbit-hole"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#rabbit-hole",
    "isPillar": false
  },
  {
    "slug": "sweet-spot",
    "term": "Sweet spot",
    "familyId": "incertidumbre",
    "tier": "deep",
    "short": "Punto óptimo de equilibrio entre varias dimensiones que compiten. Cuantas más dimensiones, más difícil es encontrarlo.",
    "analogy": "El punto exacto de la raqueta de tenis: unos centímetros más arriba o abajo vibra mal, ahí la pelota sale limpia y sin esfuerzo.",
    "howToApply": "Identifica las 3 o 4 variables en tensión (precio, calidad, velocidad, personalización) y busca su equilibrio ganador en lugar de maximizar solo una.",
    "antiPattern": "Optimizar una única dimensión al 100 % destrozando el resto (por ejemplo, recortar costes hasta arruinar la experiencia).",
    "paragraphs": [
      "Para Recuenco la gracia del sweet spot es que puede ser multidimensional, y ahí nos perdemos: nuestro cerebro y nuestra educación nos empujan a pensar de forma lineal. Lo usa para casi todo: el equilibrio entre calidad y accesibilidad, el grado de asertividad con un cliente o cuánta misión es sana en una persona. Muchas de sus tesis, como el colapso del modelo de Private Equity, las describe como un sweet spot que se desplaza."
    ],
    "origin": "",
    "aliases": [
      "sweet spot",
      "sweet spots",
      "punto dulce"
    ],
    "related": [
      "autopoiesis",
      "bothism",
      "cienciarte",
      "homeostasis",
      "man-on-a-mission",
      "pompismo"
    ],
    "sources": [
      {
        "threadId": "1761287914493796842",
        "title": "La multidimensional del pompismo",
        "url": "https://turrero.vercel.app/turra/1761287914493796842"
      },
      {
        "threadId": "1753677668996837620",
        "title": "Tercera y última parte del pompismo: El peligro del idealismo y la obsesión",
        "url": "https://turrero.vercel.app/turra/1753677668996837620"
      },
      {
        "threadId": "1834829754488221846",
        "title": "La autopoiesis y la tensión en la evolución empresarial",
        "url": "https://turrero.vercel.app/turra/1834829754488221846"
      }
    ],
    "books": [
      {
        "title": "When Prophecy Fails: A Social and Psychological Study of a Modern Group that Predicted the Destruction of the World",
        "author": "Leon Festinger",
        "url": "https://www.goodreads.com/book/show/1835405.When_Prophecy_Fails?ref=nav_sb_ss_1_10"
      },
      {
        "title": "Por qué creemos en mierdas: Cómo nos engañamos a nosotros mismos",
        "author": "Ramón Nogueras Pérez",
        "url": "https://www.goodreads.com/es/book/show/51825715"
      },
      {
        "title": "Social Systems",
        "author": "Niklas Luhmann",
        "url": "https://www.goodreads.com/book/show/337482.Social_Systems"
      },
      {
        "title": "The Innovator's Dilemma: The Revolutionary Book that Will Change the Way You Do Business",
        "author": "Clayton M. Christensen",
        "url": "https://www.goodreads.com/book/show/2615"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#sweet-spot",
    "isPillar": false
  },
  {
    "slug": "teorema-de-roca-salvatella",
    "term": "Teorema de Roca Salvatella",
    "familyId": "incertidumbre",
    "tier": "deep",
    "short": "No hay conversación posible entre quien domina un tema a nivel 2 y quien lo domina a nivel 8.",
    "analogy": "Intentar debatir estrategia de ajedrez avanzado con alguien que aún está aprendiendo cómo se mueve el caballo: habláis idiomas distintos.",
    "howToApply": "Adapta el nivel de abstracción a tu interlocutor o forma primero una base común antes de discutir matices avanzados.",
    "antiPattern": "Frustrarte discutiendo detalles sutiles con quien aún no domina los fundamentos, o despreciar al novato en vez de construir puentes.",
    "paragraphs": [
      "La distancia cognitiva impide cualquier comunicación significativa. Recuenco lo formuló hacia 2015 al ver que era un problema comercial grave para vender soluciones complejas. Su corolario: quien afronta una disciplina de complejidad n con una cualificación menor que n entra en una niebla que no le impide actuar, pero sí reduce sus opciones de éxito. Lo relaciona con la zona de desarrollo próximo de Vygotski."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "teorema de Roca Salvatella",
      "teorema Roca Salvatella",
      "Corolario Recuenco"
    ],
    "related": [
      "niebla-de-guerra",
      "zona-de-desarrollo-proximo"
    ],
    "sources": [
      {
        "threadId": "1352890795897061378",
        "title": "¿Es posible que algunos problemas complejos por su naturaleza intrincada, sean completamente irresolubles?",
        "url": "https://turrero.vercel.app/turra/1352890795897061378"
      },
      {
        "threadId": "1784107483444687237",
        "title": "Sobre la inexactitud de la medicina y las complejidades científicas en TEDxMálaga",
        "url": "https://turrero.vercel.app/turra/1784107483444687237"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#teorema-de-roca-salvatella",
    "isPillar": false
  },
  {
    "slug": "aftershock",
    "term": "After Shock",
    "familyId": "incertidumbre",
    "tier": "deep",
    "short": "Las réplicas y ondas expansivas organizativas, cognitivas y de negocio que golpean tras una disrupción acelerada —como el IA Chasm— cuando el reloj tecnológico desborda la capacidad de absorción humana.",
    "analogy": "En tenis, si esperas a que la bola cruce la red para empezar a moverte, solo ves pasar un borrón; sobrevivir al seísmo exige leer el golpe antes y preparar el cuerpo para las réplicas.",
    "howToApply": "Combina observación directa sobre el terreno (Genchi Genbutsu), lectura de patrones, cálculo realista de ETA y sincronización deliberada de los dos relojes del IA Chasm en lugar de extrapolar casos pasados.",
    "antiPattern": "Quedarse en pilotos cosméticos de IA o informes de consultoría basados en post-mortems históricos y entrar en negación (truth coping) cuando llegan las réplicas del IA Chasm y el Sudden Reality Shock.",
    "paragraphs": [
      "Recuenco destaca «After Shock» —el volumen editado por John Schroeter en homenaje al cincuentenario de «Future Shock» de Alvin Toffler— como el libro sobre futurismo que más le ha influido en su canon CPS, al examinar las réplicas que desata el cambio acelerado y las cuatro fases de la anticipación: lectura situacional, interpretación de patrones, cálculo de ETA y diseño de futuros.",
      "En la ola actual de la IA, esa dinámica de réplicas enlaza directamente con el IA Chasm y la tesis de los dos relojes: mientras el reloj exponencial de la tecnología avanza a toda velocidad, el reloj lento de la absorción organizacional queda desfasado. Las empresas que solo proyectan el pasado se estrellan en el desierto tipo Sierra y sufren el golpe psicológico del Sudden Reality Shock."
    ],
    "origin": "John Schroeter (ed.), «After Shock» (2020), homenaje a «Future Shock» de Alvin Toffler",
    "aliases": [
      "aftershock",
      "After Shock",
      "Future Shock",
      "réplicas post-disrupción",
      "réplicas del IA Chasm",
      "Sudden Reality Shock"
    ],
    "related": [
      "atractores",
      "desierto-tipo-sierra",
      "eta",
      "futurismo-de-frontera",
      "ia-chasm",
      "incertidumbre",
      "reshuffle",
      "sindrome-del-coronel-thompson",
      "truth-coping"
    ],
    "sources": [
      {
        "threadId": "1330075571116777474",
        "title": "La segunda parte de los libros que más me han influido a la hora de convertirme en CPSer",
        "url": "https://turrero.vercel.app/turra/1330075571116777474"
      },
      {
        "threadId": "2075812328566562908",
        "title": "IA Chasm: la brecha entre pilotos y adopción real de IA",
        "url": "https://turrero.vercel.app/turra/2075812328566562908"
      },
      {
        "threadId": "2004624575837958361",
        "title": "Nuevos atractores 2026 redefinen el futuro tecnológico",
        "url": "https://turrero.vercel.app/turra/2004624575837958361"
      },
      {
        "threadId": "1928694865052741791",
        "title": "Truth coping: cómo sobrevivir a verdades incómodas en empresas y personas",
        "url": "https://turrero.vercel.app/turra/1928694865052741791"
      }
    ],
    "books": [
      {
        "title": "After Shock: The World's Foremost Futurists Reflect on 50 Years of Future Shock—and Look Ahead to the Next 50",
        "author": "John Schroeter",
        "url": "https://www.goodreads.com/search?q=After+Shock+John+Schroeter"
      },
      {
        "title": "The Innovator's Dilemma: The Revolutionary Book that Will Change the Way You Do Business",
        "author": "Clayton M. Christensen",
        "url": "https://www.goodreads.com/book/show/2615"
      },
      {
        "title": "The Toyota Way to Lean Leadership: Achieving and Sustaining Excellence Through Leadership Development",
        "author": "Jeffrey K. Liker & Gary L. Convis",
        "url": "https://www.goodreads.com/book/show/11722275"
      },
      {
        "title": "When Breath Becomes Air",
        "author": "Paul Kalanithi",
        "url": "https://www.goodreads.com/book/show/25899336-when-breath-becomes-air"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1330075571116777474",
    "isPillar": false
  },
  {
    "slug": "eta",
    "term": "ETA (Estimated Time of Arrival)",
    "familyId": "incertidumbre",
    "tier": "deep",
    "short": "El cálculo del momento exacto en que una tecnología, tendencia o paradigma deja de ser marginal y la sociedad está lista para adoptarlo.",
    "analogy": "Saber con certeza que va a estallar una tormenta en la montaña, pero no poder precisar si descargará en diez minutos o dentro de tres días mientras decides cuándo levantar el campamento.",
    "howToApply": "Separa la existencia de una idea de su adopción real, dimensiona tu caja y tu resistencia emocional para «aguantar a pulmón» y vigila señales de contexto sin fiarte de rectas de regresión ni predicciones optimistas.",
    "antiPattern": "Asumir que porque una innovación es técnicamente superior o evidente el mercado la adoptará mañana, o quemar todos tus recursos apostando a una fecha fija dictada por un futurista.",
    "paragraphs": [
      "Dentro de las cuatro fases de la anticipación —lectura de situación con Genchi Genbutsu, interpretación de patrones, cálculo del ETA y diseño de futuros—, Recuenco señala el ETA como la disciplina más endiabladamente difícil y la causa de sus peloteras constantes con los futuristas. Acertar el «qué» es factible; acertar el «cuándo» choca con una sociedad formada por sistemas complejos anidados que producen comportamientos emergentes solo legibles a posteriori. Por eso no recomienda ningún libro mágico sobre el ETA: todo lo que sabe lo ha aprendido a golpes y leyendo a Clayton Christensen."
    ],
    "origin": "Aeronáutica / Adaptado a la anticipación en CPS por Javier G. Recuenco",
    "aliases": [
      "ETA",
      "Estimated Time of Arrival",
      "cálculo del cuándo",
      "timing de adopción"
    ],
    "related": [
      "aftershock",
      "cul-de-sac",
      "futurismo-de-frontera",
      "hotel-de-hilbert",
      "sindrome-del-coronel-thompson",
      "zeitgeist"
    ],
    "sources": [
      {
        "threadId": "2009896595203018960",
        "title": "El callejón sin salida: reinventarse para sobrevivir",
        "url": "https://turrero.vercel.app/turra/2009896595203018960"
      },
      {
        "threadId": "1867841781313769674",
        "title": "Sobre la dificultad y recompensa de emprender",
        "url": "https://turrero.vercel.app/turra/1867841781313769674"
      },
      {
        "threadId": "1406126552463470593",
        "title": "Me parece fascinante reflexionar sobre qué hace que algo triunfe o no",
        "url": "https://turrero.vercel.app/turra/1406126552463470593"
      },
      {
        "threadId": "1378251639639920641",
        "title": "Data Driven Companies",
        "url": "https://turrero.vercel.app/turra/1378251639639920641"
      },
      {
        "threadId": "1330075571116777474",
        "title": "La segunda parte de los libros que más me han influido a la hora de convertirme en CPSer",
        "url": "https://turrero.vercel.app/turra/1330075571116777474"
      }
    ],
    "books": [
      {
        "title": "The Innovator's Dilemma: The Revolutionary Book that Will Change the Way You Do Business",
        "author": "Clayton M. Christensen",
        "url": "https://www.goodreads.com/book/show/2615"
      },
      {
        "title": "The Toyota Way to Lean Leadership: Achieving and Sustaining Excellence Through Leadership Development",
        "author": "Jeffrey K. Liker, Gary L. Convis",
        "url": "https://www.goodreads.com/book/show/11722275"
      },
      {
        "title": "Son of a Milkman: My Crazy Life with Tesla",
        "author": "Brian Wheat",
        "url": "https://www.goodreads.com/book/show/53317882-son-of-a-milkman"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2009896595203018960",
    "isPillar": false
  },
  {
    "slug": "all-models-are-wrong",
    "term": "All models are wrong",
    "familyId": "incertidumbre",
    "tier": "deep",
    "short": "Aforismo de George Box ampliado por Recuenco («All models are wrong, context is king»): ningún marco captura la realidad entera y solo el contexto decide cuándo sirve y cuándo te estrella.",
    "analogy": "Un mapa de carreteras es útil para orientarte, pero si lo tomas por la realidad y sigues recto donde anoche se derrumbó el puente, acabas en el barranco.",
    "howToApply": "Usa los modelos y frameworks como pedalera base para pensar más rápido, pero contrástalos siempre contra tu contexto concreto y descártalos sin apego en cuanto choquen con la realidad.",
    "antiPattern": "Caer en la idolatría del framework y seguir consignas universales tipo «nunca te rindas» o recetas cerradas sin distinguir si estás en un bache temporal o en un callejón sin salida.",
    "paragraphs": [
      "Recuenco parte de la máxima de George Box («todos los modelos están equivocados, algunos son útiles») y la convierte en brújula de CPS con su añadido: «context is king». La aplica desde decisiones vitales —saber cuándo tirar la toalla y cuándo apretar los dientes frente a clichés como el de Vince Lombardi o los límites de «The Dip» de Seth Godin— hasta la crítica de sus propias metáforas, como la caja de diez cerrojos de Mortadelo y Filemón. Cuando un modelo se toma como dogma determinista, degenera en cientificismo y ceguera; cuando además es un modelo débil de incentivos, resulta letal."
    ],
    "origin": "George E. P. Box (1976) / «Context is king» por Javier G. Recuenco",
    "aliases": [
      "all models are wrong, context is king",
      "todos los modelos están equivocados",
      "idolatria del framework",
      "modelos débiles"
    ],
    "related": [
      "centauro",
      "cienciarte",
      "contexto",
      "cul-de-sac",
      "incertidumbre",
      "vaca-esferica"
    ],
    "sources": [
      {
        "threadId": "1408725781291876353",
        "title": "Saber cuando tirar la toalla y cuando apretar los dientes. All models are wrong, context is king",
        "url": "https://turrero.vercel.app/turra/1408725781291876353"
      },
      {
        "threadId": "1741006814873821551",
        "title": "El CPS y su rol en la Resolución de Problemas Complejos",
        "url": "https://turrero.vercel.app/turra/1741006814873821551"
      },
      {
        "threadId": "1728306256585101618",
        "title": "Finalizando la serie sobre IA y CPS: reflexiones y experiencias",
        "url": "https://turrero.vercel.app/turra/1728306256585101618"
      },
      {
        "threadId": "1654727164086960130",
        "title": "Continúa la trilogía sobre incentivos: impacto en la dinámica corporativa",
        "url": "https://turrero.vercel.app/turra/1654727164086960130"
      }
    ],
    "books": [
      {
        "title": "The Dip: A Little Book That Teaches You When to Quit (and When to Stick)",
        "author": "Seth Godin",
        "url": "https://goodreads.com/book/show/324748.The_Dip"
      },
      {
        "title": "Proof: The Science of Booze",
        "author": "Adam Rogers",
        "url": "https://www.goodreads.com/book/show/18222694-proof"
      },
      {
        "title": "Kitchen Confidential: Adventures in the Culinary Underbelly",
        "author": "Anthony Bourdain",
        "url": "https://www.goodreads.com/book/show/33313.Kitchen_Confidential"
      },
      {
        "title": "A History of Food in 100 Recipes",
        "author": "William Sitwell",
        "url": "https://www.goodreads.com/book/show/13613646-a-history-of-food-in-100-recipes"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1408725781291876353",
    "isPillar": false
  },
  {
    "slug": "altas-capacidades",
    "term": "Altas capacidades (AACC)",
    "familyId": "mente",
    "tier": "core",
    "short": "Capacidad intelectual muy superior a la media. Recuenco la considera muy valiosa en el CPS y desaprovechada por el sistema.",
    "analogy": "Un motor de Fórmula 1 atrapado en un atasco urbano en primera marcha: si no le das circuito, se sobrecalienta y parece estropeado.",
    "howToApply": "Ofrece problemas complejos reales, autonomía y mentores a la altura en lugar de premiar solo obediencia y repetición.",
    "antiPattern": "Confundir altas capacidades con «sacar dieces sin esfuerzo» o aislar a la persona como si fuera un bicho raro sin habilidades sociales.",
    "paragraphs": [
      "Recuenco defiende que conviene incorporar gente con AACC a los procesos CPS, sobre todo al sensemaking, por su facilidad para ver conexiones novedosas. Aclara que AACC no garantiza nada («AACC ≠ the right stuff») y que las personas con AACC son igual de falibles que las demás. También denuncia que en España ese talento se desaprovecha y que sufren mucho más acoso escolar que la media."
    ],
    "origin": "",
    "aliases": [
      "altas capacidades",
      "Altas Capacidades",
      "AACC",
      "altas capacidades intelectuales"
    ],
    "related": [
      "alta-agencia",
      "cps",
      "equipo-apolo",
      "homework-apocalypse",
      "neurodivergencia",
      "sensemaking",
      "xavier-o-magneto"
    ],
    "sources": [
      {
        "threadId": "1969289174655045782",
        "title": "CPS y AACC: la nueva alianza para la innovación",
        "url": "https://turrero.vercel.app/turra/1969289174655045782"
      },
      {
        "threadId": "2022575861296230582",
        "title": "El talento de las AACC queda subutilizado en España",
        "url": "https://turrero.vercel.app/turra/2022575861296230582"
      },
      {
        "threadId": "1467051970422878210",
        "title": "Inteligencia y socialización: 300 personas se reúnen una vez al año en un hotel para compartir sus vidas",
        "url": "https://turrero.vercel.app/turra/1467051970422878210"
      }
    ],
    "books": [
      {
        "title": "The Genius in All of Us: Why Everything You've Been Tol…",
        "author": "David Shenk",
        "url": "https://www.goodreads.com/book/show/7012191-the-genius-in-all-of-us"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#altas-capacidades",
    "isPillar": false
  },
  {
    "slug": "disonancia-cognitiva",
    "term": "Disonancia cognitiva",
    "familyId": "mente",
    "tier": "core",
    "short": "Malestar que aparece cuando la realidad contradice lo que creemos, y que solemos aliviar reforzando la creencia.",
    "analogy": "La zorra de la fábula que, al no alcanzar las uvas, se convence a sí misma de que estaban verdes para no sentir frustración.",
    "howToApply": "Cuando notes irritación inmediata ante un dato que contradice tu tesis, detente: suele ser señal de que tu ego está defendiendo una creencia caduca.",
    "antiPattern": "Buscar solo informes y asesores que confirmen lo que ya decidiste, descartando cualquier alerta como «negatividad».",
    "paragraphs": [
      "Leon Festinger la estudió observando desde dentro una secta que anunciaba el fin del mundo para el 21 de diciembre de 1954: cuando la profecía falló, la mayoría no abandonó su fe, sino que la racionalizó. Recuenco la usa para explicar por qué un grupo se coaliga contra quien trae la realidad a la sala. Sostiene además que vivimos en la era de la pantomima y la disonancia cognitiva colectiva, y la conecta con lo que él llama truth coping."
    ],
    "origin": "Leon Festinger, teoría de la disonancia cognitiva («When Prophecy Fails»)",
    "aliases": [
      "disonancia cognitiva",
      "disonancia"
    ],
    "related": [
      "autoengano",
      "colapso-cognitivo",
      "matriz-de-compra-de-pescado",
      "pantomima",
      "sesgo",
      "truth-coping"
    ],
    "sources": [
      {
        "threadId": "1933784125086769389",
        "title": "El poder de la disonancia: cómo un fracaso apocalíptico reforzó la fe",
        "url": "https://turrero.vercel.app/turra/1933784125086769389"
      },
      {
        "threadId": "1981980820278591851",
        "title": "El autoengaño: la doble cara de la verdad en la toma de decisiones",
        "url": "https://turrero.vercel.app/turra/1981980820278591851"
      }
    ],
    "books": [
      {
        "title": "Investigating the Stanford Prison Experiment: History o…",
        "author": "Thibault Le Texier",
        "url": "https://www.goodreads.com/book/show/200635660-investigating-the-stanford-prison-experiment"
      },
      {
        "title": "Cults in Our Midst: The Continuing Fight Against Their …",
        "author": "Margaret Thaler Singer",
        "url": "https://www.goodreads.com/book/show/27601.Cults_in_Our_Midst"
      },
      {
        "title": "The Status Game: On Human Life and How to Play It",
        "author": "Will Storr",
        "url": "https://www.goodreads.com/book/show/58642436"
      },
      {
        "title": "The Gaslight Effect: How to Spot and Survive the Hidden…",
        "author": "Robin Stern",
        "url": "https://www.goodreads.com/es/book/show/36520721-the-gaslight-effect"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#disonancia-cognitiva",
    "isPillar": false
  },
  {
    "slug": "neurodivergencia",
    "term": "Neurodivergencia",
    "familyId": "mente",
    "tier": "core",
    "short": "Funcionamiento cerebral distinto del típico (autismo, TDAH, dislexia, altas capacidades) que el sistema educativo y laboral suele no saber gestionar.",
    "analogy": "Sistemas operativos distintos: un Mac no es un Windows estropeado, simplemente procesa distinto y brilla con las herramientas adecuadas.",
    "howToApply": "Diseña formas de trabajar y aprender flexibles que aprovechen la hiperfocalización, la detección de patrones y la mirada no lineal.",
    "antiPattern": "Intentar «normalizar» a golpe de molde único a personas cuya diferencia es precisamente su mayor fuente de valor.",
    "paragraphs": [
      "Recuenco usa la metáfora de los X-Men: frente a la postura «magnetiana» de Peter Thiel y Alex Karp, que ven la neurodivergencia como ventaja para dominar el futuro, él se sitúa en la «xavieriana» de reforma educativa y convivencia. Critica que las empresas exijan un «culture fit» que obliga al neurodivergente a amputar partes de su identidad. De ahí sus proyectos educativos para detectarla pronto y darle cauce."
    ],
    "origin": "",
    "aliases": [
      "neurodivergencia",
      "neurodivergente",
      "neurodivergentes"
    ],
    "related": [
      "alta-agencia",
      "altas-capacidades",
      "homework-apocalypse",
      "neuroestetica",
      "xavier-o-magneto"
    ],
    "sources": [
      {
        "threadId": "2050469219544752257",
        "title": "Xavier o Magneto: neurodivergencia, educación y poder",
        "url": "https://turrero.vercel.app/turra/2050469219544752257"
      },
      {
        "threadId": "2053002707628142991",
        "title": "Educación, neurodivergencia e IA: formar talento para un mundo no lineal",
        "url": "https://turrero.vercel.app/turra/2053002707628142991"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#neurodivergencia",
    "isPillar": false
  },
  {
    "slug": "sesgo",
    "term": "Sesgo cognitivo",
    "familyId": "mente",
    "tier": "core",
    "short": "Desviación sistemática del juicio que el cerebro produce para ahorrar energía y que distorsiona nuestras decisiones.",
    "analogy": "Un atajo mental automático del cerebro: utilísimo para no pensar diez minutos si una sombra es un tigre, traicionero al invertir o fichar.",
    "howToApply": "Diseña procesos que compensen tus sesgos (pre-mortems, segundas opiniones independientes, decisiones por escrito antes de debatir).",
    "antiPattern": "Creer que conocer la lista de sesgos te vuelve inmune a ellos; los sesgos ajenos se ven siempre mucho mejor que los propios.",
    "paragraphs": [
      "Recuenco se apoya en Kahneman y Tversky para sostener que los humanos somos malos evaluando riesgos: evitamos riesgos ante posibles pérdidas y asumimos otros innecesarios para no perder. Explica los sesgos como atajos del cerebro para ahorrar energía, útiles en la evolución pero que a la larga nublan el juicio. Aparecen en todas partes: en la fijación de precios, en los datos de una empresa «data driven» o en la tendencia a rodearnos de gente parecida a nosotros."
    ],
    "origin": "Daniel Kahneman y Amos Tversky",
    "aliases": [
      "sesgo",
      "sesgos",
      "sesgo cognitivo",
      "sesgos cognitivos"
    ],
    "related": [
      "autoengano",
      "disonancia-cognitiva",
      "efecto-gell-mann",
      "elefante-negro",
      "factor-x",
      "recoger-cable",
      "transicion-obligada"
    ],
    "sources": [
      {
        "threadId": "1862770042686845320",
        "title": "La influencia de sesgos en la evaluación de riesgos y decisiones",
        "url": "https://turrero.vercel.app/turra/1862770042686845320"
      },
      {
        "threadId": "1449265748019453954",
        "title": "Problemas relativos a la gestión de los vehículos de transmisión de las ideas, la paja cognitiva y los mecanismos de atribución de valor",
        "url": "https://turrero.vercel.app/turra/1449265748019453954"
      }
    ],
    "books": [
      {
        "title": "Articles on Behavioral Economists, Including: Daniel Kahneman, Richard Thaler, Colin Camerer, Matthew Rabin, Charles A. Holt, Dan Ariely, Howard Rachlin, Hersh Shefrin, Justin Wolfers, Arthur C. Brooks, Herbert Gintis",
        "author": "Hephaestus Books",
        "url": "https://www.goodreads.com/book/show/12758014-articles-on-behavioral-economists-including"
      },
      {
        "title": "The Undoing Project: A Friendship That Changed Our Minds",
        "author": "Michael Lewis",
        "url": "https://www.goodreads.com/book/show/35631386-the-undoing-project"
      },
      {
        "title": "Confessions of the Pricing Man: How Price Affects Everything",
        "author": "Hermann Simon",
        "url": "https://www.goodreads.com/book/show/26784759-confessions-of-the-pricing-man"
      },
      {
        "title": "Good Strategy Bad Strategy: The Difference and Why It Matters",
        "author": "Richard P. Rumelt",
        "url": "https://www.goodreads.com/book/show/11721966-good-strategy-bad-strategy"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#sesgo",
    "isPillar": false
  },
  {
    "slug": "truth-coping",
    "term": "Truth coping",
    "familyId": "mente",
    "tier": "core",
    "short": "Mecanismos psicológicos, emocionales o cognitivos con los que las personas encajan, procesan o esquivan una verdad incómoda.",
    "analogy": "Los mecanismos de defensa que activamos al subirnos a la báscula después de Navidad: negar el número, culpar a la báscula o prometer empezar en septiembre.",
    "howToApply": "Cuando tengas que comunicar una verdad dura a un equipo o cliente, diseña cómo acompañarla para que puedan digerirla y actuar, no bloquearse.",
    "antiPattern": "Soltar verdades brutales sin calibrar si el receptor está preparado para procesarlas, generando rechazo defensivo inmediato.",
    "paragraphs": [
      "Recuenco reconoce que el término no está establecido en la literatura y lo define él. El CPS es «una máquina de poner a gente en situaciones de truth coping»: «¿cómo que no tenemos marca?», «¿cómo que mi empresa vale cero?». Por eso gestionar la reacción emocional de quien se enfrenta a la realidad es parte del trabajo del CPSer. Lo ilustra con la secta que estudió Festinger, cuyos miembros racionalizaron el fracaso de su profecía en vez de abandonar la fe."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "truth coping",
      "Truth Coping"
    ],
    "related": [
      "aftershock",
      "asertividad",
      "autoengano",
      "colapso-cognitivo",
      "decadencia-y-reconversion",
      "disonancia-cognitiva",
      "elefante-negro",
      "espiral-del-pa-que",
      "factor-x",
      "pantomima",
      "recoger-cable"
    ],
    "sources": [
      {
        "threadId": "1928694865052741791",
        "title": "Truth coping: cómo sobrevivir a verdades incómodas en empresas y personas",
        "url": "https://turrero.vercel.app/turra/1928694865052741791"
      },
      {
        "threadId": "2045382646054674761",
        "title": "Defender una tesis contrarian sin perder la justicia",
        "url": "https://turrero.vercel.app/turra/2045382646054674761"
      }
    ],
    "books": [
      {
        "title": "Siddhartha",
        "author": "Hermann Hesse",
        "url": "https://www.goodreads.com/book/show/52036.Siddhartha"
      },
      {
        "title": "When Breath Becomes Air",
        "author": "Paul Kalanithi",
        "url": "https://www.goodreads.com/book/show/25899336-when-breath-becomes-air"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#truth-coping",
    "isPillar": false
  },
  {
    "slug": "matriz-de-compra-de-pescado",
    "term": "Matriz de compra de pescado",
    "familyId": "mente",
    "tier": "core",
    "short": "Heurístico de higiene mental que recuerda que no puedes comprarle todo el pescado a nadie: puedes aprovechar lo brillante de un autor en un ámbito sin tragarte sus disparates en otro.",
    "analogy": "Ir a la pescadería y comprarle solo las merluzas frescas que domina, dejando en el mostrador el marisco dudoso, en lugar de llevarte el puesto entero o vetar al pescadero para siempre.",
    "howToApply": "Separa cada idea del prestigio o la tribu de quien la emite: evalúa qué piezas son aprovechables y cuáles son ideología, ego o terreno ajeno a su dominio.",
    "antiPattern": "Convertirte en discípulo zelote que defiende cada barbaridad de su referente, o cancelar toda la obra valiosa de alguien en cuanto dice una tontería fuera de su especialidad.",
    "paragraphs": [
      "Recuenco creó esta expresión para aliviar cognitivamente «esa punzada que nos da el cerebro cuando lees algo de una persona que respetas en un ámbito fumándose un Davidoff en otro». La define como un Memento Mori contra el pensamiento monocromo y el culto a la personalidad: no ser keynesiano aunque apliques dos máximas de Keynes, admirar a Taleb, Snowden o Mark Ritson sin volverse zelote, o reírse de las tesis pompistas de Piketty mientras disfrutas su cómic. Nadie es completamente idiota ni infalible; no hace falta comprarse todo el cerdo si solo quieres chuletas."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "no comprarle todo el pescado a nadie",
      "teoría del pescado",
      "fumarse un Davidoff",
      "no comprarse todo el cerdo"
    ],
    "related": [
      "bothism",
      "chavesnogalismo",
      "disonancia-cognitiva",
      "pompismo",
      "sensemaking",
      "zelotes"
    ],
    "sources": [
      {
        "threadId": "1804386948938699148",
        "title": "La importancia del sensemaking en la toma de decisiones y la inteligencia humana",
        "url": "https://turrero.vercel.app/turra/1804386948938699148"
      },
      {
        "threadId": "1357937382318886913",
        "title": "Si usted está ideologizado, no tiene por qué sufrir como yo y puede hacerme unfollow tranquilamente",
        "url": "https://turrero.vercel.app/turra/1357937382318886913"
      },
      {
        "threadId": "1365564279232028681",
        "title": "La división clásica en el Marketing entre creatividad y estrategia",
        "url": "https://turrero.vercel.app/turra/1365564279232028681"
      },
      {
        "threadId": "1753677668996837620",
        "title": "Tercera y última parte del pompismo: El peligro del idealismo y la obsesión",
        "url": "https://turrero.vercel.app/turra/1753677668996837620"
      },
      {
        "threadId": "1758760266068590698",
        "title": "Explorando el cómic como expresión del pompismo",
        "url": "https://turrero.vercel.app/turra/1758760266068590698"
      },
      {
        "threadId": "2009896595203018960",
        "title": "El callejón sin salida: reinventarse para sobrevivir",
        "url": "https://turrero.vercel.app/turra/2009896595203018960"
      }
    ],
    "books": [
      {
        "title": "Sensemaking in Organizations",
        "author": "Karl E. Weick",
        "url": "https://www.goodreads.com/book/show/818257.Sensemaking_in_Organizations"
      },
      {
        "title": "Por qué creemos en mierdas: Cómo nos engañamos a nosotros mismos",
        "author": "Ramón Nogueras",
        "url": "https://www.goodreads.com/es/book/show/51825715"
      },
      {
        "title": "Black-And-White Thinking: The Burden of a Binary Brain in a Complex World",
        "author": "Kevin Dutton",
        "url": "https://www.goodreads.com/book/show/53359432-black-and-white-thinking"
      },
      {
        "title": "When Prophecy Fails: A Social and Psychological Study of a Modern Group that Predicted the Destruction of the World",
        "author": "Leon Festinger, Henry W. Riecken, Stanley Schachter",
        "url": "https://www.goodreads.com/book/show/1835405.When_Prophecy_Fails?ref=nav_sb_ss_1_10"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1804386948938699148",
    "isPillar": false
  },
  {
    "slug": "bothism",
    "term": "Bothism",
    "familyId": "mente",
    "tier": "deep",
    "short": "Ante dos planteamientos enfrentados, buscar que convivan las fortalezas de ambos en lugar de elegir uno solo.",
    "analogy": "En lugar de discutir si un coche necesita acelerador o freno, entiendes que conducir exige usar ambos en el momento justo.",
    "howToApply": "Ante una falsa dicotomía («calidad o velocidad», «arte o ciencia»), busca cómo integrar la tensión productiva entre ambos polos.",
    "antiPattern": "Caer en el extremismo binario de bandos o en un punto medio tibio que diluye las virtudes de las dos posturas.",
    "paragraphs": [
      "Recuenco toma el término de Mark Ritson, que lo usó para la vieja pelea del marketing entre creatividad y estrategia. No es un término medio ingenuo: prescindir de uno de los dos lados es desaprovechar la solución, y eso casa con la complejidad. Recuenco lo aplica a sí mismo, por ejemplo al confiar a la vez en los datos y en la intuición, y avisa de que quien se acoge al bothism recibe golpes de todos los bandos."
    ],
    "origin": "Mark Ritson, columna en Marketing Week (2020)",
    "aliases": [
      "bothism",
      "#bothism"
    ],
    "related": [
      "chavesnogalismo",
      "matriz-de-compra-de-pescado",
      "sweet-spot",
      "xavier-o-magneto"
    ],
    "sources": [
      {
        "threadId": "1365564279232028681",
        "title": "La división clásica en el Marketing entre creatividad y estrategia",
        "url": "https://turrero.vercel.app/turra/1365564279232028681"
      },
      {
        "threadId": "1370628575775367168",
        "title": "Las posibilidades reales que tienes de tomar una decisión con certidumbre son por lo general cero",
        "url": "https://turrero.vercel.app/turra/1370628575775367168"
      },
      {
        "threadId": "1796796569829687349",
        "title": "El desafío del sensemaking y el colapso cognitivo: explorando fenómenos y ejemplos en la cultura popular y la literatura",
        "url": "https://turrero.vercel.app/turra/1796796569829687349"
      }
    ],
    "books": [
      {
        "title": "Black-And-White Thinking: The Burden of a Binary Brain in a Complex World",
        "author": "Kevin Dutton",
        "url": "https://www.goodreads.com/book/show/53359432-black-and-white-thinking"
      },
      {
        "title": "The Chaos Scenario",
        "author": "Bob Garfield",
        "url": "https://www.goodreads.com/book/show/6589670-the-chaos-scenario"
      },
      {
        "title": "The Undoing Project: A Friendship That Changed Our Minds",
        "author": "Michael Lewis",
        "url": "https://www.goodreads.com/book/show/35631386-the-undoing-project"
      },
      {
        "title": "Decisive Intuition: Use Your Gut Instincts to Make Smart Business Decisions",
        "author": "Rick Snyder",
        "url": "https://www.goodreads.com/book/show/42091151-decisive-intuition"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#bothism",
    "isPillar": false
  },
  {
    "slug": "transicion-obligada",
    "term": "Transición obligada",
    "familyId": "mente",
    "tier": "deep",
    "short": "Nadie cambia por iniciativa propia: se cambia cuando el entorno obliga, y aun así cabe negarse.",
    "analogy": "Nadie cambia de colchón hasta que le duele la espalda de verdad: la comodidad presente casi siempre vence a la mejora futura.",
    "howToApply": "Si necesitas impulsar un cambio, haz visible el coste real de no moverse y diseña la transición antes de que la crisis te obligue sin margen.",
    "antiPattern": "Esperar que una organización cómoda se transforme por mera inspiración de una charla motivacional mientras todo parece ir bien.",
    "paragraphs": [
      "«Nadie, nadie, nadie cambia de motu proprio», escribe Recuenco: el entorno sugiere el cambio y siempre queda la opción de no hacerlo. La razón es que el cerebro busca ahorrar energía y prefiere repetir lo que ya tiene automatizado. Lo ilustra comparando cómo gestionaron el Madrid y el Barcelona el relevo generacional de sus plantillas."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "transición obligada",
      "transiciones obligadas"
    ],
    "related": [
      "decadencia-y-reconversion",
      "desierto-tipo-sierra",
      "fatiga-de-materiales",
      "sesgo"
    ],
    "sources": [
      {
        "threadId": "1299619999200485377",
        "title": "Sobre oportunidades, puertas que se abren y se cierran",
        "url": "https://turrero.vercel.app/turra/1299619999200485377"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#transicion-obligada",
    "isPillar": false
  },
  {
    "slug": "xavier-o-magneto",
    "term": "Xavier o Magneto",
    "familyId": "mente",
    "tier": "deep",
    "short": "Dilema clásico del cómic X-Men aplicado a la neurodivergencia y el talento extremo: integrarse paciente en un sistema hostil o rebelarse contra él.",
    "analogy": "La eterna pregunta del talento diferente frente a un sistema rígido: ¿construyes puentes pacientes desde dentro o rompes la baraja desde fuera?",
    "howToApply": "Crea entornos donde la diferencia intelectual y neurodivergente tenga propósito y convivencia real, evitando tanto la sumisión como el aislamiento.",
    "antiPattern": "Forzar al talento singular a elegir entre ocultarse para encajar o marginarse peleado con todo el mundo.",
    "paragraphs": [
      "A través de los mutantes de Marvel, Recuenco analiza la tensión que viven muchas personas con altas capacidades o perfiles neurodivergentes frente a escuelas y empresas diseñadas para la media estadística.",
      "El enfoque CPS huye de la resignación pasiva y del resentimiento estéril: busca diseñar entornos, puentes educativos y espacios de convivencia real donde el talento distinto pueda florecer sin mutilarse ni declararle la guerra al mundo."
    ],
    "origin": "Serie sobre educación, neurodivergencia y cultura pop en El Turrero Post (2026).",
    "aliases": [
      "Dilema X-Men",
      "Talento y sistema"
    ],
    "related": [
      "alta-agencia",
      "altas-capacidades",
      "bothism",
      "cps-hispano",
      "homework-apocalypse",
      "neurodivergencia",
      "zona-de-desarrollo-proximo"
    ],
    "sources": [
      {
        "threadId": "2050469219544752257",
        "title": "Xavier o Magneto: neurodivergencia, educación y poder",
        "url": "https://turrero.vercel.app/turra/2050469219544752257"
      },
      {
        "threadId": "2065676893144134027",
        "title": "Un colegio para neurodivergentes y neurotípicos en convivencia real",
        "url": "https://turrero.vercel.app/turra/2065676893144134027"
      }
    ],
    "books": [
      {
        "title": "The Neurodiversity Edge: The Essential Guide to Embraci…",
        "author": "Maureen Dunne",
        "url": "https://www.goodreads.com/en/book/show/210900283-the-neurodiversity-edge"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2050469219544752257",
    "isPillar": false
  },
  {
    "slug": "zona-de-desarrollo-proximo",
    "term": "Zona de desarrollo próximo",
    "familyId": "mente",
    "tier": "deep",
    "short": "Distancia entre lo que una persona aprende por sí sola y lo que alcanza con la guía de un mentor.",
    "analogy": "Aprender a montar en bici con alguien sujetando el sillín: solo todavía te caes, con un guía atento das el salto que te faltaba.",
    "howToApply": "Coloca a cada persona en retos un escalón por encima de su nivel actual, acompañados por un mentor que retire el apoyo poco a poco.",
    "antiPattern": "Dejar a la gente en tareas aburridas que ya domina o lanzarla sin red a abismos que solo producen bloqueo y pánico.",
    "paragraphs": [
      "Recuenco toma el concepto de Lev Vygotski y lo enlaza con su teorema de Roca Salvatella: no hay conversación posible entre alguien que domina un tema a nivel 2 y otro a nivel 8. Lo vio pronto como un problema comercial grave al vender soluciones complejas. En la misma línea propuso la zona de confianza próxima (ZCP), el mayor salto en el vacío que puedes pedirle a una persona."
    ],
    "origin": "Lev Vygotski",
    "aliases": [
      "zona de desarrollo próximo",
      "ZDP",
      "ZDPs"
    ],
    "related": [
      "teorema-de-roca-salvatella",
      "tokens-de-confianza",
      "xavier-o-magneto"
    ],
    "sources": [
      {
        "threadId": "1352890795897061378",
        "title": "¿Es posible que algunos problemas complejos por su naturaleza intrincada, sean completamente irresolubles?",
        "url": "https://turrero.vercel.app/turra/1352890795897061378"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#zona-de-desarrollo-proximo",
    "isPillar": false
  },
  {
    "slug": "alta-agencia",
    "term": "Alta agencia",
    "familyId": "mente",
    "tier": "deep",
    "short": "La disposición radical a asumir el mando de un problema bajo tus propias reglas cuando compruebas que el sistema institucional no está diseñado para resolverlo.",
    "analogy": "Como los padres de «El aceite de Lorenzo», que ante el veredicto médico de «incurable» se encerraron en bibliotecas científicas hasta entender la bioquímica y hallar una vía propia.",
    "howToApply": "Deja de esperar validación o permiso de estructuras pensadas para la media; construye tu propio sistema de aprendizaje, rodéate de pares con ambición real y diseña un entorno a tu medida.",
    "antiPattern": "Patologizar los perfiles atípicos de alto empuje confundiéndolos con frialdad o psicopatía, o delegar pasivamente tu futuro en un sistema que ya demostró que no encaja contigo.",
    "paragraphs": [
      "En el universo CPS, la alta agencia (high agency) aparece en dos territorios complementarios: el aprendizaje y la crianza fuera del molde —como la historia de Elena creando un entorno a medida para Adrián o los padres de Lorenzo Odone— y el auge de perfiles neurodivergentes de doble excepcionalidad (autismo funcional y altas capacidades) que no negocian con la mediocridad social.",
      "Recuenco destaca su potencia creativa —«Fear the Autist»— pero añade una cautela crucial: sin propósito ético ni orquestación cognitiva, esa misma fuerza puede descarrilar o volverse destructiva."
    ],
    "origin": "Javier G. Recuenco (en diálogo con la literatura de High Agency y el arco educativo)",
    "aliases": [
      "alta agencia",
      "high agency",
      "Fear the Autist",
      "agencia alta"
    ],
    "related": [
      "altas-capacidades",
      "autosegmentacion",
      "homework-apocalypse",
      "man-on-a-mission",
      "neurodivergencia",
      "orquestacion-cognitiva",
      "xavier-o-magneto"
    ],
    "sources": [
      {
        "threadId": "2027648364364312699",
        "title": "Autismo funcional, agencia alta y poder en la era digital",
        "url": "https://turrero.vercel.app/turra/2027648364364312699"
      },
      {
        "threadId": "2073294311634973165",
        "title": "Autonomía, aprendizaje y agencia frente a un sistema que no encaja",
        "url": "https://turrero.vercel.app/turra/2073294311634973165"
      },
      {
        "threadId": "1771432938288107757",
        "title": "Estrategias y formación en CPS destacadas por venir",
        "url": "https://turrero.vercel.app/turra/1771432938288107757"
      }
    ],
    "books": [
      {
        "title": "The Power of Agency: The 7 Principles to Conquer Obstacles, Make Effective Decisions, and Create a Life on Your Own Terms",
        "author": "Paul Napper & Anthony Rao",
        "url": "https://www.goodreads.com/book/show/39863462-the-power-of-agency"
      },
      {
        "title": "Antifragile: Things That Gain from Disorder",
        "author": "Nassim Nicholas Taleb",
        "url": "https://www.goodreads.com/search?q=Antifragile+Nassim+Nicholas+Taleb"
      },
      {
        "title": "Mindset: The New Psychology of Success",
        "author": "Carol S. Dweck",
        "url": "https://www.goodreads.com/search?q=Mindset+Carol+Dweck"
      },
      {
        "title": "Drive: The Surprising Truth About What Motivates Us",
        "author": "Daniel H. Pink",
        "url": "https://www.goodreads.com/search?q=Drive+Daniel+Pink"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2027648364364312699",
    "isPillar": false
  },
  {
    "slug": "homework-apocalypse",
    "term": "Homework Apocalypse",
    "familyId": "mente",
    "tier": "deep",
    "short": "El colapso de las tareas escolares y la evaluación tradicional ante una IA que resuelve el 80–90 % de los deberes, sometiendo la educación a un filtro darwiniano existencial.",
    "analogy": "Seguir evaluando la forma física de un gimnasio por cuántos kilos suben hasta la barra cuando casi todos los alumnos han traído una carretilla elevadora escondida.",
    "howToApply": "Rediseña la evaluación en torno al proceso, el juicio y la defensa oral; prohíbe usar la IA como muleta pasiva e intégrala desde primaria como tutor socrático que exija razonar y explicar.",
    "antiPattern": "Fingir que no pasa nada, perseguir el plagio con detectores inútiles o dejar que los alumnos deleguen el pensamiento en ChatGPT hasta hundir su aprendizaje real.",
    "paragraphs": [
      "Recuenco retoma el diagnóstico de Ethan Mollick en su gran arco educativo de mayo y junio de 2026: el Homework Apocalypse no es una amenaza futura, ya ocurrió. La IA resuelve entre el 80 y el 90 % de las tareas clásicas, y la evidencia empírica —como el ensayo aleatorizado en institutos de Turquía con GPT-4— demuestra que usarla sin guía como muleta sube la nota de los deberes pero hunde un 17 % el rendimiento en el examen final.",
      "Lejos de ser un problema técnico de plagio, la IA somete al tramo de 0 a 18 años y a la universidad a la mayor presión sistémica en dos siglos. Ante el tren bala que ya viene, se abre una bifurcación brutal entre la vía Magneto —dejar que el sistema actúe como filtro darwiniano y cosechar solo a los mutantes con agencia— y la vía Xavier: construir desde infantil centros capaces de formar juicio, detectar neurodivergencia y usar la IA como tutor socrático."
    ],
    "origin": "Ethan Mollick (co-inteligencia y Homework Apocalypse), integrado por Javier G. Recuenco junto con el marco universitario de José Sepúlveda",
    "aliases": [
      "Homework Apocalypse",
      "apocalipsis de las tareas",
      "filtro darwiniano educativo",
      "co-inteligencia en educación"
    ],
    "related": [
      "alta-agencia",
      "altas-capacidades",
      "centauro",
      "ia-chasm",
      "neurodivergencia",
      "xavier-o-magneto"
    ],
    "sources": [
      {
        "threadId": "2063143047357931689",
        "title": "Infantil, primaria y secundaria ante la IA y el filtro darwiniano",
        "url": "https://turrero.vercel.app/turra/2063143047357931689"
      },
      {
        "threadId": "2065676893144134027",
        "title": "Un colegio para neurodivergentes y neurotípicos en convivencia real",
        "url": "https://turrero.vercel.app/turra/2065676893144134027"
      },
      {
        "threadId": "2060639447427727568",
        "title": "La IA y el futuro de la universidad: estrategia, misión y gobierno",
        "url": "https://turrero.vercel.app/turra/2060639447427727568"
      }
    ],
    "books": [
      {
        "title": "Ender's Game",
        "author": "Orson Scott Card",
        "url": "https://www.goodreads.com/book/show/375802.Ender_s_Game"
      },
      {
        "title": "The Neurodiversity Edge: The Essential Guide to Embracing Autism, ADHD, Dyslexia, and Other Neurological Differences for Any Organization",
        "author": "Maureen Dunne",
        "url": "https://www.goodreads.com/en/book/show/210900283-the-neurodiversity-edge"
      },
      {
        "title": "Robot-Proof, Revised and Updated Edition: Higher Education in the Age of Artificial Intelligence",
        "author": "Joseph E. Aoun",
        "url": "https://www.goodreads.com/book/show/205435216-robot-proof-revised-and-updated-edition"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2063143047357931689",
    "isPillar": false
  },
  {
    "slug": "autoengano",
    "term": "Autoengaño",
    "familyId": "mente",
    "tier": "deep",
    "short": "Mecanismo psicológico y evolutivo por el que una persona se convence de una creencia distorsionada para proteger su ego, su estatus o su estabilidad emocional ante una realidad dolorosa.",
    "analogy": "Bajar el volumen de la alarma de incendios y convencerse de que solo es humo de la tostadora porque salir del edificio obligaría a admitir que tu casa está ardiendo.",
    "howToApply": "Separa la claridad brutal de tu diagnóstico interno de cómo dosificas la verdad ante tu equipo o cliente, sin cruzar nunca la línea que te obliga a validar decisiones con las que disientes de raíz.",
    "antiPattern": "Creer que soltar verdades crudas sin gestionar el truth coping convencerá a nadie —o, al revés, tolerar la mentira estructural hasta volverte cómplice del desastre.",
    "paragraphs": [
      "En su reflexión sobre el deseo de no saber y la ética práctica del solucionador, Recuenco analiza por qué los humanos somos máquinas diseñadas para proteger la identidad y el estatus antes que la verdad objetiva. Apoyándose en el biólogo evolutivo Robert Trivers, subraya que el autoengaño incluso evolucionó como ventaja social: quien cree sinceramente su propia distorsión resulta mucho más convincente al engañar a los demás.",
      "Para un profesional del CPS, esto abre una tensión incómoda: no basta con oponerse frontalmente a toda mentira por sistema, porque el cerebro está comprometido con la supervivencia y a veces hay que dosificar el impacto de realidades insoportables para evitar el colapso. Pero gestionar el truth coping jamás equivale a rendirse al delirio («delulu is not the solulu»): en ciertos momentos toca clavar tacón y rechazar acuerdos falsos que acabarán pasándote factura."
    ],
    "origin": "Psicología evolutiva (Robert Trivers, The Folly of Fools) aplicada por Javier G. Recuenco a la ética de la verdad y el truth coping en CPS",
    "aliases": [
      "autoengaño",
      "auto-mentira",
      "deseo de no saber",
      "mentira táctica",
      "self-deception"
    ],
    "related": [
      "asertividad",
      "disonancia-cognitiva",
      "pantomima",
      "pompismo",
      "sesgo",
      "truth-coping"
    ],
    "sources": [
      {
        "threadId": "1981980820278591851",
        "title": "El autoengaño: la doble cara de la verdad en la toma de decisiones",
        "url": "https://turrero.vercel.app/turra/1981980820278591851"
      },
      {
        "threadId": "1928694865052741791",
        "title": "Truth coping: cómo sobrevivir a verdades incómodas en empresas y personas",
        "url": "https://turrero.vercel.app/turra/1928694865052741791"
      },
      {
        "threadId": "1761287914493796842",
        "title": "La multidimensional del pompismo",
        "url": "https://turrero.vercel.app/turra/1761287914493796842"
      }
    ],
    "books": [
      {
        "title": "The Folly of Fools: The Logic of Deceit and Self-Deception in Human Life",
        "author": "Robert Trivers",
        "url": "https://www.goodreads.com/book/show/13033022-the-folly-of-fools"
      },
      {
        "title": "The Gaslight Effect: How to Spot and Survive the Hidden Manipulation Others Use to Control Your Life",
        "author": "Robin Stern",
        "url": "https://www.goodreads.com/es/book/show/36520721-the-gaslight-effect"
      },
      {
        "title": "The Status Game: On Human Life and How to Play It",
        "author": "Will Storr",
        "url": "https://www.goodreads.com/book/show/58642436-the-status-game"
      },
      {
        "title": "When Breath Becomes Air",
        "author": "Paul Kalanithi",
        "url": "https://www.goodreads.com/book/show/25899336-when-breath-becomes-air"
      },
      {
        "title": "Siddhartha",
        "author": "Hermann Hesse",
        "url": "https://www.goodreads.com/book/show/52036.Siddhartha"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1981980820278591851",
    "isPillar": false
  },
  {
    "slug": "cienciarte",
    "term": "Cienciarte",
    "familyId": "oficio",
    "tier": "core",
    "short": "Disciplina que vive entre la ciencia y el arte, con mucho determinismo científico y mucha inspiración artística a la vez.",
    "analogy": "La alta cocina o la arquitectura: sin química ni física se hunde el edificio, pero sin sensibilidad y oficio creativo sale algo sin alma.",
    "howToApply": "Apóyate en datos, teorías y rigor científico para acotar el terreno, y usa intuición entrenada y creatividad para dar el salto donde el manual se acaba.",
    "antiPattern": "Exigir fórmulas matemáticas exactas para problemas humanos complejos, o vender pura ocurrencia sin base diciendo que «es arte».",
    "paragraphs": [
      "Recuenco pone como ejemplos la programación, la arquitectura de sistemas, la cocina y el propio CPS. Su equilibrio es frágil: si se rompe hacia el determinismo aparecen la ilusión de control y el cientifismo. Si se rompe hacia el arte, el acientifismo y la relatocracia. Por eso el CPS no es una skill ni un framework, sino una serie de módulos que cada cual combina según su propósito, como un guitarrista que se monta su pedalera."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "cienciarte",
      "cienciartes",
      "CienciArtes"
    ],
    "related": [
      "all-models-are-wrong",
      "aporia",
      "cps",
      "cultura-luterana",
      "factor-x",
      "liminalidad",
      "neuroestetica",
      "optimizacion-luterana-y-feijoada",
      "roguelike-de-mazos",
      "sweet-spot"
    ],
    "sources": [
      {
        "threadId": "1741006814873821551",
        "title": "El CPS y su rol en la Resolución de Problemas Complejos",
        "url": "https://turrero.vercel.app/turra/1741006814873821551"
      },
      {
        "threadId": "1784107483444687237",
        "title": "Sobre la inexactitud de la medicina y las complejidades científicas en TEDxMálaga",
        "url": "https://turrero.vercel.app/turra/1784107483444687237"
      }
    ],
    "books": [
      {
        "title": "Kitchen Confidential: Adventures in the Culinary Underbelly",
        "author": "Anthony Bourdain",
        "url": "https://www.goodreads.com/book/show/33313.Kitchen_Confidential"
      },
      {
        "title": "A History of Food in 100 Recipes",
        "author": "William Sitwell",
        "url": "https://www.goodreads.com/book/show/13613646-a-history-of-food-in-100-recipes"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#cienciarte",
    "isPillar": false
  },
  {
    "slug": "cps",
    "term": "CPS",
    "familyId": "oficio",
    "tier": "core",
    "short": "Resolución de problemas complejos: diseñar soluciones para problemas sin precedente, en los que los expertos se declaran incompetentes.",
    "analogy": "La unidad de rescate a la que llamas cuando el mapa no coincide con el terreno y todos los especialistas dicen «mi manual no cubre esto».",
    "howToApply": "Empieza por entender qué tipo de problema tienes, haz sensemaking sin prisa, reúne mentes diversas y diseña intervenciones adaptativas.",
    "antiPattern": "Confundir CPS con un taller de post-its de dos horas o con un framework enlatado de cinco pasos que sirve para todo.",
    "paragraphs": [
      "Recuenco lo define como el diseño sistemático de soluciones para problemas de los que no existe precedente. Lo separa de lo complicado: instalar un ERP en 300 sedes es difícil, pero tiene referencias. Un problema complejo no las tiene. Exige compromiso con el problema y no con una verdad propia, trabajar con hipótesis que se tiran en cuanto aparece un dato mejor y un equipo de talentos diversos orquestado. No lo considera una skill ni un framework, sino un cienciarte."
    ],
    "origin": "",
    "aliases": [
      "CPS",
      "Complex Problem Solving",
      "resolución de problemas complejos",
      "CPSer"
    ],
    "related": [
      "altas-capacidades",
      "cienciarte",
      "companias-problem-centric",
      "consultoria",
      "cps-hispano",
      "critica-al-design-thinking",
      "cynefin",
      "diagnostico",
      "dr-house",
      "factor-x",
      "futurismo-de-frontera",
      "javier-g-recuenco",
      "orquestacion-cognitiva",
      "pensamiento-lateral",
      "personotecnia",
      "recoger-cable",
      "roguelike-de-mazos",
      "santuario-humano",
      "singular-solving",
      "solvers-academy",
      "taylorismo",
      "turra"
    ],
    "sources": [
      {
        "threadId": "1964221678713438241",
        "title": "Desafiando el dogma corporativo: la nueva era del CPS y la IA",
        "url": "https://turrero.vercel.app/turra/1964221678713438241"
      },
      {
        "threadId": "1302148427791253507",
        "title": "Descubre la ruta para ser un solucionador de problemas complejos",
        "url": "https://turrero.vercel.app/turra/1302148427791253507"
      },
      {
        "threadId": "1675028035836182528",
        "title": "Intersección entre CPS e IA: un profundo análisis de su convergencia y potencial",
        "url": "https://turrero.vercel.app/turra/1675028035836182528"
      }
    ],
    "books": [
      {
        "title": "Digitally Curious: Your Guide to Navigating the Future …",
        "author": "Andrew Grill",
        "url": "https://www.goodreads.com/book/show/181728813-digitally-curious"
      },
      {
        "title": "The Alignment Problem: Machine Learning and Human Values",
        "author": "Brian Christian",
        "url": "https://www.goodreads.com/book/show/50489349-the-alignment-problem"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#cps",
    "isPillar": false
  },
  {
    "slug": "diagnostico",
    "term": "Diagnóstico",
    "familyId": "oficio",
    "tier": "core",
    "short": "Fase del CPS en la que se entiende qué pasa de verdad, separando problema y consecuencias, antes de formular hipótesis.",
    "analogy": "Un buen médico que no te receta antibióticos nada más verte toser, sino que averigua primero si es alergia, infección o un problema cardíaco.",
    "howToApply": "Dedica la mayor parte de tu energía inicial a formular bien el problema real y distinguir causas raíz de síntomas ruidosos.",
    "antiPattern": "Saltar directamente a proponer soluciones en los primeros diez minutos de reunión para parecer resolutivo.",
    "paragraphs": [
      "Para Recuenco, la calidad del diagnóstico depende de lo fino que sea el sensemaking, y de ella depende la calidad de la hipótesis: ahí sitúa el corazón del CPS. Un mal diagnóstico confunde el problema con sus consecuencias o lo encierra en un solo departamento, cuando lo normal es que haya varias causas raíz simultáneas. En Singular Solving incorporan perfiles creativos a este proceso."
    ],
    "origin": "",
    "aliases": [
      "diagnóstico",
      "proceso de diagnóstico"
    ],
    "related": [
      "companias-problem-centric",
      "cps",
      "sensemaking",
      "singular-solving"
    ],
    "sources": [
      {
        "threadId": "1763816753929347384",
        "title": "El impacto del deseo de tener razón en múltiples contextos",
        "url": "https://turrero.vercel.app/turra/1763816753929347384"
      },
      {
        "threadId": "1543107844043673600",
        "title": "Complejidad vs. aleatoriedad: La ampliamente usada complejidad de Kolmogorov es simplemente una medida de la aleatoriedad",
        "url": "https://turrero.vercel.app/turra/1543107844043673600"
      },
      {
        "threadId": "1766352097409134910",
        "title": "La naturaleza exploratoria en el juego y la estrategia del CPS",
        "url": "https://turrero.vercel.app/turra/1766352097409134910"
      }
    ],
    "books": [
      {
        "title": "Hieronymus White: A Bird Who Believed That He Always Was Right",
        "author": "Jeff Moss",
        "url": "https://www.goodreads.com/book/show/1643206.Hieronymus_White"
      },
      {
        "title": "A Mind of Its Own: How Your Brain Distorts and Deceives",
        "author": "Cordelia Fine",
        "url": "https://www.goodreads.com/book/show/357666.A_Mind_of_Its_Own"
      },
      {
        "title": "El arte de tener siempre la razón y otros ensayos",
        "author": "Arthur Schopenhauer",
        "url": "https://www.goodreads.com/es/book/show/8501578"
      },
      {
        "title": "The Sorites Principle: How to harness the power of perseverance",
        "author": "Ian Gibbs",
        "url": "https://www.goodreads.com/es/book/show/32610460-the-sorites-principle"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#diagnostico",
    "isPillar": false
  },
  {
    "slug": "liminalidad",
    "term": "Liminalidad",
    "familyId": "oficio",
    "tier": "core",
    "short": "Lo que ocurre en la frontera entre disciplinas. Para Recuenco, ahí es donde nace la innovación.",
    "analogy": "La orilla donde el mar se mezcla con la tierra: ni es puro océano ni puro desierto, y precisamente en esa frontera explota la biodiversidad.",
    "howToApply": "Cruza deliberadamente disciplinas que rara vez se hablan (ingeniería + antropología, videojuegos + estrategia) para encontrar ángulos invisibles.",
    "antiPattern": "Encerrarte toda la vida en un único gremio hablando con gente que lee los mismos libros y repite las mismas certezas.",
    "paragraphs": [
      "Recuenco la define como todo lo que sucede al acercarse a una frontera, y la aplica sobre todo a la innovación: surge cuando artes maduras entran en fricción en sus zonas limítrofes. Pone como ejemplo a Jobs, que unió diseño y tecnología, o a Van Halen, que mezcló heavy y sensualidad. Poca gente crea valor ahí, porque casi todos son expertos atrincherados en un solo campo."
    ],
    "origin": "",
    "aliases": [
      "liminalidad",
      "liminal",
      "fricción liminar",
      "Pensamiento liminal"
    ],
    "related": [
      "abrochador-liminal",
      "cienciarte",
      "critica-al-design-thinking",
      "neuroestetica",
      "orquestacion-cognitiva",
      "pensamiento-lateral",
      "rabbit-hole",
      "roguelike-de-mazos"
    ],
    "sources": [
      {
        "threadId": "1297462657503694848",
        "title": "Mi relación con el Design Thinking",
        "url": "https://turrero.vercel.app/turra/1297462657503694848"
      },
      {
        "threadId": "1317382505880866816",
        "title": "Cómo Van Halen se deshace como banda por falta de un orquestador cognitivo",
        "url": "https://turrero.vercel.app/turra/1317382505880866816"
      }
    ],
    "books": [
      {
        "title": "Runnin' with the Devil: A Backstage Pass to the Wild Times, Loud Rock, and the Down and Dirty Truth Behind the Making of Van Halen",
        "author": "Noel E. Monk",
        "url": "https://www.goodreads.com/book/show/32726815"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#liminalidad",
    "isPillar": false
  },
  {
    "slug": "orquestacion-cognitiva",
    "term": "Orquestación cognitiva",
    "familyId": "oficio",
    "tier": "core",
    "short": "Hacer trabajar juntos a talentos muy distintos gestionando egos, emociones y agendas, no solo plazos y presupuestos.",
    "analogy": "Un director de orquesta que no toca el violín mejor que el solista, pero logra que ochenta egos e instrumentos distintos suenen como una sola obra.",
    "howToApply": "Dedica tiempo consciente a alinear expectativas, traducir lenguajes entre especialistas y gestionar emociones y egos del equipo.",
    "antiPattern": "Gestionar talento complejo con un diagrama de Gantt como si fueran ladrillos intercambiables que solo necesitan fechas de entrega.",
    "paragraphs": [
      "Recuenco la distingue del project management: llevar tiempos y presupuestos se aprende pronto, mientras que dirigir una orquesta cuesta una vida. Orquestar es armonizar a gente de negocio y gente intelectual, tender puentes entre agendas incompatibles y gestionar a las personas a nivel cognitivo y emocional, a veces como un confesor. Sin ella los equipos de mucho talento colapsan, como Van Halen cuando perdió a su mánager Noel Monk."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "orquestación cognitiva",
      "orquestación",
      "orquestador cognitivo"
    ],
    "related": [
      "alta-agencia",
      "companias-problem-centric",
      "corrientes-subterraneas",
      "cps",
      "critica-al-design-thinking",
      "dr-house",
      "emulsificador-de-equipo",
      "equipo-apolo",
      "liminalidad",
      "procesos-de-alta-variabilidad",
      "resolutivas-invisibles",
      "sincronizacion-de-pedalada"
    ],
    "sources": [
      {
        "threadId": "1307211330349420545",
        "title": "Un aspecto crítico en Complex Problem Solving: La construcción de equipos CPS",
        "url": "https://turrero.vercel.app/turra/1307211330349420545"
      },
      {
        "threadId": "1270594048617824257",
        "title": "¿Qué es la #orquestación?",
        "url": "https://turrero.vercel.app/turra/1270594048617824257"
      },
      {
        "threadId": "1317382505880866816",
        "title": "Cómo Van Halen se deshace como banda por falta de un orquestador cognitivo",
        "url": "https://turrero.vercel.app/turra/1317382505880866816"
      }
    ],
    "books": [
      {
        "title": "Runnin' with the Devil: A Backstage Pass to the Wild Times, Loud Rock, and the Down and Dirty Truth Behind the Making of Van Halen",
        "author": "Noel E. Monk",
        "url": "https://www.goodreads.com/book/show/32726815"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#orquestacion-cognitiva",
    "isPillar": false
  },
  {
    "slug": "cps-hispano",
    "term": "CPS hispano",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Forma hispana de afrontar la incertidumbre, con improvisación, creatividad y rebeldía, frente a la obsesión luterana por medir y optimizar.",
    "analogy": "El ingenio de improvisar una solución brillante con un alambre y dos llamadas cuando el plan perfecto de manual se ha ido al garete.",
    "howToApply": "Aprovecha la flexibilidad, la lectura rápida de personas y la creatividad bajo escasez, combinándolas con rigor y método para no quedarte en chapuza.",
    "antiPattern": "Cargar con complejos culturales imitando burocracias rígidas que no encajan, o glorificar la improvisación sin disciplina.",
    "paragraphs": [
      "Recuenco sostiene que en tiempos de incertidumbre, cuando se agota el manual, la mirada hispana manda: el riesgo, la improvisación dirigida, el «echao palante» y las esencias que no se pueden medir ni pesar. No lo plantea contra lo luterano sino como síntesis: el luterano construye el producto básico mejor que nadie y lo hispano aporta la capa de personalidad, de sentido y de propósito. Lo ilustra con Gracita Morales, que resuelve lo cotidiano con lo poco que tiene, frente a la luterana Bettye de «The Offer»."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "CPS Hispano",
      "CPS hispano"
    ],
    "related": [
      "cps",
      "cultura-luterana",
      "incertidumbre",
      "optimizacion-luterana-y-feijoada",
      "pensamiento-lateral",
      "personotecnia",
      "post-pe-y-cfu",
      "resolutivas-invisibles",
      "xavier-o-magneto"
    ],
    "sources": [
      {
        "threadId": "1971825115165028522",
        "title": "CPS Hispano: la nueva estrategia de creatividad y rebeldía",
        "url": "https://turrero.vercel.app/turra/1971825115165028522"
      },
      {
        "threadId": "1964221678713438241",
        "title": "Desafiando el dogma corporativo: la nueva era del CPS y la IA",
        "url": "https://turrero.vercel.app/turra/1964221678713438241"
      },
      {
        "threadId": "2014969801395814716",
        "title": "El poder silencioso de las resolutivas invisibles",
        "url": "https://turrero.vercel.app/turra/2014969801395814716"
      }
    ],
    "books": [
      {
        "title": "L'impresa responsabile: Un'intervista su Adriano Olivet…",
        "author": "Luciano Gallino",
        "url": "https://www.goodreads.com/book/show/23273468-l-impresa-responsabile"
      },
      {
        "title": "Lo Barroco",
        "author": "Eugeni d&apos;Ors",
        "url": "https://www.goodreads.com/book/show/39715965-lo-barroco"
      },
      {
        "title": "Digitally Curious: Your Guide to Navigating the Future …",
        "author": "Andrew Grill",
        "url": "https://www.goodreads.com/book/show/181728813-digitally-curious"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#cps-hispano",
    "isPillar": false
  },
  {
    "slug": "dr-house",
    "term": "Dr. House",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Arquetipo favorito de Recuenco para el CPSer: funciona justo cuando el resto de expertos deja de funcionar.",
    "analogy": "El médico irreverente al que solo envían los casos que desconciertan a todos los demás departamentos, aunque sea incómodo tenerlo en la sala.",
    "howToApply": "Valora al perfil capaz de cuestionar las hipótesis cómodas y decir la verdad clínica aunque rompa la armonía superficial de la reunión.",
    "antiPattern": "Expulsar al disidente brillante porque «no encaja en la cultura» o, al revés, tolerar toxicidad gratuita sin brillantez real detrás.",
    "paragraphs": [
      "Frente al señor Lobo de «Pulp Fiction», fiable en el 99 % de los casos porque ya los ha visto antes, House es fiable en el 1 % que nadie sabe resolver. Sus soluciones son aproximativas: prueba, falla y vuelve a probar, porque en lo complejo hay que experimentar. Recuenco advierte de lo menos realista del personaje: que resuelve solo, cuando el CPS real exige un equipo de talentos diversos orquestado."
    ],
    "origin": "",
    "aliases": [
      "doctor House",
      "Dr. House",
      "Gregory House"
    ],
    "related": [
      "cps",
      "cynefin",
      "orquestacion-cognitiva",
      "tokens-de-confianza"
    ],
    "sources": [
      {
        "threadId": "1302148427791253507",
        "title": "Descubre la ruta para ser un solucionador de problemas complejos",
        "url": "https://turrero.vercel.app/turra/1302148427791253507"
      },
      {
        "threadId": "1307211330349420545",
        "title": "Un aspecto crítico en Complex Problem Solving: La construcción de equipos CPS",
        "url": "https://turrero.vercel.app/turra/1307211330349420545"
      },
      {
        "threadId": "1309767345875890177",
        "title": "Cómo ser funcional cuando el resto de la gente deja de serlo",
        "url": "https://turrero.vercel.app/turra/1309767345875890177"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#dr-house",
    "isPillar": false
  },
  {
    "slug": "javier-g-recuenco",
    "term": "Javier G. Recuenco",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Autor de las turras: ingeniero informático, divulgador del CPS en España y fundador de Singular Solving.",
    "analogy": "El cartógrafo irreverente que lleva años bajando a tierra, sábado tras sábado, disciplinas dispersas para convertirlas en un oficio práctico.",
    "howToApply": "Usa su enfoque como caja de herramientas abierta y crítica: contrasta sus ideas con tu propio terreno en vez de repetirlas como dogma.",
    "antiPattern": "Quedarse solo con el tono provocador de las turras sin profundizar en el rigor sistémico y bibliográfico que hay detrás.",
    "paragraphs": [
      "Publica sus hilos turras en X, casi siempre los sábados, sobre resolución de problemas complejos y lo que la rodea. Llegó al CPS en 2016 a través de los informes del Foro Económico Mundial y construyó su propio marco, que desde el principio incluía el Factor X. Ha presidido Mensa España y otros autores le llaman padre de la Personotecnia."
    ],
    "origin": "",
    "aliases": [
      "Recuenco",
      "Javier G. Recuenco",
      "el Recu"
    ],
    "related": [
      "cps",
      "factor-x",
      "personotecnia",
      "singular-solving",
      "turra"
    ],
    "sources": [
      {
        "threadId": "1976916522657628448",
        "title": "Personotecnia: el CPS que traduce el caos humano",
        "url": "https://turrero.vercel.app/turra/1976916522657628448"
      },
      {
        "threadId": "2103744346142966174",
        "title": "Personotecnia, IA y la promesa de vender sin tomarte por idiota",
        "url": "https://turrero.vercel.app/turra/2103744346142966174"
      },
      {
        "threadId": "1741006814873821551",
        "title": "El CPS y su rol en la Resolución de Problemas Complejos",
        "url": "https://turrero.vercel.app/turra/1741006814873821551"
      }
    ],
    "books": [
      {
        "title": "Kitchen Confidential: Adventures in the Culinary Underbelly",
        "author": "Anthony Bourdain",
        "url": "https://www.goodreads.com/book/show/33313.Kitchen_Confidential"
      },
      {
        "title": "A History of Food in 100 Recipes",
        "author": "William Sitwell",
        "url": "https://www.goodreads.com/book/show/13613646-a-history-of-food-in-100-recipes"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#javier-g-recuenco",
    "isPillar": false
  },
  {
    "slug": "pensamiento-lateral",
    "term": "Pensamiento lateral",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Para Recuenco, tomar una decisión correcta ante datos erróneos que no se pueden verificar.",
    "analogy": "Desatascar un camión encajado bajo un puente desinflando un poco las ruedas en vez de discutir si hay que demoler el puente o cortar el techo.",
    "howToApply": "Cuando los datos son ruidosos o el enfoque frontal falla, cuestiona las premisas ocultas que nadie se ha atrevido a tocar.",
    "antiPattern": "Confundir pensamiento lateral con decir ocurrencias disparatadas sin contraste con las restricciones reales del problema.",
    "paragraphs": [
      "Recuenco rechaza la versión de seminario, la del golpe ingenioso: le irrita que se ponga como ejemplo a Alejandro cortando el nudo gordiano. Su definición es otra: «tomar una decisión correcta ante datos erróneos no verificables», algo que según él la IA todavía no sabe hacer. Lo ve como herramienta diaria del CPSer, que se atreve a dudar y a probar ángulos distintos en un mundo empresarial que adora certidumbres inexistentes."
    ],
    "origin": "Edward de Bono, «The Use of Lateral Thinking» (el término). La definición citada es de Javier G. Recuenco",
    "aliases": [
      "pensamiento lateral"
    ],
    "related": [
      "cps",
      "cps-hispano",
      "futurismo-de-frontera",
      "liminalidad"
    ],
    "sources": [
      {
        "threadId": "1675028035836182528",
        "title": "Intersección entre CPS e IA: un profundo análisis de su convergencia y potencial",
        "url": "https://turrero.vercel.app/turra/1675028035836182528"
      },
      {
        "threadId": "1510161914772471813",
        "title": "La obsesión del autor con los acertijos, enigmas, puzzles y misterios y su relación con el CPS, y cómo esto afecta a la resolución de problemas",
        "url": "https://turrero.vercel.app/turra/1510161914772471813"
      },
      {
        "threadId": "1342767594697191424",
        "title": "Hablaremos de soluciones de mierda a problemas complejos",
        "url": "https://turrero.vercel.app/turra/1342767594697191424"
      }
    ],
    "books": [
      {
        "title": "The Alignment Problem: Machine Learning and Human Values",
        "author": "Brian Christian",
        "url": "https://www.goodreads.com/book/show/50489349-the-alignment-problem"
      },
      {
        "title": "Virtual Cities: An Atlas and Exploration of Video Game Cities",
        "author": "Konstantinos Dimopoulos",
        "url": "https://www.goodreads.com/book/show/50489392-virtual-cities"
      },
      {
        "title": "Models. Behaving. Badly.: Why Confusing Illusion with Reality Can Lead to Disaster, on Wall Street and in Life",
        "author": "Emanuel Derman",
        "url": "https://www.goodreads.com/book/show/16350431-models-behaving-badly"
      },
      {
        "title": "Influence: The Psychology of Persuasion",
        "author": "Robert B. Cialdini",
        "url": "https://www.goodreads.com/book/show/28815"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#pensamiento-lateral",
    "isPillar": false
  },
  {
    "slug": "singular-solving",
    "term": "Singular Solving",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Compañía de Recuenco que resuelve problemas complejos de empresa, basada en el skin in the game.",
    "analogy": "Un taller de alta relojería para crisis estratégicas que solo cobra de verdad si el reloj vuelve a marcar la hora.",
    "howToApply": "Aplica su filosofía aunque trabajes por cuenta ajena: alinea tu compromiso con resultados reales y no con horas calentando silla.",
    "antiPattern": "Vender horas de acompañamiento cómodo donde el proveedor gana más cuanto más tarda en resolverse el problema.",
    "paragraphs": [
      "Exige tres condiciones para trabajar con un cliente: acceso directo a quien toma las decisiones, disposición a dar saltos al vacío y que al máximo decisor le importe más la empresa que su propio interés. Por eso suele trabajar con empresas familiares medianas, cobrando con revenue share, equity o joint ventures, casi como un venture builder. Sus primeros proyectos de CPS fueron fracasos, algo que Recuenco cuenta abiertamente. Alrededor ha crecido un ecosistema de compañías e iniciativas como Solvers Academy."
    ],
    "origin": "",
    "aliases": [
      "Singular Solving",
      "@SingularSolving"
    ],
    "related": [
      "companias-problem-centric",
      "cps",
      "diagnostico",
      "javier-g-recuenco",
      "skin-in-the-game",
      "solvers-academy"
    ],
    "sources": [
      {
        "threadId": "1469583058563121153",
        "title": "Soluciones a problemas imposibles y como abordarlos",
        "url": "https://turrero.vercel.app/turra/1469583058563121153"
      },
      {
        "threadId": "1636989624567443457",
        "title": "Asumir responsabilidad en los fracasos para mejorar y encontrar el éxito en la vida y los negocios",
        "url": "https://turrero.vercel.app/turra/1636989624567443457"
      }
    ],
    "books": [
      {
        "title": "Ingenuity in Mathematics",
        "author": "Ross Honsberger",
        "url": "https://www.goodreads.com/book/show/1416864.Ingenuity_in_Mathematics"
      },
      {
        "title": "Aha! Insight",
        "author": "Martin Gardner",
        "url": "https://www.goodreads.com/book/show/397238.Aha_Insight"
      },
      {
        "title": "Gunpei Yokoi: The Life & Philosophy of Nintendo's God of Toys Tp",
        "author": "Various",
        "url": "https://www.goodreads.com/book/show/17126891-gunpei-yokoi"
      },
      {
        "title": "How to Fail at Almost Everything and Still Win Big: Kind of the Story of My Life",
        "author": "Scott Adams",
        "url": "https://www.goodreads.com/book/show/17859574-how-to-fail-at-almost-everything-and-still-win-big"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#singular-solving",
    "isPillar": false
  },
  {
    "slug": "soluciones-de-mierda",
    "term": "Soluciones de mierda",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Cierre en falso de un problema complejo que da la satisfacción de haberlo resuelto sin resolverlo.",
    "analogy": "Tapar la luz roja de avería del coche con un trozo de cinta aislante negra: deja de molestar hoy, pero el motor gripará en la autopista.",
    "howToApply": "Pregúntate si la medida que vas a aprobar ataca la causa raíz o solo calma la ansiedad del comité durante dos semanas.",
    "antiPattern": "Celebrar «cierres rápidos» que simplemente desplazan el problema a otro departamento o al trimestre siguiente.",
    "paragraphs": [
      "Los momentos ajá de verdad son raros y no se pueden invocar a voluntad. Su sucedáneo, como la metadona de la heroína, es cerrar en falso: da la mitad de serotonina, pero quita la sensación de que el problema te ha doblado el brazo. Recuenco culpa a esto del éxito del design thinking donde hacía falta estrategia de verdad."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "soluciones de mierda",
      "solución de mierda",
      "soluciones de mierda a problemas complejos"
    ],
    "related": [
      "critica-al-design-thinking",
      "estrategia",
      "sindrome-del-coronel-thompson",
      "taylorismo"
    ],
    "sources": [
      {
        "threadId": "1342767594697191424",
        "title": "Hablaremos de soluciones de mierda a problemas complejos",
        "url": "https://turrero.vercel.app/turra/1342767594697191424"
      }
    ],
    "books": [
      {
        "title": "Models. Behaving. Badly.: Why Confusing Illusion with Reality Can Lead to Disaster, on Wall Street and in Life",
        "author": "Emanuel Derman",
        "url": "https://www.goodreads.com/book/show/16350431-models-behaving-badly"
      },
      {
        "title": "Influence: The Psychology of Persuasion",
        "author": "Robert B. Cialdini",
        "url": "https://www.goodreads.com/book/show/28815"
      },
      {
        "title": "La invención del pasado",
        "author": "Miguel-Anxo Murado",
        "url": "https://www.goodreads.com/book/show/18624642"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#soluciones-de-mierda",
    "isPillar": false
  },
  {
    "slug": "solvers-academy",
    "term": "Solvers Academy",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Iniciativa de formación en CPS del ecosistema de Recuenco, con programas en varias instituciones académicas.",
    "analogy": "Una escuela de oficios donde no te enseñan a recitar teoría de memoria, sino a enfrentarte a casos vivos con criterio transversal.",
    "howToApply": "Forma a tu equipo mezclando casos reales complejos, debate crítico y herramientas multidisciplinares en vez de cursos genéricos de relleno.",
    "antiPattern": "Pensar que la formación corporativa se resuelve con píldoras de vídeo pasivas desconectadas de los problemas reales del negocio.",
    "paragraphs": [
      "Recuenco la define como la propuesta de reunir las aplicaciones del CPS en una formación coherente y personalizada, con socios académicos como UNIR, donde crearon el Máster en CPS. Trabaja con varias instituciones a la vez, con material propio y programas que no compiten entre sí, y funciona como empresa con su propia cuenta de resultados. Recuenco atribuye buena parte del proyecto a Toni Dorta."
    ],
    "origin": "",
    "aliases": [
      "Solvers Academy",
      "@solvers_academy"
    ],
    "related": [
      "cps",
      "singular-solving"
    ],
    "sources": [
      {
        "threadId": "1850051280107983315",
        "title": "Solvers Academy: Alianzas estratégicas y evolución en la oferta educativa",
        "url": "https://turrero.vercel.app/turra/1850051280107983315"
      }
    ],
    "books": [
      {
        "title": "The Future Will Not Be Taught: How to Reimagine Education and Build a Thriving Learning Community",
        "author": "Devin Carberry",
        "url": "https://www.goodreads.com/book/show/212323051-the-future-will-not-be-taught?ref=nav_sb_ss_1_29"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#solvers-academy",
    "isPillar": false
  },
  {
    "slug": "tokens-de-confianza",
    "term": "Tokens de confianza",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Razones para contratar basadas en un acto de fe: crees en quien te ayuda sin tener garantías.",
    "analogy": "Elegir a un cirujano para una operación nueva sin garantías absolutas: decides por señales acumuladas de criterio, honestidad y trayectoria.",
    "howToApply": "Gana confianza mostrando cómo piensas, admitiendo límites y cumpliendo compromisos pequeños antes de pedir grandes actos de fe.",
    "antiPattern": "Creer que el cliente te comprará una solución compleja solo por prometer garantías falsas o enseñar títulos colgados en la pared.",
    "paragraphs": [
      "Recuenco distingue tres tipos de tokens en las decisiones comerciales: de justificación (marca, encanto y seniority del socio, que protegen a quien decide), de capacitación (títulos y experiencia) y de confianza. Un CPS normalmente solo puede trabajar los de confianza. De ahí sale la zona de confianza próxima (ZCP): toda venta que pida un salto de fe mayor del que el cliente puede dar fracasará."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "tokens de confianza",
      "token de confianza",
      "zona de confianza próxima",
      "ZCP",
      "tokens de justificación"
    ],
    "related": [
      "autosegmentacion",
      "consultoria",
      "dr-house",
      "zona-de-desarrollo-proximo"
    ],
    "sources": [
      {
        "threadId": "1325000695897071616",
        "title": "La psicología para la acción comercial",
        "url": "https://turrero.vercel.app/turra/1325000695897071616"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#tokens-de-confianza",
    "isPillar": false
  },
  {
    "slug": "turra",
    "term": "Turra",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Hilo largo que Recuenco publica en X cada semana, casi siempre en sábado, sobre CPS y temas afines.",
    "analogy": "Una sobremesa larga de sábado con alguien leído y sin filtros que enlaza historia, empresa, psicología y cómics hasta encenderte varias bombillas.",
    "howToApply": "Léelas despacio, toma notas de los conceptos que resuenan con tus problemas reales y salta a las fuentes y libros que citan.",
    "antiPattern": "Consumirlas como entretenimiento rápido de scroll sin aplicar ni contrastar ninguna idea en tu trabajo real.",
    "paragraphs": [
      "Recuenco las abre con «En el hilo turras de hoy» y las usa como un bloc de notas público: escribe sobre algo cuando cree que le será útil en el futuro y es difícil de articular, para poder citarlo después. Cuando el hilo se alarga declara el «turra limit» y resume, porque es mejor dejar a la gente con ganas de más. De la comunidad que se formó alrededor salieron secciones como #preguntaalrecu."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "turra",
      "turras",
      "hilo turras",
      "hilos turras",
      "turra limit"
    ],
    "related": [
      "cps",
      "javier-g-recuenco"
    ],
    "sources": [
      {
        "threadId": "1421353440224104449",
        "title": "Escribo contenido por una razón: para que sea útil en un futuro",
        "url": "https://turrero.vercel.app/turra/1421353440224104449"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#turra",
    "isPillar": false
  },
  {
    "slug": "companias-problem-centric",
    "term": "Compañías Problem-centric",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Organizaciones construidas alrededor del problema real —que dicta las herramientas, vehículos y talentos a orquestar— en lugar de vender una plantilla fija buscando problemas donde encajarla.",
    "analogy": "Como el rodaje de «El Padrino» en «The Offer», donde cada decisión se somete a «lo que necesita la película», frente a los rodajes «by the book» donde todo el mundo cobra su sueldo mientras la película se hunde.",
    "howToApply": "Mantén un núcleo ligero de sensemakers y ensambla los vehículos, socios y especialistas que exija cada causa raíz, alineando incentivos con la resolución y no con las horas facturadas.",
    "antiPattern": "Comportarse como un martillo buscando clavos: vender frameworks enlatados (Agile, Design Thinking o marcas vacías) o facturar plantilla mientras el problema de fondo sigue intacto.",
    "paragraphs": [
      "Para Recuenco, ser problem-centric significa literalmente que el problema determina la actuación. En lugar de ofrecer soluciones prefabricadas buscando cliente —«nadie compra CPS, igual que nadie compra electromagnetismo»—, estas compañías envuelven la complejidad en vehículos operables como hizo Nobel con la dinamita.",
      "Apoyándose en «The Offer» (con Bettye McCartt como CPSer en la sombra y Al Ruddy como orquestador obsesionado con sacar la película adelante) y en casos de Singular Solving como el Insight Lab o el fraude publicitario, contrapone este modelo a las organizaciones parasitadas por el statu quo y las horas facturables."
    ],
    "origin": "Javier G. Recuenco (Singular Solving / serie sobre «The Offer»)",
    "aliases": [
      "compañías problem-centric",
      "problem-centric",
      "organizaciones problem-centric",
      "The Offer"
    ],
    "related": [
      "consultoria",
      "cps",
      "critica-al-design-thinking",
      "diagnostico",
      "orquestacion-cognitiva",
      "resolutivas-invisibles",
      "singular-solving"
    ],
    "sources": [
      {
        "threadId": "1779018888203608064",
        "title": "The Offer: Las compañías problem-centric y el CPS sistemático",
        "url": "https://turrero.vercel.app/turra/1779018888203608064"
      },
      {
        "threadId": "1791716794312318984",
        "title": "Reflexión sobre los desafíos y el futuro del CPS en la comunidad de innovación",
        "url": "https://turrero.vercel.app/turra/1791716794312318984"
      },
      {
        "threadId": "1943924463415820480",
        "title": "CPS y el Insight Lab: Soluciones creativas para el marketing complejo",
        "url": "https://turrero.vercel.app/turra/1943924463415820480"
      },
      {
        "threadId": "2014969801395814716",
        "title": "El poder silencioso de las resolutivas invisibles",
        "url": "https://turrero.vercel.app/turra/2014969801395814716"
      }
    ],
    "books": [
      {
        "title": "Leave the Gun, Take the Cannoli: The Epic Story of the Making of The Godfather",
        "author": "Mark Seal",
        "url": "https://www.goodreads.com/search?q=Leave+the+Gun+Take+the+Cannoli+Mark+Seal"
      },
      {
        "title": "Corleone Business School",
        "author": "Guillermo de Haro",
        "url": "https://www.goodreads.com/search?q=Corleone+Business+School+Guillermo+de+Haro"
      },
      {
        "title": "Marketing 6.0: The Future Is Immersive",
        "author": "Philip Kotler, Hermawan Kartajaya & Iwan Setiawan",
        "url": "https://www.goodreads.com/es/book/show/140691008-marketing-6-0"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1779018888203608064",
    "isPillar": false
  },
  {
    "slug": "critica-al-design-thinking",
    "term": "Crítica al Design Thinking",
    "familyId": "oficio",
    "tier": "deep",
    "short": "Cuestionamiento de la deriva del Design Thinking cuando pasa de ser una guarnición valiosa en un entorno liminal a imponerse como plato fuerte y solución universal.",
    "analogy": "Un estudio lleno de Pro Tools, efectos y muestras digitales de última generación intentando disimular que no hay canción: sin melodía que conecte con la época, las capas de producción no salvan nada.",
    "howToApply": "Integra el diseño y la experiencia de usuario como un instrumento más dentro de una orquesta multidisciplinar —junto a estrategia, negocio y tecnología— subordinado siempre al problema real.",
    "antiPattern": "Entregar la estrategia entera de la compañía a talleres de post-its y capas estéticas impecables mientras la propuesta de valor hace aguas y la cuenta de resultados se desangra.",
    "paragraphs": [
      "En una de las turras más citadas de todo su archivo —«por qué decimos cordero con patatas y no patatas con cordero»—, Recuenco desmonta la doble narrativa mágica de IDEO y Apple legitimada por Stanford. No ataca la existencia del diseño ni el valor de los buenos arreglos, sino que un instrumento concebido para operar en liminalidad acabara dominando como plato principal: empresas tomadas por el Design Thinking lucen aplicaciones y logos impecables, pero arrastran propuestas de valor dudosas. Como Agile o Lean Startup, colapsó por ser una «solución buscando un problema» en lugar de una disciplina problem-centric."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "cordero con patatas",
      "Design Thinking",
      "guarnición y plato fuerte",
      "soluciones buscando un problema"
    ],
    "related": [
      "companias-problem-centric",
      "cps",
      "liminalidad",
      "orquestacion-cognitiva",
      "pantomima",
      "soluciones-de-mierda"
    ],
    "sources": [
      {
        "threadId": "1297462657503694848",
        "title": "Mi relación con el Design Thinking",
        "url": "https://turrero.vercel.app/turra/1297462657503694848"
      },
      {
        "threadId": "1992135396793200730",
        "title": "El poder subestimado de los actores secundarios en el Private Equity",
        "url": "https://turrero.vercel.app/turra/1992135396793200730"
      },
      {
        "threadId": "1943924463415820480",
        "title": "CPS y el Insight Lab: Soluciones creativas para el marketing complejo",
        "url": "https://turrero.vercel.app/turra/1943924463415820480"
      },
      {
        "threadId": "1857680297443164321",
        "title": "El CPS como disciplina integradora y motor de cambio humano",
        "url": "https://turrero.vercel.app/turra/1857680297443164321"
      }
    ],
    "books": [
      {
        "title": "Marketing 6.0: The Future Is Immersive",
        "author": "Philip Kotler, Hermawan Kartajaya, Iwan Setiawan",
        "url": "https://www.goodreads.com/es/book/show/140691008-marketing-6-0"
      },
      {
        "title": "The Goal: A Process of Ongoing Improvement",
        "author": "Eliyahu M. Goldratt",
        "url": "https://www.goodreads.com/book/show/113934.The_Goal"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1297462657503694848",
    "isPillar": false
  },
  {
    "slug": "ciencias-de-la-complejidad",
    "term": "Ciencias de la complejidad",
    "familyId": "sistemas",
    "tier": "core",
    "short": "Pilar del CPS que agrupa sistemas no lineales, pensamiento sistémico, emergencia y sensemaking para entender problemas enmarañados.",
    "analogy": "La diferencia entre arreglar un reloj suizo (piezas predecibles) y cuidar un bosque (miles de especies interactuando y adaptándose sin cesar).",
    "howToApply": "Aprende a mirar bucles de retroalimentación, efectos no lineales y consecuencias de segundo orden antes de tocar una pieza del sistema.",
    "antiPattern": "Aplicar recetas de ingeniería lineal («si empujo el doble aquí, saldrá el doble allá») sobre mercados, equipos o sociedades.",
    "paragraphs": [
      "Es una de las cuatro macrodisciplinas del CPS, junto a ecosistemas tecnológicos, Factor X y business acumen. Recuenco mete ahí las ciencias «clásicas» de la complejidad: sistemas no lineales, systems thinking, emergencia y sensemaking. Las considera fascinantes pero demasiado teóricas y ciegas al factor humano, y por eso no le bastaron y tuvo que completarlas con los otros pilares."
    ],
    "origin": "",
    "aliases": [
      "ciencias de la complejidad",
      "complexity science",
      "complejidad aplicada"
    ],
    "related": [
      "atractores",
      "business-acumen",
      "cynefin",
      "ecosistemas-tecnologicos",
      "emergencia",
      "factor-x",
      "moat",
      "sensemaking",
      "sistemas-complejos"
    ],
    "sources": [
      {
        "threadId": "1340160478316785666",
        "title": "Cierro con éste la trilogía sobre libros recomendados para CPS",
        "url": "https://turrero.vercel.app/turra/1340160478316785666"
      },
      {
        "threadId": "1332604415224770564",
        "title": "El ser humano como sistema complejo y la decadencia brutal del Marketing",
        "url": "https://turrero.vercel.app/turra/1332604415224770564"
      }
    ],
    "books": [
      {
        "title": "The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power",
        "author": "Shoshana Zuboff",
        "url": "https://www.goodreads.com/book/show/26195941-the-age-of-surveillance-capitalism"
      },
      {
        "title": "Business Adventures",
        "author": "John Brooks",
        "url": "https://www.goodreads.com/book/show/4191136-business-adventures"
      },
      {
        "title": "Business Anthropology",
        "author": "Ann T. Jordan",
        "url": "https://www.goodreads.com/en/book/show/4509587-business-anthropology"
      },
      {
        "title": "How to Fail at Almost Everything and Still Win Big: Kind of the Story of My Life",
        "author": "Scott Adams",
        "url": "https://www.goodreads.com/book/show/17859574-how-to-fail-at-almost-everything-and-still-win-big"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#ciencias-de-la-complejidad",
    "isPillar": true
  },
  {
    "slug": "cynefin",
    "term": "Cynefin",
    "familyId": "sistemas",
    "tier": "core",
    "short": "Marco de Dave Snowden que clasifica los problemas en cinco dominios según cómo se relacionan causa y efecto.",
    "analogy": "Un triaje de urgencias: no tratas igual un rasguño (protocolo claro), una fractura (experto) que un síndrome desconocido (observar y probar con cautela).",
    "howToApply": "Clasifica tu problema en Claro, Complicado, Complejo, Caótico o Confuso antes de elegir método; si es Complejo, haz experimentos seguros al fallo.",
    "antiPattern": "Tratar un problema complejo como si fuera simplemente complicado, encargando un plan maestro detallado que nace muerto.",
    "paragraphs": [
      "Dave Snowden lo creó para decidir cómo actuar según la naturaleza del problema, porque cada dominio pide una forma distinta de trabajar. Para Recuenco, un problema complicado es cosa de un buen consultor y uno complejo pide un CPS, aunque avisa de que no todo lo desconocido es caótico. Lo considera revelador para entender la complejidad, pero una simplificación de la realidad."
    ],
    "origin": "Dave Snowden, marco Cynefin",
    "aliases": [
      "Cynefin",
      "dominio complejo",
      "dominio caótico",
      "cuadrante caótico",
      "cuadrantes complejos",
      "dominio confuso"
    ],
    "related": [
      "aporia",
      "ciencias-de-la-complejidad",
      "consultoria",
      "cps",
      "dr-house",
      "futurismo-de-frontera",
      "incertidumbre",
      "niebla-de-guerra",
      "sensemaking",
      "sistemas-complejos"
    ],
    "sources": [
      {
        "threadId": "1543107844043673600",
        "title": "Complejidad vs. aleatoriedad: La ampliamente usada complejidad de Kolmogorov es simplemente una medida de la aleatoriedad",
        "url": "https://turrero.vercel.app/turra/1543107844043673600"
      },
      {
        "threadId": "1591345649848487936",
        "title": "Spaghetti alle vongole, gestión de lo desconocido en CPS: la idea de comprobar el punto de cocción tirando la pasta en la pared",
        "url": "https://turrero.vercel.app/turra/1591345649848487936"
      },
      {
        "threadId": "1966774475191435728",
        "title": "IA encapsula procesos complejos y redefine el CPS",
        "url": "https://turrero.vercel.app/turra/1966774475191435728"
      }
    ],
    "books": [
      {
        "title": "The Sorites Principle: How to harness the power of perseverance",
        "author": "Ian Gibbs",
        "url": "https://www.goodreads.com/es/book/show/32610460-the-sorites-principle"
      },
      {
        "title": "Why We Do What We Do: Understanding Self-Motivation",
        "author": "Edward L. Deci",
        "url": "https://www.goodreads.com/book/show/683539.Why_We_Do_What_We_Do"
      },
      {
        "title": "Black Box Thinking: Why Some People Never Learn from Their Mistakes - But Some Do",
        "author": "Matthew Syed",
        "url": "https://www.goodreads.com/book/show/24611735-black-box-thinking"
      }
    ],
    "domains": [
      {
        "name": "Claro",
        "text": "Causa y efecto son evidentes para cualquiera; se resuelve aplicando la práctica conocida. Antes se llamaba «simple»."
      },
      {
        "name": "Complicado",
        "text": "Hay relación entre causa y efecto, pero hace falta análisis o un experto para verla. Terreno del buen consultor."
      },
      {
        "name": "Complejo",
        "text": "Causa y efecto solo se entienden a posteriori; hay que experimentar, observar y ajustar. Terreno del CPS."
      },
      {
        "name": "Caótico",
        "text": "No se percibe relación entre causa y efecto; primero se actúa para estabilizar y luego se intenta entender."
      },
      {
        "name": "Confuso",
        "text": "No se sabe en qué dominio está el problema; la primera tarea es averiguarlo. Recuenco lo liga a la aporía."
      }
    ],
    "glossaryUrl": "https://turrero.vercel.app/glosario#cynefin",
    "isPillar": false
  },
  {
    "slug": "emergencia",
    "term": "Emergencia",
    "familyId": "sistemas",
    "tier": "core",
    "short": "Comportamientos colectivos de un sistema que no pueden deducirse del comportamiento de cada una de sus partes.",
    "analogy": "Una bandada de estorninos dibujando figuras imposibles en el cielo: ningún pájaro dirige el dibujo, nace de reglas simples entre vecinos.",
    "howToApply": "Para cambiar un resultado colectivo (cultura, tráfico, mercado), actúa sobre las reglas de interacción y el entorno, no solo dando órdenes a individuos.",
    "antiPattern": "Creer que sumando las propiedades de cada parte por separado puedes predecir cómo se comportará el conjunto vivo.",
    "paragraphs": [
      "Recuenco la resume así: comportamientos colectivos que no podemos extrapolar de los individuales. Su ejemplo favorito es la cultura de una organización, que emana de su arquitectura dinámica de incentivos. Por eso no se puede «cambiar la cultura» directamente: habría que cambiar todo lo que la provoca, y en un sistema complejo eso es una contradicción en los términos."
    ],
    "origin": "",
    "aliases": [
      "emergencia",
      "propiedad emergente",
      "fenómeno emergente"
    ],
    "related": [
      "arquitectura-de-incentivos",
      "ciencias-de-la-complejidad",
      "sistemas-complejos"
    ],
    "sources": [
      {
        "threadId": "1352890795897061378",
        "title": "¿Es posible que algunos problemas complejos por su naturaleza intrincada, sean completamente irresolubles?",
        "url": "https://turrero.vercel.app/turra/1352890795897061378"
      },
      {
        "threadId": "1649673649866113024",
        "title": "Analizando la importancia de los incentivos en el ámbito empresarial y cómo influyen en el éxito o fracaso",
        "url": "https://turrero.vercel.app/turra/1649673649866113024"
      }
    ],
    "books": [
      {
        "title": "Tiny Habits: The Small Changes That Change Everything",
        "author": "B.J. Fogg",
        "url": "https://www.goodreads.com/book/show/43261127-tiny-habits"
      },
      {
        "title": "Behavior Modification: What It Is and How to Do It",
        "author": "Garry L. Martin",
        "url": "https://www.goodreads.com/book/show/888511.Behavior_Modification"
      },
      {
        "title": "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
        "author": "Steven D. Levitt",
        "url": "https://www.goodreads.com/book/show/1202.Freakonomics"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#emergencia",
    "isPillar": false
  },
  {
    "slug": "sensemaking",
    "term": "Sensemaking",
    "familyId": "sistemas",
    "tier": "core",
    "short": "Proceso de dar sentido a una situación ambigua o confusa antes de decidir qué hacer con ella.",
    "analogy": "Reconstruir una escena confusa hablando con testigos, mirando huellas y armando un mapa provisional antes de decidir a quién perseguir.",
    "howToApply": "Antes de correr a ejecutar, junta perspectivas distintas para poner palabras compartidas a qué está pasando realmente.",
    "antiPattern": "Confundir sensemaking con análisis infinito paralizante o, al contrario, saltárselo por la presión de «hacer algo ya».",
    "paragraphs": [
      "Recuenco lo toma sobre todo de Karl Weick y lo considera crítico en el CPS: antes de resolver hay que entender qué está pasando. Es un proceso exigente y subjetivo, cargado de identidad, que a menudo provoca pánico y vacío. Por eso sostiene que no se discute sobre sensemaking: negar el relato de alguien es negar a la persona. Para él, Dave Snowden es el sensemaker definitivo."
    ],
    "origin": "Karl E. Weick, Sensemaking in Organizations",
    "aliases": [
      "sensemaking",
      "sense-making",
      "construcción de sentido"
    ],
    "related": [
      "acoplamiento-suelto",
      "altas-capacidades",
      "aporia",
      "ciencias-de-la-complejidad",
      "colapso-cognitivo",
      "corrientes-subterraneas",
      "cynefin",
      "diagnostico",
      "enactacion",
      "futurismo-de-frontera",
      "matriz-de-compra-de-pescado",
      "neuroestetica",
      "rabbit-hole"
    ],
    "sources": [
      {
        "threadId": "1596391703774367744",
        "title": "El umbral entre la complejidad y la serendipia",
        "url": "https://turrero.vercel.app/turra/1596391703774367744"
      },
      {
        "threadId": "1806938762129101276",
        "title": "Exploración de la neuroestética y su impacto en el arte y la ciencia",
        "url": "https://turrero.vercel.app/turra/1806938762129101276"
      },
      {
        "threadId": "1804386948938699148",
        "title": "La importancia del sensemaking en la toma de decisiones y la inteligencia humana",
        "url": "https://turrero.vercel.app/turra/1804386948938699148"
      }
    ],
    "books": [
      {
        "title": "Do Nothing: How to Break Away from Overworking, Overdoing, and Underliving",
        "author": "Celeste Headlee",
        "url": "https://www.goodreads.com/book/show/52668196-do-nothing"
      },
      {
        "title": "Incredible Coincidence: The Baffling World of Synchronicity",
        "author": "Alan Vaughan",
        "url": "https://www.goodreads.com/book/show/2763998-incredible-coincidence"
      },
      {
        "title": "The Great Mental Models: General Thinking Concepts",
        "author": "Shane Parrish",
        "url": "https://www.goodreads.com/book/show/44245196-the-great-mental-models"
      },
      {
        "title": "Managing the Unexpected: Resilient Performance in an Age of Uncertainty",
        "author": "Karl E. Weick",
        "url": "https://www.goodreads.com/book/show/818258.Managing_the_Unexpected"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#sensemaking",
    "isPillar": false
  },
  {
    "slug": "sistemas-complejos",
    "term": "Sistemas complejos",
    "familyId": "sistemas",
    "tier": "core",
    "short": "Conjuntos de piezas tan entrelazadas que sus problemas se alimentan entre sí y no se pueden tratar por separado.",
    "analogy": "Un plato de espaguetis: tiras de un solo hilo en un extremo y se mueve medio plato de formas imposibles de calcular de antemano.",
    "howToApply": "Observa interdependencias y prueba intervenciones pequeñas que te devuelvan señal antes de escalar cambios drásticos.",
    "antiPattern": "Trocear un problema vivo en silos independientes asumiendo que arreglar cada trozo por separado arreglará el conjunto.",
    "paragraphs": [
      "Recuenco cita la metáfora de Snowden de las zarzas en un matorral: no sabes dónde empieza una y termina otra. En una empresa en apuros los problemas se realimentan y no son factorizables: arreglas uno y aparecen tres. Por eso considera al ser humano el sistema complejo por excelencia, y a los psicólogos entre los padres del CPS. Su ley general dice que todo proceso complejo acaba volviéndose complicado y, al final, sentido común."
    ],
    "origin": "",
    "aliases": [
      "sistemas complejos",
      "sistema complejo"
    ],
    "related": [
      "autopoiesis",
      "ciencias-de-la-complejidad",
      "contexto",
      "cynefin",
      "efecto-cobra",
      "emergencia",
      "factor-x",
      "homeostasis",
      "procesos-de-alta-variabilidad",
      "vaca-esferica"
    ],
    "sources": [
      {
        "threadId": "1352890795897061378",
        "title": "¿Es posible que algunos problemas complejos por su naturaleza intrincada, sean completamente irresolubles?",
        "url": "https://turrero.vercel.app/turra/1352890795897061378"
      },
      {
        "threadId": "1340160478316785666",
        "title": "Cierro con éste la trilogía sobre libros recomendados para CPS",
        "url": "https://turrero.vercel.app/turra/1340160478316785666"
      },
      {
        "threadId": "1966774475191435728",
        "title": "IA encapsula procesos complejos y redefine el CPS",
        "url": "https://turrero.vercel.app/turra/1966774475191435728"
      }
    ],
    "books": [
      {
        "title": "The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power",
        "author": "Shoshana Zuboff",
        "url": "https://www.goodreads.com/book/show/26195941-the-age-of-surveillance-capitalism"
      },
      {
        "title": "Business Adventures",
        "author": "John Brooks",
        "url": "https://www.goodreads.com/book/show/4191136-business-adventures"
      },
      {
        "title": "Business Anthropology",
        "author": "Ann T. Jordan",
        "url": "https://www.goodreads.com/en/book/show/4509587-business-anthropology"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#sistemas-complejos",
    "isPillar": false
  },
  {
    "slug": "acoplamiento-suelto",
    "term": "Acoplamiento suelto",
    "familyId": "sistemas",
    "tier": "deep",
    "short": "Partes de una organización conectadas entre sí sin rigidez, de modo que pueden adaptarse cuando el entorno cambia.",
    "analogy": "Un tren con vagones independientes frente a una sola barra rígida: si un vagón se avería o cambia el trazado, el resto no descarrila.",
    "howToApply": "Diseña equipos y módulos con interfaces claras y autonomía local para que una sorpresa en un área no paralice toda la empresa.",
    "antiPattern": "Centralizar todas las aprobaciones en un único comité buscando eficiencia y volver la organización lenta y quebradiza.",
    "paragraphs": [
      "Concepto de Karl Weick que Recuenco recoge junto al sensemaking y la enactación. Describe organizaciones cuyas piezas están unidas, pero no atornilladas: cada una conserva margen para moverse. Esa holgura da flexibilidad en entornos cambiantes."
    ],
    "origin": "Karl E. Weick",
    "aliases": [
      "acoplamiento suelto",
      "loose coupling"
    ],
    "related": [
      "enactacion",
      "sensemaking"
    ],
    "sources": [
      {
        "threadId": "1852267188519854245",
        "title": "Los colapsos cognitivos, sentido común y figuras heroicas en tiempos complejos",
        "url": "https://turrero.vercel.app/turra/1852267188519854245"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#acoplamiento-suelto",
    "isPillar": false
  },
  {
    "slug": "autopoiesis",
    "term": "Autopoiesis",
    "familyId": "sistemas",
    "tier": "deep",
    "short": "Capacidad de un sistema para producirse y mantenerse a sí mismo, renovando sus piezas sin perder su identidad.",
    "analogy": "Tu propio cuerpo: casi todas tus células se renuevan con los años, pero sigues siendo tú porque conservas el patrón que las organiza.",
    "howToApply": "Pregúntate qué identidad nuclear debe sobrevivir mientras renuevas productos, personas y procesos para adaptarte al entorno.",
    "antiPattern": "Querer preservar cada procedimiento histórico intacto pensando que eso es cuidar la esencia, hasta fosilizar la organización.",
    "paragraphs": [
      "Concepto de los biólogos Humberto Maturana y Francisco Varela, que Niklas Luhmann llevó a los sistemas sociales: se definen por sus propias comunicaciones (autorreferencialidad) y preservan su identidad aunque traten con el entorno (cierre operacional). Recuenco habla de autopoiesis empresarial para describir la tensión entre lo nuevo y lo bien operado. Cada bando de la empresa tira hacia un lado, y sobrevivir depende de reajustar a mano el equilibrio perdido."
    ],
    "origin": "Humberto Maturana y Francisco Varela, y Niklas Luhmann para los sistemas sociales",
    "aliases": [
      "autopoiesis",
      "autopoiesis empresarial",
      "autopoiético",
      "autopoiéticos",
      "autorreferencialidad",
      "cierre operacional"
    ],
    "related": [
      "homeostasis",
      "hormesis",
      "sincronizacion-de-pedalada",
      "sistemas-complejos",
      "sweet-spot"
    ],
    "sources": [
      {
        "threadId": "1834829754488221846",
        "title": "La autopoiesis y la tensión en la evolución empresarial",
        "url": "https://turrero.vercel.app/turra/1834829754488221846"
      }
    ],
    "books": [
      {
        "title": "Social Systems",
        "author": "Niklas Luhmann",
        "url": "https://www.goodreads.com/book/show/337482.Social_Systems"
      },
      {
        "title": "The Innovator's Dilemma: The Revolutionary Book that Will Change the Way You Do Business",
        "author": "Clayton M. Christensen",
        "url": "https://www.goodreads.com/book/show/2615"
      },
      {
        "title": "Autopoiesis and Cognition: The Realization of the Living",
        "author": "Humberto R. Maturana",
        "url": "https://www.goodreads.com/book/show/695442.Autopoiesis_and_Cognition"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#autopoiesis",
    "isPillar": false
  },
  {
    "slug": "corrientes-subterraneas",
    "term": "Corrientes subterráneas",
    "familyId": "sistemas",
    "tier": "deep",
    "short": "Influencias poco visibles que moldean un sistema desde abajo y no se perciben a primera vista.",
    "analogy": "El rumor silencioso que corre por la máquina de café y decide si un proyecto triunfa o se sabotea mucho antes del comité de dirección.",
    "howToApply": "Escucha conversaciones informales, observa qué temas se esquivan y detecta tensiones silenciosas antes de que exploten en la superficie.",
    "antiPattern": "Gobernar mirando únicamente el organigrama oficial y los informes filtrados que suben hacia arriba pintados de verde.",
    "paragraphs": [
      "Recuenco las llama también undercurrents y las conecta con las consecuencias de segundo orden y la lectura de señales. Lo ilustra con la música moderna, formada por subculturas y movimientos que nunca estuvieron en primera línea. En la turra las aplica a la acción desde la sociedad civil: hay que orquestar muchas cosas porque lo decisivo no suele estar en la superficie."
    ],
    "origin": "",
    "aliases": [
      "corrientes subterráneas",
      "influencias subterráneas",
      "undercurrents"
    ],
    "related": [
      "orquestacion-cognitiva",
      "santuario-humano",
      "sensemaking",
      "zeitgeist"
    ],
    "sources": [
      {
        "threadId": "1888123731865702418",
        "title": "Reflexión sobre influencias ocultas, música y acción civil en España",
        "url": "https://turrero.vercel.app/turra/1888123731865702418"
      }
    ],
    "books": [
      {
        "title": "Cómo impulsar la inteligencia colectiva",
        "author": "Amalio A. Rey García",
        "url": "https://www.goodreads.com/book/show/218688993-c-mo-impulsar-la-inteligencia-colectiva"
      },
      {
        "title": "El libro de la Inteligencia colectiva",
        "author": "Amalio A. Rey",
        "url": "https://www.goodreads.com/book/show/60627426-el-libro-de-la-inteligencia-colectiva"
      },
      {
        "title": "Power in Movement: Social Movements and Contentious Politics",
        "author": "Sidney Tarrow",
        "url": "https://www.goodreads.com/book/show/108402.Power_in_Movement"
      },
      {
        "title": "A Civil Action",
        "author": "Jonathan Harr",
        "url": "https://www.goodreads.com/book/show/27397.A_Civil_Action"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#corrientes-subterraneas",
    "isPillar": false
  },
  {
    "slug": "enactacion",
    "term": "Enactación",
    "familyId": "sistemas",
    "tier": "deep",
    "short": "Idea de Karl Weick: las organizaciones se crean y se definen por lo que hacen e interactúan sus miembros.",
    "analogy": "Un sendero en la montaña que no existía en ningún plano hasta que las pisadas repetidas de quienes caminan por ahí lo hacen real.",
    "howToApply": "Recuerda que cada decisión, conversación y hábito diario está fabricando la realidad de tu organización mucho más que sus pósteres de valores.",
    "antiPattern": "Esperar a tener el análisis perfecto desde fuera olvidando que tu propia acción ya está transformando el entorno que observas.",
    "paragraphs": [
      "Recuenco la recoge al presentar a Weick, al que llama santo patrón nunca del todo admitido de muchos pilares del CPS. Una organización no es su organigrama sino lo que sus miembros hacen en la práctica. De ahí su consejo final: para entender lo que pasa, sigue las acciones de cada uno según su skin in the game."
    ],
    "origin": "Karl E. Weick",
    "aliases": [
      "enactación",
      "enactment"
    ],
    "related": [
      "acoplamiento-suelto",
      "colapso-cognitivo",
      "sensemaking",
      "skin-in-the-game"
    ],
    "sources": [
      {
        "threadId": "1852267188519854245",
        "title": "Los colapsos cognitivos, sentido común y figuras heroicas en tiempos complejos",
        "url": "https://turrero.vercel.app/turra/1852267188519854245"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#enactacion",
    "isPillar": false
  },
  {
    "slug": "homeostasis",
    "term": "Homeostasis",
    "familyId": "sistemas",
    "tier": "deep",
    "short": "Capacidad de un organismo, o de una empresa, para mantenerse estable por dentro compensando los cambios de fuera.",
    "analogy": "El termostato del cuerpo humano que suda o tiembla para mantener siempre 36,5 °C aunque fuera haga frío o calor extremo.",
    "howToApply": "Construye amortiguadores (caja, diversidad de clientes, capacidad de aprendizaje) que absorban golpes externos sin destruir tu núcleo.",
    "antiPattern": "Confundir estabilidad sana con inmovilismo rígido, o exprimir la eficiencia hasta quedarte sin ningún margen ante el primer bache.",
    "paragraphs": [
      "En biología es el equilibrio dinámico que regula temperatura, fluidos o azúcar mediante mecanismos realimentados. Recuenco lo traslada a la empresa: una compañía mezcla dinámicas biológicas, sociales y de sistemas, y su equilibrio interno puede romperse y volverse patológico. Recuperarlo exige ajustar a mano el sweet spot entre fuerzas opuestas, como innovación y optimización. A veces de ese ajuste depende que la compañía sobreviva."
    ],
    "origin": "",
    "aliases": [
      "homeostasis",
      "homeóstasis",
      "homeostasis empresarial",
      "homeóstasis empresarial",
      "homeostático"
    ],
    "related": [
      "autopoiesis",
      "hormesis",
      "sincronizacion-de-pedalada",
      "sistemas-complejos",
      "sweet-spot"
    ],
    "sources": [
      {
        "threadId": "1543107844043673600",
        "title": "Complejidad vs. aleatoriedad: La ampliamente usada complejidad de Kolmogorov es simplemente una medida de la aleatoriedad",
        "url": "https://turrero.vercel.app/turra/1543107844043673600"
      },
      {
        "threadId": "1834829754488221846",
        "title": "La autopoiesis y la tensión en la evolución empresarial",
        "url": "https://turrero.vercel.app/turra/1834829754488221846"
      },
      {
        "threadId": "1741006814873821551",
        "title": "El CPS y su rol en la Resolución de Problemas Complejos",
        "url": "https://turrero.vercel.app/turra/1741006814873821551"
      }
    ],
    "books": [
      {
        "title": "The Sorites Principle: How to harness the power of perseverance",
        "author": "Ian Gibbs",
        "url": "https://www.goodreads.com/es/book/show/32610460-the-sorites-principle"
      },
      {
        "title": "Social Systems",
        "author": "Niklas Luhmann",
        "url": "https://www.goodreads.com/book/show/337482.Social_Systems"
      },
      {
        "title": "The Innovator's Dilemma: The Revolutionary Book that Will Change the Way You Do Business",
        "author": "Clayton M. Christensen",
        "url": "https://www.goodreads.com/book/show/2615"
      },
      {
        "title": "Autopoiesis and Cognition: The Realization of the Living",
        "author": "Humberto R. Maturana",
        "url": "https://www.goodreads.com/book/show/695442.Autopoiesis_and_Cognition"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#homeostasis",
    "isPillar": false
  },
  {
    "slug": "vaca-esferica",
    "term": "Vaca esférica",
    "familyId": "sistemas",
    "tier": "deep",
    "short": "Modelo tan simplificado que funciona en el papel y no sirve en la realidad. Viene del chiste del físico.",
    "analogy": "El chiste del físico que promete mejorar la producción de leche empezando con «supongamos una vaca perfectamente esférica en el vacío».",
    "howToApply": "Usa modelos simples solo como borrador inicial y pregúntate siempre qué fricciones reales hemos dejado fuera para que saliera bonito.",
    "antiPattern": "Tomar decisiones del mundo real confiando en simulaciones limpias que han borrado justo el desorden que manda en la realidad.",
    "paragraphs": [
      "Procede del chiste del físico que resuelve la baja producción de leche de una granja, pero solo para vacas esféricas en el vacío. Recuenco lo aplica al determinismo que le enseñaron en la facultad, que resultó ser una simplificación, y a enfoques de manual como el de Watanabe, «CPS para niños y vacas esféricas». Según el test de Astudillo, cualquier vaca esférica que ignore el Factor X acaba aterrizando de morros."
    ],
    "origin": "",
    "aliases": [
      "vaca esférica",
      "vacas esféricas"
    ],
    "related": [
      "all-models-are-wrong",
      "colapso-cognitivo",
      "factor-x",
      "falacia-de-mcnamara",
      "procesos-de-alta-variabilidad",
      "sistemas-complejos",
      "taylorismo",
      "test-astudillo"
    ],
    "sources": [
      {
        "threadId": "1527905242376962054",
        "title": "Los procesos de gran variabilidad",
        "url": "https://turrero.vercel.app/turra/1527905242376962054"
      },
      {
        "threadId": "1763816753929347384",
        "title": "El impacto del deseo de tener razón en múltiples contextos",
        "url": "https://turrero.vercel.app/turra/1763816753929347384"
      }
    ],
    "books": [
      {
        "title": "The Human Brand",
        "author": "Chris Malone",
        "url": "https://www.goodreads.com/book/show/18202508-the-human-brand"
      },
      {
        "title": "Hieronymus White: A Bird Who Believed That He Always Was Right",
        "author": "Jeff Moss",
        "url": "https://www.goodreads.com/book/show/1643206.Hieronymus_White"
      },
      {
        "title": "A Mind of Its Own: How Your Brain Distorts and Deceives",
        "author": "Cordelia Fine",
        "url": "https://www.goodreads.com/book/show/357666.A_Mind_of_Its_Own"
      },
      {
        "title": "El arte de tener siempre la razón y otros ensayos",
        "author": "Arthur Schopenhauer",
        "url": "https://www.goodreads.com/es/book/show/8501578"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#vaca-esferica",
    "isPillar": false
  },
  {
    "slug": "colapso-cognitivo",
    "term": "Colapso cognitivo",
    "familyId": "sistemas",
    "tier": "deep",
    "short": "El bloqueo o cortocircuito mental que sufre una persona o colectivo cuando la complejidad o la sobrecarga informativa superan su capacidad de procesarla, empujándola a huir del sensemaking.",
    "analogy": "Como abrir una bolsa mágica infinita creyendo que tu intelecto puede abarcarla y perder el juicio al instante, o taparte los ojos en medio de una tormenta porque mirar el mapa te paraliza.",
    "howToApply": "Entrena la tolerancia a la ambigüedad, apoya el análisis en sensemaking metódico —y en la IA para filtrar inundaciones de datos— y acepta decisiones suficientemente buenas en vez de refugios ideológicos.",
    "antiPattern": "Escapar de la complejidad abrazando consignas sin matices, modelos de «vaca esférica» o sensemaking partisano que niega lo que tienes delante de los ojos.",
    "paragraphs": [
      "Recuenco parte de una premisa brutal: el cerebro está comprometido con la supervivencia, no con la realidad. Cuando un fenómeno hipercomplejo amenaza con provocar un colapso cognitivo —o una «estenosis cognitiva»—, la mente prefiere el contorsionismo intelectual, la simplificación extrema o el dogma tribal antes que sostener la incertidumbre del sensemaking.",
      "Desde tropos de cómic como Smart Alec mirando en la bolsa de Shaman hasta la esclerosis partisana durante catástrofes o las inundaciones cognitivas de la paradoja de la elección, el CPS busca conservar la flexibilidad cognitiva y apoyarse en Karl E. Weick y el enactment para leer el mundo sin quebrarse."
    ],
    "origin": "Javier G. Recuenco (en diálogo con Karl E. Weick y el sensemaking)",
    "aliases": [
      "colapso cognitivo",
      "pánico al sensemaking",
      "estenosis cognitiva",
      "esclerosis cognitiva",
      "inundación cognitiva"
    ],
    "related": [
      "disonancia-cognitiva",
      "enactacion",
      "enshittification",
      "facciones-lanares",
      "niebla-de-guerra",
      "sensemaking",
      "truth-coping",
      "vaca-esferica"
    ],
    "sources": [
      {
        "threadId": "1852267188519854245",
        "title": "Los colapsos cognitivos, sentido común y figuras heroicas en tiempos complejos",
        "url": "https://turrero.vercel.app/turra/1852267188519854245"
      },
      {
        "threadId": "1796796569829687349",
        "title": "El desafío del sensemaking y el colapso cognitivo: explorando fenómenos y ejemplos en la cultura popular y la literatura",
        "url": "https://turrero.vercel.app/turra/1796796569829687349"
      },
      {
        "threadId": "1784107483444687237",
        "title": "Sobre la inexactitud de la medicina y las complejidades científicas en TEDxMálaga",
        "url": "https://turrero.vercel.app/turra/1784107483444687237"
      },
      {
        "threadId": "1725782327131885653",
        "title": "Continuación de la tetralogía sobre CPS e IA: Explorando el moat humano y la sobrecarga cognitiva",
        "url": "https://turrero.vercel.app/turra/1725782327131885653"
      }
    ],
    "books": [
      {
        "title": "My Share of the Task: A Memoir",
        "author": "Stanley McChrystal",
        "url": "https://www.goodreads.com/book/show/13588403-my-share-of-the-task"
      },
      {
        "title": "Managing the Unexpected: Resilient Performance in an Age of Uncertainty",
        "author": "Karl E. Weick & Kathleen M. Sutcliffe",
        "url": "https://www.goodreads.com/search?q=Managing+the+Unexpected+Karl+Weick"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1852267188519854245",
    "isPillar": false
  },
  {
    "slug": "neuroestetica",
    "term": "Neuroestética",
    "familyId": "sistemas",
    "tier": "deep",
    "short": "Disciplina científica y «cienciarte encarnado» que estudia las bases neuronales de la experiencia estética y cómo distintos cerebros construyen la belleza y el sentido.",
    "analogy": "Como el fósforo en la naturaleza, que nunca aparece puro sino combinado: la neuroestética muestra que dar sentido al mundo nunca es solo cálculo frío, sino una reacción viva entre cerebro, cuerpo, emoción y arte.",
    "howToApply": "Incorpora perfiles creativos y sensibilidades sensoriales diversas en tus procesos de diagnóstico y experiencia de usuario, entendiendo que cada cerebro percibe y construye sentido de manera distinta.",
    "antiPattern": "Diseñar experiencias, entornos o productos asumiendo un usuario promedio idéntico, o encerrar el sensemaking y la ciencia en laboratorios aislados de la sensibilidad artística.",
    "paragraphs": [
      "Definida formalmente en 2002 como el estudio científico de los procesos neuronales que subyacen a la contemplación y creación artística, la neuroestética cruza neurociencia, psicología de la percepción, biología evolutiva, filosofía e historia del arte para explicar desde la música o el cine hasta fenómenos como el síndrome de Stendhal.",
      "En el cierre de su saga sobre sensemaking, Recuenco la rescata a raíz de la obra multidisciplinar impulsada por el Dr. James Hutson porque condensa una hibridación extraordinaria: une sensemaking, neurodivergencia («neurotribus»), perfiles sensoriales personotécnicos, procesos de alta variabilidad y neuroarte. Una prueba viva de que la creatividad y la ciencia aplicada convergen en la frontera del diagnóstico CPS."
    ],
    "origin": "Neurociencia cognitiva y estética experimental (definida formalmente en 2002), conectada por Javier G. Recuenco con el trabajo de James Hutson, el sensemaking y la Personotecnia",
    "aliases": [
      "neuroestética",
      "neuroaesthetics",
      "neuroarte",
      "neurotribus",
      "perfiles sensoriales"
    ],
    "related": [
      "cienciarte",
      "liminalidad",
      "neurodivergencia",
      "personotecnia",
      "procesos-de-alta-variabilidad",
      "sensemaking"
    ],
    "sources": [
      {
        "threadId": "1806938762129101276",
        "title": "Exploración de la neuroestética y su impacto en el arte y la ciencia",
        "url": "https://turrero.vercel.app/turra/1806938762129101276"
      }
    ],
    "books": [
      {
        "title": "Newburn #1",
        "author": "Chip Zdarsky & Jacob Phillips",
        "url": "https://goodreads.com/book/show/59535315-newburn-1"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1806938762129101276",
    "isPillar": false
  },
  {
    "slug": "cultura-luterana",
    "term": "Cultura luterana",
    "familyId": "sociedad",
    "tier": "core",
    "short": "Mentalidad de medir, pesar y optimizarlo todo. Sirve para lo predecible y se queda corta cuando manda la incertidumbre.",
    "analogy": "Creer que la virtud consiste en pesar cada gramo de harina y cronometrar cada minuto, incluso cuando lo que toca es inventar un plato nuevo.",
    "howToApply": "Usa disciplina y medición donde el proceso es repetible, pero abre espacio de exploración y juego cuando el problema es incierto.",
    "antiPattern": "Sustituir el criterio y la valentía por métricas, checklists y vigilancia constante pensando que así se elimina el riesgo.",
    "paragraphs": [
      "Recuenco llama luterana a la aproximación fordiana y taylorista: productividad máxima, best practices, todo en un Excel, sin hueco para la pausa. No la considera mala, sino insuficiente cuando no hay nada tangible que medir. Aplicada a un cienciarte como la publicidad, lo prostituye. Pone como ejemplos el private equity y la IA, «culminación del sueño luterano», y anuncia una era postluterana de escenarios desconocidos."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "luterano",
      "luterana",
      "luteranos",
      "era postluterana",
      "era post luterana",
      "postluterana"
    ],
    "related": [
      "cienciarte",
      "cps-hispano",
      "falacia-de-mcnamara",
      "incertidumbre",
      "optimizacion-luterana-y-feijoada",
      "private-equity",
      "taylorismo"
    ],
    "sources": [
      {
        "threadId": "1781573444485697867",
        "title": "The Offer: Paramount selecciona a Coppola para autenticidad en El Padrino",
        "url": "https://turrero.vercel.app/turra/1781573444485697867"
      },
      {
        "threadId": "1964221678713438241",
        "title": "Desafiando el dogma corporativo: la nueva era del CPS y la IA",
        "url": "https://turrero.vercel.app/turra/1964221678713438241"
      },
      {
        "threadId": "2025116934572843338",
        "title": "Feijoada, post-PE y CPS: crítica a la optimización luterana",
        "url": "https://turrero.vercel.app/turra/2025116934572843338"
      }
    ],
    "books": [
      {
        "title": "Mythmaking: Self-Discovery and the Timeless Art of Memoir",
        "author": "Maureen Murdock",
        "url": "https://www.goodreads.com/book/show/173476263-mythmaking"
      },
      {
        "title": "Digitally Curious: Your Guide to Navigating the Future …",
        "author": "Andrew Grill",
        "url": "https://www.goodreads.com/book/show/181728813-digitally-curious"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#cultura-luterana",
    "isPillar": false
  },
  {
    "slug": "espiral-del-silencio",
    "term": "Espiral del silencio",
    "familyId": "sociedad",
    "tier": "core",
    "short": "Tendencia a callar cuando creemos que nuestra opinión va contra la mayoría, por miedo al aislamiento.",
    "analogy": "Una sala llena de personas que dudan de una idea absurda, pero todas aplauden porque cada una cree ser la única que piensa distinto.",
    "howToApply": "Usa recogidas anónimas de objeciones o designa un «abogado del diablo» oficial antes de votar decisiones importantes.",
    "antiPattern": "Asumir que el consenso aparente en voz alta refleja lo que el equipo o el mercado piensan de verdad.",
    "paragraphs": [
      "Recuenco la usa para explicar cómo se crea y se sostiene la opinión pública: mientras la mayoría matizada calla, una minoría ruidosa parece inmune al efecto y ocupa el espacio. Más tarde la contrapone a su espiral del pa qué: en la de Noelle-Neumann se calla por miedo, en la suya uno se retira porque no compensa."
    ],
    "origin": "Elisabeth Noelle-Neumann, teoría de la espiral del silencio",
    "aliases": [
      "espiral del silencio",
      "Espiral del Silencio"
    ],
    "related": [
      "espiral-del-pa-que",
      "facciones-lanares",
      "zelotes"
    ],
    "sources": [
      {
        "threadId": "1535521789585117185",
        "title": "Examinando dinámicas de creación y sustentación de opinión",
        "url": "https://turrero.vercel.app/turra/1535521789585117185"
      },
      {
        "threadId": "2096125175175512394",
        "title": "La espiral del pa qué y los juegos sociales como sustituto de la realidad",
        "url": "https://turrero.vercel.app/turra/2096125175175512394"
      }
    ],
    "books": [
      {
        "title": "Outsiders",
        "author": "Howard S. Becker",
        "url": "https://www.goodreads.com/book/show/72252.Outsiders"
      },
      {
        "title": "Social Pathology: A Systematic Approach To The Theory Of Sociopathic Behavior",
        "author": "Edwin McCarthy Lemert",
        "url": "https://www.goodreads.com/book/show/19596066-social-pathology"
      },
      {
        "title": "The Spiral of Silence: Public Opinion--Our Social Skin",
        "author": "Elisabeth Noelle-Neumann",
        "url": "https://www.goodreads.com/book/show/3143551-the-spiral-of-silence"
      },
      {
        "title": "Games: Agency As Art (Thinking Art)",
        "author": "C. Thi Nguyen",
        "url": "https://www.goodreads.com/book/show/48765399"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#espiral-del-silencio",
    "isPillar": false
  },
  {
    "slug": "pantomima",
    "term": "Pantomima",
    "familyId": "sociedad",
    "tier": "core",
    "short": "Esfuerzo consciente por mantener vivo un relato que se sabe falso, porque conviene a todas las partes.",
    "analogy": "El traje nuevo del emperador: todos ven que va desnudo, pero nadie lo dice porque aplaudir le conviene a cada uno para conservar su silla.",
    "howToApply": "Crea espacios seguros para nombrar lo obvio; cuando el coste de decir la verdad es menor que el de mentir, la pantomima se desinfla.",
    "antiPattern": "Participar en rituales corporativos vacíos sabiendo que son falsos hasta olvidar que tú también estabas fingiendo.",
    "paragraphs": [
      "Recuenco la separa de la disonancia cognitiva y de las fake news: en la pantomima todos saben qué es real y qué es teatro. Su ejemplo es la política, donde dos partidos pactan en privado lo sensato y en público escenifican lo contrario para sus bases. Otro es el presupuesto anual, que llama «pantomima cósmica». Uno de sus motores es que mucha gente quiere ser engañada para conservar su paz mental, y de ahí su tesis: vivimos en la era de la misdirection, donde nunca es la realidad, siempre es el relato."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "pantomima",
      "pantomimas"
    ],
    "related": [
      "autoengano",
      "critica-al-design-thinking",
      "disonancia-cognitiva",
      "efecto-gell-mann",
      "espiral-del-pa-que",
      "metaincentivos",
      "truth-coping"
    ],
    "sources": [
      {
        "threadId": "1730843036983120174",
        "title": "La pervivencia de la pantomima en la sociedad moderna",
        "url": "https://turrero.vercel.app/turra/1730843036983120174"
      },
      {
        "threadId": "1746066280782631368",
        "title": "CFOs y el desafío de adaptarse en un mundo incierto",
        "url": "https://turrero.vercel.app/turra/1746066280782631368"
      }
    ],
    "books": [
      {
        "title": "The State of Affairs: Rethinking Infidelity",
        "author": "Esther Perel",
        "url": "https://www.goodreads.com/book/show/34017010-the-state-of-affairs"
      },
      {
        "title": "Great by Choice: Uncertainty, Chaos, and Luck—Why Some Thrive Despite Them All",
        "author": "Jim Collins",
        "url": "https://www.goodreads.com/book/show/12675109-great-by-choice"
      },
      {
        "title": "Future Ready",
        "author": "Steve Morlidge",
        "url": "https://www.goodreads.com/book/show/7554096-future-ready"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#pantomima",
    "isPillar": false
  },
  {
    "slug": "pompismo",
    "term": "Pompismo",
    "familyId": "sociedad",
    "tier": "core",
    "short": "Idealismo que niega la realidad elemental para sostener una idea abstracta y bella. Sus defensores viven en «pompitas de realidad».",
    "analogy": "Diseñar un puente precioso en un dibujo ignorando la gravedad porque «en un mundo ideal la gravedad debería ser más amable».",
    "howToApply": "Somete siempre las ideas nobles a la prueba de la realidad práctica: qué incentivos crea, quién paga la factura y qué pasa el día después.",
    "antiPattern": "Juzgar políticas, empresas o personas únicamente por la belleza de sus intenciones ignorando sus consecuencias reales.",
    "paragraphs": [
      "Recuenco llama pompistas a quienes creen firmemente en un constructo abstracto que, para cumplirse, exige negar la realidad más básica. Se puede ser experto sólido en un campo y pompista en otro, como le pasaba a Bertrand Russell. El problema es siempre el mismo: visión de túnel y, en cuanto la idea toca tierra, el desastre. Su ejemplo extremo es la utopía agraria de Pol Pot. De ahí su frase: «El pragmatismo cae mal porque no es empático. El pompismo cae bien pero no funciona»."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "pompismo",
      "pompista",
      "pompistas",
      "pompi"
    ],
    "related": [
      "autoengano",
      "chavesnogalismo",
      "facciones-lanares",
      "game-awareness",
      "man-on-a-mission",
      "matriz-de-compra-de-pescado",
      "sweet-spot",
      "zelotes"
    ],
    "sources": [
      {
        "threadId": "1748598237563412826",
        "title": "Análisis crítico de los pompistas y el idealismo en la actualidad",
        "url": "https://turrero.vercel.app/turra/1748598237563412826"
      },
      {
        "threadId": "1753677668996837620",
        "title": "Tercera y última parte del pompismo: El peligro del idealismo y la obsesión",
        "url": "https://turrero.vercel.app/turra/1753677668996837620"
      },
      {
        "threadId": "1758760266068590698",
        "title": "Explorando el cómic como expresión del pompismo",
        "url": "https://turrero.vercel.app/turra/1758760266068590698"
      }
    ],
    "books": [
      {
        "title": "A Conflict of Visions: Ideological Origins of Political Struggles",
        "author": "Thomas Sowell",
        "url": "https://www.goodreads.com/book/show/3047.A_Conflict_of_Visions"
      },
      {
        "title": "When Prophecy Fails: A Social and Psychological Study of a Modern Group that Predicted the Destruction of the World",
        "author": "Leon Festinger",
        "url": "https://www.goodreads.com/book/show/1835405.When_Prophecy_Fails?ref=nav_sb_ss_1_10"
      },
      {
        "title": "Por qué creemos en mierdas: Cómo nos engañamos a nosotros mismos",
        "author": "Ramón Nogueras Pérez",
        "url": "https://www.goodreads.com/es/book/show/51825715"
      },
      {
        "title": "Nazi Wives: The Women at the Top of Hitler's Germany",
        "author": "James Wyllie",
        "url": "https://www.goodreads.com/book/show/49127450-nazi-wives"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#pompismo",
    "isPillar": false
  },
  {
    "slug": "zeitgeist",
    "term": "Zeitgeist",
    "familyId": "sociedad",
    "tier": "core",
    "short": "Espíritu de la época: lo que la sociedad está dispuesta a aceptar, desear o rechazar en un momento dado.",
    "analogy": "El clima invisible de una época: lo que hace diez años parecía radical hoy es normal, y lo que ayer se aplaudía mañana da vergüenza ajena.",
    "howToApply": "Lee el pulso cultural, estético y emocional de tu tiempo para saber qué propuestas conectan con la sensibilidad viva del momento.",
    "antiPattern": "Lanzar mensajes o productos anclados en el clima cultural de hace quince años preguntándote por qué ya nadie responde.",
    "paragraphs": [
      "Recuenco insiste en que no hay peor negocio que ir contra el zeitgeist: le atribuye la caída de Danone y el declive de Facebook. Frente a Christensen, sostiene que las disrupciones nacen de rupturas en la continuidad del zeitgeist más que de avances técnicos. El abrochador liminal triunfa porque conecta un estímulo tecnológico con el zeitgeist mediante una killer app."
    ],
    "origin": "",
    "aliases": [
      "zeitgeist"
    ],
    "related": [
      "abrochador-liminal",
      "atractores",
      "corrientes-subterraneas",
      "eta",
      "harbingers-of-doom",
      "sindrome-del-coronel-thompson",
      "test-astudillo"
    ],
    "sources": [
      {
        "threadId": "1375697328561078276",
        "title": "La dimisión del CEO de Danone",
        "url": "https://turrero.vercel.app/turra/1375697328561078276"
      },
      {
        "threadId": "1586258861190676482",
        "title": "La vaca se ordeña siempre de la misma manera hasta que revienta",
        "url": "https://turrero.vercel.app/turra/1586258861190676482"
      },
      {
        "threadId": "1411191931669987332",
        "title": "Un abrochador liminal consigue avanzar en un estímulo tecnológico con el zeitgeist por medio",
        "url": "https://turrero.vercel.app/turra/1411191931669987332"
      }
    ],
    "books": [
      {
        "title": "On War",
        "author": "Carl von Clausewitz",
        "url": "https://www.goodreads.com/book/show/117031.On_War"
      },
      {
        "title": "On Strategy: A Critical Analysis of the Vietnam War",
        "author": "Harry G. Summers Jr.",
        "url": "https://www.goodreads.com/book/show/379352.On_Strategy"
      },
      {
        "title": "The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail",
        "author": "Clayton M. Christensen",
        "url": "https://www.goodreads.com/book/show/664534.The_Innovator_s_Dilemma"
      },
      {
        "title": "Videogames: In The Beginning",
        "author": "Ralph H. Baer",
        "url": "https://www.goodreads.com/book/show/68560.Videogames"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#zeitgeist",
    "isPillar": false
  },
  {
    "slug": "chavesnogalismo",
    "term": "Chavesnogalismo",
    "familyId": "sociedad",
    "tier": "deep",
    "short": "Postura de saber que la maldad no tiene bando: el hijoputismo cruza todas las ideologías.",
    "analogy": "Darse cuenta de que el egoísmo y la crueldad no llevan camiseta de un solo equipo: están repartidos equitativamente en todas las gradas.",
    "howToApply": "Evalúa hechos, conductas y consecuencias concretas de cada actor, sin indultar abusos solo porque vengan de «los tuyos».",
    "antiPattern": "Afiliarte emocionalmente a un bando y justificar en tus aliados exactamente lo que condenas con furia en tus rivales.",
    "paragraphs": [
      "Recuenco lo contrapone al pompismo, que coloca a los malos en el eje ideológico y da a «los otros» el monopolio del hijoputismo. El chavesnogalismo sabe que el hijoputismo es patrimonio de la humanidad y opera en un eje perpendicular a las ideologías. Toma el nombre de Manuel Chaves Nogales, el periodista al que en la Guerra Civil unos llamaban rojo y otros franquista. Recuenco asume su mismo destino: negarse a elegir trinchera y que todos te quieran muerto."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "chavesnogalismo",
      "Chavesnogalismo",
      "hijoputismo"
    ],
    "related": [
      "bothism",
      "facciones-lanares",
      "matriz-de-compra-de-pescado",
      "pompismo"
    ],
    "sources": [
      {
        "threadId": "1758760266068590698",
        "title": "Explorando el cómic como expresión del pompismo",
        "url": "https://turrero.vercel.app/turra/1758760266068590698"
      }
    ],
    "books": [
      {
        "title": "Nazi Wives: The Women at the Top of Hitler's Germany",
        "author": "James Wyllie",
        "url": "https://www.goodreads.com/book/show/49127450-nazi-wives"
      },
      {
        "title": "El abismo del olvido",
        "author": "Paco Roca",
        "url": "https://www.goodreads.com/es/book/show/201038023"
      },
      {
        "title": "Dave Sim: Conversations",
        "author": "Eric Hoffman",
        "url": "https://www.goodreads.com/book/show/16277271-dave-sim"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#chavesnogalismo",
    "isPillar": false
  },
  {
    "slug": "efecto-gell-mann",
    "term": "Efecto Gell-Mann",
    "familyId": "sociedad",
    "tier": "deep",
    "short": "Detectas los errores de la prensa en lo que dominas, pero te crees el resto del periódico.",
    "analogy": "Leer una noticia sobre tu profesión llena de disparates, reírte de lo mal informada que está, pasar de página y creerte al pie de la letra la de geopolítica.",
    "howToApply": "Aplica el mismo escepticismo sano que usas en tu campo de dominio cuando leas titulares, informes o tertulias sobre temas que no dominas.",
    "antiPattern": "Dar por cierta cualquier narrativa sofisticada solo porque viene bien redactada en un medio prestigioso o un informe viral.",
    "paragraphs": [
      "Lees un artículo sobre algo que conoces bien, ves que el periodista no sabe de qué habla, y al pasar de sección vuelves a confiar como si nada. Recuenco lo cuenta a raíz de un periodista culto que despreciaba a los adultos que juegan a videojuegos, y saca una conclusión: ningún saber está a salvo y hay que verificar todo con espíritu crítico. De ahí su defensa del «no tengo ni p*** idea sobre esto y no pasa nada»."
    ],
    "origin": "Michael Crichton, que le dio nombre en su charla «Why Speculate?»",
    "aliases": [
      "efecto Gell-Mann",
      "amnesia de Gell-Mann",
      "Gell-Mann"
    ],
    "related": [
      "pantomima",
      "sesgo"
    ],
    "sources": [
      {
        "threadId": "1056485929186144256",
        "title": "El efecto Amnesia de Murray Gellmann",
        "url": "https://turrero.vercel.app/turra/1056485929186144256"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#efecto-gell-mann",
    "isPillar": false
  },
  {
    "slug": "espiral-del-pa-que",
    "term": "Espiral del pa qué",
    "familyId": "sociedad",
    "tier": "deep",
    "short": "Retirada de quien concluye que confrontar la realidad cuesta más de lo que aporta: «¿pa qué?».",
    "analogy": "El momento en que alguien deja de señalar que el barco hace agua porque cada vez que avisa le regañan por aguar la fiesta.",
    "howToApply": "Protege activamente a quien trae malas noticias temprano; si los críticos constructivos callan de golpe, tu organización está en peligro grave.",
    "antiPattern": "Celebrar el silencio y la ausencia de quejas como si fueran señales de alineamiento y paz social.",
    "paragraphs": [
      "Recuenco la contrapone a la espiral del silencio: allí uno calla por miedo al aislamiento, aquí se retira porque el coste cognitivo, reputacional y de tiempo de pelear supera cualquier beneficio. No es pereza, sino una ecuación de valor que se ha vuelto delirante o, peor, realista. Cuando el sistema premia el juego social y no el resultado, la gente abandona el problema real y se refugia en el tablero: el bando, el KPI o quién gana la conversación."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "espiral del pa qué",
      "espiral del pa que",
      "espiral del pa quien"
    ],
    "related": [
      "espiral-del-silencio",
      "pantomima",
      "truth-coping"
    ],
    "sources": [
      {
        "threadId": "2096125175175512394",
        "title": "La espiral del pa qué y los juegos sociales como sustituto de la realidad",
        "url": "https://turrero.vercel.app/turra/2096125175175512394"
      }
    ],
    "books": [
      {
        "title": "Games: Agency As Art (Thinking Art)",
        "author": "C. Thi Nguyen",
        "url": "https://www.goodreads.com/book/show/48765399"
      },
      {
        "title": "The Status Game: On Human Life and How to Play It",
        "author": "Will Storr",
        "url": "https://www.goodreads.com/book/show/58642436"
      },
      {
        "title": "Games People Play",
        "author": "Eric Berne",
        "url": "https://www.goodreads.com/book/show/49176.Games_People_Play"
      },
      {
        "title": "The Score: How to Stop Playing Somebody Else's Game",
        "author": "C. Thi Nguyen",
        "url": "https://www.goodreads.com/book/show/231363343-the-score"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#espiral-del-pa-que",
    "isPillar": false
  },
  {
    "slug": "facciones-lanares",
    "term": "Facciones lanares",
    "familyId": "sociedad",
    "tier": "deep",
    "short": "Parte de un grupo que sigue a su tribu como un rebaño, sin crítica, arrastrada por una narrativa afectiva.",
    "analogy": "Seguir al rebaño a toda velocidad sin mirar por qué corre nadie, simplemente porque da vértigo quedarse solo fuera del grupo.",
    "howToApply": "Pregúntate si defiendes una postura por evidencia propia o por miedo a perder el aplauso de tu tribu profesional o política.",
    "antiPattern": "Reducir debates complejos a consignas de «buenos contra malos» que ahorran el esfuerzo de pensar.",
    "paragraphs": [
      "Recuenco insiste en que nadie se ve a sí mismo como borrego, pero todos hemos sido lanares alguna vez, y la inteligencia no protege: «donde entra una narrativa afectiva, el Einstein más Einstein se convierte en masa lanar». Lo ilustra con las aficiones de fútbol, desglosando la «lanaridad» por identidad grupal, necesidad de integración o señalamiento del enemigo. Cuando la facción lanar se vuelve zelote, sus actos te afectan aunque mires desde la barrera."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "facciones lanares",
      "facción lanar",
      "lanar",
      "lanares",
      "lanaridad",
      "masa lanar"
    ],
    "related": [
      "chavesnogalismo",
      "colapso-cognitivo",
      "enshittification",
      "espiral-del-silencio",
      "pompismo",
      "zelotes"
    ],
    "sources": [
      {
        "threadId": "1616684654269980673",
        "title": "La división en bandos más o menos en términos de derecha/izquierda hasta que leí a Haidt",
        "url": "https://turrero.vercel.app/turra/1616684654269980673"
      }
    ],
    "books": [
      {
        "title": "Conformity: The Power of Social Influences",
        "author": "Cass R. Sunstein",
        "url": "https://www.goodreads.com/book/show/42832291-conformity"
      },
      {
        "title": "Teaming: How Organizations Learn, Innovate, and Compete in the Knowledge Economy",
        "author": "Amy C. Edmondson",
        "url": "https://www.goodreads.com/book/show/7023600-teaming"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#facciones-lanares",
    "isPillar": false
  },
  {
    "slug": "zelotes",
    "term": "Zelote",
    "familyId": "sociedad",
    "tier": "deep",
    "short": "Fanático que ha puesto ciertas ideas en un altar y, si se tocan, reacciona con la amígdala.",
    "analogy": "Alguien que ha convertido una herramienta o ideología en religión: si cuestionas un detalle técnico, siente que atacas su alma.",
    "howToApply": "Detecta cuándo una conversación ha pasado de análisis racional a identidad tribal; ahí debatir datos en frío suele ser inútil.",
    "antiPattern": "Convertir tu metodología favorita (Agile, IA, un autor o una ideología) en un altar intocable que ya no admite crítica.",
    "paragraphs": [
      "Así lo define Recuenco: da igual su capacidad intelectual, porque ante lo sagrado reacciona desde la emoción. En ausencia de liderazgo fuerte, los zelotes ocupan el hueco y arrastran a la gente con una convicción contra la que es muy difícil defender una postura matizada. También aparecen alrededor de cada herramienta nueva, proclamándola la única verdadera. En otra turra usa el término en positivo: el Private Equity necesita «zelotes del modelo operativo» que no negocien lo innegociable."
    ],
    "origin": "",
    "aliases": [
      "zelote",
      "zelotes"
    ],
    "related": [
      "asertividad",
      "espiral-del-silencio",
      "facciones-lanares",
      "matriz-de-compra-de-pescado",
      "pompismo"
    ],
    "sources": [
      {
        "threadId": "1616684654269980673",
        "title": "La división en bandos más o menos en términos de derecha/izquierda hasta que leí a Haidt",
        "url": "https://turrero.vercel.app/turra/1616684654269980673"
      },
      {
        "threadId": "1535521789585117185",
        "title": "Examinando dinámicas de creación y sustentación de opinión",
        "url": "https://turrero.vercel.app/turra/1535521789585117185"
      },
      {
        "threadId": "1337670943276224513",
        "title": "Relación entre Complejidad, Alineamiento y Agile",
        "url": "https://turrero.vercel.app/turra/1337670943276224513"
      }
    ],
    "books": [
      {
        "title": "Conformity: The Power of Social Influences",
        "author": "Cass R. Sunstein",
        "url": "https://www.goodreads.com/book/show/42832291-conformity"
      },
      {
        "title": "Teaming: How Organizations Learn, Innovate, and Compete in the Knowledge Economy",
        "author": "Amy C. Edmondson",
        "url": "https://www.goodreads.com/book/show/7023600-teaming"
      },
      {
        "title": "Outsiders",
        "author": "Howard S. Becker",
        "url": "https://www.goodreads.com/book/show/72252.Outsiders"
      },
      {
        "title": "Social Pathology: A Systematic Approach To The Theory Of Sociopathic Behavior",
        "author": "Edwin McCarthy Lemert",
        "url": "https://www.goodreads.com/book/show/19596066-social-pathology"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#zelotes",
    "isPillar": false
  },
  {
    "slug": "optimizacion-luterana-y-feijoada",
    "term": "Feijoada y optimización luterana",
    "familyId": "sociedad",
    "tier": "deep",
    "short": "Metáfora gastronómica y cultural que opone la creación de valor a fuego lento, mestiza y comunitaria (feijoada y CPS Hispano) al agotamiento del recorte obsesivo y el fast food corporativo (optimización luterana).",
    "analogy": "Intentar replicar en tres minutos de microondas un guiso que exige desalar dos días y cocer cuatro horas a fuego lento en olla de barro: sale caliente, pero has destruido todo lo que le daba sentido.",
    "howToApply": "Combina la disciplina estructural luterana con la paciencia, el ingenio y la autenticidad del chup-chup: invierte en construir propuestas de valor irreplicables en vez de pasar eternamente la lija a lo que ya muere.",
    "antiPattern": "Exprimir cada proceso con la mentalidad de «garlopa y lija» del Private Equity clásico creyendo que reducir costes y tiempos sustituye a crear valor real.",
    "paragraphs": [
      "Recuenco presenta este cruce como su «teoría unificada» entre el Post-PE y el CPS Hispano: frente a la cultura del «sándwich de pepino» y la optimización luterana —donde el Private Equity tradicional exprimía modelos maduros a golpe de recorte y eficiencia predecible—, la feijoada brasileña encarna la lógica del plato lento, nacido de la escasez, el mestizaje cultural y la cocción paciente en comunidad.",
      "La tesis no celebra el desorden ni romantiza defectos hispanos: defiende sintetizar lo mejor de ambos mundos. Como Salieri ante el genio caótico de Mozart en «Amadeus», el CPS consiste en embotellar esa chispa creativa y mezclarla con suficiente hormigón y estructura para crear valor duradero cuando la mera optimización ya no salva a las compañías en problemas."
    ],
    "origin": "Javier G. Recuenco (síntesis de Post-PE, CPS Hispano y crítica a la era luterana, con referencias a Luís da Câmara Cascudo, Eugenio d'Ors y Adriano Olivetti)",
    "aliases": [
      "feijoada",
      "optimización luterana",
      "era post-luterana",
      "platos lentos y chup-chup",
      "sándwiches de pepino"
    ],
    "related": [
      "cienciarte",
      "cps-hispano",
      "cultura-luterana",
      "post-pe-y-cfu",
      "private-equity",
      "taylorismo"
    ],
    "sources": [
      {
        "threadId": "2025116934572843338",
        "title": "Feijoada, post-PE y CPS: crítica a la optimización luterana",
        "url": "https://turrero.vercel.app/turra/2025116934572843338"
      },
      {
        "threadId": "1971825115165028522",
        "title": "CPS Hispano: la nueva estrategia de creatividad y rebeldía",
        "url": "https://turrero.vercel.app/turra/1971825115165028522"
      }
    ],
    "books": [
      {
        "title": "Lo Barroco",
        "author": "Eugenio d'Ors",
        "url": "https://www.goodreads.com/book/show/39715965-lo-barroco"
      },
      {
        "title": "L'impresa responsabile: Un'intervista su Adriano Olivetti",
        "author": "Luciano Gallino",
        "url": "https://www.goodreads.com/book/show/23273468-l-impresa-responsabile"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2025116934572843338",
    "isPillar": false
  },
  {
    "slug": "enshittification",
    "term": "Enshittification",
    "familyId": "sociedad",
    "tier": "deep",
    "short": "Degradación sistemática de plataformas, industrias y espacios públicos cuando sus incentivos viran de servir al usuario o ciudadano hacia la extracción, la opacidad y el sectarismo.",
    "analogy": "Un restaurante de barrio que primero te conquista con producto impecable, luego abarata ingredientes para exprimir margen y acaba cobrándote el doble por comida recalentada porque sabe que ya no tienes otro sitio cerca.",
    "howToApply": "No intentes reformar desde dentro un sistema podrido por incentivos cómplices: diseña alternativas desde fuera (outsider) con transparencia radical y skin in the game, y separa el valor de una disciplina de la moda comercial que la parasita.",
    "antiPattern": "Confiar en que el statu quo de una industria opaca se autorregule o permitir que la esclerosis partidista pudra incluso la respuesta ante una catástrofe real.",
    "paragraphs": [
      "Acuñado por Cory Doctorow para describir la decadencia programada de las plataformas digitales («mierdificación»), Recuenco extiende el concepto a tres frentes decisivos: el marketing digital capturado por el fraude y los datos basura, la degradación de la vida política y el debate público ante catástrofes como la DANA, y la erosión comercial que amenaza a cualquier movimiento o disciplina de éxito.",
      "Su diagnóstico es tajante: un sistema degradado casi nunca se regenera desde dentro porque todos sus actores dependen de los mismos incentivos perversos. Frente a la «enshittification» publicitaria plantea post-agencias ajenas al ecosistema cómplice (como MPFG); frente a la esclerosis cognitiva en la vida pública, reivindica el sentido común, la flexibilidad de Karl Weick y el foco en quienes actúan con decencia."
    ],
    "origin": "Cory Doctorow (enshittification / mierdificación), ampliado por Javier G. Recuenco a la publicidad digital, el debate público y las comunidades de innovación",
    "aliases": [
      "enshittification",
      "mierdificación",
      "degradación de plataformas",
      "post-agencia"
    ],
    "related": [
      "capitalismo-de-vigilancia",
      "colapso-cognitivo",
      "facciones-lanares",
      "hotel-de-hilbert",
      "incentivo-perverso",
      "s4-nightmare"
    ],
    "sources": [
      {
        "threadId": "1852267188519854245",
        "title": "Los colapsos cognitivos, sentido común y figuras heroicas en tiempos complejos",
        "url": "https://turrero.vercel.app/turra/1852267188519854245"
      },
      {
        "threadId": "1842453861094609097",
        "title": "Modelos extractivos de datos ponen en riesgo la privacidad y el control de los anunciantes",
        "url": "https://turrero.vercel.app/turra/1842453861094609097"
      },
      {
        "threadId": "1791716794312318984",
        "title": "Reflexión sobre los desafíos y el futuro del CPS en la comunidad de innovación",
        "url": "https://turrero.vercel.app/turra/1791716794312318984"
      }
    ],
    "books": [],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1852267188519854245",
    "isPillar": false
  },
  {
    "slug": "centauro",
    "term": "Centauro",
    "familyId": "tecnologia",
    "tier": "core",
    "short": "Híbrido de humano e IA que rinde más que cada uno por separado, idea de Garry Kasparov tras Deep Blue.",
    "analogy": "Un ajedrecista humano apoyado por un motor de cálculo: la máquina no se cansa de calcular variantes, el humano lee la psicología y el plan global.",
    "howToApply": "Combina tu criterio contextual, sentido del problema y trato humano con la velocidad de síntesis y exploración de la IA.",
    "antiPattern": "Delegar el juicio crítico por completo a la IA (piloto automático) o rechazarla por orgullo artesanal compitiendo a fuerza bruta.",
    "paragraphs": [
      "Kasparov acuñó el concepto en 1998, después de su enfrentamiento con Deep Blue. Recuenco lo usa para pensar la convergencia entre CPS e IA: la IA no hará CPS, pero el trabajo será de centauros. Le preocupa el «centauro inverso» de Cory Doctorow, el humano que solo asiente ante la decisión automatizada, y pide una teoría sobre cómo se delega la responsabilidad en los híbridos centauro."
    ],
    "origin": "Garry Kasparov",
    "aliases": [
      "centauro",
      "centauros",
      "híbrido centauro",
      "híbridos centauro",
      "dinámicas centauro",
      "centauro inverso"
    ],
    "related": [
      "all-models-are-wrong",
      "homework-apocalypse",
      "ia-chasm",
      "lujo-humano",
      "moat",
      "santuario-humano"
    ],
    "sources": [
      {
        "threadId": "1720721564465823881",
        "title": "Analizando la fusión de Inteligencia Artificial y CPS en el mercado laboral",
        "url": "https://turrero.vercel.app/turra/1720721564465823881"
      },
      {
        "threadId": "1837390467337490808",
        "title": "Teoría sobre delegación de responsabilidad en Híbridos Centauro",
        "url": "https://turrero.vercel.app/turra/1837390467337490808"
      }
    ],
    "books": [
      {
        "title": "The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies",
        "author": "Erik Brynjolfsson",
        "url": "https://www.goodreads.com/book/show/23316526-the-second-machine-age"
      },
      {
        "title": "Rise of the Robots: Technology and the Threat of a Jobless Future",
        "author": "Martin Ford",
        "url": "https://www.goodreads.com/book/show/22928874-rise-of-the-robots"
      },
      {
        "title": "The Fourth Industrial Revolution",
        "author": "Klaus Schwab",
        "url": "https://www.goodreads.com/book/show/28570175-the-fourth-industrial-revolution"
      },
      {
        "title": "The Reasonable Robot: Artificial Intelligence and the Law",
        "author": "Ryan Abbott",
        "url": "https://goodreads.com/book/show/48989663.The_Reasonable_Robot_Artificial_Intelligence_and_the_Law"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#centauro",
    "isPillar": false
  },
  {
    "slug": "ecosistemas-tecnologicos",
    "term": "Ecosistemas tecnológicos",
    "familyId": "tecnologia",
    "tier": "core",
    "short": "Pilar del CPS: entender a fondo las megatendencias tecnológicas, como IA, big data, IoT o blockchain, y su efecto.",
    "analogy": "No basta con mirar un árbol (una app de moda); hay que entender el clima, el suelo y las lluvias que determinan qué especies prosperarán.",
    "howToApply": "Estudia cómo interactúan IA, datos, infraestructura, regulación y hábitos de usuario como un sistema conectado y no como modas sueltas.",
    "antiPattern": "Tratar la tecnología como un catálogo de juguetes aislados que se compran por FOMO sin tocar el modelo operativo.",
    "paragraphs": [
      "Forma una de las cuatro macrodisciplinas del CPS, junto a las ciencias de la complejidad, el Factor X y el business acumen. Recuenco la describe como un mapeo de todo lo que puede hacer el megaatractor de las megatendencias tecnológicas: data science, big data, IoT, blockchain, IA. De Charlie Munger dice que la usa poco porque «es un boomer»."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "ecosistemas tecnológicos",
      "ecosistema tecnológico",
      "technology environment"
    ],
    "related": [
      "abrochador-liminal",
      "business-acumen",
      "capitalismo-de-vigilancia",
      "ciencias-de-la-complejidad",
      "decision-makers",
      "desierto-tipo-sierra",
      "factor-x",
      "ia-chasm",
      "reshuffle",
      "s4-nightmare"
    ],
    "sources": [
      {
        "threadId": "1340160478316785666",
        "title": "Cierro con éste la trilogía sobre libros recomendados para CPS",
        "url": "https://turrero.vercel.app/turra/1340160478316785666"
      }
    ],
    "books": [
      {
        "title": "The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power",
        "author": "Shoshana Zuboff",
        "url": "https://www.goodreads.com/book/show/26195941-the-age-of-surveillance-capitalism"
      },
      {
        "title": "Business Adventures",
        "author": "John Brooks",
        "url": "https://www.goodreads.com/book/show/4191136-business-adventures"
      },
      {
        "title": "Business Anthropology",
        "author": "Ann T. Jordan",
        "url": "https://www.goodreads.com/en/book/show/4509587-business-anthropology"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#ecosistemas-tecnologicos",
    "isPillar": true
  },
  {
    "slug": "ia-chasm",
    "term": "IA chasm",
    "familyId": "tecnologia",
    "tier": "core",
    "short": "Brecha entre los pilotos de IA y su adopción real a escala en las empresas.",
    "analogy": "Tener veinte prototipos espectaculares de coche volador en el garaje, pero seguir yendo todos los lunes a trabajar en autobús.",
    "howToApply": "Pasa de demos vistosas a rediseñar procesos concretos con personas reales, datos limpios, incentivos alineados y medición de impacto real.",
    "antiPattern": "Acumular decenas de pilotos de IA «para salir en la foto» sin cambiar nunca cómo trabaja ni decide la organización.",
    "paragraphs": [
      "Recuenco adapta «Crossing the Chasm» de Geoffrey Moore, que describe el abismo entre los early adopters y la mayoría pragmática. Muchas empresas están en la fase de pruebas y experimentos, y la mayoría de esos pilotos nunca escala. Lo une a la tesis de los dos relojes: la capacidad de la IA avanza de forma exponencial y la absorción de las organizaciones, lenta y lineal. Cruzar el chasm exige acompasar ambos."
    ],
    "origin": "Javier G. Recuenco, a partir de Geoffrey Moore, «Crossing the Chasm»",
    "aliases": [
      "IA chasm",
      "IA Chasm",
      "brecha de la IA",
      "dos relojes"
    ],
    "related": [
      "aftershock",
      "centauro",
      "desierto-tipo-sierra",
      "ecosistemas-tecnologicos",
      "homework-apocalypse",
      "personotecnia",
      "reshuffle"
    ],
    "sources": [
      {
        "threadId": "2075812328566562908",
        "title": "IA Chasm: la brecha entre pilotos y adopción real de IA",
        "url": "https://turrero.vercel.app/turra/2075812328566562908"
      }
    ],
    "books": [
      {
        "title": "The AI Revolution in Book Publishing: A Concise Guide t…",
        "author": "Thad McIlroy",
        "url": "https://www.goodreads.com/book/show/216788633-the-ai-revolution-in-book-publishing"
      },
      {
        "title": "Crossing the Chasm: Marketing and Selling High-Tech Pro…",
        "author": "Geoffrey A. Moore",
        "url": "https://www.goodreads.com/book/show/61329.Crossing_the_Chasm"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#ia-chasm",
    "isPillar": false
  },
  {
    "slug": "lujo-humano",
    "term": "Lujo humano",
    "familyId": "tecnologia",
    "tier": "core",
    "short": "Lo humano y no escalable como bien escaso y caro cuando la IA abarata todo lo demás.",
    "analogy": "Cuando cualquier máquina fabrica muebles idénticos por céntimos, la mesa tallada a mano por un artesano que te escucha pasa a ser un lujo deseado.",
    "howToApply": "Automatiza lo mecánico con IA, pero invierte el tiempo liberado en presencia real, criterio singular, gusto y trato humano irrepetible.",
    "antiPattern": "Recortar todo el contacto humano para ahorrar unos céntimos y acabar compitiendo solo por precio contra bots infinitos.",
    "paragraphs": [
      "Recuenco prevé que muchas empresas usarán la IA para multiplicar su producción, lo que subirá la calidad media pero disparará el coste diferencial del trabajo humano. La IA escalará productos que antes eran de lujo solo porque el acceso a la información era limitado. En cambio, el CPS y el pensamiento lateral humano se volverán un lujo. Para los demás quedarán las «slides de McKinsey hechas en el avión por ChatGPT»."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "lujo humano"
    ],
    "related": [
      "blitzscaling",
      "capitalismo-de-vigilancia",
      "centauro",
      "moat",
      "personotecnia-ia",
      "resolutivas-invisibles",
      "santuario-humano"
    ],
    "sources": [
      {
        "threadId": "1870373349282484488",
        "title": "El impacto del blitzscaling y el futuro del lujo humano",
        "url": "https://turrero.vercel.app/turra/1870373349282484488"
      }
    ],
    "books": [
      {
        "title": "Ford Vs Ferrari",
        "author": "Anthony Pritchard",
        "url": "https://www.goodreads.com/book/show/9702401-ford-vs-ferrari"
      },
      {
        "title": "The Little Book of Hermès: The Story of the Iconic Fashion House",
        "author": "Karen Homer",
        "url": "https://www.goodreads.com/book/show/60001876-the-little-book-of-herm-s"
      },
      {
        "title": "Blitzscaling: The Lightning-Fast Path to Building Massively Valuable Companies",
        "author": "Reid Hoffman",
        "url": "https://www.goodreads.com/book/show/38398157-blitzscaling"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#lujo-humano",
    "isPillar": false
  },
  {
    "slug": "reshuffle",
    "term": "Reshuffle",
    "familyId": "tecnologia",
    "tier": "core",
    "short": "Reordenación estructural de la jerarquía intelectual, los roles y la economía del conocimiento provocada por la irrupción de la IA.",
    "analogy": "No es cambiar las cartas que tienes en la mano, sino barajar de nuevo toda la mesa y cambiar qué jugadas valen más y cuáles dejan de puntuar.",
    "howToApply": "Dejar de sumar herramientas de IA sobre un organigrama intacto y rediseñar qué tareas absorbe la máquina, dónde sigue habiendo prima humana y cómo reconfigurar equipos y formación.",
    "antiPattern": "Creer que tu profesión es «la excepción mágica» que la automatización no tocará mientras ves claramente cómo arrasa todos los oficios vecinos.",
    "paragraphs": [
      "Inspirado en el libro «Reshuffle» de Sangeet Paul Choudary —el «último clavo» que Recuenco necesitó para reformular sus Cinco Atractores en versión 2026—, nombra uno de los grandes atractores de fondo de la nueva década: el reshuffling de la jerarquía intelectual, con implicaciones laborales y educativas directas.",
      "Para Recuenco, adoptar la IA no consiste en encadenar quick wins ni añadir copilotos cosméticos, sino en sobrevivir al reajuste profundo del organigrama y de la economía del conocimiento que exige pasar de pilotos aislados a operaciones realmente preparadas para un entorno IA-first."
    ],
    "origin": "Sangeet Paul Choudary, «Reshuffle» / Javier G. Recuenco (Atractores 2026)",
    "aliases": [
      "reshuffle",
      "reshuffling",
      "reshuffling de la jerarquía intelectual",
      "reshuffle de la economía del conocimiento"
    ],
    "related": [
      "aftershock",
      "atractores",
      "desierto-tipo-sierra",
      "ecosistemas-tecnologicos",
      "hotel-de-hilbert",
      "ia-chasm",
      "santuario-humano"
    ],
    "sources": [
      {
        "threadId": "2004624575837958361",
        "title": "Nuevos atractores 2026 redefinen el futuro tecnológico",
        "url": "https://turrero.vercel.app/turra/2004624575837958361"
      },
      {
        "threadId": "2080919569976185336",
        "title": "La adopción real de la IA en empresas es un desierto tipo Sierra",
        "url": "https://turrero.vercel.app/turra/2080919569976185336"
      },
      {
        "threadId": "2075812328566562908",
        "title": "IA Chasm: la brecha entre pilotos y adopción real de IA",
        "url": "https://turrero.vercel.app/turra/2075812328566562908"
      }
    ],
    "books": [
      {
        "title": "Reshuffle: Who Wins When AI Restacks the Knowledge Economy",
        "author": "Sangeet Paul Choudary",
        "url": "https://www.goodreads.com/search?q=Reshuffle+Sangeet+Paul+Choudary"
      },
      {
        "title": "Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers",
        "author": "Geoffrey A. Moore",
        "url": "https://www.goodreads.com/book/show/61329.Crossing_the_Chasm"
      },
      {
        "title": "Not All Fairy Tales Have Happy Endings: The Rise and Fall of Sierra On-Line",
        "author": "Ken Williams",
        "url": "https://www.goodreads.com/book/show/55530234-not-all-fairy-tales-have-happy-endings"
      },
      {
        "title": "The AI Revolution in Book Publishing: A Concise Guide to Navigating the Future",
        "author": "Thad McIlroy",
        "url": "https://www.goodreads.com/book/show/216788633-the-ai-revolution-in-book-publishing"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2004624575837958361",
    "isPillar": false
  },
  {
    "slug": "santuario-humano",
    "term": "Santuario humano",
    "familyId": "tecnologia",
    "tier": "core",
    "short": "El territorio que permanece genuinamente humano cuando la IA encapsula todo lo determinista: gestionar la incertidumbre con información incompleta y crear cultura con raíces vivas.",
    "analogy": "Como la música nacida de la fricción, el error y el zeitgeist frente a una pista sintética impecable pero sin raíces: podemos fabricar sonidos perfectos en serie, pero seguimos buscando lo que está conectado a la tierra.",
    "howToApply": "Deja que la IA encapsule y automatice lo repetible y determinista, y concentra tu ventaja y la de tu equipo en el juicio bajo incertidumbre, el CPS y las experiencias con autenticidad irrenunciable.",
    "antiPattern": "Nadar contra la corriente intentando prohibir el avance de la IA en tareas sistematizables, o creer que lo sintético puede sustituir el arraigo cultural y emocional humano.",
    "paragraphs": [
      "La tesis del santuario humano une dos hilos capitales de Recuenco: por un lado, la ley evolutiva según la cual todo proceso intelectual modelable de forma determinista terminará encapsulado por la IA, dejando al ser humano la gestión de la incertidumbre y la acción con información incompleta.",
      "Por otro, en su análisis de la música a partir de «Undercurrents» de Rob Young, sostiene que el arte y el sentido humano nacen del diálogo con el zeitgeist, el ritual y el error; como «ex nihilo nihil fit», la síntesis sin raíces provocará una reacción cultural estilo «No machines» en defensa de lo orgánico."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "santuario humano",
      "human sanctuary",
      "encapsulación de procesos por IA",
      "reacción No machines"
    ],
    "related": [
      "centauro",
      "corrientes-subterraneas",
      "cps",
      "factor-x",
      "futurismo-de-frontera",
      "incertidumbre",
      "lujo-humano",
      "reshuffle"
    ],
    "sources": [
      {
        "threadId": "2124047138002764060",
        "title": "Música, IA y el santuario humano",
        "url": "https://turrero.vercel.app/turra/2124047138002764060"
      },
      {
        "threadId": "2118979141928104262",
        "title": "El CPS como puente entre lo incremental y el moonshot",
        "url": "https://turrero.vercel.app/turra/2118979141928104262"
      },
      {
        "threadId": "1966774475191435728",
        "title": "IA encapsula procesos complejos y redefine el CPS",
        "url": "https://turrero.vercel.app/turra/1966774475191435728"
      }
    ],
    "books": [
      {
        "title": "Undercurrents: The Hidden Wiring of Modern Music",
        "author": "Rob Young (ed.)",
        "url": "https://www.goodreads.com/book/show/146225.Undercurrents"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2124047138002764060",
    "isPillar": false
  },
  {
    "slug": "abrochador-liminal",
    "term": "Abrochador liminal",
    "familyId": "tecnologia",
    "tier": "deep",
    "short": "Quien une un avance tecnológico con el espíritu de la época a través de una killer app.",
    "analogy": "Es como quien coge el motor de gasolina (invento técnico) y el deseo de libertad de los años 20 (espíritu de época) y abrocha ambos con un coche asequible.",
    "howToApply": "No preguntes solo «qué hace esta tecnología», sino «qué tensión social ya madura está esperando esta chispa para explotar».",
    "antiPattern": "Enamorarte de una tecnología brillante cinco años antes de que el mercado esté listo para entender para qué le sirve.",
    "paragraphs": [
      "La imagen es la de un corchete de presión que se cierra con un «snap». El abrochador liminal no se emociona con el potencial de una tecnología, sino que crea el producto que la hace imprescindible: VisiCalc para el Apple II, el Walkman de Akio Morita o el videojuego que vende la consola. Recuenco cree que la mayoría de los momentos ajá históricos salen de ahí, y que su enemigo es el chapuzas."
    ],
    "origin": "Javier G. Recuenco",
    "aliases": [
      "abrochador liminal",
      "abrochadores liminales",
      "abrochamiento liminal"
    ],
    "related": [
      "ecosistemas-tecnologicos",
      "liminalidad",
      "sindrome-del-coronel-thompson",
      "zeitgeist"
    ],
    "sources": [
      {
        "threadId": "1411191931669987332",
        "title": "Un abrochador liminal consigue avanzar en un estímulo tecnológico con el zeitgeist por medio",
        "url": "https://turrero.vercel.app/turra/1411191931669987332"
      }
    ],
    "books": [
      {
        "title": "Videogames: In The Beginning",
        "author": "Ralph H. Baer",
        "url": "https://www.goodreads.com/book/show/68560.Videogames"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/glosario#abrochador-liminal",
    "isPillar": false
  },
  {
    "slug": "capitalismo-de-vigilancia",
    "term": "Capitalismo de vigilancia",
    "familyId": "tecnologia",
    "tier": "deep",
    "short": "Modelo digital que extrae datos conductuales masivos para perfilar y bombardear usuarios, confundiendo espionaje estadístico con personalización real.",
    "analogy": "Un vendedor que te sigue a escondidas por el centro comercial anotando qué miras y luego te grita ofertas por un megáfono cada cinco metros.",
    "howToApply": "Sustituye la persecución intrusiva por consentimiento, contexto real y utilidad genuina: respeta la atención como el recurso más escaso.",
    "antiPattern": "Pensar que acumular más datos personales equivale automáticamente a conocer mejor al cliente o a generar confianza.",
    "paragraphs": [
      "Término popularizado por Shoshana Zuboff que Recuenco contrapone frontalmente a la Personotecnia. Durante dos décadas la industria adtech prometió relevancia, pero entregó persecución por cookies e interrupción invasiva.",
      "El resultado no ha sido mejor marketing, sino inmunidad generacional y fatiga de atención: las personas aprenden a ignorar todo lo que huele a embudo automatizado, abriendo la puerta a una personalización ética y contextual basada en respeto e inteligencia real."
    ],
    "origin": "Shoshana Zuboff; eje central del arco de Personotecnia y PersonotecnIA (2025-2026).",
    "aliases": [
      "Falsa personalización",
      "Adtech invasivo"
    ],
    "related": [
      "autosegmentacion",
      "ecosistemas-tecnologicos",
      "enshittification",
      "lujo-humano",
      "personotecnia",
      "personotecnia-ia",
      "s4-nightmare"
    ],
    "sources": [
      {
        "threadId": "2106277152895189177",
        "title": "Capitalismo de vigilancia y los años perdidos de la personalización",
        "url": "https://turrero.vercel.app/turra/2106277152895189177"
      },
      {
        "threadId": "2101155734700405039",
        "title": "Personotecnia y economía de la atención: relevancia, contexto e inmunidad",
        "url": "https://turrero.vercel.app/turra/2101155734700405039"
      }
    ],
    "books": [
      {
        "title": "Careless People: A Cautionary Tale of Power, Greed, and…",
        "author": "Sarah Wynn-Williams",
        "url": "https://www.goodreads.com/book/show/223436601-careless-people"
      },
      {
        "title": "Surveillance After Snowden",
        "author": "David Lyon",
        "url": "https://www.goodreads.com/book/show/23745299-surveillance-after-snowden"
      },
      {
        "title": "Freemium Economics: Leveraging Analytics and User Segme…",
        "author": "Eric Benjamin Seufert",
        "url": "https://www.goodreads.com/book/show/18607052-freemium-economics"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2106277152895189177",
    "isPillar": false
  },
  {
    "slug": "roguelike-de-mazos",
    "term": "CPS como Roguelike de Mazos",
    "familyId": "tecnologia",
    "tier": "deep",
    "short": "Metáfora lúdica del CPS: cada partida cambia las reglas y el mapa, así que sobrevives construyendo un mazo versátil de herramientas mentales.",
    "analogy": "Un juego de cartas donde cada partida cambia el laberinto: ganas por cómo combinas disciplinas y descartas lo inútil, no memorizando un truco único.",
    "howToApply": "Construye tu «mazo» personal mezclando marcos de estrategia, complejidad, psicología y tecnología, y adapta qué cartas juegas en cada reto.",
    "antiPattern": "Jugar todas las partidas con la misma carta favorita («a todo le aplico Scrum o Design Thinking») aunque el enemigo sea inmune a ella.",
    "paragraphs": [
      "En juegos como Slay the Spire o Balatro no existe una jugada única que gane todas las partidas. Cada expedición genera enemigos y restricciones distintas, y la habilidad consiste en combinar cartas (modelos mentales, disciplinas, experiencias) con sinergias inesperadas.",
      "Recuenco usa los videojuegos y el cómic como laboratorios cognitivos: el buen solucionador no memoriza un guion fijo, sino que colecciona piezas combinables y sabe descartar la carta que hoy ya no aporta valor."
    ],
    "origin": "Serie de turras sobre formación en CPS y cultura del videojuego (2024).",
    "aliases": [
      "Deckbuilder",
      "Construcción de mazos",
      "Metáfora roguelike"
    ],
    "related": [
      "cienciarte",
      "cps",
      "game-awareness",
      "liminalidad",
      "metajuego"
    ],
    "sources": [
      {
        "threadId": "1766352097409134910",
        "title": "El CPS como roguelike de construcción de mazos",
        "url": "https://turrero.vercel.app/turra/1766352097409134910"
      },
      {
        "threadId": "1893203295725871217",
        "title": "Estrategias disruptivas y creatividad en negocios y videojuegos",
        "url": "https://turrero.vercel.app/turra/1893203295725871217"
      }
    ],
    "books": [
      {
        "title": "The Complete Calvin and Hobbes",
        "author": "Bill Watterson",
        "url": "https://www.goodreads.com/book/show/24812.The_Complete_Calvin_and_Hobbes"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/1766352097409134910",
    "isPillar": false
  },
  {
    "slug": "desierto-tipo-sierra",
    "term": "Desierto tipo Sierra",
    "familyId": "tecnologia",
    "tier": "deep",
    "short": "Entorno de transformación hostil y letal —como el Endless Desert de King's Quest V— donde los errores de transición matan a la empresa o la dejan atrapada en dead ends sin vuelta atrás.",
    "analogy": "Cruzar un desierto en una aventura de los 90 donde caminar seis pantallas sin oasis te mata de sed y haber gastado un pastel horas antes te impide terminar la partida para siempre.",
    "howToApply": "Cartografía con disciplina extrema los puntos críticos de la transición antes de adentrarte en ella, mide si tu estructura aguanta el coste real de mutar o si conviene lanzar un vehículo nuevo.",
    "antiPattern": "Afrontar la adopción estructural de la IA creyendo que estás en una aventura amable tipo LucasArts donde experimentar sin mapa nunca tiene consecuencias mortales.",
    "paragraphs": [
      "Recuenco contrapone la crueldad implacable de las aventuras gráficas de Sierra On-Line (Ken y Roberta Williams) frente al diseño indulgente de LucasArts (Ron Gilbert): Sierra te mataba por curioso y te condenaba a estados imposibles de ganar, mientras LucasArts premiaba el ensayo sin muerte.",
      "Al aplicar la metáfora al IA Chasm, sostiene que el 90 % de las grandes corporaciones disfrutan de sus primeros quick wins antes de entrar en el desierto real; cuando toca rediseñar procesos, incentivos y organigrama, solo sobreviven quienes aceptan «mutaciones Fremen» dignas de Dune, porque la naturaleza es definitivamente más Sierra que LucasArts."
    ],
    "origin": "Javier G. Recuenco (a partir de Sierra On-Line / King's Quest V y Dune)",
    "aliases": [
      "desierto tipo Sierra",
      "Endless Desert",
      "Sierra vs LucasArts",
      "mutaciones Fremen"
    ],
    "related": [
      "aftershock",
      "cul-de-sac",
      "ecosistemas-tecnologicos",
      "hormesis",
      "ia-chasm",
      "reshuffle",
      "transicion-obligada"
    ],
    "sources": [
      {
        "threadId": "2080919569976185336",
        "title": "La adopción real de la IA en empresas es un desierto tipo Sierra",
        "url": "https://turrero.vercel.app/turra/2080919569976185336"
      },
      {
        "threadId": "2078375621047042415",
        "title": "Project Everest y el choque entre auditoría y consultoría en EY",
        "url": "https://turrero.vercel.app/turra/2078375621047042415"
      },
      {
        "threadId": "2075812328566562908",
        "title": "IA Chasm: la brecha entre pilotos y adopción real de IA",
        "url": "https://turrero.vercel.app/turra/2075812328566562908"
      }
    ],
    "books": [
      {
        "title": "Not All Fairy Tales Have Happy Endings: The Rise and Fall of Sierra On-Line",
        "author": "Ken Williams",
        "url": "https://www.goodreads.com/book/show/55530234-not-all-fairy-tales-have-happy-endings"
      },
      {
        "title": "Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers",
        "author": "Geoffrey A. Moore",
        "url": "https://www.goodreads.com/book/show/61329.Crossing_the_Chasm"
      },
      {
        "title": "The AI Revolution in Book Publishing: A Concise Guide to Navigating the Future",
        "author": "Thad McIlroy",
        "url": "https://www.goodreads.com/book/show/216788633-the-ai-revolution-in-book-publishing"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2080919569976185336",
    "isPillar": false
  },
  {
    "slug": "personotecnia-ia",
    "term": "PersonotecnIA",
    "familyId": "tecnologia",
    "tier": "deep",
    "short": "Convergencia entre la Personotecnia y la inteligencia artificial para lograr relevancia real y trato de persona a persona a gran escala sin caer en la cosificación ni el spam algorítmico.",
    "analogy": "Conseguir que una organización con millones de clientes recupere la sensibilidad del frutero de barrio —que conoce tu contexto y sabe cuándo hablar y cuándo callar— usando la IA para gestionar miles de variables sin convertirte en un número.",
    "howToApply": "Diseña primero qué relación honesta y recíproca quieres construir, modela contextos cambiantes en lugar de buyer personas planos y usa la IA para elevar la relevancia y reducir la fricción, nunca para multiplicar el ruido.",
    "antiPattern": "Llamar «personalización» a poner el nombre del cliente en un correo masivo o usar la IA para bombardear mil veces más rápido con anuncios de algo que ya compró.",
    "paragraphs": [
      "Fruto del megaarco de septiembre-octubre de 2026 y del libro homónimo escrito junto a Miguel Ángel Uriondo, la PersonotecnIA actualiza una disciplina que Recuenco formuló hace más de veinte años y que, como el bosón de Higgs esperando al LHC, necesitaba que la IA la alcanzara para desplegar su potencial.",
      "Frente a la crisis de la atención y la inmunidad generacional causada por décadas de «Gran Hermano de baja calidad» y cosificación por «kilo de data», propone usar las capacidades contextuales de la IA para merecer la atención, vender sin tomar a la gente por idiota y no tratar a las personas como cosas."
    ],
    "origin": "Javier G. Recuenco y Miguel Ángel Uriondo, «PersonotecnIA» (2026)",
    "aliases": [
      "PersonotecnIA",
      "personotecnia 26",
      "relevancia a gran escala",
      "personalización sin cosificación"
    ],
    "related": [
      "autosegmentacion",
      "capitalismo-de-vigilancia",
      "contexto",
      "factor-x",
      "lujo-humano",
      "personotecnia",
      "procesos-de-alta-variabilidad",
      "s4-nightmare"
    ],
    "sources": [
      {
        "threadId": "2113880928653119826",
        "title": "Cierre del arco de Personotecnia y salto a la personotecnIA",
        "url": "https://turrero.vercel.app/turra/2113880928653119826"
      },
      {
        "threadId": "2111348056851460582",
        "title": "Personotecnia e IA para personalizar sin tratar a las personas como cosas",
        "url": "https://turrero.vercel.app/turra/2111348056851460582"
      },
      {
        "threadId": "2103744346142966174",
        "title": "Personotecnia, IA y la promesa de vender sin tomarte por idiota",
        "url": "https://turrero.vercel.app/turra/2103744346142966174"
      },
      {
        "threadId": "2101155734700405039",
        "title": "Personotecnia y economía de la atención: relevancia, contexto e inmunidad",
        "url": "https://turrero.vercel.app/turra/2101155734700405039"
      },
      {
        "threadId": "2098670392902557988",
        "title": "Personotecnia, atención y relevancia en la economía digital",
        "url": "https://turrero.vercel.app/turra/2098670392902557988"
      }
    ],
    "books": [
      {
        "title": "The Attention Economy: Understanding the New Currency of Business",
        "author": "Thomas H. Davenport & John C. Beck",
        "url": "https://www.goodreads.com/book/show/475876.The_Attention_Economy"
      },
      {
        "title": "Relevance: Communication and Cognition",
        "author": "Dan Sperber & Deirdre Wilson",
        "url": "https://www.goodreads.com/es/book/show/947633.Relevance"
      },
      {
        "title": "Attention Span: A Groundbreaking Way to Restore Balance, Happiness and Productivity",
        "author": "Gloria Mark",
        "url": "https://www.goodreads.com/es/book/show/60795084-attention-span"
      },
      {
        "title": "The Attention Merchants: The Epic Scramble to Get Inside Our Heads",
        "author": "Tim Wu",
        "url": "https://www.goodreads.com/book/show/28503628-the-attention-merchants"
      },
      {
        "title": "How to Do Nothing: Resisting the Attention Economy",
        "author": "Jenny Odell",
        "url": "https://www.goodreads.com/book/show/42771901-how-to-do-nothing"
      },
      {
        "title": "Freemium Economics: Leveraging Analytics and User Segmentation to Drive Revenue",
        "author": "Eric Benjamin Seufert",
        "url": "https://www.goodreads.com/book/show/18607052-freemium-economics"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2113880928653119826",
    "isPillar": false
  },
  {
    "slug": "s4-nightmare",
    "term": "S4 Nightmare",
    "familyId": "tecnologia",
    "tier": "deep",
    "short": "La pesadilla extractiva del adtech y el capitalismo de vigilancia —Sniff, Store, Shake, Sell— que secuestró durante más de veinte años el sentido real de la personalización.",
    "analogy": "Un vendedor que te sigue en secreto por toda la ciudad apuntando dónde entras y qué tiras a la basura para gritarte anuncios con un megáfono, y todavía tiene la desfachatez de llamarlo «trato personalizado».",
    "howToApply": "Audita tus flujos de datos y marketing: sustituye la captura opaca sin reciprocidad por intercambio explícito de valor, contexto real y relevancia ganada (Personotecnia).",
    "antiPattern": "Acumular datos íntimos de usuarios sin contraprestación para revender atención a la publicidad —o repetir el mismo esquema extractivo encima de la IA bajo el mantra «Everything is an ad network».",
    "paragraphs": [
      "La fórmula Sniff, Store, Shake, Sell (S4 Nightmare, acuñada por Ben Kunz en su crítica al gran espejismo de la publicidad digital) condensa lo que Recuenco bautizó en 2020 como los «años perdidos» de la personalización: más de dos décadas desviadas por atajos arquitectónicos hacia la captura opaca de datos aleatorios revendidos a anunciantes, lo que él denomina sin anestesia «sonda anal» o «Gran Hermano de baja calidad».",
      "Conectado con la genealogía del panóptico de Bentham, Foucault, Snowden y el capitalismo de vigilancia de Shoshana Zuboff, este modelo convirtió la experiencia humana en materia prima gratuita para mercados de futuros conductuales, degradó la atención hasta el biohackeo y provocó que cada generación desarrolle un sistema inmunitario más feroz contra la publicidad no deseada."
    ],
    "origin": "Ben Kunz (S4 Nightmare: Sniff, Store, Shake, Sell), integrado por Javier G. Recuenco en su crítica de los años perdidos de la personalización y el capitalismo de vigilancia",
    "aliases": [
      "S4 Nightmare",
      "Sniff Store Shake Sell",
      "sonda anal",
      "años perdidos de la personalización",
      "Great Pumpkin"
    ],
    "related": [
      "autosegmentacion",
      "capitalismo-de-vigilancia",
      "ecosistemas-tecnologicos",
      "enshittification",
      "personotecnia",
      "personotecnia-ia"
    ],
    "sources": [
      {
        "threadId": "2106277152895189177",
        "title": "Capitalismo de vigilancia y los años perdidos de la personalización",
        "url": "https://turrero.vercel.app/turra/2106277152895189177"
      },
      {
        "threadId": "2113880928653119826",
        "title": "Cierre del arco de Personotecnia y salto a la personotecnIA",
        "url": "https://turrero.vercel.app/turra/2113880928653119826"
      }
    ],
    "books": [
      {
        "title": "Surveillance After Snowden",
        "author": "David Lyon",
        "url": "https://www.goodreads.com/book/show/23745299-surveillance-after-snowden"
      },
      {
        "title": "Careless People: A Cautionary Tale of Power, Greed, and Lost Idealism",
        "author": "Sarah Wynn-Williams",
        "url": "https://www.goodreads.com/book/show/223436601-careless-people"
      }
    ],
    "domains": null,
    "glossaryUrl": "https://turrero.vercel.app/turra/2106277152895189177",
    "isPillar": false
  }
];

export const GUIDED_ROUTES: GuidedRoute[] = [
  {
    "id": "empieza-aqui",
    "title": "Empieza aquí: El núcleo CPS",
    "subtitle": "Tu primer recorrido paso a paso para entender qué hace un solucionador de problemas complejos.",
    "duration": "8 paradas · 6 min",
    "accent": "#F59E0B",
    "steps": [
      {
        "slug": "cps",
        "note": "El punto de partida: qué es (y qué no es) un problema complejo."
      },
      {
        "slug": "cienciarte",
        "note": "Por qué el CPS combina rigor científico con intuición artística."
      },
      {
        "slug": "cynefin",
        "note": "La brújula esencial: distinguir lo claro, lo complicado y lo complejo."
      },
      {
        "slug": "sensemaking",
        "note": "Dar sentido a la niebla antes de lanzarte a ejecutar."
      },
      {
        "slug": "diagnostico",
        "note": "Separar causas reales de síntomas ruidosos."
      },
      {
        "slug": "estrategia",
        "note": "Diagnóstico, política guía y acciones coherentes: sin humo."
      },
      {
        "slug": "factor-x",
        "note": "Las personas no son piezas de Excel: la conducta decide el partido."
      },
      {
        "slug": "orquestacion-cognitiva",
        "note": "El gran secreto: hacer brillar juntos a talentos extremos distintos."
      }
    ]
  },
  {
    "id": "estrategia-sin-humo",
    "title": "Estrategia sin vender humo",
    "subtitle": "Cómo leer propuestas de valor caducadas, corrientes de fondo y pasos laterales.",
    "duration": "7 paradas · 5 min",
    "accent": "#10B981",
    "steps": [
      {
        "slug": "estrategia",
        "note": "Si una supuesta estrategia no resuelve el problema, es mala estrategia."
      },
      {
        "slug": "atractores",
        "note": "Las 5 grandes fuerzas de fondo que empujan todos los sectores."
      },
      {
        "slug": "hotel-de-hilbert",
        "note": "Toda propuesta de valor es una puerta que un día se cierra."
      },
      {
        "slug": "business-acumen",
        "note": "Olfato real de negocio más allá del PowerPoint."
      },
      {
        "slug": "moat",
        "note": "Construir defensas difíciles de copiar."
      },
      {
        "slug": "metajuego",
        "note": "Leer qué táctica domina hoy y anticipar qué la vencerá mañana."
      },
      {
        "slug": "sidestepping",
        "note": "Esquivar la pelea frontal abriendo un tablero propio."
      }
    ]
  },
  {
    "id": "equipos-y-poder",
    "title": "Equipos, poder e incentivos",
    "subtitle": "Por qué fracasan equipos llenos de estrellas y cómo diseñar incentivos que funcionen.",
    "duration": "7 paradas · 5 min",
    "accent": "#EC4899",
    "steps": [
      {
        "slug": "equipo-apolo",
        "note": "Por qué juntar a los más listos suele producir un desastre."
      },
      {
        "slug": "emulsificador-de-equipo",
        "note": "El perfil clave que traduce y une mundos incompatibles."
      },
      {
        "slug": "arquitectura-de-incentivos",
        "note": "La pendiente invisible que mueve de verdad a una organización."
      },
      {
        "slug": "incentivo-perverso",
        "note": "Cuando un premio mal diseñado logra justo lo contrario."
      },
      {
        "slug": "skin-in-the-game",
        "note": "Jugarse el pellejo con lo que recomiendas."
      },
      {
        "slug": "recoger-cable",
        "note": "Cambiar de idea ante datos nuevos sin que mande el ego."
      },
      {
        "slug": "asertividad",
        "note": "Decir verdades incómodas con firmeza y respeto."
      }
    ]
  },
  {
    "id": "personotecnia-ia",
    "title": "Personotecnia e IA con cabeza",
    "subtitle": "De la falsa personalización invasiva al centauro humano-IA y el lujo humano.",
    "duration": "7 paradas · 5 min",
    "accent": "#38BDF8",
    "steps": [
      {
        "slug": "personotecnia",
        "note": "Tratar a cada cliente como único, también a escala."
      },
      {
        "slug": "procesos-de-alta-variabilidad",
        "note": "Dónde fallan los guiones rígidos y manda el contexto."
      },
      {
        "slug": "capitalismo-de-vigilancia",
        "note": "Por qué perseguir con cookies destruyó la atención."
      },
      {
        "slug": "autosegmentacion",
        "note": "Dejar que el cliente interesado se reconozca solo."
      },
      {
        "slug": "ecosistemas-tecnologicos",
        "note": "Entender las olas tecnológicas como sistema, no como moda."
      },
      {
        "slug": "centauro",
        "note": "Humano + IA trabajando en simbiosis."
      },
      {
        "slug": "lujo-humano",
        "note": "Cuando la IA abarata todo, lo humano se vuelve el bien más valioso."
      }
    ]
  },
  {
    "id": "leer-el-mundo",
    "title": "Leer el mundo, tribus y humo",
    "subtitle": "Herramientas críticas para detectar idealismo ciego, pantomimas y sesgos colectivos.",
    "duration": "7 paradas · 5 min",
    "accent": "#F43F5E",
    "steps": [
      {
        "slug": "vaca-esferica",
        "note": "Modelos preciosos en papel que fallan al pisar la calle."
      },
      {
        "slug": "cultura-luterana",
        "note": "La obsesión por medirlo todo incluso donde no cabe."
      },
      {
        "slug": "falacia-de-mcnamara",
        "note": "Ignorar lo decisivo solo porque cuesta ponerlo en un KPI."
      },
      {
        "slug": "pompismo",
        "note": "Idealismo bello que choca de frente contra la realidad."
      },
      {
        "slug": "pantomima",
        "note": "Relatos falsos que todos sostienen porque a todos les conviene."
      },
      {
        "slug": "espiral-del-silencio",
        "note": "Callar por miedo a quedar fuera de la mayoría aparente."
      },
      {
        "slug": "zeitgeist",
        "note": "El espíritu invisible que decide qué ideas prosperan en cada época."
      }
    ]
  }
];

export const FOUR_PILLARS: Pillar[] = [
  {
    "slug": "ciencias-de-la-complejidad",
    "name": "Ciencias de la Complejidad",
    "desc": "Sistemas no lineales, emergencia, Cynefin y sensemaking.",
    "color": "#06B6D4"
  },
  {
    "slug": "business-acumen",
    "name": "Business Acumen",
    "desc": "Estrategia real, propuesta de valor, incentivos y caja.",
    "color": "#10B981"
  },
  {
    "slug": "factor-x",
    "name": "Factor X",
    "desc": "Psicología, sesgos, equipos, personotecnia y conducta humana.",
    "color": "#EC4899"
  },
  {
    "slug": "ecosistemas-tecnologicos",
    "name": "Ecosistemas Tecnológicos",
    "desc": "Megatendencias (IA, datos, plataformas) y cómo cambian el tablero.",
    "color": "#38BDF8"
  }
];

export const FIVE_ATTRACTORS: Attractor[] = [
  {
    "name": "Megatendencias tecnológicas",
    "detail": "IA, automatización y nuevas infraestructuras que abaratan lo predecible y elevan el valor del criterio."
  },
  {
    "name": "Crunching business models",
    "detail": "Compresión y caducidad acelerada de propuestas de valor tradicionales (Hotel de Hilbert)."
  },
  {
    "name": "Hiperpersonalización y Personotecnia",
    "detail": "Fin de la talla única: relevancia contextual auténtica frente al ruido masivo."
  },
  {
    "name": "Crisis de confianza e instituciones",
    "detail": "Fatiga de la pantomima, erosión de intermediarios y auge de tokens de confianza reales."
  },
  {
    "name": "Reconfiguración del talento y la educación",
    "detail": "Orquestación cognitiva, neurodivergencia y aprendizaje perpetuo en entornos no lineales."
  }
];

export const ALL_15_THEMES: ThemeLink[] = [
  {
    "name": "Método CPS",
    "url": "https://turrero.vercel.app/metodo-cps",
    "familyId": "oficio"
  },
  {
    "name": "Sistemas complejos y sensemaking",
    "url": "https://turrero.vercel.app/sistemas-complejos",
    "familyId": "sistemas"
  },
  {
    "name": "Estrategia",
    "url": "https://turrero.vercel.app/estrategia",
    "familyId": "estrategia"
  },
  {
    "name": "Equipos y liderazgo",
    "url": "https://turrero.vercel.app/equipos-y-liderazgo",
    "familyId": "factorx"
  },
  {
    "name": "Organizaciones e incentivos",
    "url": "https://turrero.vercel.app/organizaciones-e-incentivos",
    "familyId": "empresas"
  },
  {
    "name": "Finanzas e inversión",
    "url": "https://turrero.vercel.app/finanzas-e-inversion",
    "familyId": "empresas"
  },
  {
    "name": "Marketing y publicidad",
    "url": "https://turrero.vercel.app/marketing",
    "familyId": "factorx"
  },
  {
    "name": "Personotecnia",
    "url": "https://turrero.vercel.app/personotecnia",
    "familyId": "factorx"
  },
  {
    "name": "Psicología y decisiones",
    "url": "https://turrero.vercel.app/psicologia-y-decisiones",
    "familyId": "mente"
  },
  {
    "name": "Desarrollo personal",
    "url": "https://turrero.vercel.app/desarrollo-personal",
    "familyId": "incertidumbre"
  },
  {
    "name": "Sociedad y política",
    "url": "https://turrero.vercel.app/sociologia",
    "familyId": "sociedad"
  },
  {
    "name": "IA y tecnología",
    "url": "https://turrero.vercel.app/ia-y-tecnologia",
    "familyId": "tecnologia"
  },
  {
    "name": "Educación y altas capacidades",
    "url": "https://turrero.vercel.app/educacion-y-altas-capacidades",
    "familyId": "mente"
  },
  {
    "name": "Cómic, cine y videojuegos",
    "url": "https://turrero.vercel.app/cultura-popular",
    "familyId": "tecnologia"
  },
  {
    "name": "Reflexiones personales",
    "url": "https://turrero.vercel.app/reflexiones-personales",
    "familyId": "oficio"
  }
];

export const FAMILY_MAP: Record<string, Family> = Object.fromEntries(
  FAMILIES.map((f) => [f.id, f])
);

export const CONCEPT_MAP: Record<string, Concept> = Object.fromEntries(
  CONCEPTS.map((c) => [c.slug, c])
);
