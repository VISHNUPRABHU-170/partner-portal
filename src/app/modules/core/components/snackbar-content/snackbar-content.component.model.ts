export interface SnackbarContentComponentModel {
  content: string;
  contentType: SnackBarContentType;
}

export enum SnackBarContentType {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}

export const SNACKBAR_CONTENT_TYPE_MAPPER: { [key: string]: string} = {};

SNACKBAR_CONTENT_TYPE_MAPPER[SnackBarContentType.SUCCESS] = 'success';
SNACKBAR_CONTENT_TYPE_MAPPER[SnackBarContentType.WARNING] = 'warning';
SNACKBAR_CONTENT_TYPE_MAPPER[SnackBarContentType.ERROR] = 'error';
