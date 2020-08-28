import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
