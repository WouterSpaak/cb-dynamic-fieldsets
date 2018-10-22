import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFieldset } from '../fieldset.class';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent extends BaseFieldset {
  readonly group = new FormGroup({
    foo: new FormControl('foo'),
    bar: new FormControl('bar', Validators.required)
  });
}
