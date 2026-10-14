<<<<<<< HEAD
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
=======
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
<<<<<<< HEAD
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
=======
  nombre = 'Rafael';
  correo = 'RAFAELSALCEDO@GMAIL.COM';
  mensaje = '';

  enviarMensaje(): void {
    if (!this.correo.includes('@')) {
      alert('Ingresa un correo válido antes de enviar.');
      return;
    }

    alert('Mensaje enviado correctamente.');
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
  }
}
