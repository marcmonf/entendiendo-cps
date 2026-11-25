# Guía de estilo y glosario cerrado — Japonés estándar de Japón (`ja-JP`)

Este documento es la **única fuente de verdad terminológica y de estilo** para traducir el Observatorio CPS al japonés estándar de Japón (`ja` / `ja-JP`). Todos los agentes que traduzcan bloques (`ja_00.json`..`ja_18.json`) deben seguir estas reglas al pie de la letra. Los scripts `validate.py` y `merge.py` verifican automáticamente la coincidencia exacta de las tablas cerradas.

---

## 1. Reglas de registro y estilo para japonés (`ja-JP`)

1. **Separación estricta de registros (regla única para los 18 bloques):**
   - **です・ます調 (*desu/masu*) cercano, claro y moderno** — para toda la interfaz y capas explicativas/prácticas:
     - Todo el bloque `00`: `ui`, `routes`, `pillars`, `attractors`, `problems`, `tourDesktop`, `tourMobile`, `families`.
     - En cada concepto (`01..18`): `oneSentence`, `plainExplanation`, `analogy`, `howToApply`, `antiPattern`, `glossarySynthesis`, `origin`, `domains[].description` (en `cynefin`) y `deepDive.reflectionQuestions` (porque interpelan directamente al lector).
     - **Evita el *keigo* corporativo rígido** (`いたします`, `ございます`, `〜ております`, `何卒`, `申し上げます`), salvo cuando el texto parodie explícitamente la burocracia o la pantomima empresarial. Usa un *desu/masu* ágil y humano, como el de un buen libro de divulgación o un blog técnico-estratégico respetado en Japón.
   - **だ・である調 (*da/dearu*) ensayístico** — exclusivamente para el ensayo de Nivel 3:
     - En cada concepto (`01..18`): `deepDive.thesis`, `deepDive.essay` (todos sus párrafos), `deepDive.keyInsights`, `deepDive.threadExamples` y `deepDive.quote.text` (salvo si una cita textual en español adopta diálogo oral o tono coloquial directo).
     - Debe sonar a ensayo intelectual incisivo (estilo *新書* / columna de análisis de negocios y tecnología), nunca a traducción literal acartonada (*翻訳調*).
   - **Nunca mezcles ambos registros al azar** dentro de un mismo campo.
2. **Tono y voz de Javier G. Recuenco (evitar el *翻訳調*):**
   - Conserva el ingenio, la ironía, la mordacidad y el espíritu artesanal del original. Cuando Recuenco usa registro crudo, sarcasmo o humor callejero (*soluciones de mierda*, *vender humo*, *jugarse el pellejo*, *hijoputismo*), mantén la contundencia en japonés (*クソみたいな解決策*, *中身のない売り文句／ハッタリ*, *身銭を切る／腹をくくる*, *純粋なクズ根性*), sin suavizarlo con eufemismos burocráticos.
   - Reescribe las subordinadas largas del español en oraciones naturales en orden **SOV**, usando conectores orgánicos (`しかし`, `つまり`, `要するに`, `だからこそ`) y evitando calcos pasivos innecesarios (`〜によって〜された`) o pronombres redundantes (`あなた`, `彼ら`) cuando el japonés los omite con naturalidad.
3. **Dosificación del katakana y términos propios:**
   - **Dosifica el katakana:** emplea términos ya asentados en japonés de negocios/tecnología (`センスメイキング`, `インセンティブ`, `バイアス`, `パントマイム`, `ローグライク`, `キャズム`, `エコシステム`), pero **evita bloques largos de katakana innecesario** cuando exista un compuesto en kanji natural o una sigla consolidada (p. ej. usa `複雑な問題解決` o `CPS`, nunca `コンプレックス・プロブレム・ソルビング・メソッド`; usa `意思決定者`, no `ディシジョン・メーカーズ` en prosa corrida).
   - **`turra` / `Turra`**: conservar siempre sin traducir (en prosa japonesa con clasificador: `このturra`, `263本のturra`, `毎週のturra`; si conviene aclarar la lectura en la primera aparición o en su propia ficha, `turra（トゥラ）`). No sustituir por `スレッド` o `記事` salvo al explicar qué es.
   - **`El Turrero Post`**: conservar siempre intacto.
   - **`CPSer`**, **`Personotecnia`**, **`PersonotecnIA`**, **`Singular Solving`**, **`Solvers Academy`**, **`Javier G. Recuenco`**, **`Cynefin`**, **`Factor X`**, **`CPS`**, **`KPI`**, **`PowerPoint`**, **`AI`**: conservar intactos (usa `AI`, no `IA`, en prosa japonesa, salvo dentro de los títulos cerrados `IA chasm` → `AIのキャズム（IA Chasm）` y `PersonotecnIA`).
   - **Términos acuñados por Recuenco**: tradúcelos con fuerza expresiva al japonés y conserva el original español entre paréntesis de ancho completo en el `term` o primera mención cuando aporte claridad (`科学芸術（Cienciarte）`, `潔い撤回（Recoger cable）`, `装飾的理想主義（Pompismo）`, `境界の留め金（Abrochador liminal）`).
4. **Puntuación y tipografía japonesa estándar (`ja-JP`):**
   - Comillas japonesas: **`「…」`** para citas, conceptos destacados y énfasis irónico (nunca `«…»`, `„…“` ni comillas rectas `"` dentro del texto; `「…」` no requiere escape en JSON).
   - Títulos de libros, películas, series, cómics y videojuegos: **`『…』`** (p. ej. `『キングズクエストV』`, `『Dr. HOUSE』`).
   - Puntuación japonesa de ancho completo (全角): **`、。：！？（）`** y punto medio **`・`** para enumeraciones paralelas.
   - Guion largo para incisos: **`——`** (dos rayas EM consecutivas). Puntos suspensivos: **`……`** (en placeholders cortos de UI se admite `…`).
   - No insertes espacios innecesarios entre japonés y palabras latinas/números en texto corrido (`263本のturra`, `CPSの手法`, `121の概念`), siguiendo la convención editorial japonesa estándar.
   - Nunca dejar signos españoles (`¿`, `¡`).
5. **Aliases (`aliases`):** No elimines ningún elemento del array `aliases`. Traduce los que tengan equivalente claro en japonés y conserva (o añade) las siglas, lecturas en katakana y términos originales en español/inglés útiles para búsqueda (`AACC`, `PAV`, `Cynefin`, `Skin in the Game`, `センスメイキング`, etc.).

---

## 2. Las 9 familias / constelaciones (tabla cerrada)

Los nombres cortos (`Corto (JA)`) deben ser muy concisos (2–6 caracteres) para encajar limpiamente en el mapa estelar.

| id | Nombre (ES) | Corto (ES) | Nombre (JA) | Corto (JA) |
|---|---|---|---|---|
| `oficio` | El Oficio CPS | Oficio CPS | CPSという職人技 | CPSの技 |
| `sistemas` | Sistemas y Sensemaking | Sistemas | システムとセンスメイキング | システム |
| `incertidumbre` | Incertidumbre y Contexto | Incertidumbre | 不確実性と文脈 | 不確実性 |
| `estrategia` | Estrategia y Metajuego | Estrategia | 戦略とメタゲーム | 戦略 |
| `empresas` | Empresas, Incentivos y Capital | Empresas | 企業・インセンティブ・資本 | 企業 |
| `factorx` | Factor X, Equipos y Personotecnia | Factor X | Factor X・チーム・Personotecnia | Factor X |
| `mente` | Psicología, Sesgos y AACC | Mente y AACC | 心理・バイアス・ギフテッド | 心理・AACC |
| `sociedad` | Sociedad, Relatos y Tribus | Sociedad | 社会・物語・部族 | 社会 |
| `tecnologia` | IA, Tecnología y Cultura | IA y Cultura | AI・技術・文化 | AIと文化 |

---

## 3. Las 15 temáticas oficiales (tabla cerrada)

| Tema (ES) | Tema (JA) |
|---|---|
| Método CPS | CPS手法 |
| Sistemas complejos y sensemaking | 複雑系とセンスメイキング |
| Estrategia | 戦略 |
| Equipos y liderazgo | チームとリーダーシップ |
| Organizaciones e incentivos | 組織とインセンティブ |
| Finanzas e inversión | 金融と投資 |
| Marketing y publicidad | マーケティングと広告 |
| Personotecnia | Personotecnia |
| Psicología y decisiones | 心理学と意思決定 |
| Desarrollo personal | 自己成長 |
| Sociedad y política | 社会と政治 |
| IA y tecnología | AIとテクノロジー |
| Educación y altas capacidades | 教育とギフテッド |
| Cómic, cine y videojuegos | 漫画・映画・ゲーム |
| Reflexiones personales | 個人的な思索 |

