# Guía de estilo y glosario cerrado — Chino simplificado (`zh-CN`)

Este documento es la **única fuente de verdad terminológica y de estilo** para traducir el Observatorio CPS al chino simplificado (`zh` / `zh-CN`). Todos los agentes que traduzcan bloques (`zh_00.json`..`zh_18.json`) deben seguir estas reglas al pie de la letra. Los scripts `validate.py` y `merge.py` verifican automáticamente la coincidencia exacta de las tablas cerradas.

---

## 1. Reglas de estilo para chino simplificado (`zh-CN`)

1. **Tratamiento (tuteo cercano y directo):** Usa siempre **`你`** (`你`, `你的`, `你们`), en coherencia con el tuteo del original español. Evita **`您`** corporativo o ceremonioso, salvo cuando el original use «usted» de forma explícitamente irónica o paródica.
2. **Prosa viva y natural (evitar el «traductés» / 翻译腔):**
   - Escribe en un chino simplificado ágil, punzante y natural, propio de un buen ensayo de divulgación tecnológica y de negocio en China (estilo 深度专栏 / 科技商业评论), **nunca** como traducción calco del español.
   - Rompe las frases subordinadas largas del español en cláusulas cortas y rítmicas con comas chinas (`，`). Evita el exceso de estructuras pasivas (`被……`), acumulaciones de `的` y muletillas de traductés (`一个……的……`, `进行了……`, `作为一名……`).
   - Evita la jerga vacía de grandes tecnológicas chinas (*大厂黑话* como `赋能`, `抓手`, `底层逻辑`, `颗粒度`, `闭环`), **salvo** cuando Recuenco esté satirizando explícitamente el humo corporativo.
3. **Tono y voz de Javier G. Recuenco:** Cercano, mordaz, directo, irónico y artesanal. Cuando el original emplea registro crudo, humor callejero o sarcasmo (*soluciones de mierda*, *vender humo*, *jugarse el pellejo*, *hijoputismo*), mantén la fuerza expresiva en chino (*狗屎方案*, *画大饼 / 卖空气*, *押上身家*, *纯属混蛋行径*), sin suavizarlo a eufemismos burocráticos.
4. **Términos propios y anglicismos de negocios/tech:**
   - **`turra` / `Turra`**: conservar siempre sin traducir (en prosa china con clasificador: `这篇 turra`, `263 篇 turra`, `每周的 turra`). No sustituir por `长帖` o `文章` salvo para explicarlo la primera vez si el contexto lo pide.
   - **`El Turrero Post`**: conservar intacto.
   - **`CPSer`**, **`PersonotecnIA`**, **`Singular Solving`**, **`Solvers Academy`**, **`Javier G. Recuenco`**: conservar intactos.
   - **Términos en inglés habituales en negocios/tech en China**: combinar el equivalente chino natural con el inglés entre paréntesis cuando aporte precisión o sea el estándar del sector (`Sensemaking`, `Private Equity`, `Moat`, `Skin in the Game`, `Design Thinking`, `Blitzscaling`, `Enshittification`, `Rabbit Hole`, `Sweet Spot`), y mantener directamente siglas/términos universales (`CPS`, `Cynefin`, `KPI`, `PowerPoint` / `PPT`, `AI`).
   - **Términos acuñados por Recuenco**: traducirlos con fuerza expresiva al chino y conservar el original español entre paréntesis en el `term` o primera mención cuando aporte valor (`科艺融合（Cienciarte）`, `收线认错（Recoger cable）`, `浮华空想主义（Pompismo）`, `隐形解题女将（Resolutivas invisibles）`, `阈限扣合者（Abrochador liminal）`).
