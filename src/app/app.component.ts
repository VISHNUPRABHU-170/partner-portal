import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';
import { environments } from './environments/environment';
import { RestApiService } from './modules/core/services/rest-api/rest-api.service';
import { endPoints } from './modules/core/constants/endPoints';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private restApiService: RestApiService
  ) {}

  ngOnInit(): void {
    this.authService.authLoginURL = endPoints.authLoginURL;
    this.authService.authRegisterURL = endPoints.authRegisterURL;
    this.restApiService.backendBaseURL = environments.backendBaseURL;
  }
}
