import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponentModel } from './button.component.model';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() data!: ButtonComponentModel;
  event = output<ButtonComponentModel>();

  constructor(private navigationService: NavigationService) {}

  onClick() {
    this.event.emit(this.data);
  }
}
