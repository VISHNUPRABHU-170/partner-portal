import { ButtonComponentModel } from '../button/button.component.model';
import { Type } from "@angular/core";
import { InputComponent } from "../input/input.component";
import { InputComponentModel } from "../input/input.component.model";
import { SelectComponentModel } from '../select/select.component.model';
import { SelectComponent } from '../select/select.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { ChipInputComponent } from '../chip-input/chip-input.component';
import { ChipInputComponentModel } from '../chip-input/chip-input.component.model';

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
  config: InputComponentModel | SelectComponentModel | ChipInputComponentModel;
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
  SELECT = "SELECT",
  TEXT_AREA = "TEXT_AREA",
  CHIP_INPUT = "CHIP_INPUT"
}

export type dynamicComponentType = Type<InputComponent | SelectComponent | TextareaComponent | ChipInputComponent>;

export const COMPONENT_TYPE_MAPPER: { [key: string]: dynamicComponentType; } = {};

COMPONENT_TYPE_MAPPER[ComponentType.INPUT] = InputComponent;
COMPONENT_TYPE_MAPPER[ComponentType.SELECT] = SelectComponent;
COMPONENT_TYPE_MAPPER[ComponentType.TEXT_AREA] = TextareaComponent;
COMPONENT_TYPE_MAPPER[ComponentType.CHIP_INPUT] = ChipInputComponent;
