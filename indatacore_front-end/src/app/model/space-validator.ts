import { FormControl, ValidationErrors } from '@angular/forms';
export class SpaceValidator {
  static onlyContainSpace(control: FormControl): ValidationErrors | null {
    if (control.value != null && control.value.trim().length === 0) {
      return {
        onlyContainSpace: true
      };
    }else{
    return null;
    }
  }
}
