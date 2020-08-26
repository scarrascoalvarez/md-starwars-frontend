import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopNavBarComponent } from './main-layout/top-nav-bar/top-nav-bar.component';
import { SidebarComponent } from './main-layout/sidebar/sidebar.component';
import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainLayoutComponent, TopNavBarComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
