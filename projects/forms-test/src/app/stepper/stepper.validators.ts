import { AbstractControl, ValidationErrors } from '@angular/forms';

export function spouseNameValidator(control: AbstractControl): ValidationErrors | null {
    const model = control.value;

    const name = model.stepOne?.lastName;
    const spouseName = model.stepTwo?.spouse?.lastName;

    if (name && spouseName) {
        if (name !== spouseName) {
            return { spouseName: 'Last names do not match' };
        }
    }
    return null;
}
