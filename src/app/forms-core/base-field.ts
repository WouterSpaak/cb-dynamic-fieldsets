import { Injectable } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Injectable()
export abstract class BaseField implements ControlValueAccessor {
  constructor(readonly parent: NgControl) {
    this.parent.valueAccessor = this;
  }
  writeValue(obj: any): void {
    // throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }
}
