import { RestApiService } from './../../core/services/rest-api/rest-api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authLoginURL!: string;
  authRegisterURL!: string;

  constructor (private restApiService: RestApiService) { }

  onLogin(data: any) {
    this.restApiService.post(this.authLoginURL, data);
  }

  onRegister() {

  }
}
