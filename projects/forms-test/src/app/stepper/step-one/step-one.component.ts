import { Component, OnInit } from '@angular/core';
import { ControlContainer, UntypedFormGroup } from '@angular/forms';
import { CanDeactivateStepper } from '../../form-step.guard';

@Component({
    selector: 'tt-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit, CanDeactivateStepper {
    form?: UntypedFormGroup;

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.form = (this.controlContainer.control as UntypedFormGroup)?.controls
            ?.stepOne as UntypedFormGroup;
    }
}
