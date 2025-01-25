import { SnackBarContentType } from './../../components/snackbar-content/snackbar-content.component.model';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarContentComponent } from '../../components/snackbar-content/snackbar-content.component';
import { SnackbarContentComponentModel } from '../../components/snackbar-content/snackbar-content.component.model';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  // Configuration for the MatSnackBar, which controls the appearance and behavior of the snackbar.
  config: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'app-toaster',
  };

  constructor(private snackBar: MatSnackBar) {}

  /**
   * Shows a success snackbar with the provided message.
   * @param message - The message to be displayed in the snackbar.
   */
  showSuccess(message: string): void {
    this.config.data = {
      content: message,
      contentType: SnackBarContentType.SUCCESS,
    } as SnackbarContentComponentModel;
    this.snackBar.openFromComponent(SnackbarContentComponent, {
      ...this.config,
    });
  }

  /**
   * Shows a warning snackbar with the provided message.
   * @param message - The message to be displayed in the snackbar.
   */
  showWarning(message: string): void {
    this.config.data = {
      content: message,
      contentType: SnackBarContentType.WARNING,
    } as SnackbarContentComponentModel;
    this.snackBar.openFromComponent(SnackbarContentComponent, {
      ...this.config,
    });
  }

  /**
   * Shows an error snackbar with the provided message.
   * @param message - The message to be displayed in the snackbar.
   */
  showError(message: string): void {
    this.config.data = {
      content: message,
      contentType: SnackBarContentType.ERROR,
    } as SnackbarContentComponentModel;
    this.snackBar.openFromComponent(SnackbarContentComponent, {
      ...this.config,
    });
  }
}
