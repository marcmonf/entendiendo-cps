# Guía de estilo y glosario cerrado — Alemán de Alemania (`de`)

Este documento es la **única fuente de verdad terminológica y de estilo** para traducir el Observatorio CPS al alemán de Alemania (`de`). Todos los agentes que traduzcan bloques (`de_00.json`..`de_18.json`) deben seguir estas reglas al pie de la letra. Los scripts `validate.py` y `merge.py` verifican automáticamente la coincidencia exacta de las tablas cerradas.

---

## 1. Reglas de estilo para alemán (`de-DE`)

1. **Tratamiento (Tuteo coherente):** Usa siempre ***du*** (`du`, `dir`, `dich`, `dein`, imperativo informal como *Klicke*, *Schau*, *Frag dich*) en coherencia con el original en español. Nunca uses *Sie* corporativo (salvo en citas donde el original use «usted» irónicamente, en cuyo caso *Sie* puede mantenerse como recurso cómico).
2. **Tono y voz de Javier G. Recuenco:** Cercano, directo, irónico, mordaz y artesanal — **nunca** jerga de consultora (*Beraterdeutsch*), burocrático ni plano. Cuando Recuenco usa humor callejero, sarcasmo o expresiones crudas (*soluciones de mierda*, *vender humo*, *jugarse el pellejo*), tradúcelo con garra y naturalidad en alemán (*Mistlösungen* / *Scheißlösungen*, *heiße Luft verkaufen*, *die eigene Haut riskieren*).
3. **Términos propios que se mantienen:**
   - **`Turra` / `Turras`**: conservar siempre (en alemán, sustantivo femenino: *die Turra*, plural *die Turras*). No traducir como *Thread* o *Artikel*, salvo al explicarlo la primera vez si el contexto lo pide.
   - **`El Turrero Post`**: conservar siempre sin traducir.
   - **`CPSer`**: conservar (`CPSer`).
   - **`Personotecnia` / `PersonotecnIA`**: conservar como marca/disciplina propia.
   - **`Singular Solving`**, **`Solvers Academy`**, **`Javier G. Recuenco`**: nombres propios intactos.
   - **Términos acuñados por Recuenco**: adaptar al alemán con fuerza expresiva y añadir el original entre paréntesis en la primera mención o en el `term` cuando aporte claridad (p. ej. `Wissenskunst (Cienciarte)`, `Kabel einholen (Recoger cable)`, `Pompismus (Pompismo)`).
4. **Tipografía alemana estándar (`de-DE`):**
   - Comillas dobles tipográficas alemanas: **`„…“`** (nunca `«…»` ni comillas inglesas `“…”` en texto corrido; en claves JSON escapa solo si usas `\"`, preferiblemente usa siempre `„…“` que no necesita escape).
   - Comillas simples si hay cita dentro de cita: **`‚…‘`**.
   - Guion largo / inciso: raya con espacios **` — `** o semirraya **` – `** (sé consistente; preferible ` — `).
   - Números y porcentajes: espacio fino o normal antes de `%` (`15 %`), coma decimal en alemán (`1,5`).
   - Nunca dejar signos españoles (`¿`, `¡`).
5. **Anglicismos habituales en negocios/tecnología en Alemania:** En alemán profesional son completamente naturales términos como *Sensemaking*, *Skin in the Game*, *Private Equity*, *Blitzscaling*, *Business Acumen*, *Design Thinking*, *Moat*, *Rabbit Hole*, *Sweet Spot*, *Enshittification*, *KPIs*, *PowerPoint*. No los traduzcas de forma forzada cuando el glosario los mantiene.
6. **Aliases (`aliases`):** No elimines ningún elemento del array `aliases`. Traduce los que tengan equivalente claro en alemán y conserva (o añade) los originales/siglas que un usuario pueda buscar (p. ej. mantener `"AACC"` junto a `"Hochbegabung"`).

---

## 2. Las 9 familias / constelaciones (tabla cerrada)

