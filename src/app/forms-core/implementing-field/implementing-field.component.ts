import { Component } from '@angular/core';
import { BaseField } from '../base-field';

@Component({
  selector: 'app-implementing-field',
  templateUrl: './implementing-field.component.html',
  styleUrls: ['./implementing-field.component.scss'],
  providers: [{ provide: BaseField, useExisting: ImplementingFieldComponent, multi: true }]
})
export class ImplementingFieldComponent extends BaseField { }
