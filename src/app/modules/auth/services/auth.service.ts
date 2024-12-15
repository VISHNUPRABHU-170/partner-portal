import { Injectable } from '@angular/core';
import { NavigationService } from './../../core/services/navigation/navigation.service';
import { StorageService } from '../../core/services/storage/storage.service';
import { RestApiService } from './../../core/services/rest-api/rest-api.service';
import { ToasterService } from '../../core/services/toaster/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authLoginURL!: string;
  authRegisterURL!: string;

  constructor (
    private restApiService: RestApiService,
    private storageService: StorageService,
    private navigationService: NavigationService,
    private toasterService: ToasterService
  ) { }

  onLogin(data: any) {
    this.restApiService.post(this.authLoginURL, data).subscribe({
      next: (response: any) => {
        if (response.success === true) {
          this.storageService.setSessionItem('token', response.token);
          this.navigationService.navigate('partner-portal');
        }
        this.toasterService.show(response.message, response.success);
      },
      error: (error: any) => {
        this.toasterService.show(error.message, error.success);
      }
    });
  }

  onRegister(data: any) {
    this.restApiService.post(this.authRegisterURL, data).subscribe({
      next: (response: any) => {
        if (response.success == true) {
          this.navigationService.navigate('login');
        }
        this.toasterService.show(response.message, response.success);
      },
      error: (error: any) => {
        this.toasterService.show(error.message, error.success);
      }
    });
  }
}
