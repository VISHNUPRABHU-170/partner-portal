import { Component, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponentModel } from './select.component.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [MatSelectModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  // Input property to accept icon configuration from the parent component.
  @Input() data!: SelectComponentModel;

  // Input property for the parent form group, enabling reactive form integration.
  @Input() formGroup!: FormGroup;

  // Input property for the form control associated with this component.
  @Input() formControl!: FormControl;
}
