import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { NewsCard } from '../../components/news-card/news-card';
import { NoticiasService } from '../../services/noticias.service';

/**
 * Listado completo de noticias.
 *
 * Si la URL trae ?favoritos=1 solo se muestran las noticias favoritas.
 * El filtro vive en la URL, así se puede compartir y funciona con el botón "atrás".
 */
@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [RouterLink, NewsCard],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class NoticiasComponent {
  private readonly noticiasService = inject(NoticiasService);
  private readonly route = inject(ActivatedRoute);

  private readonly todas = this.noticiasService.getNoticias();

  /** true cuando la URL contiene ?favoritos=1. */
  readonly soloFavoritos = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('favoritos') === '1')),
    { initialValue: false },
  );

  /** Noticias visibles según el filtro; se recalcula al cambiar los favoritos. */
  readonly noticias = computed(() =>
    this.soloFavoritos() ? this.todas.filter((n) => this.noticiasService.esFavorita(n.id)) : this.todas,
  );

  esFavorita(id: string): boolean {
    return this.noticiasService.esFavorita(id);
  }

  alternarFavorito(id: string): void {
    this.noticiasService.toggleFavorito(id);
  }
}
