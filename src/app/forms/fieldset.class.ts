import { Injectable, Input, OnInit, SkipSelf } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldsetHost } from './fieldset-host.directive';

@Injectable()
export abstract class BaseFieldset implements OnInit {
  @Input() name: string;
  readonly abstract group: FormGroup;

  constructor(@SkipSelf() private readonly host: FieldsetHost) { }

  ngOnInit() {
    this.host.hostGroup.addControl(this.name, this.group);
  }
}
