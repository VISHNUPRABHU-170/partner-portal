import { NavigationLinkComponent } from './../navigation-link/navigation-link.component';
import { Component, Input } from '@angular/core';
import { NavigationSubComponentModel } from './navigation-sub.component.model';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navigation-sub',
  standalone: true,
  imports: [NavigationLinkComponent, MatIconModule, MatDividerModule],
  templateUrl: './navigation-sub.component.html',
  styleUrl: './navigation-sub.component.scss'
})
export class NavigationSubComponent {
  @Input() data!: NavigationSubComponentModel;
}
