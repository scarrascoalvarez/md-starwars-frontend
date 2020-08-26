import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from 'src/app/layout/main-layout/main-layout.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/starships',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'starships',
        loadChildren: () => import('./views/starships-list/starships-list.module').then(m => m.StarshipsListModule),
      },
      {
        path: 'starship/detail',
        loadChildren: () => import('./views/starship-detail/starship-detail.module').then(m => m.StarshipDetailModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }