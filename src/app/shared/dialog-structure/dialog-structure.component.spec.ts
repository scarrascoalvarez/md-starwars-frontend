import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStructureComponent } from './dialog-structure.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DialogStructureComponent', () => {
  let component: DialogStructureComponent;
  let fixture: ComponentFixture<DialogStructureComponent>;
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ DialogStructureComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { title: 'title', description: 'description' } },
        { provide: MatDialogRef, useValue: dialogMock },
      ]
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
