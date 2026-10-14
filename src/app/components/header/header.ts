import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

<<<<<<< HEAD
/**
 * Encabezado con el nombre del sitio y la navegación principal.
 * RouterLinkActive marca con la clase "active" el enlace de la ruta actual.
 */
=======
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
