import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InputComponent } from '../../../core/components/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { LinkComponent } from '../../../core/components/link/link.component';
import { logInLinkConfig, registerFormConfig } from './config';
import { FormBuilderComponent } from '../../../core/components/form-builder/form-builder.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, FormBuilderComponent, LinkComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerFormConfig = registerFormConfig;
  logInLinkConfig = logInLinkConfig;

  constructor (private authService: AuthService) { }

  onRegister(data: any) {
    this.authService.onRegister();
  }
}
