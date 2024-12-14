import { Component, Input, output } from '@angular/core';
import { FormBuilderComponentModel } from './form-builder.component.model';
import { FormBuilderService } from '../../services/form-builder/form-builder.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlDirective } from '../../directives/dynamic-form-control/dynamic-form-control.directive';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [DynamicFormControlDirective, ButtonComponent],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {
  @Input() data!: FormBuilderComponentModel;
  event = output<any>();
  formGroup = new FormGroup([]);

  constructor (private formBuilder: FormBuilderService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.createFormGroup(this.formGroup, this.data);
  }

  onClick(data: any) {
    if (this.formGroup.valid) {
      this.event.emit(this.formGroup.value);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
