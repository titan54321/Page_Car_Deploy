import { Routes } from '@angular/router';
import { error } from 'console';

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
        
        path: '**',
            loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent),
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }

];
