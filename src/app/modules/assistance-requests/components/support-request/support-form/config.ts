import { InputType } from './../../../../core/components/input/input.component.model';
import { IconComponentModel } from "../../../../core/components/icon/icon.component.model";
import { InputComponentModel } from "../../../../core/components/input/input.component.model";
import { StepperComponentModel, StepperModel } from "../../../../core/components/stepper/stepper.component.model";
import { ComponentType, FormControlModel, FormValidators } from '../../../../core/components/form-builder/form-builder.component.model';
import { SelectComponentModel } from '../../../../core/components/select/select.component.model';
import { TextareaComponentModel } from '../../../../core/components/textarea/textarea.component.model';
import { ChipInputComponentModel } from '../../../../core/components/chip-input/chip-input.component.model';
import { DatePickerComponentModel } from '../../../../core/components/date-picker/date-picker.component.model';

export const backIconConfig: IconComponentModel = {
  name: 'arrow_back',
  routerLink: '/partner-portal/assistance-requests/support-dashboard'
};

const titleInputConfig: InputComponentModel = {
  label: "Enter Title",
  type: InputType.TEXT
};

const titleControlConfig: FormControlModel = {
  name: 'title',
  config: titleInputConfig,
  componentType: ComponentType.INPUT,
  validators: [FormValidators.REQUIRED]
};

const descriptionInputConfig: TextareaComponentModel = {
  label: "Enter Description",
  type: InputType.TEXT
};

const descriptionControlConfig: FormControlModel = {
  name: 'description',
  config: descriptionInputConfig,
  componentType: ComponentType.TEXT_AREA,
  validators: [FormValidators.REQUIRED]
};

const selectPriorityLevelConfig: SelectComponentModel = {
  label: "Priority Level",
  options: [
    { key: 'high', value: 'High' },
    { key: 'medium', value: 'Medium' },
    { key: 'low', value: 'Low' }
  ]
};

const selectPriorityLevelControlConfig: FormControlModel = {
  name: 'selectRequestType',
  config: selectPriorityLevelConfig,
  componentType: ComponentType.SELECT,
  validators: [FormValidators.REQUIRED]
};

const timeLineInputConfig: DatePickerComponentModel = {
  label: "Deadline"
};

const timeLineControlConfig: FormControlModel = {
  name: "deadLine",
  config: timeLineInputConfig,
  componentType: ComponentType.DATE_PICKER,
  validators: [FormValidators.REQUIRED]
};

const titleStepperConfig: StepperModel = {
  label: 'Issue Details',
  formControls: [titleControlConfig, descriptionControlConfig]
};

const requestTypeStepperConfig: StepperModel = {
  label: "Timeline",
  formControls: [selectPriorityLevelControlConfig, timeLineControlConfig]
};

const attachmentsStepperConfig: StepperModel = {
  label: 'Attachments',
  formControls: []
};

export const stepperConfig: StepperComponentModel = {
  stepper: [titleStepperConfig, requestTypeStepperConfig, attachmentsStepperConfig]
};
