import { navigationConfig } from '../navigation/configs/navigation';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavigationMainComponent } from '../navigation/components/navigation-main/navigation-main.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, NavigationMainComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  navigationConfig = navigationConfig;
}
