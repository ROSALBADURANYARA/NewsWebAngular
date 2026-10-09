import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { noticias } from '../../data/noticias';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class NoticiasComponent {
  noticias = noticias;
}