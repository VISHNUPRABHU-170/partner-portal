import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { EMAIL_VALIDATION_RULES, PASSWORD_VALIDATION_RULES } from '../../constants/validation-constants';

/**
 * Injectable service to provide custom validators for Angular Reactive forms.
 */
@Injectable({
  providedIn: 'root',
})
export class CustomValidatorsService {
  /**
   * Custom validator to validate password based on predefined rules.
   * @returns A ValidatorFn that checks the password value against validation rules.
   * If the password fails any rule, it returns a list of error messages.
   */
  password(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      const errorMessages = PASSWORD_VALIDATION_RULES.filter(rule => !rule.regex.test(value)).map(rule => rule.errorMessage);
      return errorMessages.length ? { message: errorMessages } : null;
    };
  }

  /**
   * Custom validator to validate email based on predefined rules.
   * @returns A ValidatorFn that checks the email value against validation rules.
   * If the email fails any rule, it returns a list of error messages.
   */
  email(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      const errorMessages = EMAIL_VALIDATION_RULES.filter(rule => !rule.regex.test(value)).map(rule => rule.errorMessage);
      return errorMessages.length ? { message: errorMessages } : null;
    };
  }

  /**
   * Custom validator to ensure two form fields match, such as password and confirm password.
   * @param field1 - The name of the first field.
   * @param field2 - The name of the second field.
   * @returns A ValidatorFn that checks if the two fields have matching values.
   * Adds validation errors to both fields if they do not match.
   */
  matchFields(field1: string, field2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const control1 = control.get(field1);
      const control2 = control.get(field2);
      if (control1?.value !== control2?.value) {
        if (!control1?.errors) control1?.setErrors({ message: ['Password Mismatch'] });
        if (!control2?.errors) control2?.setErrors({ message: ['Password Mismatch'] });
        return { fieldMismatch: true };
      } else {
        if (control1?.errors?.['message']?.length === 1 && control1.errors['message'].includes('Password Mismatch')) {
          control1?.setErrors(null);
        }
        if (control2?.errors?.['message']?.length === 1 && control2.errors['message'].includes('Password Mismatch')) {
          control2.setErrors(null);
        }
        return null;
      }
    };
  }
}
