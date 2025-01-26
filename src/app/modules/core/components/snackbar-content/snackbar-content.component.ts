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
  styleUrl: './snackbar-content.component.scss',
})
export class SnackbarContentComponent {
  // Configuration for the close icon displayed in snackbar.
  iconConfig: IconComponentModel = { name: 'close' };

  // Injecting MAT_SNACK_BAR_DATA to access the data passed to the Snackbar component.
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackbarContentComponentModel,
    private snackBarRef: MatSnackBarRef<any>
  ) {}

  // Mapper to handle different snackbar content types (eg: success, warning, error).
  SNACKBAR_CONTENT_TYPE_MAPPER = SNACKBAR_CONTENT_TYPE_MAPPER;

  /**
   * Closes the snackbar when the close icon is clicked.
   */
  onClose(): void {
    this.snackBarRef.dismiss();
  }
}
