# NewsWeb

Aplicación web de noticias desarrollada con **Angular 22** (componentes standalone, signals y la nueva sintaxis de control de flujo `@if` / `@for`). Incluye página de inicio, listado de noticias, detalle de artículo, favoritos y formulario de contacto, con diseño responsive.

## Funcionalidades

- **Inicio:** banner y noticias destacadas.
- **Noticias:** listado completo; el botón "Ver favoritos" filtra (`/noticias?favoritos=1`).
- **Detalle:** artículo por parámetro de ruta (`/detalle/:id`), tiempo de lectura calculado, favoritos y compartir en redes.
- **Favoritos:** se guardan en `localStorage` y se actualizan en todas las vistas.
- **Contacto:** formulario con validación (`required`, `email`) y mensaje de confirmación.

## Conceptos de Angular aplicados

| Concepto | Dónde |
| --- | --- |
| Componentes standalone | `components/`, `pages/` |
| Componente reutilizable con `input()` / `output()` | `components/news-card` |
| Interpolación `{{ }}` y property binding `[src]`, `[routerLink]` | tarjetas y detalle |
| Event binding `(click)`, `(ngSubmit)` | favoritos, compartir, contacto |
| Two-way binding `[(ngModel)]` | `pages/contacto` |
| Class / attribute binding `[class.is-active]`, `[attr.aria-pressed]` | favoritos |
| Control de flujo `@if`, `@for` | todas las páginas |
| Servicio inyectable + signals | `services/noticias.service.ts` |
| Enrutamiento con parámetros y query params | `app.routes.ts`, `pages/noticias`, `pages/detalle` |

## Estructura

```text
src/app/
  components/      header y news-card (reutilizables)
  pages/           inicio, noticias, detalle, contacto
  data/            modelo Noticia y datos
  services/        NoticiasService (datos, favoritos, tiempo de lectura)
  app.routes.ts    tabla de rutas
scripts/copy-404.mjs   genera 404.html tras compilar (fallback de rutas en GitHub Pages)
```

## Requisitos

- Node.js 22.22.3 o superior (o 24.15+)
- npm

## Instalación y ejecución local

```bash
npm install
npm start        # http://localhost:4200/
```

## Pruebas

```bash
npm test
```

## Compilación

```bash
npm run build
```

El script `postbuild` copia `index.html` como `404.html` para que recargar una ruta interna (por ejemplo `/noticias`) funcione en GitHub Pages.

## Despliegue en GitHub Pages

1. El repositorio debe llamarse **`NewsWebAngular`** (el workflow compila con `--base-href /NewsWebAngular/`).
2. Sube el proyecto a GitHub (rama `main`).
3. En *Settings → Pages* elige como origen **GitHub Actions**.
4. Cada `push` a `main` ejecuta `.github/workflows/deploy.yml` y publica `dist/NewsWebAngular/browser`.

La URL queda: `https://<usuario>.github.io/NewsWebAngular/`

> Para Netlify o Vercel, usa como comando de build `npm run build`, carpeta de salida `dist/NewsWebAngular/browser` y una regla de reescritura de `/*` a `/index.html`.
