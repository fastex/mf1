import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComissionSearchComponent } from './comission-search/comission-search.component';
import { RouterModule } from '@angular/router';
import { COMISSION_ROUTES } from './comission.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(COMISSION_ROUTES)],
  declarations: [ComissionSearchComponent],
})
export class ComissionModule {}
