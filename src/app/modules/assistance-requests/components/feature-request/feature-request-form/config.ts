import { InputType } from './../../../../core/components/input/input.component.model';
import { IconComponentModel } from "../../../../core/components/icon/icon.component.model";
import { InputComponentModel } from "../../../../core/components/input/input.component.model";
import { StepperComponentModel, StepperModel } from "../../../../core/components/stepper/stepper.component.model";
import { ComponentType, FormControlModel, FormValidators } from '../../../../core/components/form-builder/form-builder.component.model';

export const backIconConfig: IconComponentModel = {
  name: 'arrow_back',
  routerLink: '/partner-portal/assistance-requests/feature-request-dashboard'
};

const selectRequestTypeConfig: InputComponentModel = {
  label: "Select Request Type",
  type: InputType.TEXT,
  className: 'stepper-field'
}

const selectRequestTypeControlConfig: FormControlModel = {
  name: 'selectRequestType',
  config: selectRequestTypeConfig,
  componentType: ComponentType.INPUT,
  validators: [FormValidators.REQUIRED]
}

const titleInputConfig: InputComponentModel = {
  label: "Enter title",
  type: InputType.TEXT,
  className: 'stepper-field'
}

const titleControlConfig: FormControlModel = {
  name: 'title',
  config: titleInputConfig,
  componentType: ComponentType.INPUT,
  validators: [FormValidators.REQUIRED]
}

const requestTypeStepperConfig: StepperModel = {
  label: "Request Type",
  formControls: [selectRequestTypeControlConfig]
};

const titleStepperConfig: StepperModel = {
  label: 'Enter Title',
  formControls: [titleControlConfig]
}

export const stepperConfig: StepperComponentModel = {
  stepper: [requestTypeStepperConfig, titleStepperConfig]
};
