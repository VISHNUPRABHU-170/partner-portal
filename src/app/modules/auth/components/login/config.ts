import { ButtonComponentModel } from "../../../core/components/button/buttom.component.model";
import { InputComponentModel, InputType } from "../../../core/components/input/input.component.model";
import { LinkComponentModel } from "../../../core/components/link/link.component.model";

export const userNameInputConfig: InputComponentModel = {
  label: "Enter UserName",
  type: InputType.TEXT,
  formControlName: 'userName'
};

export const passwordInputConfig: InputComponentModel = {
  label: "Enter Password",
  type: InputType.PASSWORD,
  formControlName: 'password'
};

export const logInButtonConfig: ButtonComponentModel = {
  label: 'Login',
  routerLink: ''
};

export const registerLinkConfig: LinkComponentModel = {
  label: 'Register',
  routerLink: 'register'
};
