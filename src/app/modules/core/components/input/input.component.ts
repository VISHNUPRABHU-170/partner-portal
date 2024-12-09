import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { InputComponentModel, INPUT_TYPE_MAPPER } from './input.component.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  inputError = '';

  INPUT_TYPE_MAPPER = INPUT_TYPE_MAPPER;

  ngOnInit(): void {
    this.subscribeToFromControl();
  }

  subscribeToFromControl() {
    this.formGroup.get(this.data.formControlName)?.statusChanges.subscribe(() => {
      if (this.formGroup.get(this.data.formControlName)?.errors) {

      } else {

      }
    })
  }
}
