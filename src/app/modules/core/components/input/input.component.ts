import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { InputComponentModel, INPUT_TYPE_MAPPER } from './input.component.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() data!: InputComponentModel;
  @Input() formGroup!: FormGroup;
  @Input() formControl!: FormControl;

  INPUT_TYPE_MAPPER = INPUT_TYPE_MAPPER;

}
