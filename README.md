# NewsWeb

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
```

## Compilación

```bash
npm run build
```

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

