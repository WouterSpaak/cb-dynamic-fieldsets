import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeFieldsetComponent } from './range-fieldset.component';

describe('RangeFieldsetComponent', () => {
  let component: RangeFieldsetComponent;
  let fixture: ComponentFixture<RangeFieldsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeFieldsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
