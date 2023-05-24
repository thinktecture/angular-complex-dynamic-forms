import { Component, Input } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'tt-person-details',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent {
    @Input() personGroup?: UntypedFormGroup;

    get ageCtrl(): UntypedFormControl | undefined {
        const age = this.personGroup?.get('age');
        return age as UntypedFormControl;
    }
}
