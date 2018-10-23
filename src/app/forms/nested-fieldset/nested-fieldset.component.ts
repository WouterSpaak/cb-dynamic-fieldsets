import { Component } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { BaseFieldset } from '../fieldset.class';

@Component({
  selector: 'app-nested-fieldset',
  templateUrl: './nested-fieldset.component.html',
  styleUrls: ['./nested-fieldset.component.scss']
})
export class NestedFieldsetComponent extends BaseFieldset {

  readonly group = new FormGroup({}, guardedValidator((g: FormGroup) => {
    const [firstFoo, secondFoo] = ['first.foo', 'second.foo'].map(path => g.get(path));
    const error = firstFoo.value === secondFoo.value ? null : { nonMatch: true };
    runValidatorSideEffect(error, () => secondFoo.setErrors({ fromSideeffect: true }), () => secondFoo.setErrors(null));
    return error;
  }));
}

export function runValidatorSideEffect<T, R>(errors: ValidationErrors, effect: (errors: ValidationErrors) => T, restore: () => R) {
  return errors ? effect(errors) : restore();
}

export function guardedValidator(validatorFn: ValidatorFn) {
  return (c: AbstractControl) => {
    try {
      return validatorFn(c);
    } catch (_) {
      return null;
    }
  };
}
