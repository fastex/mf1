import { Routes } from '@angular/router';
import { ComissionSearchComponent } from './comission-search/comission-search.component';

export const COMISSION_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'comission-search',
    pathMatch: 'full',
  },
  {
    path: 'comission-search',
    component: ComissionSearchComponent,
  },
];