| id | Nombre (ES) | Corto (ES) | Nombre (DE) | Corto (DE) |
|---|---|---|---|---|
| `oficio` | El Oficio CPS | Oficio CPS | Das CPS-Handwerk | CPS-Handwerk |
| `sistemas` | Sistemas y Sensemaking | Sistemas | Systeme & Sensemaking | Systeme |
| `incertidumbre` | Incertidumbre y Contexto | Incertidumbre | Unsicherheit & Kontext | Unsicherheit |
| `estrategia` | Estrategia y Metajuego | Estrategia | Strategie & Metaspiel | Strategie |
| `empresas` | Empresas, Incentivos y Capital | Empresas | Unternehmen, Anreize & Kapital | Unternehmen |
| `factorx` | Factor X, Equipos y Personotecnia | Factor X | Faktor X, Teams & Personotecnia | Faktor X |
| `mente` | Psicología, Sesgos y AACC | Mente y AACC | Psychologie, Biases & Hochbegabung | Psyche & HB |
| `sociedad` | Sociedad, Relatos y Tribus | Sociedad | Gesellschaft, Narrative & Stämme | Gesellschaft |
| `tecnologia` | IA, Tecnología y Cultura | IA y Cultura | KI, Technologie & Kultur | KI & Kultur |

---

## 3. Las 15 temáticas oficiales (tabla cerrada)

| Tema (ES) | Tema (DE) |
|---|---|
| Método CPS | CPS-Methode |
| Sistemas complejos y sensemaking | Komplexe Systeme & Sensemaking |
| Estrategia | Strategie |
| Equipos y liderazgo | Teams & Führung |
| Organizaciones e incentivos | Organisationen & Anreize |
| Finanzas e inversión | Finanzen & Investitionen |
| Marketing y publicidad | Marketing & Werbung |
| Personotecnia | Personotecnia |
| Psicología y decisiones | Psychologie & Entscheidungen |
| Desarrollo personal | Persönliche Entwicklung |
| Sociedad y política | Gesellschaft & Politik |
| IA y tecnología | KI & Technologie |
| Educación y altas capacidades | Bildung & Hochbegabung |
| Cómic, cine y videojuegos | Comics, Film & Videospiele |
| Reflexiones personales | Persönliche Reflexionen |

---

## 4. Los 5 dominios de Cynefin (tabla cerrada)

| Dominio (ES) | Dominio (DE) | Nota de uso |
|---|---|---|
| Claro | Klar | Antes llamado «simple» (*früher „einfach“*) |
| Complicado | Kompliziert | Terreno del buen consultor |
| Complejo | Komplex | Terreno del CPS |
| Caótico | Chaotisch | Actuar primero para estabilizar |
| Confuso | Verwirrt | Ligado a la aporía (*Aporie*) |

---

## 5. Los 121 conceptos (tabla cerrada)

`validate.py` y `merge.py` exigen coincidencia **exacta** en el campo `term` de cada slug.

