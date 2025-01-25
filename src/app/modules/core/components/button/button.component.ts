import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponentModel } from './button.component.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  // Input property to accept button config from the parent component.
  @Input() data!: ButtonComponentModel;

  // Output property to emit click events to the parent component.
  event = output<ButtonComponentModel>();

  /**
   * Handles the button click event.
   * Emits the `data` as an event for the parent component to handle.
   */
  onClick(): void {
    this.event.emit(this.data);
  }
}
