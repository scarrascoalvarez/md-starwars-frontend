import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from 'src/app/layout/main-layout/main-layout.component'
import {AuthenticationGuard} from 'src/app/core/guards/authentication/authentication.guard';
import {AdminGuard} from 'src/app/core/guards/admin/admin.guard';
import { BasicLayoutComponent } from './layout/basic-layout/basic-layout.component';

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
        loadChildren: () => import('./views/starship-detail/starship-detail.module').then(m => m.StarshipDetailModule)
      },
      {
        path: 'information',
        loadChildren: () => import('./views/information/information.module').then(m => m.InformationModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AdminGuard]
      }
    ]
  },
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      {
        path: 'error',
        loadChildren: () => import('./views/error-page/error-page.module').then(m => m.ErrorPageModule),
      },
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
