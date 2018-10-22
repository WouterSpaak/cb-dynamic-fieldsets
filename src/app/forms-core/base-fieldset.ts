import { Injectable } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Injectable()
export abstract class BaseFieldset {
  constructor(readonly parent: ControlContainer) {
    console.log(parent.control);
  }
}