| slug | Término (ES) | Término (DE) |
|---|---|---|
| `arquitectura-de-incentivos` | Arquitectura de incentivos | Anreizarchitektur |
| `decision-makers` | Decision makers | Decision Makers |
| `falacia-de-mcnamara` | Falacia de McNamara | McNamara-Trugschluss |
| `incentivo-perverso` | Incentivo perverso | Perverser Anreiz |
| `skin-in-the-game` | Skin in the game | Skin in the Game |
| `post-pe-y-cfu` | Post-PE y CFU | Post-PE & CFU |
| `blitzscaling` | Blitzscaling | Blitzscaling |
| `consultoria` | Consultoría | Unternehmensberatung |
| `huevos-de-serpiente` | Huevos de serpiente | Schlangeneier |
| `private-equity` | Private equity | Private Equity |
| `sindrome-del-coronel-thompson` | Síndrome del Coronel Thompson | Colonel-Thompson-Syndrom |
| `taylorismo` | Taylorismo | Taylorismus |
| `metaincentivos` | Metaincentivos | Meta-Anreize |
| `efecto-cobra` | Efecto cobra | Kobra-Effekt |
| `atractores` | Atractores | Attraktoren |
| `business-acumen` | Business acumen | Business Acumen |
| `estrategia` | Estrategia | Strategie |
| `hotel-de-hilbert` | Hotel de Hilbert | Hilberts Hotel |
| `metajuego` | Metajuego | Metaspiel |
| `cul-de-sac` | Cul de sac | Sackgasse (Cul-de-sac) |
| `fatiga-de-materiales` | Fatiga de materiales | Materialermüdung |
| `game-awareness` | Game awareness | Game Awareness |
| `juego-infinito` | Juego infinito | Unendliches Spiel |
| `moat` | Moat | Moat (Burggraben) |
| `oceano-azul` | Océano azul | Blauer Ozean |
| `sidestepping` | Sidestepping | Sidestepping |
| `zugzwang` | Zugzwang | Zugzwang |
| `futurismo-de-frontera` | Futurismo de frontera | Grenzgänger-Futurismus |
| `decadencia-y-reconversion` | Decadencia y reconversión | Niedergang & Neuausrichtung |
| `harbingers-of-doom` | Harbingers of Doom | Harbingers of Doom |
| `emulsificador-de-equipo` | Emulsificador de equipo | Team-Emulgator |
| `equipo-apolo` | Equipo Apolo | Apollo-Team |
| `factor-x` | Factor X | Faktor X |
| `personotecnia` | Personotecnia | Personotecnia |
| `test-astudillo` | Test Astudillo | Astudillo-Test |
| `asertividad` | Asertividad | Durchsetzungsstärke (Asertivität) |
| `autosegmentacion` | Autosegmentación | Selbstsegmentierung |
| `man-on-a-mission` | Man on a mission | Man on a Mission |
| `man-out-of-time` | Man out of time | Man out of Time |
| `recoger-cable` | Recoger cable | Kabel einholen (Recoger cable) |
| `resolutivas-invisibles` | Resolutivas invisibles | Unsichtbare Macherinnen (Resolutivas invisibles) |
| `sincronizacion-de-pedalada` | Sincronización de pedalada | Tritt-Synchronisation |
| `contexto` | Contexto | Kontext |
| `elefante-negro` | Elefante negro | Schwarzer Elefant |
| `incertidumbre` | Incertidumbre | Unsicherheit |
| `niebla-de-guerra` | Niebla de guerra | Nebel des Krieges |
| `procesos-de-alta-variabilidad` | Procesos de alta variabilidad (PAV) | Hochvariable Prozesse (PAV) |
| `aporia` | Aporía | Aporie |
| `hormesis` | Hormesis | Hormesis |
| `rabbit-hole` | Rabbit hole | Rabbit Hole |
| `sweet-spot` | Sweet spot | Sweet Spot |
| `teorema-de-roca-salvatella` | Teorema de Roca Salvatella | Roca-Salvatella-Theorem |
| `aftershock` | After Shock | Aftershock |
| `eta` | ETA (Estimated Time of Arrival) | ETA (Estimated Time of Arrival) |
| `all-models-are-wrong` | All models are wrong | All models are wrong |
| `altas-capacidades` | Altas capacidades (AACC) | Hochbegabung (AACC) |
| `disonancia-cognitiva` | Disonancia cognitiva | Kognitive Dissonanz |
| `neurodivergencia` | Neurodivergencia | Neurodivergenz |
| `sesgo` | Sesgo cognitivo | Kognitiver Bias |
| `truth-coping` | Truth coping | Truth Coping |
| `matriz-de-compra-de-pescado` | Matriz de compra de pescado | Fischkauf-Matrix |
| `bothism` | Bothism | Bothism |
| `transicion-obligada` | Transición obligada | Erzwungener Wandel |
| `xavier-o-magneto` | Xavier o Magneto | Xavier oder Magneto |
| `zona-de-desarrollo-proximo` | Zona de desarrollo próximo | Zone der nächsten Entwicklung |
| `alta-agencia` | Alta agencia | High Agency |
| `homework-apocalypse` | Homework Apocalypse | Homework Apocalypse |
| `autoengano` | Autoengaño | Selbsttäuschung |
| `cienciarte` | Cienciarte | Wissenskunst (Cienciarte) |
| `cps` | CPS | CPS |
| `diagnostico` | Diagnóstico | Diagnose |
| `liminalidad` | Liminalidad | Liminalität |
| `orquestacion-cognitiva` | Orquestación cognitiva | Kognitive Orchestrierung |
| `cps-hispano` | CPS hispano | Hispanisches CPS |
| `dr-house` | Dr. House | Dr. House |
| `javier-g-recuenco` | Javier G. Recuenco | Javier G. Recuenco |
| `pensamiento-lateral` | Pensamiento lateral | Laterales Denken |
| `singular-solving` | Singular Solving | Singular Solving |
| `soluciones-de-mierda` | Soluciones de mierda | Scheißlösungen |
| `solvers-academy` | Solvers Academy | Solvers Academy |
| `tokens-de-confianza` | Tokens de confianza | Vertrauenstoken |
| `turra` | Turra | Turra |
| `companias-problem-centric` | Compañías Problem-centric | Problem-centric-Unternehmen |
| `critica-al-design-thinking` | Crítica al Design Thinking | Kritik am Design Thinking |
| `ciencias-de-la-complejidad` | Ciencias de la complejidad | Komplexitätswissenschaften |
| `cynefin` | Cynefin | Cynefin |
| `emergencia` | Emergencia | Emergenz |
| `sensemaking` | Sensemaking | Sensemaking |
| `sistemas-complejos` | Sistemas complejos | Komplexe Systeme |
| `acoplamiento-suelto` | Acoplamiento suelto | Lose Kopplung |
| `autopoiesis` | Autopoiesis | Autopoiesis |
| `corrientes-subterraneas` | Corrientes subterráneas | Unterströmungen |
| `enactacion` | Enactación | Enactment (Enaktierung) |
| `homeostasis` | Homeostasis | Homöostase |
| `vaca-esferica` | Vaca esférica | Kugelförmige Kuh |
| `colapso-cognitivo` | Colapso cognitivo | Kognitiver Kollaps |
| `neuroestetica` | Neuroestética | Neuroästhetik |
| `cultura-luterana` | Cultura luterana | Lutherische Kultur |
| `espiral-del-silencio` | Espiral del silencio | Schweigespirale |
| `pantomima` | Pantomima | Pantomime |
| `pompismo` | Pompismo | Pompismus (Pompismo) |
| `zeitgeist` | Zeitgeist | Zeitgeist |
| `chavesnogalismo` | Chavesnogalismo | Chavesnogalismus |
| `efecto-gell-mann` | Efecto Gell-Mann | Gell-Mann-Amnesie-Effekt |
| `espiral-del-pa-que` | Espiral del pa qué | Wozu-noch-Spirale (Espiral del pa qué) |
| `facciones-lanares` | Facciones lanares | Schafsherden-Fraktionen |
| `zelotes` | Zelote | Zelot |
| `optimizacion-luterana-y-feijoada` | Feijoada y optimización luterana | Feijoada & lutherische Optimierung |
| `enshittification` | Enshittification | Enshittification |
| `centauro` | Centauro | Zentaur |
| `ecosistemas-tecnologicos` | Ecosistemas tecnológicos | Technologie-Ökosysteme |
| `ia-chasm` | IA chasm | KI-Chasm |
| `lujo-humano` | Lujo humano | Menschlicher Luxus |
| `reshuffle` | Reshuffle | Reshuffle |
| `santuario-humano` | Santuario humano | Menschliches Refugium |
| `abrochador-liminal` | Abrochador liminal | Liminaler Verbinder (Abrochador liminal) |
| `capitalismo-de-vigilancia` | Capitalismo de vigilancia | Überwachungskapitalismus |
| `roguelike-de-mazos` | CPS como Roguelike de Mazos | CPS als Deckbuilding-Roguelike |
| `desierto-tipo-sierra` | Desierto tipo Sierra | Sierra-Wüste |
| `personotecnia-ia` | PersonotecnIA | PersonotecnIA |
| `s4-nightmare` | S4 Nightmare | S4 Nightmare |

