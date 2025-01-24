import { Component, Inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SNACKBAR_CONTENT_TYPE_MAPPER, SnackbarContentComponentModel } from './snackbar-content.component.model';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-content',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './snackbar-content.component.html',
  styleUrl: './snackbar-content.component.scss'
})
export class SnackbarContentComponent {

  constructor (@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarContentComponentModel, private snackBarRef: MatSnackBarRef<any>) {}

  SNACKBAR_CONTENT_TYPE_MAPPER = SNACKBAR_CONTENT_TYPE_MAPPER;

  onClose() {
    this.snackBarRef.dismiss();
  }
}
