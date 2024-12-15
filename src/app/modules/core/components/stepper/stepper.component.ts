import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
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
}
