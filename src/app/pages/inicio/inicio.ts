import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Noticia } from '../../data/noticias';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  noticias: Noticia[];

  constructor(private noticiasService: NoticiasService) {
    this.noticias = this.noticiasService.getNoticias();
  }

  get noticiasDestacadas(): Noticia[] {
    return this.noticias.filter((noticia) => noticia.destacado).slice(0, 3);
  }
}