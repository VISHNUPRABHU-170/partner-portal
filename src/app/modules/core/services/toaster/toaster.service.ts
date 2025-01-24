import { SnackBarContentType } from './../../components/snackbar-content/snackbar-content.component.model';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarContentComponent } from '../../components/snackbar-content/snackbar-content.component';
import { SnackbarContentComponentModel } from '../../components/snackbar-content/snackbar-content.component.model';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  config: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'app-toaster',
  }

  constructor (private snackBar: MatSnackBar) { }

  showSuccess(message: string): void {
    this.config.data = { content: message, contentType: SnackBarContentType.SUCCESS } as SnackbarContentComponentModel;
    this.snackBar.openFromComponent(SnackbarContentComponent, { ...this.config });
  }

  showWarning(message: string): void {
    this.config.data = { content: message, contentType: SnackBarContentType.WARNING } as SnackbarContentComponentModel;
    this.snackBar.openFromComponent(SnackbarContentComponent, { ...this.config });
  }

  showError(message: string): void {
    this.config.data = { content: message, contentType: SnackBarContentType.ERROR } as SnackbarContentComponentModel;
    this.snackBar.openFromComponent(SnackbarContentComponent, { ...this.config });
  }
}
