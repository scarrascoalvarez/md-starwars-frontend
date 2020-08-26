import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from '../main-layout.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  constructor(
    public mainLayoutService: MainLayoutService
  ) { }

  ngOnInit(): void {
  }

}
