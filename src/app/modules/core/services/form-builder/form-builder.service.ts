import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormBuilderComponentModel, FormControlModel } from '../../components/form-builder/form-builder.component.model';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor (private formBuilder: FormBuilder) { }

  createFormGroup(formGroup: FormGroup, config: FormBuilderComponentModel): FormGroup {
    config.formGroup.forEach((controlConfig: FormControlModel) => {
      formGroup.addControl(controlConfig.name, this.createFormControl());
    });
    return formGroup;
  }

  createFormControl() {
    return new FormControl();
  }
}
