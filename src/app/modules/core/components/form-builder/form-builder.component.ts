import { Component, Input, output, OnInit } from '@angular/core';
import { FormBuilderComponentModel } from './form-builder.component.model';
import { FormBuilderService } from '../../services/form-builder/form-builder.service';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlDirective } from '../../directives/dynamic-form-control/dynamic-form-control.directive';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [DynamicFormControlDirective, ButtonComponent],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
})
export class FormBuilderComponent implements OnInit {
  // Input property to accept form config from the parent component.
  @Input() data!: FormBuilderComponentModel;

  // Output property to emit the form values back to the parent when the form is submitted.
  event = output<any>();

  // FormGroup instance to hold the form controls and manage their state.
  formGroup = new FormGroup([]);

  // Binding the onClick method to handle form submission and validation for enter key press.
  onInputKeyPress = this.onClick.bind(this);

  constructor(private formBuilder: FormBuilderService) {}

  /**
   * Initialize the form group using the FormBuilderService.
   */
  ngOnInit(): void {
    this.formGroup = this.formBuilder.createFormGroup(this.formGroup, this.data);
  }

  /**
   * Handles form submission when the submit button is clicked.
   * If the form is valid, the form values are emitted to the parent component.
   * If the form is invalid, all controls are marked as touched to trigger validation errors.
   */
  onClick(): void {
    if (this.formGroup.valid) {
      this.event.emit(this.formGroup.value);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
