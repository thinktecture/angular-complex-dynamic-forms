import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { StepOneComponent } from './stepper/step-one/step-one.component';
import { StepThreeComponent } from './stepper/step-three/step-three.component';
import { StepTwoComponent } from './stepper/step-two/step-two.component';
import { StepperComponent } from './stepper/stepper.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
    declarations: [
        AppComponent,
        StepperComponent,
        StepOneComponent,
        StepTwoComponent,
        PersonDetailsComponent,
        StepThreeComponent,
        TemplateDrivenComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
