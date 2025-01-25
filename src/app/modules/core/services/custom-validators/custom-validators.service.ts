import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PASSWORD_VALIDATION_RULES } from '../../constants/validation-constants';

@Injectable({
  providedIn: 'root',
})
export class CustomValidatorsService {
  password(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      const errorMessages = PASSWORD_VALIDATION_RULES.filter(rule => !rule.regex.test(value)).map(rule => rule.errorMessage);
      return errorMessages.length ? { message: errorMessages } : null;
    };
  }

  matchFields(field1: string, field2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const control1 = control.get(field1);
      const control2 = control.get(field2);
      if (control1?.value !== control2?.value) {
        if (!control1?.errors) control1?.setErrors({ message: ['Password Mismatch'] });
        if (!control2?.errors) control2?.setErrors({ message: ['Password Mismatch'] });
        return { fieldMismatch: true };
      } else {
        if (
          control1?.errors?.['message']?.length === 1 &&
          control1.errors['message'].includes('Password Mismatch')
        ) {
          control1?.setErrors(null);
        }
        if (
          control2?.errors?.['message']?.length === 1 &&
          control2.errors['message'].includes('Password Mismatch')
        ) {
          control2.setErrors(null);
        }
        return null;
      }
    };
  }
}
