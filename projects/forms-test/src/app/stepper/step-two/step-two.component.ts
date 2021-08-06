import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormControl, FormGroup } from '@angular/forms';
import { CanDeactivateStepper } from '../../form-step.guard';

@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit, CanDeactivateStepper {
    form?: FormGroup;

    get childrenArray(): FormControl[] {
        return ((this.form?.get('stepTwo.children') as FormArray)?.controls ||
            []) as FormControl[];
    }

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.form = this.controlContainer.control as FormGroup;
    }

    addChild(): void {
        (this.form?.get('stepTwo.children') as FormArray)?.push(new FormControl());
    }
}
