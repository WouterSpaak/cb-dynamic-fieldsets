import { Component } from '@angular/core';
import { BaseFieldset } from '../base-fieldset';

@Component({
  selector: 'app-implementing-fieldset',
  templateUrl: './implementing-fieldset.component.html',
  styleUrls: ['./implementing-fieldset.component.scss'],
  providers: [{ provide: BaseFieldset, useExisting: ImplementingFieldsetComponent, multi: true }]
})
export class ImplementingFieldsetComponent extends BaseFieldset { }
