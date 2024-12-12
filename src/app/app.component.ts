import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationService } from './modules/core/services/navigation/navigation.service';
import { AuthService } from './modules/auth/services/auth.service';
import { environments } from './environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor (
    private service: NavigationService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.authLoginURL = environments.authLoginURL;
    this.authService.authRegisterURL = environments.authRegisterURL;
  }
}
