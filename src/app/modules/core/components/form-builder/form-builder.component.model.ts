import { ButtonComponentModel } from '../button/button.component.model';
import { Type } from "@angular/core";
import { InputComponent } from "../input/input.component";
import { InputComponentModel } from "../input/input.component.model";

export interface FormBuilderComponentModel {
  formGroup: FormControlModel[];
  formFooter: ButtonComponentModel[];
  validators?: FormGroupValidatorModel;
}

export interface FormGroupValidatorModel {
  validatorType: FormValidators;
  config: {
    control1: string;
    control2: string;
  }
}

export interface FormControlModel {
  name: string;
  config: InputComponentModel;
  componentType: ComponentType;
  validators: FormValidators[];
  value?: string;
}

export enum FormValidators {
  REQUIRED = 'REQUIRED',
  PASSWORD = 'PASSWORD',
  MATCH_FIELD = 'MATCH_FIELD'
}

export enum ComponentType {
  INPUT = "INPUT",
  BUTTON = "BUTTON",
}

export type dynamicComponentType = Type<InputComponent>;

export const COMPONENT_TYPE_MAPPER: { [key: string]: dynamicComponentType; } = {};

COMPONENT_TYPE_MAPPER[ComponentType.INPUT] = InputComponent;

