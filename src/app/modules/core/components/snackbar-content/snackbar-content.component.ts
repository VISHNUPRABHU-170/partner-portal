import { Component, Inject } from '@angular/core';
import { SNACKBAR_CONTENT_TYPE_MAPPER, SnackbarContentComponentModel } from './snackbar-content.component.model';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { IconComponent } from '../icon/icon.component';
import { IconComponentModel } from '../icon/icon.component.model';

@Component({
  selector: 'app-snackbar-content',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './snackbar-content.component.html',
  styleUrl: './snackbar-content.component.scss'
})
export class SnackbarContentComponent {
  iconConfig: IconComponentModel = { name: 'close' };

  constructor (@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarContentComponentModel, private snackBarRef: MatSnackBarRef<any>) {}

  SNACKBAR_CONTENT_TYPE_MAPPER = SNACKBAR_CONTENT_TYPE_MAPPER;

  onClose() {
    this.snackBarRef.dismiss();
  }
}
