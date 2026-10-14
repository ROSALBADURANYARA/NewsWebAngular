import { TestBed } from '@angular/core/testing';

import { NoticiasService } from './noticias.service';

describe('NoticiasService', () => {
  let servicio: NoticiasService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    servicio = TestBed.inject(NoticiasService);
  });

  it('devuelve las noticias y busca por id', () => {
    expect(servicio.getNoticias().length).toBeGreaterThan(0);
    expect(servicio.getNoticiaById('ia-educacion')?.categoria).toBe('Educación');
    expect(servicio.getNoticiaById('no-existe')).toBeUndefined();
  });

  it('agrega y quita favoritos, y los persiste', () => {
    expect(servicio.toggleFavorito('ia-educacion')).toBe(true);
    expect(servicio.esFavorita('ia-educacion')).toBe(true);
    expect(JSON.parse(localStorage.getItem('newsweb-favoritos') ?? '[]')).toContain('ia-educacion');

    expect(servicio.toggleFavorito('ia-educacion')).toBe(false);
    expect(servicio.esFavorita('ia-educacion')).toBe(false);
  });

  it('calcula un tiempo de lectura de al menos 1 minuto', () => {
    const noticia = servicio.getNoticias()[0];
    expect(servicio.tiempoLecturaMin(noticia)).toBeGreaterThanOrEqual(1);
  });
});
