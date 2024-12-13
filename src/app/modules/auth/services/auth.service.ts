import { RestApiService } from './../../core/services/rest-api/rest-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authLoginURL!: string;
  authRegisterURL!: string;

  constructor (private restApiService: RestApiService) { }

  onLogin(data: any) {
    this.restApiService.post(this.authLoginURL, data).subscribe({
      next: (response: any) => {

      },
      error: (error: any) => {

      }
    });
  }

  onRegister(data: any) {
    this.restApiService.post(this.authRegisterURL, data).subscribe({
      next: (response: any) => {

      },
      error: (error: any) => {

      }
    });
  }
}
