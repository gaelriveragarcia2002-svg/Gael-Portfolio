import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./infrastructure/ui/public/public.routes').then(m => m.publicRoutes)
  },
  {
    path: 'app',
    loadChildren: () => import('./infrastructure/ui/private/private.routes').then(m => m.applicationRoutes)
  }
];
