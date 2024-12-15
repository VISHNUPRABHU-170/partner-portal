import { FormControlModel } from "../form-builder/form-builder.component.model";

export interface StepperComponentModel {
  stepper: StepperModel[];
}

export interface StepperModel {
  label: string;
  formControls: FormControlModel[];
}
