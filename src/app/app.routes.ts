import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'principal',
        loadComponent: () => import('./principal/principal.component').then(m => m.PrincipalComponent)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }

];
