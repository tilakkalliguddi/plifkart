import { Component, Inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirmationdialog',
  standalone: true,
  imports: [MatFormFieldModule,MatDialogActions,MatDialogContent,MatCardModule,MatButtonModule],
  templateUrl: './confirmationdialog.component.html',
  styleUrl: './confirmationdialog.component.css'
})
export class ConfirmationdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
