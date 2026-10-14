import { ApplicationConfig } from '@angular/core';
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
