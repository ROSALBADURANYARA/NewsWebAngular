import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

/**
 * Formulario de contacto (formulario basado en plantilla).
 *
 * Usa two-way binding con [(ngModel)] y las validaciones integradas de Angular
 * (required y email). No hay backend: al enviar solo se confirma en pantalla.
 */
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  nombre = '';
  correo = '';
  mensaje = '';

  /** true después de pulsar "Enviar" para mostrar los errores de los campos vacíos. */
  intentado = false;

  /** true cuando el mensaje se "envió" correctamente. */
  enviado = false;

  /** Valida el formulario; si es válido confirma el envío y limpia los campos. */
  enviarMensaje(formulario: NgForm): void {
    this.intentado = true;
    this.enviado = false;

    if (formulario.invalid) {
      return;
    }

    this.enviado = true;
    this.intentado = false;
    formulario.resetForm({ nombre: '', correo: '', mensaje: '' });
  }
}
