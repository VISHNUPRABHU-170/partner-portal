import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus = new BehaviorSubject(false);

  constructor () { }

  onLogin() {
    this.authStatus.next(true);
  }

  onRegister() {
    this.authStatus.next(true);
  }
}
