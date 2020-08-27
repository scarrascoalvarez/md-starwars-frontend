import { FormControl, ValidatorFn, FormGroup } from '@angular/forms';
const EMAIL_REGEX: any = /\S+@\S+\.\S+/;

export class CustomValidators {
    /**
     * Validate control value to be between min and max length
     * @param prms Max and Min values to validate between them
     */
    static minMaxLength(prms: { min?: number, max?: number }): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {

            const val: string = control.value;
            if (val) {
                if (prms.min && prms.max) {
                    return val.length < prms.min || val.length > prms.max ? { charactersLength: true } : null;
                } else if (prms.min !== null) {
                    return val.length < prms.min ? { charactersLength: true } : null;
                } else if (prms.max !== null) {
                    return val.length > prms.max ? { charactersLength: true } : null;
                } else {
                    return null;
                }
            }
        };
    }

    static emailValidation(): ValidatorFn {
        return (control: FormControl): { [key: string]: any } => {
            const val: string = control.value;
            if (val) {
                return val.match(EMAIL_REGEX) ? null : { invalidEmail: true };
            }
            return null;
        };
    }
}
