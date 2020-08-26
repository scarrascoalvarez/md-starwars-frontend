import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsListRoutingModule } from './starships-list-routing.module';
import { StarshipsListComponent } from './starships-list.component';


@NgModule({
  declarations: [StarshipsListComponent],
  imports: [
    CommonModule,
    StarshipsListRoutingModule
  ]
})
export class StarshipsListModule { }
