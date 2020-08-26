import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipsListComponent } from './starships-list.component';

const routes: Routes = [
  {
    path: '',
    component: StarshipsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsListRoutingModule { }
