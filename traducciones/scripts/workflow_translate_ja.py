#!/usr/bin/env python3
"""
Workflow script to translate CPS Observatory concept chunks 01..18 to Japanese (ja-JP).
Orchestrates translation in 4 batches of 4-5 parallel agents.
"""

import json
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(".").resolve()
sys.path.insert(0, str(REPO_ROOT / "traducciones" / "scripts"))
from validate import parse_glossary

GLOSSARY_PATH = REPO_ROOT / "traducciones" / "terminos-JA.md"
glossary = parse_glossary(GLOSSARY_PATH)

DIFFICULT_EXPRESSIONS = """
- Recoger cable -> 潔い撤回（Recoger cable） / 潔く撤回する / プライドを捨てて軌道修正する (virtud en CPS)
- Facciones lanares -> 羊の群れ派閥 / 思考停止の群れ
- Espiral del «¿pa qué?» -> 「今さら何になる」の螺旋 / 「言っても無駄」の螺旋
- Soluciones de mierda -> クソみたいな解決策 / お粗末な解決策 (nunca suavizar a 不十分な解決策)
- Lijacantos -> 角削り屋 / どうでもいい細部ばかり磨く連中
- Pompismo -> 装飾的理想主義（Pompismo） / 現実離れした綺麗事主義
- Chavesnogalismo -> チャベス・ノガレス主義（Chavesnogalismo）
- Abrochador liminal -> 境界の留め金（Abrochador liminal） / 技術と時代精神をつなぎ留める者
- Resolutivas invisibles -> 見えざる解決者たち（Resolutivas invisibles） / 縁の下の女性実務家たち
- Hijoputismo -> 純粋なクズ根性 / むき出しの悪意 / ゲスさ
- Efecto cuñado / cuñado -> 知ったかぶり効果 / 居酒屋の評論家気取り
- Vender humo / humo -> ハッタリを売る / 中身のない売り文句 / 絵に描いた餅
- Jugarse el pellejo -> 身銭を切る / 自らリスクを背負う / 腹をくくる (Skin in the Game)
- Las canicas ruedan hacia la pendiente -> ビー玉は必ず床の傾きに沿って転がる
- Pantomima (corporativa) -> （組織の）パントマイム / みんなが分かっている茶番劇
- Huevos de serpiente -> 蛇の卵 / 仕込まれた時限爆弾
- Vaca esférica -> 球形の牛
- Elefante negro -> 黒い象（ブラック・エレファント）
- Cultura luterana / optimización luterana -> ルター派的文化 / ルター派的最適化
- Guarnición (vs. plato principal) -> 付け合わせ（メインディッシュではなく）
- Saveur du jour -> その時々の流行語 / 一時のトレンド（Saveur du jour）
- Entropía metastásica -> 転移性エントロピー / ガン細胞のように広がる無秩序
- Comulgar con ruedas de molino -> 荒唐無稽な話を鵜呑みにする / 見え透いた嘘を丸呑みする
- A pecho descubierto -> 丸腰で / 盾も保険もなく正面から
- Desierto tipo Sierra -> シエラ式エンドレス砂漠
- No comprarle todo el pescado a nadie -> 誰の魚も丸ごと買い占めない
- Pensamiento mágico -> 願望思考 / 魔術的思考
- Buenismo -> 綺麗事主義 / 上っ面の善人ぶった道徳観
- Zelote -> 狂信者（ゼーロート）
- Cienciarte -> 科学芸術（Cienciarte）
- Turra / dar la turra -> turra / 長文で語り倒す（dar la turra）
- Terreno de juego / tablero -> 戦場 / 盤面 / 土俵
"""

def check_valid(chunk_id: int) -> tuple[bool, str]:
    path = REPO_ROOT / f"traducciones/tmp/ja_{chunk_id:02d}.json"
    if not path.exists():
        return False, f"El archivo {path} no existe."
    res = subprocess.run(
        ["python3", "traducciones/scripts/validate.py", str(path)],
        capture_output=True,
        text=True,
    )
    output = (res.stdout + "\n" + res.stderr).strip()
    return res.returncode == 0, output

