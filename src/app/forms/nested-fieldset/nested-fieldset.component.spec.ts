import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFieldsetComponent } from './nested-fieldset.component';

describe('NestedFieldsetComponent', () => {
  let component: NestedFieldsetComponent;
  let fixture: ComponentFixture<NestedFieldsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFieldsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
