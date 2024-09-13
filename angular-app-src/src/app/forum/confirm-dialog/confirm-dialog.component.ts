import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 mat-dialog-title>Are you sure?</h1>
    <div mat-dialog-actions>
      <button mat-button (click)="onConfirm()">Confirm</button>
      <button mat-button (click)="onCancel()">Cancel</button>
    </div>
  `,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  standalone: true
})
export class ConfirmDialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
