#!/usr/bin/env python3
"""
Fusiona <lang>_00.json .. <lang>_18.json en public/locales/<lang>.json,
validando la estructura completa contra:
  1. traducciones/tmp/es_source.json
  2. public/locales/en.json
  3. 100 % de los 121 términos, 9 familias, 15 temas y 5 dominios Cynefin en traducciones/terminos-<LANG>.md

Uso:
  python3 traducciones/scripts/merge.py de
  python3 traducciones/scripts/merge.py de --dir traducciones/tmp --zero traducciones/de_00.json
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent.parent
sys.path.insert(0, str(SCRIPT_DIR))

from validate import parse_glossary, validate_pair  # noqa: E402


def compare_structure_with_en(merged: dict[str, Any], en_data: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    if set(merged.keys()) != set(en_data.keys()):
        errors.append(
            f"[vs en.json] Claves de nivel raíz distintas: merged={sorted(merged.keys())} vs en={sorted(en_data.keys())}"
        )
        return errors

    for section in ("ui", "routes", "pillars", "themes", "problems", "families", "concepts"):
        m_keys = set(merged[section].keys())
        e_keys = set(en_data[section].keys())
        if m_keys != e_keys:
            missing = sorted(e_keys - m_keys)
            extra = sorted(m_keys - e_keys)
            errors.append(
                f"[vs en.json:{section}] Diferencia de claves: faltan={missing[:10]}, sobran={extra[:10]}"
            )

    for section in ("attractors", "tourDesktop", "tourMobile"):
        if len(merged[section]) != len(en_data[section]):
            errors.append(
                f"[vs en.json:{section}] Longitud distinta: merged={len(merged[section])} vs en={len(en_data[section])}"
            )

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description="Fusiona los bloques 00..18 en public/locales/<lang>.json.")
    parser.add_argument("lang", help="Código de idioma destino (ej. de, ja, zh).")
    parser.add_argument("--dir", dest="chunks_dir", default="traducciones/tmp", help="Carpeta con <lang>_01..18.json.")
    parser.add_argument("--zero", dest="zero_file", help="Ruta explícita a <lang>_00.json.")
    parser.add_argument("--glossary", dest="glossary_file", help="Ruta al glosario terminos-<LANG>.md.")
    parser.add_argument("--chunks", type=int, default=18, help="Número de bloques de conceptos (por defecto 18).")
    parser.add_argument("--out", dest="out_file", help="Ruta de salida (por defecto public/locales/<lang>.json).")
    args = parser.parse_args()

    lang = args.lang.lower()
    chunks_dir = (REPO_ROOT / args.chunks_dir).resolve()
    es_source_path = REPO_ROOT / "traducciones" / "tmp" / "es_source.json"
    en_path = REPO_ROOT / "public" / "locales" / "en.json"
    out_path = Path(args.out_file) if args.out_file else (REPO_ROOT / "public" / "locales" / f"{lang}.json")

    if not es_source_path.exists():
        print(
            f"ERROR: No existe {es_source_path}. Ejecuta primero: node traducciones/scripts/extract_and_split.mjs",
            file=sys.stderr,
        )
        return 1

    # Localizar <lang>_00.json
    if args.zero_file:
        zero_path = Path(args.zero_file)
    else:
        candidates = [
            REPO_ROOT / "traducciones" / f"{lang}_00.json",
            chunks_dir / f"{lang}_00.json",
        ]
        zero_path = next((c for c in candidates if c.exists()), candidates[0])

    if not zero_path.exists():
        print(f"ERROR: No se encontró el bloque 00 en {zero_path}", file=sys.stderr)
        return 1

    glossary_path = (
        Path(args.glossary_file)
        if args.glossary_file
        else (REPO_ROOT / "traducciones" / f"terminos-{lang.upper()}.md")
    )
    if not glossary_path.exists():
        print(f"ERROR: No existe el glosario {glossary_path}", file=sys.stderr)
        return 1

    es_source = json.loads(es_source_path.read_text(encoding="utf-8"))
    en_data = json.loads(en_path.read_text(encoding="utf-8"))
    glossary = parse_glossary(glossary_path)

    # Verificar que el glosario cubre los 121 conceptos, 9 familias, 15 temas y 5 dominios
    es_slugs = set(es_source["concepts"].keys())
    gl_slugs = set(glossary["concepts"].keys())
    if gl_slugs != es_slugs:
        missing_gl = sorted(es_slugs - gl_slugs)
        extra_gl = sorted(gl_slugs - es_slugs)
        print(
            f"ERROR: El glosario {glossary_path.name} no cubre exactamente los 121 conceptos "
            f"(faltan={len(missing_gl)}: {missing_gl[:5]}, sobran={len(extra_gl)}: {extra_gl[:5]}).",
            file=sys.stderr,
        )
        return 1

    # Cargar bloque 00
    merged: dict[str, Any] = json.loads(zero_path.read_text(encoding="utf-8"))
    merged["lang"] = lang

    # Cargar y unir bloques 01..18
    all_concepts: dict[str, Any] = {}
    for i in range(1, args.chunks + 1):
        idx = f"{i:02d}"
        chunk_path = chunks_dir / f"{lang}_{idx}.json"
        if not chunk_path.exists():
            print(f"ERROR: Falta el bloque {chunk_path}", file=sys.stderr)
            return 1
        try:
            chunk = json.loads(chunk_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            print(f"ERROR: JSON inválido en {chunk_path}: {exc}", file=sys.stderr)
            return 1
        if "concepts" not in chunk or not isinstance(chunk["concepts"], dict):
            print(f"ERROR: {chunk_path} no tiene objeto raíz 'concepts'.", file=sys.stderr)
            return 1
        for slug, cobj in chunk["concepts"].items():
            if slug in all_concepts:
                print(f"ERROR: Concepto duplicado '{slug}' en {chunk_path}", file=sys.stderr)
                return 1
            all_concepts[slug] = cobj

    # Ordenar conceptos exactamente como en es_source.json
    ordered_concepts: dict[str, Any] = {}
    for slug in es_source["concepts"].keys():
        if slug in all_concepts:
            ordered_concepts[slug] = all_concepts[slug]
    for slug in all_concepts:
        if slug not in ordered_concepts:
            ordered_concepts[slug] = all_concepts[slug]
    merged["concepts"] = ordered_concepts

    # Validar completo contra es_source.json + glosario
    errors, warnings, checked = validate_pair(es_source, merged, lang, glossary)
    errors.extend(compare_structure_with_en(merged, en_data))

    print(
        f"Merge {lang.upper()}: {len(ordered_concepts)} conceptos, "
        f"{len(merged.get('ui', {}))} cadenas UI, {checked} comprobaciones de glosario."
    )
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

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(merged, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"  OK: generado {out_path.relative_to(REPO_ROOT)} ({out_path.stat().st_size:,} bytes).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
