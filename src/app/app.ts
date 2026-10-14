import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';

/**
 * Componente raíz. Dibuja el encabezado fijo y, debajo, la página activa
 * que el Router inserta en <router-outlet>.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
