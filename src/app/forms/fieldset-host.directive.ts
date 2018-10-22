import { Directive, Injectable, Self } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';

@Injectable()
export abstract class FieldsetHost {
  abstract readonly hostGroup: FormGroup;

  registerControl(name: string, control: AbstractControl) {
    this.hostGroup.registerControl(name, control);
  }
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fieldsetHost][formGroup]',
  providers: [{ provide: FieldsetHost, useExisting: FieldsetHostDirective }]
})
export class FieldsetHostDirective extends FieldsetHost {

  get hostGroup(): FormGroup {
    if (!this.dir.control) {
      throw new Error(`FieldsetHost#hostGroup is only accessible from OnInit and after.`);
    }
    return this.dir.control as FormGroup;
  }

  constructor(@Self() private readonly dir: ControlContainer) {
    super();
  }

}
