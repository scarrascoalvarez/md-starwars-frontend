import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-structure',
  templateUrl: './dialog-structure.component.html',
  styleUrls: ['./dialog-structure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogStructureComponent implements OnInit {

  @Input() dialogRef: MatDialogRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
