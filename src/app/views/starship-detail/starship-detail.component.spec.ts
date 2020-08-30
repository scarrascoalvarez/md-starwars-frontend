import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailComponent } from './starship-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StarshipDetailService } from './starship-detail.service';
import {StarshipDetailServiceMock} from 'src/assets/mocks/starship-detail/starship-detail.mock.service';
import { StarshipsDataService } from 'src/app/services/starships-data/starships-data.service';
import { StarshipsDataServiceMock } from 'src/assets/mocks/starships-data/starships-data.mock.service';

describe('StarshipDetailComponent', () => {
  let component: StarshipDetailComponent;
  let fixture: ComponentFixture<StarshipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ StarshipDetailComponent ],
      providers: [
        { provide: StarshipsDataService, useClass: StarshipsDataServiceMock },
        { provide: StarshipDetailService, useClass: StarshipDetailServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
