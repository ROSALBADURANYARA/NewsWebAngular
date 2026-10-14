import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NewsCard } from '../../components/news-card/news-card';
import { NoticiasService } from '../../services/noticias.service';

/**
 * Página de inicio: banner, mensaje de bienvenida y las noticias destacadas.
 */
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, NewsCard],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  private readonly noticiasService = inject(NoticiasService);

  /** Máximo 3 noticias marcadas como destacadas. */
  readonly noticiasDestacadas = this.noticiasService
    .getNoticias()
    .filter((noticia) => noticia.destacado)
    .slice(0, 3);

  esFavorita(id: string): boolean {
    return this.noticiasService.esFavorita(id);
  }

  alternarFavorito(id: string): void {
    this.noticiasService.toggleFavorito(id);
  }
}
