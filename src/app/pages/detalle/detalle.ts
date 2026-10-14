import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { NoticiasService } from '../../services/noticias.service';

/** Redes sociales disponibles en el botón "Compartir". */
type RedSocial = 'facebook' | 'linkedin' | 'x';

/**
 * Detalle de una noticia.
 *
 * Lee el parámetro :id de la ruta, busca la noticia en el servicio y permite
 * marcarla como favorita o compartirla. Si el id no existe muestra un aviso.
 */
@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  private readonly route = inject(ActivatedRoute);
  private readonly noticiasService = inject(NoticiasService);

  /** Noticia correspondiente al :id actual (undefined si no existe). Se actualiza si cambia el parámetro. */
  readonly noticia = toSignal(
    this.route.paramMap.pipe(map((params) => this.noticiasService.getNoticiaById(params.get('id') ?? ''))),
  );

  /** true si la noticia mostrada está en favoritos. */
  readonly esFavorita = computed(() => {
    const noticia = this.noticia();
    return !!noticia && this.noticiasService.esFavorita(noticia.id);
  });

  /** Tiempo de lectura estimado, en minutos. */
  readonly tiempoLectura = computed(() => {
    const noticia = this.noticia();
    return noticia ? this.noticiasService.tiempoLecturaMin(noticia) : 0;
  });

  /** Agrega o quita la noticia de favoritos. */
  toggleFavorito(): void {
    const noticia = this.noticia();
    if (noticia) {
      this.noticiasService.toggleFavorito(noticia.id);
    }
  }

  /** Abre en una pestaña nueva el formulario de compartir de la red elegida. */
  compartir(red: RedSocial): void {
    const noticia = this.noticia();
    if (!noticia) {
      return;
    }

    const url = encodeURIComponent(window.location.href);
    const texto = encodeURIComponent(`Mira esta noticia: ${noticia.titulo}`);

    const enlaces: Record<RedSocial, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      x: `https://twitter.com/intent/tweet?text=${texto}&url=${url}`,
    };

    window.open(enlaces[red], '_blank', 'noopener,noreferrer');
  }
}
