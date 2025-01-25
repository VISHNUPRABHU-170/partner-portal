import { Routes } from '@angular/router';
import { mainRoutes } from './modules/main/main.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./modules/auth/components/register/register.component').then(c => c.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/auth/components/login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'partner-portal',
    loadComponent: () => import('./modules/main/main.component').then(c => c.MainComponent),
    children: mainRoutes,
  },
];
