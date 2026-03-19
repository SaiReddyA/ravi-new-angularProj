import { AbstractControl, ValidationErrors } from "@angular/forms";


export class CustomValidator {
    static spaceValidation(control: AbstractControl) : ValidationErrors | null {

        return control.value.includes(' ') ? { spaceError: true } : null;
    }


}
 

export function spaceValidation1(control: AbstractControl) : ValidationErrors | null {

    return control.value.includes(' ') ? { spaceError: true } : null;
}