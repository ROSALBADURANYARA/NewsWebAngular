import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';

<<<<<<< HEAD
/**
 * Componente raíz. Dibuja el encabezado fijo y, debajo, la página activa
 * que el Router inserta en <router-outlet>.
 */
=======
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
<<<<<<< HEAD
export class App {}
=======
export class App {}
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
