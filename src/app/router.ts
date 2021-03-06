import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./presentation/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./presentation/pages/login/login.module').then(
        m => m.LoginModule,
      ),
  },
];
