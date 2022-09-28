import { Component, OnInit, Optional } from '@angular/core';
import {
    ControlContainer,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { CanDeactivateStepper } from '../../form-step.guard';
import { StepperComponent } from '../stepper.component';

@Component({
    selector: 'app-step-three',
    templateUrl: './step-three.component.html',
    styleUrls: ['./step-three.component.scss'],
})
export class StepThreeComponent implements OnInit, CanDeactivateStepper {
    form = this.fb.group({
        extendInput: [undefined, [Validators.required]],
        otherExtend: undefined,
    });
    parent?: UntypedFormGroup;

    constructor(
        @Optional() private readonly controlContainer: ControlContainer,
        @Optional() private readonly stepperComponent: StepperComponent,
        private readonly fb: UntypedFormBuilder
    ) {}

    ngOnInit(): void {
        this.parent = this.controlContainer?.control as UntypedFormGroup;
        const fromParent = this.parent?.get('stepThree');
        if (!fromParent) {
            // change detection -- does not work with onpush
            const promise = Promise.resolve().then(() =>
                this.parent?.addControl('stepThree', this.form)
            );
        } else {
            this.form = fromParent as UntypedFormGroup;
        }
    }

    submit(): void {
        this.stepperComponent?.submit();
    }

    reset() {
        this.controlContainer.reset();
    }
}
