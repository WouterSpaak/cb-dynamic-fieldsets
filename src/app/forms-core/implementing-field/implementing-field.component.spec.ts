import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementingFieldComponent } from './implementing-field.component';

describe('ImplementingFieldComponent', () => {
  let component: ImplementingFieldComponent;
  let fixture: ComponentFixture<ImplementingFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementingFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
