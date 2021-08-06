import { Component } from '@angular/core';

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

    submit() {
        console.log('SUBMIT :)');
    }
}
