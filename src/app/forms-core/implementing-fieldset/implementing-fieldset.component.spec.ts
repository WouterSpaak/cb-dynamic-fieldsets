import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementingFieldsetComponent } from './implementing-fieldset.component';

describe('ImplementingFieldsetComponent', () => {
  let component: ImplementingFieldsetComponent;
  let fixture: ComponentFixture<ImplementingFieldsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementingFieldsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementingFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
