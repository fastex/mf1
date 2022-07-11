import { Routes } from '@angular/router';
import { AgentsSearchComponent } from './agents-search/agents-search.component';

export const AGENTS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'agents-search',
    pathMatch: 'full',
  },
  {
    path: 'agents-search',
    component: AgentsSearchComponent,
  },
];
