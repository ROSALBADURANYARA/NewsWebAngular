import { ApplicationConfig } from '@angular/core';
<<<<<<< HEAD
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

/**
 * Configuración global de la aplicación.
 *
 * - provideRouter: registra las rutas definidas en app.routes.ts.
 * - withInMemoryScrolling: al navegar a otra página, vuelve al inicio del scroll.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
  ],
};
=======
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
>>>>>>> b8eebf19f0181d3a9e0b67c3962af6c120b3b9f9
