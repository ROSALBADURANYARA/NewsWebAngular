import { Routes } from '@angular/router';

import { Contacto } from './pages/contacto/contacto';
import { Detalle } from './pages/detalle/detalle';
import { Inicio } from './pages/inicio/inicio';
import { NoticiasComponent } from './pages/noticias/noticias';

/**
 * Tabla de rutas de la aplicación.
 *
 * - ''              → página de inicio con las noticias destacadas.
 * - 'noticias'      → listado completo (admite ?favoritos=1 para filtrar).
 * - 'detalle/:id'   → artículo completo; :id es el identificador de la noticia.
 * - 'contacto'      → formulario de contacto.
 * - '**'            → cualquier ruta desconocida redirige al inicio.
 */
export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'detalle/:id', component: Detalle },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' },
];
