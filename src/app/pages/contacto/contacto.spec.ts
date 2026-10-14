import { TestBed } from '@angular/core/testing';

import { Contacto } from './contacto';

describe('Contacto', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Contacto] }).compileComponents();
  });

  it('muestra errores si se envía vacío y no confirma el envío', async () => {
    const fixture = TestBed.createComponent(Contacto);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    (el.querySelector('form') as HTMLFormElement).dispatchEvent(new Event('submit'));
    await fixture.whenStable();

    expect(el.querySelectorAll('.validation-alert').length).toBe(3);
    expect(el.querySelector('.success-alert')).toBeNull();
  });

  it('confirma el envío cuando los datos son válidos', async () => {
    const fixture = TestBed.createComponent(Contacto);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    const escribir = (selector: string, valor: string) => {
      const campo = el.querySelector(selector) as HTMLInputElement | HTMLTextAreaElement;
      campo.value = valor;
      campo.dispatchEvent(new Event('input'));
    };
    escribir('input[name="nombre"]', 'Ana');
    escribir('input[name="correo"]', 'ana@correo.com');
    escribir('textarea[name="mensaje"]', 'Hola, ¡excelente sitio!');
    await fixture.whenStable();

    (el.querySelector('form') as HTMLFormElement).dispatchEvent(new Event('submit'));
    await fixture.whenStable();

    expect(el.querySelector('.success-alert')).not.toBeNull();
    expect(el.querySelectorAll('.validation-alert').length).toBe(0);
  });
});
