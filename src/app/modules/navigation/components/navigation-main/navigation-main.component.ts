import { Component, Input } from '@angular/core';
import { NavigationMainComponentModel } from './navigation-main.component.model';
import { NavigationLinkComponent } from '../navigation-link/navigation-link.component';
import { NavigationSubComponent } from '../navigation-sub/navigation-sub.component';

@Component({
  selector: 'app-navigation-main',
  standalone: true,
  imports: [NavigationSubComponent, NavigationLinkComponent],
  templateUrl: './navigation-main.component.html',
  styleUrl: './navigation-main.component.scss'
})
export class NavigationMainComponent {
  @Input() data!: NavigationMainComponentModel;
}
