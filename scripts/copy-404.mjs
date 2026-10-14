/**
 * Postbuild: copia index.html como 404.html.
 *
 * GitHub Pages no sabe de las rutas internas de una SPA (por ejemplo /noticias).
 * Al recargar esas URLs devuelve su página 404; si esa página es una copia de
 * index.html, Angular arranca y el Router resuelve la ruta correcta.
 */
import { copyFileSync, existsSync } from 'node:fs';

const carpeta = 'dist/NewsWebAngular/browser';
const origen = `${carpeta}/index.html`;

if (existsSync(origen)) {
  copyFileSync(origen, `${carpeta}/404.html`);
  console.log('404.html generado para el fallback de rutas en GitHub Pages');
} else {
  console.warn(`No se encontró ${origen}; no se generó 404.html`);
}
