import { DestroyRef, Injectable } from '@angular/core';
import { NavigationService } from './../../core/services/navigation/navigation.service';
import { StorageService } from '../../core/services/storage/storage.service';
import { RestApiService } from './../../core/services/rest-api/rest-api.service';
import { ToasterService } from '../../core/services/toaster/toaster.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authLoginURL!: string;
  authRegisterURL!: string;
  spinnerBehaviorSubject = new BehaviorSubject(false);

  constructor(
    private restApiService: RestApiService,
    private storageService: StorageService,
    private navigationService: NavigationService,
    private toasterService: ToasterService,
    private destroyRef: DestroyRef
  ) {}

  onLogin(data: any): void {
    const Subscription = this.restApiService
      .post(this.authLoginURL, data)
      .subscribe({
        next: (response: any) => {
          this.spinnerBehaviorSubject.next(false);
          if (response.success === true) {
            this.storageService.setSessionItem('token', response.token);
            this.navigationService.navigate('partner-portal');
          }
          this.toasterService.showSuccess(response.message);
        },
        error: (error: any) => {
          this.spinnerBehaviorSubject.next(false);
          this.toasterService.showError(error.message);
        },
      });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }

  onRegister(data: any): void {
    const Subscription = this.restApiService
      .post(this.authRegisterURL, data)
      .subscribe({
        next: (response: any) => {
          this.spinnerBehaviorSubject.next(false);
          if (response.success == true) {
            this.navigationService.navigate('login');
          }
          this.toasterService.showSuccess(response.message);
        },
        error: (error: any) => {
          this.spinnerBehaviorSubject.next(false);
          this.toasterService.showError(error.message);
        },
      });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }
}
