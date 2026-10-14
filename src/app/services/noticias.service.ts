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
@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  private readonly favoritosKey = 'newsweb-favoritos';

  private readonly favoritosSignal = signal<string[]>(this.cargarFavoritos());

  /** Ids de las noticias marcadas como favoritas (solo lectura). */
  readonly favoritos = this.favoritosSignal.asReadonly();

  /** Devuelve todas las noticias. */
  getNoticias(): Noticia[] {
    return noticias;
  }

  /** Busca una noticia por id; devuelve undefined si no existe. */
  getNoticiaById(id: string): Noticia | undefined {
    return noticias.find((noticia) => noticia.id === id);
  }

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
    if (typeof localStorage === 'undefined') {
      return [];
    }

    try {
      const guardados = localStorage.getItem(this.favoritosKey);
      return guardados ? (JSON.parse(guardados) as string[]) : [];
    } catch {
      return [];
    }
  }

  /** Guarda los favoritos; si el navegador bloquea el almacenamiento, continúa en memoria. */
  private guardarFavoritos(ids: string[]): void {
    try {
      localStorage.setItem(this.favoritosKey, JSON.stringify(ids));
    } catch {
      /* Almacenamiento no disponible: los favoritos viven solo durante la sesión. */
    }
  }
}
