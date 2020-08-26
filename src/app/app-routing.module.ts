import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from 'src/app/layout/main-layout/main-layout.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/starhips',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'starhips',
        loadChildren: () => import('./views/starships-list/starships-list.module').then(m => m.StarshipsListModule),
      },
      {
        path: 'starhip/detail',
        loadChildren: () => import('./views/starship-detail/starship-detail.module').then(m => m.StarshipDetailModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
