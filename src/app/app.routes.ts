import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '', // default route
    loadComponent: () => import('./features/component-home/component-home').then(m => m.ComponentHome)
  },
       {
    path: 'projects', 
    loadComponent: () => import('./features/component-project/component-project').then(m => m.ComponentProject)
  },
    {
    path: 'about', 
    loadComponent: () => import('./features/component-about/component-about').then(m => m.ComponentAbout)
  },
  
];
