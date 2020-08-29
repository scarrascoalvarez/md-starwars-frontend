import { Component, OnInit, ChangeDetectionStrategy, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, description: string }
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
