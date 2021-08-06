import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { CanDeactivateStepper } from '../../form-step.guard';

@Component({
    selector: 'tt-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit, CanDeactivateStepper {
    form?: FormGroup;

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.form = (this.controlContainer.control as FormGroup)?.controls
            ?.stepOne as FormGroup;
    }
}
