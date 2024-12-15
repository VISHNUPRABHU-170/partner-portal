import { NavigationService } from './../../core/services/navigation/navigation.service';
import { StorageService } from '../../core/services/storage/storage.service';
import { RestApiService } from './../../core/services/rest-api/rest-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authLoginURL!: string;
  authRegisterURL!: string;

  constructor (
    private restApiService: RestApiService,
    private storageService: StorageService,
    private navigationService: NavigationService
  ) { }

  onLogin(data: any) {
    this.restApiService.post(this.authLoginURL, data).subscribe({
      next: (response: any) => {
        if (response.success === true) {
          this.storageService.setSessionItem('token', response.token);
          this.navigationService.navigate('partner-portal');
        }
      },
      error: (error: any) => {

      }
    });
  }

  onRegister(data: any) {
    this.restApiService.post(this.authRegisterURL, data).subscribe({
      next: (response: any) => {
        if (response.success == true) {
          this.navigationService.navigate('login');
        }
      },
      error: (error: any) => {

      }
    });
  }
}
