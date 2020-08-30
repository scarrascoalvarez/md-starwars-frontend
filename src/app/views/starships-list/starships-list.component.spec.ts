import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StarshipsListComponent } from './starships-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StarshipsDataService } from 'src/app/services/starships-data/starships-data.service';
import { StarshipsDataServiceMock } from 'src/assets/mocks/starships-data/starships-data.mock.service';
import { StarshipsListService } from './starships-list.service';
import { StarshipsListServiceMock } from 'src/assets/mocks/starships-list/starship-list.mock.service';

describe('StarshipsListComponent', () => {
  let component: StarshipsListComponent;
  let fixture: ComponentFixture<StarshipsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      declarations: [StarshipsListComponent],
      providers: [
        { provide: StarshipsDataService, useClass: StarshipsDataServiceMock },
        { provide: StarshipsListService, useClass: StarshipsListServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
