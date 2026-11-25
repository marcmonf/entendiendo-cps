#!/usr/bin/env python3
"""
batch_runner.py: Helper to prepare prompts and validate translated chunks.
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parent.parent.parent
GLOSSARY_PATH = REPO_ROOT / "traducciones" / "terminos-DE.md"
TMP_DIR = REPO_ROOT / "traducciones" / "tmp"
VALIDATE_SCRIPT = REPO_ROOT / "traducciones" / "scripts" / "validate.py"


def parse_glossary() -> dict[str, Any]:
    text = GLOSSARY_PATH.read_text(encoding="utf-8")
    concepts: dict[str, str] = {}
    cynefin: list[str] = []
    
    section = None
    for line in text.splitlines():
        line = line.strip()
        if line.startswith("#"):
            low = line.lower()
            if "cynefin" in low:
                section = "cynefin"
            elif "121" in low or "conceptos" in low:
                section = "concepts"
            else:
                section = None
            continue

        if not (line.startswith("|") and line.endswith("|")):
            continue

        cells = [c.strip() for c in line.strip("|").split("|")]
        if not cells or all(set(c) <= {"-", ":", " "} for c in cells):
            continue

        def clean(v: str) -> str:
            v = v.strip()
            if v.startswith("`") and v.endswith("`") and len(v) >= 2:
                v = v[1:-1].strip()
            return v

        first_clean = clean(cells[0]).lower()
        if first_clean in {"id", "slug", "es", "español", "dominio (es)", "tema (es)", "#"}:
            continue

        if section == "cynefin" and len(cells) >= 2:
            tr_dom = clean(cells[1])
            if tr_dom:
                cynefin.append(tr_dom)
        elif section == "concepts" and len(cells) >= 3:
            slug = clean(cells[0])
            term_de = clean(cells[2])
            if slug and term_de:
                concepts[slug] = term_de

    return {"concepts": concepts, "cynefin": cynefin}


def is_chunk_valid(chunk_id: str) -> bool:
    target = TMP_DIR / f"de_{chunk_id}.json"
    if not target.exists():
        return False
    res = subprocess.run(
        [sys.executable, str(VALIDATE_SCRIPT), str(target)],
        capture_output=True,
        text=True,
    )
    return res.returncode == 0


def build_prompt_for_chunk(chunk_id: str) -> str:
    glossary = parse_glossary()
    es_path = TMP_DIR / f"es_{chunk_id}.json"
    es_data = json.loads(es_path.read_text(encoding="utf-8"))
    chunk_concepts = list(es_data.get("concepts", {}).keys())

    terms_table = []
    for slug in chunk_concepts:
        term_de = glossary["concepts"].get(slug, slug)
        terms_table.append(f"- `{slug}` -> term exacto: **`{term_de}`**")

    cynefin_instructions = ""
    if "cynefin" in chunk_concepts:
        cynefin_instructions = """
### ¡ATENCIÓN: ESTE BLOQUE CONTIENE `cynefin`!
Los 5 dominios de Cynefin en `domains` deben ser EXACTAMENTE:
1. `Klar`
2. `Kompliziert`
3. `Komplex`
4. `Chaotisch`
5. `Verwirrt`
Traduce también el campo `text` de cada dominio al alemán manteniendo la estructura intacta.
"""

    prompt = f"""Traduce el archivo `traducciones/tmp/es_{chunk_id}.json` al alemán de Alemania (`de-DE`) y guarda el resultado en `traducciones/tmp/de_{chunk_id}.json`.

## Reglas obligatorias de estilo y terminología:
1. Lee `traducciones/terminos-DE.md` para interiorizar el estilo, tono, tipografía y expresiones de Javier G. Recuenco.
2. **PROHIBIDO TERMINANTEMENTE abrir o leer `public/locales/en.json`, `fr.json` ni `pt.json`.** Traduce única y directamente desde `traducciones/tmp/es_{chunk_id}.json`.
3. **Tratamiento (Tuteo coherente):** Usa siempre *du* (`du`, `dir`, `dich`, `dein`, imperativo informal como *Klicke*, *Schau*, *Frag dich*). Nunca uses *Sie* corporativo.
4. **Voz y tono:** Artesanal, directo, irónico, mordaz. Traduce con garra y naturalidad en alemán (*Mistlösungen* / *Scheißlösungen*, *heiße Luft verkaufen*, *die eigene Haut riskieren*).
5. **Nombres propios y marcas intocables:** Conserva intactos `El Turrero Post`, `Turra` (die Turra, die Turras), `CPSer`, `Personotecnia`, `Singular Solving`, `Solvers Academy`, `Javier G. Recuenco`.
6. **Tipografía alemana:** Comillas dobles alemanas `„…“`, comillas simples `‚…‘`, raya con espacios ` — `, porcentaje con espacio `15 %`, coma decimal `1,5`.
7. **NUNCA utilices signos españoles (`¿`, `¡`).**
8. **Estructura JSON estricta:**
   - Mismas claves y exactamente el mismo orden de claves que en `es_{chunk_id}.json`.
   - Mismas longitudes de arrays en `paragraphs`, `essay`, `keyInsights`, `threadExamples`, `reflectionQuestions`.
   - **`aliases`:** NO elimines ningún elemento del array `aliases`. Traduce los alias al alemán y mantén/añade siglas o términos útiles de búsqueda. Cada elemento debe ser un string no vacío.
   - Traduce `short`, `analogy`, `howToApply`, `antiPattern`, `paragraphs`, y dentro de `deepDive`: `thesis`, `essay`, `keyInsights`, `threadExamples` (`title` y `detail`), `reflectionQuestions`.
   - Traduce también `deepDive.quote.text` y `deepDive.quote.sourceTitle`.
   - Conserva los placeholders entre llaves intactos si hubiera (`{{count}}`, `{{term}}`, etc.).
9. **Términos EXACTOS obligatorios para este bloque:**
{chr(10).join(terms_table)}
{cynefin_instructions}

## Pasos para ejecutar:
1. Lee `traducciones/tmp/es_{chunk_id}.json`.
2. Escribe `traducciones/tmp/de_{chunk_id}.json` con codificación UTF-8 e indentación de 2 espacios.
3. Ejecuta en el terminal:
   `python3 traducciones/scripts/validate.py traducciones/tmp/de_{chunk_id}.json`
4. Si detecta cualquier error, corrígelo inmediatamente hasta que el comando devuelva salida con `OK: validación superada sin errores.` y código 0.
5. Cuando esté validado con éxito, llama a la herramienta `finish` con el texto "OK".
"""
    return prompt


if __name__ == "__main__":
    if len(sys.argv) > 1:
        cid = sys.argv[1].zfill(2)
        print(f"Checking chunk {cid}: valid = {is_chunk_valid(cid)}")
        print("\n--- SAMPLE PROMPT ---")
        print(build_prompt_for_chunk(cid)[:500])
    else:
        g = parse_glossary()
        print(f"Glossary loaded: {len(g['concepts'])} concepts, {len(g['cynefin'])} Cynefin domains.")
