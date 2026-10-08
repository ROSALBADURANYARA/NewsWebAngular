import { Injectable } from '@angular/core';

import { Noticia, noticias } from '../data/noticias';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  private readonly favoritosKey = 'newsweb-favoritos';

  getNoticias(): Noticia[] {
    return noticias;
  }

  getNoticiaById(id: string): Noticia | undefined {
    return noticias.find((noticia) => noticia.id === id);
  }

  getFavoritos(): string[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }

    try {
      const favoritos = localStorage.getItem(this.favoritosKey);
      return favoritos ? (JSON.parse(favoritos) as string[]) : [];
    } catch {
      return [];
    }
  }

  isFavorita(id: string): boolean {
    return this.getFavoritos().includes(id);
  }

  toggleFavorito(id: string): boolean {
    const favoritos = this.getFavoritos();
    const existe = favoritos.includes(id);
    const siguiente = existe ? favoritos.filter((item) => item !== id) : [...favoritos, id];

    try {
      localStorage.setItem(this.favoritosKey, JSON.stringify(siguiente));
    } catch {
      return existe;
    }

    return !existe;
  }
}
