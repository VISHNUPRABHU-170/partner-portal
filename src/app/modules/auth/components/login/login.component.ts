import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { LinkComponent } from '../../../core/components/link/link.component';
import { loginFormConfig, progressBarConfig, registerLinkConfig } from './config';
import { FormBuilderComponent } from '../../../core/components/form-builder/form-builder.component';
import { AuthService } from '../../services/auth.service';
import { ProgressBarComponent } from "../../../core/components/progress-bar/progress-bar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, FormBuilderComponent, LinkComponent, ProgressBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginFormConfig = loginFormConfig;
  registerLinkConfig = registerLinkConfig;
  progressBarConfig = progressBarConfig;
  showSpinner!: boolean;

  constructor (private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.spinnerBehaviorSubject.subscribe((status: boolean) => {
      this.showSpinner = status;
    });
  }

  onLogIn(data: any) {
    this.authService.spinnerBehaviorSubject.next(true);
    this.authService.onLogin(data);
  }
}
