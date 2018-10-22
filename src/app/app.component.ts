import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly root = new FormGroup({});
  get errors() {
    return reduce(this.root);
  }

  logItAll() {
    console.log(this.root.value);
  }

  force() {
    this.root.get('foo.bar').setValue(null);
    this.root.get(['numbers n shit', 'items', 0]).setValue(100);
    this.root.updateValueAndValidity();
  }
}

export interface ControlErrorPair {
  [control: string]: ControlErrorPair | ValidationErrors | null;
}

export function reduce(control: AbstractControl) {
  const result: ControlErrorPair = {};
  const keys = Object.keys((control as FormGroup | FormArray).controls);
  keys.forEach(key => {
    const child = control.get(key);
    if (child instanceof FormGroup || child instanceof FormArray) {
      result[key] = reduce(child);
    } else {
      result[key] = child.errors;
    }
  });
  return result;
}
