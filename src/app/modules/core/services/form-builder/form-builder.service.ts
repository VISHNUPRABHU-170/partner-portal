import { CustomValidatorsService } from './../custom-validators/custom-validators.service';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  FormBuilderComponentModel,
  FormControlModel,
  FormValidators,
} from '../../components/form-builder/form-builder.component.model';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(
    private formBuilder: FormBuilder,
    private customValidatorsService: CustomValidatorsService
  ) {}

  /**
   * Creates a FormGroup dynamically based on the provided configuration.
   * @param formGroup - FormGroup instance.
   * @param config - The configuration for the form group and its controls.
   * @returns FormGroup - The generated FormGroup.
   */
  createFormGroup(
    formGroup: FormGroup,
    config: FormBuilderComponentModel
  ): FormGroup {
    config.formGroup.forEach((controlConfig: FormControlModel) => {
      formGroup.addControl(
        controlConfig.name,
        this.createFormControl(controlConfig)
      );
    });
    if (config.validators) {
      formGroup.addValidators(
        this.mapFormGroupValidators(
          config.validators.validatorType,
          config.validators.config
        )
      );
    }
    return formGroup;
  }

  /**
   * Creates a FormControl dynamically based on the provided configuration.
   * @param controlConfig - The configuration for the form control.
   * @returns FormControl - The generated FormControl.
   */
  createFormControl(controlConfig: FormControlModel) {
    return this.formBuilder.control(
      controlConfig.value,
      this.mapFormControlValidators(controlConfig.validators)
    );
  }

  /**
   * Maps a list of validator configurations to Angular Validators.
   * @param validators - The list of validator types and values.
   * @returns Array of Angular validators.
   */
  private mapFormGroupValidators(
    validators: FormValidators,
    config: any
  ): any[] {
    const formValidators = [];

    if (validators.includes(FormValidators.MATCH_FIELD)) {
      formValidators.push(
        this.customValidatorsService.matchFields(
          config.control1,
          config.control2
        )
      );
    }

    return formValidators;
  }

  /**
   * Maps a list of validator configurations to Angular Validators.
   * @param validators - The list of validator types and values.
   * @returns Array of Angular validators.
   */
  private mapFormControlValidators(validators: FormValidators[]): any[] {
    const formValidators = [];

    if (validators.includes(FormValidators.REQUIRED)) {
      formValidators.push(Validators.required);
    }
    if (validators.includes(FormValidators.PASSWORD)) {
      formValidators.push(this.customValidatorsService.password());
    }
    if (validators.includes(FormValidators.MATCH_FIELD)) {
      formValidators.push();
    }

    return formValidators;
  }
}
