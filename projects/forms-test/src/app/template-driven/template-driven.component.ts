import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template-driven',
    templateUrl: './template-driven.component.html',
    styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent {
    person = {
        street: '',
        city: '',
    };

    submit(form: NgForm) {
        console.log('SUBMIT :)', form);
    }

    change($event: Event) {
        console.log('FORM CHANGE', $event);
    }
}
