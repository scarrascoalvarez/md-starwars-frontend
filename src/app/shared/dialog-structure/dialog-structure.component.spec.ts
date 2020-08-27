import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStructureComponent } from './dialog-structure.component';

describe('DialogStructureComponent', () => {
  let component: DialogStructureComponent;
  let fixture: ComponentFixture<DialogStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
