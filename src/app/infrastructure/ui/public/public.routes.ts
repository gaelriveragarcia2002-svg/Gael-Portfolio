import { Routes } from "@angular/router";

export const publicRoutes: Routes = [
  {
    path: '',
    //* El Layout suele ser ligero, se puede dejar con 'component' o cambiar a loadComponent si es necesario.
    loadComponent: () => import('./layout/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      //*  Redirigir al home por defecto
      {path: '', redirectTo: 'home', pathMatch: 'full'},

      //* Lazy Loading a nivel de componente.
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home-page.component').then(m => m.HomePageComponent)
      }
    ]
  }
];
