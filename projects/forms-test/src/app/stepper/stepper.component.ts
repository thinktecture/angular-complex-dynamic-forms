import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    UntypedFormBuilder,
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { spouseNameValidator } from './stepper.validators';
import { debounceTime } from 'rxjs/operators';

export function createPersonFormGroup(fb: UntypedFormBuilder): UntypedFormGroup {
    return fb.group({
        firstName: [undefined, [Validators.required]],
        lastName: [undefined, [Validators.required]],
        age: [undefined, [Validators.min(18)]], // Required min "age" but no input is allowed, too
    });
}

@Component({
    selector: 'tt-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit, OnDestroy {
    readonly form = this.untypedFormBuilder.group(
        {
            stepOne: createPersonFormGroup(this.untypedFormBuilder),
            stepTwo: this.untypedFormBuilder.group({
                spouse: createPersonFormGroup(this.untypedFormBuilder),
                children: this.untypedFormBuilder.array([]),
            }),
        },
        // TODO Group Validator to check names
        { validators: [spouseNameValidator] }
    );

    errors: any;
    private checkSubscription$ = Subscription.EMPTY;

    constructor(private readonly untypedFormBuilder: UntypedFormBuilder) {}

    ngOnInit(): void {
        // demonstration purpose
        this.checkSubscription$ = this.form.valueChanges
            .pipe(debounceTime(300))
            .subscribe(() => (this.errors = this.getFormErrors(this.form)));
    }

    ngOnDestroy() {
        this.checkSubscription$.unsubscribe();
    }

    // demonstration purpose
    // https://stackoverflow.com/a/60530162
    getFormErrors(form: AbstractControl): any {
        if (form instanceof UntypedFormControl) {
            return form.errors;
        }
        if (form instanceof UntypedFormGroup) {
            const groupErrors = form.errors;
            const formErrors = groupErrors ? { ...groupErrors } : {};
            Object.keys(form.controls).forEach((key) => {
                const error = this.getFormErrors(form.get(key) as any);
                if (error) {
                    formErrors[key] = error;
                }
            });
            return Object.keys(formErrors).length > 0 ? formErrors : null;
        }
    }

    submit(): void {
        console.log('STEPPER SUBMIT');
    }
}