---

## 4. Los 5 dominios de Cynefin (tabla cerrada)

| Dominio (ES) | Dominio (JA) | Nota de uso |
|---|---|---|
| Claro | 明快 | Antes llamado «simple»（旧称「単純／Simple」） |
| Complicado | 煩雑 | Terreno del buen consultor；distinguir siempre `煩雑` de `複雑` |
| Complejo | 複雑 | Terreno del CPS（CPSの主戦場） |
| Caótico | カオス | Actuar primero para estabilizar（まず行動して状況を安定させる） |
| Confuso | 混乱 | Ligado a la aporía（アポリア／どの領域にいるか分からない状態） |

---

## 5. Los 121 conceptos (tabla cerrada)

`validate.py` y `merge.py` exigen coincidencia **exacta** en el campo `term` de cada slug.

| slug | Término (ES) | Término (JA) |
|---|---|---|
| `arquitectura-de-incentivos` | Arquitectura de incentivos | インセンティブ設計 |
| `decision-makers` | Decision makers | 意思決定者（Decision Makers） |
| `falacia-de-mcnamara` | Falacia de McNamara | マクナマラの誤謬 |
| `incentivo-perverso` | Incentivo perverso | 逆インセンティブ |
| `skin-in-the-game` | Skin in the game | 身銭を切る（Skin in the Game） |
| `post-pe-y-cfu` | Post-PE y CFU | ポストPEとCFU |
| `blitzscaling` | Blitzscaling | ブリッツスケーリング（Blitzscaling） |
| `consultoria` | Consultoría | コンサルティング |
| `huevos-de-serpiente` | Huevos de serpiente | 蛇の卵 |
| `private-equity` | Private equity | プライベート・エクイティ（PE） |
| `sindrome-del-coronel-thompson` | Síndrome del Coronel Thompson | トンプソン大佐症候群 |
| `taylorismo` | Taylorismo | テイラー主義 |
| `metaincentivos` | Metaincentivos | メタ・インセンティブ |
| `efecto-cobra` | Efecto cobra | コブラ効果 |
| `atractores` | Atractores | アトラクター |
| `business-acumen` | Business acumen | ビジネス感覚（Business Acumen） |
| `estrategia` | Estrategia | 戦略 |
| `hotel-de-hilbert` | Hotel de Hilbert | ヒルベルトのホテル |
| `metajuego` | Metajuego | メタゲーム |
| `cul-de-sac` | Cul de sac | 袋小路（Cul-de-sac） |
| `fatiga-de-materiales` | Fatiga de materiales | 金属疲労 |
| `game-awareness` | Game awareness | ゲーム・アウェアネス |
| `juego-infinito` | Juego infinito | 無限ゲーム |
| `moat` | Moat | 経済的な堀（Moat） |
| `oceano-azul` | Océano azul | ブルー・オーシャン |
| `sidestepping` | Sidestepping | サイドステッピング（Sidestepping） |
| `zugzwang` | Zugzwang | ツークツワンク（Zugzwang） |
| `futurismo-de-frontera` | Futurismo de frontera | 境界未来主義 |
| `decadencia-y-reconversion` | Decadencia y reconversión | 衰退と再転換 |
| `harbingers-of-doom` | Harbingers of Doom | 破滅の前触れ（Harbingers of Doom） |
| `emulsificador-de-equipo` | Emulsificador de equipo | チームの乳化剤 |
| `equipo-apolo` | Equipo Apolo | アポロ・チーム |
| `factor-x` | Factor X | Factor X |
| `personotecnia` | Personotecnia | Personotecnia |
| `test-astudillo` | Test Astudillo | アストゥディージョ・テスト |
| `asertividad` | Asertividad | アサーティブネス |
| `autosegmentacion` | Autosegmentación | 自己セグメンテーション |
| `man-on-a-mission` | Man on a mission | 使命を帯びた者（Man on a Mission） |
| `man-out-of-time` | Man out of time | 時代錯誤の人（Man out of Time） |
| `recoger-cable` | Recoger cable | 潔い撤回（Recoger cable） |
| `resolutivas-invisibles` | Resolutivas invisibles | 見えざる解決者たち（Resolutivas invisibles） |
| `sincronizacion-de-pedalada` | Sincronización de pedalada | ペダリングの同期 |
| `contexto` | Contexto | 文脈（コンテキスト） |
| `elefante-negro` | Elefante negro | 黒い象（ブラック・エレファント） |
| `incertidumbre` | Incertidumbre | 不確実性 |
| `niebla-de-guerra` | Niebla de guerra | 戦場の霧 |
| `procesos-de-alta-variabilidad` | Procesos de alta variabilidad (PAV) | 高変動プロセス（PAV） |
| `aporia` | Aporía | アポリア |
| `hormesis` | Hormesis | ホルミシス |
| `rabbit-hole` | Rabbit hole | ラビットホール |
| `sweet-spot` | Sweet spot | スイートスポット |
| `teorema-de-roca-salvatella` | Teorema de Roca Salvatella | ロカ・サルバテージャの定理 |
| `aftershock` | After Shock | 余震（After Shock） |
| `eta` | ETA (Estimated Time of Arrival) | 到着予定時刻（ETA） |
| `all-models-are-wrong` | All models are wrong | すべてのモデルは間違っている |
| `altas-capacidades` | Altas capacidades (AACC) | ギフテッド（AACC） |
| `disonancia-cognitiva` | Disonancia cognitiva | 認知的不協和 |
| `neurodivergencia` | Neurodivergencia | ニューロダイバージェンス |
| `sesgo` | Sesgo cognitivo | 認知バイアス |
| `truth-coping` | Truth coping | 真実への耐性（Truth Coping） |
| `matriz-de-compra-de-pescado` | Matriz de compra de pescado | 魚買いマトリクス |
| `bothism` | Bothism | 両論併記主義（Bothism） |
| `transicion-obligada` | Transición obligada | 強制的な移行 |
| `xavier-o-magneto` | Xavier o Magneto | エグゼビアかマグニートーか |
| `zona-de-desarrollo-proximo` | Zona de desarrollo próximo | 発達の最近接領域 |
| `alta-agencia` | Alta agencia | 高い主体性（High Agency） |
| `homework-apocalypse` | Homework Apocalypse | 宿題の終末（Homework Apocalypse） |
| `autoengano` | Autoengaño | 自己欺瞞 |
| `cienciarte` | Cienciarte | 科学芸術（Cienciarte） |
| `cps` | CPS | CPS |
| `diagnostico` | Diagnóstico | 診断 |
| `liminalidad` | Liminalidad | リミナリティ（境界性） |
| `orquestacion-cognitiva` | Orquestación cognitiva | 認知オーケストレーション |
| `cps-hispano` | CPS hispano | スペイン語圏のCPS |
| `dr-house` | Dr. House | Dr. ハウス（Dr. House） |
| `javier-g-recuenco` | Javier G. Recuenco | Javier G. Recuenco |
| `pensamiento-lateral` | Pensamiento lateral | 水平思考 |
| `singular-solving` | Singular Solving | Singular Solving |
| `soluciones-de-mierda` | Soluciones de mierda | クソみたいな解決策 |
| `solvers-academy` | Solvers Academy | Solvers Academy |
| `tokens-de-confianza` | Tokens de confianza | 信頼のトークン |
| `turra` | Turra | Turra |
| `companias-problem-centric` | Compañías Problem-centric | 問題中心型企業（Problem-centric） |
| `critica-al-design-thinking` | Crítica al Design Thinking | デザイン思考への批判 |
| `ciencias-de-la-complejidad` | Ciencias de la complejidad | 複雑性の科学 |
| `cynefin` | Cynefin | Cynefin |
| `emergencia` | Emergencia | 創発 |
| `sensemaking` | Sensemaking | センスメイキング |
| `sistemas-complejos` | Sistemas complejos | 複雑系 |
| `acoplamiento-suelto` | Acoplamiento suelto | 疎結合 |
| `autopoiesis` | Autopoiesis | オートポイエーシス |
| `corrientes-subterraneas` | Corrientes subterráneas | 底流 |
| `enactacion` | Enactación | イナクトメント（行為産出） |
| `homeostasis` | Homeostasis | ホメオスタシス |
| `vaca-esferica` | Vaca esférica | 球形の牛 |
| `colapso-cognitivo` | Colapso cognitivo | 認知崩壊 |
| `neuroestetica` | Neuroestética | 神経美学 |
| `cultura-luterana` | Cultura luterana | ルター派的文化 |
| `espiral-del-silencio` | Espiral del silencio | 沈黙の螺旋 |
| `pantomima` | Pantomima | パントマイム |
| `pompismo` | Pompismo | 装飾的理想主義（Pompismo） |
| `zeitgeist` | Zeitgeist | 時代精神（Zeitgeist） |
| `chavesnogalismo` | Chavesnogalismo | チャベス・ノガレス主義（Chavesnogalismo） |
| `efecto-gell-mann` | Efecto Gell-Mann | ゲルマン健忘症効果 |
| `espiral-del-pa-que` | Espiral del pa qué | 「今さら何になる」の螺旋 |
| `facciones-lanares` | Facciones lanares | 羊の群れ派閥 |
| `zelotes` | Zelote | 狂信者（ゼーロート） |
| `optimizacion-luterana-y-feijoada` | Feijoada y optimización luterana | フェイジョアーダとルター派的最適化 |
| `enshittification` | Enshittification | エンシッティフィケーション（劣化現象） |
| `centauro` | Centauro | ケンタウロス型 |
| `ecosistemas-tecnologicos` | Ecosistemas tecnológicos | 技術エコシステム |
| `ia-chasm` | IA chasm | AIのキャズム（IA Chasm） |
| `lujo-humano` | Lujo humano | 人間的な贅沢 |
| `reshuffle` | Reshuffle | 大シャッフル（Reshuffle） |
| `santuario-humano` | Santuario humano | 人間の聖域 |
| `abrochador-liminal` | Abrochador liminal | 境界の留め金（Abrochador liminal） |
| `capitalismo-de-vigilancia` | Capitalismo de vigilancia | 監視資本主義 |
| `roguelike-de-mazos` | CPS como Roguelike de Mazos | デッキ構築型ローグライクとしてのCPS |
| `desierto-tipo-sierra` | Desierto tipo Sierra | シエラ式エンドレス砂漠 |
| `personotecnia-ia` | PersonotecnIA | PersonotecnIA |
| `s4-nightmare` | S4 Nightmare | S4ナイトメア（S4 Nightmare） |

