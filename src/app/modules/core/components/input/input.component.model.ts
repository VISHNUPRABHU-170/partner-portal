export interface InputComponentModel {
  label: string;
  type: InputType;
}

export enum InputType {
  TEXT = 'TEXT',
  EMAIL = 'EMAIL',
  PASSWORD = 'PASSWORD'
}

export const INPUT_TYPE_MAPPER: { [key: string]: string; } = {};

INPUT_TYPE_MAPPER[InputType.TEXT] = 'text';
INPUT_TYPE_MAPPER[InputType.EMAIL] = 'email';
INPUT_TYPE_MAPPER[InputType.PASSWORD] = 'password';
