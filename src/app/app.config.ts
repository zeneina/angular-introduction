import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
<<<<<<< HEAD
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
=======

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
>>>>>>> f87d793613e515dad3d082dfeaec621a001d361f
};