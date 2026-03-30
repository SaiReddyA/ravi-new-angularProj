import { AbstractControl, ValidationErrors } from '@angular/forms';

export function pincodeValidator(control: AbstractControl): ValidationErrors | null {

  const value = control.value;

  // skip if empty (required validator handles empty)
  if (!value) return null;

  // — check starts with 0
  if (value.toString().startsWith('0')) {
    return { startsWithZero: true };  //  invalid
  }

  //  check exactly 6 digits
  if (!/^\d{6}$/.test(value)) {
    return { invalidPincode: true };  //  invalid
  }

  return null; //  valid — no errors
}