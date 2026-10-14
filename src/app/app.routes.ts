import { Routes } from '@angular/router';

import { Contacto } from './pages/contacto/contacto';
import { Detalle } from './pages/detalle/detalle';
import { Inicio } from './pages/inicio/inicio';
import { NoticiasComponent } from './pages/noticias/noticias';

<<<<<<< HEAD
/**
 * Tabla de rutas de la aplicación.
 *
 * - ''              → página de inicio con las noticias destacadas.
 * - 'noticias'      → listado completo (admite ?favoritos=1 para filtrar).
 * - 'detalle/:id'   → artículo completo; :id es el identificador de la noticia.
 * - 'contacto'      → formulario de contacto.
 * - '**'            → cualquier ruta desconocida redirige al inicio.
 */
=======
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'detalle/:id', component: Detalle },
  { path: 'contacto', component: Contacto },
<<<<<<< HEAD
  { path: '**', redirectTo: '' },
];
=======
  { path: '**', redirectTo: '' }
];
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
