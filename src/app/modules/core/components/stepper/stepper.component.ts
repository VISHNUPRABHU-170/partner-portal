import { Component, Input, output, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { StepperComponentModel, StepperModel } from './stepper.component.model';
import { FormBuilderComponentModel } from '../form-builder/form-builder.component.model';
import { FormBuilderService } from '../../services/form-builder/form-builder.service';
import { DynamicFormControlDirective } from '../../directives/dynamic-form-control/dynamic-form-control.directive';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [MatStepperModule, ReactiveFormsModule, DynamicFormControlDirective, MatButtonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  @Input() data!: StepperComponentModel;
  event = output<any>();

  @ViewChild('stepper') stepper!: MatStepper;

  formGroup = new FormGroup([]);

  constructor (private formBuilder: FormBuilderService) { }

  ngOnInit(): void {
    let config: FormBuilderComponentModel = {
      formGroup: [],
      formFooter: []
    };
    this.data.stepper.forEach((stepper: StepperModel) => {
      config.formGroup = [...config.formGroup, ...stepper.formControls];
    });
    this.formGroup = this.formBuilder.createFormGroup(this.formGroup, config);
  }

  navigateToErrorSection() {
    this.data.stepper.find((stepper, index) => {
      const hasError = stepper.formControls.some(control => {
        if (this.formGroup.get(control.name)?.errors) {
          this.stepper.selectedIndex = index;
          return true;
        }
        return false;
      });
      return hasError;
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.event.emit(this.formGroup.value);
      this.stepper.reset();
    } else {
      this.navigateToErrorSection();
      this.formGroup.markAllAsTouched();
    }
  }
}
