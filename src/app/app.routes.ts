import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadChildren: () => import('./core/pages/home/home.routes'),
  },
  { path: 'login', loadChildren: () => import('./core/pages/login/login.routes'), }
];
