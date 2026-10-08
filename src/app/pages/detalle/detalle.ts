import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Noticia } from '../../data/noticias';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
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
      return;
    }

    const url = encodeURIComponent(window.location.href);
    const texto = encodeURIComponent(`Mira esta noticia: ${this.noticia.titulo}`);

    const links: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      x: `https://twitter.com/intent/tweet?text=${texto}&url=${url}`,
    };

    const href = links[tipo];
    window.open(href, '_blank', 'noopener,noreferrer');
  }
}