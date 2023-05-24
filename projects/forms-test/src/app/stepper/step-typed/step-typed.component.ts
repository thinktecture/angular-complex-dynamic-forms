import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperComponent } from '../stepper.component';

@Component({
    selector: 'app-step-typed',
    templateUrl: './step-typed.component.html',
    styleUrls: ['./step-typed.component.scss'],
})
export class StepTypedComponent {
    form = this.fb.group({
        util: ['Sword', Validators.required],
        price: [666, [Validators.required, Validators.min(1)]],
    });

    // TODO Inject parent component
    // TODO Add local form to parent form
    // TODO Use different FormBuilder's
    constructor(
        private readonly fb: FormBuilder,
        private readonly stepperComponent: StepperComponent
    ) {
        this.stepperComponent.form.addControl('wish', this.form);
    }
}
