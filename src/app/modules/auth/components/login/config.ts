import { ButtonComponentModel } from "../../../core/components/button/button.component.model";
import { ComponentType, FormBuilderComponentModel, FormControlModel } from "../../../core/components/form-builder/form-builder.component.model";
import { InputComponentModel, InputType } from "../../../core/components/input/input.component.model";
import { LinkComponentModel } from "../../../core/components/link/link.component.model";

const userNameInputConfig: InputComponentModel = {
  label: "Enter UserName",
  type: InputType.TEXT,
};

const userNameFormControlConfig: FormControlModel = {
  name: 'userName',
  config: userNameInputConfig,
  componentType: ComponentType.INPUT
}

const passwordInputConfig: InputComponentModel = {
  label: "Enter Password",
  type: InputType.PASSWORD,
};

const passwordFormControlConfig: FormControlModel = {
  name: 'password',
  config: passwordInputConfig,
  componentType: ComponentType.INPUT
}

const logInButtonConfig: ButtonComponentModel = {
  label: 'Login',
  routerLink: 'partner-portal'
};

export const registerLinkConfig: LinkComponentModel = {
  label: 'Register',
  routerLink: 'register'
};

export const loginFormConfig: FormBuilderComponentModel = {
  formGroup: [userNameFormControlConfig, passwordFormControlConfig],
  formFooter: [logInButtonConfig]
}
