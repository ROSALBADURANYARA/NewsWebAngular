import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Noticia } from '../../data/noticias';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {
  noticias: Noticia[];

  constructor(private noticiasService: NoticiasService) {
    this.noticias = this.noticiasService.getNoticias();
  }
}