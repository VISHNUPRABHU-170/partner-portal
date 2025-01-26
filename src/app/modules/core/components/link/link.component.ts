import { Component, Input, output } from '@angular/core';
import { LinkComponentModel } from './link.component.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  // Input property to accept link config from the parent component.
  @Input() data!: LinkComponentModel;

  // Output property to emit click events to the parent component.
  event = output();

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
