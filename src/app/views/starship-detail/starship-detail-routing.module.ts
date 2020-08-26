import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipDetailComponent } from './starship-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: StarshipDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipDetailRoutingModule { }
