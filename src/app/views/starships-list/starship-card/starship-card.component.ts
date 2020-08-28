import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { Starship } from 'src/app/core/models/startship.model';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarshipCardComponent implements OnInit {

  @Input() starship: Starship;
  
  constructor() { }

  ngOnInit(): void {
  }

  showNotFoundImage(cardImage: any): void {
    cardImage.style.backgroundImage = 'url(assets/images/not-found.png)';
  }

}
