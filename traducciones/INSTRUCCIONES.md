# Manual maestro de traducción — Observatorio CPS

Este manual define el procedimiento exacto para traducir el Observatorio CPS a cualquier idioma (`de`, `ja`, `zh`, etc.) de forma reproducible, rápida y con mínimo consumo de contexto (optimizado para modelos ligeros como Flash en tandas paralelas).

---

## Reglas de oro (leer antes de empezar)

1. **PROHIBIDO abrir `public/locales/en.json`, `fr.json` o `pt.json`.** Ocupan ~800 KB cada uno y desperdician la ventana de contexto. Traduce siempre directamente desde los fragmentos pequeños `traducciones/tmp/es_XX.json` usando únicamente `traducciones/terminos-<LANG>.md`.
2. **Respeta el glosario al 100 %.** Los nombres de los **121 conceptos**, las **9 familias** (`name` y `shortName`), los **15 temas** y los **5 dominios Cynefin** deben coincidir carácter por carácter con `traducciones/terminos-<LANG>.md`.
3. **No alteres nunca la estructura JSON:** mismas claves, mismo orden de claves, mismas longitudes de arrays (`paragraphs`, `essay`, `keyInsights`, `threadExamples`, `reflectionQuestions`, `domains`).
4. **No elimines `aliases`:** conserva al menos el mismo número de elementos en `aliases` (tradúcelos y/o añade variantes útiles de búsqueda).
5. **Placeholders intactos:** no traduzcas ni cambies los nombres entre llaves (`{count}`, `{done}`, `{total}`, `{action}`, `{current}`, `{term}`, `{visible}`, `{query}`).
6. **Valida cada bloque inmediatamente:** ningún bloque se da por terminado hasta que `validate.py` devuelva `OK` con código de salida `0`.

---

## Paso 1: Preparar contexto y extraer/trocear el español

1. Lee completo el glosario del idioma destino:
   - `traducciones/terminos-<LANG>.md` (por ejemplo `traducciones/terminos-DE.md`).
2. Ejecuta el extractor para generar `traducciones/tmp/es_source.json`, `es_00.json` y `es_01.json`..`es_18.json`:

```bash
node traducciones/scripts/extract_and_split.mjs
```

3. Comprueba si ya existe el bloque `00` pre-traducido en `traducciones/<lang>_00.json` (para alemán ya está listo en `traducciones/de_00.json`):
   - Si existe, valídalo con:
     ```bash
     python3 traducciones/scripts/validate.py traducciones/<lang>_00.json
     ```
   - Si no existe todavía (p. ej. `ja` o `zh`), tradúcelo primero a `traducciones/<lang>_00.json` cuidando que los fragmentos concatenados de la UI (`onboardingWhisper*`, `coreIntro*`, `coreCredit*`, `hoverClickToToggle`) formen frases naturales y que los botones/pestañas sean breves, y valídalo con `validate.py`.

---

## Paso 2: Traducir los bloques `01`..`18` en tandas paralelas

Los 121 conceptos están repartidos en 18 bloques ligeros (`es_01.json`..`es_18.json`, 6–7 conceptos cada uno).

Lanza **tandas paralelas de 4–5 subagentes** (p. ej. `01..05`, `06..10`, `11..15`, `16..18`) para completar todo rápidamente sin saturar contexto:

- **Tanda 1:** `es_01.json` .. `es_05.json` → `traducciones/tmp/<lang>_01.json` .. `<lang>_05.json`
- **Tanda 2:** `es_06.json` .. `es_10.json` → `traducciones/tmp/<lang>_06.json` .. `<lang>_10.json`
- **Tanda 3:** `es_11.json` .. `es_15.json` → `traducciones/tmp/<lang>_11.json` .. `<lang>_15.json`
- **Tanda 4:** `es_16.json` .. `es_18.json` → `traducciones/tmp/<lang>_16.json` .. `<lang>_18.json`

### Plantilla de prompt para cada subagente

> Traduce `traducciones/tmp/es_XX.json` al idioma `<LANG>` y guarda el resultado en `traducciones/tmp/<lang>_XX.json`.
>
> Reglas obligatorias:
> 1. Lee `traducciones/terminos-<LANG>.md` y aplica todas sus reglas de estilo, tono, tipografía y expresiones difíciles.
> 2. NO abras `public/locales/en.json`, `fr.json` ni `pt.json`.
> 3. Usa los `term` exactos de la tabla de 121 conceptos de `terminos-<LANG>.md` (y los 5 dominios Cynefin exactos si el bloque contiene `cynefin`).
> 4. Mantén exactamente las mismas claves, orden de claves y número de elementos en listas. No borres ningún elemento de `aliases`.
> 5. Traduce también `deepDive.quote.text` y `deepDive.quote.sourceTitle`.
> 6. Al terminar de escribir `traducciones/tmp/<lang>_XX.json`, ejecuta:
>    `python3 traducciones/scripts/validate.py traducciones/tmp/<lang>_XX.json`
>    y corrige cualquier error hasta obtener `OK: validación superada sin errores.`

---

## Paso 3: Validar todos los bloques

Al finalizar las tandas, verifica todos los bloques de golpe (incluyendo `00`):

```bash
python3 traducciones/scripts/validate.py traducciones/<lang>_00.json && \
for i in $(seq -w 1 18); do
  python3 traducciones/scripts/validate.py traducciones/tmp/<lang>_${i}.json || exit 1
done
```

Si algún bloque falla, corrígelo y vuelve a validarlo antes de fusionar.

---

## Paso 4: Fusionar y validar el paquete final

Ejecuta `merge.py` para unir `<lang>_00.json`..`<lang>_18.json`, comprobar estructura completa contra `es_source.json` y `public/locales/en.json`, verificar el 100 % de los 121 términos del glosario y escribir `public/locales/<lang>.json`:

```bash
python3 traducciones/scripts/merge.py <lang>
```

Ejemplo para alemán:

```bash
python3 traducciones/scripts/merge.py de
```

---

## Paso 5: Activar el idioma en la app y verificar build

1. Abre `src/i18n/types.ts` y cambia `ready: false` a `ready: true` en la entrada del idioma correspondiente dentro de `SUPPORTED_LANGUAGES`:
   ```ts
   { code: 'de', shortLabel: 'DE', nativeName: 'Deutsch', ready: true },
   ```
2. Comprueba que TypeScript y Vite compilan sin errores:
   ```bash
   npm run build
   ```
3. Verifica con `git status` que no haya archivos temporales rastreados (`traducciones/tmp/` está en `.gitignore`) y que los únicos cambios de producción sean `public/locales/<lang>.json` y `src/i18n/types.ts`.
