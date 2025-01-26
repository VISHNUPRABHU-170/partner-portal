import { Component, Input, output } from '@angular/core';
import { IconComponentModel } from './icon.component.model';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../services/navigation/navigation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  // Input property to accept icon configuration from the parent component.
  @Input() data!: IconComponentModel;

  // Output property to emit click events to the parent component
  event = output();

  constructor(private navigationService: NavigationService) {}

  /**
   * Handles the click event for the icon.
   * Emits an event to the parent component if the icon does not have a defined routerLink.
   */
  onClick(): void {
    if (!this.data.routerLink) {
      this.event.emit();
    }
  }
}
