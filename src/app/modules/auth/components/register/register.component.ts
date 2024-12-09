import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InputComponent } from '../../../core/components/input/input.component';
import {
  confirmPasswordInputConfig,
  logInLinkConfig,
  passwordInputConfig,
  registerButtonConfig,
  userNameInputConfig
} from './config';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { LinkComponent } from '../../../core/components/link/link.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, InputComponent, ButtonComponent, LinkComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  userNameInputConfig = userNameInputConfig;
  passwordInputConfig = passwordInputConfig;
  confirmPasswordInputConfig = confirmPasswordInputConfig;
  registerButtonConfig = registerButtonConfig;
  logInLinkConfig = logInLinkConfig;

  constructor (private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationFormGroup();
  }

  registrationFormGroup() {
    this.registrationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
}
