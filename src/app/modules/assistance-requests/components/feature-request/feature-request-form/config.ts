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
  routerLink: '/partner-portal/assistance-requests/feature-request-dashboard'
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
  label: "Feature Deadline"
};

const timeLineControlConfig: FormControlModel = {
  name: "deadLine",
  config: timeLineInputConfig,
  componentType: ComponentType.DATE_PICKER,
  validators: [FormValidators.REQUIRED]
};

const tagsSelectionInputConfig: ChipInputComponentModel = {
  label: 'Select Tags',
  autoCompleteOptions: [
    { key: 'aws', value: 'AWS' },
    { key: 'azure', value: 'AZURE' },
    { key: 'gcp', value: 'GCP' }
  ]
};

const tagsSelectionControlConfig: FormControlModel = {
  name: 'selectTags',
  config: tagsSelectionInputConfig,
  componentType: ComponentType.CHIP_INPUT,
  validators: [FormValidators.REQUIRED]
};

const requestTypeStepperConfig: StepperModel = {
  label: "Request Details",
  formControls: [selectPriorityLevelControlConfig, timeLineControlConfig]
};

const titleStepperConfig: StepperModel = {
  label: 'Feature Details',
  formControls: [titleControlConfig, descriptionControlConfig]
};

const tagsStepperConfig: StepperModel = {
  label: 'Attachments',
  formControls: [tagsSelectionControlConfig]
};

export const stepperConfig: StepperComponentModel = {
  stepper: [titleStepperConfig, requestTypeStepperConfig, tagsStepperConfig]
};
