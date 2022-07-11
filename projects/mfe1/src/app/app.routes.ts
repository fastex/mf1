import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'agents',
    loadChildren: () =>
      import('./agents/agents.module').then((m) => m.AgentsModule),
  },
];
