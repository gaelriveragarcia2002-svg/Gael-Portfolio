import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { USER_REPOSITORY } from './domain/repositories/user/user.repository';
import { UserImplementationService } from './infrastructure/implementations/user-implementation.service';
import { AUTH_REPOSITORY } from './domain/repositories/auth/auth.repository';
import { AuthImplementationService } from './infrastructure/implementations/auth-implementation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    // * Providers de los casos de uso.
    {provide: USER_REPOSITORY, useClass: UserImplementationService},
    {provide: AUTH_REPOSITORY, useClass: AuthImplementationService},
  ]
};
