import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { LinkComponent } from '../../../core/components/link/link.component';
import { loginFormConfig, registerLinkConfig } from './config';
import { FormBuilderComponent } from '../../../core/components/form-builder/form-builder.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, FormBuilderComponent, LinkComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFormConfig = loginFormConfig;
  registerLinkConfig = registerLinkConfig;

  onLogIn(data: any) {
    console.log(data);
  }
}