5. **Puntuación y tipografía estándar de chino simplificado (`zh-CN`):**
   - Comillas dobles chinas curvas: **`“…”`** (nunca `«…»`, `„…“` ni comillas rectas `"` dentro del texto; `“…”` no necesita escape en JSON). Comillas simples internas: **`‘…’`**.
   - Títulos de libros, películas, series y videojuegos: **`《…》`** (p. ej. `《国王密使 V》`, `《豪斯医生》`).
   - Puntuación de ancho completo (全角): **`，。：；！？（）`** y coma enumerativa **`、`** para listas paralelas.
   - Guion largo chino para incisos: **`——`**. Puntos suspensivos: **`……`** (en placeholders cortos de UI se admite `…`).
   - Espaciado chino-latino (*盘古之白*): deja un espacio normal entre caracteres chinos y palabras/números en alfabeto latino (`CPS 方法`, `263 篇 turra`, `121 个概念`), pero **no** añadas espacio junto a puntuación china de ancho completo (`在 CPS 中，`).
   - Nunca dejar signos españoles (`¿`, `¡`).
6. **Aliases (`aliases`):** No elimines ningún elemento del array `aliases`. Traduce los que tengan equivalente claro en chino y conserva (o añade) los originales en español/inglés o siglas útiles para búsqueda (`AACC`, `PAV`, `Cynefin`, `Skin in the Game`, etc.).

---

## 2. Las 9 familias / constelaciones (tabla cerrada)

Los nombres cortos (`Corto (ZH)`) deben ser muy concisos (2–5 caracteres) para encajar limpiamente en el mapa estelar.

| id | Nombre (ES) | Corto (ES) | Nombre (ZH) | Corto (ZH) |
|---|---|---|---|---|
| `oficio` | El Oficio CPS | Oficio CPS | CPS 核心手艺 | CPS 手艺 |
| `sistemas` | Sistemas y Sensemaking | Sistemas | 系统与意义建构 | 系统 |
| `incertidumbre` | Incertidumbre y Contexto | Incertidumbre | 不确定性与语境 | 不确定性 |
| `estrategia` | Estrategia y Metajuego | Estrategia | 战略与元博弈 | 战略 |
| `empresas` | Empresas, Incentivos y Capital | Empresas | 企业、激励与资本 | 企业 |
| `factorx` | Factor X, Equipos y Personotecnia | Factor X | X 因素、团队与人本技术 | X 因素 |
| `mente` | Psicología, Sesgos y AACC | Mente y AACC | 心理学、偏见与高潜能 | 心智与高潜 |
| `sociedad` | Sociedad, Relatos y Tribus | Sociedad | 社会、叙事与部落 | 社会 |
| `tecnologia` | IA, Tecnología y Cultura | IA y Cultura | AI、技术与文化 | AI 与文化 |

---

## 3. Las 15 temáticas oficiales (tabla cerrada)

| Tema (ES) | Tema (ZH) |
|---|---|
| Método CPS | CPS 方法 |
| Sistemas complejos y sensemaking | 复杂系统与意义建构 |
| Estrategia | 战略 |
| Equipos y liderazgo | 团队与领导力 |
| Organizaciones e incentivos | 组织与激励 |
| Finanzas e inversión | 金融与投资 |
| Marketing y publicidad | 营销与广告 |
| Personotecnia | 人本技术（Personotecnia） |
| Psicología y decisiones | 心理学与决策 |
| Desarrollo personal | 个人成长 |
| Sociedad y política | 社会与政治 |
| IA y tecnología | AI 与技术 |
| Educación y altas capacidades | 教育与高潜能 |
| Cómic, cine y videojuegos | 漫画、电影与游戏 |
| Reflexiones personales | 个人随想 |

---

## 4. Los 5 dominios de Cynefin (tabla cerrada)

| Dominio (ES) | Dominio (ZH) | Nota de uso |
|---|---|---|
| Claro | 清晰域 | Antes llamado «simple»（旧称“简单域”） |
| Complicado | 繁杂域 | Terreno del buen consultor；区分“繁杂”与“复杂” |
| Complejo | 复杂域 | Terreno del CPS（CPS 的主战场） |
| Caótico | 混乱域 | Actuar primero para estabilizar（先行动稳住局面） |
| Confuso | 困惑域 | Ligado a la aporía（与疑难僵局/失序相连） |

