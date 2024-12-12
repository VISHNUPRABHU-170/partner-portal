import { ButtonComponentModel } from '../button/button.component.model';
import { Type } from "@angular/core";
import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";
import { InputComponentModel } from "../input/input.component.model";

export interface FormBuilderComponentModel {
  formGroup: FormControlModel[];
  formFooter: ButtonComponentModel[];
}

export interface FormControlModel {
  name: string;
  config: InputComponentModel;
  componentType: ComponentType;
}

export enum ComponentType {
  INPUT = "INPUT",
  BUTTON = "BUTTON",
}

export type dynamicComponentType = Type<InputComponent>

export const COMPONENT_TYPE_MAPPER: { [key: string]: dynamicComponentType; } = {};

COMPONENT_TYPE_MAPPER[ComponentType.INPUT] = InputComponent;
// COMPONENT_TYPE_MAPPER[ComponentType.BUTTON] = ButtonComponent;