def build_prompt(chunk_id: int) -> str:
    es_file = REPO_ROOT / f"traducciones/tmp/es_{chunk_id:02d}.json"
    ja_file = REPO_ROOT / f"traducciones/tmp/ja_{chunk_id:02d}.json"
    
    with open(es_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    concept_slugs = list(data.get("concepts", {}).keys())
    concept_terms_list = []
    has_cynefin = False
    for slug in concept_slugs:
        term = glossary["concepts"].get(slug, "")
        concept_terms_list.append(f"- `{slug}` -> term: \"{term}\"")
        if slug == "cynefin":
            has_cynefin = True
    
    cynefin_instructions = ""
    if has_cynefin:
        cynefin_instructions = """
ATENCIÓN ESPECIAL: Este bloque contiene el concepto 'cynefin'.
En el array 'domains', debes usar exactamente los 5 dominios Cynefin en este orden:
["明快", "煩雑", "複雑", "カオス", "混乱"]
"""

    prompt = f"""Traduce el archivo `{es_file}` al japonés estándar (`ja-JP`) y guárdalo en `{ja_file}`.

REGLAS DE ORO OBLIGATORIAS:
1. PROHIBIDO abrir `public/locales/en.json`, `fr.json`, `de.json`, `pt.json` ni `zh.json`. Traduce directamente desde `traducciones/tmp/es_{chunk_id:02d}.json`.
2. GLOSARIO CERRADO PARA ESTE BLOQUE:
{chr(10).join(concept_terms_list)}
{cynefin_instructions}
El campo `term` de cada concepto DEBE coincidir carácter por carácter con la tabla anterior.

3. REGLAS DE REGISTRO ESTRICTAS:
- **です・ます調 (*desu/masu*) cercano, claro y moderno**:
  Usa este registro para:
  `oneSentence`, `plainExplanation`, `analogy`, `howToApply`, `antiPattern`, `glossarySynthesis`, `origin`, `domains[].description` (en cynefin) y `deepDive.reflectionQuestions`.
  Evita el keigo corporativo rígido (いたします, ございます, 〜ております, 何卒, 申し上げます). Usa un desu/masu ágil, como de libro de divulgación o blog técnico de primer nivel.
- **だ・である調 (*da/dearu*) ensayístico**:
  Usa este registro exclusivamente para el ensayo de Nivel 3:
  `deepDive.thesis`, `deepDive.essay` (todos sus párrafos), `deepDive.keyInsights`, `deepDive.threadExamples` y `deepDive.quote.text` (salvo diálogo oral o coloquial en el original).
  Debe sonar a ensayo intelectual incisivo (estilo 新書 / columna de negocios y tecnología), nunca traducción literal (翻訳調).
- NUNCA mezcles ambos registros dentro de un mismo campo.

4. ESTILO Y VOZ:
- Voz de Javier G. Recuenco: mordaz, contundente, irónica, cercana y artesanal. Mantén el vigor expresivo en humor o registro crudo (クソみたいな解決策, ハッタリを売る／中身のない売り文句, 身銭を切る／腹をくくる, 純粋なクズ根性).
- Reescribe las oraciones largas subordinadas en orden natural SOV con conectores orgánicos (しかし, つまり, 要するに, だからこそ). Evita calcos pasivos (〜によって〜された) y pronombres innecesarios (あなた, 彼ら).
- Dosifica el katakana: usa katakana ya asentado (センスメイキング, インセンティブ, バイアス, パントマイム, ローグライク, キャズム, エコシステム), pero evita bloques de katakana innecesario si hay kanji natural (複雑な問題解決 o CPS, 意思決定者).
- Conserva sin traducir: `turra` (con clasificador: `このturra`, `263本のturra`), `El Turrero Post`, `CPSer`, `Personotecnia`, `PersonotecnIA`, `Singular Solving`, `Solvers Academy`, `Javier G. Recuenco`, `Cynefin`, `Factor X`, `CPS`, `KPI`, `PowerPoint`, `AI`.
- Expresiones difíciles de Recuenco:
{DIFFICULT_EXPRESSIONS}

5. PUNTUACIÓN Y TIPOGRAFÍA JAPONESA (ja-JP):
- Comillas japonesas: `「…」` para citas, conceptos y énfasis irónico (nunca `«…»` ni comillas rectas `"` en el texto; `「…」` no necesita escape en JSON).
- Títulos de libros, series, películas y videojuegos: `『…』` (ej. `『キングズクエストV』`, `『Dr. HOUSE』`).
- Puntuación 全角: `、。：！？（）` y punto medio `・` para enumeraciones.
- Guion largo `——`, puntos suspensivos `……` (o `…`).
- Sin espacios entre japonés y caracteres latinos/números (`263本のturra`, `CPSの手法`, `121の概念`).
- NUNCA dejes signos españoles (`¿`, `¡`).

6. ESTRUCTURA JSON Y FORMATO:
- Conserva exactamente las mismas claves y en el mismo orden exacto que en `es_{chunk_id:02d}.json`.
- Mismas longitudes de arrays (`paragraphs`, `essay`, `keyInsights`, `threadExamples`, `reflectionQuestions`, `domains`).
- En `aliases`: NO elimines ningún elemento. Traduce los aliases y conserva/añade variantes útiles de búsqueda en japonés/inglés/español.
- Traduce también `deepDive.quote.text` y `deepDive.quote.sourceTitle`.
- Conserva intactos los placeholders `{{count}}`, `{{term}}`, etc. si los hubiera.

7. PROCEDIMIENTO DE EJECUCIÓN:
1. Lee `traducciones/tmp/es_{chunk_id:02d}.json`.
2. Escribe `traducciones/tmp/ja_{chunk_id:02d}.json` con la traducción completa usando `write_file`.
3. Ejecuta con `run_command`:
   `python3 traducciones/scripts/validate.py traducciones/tmp/ja_{chunk_id:02d}.json`
4. Si validate.py muestra algún error, edita el archivo y vuelve a ejecutar validate.py hasta que devuelva `OK: validación superada sin errores.`
5. Cuando devuelva OK, llama a la herramienta finish con "OK".
"""
    return prompt

async def translate_chunk(chunk_id: int) -> bool:
    is_ok, msg = check_valid(chunk_id)
    if is_ok:
        log(f"Bloque {chunk_id:02d} ya está validado con OK. Saltando.")
        return True

    log(f"Iniciando traducción de bloque {chunk_id:02d}...")
    prompt = build_prompt(chunk_id)

    for attempt in range(1, 3):
        try:
            log(f"Bloque {chunk_id:02d}: Ejecutando subagente (intento {attempt})...")
            res = await agent(
                prompt=prompt,
                schema={"type": "string"},
                role=f"Traductor JA bloque {chunk_id:02d}",
                type_name="self",
            )
            log(f"Bloque {chunk_id:02d}: Subagente finalizó (intento {attempt}): {res}")
        except Exception as e:
            log(f"Bloque {chunk_id:02d}: Error en subagente (intento {attempt}): {e}")

        is_ok, val_msg = check_valid(chunk_id)
        if is_ok:
            log(f"Bloque {chunk_id:02d}: ¡Validación SUPERADA con OK!")
            return True
        else:
            log(f"Bloque {chunk_id:02d}: Validación fallida tras intento {attempt}:\n{val_msg}")
            # Reajustar prompt para intento de corrección
            prompt = f"""El bloque `traducciones/tmp/ja_{chunk_id:02d}.json` tiene errores de validación.
Salida de validate.py:
{val_msg}

Por favor, lee `traducciones/tmp/ja_{chunk_id:02d}.json` y `traducciones/tmp/es_{chunk_id:02d}.json`, corrige los errores reportados, vuelve a ejecutar:
python3 traducciones/scripts/validate.py traducciones/tmp/ja_{chunk_id:02d}.json
y cuando dé OK, concluye con finish.
"""

    return False

async def run():
    batches = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18],
    ]

    for b_idx, batch in enumerate(batches, 1):
        phase(f"Tanda {b_idx}: Bloques {batch[0]:02d} a {batch[-1]:02d}")
        log(f"Lanzando tanda {b_idx}: bloques {batch}")
        
        # Run in parallel
        results = await parallel(batch, translate_chunk)
        log(f"Fin de tanda {b_idx}. Resultados: {dict(zip(batch, results))}")

    # Check and retry any pending blocks
    pending = [cid for cid in range(1, 19) if not check_valid(cid)[0]]
    if pending:
        phase(f"Reintento final de {len(pending)} bloques pendientes")
        log(f"Bloques pendientes para reintento: {pending}")
        # En tandas de a lo sumo 4
        for i in range(0, len(pending), 4):
            subset = pending[i:i+4]
            await parallel(subset, translate_chunk)

    # Check overall results
    failed = [cid for cid in range(1, 19) if not check_valid(cid)[0]]
    if failed:
        log(f"ADVERTENCIA: Bloques que no pasaron validación tras reintentos: {failed}")
        print(f"FAILED: {failed}")
    else:
        log("¡Todos los bloques 01 a 18 han sido traducidos y validados con éxito!")
        print("ALL_OK")

await run()
