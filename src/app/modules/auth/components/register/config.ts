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

const confirmPasswordInputConfig: InputComponentModel = {
  label: "Confirm Password",
  type: InputType.PASSWORD,
};

const confirmPasswordFormControlConfig: FormControlModel = {
  name: 'confirmPassword',
  config: confirmPasswordInputConfig,
  componentType: ComponentType.INPUT
}

const registerButtonConfig: ButtonComponentModel = {
  label: 'Register',
  routerLink: 'partner-portal'
};

export const logInLinkConfig: LinkComponentModel = {
  label: 'Login',
  routerLink: 'login'
};

export const registerFormConfig: FormBuilderComponentModel = {
  formGroup: [userNameFormControlConfig, passwordFormControlConfig, confirmPasswordFormControlConfig],
  formFooter: [registerButtonConfig]
};
