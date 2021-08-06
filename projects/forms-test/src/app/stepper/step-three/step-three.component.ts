import { Component, OnInit, Optional } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    parent?: FormGroup;

    constructor(
        @Optional() private readonly controlContainer: ControlContainer,
        @Optional() private readonly stepperComponent: StepperComponent,
        private readonly fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.parent = this.controlContainer?.control as FormGroup;
        const fromParent = this.parent?.get('stepThree');
        if (!fromParent) {
            // change detection -- does not work with onpush
            const promise = Promise.resolve().then(() =>
                this.parent?.addControl('stepThree', this.form)
            );
        } else {
            this.form = fromParent as FormGroup;
        }
    }

    submit(): void {
        this.stepperComponent?.submit();
    }
}
