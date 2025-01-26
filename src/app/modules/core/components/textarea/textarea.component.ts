import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { TextareaComponentModel } from './textarea.component.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  // Input property to accept text area config from the parent component.
  @Input() data!: TextareaComponentModel;

  // Input property for the parent form group, enabling reactive form integration.
  @Input() formGroup!: FormGroup;

  // Input property for the form control associated with this component.
  @Input() formControl!: FormControl;
}
