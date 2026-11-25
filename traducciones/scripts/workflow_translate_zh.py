#!/usr/bin/env python3
"""
Workflow script to translate CPS Observatory concept chunks 01..18 to Simplified Chinese (zh-CN).
Orchestrates translation in 4 batches of 4-5 parallel agents.
"""

import json
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(".").resolve()
sys.path.insert(0, str(REPO_ROOT / "traducciones" / "scripts"))
from validate import parse_glossary

GLOSSARY_PATH = REPO_ROOT / "traducciones" / "terminos-ZH.md"
glossary = parse_glossary(GLOSSARY_PATH)

DIFFICULT_EXPRESSIONS = """
- Recoger cable -> 收线认错 / 放下身段及时改口 (virtud en CPS)
- Facciones lanares -> 羊群派系 / 盲从羊群
- Espiral del «¿pa qué?» -> “折腾啥呢”螺旋 / “说了又有什么用”的螺旋
- Soluciones de mierda -> 狗屎方案 / 稀烂方案 (nunca suavizar a 欠佳方案)
- Lijacantos -> 磨边匠 / 专扣边角料的细枝末节派
- Pompismo -> 浮华空想主义（Pompismo） / 空中楼阁式的清高
- Chavesnogalismo -> 查韦斯·诺加莱斯主义（Chavesnogalismo）
- Abrochador liminal -> 阈限扣合者 / 跨界扣合者
- Resolutivas invisibles -> 隐形解题女将 / 幕后实干女性
- Hijoputismo -> 混蛋行径 / 纯粹的恶毒 / 坏种心态
- Efecto cuñado / cuñado -> 懂王效应 / 饭桌懂王 / 半吊子懂王
- Vender humo / humo -> 卖空气 / 画大饼 / 吹泡泡
- Jugarse el pellejo -> 押上身家 / 自己下场担责 (Skin in the Game)
- Las canicas ruedan hacia la pendiente -> 弹珠永远往低处滚 / 顺着真实的坡度走
- Pantomima (corporativa) -> （职场）哑剧 / 心照不宣的演戏
- Huevos de serpiente -> 蛇蛋隐患 / 埋下的定时炸弹
- Vaca esférica -> 球形奶牛
- Elefante negro -> 黑象 (cruce entre elefante en la habitación y cisne negro)
- Cultura luterana / optimización luterana -> 路德式文化 / 路德式优化
- Guarnición (vs. plato principal) -> 配菜（而非主菜）
- Saveur du jour -> 当季热词 / 一时风尚（Saveur du jour）
- Entropía metastásica -> 转移性熵增 / 癌变式失序
- Comulgar con ruedas de molino -> 照单全收荒唐话 / 连鬼话都信
- A pecho descubierto -> 赤膊上阵 / 毫无遮掩地直面
- Desierto tipo Sierra -> 雪乐山式无尽沙漠
- No comprarle todo el pescado a nadie -> 别把任何人的鱼全盘买下
- Pensamiento mágico -> 魔幻思维 / 一厢情愿的幻想
- Buenismo -> 圣母心 / 廉价道德感
- Zelote -> 狂热信徒 / 教条狂热分子
- Cienciarte -> 科艺融合（Cienciarte）
- Turra / dar la turra -> turra / 写长帖唠叨（dar la turra）
- Terreno de juego / tablero -> 赛场 / 棋盘
"""

def check_valid(chunk_id: int) -> tuple[bool, str]:
    path = REPO_ROOT / f"traducciones/tmp/zh_{chunk_id:02d}.json"
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
    zh_file = REPO_ROOT / f"traducciones/tmp/zh_{chunk_id:02d}.json"
    
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
["清晰域", "繁杂域", "复杂域", "混乱域", "困惑域"]
"""

    prompt = f"""Traduce el archivo `{es_file}` al chino simplificado (`zh-CN`) y guárdalo en `{zh_file}`.

