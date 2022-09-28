import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStepGuard } from './form-step.guard';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { StepTypedComponent } from './stepper/step-typed/step-typed.component';
import { StepOneComponent } from './stepper/step-one/step-one.component';
import { StepThreeComponent } from './stepper/step-three/step-three.component';
import { StepTwoComponent } from './stepper/step-two/step-two.component';
import { StepperComponent } from './stepper/stepper.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'routed' },
    { path: 'person', component: PersonDetailsComponent },
    { path: 'extraThree', component: StepThreeComponent },
    { path: 'template', component: TemplateDrivenComponent },
    {
        path: 'routed',
        component: StepperComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'step1' },
            {
                path: 'step1',
                component: StepOneComponent,
                canActivate: [FormStepGuard], // optional
                canDeactivate: [FormStepGuard], // optional
            },
            {
                path: 'step2',
                component: StepTwoComponent,
                canActivate: [FormStepGuard], // optional
                canDeactivate: [FormStepGuard], // optional
            },
            {
                path: 'step3',
                component: StepTypedComponent,
                canActivate: [FormStepGuard], // optional
                canDeactivate: [FormStepGuard], // optional
            },
            {
                path: 'step4',
                component: StepThreeComponent,
                canActivate: [FormStepGuard], // optional
                canDeactivate: [FormStepGuard], // optional
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
