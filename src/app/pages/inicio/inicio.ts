<<<<<<< HEAD
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
=======
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Noticia } from '../../data/noticias';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
<<<<<<< HEAD
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
=======
  noticias: Noticia[];

  constructor(private noticiasService: NoticiasService) {
    this.noticias = this.noticiasService.getNoticias();
  }

  get noticiasDestacadas(): Noticia[] {
    return this.noticias.filter((noticia) => noticia.destacado).slice(0, 3);
  }
}
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
