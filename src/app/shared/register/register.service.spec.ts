import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserDataServiceMock } from 'src/assets/mocks/user-data/user-data.mock.service';

describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: UserDataService, useClass: UserDataServiceMock },
      ]
    });
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