---

## 6. Expresiones difíciles de Recuenco（Recuenco特有の難訳表現集）

Referencia para traducir con consistencia, ingenio y naturalidad en japonés las expresiones recurrentes de Javier G. Recuenco dentro de párrafos, ensayos, citas y ejemplos:

| Expresión en español | Traducción recomendada en japonés | Matiz / nota de uso |
|---|---|---|
| **Recoger cable** | 潔く撤回する ／ プライドを捨てて軌道修正する | En CPS es una virtud: admitir un error ante nuevos datos y corregir rumbo sin ego. |
| **Facciones lanares** | 羊の群れ派閥 ／ 思考停止の群れ | Grupos que siguen a su tribu como rebaño acrítico. |
| **Espiral del «¿pa qué?»** | 「今さら何になる」の螺旋 ／ 「言っても無駄」の螺旋 | Resignación lúcida cuando señalar la realidad cuesta más de lo que aporta. |
| **Soluciones de mierda** | クソみたいな解決策 ／ お粗末な解決策 | Mantener el registro crudo e irónico del original; nunca suavizar a `不十分な解決策`. |
| **Lijacantos** | 角削り屋 ／ どうでもいい細部ばかり磨く連中 | Quien se obsesiona puliendo bordes irrelevantes mientras el problema central arde. |
| **Pompismo** | 装飾的理想主義（Pompismo） ／ 現実離れした綺麗事主義 | Idealismo estético desconectado de la realidad elemental. |
| **Chavesnogalismo** | チャベス・ノガレス主義（Chavesnogalismo） | Inspirado en Manuel Chaves Nogales: la maldad no tiene bando ideológico. |
| **Abrochador liminal** | 境界の留め金 ／ 技術と時代精神をつなぎ留める者 | Quien «abrocha» una tecnología nueva con el *Zeitgeist* mediante una *Killer App*. |
| **Resolutivas invisibles** | 見えざる解決者たち ／ 縁の下の女性実務家たち | Conservar la referencia al arquetipo femenino cuando el texto lo subraya explícitamente. |
| **Hijoputismo** | 純粋なクズ根性 ／ むき出しの悪意 ／ ゲスさ | Registro directo y sin anestesia, acorde a Chaves Nogales y Recuenco. |
| **Efecto cuñado / cuñado** | 知ったかぶり効果 ／ 居酒屋の評論家気取り | Quien opina de todo con cero rigor y máxima seguridad. |
| **Vender humo / humo** | ハッタリを売る ／ 中身のない売り文句 ／ 絵に描いた餅 | Promesas vacías de PowerPoint o consultoría sin sustancia real. |
| **Jugarse el pellejo** | 身銭を切る ／ 自らリスクを背負う ／ 腹をくくる | Equivalente idiomático de *Skin in the Game*. |
| **Las canicas ruedan hacia la pendiente** | ビー玉は必ず床の傾きに沿って転がる | Metáfora de que los incentivos reales mandan siempre sobre los discursos. |
| **Pantomima (corporativa)** | （組織の）パントマイム ／ みんなが分かっている茶番劇 | Farsa consciente que todos mantienen porque a todos les conviene. |
| **Huevos de serpiente** | 蛇の卵 ／ 仕込まれた時限爆弾 | Bombas de relojería latentes que un directivo deja a su sucesor. |
| **Vaca esférica** | 球形の牛 | Chiste clásico de la física sobre modelos hiper-simplificados inútiles en la realidad. |
| **Elefante negro** | 黒い象（ブラック・エレファント） | Cruce entre «elefante en la habitación»（部屋の中の象）y «cisne negro»（ブラックスワン）. |
| **Cultura luterana / optimización luterana** | ルター派的文化 ／ ルター派的最適化 | Obsesión por medir, pesar y optimizar todo como si fuera predecible. |
| **Guarnición (vs. plato principal)** | 付け合わせ（メインディッシュではなく） | Crítica al Design Thinking cuando pretende sustituir al CPS. |
| **Saveur du jour** | その時々の流行語 ／ 一時のトレンド（Saveur du jour） | Moda pasajera de consultoría o gestión; se puede conservar el guiño francés. |
| **Entropía metastásica** | 転移性エントロピー ／ ガン細胞のように広がる無秩序 | Desorden organizativo que se propaga sin control. |
| **Comulgar con ruedas de molino** | 荒唐無稽な話を鵜呑みにする ／ 見え透いた嘘を丸呑みする | Aceptar relatos absurdos sin pestañear. |
| **A pecho descubierto** | 丸腰で ／ 盾も保険もなく正面から | Actuar sin red ni escudo corporativo. |
| **Desierto tipo Sierra** | シエラ式エンドレス砂漠 | Referencia al *Endless Desert* de `『キングズクエストV』（King's Quest V）`. |
| **No comprarle todo el pescado a nadie** | 誰の魚も丸ごと買い占めない | Heurístico de la `魚買いマトリクス`: separar lo brillante de lo flojo en cada autor. |
| **Pensamiento mágico** | 願望思考 ／ 魔術的思考 | Creer que desear algo o escribirlo en un PowerPoint lo convierte en realidad. |
| **Buenismo** | 綺麗事主義 ／ 上っ面の善人ぶった道徳観 | Moralina superficial desconectada de las consecuencias reales. |
| **Zelote** | 狂信者（ゼーロート） | Fanático que reacciona con la amígdala cuando tocan su dogma. |
| **Cienciarte** | 科学芸術（Cienciarte） | Combinación simultánea de rigor científico e intuición artística. |
| **Turra / dar la turra** | turra ／ 長文で語り倒す（dar la turra） | Hilo largo semanal de Recuenco en X; conservar siempre `turra` al referirse a sus hilos. |
| **Terreno de juego / tablero** | 戦場 ／ 盤面 ／ 土俵 | Muy usado en estrategia, metajuego y sidestepping. |
