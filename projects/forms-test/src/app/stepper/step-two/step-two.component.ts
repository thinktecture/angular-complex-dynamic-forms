import { Component, OnInit } from '@angular/core';
import {
    ControlContainer,
    UntypedFormArray,
    UntypedFormControl,
    UntypedFormGroup,
} from '@angular/forms';
import { CanDeactivateStepper } from '../../form-step.guard';

@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit, CanDeactivateStepper {
    form?: UntypedFormGroup;

    get childrenArray(): UntypedFormControl[] {
        return ((this.form?.get('stepTwo.children') as UntypedFormArray)?.controls ||
            []) as UntypedFormControl[];
    }

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        // TODO: Get FormGroup from ControlContainer
        this.form = this.controlContainer.control as UntypedFormGroup;
    }

    addChild(): void {
        (this.form?.get('stepTwo.children') as UntypedFormArray)?.push(
            new UntypedFormControl()
        );
    }
}
