import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MainLayoutServiceMock {

    showSidebarMenu$ = of('in');

    showSidebar$ = of('in');

    showOverlay$ = of(false);
}
