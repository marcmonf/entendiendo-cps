# Observatorio CPS · Atlas Conceptual de El Turrero Post

Mapa conceptual interactivo del universo **Complex Problem Solving (CPS)** de Javier G. Recuenco y la Comunidad CPS, basado en el archivo público de [El Turrero Post](https://turrero.vercel.app/).

## Ejecutar en local

```bash
npm install
npm run dev
```

## Subir a GitHub Pages (gratis) y conectar tu propio dominio

1. **Crea un repositorio en GitHub** (por ejemplo, `turrero-cps-atlas`) y sube este proyecto:
   ```bash
   git init
   git add .
   git commit -m "Primer despliegue del Observatorio CPS"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/turrero-cps-atlas.git
   git push -u origin main
   ```
2. **Activa GitHub Pages**:
   - Entra en tu repositorio → **Settings** → **Pages**.
   - En **Source**, selecciona **GitHub Actions**.
   - El workflow incluido en `.github/workflows/deploy.yml` compilará y publicará la web automáticamente en cada `git push`.
3. **Conectar un dominio propio** (opcional):
   - Compra el dominio en tu registrador favorito (Cloudflare, Namecheap, Porkbun, etc.).
   - En **Settings → Pages → Custom domain**, escribe tu dominio (ej. `atlascps.com`) y guarda.
   - En los DNS de tu dominio añade los 4 registros `A` oficiales de GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) o un registro `CNAME` si usas subdominio (`www` → `TU_USUARIO.github.io`).
   - Activa **Enforce HTTPS** cuando GitHub verifique el DNS.
   - Si quieres que el dominio persista entre builds de Vite, crea un archivo `public/CNAME` que contenga únicamente tu dominio (ej. `atlascps.com`).
