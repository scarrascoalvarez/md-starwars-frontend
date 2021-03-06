import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopNavBarComponent } from './main-layout/top-nav-bar/top-nav-bar.component';
import { SidebarComponent } from './main-layout/sidebar/sidebar.component';
import {SharedModule} from 'src/app/shared/shared.module';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { SidebarMenuComponent } from './main-layout/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [MainLayoutComponent, TopNavBarComponent, SidebarComponent, BasicLayoutComponent, SidebarMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    MainLayoutComponent,
    BasicLayoutComponent
  ]
})
export class LayoutModule { }
