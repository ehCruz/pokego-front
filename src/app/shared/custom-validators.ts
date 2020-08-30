import {AbstractControl, ValidatorFn} from "@angular/forms";

export function nomeValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = !nameRe.test(control.value);
        return forbidden ? {nomeInvalido: {value: control.value}} : null;
    };
}