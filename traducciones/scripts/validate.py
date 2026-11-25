#!/usr/bin/env python3
"""
Valida un fragmento traducido (<lang>_XX.json) contra su origen en español (es_XX.json)
y contra el glosario cerrado (traducciones/terminos-<LANG>.md).

Comprobaciones:
  1. JSON válido (UTF-8).
  2. Mismas claves y mismo orden exacto en todos los objetos (recursivo).
  3. Mismas longitudes de arrays (salvo `aliases`, que no puede perder elementos).
  4. Placeholders {count}, {term}, {current}, {total}, etc. intactos.
  5. Sin eliminar `aliases` (len(tr) >= len(es), sin cadenas vacías).
  6. Dominios Cynefin exactos (los 5 dominios en orden).
  7. Sin textos sin traducir (igualdad exacta en textos >= 25 chars, o signos ¿ ¡).
  8. Ratio de longitud razonable respecto al español.
  9. Chequeo estricto de términos del glosario (121 conceptos, 9 familias, 15 temas, 5 dominios Cynefin).

Uso:
  python3 traducciones/scripts/validate.py traducciones/de_00.json
  python3 traducciones/scripts/validate.py traducciones/tmp/de_05.json
  python3 traducciones/scripts/validate.py <tr.json> [--es <es.json>] [--glossary <terminos-XX.md>] [--lang de]
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parent.parent.parent
PLACEHOLDER_RE = re.compile(r"\{[a-zA-Z0-9_]+\}")
CJK_LANGS = {"ja", "zh", "ko"}

# Claves estructurales que NO deben traducirse ni marcarse como sin traducir
STRUCTURAL_KEYS = {"id", "target", "lang"}


def parse_glossary(glossary_path: Path | None) -> dict[str, Any]:
    """
    Parsea traducciones/terminos-<LANG>.md buscando las tablas cerradas:
      - families: { id: {"name": ..., "shortName": ...} }
      - themes: { es_theme: tr_theme }
      - cynefin: [domain1, domain2, domain3, domain4, domain5]
      - concepts: { slug: tr_term }
    """
    result: dict[str, Any] = {
        "families": {},
        "themes": {},
        "cynefin": [],
        "concepts": {},
    }
    if not glossary_path or not glossary_path.exists():
        return result

    section = None
    for raw_line in glossary_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if line.startswith("#"):
            low = line.lower()
            if "familias" in low or "constelaciones" in low:
                section = "families"
            elif "temas" in low or "temáticas" in low:
                section = "themes"
            elif "cynefin" in low:
                section = "cynefin"
            elif "121" in low or "conceptos" in low:
                section = "concepts"
            else:
                section = None
            continue

        if not line.startswith("|") or not line.endswith("|"):
            continue

        cells = [c.strip() for c in line.strip("|").split("|")]
        # Saltar cabeceras y separadores
        if not cells or all(set(c) <= {"-", ":", " "} for c in cells):
            continue
        first_clean = cells[0].strip("` ").lower()
        if first_clean in {"id", "slug", "es", "español", "dominio (es)", "tema (es)", "#"}:
            continue

        def clean(val: str) -> str:
            val = val.strip()
            if val.startswith("`") and val.endswith("`") and len(val) >= 2:
                val = val[1:-1].strip()
            return val

        if section == "families" and len(cells) >= 4:
            # | id | Nombre (ES) | Nombre (DE) | Nombre corto (DE) |
            # o | id | Nombre (ES) | Corto (ES) | Nombre (DE) | Corto (DE) |
            fid = clean(cells[0])
            if len(cells) >= 5:
                result["families"][fid] = {
                    "name": clean(cells[3]),
                    "shortName": clean(cells[4]),
                }
            else:
                result["families"][fid] = {
                    "name": clean(cells[2]),
                    "shortName": clean(cells[3]),
                }
        elif section == "themes" and len(cells) >= 2:
            # | Tema (ES) | Tema (DE) |
            es_theme = clean(cells[0])
            tr_theme = clean(cells[1])
            if es_theme and tr_theme:
                result["themes"][es_theme] = tr_theme
        elif section == "cynefin" and len(cells) >= 2:
            # | Dominio (ES) | Dominio (DE) | ...
            tr_dom = clean(cells[1])
            if tr_dom:
                result["cynefin"].append(tr_dom)
        elif section == "concepts" and len(cells) >= 3:
            # | slug | Término (ES) | Término (DE) |
            slug = clean(cells[0])
            tr_term = clean(cells[2])
            if slug and tr_term:
                result["concepts"][slug] = tr_term

    return result


def infer_meta(tr_path: Path) -> tuple[str | None, str | None]:
    """Infiere (lang, block_id) desde nombres como de_00.json o ja_12.json."""
    m = re.match(r"^([a-z]{2})_(\d{2})\.json$", tr_path.name)
    if m:
        return m.group(1), m.group(2)
    return None, None


def validate_node(
    es: Any,
    tr: Any,
    path: str,
    lang: str,
    errors: list[str],
    warnings: list[str],
) -> None:
    if type(es) is not type(tr):
        # Permitir None solo si es None
        errors.append(f"[{path}] Tipo distinto: ES={type(es).__name__}, {lang.upper()}={type(tr).__name__}")
        return

    if isinstance(es, dict):
        es_keys = list(es.keys())
        tr_keys = list(tr.keys())
        if set(es_keys) != set(tr_keys):
            missing = [k for k in es_keys if k not in tr]
            extra = [k for k in tr_keys if k not in es]
            if missing:
                errors.append(f"[{path}] Claves faltantes: {missing}")
            if extra:
                errors.append(f"[{path}] Claves sobrantes: {extra}")
        elif es_keys != tr_keys:
            errors.append(f"[{path}] Orden de claves distinto al origen ES.")
        for k in es_keys:
            if k in tr:
                child_path = f"{path}.{k}" if path else k
                validate_node(es[k], tr[k], child_path, lang, errors, warnings)
        return

    if isinstance(es, list):
        is_aliases = path.endswith(".aliases")
        if is_aliases:
            if len(tr) < len(es):
                errors.append(
                    f"[{path}] Se eliminaron aliases: ES tiene {len(es)}, {lang.upper()} tiene {len(tr)}."
                )
            for idx, item in enumerate(tr):
                if not isinstance(item, str) or not item.strip():
                    errors.append(f"[{path}[{idx}]] Alias vacío o no string.")
            return

        if len(es) != len(tr):
            errors.append(
                f"[{path}] Longitud de lista distinta: ES={len(es)}, {lang.upper()}={len(tr)}."
            )
            return
        for idx, (e_item, t_item) in enumerate(zip(es, tr)):
            validate_node(e_item, t_item, f"{path}[{idx}]", lang, errors, warnings)
        return

    if isinstance(es, str):
        key_name = path.split(".")[-1]

        # Campo lang
        if path == "lang":
            if lang and tr != lang:
                errors.append(f"[lang] Debe ser '{lang}', pero es '{tr}'.")
            return

        # Campos estructurales invariantes (id, target)
        if key_name in STRUCTURAL_KEYS:
            if tr != es:
                errors.append(f"[{path}] Campo estructural alterado: ES='{es}' vs {lang.upper()}='{tr}'.")
            return

        # sourcesOriginalSpanishNote: vacío en ES, debe tener aviso en otros idiomas
        if path == "ui.sourcesOriginalSpanishNote":
            if lang != "es" and not tr.strip():
                errors.append(
                    f"[{path}] Debe incluir nota indicando que las turras originales están en español."
                )
            return

        # Cadenas vacías
        if es.strip() and not tr.strip():
            errors.append(f"[{path}] Cadena vacía donde ES tiene contenido.")
            return

        # Placeholders intactos
        es_ph = Counter(PLACEHOLDER_RE.findall(es))
        tr_ph = Counter(PLACEHOLDER_RE.findall(tr))
        if es_ph != tr_ph:
            errors.append(
                f"[{path}] Placeholders alterados: ES={dict(es_ph)} vs {lang.upper()}={dict(tr_ph)}."
            )

        # Signos españoles invertidos en idiomas no españoles
        if lang != "es" and ("¿" in tr or "¡" in tr):
            errors.append(f"[{path}] Contiene puntuación española ('¿' o '¡'): {tr[:80]!r}")

        # Texto idéntico sin traducir en cadenas largas (>= 25 chars)
        if lang != "es" and len(es.strip()) >= 25 and tr.strip() == es.strip():
            errors.append(f"[{path}] Texto idéntico al español (sin traducir): {tr[:80]!r}")

        # Ratio de longitud razonable (para textos >= 30 chars)
        if len(es.strip()) >= 30:
            ratio = len(tr.strip()) / max(len(es.strip()), 1)
            if lang in CJK_LANGS:
                err_low, warn_low, warn_high, err_high = 0.12, 0.20, 1.8, 2.5
            else:
                err_low, warn_low, warn_high, err_high = 0.35, 0.50, 2.1, 2.6

            if ratio < err_low or ratio > err_high:
                errors.append(
                    f"[{path}] Ratio de longitud extremo ({ratio:.2f}x; ES={len(es)}, {lang.upper()}={len(tr)})."
                )
            elif ratio < warn_low or ratio > warn_high:
                warnings.append(
                    f"[{path}] Ratio de longitud inusual ({ratio:.2f}x; ES={len(es)}, {lang.upper()}={len(tr)})."
                )


def validate_glossary(
    tr: dict[str, Any],
    glossary: dict[str, Any],
    errors: list[str],
) -> int:
    """Valida los términos del glosario presentes en `tr`. Devuelve nº de comprobaciones."""
    checked = 0

    # Familias (bloque 00 o completo)
    if "families" in tr and glossary["families"]:
        for fid, fobj in tr["families"].items():
            if fid in glossary["families"]:
                exp = glossary["families"][fid]
                checked += 2
                if fobj.get("name") != exp["name"]:
                    errors.append(
                        f"[families.{fid}.name] Glosario exige {exp['name']!r}, encontrado {fobj.get('name')!r}."
                    )
                if fobj.get("shortName") != exp["shortName"]:
                    errors.append(
                        f"[families.{fid}.shortName] Glosario exige {exp['shortName']!r}, encontrado {fobj.get('shortName')!r}."
                    )

    # 15 temas (bloque 00 o completo)
    if "themes" in tr and glossary["themes"]:
        for es_th, tr_th in tr["themes"].items():
            if es_th in glossary["themes"]:
                checked += 1
                exp = glossary["themes"][es_th]
                if tr_th != exp:
                    errors.append(
                        f"[themes.{es_th}] Glosario exige {exp!r}, encontrado {tr_th!r}."
                    )

    # Conceptos + Cynefin (bloques 01..18 o completo)
    if "concepts" in tr:
        for slug, cobj in tr["concepts"].items():
            if slug in glossary["concepts"]:
                checked += 1
                exp_term = glossary["concepts"][slug]
                if cobj.get("term") != exp_term:
                    errors.append(
                        f"[concepts.{slug}.term] Glosario exige {exp_term!r}, encontrado {cobj.get('term')!r}."
                    )
            if slug == "cynefin":
                domains = cobj.get("domains")
                if not isinstance(domains, list) or len(domains) != 5:
                    errors.append("[concepts.cynefin.domains] Debe contener exactamente 5 dominios.")
                elif glossary["cynefin"] and len(glossary["cynefin"]) == 5:
                    for idx, (dom, exp_name) in enumerate(zip(domains, glossary["cynefin"])):
                        checked += 1
                        if dom.get("name") != exp_name:
                            errors.append(
                                f"[concepts.cynefin.domains[{idx}].name] Glosario exige {exp_name!r}, encontrado {dom.get('name')!r}."
                            )

    return checked


def validate_pair(
    es_data: dict[str, Any],
    tr_data: dict[str, Any],
    lang: str,
    glossary: dict[str, Any],
) -> tuple[list[str], list[str], int]:
    errors: list[str] = []
    warnings: list[str] = []
    validate_node(es_data, tr_data, "", lang, errors, warnings)
    checked = validate_glossary(tr_data, glossary, errors)
    return errors, warnings, checked


def main() -> int:
    parser = argparse.ArgumentParser(description="Valida un fragmento traducido contra es_XX.json y el glosario.")
    parser.add_argument("translated_file", help="Ruta al archivo <lang>_XX.json a validar.")
    parser.add_argument("--es", dest="es_file", help="Ruta al archivo origen es_XX.json.")
    parser.add_argument("--glossary", dest="glossary_file", help="Ruta al glosario terminos-<LANG>.md.")
    parser.add_argument("--lang", dest="lang", help="Código de idioma destino (ej. de, ja, zh).")
    args = parser.parse_args()

    tr_path = Path(args.translated_file)
    if not tr_path.exists():
        print(f"ERROR: No existe el archivo {tr_path}", file=sys.stderr)
        return 1

    inferred_lang, block_id = infer_meta(tr_path)
    lang = args.lang or inferred_lang or ""

    if args.es_file:
        es_path = Path(args.es_file)
    elif block_id:
        es_path = REPO_ROOT / "traducciones" / "tmp" / f"es_{block_id}.json"
    else:
        es_path = REPO_ROOT / "traducciones" / "tmp" / "es_source.json"

    if not es_path.exists():
        print(
            f"ERROR: No existe el origen {es_path}. Ejecuta primero: node traducciones/scripts/extract_and_split.mjs",
            file=sys.stderr,
        )
        return 1

    if args.glossary_file:
        glossary_path = Path(args.glossary_file)
    elif lang:
        candidate = REPO_ROOT / "traducciones" / f"terminos-{lang.upper()}.md"
        glossary_path = candidate if candidate.exists() else None
    else:
        glossary_path = None

    try:
        es_data = json.loads(es_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"ERROR: JSON inválido en origen {es_path}: {exc}", file=sys.stderr)
        return 1

    try:
        tr_data = json.loads(tr_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"ERROR: JSON inválido en {tr_path}: {exc}", file=sys.stderr)
        return 1

    glossary = parse_glossary(glossary_path)
    errors, warnings, checked = validate_pair(es_data, tr_data, lang, glossary)

    print(f"Validando {tr_path} contra {es_path}" + (f" (glosario: {glossary_path.name}, {checked} checks)" if glossary_path else ""))
    if warnings:
        print(f"  ADVERTENCIAS ({len(warnings)}):")
        for w in warnings[:20]:
            print(f"    - {w}")
        if len(warnings) > 20:
            print(f"    ... y {len(warnings) - 20} advertencias más.")

    if errors:
        print(f"  ERRORES ({len(errors)}):")
        for e in errors[:40]:
            print(f"    - {e}")
        if len(errors) > 40:
            print(f"    ... y {len(errors) - 40} errores más.")
        return 1

    print("  OK: validación superada sin errores.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
