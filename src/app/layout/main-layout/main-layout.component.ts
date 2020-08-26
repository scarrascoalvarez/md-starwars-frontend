import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { animations } from 'src/app/core/animations/animations';
import { MainLayoutService } from './main-layout.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animations]
})
export class MainLayoutComponent implements OnInit {

  constructor(
    public mainLayoutService: MainLayoutService
  ) { }

  ngOnInit(): void {
  }

}
