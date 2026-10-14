import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NoticiasService } from '../../services/noticias.service';
import { NoticiasComponent } from './noticias';

describe('NoticiasComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [NoticiasComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('muestra una tarjeta por cada noticia', async () => {
    const fixture = TestBed.createComponent(NoticiasComponent);
    await fixture.whenStable();
    const total = TestBed.inject(NoticiasService).getNoticias().length;
    expect(fixture.nativeElement.querySelectorAll('app-news-card').length).toBe(total);
  });

  it('marca una noticia como favorita al pulsar la estrella', async () => {
    const fixture = TestBed.createComponent(NoticiasComponent);
    await fixture.whenStable();
    const servicio = TestBed.inject(NoticiasService);
    const primera = servicio.getNoticias()[0];

    (fixture.nativeElement.querySelector('.bookmark-button') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(servicio.esFavorita(primera.id)).toBe(true);
    expect(fixture.nativeElement.querySelector('.bookmark-button.is-active')).toBeTruthy();
  });
});
