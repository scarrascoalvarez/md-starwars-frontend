import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');
import { LayoutModule } from 'src/app/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  exports: [
    LayoutModule
  ]
})
export class CoreModule { }
