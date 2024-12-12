import { Component, DestroyRef } from '@angular/core';
import { HeaderComponent } from './modules/header/components/header/header.component';
import { NavigationMainComponent } from './modules/navigation/components/navigation-main/navigation-main.component';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor (private authService: AuthService, private destroyRef: DestroyRef, private router: Router) { }

  ngOnInit(): void {
    const Subscription = this.authService.authStatus.subscribe((status: boolean) => {
      if (status) {
        this.router.navigate(['partner-portal']);
      } else {
        this.router.navigate(['login']);
      }
    });
    this.destroyRef.onDestroy(() => {
      Subscription?.unsubscribe();
    });
  }
}
