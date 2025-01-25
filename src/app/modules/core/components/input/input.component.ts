import { Component, Input, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { InputComponentModel, INPUT_TYPE_MAPPER } from './input.component.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  // Input property to accept input configuration from the parent component.
  @Input() data!: InputComponentModel;

  // Input property for the parent form group, enabling reactive form integration.
  @Input() formGroup!: FormGroup;

  // Input property for the form control associated with this component.
  @Input() formControl!: FormControl;

  // Output event emitter to notify parent component when 'Enter' key is pressed.
  enterKeyPress = output();

  // Mapper for input field types, used for rendering different input types based on configuration.
  INPUT_TYPE_MAPPER = INPUT_TYPE_MAPPER;

  /**
   * Handles the key press event for the input field.
   * Emits an event when the 'Enter' key is pressed.
   */
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.enterKeyPress.emit();
    }
  }
}
