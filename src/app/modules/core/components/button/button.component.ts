import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponentModel } from './button.component.model';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() data!: ButtonComponentModel;

  constructor(private navigationService: NavigationService) {}

  onClick() {
    if (this.data.routerLink) {
      this.navigationService.navigate(this.data.routerLink);
    }
  }
}
