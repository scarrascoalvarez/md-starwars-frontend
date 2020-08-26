import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopNavBarComponent } from './main-layout/top-nav-bar/top-nav-bar.component';
import { SidebarComponent } from './main-layout/sidebar/sidebar.component';

@NgModule({
  declarations: [MainLayoutComponent, TopNavBarComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
