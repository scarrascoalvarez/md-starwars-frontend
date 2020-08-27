import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { animations } from 'src/app/core/animations/animations';
import { MainLayoutService } from 'src/app/layout/main-layout/main-layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animations]
})
export class SidebarComponent implements OnInit {

  constructor(
    public mainLayoutService: MainLayoutService
  ) { }

  ngOnInit(): void {
  }

}
