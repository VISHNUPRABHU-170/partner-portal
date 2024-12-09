import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { logInButtonConfig, passwordInputConfig, registerLinkConfig, userNameInputConfig } from './config';
import { InputComponent } from '../../../core/components/input/input.component';
import { LinkComponent } from '../../../core/components/link/link.component';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, InputComponent, LinkComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  userNameInputConfig = userNameInputConfig;
  passwordInputConfig = passwordInputConfig;
  logInButtonConfig = logInButtonConfig;
  registerLinkConfig = registerLinkConfig;

  constructor (private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationFormGroup();
  }

  registrationFormGroup() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
}
