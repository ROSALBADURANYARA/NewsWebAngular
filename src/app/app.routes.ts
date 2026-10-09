import { Routes } from '@angular/router';

import { Contacto } from './pages/contacto/contacto';
import { Detalle } from './pages/detalle/detalle';
import { Inicio } from './pages/inicio/inicio';
import { NoticiasComponent } from './pages/noticias/noticias';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'detalle/:id', component: Detalle },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' }
];