import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Noticia } from '../../data/noticias';

/**
 * Tarjeta de noticia reutilizable (Inicio y Noticias).
 *
 * Es un componente "de presentación": recibe datos por input y avisa
 * al padre mediante un output cuando se pulsa la estrella de favoritos.
 */
@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  /** Noticia a mostrar (obligatoria). */
  readonly noticia = input.required<Noticia>();

  /** Si la noticia está marcada como favorita. */
  readonly esFavorita = input(false);

  /** Emite el id de la noticia cuando el usuario pulsa la estrella. */
  readonly favoritoCambiado = output<string>();

  alternarFavorito(): void {
    this.favoritoCambiado.emit(this.noticia().id);
  }
}
