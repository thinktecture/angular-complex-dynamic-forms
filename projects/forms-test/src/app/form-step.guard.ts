import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanDeactivate,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivateStepper {
    form?: UntypedFormGroup;
}

@Injectable({
    providedIn: 'root',
})
export class FormStepGuard implements CanActivate, CanDeactivate<CanDeactivateStepper> {
    canDeactivate(
        component: any,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const valid =
            (component?.form?.valid ?? true) ||
            (nextState &&
                Number.parseInt(nextState.url.charAt(nextState.url.length - 1), 10) <
                    Number.parseInt(
                        currentState.url.charAt(currentState.url.length - 1),
                        10
                    ));
        if (!valid) {
            alert('Form Step is not Valid');
        }
        return valid;
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log(route.url[0].path);
        return true;
    }
}
