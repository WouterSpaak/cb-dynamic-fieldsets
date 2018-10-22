import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFieldset } from '../fieldset.class';

@Component({
  selector: 'app-range-fieldset',
  templateUrl: './range-fieldset.component.html',
  styleUrls: ['./range-fieldset.component.scss']
})
export class RangeFieldsetComponent extends BaseFieldset {
  readonly group = new FormGroup({
    items: new FormArray([10, 20, 30, 40, 50].map(val => new FormControl(val, Validators.min(val / 2))))
  });

  get items() {
    return this.group.get('items');
  }
}