---

## 5. Los 121 conceptos (tabla cerrada)

`validate.py` y `merge.py` exigen coincidencia **exacta** en el campo `term` de cada slug.

| slug | Término (ES) | Término (ZH) |
|---|---|---|
| `arquitectura-de-incentivos` | Arquitectura de incentivos | 激励架构 |
| `decision-makers` | Decision makers | 决策者（Decision Makers） |
| `falacia-de-mcnamara` | Falacia de McNamara | 麦克纳马拉谬误 |
| `incentivo-perverso` | Incentivo perverso | 逆向激励 |
| `skin-in-the-game` | Skin in the game | 风险共担（Skin in the Game） |
| `post-pe-y-cfu` | Post-PE y CFU | 后私募时代与 CFU |
| `blitzscaling` | Blitzscaling | 闪电式扩张（Blitzscaling） |
| `consultoria` | Consultoría | 管理咨询 |
| `huevos-de-serpiente` | Huevos de serpiente | 蛇蛋隐患 |
| `private-equity` | Private equity | 私募股权（Private Equity） |
| `sindrome-del-coronel-thompson` | Síndrome del Coronel Thompson | 汤普森上校综合征 |
| `taylorismo` | Taylorismo | 泰勒主义 |
| `metaincentivos` | Metaincentivos | 元激励 |
| `efecto-cobra` | Efecto cobra | 眼镜蛇效应 |
| `atractores` | Atractores | 吸引子 |
| `business-acumen` | Business acumen | 商业敏锐度（Business Acumen） |
| `estrategia` | Estrategia | 战略 |
| `hotel-de-hilbert` | Hotel de Hilbert | 希尔伯特旅馆 |
| `metajuego` | Metajuego | 元博弈 |
| `cul-de-sac` | Cul de sac | 死胡同（Cul-de-sac） |
| `fatiga-de-materiales` | Fatiga de materiales | 材料疲劳 |
| `game-awareness` | Game awareness | 局势感知（Game Awareness） |
| `juego-infinito` | Juego infinito | 无限游戏 |
| `moat` | Moat | 护城河（Moat） |
| `oceano-azul` | Océano azul | 蓝海战略 |
| `sidestepping` | Sidestepping | 侧步破局（Sidestepping） |
| `zugzwang` | Zugzwang | 迫移局（Zugzwang） |
| `futurismo-de-frontera` | Futurismo de frontera | 前沿未来主义 |
| `decadencia-y-reconversion` | Decadencia y reconversión | 衰退与转型 |
| `harbingers-of-doom` | Harbingers of Doom | 末日先兆（Harbingers of Doom） |
| `emulsificador-de-equipo` | Emulsificador de equipo | 团队乳化剂 |
| `equipo-apolo` | Equipo Apolo | 阿波罗团队 |
| `factor-x` | Factor X | X 因素 |
| `personotecnia` | Personotecnia | 人本技术（Personotecnia） |
| `test-astudillo` | Test Astudillo | 阿斯图迪略测试 |
| `asertividad` | Asertividad | 坚定表达（Asertividad） |
| `autosegmentacion` | Autosegmentación | 自我细分 |
| `man-on-a-mission` | Man on a mission | 使命在身（Man on a Mission） |
| `man-out-of-time` | Man out of time | 时代错位者（Man out of Time） |
| `recoger-cable` | Recoger cable | 收线认错（Recoger cable） |
| `resolutivas-invisibles` | Resolutivas invisibles | 隐形解题女将（Resolutivas invisibles） |
| `sincronizacion-de-pedalada` | Sincronización de pedalada | 踏频同步 |
| `contexto` | Contexto | 语境 |
| `elefante-negro` | Elefante negro | 黑象 |
| `incertidumbre` | Incertidumbre | 不确定性 |
| `niebla-de-guerra` | Niebla de guerra | 战争迷雾 |
| `procesos-de-alta-variabilidad` | Procesos de alta variabilidad (PAV) | 高变异性流程（PAV） |
| `aporia` | Aporía | 疑难僵局（Aporia） |
| `hormesis` | Hormesis | 毒物兴奋效应（Hormesis） |
| `rabbit-hole` | Rabbit hole | 兔子洞（Rabbit Hole） |
| `sweet-spot` | Sweet spot | 甜蜜点（Sweet Spot） |
| `teorema-de-roca-salvatella` | Teorema de Roca Salvatella | 罗卡·萨尔瓦特拉定理 |
| `aftershock` | After Shock | 余震（After Shock） |
| `eta` | ETA (Estimated Time of Arrival) | 预计到达时间（ETA） |
| `all-models-are-wrong` | All models are wrong | 所有模型都是错的 |
| `altas-capacidades` | Altas capacidades (AACC) | 高潜能群体（AACC） |
| `disonancia-cognitiva` | Disonancia cognitiva | 认知失调 |
| `neurodivergencia` | Neurodivergencia | 神经多样性 |
| `sesgo` | Sesgo cognitivo | 认知偏见 |
| `truth-coping` | Truth coping | 真相承受力（Truth Coping） |
| `matriz-de-compra-de-pescado` | Matriz de compra de pescado | 买鱼矩阵 |
| `bothism` | Bothism | 双边主义（Bothism） |
| `transicion-obligada` | Transición obligada | 被迫转型 |
| `xavier-o-magneto` | Xavier o Magneto | X 教授还是万磁王 |
| `zona-de-desarrollo-proximo` | Zona de desarrollo próximo | 最近发展区 |
| `alta-agencia` | Alta agencia | 高能动性（High Agency） |
| `homework-apocalypse` | Homework Apocalypse | 作业末日（Homework Apocalypse） |
| `autoengano` | Autoengaño | 自我欺骗 |
| `cienciarte` | Cienciarte | 科艺融合（Cienciarte） |
| `cps` | CPS | CPS |
| `diagnostico` | Diagnóstico | 诊断 |
| `liminalidad` | Liminalidad | 阈限性 |
| `orquestacion-cognitiva` | Orquestación cognitiva | 认知编排 |
| `cps-hispano` | CPS hispano | 西语界 CPS |
| `dr-house` | Dr. House | 豪斯医生（Dr. House） |
| `javier-g-recuenco` | Javier G. Recuenco | Javier G. Recuenco |
| `pensamiento-lateral` | Pensamiento lateral | 水平思考 |
| `singular-solving` | Singular Solving | Singular Solving |
| `soluciones-de-mierda` | Soluciones de mierda | 狗屎方案 |
| `solvers-academy` | Solvers Academy | Solvers Academy |
| `tokens-de-confianza` | Tokens de confianza | 信任通证 |
| `turra` | Turra | Turra |
| `companias-problem-centric` | Compañías Problem-centric | 以问题为中心的公司 |
| `critica-al-design-thinking` | Crítica al Design Thinking | 对设计思维（Design Thinking）的批判 |
| `ciencias-de-la-complejidad` | Ciencias de la complejidad | 复杂性科学 |
| `cynefin` | Cynefin | Cynefin |
| `emergencia` | Emergencia | 涌现 |
| `sensemaking` | Sensemaking | 意义建构（Sensemaking） |
| `sistemas-complejos` | Sistemas complejos | 复杂系统 |
| `acoplamiento-suelto` | Acoplamiento suelto | 松耦合 |
| `autopoiesis` | Autopoiesis | 自创生（Autopoiesis） |
| `corrientes-subterraneas` | Corrientes subterráneas | 暗流 |
| `enactacion` | Enactación | 生成行动（Enactment） |
| `homeostasis` | Homeostasis | 稳态 |
| `vaca-esferica` | Vaca esférica | 球形奶牛 |
| `colapso-cognitivo` | Colapso cognitivo | 认知崩塌 |
| `neuroestetica` | Neuroestética | 神经美学 |
| `cultura-luterana` | Cultura luterana | 路德式文化 |
| `espiral-del-silencio` | Espiral del silencio | 沉默螺旋 |
| `pantomima` | Pantomima | 哑剧 |
| `pompismo` | Pompismo | 浮华空想主义（Pompismo） |
| `zeitgeist` | Zeitgeist | 时代精神（Zeitgeist） |
| `chavesnogalismo` | Chavesnogalismo | 查韦斯·诺加莱斯主义（Chavesnogalismo） |
| `efecto-gell-mann` | Efecto Gell-Mann | 盖尔曼失忆效应 |
| `espiral-del-pa-que` | Espiral del pa qué | “折腾啥呢”螺旋（Espiral del pa qué） |
| `facciones-lanares` | Facciones lanares | 羊群派系 |
| `zelotes` | Zelote | 狂热信徒 |
| `optimizacion-luterana-y-feijoada` | Feijoada y optimización luterana | 黑豆炖肉与路德式优化 |
| `enshittification` | Enshittification | 平台垃圾化（Enshittification） |
| `centauro` | Centauro | 半人马模式 |
| `ecosistemas-tecnologicos` | Ecosistemas tecnológicos | 技术生态 |
| `ia-chasm` | IA chasm | AI 鸿沟（IA Chasm） |
| `lujo-humano` | Lujo humano | 人性奢侈品 |
| `reshuffle` | Reshuffle | 大洗牌（Reshuffle） |
| `santuario-humano` | Santuario humano | 人类庇护所 |
| `abrochador-liminal` | Abrochador liminal | 阈限扣合者（Abrochador liminal） |
| `capitalismo-de-vigilancia` | Capitalismo de vigilancia | 监控资本主义 |
| `roguelike-de-mazos` | CPS como Roguelike de Mazos | 牌组构筑 Roguelike 视角下的 CPS |
| `desierto-tipo-sierra` | Desierto tipo Sierra | 雪乐山式无尽沙漠 |
| `personotecnia-ia` | PersonotecnIA | PersonotecnIA |
| `s4-nightmare` | S4 Nightmare | S4 噩梦（S4 Nightmare） |

