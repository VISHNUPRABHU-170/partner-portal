import { Component } from '@angular/core';
import { HeaderComponent } from './modules/header/components/header/header.component';
import { NavigationMainComponent } from './modules/navigation/components/navigation-main/navigation-main.component';
import { navigationConfig } from './modules/core/configs/navigation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavigationMainComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  navigationConfig = navigationConfig;
}
