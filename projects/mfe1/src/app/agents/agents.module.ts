import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsSearchComponent } from './agents-search/agents-search.component';
import { RouterModule } from '@angular/router';
import { AGENTS_ROUTES } from './agents.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(AGENTS_ROUTES)],
  declarations: [AgentsSearchComponent],
})
export class AgentsModule {}
