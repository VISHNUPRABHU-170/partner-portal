import { Component, Input } from '@angular/core';
import { IconComponentModel } from './icon.component.model';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() data!: IconComponentModel;

  constructor(private navigationService: NavigationService) {}

  onClick() {
    if (this.data.routerLink) {
      this.navigationService.navigate(this.data.routerLink);
    }
  }
}
