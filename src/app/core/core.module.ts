import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');
import { LayoutModule } from 'src/app/layout/layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {SpinnerInterceptorService} from 'src/app/core/interceptors/spinner-interceptor/spinner-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true },
  ],
  exports: [
    LayoutModule
  ]
})
export class CoreModule { }
