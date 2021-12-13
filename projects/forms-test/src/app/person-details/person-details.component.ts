import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'tt-person-details',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent {
    @Input() formGroup!: FormGroup;

    get ageCtrl(): FormControl | undefined {
        const age = this.formGroup.get('age');
        return age as FormControl;
    }
}
