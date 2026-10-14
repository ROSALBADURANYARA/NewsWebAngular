<<<<<<< HEAD
import { Injectable, signal } from '@angular/core';

import { Noticia, noticias } from '../data/noticias';

/** Velocidad de lectura promedio usada para estimar el tiempo de lectura. */
const PALABRAS_POR_MINUTO = 200;

/**
 * Servicio central de noticias.
 *
 * Entrega los datos a las páginas y administra los favoritos del usuario.
 * Los favoritos se guardan en localStorage (persisten al recargar) y se
 * exponen como signal, de modo que todas las vistas se actualizan solas
 * cuando cambian.
 */
=======
import { Injectable } from '@angular/core';

import { Noticia, noticias } from '../data/noticias';

>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  private readonly favoritosKey = 'newsweb-favoritos';

<<<<<<< HEAD
  private readonly favoritosSignal = signal<string[]>(this.cargarFavoritos());

  /** Ids de las noticias marcadas como favoritas (solo lectura). */
  readonly favoritos = this.favoritosSignal.asReadonly();

  /** Devuelve todas las noticias. */
=======
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
  getNoticias(): Noticia[] {
    return noticias;
  }

<<<<<<< HEAD
  /** Busca una noticia por id; devuelve undefined si no existe. */
=======
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
  getNoticiaById(id: string): Noticia | undefined {
    return noticias.find((noticia) => noticia.id === id);
  }

<<<<<<< HEAD
  /** Indica si la noticia está en favoritos (lee el signal, por eso es reactivo). */
  esFavorita(id: string): boolean {
    return this.favoritosSignal().includes(id);
  }

  /**
   * Agrega o quita una noticia de favoritos y persiste el cambio.
   * @returns true si la noticia quedó marcada como favorita.
   */
  toggleFavorito(id: string): boolean {
    const actuales = this.favoritosSignal();
    const existe = actuales.includes(id);
    const siguiente = existe ? actuales.filter((item) => item !== id) : [...actuales, id];

    this.favoritosSignal.set(siguiente);
    this.guardarFavoritos(siguiente);

    return !existe;
  }

  /** Tiempo de lectura estimado en minutos (mínimo 1), según el número de palabras. */
  tiempoLecturaMin(noticia: Noticia): number {
    const palabras = noticia.contenido.join(' ').split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(palabras / PALABRAS_POR_MINUTO));
  }

  /** Lee los favoritos guardados; ante cualquier error devuelve una lista vacía. */
  private cargarFavoritos(): string[] {
=======
  getFavoritos(): string[] {
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
    if (typeof localStorage === 'undefined') {
      return [];
    }

    try {
<<<<<<< HEAD
      const guardados = localStorage.getItem(this.favoritosKey);
      return guardados ? (JSON.parse(guardados) as string[]) : [];
=======
      const favoritos = localStorage.getItem(this.favoritosKey);
      return favoritos ? (JSON.parse(favoritos) as string[]) : [];
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
    } catch {
      return [];
    }
  }

<<<<<<< HEAD
  /** Guarda los favoritos; si el navegador bloquea el almacenamiento, continúa en memoria. */
  private guardarFavoritos(ids: string[]): void {
    try {
      localStorage.setItem(this.favoritosKey, JSON.stringify(ids));
    } catch {
      /* Almacenamiento no disponible: los favoritos viven solo durante la sesión. */
    }
=======
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
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
  }
}
