import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { animations } from 'src/app/core/animations/animations';
import { MainLayoutService } from '../main-layout.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animations]
})
export class SidebarMenuComponent implements OnInit {

  constructor(
    public mainLayoutService: MainLayoutService
  ) { }

  ngOnInit(): void {
  }

}
