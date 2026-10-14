# NewsWeb

<<<<<<< HEAD
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
=======
Aplicación web funcional de noticias desarrollada con Angular 22. Incluye una landing page, listado de noticias, detalle de artículo y sección de contacto, con diseño responsive y estructura organizada para facilitar mantenimiento.

## Cumple con la guía##

- Aplicación funcional completa
- Implementación básica en Angular (componentes y binding)
- Código organizado y documentado
- Aplicación desplegable en GitHub Pages, Netlify o Vercel

## Funcionalidades##

- Inicio con vista general de noticias destacadas
- Página de noticias con listado completo
- Detalle de cada noticia mediante parámetros de ruta
- Enrutamiento con Angular Router
- Componentes y bindings en Angular
- Código organizado con servicios y datos centralizados

## Requisitos##

- Node.js 22+
- npm

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm start
```

La aplicación queda disponible en:

```text
http://localhost:4200/ EL PUERTO QUE ESTE DISPONIBLE.
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
```

## Compilación

```bash
npm run build
```

<<<<<<< HEAD
El script `postbuild` copia `index.html` como `404.html` para que recargar una ruta interna (por ejemplo `/noticias`) funcione en GitHub Pages.

## Despliegue en GitHub Pages

1. El repositorio debe llamarse **`NewsWebAngular`** (el workflow compila con `--base-href /NewsWebAngular/`).
2. Sube el proyecto a GitHub (rama `main`).
3. En *Settings → Pages* elige como origen **GitHub Actions**.
4. Cada `push` a `main` ejecuta `.github/workflows/deploy.yml` y publica `dist/NewsWebAngular/browser`.

La URL queda: `https://<usuario>.github.io/NewsWebAngular/`

> Para Netlify o Vercel, usa como comando de build `npm run build`, carpeta de salida `dist/NewsWebAngular/browser` y una regla de reescritura de `/*` a `/index.html`.
=======
## Despliegue en GitHub Pages

Este repositorio incluye una configuración de despliegue en GitHub Actions en `.github/workflows/deploy.yml`.

Pasos para desplegar:

1. Subir el proyecto a GitHub.
2. Activar GitHub Pages en Settings > Pages.
3. Configurar el origen como "GitHub Actions".
4. Hacer push a la rama `main`.

La acción compilará la app y publicará la carpeta `dist/NewsWebAngular`.

## Estructura relevante

```text
src/
  app/
    components/
    pages/
    data/
    services/
    app.routes.ts
```

>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