REGLAS DE ORO OBLIGATORIAS:
1. PROHIBIDO abrir `public/locales/en.json`, `fr.json`, `de.json` ni `pt.json`. Traduce directamente desde `traducciones/tmp/es_{chunk_id:02d}.json`.
2. GLOSARIO CERRADO PARA ESTE BLOQUE:
{chr(10).join(concept_terms_list)}
{cynefin_instructions}
El campo `term` de cada concepto DEBE coincidir carácter por carácter con la tabla anterior.

3. TRATAMIENTO:
Usa siempre `你` (`你`, `你的`, `你们`). NUNCA uses `您`.

4. ESTILO Y VOZ:
- Prosa viva, punzante y natural en chino simplificado (estilo 深度专栏 / 科技商业评论). Evita a toda costa la traducción calco (翻译腔) y la jerga vacía de grandes tecnológicas (大厂黑话).
- Voz de Javier G. Recuenco: mordaz, directo, irónico, cercano y artesanal. Mantén el vigor expresivo cuando use registro crudo o humor callejero (狗屎方案, 卖空气 / 画大饼, 押上身家, 纯属混蛋行径).
- Conserva sin traducir: `turra`, `El Turrero Post`, `CPSer`, `PersonotecnIA`, `Singular Solving`, `Solvers Academy`, `Javier G. Recuenco`, `CPS`, `Cynefin`, `KPI`, `PowerPoint` / `PPT`, `AI`.
- Expresiones difíciles de Recuenco:
{DIFFICULT_EXPRESSIONS}

5. PUNTUACIÓN Y TIPOGRAFÍA CHINO SIMPLIFICADO (zh-CN):
- Comillas dobles chinas curvas: `“…”` (nunca `«…»` ni comillas rectas `"` en el texto; `“…”` no necesita escape en JSON). Comillas simples internas: `‘…’`.
- Títulos de libros, series, películas y videojuegos: `《…》` (ej. `《国王密使 V》`, `《豪斯医生》`).
- Puntuación de ancho completo: `，。：；！？（）` y coma enumerativa `、`.
- Guion largo chino `——`, puntos suspensivos `……`.
- Espaciado chino-latino (盘古之白): deja un espacio entre caracteres chinos y palabras/números latinos (`CPS 方法`, `263 篇 turra`), pero sin espacios junto a signos de puntuación chinos.
- NUNCA dejes signos españoles (`¿`, `¡`).

6. ESTRUCTURA JSON Y FORMATO:
- Conserva exactamente las mismas claves y en el mismo orden exacto que en `es_{chunk_id:02d}.json`.
- Mismas longitudes de arrays (`paragraphs`, `essay`, `keyInsights`, `threadExamples`, `reflectionQuestions`, `domains`).
- En `aliases`: NO elimines ningún elemento. Traduce los aliases al chino y conserva/añade variantes útiles de búsqueda en chino/inglés/español.
- Traduce también `deepDive.quote.text` y `deepDive.quote.sourceTitle`.
- Conserva intactos los placeholders `{{count}}`, `{{term}}`, etc. si los hubiera.

7. PROCEDIMIENTO DE EJECUCIÓN:
1. Lee `traducciones/tmp/es_{chunk_id:02d}.json`.
2. Escribe `traducciones/tmp/zh_{chunk_id:02d}.json` con la traducción completa usando `write_file`.
3. Ejecuta con `run_command`:
   `python3 traducciones/scripts/validate.py traducciones/tmp/zh_{chunk_id:02d}.json`
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
                role=f"Traductor ZH bloque {chunk_id:02d}",
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
            prompt = f"""El bloque `traducciones/tmp/zh_{chunk_id:02d}.json` tiene errores de validación.
Salida de validate.py:
{val_msg}

Por favor, lee `traducciones/tmp/zh_{chunk_id:02d}.json` y `traducciones/tmp/es_{chunk_id:02d}.json`, corrige los errores reportados, vuelve a ejecutar:
python3 traducciones/scripts/validate.py traducciones/tmp/zh_{chunk_id:02d}.json
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
