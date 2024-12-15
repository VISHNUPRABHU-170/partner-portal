import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  config: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'app-toaster'
  }

  constructor (private snackBar: MatSnackBar) { }

  show(message: string, status: boolean) {
    this.snackBar.handsetCssClass = 'mat-mdc-snack-bar-handset';
    this.snackBar.open(message, 'Close', this.config);
  }
}