---

## 6. Expresiones difíciles de Recuenco（Recuenco 常见难译表达）

Referencia para traducir con consistencia, mordacidad y naturalidad en chino simplificado las expresiones recurrentes de Javier G. Recuenco dentro de párrafos, ensayos, citas y ejemplos:

| Expresión en español | Traducción recomendada en chino simplificado | Matiz / nota de uso |
|---|---|---|
| **Recoger cable** | 收线认错 / 放下身段及时改口 | En CPS es una virtud: admitir un error ante nuevos datos y corregir rumbo sin ego. |
| **Facciones lanares** | 羊群派系 / 盲从羊群 | Grupos que siguen a su tribu como rebaño acrítico. |
| **Espiral del «¿pa qué?»** | “折腾啥呢”螺旋 / “说了又有什么用”的螺旋 | Resignación lúcida cuando señalar la realidad cuesta más de lo que aporta. |
| **Soluciones de mierda** | 狗屎方案 / 稀烂方案 | Mantener el registro crudo e irónico del original; nunca suavizar a `欠佳方案`. |
| **Lijacantos** | 磨边匠 / 专扣边角料的细枝末节派 | Quien se obsesiona puliendo bordes irrelevantes mientras el problema central arde. |
| **Pompismo** | 浮华空想主义（Pompismo） / 空中楼阁式的清高 | Idealismo estético desconectado de la realidad elemental. |
| **Chavesnogalismo** | 查韦斯·诺加莱斯主义（Chavesnogalismo） | Inspirado en Manuel Chaves Nogales: la maldad no tiene bando ideológico. |
| **Abrochador liminal** | 阈限扣合者 / 跨界扣合者 | Quien «abrocha» una tecnología nueva con el *Zeitgeist* mediante una *Killer App*. |
| **Resolutivas invisibles** | 隐形解题女将 / 幕后实干女性 | Conservar la marca femenina del original cuando el texto subraya ese arquetipo. |
| **Hijoputismo** | 混蛋行径 / 纯粹的恶毒 / 坏种心态 | Registro directo y sin anestesia, acorde a Chaves Nogales y Recuenco. |
| **Efecto cuñado / cuñado** | 懂王效应 / 饭桌懂王 / 半吊子懂王 | Quien opina de todo con cero rigor y máxima seguridad (muy natural en chino como `懂王`). |
| **Vender humo / humo** | 卖空气 / 画大饼 / 吹泡泡 | Promesas vacías de PowerPoint o consultoría sin sustancia real. |
| **Jugarse el pellejo** | 押上身家 / 自己下场担责 | Equivalente idiomático de *Skin in the Game*. |
| **Las canicas ruedan hacia la pendiente** | 弹珠永远往低处滚 / 顺着真实的坡度走 | Metáfora de que los incentivos reales mandan siempre sobre los discursos. |
| **Pantomima (corporativa)** | （职场）哑剧 / 心照不宣的演戏 | Farsa consciente que todos mantienen porque a todos les conviene. |
| **Huevos de serpiente** | 蛇蛋隐患 / 埋下的定时炸弹 | Bombas de relojería latentes que un directivo deja a su sucesor. |
| **Vaca esférica** | 球形奶牛 | Chiste clásico de la física sobre modelos hiper-simplificados inútiles en la realidad. |
| **Elefante negro** | 黑象 | Cruce entre «elefante en la habitación»（房间里的大象）y «cisne negro»（黑天鹅）. |
| **Cultura luterana / optimización luterana** | 路德式文化 / 路德式优化 | Obsesión por medir, pesar y optimizar todo como si fuera predecible. |
| **Guarnición (vs. plato principal)** | 配菜（而非主菜） | Crítica al Design Thinking cuando pretende sustituir al CPS. |
| **Saveur du jour** | 当季热词 / 一时风尚（Saveur du jour） | Moda pasajera de consultoría o gestión; puede conservar el guiño francés entre paréntesis. |
| **Entropía metastásica** | 转移性熵增 / 癌变式失序 | Desorden organizativo que se propaga sin control. |
| **Comulgar con ruedas de molino** | 照单全收荒唐话 / 连鬼话都信 | Aceptar relatos absurdos sin pestañear. |
| **A pecho descubierto** | 赤膊上阵 / 毫无遮掩地直面 | Actuar sin red ni escudo corporativo. |
| **Desierto tipo Sierra** | 雪乐山式无尽沙漠 | Referencia al *Endless Desert* de *《国王密使 V》（King's Quest V）*. |
| **No comprarle todo el pescado a nadie** | 别把任何人的鱼全盘买下 | Heurístico de la 买鱼矩阵: separar lo brillante de lo flojo en cada autor. |
| **Pensamiento mágico** | 魔幻思维 / 一厢情愿的幻想 | Creer que desear algo o escribirlo en un PPT lo convierte en realidad. |
| **Buenismo** | 圣母心 / 廉价道德感 | Moralina superficial desconectada de las consecuencias reales. |
| **Zelote** | 狂热信徒 / 教条狂热分子 | Fanático que reacciona con la amígdala cuando tocan su dogma. |
| **Cienciarte** | 科艺融合（Cienciarte） | Combinación simultánea de rigor científico e intuición artística. |
| **Turra / dar la turra** | turra / 写长帖唠叨（dar la turra） | Hilo largo semanal de Recuenco en X; conservar siempre `turra` al referirse a sus hilos. |
| **Terreno de juego / tablero** | 赛场 / 棋盘 | Muy usado en estrategia, metajuego y sidestepping. |
