import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  nombre = 'Rafael';
  correo = 'RAFAELSALCEDO@GMAIL.COM';
  mensaje = '';

  enviarMensaje(): void {
    if (!this.correo.includes('@')) {
      alert('Ingresa un correo válido antes de enviar.');
      return;
    }

    alert('Mensaje enviado correctamente.');
  }
}