---

## 6. Tricky Terms & Recuenco-Ausdrücke (Expresiones difíciles)

Referencia para traducir con consistencia y chispa las expresiones recurrentes de Javier G. Recuenco dentro de párrafos, ensayos, citas y ejemplos:

| Expresión en español | Traducción recomendada en alemán | Matiz / nota de uso |
|---|---|---|
| **Recoger cable** | *Kabel einholen* / *zurückrudern (ohne Ego)* | En CPS es una virtud: admitir un error con nuevos datos y corregir rumbo. |
| **Facciones lanares** | *Schafsherden-Fraktionen* / *Herdenfraktionen* | Grupos que siguen a su tribu como rebaño acrítico. |
| **Espiral del «¿pa qué?»** | *Wozu-noch-Spirale* / *„Wozu-überhaupt?“-Spirale* | Resignación lúcida cuando confrontar la realidad cuesta más de lo que aporta. |
| **Soluciones de mierda** | *Scheißlösungen* (o *Mistlösungen* en contexto más suave) | Mantener el registro crudo e irónico del original; nunca suavizar a *suboptimale Lösungen*. |
| **Lijacantos** | *Kantenschleifer* / *Detailverliebte Erbsenzähler* | Quien se obsesiona puliendo bordes irrelevantes mientras el problema central arde. |
| **Pompismo** | *Pompismus* (en 1.ª mención: *Pompismus (weltfremder Schöngeist-Idealismus)*) | Idealismo estético desconectado de la realidad elemental. |
| **Chavesnogalismo** | *Chavesnogalismus* | Postura inspirada en Manuel Chaves Nogales: la maldad no tiene bando ideológico. |
| **Abrochador liminal** | *Liminaler Verbinder* / *Schwellen-Verkoppler* | Quien «abrocha» tecnología y *Zeitgeist* mediante una *Killer-App*. |
| **Resolutivas invisibles** | *Unsichtbare Macherinnen* / *stille Problemlöserinnen* | Mantener el femenino plural del original cuando el texto subraya el arquetipo femenino. |
| **Hijoputismo** | *Arschlochverhalten* / *reine Niedertracht* / *Mistkerl-Mentalität* | Registro directo y sin anestesia, acorde a Chaves Nogales / Recuenco. |
| **Efecto cuñado / cuñado** | *Stammtisch-Besserwisser-Effekt* / *Besserwisser-Schwager* | Alguien que opina de todo con cero rigor y máxima seguridad. |
| **Vender humo / humo** | *heiße Luft verkaufen* / *Blender-Rhetorik* / *heiße Luft* | Promesas vacías de PowerPoint o consultoría sin sustancia. |
| **Jugarse el pellejo** | *die eigene Haut riskieren* / *mit der eigenen Haut haften* | Equivalente idiomático de *Skin in the Game*. |
| **Las canicas ruedan hacia la pendiente** | *Die Murmeln rollen immer bergab* / *folgen der realen Neigung des Bodens* | Metáfora de los incentivos reales frente a los discursos. |
| **Pantomima (corporativa)** | *Pantomime* / *Theater* / *Corporate-Pantomime* | Farsa consciente que todos mantienen porque conviene a todos. |
| **Huevos de serpiente** | *Schlangeneier* | Bombas de relojería latentes que un directivo deja a su sucesor. |
| **Vaca esférica** | *kugelförmige Kuh* | Clásico chiste físico de modelo hiper-simplificado inútil en la realidad. |
| **Elefante negro** | *Schwarzer Elefant* | Cruce entre *elefante en la habitación* y *cisne negro*. |
| **Cultura luterana / optimización luterana** | *lutherische Kultur* / *lutherische Optimierung* | Obsesión por medir, pesar y optimizar todo lo predecible. |
| **Guarnición (vs. plato principal)** | *Beilage (statt Hauptgericht)* | Como crítica al Design Thinking cuando quiere sustituir al CPS. |
| **Saveur du jour** | *Saveur du jour* (o *Modewort des Tages*) | Mantener el galicismo irónico cuando Recuenco lo usa tal cual. |
| **Entropía metastásica** | *metastasierende Entropie* | Desorden organizativo que se propaga sin control. |
| **Comulgar con ruedas de molino** | *jeden Unsinn schlucken* / *Märchen für bare Münze nehmen* | Aceptar relatos absurdos sin pestañear. |
| **A pecho descubierto** | *mit offenem Visier* / *ungeschützt* | Actuar sin red ni escudo corporativo. |
| **Desierto tipo Sierra** | *Sierra-Wüste* | Referencia al *Endless Desert* de *King's Quest V*. |
| **No comprarle todo el pescado a nadie** | *niemandem den gesamten Fischbestand abkaufen* | Heurístico de la *Fischkauf-Matrix*: separar lo brillante de lo flojo en cada autor. |
| **Pensamiento mágico** | *magisches Denken* | Creer que desear algo o ponerlo en una slide lo hace realidad. |
| **Buenismo** | *Gutmenschentum* / *Wohlfühl-Moralismus* | Moralina superficial desconectada de las consecuencias reales. |
| **Zelote** | *Zelot* / *Eiferer* | Fanático que reacciona con la amígdala cuando tocan su dogma. |
| **Cienciarte** | *Wissenskunst (Cienciarte)* | Combinación simultánea de determinismo científico e inspiración artística. |
| **Turra / dar la turra** | *Turra* / *eine Turra schreiben* | Hilo largo semanal de Recuenco en X; conservar siempre el término *Turra*. |
| **Terreno de juego / tablero** | *Spielfeld* / *Spielbrett* | Muy usado en estrategia, metajuego y sidestepping. |
