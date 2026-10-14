<<<<<<< HEAD
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
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Noticia } from '../../data/noticias';
import { NoticiasService } from '../../services/noticias.service';

>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
<<<<<<< HEAD
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
=======
export class Detalle implements OnInit {
  noticia?: Noticia;
  isFavorita = false;

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') ?? '';
      this.noticia = this.noticiasService.getNoticiaById(id);
      this.isFavorita = !!this.noticia && this.noticiasService.isFavorita(this.noticia.id);
    });
  }

  toggleFavorito(): void {
    if (!this.noticia) {
      return;
    }

    this.isFavorita = this.noticiasService.toggleFavorito(this.noticia.id);
  }

  compartir(tipo: 'facebook' | 'linkedin' | 'x'): void {
    if (!this.noticia) {
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
      return;
    }

    const url = encodeURIComponent(window.location.href);
<<<<<<< HEAD
    const texto = encodeURIComponent(`Mira esta noticia: ${noticia.titulo}`);

    const enlaces: Record<RedSocial, string> = {
=======
    const texto = encodeURIComponent(`Mira esta noticia: ${this.noticia.titulo}`);

    const links: Record<string, string> = {
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      x: `https://twitter.com/intent/tweet?text=${texto}&url=${url}`,
    };

<<<<<<< HEAD
    window.open(enlaces[red], '_blank', 'noopener,noreferrer');
  }
}
=======
    const href = links[tipo];
    window.open(href, '_blank', 'noopener,noreferrer');
  }
}
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
